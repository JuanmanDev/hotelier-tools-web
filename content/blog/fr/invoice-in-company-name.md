---
title: "Facturer une entreprise plutôt que le client dans Little Hotelier (et laisser les clients demander leur facture)"
seoTitle: "Facture au nom d'une entreprise dans Little Hotelier"
description: "Mettre le nom et le numéro fiscal d'une entreprise sur une facture Little Hotelier, ce que doit contenir une facture complète, et le formulaire client."
date: 2026-10-27
updated: 2026-11-05
category: invoicing
tags: [factures, facture entreprise, little hotelier, booking.com, informations client, départ]
keywords: [facture hôtel au nom de l'entreprise, little hotelier facture nom entreprise, changer le nom sur une facture d'hôtel, client demande facture au nom de sa société, facture hôtel numéro de tva intracommunautaire, booking.com client veut une facture entreprise, mentions obligatoires facture hôtel, facture hôtel agence de voyages]
feature: invoicing
demoPath: /invoice-on-leave/links
cover: /images/blog/demo/en/guest-invoice-links.webp
coverAlt: "Page Guest invoice links de Hotelier Tools : boutons New link et Settings, une introduction en quatre étapes (créer un lien, l'envoyer, le client remplit le formulaire, vérifier), Waiting for your review sans rien en attente, et le tableau All links avec les clients, les références de réservation, les dates de séjour, le statut Used, Active ou Expired, et Automatic invitation comme créateur"
faq:
  - q: "Comment mettre le nom d'une entreprise sur une facture Little Hotelier ?"
    a: "Ajoutez les informations de l'entreprise à la réservation avant de générer la facture. Le centre d'aide de Little Hotelier indique de saisir le nom de l'entreprise dans la section Primary contact de l'onglet Details, son numéro fiscal dans le champ ID number, et les lignes d'adresse supplémentaires sous Organisation. Générez ensuite la facture."
  - q: "Peut-on changer le nom sur une facture déjà émise ?"
    a: "Modifiez les informations de la réservation, puis générez une facture corrigée : Little Hotelier marque l'ancienne comme obsolète. Si la facture était marquée comme définitive, annulez-la d'abord, ou, en Espagne avec VeriFactu, utilisez Rectify invoice. Vérifiez avec votre comptable comment votre pays traite les corrections."
  - q: "Que doit contenir une facture d'entreprise en Espagne ?"
    a: "Une facture complète (factura completa) exige un numéro et une série, la date d'émission, le nom complet, le numéro fiscal (NIF) et l'adresse de vous-même et de l'entreprise, une description du séjour, le taux de TVA et le montant de TVA indiqué à part. Une facture simplifiée pour un hébergement n'est autorisée que jusqu'à 400 euros TTC."
  - q: "Les clients peuvent-ils saisir eux-mêmes les informations de leur entreprise pour la facture ?"
    a: "Pas avec Little Hotelier seul. Les liens de facture de Hotelier Tools donnent à chaque client une page privée où il vérifie ce qui est enregistré, ajoute l'entreprise, le numéro fiscal et l'adresse, et peut demander que la facture lui soit envoyée par e-mail à son départ. Vous choisissez les champs obligatoires."
  - q: "Un client peut-il redemander sa facture après son départ ?"
    a: "Oui, avec Hotelier Tools. Une fois le séjour facturé ou terminé, le lien du client propose Send my invoice again. Little Hotelier envoie la même facture à l'adresse de la réservation, 3 fois au maximum, à 12 heures d'intervalle. Rien de nouveau n'est émis."
  - q: "Hotelier Tools fait-il partie de Little Hotelier ou de Booking.com ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à SiteMinder, Little Hotelier ou Booking.com, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel, et la facture est le document de Little Hotelier lui-même."
---

Pour facturer une entreprise plutôt que le client, mettez le nom, le numéro d'identification fiscale et l'adresse de l'entreprise sur la réservation **avant** de générer la facture. Dans Little Hotelier, cela passe par le **Primary contact** de l'onglet **Details** de la réservation, le champ **ID number** et **Organisation**. Si la facture existe déjà, modifiez les informations et générez une facture corrigée. Hotelier Tools ajoute deux raccourcis : un éditeur **Billing and address** (facturation et adresse) sur chaque réservation, et un lien privé où les clients saisissent eux-mêmes les informations de leur entreprise.

## « À un autre nom » : adressée à qui, émise par qui ?

Deux demandes différentes se cachent derrière « une facture à un autre nom » :

- **Adressée À quelqu'un d'autre.** Une entreprise paie le séjour de son salarié, ou une agence de voyages paie celui de son client. La facture vient toujours de votre établissement ; seul le bloc client change. C'est le cas courant, et l'essentiel de ce guide.
- **Émise PAR quelqu'un d'autre.** Une autre entité émet la facture : une autre société qui exploite certaines de vos chambres, ou le propriétaire en son nom propre pour une partie des séjours. Cela change votre propre en-tête, pas celui du client. C'est rare, et traité à la fin.

Ne les confondez jamais. L'entreprise du client va dans le bloc client, jamais dans votre en-tête.

## Que doit contenir une facture d'entreprise ?

Dans l'UE, une facture complète avec TVA comporte la date d'émission, un numéro unique et séquentiel, votre nom et votre adresse ainsi que ceux du client, le numéro de TVA du client lorsque celui-ci est redevable de la taxe, une description du service, le prix hors taxes, le taux de TVA et le montant de TVA ([Commission européenne](https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en)).

En Espagne, l'administration fiscale liste ce que doit comporter une **factura completa** (facture complète) ([AEAT : contenido de las facturas](https://sede.agenciatributaria.gob.es/Sede/iva/facturacion-registro/facturacion-iva/contenido-facturas.html)) :

- un numéro et, si vous en utilisez une, une série, avec une numérotation consécutive
- la date d'émission, et la date du séjour si elle diffère
- le nom complet ou la raison sociale, le NIF et l'adresse de vous-même **et** du client
- une description du service, le prix unitaire hors taxes et toute remise
- le taux de TVA et le montant de TVA, indiqués à part

Une **factura simplificada** (facture simplifiée) ne comporte pas les informations du client. Pour un hébergement, elle n'est autorisée que jusqu'à **400 euros TTC**. La limite de 3 000 euros concerne la restauration et les bars, pas les chambres ([AEAT : facturas simplificadas](https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-iva-2026/capitulo-10-obligac-formales-suj-registro/obligaciones-materia-facturacion/facturas-simplificadas.html)). Un client professionnel qui veut déduire la TVA a besoin de la facture complète au nom de l'entreprise : demandez donc la raison sociale, le numéro fiscal et l'adresse.

## Comment mettre le nom d'une entreprise sur une facture Little Hotelier

Little Hotelier n'a pas d'option séparée « facturer une entreprise ». Son centre d'aide décrit cette méthode, en novembre 2026 ([FAQ Reservations](https://helpcentre.littlehotelier.com/en/articles/8674048-reservations-frequently-asked-questions)) :

1. Ouvrez la réservation et allez dans l'onglet **Details**.
2. Dans **Primary contact**, saisissez le nom de l'entreprise. La facture imprime le nom sans les libellés des champs.
3. Saisissez le numéro fiscal de l'entreprise dans le champ **ID number**. Il s'imprime juste sous le nom de l'entreprise.
4. Ajoutez si besoin des éléments d'adresse sous **Organisation**.
5. Gardez les vrais clients dans l'onglet **Guests**, comme le recommande Little Hotelier.
6. Allez dans **Invoices**, cliquez sur **Generate invoice**, puis **Email** > **Invoice** ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice)).

Vos propres informations en haut (titre, numérotation, logo) se règlent une fois pour toutes dans **Customise invoices** ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8910582-customise-guest-invoices)).

**Déjà émise ?** Modifiez les informations, et l'onglet **Invoices** affiche **Invoice is outdated** : cliquez dessus pour générer une facture corrigée. Si vous l'aviez marquée comme définitive, annulez-la et générez-la à nouveau ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). En Espagne avec VeriFactu, une facture définitive se modifie par **Rectify invoice** ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)).

### Clients Booking.com et agences de voyages

Booking.com indique que c'est l'établissement qui facture le client, à son nom ou à un autre nom convenu avec lui, et que Booking.com n'apparaît jamais comme vendeur ([Booking.com Partner Hub](https://partner.booking.com/en-gb/help/policies-payments/guest-payments/supplying-guests-invoices)). Un client Booking.com peut donc demander le nom de son employeur. Un voyageur d'affaires qui appuie sur **Request invoice** dans Booking.com for Business vous envoie simplement un message avec les informations ([aide Booking.com for Business](https://help.business.booking.com/hc/en-gb/articles/14862570197268-How-can-I-get-my-invoice)).

Pour une agence de voyages qui vous paie directement, c'est l'agence votre client : son nom, son numéro fiscal et son adresse figurent sur la facture, et le nom du voyageur peut aller dans la description.

## Comment les clients peuvent-ils envoyer eux-mêmes leurs informations de facturation ?

Avec Little Hotelier seul, ils ne le peuvent pas. Le client vous écrit, quelqu'un ressaisit les informations de l'entreprise dans la réservation, et la demande se perd si personne n'y donne suite avant le départ. Les e-mails automatiques de Little Hotelier aux clients ne demandent pas les informations de facturation ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8910590-customise-guest-emails)).

## La méthode rapide : informations de facturation, liens clients et renvoi dans Hotelier Tools

Hotelier Tools fonctionne par-dessus votre compte Little Hotelier. Ces fonctionnalités font partie d'**Invoice on Leave**, en bêta.

| Situation | Où dans Hotelier Tools |
|---|---|
| Vous avez les informations de l'entreprise et voulez les saisir | **Guests** > **Billing and address** sur la réservation |
| Le client doit envoyer lui-même les informations | **Guest links** (`/invoice-on-leave/links`) |
| Chaque client qui part doit être sollicité | **Guest link settings** > **Invite every guest** |
| Le client n'a jamais reçu la facture | **Send again** sur la réservation, ou **Send my invoice again** sur le lien du client |
| La facture doit être émise par une autre entité | **Invoices in another name** (`/invoices/issuers`) |

### Modifier les informations de facturation sur la réservation

1. Ouvrez **Reservations** (`/reservations`) et cliquez sur le séjour.
2. Dans **Guests**, repérez **Billing and address** (« Who the invoice is made out to. Saved straight to Little Hotelier. », c'est-à-dire à qui la facture est adressée, enregistré directement dans Little Hotelier) et cliquez sur **Edit**.
3. Remplissez **Company**, **Tax ID or document number**, **Address**, **City**, **State or province**, **Postcode** et **Country**, puis **Save**.

La modification est écrite dans la fiche client principale de Little Hotelier. Si quelqu'un a modifié la réservation après que vous l'avez ouverte, rien n'est écrasé et vous voyez ce que contient Little Hotelier à ce moment-là. Un numéro fiscal qui n'en a pas l'air (8 à 16 lettres et chiffres, dont au moins un chiffre) est refusé. Une fois une facture émise, l'entreprise et le numéro fiscal ne peuvent plus être modifiés ici : corrigez-les dans Little Hotelier et émettez la facture à nouveau.

::screenshot{src="/images/blog/demo/en/reservation-billing-address.webp" alt="Volet de réservation de Camila Berg, une réservation Booking.com : la section Guests avec la carte Billing and address et son bouton Edit, avec Company et Tax ID or document number vides, l'adresse Calle Ejemplo 1, la ville Demo City, le code postal 08001 et le pays Netherlands" caption="Saisissez l'entreprise une fois sur la réservation. Elle part directement dans Little Hotelier, et la prochaine facture l'imprime." path="/reservations"}
::

### Envoyer au client un lien privé

Un lien de facture client est une page privée pour une réservation. Le client voit ce qui est enregistré (en partie masqué), ajoute ou corrige l'entreprise, le numéro fiscal et l'adresse, et peut cocher **Email me the invoice when I check out** (m'envoyer la facture par e-mail à mon départ).

1. Ouvrez **Guest link settings** (`/invoice-on-leave/links/settings`) et activez **Guest links**.
2. Sous **What guests may change**, réglez chaque champ sur non demandé, facultatif ou obligatoire. L'e-mail et le téléphone ne sont jamais modifiables : ce sont eux qui déterminent qui reçoit la facture.
3. Sous **Message for guests**, rédigez le texte affiché en haut du formulaire, une fois par défaut et, si vous le souhaitez, une fois par langue.
4. Choisissez **How changes are applied** : **Fill blanks automatically** (les nouvelles informations vont directement dans Little Hotelier, les changements d'informations déjà enregistrées attendent votre vérification) ou **Review everything** (tout vérifier).
5. Sur **Guest links** (`/invoice-on-leave/links`), appuyez sur **New link**, trouvez la réservation, et choisissez **Create and copy link** ou **Create and email to the guest**. L'e-mail part à l'adresse de la réservation.

Ce que le client envoie et qui modifie une information enregistrée apparaît sous **Waiting for your review**, avec **Approve and apply** ou **Reject**. Avant d'écrire, Hotelier Tools relit la réservation, et une information modifiée par votre équipe après l'envoi du lien attend toujours une personne. Un client qui coche la case du départ est inscrit dans Invoice on Leave : la facture est générée et envoyée par e-mail après son départ.

::screenshot{src="/images/blog/demo/en/guest-invoice-links.webp" alt="Page Guest invoice links : boutons New link et Settings, l'introduction Let guests fill in their own invoice details en quatre étapes, Waiting for your review indiquant Nothing is waiting for a person, et le tableau All links où Greta A. a utilisé son lien, Pierre M. en a un actif et celui d'Aisha M. a expiré, tous créés par Automatic invitation" caption="Chaque lien, qui l'a créé et si le client l'a utilisé. Ce qui demande une personne attend en haut." path="/invoice-on-leave/links"}
::

Plusieurs règles de sécurité sont intégrées. Un lien affiché une fois ne peut plus être réaffiché : si vous le perdez, appuyez sur **Get a new link**, qui désactive l'ancien. Les liens à usages multiples demandent toujours d'abord le nom de famille ou la référence de réservation, et cinq mauvaises réponses bloquent le lien. Un lien fonctionne au moins 48 heures et au plus 90 jours.

### Inviter chaque client au départ

Au lieu d'envoyer les liens un par un, activez **Invite every guest** dans **Guest link settings**. Chaque jour, à l'heure que vous choisissez, chaque client des séjours que vous sélectionnez reçoit son propre lien : **On the check-out day** (le jour du départ, recommandé), **The day before check-out** (la veille du départ), **On the arrival day** (le jour de l'arrivée) ou **Another day** (un autre jour). Il part par **Email** à l'adresse de la réservation (Booking.com et Expedia le transmettent), par **WhatsApp** quand un numéro de téléphone a son indicatif pays, ou les deux. Chaque séjour n'est invité qu'une fois.

::screenshot{src="/images/blog/demo/en/guest-invoice-links-invite.webp" alt="Guest link settings, carte Invite every guest : When réglé sur On the check-out day (recommended) à 11:00, How réglé sur Email (recommended), Skip stays already invoiced et Guests can ask for their invoice again activés, la liste Invitations sent avec Run now, et à droite What the guest sees, un aperçu du formulaire avec des champs facultatifs pour le nom de l'entreprise, le numéro de pièce d'identité ou de passeport, le type de document, le pays, le code postal et la ville" caption="Un seul réglage, et chaque client qui part reçoit un lien privé pour demander sa facture." path="/invoice-on-leave/links/settings"}
::

**Skip stays already invoiced** (ignorer les séjours déjà facturés) est activé par défaut. Désactivez-le, et ces clients sont informés que leur facture a été envoyée par e-mail, avec un lien pour se la faire renvoyer. Un **Reminder** (rappel) peut écrire aux clients qui n'ont pas rempli le formulaire au bout de 1 à 14 jours ; il envoie un nouveau lien et le précédent cesse de fonctionner.

### Renvoyer une facture déjà émise

Quand un client dit ne jamais avoir reçu la facture, ouvrez la section **Invoices** de la réservation et appuyez sur **Send again**. Little Hotelier envoie la même facture à l'adresse de la réservation. Rien de nouveau n'est émis.

Les clients peuvent aussi le faire eux-mêmes. Avec **Guests can ask for their invoice again** activé (le réglage par défaut), la page du client propose **Send my invoice again** une fois le séjour facturé ou terminé. L'envoi part toujours à l'adresse de la réservation, 3 fois au maximum, à 12 heures d'intervalle, et la page n'indique jamais si une facture existe.

### Les demandes de facture Booking.com dans la boîte de réception

Quand un client appuie sur la demande de facture de Booking.com, Booking.com envoie un message fixe avec le nom de l'entreprise, le numéro fiscal et des « informations complémentaires ». La boîte de réception de Hotelier Tools (alpha) reconnaît ces deux modèles sans IA. Son analyse propose les informations de l'entreprise et la facture au départ sur une seule carte, avec une réponse dans la langue du client. Rien ne change tant que vous n'avez pas validé la carte. Voir [les messages clients Booking.com](/blog/booking-com-guest-messages).

### Quand la facture doit être émise par une autre entité

Si certains séjours doivent être facturés **par** une autre société ou par le propriétaire, utilisez **Invoices in another name** (`/invoices/issuers`). La fonction est désactivée tant que vous n'activez pas **Invoice issuer per reservation** dans **Settings > Invoices**. Ensuite :

1. Créez un émetteur avec **New issuer** : nom, numéro fiscal, adresse, téléphones, e-mail et, si vous le souhaitez, titre de facture et logo.
2. Sur la réservation, sous **Invoices**, choisissez **Invoice in another name…** et sélectionnez l'émetteur, ou **Save and issue invoice**.
3. Hotelier Tools écrit une balise dans les notes de la réservation, remplace pendant quelques secondes les informations de l'établissement dans Little Hotelier par celles de cet émetteur, génère et envoie la facture, puis remet vos propres informations.

::screenshot{src="/images/blog/demo/en/invoice-issuers-overview.webp" alt="Page Invoices in another name : l'avertissement Always ask Hotelier Tools for these invoices, et le schéma How it works avec trois réservations, une sans balise qui imprime Hotel Demo Sol, une avec la balise #INVOICE_ISSUER:K7QM# qui imprime Acme Rooms S.L., une avec la balise #INVOICE_ISSUER:M2LP# qui imprime María López (self-employed)" caption="Chaque réservation peut être facturée par une entité différente. Seul Hotelier Tools lit la balise." path="/invoices/issuers"}
::

Connaissez les limites avant de vous en servir :

- **Émettez ces factures uniquement depuis Hotelier Tools.** Little Hotelier ne lit pas la balise : son propre bouton de facture imprime les informations de votre établissement.
- **Tous les émetteurs partagent votre numérotation de factures** dans Little Hotelier. En Espagne, chaque émetteur a normalement besoin de sa propre série. Vérifiez d'abord avec votre comptable.
- **Pendant quelques secondes, Little Hotelier porte l'autre émetteur.** Une exécution de nuit facultative (recommandée à 02:30) émet ces factures quand personne d'autre ne facture.
- Une facture déjà émise garde son émetteur. Une correction se fait par un avoir dans Little Hotelier.

La démo a déjà un deuxième émetteur configuré : **Sol Experiencias S.L.**, la société d'excursions inventée de l'hôtel, facture les séjours vendus en forfait. Sa carte compte deux séjours facturés à son nom et deux en attente de leur facture.

::screenshot{src="/images/blog/demo/en/invoice-issuers-sol-experiencias.webp" alt="Page Invoices in another name, The configuration now : Invoice issuer per reservation On, Invoice title and logo Off, Night run Off, Little Hotelier affichant les informations de l'établissement ; l'émetteur de l'établissement Hotel Demo Sol à côté de l'émetteur Paquetes con excursión (#INVOICE_ISSUER:EXS7#) de Sol Experiencias S.L., avec 2 waiting et 2 invoiced ; l'exécution de nuit pas encore configurée ; et Reservations using another issuer, avec Tomas Demir et Hannah Marino en attente de facture, Camila Okafor et Lucia Costa facturées" caption="Chaque émetteur liste les séjours qui portent sa balise : déjà facturés à son nom ou en attente de leur facture." path="/invoices/issuers"}
::

::demo-cta{path="/invoice-on-leave/links"}
::

Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027. Tout ce que fait la fonction de facturation est décrit sur la [page Facturation](/tools/bot/invoicing).

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à SiteMinder, Little Hotelier ou Booking.com, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel, et la facture est le document de Little Hotelier lui-même.
::

À lire aussi : [envoyer la facture automatiquement au départ du client](/blog/send-invoice-to-guest-at-checkout), [télécharger toutes vos factures Little Hotelier](/blog/download-all-little-hotelier-invoices), [les messages clients Booking.com](/blog/booking-com-guest-messages).

## Résumé

- Une facture pour une entreprise vous garde comme vendeur et place le nom, le numéro fiscal et l'adresse de l'entreprise dans le bloc client.
- Dans Little Hotelier : le nom de l'entreprise dans **Primary contact**, le numéro fiscal dans **ID number**, puis **Generate invoice**. Déjà émise ? Générez une facture corrigée.
- En Espagne, un client professionnel a besoin d'une **factura completa** ; une facture simplifiée pour une chambre n'est autorisée que jusqu'à 400 euros TTC.
- Hotelier Tools vous permet de modifier **Billing and address** sur la réservation, d'envoyer aux clients un lien privé pour saisir leurs propres informations, d'inviter chaque client au départ, et de renvoyer une facture déjà émise.
- Les factures émises **par** une autre entité sont une fonction distincte, à activer, avec de vraies limites : numérotation partagée, et uniquement depuis Hotelier Tools.
