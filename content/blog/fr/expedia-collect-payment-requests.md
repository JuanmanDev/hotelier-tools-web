---
title: "Expedia Collect : se faire payer par carte virtuelle ou demande de paiement (sans en oublier une)"
seoTitle: "Paiements Expedia Collect : carte virtuelle ou demande"
description: "Avec Expedia Collect, le client paie Expedia, et vous n'êtes payé qu'en débitant la carte virtuelle ou en le demandant. Délais, étapes, automatisation."
date: 2026-11-04
updated: 2026-11-05
category: invoicing
tags: [expedia, expedia collect, paiements, carte virtuelle, partner central, automatisation]
keywords: [demande de paiement expedia collect, expedia collect paiement hôtel, comment être payé par expedia, carte virtuelle expedia quand débiter, expedia collect non payé, paiements expedia partner central, expedia collect ou hotel collect, carte virtuelle expedia expirée, paiements automatiques expedia]
feature: automated-checks
demoPath: /credentials/expedia-extranet
cover: /images/blog/demo/en/expedia-collect-checkout-check.webp
coverAlt: "Contrôles When they leave dans Hotelier Tools avec le contrôle Expedia Collect payment, désactivé : il vérifie dans Partner Central si le paiement a été demandé au départ du client, renvoie vers l'historique des paiements Expedia et précise qu'il ne redemande jamais un séjour refusé par Expedia ni ne débite les cartes virtuelles"
featured: true
faq:
  - q: "De combien de temps dispose-t-on pour demander le paiement d'une réservation Expedia Collect ?"
    a: "365 jours à compter de la date de départ du client. Passé ce délai, Partner Central ne propose plus la demande de paiement pour ce séjour : une réservation oubliée peut donc être de l'argent que vous ne toucherez jamais."
  - q: "Quand peut-on débiter la carte virtuelle Expedia ?"
    a: "À partir de la date d'arrivée. Expedia conseille de la débiter le jour de l'arrivée, puis de réessayer en fin de journée en cas de refus, à cause des fuseaux horaires. Débitez le montant exact affiché ; la carte est désactivée six mois après le départ."
  - q: "Combien de temps Expedia met-il à régler une demande de paiement ?"
    a: "Expedia envoie le paiement à votre banque selon vos conditions de paiement, en général 30 jours après la demande. La banque peut ajouter 2 à 8 jours."
  - q: "Faut-il demander chaque paiement Expedia Collect à la main ?"
    a: "Pas si vous utilisez la carte virtuelle, que vous débitez vous-même, ou les paiements automatiques là où Expedia les propose (certains marchés, avec une retenue de 2 %). Sinon, chaque séjour demande une demande de paiement dans Partner Central, ou un outil qui l'envoie pour vous."
  - q: "Hotelier Tools peut-il demander automatiquement les paiements Expedia Collect ?"
    a: "Oui, en bêta. Une tâche programmée demande à Expedia de payer les séjours après le départ. Elle démarre en mode aperçu, ne demande jamais deux fois le même séjour, ne se connecte jamais toute seule et ne débite jamais les cartes virtuelles."
  - q: "Hotelier Tools fait-il partie d'Expedia ou de Little Hotelier ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à Expedia Group, SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel et vos propres identifiants Partner Central."
---

Avec Expedia Collect, le client paie Expedia au moment de réserver, et Expedia vous doit l'argent après le séjour. Vous le récupérez de trois façons : vous débitez la carte virtuelle Expedia à partir de la date d'arrivée, vous envoyez une demande de paiement dans Partner Central (**Payments > Request a payment from Expedia Group**) dans les 365 jours qui suivent le départ, ou Expedia vous paie via les paiements automatiques, là où ils existent. Si vous ne faites rien de tout cela, l'argent n'est jamais encaissé. Hotelier Tools (bêta) affiche l'état de paiement de chaque séjour Expedia et peut envoyer les demandes pour vous, de façon programmée.

Les règles d'Expedia ci-dessous ont été vérifiées dans l'aide Partner Central d'Expedia Group en novembre 2026.

## Comment se faire payer les réservations Expedia Collect ?

Avec **Expedia Collect (EC)**, les voyageurs paient d'avance Expedia ou l'un de ses partenaires B2B, et votre notification de réservation affiche le tarif net : ce qu'Expedia vous verse après sa rémunération ([About Expedia Collect](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-expedia-collect)). Après le séjour, vous l'encaissez de l'une de ces façons :

| Mode de paiement | Ce que vous faites | Quand l'argent arrive | Coût |
|---|---|---|---|
| **Carte virtuelle** | Vous la débitez sur votre terminal de paiement, à partir de la date d'arrivée | Le délai habituel de votre prestataire de paiement | Aucun frais Expedia, seulement ceux de votre prestataire |
| **Demande de paiement** (virement) | Vous la faites dans Partner Central dans les 365 jours suivant le départ | En général 30 jours plus tard, plus 2 à 8 jours bancaires | Gratuit |
| **Paiements automatiques** (certains marchés) | Rien à faire par séjour | Le dernier jour du mois qui suit le départ | Retenue de 2 % |

Deux autres modèles se ressemblent mais fonctionnent autrement. Avec **Hotel Collect**, le client vous paie sur place : il n'y a rien à demander à Expedia. **Expedia Traveler Preference** laisse chaque client choisir l'un ou l'autre au moment de réserver.

Sur certains marchés, Expedia a remplacé EC par **Updated Expedia Collect (EC+)**. Dans son modèle net, la carte virtuelle est chargée du total de la réservation moins la rémunération d'Expedia et les taxes. Dans le modèle brut, elle porte le montant complet, et Expedia vous facture à part ([About virtual cards](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/about-the-expedia-virtual-card)).

## Comment débiter la carte virtuelle Expedia

L'**Expedia Virtual Card (EVC)**, désormais simplement « virtual card » dans Partner Central, est une carte à usage unique qu'Expedia émet pour chaque réservation Expedia Collect, une fois que vous y avez souscrit ([Charge the virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/charge-the-expedia-virtual-card-for-expedia-collect-bookings)).

1. Trouvez les données de la carte : dans la notification de réservation (si vous avez un channel manager), sur la réservation dans Partner Central sous **Payment method**, ou sur la page de recherche **Virtual cards** avec le numéro de réservation et la date d'arrivée ([Find a virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/find-the-expedia-virtual-card-information)).
2. Débitez-la **à partir de la date d'arrivée**, pour le total exact affiché, dans la devise prévue au contrat.
3. Si elle est refusée le matin, réessayez en fin de journée. Selon Expedia, la carte n'est peut-être pas encore active à cause des fuseaux horaires.
4. Débitez les extras et la taxe de séjour sur la carte du client, jamais sur la carte virtuelle.

Attention aux délais. L'article sur le débit indique que la carte reste valable 180 jours après le départ, et celui sur la recherche qu'elle est désactivée six mois après le départ. Vous débitez dans une autre devise ? Utilisez le taux de change du jour, sinon vous risquez un refus ou une rétrofacturation.

## Comment demander un paiement à Expedia Group dans Partner Central

Si vous n'utilisez pas la carte virtuelle, chaque séjour Expedia Collect demande une demande de paiement ([Request payment from Expedia Group](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/request-payment-from-expedia-group)) :

1. Sélectionnez **Payments** dans le menu.
2. Sous **Quick tasks**, sélectionnez **Request a payment from Expedia Group**.
3. Recherchez **By Date Range** (31 jours maximum à la fois) ou **By Reservation ID** (jusqu'à 200 numéros).
4. Cochez les réservations, vérifiez les montants de la réservation et des taxes, puis sélectionnez **Create Invoice**.
5. Conservez le **Transmission Queue ID** affiché sur la confirmation. C'est la référence de cette demande.

Si Partner Central n'a pas les détails d'une réservation, téléversez plutôt un fichier de demande de paiement. Si vos coordonnées bancaires sont incomplètes, une fenêtre sur la page de demande vous le signale : corrigez-les d'abord, sinon le paiement prendra du retard.

## Quand Expedia paie-t-il, et que se passe-t-il si vous oubliez ?

Expedia envoie l'argent selon vos conditions de paiement, en général 30 jours après la demande, et la banque peut ajouter 2 à 8 jours. Une réservation facturée pour une partie seulement de son montant demande une nouvelle demande pour le reste. Pour une non-présentation ou un départ anticipé, contactez plutôt Expedia pour demander un remboursement.

Si personne ne demande le paiement d'un séjour, **Expedia ne le paie pas**. Passé 365 jours après le départ, l'option disparaît de Partner Central. Un été chargé avec dix séjours oubliés, c'est une vraie somme qui reste chez Expedia.

Les paiements automatiques suppriment l'étape séjour par séjour, mais seulement sur certains marchés, et ils prennent 2 % ([About automatic payouts](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-automatic-payouts)). Vérifiez sous **Payments > Payment Settings** si votre établissement y a droit.

## Comment rapprocher les paiements Expedia Collect

Chaque mois, comparez trois listes :

- **Vos départs :** chaque séjour Expedia Collect terminé.
- **Vos demandes :** dans Partner Central, **Payments > See all invoices**, une période, puis la colonne **Status**. Deux ans d'historique sont conservés, avec le montant versé et la date de paiement ([Check the status of an invoice](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/research-an-invoice-status)).
- **Votre banque :** les virements reçus, avec les queue IDs.

Un départ sans demande, c'est de l'argent à réclamer. Une demande sans virement au bout de 40 jours mérite une question à Expedia. Une fois un séjour payé, enregistrez le paiement dans votre logiciel de gestion hôtelière, pour que Little Hotelier n'affiche pas un solde que le client ne doit pas.

## La méthode rapide : demander les paiements Expedia Collect depuis Hotelier Tools (bêta)

Hotelier Tools se connecte à votre compte Partner Central et fait ce tour à votre place. Il lit chaque séjour Expedia, montre où en est son argent et demande à Expedia de payer, à la main ou de façon programmée.

### 1. Connecter Partner Central

Ouvrez **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`). La connexion se fait dans un navigateur sur le serveur : Hotelier Tools saisit l'e-mail et le mot de passe, et vous répondez seulement à ce qu'Expedia demande.

- **I have a login** (j'ai un identifiant) : saisissez l'e-mail et le mot de passe de connexion. Sur un nouvel appareil, Expedia envoie un code par e-mail, que vous tapez dans la case **Code from Expedia**. Les connexions suivantes réutilisent l'appareil enregistré et ne demandent normalement pas de code.
- **I have an invitation link** (j'ai un lien d'invitation) : une option plus propre consiste à créer un utilisateur Partner Central distinct pour Hotelier Tools. Invitez-le depuis votre compte, puis collez tel quel le lien de l'e-mail d'invitation d'Expedia. L'assistant crée le mot de passe (12 à 64 caractères, avec majuscules et minuscules, un chiffre et un symbole) et le profil qu'Expedia exige, qui comprend un téléphone.

Toute étape que l'assistant ne connaît pas, comme la configuration d'un SMS ou une vérification de sécurité, affiche une image de la page : vous cliquez dessus et tapez dans le champ. **Keep me signed in** est toujours coché et la session est stockée chiffrée. La tâche **Keep Expedia signed in** (toutes les 20 minutes) s'en sert pour que la session n'expire pas faute d'activité, et elle ne se connecte jamais toute seule. Si la session expire, une personne se reconnecte.

### 2. Voir l'état de paiement de chaque séjour

La carte **Expedia Collect payments** sur la même page liste chaque séjour Expedia dont le départ tombe dans les dates choisies. Choisissez **Last 30 days**, **This month**, **Last month**, **Last 3 months**, **This year** ou **Last year**, ou toute période jusqu'à 366 jours. Expedia est lu par tranches de 31 jours, comme le fait le formulaire de Partner Central.

Chaque séjour reçoit un état, avec une pastille qui filtre la liste :

| État | Ce que cela veut dire |
|---|---|
| **To request** | Client parti, rien payé, jamais demandé : vous pouvez le demander maintenant |
| **Not yet** | Client pas encore parti, ou rien à demander |
| **Requested** | Demandé depuis Hotelier Tools ; Expedia l'a accepté et a donné un queue ID |
| **Refused by Expedia** | Expedia a répondu par une erreur ; une personne peut redemander |
| **Check in Partner Central** | Pas de réponse lisible : regardez dans Partner Central avant de redemander |
| **Reconciled by Expedia** | Demandé d'ici ; d'après les relevés d'Expedia, le montant est accepté et le paiement en attente |
| **Paid by Expedia** | Demandé d'ici ; les relevés d'Expedia donnent la date et le montant payé |
| **Paid** / **Invoiced** | Les données d'Expedia indiquent qu'un montant a été payé, ou le séjour est facturé |
| **Not in Expedia's list** | Demandé à la main dans Partner Central, ou payé par paiements automatiques |
| **Virtual card** | Débitez la carte : il n'y a rien à demander |
| **Hotel Collect** | Le client vous paie directement |

Cochez les séjours, ou utilisez la case pour tout sélectionner, et appuyez sur **Request payment for N stays**. Après votre confirmation, Hotelier Tools envoie une seule demande pour tous, la même demande **Create Invoice** que Partner Central. Chaque séjour est d'abord réservé, il n'est donc jamais envoyé deux fois. **Details** affiche ce qu'Expedia dit d'un séjour et l'historique de la demande.

::screenshot{src="/images/blog/demo/en/expedia-collect-payments-card.webp" alt="Page Expedia Partner Central dans Hotelier Tools : la carte Expedia Collect payments avec un lien Payments history et la mention Connect Expedia above to see them, la carte Request Expedia Collect payments automatically marquée Not configured yet avec les boutons Every day at 09:30, Choose et Run now, et une liste How it works" caption="Expedia n'est pas connecté dans la démo, la carte des paiements est donc vide. Une fois connecté, elle liste chaque séjour et son état ; la carte du dessous programme les demandes." path="/credentials/expedia-extranet"}
::

### 3. Le laisser tourner de façon programmée

Sur **Automatic Expedia payment requests** (`/credentials/expedia-extranet/automatic-requests`), appuyez sur **Every day at 09:30** (la programmation conseillée) ou sur **Choose** pour choisir votre heure. Cela crée la tâche **Request Expedia Collect payments**. Elle démarre en **Preview** (aperçu) : chaque exécution note dans son journal les séjours qu'elle demanderait, sans rien envoyer. Quand la liste vous paraît juste, passez **What a run does** sur **Request: ask Expedia to pay**.

| Réglage | Par défaut | Ce qu'il fait |
|---|---|---|
| **Days after check-out** | 1 | Demande une fois le départ vieux de ce nombre de jours |
| **Look back (days)** | 30 | Jusqu'où chercher les départs dans le passé |
| **Most per stay** | Sans limite | Un séjour qui demande davantage est laissé à une personne |
| **Most stays per run** | 20 | Les autres attendent l'exécution suivante |

Ce qu'elle ne fait jamais : se connecter à Partner Central, demander deux fois un séjour, demander un séjour payé par carte virtuelle ou dont le client n'est pas encore parti, ou redemander un séjour qu'Expedia a refusé ou auquel il n'a pas répondu. Ceux-là sont laissés à une personne, et le journal d'exécution les cite.

Vous utilisez déjà les contrôles **When they leave** (au départ) ? Leur contrôle **Expedia Collect payment** signale un montant pas encore demandé. Avec le correctif **Request the payment from Expedia (asks Expedia for money)** activé, il envoie la demande au départ du client. Les deux peuvent être actifs : un séjour n'est réservé qu'une fois.

::screenshot{src="/images/blog/demo/en/expedia-collect-checkout-check.webp" alt="Page des contrôles When they leave : les contrôles Address and origin validation et Automatic check-out, puis le contrôle Expedia Collect payment, désactivé, avec ce qu'il peut faire (signaler un montant pas encore demandé et, avec son correctif actif, demander une fois par séjour à Expedia) et ce qu'il ne fait pas (redemander un séjour refusé, débiter les cartes virtuelles)" caption="Au moment du départ, une demande peut être envoyée à Expedia pour chaque séjour, une seule fois par séjour." path="/automated-checks/moment/at_checkout"}
::

### 4. Suivre l'historique

**Expedia payments** (`/automated-checks/expedia-payments`) est le registre de toutes les demandes faites depuis Hotelier Tools : par une personne, la tâche programmée, le contrôle au départ, un assistant ou l'API. Filtrez par statut, par **Who asked** (qui a demandé) et par dates de départ, et ouvrez une ligne pour voir chaque réservation de séjour et chaque réponse d'Expedia. **Ask again** relance les séjours refusés par Expedia. Pour un séjour sans réponse, vous cochez d'abord **I checked Partner Central and these stays are not there**, car demander deux fois pourrait vouloir dire être payé deux fois.

Sur une réservation Expedia (`EXP-` suivi du code de confirmation), la section **Payments** de la réservation comporte un panneau **Expedia payment** avec **Check with Expedia**, et un lien qui ouvre la carte des paiements avec ce séjour coché.

Vous pouvez aussi interroger l'assistant IA du tableau de bord, ou Claude et ChatGPT via le [serveur MCP](/blog/what-is-mcp-server-hotels). « Quels paiements Expedia ont été refusés ce mois-ci ? » appelle `list_expedia_payment_requests`. « Redemande à Expedia pour EXP-2570237397 » appelle `request_expedia_payments`, un outil qui exige votre accord : dans le chat du tableau de bord, il affiche une carte, et rien n'est envoyé tant que vous ne confirmez pas. Les mêmes lectures et demandes existent dans l'API REST.

### Les limites, en toute honnêteté

- **Bêta, et tout récent.** Les demandes de paiement sont arrivées en novembre 2026.
- **Le paiement n'est suivi que pour les demandes faites ici.** Depuis la version 1.71 (novembre 2026), Hotelier Tools lit la page **Statements and invoices** de Partner Central (les 12 derniers mois) et affiche une demande comme **Reconciled by Expedia** (acceptée, paiement en attente) ou **Paid by Expedia** (avec la date et le montant), y compris dans le panneau Expedia de la réservation. Une demande pas encore listée sur cette page reste **Requested**.
- **Il ne débite jamais les cartes virtuelles.** Ces séjours apparaissent comme **Virtual card** : débitez-les sur votre terminal.
- **Il utilise votre propre session Partner Central.** Les conditions partenaires d'Expedia restreignent l'accès automatisé à Partner Central. Hotelier Tools se connecte avec votre utilisateur, jamais de lui-même, et rien n'est partagé entre établissements.
- **Expedia n'est pas connecté dans la démo** : elle montre les cartes mais aucun séjour Expedia.

::demo-cta{path="/credentials/expedia-extranet"}
::

Tous les contrôles sont décrits sur la [page Contrôles automatiques](/tools/bot/automated-checks). Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à Expedia Group, SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel et vos propres identifiants Expedia Partner Central.
::

À lire aussi : [les messages clients Expedia](/blog/expedia-guest-messages), [les réservations OTA absentes de Little Hotelier](/blog/ota-bookings-missing-little-hotelier), [carte invalide ou non-présentation sur Booking.com](/blog/booking-com-invalid-card-no-show).

## Résumé

- Expedia Collect veut dire qu'Expedia garde l'argent du client jusqu'à ce que vous le réclamiez.
- Carte virtuelle : débitez-la à partir de la date d'arrivée, pour le montant exact, avant sa désactivation six mois après le départ.
- Demande de paiement : **Payments > Request a payment from Expedia Group**, dans les 365 jours suivant le départ ; payée en général 30 jours plus tard.
- Rapprochez chaque mois : les départs, **See all invoices** et votre banque.
- Hotelier Tools (bêta) affiche l'état de chaque séjour et peut demander les paiements de façon programmée, en démarrant en aperçu et sans jamais demander deux fois.
