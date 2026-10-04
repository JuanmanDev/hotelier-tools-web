---
title: "Télécharger toutes vos factures Little Hotelier d'un coup (pour votre déclaration de TVA trimestrielle)"
seoTitle: "Télécharger toutes les factures Little Hotelier (2026)"
description: "Télécharger toutes les factures Little Hotelier : le ZIP natif, puis comment créer les factures manquantes et envoyer un ZIP et un CSV par trimestre."
date: 2026-10-03
category: invoicing
tags: [invoices, accounting, little hotelier, quarterly tax, zip]
keywords: [télécharger toutes les factures little hotelier, exporter factures little hotelier, little hotelier xero, logiciel facturation chambre d'hôtes, facture hôtel tva, déclaration tva trimestrielle hôtel]
feature: invoicing
demoPath: /invoices
cover: /images/blog/demo/en/invoices-by-quarter.webp
coverAlt: "Page Invoices de Hotelier Tools avec 66 factures au total, les trimestres T4 et T3 2026, chacun avec ses boutons Preview CSV et ZIP, et septembre 2026 ouvert sous forme de tableau de numéros de facture, clients, numéros fiscaux, dates de départ et totaux"
featured: true
faq:
  - q: "Little Hotelier peut-il télécharger toutes mes factures en PDF d'un coup ?"
    a: "Oui, pour les factures qui existent déjà. Allez dans Front Desk > Reports > Invoices, filtrez les dates, appuyez sur Download invoice PDFs puis sur Download zip. Little Hotelier vous demande d'abord de confirmer avec l'authentification multifacteur."
  - q: "Little Hotelier synchronise-t-il automatiquement les factures avec Xero ou QuickBooks ?"
    a: "Non. Le rapport Accounting exporte les factures marquées comme définitives dans un fichier CSV conçu pour l'import dans Xero et QuickBooks, et c'est vous qui importez ce fichier. Seules les factures définitives sont incluses."
  - q: "Hotelier Tools modifie-t-il la numérotation ou le modèle de mes factures ?"
    a: "Non. Hotelier Tools demande à Little Hotelier de générer chaque facture : c'est donc un document généré par Little Hotelier lui-même, avec votre numérotation, votre logo et votre mise en page de Customise invoices."
  - q: "Que deviennent les factures annulées dans mon export ?"
    a: "Dans Little Hotelier, une facture définitive annulée passe dans Older invoices avec le statut Cancelled, et ses données apparaissent toujours dans les exports. Prévenez votre comptable pour que le chiffre d'affaires ne soit pas compté deux fois."
  - q: "Combien coûte Hotelier Tools ?"
    a: "Il est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027. Les hôtels qui démarrent avant le 31 décembre 2026 paient ensuite 50 € par hôtel et par mois pendant toute l'année 2027. Aucune carte n'est nécessaire pour commencer."
---

Oui. Little Hotelier peut réunir dans un seul ZIP toutes les factures qui **existent déjà** : ouvrez **Front Desk > Reports > Invoices**, filtrez le trimestre et appuyez sur **Download invoice PDFs**. Ce qu'il ne fera pas, c'est créer les factures que personne n'a générées, ni vous prévenir de celles qui ne devraient pas encore être émises. Pour cela, Hotelier Tools génère les factures manquantes en une seule exécution, refuse celles qui sont risquées et vous donne le trimestre sous forme d'un ZIP de PDF et d'un récapitulatif CSV.

## Little Hotelier peut-il exporter toutes les factures en natif ?

Oui. En octobre 2026, le centre d'aide de Little Hotelier décrit trois façons de sortir les factures. Celle qu'il vous faut dépend de ce que demande votre comptable.

| Méthode | Ce que vous obtenez | La limite |
|---|---|---|
| Rapport Invoices | Un ZIP de factures PDF et une liste CSV | Seulement les factures qui existent déjà |
| Rapport Accounting | Un CSV conçu pour l'import dans Xero et QuickBooks | Seulement les factures marquées comme définitives |
| Une réservation à la fois | Un PDF (Print ou Save as PDF) | Lent pour un trimestre entier |

### Le rapport Invoices (des PDF dans un ZIP)

1. Allez dans **My Apps > Front Desk > Reports** et cliquez sur **Invoices**.
2. Choisissez la période de votre trimestre. Filtrez éventuellement par **Invoice status** et **Payment status**, puis cliquez sur **Apply**.
3. Cliquez sur **Download invoice PDFs**, puis sur **Download zip**.
4. Confirmez la demande d'authentification multifacteur. Le ZIP se télécharge.

Le bouton **Export** du même rapport fournit un CSV à la place. Source : [How to run an Invoice report](https://helpcentre.littlehotelier.com/en/articles/14390555-how-to-run-an-invoice-report).

### Le rapport Accounting (CSV pour Xero ou QuickBooks)

Allez dans **My Apps > Front Desk > Reports > Accounting**, choisissez **Yesterday**, **Last 7 days** ou des dates personnalisées, et cliquez sur **Export**. Vous obtenez un CSV (ou un ZIP pour les gros exports) avec le contact, l'adresse, le numéro de facture, les dates, les montants, le compte et les codes de taxe.

Deux limites : seules les factures **marquées comme définitives** sont exportées, et le fichier est à importer à la main. Ce n'est pas une synchronisation en temps réel. Vous définissez les codes de compte une seule fois dans **Front Desk > Setup > Accounting Integration**. Sources : [Accounting: export invoices marked as final](https://helpcentre.littlehotelier.com/en/articles/8672956-accounting-export-invoices-marked-as-final) et [Accounting Integration: setup](https://helpcentre.littlehotelier.com/en/articles/8925025-accounting-integration-setup).

### Une par une

Ouvrez la réservation, cliquez sur **Print**, choisissez **Invoice** et sélectionnez **Save as PDF** dans la fenêtre d'impression ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice)). Si vous le faites souvent, le script gratuit [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) place un lien d'impression direct sur la réservation.

## Ce que l'export natif ne fait pas

Le téléchargement est la partie facile. En général, c'est en amont que le trimestre dérape :

- **Factures manquantes.** Le ZIP ne contient que les factures que quelqu'un a générées. Le centre d'aide décrit leur création une réservation à la fois (onglet **Invoices** > **Generate invoice**) : un séjour sur lequel personne n'a cliqué n'y figure tout simplement pas.
- **Doublons.** Chaque demande de génération crée un nouveau document dans Little Hotelier : régénérer un séjour peut donc laisser deux factures là où votre comptable en attend une.
- **Factures trop précoces.** Une facture émise avant le départ du client devient obsolète dès qu'un extra ou un paiement est ajouté, et la corriger implique une facture corrigée, un avoir ou, en Espagne, une factura rectificativa.
- **Finalisation.** L'export comptable exige que chaque facture soit marquée comme définitive, et le centre d'aide décrit cette opération réservation par réservation.

## Comment télécharger un trimestre entier en un ZIP et un CSV (la méthode rapide)

Hotelier Tools est un tableau de bord qui se connecte à Little Hotelier avec vos propres identifiants. Sa page **Invoice Download** crée les factures d'une période en une seule exécution et vous livre le résultat par trimestre.

1. Inscrivez-vous sur [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) et connectez Little Hotelier sur **Credentials**. Vos identifiants sont stockés chiffrés.
2. Dans le menu, ouvrez **Invoice Download** (`/invoices`).
3. Appuyez sur **Generate invoices** et choisissez les dates, par exemple du 1er juillet au 30 septembre.
4. L'application lit ces réservations dans Little Hotelier et crée des factures pour les séjours éligibles. Tout ce qu'elle ne peut pas facturer va dans **Errors** avec la raison. Rien n'est ignoré en silence.
5. Vos factures apparaissent regroupées par trimestre et par mois. Sur le trimestre, appuyez sur **ZIP** pour télécharger tous les PDF, ou sur **Preview CSV** pour vérifier d'abord le récapitulatif.

::screenshot{src="/images/blog/demo/en/invoices-quarter-zip-downloaded.webp" alt="Page Invoices regroupée par trimestre, avec les boutons Preview CSV et ZIP sur les T4 et T3 2026, le tableau des factures de septembre 2026 ouvert, et une notification Pack downloaded confirmant le téléchargement du lot de factures du T3 2026" caption="Chaque trimestre a son propre ZIP de PDF et son récapitulatif CSV. Un clic sur ZIP télécharge tout le trimestre." path="/invoices"}
::

Les factures sont des documents Little Hotelier à part entière. Hotelier Tools demande à Little Hotelier de générer chacune d'elles : votre numérotation, votre logo et votre mise en page de **Customise invoices** restent donc inchangés.

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel.
::

## Vérifications avant facturation : numéros fiscaux manquants, factures précoces et doublons

Avant de demander une facture à Little Hotelier, Hotelier Tools exécute un contrôle préalable. Il refuse de facturer un séjour quand :

- le client **n'est pas encore parti**, car les montants ne sont pas définitifs
- il s'agit d'une **facture à une entreprise sans numéro fiscal** ou sans adresse fiscale
- le **numéro fiscal est mal formé**
- le séjour est **déjà facturé**, ce qui évite les doublons

Un client particulier n'a pas besoin de coordonnées fiscales : pour lui, une pièce d'identité manquante n'est qu'un avertissement.

C'est la différence entre un ZIP auquel votre comptable peut se fier et un ZIP qu'il vous renvoie avec des questions.

## Que deviennent les réservations qui ne peuvent pas être facturées ?

Elles atterrissent dans **Errors** (`/invoices/errors`), une ligne par réservation avec la raison.

1. Choisissez la période en haut.
2. Filtrez par type de problème : **Missing DNI**, **Pending payment**, **Not checked out**, **Download failed** et d'autres.
3. Corrigez la réservation dans Little Hotelier : ajoutez le numéro fiscal, enregistrez le paiement ou enregistrez le départ du client.
4. De retour dans Errors, contrôlez-la à nouveau ou marquez-la comme résolue. **Copy CSV** vous donne la liste pour un collègue.

::screenshot{src="/images/blog/demo/en/invoice-failures.webp" alt="Page Errors and issues du 1er juillet au 30 septembre 2026 avec Copy CSV, des filtres par type de problème comme Missing DNI, Pending payment, Not checked out et Download failed, et un tableau de réservations avec leur identifiant de facture, dates de séjour, total, badge du problème, raison (en espagnol) et actions" caption="Toutes les réservations qu'une exécution n'a pas pu facturer, avec la raison et un moyen de réessayer." path="/invoices/errors"}
::

Si un séjour est bloqué par un solde d'arrondi d'un ou deux centimes, l'option cent-fix de **Settings > Invoices** peut solder ces minuscules écarts.

::demo-cta{path="/invoices"}
::

## Dans quelle langue seront les factures ?

Vous choisissez dans **Settings > Invoices** (`/settings/invoices`) :

- **From the guest's country** : chaque facture utilise la langue du pays de l'adresse du client. Si le pays manque ou n'est pas reconnu, votre langue de repli s'applique.
- **Always the same language** : toutes les factures dans une seule langue, quel que soit le client.

Choisissez la **Fallback language** et appuyez sur **Save changes**.

## Ce qu'il faut envoyer à votre comptable chaque trimestre

Une routine courte qui évite la plupart des e-mails de relance :

1. **Lancez la génération du trimestre** quelques jours après sa fin, pour que les derniers départs soient clôturés.
2. **Traitez la page Errors** jusqu'à ce qu'il ne reste que les séjours qui n'exigent vraiment pas de facture.
3. **Téléchargez le ZIP et le CSV** et envoyez les deux.
4. **Parcourez les numéros de facture** pour repérer les sauts ou les doublons de numérotation avant d'envoyer.
5. **Mentionnez les factures annulées.** Dans Little Hotelier, annuler une facture définitive la fait passer dans **Older invoices** avec le statut Cancelled, et ses données apparaissent toujours dans les exports ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). Votre comptable doit le savoir pour que le chiffre d'affaires ne soit pas compté deux fois.

En Espagne, cela alimente la déclaration de TVA ([modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml)). Si vous utilisez VeriFactu, Little Hotelier finalise les factures en les transmettant lui-même à l'AEAT ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)). Hotelier Tools n'a pas de fonction VeriFactu propre : gardez donc cette étape dans Little Hotelier. Dans tout pays où la facturation électronique est obligatoire, considérez le ZIP comme des copies pour vos archives et vérifiez les règles avec votre comptable.

Les développeurs peuvent aussi récupérer les factures PDF une par une via l'[API REST de Hotelier Tools](/blog/little-hotelier-api). Et si votre comptable veut aussi les données de réservation, lisez [comment exporter les réservations vers Excel](/blog/export-little-hotelier-reservations-excel).

## Résumé

- Le **rapport Invoices** de Little Hotelier zippe les PDF des factures qui existent déjà ; le **rapport Accounting** exporte les factures définitives en CSV pour Xero ou QuickBooks.
- Aucun des deux ne crée les factures manquantes ni n'empêche les doublons et les factures précoces.
- Hotelier Tools génère une période en une seule exécution, refuse les factures risquées, liste chaque échec avec sa raison et vous donne un ZIP et un CSV par trimestre.
- Pour ne plus accumuler de retard, [envoyez chaque facture automatiquement au départ du client](/blog/send-invoice-to-guest-at-checkout). Découvrez tout ce que fait la fonction de facturation sur la [page Facturation](/tools/bot/invoicing).
