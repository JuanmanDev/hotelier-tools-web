---
title: "Interface Compacte pour Détails de Réservation"
description: "Resserre la fenêtre de réservation de Little Hotelier Front Desk et agrandit la zone des commentaires du client, pour lire les notes sans défiler."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/compact-ui-reservation-details/from.png"
  after: "/images/scripts/compact-ui-reservation-details/to.png"
  gallery:
    - "/images/scripts/compact-ui-reservation-details/from.png"
    - "/images/scripts/compact-ui-reservation-details/to.png"
---

Ce script resserre la disposition de la fenêtre de réservation dans Little Hotelier Front Desk et donne plus de hauteur à la zone des commentaires du client. Il s'adresse au personnel de réception qui ouvre de nombreuses réservations par jour et veut lire les notes laissées par les clients ou les collègues sans défiler dans une petite zone.

## Le problème résolu

Les commentaires du client contiennent souvent l'information qui compte à l'arrivée : une arrivée tardive, un lit bébé, une demande de parking, une occasion spéciale. Dans la fenêtre de réservation standard, le champ des commentaires est court, de sorte que les notes plus longues sont coupées et qu'il faut défiler à l'intérieur. En même temps, la marge intérieure en haut des onglets et les espacements autour des zones d'alerte et des lignes de séparation repoussent les champs utiles vers le bas.

## Ce qui change

Sur l'écran de réservation de Front Desk :

- La zone de texte des **commentaires du client** fait au moins 126 pixels de haut, pour que plusieurs lignes de notes soient visibles à la fois.
- La marge intérieure en haut du contenu des onglets de la réservation est supprimée.
- Les zones d'alerte vides n'ajoutent plus de marge.
- Les lignes de séparation horizontales perdent leur marge supplémentaire.

Les champs, les boutons et les onglets restent à leur place. Seuls les espacements et la hauteur de la zone des commentaires changent.

## Comment l'installer

Installez l'extension gratuite Tampermonkey, appuyez sur **Install on Tampermonkey** sur cette page, confirmez, puis rechargez Little Hotelier. Le [guide d'installation](/tools/ui/instructions) propose des images pour chaque étape. Le script s'exécute sur les pages Front Desk d'app.littlehotelier.com, et ses styles n'affectent que la fenêtre de réservation. Il est gratuit et open source : [le code est sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js).

## Bon à savoir

- Il fonctionne en ajoutant quelques styles au chargement de la page. Il ne lit, ne modifie ni ne stocke aucune donnée de réservation.
- Les notes plus longues que la nouvelle hauteur défilent toujours dans la zone, comme d'habitude.
- Il fonctionne de la même façon sur ordinateur et sur écran tactile. Pour une tablette, associez-le à [Améliorer le Style pour Écrans Tactiles](/tools/ui/improve-style-touch-screens), qui agrandit les menus Print et Email.
- Il se combine aussi bien avec [Sauvegarde Facile Province et Pays](/tools/ui/easy-save-province-country), qui agit sur les formulaires de clients de la même fenêtre.
- Si Little Hotelier modifie la fenêtre de réservation, certains ajustements d'espacement peuvent cesser de s'appliquer jusqu'à la mise à jour du script.

## À lire aussi

- [Améliorer le Style pour Écrans Tactiles](/tools/ui/improve-style-touch-screens)
- [Checklist quotidienne de la réception d'hôtel pour Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Extensions Chrome pour Little Hotelier : scripts utilisateur gratuits](/blog/little-hotelier-chrome-extensions)
