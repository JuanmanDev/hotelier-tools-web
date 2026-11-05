---
title: "Un calendrier des réservations plus rapide pour Little Hotelier : planning, prix et nouvelles réservations"
seoTitle: "Calendrier des réservations plus rapide pour Little Hotelier"
description: "Le calendrier de Little Hotelier et comment y créer une réservation, puis un planning avec les prix par type de chambre et une réservation plus rapide."
date: 2026-10-24
category: operations
tags: [calendrier, planning, réservations, réception, little hotelier]
keywords: [calendrier little hotelier, little hotelier créer une réservation, planning des chambres little hotelier, planning hôtel tape chart, little hotelier calendrier avec prix, little hotelier réservation manuelle, calendrier de réservation petit hôtel, little hotelier calendrier sur mobile]
feature: dashboard
demoPath: /reservations/calendar
cover: /images/blog/demo/en/reservation-calendar-prices.webp
coverAlt: "Calendrier des réservations de Hotelier Tools sur 14 nuits à partir du 4 novembre 2026 : types de chambre Doble Estándar, Doble Superior, Individual et Familiar 4 pax, chacun avec une ligne Lowest rate de prix par nuit comme 63,47 € et 74,89 €, des barres de réservation avec les icônes du canal, des clients et du paiement, une fermeture hachurée sur la chambre 104, une ligne No room yet, et la légende des statuts, des origines et des repères de paiement"
faq:
  - q: "Comment créer une réservation dans Little Hotelier ?"
    a: "Dans Calendar, cliquez sur +Reservation, ou dans Reservations, sur Create reservation. Choisissez les dates, le type de chambre, le tarif, le numéro de chambre et le nombre de personnes, remplissez le contact principal et cliquez sur Save. Les réservations manuelles n'envoient pas d'e-mail de confirmation : appuyez sur Email après l'enregistrement."
  - q: "Peut-on voir les prix dans le calendrier de Little Hotelier ?"
    a: "Pas dans le calendrier de Little Hotelier, qui montre les réservations et l'état des paiements. Les tarifs se trouvent dans la grille d'inventaire. Le calendrier de Hotelier Tools peut ajouter une ligne par type de chambre avec son tarif actuel le plus bas pour chaque nuit, et un userscript gratuit ajoute les prix au calendrier de Little Hotelier."
  - q: "Combien de jours le calendrier de Little Hotelier peut-il afficher ?"
    a: "14 ou 28 jours, au choix dans une liste déroulante. Le calendrier de Hotelier Tools affiche de 1 à 92 nuits, avec des choix rapides de 7, 14, 30, 60 et 90."
  - q: "Peut-on déplacer une réservation dans une autre chambre depuis Hotelier Tools ?"
    a: "Non. Le calendrier de Hotelier Tools ne fait que lire. Déplacer un séjour, changer ses dates ou l'annuler se fait dans Little Hotelier, que vous ouvrez avec le lien Open in Little Hotelier de la réservation."
  - q: "Une réservation créée dans Hotelier Tools envoie-t-elle un e-mail au client ?"
    a: "Non. Elle crée la réservation dans Little Hotelier sans paiement enregistré ni e-mail envoyé, comme une réservation manuelle dans Little Hotelier. Envoyez la confirmation depuis Little Hotelier et enregistrez les éventuels paiements sur la réservation."
  - q: "Hotelier Tools fait-il partie de Little Hotelier ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il lit et crée des réservations avec les identifiants Little Hotelier de votre hôtel."
---

Le calendrier de Little Hotelier affiche 14 ou 28 jours de réservations, et on y crée une réservation avec **+Reservation**. Il n'affiche pas les prix et ne permet pas d'adapter le planning. Hotelier Tools ajoute un second calendrier, lu dans Little Hotelier, avec 1 à 92 nuits, le tarif le plus bas par type de chambre pour chaque nuit, des icônes de canal et de paiement, et des vues enregistrées. Il a aussi une page **New reservation** (nouvelle réservation) qui calcule le prix du séjour, vérifie la disponibilité et les doublons, puis enregistre la réservation dans Little Hotelier.

Les fonctionnalités de Little Hotelier ci-dessous ont été vérifiées dans ses centres d'aide en novembre 2026.

## Comment fonctionne le calendrier de Little Hotelier ?

Sur la nouvelle plateforme ([Getting started with Calendar](https://help-platform.littlehotelier.com/en/articles/10397723-getting-started-with-calendar)) :

- **Durée affichée :** une liste déroulante bascule entre **14 et 28 jours**. **View today** revient à aujourd'hui, et un sélecteur de date permet d'avancer.
- **Navigation :** dans la vue sur 14 jours, `<` avance d'un jour, `<<` de sept et `<<<` de quatorze. Dans la vue sur 28 jours, `<<<` avance de 28.
- **Couleurs :** orange ou jaune pour confirmé, vert pour arrivé, gris pour parti, bleu clair pour non attribué, rouge foncé pour une fermeture de chambre, et une barre estompée pour un paiement incomplet. Une barre sur le bord gauche indique payé (vert) ou impayé (rouge).
- **Glisser-déposer :** faites glisser une réservation vers une autre chambre, un autre type de chambre ou d'autres dates, ou tirez son extrémité pour la prolonger. Les réservations des canaux ne peuvent pas être prolongées ainsi.
- **Ligne Unallocated :** les réservations confirmées sans chambre physique. Faites-les glisser sur une chambre libre.

La version classique fonctionne de la même façon ([Overview of the front desk calendar](https://helpcentre.littlehotelier.com/en/articles/8673713-overview-of-the-front-desk-calendar)).

## Comment créer une réservation dans Little Hotelier

Les réservations manuelles servent aux clients de passage, aux demandes par téléphone et par e-mail, et aux agences de voyages ([Create a manual reservation](https://help-platform.littlehotelier.com/en/articles/13933574-create-a-manual-reservation-in-little-hotelier)) :

1. Actualisez la page et cliquez sur **View Today**, pour voir la disponibilité à jour.
2. Dans **Calendar**, cliquez sur **+Reservation** (ou faites glisser sur les nuits d'une chambre). Dans **Reservations**, cliquez sur **Create reservation**.
3. Choisissez les dates d'arrivée et de départ, un **Room type** et un **Room rate**. Pour un prix spécial, laissez le tarif vide et saisissez le total dans le champ **Room**.
4. Choisissez un **Room number**. S'il reste vide, la réservation attend dans la ligne **Unallocated**.
5. Saisissez **Adults**, **Children** et **Infants**, et une **Discount** s'il y en a une.
6. Remplissez le **Primary contact** et d'éventuels **Guest comments**, puis cliquez sur **Save**.

Trois points qu'on oublie souvent :

- **Aucun e-mail de confirmation n'est envoyé** pour une réservation manuelle. Appuyez sur **Email** après l'enregistrement.
- **Plusieurs chambres :** **+Add another room** les regroupe sur une seule facture. Elles ont les mêmes dates.
- **Paiements :** **Record payment** pour les espèces ou un terminal externe, ou l'onglet **Payments** pour débiter une carte.

Les comptes classiques suivent [Create a reservation](https://helpcentre.littlehotelier.com/en/articles/8673932-create-a-reservation).

## Pourquoi utiliser un second calendrier ?

Le calendrier de Little Hotelier, c'est là que vous déplacez les réservations. Un second calendrier aide quand vous consultez surtout : les prix à côté des chambres quand un client appelle, plus de 28 jours à la fois, votre propre présentation, et un planning lisible sur un téléphone.

Si vous avez seulement besoin des prix dans Little Hotelier, le userscript gratuit [Prices Display](/tools/ui/prices-display) les ajoute à son calendrier.

## La méthode rapide : le poste de réservation de Hotelier Tools

Le poste de réservation tient en trois pages sous **Reservations** : **Calendar** (`/reservations/calendar`), **Reservations** (`/reservations`) et la page de la réservation (`/reservations/:id`). Chacune lit Little Hotelier une fois et garde les données quelques minutes, si bien que la navigation est rapide. **Refresh** relit les données.

### Le calendrier (planning des chambres)

1. Ouvrez **Reservations > Calendar**. Il commence une nuit avant aujourd'hui, sur 14 nuits, pour que les départs du jour soient à l'écran.
2. Avancez d'une nuit, d'une semaine ou de toute la fenêtre avec les flèches, ou appuyez sur **Today**. Saisissez à côté de la date n'importe quel nombre de nuits entre 1 et 92.
3. Cliquez sur une barre pour ouvrir la réservation dans un panneau à côté du planning. Le planning reste où il était.

Chaque type de chambre forme une bande avec ses chambres occupées nuit par nuit. Les réservations sans chambre se trouvent dans une ligne **No room yet**, les fermetures sont hachurées, et une chambre vendue deux fois pour la même nuit est entourée de rouge. Des lignes au-dessus du planning peuvent compter par nuit les chambres **Occupied**, les **Arrivals** et les **Departures**.

::screenshot{src="/images/blog/demo/en/reservation-calendar-prices.webp" alt="Calendrier des réservations à partir du 4 novembre 2026, sur 14 nuits : le nombre de chambres Occupied par nuit, les bandes des types de chambre avec une ligne Lowest rate (de 63,47 € à 128,88 €, certains prix barrés, un repère d'arrêt des ventes), des barres comme Larsen, Ingrid arrivée avec une icône du site web et un repère de paiement partiel, Marino, Onur confirmé via Hostelworld, une fermeture hachurée sur la chambre 104, et la légende des couleurs de statut, des origines, du paiement, des clients et des prix" caption="Le tarif actuel le plus bas de chaque type de chambre s'affiche juste au-dessus de ses chambres, nuit par nuit." path="/reservations/calendar"}
::

### Des réglages pour l'adapter à vous

Ouvrez **Settings** sur le calendrier :

| Réglage | Options |
|---|---|
| **Nights shown** | 7, 14, 30, 60 ou 90, ou **Any number of nights** (1 à 92) |
| **Minimum night width** | **Narrow**, **Medium**, **Wide**, ou n'importe quelle largeur en pixels. Les nuits s'élargissent pour remplir l'écran quand elles tiennent toutes |
| **Room type after the number** | **Full name**, **Abbreviated** ou **Hidden** |
| **Room order** | **As in Little Hotelier**, **By room number**, **By room type, then number**, ou **My own order** (faites glisser les chambres) |
| **What a booking shows** | Nom du client, référence, canal, personnes, solde dû, nuits |
| **Colour bookings by** | **Status**, **Channel** ou **Payment** |
| **Icons in a booking** | **Where it came from** (Booking.com, Expedia, Airbnb, Hostelworld, votre site web, la réception), **Paid or not**, et **Guests** en une seule icône ou adultes, enfants et bébés séparés |
| **Show prices** | Le tarif actuel le plus bas de chaque type de chambre par nuit |

**Show prices** lit l'inventaire de Little Hotelier, une lecture par tranche de deux semaines affichée, et retient le tarif le plus bas parmi tous les plans tarifaires, non remboursables compris. Une nuit complète affiche le prix barré et un arrêt des ventes affiche un repère de fermeture. L'option est proposée aux personnes qui peuvent modifier les réservations, et reste désactivée tant que vous ne l'activez pas.

Quand le planning vous convient, ouvrez **Saved views** et choisissez **Save as new view…**. Donnez-lui un nom (« Réception »), cochez **Share with the team** ou **Open by default**. Un lien garde aussi les réglages : `/reservations/calendar?origin=1&paid=1&guests=split&prices=1&color=payment`.

### Sur un téléphone

Sur un téléphone, le calendrier s'ouvre en **List of days** (liste de jours) : les arrivées, les départs et les chambres fermées de chaque jour, avec le tarif le plus bas de chaque type de chambre. Le sélecteur **Layout** en haut passe en **Full calendar**, le planning complet qui défile sur le côté, et votre choix est mémorisé dans ce navigateur. Les étapes, les réglages et la légende passent dans le menu **More**.

::screenshot{src="/images/blog/demo/en/reservation-calendar-mobile.webp" alt="Calendrier sur un téléphone en liste de jours à partir du mercredi 4 novembre : jeudi 5 novembre marqué Today avec 2 chambres occupées, le tarif le plus bas de chaque type de chambre (Doble Estándar 63,47 €, Doble Superior 84,13 €, Individual 46,49 €, Familiar 4 pax 109,22 €), et deux départs, Okafor, Camila de la chambre 105 et Alvarez, Greta de la chambre 106, tous deux Checked out ; vendredi 6 novembre avec ses tarifs et deux arrivées" caption="Sur un téléphone, le calendrier devient une liste de jours. Passez Layout sur Full calendar pour voir tout le planning." path="/reservations/calendar" mobile}
::

### Le tableau des réservations

**Reservations** (`/reservations`) liste toutes les réservations d'une période : **Today**, **Next 7 nights**, **Next 30 nights**, **This month** ou **Choose dates**, par **Stay**, **Arrival**, **Departure** ou **Booking date**. Filtrez par statut, canal et type de chambre, cochez **Owes money** (doit de l'argent) ou **No room yet** (pas encore de chambre), choisissez parmi 30 colonnes, et utilisez **Export CSV** pour exporter ce qui est à l'écran.

### Tout sur une réservation

Ouvrez une réservation dans le panneau latéral, ou sur sa page complète :

- **Overview :** séjour, chambres, clients, canal, **Total**, **Received**, **Outstanding**, et les indicateurs de Little Hotelier comme **Confirmation sent** ou **Card on file**.
- **Sections :** Guests, Rooms and rates (le tarif de chaque nuit), Extras and taxes, Payments, Invoices, Notes, Channel and conversations, Check-in, History et **All other fields**. Affichez-les sur une seule page ou en onglets.
- **Actions :** **Confirm**, **Check in**, **Check out** (avec annulation possible), modifier les notes internes, et modifier la facturation et l'adresse du client principal (société, numéro fiscal, type de document, adresse). Chaque action est d'abord confirmée et envoyée une seule fois.
- **Paiements :** remboursements, liens de paiement et factures depuis la même page.

::screenshot{src="/images/blog/demo/en/reservation-detail.webp" alt="Page de la réservation d'Emma Berg, Confirmed, du samedi 7 au jeudi 12 novembre 2026, 5 nuits, BBN-DEMO100408 : boutons Check in et Open in Little Hotelier, onglets de sections d'Overview à All other fields (43), cartes Stay, Rooms 201 Doble Superior, Guests 1 adulte et Channel Extranet, Total 489,69 €, Received 146,91 € et Outstanding 342,78 €, indicateurs comme Payment: Partly paid et Confirmation sent, et le contact Booked under" caption="Tous les champs que Little Hotelier conserve sur une réservation, sur une seule page, avec l'arrivée à un clic." path="/reservations"}
::

Pour une réservation venant de votre propre site web, la page peut afficher l'**Original booking** à côté de la version actuelle de Little Hotelier. Appuyez sur **Read the original booking** et elle liste les différences : le séjour a été déplacé à d'autres dates, la chambre est facturée autrement, la remise de réservation directe a disparu, ou l'acompte n'a pas été recalculé après un déplacement. De quoi expliquer un solde qu'un client dit ne pas devoir.

### Créer une réservation depuis Hotelier Tools

**New reservation** (`/reservations/new`) est le chemin rapide pour une réservation par téléphone ou un client de passage :

1. **Séjour.** Choisissez l'arrivée et le départ sur un calendrier dont les jours affichent les chambres restantes, le prix le plus bas, les arrêts des ventes, les fermetures à l'arrivée et les durées minimales de séjour.
2. **Chambres.** Le tableau des tarifs s'ouvre avec chaque type de chambre et chaque plan tarifaire chiffrés pour le séjour, nuit par nuit. Cliquez sur un prix pour choisir cette chambre et ce tarif, ou sur **Custom rate** pour saisir un prix par nuit. Les limites de personnes de chaque chambre dans Little Hotelier plafonnent les champs **Adults**, **Children** et **Infants**, et les personnes au-delà des places incluses affichent le supplément.
3. **Comparer.** En dessous, **To compare** montre le même séjour en **Direct booking** sur votre site web (avec votre code promo), sur **Booking.com** avec une remise Genius type, ce que suggèrent les recommandations de prix, et **The market these nights** (le marché ces nuits-là) d'après des établissements comparables.
4. **Client et adresse.** Choisissez d'abord le pays. Un code postal remplit la ville et la province, et une ville propose ses codes postaux.
5. Appuyez sur **Check price and availability**. Le prix de chaque nuit est calculé, la disponibilité des chambres confirmée, et le système cherche si le même client a déjà réservé ces dates. Rien n'est écrit.
6. Appuyez sur **Create reservation**. Le bouton n'apparaît que pour une vérification portant exactement sur le formulaire affiché.

::screenshot{src="/images/blog/demo/en/reservation-new-rates.webp" alt="New reservation du jeudi 12 au samedi 14 novembre avec le tableau Rates et la comparaison ouverts pour 2 personnes : Doble Estándar avec 3 chambres restantes, Tarifa Flexible sélectionnée à 153,73 € pour le séjour (70,52 € et 83,21 € par nuit) et No reembolsable à 138,36 €, Doble Superior à 203,79 € et 183,41 €, Individual marquée comme n'acceptant pas ce nombre de personnes, et une ligne Custom rate sous chaque type de chambre" caption="Chaque type de chambre et chaque plan tarifaire chiffrés pour le séjour. Cliquez sur un prix pour le choisir." path="/reservations/new"}
::

::screenshot{src="/images/blog/demo/en/reservation-new-compare.webp" alt="La bande To compare du tableau des tarifs : Suite Ático en Direct booking avec le code DEMOSOL −10 % à 329,81 € au lieu de 366,46 €, Booking.com avec −10 % Genius non lu, Recommended à 325,09 €, puis The market these nights avec six établissements, de Albergue Prueba Playa à 117,02 € à Hotel Muestra Rambla à 211,56 €, et Hotel Demo Sol (You) à 176,79 €" caption="Le même séjour sur votre site, sur Booking.com et dans les établissements voisins, avant d'annoncer un prix." path="/reservations/new"}
::

Une nuit complète ou un doublon probable est refusé avec sa propre case à cocher (**Book it anyway…** ou **It is a second stay — book it anyway**) : cochez-la seulement si c'est voulu. La réservation est envoyée une seule fois. Si la réponse se perd, la page ne propose plus **Create** avant une nouvelle vérification, qui retrouve la réservation comme doublon si elle a bien été créée.

Une fois créée, la réservation apparaît sur le calendrier et n'est plus en vente sur aucun canal.

::demo-cta{path="/reservations/calendar"}
::

### Les limites, en toute honnêteté

- **Le calendrier ne fait que lire.** Déplacer un séjour dans une autre chambre, changer les dates, annuler ou marquer une non-présentation se fait dans Little Hotelier. Chaque réservation a un lien **Open in Little Hotelier**. Le glisser-déposer des barres n'est pas proposé.
- **New reservation sert aux séjours simples.** Pour un acompte, des extras ou une chambre précise, utilisez le formulaire de Little Hotelier, vers lequel la page renvoie en premier. Jusqu'à 30 nuits et 10 chambres par réservation.
- **Pas de paiement, pas d'e-mail.** Une réservation créée ici n'enregistre aucun paiement et n'envoie pas d'e-mail au client.
- **Les chiffres du site web et de Booking.com servent à comparer.** La réservation utilise le tarif que vous choisissez.

Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027. Plus de détails sur la [page du tableau de bord](/tools/bot/dashboard).

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il lit et crée des réservations avec les identifiants Little Hotelier de votre hôtel.
::

À lire aussi : [les listes du jour à imprimer](/blog/little-hotelier-daily-lists), [les codes promo dans Little Hotelier](/blog/little-hotelier-promo-codes), [astuces Little Hotelier](/blog/little-hotelier-tips).

## Résumé

- **Dans Little Hotelier :** le calendrier affiche 14 ou 28 jours. Créez une réservation avec **+Reservation**, puis appuyez sur **Email** pour envoyer la confirmation.
- **Un second calendrier** dans Hotelier Tools affiche de 1 à 92 nuits, le tarif le plus bas par type de chambre, des icônes de canal et de paiement, et des vues enregistrées pour l'équipe.
- **Sur un téléphone :** une liste de jours, ou le planning complet.
- **New reservation :** choisissez un tarif chiffré, comparez-le avec votre site web et Booking.com, vérifiez, puis créez dans Little Hotelier.
- **Les modifications** de chambres, de dates et les annulations restent dans Little Hotelier.
