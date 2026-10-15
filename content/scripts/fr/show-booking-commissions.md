---
title: "Afficher les Commissions Booking.com"
description: "Ajoute à l'écran de réservation Little Hotelier une estimation de ce que retient Booking.com : frais de virement, commission, total prélevé et net approximatif."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/show-booking-commissions/from.png"
  after: "/images/scripts/show-booking-commissions/to.png"
  gallery:
    - "/images/scripts/show-booking-commissions/from.png"
    - "/images/scripts/show-booking-commissions/to.png"
---

Ce script ajoute à l'écran de réservation de Little Hotelier une estimation de ce que Booking.com retient sur chaque réservation. Pour les réservations Booking.com, il affiche les frais de virement, la commission, le total prélevé taxes comprises et un montant net approximatif. Il s'adresse aux propriétaires et aux responsables qui veulent une idée rapide de ce que rapporte réellement une réservation Booking.com.

## Le problème résolu

Le total de la réservation dans Little Hotelier est ce que paie le client, pas ce qui arrive sur votre compte bancaire. Avec Booking.com, la commission et les frais de paiement sont prélevés plus tard, sur une facture distincte. Sans un chiffre approximatif sous la main, il est difficile de comparer une réservation passée par un canal à une réservation directe, ou de voir si une remise laisse encore une marge.

## Ce qui change

Quand la source de la réservation est **Booking.com**, quatre lignes sont ajoutées au résumé de la réservation, juste au-dessus de la ligne de séparation. Les libellés sont en espagnol :

- **Cargo por transferencia (1.3%)** : les frais de virement, soit 1,3 % du total de la réservation.
- **Comisiones Booking (17%)** : la commission de Booking.com, soit 17 % du total de la réservation.
- **Total comisiones con IVA** : les frais de virement plus la commission plus le montant de la taxe indiqué sur la réservation.
- **Neto Bruto (Aprox.)** : le net approximatif, soit le total de la réservation moins cette somme.

Les réservations de toute autre source restent inchangées.

## Comment l'installer

Installez l'extension gratuite Tampermonkey, appuyez sur **Install on Tampermonkey** sur cette page, confirmez, puis rechargez Little Hotelier. Le [guide d'installation](/tools/ui/instructions) détaille chaque étape. Le script s'exécute sur les pages Front Desk d'app.littlehotelier.com et n'ajoute des lignes qu'aux réservations Booking.com. Il est gratuit et open source : [consultez le code sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js).

## Bon à savoir

- Les taux sont fixés dans le code : 17 % de commission et 1,3 % de frais de virement. Si votre contrat Booking.com applique un autre taux, modifiez ces nombres dans l'éditeur de Tampermonkey.
- Les libellés restent en espagnol et les montants sont affichés en euros, quelle que soit la langue de votre interface.
- Il s'agit d'une estimation. Votre facture Booking.com fait foi.
- Les lignes sont calculées une seule fois, quelques secondes après le chargement de la réservation. Si vous modifiez le total, rechargez la page pour recalculer.
- Il ne lit que la source de la réservation, le total et la taxe déjà affichés à l'écran. Il ne stocke rien et n'envoie rien nulle part.

## À lire aussi

- [Quelle commission prend Booking.com](/blog/booking-com-commission)
- [Extensions Chrome pour Little Hotelier : scripts utilisateur gratuits](/blog/little-hotelier-chrome-extensions)
