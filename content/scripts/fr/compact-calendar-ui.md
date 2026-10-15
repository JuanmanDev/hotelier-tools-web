---
title: "Interface Calendrier Compacte"
description: "Réduit les espaces vides du calendrier Little Hotelier pour afficher plus de chambres à l'écran sans défiler, grâce à des en-têtes plus compacts."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/compactCalendarUI.user.js"
category: "Calendar View"
images:
  before: "/images/scripts/compact-calendar-ui/from.png"
  after: "/images/scripts/compact-calendar-ui/to.png"
  gallery:
    - "/images/scripts/compact-calendar-ui/from.png"
    - "/images/scripts/compact-calendar-ui/to.png"
---

Ce script retire l'espace vide du calendrier de Little Hotelier pour que davantage de chambres tiennent à l'écran sans défilement. Il s'adresse au personnel de réception qui garde le calendrier ouvert toute la journée et veut voir tout l'établissement, ou presque, d'un coup d'œil.

## Le problème résolu

Le calendrier standard utilise beaucoup d'espace vertical avant l'apparition de la première réservation. L'en-tête de chaque jour empile ses informations sur trois lignes, chaque type de chambre a sa propre ligne de titre très haute, et la barre de navigation et de filtres ajoute des marges. Sur un écran d'ordinateur portable, des chambres sortent de la vue, et il faut donc défiler vers le haut et vers le bas pour vérifier la disponibilité pendant qu'un client attend.

## Ce qui change

Tous les changements sont visuels, réalisés avec des styles ajoutés à la page :

- **En-têtes de dates :** le jour de la semaine et la date sont côte à côte sur une seule ligne, au lieu d'être empilés sur trois lignes.
- **Cellule d'en-tête en haut à gauche :** sa hauteur est limitée, pour que la ligne d'en-tête reste courte.
- **Lignes de titre des types de chambre :** plus courtes, avec un fond transparent et sans bordures, pour prendre moins de place entre les chambres.
- **Bouton pour tout développer ou tout réduire :** ses marges intérieures et extérieures sont supprimées.
- **Navigation et filtres :** les marges au-dessus de la navigation par dates et sous les options de filtre sont réduites.

Les barres de réservation et les lignes de chambres elles-mêmes ne changent pas. Seuls les espacements et la disposition de l'en-tête sont modifiés.

## Comment l'installer

Installez l'extension gratuite Tampermonkey, appuyez sur **Install on Tampermonkey** sur cette page, confirmez, puis rechargez le calendrier. Des images étape par étape se trouvent dans le [guide d'installation](/tools/ui/instructions). Le script cible app.littlehotelier.com et application.littlehotelier.com, mais ses styles n'affectent que le tableau du calendrier et sa barre d'outils. Il est gratuit et open source : [lisez le code sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/compactCalendarUI.user.js).

## Bon à savoir

- Il ajoute ses styles une seule fois au chargement de la page. Il ne lit ni ne stocke aucune donnée de réservation.
- Il ne change pas le nombre de jours affichés. Utilisez pour cela les options de plage de dates de Little Hotelier.
- Il fonctionne de la même façon à la souris ou sur écran tactile.
- Il fonctionne avec [Affichage des Prix](/tools/ui/prices-display), qui écrit le prix de chaque nuit sous chaque type de chambre sur ce même calendrier.
- Si Little Hotelier modifie la disposition du calendrier, certains ajustements peuvent cesser de s'appliquer jusqu'à la mise à jour du script. Désactivez-le dans le menu de Tampermonkey si quelque chose semble anormal.

## À lire aussi

- [Affichage des Prix](/tools/ui/prices-display)
- [Astuces et fonctions cachées de Little Hotelier](/blog/little-hotelier-tips)
- [Tableau de Réservation Pleine Largeur](/tools/ui/full-width-reservation-table)
