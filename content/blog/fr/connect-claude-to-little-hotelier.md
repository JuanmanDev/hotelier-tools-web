---
title: "Connecter Claude à Little Hotelier (MCP, pas à pas)"
seoTitle: "Connecter Claude à Little Hotelier : MCP pas à pas"
description: "Connectez Claude à Little Hotelier avec un connecteur personnalisé : collez une URL, connectez-vous, autorisez. Premiers prompts, sécurité et dépannage."
date: 2026-10-03
category: ai
tags: [claude, mcp, ai, connectors, little hotelier]
keywords: [connecter claude à little hotelier, serveur mcp claude, little hotelier mcp, connecteurs mcp claude, configurer mcp claude desktop, connecteur personnalisé claude]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "Guide de configuration MCP de Hotelier Tools avec l'explication What is MCP ? et l'onglet Claude Desktop sélectionné, montrant les étapes et l'extrait de configuration avec l'URL du serveur MCP"
featured: true
faq:
  - q: "Quels forfaits Claude permettent d'ajouter un connecteur personnalisé ?"
    a: "En octobre 2026, Anthropic indique que les connecteurs personnalisés sont disponibles sur les forfaits Free, Pro, Max, Team et Enterprise. Les comptes Free peuvent ajouter un connecteur personnalisé. Sur Team et Enterprise, un Owner l'ajoute pour l'organisation, puis chaque membre se connecte avec son propre identifiant."
  - q: "La connexion à Little Hotelier fonctionne-t-elle dans l'application mobile Claude ?"
    a: "Oui. Une fois connectée sur claude.ai ou dans Claude Desktop, elle est aussi disponible dans Claude pour iOS et Android, selon Anthropic. L'ajout de nouveaux connecteurs personnalisés depuis le téléphone est encore en bêta : configurez-le sur un ordinateur."
  - q: "Comment déconnecter Claude ou changer l'accès ?"
    a: "Dans Claude, ouvrez Customize, puis Connectors, et choisissez Disconnect ou Remove. Dans Hotelier Tools, ouvrez Developer, API Keys et révoquez la connexion ou la clé que vous avez utilisée sous Active keys. Révoquer côté Hotelier Tools coupe l'accès immédiatement."
  - q: "Claude peut-il modifier mes réservations ou mes prix ?"
    a: "Oui, si vous le lui permettez. Les outils d'écriture s'exécutent dès que Claude les appelle, et Hotelier Tools n'ajoute pas de seconde carte d'approbation en dehors de son propre tableau de bord : gardez donc l'approbation par outil de Claude sur Needs approval. Les remboursements, l'envoi de factures par e-mail, le dépôt de la déclaration INE et les autres actions irréversibles sont bloqués pour Claude."
  - q: "Little Hotelier a-t-il son propre serveur MCP ?"
    a: "Pas de serveur officiel en octobre 2026. Le travail de SiteMinder sur MCP concerne la vente de chambres via des assistants IA, pas la consultation de leurs propres données par les propriétaires. Hotelier Tools exploite un serveur MCP indépendant qui se connecte avec l'identifiant Little Hotelier de votre établissement."
  - q: "S'agit-il d'une intégration officielle d'Anthropic ou de Little Hotelier ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à Anthropic, SiteMinder ou Little Hotelier, ni approuvé par eux. Il utilise le protocole MCP standard que Claude prend en charge pour tout connecteur personnalisé."
---

Little Hotelier ne propose pas de serveur MCP en propre (en octobre 2026), mais vous pouvez quand même y connecter Claude grâce à Hotelier Tools, qui en exploite un pour votre établissement. Dans Claude, ouvrez **Customize → Connectors → Add custom connector**, collez `https://dashboard.hotelier.tools/api/mcp`, connectez-vous à Hotelier Tools et appuyez sur **Allow access**. Claude peut alors répondre à partir de vos réservations en direct et, si vous le lui permettez, faire des modifications.

Le concept est nouveau pour vous ? Lisez d'abord [ce qu'est un serveur MCP](/blog/what-is-mcp-server-hotels). Cela prend trois minutes.

## Ce qu'il vous faut avant de commencer

::callout{type="tip" title="Checklist"}
- **Un compte Claude.** En octobre 2026, [Anthropic indique](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) que les connecteurs personnalisés sont disponibles sur les forfaits Free, Pro, Max, Team et Enterprise. Les comptes Free peuvent en ajouter un.
- **Un compte Hotelier Tools** avec Little Hotelier connecté sur **Credentials** (`/credentials`). Il est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.
- **L'accès API dans Hotelier Tools.** Le propriétaire de l'établissement l'a. Sans lui, la connexion est refusée.
::

Hotelier Tools lit vos données avec l'identifiant Little Hotelier de votre établissement. Il n'est ni affilié à SiteMinder, Little Hotelier ou Anthropic, ni approuvé par eux.

## Comment connecter Claude à Little Hotelier (claude.ai et Claude Desktop)

C'est la voie recommandée. Vous vous connectez avec votre navigateur : aucune clé à copier. Ces étapes suivent les [instructions actuelles d'Anthropic](https://claude.com/docs/connectors/custom/add-unlisted) pour les comptes Free, Pro et Max.

1. Ouvrez [claude.ai](https://claude.ai) ou l'application Claude Desktop et allez dans **Customize → Connectors**. Certains écrans l'appellent encore **Settings → Connectors**.
2. Cliquez sur **Add custom connector** (sur certains comptes : **+ Add**, puis **Add custom connector**).
3. Nommez-le `Hotelier Tools` et collez l'URL du serveur MCP : `https://dashboard.hotelier.tools/api/mcp`
4. Si Claude demande comment les gens se connectent, choisissez **Sign in now**. S'il demande un client OAuth, choisissez **Register automatically** : le serveur Hotelier Tools prend en charge cet enregistrement automatique. Si vous ne voyez que **Advanced settings**, laissez-les vides.
5. Cliquez sur **Add**, puis sur **Connect**. Une fenêtre Hotelier Tools s'ouvre.
6. Connectez-vous à Hotelier Tools. Sur **Authorize MCP access**, choisissez l'établissement (seulement si vous en avez plusieurs) et appuyez sur **Allow access**.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="Carte Authorize MCP access : AI assistant (MCP client) wants to access your Hotelier Tools account through the MCP API, l'e-mail connecté, un jeton qui expire dans 30 jours, et les boutons Deny et Allow access" caption="Appuyez sur Allow access (avec plusieurs établissements, vous en choisissez d'abord un). Claude ne voit jamais votre mot de passe." path="/oauth/authorize" width="472" height="327"}
::

7. Ouvrez une nouvelle conversation, cliquez sur **+**, ouvrez **Connectors** et vérifiez que **Hotelier Tools** est activé.
8. Posez une première question (exemples ci-dessous). Claude indique quel outil il veut utiliser et demande avant de l'exécuter.

La connexion dure **30 jours**. Ensuite, Claude vous demande de vous reconnecter.

### Sur un forfait Team ou Enterprise

Un Owner ajoute le connecteur une seule fois : **Organization settings → Connectors → Add → Custom → Web**, avec la même URL. Chaque collègue ouvre ensuite **Customize → Connectors**, repère Hotelier Tools avec l'étiquette **Custom** et clique sur **Connect**. Chaque connexion s'identifie séparément à Hotelier Tools, et Claude agit avec les autorisations de l'identifiant utilisé.

### Dans l'application mobile

Selon [Anthropic](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), un connecteur configuré sur claude.ai ou dans Claude Desktop est aussi disponible dans Claude pour iOS et Android. En ajouter un directement depuis votre téléphone est encore en bêta : faites la configuration sur un ordinateur.

## Utiliser une clé API au lieu de se connecter

La plupart des gens devraient utiliser la connexion ci-dessus. Une clé API est utile quand vous voulez un accès qui n'expire pas au bout de 30 jours, ou pour un client qui ne peut pas faire la connexion par navigateur.

1. Dans Hotelier Tools, ouvrez **Developer → API & MCP → API Keys** (`/developer/api-keys`).
2. Sous « Generate a new key », saisissez un nom comme `claude-desktop` et appuyez sur **Generate key**.
3. Copiez-la tout de suite. La page prévient : « Copy this key now — it will not be shown again. » Les clés commencent par `htk_`.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Page API keys juste après la génération d'une clé : encadré vert Key generated indiquant Copy this key now, it will not be shown again, avec la clé masquée et un bouton de copie, la nouvelle clé Blog integration dans Active keys à côté d'une autre clé, chacune avec Revoke, et une notification API key created" caption="Créez une clé, ou révoquez-en une, sur la page API Keys. La clé complète n'est affichée qu'une seule fois." path="/developer/api-keys"}
::

**Sur claude.ai**, certaines organisations voient une section **Request headers** dans la boîte de dialogue du connecteur. Anthropic la signale comme bêta et réservée à un nombre limité d'organisations. Si vous l'avez, choisissez **No sign-in**, ajoutez l'en-tête `authorization` et saisissez `Bearer htk_YOUR_API_KEY` (avec le mot Bearer et une espace).

**Dans Claude Desktop**, le fichier de configuration (**Settings → Developer → Edit Config**) est prévu pour les serveurs qui tournent sur votre propre ordinateur. La documentation d'Anthropic indique que les serveurs distants s'ajoutent [via Connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). La page MCP Setup de Hotelier Tools affiche un extrait `url` + `headers` ; si Claude Desktop l'ignore, la solution habituelle est le pont communautaire gratuit [mcp-remote](https://github.com/punkpeye/mcp-remote), qui nécessite [Node.js](https://nodejs.org). Voici une configuration typique que nous n'avons pas testée sur toutes les versions de Claude Desktop :

```json [claude_desktop_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://dashboard.hotelier.tools/api/mcp",
        "--header",
        "Authorization:${HT_AUTH}"
      ],
      "env": {
        "HT_AUTH": "Bearer htk_YOUR_API_KEY"
      }
    }
  }
}
```

Enregistrez le fichier, puis quittez complètement Claude Desktop et rouvrez-le. L'en-tête est écrit volontairement sans espace après les deux-points : la documentation de mcp-remote explique que Claude Desktop sous Windows peut déformer les espaces dans les arguments.

### Clé API ou connexion : laquelle choisir ?

| | Connexion (OAuth) | Clé API (`htk_…`) |
|---|---|---|
| Configuration | Collez l'URL, connectez-vous, **Allow access** | Générez une clé, collez-la dans une configuration |
| Durée | 30 jours, puis reconnexion | Jusqu'à ce que vous la révoquiez |
| Idéal pour | claude.ai, Claude Desktop, mobile | Scripts, [Claude Code, Cursor et VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) |
| Révoquer sur | `/developer/api-keys` (Active keys) | `/developer/api-keys` |

Les deux fonctionnent de la même façon une fois connectés : Claude agit **comme la personne qui s'est connectée ou qui a créé la clé**, sur **un seul établissement**, avec les autorisations actuelles de cette personne.

## Que demander d'abord à Claude

Commencez par des questions qui ne font que lire. Mentionner « Hotelier Tools » aide Claude à choisir le bon connecteur plutôt que de chercher sur le web.

::prompt{label="Claude"}
Avec Hotelier Tools, qui arrive aujourd'hui et demain ? Montre le nom, le nombre de nuits, la chambre et tout solde encore impayé.
::

::prompt{label="Claude"}
Quelles réservations arrivant dans les 7 prochains jours n'ont pas encore de chambre attribuée ?
::

::prompt{label="Claude"}
Quels clients sont partis la semaine dernière et n'ont toujours pas de facture ? Pour chacun, dis-moi pourquoi il ne peut pas encore être facturé.
::

::prompt{label="Claude"}
Montre-moi les problèmes ouverts des contrôles automatiques, regroupés par date d'arrivée, avec ce que je dois corriger dans Little Hotelier.
::

::prompt{label="Claude"}
Quels sont mes tarifs et mes disponibilités pour le week-end prochain, et comment se comparent-ils aux prix des concurrents dont tu disposes ?
::

::prompt{label="Claude"}
Explique le prix recommandé pour une chambre double le samedi 14 novembre, étape par étape.
::

Claude peut aussi combiner les réponses : « Fais un tableau des arrivées de la semaine prochaine avec les soldes impayés et rédige un rappel de paiement poli pour chacun » fonctionne bien. Les brouillons restent dans Claude ; rien n'est envoyé.

## Que peut faire Claude avec les données de votre hôtel, et comment les protéger ?

Le serveur MCP de Hotelier Tools offre à Claude plus de 100 outils hôteliers, toujours limités par vos autorisations.

**Il peut lire :** les réservations et les clients, les paiements, les factures et leur état de préparation, les tarifs et les disponibilités, les prix des concurrents et les recommandations de prix avec leurs raisons, les problèmes des contrôles automatiques, la liste « do-not-rebook », la liste d'attente, les tâches programmées et les informations de l'établissement lues dans Little Hotelier.

**Il peut modifier, quand Claude appelle l'outil :** les détails d'une réservation (d'abord une proposition avant/après, puis une étape d'application qui exige `confirmed: true`), les enregistrements de paiement, l'inscription à la [facture au départ](/blog/send-invoice-to-guest-at-checkout), les prix issus des recommandations, le stop sell par canal, les entrées de la liste d'attente et les tâches programmées.

**Il ne peut pas** faire quoi que ce soit d'irréversible : ces outils sont bloqués pour Claude et pour tout autre client externe. Par exemple, il ne peut pas :

- envoyer une facture par e-mail à un client
- effectuer un remboursement
- déposer l'enquête INE
- envoyer des invitations d'équipe
- envoyer par e-mail un lien de facture à un client
- répondre à une question d'un client Booking.com
- lancer le contrôle de liste d'attente qui écrit aux clients

Ces actions restent dans le chat du tableau de bord Hotelier Tools, derrière une carte d'approbation. Claude ne peut pas non plus voir d'autres établissements, dépasser vos autorisations, ni faire quoi que ce soit que Little Hotelier lui-même refuserait.

### Actions d'écriture : comment garder Claude sous contrôle

::callout{type="warning" title="La confirmation de Claude est votre approbation"}
Dans le tableau de bord Hotelier Tools, chaque modification attend une carte d'approbation ou de refus. En dehors, il n'y a pas de seconde carte : **quand Claude appelle un outil d'écriture, il s'exécute.** L'approbation que vous donnez dans Claude est la seule.
::

Cinq habitudes pour que ce soit sûr :

1. **Gardez les approbations activées pour les outils d'écriture.** Dans **Customize → Connectors → Hotelier Tools**, Anthropic vous permet de régler chaque outil sur **Always allow**, **Needs approval** ou **Blocked**. Les outils de lecture peuvent être sur « Always allow ». Laissez tout ce qui modifie des données sur « Needs approval ».
2. **Bloquez ce que vous n'utilisez jamais.** Si Claude ne doit jamais toucher aux prix, réglez `apply_price_recommendations` et `set_channel_stop_sell` sur **Blocked**.
3. **Lisez la proposition.** Pour les modifications de réservation, Claude montre d'abord un avant/après issu de `propose_reservation_changes`. Vérifiez la référence de la réservation et les valeurs avant de dire oui.
4. **Méfiez-vous des instructions cachées dans du texte.** Les messages des clients et les sites web sont écrits par des inconnus. Si le résultat d'un outil demande soudain à Claude de faire quelque chose que vous n'avez pas demandé, arrêtez. Anthropic donne le [même conseil](https://claude.com/docs/connectors/custom/add-unlisted#security-and-privacy).
5. **Sachez qui est connecté.** Chaque connexion agit comme l'identifiant Hotelier Tools qui l'a créée. Révoquez les anciennes sur `/developer/api-keys`, et systématiquement quand quelqu'un quitte l'équipe.

## Les données de mes clients sont-elles envoyées à Anthropic ?

Oui, les parties que Claude lit. Quand Claude appelle un outil, le résultat (noms de clients, dates, montants) fait partie de votre conversation et est traité par Anthropic selon les conditions de votre forfait.

En octobre 2026, Anthropic indique que les données d'entraînement de ses forfaits grand public « does not include raw content from connectors… including remote and local MCP servers » (ne comprennent pas le contenu brut des connecteurs, y compris les serveurs MCP distants et locaux), sauf si vous le copiez dans la conversation ([source](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)). Sur les forfaits professionnels (Team, Enterprise, API), les entrées et les sorties ne sont [pas utilisées pour l'entraînement par défaut](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training).

Les données des clients sont des données personnelles, et votre hôtel en reste responsable. Ne demandez à Claude que ce dont vous avez besoin, et désactivez le connecteur dans les conversations qui n'en ont pas besoin.

::demo-cta{path="/developer/mcp-setup"}
::

## Dépannage

| Ce que vous voyez | Cause probable | Que faire |
|---|---|---|
| Claude dit qu'il ne peut pas se connecter, ou une erreur 401 | Connexion expirée (30 jours), clé révoquée, ou vous n'avez plus accès à l'établissement | **Disconnect** puis **Connect** de nouveau, ou créez une nouvelle clé |
| 400 « No Little Hotelier credentials configured » | Little Hotelier n'est pas encore connecté | Connectez-le sur **Credentials** (`/credentials`) |
| 403 `permission_denied` | Votre identifiant n'a pas l'accès API | Demandez au propriétaire de donner l'accès API à votre rôle |
| 423 `lh_frozen` | Connexion à Little Hotelier suspendue après un échec d'identification, souvent un mot de passe expiré | Enregistrez le nouveau mot de passe sur **Credentials** ou appuyez sur **Check now & resume** |
| Les outils n'apparaissent pas dans la conversation | Connecteur désactivé pour cette conversation, ou Desktop non redémarré | **+ → Connectors** → activez-le ; redémarrez Claude Desktop après avoir modifié la configuration |
| La fenêtre de connexion ne s'ouvre jamais | Fenêtres contextuelles bloquées | Autorisez les fenêtres contextuelles pour claude.ai et réessayez **Connect** |

## Prochaines étapes

- Vous voulez la même chose dans ChatGPT ? Suivez [connecter ChatGPT à Little Hotelier](/blog/connect-chatgpt-to-little-hotelier).
- Vous construisez des rapports ou des scripts ? Voyez [Claude Code, Cursor et VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) ou le [guide de l'API REST](/blog/little-hotelier-api).
- Vous préférez des cartes d'approbation pour chaque modification ? Utilisez l'[assistant intégré](/blog/ai-assistant-hotel-front-desk) au tableau de bord.
- Tout ce que propose le serveur se trouve sur la [page de la fonctionnalité API & MCP](/tools/bot/api-mcp).
