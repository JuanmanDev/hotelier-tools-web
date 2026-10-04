---
title: "Exporter les réservations Little Hotelier vers Excel (avant que les données clients ne soient masquées)"
seoTitle: "Exporter les réservations Little Hotelier vers Excel"
description: "Exportez réservations et clients Little Hotelier vers Excel ou Sheets, à la main ou automatiquement, avant leur masquage 180 jours après le départ."
date: 2026-10-03
category: api
tags: [export, excel, google sheets, reports, little hotelier]
keywords: [exporter les réservations little hotelier vers excel, little hotelier rapports, little hotelier export excel, little hotelier csv, liste de clients hôtel excel, tableau de réservations hôtel excel, données clients little hotelier masquées]
feature: api-mcp
demoPath: /methods
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "Portail développeur de Hotelier Tools avec des cartes REST API et Swagger, MCP setup, API keys et LH methods, au-dessus d'un exemple d'authentification avec une clé API"
faq:
  - q: "Qu'est-ce qui est masqué exactement au bout de 180 jours ?"
    a: "Little Hotelier indique que les informations personnelles identifiables (PII) des clients sont masquées 180 jours après la date de départ de la réservation. La réservation est toujours là, mais les rapports et les recherches n'affichent plus les données personnelles du client. Exportez ce dont vous avez besoin avant cette date."
  - q: "Pourquoi les numéros de téléphone manquent-ils dans mon export Little Hotelier ?"
    a: "Little Hotelier exclut les numéros de téléphone des clients du CSV des réservations pour des raisons de sécurité. Vous pouvez toujours voir un téléphone sur la réservation ou la fiche client, et la recherche de clients dans l'API Hotelier Tools renvoie un champ phone_number quand Little Hotelier en a un."
  - q: "Puis-je programmer l'export dans Little Hotelier ?"
    a: "Les articles du centre d'aide que nous avons consultés en octobre 2026 décrivent l'exécution et l'export des rapports à la main, sans export programmé. Pour l'automatiser, utilisez un script ou un déclencheur Google Sheets qui lit les données via une API."
  - q: "Puis-je exporter plus d'un an d'un coup ?"
    a: "Little Hotelier plafonne l'export des totaux de clients à 365 jours, et la recherche de réservations du channel manager ne remonte qu'à 548 jours. Exportez une année (ou un mois) à la fois et conservez les fichiers."
  - q: "Comment exporter uniquement les réservations Booking.com ?"
    a: "Filtrez par canal dans les rapports du Channel Manager, ou exportez tout et filtrez la référence de réservation dans Excel. Les références qui commencent par BDC sont Booking.com, EXP Expedia, ABB Airbnb, AGO Agoda, HWL Hostelworld et LH votre propre réception ou moteur de réservation."
---

Ouvrez **Reservations**, réglez les dates, appuyez sur **Search**, puis sur **Export** : Little Hotelier télécharge un fichier CSV qui s'ouvre dans Excel ou Google Sheets. Faites-le régulièrement, car Little Hotelier masque les données personnelles des clients **180 jours après le départ**, et l'export n'inclut jamais les numéros de téléphone. Si vous voulez une copie qui se met à jour toute seule chaque mois, lisez les mêmes données via une API.

## Pourquoi exporter avant que les données clients ne soient masquées

Le centre d'aide de Little Hotelier le dit sans détour : « Guest Personally Identifiable Information (PII) is masked 180 days after the reservation check out date » (les informations personnelles identifiables des clients sont masquées 180 jours après la date de départ de la réservation) ([recherche du channel manager](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation), [rapports du channel manager](https://helpcentre.littlehotelier.com/en/articles/8673872-channel-manager-run-and-export-reports), [rapports du moteur de réservation](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports)).

Deux autres limites méritent d'être connues :

- La recherche de réservations du channel manager ne trouve que les réservations « created or checked out within the last 548 days » (créées ou dont le départ a eu lieu au cours des 548 derniers jours).
- Une fois les données masquées, aucun export ni aucune API ne peut les restituer.

Donc, si vous avez besoin des coordonnées des clients pour des factures, une liste de clients fidèles, un litige ou vos propres statistiques, exportez-les tant qu'elles sont encore là. Ne conservez que ce que vous avez une raison de conserver, et stockez les fichiers dans un endroit à accès contrôlé : ils contiennent des données personnelles.

::callout{type="info" title="Deux versions de Little Hotelier"}
Les comptes créés depuis mai 2025 (ou mis à niveau) utilisent la nouvelle **plateforme**, avec un [centre d'aide distinct](https://help-platform.littlehotelier.com/en/). Les anciens comptes utilisent la version **classique**. Les étapes ci-dessous donnent les chemins de menu des deux.
::

## Comment exporter les réservations de Little Hotelier vers Excel

1. Ouvrez **Reservations**. Dans la version classique : **My Apps → Front Desk → Reservations**.
2. Réglez **Date type** (**Check-in date**, **Check-out date** ou **Booked on date**), puis **Date from** et **Date to**. Un mois civil est une bonne unité.
3. Choisissez un **Status** si vous le souhaitez : **All**, **Confirmed**, **Checked-in**, **Checked-out** ou **Cancelled**.
4. Cliquez sur **Search**.
5. Cliquez sur **Export**. Le fichier se télécharge au format `.csv`. Sur la nouvelle plateforme, Little Hotelier demande votre code d'authentification multifacteur (MFA) ou votre clé d'accès (passkey) avant les exports de réservations, de clients, de paiements, de revenus et de factures.

::screenshot{src="/images/scripts/full-width-reservation-table/to.png" alt="Page Reservations de la version classique de Little Hotelier en espagnol : filtres par nom du client, référence de réservation, numéro de facture, type de date, statut, dates et source, le bouton Search, 36 réservations trouvées et le lien Export" caption="La page Reservations classique (interface en espagnol). Lancez d'abord la recherche (Search) : Export télécharge ensuite tous les résultats en CSV."}
::

Deux précisions du [centre d'aide](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data) évitent bien des confusions :

- Si une recherche renvoie beaucoup de résultats, l'écran n'affiche que les **31 premiers jours**. L'export contient tout.
- Pour compter les clients d'une période, faites correspondre Date type et Status (arrivée avec **Checked-in**, départ avec **Checked-out**). Le [guide classique](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information) plafonne cet export à **365 jours**.

### Ce que contient le CSV (et ce qu'il ne contient pas)

L'export comporte plus de colonnes que l'écran. Selon [Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information), vous obtenez :

- **Réservation :** référence, date de réservation, canal, statut, date d'annulation
- **Client :** prénom et nom, e-mail, société, adresse complète
- **Séjour :** arrivée, départ, nuits, heure d'arrivée, commentaires du client, types de chambres, chambres, plans tarifaires
- **Argent :** sous-total, extras, suppléments, taxes, paiements reçus, solde dû
- **Personnes :** adultes, enfants, bébés ; réponses aux questions personnalisées de la réservation

Non inclus : les **numéros de téléphone** (« for security reasons », pour des raisons de sécurité) et un historique des modifications, comme l'heure exacte à laquelle l'arrivée d'un client a été enregistrée.

## Quels autres rapports Little Hotelier peut-il exporter ?

La plupart des rapports ont un bouton **Export** qui produit un CSV. Les chemins sont ceux de la nouvelle plateforme, sauf les lignes du channel manager et du moteur de réservation, qui viennent de la version classique (sous **My Apps**). Les comptes classiques trouvent la plupart des autres rapports sous **My Apps → Front Desk → Reports**.

| Rapport | Où | Ce que vous obtenez |
|---|---|---|
| Guests | Reports → Operational → Guests | Clients ayant séjourné, par période |
| Invoices | Reports → Operational → Invoices | Liste des factures en CSV, PDF dans un ZIP |
| Accounting | Reports → Operational → Accounting | Factures définitives, au format Xero et QuickBooks |
| Revenue (7 vues) | Reports → Strategic → Revenue | Résumé, type de chambre, chambre, plan tarifaire, canal, taxes, extras |
| Channel manager | Channel Manager → Reports | Résumé des réservations, nuitées par chambre, arrivées, rendement par canal |
| Booking engine | Direct Booking → Reports | Réservations avec l'appareil utilisé et le consentement RGPD |
| Police espagnole | Reports → Operational → Police report | Espagne uniquement : fiches clients pour le registre de police |

Sources : [Getting started with Reports](https://help-platform.littlehotelier.com/en/articles/10813931-getting-started-with-reports), [Invoice report](https://help-platform.littlehotelier.com/en/articles/14390737-how-to-run-an-invoice-report), [Accounting export](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final), [Revenue reports](https://helpcentre.littlehotelier.com/en/articles/8884214-revenue-reports).

Astuce : l'export de revenus **Summary** comporte une colonne « Rate per night », une ligne par nuit. C'est le moyen le plus rapide de voir à quel prix chaque nuit d'un long séjour a été vendue.

## Comment ouvrir le CSV dans Excel sans accents cassés

Si des noms comme « José » deviennent « JosÃ© », Excel a deviné le mauvais encodage. Importez le fichier au lieu de double-cliquer dessus :

1. Dans Excel, allez dans **Données → À partir d'un fichier texte/CSV** (**Data → From Text/CSV**) et choisissez le fichier ([étapes de Microsoft](https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba)).
2. Réglez **Origine du fichier** sur **65001: Unicode (UTF-8)** et **Délimiteur** sur **Virgule**.
3. Cliquez sur **Charger**.

Dans Google Sheets, utilisez **Fichier → Importer → Importer** et laissez le séparateur sur automatique. Sheets lit correctement l'UTF-8.

## Une liste de clients fidèles : ce que vous pouvez exporter, et ce qu'il vous faut

Le CSV des réservations contient les noms, les e-mails et les adresses, ce qui suffit pour un e-mail de remerciement ou de « revenez nous voir ». Avant d'envoyer quoi que ce soit, vérifiez qui a accepté de recevoir vos messages :

- L'export du **rapport du moteur de réservation** comporte une colonne **GDPR consent**. Little Hotelier indique qu'elle est remplie quand le client a consenti et vide quand il ne l'a pas fait ([source](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports)).
- Si vous utilisez Guest Engagement, **Guest engagement → Guests → Mailchimp export** envoie les clients vers une liste Mailchimp. Tous les clients sont exportés « regardless of GDPR consent status » (quel que soit leur statut de consentement RGPD), avec le statut d'opt-in indiqué : filtrez donc dessus ([source](https://help-platform.littlehotelier.com/en/articles/8051434-connect-guest-engagement-to-mailchimp)).

Les règles de prospection varient selon les pays. N'écrivez qu'aux clients qui ont donné leur accord, sauf si un conseiller vous a confirmé qu'une autre base légale s'applique.

## La méthode rapide : des exports automatiques avec une API

Little Hotelier n'a pas de clé API pour vos réservations (les détails sont dans [Little Hotelier a-t-il une API ?](/blog/little-hotelier-api)). Hotelier Tools, un tableau de bord indépendant, se connecte avec vos propres identifiants Little Hotelier et vous donne une API REST et un serveur MCP pour les assistants IA. Il n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux, et il est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

::callout{type="warning" title="Une API ne peut pas démasquer les données"}
Hotelier Tools lit ce que Little Hotelier détient encore. Via l'API aussi, les réservations dont le départ remonte à plus de 180 jours reviennent masquées. Automatisez l'export dès maintenant pour qu'il enregistre chaque mois tant que les données sont complètes.
::

Créez d'abord une clé : **Developer → API & MCP → API Keys** (`/developer/api-keys`), saisissez un nom, appuyez sur **Generate key** et copiez-la. La page ne l'affiche qu'une seule fois.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Page API keys juste après la génération d'une clé nommée Blog integration : le formulaire Generate a new key, un encadré vert Key generated indiquant Copy this key now, it will not be shown again, avec la clé masquée et un bouton de copie, et la nouvelle clé listée sous Active keys avec Revoke" caption="Une clé par usage : donnez-lui le nom de la feuille ou du script qui la contiendra, et copiez-la pendant qu'elle est affichée." path="/developer/api-keys"}
::

### Sans code : lancer l'export depuis le tableau de bord

1. Ouvrez **LH Methods** (`/methods`) et choisissez `fetchReservationsCSV`.
2. Remplissez `dateFrom` et `dateTo` (par exemple `2026-09-01` et `2026-09-30`).
3. Exécutez la méthode. Elle récupère vos réservations au format CSV, que vous pouvez coller dans une feuille.

::screenshot{src="/images/blog/demo/en/little-hotelier-methods.webp" alt="Page des méthodes Little Hotelier dans Hotelier Tools avec une carte par méthode, comme getReservations, updateReservation, fetchReservationsCSV (Fetches reservations as a CSV file, 3 parameters), generateInvoice et getInvoices" caption="Choisissez fetchReservationsCSV dans LH Methods pour lancer l'export CSV des réservations depuis votre navigateur, sans code." path="/methods"}
::

### Google Sheets, actualisé chaque mois

Ce script Apps Script ajoute un onglet avec les réservations du mois dernier (par date d'arrivée) à chaque exécution.

1. Dans un nouveau Google Sheet, ouvrez **Extensions → Apps Script**.
2. Dans **Project Settings**, ajoutez une propriété de script nommée `HT_API_KEY` avec votre clé `htk_…`. Ainsi, la clé reste hors du code.
3. Collez ce code et enregistrez :

```js [Code.gs]
function importLastMonth() {
  const key = PropertiesService.getScriptProperties().getProperty('HT_API_KEY');
  const tz = Session.getScriptTimeZone();
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const end = new Date(now.getFullYear(), now.getMonth(), 0);
  const day = d => Utilities.formatDate(d, tz, 'yyyy-MM-dd');

  const url = 'https://dashboard.hotelier.tools/api/v1/reservations'
    + '?startDate=' + day(start) + '&endDate=' + day(end) + '&limit=100';
  const res = UrlFetchApp.fetch(url, { headers: { Authorization: 'Bearer ' + key } });
  const rows = JSON.parse(res.getContentText()).data || [];
  if (!rows.length) return;

  const headers = Object.keys(rows[0]);
  const values = rows.map(r => headers.map(h =>
    r[h] !== null && typeof r[h] === 'object' ? JSON.stringify(r[h]) : r[h]));

  const ss = SpreadsheetApp.getActive();
  const name = Utilities.formatDate(start, tz, 'yyyy-MM');
  const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
}
```

4. Cliquez sur **Run** une fois et autorisez l'accès quand Google vous le demande.
5. Pour le programmer, ouvrez **Triggers → Add Trigger**, choisissez `importLastMonth`, source d'événement **Time-driven**, et un **Month timer** le 1er du mois ([guide de Google](https://developers.google.com/apps-script/guides/triggers/installable)).

L'API renvoie jusqu'à 100 réservations par appel. Si un mois remplit les 100 lignes, découpez-le en deux moitiés. Toute personne qui peut modifier le script peut lire la clé : partagez donc la feuille avec précaution, et révoquez la clé sur `/developer/api-keys` en cas de fuite.

### Demander à un assistant IA de construire le tableau

Si vous avez connecté Claude ou ChatGPT à Hotelier Tools (voir [connecter Claude à Little Hotelier](/blog/connect-claude-to-little-hotelier)), demandez avec des mots simples :

::prompt{label="Claude"}
Avec Hotelier Tools, liste toutes les réservations dont le départ a eu lieu en septembre 2026 sous forme de tableau : référence de réservation, nom du client, e-mail, arrivée, départ, nuits, canal et total. Donne-moi ensuite le même tableau au format CSV.
::

L'assistant lit vos réservations via le serveur MCP et renvoie le tableau. N'oubliez pas que ce qu'il lit (noms, e-mails, montants) fait partie de votre conversation avec ce fournisseur d'IA.

::demo-cta{path="/methods"}
::

## Résumé

- **À la main :** **Reservations → Search → Export** donne un CSV avec les noms, les e-mails et les adresses des clients, mais sans numéros de téléphone.
- **Échéance :** les données des clients sont masquées 180 jours après le départ : exportez donc chaque mois.
- **Accents :** importez avec **Données → À partir d'un fichier texte/CSV** et l'UTF-8 dans Excel.
- **Automatique :** un déclencheur Google Sheets avec l'API Hotelier Tools, ou une demande à votre assistant IA. Plus de détails sur la [page de la fonctionnalité API & MCP](/tools/bot/api-mcp).
