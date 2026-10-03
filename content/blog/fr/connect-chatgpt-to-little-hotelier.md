---
title: "Connecter ChatGPT à Little Hotelier (avec 18 prompts pour petits hôtels)"
seoTitle: "Connecter ChatGPT à Little Hotelier + 18 prompts hôtel"
description: "Connectez ChatGPT à Little Hotelier avec le mode développeur et une app MCP, vérifiez votre forfait et copiez 18 prompts : arrivées, paiements, tarifs."
date: 2026-10-03
category: ai
tags: [chatgpt, mcp, ai, prompts, little hotelier]
keywords: [connecter chatgpt à little hotelier, chatgpt hôtellerie, connecteur mcp chatgpt, prompts chatgpt pour hôtels, chatgpt gestion hôtelière, mode développeur chatgpt mcp]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-oauth-consent.webp
coverAlt: "Page Authorize MCP access de Hotelier Tools qu'un assistant IA ouvre au moment de la connexion, avec un avis de jeton valable 30 jours et les boutons Deny et Allow access"
faq:
  - q: "Quels forfaits ChatGPT peuvent se connecter à Little Hotelier ?"
    a: "En octobre 2026, le centre d'aide d'OpenAI indique que la prise en charge complète de MCP, écriture comprise, est réservée à Business, Enterprise et Edu sur le web, tandis que Pro peut connecter des apps MCP avec des autorisations de lecture et de récupération en mode développeur. La documentation développeur d'OpenAI cite aussi Plus. Free et Go ne sont pas mentionnés. Vérifiez ce qu'affiche votre propre compte."
  - q: "Puis-je utiliser une clé API au lieu de me connecter ?"
    a: "Non. OpenAI précise que ChatGPT ne peut pas présenter de clés API personnalisées à un serveur MCP : choisissez donc OAuth. Vous vous connectez à Hotelier Tools dans une fenêtre du navigateur et vous appuyez sur Allow access."
  - q: "ChatGPT peut-il modifier mes réservations ou mes prix ?"
    a: "Seulement si votre forfait autorise les actions d'écriture et que vous les confirmez. OpenAI demande une confirmation avant les actions d'écriture par défaut. Hotelier Tools n'ajoute aucune seconde approbation hors de son tableau de bord, et il bloque totalement pour ChatGPT les remboursements, l'envoi de factures par e-mail, le dépôt de la déclaration INE et les autres actions irréversibles."
  - q: "Cela fonctionne-t-il dans l'application mobile ChatGPT ?"
    a: "Pas pour les apps MCP personnalisées. Le centre d'aide d'OpenAI indique que les apps MCP en mode développeur sont réservées au web. Utilisez chatgpt.com dans un navigateur."
  - q: "Les données de mes clients servent-elles à entraîner les modèles d'OpenAI ?"
    a: "Sur Business, Enterprise et Edu, OpenAI indique ne pas entraîner ses modèles sur les informations des apps connectées par défaut. Sur Free, Plus, Go et Pro, cela peut arriver si Improve the model for everyone est activé dans Data controls. Désactivez-le avant de connecter les données de votre hôtel."
  - q: "Claude ou ChatGPT : lequel est le meilleur pour les tâches hôtelières ?"
    a: "Les deux fonctionnent avec le même serveur Hotelier Tools. En octobre 2026, Claude autorise les connecteurs personnalisés avec des outils d'écriture sur tous les forfaits, y compris Free (un connecteur), alors que ChatGPT réserve MCP en lecture et écriture complètes à Business, Enterprise et Edu. Choisissez l'assistant que votre équipe utilise déjà."
---

Oui, vous pouvez connecter ChatGPT à Little Hotelier. Activez le **mode développeur** (developer mode) dans ChatGPT, créez une app qui pointe vers le serveur MCP de Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`) avec **OAuth**, puis connectez-vous à Hotelier Tools. Ce que ChatGPT pourra ensuite faire dépend de votre forfait : en octobre 2026, OpenAI réserve l'accès complet en lecture et écriture à Business, Enterprise et Edu, tandis que Pro (et, selon la documentation développeur d'OpenAI, Plus) se connecte avec des autorisations en lecture seule.

Voici les étapes telles qu'OpenAI les documente aujourd'hui, ce qu'il faut vérifier dans votre propre compte, et 18 prompts utiles pour un petit hôtel.

## Ce qu'il vous faut avant de commencer

- **Un forfait ChatGPT avec mode développeur.** Le [guide du mode développeur](https://developers.openai.com/api/docs/guides/developer-mode) d'OpenAI cite les comptes Pro, Plus, Business, Enterprise et Education, sur le web. Son [centre d'aide](https://help.openai.com/en/articles/12584461) ajoute que **MCP complet, actions d'écriture comprises, est réservé à Business et Enterprise/Edu**, et que Pro peut se connecter avec des autorisations de lecture et de récupération seulement.
- **Un navigateur sur ordinateur.** OpenAI indique que les apps MCP personnalisées ne fonctionnent que sur le web, pas dans les applications mobiles.
- **Un compte Hotelier Tools** avec Little Hotelier connecté sur **Credentials** (`/credentials`). L'identifiant du propriétaire donne l'accès API nécessaire. Hotelier Tools est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

::callout{type="info" title="Ce que nous avons vérifié, et ce que vous devez vérifier"}
Le serveur Hotelier Tools prend en charge la connexion qu'utilise ChatGPT : OAuth avec PKCE et enregistrement automatique du client. Les menus et les règles de forfait de ChatGPT changent souvent, et nous n'avons pas testé chaque forfait de bout en bout. Dans votre compte, confirmez trois choses : que **Developer mode** apparaît, que les outils Hotelier Tools s'affichent après la connexion, et si votre forfait permet à ChatGPT d'exécuter des actions d'écriture.
::

Hotelier Tools est indépendant. Il n'est ni affilié à OpenAI, SiteMinder ou Little Hotelier, ni approuvé par eux, et il se connecte avec l'identifiant Little Hotelier de votre établissement.

## Comment connecter ChatGPT à Little Hotelier, pas à pas

Ces étapes suivent le [guide de connexion](https://developers.openai.com/plugins/deploy/connect-chatgpt) d'OpenAI en octobre 2026. Si vos écrans sont différents, l'ancien chemin du centre d'aide est indiqué à chaque étape.

1. Allez sur [chatgpt.com](https://chatgpt.com) dans un navigateur et ouvrez **Settings → Security and login**. Activez **Developer mode**. (Certains comptes l'affichent sous **Settings → Apps → Advanced settings**.)
2. Ouvrez **Plugins** ([chatgpt.com/plugins](https://chatgpt.com/plugins)) et appuyez sur le bouton **+** pour créer une app en mode développeur. (Anciens écrans : **Settings → Apps → Create**.)
3. Remplissez le formulaire :
   - **Name :** `Hotelier Tools`
   - **Description :** `Reservations, guests, invoices and prices from my Little Hotelier property`
   - **MCP server URL :** `https://dashboard.hotelier.tools/api/mcp`
   - **Authentication :** **OAuth**
4. Créez l'app. ChatGPT peut d'abord afficher **Scan Tools**. Une fenêtre Hotelier Tools s'ouvre.
5. Connectez-vous à Hotelier Tools. Sur **Authorize MCP access**, choisissez l'établissement si vous en avez plusieurs et appuyez sur **Allow access**.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="Carte Authorize MCP access : AI assistant (MCP client) wants to access your Hotelier Tools account through the MCP API, l'e-mail connecté, un jeton qui expire dans 30 jours, et les boutons Deny et Allow access" caption="Appuyez sur Allow access. ChatGPT ne voit jamais votre mot de passe Hotelier Tools ni Little Hotelier." path="/oauth/authorize" width="472" height="327"}
::

6. Examinez la liste des outils que ChatGPT a trouvés. L'app apparaît avec une étiquette **Dev**.
7. Ouvrez une nouvelle conversation. Ouvrez le menu **+**, choisissez **Developer mode** et sélectionnez **Hotelier Tools** (les comptes plus récents permettent aussi de taper `@` et de la choisir).

La connexion dure **30 jours**. Ensuite, ChatGPT vous demande de vous reconnecter. Vous pouvez voir et révoquer la connexion dans Hotelier Tools sous **Developer → API Keys** (`/developer/api-keys`), où elle porte un badge **MCP client**.

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="Page API keys de Hotelier Tools avec le formulaire Generate a new key, une liste Active keys contenant une clé masquée avec un bouton Revoke, et les conseils Good security practice" caption="Les clés et les connexions sont listées sous Active keys. Révoquez-en une pour couper son accès immédiatement." path="/developer/api-keys"}
::

### Sur un espace de travail Business, Enterprise ou Edu

Sur **Business**, OpenAI indique que seuls les administrateurs et les propriétaires peuvent utiliser le mode développeur et publier des apps. Pour partager l'app avec des collègues, un administrateur la publie depuis **Workspace settings → Apps → Drafts → Publish**. Sur **Enterprise et Edu**, les administrateurs peuvent accorder le mode développeur à des membres choisis grâce à un accès par rôles. Chaque personne se connecte quand même à Hotelier Tools avec un identifiant disposant de l'accès API.

### Pourquoi pas une clé API ?

La [documentation d'authentification](https://developers.openai.com/plugins/build/auth) d'OpenAI indique que ChatGPT « cannot present custom API keys » (ne peut pas présenter de clés API personnalisées). Les clés API `htk_` qui fonctionnent dans [Claude Code, Cursor et VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) ne sont donc pas utilisées ici. La connexion par le navigateur est la porte d'entrée.

## 18 prompts qui fonctionnent pour les petits hôtels

Commencez chaque conversation avec Hotelier Tools sélectionné. Le nommer dans le prompt aide ChatGPT à utiliser vos données plutôt que le web. La référence de réservation ci-dessous est inventée.

### Arrivées et chambres

::prompt{label="ChatGPT"}
Avec Hotelier Tools, qui arrive aujourd'hui ? Liste le client, le nombre de nuits, le type de chambre et si une chambre est attribuée.
::

::prompt{label="ChatGPT"}
Quelles réservations arrivant dans les 7 prochains jours n'ont toujours pas de chambre attribuée ?
::

::prompt{label="ChatGPT"}
Qui part aujourd'hui, et est-ce que quelqu'un a encore un solde ouvert ?
::

::prompt{label="ChatGPT"}
Combien de chambres de chaque type sont encore disponibles ce soir et demain soir ?
::

### Paiements et factures

::prompt{label="ChatGPT"}
Liste les réservations arrivant dans les 14 prochains jours avec un solde impayé, triées par montant, du plus élevé au plus bas.
::

::prompt{label="ChatGPT"}
Quels séjours sont partis la semaine dernière et n'ont toujours pas de facture ? Pour chacun, dis-moi pourquoi il ne peut pas encore être facturé.
::

::prompt{label="ChatGPT"}
La réservation BDC-1234567890 est-elle prête à être facturée ? Sinon, que manque-t-il exactement ?
::

::prompt{label="ChatGPT"}
Rédige un court rappel de paiement aimable pour chaque client qui arrive cette semaine avec un solde impayé. N'envoie rien, donne-moi seulement les textes.
::

### Tarifs et disponibilités

::prompt{label="ChatGPT"}
Montre-moi mes tarifs et mes disponibilités pour vendredi et samedi prochains, par type de chambre.
::

::prompt{label="ChatGPT"}
Compare mes prix des 14 prochaines nuits avec les prix des concurrents dont tu disposes. Quelles nuits suis-je le moins cher, et lesquelles le plus cher ?
::

::prompt{label="ChatGPT"}
Explique, étape par étape, pourquoi le prix recommandé pour une chambre double le samedi 14 novembre est celui-là.
::

::prompt{label="ChatGPT"}
Quelles nuits des 30 prochains jours ont le taux d'occupation le plus bas ? Suggère lesquelles je devrais regarder en premier.
::

### Clients

::prompt{label="ChatGPT"}
Trouve le client dont le numéro de téléphone se termine par 4521 et montre-moi ses séjours passés et à venir.
::

::prompt{label="ChatGPT"}
Y a-t-il des arrivées dans les 7 prochains jours qui correspondent à ma liste « do-not-rebook » ?
::

::prompt{label="ChatGPT"}
Quels clients qui arrivent cette semaine n'ont toujours pas fourni de pièce d'identité ou d'adresse ?
::

### Rapports

::prompt{label="ChatGPT"}
Résume le mois dernier : arrivées, nuits vendues par type de chambre, annulations et no-shows. Présente-le sous forme de tableau.
::

::prompt{label="ChatGPT"}
Qu'ont fait les tâches programmées cette semaine, et y en a-t-il eu qui ont échoué ? Explique chaque échec en termes simples.
::

::prompt{label="ChatGPT"}
Qui est sur la liste d'attente, pour quelles dates, et est-ce qu'une disponibilité est apparue pour eux ?
::

Les réponses ne valent que ce que valent les données de Little Hotelier. Si un chiffre vous paraît faux, demandez à ChatGPT de montrer les réservations qu'il a utilisées.

## ChatGPT connecté ou copier-coller : quelle différence ?

Sans connexion, vous exportez un rapport depuis Little Hotelier, vous le collez dans ChatGPT et vous posez votre question. Cela convient pour une analyse ponctuelle, mais les données sont un instantané, votre export peut omettre des champs, et la liste de clients que vous avez collée reste dans la conversation.

Avec l'app MCP, ChatGPT demande à Hotelier Tools exactement ce dont il a besoin, quand il en a besoin : les arrivées du jour, le solde d'un client, les tarifs de la semaine prochaine. Vous n'exportez rien, et la réponse reflète Little Hotelier à cet instant.

Si vous préférez les tableurs, voyez [exporter les réservations vers Excel](/blog/export-little-hotelier-reservations-excel).

## ChatGPT peut-il faire des modifications, et comment sont-elles approuvées ?

Sur les forfaits avec MCP complet, oui. Hotelier Tools propose des outils d'écriture comme la mise à jour d'une réservation (d'abord une proposition avant/après, puis une étape d'application), l'enregistrement d'un paiement, l'inscription d'un séjour à la [facture au départ](/blog/send-invoice-to-guest-at-checkout) et l'application de prix.

::callout{type="warning" title="La confirmation de ChatGPT est la seule approbation"}
Dans le tableau de bord Hotelier Tools, chaque modification attend une carte d'approbation. En dehors, il n'y en a pas : **un outil d'écriture s'exécute dès que ChatGPT l'appelle.** OpenAI indique que « write actions by default require confirmation » (les actions d'écriture exigent une confirmation par défaut) et prévient que de mauvaises actions d'écriture « could destroy data » (pourraient détruire des données). Lisez chaque confirmation avant de l'accepter.
::

Règles pratiques :

- **Gardez les autorisations de l'app sur Always ask.** Les [autorisations des apps](https://help.openai.com/en/articles/20001495) d'OpenAI vont de **Always ask** à **Allow all actions** ; ce dernier saute les confirmations et comporte un « elevated risk » (risque accru). ChatGPT traite tout outil non étiqueté en lecture seule comme une action d'écriture : attendez-vous donc à une demande de confirmation même pour certaines consultations.
- **Ne le laissez pas mémoriser les approbations d'écriture** dans les longues conversations. Un choix mémorisé ne dure que pour cette conversation, mais une conversation peut faire beaucoup.
- **Méfiez-vous des instructions cachées dans les messages des clients.** OpenAI met en garde contre l'injection de prompt. Si ChatGPT propose quelque chose que vous n'avez pas demandé, refusez.

Certaines actions ne sont jamais disponibles pour ChatGPT, quoi que vous approuviez. Les outils irréversibles sont bloqués pour tout client externe : envoyer une facture par e-mail à un client, rembourser, déposer l'enquête INE, envoyer des invitations d'équipe, envoyer par e-mail un lien de facture à un client, répondre à une question Booking.com et lancer le contrôle de liste d'attente qui écrit aux clients. Ils restent dans l'[assistant du tableau de bord](/blog/ai-assistant-hotel-front-desk), derrière une carte.

## Confidentialité : où vont les données ?

Quand ChatGPT appelle un outil Hotelier Tools, le résultat, par exemple des noms de clients, des dates et des montants, entre dans la conversation et est traité par OpenAI.

Selon l'[article d'OpenAI sur les apps connectées](https://help.openai.com/en/articles/11487775), en octobre 2026 :

- Sur **Business, Enterprise et Edu**, OpenAI « does not use information accessed from connectors to train models by default » (n'utilise pas par défaut les informations obtenues via les connecteurs pour entraîner ses modèles).
- Sur **Free, Plus, Go et Pro**, OpenAI « may use information accessed from apps to train our models » (peut utiliser les informations obtenues via les apps pour entraîner ses modèles) si **Improve the model for everyone** est activé. Désactivez-le dans [Data controls](https://help.openai.com/en/articles/7730893) avant de connecter les données de votre hôtel.
- La mémoire de ChatGPT peut conserver des détails lus via une app. Examinez **Memory** dans les paramètres si cela vous importe.

Les données des clients sont des données personnelles, et votre hôtel en reste responsable. Ne demandez que ce dont vous avez besoin.

::demo-cta{path="/developer/mcp-setup"}
::

## Dépannage

- **Le mode développeur est absent.** Votre forfait ne l'inclut peut-être pas, ou, sur Business, seuls les administrateurs peuvent l'utiliser. Sur Enterprise et Edu, demandez à un administrateur de vous l'accorder.
- **Aucun outil Hotelier Tools n'apparaît, ou seulement certains.** Votre forfait n'autorise peut-être que les autorisations de lecture et de récupération. Renseignez-vous auprès du centre d'aide d'OpenAI pour votre forfait, ou utilisez [Claude](/blog/connect-claude-to-little-hotelier), qui autorise les connecteurs personnalisés avec des outils d'écriture sur tous les forfaits.
- **ChatGPT cesse de fonctionner avec l'app au bout d'un mois.** La connexion a duré 30 jours. Reconnectez-vous depuis **Settings → Plugins** (ou **Apps**).
- **Erreur « No Little Hotelier credentials configured ».** Connectez d'abord Little Hotelier sur **Credentials** dans Hotelier Tools.
- **« lh_frozen » ou similaire.** La connexion à Little Hotelier est suspendue après un échec d'identification, souvent un mot de passe expiré. Enregistrez le nouveau mot de passe sur **Credentials** ou appuyez sur **Check now & resume**.

## Résumé

- Activez le mode développeur, créez une app avec l'URL `https://dashboard.hotelier.tools/api/mcp` et **OAuth**, puis appuyez sur **Allow access**.
- Vérifiez votre forfait : le MCP complet en lecture et écriture est réservé à Business, Enterprise et Edu ; Pro, et peut-être Plus, obtiennent des autorisations en lecture seule, selon OpenAI.
- Gardez les autorisations de l'app sur **Always ask** ; les remboursements et les autres actions irréversibles sont de toute façon bloqués.
- Nouveau avec MCP ? Commencez par [ce qu'est un serveur MCP](/blog/what-is-mcp-server-hotels). Tous les outils sont sur la [page API & MCP](/tools/bot/api-mcp).
