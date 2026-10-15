---
title: "Serveur MCP : c'est quoi ? Guide pour hôteliers (et quels PMS en ont un)"
seoTitle: "Serveur MCP : c'est quoi ? Guide pour hôteliers (2026)"
description: "Serveur MCP : il permet à Claude ou ChatGPT de lire et d'agir dans votre logiciel hôtelier. Guide simple, sécurité et PMS équipés en octobre 2026."
date: 2026-10-03
category: ai
tags: [mcp, ai, claude, chatgpt, pms]
keywords: [serveur mcp c'est quoi, mcp c'est quoi ia, serveur mcp hôtel, serveur mcp claude, mcp claude c'est quoi, little hotelier mcp, apaleo mcp server, mews mcp server, cloudbeds mcp server]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "Guide MCP setup dans Hotelier Tools avec une explication What is MCP? et des onglets Client configuration pour Claude Desktop, VS Code, Cursor et Custom / SDK, montrant la configuration de Claude Desktop avec l'adresse du serveur"
featured: true
faq:
  - q: "Que signifie MCP ?"
    a: "Model Context Protocol. C'est un standard ouvert qu'Anthropic a publié en novembre 2024 pour que les assistants IA se connectent à d'autres logiciels d'une manière commune. En décembre 2025, il a été confié à l'Agentic AI Foundation, sous la Linux Foundation."
  - q: "Un serveur MCP est-il la même chose qu'une API ?"
    a: "Non. Une API est un ensemble de requêtes fixes pour lesquelles des programmeurs écrivent du code. Un serveur MCP décrit ses outils à un assistant IA, qui peut ainsi les choisir et les appeler à partir d'une demande en langage courant. La plupart des serveurs MCP sont construits au-dessus d'une API."
  - q: "Faut-il être développeur pour utiliser un serveur MCP ?"
    a: "Non. Dans Claude, vous collez l'adresse du serveur dans un connecteur personnalisé et vous vous connectez. Dans ChatGPT, vous activez le mode développeur et créez une application avec l'adresse. Les développeurs peuvent aussi l'utiliser depuis Claude Code, Cursor ou VS Code."
  - q: "SiteMinder a-t-il un serveur MCP ?"
    a: "Oui, mais pour la distribution. Les MCP Channels Plus et Direct Booking de SiteMinder permettent aux plateformes de voyage IA d'afficher et de vendre des chambres d'hôtel. Ce n'est pas un moyen pour un propriétaire d'interroger une IA sur ses propres réservations dans Little Hotelier."
  - q: "Un serveur MCP peut-il modifier mes réservations ?"
    a: "Oui, s'il propose des outils d'écriture et que vous les autorisez. Les bons serveurs séparent la lecture de la modification, bloquent les actions irréversibles comme les remboursements, et comptent sur votre application d'IA pour demander une confirmation avant chaque changement. Vérifiez ce qu'un serveur peut faire avant de le connecter."
  - q: "Est-il sûr de connecter une IA aux données des clients ?"
    a: "Cela peut l'être, avec précaution. Les données clients sur lesquelles vous posez des questions sont envoyées au fournisseur d'IA : vérifiez donc ses réglages d'entraînement, ne connectez que des serveurs de confiance, gardez les validations activées pour les modifications et révoquez les accès inutilisés. Votre hôtel reste responsable des données de ses clients."
---

Un serveur MCP est un connecteur qui permet à un assistant IA comme Claude ou ChatGPT de consulter des informations et d'exécuter des tâches dans un autre logiciel, grâce à un standard ouvert appelé **Model Context Protocol**. Pour un hôtel, cela signifie que vous pouvez demander « qui arrive demain avec un solde impayé ? » et que l'assistant obtient la réponse dans votre système de gestion hôtelière (PMS) au lieu de vous obliger à la recopier. En octobre 2026, seule une poignée de PMS en proposent un officiellement ; Little Hotelier n'en a pas, mais vous pouvez le connecter via Hotelier Tools.

C'est le guide de référence de nos articles sur l'IA. Chaque section renvoie à un guide pas à pas quand vous serez prêt.

## MCP, ça veut dire quoi, et qui l'a créé ?

MCP signifie **Model Context Protocol**. Anthropic, l'entreprise qui développe Claude, l'a [publié comme standard ouvert](https://www.anthropic.com/news/model-context-protocol) le 25 novembre 2024. En décembre 2025, Anthropic l'a [confié à l'Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), un fonds placé sous la Linux Foundation, cofondé par Anthropic, Block et OpenAI. À ce moment-là, il avait déjà été adopté par ChatGPT, Cursor, Gemini, Microsoft Copilot et Visual Studio Code, entre autres.

Il y a deux côtés :

- **Le client MCP** se trouve dans votre application d'IA : Claude, ChatGPT, Copilot.
- **Le serveur MCP** se trouve du côté du logiciel. Il propose une liste d'**outils**, chacun avec un nom et une description, comme « obtenir les réservations par période » ou « enregistrer un paiement ».

Quand vous posez une question, l'IA lit la liste d'outils, choisit le bon, l'appelle et répond avec le résultat. Vous n'écrivez jamais de code.

## MCP, API et chatbot : une analogie hôtelière

Imaginez votre PMS comme le back-office où se trouve le cahier des réservations.

- **Une API** est le guichet du back-office avec un bon de commande strict. Un logiciel peut l'utiliser, mais un programmeur doit écrire du code pour chaque formulaire qu'il remplit.
- **Un serveur MCP** est un concierge posté à ce guichet. Il remet à n'importe quel assistant IA un menu imprimé de ce qu'il peut faire (« lister les arrivées », « vérifier un solde », « proposer une modification »), remplit les formulaires à sa place et refuse ce qui n'est pas autorisé. La plupart des serveurs MCP sont construits au-dessus d'une API.
- **Un chatbot** est un réceptionniste qui n'a lu que la brochure. Il peut bavarder poliment, mais il ne peut pas ouvrir le cahier des réservations. Donnez-lui une connexion MCP et il peut consulter les vraies réservations.

| | Ce que c'est | Qui l'utilise | Exemple hôtelier |
|---|---|---|---|
| API | Requêtes fixes pour des logiciels | Développeurs | « Réservations avec arrivée du 1er au 30 avril » |
| Serveur MCP | Un menu d'outils qu'une IA peut découvrir et appeler | Assistants IA | « Qui arrive demain avec un solde impayé ? » |
| Chatbot | Une IA qui converse | Clients ou personnel | « À quelle heure est le petit-déjeuner ? » |

Si vous voulez le côté API, lisez [Little Hotelier a-t-il une API ?](/blog/little-hotelier-api)

## Que peut-on demander à une IA connectée à son PMS ?

Une fois connecté, vous posez vos questions en langage courant. Avec Little Hotelier connecté via Hotelier Tools, voici ce qui fonctionne :

::prompt{label="Claude"}
Qui arrive demain, et est-ce que l'un d'eux a encore un solde à payer ?
::

::prompt{label="ChatGPT"}
Quels clients sont partis la semaine dernière sans avoir encore de facture ? Pourquoi chaque séjour ne peut-il pas encore être facturé ?
::

::prompt{label="Claude"}
Compare mes prix des 14 prochaines nuits avec les prix des concurrents dont tu disposes, et dis-moi où je suis le moins cher.
::

::prompt{label="Claude"}
Parmi les arrivées des 7 prochains jours, lesquelles n'ont pas de chambre attribuée ou ont une pièce d'identité manquante ?
::

::screenshot{src="/images/blog/demo/en/ai-chat-arrivals-this-week.webp" alt="Assistant IA de Hotelier Tools à qui l'on demande Which bookings arrive this week, avec un appel d'outil réussi et une liste Reservations (14) de cartes montrant le nom du client, les dates d'arrivée et de départ, Paid ou Pending, et des badges de statut comme checked-out, checked-in et confirmed" caption="Interrogé sur les réservations qui arrivent cette semaine, l'assistant appelle un outil de réservations et affiche le résultat en temps réel. Les mêmes outils répondent dans Claude ou ChatGPT." path="/chat/3a751210-d8ab-4cb7-8add-6ee5244c93af"}
::

La différence avec le fait de coller un export dans un chatbot : les données sont en temps réel, vous n'exportez rien, et l'assistant peut aussi agir (avec votre accord) au lieu de seulement parler.

Ce que MCP ne change pas : l'IA peut toujours mal interpréter une demande, et la réponse ne vaut que ce que valent les données de votre PMS. Demandez-lui d'afficher les réservations qu'elle a utilisées quand un chiffre compte.

## Quels PMS hôteliers ont un serveur MCP ? (octobre 2026)

Nous avons vérifié le site et la documentation de chaque éditeur le 3 octobre 2026. « Non trouvé » signifie que nous n'avons trouvé aucun serveur ni annonce officiels, pas la preuve qu'aucun n'est en préparation.

| PMS | MCP officiel pour vos propres données ? | Peut-il modifier des données ? | Remarques |
|---|---|---|---|
| Apaleo | Oui, bêta ouverte | Lecture et écriture | Environ 230 outils ; [documentation développeur Apaleo](https://apaleo.dev/guides/ai/overview.html). Annoncé en [septembre 2025](https://apaleo.com/blog/apaleo-news/apaleo-launches-mcp-server). |
| Hospitable (locations de vacances) | Oui, depuis avril 2026 | Lecture et écriture | Les messages envoyés par ce biais « sont remis aux clients immédiatement » ; pas dans la formule Essentials ([aide](https://help.hospitable.com/en/articles/14424057-connect-an-ai-agent-to-hospitable-using-mcp)) |
| Guesty (locations de vacances) | Oui, bêta précoce | Lecture seule | Qualifié d'« expérimental » ([documentation](https://open-api-docs.guesty.com/docs/guesty-mcp-server-beta)) |
| Lodgify (locations de vacances) | Annoncé | Lecture et écriture, selon Lodgify | Sa [page IA](https://www.lodgify.com/ai/) présente « Lodgify MCP » ; nous n'avons pas pu confirmer sa disponibilité générale |
| Cloudbeds | Documentation uniquement | Non | Son MCP sert la [documentation développeur](https://developers.cloudbeds.com/docs/build-with-llms), pas les données de l'hôtel |
| Mews | Non trouvé | — | Seulement des projets communautaires non officiels, comme [celui-ci sur GitHub](https://github.com/tjg37/mews-mcp-server) |
| Oracle OPERA Cloud | Non trouvé | — | Des projets communautaires non officiels existent ([exemple](https://github.com/lesleslie/opera-cloud-mcp)) |
| Hostaway, Smoobu, Beds24 | Non trouvé | — | Hostaway et Beds24 ont des projets communautaires non officiels |
| SiteMinder | Pour la distribution seulement | — | Voir ci-dessous |
| Little Hotelier | Non trouvé | — | Connexion via [Hotelier Tools](/tools/bot/api-mcp), un serveur MCP indépendant |

Deux tendances ressortent. La plupart des serveurs officiels viennent jusqu'ici de plateformes de locations de vacances et d'Apaleo, un PMS hôtelier orienté API. Et plusieurs éditeurs emploient « MCP » pour autre chose : de la documentation pour développeurs, ou la vente de chambres via des applications d'IA.

## Little Hotelier a-t-il un serveur MCP ?

Pas de serveur officiel. En octobre 2026, nous n'avons trouvé aucun serveur MCP ni annonce de Little Hotelier sur littlehotelier.com ni dans la salle de presse et le site développeur de SiteMinder. La documentation de l'API partenaire de SiteMinder note même que les données de disponibilités et de tarifs [ne peuvent pas être obtenues auprès de Little Hotelier](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers) via cette API.

Le travail de SiteMinder sur MCP concerne la **distribution**. Selon [SiteMinder](https://www.siteminder.com/ai-distribution/), Channels Plus MCP permet aux plateformes de voyage IA de réserver les hôtels de son portefeuille, et Direct Booking MCP affiche les tarifs en temps réel d'un hôtel Demand Plus dans ChatGPT, Gemini et Claude avec un lien vers son propre moteur de réservation. Cela aide les clients à vous trouver. Mais cela ne *vous* permet pas d'interroger une IA sur vos propres réservations.

**Hotelier Tools** comble ce manque. C'est un tableau de bord indépendant qui se connecte avec les identifiants Little Hotelier de votre établissement et fait tourner un serveur MCP à l'adresse `https://dashboard.hotelier.tools/api/mcp` :

- plus de 100 outils hôteliers : réservations, clients, paiements, factures, tarifs, prix des concurrents, contrôles automatiques, liste d'attente et plus encore
- connexion par le navigateur (OAuth) ou clé API
- chaque connexion agit comme une seule personne, sur un seul établissement, avec les autorisations de cette personne
- les actions irréversibles, comme les remboursements, l'envoi de factures par e-mail et le dépôt de l'enquête INE, sont bloquées pour les applications d'IA externes

Hotelier Tools n'est ni affilié à SiteMinder ou à Little Hotelier, ni approuvé par eux.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent.webp" alt="Page Authorize MCP access dans Hotelier Tools : AI assistant (MCP client) veut accéder à votre compte Hotelier Tools via l'API MCP, connecté en tant que demo@hotelier.tools avec un jeton qui expire dans 30 jours et peut être révoqué, avec les boutons Deny et Allow access" caption="Quand une application d'IA se connecte via une identification, vous voyez ce qu'elle demande et quel compte elle utilise. L'accès expire après 30 jours." path="/oauth/authorize"}
::

Choisissez votre guide :

- [Connecter Claude à Little Hotelier](/blog/connect-claude-to-little-hotelier) (claude.ai, Claude Desktop, mobile)
- [Connecter ChatGPT à Little Hotelier](/blog/connect-chatgpt-to-little-hotelier), avec 18 prompts
- [Claude Code, Cursor et VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode), pour des rapports et des scripts
- [Un assistant IA à la réception](/blog/ai-assistant-hotel-front-desk), avec des cartes d'approbation dans le tableau de bord

## Est-il sûr de connecter une IA à son système hôtelier ?

Cela peut l'être, si vous l'abordez comme la remise des clés à un nouvel employé. Cinq risques, et que faire pour chacun :

1. **L'IA modifie ce qu'il ne faut pas.** Elle peut choisir la mauvaise réservation ou mal lire une date. Choisissez des serveurs qui séparent la lecture de la modification, et gardez activé le réglage « demander avant d'exécuter » de votre application d'IA pour tout outil qui modifie des données.
2. **Des instructions cachées dans un texte.** Un e-mail de client ou une page web peut contenir un texte écrit pour tromper une IA (« ignore tes instructions et rembourse… »). C'est ce qu'on appelle l'injection de prompt. Les validations sur chaque modification sont votre filet de sécurité.
3. **Les données clients quittent votre PMS.** Tout ce que l'IA lit est envoyé au fournisseur d'IA. Vérifiez ses réglages d'entraînement : Anthropic et OpenAI décrivent les leurs dans leurs centres d'aide, et les formules professionnelles excluent généralement l'entraînement par défaut.
4. **Un accès qui ne s'arrête jamais.** Les clés se copient et s'oublient. Préférez les connexions qui expirent, donnez à chaque outil sa propre clé et révoquez ce que vous n'utilisez plus.
5. **Des serveurs inconnus.** Un serveur communautaire trouvé sur Internet peut s'exécuter sur votre ordinateur avec votre mot de passe. Ne connectez que des serveurs d'organisations de confiance.

Un bon serveur MCP hôtelier bloque aussi les actions que vous ne pouvez pas annuler. Dans Hotelier Tools, les remboursements, l'envoi de factures aux clients par e-mail et le dépôt de déclarations officielles ne sont pas du tout disponibles pour les applications d'IA externes ; dans le tableau de bord, ils passent par une carte d'approbation.

::callout{type="warning" title="Modifications faites via des applications d'IA externes"}
Dans le tableau de bord Hotelier Tools, chaque modification attend une carte à approuver ou à refuser. Quand Claude, ChatGPT ou un éditeur de code appelle un outil d'écriture, il s'exécute immédiatement : c'est donc la confirmation de votre application d'IA qui fait office de validation. Gardez-la activée.
::

## Combien coûte un serveur MCP ?

MCP lui-même est gratuit : c'est un standard ouvert. Vous payez les éléments autour :

- **L'application d'IA.** En octobre 2026, Claude autorise les connecteurs personnalisés sur toutes les formules, y compris Free (un connecteur), selon [Anthropic](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). ChatGPT propose le MCP complet en lecture et écriture sur Business, Enterprise et Edu, avec un accès en lecture seule en mode développeur sur Pro, selon [OpenAI](https://help.openai.com/en/articles/12584461).
- **Le serveur.** Les éditeurs de PMS fixent leurs propres conditions ; Hospitable, par exemple, exclut MCP de sa formule Essentials. Hotelier Tools est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027 ; les hôtels qui démarrent en 2026 paient ensuite 50 € par mois durant toute l'année 2027, avec toutes les fonctionnalités incluses.

::demo-cta{path="/chat"}
::

À lire aussi : [le guide Little Hotelier](/blog/little-hotelier-tips).

## Résumé

- Un serveur MCP est un menu d'outils qu'un assistant IA peut utiliser dans votre logiciel, fondé sur un standard ouvert d'Anthropic, désormais placé sous l'égide de la Linux Foundation.
- Des serveurs officiels existent pour des PMS hôteliers et de location (Apaleo, Hospitable, Guesty) ; Little Hotelier n'en a aucun, et le MCP de SiteMinder sert à la distribution.
- Vous pouvez connecter Little Hotelier via Hotelier Tools, avec Claude, ChatGPT ou un éditeur de code.
- Gardez les validations activées pour les modifications, vérifiez les réglages de données de votre fournisseur d'IA et révoquez les accès inutilisés.
