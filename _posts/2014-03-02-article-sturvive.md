---
layout: post
title: Pourquoi Sturvive est si moche mais si cool ?
categories: [ecrits, article]
tags: [javascript, vanilla-js, jeu, 3D, webgl, concours]
resume: Retour sur ce jeu, qui est très moche mais qui a gagné le concours de mozilla/goo.
images: ["/img/article/sturviveisugly/win1.png"]
---
Cet article a pour but d'expliquer pourquoi [Sturvive](http://manland.github.io/sturvive/) est si laid graphiquement mais aussi et surtout quels sont ses points forts.

#Qu'est-ce qu'un jeu ?

<center>
<img title="image jeu" src="/img/article/sturviveisugly/chartGame.png">
</center>

Pour moi, un bon jeu est capable d'allier la jouabilité au plaisir de jouer, ce plaisir est plus grand lorsque les graphismes sont immersifs. Enfin, ce jeu doit être jouable par tous.

#Un concours a une fin

Lorsque j'ai entendu parler du [goo challenge by mozilla](https://blog.mozilla.org/blog/2013/12/05/unleash-the-game-creator-in-you-by-entering-our-holiday-gaming-competition/), j'avais envie de découvrir le monde de la 3D. Mais, au vue de la deadline (1 mois) je savais dès le départ qu'il faudrait que je fasse des compromis.

Le seul point sur lequel je ne ferais jamais de compromis est, bien sûr, la compatibilité. Attention, je ne suis pas en train de dire que j'ai fait un jeu en webGL compatible IE6. 

Non, pour moi être compatible, cela veut dire pousser au maximum les limites de ce qu'on peut faire avec ce qu'on a. Et surtout dire à l'utilisateur pourquoi il ne peut pas jouer.

#Un jeu doit être jouable

Combien de fois suis-je tombé sur des applications web où la page est toute blanche ? Quelle frustration ! Pour éviter cela j'ai développé une page de [compatibilité](https://github.com/manland/sturvive/blob/master/app/src/util/CompatibilityUtil.js). C'est très facile à réaliser et ainsi tous vos utilisateurs savent à quoi s'en tenir.

<center>
<img title="page compatibilité" src="/img/article/sturviveisugly/compatibilityFr.png">
</center>

J'avais déjà réalisé une telle page sur un [précédent jeu](http://froggies.github.io/game-off-2013/), maintenant j'en ajoute toujours une, même dans mes projets professionnels.

Ensuite, la compatibilité doit permettre à des appreils vieillissants de pouvoir lancer le jeu. J'ai un vieux PC, enfin vieux, tout est relatif. Il a 3 ans, pour moi ce n'est pas vieux ! De la part d'un développeur féru de nouvelles technologies ça peut paraître étrange mais je veux qu'une machine vieillissante comme la mienne affiche de la 3D. Quitte à réduire le nombre de mesh, à réduire la taille du canvas, qu'importe, le but est bel et bien de jouer.

<center>
<img title="page options" src="/img/article/sturviveisugly/optionFr.png">
</center>

#Le joueur doit comprendre le jeu

Quoi de plus frustrant que d'avoir un magnifique jeu mais où on ne comprend rien ? Avec [Sturvive](http://manland.github.io/sturvive/), je ne suis arrivé à ce que le jeu ce comprenne de lui même. Par contre j'ai rajouté une aide très descriptive, malheureusement peu de joueurs lisent l'aide.

<center>
<img title="page aides" src="/img/article/sturviveisugly/aideFr.png">
</center>

Comme 2eme solution j'ai céé des niveaux d'entrainement, il aurait manqué un petit tutorial in-game pour que le joueur soit guidé tout au long de sa progression, mais je n'ai clairement pas eu assez de temps.

Enfin, sur la version PC, où il y a un peu plus de place, j'ai rajouté des indications visuelles, mais entre nous c'est tellement moche que j'aurai pu m'abstenir, surtout si j'avais su que tous les [screenshots](http://blog.gootechnologies.com/post/75475795798/the-winners-of-the-mozilla-goo-game-creator) seraient fait sur PC :D

<center>
<img title="annonces résultats" src="/img/article/sturviveisugly/win.png">
</center>

#Et donc Sturvive est moche

Vous l'aurez compris, découvrir le monde de la 3D, la librairie de [goo](www.gootechnologies.com) : goo engine, le développement web mobile, vouloir que mon jeu soit jouable et compréhensible, tout ça en 1 mois avec noël au milieu ! Ne m'a pas permis de prendre du temps pour les graphismes.

De plus, je suis un développeur qui n'a pas de goût. Si vous me demandez de choisir entre 2 couleurs, à coup sûr je prends la moche. Je ne pouvais donc pas me baser sur ça pour créer un jeu.

L'idée de jeu ? Elle s'est imposée à moi par dépit. En effet, l'espace : quelques boulles blanches pour simuler des étoiles et hop tout un univers est créé. On rajoute quelques boulles oranges pour avoir des météorites, on a plus qu'à les dégommer et le jeu est créé.

Pour rajouter du challenge, on modifie quelques variables afin de créer des niveaux différents. Et voila on obtient [Sturvive](http://manland.github.io/sturvive/).

#Mais Sturvive est cool

Pour résumer, nous avons un jeu compatible, ou qui explique clairement à l'utilisateur pourquoi il ne peut pas jouer. 
Des options pour gérer la qualité du rendu mais aussi et surtout permettre aux petites configurations matérielles de pouvoir jouer.
Tout le jeu est complètement traduit en français et en anglais.
Il est accessible depuis un ordinateur et un téléphone mobile.

Je peux déployer une nouvelle version avec une [seule commande](https://github.com/manland/sturvive/blob/master/Gruntfile.js#L205), grâce à [Grunt](http://gruntjs.com/). Tout le [JS](https://github.com/manland/sturvive/blob/gh-pages/Sturvive-0.0.1.js) est minifié et le [CSS](https://github.com/manland/sturvive/blob/gh-pages/stylesheet/Sturvive-0.0.1.css) est concaténé en production afin d'obtenir un temps de chargement record.

#Remerciements

Je remercie [GooTechnologie](www.gootechnologies.com) et [Mozilla](http://www.mozilla.org/) pour avoir organisé ce concours et en général pour tout le travail qu'ils fournissent dans le monde du WebGl.

Mes premiers béta-testeurs [Audrey](https://twitter.com/udr3y/), [Laurent](https://twitter.com/_LaurentDufour), [Matthieu](https://twitter.com/Mattrio23), [Julien](https://twitter.com/studiodev), [Vivian](https://twitter.com/vp3n), [Adeline](https://twitter.com/adedib/) et tous [mes collègues de boulot](http://itkweb.github.io/site-h-day/equipe.html) pour leurs conseils et leurs encouragements.

Et github qui héberge la plus part de mes créations dont [Sturvive](http://manland.github.io/sturvive/).

*Relecteurs : [Audrey](https://twitter.com/udr3y/)*