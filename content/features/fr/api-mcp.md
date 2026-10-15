---
title: "Une API REST et un serveur MCP pour les données de Little Hotelier"
---

Hotelier Tools donne à votre établissement Little Hotelier une API REST à l'adresse `https://dashboard.hotelier.tools/api/v1` et un serveur MCP à l'adresse `https://dashboard.hotelier.tools/api/mcp`. Vos scripts, tableurs, Claude, ChatGPT, Cursor ou VS Code peuvent alors lire les réservations, les clients, les prix et la disponibilité, et effectuer certaines modifications, avec les mêmes autorisations que votre compte Hotelier Tools.

## Comment ça marche

- **Votre propre connexion, pas une API de partenaire.** Vous connectez Little Hotelier une seule fois sur **Credentials**, et les identifiants sont stockés chiffrés. Hotelier Tools utilise les mêmes points d'accès web que l'application web de Little Hotelier : il peut donc faire ce que cette connexion permet, rien de plus.
- **API REST.** JSON sur HTTPS : `/reservations` (avec les factures et les PDF par réservation), `/guests`, `/prices`, `/room-types`, et `/methods` pour les méthodes brutes de Little Hotelier. La liste complète figure dans la spécification OpenAPI publique à l'adresse `/api/v1/openapi.json`, avec un explorateur interactif et des modèles de code sur **REST API & Swagger** (`/developer/rest-api`).
- **Serveur MCP.** Un serveur HTTP distant avec plus de 100 outils hôteliers. Des configurations prêtes à l'emploi pour chaque client se trouvent sur **MCP Setup** (`/developer/mcp-setup`).

## Comment fonctionne l'authentification

- **Clés d'API.** Créez-en une sur **Developer > API & MCP > API Keys** (`/developer/api-keys`). Les clés commencent par `htk_`, ne sont affichées qu'une seule fois et se placent dans un en-tête `Authorization: Bearer`. Une clé n'a pas de portées : elle agit sur un établissement, au nom de la personne qui l'a créée. Chaque personne peut avoir jusqu'à 10 clés et révoquer n'importe laquelle.
- **Connexion pour MCP.** Les clients qui prennent en charge OAuth peuvent se connecter en s'identifiant à la place. Cette connexion dure 30 jours.

## Appels en lecture et en écriture

Les appels en lecture ne modifient rien dans Little Hotelier. Les écritures sont réelles : `POST /reservations/{id}/invoices` crée une nouvelle facture à chaque appel. Via MCP, une IA peut modifier des réservations (d'abord une proposition, puis une étape d'application avec `confirmed: true`), des enregistrements de paiement, des prix, le stop sell, des entrées de la liste d'attente et des tâches planifiées. En dehors du tableau de bord, il n'y a pas de carte d'approbation : gardez donc activées les validations d'outils de votre client. Les actions irréversibles, comme les remboursements ou l'envoi de factures par e-mail, sont bloquées pour les clients externes.

## Limites et bon à savoir

- **Statut :** l'API REST et le serveur MCP sont en bêta. Les cartes intégrables sont en alpha.
- **Limite de débit :** 100 requêtes par minute et par adresse IP, puis `429` avec `Retry-After`.
- **Pagination :** 100 réservations au maximum par appel, filtrées sur la date d'arrivée.
- **Non disponibles :** webhooks sortants, clé de bac à sable publique, paquets SDK.
- **Les données masquées le restent :** Little Hotelier masque les données des clients 180 jours après le départ.
- Ce n'est pas une API officielle de SiteMinder.

Commencez par [Little Hotelier a-t-il une API ?](/blog/little-hotelier-api) et [qu'est-ce qu'un serveur MCP](/blog/what-is-mcp-server-hotels), puis configurez [Claude](/blog/connect-claude-to-little-hotelier) ou [Claude Code, Cursor et VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode).
