---
title: "Ajouter un Bouton de Vérification Front Desk depuis Direct Booking"
description: "Ajoute aux réservations Direct Booking de Little Hotelier un bouton qui ouvre la même réservation dans Front Desk, pour vérifier ses détails et remboursements."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/add-button-check-front-desk/from.webp"
  after: "/images/scripts/add-button-check-front-desk/to.webp"
  gallery:
    - "/images/scripts/add-button-check-front-desk/from.webp"
    - "/images/scripts/add-button-check-front-desk/to.webp"
    - "/images/scripts/add-button-check-front-desk/from2.webp"
    - "/images/scripts/add-button-check-front-desk/to2.webp"
---

Ce script ajoute à chaque réservation de l'extranet Direct Booking de Little Hotelier un bouton qui ouvre la même réservation dans Front Desk, dans un nouvel onglet. Il s'adresse au personnel de réception et aux propriétaires qui gèrent des réservations directes et doivent consulter la réservation complète ou vérifier un remboursement sans la chercher à la main.

## Le problème résolu

Direct Booking (le back-office du moteur de réservation, sur app.thebookingbutton.com) et Front Desk sont deux écrans distincts. Quand un client qui a réservé sur votre site web appelle pour une modification ou un remboursement, vous trouvez la réservation dans Direct Booking, mais la chambre, les paiements et les données du client se trouvent dans Front Desk. Sans le script, vous copiez la référence, passez à Front Desk et lancez la recherche à la main.

## Ce qui change

- Sur l'onglet **Guest** d'une réservation Direct Booking, un nouveau bouton apparaît dans la liste d'actions : « View reservation data in Front Desk and check refunds » (ou sa version espagnole).
- Le bouton ouvre la liste **Reservations** de Front Desk dans un nouvel onglet, déjà filtrée par la référence de la réservation.
- La recherche couvre les dates d'arrivée de deux mois en arrière jusqu'à un an à l'avance, ce qui permet de retrouver les séjours récents et à venir.
- Le script lit l'identifiant de votre établissement dans le lien Front Desk de la page, de sorte que la recherche s'ouvre sur votre propre établissement.
- Il vérifie la page toutes les deux secondes. Quand vous passez à une autre réservation, le bouton est mis à jour pour pointer vers la nouvelle référence.

## Comment l'installer

Il vous faut l'extension gratuite Tampermonkey. Appuyez sur **Install on Tampermonkey** sur cette page, confirmez, puis rechargez Direct Booking. Le [guide d'installation](/tools/ui/instructions) détaille chaque étape. Le script ne s'exécute que sur les pages de réservation de Direct Booking (app.thebookingbutton.com/extranet/properties/.../reservations). Il est gratuit et open source : vous pouvez [lire le code sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js).

## Bon à savoir

- Le script ne vérifie pas si vous êtes connecté à Front Desk. Si ce n'est pas le cas, connectez-vous puis appuyez de nouveau sur le bouton.
- Les réservations dont la date d'arrivée remonte à plus de deux mois, ou est à plus d'un an, sortent de la plage de recherche et n'apparaîtront pas dans les résultats.
- Si le lien Front Desk est absent de la page, le script utilise un identifiant d'établissement fixe écrit dans le code, et la recherche ne s'ouvrira pas sur votre établissement. Modifiez cette valeur dans le script si cela se produit.
- Le texte du bouton n'existe qu'en anglais et en espagnol.
- Il ne stocke rien et n'envoie rien en dehors de Little Hotelier.

## À lire aussi

- [Tableaux Pleine Largeur](/tools/ui/tables-full-width) pour des tableaux plus larges dans Direct Booking
- [Extensions Chrome pour Little Hotelier : scripts utilisateur gratuits](/blog/little-hotelier-chrome-extensions)
