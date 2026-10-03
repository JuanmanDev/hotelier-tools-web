---
title: "Assistant IA hôtel : que peut-il faire à la réception, en sécurité ?"
seoTitle: "Assistant IA hôtel : que peut-il faire à la réception ?"
description: "Un assistant IA consulte les réservations, rédige des réponses et prépare des modifications. Ce qu'il peut faire sans risque, et pourquoi vous validez tout."
date: 2026-10-03
category: ai
tags: [ai, ai assistant, front desk, approvals, little hotelier]
keywords: [assistant IA hôtel, réceptionniste IA hôtel, agent IA pour hôtel, assistant vocal IA hôtel, IA pour hôteliers, meilleures applications IA pour hôteliers]
feature: ai-assistant
demoPath: /chat
cover: /images/blog/demo/en/ai-chat-start.webp
coverAlt: "Écran d'accueil de l'assistant IA de Hotelier Tools indiquant que toute action qui modifie des données demande d'abord une confirmation, avec des questions suggérées et l'historique des conversations à gauche"
faq:
  - q: "Un assistant IA peut-il remplacer un réceptionniste d'hôtel ?"
    a: "Non. Il décharge la réception des recherches et des premiers brouillons : qui arrive, qui doit de l'argent, quoi répondre. Les décisions sur l'argent, les réservations et les clients difficiles restent à une personne, qui valide chaque modification."
  - q: "L'IA peut-elle annuler une réservation ou effectuer un remboursement toute seule ?"
    a: "Pas dans le chat du tableau de bord. Chaque modification affiche d'abord une carte à approuver ou à refuser, et le remboursement est une action irréversible à part, qui exige toujours une carte. L'IA qui répond aux clients ne peut ni annuler, ni changer les dates, ni toucher aux paiements."
  - q: "L'assistant vocal comprend-il le français ?"
    a: "Pas encore. Le bouton micro utilise la reconnaissance vocale intégrée à votre navigateur, réglée sur l'espagnol (es-ES), et votre navigateur doit la prendre en charge. Vous pouvez toujours écrire dans la langue de votre choix."
  - q: "L'IA répondra-t-elle automatiquement à mes clients Booking.com ?"
    a: "Non. Les messages Booking.com et les questions des clients arrivent dans la même boîte de réception, mais l'envoi automatique par l'IA vers Booking.com n'est jamais autorisé. C'est une personne qui décide."
  - q: "Combien coûte l'assistant IA ?"
    a: "Hotelier Tools est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027. Les hôtels qui démarrent en 2026 paient ensuite 50 € par mois pendant toute l'année 2027. Les réponses de l'assistant consomment des crédits IA, que vous pouvez suivre sur la page AI credits."
  - q: "Hotelier Tools fait-il partie de Little Hotelier ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec l'identifiant Little Hotelier de votre établissement."
---

Oui, un assistant IA peut déjà soulager concrètement la réception d'un petit hôtel : répondre à « qui arrive demain et qui n'a pas encore payé ? », rédiger des réponses aux clients, préparer des modifications de réservation ou des factures. La règle d'or est simple : il peut tout lire, mais **chaque modification attend la validation d'une personne**, et les remboursements, les envois de tarifs et les réponses aux clients Booking.com ne sont jamais laissés à l'IA seule.

Ce guide montre à quoi cela ressemble en pratique avec Hotelier Tools par-dessus Little Hotelier, avec de vraies demandes et ce qui se passe exactement après avoir appuyé sur Entrée.

## Que peut faire un assistant IA à la réception d'un petit hôtel aujourd'hui ?

Pensez à trois types de tâches, chacun avec un niveau de confiance différent.

| Type de tâche | Exemples | Qui décide |
|---|---|---|
| **Consulter** | Arrivées de demain, soldes impayés, chambres non attribuées, séjour facturable ou non, tarifs de ce soir | L'assistant répond. Rien ne change. |
| **Rédiger** | Une réponse à une question reçue par WhatsApp ou e-mail, une note pour le veilleur de nuit | Vous la lisez et l'envoyez, ou vous la modifiez d'abord. |
| **Modifier** | Mettre à jour le téléphone d'un client, inscrire un séjour à la facture au départ, appliquer un prix | L'assistant prépare une carte. Vous appuyez sur **Approve** ou **Reject**. |

Little Hotelier vous offre déjà beaucoup à la réception. Son [Guest Engagement Messaging Hub](https://www.littlehotelier.com/blog/learn-about-tech/unified-inbox/) réunit les conversations par e-mail, SMS, WhatsApp et Airbnb dans une seule boîte de réception, avec des modèles et des messages programmés. Ce qu'un assistant ajoute, c'est la possibilité de *demander* avec des mots simples et d'obtenir une réponse construite à partir de vos réservations en direct, au lieu de naviguer dans le calendrier et les fiches de réservation.

## Les trois endroits où l'assistant travaille dans Hotelier Tools

[Hotelier Tools](/tools/bot/ai-assistant) utilise le même ensemble d'outils à trois endroits. Tous suivent la même règle : les lectures s'exécutent, les modifications attendent une personne.

### Le chat de l'assistant dans le tableau de bord (bêta)

Ouvrez **AI Chat** (`/chat`) et posez une question sur les réservations, les clients, les prix, les factures, les contrôles ou la liste d'attente. Le chat vide le dit clairement : « Anything that changes data asks for your confirmation first » (tout ce qui modifie des données demande d'abord votre confirmation).

Les réponses arrivent sous forme de texte et de cartes : un résumé de réservation, une modification proposée avec un tableau de preuves, une carte d'inscription à la facture au départ, un tableau de recommandations de prix ou des curseurs de règles tarifaires. Chaque conversation passée est conservée dans **Chat History** (`/chat/history`).

Il y a aussi un bouton micro. Il utilise la reconnaissance vocale intégrée à votre navigateur, qui est pour l'instant **réglée sur l'espagnol (es-ES)** : la voix convient donc aux hispanophones. Tous les autres écrivent.

::screenshot{src="/images/blog/demo/en/ai-chat-arrivals-this-week.webp" alt="Chat IA de Hotelier Tools répondant à la question Which bookings arrive this week ? avec un appel d'outil et une liste Reservations (14) de cartes indiquant chaque client, les dates d'arrivée et de départ, Paid ou Pending, et un badge checked-out, checked-in ou confirmed" caption="Posez votre question avec des mots simples et la réponse arrive sous forme de cartes de réservation. Une simple consultation ne change rien." path="/chat/3a751210-d8ab-4cb7-8add-6ee5244c93af"}
::

### L'assistant du personnel par WhatsApp ou e-mail (alpha)

Sur **Staff assistant** (`/staff`), vous enregistrez un employé avec son nom, son numéro WhatsApp et/ou son e-mail, et un rôle : **Read only** (lecture seule) ou **Can request changes** (peut demander des modifications).

Quand cette personne écrit au numéro WhatsApp ou à la boîte mail connectés de votre hôtel, l'IA lui répond comme à un membre du personnel, sur le même canal, à partir de vos données Little Hotelier. Ses messages ne se mélangent jamais à la boîte de réception des clients.

- Un employé en **Read only** ne peut que poser des questions.
- Un employé en **Can request changes** peut demander des modifications, mais chacune devient une demande que le propriétaire approuve sur `/staff`.
- L'identité, c'est l'expéditeur lui-même : le numéro de téléphone enregistré ou une adresse e-mail qui passe les contrôles DKIM/DMARC.
- Les messages vieux de plus de 30 minutes ne reçoivent pas de réponse, pour qu'une réponse tardive n'agisse jamais sur des informations périmées.

Ici, WhatsApp fonctionne via une session WhatsApp Web (WAHA), et non via l'API officielle WhatsApp Business. Consultez [WhatsApp avec Little Hotelier](/blog/whatsapp-little-hotelier) pour connaître les options.

### Brouillons de réponses dans la boîte de réception des clients (alpha)

La [boîte de réception des clients](/tools/bot/guest-inbox) (`/messaging`) rassemble les messages WhatsApp, e-mail et Booking.com. Pour chaque compte connecté, vous choisissez un mode de réponse sur `/messaging/channels` :

| Mode | Ce qui se passe |
|---|---|
| Off | Les messages s'affichent. Rien n'est analysé ni envoyé. |
| **Draft** (par défaut) | L'IA prépare une réponse et un plan. Rien ne se passe tant que vous ne l'approuvez pas. |
| Auto | L'IA envoie sa réponse après un délai, mais elle ne peut jamais modifier une réservation. |
| Autonomous | L'IA effectue aussi les modifications de réservation autorisées, sans étape de validation. Relisez-la plusieurs fois par jour. |

Commencez en **Draft** et restez-y jusqu'à ce que vous fassiez confiance aux réponses. L'IA qui s'adresse aux clients n'a aucun outil : elle ne peut que renvoyer un plan choisi dans une courte liste (envoyer un message, signaler au personnel, ajouter une note à la réservation, définir une heure d'arrivée).

## Comment les cartes d'approbation évitent à l'IA une erreur coûteuse

Une IA peut mal interpréter un message ou choisir la mauvaise réservation. Les cartes d'approbation existent pour qu'une mauvaise estimation n'arrive jamais jusqu'à Little Hotelier.

1. **Toute écriture exige une carte.** Si le système ne sait pas si un outil lit ou écrit, il le traite comme une écriture.
2. **La carte montre la modification exacte.** Pour une réservation, vous voyez un tableau de preuves : la valeur dans Little Hotelier, ce qu'a fourni l'expéditeur et ce que dit le texte du message.
3. **Vous confirmez la source.** Les modifications de réservation saisies dans le chat comprennent une case à cocher (« c'est la bonne réservation et je fais confiance à la source »), car un message de chat est une affirmation, pas la preuve de l'identité de quelqu'un.
4. **Approve exécute exactement cet appel.** Appuyer sur **Approve** exécute sur le serveur la modification enregistrée. L'IA n'a pas de seconde chance de la réécrire.
5. **Chaque approbation est à usage unique.** Elle est liée à cet outil, à ces valeurs, à cette conversation et à cette personne, et elle expire au bout de 24 heures.
6. **Les remboursements sont à part.** Un remboursement est une action irréversible qui se trouve toujours derrière sa propre carte.

::screenshot{src="/images/blog/demo/en/embed-card-change-approval.webp" alt="Carte Approve these changes ? marquée Nothing written yet : une correspondance complète sur l'expéditeur WhatsApp, un tableau de preuves avec les colonnes Little Hotelier, WhatsApp sender et message text, les nouvelles valeurs Company et Tax ID marquées New et Claim, une case Also invoice this reservation automatically at checkout, et les boutons Reject et Approve and apply" caption="La carte de modification montre ce que contient Little Hotelier aujourd'hui, ce qui serait écrit et d'où vient chaque valeur. Rien n'est écrit tant que vous n'approuvez pas." path="/mcp-ui/reservation-change-proposal" width="690" height="494"}
::

## Exemples de demandes réelles, et ce qui se passe ensuite

Voici le genre de choses qu'un réceptionniste saisit un matin ordinaire. Les références de réservation sont inventées.

::prompt{label="Assistant Hotelier Tools"}
Qui arrive demain, et est-ce que l'un d'eux a encore un solde à payer ?
::

L'assistant lit les arrivées de demain et leurs paiements, puis les liste, avec une carte de résumé de réservation par client. Rien ne change, donc aucune carte à approuver.

::prompt{label="Assistant Hotelier Tools"}
Le client de la réservation BDC-1234567890 m'a envoyé un e-mail avec un nouveau numéro de portable : +34 600 000 000. Peux-tu le mettre à jour ?
::

L'assistant retrouve la réservation et prépare une carte de **modification proposée** : l'ancien téléphone, le nouveau et la provenance de la nouvelle valeur. Vous cochez la case de confiance et appuyez sur **Approve**. Ce n'est qu'alors que Little Hotelier est mis à jour.

::prompt{label="Assistant Hotelier Tools"}
Le client de BDC-1234567890 veut une facture. Envoie-la automatiquement à son départ.
::

Vous obtenez la carte d'inscription à la facture au départ. Une fois approuvée, le séjour est marqué pour la tâche de facturation quotidienne, et Little Hotelier envoie la facture par e-mail avec votre propre modèle après le départ. Les détails sont dans [envoyer la facture au départ du client](/blog/send-invoice-to-guest-at-checkout).

::prompt{label="Assistant Hotelier Tools"}
Combien devrait coûter une chambre double samedi prochain, et pourquoi ?
::

Vous obtenez le tableau de recommandations de prix avec les raisons de chaque chiffre : concurrents, demande, limites. Le lire ne change rien. Appliquer un prix est une écriture : il attend donc votre approbation.

::prompt{label="Assistant Hotelier Tools"}
Rembourse l'acompte de 40 € sur BDC-1234567890.
::

Le remboursement apparaît sur sa propre carte. Rien n'est remboursé tant que vous ne l'approuvez pas. En dehors du tableau de bord, via des [assistants IA externes](/blog/connect-claude-to-little-hotelier), les remboursements sont totalement bloqués.

Et depuis l'assistant du personnel sur WhatsApp :

::prompt{label="Personnel sur WhatsApp"}
La chambre 5 est-elle libre ce soir ? Si oui, déplace-y la réservation Martin qui arrive aujourd'hui.
::

La première moitié reçoit une réponse immédiate. Le déplacement est une modification : il devient donc une demande en attente sur `/staff`, que le propriétaire doit approuver.

::screenshot{src="/images/blog/demo/en/staff-assistant.webp" alt="Page Staff assistant avec une modification en attente d'approbation, une demande invoice_on_leave_add de Lucía (recepción) avec les boutons Reject et Approve and run, deux employés marqués Can request changes et Read only, et les derniers messages WhatsApp" caption="Les modifications que votre équipe demande par WhatsApp ou par e-mail attendent ici leur approbation." path="/staff"}
::

## Que ne doit jamais faire seul un assistant IA ?

Quel que soit l'outil, gardez ces points sous contrôle humain. Voici comment Hotelier Tools applique chacun d'eux.

- **Déplacer de l'argent.** Les remboursements exigent toujours leur propre carte. Les applications IA externes connectées via MCP ne peuvent pas rembourser du tout.
- **Modifier une réservation parce qu'un message le demande.** L'IA qui répond aux clients ne voit une réservation que si l'expéditeur est vérifié : un téléphone qui correspond à la réservation sur au moins 8 derniers chiffres, l'adresse e-mail exacte, ou un fil Booking.com. Si deux clients correspondent, aucune réservation n'est associée.
- **Répondre seule aux clients Booking.com.** L'envoi automatique par l'IA vers Booking.com n'est jamais autorisé.
- **Inventer des choses.** L'IA qui répond aux clients s'appuie uniquement sur votre FAQ, vos notes sur l'établissement et la fiche de l'établissement. Si vous n'avez pas indiqué s'il y a un parking, la réponse est « à confirmer », jamais « oui ».
- **Mentionner d'autres clients.** Un garde-fou bloque les références de réservation qui n'appartiennent pas au client de la conversation.
- **Envoyer des prix sans limites.** L'IA ne fait pas partie du calcul nocturne des prix. Le pilote automatique est désactivé par défaut et, une fois activé, il fait varier une nuit de ±20 % au maximum par défaut, sans jamais descendre sous votre prix plancher.
- **Déposer des déclarations officielles ou envoyer des e-mails aux clients depuis l'extérieur.** Soumettre l'enquête INE, envoyer une facture par e-mail ou écrire aux clients en liste d'attente est bloqué pour les applications IA externes. Dans le chat du tableau de bord, chacune de ces actions passe par une carte.

Les réponses sans surveillance ont aussi des plafonds de volume : 4 par heure, 12 par jour et 3 de suite sans réponse du client.

## Rôles, confidentialité et coût

**Rôles.** Les demandes de l'assistant du personnel sont approuvées par le propriétaire sur `/staff`. Les comptes d'équipe avec rôles sont indiqués comme « soon » sur la [page de l'assistant](/tools/bot/ai-assistant) ; ils sont conçus pour que, par exemple, un accès réception puisse voir les prix sans pouvoir les modifier, et ne puisse pas effectuer un remboursement même avec une carte.

**Confidentialité.** Les identifiants de Little Hotelier, de Booking.com et de la messagerie sont stockés chiffrés (AES-256-GCM). Les messages des clients et les détails des réservations sont traités par un fournisseur d'IA quand l'assistant les lit. L'[accord de traitement des données](https://dashboard.hotelier.tools/legal/dpa) et la [politique de confidentialité](https://dashboard.hotelier.tools/legal/privacy) expliquent ce qui est traité.

**Coût.** Hotelier Tools est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027. Les hôtels qui démarrent en 2026 paient ensuite 50 € par mois pendant toute l'année 2027, avec toutes les fonctionnalités incluses. Chaque réponse de l'assistant et chaque analyse de message client consomme des crédits IA ; votre quota, votre solde et vos dépenses se trouvent sur **AI credits** (`/messaging/credits`).

::callout{type="note" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec l'identifiant Little Hotelier de votre établissement, et chaque modification qu'il effectue est visible dans Little Hotelier comme d'habitude.
::

## Comment l'essayer sans risque

1. Ouvrez la démo publique ci-dessous. Elle utilise un hôtel fictif, et rien n'atteint de vrais systèmes.
2. Demandez les arrivées de demain, puis demandez une modification et regardez la carte que vous obtenez.
3. Dans votre propre tableau de bord, connectez Little Hotelier sur **Credentials**, remplissez la fiche de l'établissement sur `/settings/property` (elle reprend votre adresse, vos conditions et vos chambres depuis Little Hotelier) et ajoutez votre FAQ sur `/messaging/faq`.
4. Laissez la boîte de réception des clients en **Draft** pendant les premières semaines et corrigez ce que l'IA a mal compris sur `/messaging/training`.

::demo-cta{path="/chat"}
::

## Résumé

- Un assistant IA est sûr à la réception quand il lit librement et **demande avant chaque modification**.
- Dans Hotelier Tools, cela fonctionne dans le chat du tableau de bord, par WhatsApp ou e-mail pour le personnel, et sous forme de brouillons de réponses dans la boîte de réception des clients.
- Les remboursements, les réponses Booking.com, les limites de prix et les déclarations officielles restent aux mains des personnes.
- Vous voulez les mêmes réponses dans Claude ou ChatGPT ? Lisez [ce qu'est un serveur MCP](/blog/what-is-mcp-server-hotels), puis [connecter Claude à Little Hotelier](/blog/connect-claude-to-little-hotelier).
