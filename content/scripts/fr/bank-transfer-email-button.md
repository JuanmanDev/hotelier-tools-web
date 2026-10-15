---
title: "Bouton E-mail de Virement Bancaire"
description: "Ajoute aux réservations Little Hotelier un bouton qui ouvre un e-mail prêt à envoyer pour demander un virement, avec le solde, les dates et les chambres."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/bank-transfer-email-button/from.png"
  after: "/images/scripts/bank-transfer-email-button/to.webp"
  gallery:
    - "/images/scripts/bank-transfer-email-button/from.png"
    - "/images/scripts/bank-transfer-email-button/to.webp"
---

Ce script ajoute aux réservations Little Hotelier un bouton qui ouvre un e-mail prêt à envoyer, demandant au client de payer par virement bancaire. L'e-mail contient déjà le solde à payer, les dates du séjour et les chambres réservées. Il s'adresse aux propriétaires et au personnel de réception des établissements qui acceptent les virements. Il n'est pas publié pour un usage général : la version actuelle est écrite pour un seul établissement, elle est donc mise en place sur demande.

## Le problème résolu

Quand un client veut payer par virement, quelqu'un doit rédiger chaque fois le même e-mail : numéro de compte, banque, bénéficiaire, référence de paiement, montant exact et dates de la réservation. Copier à la main le montant et les dates est long, et une référence erronée rend le paiement difficile à rapprocher ensuite.

## Ce qui change

Sur l'écran de réservation de Front Desk :

- Une nouvelle option est ajoutée au menu **Email**, et un nouveau bouton avec une icône d'enveloppe apparaît à côté du bouton **Print**.
- Un clic sur l'un ou l'autre ouvre votre logiciel de messagerie avec un nouveau message adressé à l'e-mail du client.
- Le message est rempli à partir de la réservation : le solde à payer, une référence de paiement composée de la date d'arrivée et du prénom du client, les dates d'arrivée et de départ, et les chambres regroupées par type de chambre avec le nombre pour chacun.
- Il inclut aussi un lien vers la réservation dans Little Hotelier, pour votre propre usage.

## Comment l'installer

Ce script n'est pas encore publié pour un usage général. [Contactez-moi](/contact) et je pourrai l'adapter à votre établissement. Une fois adapté, il s'installe comme les autres scripts : il vous faut l'extension gratuite Tampermonkey, et le [guide d'installation](/tools/ui/instructions) détaille les étapes. Il ne s'exécute que sur les pages Front Desk de Little Hotelier (app.littlehotelier.com). Il est open source, et vous pouvez lire le [code actuel sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js).

## Bon à savoir

- Les coordonnées bancaires, le nom de l'établissement, la signature, l'heure d'arrivée et la formulation de l'e-mail sont écrits directement dans le code, en espagnol, pour l'établissement de l'auteur. Il faut les modifier avant que quelqu'un d'autre puisse l'utiliser.
- Le montant est affiché en euros.
- L'e-mail s'ouvre dans le logiciel de messagerie par défaut de votre ordinateur, par un lien e-mail standard. Rien n'est envoyé tant que vous n'appuyez pas sur envoyer dans ce logiciel.
- L'e-mail demande aux clients de confirmer le numéro de compte par téléphone, par protection contre les e-mails frauduleux qui modifient les coordonnées bancaires.
- Le script ne stocke rien et n'envoie aucune donnée nulle part. Il se contente de lire des champs déjà présents sur l'écran de réservation.

## À lire aussi

- [Mettre à Jour le Bouton de Lien de Paiement](/tools/ui/update-payment-link-button) pour les paiements par carte via un lien
- [Bouton d'Impression de Facture Supplémentaire](/tools/ui/extra-invoice-print-button)
- [Extensions Chrome pour Little Hotelier : scripts utilisateur gratuits](/blog/little-hotelier-chrome-extensions)
