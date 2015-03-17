---
layout: post.hbs
date: '2014-09-11'
title: "Les services d'AngularJs sont la vie"
categories: [ecrits, article]
tags: [javascript, angularJs]
resume: "Comment créer et utiliser les services d'AngularJs."
images: ["presentation/angularjs-logo.png"]
---
AngularJs est un framework de développement javascript au sens strict du terme. C'est à dire qu'il définit un cadre de travail, mais c'est à nous, développeurs d'applications web, de <i>bien</i> l'utiliser.

Au cours de nos premiers développements d'applications AngularJs, nous voyons assez rapidement les controllers, puis plus tard les directives. Malheureusement j'ai constaté que les services sont très rarement <i>bien</i> utilisés. Pourtant c'est, pour moi, la partie la plus importante et la plus utile de ce framework. En effet, les controllers et les directives permettent de mettre à jour le DOM (les controllers en accès indirect : au travers du $scope ou du this dans la nouvelle forme et les directives en accès direct : au travers du wrapper $element).

Vous allez me dire ça tombe bien, en tant que développeur web, je veux modifier le DOM pour faire apparaître des choses. Mais lorsque votre application grossit d'autres challenges apparaissent : maintenir le code, ne pas avoir de régressions, ajouter de nouvelles features facilement et pourquoi pas de nouveaux développeurs sur mon projet. Et là nous commençons à parler d'architecture, celle-ci se définit essentiellement par le biais des services dans AngularJs.

##Les bases

Un service AngularJs est un singleton, c'est à dire qu'il sera instancié dès qu'on l'utilise et sa vie se terminera en même temps que celle de l'application. Il existe trois grands types de services : service, factory et provider. La différence entre service et factory est un simple new réalisé par AngularJs. Un service sera donc instancié par un new, alors qu'une factory sera simplement appelée et utillisée telle qu'elle. Les providers sont un peu différents car ils permettent en plus d'être configurés avant d'être utilisés.

Afin d'expliquer plus facilement les différents types de services, je vais utiliser tout le temps le même exemple : récupérer une liste d'utilisateurs. Cette liste sera affichée au travers d'un controller toujours identique.

Il existe plusieurs façons de créer ces services mais personnellement je n'en utilise qu'une, afin de faciliter la reprise du code par une tierce personne (encore faut-il que ce nouveau développeur utilise la même façon que moi ;)).

##Factory

Le type factory est le plus simple. Il nous suffit de déclarer une fonction qui retourne un objet contenant les méthodes du service. AngularJs va tout simplement injecter dans nos controllers, directives ou autres services le retour de cette fonction.

<iframe width="100%" height="300" src="http://jsfiddle.net/manland/hq4v7ayp/embedded/js,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

##Service

Le type service est un tout petit peu plus compliqué. Il nous faut fournir une fonction à AngularJs qui sera instanciée par un new. Nous avons donc un contexte et nous pouvons également faire de l'héritage sur ce type de service. Mais attention beaucoup de débats font rage sur la toile entre héritage et composition. Personnellement je préfère la composition, c'est pourquoi j'utilise très rarement ce type de service.

<iframe width="100%" height="300" src="http://jsfiddle.net/manland/Lm77a17r/embedded/js,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe></iframe>

Avant que vous ne criiez très fort, en me disant : "hey, mais moi j'utilise service comme factory !" Et bien oui vous pouvez tout à fait faire ça puisqu'AngularJs va faire un new sur la fonction et utiliser le résultat pour l'injection. Il n'y a aucun problème à faire ça, sauf qu'AngularJs fait un new en plus... pour rien. Mais rassurez-vous il ne le fait qu'une fois. Donc même si vous avez 1000 services il n'y aura que 1000 new en plus ce qui ne représente rien en terme de performances.

##Provider

Ce dernier type est le plus compliqué, mais le plus paramètrable. En effet nous pouvons configurer les propriétés d'un service au démarrage d'AngularJs grâce à la fonction `config` de notre module. Ainsi on va pouvoir donner un comportement différent au service en fonction de notre utilisation de celui-ci. AngularJs contient lui même beaucoup de providers les plus connus sont $httpProvider (pour ajouter un header par exemple) ou le $routeProvider (pour configurer les vues en fonction des routes)...

<iframe width="100%" height="300" src="http://jsfiddle.net/manland/bjy2kacq/embedded/js,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Petit détail pas très important mais rigolo, tous les types de services sont des providers, en quelque sorte ils sont une facilité d'écriture fournie par AngularJs.

##Dans une application

Personnellement je n'utilise que des factory, je ne vois pas l'intérêt des services (en tout cas dans la forme décrite plus haut, il m'arrive de l'utiliser comme une factory car le mot service est plus parlant que factory) et pour les  providers je pense que la seule utilisation valable est lorqu'on fait une librairie.

En effet, comme je l'ai dit précédemment, je suis partisan de la composition plutôt que de l'héritage. En d'autres termes un service A utilise un service B au lieu d'en hériter. Si les deux ont une fonction commune, pour ne pas copier son code il suffit de créer un service C qui sera utilisé par les 2 autres. L'utilisation de service devient donc inappropriée contrairement à factory.

Attention, je ne dis pas qu'il faut faire ça à tout prix. Il suffit de choisir et de rester fidèle à sa philosophie, jusqu'à ce qu'un collègue vous convainque du contraire ;).
