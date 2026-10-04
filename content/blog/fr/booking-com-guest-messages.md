---
title: "Messagerie Booking.com : gérer les messages clients sans passer la journée dans l'extranet"
seoTitle: "Messagerie Booking.com : gérer les messages sans l'extranet"
description: "Messagerie Booking.com : Pulse, modèles, messages programmés, réponses automatiques, faux messages à repérer, et une boîte unique avec WhatsApp et e-mail."
date: 2026-10-03
category: guests
tags: [booking.com, guest messages, inbox, templates, little hotelier]
keywords: [messagerie booking, messagerie booking ne fonctionne pas, message booking whatsapp, messages programmés booking, modèle de message booking, réponses automatiques booking, faux messages booking]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/guest-inbox-ai-draft-availability.webp
coverAlt: "Boîte de réception des clients de Hotelier Tools avec les filtres WhatsApp, Email et Booking.com, un e-mail d'un client qui s'informe sur une chambre double en septembre, le plan de l'IA en brouillon avec une réponse modifiable en anglais, et le panneau de l'assistant privé"
faq:
  - q: "Pourquoi mes messages Booking.com ne s'affichent-ils pas dans l'extranet ?"
    a: "Votre channel manager gère peut-être la messagerie client. Dans l'Extranet, ouvrez Connection management : les fonctions marquées en vert sont gérées sur la plateforme de votre prestataire, comme le Messaging hub de Little Hotelier. Vérifiez aussi que votre compte utilisateur de l'extranet dispose des bons droits."
  - q: "Puis-je programmer des messages aux clients Booking.com ?"
    a: "Oui. Dans l'Extranet ou dans Pulse, allez dans Property > Messaging preferences > Template scheduler et associez un modèle à une étape : à la réservation, une semaine, trois jours ou un jour avant l'arrivée, le jour de l'arrivée, ou un jour avant le départ."
  - q: "Comment savoir qu'un message vient vraiment de Booking.com ?"
    a: "Les e-mails de Booking.com viennent toujours d'une adresse qui se termine par @booking.com, et leurs liens mènent à des adresses se terminant par .booking.com. Méfiez-vous des demandes urgentes dont on ne vous a pas prévenu : Booking.com affirme ne jamais en faire sans communication préalable."
  - q: "Pourquoi les nouvelles réservations Booking.com n'affichent-elles pas de numéro de téléphone dans Little Hotelier ?"
    a: "Depuis le 28 septembre 2026, Booking.com n'inclut plus les numéros de téléphone des clients dans les réservations envoyées aux channel managers. Vous pouvez toujours voir le numéro dans l'Extranet ou dans Pulse avec Show phone number."
  - q: "L'IA peut-elle répondre automatiquement aux clients Booking.com dans Hotelier Tools ?"
    a: "Non. Pour Booking.com, l'IA prépare seulement un brouillon et c'est une personne qui décide. L'envoi automatique par l'IA n'est jamais autorisé sur les conversations Booking.com, quel que soit le mode de réponse choisi."
  - q: "Hotelier Tools fait-il partie de Booking.com ou de Little Hotelier ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à Booking.com, SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel et vos propres identifiants de l'extranet Booking.com."
---

Pas besoin de garder l'extranet ouvert toute la journée. L'application Pulse affiche les messages Booking.com sur votre téléphone, avec notifications, et les modèles de messages, les messages programmés et les réponses automatiques prennent en charge les questions courantes. Pour voir Booking.com à côté de WhatsApp et de l'e-mail, utilisez le Messaging hub de Little Hotelier (une option payante) ou la boîte de réception Hotelier Tools, qui prépare aussi des brouillons de réponse qu'une personne valide.

Les fonctionnalités de Booking.com ci-dessous ont été vérifiées dans son aide partenaires en octobre 2026.

## Où se trouvent les messages Booking.com, et pourquoi ne s'affichent-ils pas ?

Vous pouvez les lire et y répondre à trois endroits ([Partner Help : Contacting guests](https://partner.booking.com/en-us/help/reservations/contact-extranet/contacting-your-guests)) :

- **Extranet :** **Inbox > Reservation messages**, ou ouvrez une réservation et descendez jusqu'à **Conversation with guest**.
- **Application Pulse :** touchez **Bookings**, choisissez le client et écrivez sous **Messages**.
- **Votre prestataire de connectivité**, s'il gère la messagerie client pour vous.

Des messages manquants ou qui ne se chargent pas ? Vérifiez ces trois points :

1. **Qui gère la messagerie.** Dans l'Extranet, ouvrez la page **Connection management**. Les fonctions de messagerie marquées en vert sont gérées sur la plateforme de votre prestataire (par exemple le Messaging hub de Little Hotelier), pas dans l'Extranet.
2. **Les droits de votre utilisateur.** Certaines fonctions exigent des autorisations précises : les modèles demandent le droit de gérer les modèles de messages aux clients, et les numéros de téléphone demandent les droits de gérer les réservations et de voir les coordonnées des clients.
3. **Les notifications.** Sous **Account > Notification settings**, choisissez comment vous êtes prévenu des nouveaux messages, par exemple par e-mail.

## Comment configurer les modèles, les messages programmés et les réponses automatiques

Les trois se trouvent sous **Property > Messaging preferences**, dans l'Extranet ou sous **More** dans Pulse ([Partner Help : Templates and automatic replies](https://partner.booking.com/en-us/help/reservations/contact-extranet/setting-templates-automatic-replies-and-message-notifications)).

### Modèles de messages

1. Ouvrez l'onglet **Message templates** et cliquez sur **Create new template**.
2. Rédigez le message. Les blocs d'information préremplis de Booking.com insèrent le nom du client, l'heure d'arrivée, le nom de l'établissement et d'autres détails de la réservation.
3. Ajoutez une langue et des images si besoin, puis cliquez sur **Continue**.
4. Donnez-lui un **Template name** et un **Template topic**, puis cliquez sur **Save template**.

Utilisez le même nom de modèle pour chaque version linguistique. Booking.com envoie alors la version dans la langue du client ou, à défaut, celle de votre langue par défaut. Les PDF et les QR codes ne peuvent pas être joints, et tout lien (votre enregistrement en ligne, par exemple) doit d'abord être approuvé dans **Security settings**.

Un modèle de message avant l'arrivée, à adapter (remplacez les crochets par les blocs d'information de Booking.com) :

```text [pre-arrival-template.txt]
Bonjour [nom du client], nous avons hâte de vous accueillir à [nom de l'établissement].

L'arrivée est possible à partir de [heure d'arrivée]. Si vous arrivez après 22 h, répondez simplement à ce message avec votre heure d'arrivée.
Parking : [vos infos parking]. Petit-déjeuner : [horaires et prix].

Nous ne vous demanderons jamais vos coordonnées bancaires par WhatsApp ou par SMS.
À très bientôt !
```

### Messages programmés

Ouvrez l'onglet **Template scheduler**, cliquez sur **Schedule a template**, choisissez le moment d'envoi et le modèle, puis **Add to schedule**. Les étapes sont : à la réservation du client, une semaine avant l'arrivée, trois jours avant, un jour avant, le jour de l'arrivée, et un jour avant le départ. Les modèles envoyés apparaissent dans votre boîte de réception.

### Réponses automatiques

Dans l'onglet **Automatic replies**, ouvrez les paramètres d'un sujet, cochez-le, choisissez votre réponse, associez un modèle avec **Select template**, puis **Save**. Les demandes conformes à votre politique reçoivent une acceptation automatique ; pour les autres, vous associez la réponse à un modèle. Le client la reçoit par e-mail et dans le chat.

### Help me reply et traduction

Le chat de l'Extranet comporte un bouton **Help me reply** qui suggère un modèle ou une réponse libre. Vous la relisez, la modifiez et l'envoyez vous-même. Les messages peuvent aussi être traduits dans l'Extranet et dans Pulse (anglais, allemand, français, espagnol, néerlandais, polonais, russe, arabe et portugais).

## Faut-il répondre vite ?

Oui. Le centre d'aide de Little Hotelier précise que Booking.com suit un score de réponse interne qui mesure votre rapidité. Quand un message n'appelle aucune réponse (« Merci, à vendredi ! »), marquez-le **No reply needed** : cela clôt la fenêtre de réponse de 24 heures, et cette conversation ne vous pénalise pas ([FAQ du Messaging hub](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

## Comment répondre aux questions des clients avant la réservation (Guest Q&A)

Guest Q&A permet aux futurs clients de vous poser des questions avant de réserver. Vos réponses sont publiées sur la page de votre établissement après modération. Les autres voyageurs peuvent voter pour elles, si bien que les plus utiles apparaissent en premier ([Partner Help : Guest Q&A](https://partner.booking.com/en-us/help/property-page/general-info/guest-qa-feature)).

Vous pouvez supprimer les réponses obsolètes, ou répondre en privé quand une question est personnelle. Pour désactiver la fonction, allez dans l'onglet **Inbox** de l'Extranet, **Questions for your property**, **Guest Q&A preferences**. Les questions qui reviennent sans cesse (parking, arrivée tardive, animaux) ont aussi leur place dans la description de votre établissement.

## L'option propre à Little Hotelier : le Messaging hub

Si vous utilisez l'option **Guest Engagement** de Little Hotelier (indiquée pour le forfait Pro sur la [page des tarifs](https://www.littlehotelier.com/pricing/) en octobre 2026), son **Messaging hub** peut programmer des messages et discuter avec les clients Booking.com, à côté de WhatsApp, Airbnb, SMS et e-mail. La messagerie Booking.com n'y coûte rien de plus ([FAQ du Messaging hub](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

1. Vérifiez que Booking.com est connecté sous **Channels**.
2. Allez dans **Guest Engagement > Communication > Settings**, repérez Booking.com et cliquez sur **Configure**.
3. Cliquez sur **Connect** et accordez à SiteMinder l'autorisation de messagerie client dans le widget de Booking.com.
4. Actualisez la page et commencez à répondre. Une icône **No reply needed** clôt les conversations qui n'appellent pas de réponse.

La même boîte de réception est disponible dans l'application mobile Little Hotelier, avec des notifications push pour les nouveaux messages ([application mobile](https://helpcentre.littlehotelier.com/en/articles/15547083-guest-messaging-in-the-little-hotelier-mobile-app)). Ajoutez les domaines de Little Hotelier à la liste des expéditeurs autorisés de Booking.com, sinon ses messages n'arriveront pas aux clients Booking.com ([comment faire](https://helpcentre.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).

## Comment repérer les faux messages Booking.com

Des escrocs imitent Booking.com pour voler vos identifiants d'extranet, puis écrivent à vos clients avec de faux liens de paiement. Les conseils de Booking.com ([Partner Help : Phishing and email spoofing](https://partner.booking.com/en-us/help/account-and-log/security/online-security-awareness-phishing-and-email-spoofing)) :

- **Vérifiez l'expéditeur.** Les e-mails de Booking.com viennent toujours d'une adresse qui se termine par **@booking.com**, quel que soit le sous-domaine. Une adresse comme support@booking-103266.com est fausse.
- **Vérifiez les liens avant de cliquer.** Survolez-les avec la souris ou, sur téléphone, maintenez le doigt appuyé dessus. Si l'adresse ne se termine pas par **.booking.com**, ne l'ouvrez pas.
- **Soyez attentif au ton.** Les menaces urgentes (votre compte va être suspendu), les fautes d'orthographe et le mélange de langues sont des signaux d'alerte. Booking.com « will never make urgent requests without sending prior communication » (ne fera jamais de demande urgente sans communication préalable) : appelez d'abord votre gestionnaire de compte ou le service client.
- **Si vous avez cliqué :** changez d'abord le mot de passe de votre e-mail, puis celui de Booking.com, lancez une analyse antivirus de votre appareil et signalez l'incident dans les 24 heures.

Protégez aussi vos clients :

- **Activez les Messaging security settings** (**Property > Messaging preferences > Security settings**, avec l'authentification à deux facteurs). Listez les adresses e-mail et les liens autorisés à joindre les clients : les e-mails d'autres adresses n'arrivent pas, et les autres liens sont supprimés ([Messaging security](https://partner.booking.com/en-us/help/account-and-login/security/understanding-messaging-security-settings)). Si Booking.com détecte une activité suspecte sur votre compte, il désactive les liens dans vos messages.
- **Sachez où se trouvent les numéros de téléphone.** Depuis le 28 septembre 2026, Booking.com n'envoie plus les numéros de téléphone des clients aux channel managers ([Booking.com for developers](https://developers.booking.com/connectivity/docs/migration-guides/migrating-to-new-versions)). Utilisez **Show phone number** dans l'Extranet ou dans Pulse.
- **Indiquez aux clients comment vous leur demanderez un paiement**, comme dans la dernière ligne du modèle ci-dessus.

## La méthode rapide : Booking.com, WhatsApp et e-mail dans une seule boîte

L'**Inbox** de Hotelier Tools (`/messaging`, alpha) réunit les messages Booking.com et les questions Guest Q&A avec votre WhatsApp et vos e-mails, affiche la réservation à côté de chaque conversation et propose une réponse rédigée par l'IA, que vous vérifiez.

1. Connectez Booking.com une seule fois dans **Credentials > Booking.com extranet** (`/credentials/booking-extranet`) avec votre nom d'utilisateur partenaire, votre mot de passe et votre deuxième facteur d'authentification (Pulse, SMS ou appel). La session est stockée chiffrée pour votre établissement. Booking.com peut vous demander de confirmer à nouveau votre identité de temps à autre ; l'assistant de connexion s'en charge.
2. Connectez éventuellement votre messagerie (Google, Microsoft ou tout compte IMAP/SMTP) et [WhatsApp](/blog/whatsapp-little-hotelier).
3. Ouvrez **Inbox** et filtrez par **Booking.com**. Une conversation Booking.com est liée automatiquement à sa réservation.
4. Lisez le brouillon et le plan de l'IA, modifiez-les, ou demandez à l'assistant privé à droite de chercher une information dans Little Hotelier.

::screenshot{src="/images/blog/demo/en/guest-inbox-ai-plan-late-arrival.webp" alt="Boîte de réception des clients avec une conversation WhatsApp ouverte : le message du client sur une arrivée tardive, en espagnol, la réservation associée marquée identity verified et paid, le plan de l'IA en brouillon avec le motif et une réponse modifiable, et le panneau Assistant privé à droite" caption="Chaque conversation affiche la réservation, un brouillon de l'IA qui vous attend et un assistant privé que le client ne voit jamais." path="/messaging"}
::

Deux limites, en toute honnêteté :

- **Pour Booking.com, l'IA n'envoie jamais rien toute seule.** Et renvoyer votre réponse à Booking.com depuis la boîte de réception, nous ne le promettons pas encore : copiez le brouillon approuvé dans l'Extranet ou dans Pulse.
- **Hotelier Tools utilise votre propre session d'extranet.** Hotelier Tools se connecte comme vous, car l'API de messagerie de Booking.com n'est ouverte qu'aux partenaires de connectivité. Le tableau de bord lui-même précise que les conditions partenaires de Booking.com restreignent l'accès automatisé à l'extranet, et que la Connectivity API reste la voie prise en charge quand vous y avez accès.

Les deux messages fixes de demande de facture de Booking.com sont reconnus sans aucune IA : la boîte de réception propose de programmer la facture au départ pour ce séjour (voir [envoyer la facture automatiquement au départ du client](/blog/send-invoice-to-guest-at-checkout)).

### Choisir ce que l'IA a le droit de faire

Sur **Channels** (`/messaging/channels`), chaque compte connecté a un mode de réponse :

| Mode | Ce qui se passe |
|---|---|
| **Off** | Les messages sont collectés et affichés. Rien n'est analysé ni envoyé. |
| **Draft** (par défaut) | L'IA prépare une réponse et un plan. Rien ne se passe tant que vous ne l'approuvez pas. |
| **Automatic reply** | L'IA envoie sa réponse après un délai. Elle ne peut jamais modifier une réservation. |
| **Autonomous** | L'IA répond et peut aussi ajouter une note ou définir l'heure d'arrivée sur une réservation vérifiée, sans approbation. Vérifiez son travail plusieurs fois par jour. |

Quoi que vous choisissiez, les réponses aux conversations Booking.com sont toujours envoyées par une personne. L'IA qui s'adresse aux clients n'a aucun outil : elle renvoie un plan choisi dans une liste fermée (envoyer un message, signaler au personnel, ajouter une note à la réservation, définir l'heure d'arrivée) et ne peut jamais annuler, changer les dates ni toucher aux paiements. Elle ne voit une réservation que si l'expéditeur est vérifié, et une conversation Booking.com compte comme vérifiée.

::screenshot{src="/images/blog/demo/en/guest-messaging-reply-modes-menu.webp" alt="Page Messaging Channels avec le menu When a guest writes ouvert sur la connexion WhatsApp : Off (collect only), Draft (I approve everything, sélectionné), Automatic reply (no reservation changes) et Autonomous (replies and changes reservations)" caption="Choisissez un mode de réponse par compte, ici pour WhatsApp. En mode Draft (par défaut), rien ne part sans vous." path="/messaging/channels"}
::

### Lui apprendre vos réponses : FAQ & knowledge

L'IA ne répond aux clients qu'à partir de ce que vous lui donnez, plus la fiche de votre établissement. Ouvrez **FAQ & knowledge** (`/messaging/faq`) :

1. Sous **Pages and text the AI may quote**, choisissez **FAQ page (URL)** ou **Plain text**, puis cliquez sur **Add source**. Une tâche programmée peut relire la page toutes les heures.
2. Remplissez **House notes** avec tout ce qui ne figure pas sur cette page : wifi, heures d'arrivée et de départ, parking, conseils locaux. Cliquez sur **Save notes**.
3. Dans **Settings > Property & AI knowledge** (`/settings/property`), appuyez sur **Read from Little Hotelier** pour importer votre adresse, vos conditions, vos types de chambres et vos extras, puis **Save**.

Un service que vous n'avez pas listé reçoit la réponse « à confirmer », jamais « oui ». Chaque message que l'IA lit et rédige consomme des crédits IA, visibles sur **AI credits** (`/messaging/credits`).

::screenshot{src="/images/blog/demo/en/guest-messaging-faq-knowledge.webp" alt="Page FAQ and knowledge : une source de page FAQ déjà ajoutée, les options FAQ page (URL) et Plain text avec le bouton Add source, et House notes remplies (en espagnol) avec les heures d'arrivée et de départ, le prix du petit-déjeuner, la réception 24 h/24 et le wifi gratuit" caption="L'IA ne cite que votre page FAQ, vos notes et la fiche de votre établissement." path="/messaging/faq"}
::

::demo-cta{path="/messaging"}
::

Tout ce que fait la boîte de réception est décrit sur la [page Messagerie clients](/tools/bot/guest-inbox). Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à Booking.com, SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel et vos propres identifiants de l'extranet Booking.com.
::

## Résumé

- Répondez depuis Pulse où que vous soyez, et laissez les modèles, les messages programmés et les réponses automatiques couvrir les questions courantes.
- Marquez **No reply needed** les conversations qui n'appellent pas de réponse, et rédigez des réponses Guest Q&A courtes et adaptées à une lecture publique.
- Considérez comme une arnaque tout message « Booking.com » qui ne vient pas de @booking.com ou dont les liens sortent de .booking.com. Activez les Messaging security settings.
- Pour une seule boîte avec WhatsApp et e-mail, utilisez le Messaging hub de Little Hotelier ou la boîte de réception Hotelier Tools, où l'IA rédige et une personne envoie.
