---
title: "Facture Booking pour un client : l'envoyer automatiquement au départ depuis Little Hotelier"
seoTitle: "Facture Booking pour client : envoi auto au départ"
description: "Booking.com ne facture pas vos clients, c'est à vous. Envoyez la facture depuis Little Hotelier à la main, ou par e-mail automatique au départ du client."
date: 2026-10-03
category: invoicing
tags: [invoices, checkout, booking.com, little hotelier, automation]
keywords: [facture booking pour client, facture booking comment faire, envoyer facture client little hotelier, little hotelier facture, facture hôtel au départ, facture booking tva, logiciel facturation chambre d'hôtes]
feature: invoicing
demoPath: /invoice-on-leave
cover: /images/blog/demo/en/invoice-at-checkout.webp
coverAlt: "Page Invoice on leave dans Hotelier Tools : la tâche Automatic invoicing at check-out exécutée chaque jour à 12h00, une période avec Search reservations, et le tableau des réservations avec un bouton Auto-invoice pour chaque séjour"
faq:
  - q: "Booking.com envoie-t-il des factures aux clients ?"
    a: "Non. Booking.com indique que la réservation est un accord entre vous et le client : c'est donc à l'établissement d'émettre la facture, même lorsque Booking.com a encaissé le paiement."
  - q: "Little Hotelier peut-il envoyer la facture automatiquement au départ ?"
    a: "Pas tout seul. Ses e-mails automatiques aux clients sont la confirmation de réservation, l'annulation, le rappel avant l'arrivée et le remerciement après le départ. Vous envoyez la facture par e-mail depuis la réservation, ou vous utilisez un outil comme Invoice on Leave de Hotelier Tools pour le faire après le départ."
  - q: "Pourquoi attendre le départ pour émettre la facture ?"
    a: "Parce que les montants ne sont définitifs qu'à ce moment-là. Les extras, les paiements et les changements de dates arrivent souvent pendant le séjour, et une facture émise trop tôt doit être corrigée par un avoir ou une nouvelle facture."
  - q: "Le client verra-t-il Hotelier Tools dans l'e-mail ?"
    a: "Non. Hotelier Tools demande à Little Hotelier d'envoyer la facture : elle part depuis votre propre modèle d'e-mail et votre propre expéditeur Little Hotelier, exactement comme si vous cliquiez vous-même sur Email > Invoice."
  - q: "Que faire si le client n'a pas d'adresse e-mail sur la réservation ?"
    a: "Little Hotelier envoie la facture à l'e-mail du contact principal de la réservation : sans lui, il n'y a nulle part où l'envoyer. Invoice on Leave signale un séjour passé sans e-mail du client au lieu de réessayer chaque jour : vous pouvez imprimer la facture ou demander une adresse au client."
---

Booking.com ne facture jamais vos clients : c'est l'établissement qui le fait, même quand Booking.com a encaissé le paiement. Dans Little Hotelier, vous l'envoyez depuis la réservation avec **Invoices > Generate invoice**, puis **Email > Invoice**. Pour l'automatiser, marquez le séjour dans **Invoice on Leave** de Hotelier Tools : une fois le client parti, une tâche quotidienne fait générer la facture par Little Hotelier et la lui envoie par e-mail.

## Booking.com envoie-t-il une facture au client ?

Non. L'aide partenaire de Booking.com est claire : chaque réservation est un accord entre vous et votre client, donc « il vous incombe de fournir une facture au client, pas à Booking.com », quel que soit celui qui a géré le paiement ([Booking.com Partner Hub](https://partner.booking.com/en-gb/help/policies-payments/guest-payments/supplying-guests-invoices), en anglais).

La même page ajoute trois règles pratiques :

- Établissez la facture au nom du client, ou à un autre nom convenu avec lui.
- N'indiquez pas Booking.com comme vendeur. Le fournisseur, c'est vous.
- Si vous êtes payé par carte virtuelle, le titulaire de la carte apparaît comme « Booking.com (Agent) », mais vous facturez quand même la valeur totale du séjour.

Les voyageurs d'affaires qui ont réservé via Booking.com for Business peuvent cliquer sur **Request invoice**, ce qui vous envoie simplement un message ([aide Booking.com for Business](https://help.business.booking.com/hc/en-gb/articles/14862570197268-How-can-I-get-my-invoice)). Le travail retombe quand même sur votre réception.

## Que doit contenir une facture d'hôtel ?

Cela dépend de votre pays, mais dans l'UE une facture complète avec TVA comprend ([Commission européenne](https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en), en anglais) :

- la date d'émission et un numéro unique séquentiel
- votre nom et adresse complets, et ceux du client
- le numéro de TVA du client, lorsque c'est le client qui est redevable de la taxe (généralement une entreprise)
- une description du séjour, le prix unitaire hors taxe et la date de la prestation si elle diffère
- le taux de TVA, le montant de TVA et une ventilation par taux

De nombreux pays autorisent aussi une facture « simplifiée » plus courte pour certaines ventes. Quand un client professionnel demande une facture, il lui faut généralement la facture complète, au nom de l'entreprise, avec son numéro d'identification fiscale. Les mentions obligatoires exactes dépendent du pays où se trouve votre établissement.

Configurez une fois la mise en page dans Little Hotelier, sous **Front Desk > Setup > Guest Payment Options > Customise invoices** : titre (**Invoice**, **Tax Invoice** ou le vôtre), préfixe et suffixe de numérotation, logo, et taxes affichées incluses ou exclues. Les changements ne s'appliquent qu'aux nouvelles factures ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8910582-customise-guest-invoices)).

## Comment envoyer une facture par e-mail depuis Little Hotelier (méthode manuelle)

1. Vérifiez que le séjour est terminé : dans l'onglet **Details** de la réservation, réglez le statut sur **Checked-out** et vérifiez le solde.
2. Allez dans l'onglet **Invoices** et cliquez sur **Generate invoice**.
3. Cliquez sur **Email** et choisissez **Invoice**. Little Hotelier l'envoie à l'e-mail du contact principal de la réservation.

Vous pouvez aussi cocher **Email invoice** quand vous cliquez sur **Record Payment**. Si vous modifiez ensuite la réservation, l'onglet Invoices affiche **Invoice is outdated** ; cliquez dessus pour générer une facture corrigée et envoyer celle-ci. Sources : [Generate, print, and email a guest invoice](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice) et [Record a payment](https://helpcentre.littlehotelier.com/en/articles/9743295-record-a-payment-or-refund-for-a-reservation).

Pour imprimer plutôt, cliquez sur **Print** et choisissez **Invoice**. Le script gratuit [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) ajoute un lien direct pour éviter le menu :

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="Pied de page d'une réservation Little Hotelier (interface en espagnol) avec un lien supplémentaire Imprimir Factura à côté des menus Print et Email" caption="Le script Extra Invoice Print Button ajoute un lien de facture en un clic à côté de Print et Email." width="604" height="265"}
::

Le hic : c'est une étape manuelle pour chaque client. Les e-mails automatiques de Little Hotelier aux clients sont la confirmation de réservation, l'annulation, le rappel avant l'arrivée et le remerciement après le départ ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8910590-customise-guest-emails)). Aucun n'envoie la facture.

## Comment envoyer la facture automatiquement quand le client part

**Invoice on Leave** dans Hotelier Tools (bêta) effectue à votre place les étapes manuelles ci-dessus, après le départ. Vous marquez une réservation une seule fois ; le marquage n'envoie rien sur le moment.

1. Ouvrez **Invoice on Leave** (`/invoice-on-leave`). Si le bandeau indique qu'il n'y a pas encore de tâche, cliquez sur **Create the daily task (16:00, after check-out)**.
2. Une facture n'est émise que pour un séjour **checked out** dans Little Hotelier. Si votre équipe ne clôture pas les départs à la main avant 16h00, utilisez la carte **Automatic check-out** et cliquez sur **Create the daily task (15:05)**. Elle clôture les départs du jour dans Little Hotelier et reste donc désactivée tant que vous ne la créez pas.
3. Trouvez la réservation et activez la facturation automatique. Les filtres **Enrolled** et **Not enrolled** montrent où en est chaque séjour. Vous pouvez inscrire un client qui est encore dans l'établissement : la facture part à la première exécution après son départ.
4. Après le départ, la tâche quotidienne demande à Little Hotelier de générer la facture, et Little Hotelier l'envoie par e-mail depuis votre propre modèle et votre propre expéditeur.
5. Consultez **Pending invoices to send** (`/invoice-on-leave/scheduled`) pour voir ce qui est en file d'attente, dû aujourd'hui, en retard ou déjà facturé.

::screenshot{src="/images/blog/demo/en/invoice-at-checkout-full.webp" alt="Page Invoice on leave complète : un avis rouge indiquant que rien ne clôture automatiquement les départs, la carte Automatic check-out (pas encore configurée) avec Create the daily task (15:05), la tâche Automatic invoicing at check-out en cours, le lien Pending invoices to send et neuf réservations, chacune avec un bouton Auto-invoice" caption="Créez la tâche de départ si nécessaire, puis marquez le séjour avec Auto-invoice. La facture est créée et envoyée par e-mail après le départ du client." path="/invoice-on-leave" width="1440" height="1526"}
::

Besoin immédiat ? Chaque ligne propose une action « process now » pour émettre cette facture tout de suite.

### Ce qui rend le système sûr

- **Le marquage vit dans Little Hotelier.** L'inscription est enregistrée sous forme de tag dans les notes de la réservation dans Little Hotelier : votre équipe le voit donc là.
- **Pas de double envoi.** Un second tag indique « facture envoyée », écrit seulement après que Little Hotelier a accepté l'e-mail. Les séjours déjà facturés ne peuvent plus être inscrits.
- **Les mêmes contrôles préalables que la facturation en masse.** Une facture d'entreprise sans numéro d'identification fiscale ni adresse fiscale, ou avec un numéro mal formé, est refusée plutôt qu'envoyée à moitié faite.
- **Rattrapage et limites.** La tâche quotidienne remonte sur 8 jours pour rattraper les exécutions manquées et lit jusqu'à 100 départs par exécution. Un séjour passé sans e-mail du client est signalé une fois, pas réessayé chaque jour.

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié ni approuvé par SiteMinder ou Little Hotelier. Il se connecte avec l'identifiant Little Hotelier de votre propre hôtel, et la facture est le document propre de Little Hotelier.
::

::demo-cta{path="/invoice-on-leave"}
::

## Dans quelle langue la facture est-elle envoyée ?

Réglez-le une fois dans **Settings > Invoices** (`/settings/invoices`) : **From the guest's country** (le pays de l'adresse du client détermine la langue) ou **Always the same language**. Un pays manquant ou non reconnu utilise votre **Fallback language**.

## Le client la veut au nom d'une entreprise, ou après son départ

**Avant que la facture n'existe :** ajoutez le nom de l'entreprise, le numéro d'identification fiscale et l'adresse fiscale dans les informations client de la réservation dans Little Hotelier. Hotelier Tools refuse d'émettre une facture d'entreprise tant que le numéro d'identification fiscale ou l'adresse fiscale manque ou est mal formé : rien d'incomplet n'arrive donc au client.

**Après son émission :** modifiez les informations dans Little Hotelier, puis utilisez **Invoice is outdated** pour générer une facture corrigée. Si vous l'aviez déjà marquée comme définitive, cliquez sur **Cancel invoice**, puis de nouveau sur **Generate invoice** ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). En Espagne avec VeriFactu, une facture finalisée se modifie par **Rectify invoice** ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)).

Un lien privé où les clients saisissent eux-mêmes les informations de leur entreprise est en cours de développement et pas encore disponible.

Si les demandes de facture vous parviennent par les messages Booking.com, voir [comment gérer les messages clients Booking.com](/blog/booking-com-guest-messages).

## Comment renvoyer une facture ?

Ouvrez la réservation et utilisez de nouveau **Email > Invoice**. Un conseil de timing : une fois qu'une facture est **marquée comme définitive**, Little Hotelier ne propose plus Print ni Email pour elle. Envoyez-la d'abord et finalisez ensuite, ou téléchargez le PDF plus tard depuis le rapport Invoice.

::callout{type="tip" title="Clients qui paient par virement bancaire"}
Le script [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button) ajoute un bouton qui envoie vos coordonnées bancaires par e-mail depuis la réservation. Il n'est pas encore publié et se configure sur demande pour chaque établissement.
::

## Résumé

- C'est l'établissement, pas Booking.com, qui doit facturer le client.
- Dans Little Hotelier : **Invoices > Generate invoice**, puis **Email > Invoice**, idéalement après le départ.
- **Invoice on Leave** de Hotelier Tools l'envoie automatiquement après le départ, depuis votre propre modèle Little Hotelier, avec des contrôles sur les informations d'entreprise et les doublons.
- En fin de trimestre, [téléchargez toutes vos factures d'un coup](/blog/download-all-little-hotelier-invoices). Tout ce que fait la fonctionnalité de facturation est sur la [page Facturation](/tools/bot/invoicing).
