---
title: "Répondre aux messages des clients de l'hôtel avec l'IA (WhatsApp, Booking.com, Expedia et e-mail)"
seoTitle: "Répondre aux messages clients avec l'IA, sans risque"
description: "L'IA rédige vos réponses aux clients sur WhatsApp, Booking.com, Expedia et e-mail à partir des réservations et de la FAQ ; une personne les valide."
date: 2026-11-02
updated: 2026-11-05
category: ai
tags: [ia, messages clients, whatsapp, booking.com, e-mail, boîte de réception, modèles]
keywords: [ia pour répondre aux messages clients hôtel, réponse automatique message client hôtel, chatgpt messages clients hôtel, automatiser messages clients whatsapp hôtel, modèles de messages clients hôtel, assistant ia whatsapp hôtel, réponse automatique messages booking.com ia, boîte de réception ia petit hôtel]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/ai-replies-inbox-thread-plan.webp
coverAlt: "Boîte de réception des clients de Hotelier Tools avec la conversation WhatsApp de Noah Nilsson ouverte : marquée Identity verified, sa réservation du 3 au 7 novembre arrivée et payée, un plan de l'IA en brouillon pour une arrivée tardive avec le motif et une réponse modifiable en espagnol, et le panneau Assistant privé"
featured: true
faq:
  - q: "L'IA peut-elle répondre seule aux messages des clients de l'hôtel ?"
    a: "Elle le peut, mais ce ne devrait pas être le réglage par défaut. Une configuration sûre laisse l'IA rédiger une réponse à partir de vos réservations et de votre FAQ, et une personne la valide. Hotelier Tools démarre chaque canal en mode Draft ; l'envoi automatique est un choix séparé, canal par canal, limité aux questions simples."
  - q: "Comment l'IA sait-elle de quelle réservation parle un message ?"
    a: "Elle associe l'expéditeur à une seule réservation : sur WhatsApp, le numéro doit correspondre sur au moins ses 8 derniers chiffres ; par e-mail, l'adresse doit être exactement la même. Si deux clients correspondent, ou aucun, l'IA ne voit aucune réservation et répond uniquement à partir de votre FAQ."
  - q: "L'IA va-t-elle inventer des prix ou des services ?"
    a: "Elle ne devrait pas, et la boîte de réception est conçue pour que cela se voie. L'IA répond uniquement à partir de vos sources FAQ, de vos notes internes et de la fiche de l'établissement, écrit « à confirmer » pour tout ce que vous n'avez pas listé, et un prix qu'aucun devis du moteur de réservation n'a renvoyé est signalé à côté du brouillon."
  - q: "L'IA envoie-t-elle seule les réponses sur Booking.com ou Expedia ?"
    a: "Non. Sur Booking.com, l'IA rédige seulement, et c'est une personne qui appuie sur Send. Les messages Expedia (bêta) peuvent seulement être collectés ou rédigés en brouillon, et la réponse s'écrit dans Partner Central."
  - q: "Ai-je besoin de l'API officielle WhatsApp Business ?"
    a: "Pas pour Hotelier Tools. Il se connecte via WAHA, un serveur auto-hébergé qui fait tourner une session WhatsApp Web. Cela évite le processus d'approbation de Meta, mais WhatsApp n'autorise pas les clients non officiels : un numéro utilisé ainsi pourrait être bloqué."
  - q: "Hotelier Tools fait-il partie de WhatsApp, Booking.com ou Expedia ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à WhatsApp, Meta, Booking.com, Expedia Group, SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants de votre hôtel."
---

Pour utiliser l'IA sans risque avec les messages des clients, laissez-la rédiger, pas décider. Donnez-lui la réservation du client et vos propres informations (FAQ, règlement intérieur, prix de votre moteur de réservation), laissez-la préparer une réponse dans la langue du client, et faites-la valider par une personne avant l'envoi. Dans Hotelier Tools, les messages WhatsApp, e-mail, Booking.com et Expedia arrivent dans une seule boîte de réception, chacun associé à sa réservation, avec un brouillon de l'IA qui n'attend qu'un clic.

Les informations sur les services tiers ci-dessous ont été vérifiées en novembre 2026.

## Que demandent le plus souvent les clients d'un hôtel ?

Dans un petit hôtel, la plupart des messages reviennent à la même douzaine de questions :

- **Les heures d'arrivée et de départ**, et la possibilité d'arriver plus tôt.
- **L'arrivée tardive :** « Nous arriverons vers 23 h 30, y aura-t-il quelqu'un à la réception ? »
- **Le parking, le wifi, le petit-déjeuner**, avec horaires et prix.
- **L'itinéraire** et la remise des clés.
- **Les modifications et annulations :** dates, personnes en plus, remboursements.
- **Les factures**, souvent au nom d'une entreprise avec un numéro d'identification fiscale.
- **Les disponibilités et les prix**, de la part de personnes qui n'ont pas encore réservé.

Les premières questions ont une seule bonne réponse, que vous connaissez déjà. Les deux dernières demandent une personne ou des données en temps réel : une annulation est un engagement, et un prix dépend des dates, du nombre de personnes et de ce qui reste à vendre. C'est cette distinction qui décide de ce que l'IA peut faire seule.

## En combien de temps les clients attendent-ils une réponse ?

- **WhatsApp :** les clients écrivent souvent en voyage et attendent la réponse le téléphone à la main. Sur la plateforme officielle WhatsApp Business, le message d'un client ouvre une fenêtre de service client de 24 heures pendant laquelle vos réponses sont gratuites ([tarifs WhatsApp](https://whatsappbusiness.com/products/platform-pricing/)).
- **Booking.com :** le centre d'aide de Little Hotelier précise que Booking.com suit un score de réponse interne fondé sur votre rapidité, et que marquer un message **No reply needed** clôt sa fenêtre de 24 heures ([FAQ du Messaging hub](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)). Pour en savoir plus : [gérer les messages clients Booking.com](/blog/booking-com-guest-messages).
- **Expedia :** les clients écrivent depuis l'application Expedia, et vous répondez dans Partner Central sous **Messages**. Voir [les messages clients Expedia](/blog/expedia-guest-messages).
- **E-mail :** plus lent, mais un client qui demande des disponibilités interroge probablement d'autres hôtels en même temps.

Un brouillon qui attend dans la boîte de réception réduit le temps de réponse sans sauter la vérification.

## Pourquoi l'IA ne doit jamais inventer une réponse

Une heure d'arrivée erronée, c'est agaçant. Une place de parking promise que vous n'avez pas, un prix sous votre tarif ou les détails de la réservation d'un autre client, cela coûte cher. Les chatbots comblent les trous avec un texte plausible : une IA qui s'adresse aux clients a donc besoin de trois limites.

1. **Des sources fermées.** Elle répond uniquement à partir de ce que vous lui avez donné : votre page FAQ, vos notes, la réservation. Tout le reste est « à confirmer ».
2. **Une seule réservation, et seulement pour la bonne personne.** Elle ne voit une réservation que si l'expéditeur est bien ce client, preuve à l'appui.
3. **Pas de mains.** Elle propose ; une personne (ou une règle étroite et plafonnée) décide de ce qui parvient au client ou à la réservation.

## Un jeu de modèles pour commencer

Quel que soit votre outil, rédigez-les une fois pour toutes. Ils deviennent votre FAQ, les informations de votre IA et vos réponses rapides :

```text [modeles-reponses-clients.txt]
ARRIVÉE
Bonjour [nom], l'arrivée est possible à partir de [heure] et le départ jusqu'à [heure]. Si vous arrivez plus tôt, vous pouvez nous laisser vos bagages.

ARRIVÉE TARDIVE
Merci de nous prévenir, [nom]. La réception est ouverte jusqu'à [heure]. Ensuite, [comment récupérer la clé]. Nous avons noté votre heure d'arrivée.

PARKING
Nous avons un parking [gratuit / payant à X par nuit] [sur place / à telle adresse]. [Il ne peut pas être réservé / merci de nous indiquer votre immatriculation].

PETIT-DÉJEUNER
Le petit-déjeuner est servi de [heure] à [heure] pour [prix] par personne. [Inclus / non inclus] dans votre tarif.

FACTURE
Bien sûr. Merci de nous envoyer le nom de l'entreprise, son numéro d'identification fiscale et l'adresse de facturation : nous établirons la facture à votre départ.

ANNULATION (une personne doit traiter)
Merci, [nom]. Nous avons transmis votre demande à notre équipe et vous confirmerons très vite les conditions de votre réservation.

Nous ne vous demanderons jamais vos coordonnées bancaires par WhatsApp ou par SMS.
```

## La méthode rapide : une boîte de réception où l'IA rédige et une personne valide

L'**Inbox** (boîte de réception, `/messaging`, alpha) de Hotelier Tools collecte les messages des clients à quatre endroits, associe chacun à sa réservation, et prépare une réponse et un plan que vous validez.

::screenshot{src="/images/blog/demo/en/ai-replies-inbox-thread-plan.webp" alt="Boîte de réception avec la conversation WhatsApp de Noah Nilsson ouverte : le badge Identity verified, sa réservation du 3 au 7 novembre (4 nuits, 1 personne, arrivé, payé), le plan de l'IA en brouillon classé arrivée tardive à 93 %, la section Why, une réponse modifiable en espagnol et l'action send_message, avec le panneau Assistant à droite" caption="Le message, la réservation et un brouillon côte à côte. Rien ne part tant que vous ne l'avez pas validé." path="/messaging"}
::

### Étape 1 : connectez vos canaux

| Canal | Où | Comment il se connecte |
|---|---|---|
| **WhatsApp** | **Credentials > WhatsApp (WAHA)** (`/credentials/messaging-whatsapp`) | Un serveur WAHA, sa session et sa clé API, et un webhook |
| **E-mail** | **Credentials > Guest mailbox** (`/credentials/messaging-email`) | Connexion **Google** ou **Microsoft** (OAuth), ou **Other (IMAP/SMTP)** |
| **Booking.com** | **Credentials > Booking.com extranet** (`/credentials/booking-extranet`) | Vos propres identifiants d'extranet avec leur second facteur |
| **Expedia** (bêta) | **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`), puis **Switch on Expedia messages** | Vos propres identifiants Partner Central |

Expedia est le plus récent : depuis la version 1.71 (novembre 2026), ses conversations arrivent avec le client, le séjour et le dernier message, et les réponses partent toujours de Partner Central ([détails](/blog/expedia-guest-messages)).

Les boîtes Outlook et Microsoft 365 exigent la connexion Microsoft, car Microsoft refuse les connexions par mot de passe en IMAP. Une nouvelle boîte démarre en mode **Off** (collecte seule) : la rédaction consomme des crédits IA, c'est donc à vous de l'activer.

### Ce qu'est WAHA, et ses risques

[WAHA](https://waha.devlike.pro/docs/overview/introduction/) (WhatsApp HTTP API) est un serveur que vous hébergez : il fait tourner une session WhatsApp Web et permet à un autre logiciel de lire et d'envoyer les messages de ce numéro via HTTP. Il fonctionne comme WhatsApp Web ouvert sur un ordinateur : votre téléphone et l'application continuent de fonctionner.

1. Sur la page WhatsApp, saisissez la **WAHA base URL**, le **Session name** et la **WAHA API key**, puis enregistrez.
2. Dans le panneau **WhatsApp session**, appuyez sur **Start session**. Quand un QR code s'affiche, ouvrez WhatsApp sur le téléphone de l'hôtel, allez dans **Réglages > Appareils connectés > Connecter un appareil** et scannez-le.
3. Appuyez sur **Connect webhook**, pour que WAHA envoie les nouveaux messages à la boîte de réception, puis sur **Test connection**.
4. Si vous le souhaitez, sous **Message history**, choisissez jusqu'où remonter (7, 30 ou 90 jours, ou **Last year**) et appuyez sur **Import history**. Les discussions importées servent uniquement de contexte : rien n'est analysé, rien ne reçoit de réponse, rien n'est marqué non lu.

::screenshot{src="/images/blog/demo/en/ai-replies-whatsapp-session.webp" alt="Page d'identifiants WhatsApp (WAHA) avec les champs WAHA base URL, Session name et WAHA API key, et le panneau WhatsApp session indiquant Connected et Webhook not configured, les boutons Restart session et Connect webhook, et Message history avec Last 90 days et Import history" caption="Associez le numéro, connectez le webhook et importez les anciennes discussions depuis un seul panneau." path="/credentials/messaging-whatsapp"}
::

Les risques, sans détour :

- **Ce n'est pas l'API officielle.** La documentation de WAHA l'indique : « WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe » (WhatsApp n'autorise pas les bots ni les clients non officiels sur sa plateforme, donc cela ne doit pas être considéré comme totalement sûr). Un numéro pourrait être bloqué. Répondez aux clients qui vous écrivent ; n'envoyez jamais de messages en masse ([How to avoid blocking](https://waha.devlike.pro/docs/overview/how-to-avoid-blocking/)).
- **Verrouillez WAHA.** Le panneau vous prévient quand **WAHA answers without an API key** (WAHA répond sans clé API) : n'importe qui y accédant pourrait lire et envoyer les messages de ce numéro.
- **L'URL du webhook est un secret.** Son jeton est ce qui fait entrer les messages dans votre boîte de réception. Les discussions de groupe sont ignorées.

Pour l'API officielle de Meta, voir le Messaging hub de Little Hotelier dans [WhatsApp avec Little Hotelier](/blog/whatsapp-little-hotelier).

### Étape 2 : comment chaque réponse est construite

1. **L'expéditeur est associé à une seule réservation.** Le panneau affiche le résultat : **Identity verified** (identité vérifiée), **Ambiguous — refused** (plusieurs clients correspondent, donc aucune réservation n'est affichée), **No reservation match** (l'IA répond uniquement à partir de votre FAQ) ou **Not checked**. Sur WhatsApp, le numéro doit correspondre au téléphone de la réservation sur au moins ses 8 derniers chiffres ; par e-mail, l'adresse exacte. Une conversation Booking.com indique sa propre réservation ; une conversation Expedia n'est liée que par la référence `EXP-` qu'elle contient.
2. **Elle vous laisse d'abord la main.** Un message WhatsApp est analysé au bout de 5 minutes, un e-mail au bout d'une heure. Si quelqu'un répond entre-temps, le plan indique **already answered** et rien n'est facturé.
3. **L'IA lit** cette seule réservation, vos sources **FAQ & knowledge** (`/messaging/faq`), vos notes internes et la fiche de votre établissement dans **Settings > Property & AI knowledge**.
4. **Elle renvoie un plan choisi dans une liste fermée :** envoyer un message, signaler au personnel, ajouter une note à la réservation ou définir l'heure d'arrivée. Elle n'a aucun outil, ne peut ni annuler, ni changer les dates, ni toucher aux paiements, et chaque action ne s'applique qu'à la réservation associée.
5. **Une personne décide.** Modifiez la réponse, puis **Approve (respect delay)** (approuver en respectant le délai) ou **Confirm & send now** (confirmer et envoyer tout de suite). Les plans laissés sans suite expirent au bout de 48 heures.

Avant tout envoi, un contrôle bloque une réponse qui contient la référence d'une autre réservation, ou un long numéro quel qu'il soit si l'expéditeur n'est pas vérifié.

Pour le modèle de sécurité complet (ce que chaque agent IA peut lire et modifier, comment les expéditeurs sont vérifiés sur chaque canal, et comment on empêche le message d'un client de donner des ordres à l'IA), lisez [comment fonctionnent les agents IA d'un hôtel](/blog/how-hotel-ai-agents-work).

### Étape 3 : choisissez ce que l'IA a le droit de faire

Sur **Channels** (`/messaging/channels`), chaque compte connecté a son propre mode :

| Mode | Ce qui se passe |
|---|---|
| **Off — collect only** | Les messages sont collectés et affichés. Rien n'est analysé ni envoyé. |
| **Draft — I approve everything** (par défaut) | L'IA prépare une réponse et un plan ; rien ne se passe tant que vous ne les validez pas. |
| **Automatic reply — no reservation changes** | L'IA envoie après un délai, seulement pour les questions simples (heure d'arrivée ou de départ, wifi, parking, arrivée tardive, itinéraire, équipements), pour un client vérifié et avec une confiance suffisante. |
| **Autonomous — replies AND changes reservations** | Elle ajoute aussi des notes ou définit l'heure d'arrivée sur une réservation vérifiée, sans approbation. Vérifiez son travail plusieurs fois par jour. |

Limites par canal : les conversations **Booking.com** ne sont jamais envoyées par l'IA, quel que soit le mode ; c'est une personne qui appuie sur Send. **Expedia** ne propose que Off et Draft, et la réponse s'écrit dans Partner Central. Les réponses automatiques s'arrêtent à 4 par heure, 12 par jour, ou 3 d'affilée sans réponse du client : une boucle de messages d'absence ne peut donc pas s'emballer.

### Étape 4 : signatures, mise en forme et fichiers par canal

Sous **Signatures** (`/messaging/signatures`), vous gardez plusieurs signatures nommées (Réception, Direction, English…), chacune rédigée une fois par canal, telle que ce canal l'affiche, et vous en choisissez une par défaut. Les exemples sont remplis à partir des informations de votre établissement. Les réponses Booking.com dans la conversation de réservation d'un client sont signées en texte brut ; les réponses publiques Q&A ne le sont jamais.

::screenshot{src="/images/blog/demo/en/ai-replies-signatures.webp" alt="Page Signatures avec l'exemple Reception ouvert : nom Reception défini comme Default, onglets Email, WhatsApp et Booking.com, la version e-mail avec le nom de l'hôtel, le téléphone de la réception et un lien vers le site, un champ Text version vide, et des exemples de signatures (Reception, Formal, Short, Full contact, Bilingual) à gauche" caption="Une signature, trois versions : enrichie pour l'e-mail, avec les marqueurs WhatsApp, en texte brut pour Booking.com." path="/messaging/signatures"}
::

L'IA rédige un seul brouillon, et la boîte de réception l'adapte au canal :

| Canal | Mise en forme | Fichiers |
|---|---|---|
| E-mail | Texte enrichi : gras, liens, listes, citations | Oui, jusqu'à 18 Mo au total |
| WhatsApp | Le `*gras*`, l'`_italique_` et les listes propres à WhatsApp | Jusqu'à 10 fichiers de 16 Mo chacun, plus des notes vocales enregistrées dans le navigateur |
| Booking.com | Texte brut ; une réponse publique Q&A reste sous 320 caractères | Non |

Sur WhatsApp, les photos, notes vocales et documents envoyés par les clients s'affichent dans la conversation. WhatsApp ne conserve les médias qu'un certain temps : un ancien fichier peut avoir disparu.

### Étape 5 : apprenez-lui vos réponses

- **FAQ & knowledge** (`/messaging/faq`) : ajoutez votre page FAQ ou du texte brut, et remplissez les notes internes. La page le dit clairement : l'IA « answers from these sources and nothing else » (répond à partir de ces sources et de rien d'autre).
- **AI training** (`/messaging/training`) : sous **Review recent**, appuyez sur **Correct** quand l'IA a mal compris un message ; il devient un exemple. Ajoutez des **Rules** (règles) d'une phrase, et utilisez le **Test bench** (banc d'essai) pour vérifier qu'elle est toujours d'accord (chaque test est une vraie analyse et consomme des crédits).
- **Mémoire des réponses :** aucune configuration. Les réponses envoyées par votre équipe au cours de la dernière année sont associées à la question qui les précédait, et les plus proches sont montrées à l'IA quand un message semblable arrive, sans le nom, les dates, les références ni les coordonnées de l'autre client. Tapez une fois « 6 € la nuit pour un chien, à régler à l'arrivée », et le prochain client qui pose la question reçoit la même réponse. Les notes internes l'emportent toujours sur une ancienne réponse.

::screenshot{src="/images/blog/demo/en/ai-replies-training-examples.webp" alt="Page AI training sur l'onglet Examples avec trois exemples enregistrés : une question sur le parking en français sur Booking.com sans action, une arrivée tardive en allemand sur WhatsApp qui définit l'heure d'arrivée à 01:00, et une demande de facture en espagnol par e-mail qui ajoute une note à la réservation, chacun avec une courte indication" caption="Les corrections deviennent des exemples que l'IA voit la prochaine fois qu'un message semblable arrive." path="/messaging/training"}
::

### Ce que la boîte de réception gère aussi

- **Les prix viennent de votre moteur de réservation.** L'assistant privé à droite donne un prix tiré de votre page de réservation directe pour ces dates et ce nombre de personnes, avec votre code promo. Un prix qu'aucun devis n'a renvoyé est signalé comme non vérifié.
- **Nuits complètes :** quand un client demande une date complète et que votre [liste d'attente](/blog/hotel-waitlist-sold-out-dates) est activée, l'assistant propose une carte pour l'y inscrire.
- **Demandes de facture :** les deux messages fixes de demande de facture de Booking.com sont lus sans IA et deviennent une carte qui inscrit le séjour pour sa [facture au départ](/blog/send-invoice-to-guest-at-checkout), avec une réponse dans la langue du client.
- **AI credits** (crédits IA, `/messaging/credits`) : une analyse correspond à un message client lu, planifié et rédigé, facturé au coût réel du modèle, d'abord sur un forfait mensuel, puis sur votre solde. Les prix des packs y sont encore provisoires.

::demo-cta{path="/messaging"}
::

Tout ce que fait la boîte de réception est décrit sur la [page Messagerie clients](/tools/bot/guest-inbox). Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à WhatsApp, Meta, Booking.com, Expedia Group, SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier, Booking.com et Expedia de votre hôtel.
::

À lire aussi : [comment repérer les messages frauduleux](/blog/hotel-scam-messages), [l'assistant IA pour la réception](/blog/ai-assistant-hotel-front-desk), [WhatsApp avec Little Hotelier](/blog/whatsapp-little-hotelier).

## Résumé

- Rédigez une fois vos réponses à la douzaine de questions courantes : ce sont vos modèles, votre FAQ et les informations de votre IA.
- Laissez l'IA rédiger, et gardez une personne pour les annulations, les remboursements, les prix et les réclamations.
- L'IA ne doit voir une réservation que si l'expéditeur correspond à une seule réservation, et répondre « à confirmer » pour tout ce que vous n'avez pas listé.
- Dans Hotelier Tools, WhatsApp (via WAHA), l'e-mail, Booking.com et Expedia (bêta) partagent une seule boîte de réception, chaque canal démarre en **Draft**, et l'IA n'envoie jamais rien sur Booking.com ni sur Expedia.
- Les signatures, la mise en forme, l'entraînement et la mémoire des réponses donnent aux brouillons le ton de votre réception.
