---
title: "Mettre à Jour le Bouton de Lien de Paiement"
description: "Améliore le bouton de lien de paiement de l'écran de réservation Little Hotelier : libellé plus clair et téléphone du client ajouté au lien de paiement."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/update-payment-link-button/from.png"
  after: "/images/scripts/update-payment-link-button/to.png"
  gallery:
    - "/images/scripts/update-payment-link-button/from.png"
    - "/images/scripts/update-payment-link-button/to.png"
---

Ce script améliore le bouton de lien de paiement de l'écran de réservation de Little Hotelier. Il donne au bouton un libellé plus clair et ajoute au lien de paiement le numéro de téléphone du client indiqué dans la réservation. Il s'adresse au personnel de réception qui demande aux clients de payer un acompte ou le solde par carte via un lien de paiement.

## Le problème résolu

La formulation standard du bouton de demande de paiement ne montre pas à tous les membres du personnel que c'est ainsi que l'on demande à un client de payer par carte. Et le numéro de téléphone du client, déjà enregistré dans la réservation, n'est pas repris dans le lien de paiement, il faut donc le saisir de nouveau. Les deux font perdre du temps pendant qu'un client est au téléphone.

## Ce qui change

Sur l'écran de réservation de Front Desk :

- Le bouton de demande de paiement est renommé **Generate Payment Link**, ou **Cobrar con tarjeta por correo electronico (Email)** quand Little Hotelier est en espagnol.
- Le numéro du champ téléphone du client est ajouté au lien du bouton sous forme de paramètre de téléphone, sans les espaces ni le signe « + ».
- Si Little Hotelier reconstruit le lien, le script applique de nouveau la modification.
- Si le lien contient déjà un numéro de téléphone, il est laissé tel quel.

## Comment l'installer

Installez l'extension gratuite Tampermonkey, appuyez sur **Install on Tampermonkey** sur cette page, confirmez, puis rechargez Little Hotelier. Le [guide d'installation](/tools/ui/instructions) détaille chaque étape. Le script s'exécute sur les pages Front Desk d'app.littlehotelier.com et n'agit que lorsqu'une réservation affiche le bouton de demande de paiement. Il est gratuit et open source : [lisez le code sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js).

## Bon à savoir

- Il ne modifie que le texte et le lien du bouton. Le paiement lui-même est géré par Little Hotelier comme d'habitude, et le script ne voit jamais les données de carte.
- Le script lit le champ du téléphone une seule fois, dès qu'il ajoute le numéro au lien. Si vous saisissez ou corrigez le numéro ensuite, le lien conserve la première valeur lue : enregistrez la réservation et rechargez-la avant d'utiliser le bouton.
- Le numéro est ajouté sous forme de chiffres uniquement, incluez donc l'indicatif du pays dans le champ téléphone de la réservation.
- Les libellés existent en anglais et en espagnol. Les autres langues d'interface affichent le libellé anglais.
- Il ne stocke rien et n'envoie rien en dehors de Little Hotelier.

## À lire aussi

- [Bouton E-mail de Virement Bancaire](/tools/ui/bank-transfer-email-button)
- [Comment utiliser WhatsApp avec Little Hotelier](/blog/whatsapp-little-hotelier)
- [Extensions Chrome pour Little Hotelier : scripts utilisateur gratuits](/blog/little-hotelier-chrome-extensions)
