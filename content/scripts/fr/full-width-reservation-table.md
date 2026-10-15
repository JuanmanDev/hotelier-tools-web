---
title: "Tableau de Réservation Pleine Largeur"
description: "Permet à la liste Reservations de Little Hotelier Front Desk d'utiliser toute la largeur de l'écran, avec un tableau plus large et moins de retours à la ligne."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js"
category: "Front Desk"
images:
  before: "/images/scripts/full-width-reservation-table/from.png"
  after: "/images/scripts/full-width-reservation-table/to.png"
  gallery:
    - "/images/scripts/full-width-reservation-table/from.png"
    - "/images/scripts/full-width-reservation-table/to.png"
---

Ce script permet à la liste Reservations de Little Hotelier Front Desk d'utiliser toute la largeur de votre écran. Il s'adresse au personnel de réception et aux propriétaires qui recherchent et consultent des réservations sur un grand écran, et qui en ont assez d'un tableau étroit au milieu avec du vide de chaque côté.

## Le problème résolu

La page Reservations de Front Desk garde son contenu dans une colonne de largeur fixe. Sur un grand écran, le tableau des réservations est comprimé dans cette colonne : les longs noms de clients passent sur plusieurs lignes et certaines colonnes demandent un défilement horizontal. Vous finissez par défiler de côté et vers le bas pour vérifier une seule réservation, alors que la moitié de l'écran reste vide.

## Ce qui change

- Sur la page Reservations, le titre de la page, la zone de contenu et le conteneur principal peuvent s'étendre jusqu'à 2000 pixels de large, au lieu de la largeur fixe standard.
- Le tableau s'étire sur l'écran, les colonnes disposent donc de plus de place et les longs noms de clients passent moins souvent à la ligne.
- Rien n'est supprimé ni réordonné : les mêmes colonnes, filtres et liens restent en place.

## Comment l'installer

Installez l'extension gratuite Tampermonkey, appuyez sur **Install on Tampermonkey** sur cette page, confirmez, puis rechargez la page Reservations. Le [guide d'installation](/tools/ui/instructions) détaille chaque étape avec des images. Le script ne s'exécute que sur les pages Front Desk dont l'adresse contient /reservations (app.littlehotelier.com/extranet/properties/.../reservations). Il est gratuit et open source : [le code est sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js).

## Bon à savoir

- Sur les écrans de plus de 2000 pixels de large, le contenu cesse de s'étendre à cette largeur.
- Sur un petit ordinateur portable ou une tablette, la différence est faible ou nulle, car la page remplit déjà l'écran.
- Comme il cible toutes les adresses sous /reservations, la mise en page plus large s'applique aussi aux autres pages de cette section, comme une réservation ouverte depuis la liste.
- Il se contente d'ajouter une règle de style au chargement de la page. Il ne stocke rien et n'envoie rien nulle part.
- Pour le même effet sur les tableaux de Direct Booking, installez [Tableaux Pleine Largeur](/tools/ui/tables-full-width).
- Si Little Hotelier redessine la page Reservations, la mise en page plus large peut cesser de s'appliquer jusqu'à la mise à jour du script.

## À lire aussi

- [Tableaux Pleine Largeur](/tools/ui/tables-full-width)
- [Exporter les réservations Little Hotelier vers Excel](/blog/export-little-hotelier-reservations-excel)
- [Checklist quotidienne de la réception d'hôtel pour Little Hotelier](/blog/hotel-front-desk-checklist-automation)
