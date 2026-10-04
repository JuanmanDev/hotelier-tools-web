---
title: "API Little Hotelier : existe-t-elle ? La réponse en 2026, et comment récupérer vos données"
seoTitle: "API Little Hotelier : existe-t-elle ? (réponse 2026)"
description: "Pas de clé API pour vos réservations ni vos clients. Ce que SiteMinder propose et comment lire vos données Little Hotelier en REST en quelques minutes."
date: 2026-10-03
category: api
tags: [api, rest, little hotelier, siteminder, developers]
keywords: [little hotelier api, api little hotelier documentation, little hotelier api key, siteminder api, siteminder exchange api, little hotelier rest api, intégration little hotelier]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/rest-api-reference.webp
coverAlt: "Page de référence de l'API REST dans Hotelier Tools avec l'URL de base, un téléchargement openapi.json, le bloc Quick authorize (champ Bearer token, Authorize Swagger, Use my session) et des modèles de code en cURL, JavaScript, Python et PowerShell"
featured: true
faq:
  - q: "Little Hotelier a-t-il une API publique pour mes réservations ?"
    a: "Pas une que l'établissement puisse utiliser pour ses propres réservations, en octobre 2026. Les API de SiteMinder sont réservées aux partenaires technologiques certifiés, et la clé Direct Booking API que vous pouvez générer vous-même ne couvre que les tarifs, les disponibilités et les informations de l'établissement pour un site de réservation."
  - q: "Qu'est-ce que SiteMinder Exchange (SMX), et Little Hotelier en fait-il partie ?"
    a: "SMX est l'API de SiteMinder destinée aux applications partenaires : enregistrement en ligne, messagerie, outils de revenue management. Le guide développeur de SiteMinder indique que Little Hotelier est une source de réservations pour SMX, mais pas de disponibilités ni de tarifs. Seuls les partenaires certifiés s'y connectent."
  - q: "Comment devenir partenaire d'intégration SiteMinder, et en combien de temps ?"
    a: "Vous envoyez le formulaire de candidature d'intégration de SiteMinder, signez un accord de partenariat, puis développez, certifiez et mettez en ligne. SiteMinder indique que la plupart des intégrations prennent environ 60 jours du début à la mise en ligne. C'est conçu pour les éditeurs de logiciels, pas pour un seul hôtel."
  - q: "Une API non officielle comme Hotelier Tools est-elle sûre et autorisée ?"
    a: "Hotelier Tools se connecte avec vos propres identifiants Little Hotelier, les stocke chiffrés (AES-256-GCM) et ne peut faire que ce que ce compte permet dans l'application web Little Hotelier. Ce n'est pas une intégration officielle de SiteMinder : en cas de doute, vérifiez votre propre contrat avec SiteMinder. Vous pouvez révoquer chaque clé à tout moment."
  - q: "Little Hotelier a-t-il un serveur MCP pour les assistants IA ?"
    a: "Pas pour les propriétaires, en octobre 2026. Le travail de SiteMinder sur l'IA dans Demand Plus porte sur les voyageurs qui trouvent et réservent vos chambres dans ChatGPT et Claude. Pour interroger une IA sur vos propres réservations, il faut un serveur MCP indépendant comme celui de Hotelier Tools."
  - q: "Puis-je tester l'API sans risquer de vraies données ?"
    a: "Il n'existe pas de clé de sandbox publique. Commencez par des appels en lecture seule (réservations, tarifs, types de chambres) : ils ne modifient rien dans Little Hotelier. Les appels qui écrivent, comme la génération d'une facture, créent de vrais documents."
---

Pas une que vous puissiez utiliser pour vos propres réservations. En octobre 2026, le centre d'aide de Little Hotelier ne documente aucune clé API qu'un établissement puisse utiliser pour ses réservations, ses clients ou ses factures : les API de SiteMinder sont réservées aux partenaires technologiques certifiés, et la seule clé que vous pouvez générer vous-même, la **Direct Booking API**, couvre les tarifs, les disponibilités et les informations de l'établissement pour un site de réservation. Pour lire vos propres données depuis un script, un tableur ou un assistant IA, vous pouvez utiliser une API REST indépendante comme celle de Hotelier Tools, qui se connecte avec vos propres identifiants Little Hotelier.

Ci-dessous : ce que SiteMinder propose exactement, puis une mise en place en cinq minutes avec de vrais exemples `curl`.

## Little Hotelier a-t-il une API publique ?

Il existe quatre moyens officiels de faire entrer ou sortir des données de Little Hotelier. Aucun ne vous donne de clé API pour votre liste de réservations.

| Option officielle | Qui peut l'utiliser | Ce qu'elle couvre |
|---|---|---|
| SiteMinder Exchange (SMX) | Applications partenaires certifiées | Réservations de Little Hotelier. Pas les disponibilités ni les tarifs |
| Direct Booking API | Établissements utilisant Direct Booking | Tarifs en temps réel, disponibilités, établissement, types de chambres, plans tarifaires |
| Exports CSV | Tout utilisateur, à la main | Réservations, revenus, factures, comptabilité |
| Applications de l'App Store | Tout établissement, via l'éditeur de l'application | Ce que cette application synchronise |

### SiteMinder Exchange (SMX) : pour les éditeurs de logiciels

Le [guide développeur](https://developer.siteminder.com/get-started/siteminder-apis) de SiteMinder liste cinq API : pmsXchange, SiteConnect, Channels Plus, SMX et Direct Booking. Celle qui compte pour Little Hotelier est SMX, l'API derrière des applications comme l'enregistrement en ligne et la messagerie client.

Dans la [liste des éditeurs SMX](https://developer.siteminder.com/smx-api/additional-resources/reference-tables/property-publishers) de SiteMinder, Little Hotelier envoie des **réservations** mais pas de disponibilités ni de tarifs. Le [démarrage rapide SMX](https://developer.siteminder.com/smx-api/guides/quick-start) dit la même chose : « vous ne pouvez pas obtenir de données ARI » de Little Hotelier.

L'accès est réservé aux partenaires. La [FAQ](https://developer.siteminder.com/get-started/resources/faq) de SiteMinder explique qu'il faut d'abord signer un accord de partenariat via le [formulaire de candidature d'intégration](https://www.siteminder.com/integrations/apply-now/), puis développer, certifier et mettre en ligne, ce que « la plupart » des partenaires terminent en 60 jours. Cette voie convient à un éditeur de logiciels. Un hôtel seul ne peut pas obtenir de clé SMX pour lui-même.

### La Direct Booking API : la seule clé que vous pouvez générer

Si votre compte est sur la nouvelle plateforme Little Hotelier (inscriptions depuis mai 2025 ou comptes migrés), le [centre d'aide](https://help-platform.littlehotelier.com/en/articles/15689086-direct-booking-api) documente une Direct Booking API :

1. Allez dans **Direct booking → Configuration → API integration**.
2. Cliquez sur **Generate key**.
3. Donnez la clé et le guide développeur de SiteMinder à votre développeur web.

Elle renvoie les tarifs et disponibilités en temps réel, les informations de l'établissement, les types de chambres et les plans tarifaires : un développeur peut ainsi créer une page ou une application de réservation sur mesure. Elle est incluse avec Direct Booking sans frais supplémentaires. Elle ne renvoie **pas** les réservations, les clients, les paiements ni les factures, et le support de Little Hotelier n'aide pas à créer ou à corriger ce que vous construisez avec.

### Exports CSV et App Store

Tout le reste est manuel ou géré par un éditeur. La page Reservations et la plupart des rapports exportent un CSV (pas à pas dans [comment exporter les réservations vers Excel](/blog/export-little-hotelier-reservations-excel)). Les applications de l'[App Store de Little Hotelier](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store) se connectent quand vous contactez l'éditeur de l'application ; vous n'obtenez pas les données vous-même. Voir [les meilleures intégrations Little Hotelier](/blog/little-hotelier-integrations) pour ce qui existe.

## Comment accéder à vos données Little Hotelier par programmation

Hotelier Tools est un tableau de bord indépendant pour les établissements Little Hotelier. Il comprend une API REST (statut : bêta) et un serveur MCP pour les assistants IA.

Comment cela fonctionne, en termes simples :

- Vous connectez une seule fois votre compte Little Hotelier (vos propres identifiants), dans **Credentials** (`/credentials`). Ils sont stockés chiffrés (AES-256-GCM).
- Hotelier Tools utilise ensuite les mêmes points d'accès web que l'application web Little Hotelier. Il peut lire et faire ce que ce compte permet, rien de plus.
- Vos scripts appellent Hotelier Tools avec une clé API, et Hotelier Tools parle à Little Hotelier.

::callout{type="note" title="Indépendant, non officiel"}
Hotelier Tools n'est ni affilié à SiteMinder ou à Little Hotelier, ni approuvé par eux. Ce n'est pas une API officielle de SiteMinder, et il se connecte avec les identifiants Little Hotelier de votre établissement. Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.
::

## Comment créer une clé API et faire votre premier appel

Il vous faut un compte Hotelier Tools (inscription sur [dashboard.hotelier.tools/register](https://dashboard.hotelier.tools/register)) avec Little Hotelier connecté dans **Credentials**. Le propriétaire de l'établissement a l'accès API par défaut.

1. Ouvrez **Developer → API & MCP → API Keys** (`/developer/api-keys`).
2. Sous « Generate a new key », saisissez un nom que vous reconnaîtrez plus tard, comme `sheets-export`, et cliquez sur **Generate key**.
3. Copiez la clé immédiatement. La page avertit : « Copy this key now — it will not be shown again. » Les clés commencent par `htk_`.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Page API keys juste après la génération d'une clé : le cadre vert Key generated avec la clé à usage unique masquée et un bouton de copie, la nouvelle clé Blog integration sous Active keys avec un bouton Revoke, et une notification API key created" caption="Copiez la clé depuis le cadre vert tout de suite : elle ne s'affiche qu'une fois. Nommez chaque clé d'après ce qui l'utilisera, pour savoir laquelle révoquer plus tard." path="/developer/api-keys"}
::

4. Vérifiez que l'API répond. Cet appel est public et ne nécessite aucune clé :

```bash
curl https://dashboard.hotelier.tools/api/v1/health
```

5. Passons à un appel avec votre clé. Il renvoie l'ID de votre établissement Little Hotelier et le compte de connexion utilisé :

```bash
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  https://dashboard.hotelier.tools/api/v1/property
```

Sous Windows, tapez `curl.exe` au lieu de `curl` dans PowerShell, ou utilisez la commande propre à PowerShell :

```powershell
$headers = @{ Authorization = "Bearer htk_YOUR_API_KEY" }
Invoke-RestMethod -Headers $headers -Uri "https://dashboard.hotelier.tools/api/v1/property"
```

Ce que peut faire une clé : il n'y a **pas de périmètres (scopes)**. Une clé agit sur l'unique établissement pour lequel elle a été créée, en tant que la personne qui l'a créée, avec les autorisations actuelles de cette personne. Chaque personne peut avoir jusqu'à 10 clés, et vous pouvez révoquer chacune d'elles sur la même page.

### Vous préférez cliquer plutôt que taper ? Utilisez l'explorateur

Ouvrez **REST API & Swagger** (`/developer/rest-api`). Dans **Quick authorize**, collez votre clé dans « Bearer token (API key or session JWT) » et cliquez sur **Authorize Swagger**, ou cliquez sur **Use my session** pour vous passer de clé. Essayez ensuite n'importe quel point d'accès dans l'« Interactive API explorer ». La page propose aussi **Download spec** et des « Code templates » en cURL, JavaScript, Python et PowerShell.

::screenshot{src="/images/blog/demo/en/rest-api-interactive-explorer.webp" alt="Explorateur d'API interactif (Swagger) après Try it out et Execute sur GET /property : l'URL de la requête https://demo.hotelier.tools/api/v1/property et un corps de réponse 200 avec propertyId 90210" caption="Autorisez l'accès une fois, puis exécutez n'importe quel point d'accès depuis le navigateur et voyez la requête exacte et le JSON renvoyé." path="/developer/rest-api"}
::

## Quels points d'accès pouvez-vous utiliser ?

L'URL de base est `https://dashboard.hotelier.tools/api/v1`. La liste complète et à jour se trouve dans la [spécification OpenAPI](https://dashboard.hotelier.tools/api/v1/openapi.json) publique. Voici ceux par lesquels la plupart des gens commencent :

| Méthode | Chemin | Ce que vous obtenez |
|---|---|---|
| GET | `/reservations` | Réservations par date d'arrivée, avec `status` et `limit` facultatifs |
| GET | `/reservations/{id}` | Détail complet d'une réservation (id numérique ou référence `LH…`) |
| GET | `/reservations/{id}/invoices` | Les factures d'une réservation |
| GET | `/reservations/{id}/invoices/{invoiceId}/download` | Une facture au format PDF |
| POST | `/reservations/{id}/invoices` | Crée une nouvelle facture dans Little Hotelier (sans e-mail au client) |
| GET | `/guests` | Recherche de clients par texte, nom, e-mail ou téléphone |
| GET | `/prices` | Tarifs et disponibilités pour une période |
| GET | `/room-types` | Types de chambres avec le nombre de chambres de chacun |
| GET | `/methods` | Les méthodes Little Hotelier brutes que vous pouvez appeler (public) |
| POST | `/methods/{methodName}` | Exécute l'une d'elles, par exemple `getReservationsByDateRange` |

Quelques exemples à copier-coller (dates et identifiants fictifs) :

```bash
# Réservations au statut checked_out (départ effectué) avec arrivée en novembre 2026
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations?startDate=2026-11-01&endDate=2026-11-30&status=checked_out&limit=100"

# Tout sur une réservation
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations/LH00000000000001"

# Tarifs et disponibilités pour une semaine
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/prices?startDate=2026-12-01&endDate=2026-12-07"

# Trouver un client par nom de famille
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/guests?lastName=Garcia&perPage=50"

# Toutes les réservations qui chevauchent une période (méthode brute, paramètres nommés)
curl -X POST "https://dashboard.hotelier.tools/api/v1/methods/getReservationsByDateRange" \
  -H "Authorization: Bearer htk_YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"params":{"startDate":"2026-11-01","endDate":"2026-11-30"}}'
```

Les appels de liste renvoient du JSON comme `{ "success": true, "count": 2, "data": [ … ] }`. Pour essayer une méthode brute sans code, ouvrez **LH Methods** (`/methods`) dans le tableau de bord et exécutez-la depuis le navigateur. Les exécutions sont consignées dans **Run History**.

::screenshot{src="/images/blog/demo/en/little-hotelier-methods.webp" alt="Atelier des méthodes Little Hotelier dans Hotelier Tools avec une carte par méthode brute, comme getReservations, getReservationDetails, getReservationsByDateRange, addPaymentRecord, updateReservation et generateInvoice, chacune avec son nombre de paramètres" caption="Exécutez à la main n'importe quelle méthode Little Hotelier brute avant de la scripter." path="/methods"}
::

::demo-cta{path="/developer/rest-api"}
::

## Limites, erreurs et ce qui n'est pas disponible

**Limite de débit.** 100 requêtes par minute et par adresse IP. Chaque réponse contient `X-RateLimit-Limit`, `X-RateLimit-Remaining` et `X-RateLimit-Reset`. Au-delà de la limite, vous recevez `429` avec un en-tête `Retry-After`.

**Pagination.** `/reservations` renvoie au maximum 100 résultats par appel (`limit`, 50 par défaut) et filtre sur la date d'arrivée. Pour une année de données, demandez un mois à la fois ; si un mois renvoie exactement 100, coupez-le en deux. `/guests` se pagine avec `page` et `perPage` (jusqu'à 50). `/prices` découpe les périodes de plus de deux semaines en tranches : les longues périodes sont donc plus lentes.

**Les erreurs** reviennent en JSON avec `statusCode` et `statusMessage` :

| Code | Signifie généralement |
|---|---|
| 401 | Clé absente, incorrecte ou révoquée |
| 404 | Cette réservation n'existe pas, ou n'est pas dans votre établissement |
| 422 | Un paramètre est incorrect, par exemple une date qui n'est pas au format `YYYY-MM-DD` |
| 429 | Trop de requêtes ; attendez le délai `Retry-After` |
| 500 / 502 | Little Hotelier n'a pas répondu ; réessayez plus tard |

**Les données masquées restent masquées.** L'API lit ce que Little Hotelier détient encore. Little Hotelier [masque les coordonnées des clients 180 jours après le départ](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation), et aucune API ne peut les récupérer. Exportez-les avant.

**Non disponible :** webhooks sortants ou notifications en temps réel, clé de sandbox publique, et paquets SDK sur npm ou PyPI. Pour exécuter quelque chose de façon planifiée, utilisez votre propre planificateur (une tâche cron, le Planificateur de tâches de Windows ou un déclencheur Google Sheets).

**Les écritures sont réelles.** `POST /reservations/{id}/invoices` crée un nouveau document de facture dans Little Hotelier à chaque appel. Commencez par des appels en lecture seule, et gardez vos clés hors des tableurs partagés et du code public.

## Que pouvez-vous construire avec ?

- **Un tableau de réservations toujours à jour.** Importez les séjours du mois dernier dans Google Sheets ou Excel de façon planifiée : voir [exporter les réservations vers Excel et Google Sheets](/blog/export-little-hotelier-reservations-excel).
- **Des dossiers pour le comptable.** Téléchargez les factures PDF par réservation, ou évitez le code avec le ZIP trimestriel de [télécharger toutes vos factures d'un coup](/blog/download-all-little-hotelier-invoices).
- **Des tableaux de bord.** Alimentez Looker Studio ou Power BI avec l'occupation et le chiffre d'affaires, depuis une feuille que l'API tient à jour.
- **Des assistants IA.** La même clé fonctionne avec le serveur MCP de Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`), qui donne à Claude, ChatGPT, Cursor ou VS Code plus de 100 outils hôteliers. Commencez par [ce qu'est un serveur MCP](/blog/what-is-mcp-server-hotels), puis [connectez Claude](/blog/connect-claude-to-little-hotelier) ou configurez [Claude Code, Cursor et VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode).
- **Des passerelles entre outils.** Quand il n'existe pas d'application dans l'App Store, un petit script peut déplacer des données entre Little Hotelier et le reste de vos outils. Comparez les options dans [les meilleures intégrations Little Hotelier](/blog/little-hotelier-integrations).

## Prochaines étapes

- Si vous développez des logiciels pour de nombreux hôtels, candidatez au programme partenaire de SiteMinder et à SMX.
- Si vous n'avez besoin que des données de votre propre établissement, créez une clé Hotelier Tools sur `/developer/api-keys` et appelez `/reservations`.
- Exportez les données clients que vous devez conserver avant que Little Hotelier ne les masque à 180 jours.
- Tout ce que proposent l'API et le serveur MCP est sur la [page de la fonctionnalité API & MCP](/tools/bot/api-mcp).
