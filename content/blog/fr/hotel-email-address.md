---
title: "Une adresse e-mail d'hôtel pour les factures fournisseurs et les accès aux portails : comment marchent les adresses de réception seule"
seoTitle: "Adresse e-mail d'hôtel pour factures fournisseurs et accès"
description: "Une adresse privée de réception seule pour les factures fournisseurs, et une par accès aux portails. Sans mot de passe IMAP, rien de partagé entre hôtels."
date: 2026-11-01
category: operations
tags: [e-mail, factures fournisseurs, little hotelier, booking.com, expedia, sécurité]
keywords: [adresse e-mail pour factures fournisseurs, adresse mail dédiée factures hôtel, boîte mail factures fournisseurs, adresse e-mail réception seule, transférer factures au comptable par mail, adresse e-mail utilisateur little hotelier, adresse e-mail utilisateur extranet booking.com, centraliser factures fournisseurs hôtel]
feature: dashboard
demoPath: /credentials
cover: /images/blog/demo/en/supplier-invoices-mailbox-settings.webp
coverAlt: "Réglages Received invoices : la carte Suggestions avec Suggest invoices that have not arrived activé et 24 mois d'historique, et la carte Mailboxes avec reservas@example.com connectée, Read for invoices activé, INBOX comme dossier à lire, un premier balayage sur 120 jours, et les listes Never read mail from et Always read mail from vides"
faq:
  - q: "Qu'est-ce qu'une adresse e-mail de réception seule pour un hôtel ?"
    a: "Une adresse qui reçoit du courrier et n'en envoie jamais. Dans Hotelier Tools, chaque établissement peut avoir la sienne, par exemple inv-7k2m9qx4hp@in.hotelier.tools pour les factures fournisseurs. Ce qui y arrive va sur le compte de cet établissement, sans mot de passe IMAP ni connexion Microsoft."
  - q: "Un autre hôtel peut-il voir ce qui est envoyé à mon adresse ?"
    a: "Non. Chaque adresse et chaque accès appartient à un seul établissement. L'adresse est faite de caractères aléatoires : elle ne révèle pas le nom de votre hôtel, et personne ne peut en déduire vos autres adresses."
  - q: "in.hotelier.tools va-t-il devenir mon identifiant Little Hotelier ou Booking.com ?"
    a: "Non. Le domaine de Hotelier Tools ne devient jamais votre identifiant principal ni votre e-mail de récupération, nulle part. Un accès de service est un utilisateur supplémentaire que vous ajoutez à votre propre extranet, et que vous pouvez supprimer quand vous voulez."
  - q: "Que devient un e-mail envoyé à une adresse qui n'existe pas ?"
    a: "Il est supprimé sans bruit, sans message de non-remise. Ainsi, personne ne peut tester quelles adresses existent. Le courrier envoyé à une ancienne adresse de factures continue d'arriver pendant 30 jours, puis il est supprimé lui aussi."
  - q: "Y a-t-il une limite au nombre d'e-mails qu'une adresse peut recevoir ?"
    a: "Oui. Chaque établissement peut recevoir 100 messages par mois sur le serveur de messagerie de Hotelier Tools. Au-delà, les messages sont conservés et traités au début du mois suivant ou quand le support relève la limite. Votre propre messagerie connectée ne compte jamais."
  - q: "Hotelier Tools fait-il partie de Little Hotelier, Booking.com ou Expedia ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à SiteMinder, Little Hotelier, Booking.com ou Expedia, ni approuvé par eux. Il se connecte avec les propres identifiants de votre hôtel."
---

Hotelier Tools donne à chaque établissement ses propres adresses e-mail de réception seule sur le domaine `in.hotelier.tools`. L'une sert aux factures fournisseurs : les fournisseurs y envoient leurs PDF, photos et factures électroniques, et chacune attend votre vérification dans **Received invoices** (factures reçues). Pas besoin de mot de passe IMAP ni de connexion Microsoft. Les autres sont une par portail (Little Hotelier, Booking.com, Expedia), pour un accès dédié « Hotelier Tools comme utilisateur ». En novembre 2026, les invitations qui y arrivent sont gardées pour une personne, pas acceptées automatiquement.

## Qu'est-ce qu'une adresse e-mail d'hôtel de réception seule ?

C'est une adresse qui reçoit du courrier et n'en envoie jamais. Chacune ressemble à ceci :

```text
inv-7k2m9qx4hp@in.hotelier.tools
```

- **La première partie dit à quoi elle sert.** `inv` correspond aux factures fournisseurs ; `lh`, `bk` et `ex` aux accès Little Hotelier, Booking.com et Expedia. C'est ce code qui décide où va un message. L'expéditeur et le contenu, jamais.
- **Le reste est aléatoire.** Dix caractères, sans `0/o` ni `1/l/i` qu'on pourrait confondre. Il ne contient ni le nom ni l'identifiant de votre hôtel : seule la base de données de Hotelier Tools sait à quel établissement il appartient.
- **Chaque usage a son propre jeton.** Si un fournisseur connaît votre adresse de factures, cela ne lui apprend rien sur vos adresses d'accès.
- **Rien n'est envoyé depuis cette adresse.** Le domaine publie une règle qui interdit à tout serveur d'envoyer du courrier en son nom : personne ne peut donc envoyer depuis votre adresse.

## Pourquoi ne pas utiliser la boîte mail de l'hôtel ?

Vous pouvez, et beaucoup d'hôtels commencent ainsi. La bonne pratique habituelle consiste à créer une adresse réservée aux factures (par exemple `factures@votrehotel.fr`) et une règle de transfert, pour que le courrier des fournisseurs ne se perde pas parmi les e-mails de réservation :

- **Gmail :** **Paramètres > Voir tous les paramètres > Transfert et POP/IMAP**, ajoutez et validez l'adresse, puis créez un filtre qui ne transfère que les messages correspondants ([aide Google](https://support.google.com/mail/answer/10957)).
- **Outlook :** créez une règle qui transfère les messages de vos fournisseurs ([support Microsoft](https://support.microsoft.com/office/45aa9664-4911-4f96-9663-ece42816d746)).

Le problème vient à l'étape suivante. Pour qu'un logiciel lise cette boîte, vous lui donnez un mot de passe IMAP ou vous approuvez une connexion Microsoft ou Google, et il voit alors toute la boîte. Une adresse de réception seule inverse la logique : les fournisseurs écrivent à une adresse qui ne reçoit que des factures, et rien n'est ouvert dans votre propre messagerie.

Hotelier Tools gère les deux. Si vous préférez tout garder dans votre messagerie, connectez-la sous **Messaging > Channels** et activez-la dans **Settings > Received invoices**. C'est en lecture seule : rien n'est marqué comme lu, déplacé ni supprimé (voir [recevoir les factures fournisseurs par e-mail](/blog/supplier-invoices-by-email)).

::screenshot{src="/images/blog/demo/en/supplier-invoices-mailbox-settings.webp" alt="Réglages Received invoices : la carte Suggestions avec Suggest invoices that have not arrived activé et 24 mois d'historique, et la carte Mailboxes avec reservas@example.com connectée, Read for invoices activé, INBOX comme dossier à lire, un premier balayage sur 120 jours, et les listes Never read mail from et Always read mail from vides" caption="L'autre voie : votre propre messagerie connectée, lue uniquement pour les factures. L'adresse de factures, elle, n'a besoin d'aucune boîte mail." path="/settings/received-invoices"}
::

## Quelque chose est-il partagé entre hôtels ?

Non. Chaque adresse et chaque accès appartient à un seul établissement :

- Aucun accès Hotelier Tools ne peut voir les extranets de deux hôtels. Un identifiant volé ou un compte bloqué ne touche qu'un hôtel.
- **Notre domaine ne devient jamais votre identifiant principal ni votre e-mail de récupération, nulle part.** Si notre messagerie était un jour compromise, ou si vous arrêtiez d'utiliser Hotelier Tools, vous ne perdriez pas l'accès à votre propre extranet.
- Chaque serveur (déploiement) a son propre domaine et sa propre boîte. Le courrier ne passe jamais de la base de données d'un serveur à celle d'un autre.

## Comment configurer l'adresse des factures fournisseurs

1. Ouvrez **Settings > Received invoices** (`/settings/received-invoices`) et trouvez la carte **Invoice address**.
2. Appuyez sur **Create the address**. Vous obtenez une adresse pour l'établissement, faite de caractères aléatoires.
3. Appuyez sur **Copy** et envoyez-la à vos fournisseurs : « Merci d'envoyer vos factures à cette adresse. » La liste **Received invoices** (`/received-invoices`) affiche la même adresse sous **Suppliers can email invoices to**.
4. Vérifiez que la tâche **Read the hotel mailbox** est active. Elle importe ce qui arrive à l'adresse ; toutes les 5 minutes est la programmation conseillée.
5. Surveillez **Recent mail** sur la même carte : chaque message affiche son expéditeur, ses fichiers et ce qu'il est devenu.

Vous pouvez aussi transférer à l'adresse les factures que vous avez déjà. Hotelier Tools s'oriente sur l'adresse à laquelle le message a été remis : un message transféré ou en copie cachée arrive donc bien au bon établissement. Si vous avez enregistré un e-mail en fichier, **Add an email by hand** accepte un `.eml` et applique les mêmes contrôles.

Besoin d'une nouvelle adresse, par exemple après une vague de spam ? Appuyez sur **New address**. L'ancienne continue de recevoir pendant 30 jours, avec une note sur chaque message indiquant qu'il est arrivé à une adresse retirée, puis elle s'arrête.

## Que devient le courrier envoyé à l'adresse des factures ?

Chaque message est traité comme non fiable :

- **D'abord, un contrôle anti-fraude.** Un message jugé à haut risque est retenu pour une personne, jamais importé, et son original est conservé.
- **Le contrôle de l'expéditeur, c'est nous qui le faisons.** Le fait que le domaine de l'expéditeur a passé ou non son contrôle d'authenticité (DMARC) est lu dans l'en-tête ajouté par notre propre serveur de messagerie, jamais dans la ligne **From**. Un fournisseur dont le contrôle échoue reçoit un avertissement qu'une personne doit valider avant que la facture puisse être confirmée ou payée.
- **Les pièces jointes passent par l'import habituel.** Les PDF, les photos (PNG, JPEG, WebP) et les factures électroniques (Facturae, UBL, CII) sont ajoutés à **Received invoices**. Chacun démarre en **To review** (à vérifier) : rien n'est confirmé ni payé tout seul.
- **Jamais deux fois.** Un fichier déjà arrivé par votre propre messagerie, ou ajouté à la main, est reconnu à son contenu et n'est pas ajouté à nouveau.
- **Taille et forfait.** Un message de plus de 25 Mo n'est pas conservé. Sur un forfait sans facturation, le courrier envoyé à l'adresse est stocké et retenu, et rien n'est lu par l'IA.

Le courrier envoyé à une adresse qui n'existe pas est supprimé sans bruit, sans message de non-remise. Personne ne peut tester quelles adresses sont réelles.

## Accès de service : une adresse par portail

Le second usage concerne les accès. Au lieu de donner à Hotelier Tools votre propre mot de passe Little Hotelier, Booking.com ou Expedia, vous ajoutez à votre extranet un nouvel utilisateur avec une adresse privée, et cet utilisateur est Hotelier Tools, pour votre établissement uniquement. Vous choisissez ses droits et pouvez le supprimer en un clic.

| Portail | Adresse | Où elle se gère |
|---|---|---|
| Little Hotelier | `lh-…@in.hotelier.tools` | `/credentials/hotelier-advanced` |
| Extranet Booking.com | `bk-…@in.hotelier.tools` | `/credentials/booking-extranet` |
| Expedia Partner Central | `ex-…@in.hotelier.tools` | `/credentials/expedia-extranet` |

Chacune de ces pages a une carte comme **Hotelier Tools as a user in Little Hotelier** : vous saisissez le numéro d'établissement du portail, appuyez sur **Get the login address**, puis invitez cette adresse dans votre extranet.

Soyons clairs sur l'état des choses en novembre 2026 :

- **Ce qui est automatique :** l'adresse, la vérification qu'un message vient vraiment du domaine du portail, et les règles de sécurité. Une alerte de sécurité (« New sign-in », « Password changed ») n'est jamais cliquée : elle est transférée au propriétaire de l'établissement. Une réinitialisation de mot de passe que personne n'a demandée n'est jamais suivie, et le propriétaire en est informé.
- **Ce qu'une personne fait aujourd'hui :** aucune invitation de portail n'a encore été capturée et analysée, Hotelier Tools ne peut donc pas en accepter une de lui-même. Chaque message envoyé à une adresse d'accès est **retenu pour une personne**, et la carte l'indique. En attendant, connectez-vous avec le formulaire plus bas sur la même page. Pour Little Hotelier, cela veut dire coller le lien d'activation du nouvel utilisateur (voir [comment ajouter un utilisateur à Little Hotelier](/blog/add-user-little-hotelier)).

Une fois ce point développé, une invitation ne sera acceptée que si elle concerne le numéro d'établissement que vous avez déclaré : une adresse qui aurait fuité ne pourra pas faire entrer l'établissement d'un inconnu dans votre compte.

Vous préférez votre propre adresse ? L'option **Where the portal writes to this login** de la carte permet à un accès d'utiliser **Your own mailbox**, l'une de vos messageries connectées. Seuls les messages envoyés par le portail sont lus. Gmail et Microsoft 365 / Outlook peuvent prouver qu'un message est authentique ; avec les autres fournisseurs, chaque message du portail est retenu pour une personne.

## Où trouver toutes mes adresses ?

**Credentials** (`/credentials`) se termine par **Hotel mailbox addresses** : l'adresse de factures et les trois adresses d'accès, chacune avec son état (par exemple **Waiting for the invitation** ou **Active**) et un lien **Open** vers la page qui la gère. La liste est en lecture seule.

Deux règles de visibilité s'appliquent :

- Une adresse d'accès n'est montrée qu'aux membres de votre équipe qui gèrent les connexions. Les autres voient son état, avec la mention « The address is shown only to people who manage connections ».
- L'adresse de factures est montrée aux personnes qui peuvent voir les factures reçues.

Si votre serveur n'a pas de domaine de messagerie configuré, la section le dit une fois au lieu de lister des adresses vides.

## Combien de messages chaque établissement peut-il recevoir ?

Chaque établissement peut recevoir **100 messages par mois** sur le serveur de messagerie de Hotelier Tools. C'est une protection du serveur, pas un prix.

- Consultez-la dans **Plan and billing** (`/subscriptions`), sous **Received mail** : le décompte, les messages en attente et la liste du mois.
- **Au-delà de la limite**, un message est stocké, pas perdu. Il attend et est traité automatiquement, du plus ancien au plus récent, au début du mois suivant ou quand la limite est relevée. Le propriétaire reçoit un seul e-mail ce mois-là.
- **Besoin de plus ?** Utilisez **Contact support** sur la même carte.
- Le courrier lu dans votre propre messagerie connectée et les fichiers `.eml` que vous importez ne comptent jamais.

## Demander à l'assistant

Les adresses ont des outils pour l'assistant IA (`/chat`) et pour les clients MCP comme Claude :

- « À quelle adresse les fournisseurs envoient-ils leurs factures ? » → `list_hotel_mail_addresses`
- « Quelque chose est-il arrivé à l'adresse de factures cette semaine ? » → `list_hotel_mail_messages`
- « Crée une nouvelle adresse pour les factures fournisseurs » → `rotate_hotel_mail_address`, seulement après votre accord sur la carte
- « L'utilisateur Hotelier Tools est-il connecté dans Booking.com ? » → `get_service_login`

Aucun outil ne renvoie jamais une adresse d'accès : elle n'est montrée qu'à une personne, sur la page de connexion. Accepter une invitation n'est jamais non plus le travail d'un outil.

::demo-cta{path="/received-invoices"}
::

Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à SiteMinder, Little Hotelier, Booking.com ou Expedia, ni approuvé par eux. Il se connecte avec les propres identifiants de votre hôtel, et ses adresses ne remplacent jamais votre identifiant ni votre e-mail de récupération.
::

À lire aussi : [les factures fournisseurs par e-mail](/blog/supplier-invoices-by-email), [ajouter un utilisateur à Little Hotelier](/blog/add-user-little-hotelier), [le tableau de bord](/tools/bot/dashboard).

## Résumé

- Chaque établissement reçoit des adresses privées de réception seule sur `in.hotelier.tools` : `inv-…` pour les factures fournisseurs et une par accès aux portails.
- Les factures fournisseurs envoyées à `inv-…` arrivent dans **Received invoices** en **To review**, après un contrôle anti-fraude, sans mot de passe IMAP.
- Rien n'est partagé entre hôtels, et le domaine ne devient jamais votre identifiant ni votre e-mail de récupération.
- Les adresses d'accès existent déjà, mais les invitations sont retenues pour une personne tant que l'étape d'acceptation de chaque portail n'est pas développée.
- 100 messages par mois et par établissement ; toutes les adresses se trouvent en bas de `/credentials`.
