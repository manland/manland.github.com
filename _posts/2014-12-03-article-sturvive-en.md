---
layout: post
title: Why Sturvive is ugly but really cool ?
category: brouillon
tags: [javascript, vanilla-js, jeu, 3D, webgl, concours, english]
resume: The story of the game, wich is ugly but wich won the goo mozilla contest.
images: ["/img/article/sturviveisugly/win1.png"]
---
This article wants to explain why [Sturvive](http://manland.github.io/sturvive/) has a graphical so ugly but also what are it's goods points.

##What's a game ?

<center>
<img title="image jeu" src="/img/article/sturviveisugly/chartGame.png">
</center>

To me, a good game is union between gameplay and game's pleasure, the pleasure is growing high by graphics. And this game must be playable by every people.

##A contest has a deadline

When I have heard about the [goo challenge by mozilla](https://blog.mozilla.org/blog/2013/12/05/unleash-the-game-creator-in-you-by-entering-our-holiday-gaming-competition/), I had desire to discover the 3D world. But, with the so near deadline (1 month) I knew who I will must do compromise.

The only point on what i will never do compromise is, of course, the compatibility. Be carefull, I don't tell I have realised a compatible 3d game IE6. 

No, for me be compatible, is to push the limits on what we can do with what we have. And, when it is not compatible, explain to the user why he can not play.

##A game must be playable

How many times I have found websites where the page is definitively white and empty ? How frustrating! To avoid this I have developped a [compatibility](https://github.com/manland/sturvive/blob/master/app/src/util/CompatibilityUtil.js) page. It's very easy to realise and with it all users can have a answer clear and direct on its troubles.

<center>
<img title="page compatibilité" src="/img/article/sturviveisugly/compatibilityFr.png">
</center>

I have already realised a same page on a [previous game](http://froggies.github.io/game-off-2013/), now I add one on all my projects, and also in my professional projects.

Then, the compatibility must allow to old computers to run the game. I have an old PC, old... it's relative. It has 3 years, for me it's not old ! From a developer, lover of all last technologies is strange but i want an old computer, like mine, displays a simple 3d game. If for that, i need to decrease the number of meshes, decrease the canvas size, anyway the ultimate goal is to play.

<center>
<img title="page options" src="/img/article/sturviveisugly/optionFr.png">
</center>

##Le joueur doit comprendre le jeu

Quoi de plus frustrant que d'avoir un magnifique jeu mais où on ne comprend rien ? Avec [Sturvive](http://manland.github.io/sturvive/), je ne suis pas arrivé à ce que le jeu se comprenne de lui même. Par contre j'ai rajouté une aide très descriptive, malheureusement peu de joueurs lisent l'aide.

<center>
<img title="page aides" src="/img/article/sturviveisugly/aideFr.png">
</center>

Comme 2ème solution j'ai créé des niveaux d'entrainement, il manque un petit tutorial in-game pour que le joueur soit guidé tout au long de sa progression, mais je n'ai clairement pas eu assez de temps.

Enfin, sur la version PC, où il y a un peu plus de place, j'ai rajouté des indications visuelles, mais entre nous c'est tellement moche que j'aurais pu m'abstenir, surtout si j'avais su que tous les [screenshots](http://blog.gootechnologies.com/post/75475795798/the-winners-of-the-mozilla-goo-game-creator) seraient fait sur PC :D

<center>
<img title="annonces résultats" src="/img/article/sturviveisugly/win.png">
</center>

##Et donc Sturvive est moche

Vous l'aurez compris, découvrir le monde de la 3D, la librairie de [goo](www.gootechnologies.com) : goo engine, le développement web mobile, vouloir que mon jeu soit jouable et compréhensible, tout ça en 1 mois (avec noël au milieu !) ne m'a pas permis de prendre du temps pour les graphismes.

De plus, je suis un développeur qui n'a pas de goût. Si vous me demandez de choisir entre 2 couleurs, à coup sûr je prends la moche. Je ne pouvais donc pas me baser sur ça pour créer un jeu.

L'idée de jeu ? Elle s'est imposée à moi par dépit. En effet, l'espace : quelques boules blanches pour simuler des étoiles et hop tout un univers est créé. On rajoute quelques boules oranges pour avoir des météorites, on a plus qu'à les dégommer et le jeu est créé.

Pour rajouter du challenge, on modifie quelques variables afin de créer des niveaux différents. Et voila on obtient [Sturvive](http://manland.github.io/sturvive/).

##Mais Sturvive est cool

Pour résumer, nous avons un jeu compatible, ou qui explique clairement à l'utilisateur pourquoi il ne peut pas jouer. 
Des options pour gérer la qualité du rendu mais aussi et surtout permettre aux petites configurations matérielles de pouvoir jouer.
Tout le jeu est complètement traduit en français et en anglais.
Il est accessible depuis un ordinateur et un téléphone mobile.

Je peux déployer une nouvelle version avec une [seule commande](https://github.com/manland/sturvive/blob/master/Gruntfile.js#L205), grâce à [Grunt](http://gruntjs.com/). Tout le [JS](https://github.com/manland/sturvive/blob/gh-pages/Sturvive-0.0.1.js) est minifié et le [CSS](https://github.com/manland/sturvive/blob/gh-pages/stylesheet/Sturvive-0.0.1.css) est concaténé en production afin d'obtenir un temps de chargement record.

Le jeu propose 4 types de cartes différentes, 18 niveaux et 6 améliorations pour votre vaisseau. Ce qui permet de jouer, en moyenne, une vingtaine de minutes.

Depuis la fin du concours j'ai rendu possible son installation sur [Firefox OS](http://www.mozilla.org/fr/firefox/os/). Et je vais le proposer, très prochainement, au [market de Firefox OS](https://marketplace.firefox.com).

Pour l'avenir ? Je ne sais pas du tout, si j'ai le temps je ferai bien une version multi-joueur. Qu'en pensez-vous ?

##Remerciements

Je remercie [GooTechnologie](www.gootechnologies.com) et [Mozilla](http://www.mozilla.org/) pour avoir organisé ce concours et en général pour tout le travail qu'ils fournissent dans le monde du WebGl.

Mes premiers béta-testeurs [Audrey](https://twitter.com/udr3y/), [Laurent](https://twitter.com/_LaurentDufour), [Matthieu](https://twitter.com/Mattrio23), [Julien](https://twitter.com/studiodev), [Vivian](https://twitter.com/vp3n), [Adeline](https://twitter.com/adedib/) et tous [mes collègues de boulot](http://itkweb.github.io/site-h-day/equipe.html) pour leurs conseils et leurs encouragements.

Ainsi que github qui héberge la plus part de mes créations dont [Sturvive](http://manland.github.io/sturvive/).

*Relecteurs : [Audrey](https://twitter.com/udr3y/), [Laurent](https://twitter.com/_LaurentDufour), [Jérémy](http://itkweb.github.io/site-h-day/equipes/2013/10/07/jeremy.html), [Marine](http://itkweb.github.io/site-h-day/equipes/2013/09/09/marine.html), [Vivian](https://twitter.com/vp3n), [Julien](https://twitter.com/studiodev)*
