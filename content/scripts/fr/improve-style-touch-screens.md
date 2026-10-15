---
title: "Améliorer le Style pour Écrans Tactiles"
description: "Adapte la réservation Little Hotelier au tactile : menus Print et Email plus grands, boutons mis en évidence, bouton de suppression de chambre toujours visible."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/improve-style-touch-screens/from.png"
  after: "/images/scripts/improve-style-touch-screens/to.png"
  gallery:
    - "/images/scripts/improve-style-touch-screens/from.png"
    - "/images/scripts/improve-style-touch-screens/to.png"
---

Ce script adapte l'écran de réservation de Little Hotelier aux écrans tactiles, comme une tablette à la réception. Il agrandit les menus Print et Email, met leurs boutons en évidence, et affiche le bouton de suppression de chambre qui n'apparaît normalement qu'au survol de la souris. Il s'adresse aux équipes de réception qui travaillent sur des tablettes ou des écrans tactiles.

## Le problème résolu

L'écran de réservation de Little Hotelier est conçu pour la souris. Les options Print et Email s'ouvrent dans de petits menus contextuels au texte minuscule, difficiles à atteindre avec un doigt. Le bouton pour retirer une chambre d'une réservation reste caché tant que vous ne survolez pas la chambre, et un écran tactile n'a pas de survol : sur une tablette, ce bouton est donc difficile à atteindre.

## Ce qui change

Sur l'écran de réservation de Front Desk :

- **Bouton de suppression de chambre :** le bouton rond pour retirer une chambre de la réservation est toujours visible.
- **Menus Print et Email :** les éléments de ces menus contextuels utilisent un texte beaucoup plus grand (30 pixels), et les menus s'élargissent pour les contenir.
- **Boutons du pied de page :** les boutons Print et Email du pied de la réservation reçoivent un fond bleu clair et un espacement supplémentaire, pour être faciles à repérer et à toucher.
- **Menu Email de la facture :** la petite icône d'information à côté de l'option de facture est masquée.

## Comment l'installer

Installez l'extension gratuite Tampermonkey dans le navigateur de votre tablette ou de votre ordinateur, appuyez sur **Install on Tampermonkey** sur cette page, confirmez, puis rechargez Little Hotelier. Le [guide d'installation](/tools/ui/instructions) détaille chaque étape. Le script s'exécute sur les pages Front Desk d'app.littlehotelier.com. Il est gratuit et open source : [lisez le code sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js).

## Bon à savoir

- Tampermonkey doit être disponible dans le navigateur de la tablette. Testez la configuration sur votre propre appareil avant de vous y fier à la réception.
- Les changements s'appliquent aussi sur un ordinateur de bureau. Le bouton de suppression de chambre est désormais toujours à l'écran : veillez à ne pas cliquer dessus par erreur.
- Il ne modifie que des styles. Il ne change pas ce que fait un bouton, et il ne stocke rien.
- Les écrans plus récents d'application.littlehotelier.com, comme le calendrier, ne sont pas concernés.
- Pour des formulaires de clients plus adaptés au tactile, [Sauvegarde Facile Province et Pays](/tools/ui/easy-save-province-country) agrandit aussi les boutons d'ajout de client et de déploiement.

## À lire aussi

- [Interface Compacte pour Détails de Réservation](/tools/ui/compact-ui-reservation-details)
- [Sauvegarde Facile Province et Pays](/tools/ui/easy-save-province-country)
- [Extensions Chrome pour Little Hotelier : scripts utilisateur gratuits](/blog/little-hotelier-chrome-extensions)
