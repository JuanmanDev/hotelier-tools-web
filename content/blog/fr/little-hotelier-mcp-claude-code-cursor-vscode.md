---
title: "Claude Code, Cursor et VS Code : utiliser vos données Little Hotelier via MCP"
seoTitle: "Claude Code MCP : Little Hotelier dans Cursor et VS Code"
description: "Ajoutez le serveur MCP de Hotelier Tools à Claude Code, Cursor, VS Code, Windsurf ou Gemini CLI : rapport d'occupation, synchro Sheets, tableau de bord."
date: 2026-10-03
category: ai
tags: [mcp, claude code, cursor, vs code, api]
keywords: [claude code mcp, configurer mcp claude code, cursor mcp.json, vscode mcp.json, claude code gratuit, little hotelier mcp, gemini cli mcp, windsurf mcp config]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "Guide MCP setup dans Hotelier Tools : une explication What is MCP? et des onglets Client configuration pour Claude Desktop, VS Code, Cursor et Custom / SDK, avec Claude Desktop sélectionné et son extrait claude_desktop_config.json"
faq:
  - q: "Quelle est la commande claude mcp add pour Little Hotelier ?"
    a: "Lancez : claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header \"Authorization: Bearer htk_YOUR_API_KEY\". Remplacez la clé par une clé créée dans Developer, API Keys de Hotelier Tools, puis vérifiez avec /mcp dans Claude Code."
  - q: "Où se trouve mcp.json dans Cursor et VS Code ?"
    a: "Cursor lit ~/.cursor/mcp.json pour tous les projets et .cursor/mcp.json à l'intérieur d'un projet. VS Code lit .vscode/mcp.json dans l'espace de travail, ainsi qu'un fichier au niveau utilisateur que vous ouvrez avec la commande MCP: Open User Configuration. VS Code utilise la clé servers, pas mcpServers."
  - q: "Faut-il être développeur pour utiliser Claude Code avec les données de mon hôtel ?"
    a: "Non. Vous installez Claude Code, collez une commande, puis vous posez vos questions en langage courant. Il est utile de savoir où vont vos fichiers et comment lancer un script, mais Claude Code peut expliquer chaque étape au fur et à mesure."
  - q: "Puis-je me connecter au lieu d'utiliser une clé API ?"
    a: "Oui, dans les clients qui prennent en charge OAuth. Ajoutez l'URL du serveur sans en-tête, puis connectez-vous quand le client le demande : dans Claude Code, lancez /mcp et choisissez de vous authentifier. La connexion reste valable 30 jours. Les clés conviennent mieux aux scripts qui tournent sans supervision."
  - q: "Est-ce une API officielle de Little Hotelier ou de SiteMinder ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à SiteMinder ou à Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre établissement et propose sa propre API REST et son propre serveur MCP."
---

Ajoutez un serveur MCP distant, `https://dashboard.hotelier.tools/api/mcp`, avec une clé API Hotelier Tools, et Claude Code, Cursor, VS Code (mode agent de Copilot), Windsurf ou Gemini CLI peuvent lire vos réservations, tarifs et factures Little Hotelier pendant qu'ils écrivent du code pour vous. Dans Claude Code, une seule commande suffit : `claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"`.

Voici les configurations exactes pour chaque outil (vérifiées dans la documentation de chaque éditeur en octobre 2026), trois idées à réaliser, et les cas où il vaut mieux appeler directement l'API REST.

## Avant de commencer : créer une clé API

Little Hotelier ne publie pas de serveur MCP, et la documentation de l'API partenaire de SiteMinder indique elle-même que les données de disponibilités et de tarifs [ne peuvent pas être obtenues auprès de Little Hotelier](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers). Hotelier Tools fournit à la fois un serveur MCP et une API REST, avec les identifiants Little Hotelier de votre établissement. Il n'est ni affilié à SiteMinder ou à Little Hotelier, ni approuvé par eux. Contexte : [Little Hotelier a-t-il une API ?](/blog/little-hotelier-api)

1. Dans Hotelier Tools, connectez Little Hotelier dans **Credentials** (`/credentials`) si ce n'est pas encore fait.
2. Ouvrez **Developer → API & MCP → API Keys** (`/developer/api-keys`).
3. Saisissez un nom qui indique où la clé sera utilisée, comme `cursor-laptop`, et cliquez sur **Generate key**.
4. Copiez-la immédiatement : « Copy this key now — it will not be shown again. » Elle commence par `htk_`.

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="Page API keys dans Hotelier Tools : le formulaire Generate a new key avec un champ de nom et le bouton Generate key, une clé active (MCP internal (chat), masquée) avec un bouton Revoke, et les conseils Good security practice" caption="Avec une clé par outil, vous révoquez facilement celle dont vous n'avez plus besoin." path="/developer/api-keys"}
::

Une clé a les mêmes autorisations que votre compte Hotelier Tools, sur l'unique établissement où vous l'avez créée. Vous pouvez avoir jusqu'à 10 clés.

**Gardez la clé hors de vos fichiers.** Stockez-la dans une variable d'environnement nommée `HT_API_KEY` et référencez-la depuis les configurations :

```bash [macOS / Linux]
echo 'export HT_API_KEY="htk_YOUR_API_KEY"' >> ~/.zshrc   # ou ~/.bashrc
```

```powershell [Windows PowerShell]
setx HT_API_KEY "htk_YOUR_API_KEY"
```

Ouvrez un nouveau terminal (et redémarrez votre éditeur) pour qu'il prenne en compte la variable.

## Comment ajouter le serveur MCP à Claude Code, Cursor, VS Code, Windsurf et Gemini CLI

Chaque outil stocke les trois mêmes informations (adresse, transport, clé) dans un fichier un peu différent. Choisissez le vôtre.

### Claude Code

Claude Code a une commande intégrée pour les serveurs distants ([documentation d'Anthropic](https://code.claude.com/docs/en/mcp)) :

```bash [Terminal]
claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"
```

Lancez ensuite `claude` et tapez `/mcp`. Hotelier Tools doit apparaître comme **connected** ; un statut `failed` avec une erreur 401 signifie que la clé est incorrecte.

- **Portée.** Par défaut, le serveur est enregistré pour le dossier courant seulement. Ajoutez `--scope user` après le nom pour l'utiliser dans tous les projets, ou `--scope project` pour écrire un `.mcp.json` partagé.
- **Se connecter plutôt qu'utiliser une clé.** Lancez la commande sans `--header`, puis dans Claude Code tapez `/mcp` et authentifiez-vous dans le navigateur. Si vous avez déjà connecté Hotelier Tools comme connecteur sur claude.ai, Claude Code peut le récupérer quand vous vous connectez avec le même compte Claude.

Pour un projet que vous partagez avec un collègue ou que vous gardez dans Git, placez le serveur dans `.mcp.json` et laissez chacun fournir sa propre clé :

```json [.mcp.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "type": "http",
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${HT_API_KEY}" }
    }
  }
}
```

La ligne `"type": "http"` est obligatoire : Claude Code considère une entrée avec `url` mais sans `type` comme une erreur de configuration.

### Cursor

Cursor lit `~/.cursor/mcp.json` pour tous les projets, ou `.cursor/mcp.json` à l'intérieur d'un projet ([documentation Cursor](https://cursor.com/docs/context/mcp)) :

```json [~/.cursor/mcp.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${env:HT_API_KEY}" }
    }
  }
}
```

Enregistrez, puis vérifiez que le serveur est activé dans les réglages MCP de Cursor (les versions récentes listent les serveurs sous **Customize** dans la barre latérale). Posez vos questions dans le chat **Agent**. Cursor demande par défaut une validation avant d'exécuter un outil ; gardez ce réglage pour ce serveur. Si vous omettez `headers`, Cursor propose la connexion par le navigateur.

### VS Code avec GitHub Copilot

VS Code utilise `.vscode/mcp.json`, avec `servers` comme clé principale et un `"type": "http"` obligatoire ([documentation VS Code](https://code.visualstudio.com/docs/agents/reference/mcp-configuration)). Sa fonction `inputs` demande la clé une fois et la conserve dans le stockage sécurisé de VS Code : elle ne figure donc jamais dans le fichier :

```json [.vscode/mcp.json]
{
  "inputs": [
    {
      "type": "promptString",
      "id": "ht-api-key",
      "description": "Hotelier Tools API key (htk_…)",
      "password": true
    }
  ],
  "servers": {
    "hotelier-tools": {
      "type": "http",
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${input:ht-api-key}" }
    }
  }
}
```

Ouvrez Copilot Chat, passez en mode **Agent** et utilisez **Configure Tools** pour voir les outils Hotelier Tools. VS Code peut vous demander de faire confiance au serveur lors de son premier démarrage. Pour tous les espaces de travail, lancez **MCP: Open User Configuration** et collez-y le même bloc. VS Code prend aussi en charge la connexion par le navigateur si vous omettez `headers`.

::screenshot{src="/images/blog/demo/en/mcp-config-vscode-copilot.webp" alt="Onglet VS Code / GitHub Copilot de la page MCP setup de Hotelier Tools : un extrait .vscode/mcp.json avec servers, hotelier-tools, type http, l'URL /api/mcp de la démo et un en-tête Authorization avec l'espace réservé htk_YOUR_API_KEY, puis Turn on Agent mode in Copilot Chat" caption="La page MCP Setup propose un extrait prêt à l'emploi pour chaque client. La démo affiche sa propre adresse ; la vôtre est dashboard.hotelier.tools." path="/developer/mcp-setup" width="1036" height="446"}
::

### Windsurf et Gemini CLI

**Windsurf** (dont la documentation est désormais hébergée chez Devin) lit `~/.codeium/windsurf/mcp_config.json` et utilise `serverUrl` pour les serveurs distants ([documentation](https://docs.devin.ai/windsurf/plugins/cascade/mcp)) :

```json [~/.codeium/windsurf/mcp_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "serverUrl": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${env:HT_API_KEY}" }
    }
  }
}
```

Windsurf limite Cascade à 100 outils au total, et Hotelier Tools en propose plus de 100 : vous devrez peut-être désactiver les outils inutiles dans le panneau MCP.

**Gemini CLI** lit `~/.gemini/settings.json` (ou `.gemini/settings.json` dans un projet) et utilise `httpUrl` pour ce type de serveur ; `url` désignerait l'ancien transport SSE, que Hotelier Tools ne sert pas ([documentation](https://geminicli.com/docs/tools/mcp-server/)) :

```json [~/.gemini/settings.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "httpUrl": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer $HT_API_KEY" }
    }
  }
}
```

Ou depuis le terminal : `gemini mcp add --transport http --header "Authorization: Bearer htk_YOUR_API_KEY" hotelier-tools https://dashboard.hotelier.tools/api/mcp`. Tapez `/mcp` dans Gemini CLI pour vérifier.

Ces deux configurations suivent la documentation de chaque éditeur ; nous ne les avons pas testées dans toutes les versions.

| Outil | Fichier de configuration | Clé principale | Clé d'URL |
|---|---|---|---|
| Claude Code | `.mcp.json` | `mcpServers` | `url` + `"type": "http"` |
| Cursor | `.cursor/mcp.json` | `mcpServers` | `url` |
| VS Code | `.vscode/mcp.json` | `servers` | `url` + `"type": "http"` |
| Windsurf | `mcp_config.json` | `mcpServers` | `serverUrl` |
| Gemini CLI | `settings.json` | `mcpServers` | `httpUrl` |

## Trois idées à réaliser

L'astuce est de laisser l'agent utiliser MCP pour *regarder* vos vraies données, puis d'écrire du code qui appelle l'[API REST](/tools/bot/api-mcp) pour que le résultat tourne chaque mois sans IA.

### Un rapport d'occupation mensuel

Demandez à Claude Code (ou à l'agent de Cursor) dans un dossier vide :

::prompt{label="Claude Code"}
Utilise le serveur MCP hotelier-tools pour examiner mes types de chambres et les réservations du mois dernier. Écris ensuite un script Node.js qui appelle l'API REST de Hotelier Tools (spécification : https://dashboard.hotelier.tools/api/v1/openapi.json) avec la clé stockée dans HT_API_KEY, et qui, pour n'importe quel mois que je lui donne, affiche le taux d'occupation et le prix moyen par nuit pour chaque type de chambre, puis les enregistre dans un fichier CSV.
::

Un bon script commence ainsi. Il récupère les types de chambres et toutes les réservations qui chevauchent le mois, et enregistre la réponse brute pour que vous puissiez vérifier les champs avant de faire des calculs :

```js [fetch-month.mjs]
// Utilisation : node fetch-month.mjs 2026-09   (HT_API_KEY doit être dans votre environnement)
import { writeFile } from "node:fs/promises";

const API = "https://dashboard.hotelier.tools/api/v1";
const headers = {
  Authorization: `Bearer ${process.env.HT_API_KEY}`,
  "Content-Type": "application/json",
};

async function call(path, options = {}) {
  const res = await fetch(`${API}${path}`, { ...options, headers });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

const month = process.argv[2];
const [year, mon] = month.split("-").map(Number);
const startDate = `${month}-01`;
const endDate = new Date(Date.UTC(year, mon, 0)).toISOString().slice(0, 10);

const roomTypes = await call("/room-types");
const reservations = await call("/methods/getReservationsByDateRange", {
  method: "POST",
  body: JSON.stringify({ params: { startDate, endDate } }),
});

await writeFile(
  `raw-${month}.json`,
  JSON.stringify({ roomTypes: roomTypes.data, reservations: reservations.result }, null, 2)
);
console.log(`Saved raw-${month}.json`);
```

La spécification de l'API indique elle-même que les objets de réservation proviennent de Little Hotelier et que leur « forme peut varier » : laissez donc l'agent lire le fichier enregistré avant de calculer quoi que ce soit. `/room-types` donne `totalRooms` par type, qui est l'autre moitié du calcul d'occupation.

### Une synchronisation Google Sheets

Pour une feuille qui liste les arrivées des 30 prochains jours et s'actualise chaque matin, ouvrez votre tableur, allez dans **Extensions → Apps Script** et collez :

```js [Code.gs]
function syncArrivals() {
  const key = PropertiesService.getScriptProperties().getProperty('HT_API_KEY');
  const fmt = d => Utilities.formatDate(d, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  const today = new Date();
  const in30 = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const url = 'https://dashboard.hotelier.tools/api/v1/reservations'
    + '?startDate=' + fmt(today) + '&endDate=' + fmt(in30) + '&limit=100';

  const res = UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Bearer ' + key },
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 200) throw new Error(res.getContentText());

  const rows = JSON.parse(res.getContentText()).data.map(r => [
    r.id, r.guestName, r.status, r.checkIn, r.checkOut, r.roomType, r.totalAmount,
  ]);
  const book = SpreadsheetApp.getActive();
  const sheet = book.getSheetByName('Arrivals') || book.insertSheet('Arrivals');
  sheet.clearContents();
  sheet.appendRow(['ID', 'Guest', 'Status', 'Check-in', 'Check-out', 'Room type', 'Total']);
  if (rows.length) sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
}
```

Stockez la clé dans **Project Settings → Script properties** sous le nom `HT_API_KEY`, exécutez le script une fois pour accorder l'accès, puis ajoutez un déclencheur quotidien dans **Triggers**. `/reservations` renvoie au maximum 100 séjours par appel, filtrés par date d'arrivée : découpez donc les mois chargés en semaines. N'oubliez pas que la feuille contient désormais des noms de clients : partagez-la avec prudence.

### Un petit tableau de bord sur mesure

::prompt{label="Cursor"}
Crée une petite application web Node.js qui affiche l'occupation de ce soir, les arrivées et départs du jour, et les séjours avec un solde impayé, en utilisant l'API REST de Hotelier Tools. Garde HT_API_KEY uniquement côté serveur : le navigateur doit appeler mon serveur, jamais l'API directement. Mets les réponses en cache pendant cinq minutes.
::

Deux règles rendent cela sûr : la clé reste sur le serveur (toute personne qui ouvre une page peut lire les clés présentes dans le code du navigateur), et vous mettez en cache, car l'API autorise 100 requêtes par minute et par adresse IP.

## MCP ou API REST : lequel utiliser ?

| | Serveur MCP | API REST |
|---|---|---|
| Idéal pour | Poser des questions, laisser un agent explorer pendant qu'il code | Scripts, Sheets, tableaux de bord exécutés de façon planifiée |
| Adresse | `https://dashboard.hotelier.tools/api/mcp` | `https://dashboard.hotelier.tools/api/v1` |
| Authentification | Clé API ou connexion par le navigateur | Clé API (`Authorization: Bearer htk_…`) |
| Documentation | Page MCP Setup (`/developer/mcp-setup`) | Explorateur Swagger (`/developer/rest-api`) |

Les deux utilisent la même clé et les mêmes autorisations. Le guide REST se trouve dans [API Little Hotelier](/blog/little-hotelier-api).

## Outils de lecture et d'écriture : gardez l'agent en laisse

Les agents de code exécutent les outils très vite, ce qui est précisément la raison de les ralentir ici.

- **Les écritures s'exécutent dès que l'agent les appelle.** En dehors du tableau de bord Hotelier Tools, il n'y a pas de carte d'approbation. Modifier une réservation, enregistrer un paiement, appliquer des prix ou activer un stop sell se produit dès que l'outil s'exécute. Gardez activé le réglage « demander avant d'exécuter des outils » de votre éditeur, et n'utilisez pas les modes d'exécution automatique avec ce serveur.
- **Les actions irréversibles sont bloquées de toute façon.** Huit outils (envoi de factures par e-mail aux clients, remboursements, dépôt de l'enquête INE, invitations d'équipe, envoi de liens aux clients par e-mail, réponses aux questions Booking.com et la vérification de liste d'attente qui envoie des messages aux clients) sont réservés au tableau de bord.
- **Les modifications de réservation se font en deux étapes.** `propose_reservation_changes` montre l'avant/après ; `apply_reservation_changes` exige `confirmed: true`. Lisez la proposition.
- **Ne commitez jamais de clé.** Utilisez des références de type `${HT_API_KEY}`, ajoutez les fichiers de configuration locaux à `.gitignore`, et révoquez sur `/developer/api-keys` toute clé qui aurait fuité.

## Dépannage : « le serveur n'apparaît pas »

- **Rien n'apparaît après la modification d'une configuration :** redémarrez l'éditeur ou la CLI. La plupart des outils lisent les configurations MCP au démarrage.
- **Claude Code ou VS Code ignore le serveur :** vérifiez la présence de `"type": "http"`.
- **Gemini CLI se connecte mais échoue :** utilisez `httpUrl`, pas `url`.
- **401 :** clé incorrecte ou révoquée, ou variable d'environnement non définie dans ce terminal.
- **400 « No Little Hotelier credentials configured » :** connectez Little Hotelier dans `/credentials`.
- **423 `lh_frozen` :** la connexion à Little Hotelier est suspendue après un échec de connexion (souvent un mot de passe expiré). Enregistrez le nouveau mot de passe dans **Credentials** ou cliquez sur **Check now & resume**.
- **429 :** trop de requêtes ; attendez le délai indiqué dans `Retry-After`.
- **Le retour à la ligne avec barre oblique inverse échoue sous Windows :** PowerShell n'utilise pas `\` pour continuer une ligne. Collez les commandes sur une seule ligne, comme ci-dessus.

::demo-cta{path="/developer/mcp-setup"}
::

## Prochaines étapes

- Vous n'êtes pas développeur ? [Connectez plutôt Claude](/blog/connect-claude-to-little-hotelier) ou [ChatGPT](/blog/connect-chatgpt-to-little-hotelier) dans le navigateur.
- Vous découvrez le sujet ? Lisez [ce qu'est un serveur MCP](/blog/what-is-mcp-server-hotels).
- Vous voulez des tableurs sans code ? Voir [exporter les réservations vers Excel](/blog/export-little-hotelier-reservations-excel).
