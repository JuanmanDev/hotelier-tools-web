---
title: "Messages clients Expedia : les lire et y répondre (Partner Central, appli et e-mail)"
seoTitle: "Répondre aux messages clients Expedia dans Partner Central"
description: "Où sont les messages clients Expedia, comment répondre depuis Partner Central, l'appli ou votre e-mail, les modèles programmés, et une boîte avec WhatsApp."
date: 2026-11-03
updated: 2026-11-05
category: guests
tags: [expedia, messages clients, partner central, boîte de réception, modèles, little hotelier]
keywords: [messagerie expedia partner central, répondre message client expedia, adresse e-mail alias client expedia, expedia message center, messages programmés expedia, numéro de téléphone client expedia masqué, messages expedia et whatsapp, application expedia partner central messages]
feature: guest-inbox
demoPath: /messaging/channels
cover: /images/blog/demo/en/expedia-guest-messages-channels.webp
coverAlt: "Page Channels de Hotelier Tools : la connexion des messages Booking.com qui collecte les messages en mode Draft (I approve everything), et en dessous les messages Expedia Partner Central, pas encore connectés, avec un bouton Switch on Expedia messages et un lien de connexion à Partner Central"
faq:
  - q: "Où trouver les messages des clients Expedia ?"
    a: "Dans Expedia Group Partner Central, sous Guest relations > Messages. Vous pouvez chercher par nom du client ou numéro de réservation, ou filtrer pour retrouver une conversation. Vous et le client recevez aussi des notifications par e-mail pour chaque nouveau message."
  - q: "Puis-je répondre à un client Expedia depuis ma propre messagerie ?"
    a: "Oui. Chaque réservation a un alias e-mail du client, une adresse unique que vous copiez depuis la réservation ou depuis Messages. L'e-mail doit partir d'une adresse liée à un utilisateur Partner Central validé, et les réponses du client arrivent dans votre messagerie et dans Partner Central."
  - q: "Pourquoi le numéro de téléphone du client n'apparaît-il pas sur les réservations Expedia ?"
    a: "Expedia a temporairement désactivé l'affichage et l'export des numéros de téléphone des voyageurs dans Partner Central, à cause de l'hameçonnage visant les voyageurs. Les réservations reçues par API portent un numéro générique. Expedia demande aux établissements d'utiliser sa propre messagerie."
  - q: "Peut-on programmer des messages aux clients Expedia ?"
    a: "Oui. Dans Messages, ouvrez Manage templates, créez un modèle, activez Send on a schedule et choisissez quand il part. Expedia envoie les messages programmés à 22 h, heure locale."
  - q: "Hotelier Tools peut-il répondre aux clients Expedia ?"
    a: "Non. Hotelier Tools n'envoie jamais de message à un client Expedia. Sa boîte de réception liste les conversations Expedia (bêta, fonctionnel depuis la version 1.71 de novembre 2026). Une réponse rédigée dans la boîte est gardée en brouillon, à envoyer depuis Partner Central."
  - q: "Hotelier Tools fait-il partie d'Expedia ou de Little Hotelier ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à Expedia Group, SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel et vos propres identifiants Partner Central."
---

Les messages des clients Expedia se trouvent dans Partner Central sous **Guest relations > Messages**, où vous cherchez par nom du client ou numéro de réservation et répondez dans la conversation. Vous pouvez aussi répondre depuis l'application Partner Central, ou depuis votre propre messagerie grâce à l'alias e-mail du client de chaque réservation. Les modèles et les messages programmés couvrent les questions courantes. Pour voir Expedia à côté de WhatsApp, Booking.com et de l'e-mail, la boîte de réception Hotelier Tools peut afficher les conversations Expedia (bêta), mais les réponses partent toujours de Partner Central.

Les fonctionnalités d'Expedia ci-dessous ont été vérifiées dans l'aide Partner Central d'Expedia Group en novembre 2026.

## Où se trouvent les messages des clients Expedia ?

Ouvrez Partner Central et sélectionnez **Guest relations**, puis **Messages** ([aide Partner Central : About messages](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-the-partner-central-message-center)). De là, vous pouvez :

- **Chercher** un client par nom ou numéro de réservation pour lui envoyer un nouveau message.
- **Filtrer** la liste pour retrouver une conversation existante.
- **Répondre** dans la conversation, et joindre des instructions d'arrivée ou des photos.

Vous et vos clients recevez des notifications par e-mail pour chaque nouveau message, et les clients peuvent lancer une conversation depuis leur itinéraire ou leur confirmation. Expedia présente le Message Center comme « the recommended option » (l'option recommandée) : il est lié à la réservation, conserve un historique vérifiable et n'expose pas les coordonnées du client ([Contact a guest](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/reservations/about-contacting-guests)).

Deux points qui surprennent les nouveaux partenaires :

- **Certaines réservations n'ont pas de Message Center.** Beaucoup de réservations venant des partenaires B2B d'Expedia, comme les agences de voyages, ne permettent pas d'écrire au client. Contactez plutôt le partenaire B2B, ou demandez à Expedia de transmettre un message urgent.
- **Les numéros de téléphone sont masqués.** Expedia a temporairement désactivé l'affichage et l'export des numéros de téléphone des voyageurs dans Partner Central, et les réservations reçues par API portent un numéro générique. La raison : l'hameçonnage. Des escrocs se font passer pour des hôtels sur WhatsApp avec des numéros qui ont fuité ([avis sur l'hameçonnage](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-off-platform-phishing-attempts-targeting-travelers)). Votre channel manager n'aura pas non plus le vrai numéro.

### Sur votre téléphone : l'application Partner Central

L'application Expedia Group Partner Central vous permet de lancer des conversations et de répondre aux clients, avec des notifications pour les réservations, les avis et les annulations. Selon Expedia, les utilisateurs actifs de l'application répondent 20 % plus vite que les autres (sa propre moyenne de 2021, [page de l'application](https://partner.expediagroup.com/en-us/landing-pages/manage-your-property-from-the-palm-of-your-hand)).

## Répondre depuis votre propre messagerie : l'alias e-mail du client

Chaque réservation a un **guest email alias** (alias e-mail du client), une adresse unique qui transmet votre e-mail au client via Expedia ([About the guest email alias](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-the-guest-email-alias)). Pour le copier :

1. **Depuis une réservation :** sélectionnez **Reservations**, trouvez la réservation, sélectionnez le nom du client, puis **Copy email to clipboard**.
2. **Depuis Messages :** sélectionnez **Guest relations > Messages**, ouvrez le client, sélectionnez **Show contact details**, puis **Copy email to clipboard**.

Les règles qui comptent :

- L'alias fonctionne pour les réservations Expedia, Hotels.com, Travelocity, Orbitz et Wotif. En novembre 2026, il ne fonctionne ni pour les réservations B2B ni pour Egencia.
- L'adresse d'envoi **doit appartenir à un utilisateur Partner Central validé**. Les e-mails venant d'une autre adresse ne sont pas remis : ajoutez la boîte de la réception comme utilisateur Partner Central si vous voulez répondre depuis celle-ci.
- La réponse du client arrive dans votre messagerie et dans le Message Center.
- Un e-mail contenant un numéro de carte bancaire est bloqué. Les numéros de carte virtuelle Expedia sont autorisés.
- Vous pouvez joindre des fichiers PDF ou Word, comme un formulaire avant l'arrivée.

## En combien de temps répondre aux clients Expedia ?

L'aide d'Expedia vous demande de « respond to every guest in a timely manner » (répondre à chaque client dans des délais raisonnables) et de « reply promptly to avoid delays, cancellations, or escalations » (répondre rapidement pour éviter retards, annulations ou réclamations). Elle ne fixe aucun délai pour les messages ordinaires. En pratique, considérez le jour même comme la limite, et répondez en quelques minutes pour tout ce qui concerne l'arrivée. Arrivées tardives, codes de porte et parking : c'est ce que les clients demandent le jour du voyage.

Expedia liste aussi ce qu'il ne faut pas faire ([Contact a guest](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/reservations/about-contacting-guests)) :

- **Pas de marketing.** Ni vente additionnelle ni promotion par la messagerie Expedia.
- **Pas de confirmation en double.** Le client en a déjà une d'Expedia.
- **Pas de modification des conditions hors d'Expedia.** Dates et prix se changent dans Partner Central.
- **Évitez les liens externes et les pièces jointes** quand c'est possible. Les clients peuvent les trouver suspects.

Quand quelque chose est convenu de vive voix pendant le séjour, Expedia recommande de le confirmer par écrit dans le Message Center. Ce message vous servira de trace en cas de litige.

## Comment configurer les modèles et les messages programmés

Dans **Guest relations > Messages**, sélectionnez **Manage templates** ([Send scheduled messages](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/send-scheduled-messages-to-guests)) :

1. Sélectionnez **Create new template**, donnez-lui un nom et rédigez le texte.
2. Sous **Insert custom information**, ajoutez des contenus variables comme le nom du client.
3. Joignez des fichiers si besoin, par exemple un plan d'accès ou les instructions d'arrivée.
4. Activez **Send on a schedule** et choisissez quand il part, sans date de fin ou pour une période donnée.
5. Sélectionnez **Save**.

Tous les messages programmés partent à 22 h, heure locale. Un **smart template** peut répondre automatiquement sur un sujet ; en novembre 2026, le seul disponible est une demande d'avis après le séjour. **Send bulk message** envoie un modèle à plusieurs clients à la fois.

Un modèle avant l'arrivée, à adapter :

```text [expedia-pre-arrival.txt]
Bonjour [nom du client], nous avons hâte de vous accueillir à [nom de l'établissement].

L'arrivée est possible à partir de [heure]. Si vous arrivez après 22 h, répondez ici avec votre heure d'arrivée et nous vous laisserons les instructions.
Parking : [vos infos parking]. Petit-déjeuner : [horaires et prix].

Nous vous contacterons uniquement par cette conversation Expedia, et nous ne vous demanderons jamais vos coordonnées bancaires par WhatsApp ou par SMS.
```

La dernière ligne compte d'autant plus que des escrocs écrivent maintenant aux clients Expedia sur WhatsApp. Pour en savoir plus : [repérer les messages frauduleux à l'hôtel](/blog/hotel-scam-messages).

## La méthode rapide : les conversations Expedia dans la boîte de réception Hotelier Tools (bêta)

Hotelier Tools peut afficher vos conversations Expedia dans son **Inbox** (boîte de réception, `/messaging`), à côté de WhatsApp, Booking.com et de l'e-mail, chacune à côté de sa réservation Little Hotelier. Les réponses s'écrivent dans Partner Central. Voici comment le configurer :

1. **Connectez Partner Central** dans **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`). Hotelier Tools se connecte pour vous dans un navigateur sur le serveur ; vous répondez à ce qu'Expedia demande, comme le code envoyé par e-mail sur un nouvel appareil. La session est stockée chiffrée, et **Keep Expedia signed in** l'empêche d'expirer faute d'activité. La configuration est la même que pour les [demandes de paiement Expedia Collect](/blog/expedia-collect-payment-requests).
2. Dans la carte **Guest messages** de la même page, activez **Read Expedia guest messages**. Ou ouvrez **Channels** (`/messaging/channels`) et appuyez sur **Switch on Expedia messages**.
3. Choisissez le mode sur **Channels**. Expedia n'en propose que deux : **Off (collect only)**, où les messages sont affichés sans rien analyser, et **Draft**, où l'IA prépare une réponse que vous vérifiez. Un nouveau canal Expedia démarre en mode collecte seule.
4. Ouvrez **Inbox** et filtrez par **Expedia**. Chaque conversation a un lien **Conversation on Expedia** qui l'ouvre dans Partner Central.

::screenshot{src="/images/blog/demo/en/expedia-guest-messages-card.webp" alt="Carte Guest messages sur la page Expedia Partner Central : l'interrupteur est désactivé, la mention indique Sign in to Partner Central first, un encadré Replies stay in Partner Central précise que Hotelier Tools n'envoie jamais de message à un client Expedia et garde votre réponse en brouillon, et un lien Mode and timing ; la carte Expedia Collect payments suit en dessous" caption="L'interrupteur se trouve à côté de la connexion à Partner Central. Les réponses aux clients Expedia restent toujours dans Partner Central." path="/credentials/expedia-extranet"}
::

::screenshot{src="/images/blog/demo/en/expedia-guest-messages-channels.webp" alt="Page Channels : les messages Booking.com collectés en mode Draft (I approve everything) avec Collect messages activé, et les messages Expedia Partner Central marqués pas encore connectés, avec Switch on Expedia messages et la connexion à Partner Central" caption="Expedia figure sur la page Channels avec vos autres comptes. Dans la démo, il n'est pas activé." path="/messaging/channels"}
::

### Ce que la boîte de réception lit, et ce qu'elle ne fait jamais

- **La liste des conversations, pas chaque message.** Pour chaque conversation, elle lit le client, le séjour et le dernier message, tel que l'aperçu de la liste de Partner Central le montre. La conversation complète reste dans Partner Central.
- **Elle n'envoie jamais rien à un client Expedia.** Ni automatiquement, ni quand vous appuyez sur un bouton. Ce que vous tapez est gardé comme brouillon de la conversation (**Save as a draft: Expedia replies are sent from Partner Central**). Copiez-le dans Partner Central ou dans l'application.
- **Les réservations sont associées uniquement par le code de confirmation.** Little Hotelier enregistre une réservation Expedia sous la forme `EXP-` suivi du code de confirmation d'Expedia. Une conversation qui cite ce code est liée à la réservation et compte comme vérifiée. Le nom d'un client ne sert jamais de preuve : une conversation sans code reste non associée, et l'IA ne voit aucun détail de réservation pour elle.

En mode **Draft**, l'IA rédige sa suggestion à partir de la réservation vérifiée et de ce que vous lui avez appris dans **FAQ & knowledge** (`/messaging/faq`) : votre page FAQ, vos notes internes et la fiche de l'établissement. Un service que vous n'avez pas listé reçoit la réponse « à confirmer », jamais « oui ». Le fonctionnement de ces brouillons est expliqué dans [les réponses de l'IA aux messages clients](/blog/ai-replies-guest-messages).

::callout{type="warning" title="État en novembre 2026"}
Les conversations Expedia sont en bêta. Jusqu'au 5 novembre 2026, Partner Central refusait la requête qui lit sa liste de messages (une erreur HTTP 403), donc aucune conversation Expedia n'arrivait dans la boîte de réception. La version 1.71 (novembre 2026) corrige cela : Hotelier Tools envoie désormais la même requête que la boîte de réception de Partner Central elle-même, et les conversations Expedia arrivent avec le client, le séjour et le dernier message. Si Expedia modifie encore cette requête, la page Expedia affiche une erreur plutôt qu'une boîte vide, jusqu'à sa mise à jour. Les réponses partent toujours de Partner Central ou de l'application.
::

Deux autres limites, en toute honnêteté :

- **Elle utilise votre propre session Partner Central.** Les conditions partenaires d'Expedia restreignent l'accès automatisé à Partner Central. La voie de connectivité prise en charge par Expedia est sa Messaging API, accessible via les prestataires de connectivité.
- **Ici, Expedia est en lecture seule.** On peut répondre aux conversations WhatsApp et e-mail depuis la boîte de réception, pas aux conversations Expedia.

::demo-cta{path="/messaging/channels"}
::

Tout ce que fait la boîte de réception est décrit sur la [page Messagerie clients](/tools/bot/guest-inbox). Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à Expedia Group, SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel et vos propres identifiants Expedia Partner Central.
::

À lire aussi : [la messagerie Booking.com sans l'extranet](/blog/booking-com-guest-messages), [WhatsApp avec Little Hotelier](/blog/whatsapp-little-hotelier), [les réponses de l'IA aux messages clients](/blog/ai-replies-guest-messages).

## Résumé

- Les messages Expedia sont dans Partner Central sous **Guest relations > Messages**, et dans l'application Partner Central.
- Pour répondre depuis votre messagerie, copiez l'alias e-mail du client de la réservation et envoyez depuis une adresse liée à un utilisateur Partner Central validé.
- Les numéros de téléphone des clients sont masqués pour l'instant : gardez le contact dans la messagerie Expedia, et dites aux clients que vous ne demanderez jamais leurs coordonnées bancaires ailleurs.
- Les modèles avec **Send on a schedule** couvrent les instructions d'arrivée ; les messages programmés partent à 22 h, heure locale.
- La boîte de réception Hotelier Tools peut lister les conversations Expedia à côté de WhatsApp et de Booking.com (bêta, fonctionnel depuis la version 1.71 de novembre 2026), mais chaque réponse Expedia part de Partner Central.
