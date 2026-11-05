---
title: "Liens de paiement Little Hotelier : en envoyer un, encaisser des acomptes et relancer les clients qui n'ont pas payé"
seoTitle: "Lien de paiement Little Hotelier et relances de paiement"
description: "Envoyez un lien de paiement Little Hotelier, gérez les acomptes et relancez les impayés automatiquement, sans réclamer ce que Booking.com a déjà encaissé."
date: 2026-10-28
updated: 2026-11-05
category: invoicing
tags: [paiements, lien de paiement, little hotelier, siteminder pay, acomptes, automatisation]
keywords: [lien de paiement little hotelier, demande de paiement little hotelier, little hotelier pay demande de paiement, siteminder pay lien de paiement, e-mail de relance de paiement hôtel, relancer un client pour le solde avant l'arrivée, acompte little hotelier, réservation prépayée booking.com little hotelier, little hotelier ota paid]
feature: automated-checks
demoPath: /automated-checks/payments
cover: /images/blog/demo/en/payment-links-modal.webp
coverAlt: "Fenêtre Payment link de Hotelier Tools pour la réservation BBN-DEMO102550 : 759,55 euros dus, le champ du montant, une case SiteMinder Pay emails it to non cochée avec l'e-mail du client, la mention Valid for 48 hours, le bouton Create payment link et aucun lien de paiement antérieur"
faq:
  - q: "Comment envoyer un lien de paiement depuis Little Hotelier ?"
    a: "Ouvrez la réservation dans Front Desk et cliquez sur Send Payment Request. Indiquez le montant, le motif et le message, cliquez sur Create request, puis envoyez-le par e-mail à partir d'un modèle ou copiez le lien pour l'envoyer par messagerie ou SMS. Little Hotelier Pay doit être activé."
  - q: "Combien de temps un lien de paiement Little Hotelier est-il valable ?"
    a: "48 heures à partir de sa création. Ensuite, le client voit que la demande n'est plus active. Une demande ne peut pas être modifiée : annulez-la et créez-en une nouvelle si le montant change."
  - q: "Puis-je envoyer une demande de paiement pour une réservation Booking.com ou Expedia ?"
    a: "Seulement si c'est vous qui encaissez. Les demandes de paiement de Little Hotelier ne fonctionnent ni pour les réservations encaissées par le canal, ni pour les cartes virtuelles des OTA. Un client prépayé sur Booking.com ou en Expedia Collect ne doit être sollicité que pour ce qui a été ajouté à l'établissement."
  - q: "Little Hotelier envoie-t-il automatiquement des relances de paiement ?"
    a: "Son centre d'aide décrit des acomptes automatiques pour les réservations directes et des paiements automatiques qui débitent une carte enregistrée, mais pas d'e-mails de relance pour un solde impayé. Hotelier Tools ajoute par-dessus des règles de relance de paiement, avec le même lien de paiement."
  - q: "Hotelier Tools débite-t-il la carte du client ?"
    a: "Non. Un lien de paiement demande seulement au client de payer sur la page sécurisée de SiteMinder. Hotelier Tools ne voit ni ne stocke jamais de numéro de carte et ne débite jamais une carte."
  - q: "Hotelier Tools fait-il partie de Little Hotelier ou de SiteMinder ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel."
---

Pour envoyer un lien de paiement dans Little Hotelier, ouvrez la réservation et cliquez sur **Send Payment Request**. Saisissez le montant, cliquez sur **Create request**, puis envoyez-le par e-mail ou copiez le lien. Little Hotelier Pay doit être activé, et le lien est valable 48 heures. Little Hotelier ne relance pas pour vous. Les relances de paiement de Hotelier Tools, si : les jours que vous choisissez, elles envoient aux clients qui n'ont pas payé un e-mail avec un lien pour ce qu'ils doivent encore.

Les écrans de Little Hotelier ci-dessous ont été vérifiés d'après son centre d'aide en novembre 2026.

## Comment envoyer une demande de paiement dans Little Hotelier

Les demandes de paiement font partie de **Little Hotelier Pay**, le service de paiement intégré de Little Hotelier. Elles passent par la plateforme de paiement de SiteMinder, c'est pourquoi les écrans de Hotelier Tools les appellent **SiteMinder Pay**. Activez-le d'abord sous **Front Desk > Setup > Guest Payment Options > Payment Gateways**. Les demandes ne fonctionnent pas avec une passerelle de paiement tierce ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8673558-little-hotelier-pay-payment-requests)).

**Sur ordinateur :**

1. Ouvrez la réservation dans Front Desk et cliquez sur **Send Payment Request**.
2. Vérifiez la réservation, le nom du client et le montant, et ajoutez un motif et un message pour le client.
3. Cliquez sur **Create request**.
4. Pour l'envoyer par e-mail, choisissez le modèle d'e-mail, vérifiez l'adresse du client, cliquez sur **Preview email** puis sur **Send request**. Ou copiez le lien et collez-le dans WhatsApp, un SMS ou un e-mail.

**Sur l'application mobile :** ouvrez la réservation, touchez **Take payment**, remplissez l'onglet **Request**, choisissez e-mail, SMS ou lien, et touchez **Send request**.

Ce qu'il faut savoir avant d'en envoyer une :

- **48 heures.** Le lien est valable 48 heures. Ensuite, le client voit que la demande n'est plus active.
- **Pas de modification.** Si le montant change, annulez la demande et créez-en une nouvelle. Annulez-la aussi si la réservation est annulée.
- **Où la suivre.** **My apps > Payments > Payment requests** liste toutes les demandes. Depuis **Actions**, vous pouvez en annuler une ou copier son lien pour le partager de nouveau. Une demande payée apparaît aussi dans l'onglet **Payments** de la réservation.
- **Frais supplémentaires.** Une option **Apply surcharge** apparaît quand vous créez une demande. Les frais sur les paiements par carte ne sont pas autorisés partout : vérifiez les règles de votre pays.
- **Encaissement par l'hôtel uniquement.** Les demandes ne fonctionnent ni pour les réservations encaissées par le canal, ni pour la carte virtuelle d'une OTA.

## Acomptes et soldes : ce que Little Hotelier automatise

Little Hotelier propose deux options automatiques, toutes deux avec Little Hotelier Pay :

| Fonction | Ce qu'elle fait | Où |
|---|---|---|
| **Acomptes automatiques** | Votre moteur de réservation prend un acompte quand un client réserve en direct : **Full amount**, **Percentage**, **First night**, **Fixed amount** ou **No deposit** | **Front Desk > Setup > Guest Payment Options > Property Level Deposits** ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8951681-automatic-deposits)) |
| **Paiements automatiques** | Débite le solde dû sur la carte enregistrée du client un nombre de jours défini avant l'arrivée, le jour de l'arrivée ou au départ | **My Apps > Payments > Automated payments > Create a rule** ([FAQ](https://helpcentre.littlehotelier.com/en/articles/8829554-automated-payments-frequently-asked-questions)) |

Les paiements automatiques ont besoin d'une carte qui fonctionne. Quand un débit échoue, ou qu'il n'y a pas de carte, Little Hotelier suggère d'envoyer une demande de paiement, et à partir de là c'est le travail d'une personne : l'envoyer, attendre, et en renvoyer une quand les 48 heures sont écoulées.

## Prépayé sur Booking.com ou Expedia ? Ne demandez pas deux fois

Une réservation Booking.com « pre-paid » ou une réservation Expedia Collect a été payée au canal. Little Hotelier affiche pourtant le séjour comme **outstanding** (dû) tant que personne n'a enregistré cet argent comme un paiement « OTA Paid ». Envoyez une relance sur ce solde, et vous demandez au client de payer une seconde fois des nuits qu'il a déjà payées.

Il y a un second piège. Little Hotelier calcule les nuits à ses propres tarifs, alors que le client a payé le prix du canal (avec une réduction Genius ou mobile, par exemple). Même après l'enregistrement du paiement de l'OTA, le montant dû peut donc mélanger deux choses :

- **Les nuits ajoutées à la réception** après la réservation : le canal ne les a jamais vendues, le client les paie donc à l'établissement.
- **L'écart entre vos tarifs et le prix du canal :** le client a déjà payé le prix du canal. Cet écart n'est pas à sa charge.

Prenons une réservation prépayée de 2 nuits, prolongée à la réception d'une nuit à 75 €. Little Hotelier peut afficher 88 € dus, mais le client doit 75 €. L'assistant IA de Hotelier Tools lit le séjour de cette façon et indique à la réception ce que le client doit à l'établissement, et pas seulement le chiffre de Little Hotelier. Pour les cartes Booking.com invalides et les no-shows, voir [que faire d'une carte invalide](/blog/booking-com-invalid-card-no-show).

## La méthode rapide : des relances de paiement avec un lien

Les **Payment reminders** (relances de paiement, `/automated-checks/payments`, qui font partie des contrôles automatiques, bêta) de Hotelier Tools trouvent les réservations qui doivent encore de l'argent et relancent le client les jours que vous choisissez, avec un lien si vous le souhaitez. Elles envoient aussi un résumé à votre équipe. Rien n'est débité : c'est le client qui décide de payer.

1. Ouvrez **Automated Checks** et la carte **Payment reminders**, ou allez directement à `/automated-checks/payments`. Cliquez sur **New rule** (nouvelle règle). Une nouvelle règle démarre désactivée.
2. Sous **Which bookings** (quelles réservations), réglez le **Minimum outstanding amount** (montant dû minimum, pour ignorer un centime manquant). Choisissez s'il faut ignorer les acomptes déjà payés (**Only bookings with nothing paid**) et s'il faut **Include guests already in the house** (inclure les clients déjà sur place). Sous **Channels**, choisissez **Every channel**, **Only these channels** ou **Every channel except these**.
3. Ajoutez jusqu'à six **Reminders** (relances). Chacune se place un certain nombre de jours avant ou après la réservation, l'arrivée ou le départ, ou le jour même. Par exemple : 7 jours avant l'arrivée, puis 2 jours avant l'arrivée.
4. Pour chaque relance, choisissez ce que reçoit le client : **Reminder only** (relance seule), **Reminder with a payment link** (relance avec lien de paiement) ou **Payment request sent by SiteMinder Pay** (l'e-mail de SiteMinder lui-même). Notre texte part dans la langue du client, ou cliquez sur **Write my own text** pour écrire le vôtre. Activez **Tell the team** pour ajouter la réservation au résumé de l'équipe, avec une note.
5. Cliquez sur **Preview today** pour voir à quels clients la règle écrirait aujourd'hui. Elle lit Little Hotelier et n'envoie rien.
6. Activez la règle et donnez-lui un calendrier. Le calendrier recommandé est **Every day at 10:00** (tous les jours à 10 h).

::screenshot{src="/images/blog/demo/en/payment-reminders-rule-editor.webp" alt="Éditeur de règle de relance de paiement dans Hotelier Tools : un avis This rule is off, le nom de la règle, la section Which bookings avec Minimum outstanding amount à 1, Channels réglé sur Every channel, Only bookings with nothing paid désactivé et Include guests already in the house activé, et le début de la section Reminders" caption="Une règle : quelles réservations elle relance, quand part chaque relance, et qui en est informé. Les nouvelles règles démarrent désactivées." path="/automated-checks/payments"}
::

### Ce qui la rend sûre

- **Jamais deux fois.** Chaque relance est enregistrée pour chaque réservation avant d'être envoyée : une exécution relancée, deux calendriers ou une exécution manuelle ne peuvent donc pas la répéter.
- **Une relance par jour et par client**, toutes règles confondues.
- **Du rattrapage sans avalanche.** Une relance part encore jusqu'à deux jours en retard si une exécution a été manquée. Si plusieurs sont dues en même temps, seule la plus récente est envoyée.
- **Le montant est à jour.** Le solde est lu sur la réservation juste avant l'envoi, et une réservation payée entre-temps ne reçoit rien. Les réservations annulées et les no-shows ne sont jamais relancés.
- **Des liens réutilisés.** Un lien en attente pour la même réservation et le même montant, avec plus de deux heures de validité restantes, est réutilisé au lieu d'en créer un second.
- **Prévenu quand c'est payé.** Chaque exécution suit les liens envoyés par ses relances. Quand l'un d'eux est payé, l'équipe reçoit un e-mail « payments received » (paiements reçus), si la règle prévient l'équipe.

Pour tester une relance, **Send now…** l'envoie à une seule réservation, quel que soit son jour. Tout ce qui est envoyé est listé sous **Activity** : date, réservation, client ou équipe, statut, montant dû et état du lien (**Waiting for payment**, **Paid**, **Expired**, **Cancelled**).

::screenshot{src="/images/blog/demo/en/payment-reminders-activity.webp" alt="Page Payment reminders avec deux règles activées : Prepago reservas directas — 7 días antes (7 jours avant l'arrivée, Reminder + link ; sur les 30 derniers jours, 3 envoyées et 1 en échec) et Saldo pendiente — 2 días antes (2 jours avant l'arrivée, SiteMinder Pay et Team ; 11 envoyées et 1 en échec), chacune avec sa tâche quotidienne de 10:00 en marche ; puis le tableau Activity avec les relances aux clients et les récapitulatifs pour l'équipe, envoyés avec des liens SiteMinder Pay Waiting for payment ou Expired, et une relance en échec car SiteMinder Pay n'a pas confirmé avoir envoyé l'e-mail au client" caption="Deux règles, chacune avec son horaire quotidien, et la trace de chaque relance avec l'état de son lien de paiement." path="/automated-checks/payments"}
::

### Les séjours prépayés sont gérés pour vous

Quand la réservation indique qu'elle a été prépayée sur Booking.com ou Expedia, la relance ne réclame jamais l'argent du canal :

- **Le montant est prouvé** (indiqué dans les commentaires de la réservation, ou exactement égal à la chambre vendue) et l'interrupteur de l'établissement **Register proven OTA prepayments (whole property)** est activé : Hotelier Tools enregistre un paiement « OTA Paid » dans Little Hotelier, puis ne demande que les nuits ajoutées et les extras.
- **Le montant n'est pas prouvé** (un séjour Expedia avec des extras, une autre devise) : aucun e-mail au client. Le résumé de l'équipe le liste : vérifiez-le et enregistrez le paiement.
- **Plus rien à payer :** la réservation est laissée de côté.

Vous choisissez quand ce paiement est enregistré sous **When to register them** : **At the checks (before arrival and at checkout)** (lors des contrôles, avant l'arrivée et au départ) ou **Some hours after arrival** (quelques heures après l'arrivée, de 0 à 48 heures, 1 par défaut). Avec la seconde option, les modifications faites à la réception lors de l'arrivée, comme des extras ou un changement de chambre, sont d'abord intégrées au solde. Elle demande alors la tâche horaire **Register OTA prepayments after arrival**, que vous programmez vous-même.

## Un lien pour une réservation

Tous les paiements n'ont pas besoin d'une règle. Ouvrez une réservation à `/reservations/<number>` et, sous **Payments**, cliquez sur **Payment link** (lien de paiement). Le même bouton se trouve à côté d'un solde dans les listes quotidiennes et dans le panneau de réservation de la boîte de réception.

1. La fenêtre affiche ce que doit la réservation et ses liens précédents, chacun avec son état.
2. Demandez le solde complet ou une partie (un acompte, par exemple) dans **Amount**.
3. Cochez **SiteMinder Pay emails it to …** pour qu'il soit envoyé par e-mail, ou laissez la case décochée et cliquez sur **Copy** pour copier le lien et l'envoyer vous-même.
4. Cliquez sur **Create payment link**. Un lien en attente peut être annulé depuis la même fenêtre.

::screenshot{src="/images/blog/demo/en/payment-links-reservation-payments.webp" alt="Section Payments d'une réservation dans Hotelier Tools : le bouton Payment link, un acompte en espèces de 759,55 euros enregistré à la main le 4 octobre 2026 avec un bouton Refund, Still refundable in total 759,55 euros, aucune carte enregistrée, et le panneau Original booking" caption="Tous les paiements du séjour au même endroit, avec le lien de paiement et les remboursements à un clic." path="/reservations"}
::

La section **Payments** gère aussi les remboursements. Cliquez sur **Refund** sur un paiement, saisissez un montant total ou partiel (une virgule ou un point fonctionnent tous les deux), et Hotelier Tools le compare à ce qui reste remboursable avant de le demander à Little Hotelier, une seule fois. Si Little Hotelier ne confirme pas, il vous demande de vérifier la réservation avant de rembourser de nouveau, au lieu d'envoyer un second remboursement.

**Pour les développeurs et l'IA :** le même lien existe dans l'API REST (`POST /api/v1/reservations/{id}/payment-link`, le client n'est prévenu par e-mail qu'avec `"notifyGuest": true`) et sous forme d'outil `create_payment_link`, qui demande votre approbation dans le chat IA. Via le chat IA ou l'API, un paiement par carte encaissé sur le terminal de la réception peut être enregistré sur le séjour avec seulement la marque et les quatre derniers chiffres. Cela ne débite rien. Une demande contenant quoi que ce soit qui ressemble à un numéro de carte complet est refusée. Voir la [page API REST et MCP](/tools/bot/api-mcp).

::demo-cta{path="/automated-checks/payments"}
::

Sur **Settings > Team**, créer et annuler des liens demande l'autorisation **Record payments**, les remboursements demandent **Refund payments**, et la modification des règles demande **Run payment reminders**. Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel. Les liens de paiement sont les demandes de paiement de SiteMinder Pay elles-mêmes : le client paie sur la page de SiteMinder, et aucune donnée de carte ne passe par Hotelier Tools.
::

À lire aussi : [envoyer la facture au départ](/blog/send-invoice-to-guest-at-checkout), [la checklist quotidienne de la réception](/blog/hotel-front-desk-checklist-automation), [carte invalide ou no-show sur Booking.com](/blog/booking-com-invalid-card-no-show).

## Résumé

- Dans Little Hotelier, **Send Payment Request** sur la réservation crée un lien valable 48 heures. Il faut Little Hotelier Pay, et cela ne fonctionne que pour les réservations que vous encaissez vous-même.
- Les acomptes des réservations directes et les débits automatiques de carte sont intégrés. Les e-mails de relance pour les soldes impayés ne le sont pas.
- Les **Payment reminders** de Hotelier Tools envoient aux clients qui n'ont pas payé un lien par e-mail les jours que vous choisissez, jamais deux fois, et préviennent l'équipe quand un lien est payé.
- Les séjours prépayés sur Booking.com et Expedia ne sont jamais relancés pour l'argent du canal : seulement pour les nuits et extras ajoutés à l'établissement.
