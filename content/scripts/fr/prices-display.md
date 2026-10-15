---
title: "Affichage des Prix"
description: "Affiche le prix de chaque type de chambre pour chaque nuit directement sur le calendrier Little Hotelier, sans ouvrir la page Inventory pour répondre."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/prices.user.js"
category: "Calendar View"
images:
  before: "/images/scripts/prices-display/from.webp"
  after: "/images/scripts/prices-display/to.webp"
  gallery:
    - "/images/scripts/prices-display/from.webp"
    - "/images/scripts/prices-display/to.webp"
---

Ce script affiche le prix de chaque type de chambre pour chaque nuit directement sur le calendrier de Little Hotelier. Quand un client appelle pour demander combien coûte le vendredi, la réception le voit sur le même écran que la disponibilité, sans ouvrir la page Inventory. Il s'adresse au personnel de réception qui prend des réservations par téléphone et au comptoir, ainsi qu'aux propriétaires.

## Le problème résolu

Dans Little Hotelier, la disponibilité se trouve sur le calendrier et les tarifs sur la page Inventory. Donner un prix oblige à changer d'écran, à trouver les bonnes dates et le bon type de chambre, puis à revenir au calendrier pour faire la réservation. Aux moments de forte affluence, c'est lent et source d'erreurs.

## Ce qui change

- Sur le calendrier, la dernière ligne de chaque type de chambre (la ligne des chambres non attribuées) affiche le prix de la nuit pour ce type de chambre.
- Les prix proviennent de votre page Inventory : le script l'ouvre dans un onglet en arrière-plan, lit la première ligne de tarif de chaque type de chambre, puis ferme l'onglet.
- La page Inventory couvre 14 jours à la fois, donc pour les vues de calendrier plus longues, le script la lit par blocs de 14 jours, l'un après l'autre.
- Pendant le chargement d'un prix, la cellule affiche « ... ». Les dates passées restent vides.
- Les prix apparaissent dans une police grise plus grande, pour se distinguer des réservations.
- Se déplacer vers d'autres dates charge les prix de la nouvelle période.

## Comment l'installer

Il vous faut l'extension gratuite Tampermonkey. Appuyez sur **Install on Tampermonkey** sur cette page. L'écran d'installation liste les autorisations supplémentaires utilisées par le script, qui lui permettent d'ouvrir un onglet en arrière-plan et de stocker les prix dans Tampermonkey. Confirmez, puis rechargez le calendrier. Le [guide d'installation](/tools/ui/instructions) détaille chaque étape. Le script s'exécute sur le calendrier (application.littlehotelier.com) et sur la page Inventory qu'il lit (app.littlehotelier.com). Il est gratuit et open source : [lisez le code sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/prices.user.js).

## Bon à savoir

- Les prix sont conservés dans le stockage de Tampermonkey sur votre ordinateur pendant une heure au maximum, puis lus de nouveau. Un tarif que vous modifiez dans Inventory peut mettre jusqu'à une heure à apparaître sur le calendrier.
- Vous devez être connecté à Little Hotelier, car l'onglet en arrière-plan utilise votre session. Un onglet qui s'ouvre et se ferme brièvement est normal.
- Il n'affiche que la première ligne de tarif de chaque type de chambre de la page Inventory, pas tous les plans tarifaires.
- Les noms des types de chambre doivent correspondre entre le calendrier et la page Inventory pour qu'un prix apparaisse.
- Le script démarre quatre secondes après le chargement du calendrier et attend jusqu'à 30 secondes pour chaque bloc d'Inventory. Rien n'est envoyé en dehors de Little Hotelier.

## À lire aussi

- [Changer le Nom d'Inventaire](/tools/ui/change-inventory-name)
- [Tarification dynamique pour les petits hôtels sur Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [Interface Calendrier Compacte](/tools/ui/compact-calendar-ui)
