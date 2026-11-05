---
title: "Récupérer automatiquement les factures fournisseurs par e-mail (et remettre un trimestre propre à votre comptable)"
seoTitle: "Recevoir automatiquement les factures fournisseurs par mail"
description: "Recevez les factures fournisseurs sur une adresse ou lisez votre boîte mail, vérifiez-les, repérez doublons et IBAN modifiés, et exportez le trimestre."
date: 2026-10-31
category: invoicing
tags: [factures fournisseurs, comptabilité fournisseurs, e-mail, comptable, tva, facturae]
keywords: [récupérer factures fournisseurs automatiquement, extraire factures pièces jointes e-mail, adresse e-mail factures fournisseurs, factures d'achat hôtel comptable, durée de conservation factures espagne, nommage fichiers factures, détecter factures fournisseurs en double, fraude changement rib fournisseur, exporter factures reçues pour le comptable]
feature: invoicing
demoPath: /received-invoices
cover: /images/blog/demo/en/supplier-invoices-review-iban-warning.webp
coverAlt: "Facture reçue d'Electra Norte, To review, de 218,70 € : boutons Confirm, Mark as duplicate et Reject, un encadré rouge Check this invoice before you confirm it indiquant que l'IBAN n'est pas celui des factures précédentes de ce fournisseur, une case I checked this supplier through a known channel non cochée avec un bouton Acknowledge, et les détails de l'e-mail avec l'expéditeur, l'objet en espagnol, la boîte reservas@example.com, Sender check Not available et Email risk Medium risk"
faq:
  - q: "Comment récupérer automatiquement les factures fournisseurs depuis les e-mails ?"
    a: "Soit vous donnez aux fournisseurs une adresse qui ne reçoit que des factures, soit vous laissez un logiciel lire la boîte mail à laquelle ils écrivent déjà. Dans Hotelier Tools, vous pouvez faire les deux : chaque établissement a une adresse privée pour les factures, et les messageries connectées peuvent être parcourues chaque jour, en lecture seule, à la recherche de factures en pièce jointe."
  - q: "Combien de temps faut-il conserver les factures fournisseurs en Espagne ?"
    a: "Au moins quatre ans pour l'administration fiscale, le délai de prescription de la Ley General Tributaria, comme l'explique l'Agencia Tributaria. Le Código de Comercio demande de conserver la documentation six ans, c'est pourquoi beaucoup de comptables conseillent de tout garder six ans."
  - q: "Peut-on conserver les factures fournisseurs uniquement en PDF ou en scan ?"
    a: "En Espagne, oui, à condition que la méthode garantisse l'authenticité de l'origine, l'intégrité du contenu et la lisibilité, et que l'administration fiscale puisse y accéder sans délai. Gardez le fichier original reçu, pas une copie ressaisie."
  - q: "Comment repérer une fausse facture fournisseur ?"
    a: "Méfiez-vous quand le compte bancaire diffère des factures précédentes, que le domaine de l'expéditeur a changé ou que l'e-mail échoue à son contrôle d'authenticité. Hotelier Tools signale ces cas et bloque la confirmation ou le paiement jusqu'à ce qu'une personne valide l'avertissement après avoir appelé le fournisseur à un numéro qu'elle connaît déjà."
  - q: "Est-ce l'IA qui décide de ce qui entre dans ma comptabilité ?"
    a: "Non. Chaque facture démarre en To review. Les factures électroniques sont lues à l'identique et l'IA lit les PDF et les photos, mais seule une personne peut confirmer une facture ou la marquer comme payée, et ce qu'une personne corrige n'est jamais écrasé par une nouvelle lecture."
  - q: "Hotelier Tools fait-il partie de Little Hotelier ou de mon logiciel de comptabilité ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Son export des factures reçues est un CSV et un ZIP génériques pour votre comptable, pas un registre fiscal certifié."
---

Pour récupérer automatiquement les factures fournisseurs, envoyez-les toutes au même endroit et laissez un logiciel en extraire les fichiers : donnez aux fournisseurs une adresse dédiée aux factures, ou faites lire par un outil la boîte mail à laquelle ils écrivent déjà. Dans Hotelier Tools, les fournisseurs peuvent écrire à une adresse privée de votre établissement, ou votre messagerie connectée est parcourue chaque jour, en lecture seule. Les factures électroniques sont lues à l'identique, l'IA lit les PDF et les photos, et une personne vérifie chaque facture avant qu'elle n'entre dans le trimestre que vous exportez pour votre comptable.

## Pourquoi votre comptable veut des factures fournisseurs bien rangées

Les factures fournisseurs sont l'autre moitié de la comptabilité. Votre comptable en a besoin pour :

- **Déduire la TVA sur les achats.** En Espagne, la TVA payée sur la blanchisserie, l'électricité ou la commission des OTA se déduit dans le [modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml) trimestriel, et seulement avec une facture valable à l'appui.
- **Tenir le registre des factures reçues.** Les entreprises espagnoles tiennent un « libro registro de facturas recibidas » : une ligne par facture avec la date, le numéro, le numéro fiscal du fournisseur, la base, le taux et la taxe.
- **Enregistrer les charges pour l'impôt sur le revenu ou les sociétés**, et vérifier que ce qui a été payé correspond à ce qui a été facturé.

Le problème habituel, ce n'est pas le travail du comptable. C'est la boîte à chaussures : des factures éparpillées dans trois messageries, une photo WhatsApp, un portail fournisseur, et une qui n'est jamais arrivée.

## Combien de temps conserver les factures fournisseurs ?

Cela dépend du pays. Dans l'UE, l'article 247 de la directive TVA laisse chaque État membre fixer la durée ([texte de l'article 247](https://www.legislation.gov.uk/eudr/2006/112/article/247/adopted)). Pour l'Espagne :

| Règle | Durée | Source |
|---|---|---|
| Fiscale (factures reçues et copies des factures émises) | 4 ans, le délai de prescription de la Ley General Tributaria | [Agencia Tributaria](https://sede.agenciatributaria.gob.es/Sede/iva/facturacion-registro/facturacion-iva/obligacion-conservar-facturas.html) |
| Factures liées à la TVA sur des biens soumis à une période de régularisation | Cette période plus les 4 années suivantes | Même page |
| Commerciale (livres, correspondance, documentation) | 6 ans à compter de la dernière écriture | [Código de Comercio, art. 30](https://www.boe.es/buscar/act.php?id=BOE-A-1885-6627#a30) |

L'Agencia Tributaria précise aussi comment : les factures se conservent « avec leur contenu d'origine, dans l'ordre », sur papier ou sous forme électronique, à condition que la méthode garantisse l'authenticité de l'origine, l'intégrité du contenu et la lisibilité, et que l'administration fiscale puisse y accéder sans délai. En pratique : gardez le fichier envoyé par le fournisseur, dans l'ordre, et ne supprimez rien de ce que votre comptable a enregistré. Vérifiez la durée applicable dans votre pays avec votre comptable.

## Une convention de nommage qui évite les questions

Si vous classez les factures à la main, nommez chaque fichier de la même façon pour qu'un dossier se trie tout seul :

```text [naming.txt]
2026-10-12_Electra-Norte_EL-20261012.pdf
2026-10-03_Booking.com_BO-20261003.pdf
```

D'abord la date (année-mois-jour, pour un tri chronologique), puis le fournisseur, puis le numéro de facture. Gardez un dossier par trimestre. Ne renommez pas le numéro du fournisseur : c'est grâce à lui que votre comptable rapproche la facture du paiement.

## La méthode rapide : Received invoices dans Hotelier Tools

**Received invoices** (factures reçues, `/received-invoices`) collecte ce que vos fournisseurs envoient, le lit et le garde en attente jusqu'à ce que vous le confirmiez. Il y a quatre portes d'entrée, utilisables ensemble :

| Porte d'entrée | Idéal pour | Ce que vous configurez |
|---|---|---|
| **Adresse de factures** | Les fournisseurs qui peuvent envoyer leurs factures à n'importe quelle adresse | Copiez l'adresse `inv-…` de votre établissement et envoyez-la-leur |
| **Votre propre messagerie** | Les fournisseurs qui écrivent déjà à l'e-mail de l'hôtel | Connectez-la sous Messaging, puis activez **Read for invoices** |
| **Glisser ou coller** | Factures papier, photos, téléchargements depuis des portails | Rien : faites glisser les fichiers sur la page |
| **API REST** | Vos propres scripts | `POST /api/v1/received-invoices/upload` |

Le même fichier n'entre jamais deux fois : quelle que soit la façon dont il arrive, un fichier déjà présent est reconnu à son contenu.

### Option 1 : donner votre adresse de factures aux fournisseurs

1. Ouvrez **Settings > Received invoices** (`/settings/received-invoices`), trouvez **Invoice address** et appuyez sur **Create the address**.
2. Appuyez sur **Copy** et envoyez-la à vos fournisseurs. Vous pouvez aussi y transférer les factures que vous avez déjà.
3. Laissez la tâche **Read the hotel mailbox** active (toutes les 5 minutes est conseillé).

L'adresse ressemble à `inv-7k2m9qx4hp@in.hotelier.tools`. Elle n'appartient qu'à votre établissement et ne demande aucun mot de passe de messagerie. Le fonctionnement de ces adresses, et ce qu'elles ne sont pas, est expliqué dans [une adresse e-mail d'hôtel pour les factures et les accès](/blog/hotel-email-address).

### Option 2 : parcourir la boîte mail que les fournisseurs utilisent déjà

1. Connectez la messagerie (Google, Microsoft ou tout compte IMAP) sous **Messaging > Channels**.
2. Sur **Received invoices**, ouvrez le **Setup guide** (guide de configuration). Il comporte quatre étapes :
   - **Choose the mailboxes your suppliers write to** : choisissez les messageries auxquelles vos fournisseurs écrivent et activez-les.
   - **Choose how far back to read** : **The past** N jours, mois ou années, ou **Since the start of this** semaine, mois, trimestre ou année. 5 ans en arrière au maximum.
   - **Read the mail you already have** avec **Read the mail now**. Les longues reprises d'historique s'arrêtent au bout d'un moment et le balayage quotidien lit le reste.
   - **Read new mail every day** : le balayage programmé, conseillé à 06:20.
3. Dans **Settings > Received invoices**, affinez chaque messagerie : **Folders to read** (dossiers à lire), **Always read mail from** (les adresses exactes de vos fournisseurs) et **Never read mail from**.

La lecture se fait en lecture seule : rien n'est marqué comme lu, déplacé ni supprimé, et les dossiers Spam, Envoyés, Corbeille et Brouillons ne sont jamais lus. Un message compte comme une facture quand il vient d'un fournisseur connu, contient une facture électronique en pièce jointe, mentionne un mot lié aux factures (« invoice », « factura », « fattura »…) ou porte une photo.

::screenshot{src="/images/blog/demo/en/supplier-invoices-mailbox-settings.webp" alt="Réglages Received invoices : la carte Suggestions avec Suggest invoices that have not arrived activé et 24 mois d'historique, et la carte Mailboxes avec reservas@example.com connectée, Read for invoices activé, INBOX comme dossier à lire, un premier balayage sur 120 jours, et les listes Never read mail from et Always read mail from vides" caption="Chaque messagerie n'est lue qu'une fois activée, et uniquement pour les factures." path="/settings/received-invoices"}
::

### Option 3 : déposer les fichiers

Faites glisser des PDF, des photos (PNG, JPEG, WebP) et des fichiers XML de factures électroniques sur la page, ou appuyez sur **Choose files**. Jusqu'à 20 fichiers à la fois, 15 Mo chacun. Vous pouvez aussi coller une photo. Les photos HEIC d'iPhone ne sont pas encore lues : exportez-les d'abord en JPEG.

## Comment chaque facture est lue

- **Les factures électroniques sont lues à l'identique.** Les fichiers XML Facturae, UBL et CII sont analysés par du code, sans IA et sans coût. Un fichier Facturae contenant plusieurs factures donne plusieurs lignes. Une signature est indiquée comme présente, pas comme vérifiée.
- **L'IA lit les PDF et les photos.** PDF jusqu'à 10 Mo et six pages, photos jusqu'à 5 Mo. Chaque lecture consomme votre quota mensuel d'IA, le même que pour les réponses aux clients, et affiche ses tokens et son coût sur la facture. Par défaut, l'IA lit au maximum 40 factures par jour ; vous pouvez le modifier.
- **Les pièces jointes des e-mails vous attendent par défaut.** **Read email attachments automatically** reste désactivé tant que vous ne l'activez pas, et un e-mail avec des avertissements de fraude n'est jamais lu par une machine.

Chaque champ indique d'où vient sa valeur (**E-invoice**, **AI** ou **You**). Ce que vous corrigez n'est jamais écrasé par une nouvelle lecture.

## Comparer avec l'original, puis confirmer

Chaque facture démarre en **To review** (à vérifier). Ouvrez-la, comparez les champs avec l'original affiché à côté, et appuyez sur **Confirm** (ou **Confirm and next** pour avancer dans la file). Plus tard, **Mark as paid** avec la date. Quelque chose ne va pas ? **Mark as duplicate**, ou **Reject** avec un motif : **Not for this property**, **Not an invoice**, **Spam or fraud** ou **Other**. Un fichier rejeté n'est jamais réimporté par le balayage de la messagerie.

::screenshot{src="/images/blog/demo/en/supplier-invoices-review-iban-warning.webp" alt="Facture reçue d'Electra Norte, To review, de 218,70 € : boutons Confirm, Mark as duplicate et Reject, un encadré rouge Check this invoice before you confirm it indiquant que l'IBAN n'est pas celui des factures précédentes de ce fournisseur, une case I checked this supplier through a known channel non cochée avec un bouton Acknowledge, et les détails de l'e-mail avec l'expéditeur, l'objet en espagnol, la boîte reservas@example.com, Sender check Not available et Email risk Medium risk" caption="Un compte bancaire modifié bloque Confirm jusqu'à ce que quelqu'un ait vérifié auprès du fournisseur par téléphone." path="/received-invoices"}
::

### Les avertissements qui empêchent un mauvais paiement

La fraude fournisseur la plus courante est simple : une facture qui a l'air normale, avec un nouveau compte bancaire. Hotelier Tools compare chaque facture avec l'historique du fournisseur et l'e-mail par lequel elle est arrivée :

- **Le compte bancaire (IBAN) n'est pas celui des factures précédentes de ce fournisseur.** Seuls les quatre derniers chiffres sont conservés.
- **L'adresse de l'expéditeur a échoué à son contrôle d'authenticité (DMARC).** La page de la facture affiche une ligne **Sender check** (**Passed**, **Failed** ou **Not available**), lue dans l'en-tête du serveur de messagerie lui-même, jamais dans la ligne From.
- **L'e-mail d'origine porte des avertissements de fraude**, la facture est adressée au numéro fiscal d'une autre société, l'émetteur est votre propre établissement, ou le PDF contient des scripts.

Chacun de ces cas bloque **Confirm** et **Mark as paid** jusqu'à ce qu'une personne coche **I checked this supplier through a known channel** et appuie sur **Acknowledge**. Appelez le fournisseur à un numéro que vous avez déjà, jamais à celui de l'e-mail. Aucune clé d'API ni aucun outil d'IA ne peut valider à votre place.

Les avertissements plus légers ne bloquent pas, mais ils s'affichent : les montants ne correspondent pas, la clé de contrôle du numéro fiscal est fausse, le fournisseur écrit d'habitude depuis un autre domaine.

### Doublons

Une facture est signalée comme doublon possible quand une autre a le même numéro fiscal de fournisseur et le même numéro de facture, ou le même fournisseur et le même total avec une date d'émission à trois jours près. C'est vous qui décidez : **Mark as duplicate** et choisissez l'original ; la facture reste dans la liste, exclue des totaux.

### Ce que vous ne pouvez jamais faire

Supprimer une facture confirmée ou payée. Elle est conservée (quatre ans en Espagne) et ne peut qu'être rejetée, ce qui l'exclut des totaux et de l'export.

## Exporter le trimestre pour votre comptable

1. Sur **Received invoices**, la liste est groupée par défaut en trimestres civils (T1 = janvier à mars, comme pour le modelo 303). Vous pouvez grouper par mois, année, fournisseur ou catégorie, et choisir le mois de début de votre exercice.
2. Appuyez sur **Export for accountant** sur un trimestre.
3. Choisissez **Confirmed and paid invoices** (par défaut) ou **Also the ones waiting for review**, et **ZIP with the originals and the CSV** ou **CSV only**.
4. Cochez éventuellement **List the invoices that have not arrived**.

Le ZIP contient un fichier par facture, **nommé par date, fournisseur et numéro**, un CSV organisé comme le libro registro de facturas recibidas (une ligne par ligne de taxe) et un README. Jusqu'à 500 fichiers par export.

::screenshot{src="/images/blog/demo/en/supplier-invoices-export-dialog.webp" alt="Fenêtre Export for the accountant pour la période 2026 : Confirmed and paid invoices sélectionné, ZIP with the originals and the CSV sélectionné, List the invoices that have not arrived non coché, 29 factures à exporter et un avis précisant que 3 factures en attente de vérification ne sont pas incluses" caption="Un trimestre, un ZIP : les originaux renommés plus un CSV au format du registre." path="/received-invoices"}
::

Soyez honnête avec votre comptable sur un point : le CSV suit la présentation du registre, mais il n'est **pas certifié** par l'administration fiscale. C'est lui qui décide de ce qui entre dans la comptabilité.

### Les factures qui manquent peut-être

Pour les fournisseurs qui facturent à un rythme régulier (blanchisserie mensuelle, électricité bimestrielle, gestoría trimestrielle), **Invoices you may be missing** affiche « Expected from Lavandería Sol SL around October 1 » quand la suivante n'est pas arrivée. Ce sont des estimations, pas des dettes. **Not this time** masque une période ; **Stop expecting** masque le fournisseur.

::screenshot{src="/images/blog/demo/en/supplier-invoices-quarter-list.webp" alt="Page Received invoices : messageries lues récemment avec 2 factures importées, la zone Drop invoices here avec Read PDFs and photos with AI activé, des tuiles Spent 25 852,14 €, VAT 796,87 €, IGIC 0,00 €, 3 à vérifier et 1 impayée, Invoices you may be missing avec Lavandería Sol SL en retard depuis le 1er octobre et Electra Norte arrivée et à vérifier, et la tâche Scan the mailboxes en pause" caption="Voyez ce que vous avez dépensé, ce qu'il reste à vérifier, et quelle facture régulière n'est pas encore arrivée." path="/received-invoices"}
::

## Qui peut faire quoi

Donnez à votre comptable son propre accès dans **Settings > Team & roles** (`/settings/team`). Le rôle intégré **accountant** (comptable) peut consulter, modifier et faire lire les factures, mais pas parcourir les messageries. Parcourir le courrier professionnel et dépenser des crédits IA sont des droits distincts que vous accordez volontairement.

L'assistant peut aussi aider : « Quelles factures fournisseurs me manquent pour le T3 ? » ou « Combien de TVA déductible depuis le début du trimestre ? » trouvent leur réponse dans les mêmes données, et tout ce qui modifie une facture attend votre accord.

::demo-cta{path="/received-invoices"}
::

Received invoices fait partie de la [fonction Facturation](/tools/bot/invoicing). Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Les factures reçues restent dans Hotelier Tools ; rien n'est écrit dans Little Hotelier.
::

À lire aussi : [télécharger toutes vos factures Little Hotelier](/blog/download-all-little-hotelier-invoices), [une adresse e-mail d'hôtel pour les factures](/blog/hotel-email-address), [envoyer la facture au client à son départ](/blog/send-invoice-to-guest-at-checkout).

## Résumé

- Centralisez les factures fournisseurs : une adresse privée de factures, votre propre messagerie parcourue chaque jour, ou le glisser-déposer.
- Conservez-les : en Espagne, au moins quatre ans pour le fisc et six ans selon le Código de Comercio, en fichiers originaux, dans l'ordre.
- Les factures électroniques sont lues à l'identique ; l'IA lit les PDF et les photos ; une personne confirme chacune.
- Un IBAN modifié, un contrôle d'expéditeur échoué ou un score de fraude bloque le paiement jusqu'à ce que quelqu'un vérifie auprès du fournisseur.
- Exportez chaque trimestre en ZIP d'originaux renommés avec un CSV au format du registre pour votre comptable.
