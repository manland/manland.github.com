---
layout: post.hbs
date: '2014-10-03'
title: "Proposition d'une architecture AngularJs"
categories: [ecrits, article]
tags: [javascript, angularJs, architecture]
resume: "Comment bien architecturer une application AngularJs."
images: ["presentation/angularjs-logo.png"]
---
Lorsque l'on découvre AngularJs, on commence souvent par de petits exemples avec un ou deux controllers et une ou deux vues. La magie opère et on peut rapidement commencer à faire notre petite application.

En général ça marche bien, jusqu'à ce qu'on ait 10, 20 ou 30 vues, autant de controllers et plusieurs dizaines (pour ne pas dire centaines) de lignes de code par controller. A ce moment là, notre application commence à être difficilement maintenable. Les tests sont généralement passés à la trappe et nos collègues ne peuvent pas reprendre notre code car ils ne comprenent plus rien.

Mais alors comment faire ? Je vais essayer de vous présenter une solution possible à ce difficile problème qui est : comment bien architecturer une application AngularJs ? Je dis bien essayer car dans ce domaine il y a autant de possibilités que de développeurs, ici je vais vous présenter mon point de vue.

Pour bien faire il nous suffit de déplacer ce qui correspond à 80% de notre application : le code métier, dans des services. Si vous n'êtes pas sûr de bien connaître les services et les moyens de les créer n'hésitez pas à lire ou relire <a href="/posts/2014-09-11-article-angular-service-is-life.html">les services c'est la vie</a>.

##Exemple concret

Je ne sais pas pour vous, mais personnellement je comprends mieux les concepts lorsque je les applique sur un cas concret, un cas de tous les jours. Ici je prends l'exemple de la récupération des utilisateurs de mon application.

<div class="code">
	<div class="code-filename">view.tpl.html</div>

```html
  <div ng-controller="myCtrl">
    <ul>
      <li ng-repeat="user in users">{{user.name}}</li>
    </ul>
  </div>
```

</div>

<div class="code">
	<div class="code-filename">myCtrl.js</div>

```javascript
angular.module('app').controller('myCtrl', [
  '$scope', '$http',
  function($scope, $http) {
    $http.get('users').then(function(users) {
      $scope.users = users;
    });
  }
]);
```

</div>

Si vous exécutez ce petit code, il marchera et même très bien. Mais je vais vous montrer comment le transformer pour qu'il marche toujours si : vous réutilisez cette vue dans une autre partie de l'application, ou encore si vous souhaitez réutiliser la liste des utilisateurs dans une autre partie de votre code. Ce qui entre nous correspond à 90% des cas dans de "vraies applis" mais malheureusement à 0% des tutos sur le net.

<div class="code">
	<div class="code-filename">myCtrl.js</div>

```javascript
angular.module('app').controller('myCtrl', [
  '$scope', 'mySrv',
  function($scope, mySrv) {
    mySrv.getUsers().then(function(users) {
      $scope.users = users;
    });
  }
]);
```

</div>

<div class="code">
	<div class="code-filename">mySrv.js</div>

```javascript
angular.module('app').factory('mySrv', [
  '$http',
  function($http) {

    var usersPromise;

    return {
      getUsers: function getUsers() {
        if(usersPromise === undefined) {
          usersPromise = $http.get('users');
        }
        return usersPromise;
      }
    }
  }
]);
```
</div>

En déplaçant simplement l'appel au serveur dans un service et en retenant la promesse, j'ai mis en cache mes utilisateurs. Ainsi je peux appeler dans toute mon application `mySrv.getUsers()` pour récupérer ma liste.

Cerise sur le gateau, en utilisant un service je rends très facile son test. Vous allez me dire que pour le moment il n'y a pas grand chose à tester. Qu'à cela ne tienne, imaginons que nous souhaitions ajouter un avatar par défaut si notre utilisateur n'en a pas, un compte du nombre de messages postés et pourquoi pas le temps depuis sa dernière connexion.

<div class="code">
	<div class="code-filename">mySrv.js</div>

```javascript
angular.module('app').factory('mySrv', [
  '$http', 'UserCst',
  function($http, userCst) {

    var usersPromise;

    return {
      getUsers: function getUsers() {
        if(usersPromise === undefined) {
          usersPromise = $http.get('users').then(function(users) {
            users.forEach(function(user) {
              user.avatar = user.avatar || userCst.defaultAvatar;
              user.nbComments = user.comments.length;
              var lastCon = user.connexions[user.connexions.length-1];
			  user.lastConnexion = moment(lastCon).fromNow();
            });
            return users;
          });
        }
        return usersPromise;
      }
    }
  }
]);
```

</div>

Ce n'est pas mal, mais ce code n'est pas très explicite. En d'autres termes, je dois lire le contenu de ces lignes pour comprendre ce qu'il fait. Certe je pourrai commenter cette fonction en expliquant ce qu'elle fait, mais personnellment, je préfère réserver mes commentaires pour des parties techniques.

Au lieu de commenter je vais couper en plus petits bouts. J'aime bien le principe d'une classe pour une chose; fait une seule chose mais fait le bien.

<div class="code">
	<div class="code-filename">ServerSrv.js</div>

```javascript
angular.module('app').factory('ServerSrv', [
  '$http',
  function($http) {

    return {
      get: function get(url) {
        return $http.get(url);
      }
    };

  }
]);
```

</div>
<div class="code">
	<div class="code-filename">UserSrv.js</div>

```javascript
angular.module('app').factory('UserSrv', [
  'ServerSrv', 'UserCst', 'UserConfigSrv',
  function(serverSrv, userCst, userConfigSrv) {

    return {
      getUsers: function getUsers() {
        return serverSrv.get(userCst.url).then(function(users) {
        	users.forEach(function(user) {
        		userConfigSrv.config(user);
        	});
    	});
      }
    };

  }
]);
```

</div>

Au lieu de créer un service UserConfigSrv, j'aurai pu faire une simple fonction à ce niveau là. Mais imaginons que je souhaite réutiliser cette fonction (qui configure un avatar, un nombre de commentaires et la dernière connexion) dans un service d'inscription. Je ne pourrai pas, sauf à la rendre publique. Mais alors, au milieu des fonctions de get, update ou delete j'aurai une configuration qui n'aura rien à voir. Je préfère donc la sortir dans son propre service. De plus, en réalisant cette opération, il sera bien plus facile de tester (oui oui rappelez-vous la cerise de toute à l'heure) le métier de cette mini-application à savoir la configuraiton de mon utilisateur.

<div class="code">
	<div class="code-filename">UserConfigSrv.js</div>

```javascript
angular.module('app').factory('UserConfigSrv', [
  'UserCst',
  function(userCst) {

    return {
      config: function config(user) {
        user.avatar = user.avatar || userCst.defaultAvatar;
		user.nbComments = user.comments.length;
		var lastCon = user.connexions[user.connexions.length-1];
		user.lastConnexion = moment(lastCon).fromNow();
      }
    };

  }
]);
```

</div>

Ainsi je peux très facilement tester les quelques lignes "métier" de mon application. Oh bien sûr, ce n'est pas énorme, mais si vous appliquez ce pattern à toute votre application, il sera tout aussi facile de maintenir et tester vos parties vraiment essentielles. Tout le reste n'est que technique et là dessus AngularJs le fait bien mieux que vous !

##En image

Pour ceux, qui comme moi, aime bien avoir une vue d'ensemble, voici quelques schémas. Nous sommes donc parti d'une situation relativement simple :

<center class="brodered-image">
<img src="/assets/images/article/angularproposalarchitecture/angular-proposal-architecture-simple.png">
</center>

Puis nous avons ajouter un service afin de gérer un petit cache de nos utilisateurs. De plus ça nous a permis de pouvoir tester plus facilement notre application.

<center class="brodered-image">
<img src="/assets/images/article/angularproposalarchitecture/angular-proposal-architecture-first-srv.png">
</center>

Enfin nous avons réalisé une vrai architecture d'application, où chaque fichier (et donc entité javascript) fait une seule chose mais la fait bien. Si un bug surgit dans notre application il devient alors plus facile d'en déduire la source. Si c'est un bug visuel `myCtrl` sera en cause, un bug métier lié à la vue proviendra de `mySrv`, un pur bug métier de `UserSrv` et enfin un bug réseau de `ServerSrv`. Mais étant donné que chaque partie sera testée il n'y aura pas de bug ;). De plus chaque brique est réutilisable pour une autre partie de notre application.

<center class="brodered-image">
<img src="/assets/images/article/angularproposalarchitecture/angular-proposal-architecture-complexe.png">
</center>

##Allons un peu plus loin

Dans toutes mes applications j'interdis d'avoir plus de 2 injections dans les controllers. Ceux-ci sont toujours $scope et un service réservé à cette vue. Tout simplement car sur l'exemple ci-dessus mySrv devrait être userSrv ou quelque chose comme ça (et donc mySrv devrait appeler ce userSrv qui lui même appellerait networkSrv). Cela permet de réellement séparer la vue du métier, car sans l'accès à $routeParams, $cookie ou je ne sais quoi d'autre le développeur est bien obligé de déplacer la logique métier.

Dans ce controller il ne reste alors plus que quelques lignes de code servant essentiellement à faire le raccord entre le code html et le monde d'AngularJs. Les services de vues permettent quant à eux de faire le raccord entre notre vue et le reste de l'application.

C'est un peu dur au début, beaucoup ont pesté après moi, mais en général les développeurs comprennent vite l'intérêt d'une telle architecture après leur premier refactor dans une "vraie application" javascript !
