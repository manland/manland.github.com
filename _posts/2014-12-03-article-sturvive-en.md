---
layout: post
title: Why Sturvive is ugly but really cool ?
category: brouillon
tags: [javascript, vanilla-js, jeu, 3D, webgl, concours, english]
resume: The story of the game, which is ugly but which won the goo mozilla contest.
images: ["/img/article/sturviveisugly/win1.png"]
---
This article explains why [Sturvive](http://manland.github.io/sturvive/) has a graphical so ugly but also what are it's goods points.

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
<img title="page compatibilité" src="/img/article/sturviveisugly/compatibilityEn.png">
</center>

I have already realised a same page on a [previous game](http://froggies.github.io/game-off-2013/#en), now I add one on all my projects, and also in my professional projects.

Then, the compatibility must allow to old computers to run the game. I have an old PC, old... it's relative. It has 3 years, for me it's not old ! From a developer, lover of all last technologies is strange but i want an old computer, like mine, displays a simple 3d game. If for that, i need to decrease the number of meshes, decrease the canvas size, anyway the ultimate goal is to play.

<center>
<img title="page options" src="/img/article/sturviveisugly/optionEn.png">
</center>

##The player must understood the game

What's more frustrating than have a beatiful but ununderstandable game ? With [Sturvive](http://manland.github.io/sturvive/), I don't succeeded to realise a game self-understanding. But I have added a descriptive help, unfortunately the players don't read help.

<center>
<img title="page aides" src="/img/article/sturviveisugly/aideEn.png">
</center>

For a second solution i have created three training levels, is missing a little in-game tutorial so that the player should be guided throughout its progression, but I haven't had the time to do this.

At last, in the desktop version, where there are a little more space, I have added some visuals indicators, but between us it's so ugly than I should do nothing, especially if I had known that all [screenshots](http://blog.gootechnologies.com/post/75475795798/the-winners-of-the-mozilla-goo-game-creator) was done on Desktop :D

<center>
<img title="annonces résultats" src="/img/article/sturviveisugly/win.png">
</center>

##And Sturvive is ugly

You will understand, discover the 3D world, the [goo](www.gootechnologies.com) library : goo engine, web mobile development, wanting my game is playable and understandable, all of that in 1 month (with chrismas in mid) did not allow me to take time for graphics.

In addition, i'm a developper with no graphical flavor. If you ask me to choose between two colors, I will choose the ugly one. I could not based my game on beatiful graphics, because i know its will be bad.

The idea of game ? She imposed itself on me. Indeed, the space : some white spheres to simulate stars and voila an univers is created. We add some orange spheres to have some meteorites, now we have to kill them and a game is builded.

To add littles challenges, we modify some variables and we have different kind of level. And voila we have [Sturvive](http://manland.github.io/sturvive/).

##But Sturvive is cool

To resume, we have a compatible game, or which explain the reason of why user can't play. 
Options to manage renderers quality but also, permit to little hardware configuration to play.
All game is translatedin English and French.
It's accessible from phone and desktop.

I can deploy new version with [one commande](https://github.com/manland/sturvive/blob/master/Gruntfile.js#L205), thanks to [Grunt](http://gruntjs.com/). All the [JS](https://github.com/manland/sturvive/blob/gh-pages/Sturvive-0.0.1.js) is minified and the [CSS](https://github.com/manland/sturvive/blob/gh-pages/stylesheet/Sturvive-0.0.1.css) is concatened in production to obtain a very little loading time.

The game has 4 kinds of level, 18 levels and 6 ameliorations of starship. All of that permit to play, in middle, 20 minutes.

From the end of the contest, i have developped the installation on [Firefox OS](http://www.mozilla.org/fr/firefox/os/). And I will propose it, soon, to the [Firefox OS market](https://marketplace.firefox.com).

For the future ? I have no idea, if i have the time i will done a multi-gamer version. What do you think about that ?

##Thanks

I thanks [GooTechnologie](www.gootechnologies.com) and [Mozilla](http://www.mozilla.org/) to have organized this contest and more generally for the work on WebGl.

My early testers [Audrey](https://twitter.com/udr3y/), [Laurent](https://twitter.com/_LaurentDufour), [Matthieu](https://twitter.com/Mattrio23), [Julien](https://twitter.com/studiodev), [Vivian](https://twitter.com/vp3n), [Adeline](https://twitter.com/adedib/) and all [my collegues](http://itkweb.github.io/site-h-day/equipe.html) for their advice and encouragement.

And github who host the majority of my web creations like [Sturvive](http://manland.github.io/sturvive/).

*Reviewers : *