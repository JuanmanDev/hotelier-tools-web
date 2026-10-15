---
title: "Tableaux Pleine Largeur"
description: "Élargit les tableaux de l'extranet Direct Booking de Little Hotelier à toute la largeur de l'écran, avec noms de clients complets et lignes mises en évidence."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/tables-full-width/from.webp"
  after: "/images/scripts/tables-full-width/to.webp"
  gallery:
    - "/images/scripts/tables-full-width/from.webp"
    - "/images/scripts/tables-full-width/to.webp"
---

Ce script élargit les tableaux de l'extranet Direct Booking de Little Hotelier, le back-office du moteur de réservation sur app.thebookingbutton.com, pour qu'ils utilisent toute la largeur de votre écran. Il s'adresse aux propriétaires et au personnel qui consultent les réservations directes, les rapports et l'inventaire sur un ordinateur portable ou un grand écran.

## Le problème résolu

Direct Booking garde ses pages dans une colonne de largeur fixe. Les listes de réservations et les rapports sont comprimés dans cette colonne, les noms des clients sont coupés, et sur un grand écran la moitié reste vide pendant que vous défilez de côté dans un tableau. Les longs tableaux sont aussi difficiles à suivre sur une ligne sans perdre sa place.

## Ce qui change

Sur les pages de l'extranet Direct Booking :

- **Zone de contenu principale :** elle n'a plus de largeur fixe, de sorte que les tableaux s'étirent sur l'écran.
- **Liste des réservations :** la colonne du nom du client n'a plus de largeur limitée, les noms complets s'affichent donc.
- **Conteneur principal :** autorisé à utiliser toute la largeur de la fenêtre.
- **Rapports :** utilisent toute la largeur de la page.
- **Inventaire :** reçoit une largeur maximale plus grande et est centré, pour ne pas s'étirer trop sur les très grands écrans.
- **Mise en évidence des lignes :** dans les tableaux de données, la ligne sous le pointeur de la souris reçoit un fond gris clair, ce qui facilite la lecture d'une ligne à l'autre.

## Comment l'installer

Installez l'extension gratuite Tampermonkey, appuyez sur **Install on Tampermonkey** sur cette page, confirmez, puis rechargez Direct Booking. Le [guide d'installation](/tools/ui/instructions) propose des images étape par étape. Le script ne s'exécute que sur les pages de l'extranet Direct Booking (app.thebookingbutton.com/extranet/...), Front Desk n'est donc pas concerné. Il est gratuit et open source : [consultez le code sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js).

## Bon à savoir

- Sur un petit ordinateur portable ou une tablette, la différence est faible, car la page remplit déjà l'écran.
- La mise en évidence des lignes suit le pointeur de la souris, elle est donc surtout utile sur un ordinateur.
- Il se contente d'ajouter des règles de style au chargement de la page. Il ne stocke rien et n'envoie rien nulle part.
- Pour le même effet sur la page Reservations de Front Desk, installez [Tableau de Réservation Pleine Largeur](/tools/ui/full-width-reservation-table).
- Si Little Hotelier redessine Direct Booking, certains de ces ajustements peuvent cesser de s'appliquer jusqu'à la mise à jour du script.

## À lire aussi

- [Tableau de Réservation Pleine Largeur](/tools/ui/full-width-reservation-table)
- [Add Button Check on Front Desk](/tools/ui/add-button-check-front-desk)
- [Extensions Chrome pour Little Hotelier : scripts utilisateur gratuits](/blog/little-hotelier-chrome-extensions)
