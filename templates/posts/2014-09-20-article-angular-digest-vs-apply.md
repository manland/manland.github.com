---
layout: post.hbs
date: '2014-09-20'
title: "$scope.$disgest vs $scope.$apply"
categories: [ecrits, article]
tags: [javascript, angularJs]
resume: "Comment AngularJs rafraîchit la vue par rapport au modèle et vice versa."
images: ["presentation/angularjs-logo.png"]
---
Lorsqu'on veut aller plus loin avec <a href="https://angularjs.org/" class="link-pink">AngularJs</a>, on doit comprendre les mécanismes internes de ce framework. L'un des plus important est la façon dont il gère le rafraîchissement de la vue par rapport au modèle et le contraire.

A première vue, AngularJs paraît complexe, mais en réalité il est très simple de comprendre comment il fait pour maintenir à jour la vue et le modèle. A chaque fois que vous faites un &#123;{ data }} dans le dom AngularJs fait un $scope.$watch('data', functionCallback). C'est tout simplement un écouteur sur la propriété data du $scope. Donc lorsqu'il y aura une modification de $scope.data AngularJs appellera functionCallback qui mettra à jour le dom html avec la nouvelle valeur.

La question suivante est donc, quand et comment AngularJs va détecter une modification de $scope.data ?

Imaginons un premier cas simple où l'on va mettre à jour cette donnée après 1 seconde grâce à la fonction setTimeout de javascript :

<div class="code">
	<div class="code-filename">myCtrl.js</div>

```javascript
angular.module('app').controller('myCtrl', [
	'$scope',
	function($scope) {
		$scope.data = 1;
		setTimeout(function() {
			$scope.data = 2;
		}, 1000);
	}
]);
```

</div>

Si vous exécutez ce code il ne se passera rien. En effet, $scope.data = 2 est en dehors d'AngularJs il ne saura donc pas que le $scope a changé et ne mettra pas à jour la vue. Après une petite recherche sur le net on nous apprend qu'il faut un $scope.$apply() après avoir mis à jour $scope.data pour qu'AngularJs lance une phase de digestion.

<div class="code">
	<div class="code-filename">myCtrl.js</div>

```javascript
angular.module('app').controller('myCtrl', [
	'$scope',
	function($scope) {
		$scope.data = 1;
		setTimeout(function() {
			$scope.data = 2;
			$scope.$apply();
		}, 1000);
	}
]);
```

</div>

Mais qu'est-ce qu'une phase de digestion ? C'est tout simplement une visite de tous les scopes de l'application, si il y a une modification sur une propriété du $scope on appelle les functionCallback des $watch (rappelez vous on en a parlé juste au dessus). On peut simplifier le code du scope comme ça :

<div class="code">
	<div class="code-filename">same-as-scope.js</div>

```javascript
var watchers = [/*{data: [callbakcs]}*/];

$scope.watch = function(data, callback) {
	watchers[data] = watchers[data] || [];
	watchers[data].push(callback);
};

$scope.visit = function() {
	for(var data in watchers) {
		if(isModified(data)) {
			watchers.forEach(function(callback) {
				callback();
			});
		}
	}
	childrenScope.forEach(function(childScope) {
		childScope.visit();
	});
}
```

</div>

Heu, je pige pas pourquoi on fait un $scope.$apply() alors qu'on pourrait faire un $scope.$digest(), surtout que ce dernier ressemble furieusement à la digestion !?

On comprend très rapidement en allant voir l'implémentation de $scope.$apply(), il pourrait être simplifié en :

<div class="code">
	<div class="code-filename">same-as-rootscope.js</div>

```javascript
$rootScope.$digest = function() {
	childrenScope.forEach(function(childScope) {
		childScope.visit();
	});
}

$scope.$apply = function() {
	$rootScope.$digest();	
};
```

</div>

Donc lorsqu'on appelle $scope.$apply() en réalité on lance une phase de digestion sur le $rootScope, qui est le père de tous les scopes, et va donc visiter tous les scopes de votre application.

Petite rectification, depuis le début je vous dis qu'on visite les scopes (pour suivre le pattern visitor bien évidemment), en réalité on ne visite pas un scope on le digère. En effet, la fonction visit est la fonction $digest.

Mais alors doit-on appeler $scope.$apply() ou $scope.digest() ? Si on suit les recommandations d'AngularJs il faut uniquement appeler $scope.$apply(), en effet si une modification de $scope génère une modification d'un autre $scope plus haut dans la hiérarchie de scopes et donc du dom html, nos modifications ne seront pas répercutées.

Par contre si vous savez exactement ce que vous faites un $scope.$digest() sera forcément plus performant qu'un $scope.$apply(). Mais n'oubliez pas que c'est de l'ordre de la micro-optimisation.

##Exemple concret

Je ne sais pas pour vous mais moi j'aime bien valider ce qu'on m'explique. Pour réaliser cet article j'ai donc créé deux petites applications AngularJs. La première va émettre un $scope.$digest() lors d'une modification. La deuxième un $scope.$apply(). Testez par vous même en créant des scopes et en modifiant la donnée (qui n'est rien d'autre qu'un compteur s'incrémentant).

<iframe width="100%" height="300" src="http://jsfiddle.net/manland/agnnrdL8/embedded/result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

La même application mais avec $scope.apply() au lieu de $scope.$digest().

<iframe width="100%" height="300" src="http://jsfiddle.net/manland/98g6bx6s/embedded/result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

N'hésitez pas à aller voir le code, à le modifier et à jouer avec tout ça !

##Pour aller plus loin

Dans AngularJs qu'est ce qui appelle $apply pour nous ?

On ne va pas se le cacher, la grande force d'AngularJs est sa magie qui fait instantanément refléter l'update de notre modèle sur notre vue et vice versa. Mais comme nous venons de le voir cette magie est en réalité un simple visitor pattern câblé avec un observer/observator pattern.

Pour que la magie opère, AngularJs réalise un $rootScope.$digest() à notre place dans les composants suivant : 

<ul>
	<li>$scope lorsqu'on appelle $apply comme nous venons de le voir.</li>
	<li>$browser lorsque l'événement routeChange est émis.</li>
	<li>$http lorsqu'une requête est finie.</li>
	<li>$interval / $timeout après avoir appelé la fonction de callback.</li>
	<li>ngClick donc lorsque l'utilisateur clique sur un élément html, AngularJs appelle la fonction de callback et fait une digestion globale.</li>
	<li>textInput /radioButton / checkBox / ngOption... en gros la plupart des directives fournies par AngularJs</li>
</ul>

Comme vous l'avez compris, il n'y a quasiment jamais besoin d'appeler explicitement $digest() ou $apply(), mais dans les rares cas où c'est nécessaire, je ne saurais que trop vous conseiller d'utiliser $scope.$evalAsync(). Cette fonction qui ne fait rien d'autre que d'attendre la fin de la digestion courante (s'il y en a une), et lancer un $rootScope.$digest().