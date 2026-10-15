---
title: "Bouton d'Impression de Facture Supplémentaire"
description: "Place un bouton Print Invoice directement sur l'écran de réservation Little Hotelier, à côté du menu Print : un clic ouvre la facture, sans ouvrir de menu."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/extra-invoice-print-button/from.png"
  after: "/images/scripts/extra-invoice-print-button/to.png"
  gallery:
    - "/images/scripts/extra-invoice-print-button/from.png"
    - "/images/scripts/extra-invoice-print-button/to.png"
---

Ce script place un bouton **Print Invoice** directement sur l'écran de réservation de Little Hotelier, à côté du menu **Print** existant. Un clic ouvre la facture, sans menu à ouvrir d'abord. Il s'adresse au personnel de réception qui imprime ou télécharge une facture à presque chaque départ.

## Le problème résolu

Dans Front Desk, la facture se trouve dans le menu Print de la réservation : on ouvre le menu, puis on choisit la facture. Deux clics, ce n'est pas beaucoup une fois, mais au moment du départ, avec des clients qui attendent, cela s'additionne, et sur une tablette le petit menu est facile à manquer. Le nouveau personnel ne sait pas toujours non plus que la facture se trouve dans ce menu.

## Ce qui change

- Un nouveau bouton avec une icône de document apparaît dans le pied de la réservation, juste après le bouton du menu **Print**.
- Son libellé est **Print Invoice**, ou **Imprimir Factura** quand Little Hotelier est en espagnol.
- Un clic déclenche le propre lien d'impression de facture de Little Hotelier, le même que celui que vous choisiriez dans le menu Print. Le résultat est exactement la facture produite par Little Hotelier : le script ne crée ni ne modifie de factures.
- Le menu Print d'origine reste tel quel, avec toutes ses autres options.

## Comment l'installer

Il vous faut l'extension gratuite Tampermonkey. Appuyez sur **Install on Tampermonkey** sur cette page, confirmez, puis rechargez Little Hotelier. Le [guide d'installation](/tools/ui/instructions) propose des images pour chaque étape. Le script s'exécute sur les pages Front Desk d'app.littlehotelier.com et n'ajoute le bouton que là où le bouton Print de la réservation existe. Il est gratuit et open source : [consultez le code sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js).

## Bon à savoir

- Le script cherche le bouton Print à plusieurs reprises pendant les cinq premières secondes après le chargement de la page. Si le bouton est absent parce que la réservation s'est ouverte plus tard, rechargez la page.
- Il vérifie d'abord si son bouton est déjà présent, de sorte que vous n'en obtenez jamais deux.
- Les libellés existent en anglais et en espagnol. Les autres langues d'interface affichent le libellé anglais.
- Il fonctionne sur ordinateur et sur écran tactile. Avec [Améliorer le Style pour Écrans Tactiles](/tools/ui/improve-style-touch-screens), les boutons du pied de page reçoivent aussi un fond mis en évidence.
- Il ne stocke rien et n'envoie rien en dehors de Little Hotelier.

## À lire aussi

- [Comment envoyer la facture au client au départ](/blog/send-invoice-to-guest-at-checkout)
- [Télécharger toutes les factures Little Hotelier](/blog/download-all-little-hotelier-invoices)
- [Bouton E-mail de Virement Bancaire](/tools/ui/bank-transfer-email-button)
