Ceci est la copie du mail envoyé le 15/12/08 à minuit.

Bonjour,

Nom : Maneschi
Prénom : romain
N°Etudiant : 20053659

J'ai tout implenté jusqu'à l'étape 6 incluse. Donc avec la gestion des menus, du fichier des meilleurs scores et la possibilité de sauvegarder une parite non seulement en début de partie mais aussi à tout moment. Je me permet d'attirer votre attention sur la gestion du fichierScore qui fonctione si aucun fichier scores.txt existe dans le répertoire du same, et affiche qu'aucune partie n'a été encore jouée.
De plus j'ai commencé à transformer les pions en images pour l'affichage 3d mais je n'ais pas réussit à terminer faute de temps.

Remplissage de la grille par tirage aléatoire : Classe Grille méthode alea();
Calcul du groupe d'un pion : 
   - Savoir si un point n'est pas seul : Classe Grille méthode pionNonSeul();
   - Calcul des points d'un groupe : Classe Grille méthode mettreAJour();
Tassement des pions : Classe Grille méthodes tasserColonne, tasserVertical, tasserHorizontal.
Vérifier fin partie : Classe Panneau méthode verifierFinPartie();

Vous remarquerez que tous mes commentaires sont compatibles avec la JavaDoc. Vous pouvez trouver la JavaDocSame dans le répertoire doc du fichier compréssé joint. Elle est au format UTF-8 donc assurez-vous bien que votre nagiteur internet est correctement configuré.

Enfin le projet à une configuration correspondante à Eclipse 3.3 de Sun. Puisque tout le développement s'est effectué dessus. La dernière conpilation à été effectuée sous Ubuntu 8.10.

Si un problème avec le mail ne vous permet pas de lire ou de récupérer le dossier joint voici plusieurs liens :
   - http://1.lydiman.net/man/Same.tar
   - http://1.lydiman.net/man/Same.tar.gz
   - http://1.lydiman.net/man/Same.zip

Bonne correction.

Cordialement,
Romain Maneschi
mail : romain.maneschi@lapose.net
