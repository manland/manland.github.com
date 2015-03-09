Dans ce fichier vous trouverez une aide afin de pouvoir installer et utiliser notre logiciel Musquash.


Explication des différents dossiers/fichiers :
----------------------------------------------

- Vous trouverez dans le dossier Musquash :
	- bin est le dossier contenant les classes compilées des packages coeur et graphique. De plus vous trouverez un dossier Skins contenant les différents Skins et un dossier BackupBD contenant les backups de la base de donnée. Vous remarquerez également un fichier Options qui contiendra (après utilisation) vos login et passe par défaut, ou encore l'url de votre base de donnée...
	- le dossier src contenant toutes les classes non compilées.
	- les 2 .jar que nous utilisons et qui ne sont pas dans java de base. Vous n'aurez donc plus qu'à les ajouter correctement dans eclipse (aide plus bas)
	- le dossier BD contient les originaux des tables écrits en SQL ainsi qu'un jeux de tuples.


Première ouverture de Eclipse :
-------------------------------

Ouvrez votre Eclipse dans votre workspace habituel. Puis <file> -> <New> -> <Java Project>. Sélectionnez l'option <Create project from existing source> puis allez chercher le dossier src contenu dans Musquash, cliquez sur <Next> et enfin sur <Finish>. 

Vous remarquerez que certaines classes contiennent des erreurs, c'est normal il faut ajouter nos 2 .jar extérieurs. Pour cela cliquez droit sur le projet et sélectionnez <Properties>, puis <Java build-Path>. Prenez l'onglet <Libraries>, puis cliquez sur <add external jars...> et allez chercher les 2 .jar dans le dossier Musquash.

Enfin cliquez sur le boutton <run> et sélectionnez <Java Application>. Normalement il vous demande de choisir le main à lancer. Bien entendu vous devez sélectionner le <Main - Graphique>. 

Notre logiciel va vous prévenir qu'il ne trouve pas le fichier Options. C'est normal puisque nous ne l'avons pas encore ajouté. En effet il vous faut compiler le projet au moins une fois avant de pouvoir ajouter les skins, backup et donc le fichier Options, sinon Eclipse le supprimera de lui même car il ne comprend pas que l'on ajoute des dossiers et fichiers à cet endroit là. 

Vous pouvez donc maintenant fermer le logiciel, même si celui-ci est utilisable tel quel vous n'aurez aucun skin, et vous ne pourez pas faire de backup. Rendez-vous donc dans votre workspace pour ajouter les dossiers skins, backupBD et le fichier Options (un simple copier-coller fera l'affaire). Vous pouvez maintenant relancer notre logiciel dans Eclipse (avec <run>) et en profiter pleinnement.

N'oubliez pas de remplir la première fenêtre nommée Propriétaire qui est cachée derière la fenêtre de notre application (nous n'avons pas réussi à la faire passer devant). Et comme écrit, veillez à vous connecter une première fois avec le login et passe du propriétaire des bases (afin de les créer).


Ouvertures suivantes d'Eclipse :
--------------------------------

Vous n'aurez rien à faire d'autre que de lancer le logiciel.


Client Internet :
-----------------

Afin de pouvoir profiter du client internet de notre logiciel, il vous faut avoir installé un serveur php (testé sur apache) et donc PHP_OCI8 qui est la bibliothèque permettant à php de communiquer avec Oracle. Vous trouverez dans le cd un dossier Client Internet, vous n'avez qu'à copier-coller son contenu dans un dossier d'apache.


Aide pour OCI8 :
----------------

Ceci dépend de votre système d'exploitation :

	Sous windows :
	--------------
	il faut rechercher le php.ini.
	Une fois celui-ci trouvé, il faut décommenter les lignes :
		- extension=php_oci8.dll
		- extension=php_oci8_11g.dll

	Sous Ubuntu :
	--------------
	un excellent tutorial est disponible : http://doc.ubuntu-fr.org/oci8

Une fois cela fait vous n'avez plus qu'à rentrer l'adresse du client dans les options de notre logiciel et enfin de cliquer sur le boutton <Client Internet> puis <lancer>.


Aide :
------

Vous retrouverez une aide dans le logiciel décrivant les différentes parties du programme dans le menu <?>. Si jamais il manque des explications vous pourrez en retrouver davantages sur notre site : http://code.google.com/p/projet-bd-montpellier. Enfin pour toute question nous restons à votre entière disposition par mail :
- rmaneschi@etud.univ-montp2.fr
