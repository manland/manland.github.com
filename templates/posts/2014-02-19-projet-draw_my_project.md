---
layout: post.hbs
date: '2014-02-19'
title: Draw_my_project
categories: [projet, personnel]
tags: [grunt, javascript, nodejs, angularJs, d3, graphe]
resume: Cette tâche grunt, permet de transformer votre code en magnifique graphes.
images: ["project/Javascript/DrawMyProject/skimbo.png", "project/Javascript/DrawMyProject/goo.png", "project/Javascript/DrawMyProject/sturvive.png", "project/Javascript/DrawMyProject/2.png", "project/Javascript/DrawMyProject/4.png", "project/Javascript/DrawMyProject/5.png", "project/Javascript/DrawMyProject/6.png", "project/Javascript/DrawMyProject/7.png", "project/Javascript/DrawMyProject/8.png"]
---
Version courte :

Je viens de commencer un petit plugin grunt qui analyse vos sources js et en sort un ensemble de graphiques afin de mieux gérer vos sources (dépendances, tailles, nom...).

Si vous voulez voir ce que ça donne c'est par [là](http://manland.github.io/draw-my-project/) (dans la partie [showcase](http://manland.github.io/draw-my-project/#showcases)), si vous souhaitez le tester suivez la [procédure](https://github.com/manland/draw-my-project#getting-started) et n'hésitez pas à me faire des [retours](https://github.com/manland/draw-my-project/issues?state=open) !

<center>
<img src="/assets/images/project/Javascript/DrawMyProject/2.png">
</center>

Version un peu plus longue :

Nous venons de commencer à utiliser AngularJs dans ma boite. Je suis l'instigateur de ce changement, j'ai donc pas mal de responsabilité, notamment si ça ne marche pas... (je vous rassure tout de suite ça marche très bien :D) !

Jusqu'à maintenant nous utilisions GWT et donc tout l'écosystème java qui va bien. La grande question qu'on me pose tous les jours est : "Si je touche à ce code, comment savoir ce qui va être impacté ?" (sous entendu : "car en java le compilo me jette ou encore avec tous les IDE j'ai call-hierarchie..."), à ça je répond : "Comme tout est testé tu ne feras pas de regression si telle est ta question" -__-' enfin bon, quand même, je ne suis pas toujours sûr qu'on ait tous bien fait notre boulot (alalala les tests !) ;)

Donc je me suis dit, ce qui serait top, c'est un outils qui "dessine les dépendances" de mon projet. Et bien, le [voila](http://manland.github.io/draw-my-project/) !

<center>
<img src="/assets/images/project/Javascript/DrawMyProject/4.png">
</center>

Au fur et à mesure de son utilisation, au boulot, je me suis rendu compte qu'en plus de "dessiner" les dépendances, je pouvais en profiter pour faire émerger les "non applications" de mes conseils (enfin par ricocher : ceux de Thierry :D c'est lui qui ma tout appris :p) Et j'ai donc décidé de rajouter les "Advices" (conseils pour les anglophobes) !

A l'heure actuelle cette petite tâche grunt vous signalera les anomalies suivantes :

 * Une entité Js (controller, factory, service, filter, directive...) doit avoir le même nom que son fichier (et donc une seule entité par fichier).
 * Une entité sans dépendance et qui n'est injectée dans aucun autre fichier est sûrement inutile (petit bémol pour les filters et directives).
 * Ne jamais utiliser $rootScope !
 * La taille des controllers doit faire moins de 20% de la taille des services.
 * Une entité ne doit pas avoir plus de 5 dépendances.
 * Un controller ne doit dépendre que de son $scope et d'un service (qui lui est réservé). 

Voici le [draw](http://manland.github.io/draw-my-project/showcases/skimbo/index.html#/) de mon premier projet AngularJs, il ne respecte aucune de ces règles :D

<center>
<img src="/assets/images/project/Javascript/DrawMyProject/5.png">
</center>

Souvent on me dit que je suis trop strict (vous devriez voir le jshint du boulot :p), j'ai donc fait en sorte de pouvoir désactiver ses advices. De plus, d'autres sont en cours de développement :

 * Un controller doit avoir un nom finissant par Controller ou Ctrl (paramétrable)
 * Un service doit avoir un nom finissant par Service ou Srv (paramétrable)
 * ... [Ajoutez les votres](https://github.com/manland/draw-my-project/issues?state=open) !

Bref mes collègues ont tellement kiffé que je dois l'adapter pour [java](https://github.com/manland/draw-my-project/issues/35) (les backends sont jaloux :D mais où vas le monde !?). Il est compatible AngularJs, RequireJs, NodeJs et donc bientôt Java !

Si vous avez 5 minutes demain matin au boulot (ou chez vous, GG les indeps :p) testez le s'il vous plaît. Avant de le balancer sur npm et autres, j'ai besoin de bêta-testeurs.

Si vous avez le moindre problème : direction le [bug tracker](https://github.com/manland/draw-my-project/issues?state=open) !

Si vous avez une nouvelle idée de la mort qui tue c'est [pareil](https://github.com/manland/draw-my-project/issues?state=open) !

Et enfin si vous l'avez utilisé et découvert ne serait-ce qu'une anomalie (qui parle d'un $http injecté dans votre controller alors que vous avez un magnifique NetworkService qui gère votre token !?), s'il vous plaît, dites [le moi](https://github.com/manland/draw-my-project/issues?state=open) et si c'est possible pour vous, faites une issue ou une PR avec votre draw, je me ferais un plaisir de l'ajouter dans le [showcase](http://manland.github.io/draw-my-project/#showcases) du site ;)

<div class="container-link">
  <a href="http://manland.github.io/draw-my-project/" target="_blank">Site</a>
  <a href="https://github.com/manland/draw-my-project" target="_blank">Github</a>
</div>
