---
title: "CTA, CTD, séjour minimum et stop sell : que signifient-ils dans Little Hotelier ?"
seoTitle: "CTA, CTD, séjour minimum et stop sell : définitions"
description: "CTA bloque les arrivées, CTD les départs, le séjour minimum fixe la durée minimale, stop sell ferme la vente. Définitions et réglage dans Little Hotelier."
date: 2026-10-03
category: pricing
tags: [restrictions, cta, ctd, stop sell, little hotelier]
keywords: [CTA CTD hôtellerie, little hotelier cta ctd, fermé à l'arrivée définition, stop sell hôtel définition, siteminder stop sell, durée minimum de séjour hôtel, séjour minimum hôtel]
feature: dynamic-pricing
demoPath: /pricing/settings/restrictions
cover: /images/blog/demo/en/price-recommendations.webp
coverAlt: "Recommandations de prix dans Hotelier Tools pour la chambre Doble Estándar, du 3 au 16 octobre 2026 : prix actuel et recommandé par nuit, une colonne CTA / CTD avec des boutons A et D, le séjour minimum, une colonne Channel et un bouton Apply to Little Hotelier"
faq:
  - q: "Quelle différence entre fermé à l'arrivée et stop sell ?"
    a: "Le fermé à l'arrivée (CTA) bloque seulement les nouvelles arrivées à cette date : un client arrivé la veille peut toujours rester cette nuit-là. Le stop sell ferme le tarif à la vente à cette date : aucune nouvelle réservation ne peut inclure cette nuit."
  - q: "Le stop sell est-il identique à une disponibilité réglée sur 0 ?"
    a: "Pour le client, le résultat semble identique : la nuit n'est plus réservable. De votre côté, c'est différent. Un stop sell conserve votre nombre de chambres, il suffit donc d'un clic pour rouvrir. Une fermeture de chambre dans Little Hotelier réduit la disponibilité envoyée aux canaux et n'applique pas de stop sell."
  - q: "Quand un petit hôtel doit-il utiliser le fermé à l'arrivée ?"
    a: "Pour protéger les séjours plus longs : le samedi d'un week-end chargé, pour que les clients arrivent le vendredi, ou les nuits d'événement quand vous préférez vendre des séjours complets. Revoyez-le à l'approche de la date et levez-le si la nuit est encore vide."
  - q: "Pourquoi ma restriction n'apparaît-elle pas sur Booking.com ou Airbnb ?"
    a: "Tous les tarifs de canal n'acceptent pas toutes les restrictions. Dans la grille d'inventaire de Little Hotelier, un tiret dans une cellule de canal signifie que ce canal ne prend pas en charge cette mise à jour, et les mises à jour au-delà de la fenêtre de réservation maximale d'un canal ne se synchronisent pas. Consultez la configuration du tarif du canal dans Channel Manager pour voir quels types de mise à jour il accepte."
  - q: "Hotelier Tools modifie-t-il les restrictions tout seul ?"
    a: "Non. Les règles de restriction sont proposées nuit par nuit sur la page Recommendations, et rien n'est écrit tant que vous ne validez pas. Le pilote automatique n'écrit des séjours minimum que si vous l'autorisez séparément, et il ne touche jamais au stop sell des canaux. Hotelier Tools est indépendant et n'est ni affilié à SiteMinder ou à Little Hotelier, ni approuvé par eux."
---

Dans Little Hotelier, **CTA** (closed to arrival, fermé à l'arrivée) signifie que les clients ne peuvent pas arriver à cette date, et **CTD** (closed to departure, fermé au départ) qu'ils ne peuvent pas partir à cette date. Le **séjour minimum** est le nombre de nuits minimal pour lequel une chambre doit être réservée. Un **stop sell** ferme un tarif à la vente à une date tout en laissant vos chambres dans l'inventaire. Vous réglez tout cela par tarif de chambre dans **Front Desk > Inventory**, date par date ou avec **Bulk Update**.

| Terme | Signification | Usage typique |
|---|---|---|
| **CTA** (Closed to Arrival) | « Les clients ne peuvent pas arriver à cette date. » Les clients arrivés plus tôt restent cette nuit-là. | Faire arriver les clients le vendredi lors d'un week-end chargé. |
| **CTD** (Closed to Departure) | « Les clients ne peuvent pas partir à cette date. » Les clients peuvent rester cette nuit-là mais pas quitter l'hôtel ce jour-là. | Garder les week-ends entiers. |
| **Min stay** (min LOS, séjour minimum) | « Nombre minimal ou maximal de nuits pour lequel une chambre doit être réservée » (Min/Max Stay). | Deux nuits les week-ends d'événement. |
| **Max stay** | La réservation la plus longue acceptée. | Rare dans les petits hôtels. |
| **Stop sell** | Le tarif est fermé à la vente à cette date, sur tous les canaux ou seulement certains. S'appelle **Close Channels** dans Front Desk et **Stop Sell** dans Channel Manager. | Fermer une date rapidement : travaux, nuits bloquées pour le propriétaire, canal à mettre en pause. |

Les définitions citées viennent du centre d'aide de Little Hotelier (en anglais) : [gérer les tarifs, disponibilités et restrictions dans la grille d'inventaire](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid) (mis à jour en août 2026).

## CTA ou CTD : quelle différence ?

Les deux restrictions portent sur le **jour d'arrivée ou de départ**, pas sur les nuits intermédiaires.

Prenons un week-end de festival : les nuits du vendredi et du samedi sont très demandées, le dimanche est calme.

- **CTA le samedi** : personne ne peut arriver le samedi. Un client qui ne veut que la nuit du samedi ne peut pas la réserver, mais un client qui arrive le vendredi pour deux nuits le peut. Vous vendez tout le week-end au lieu d'un samedi isolé qui laisse le vendredi vide.
- **CTD le samedi** : personne ne peut partir le samedi. Un client qui arrive le vendredi doit rester au moins jusqu'au dimanche.

Aucune de ces restrictions n'affecte les clients qui ont déjà une réservation. Elles déterminent seulement quelles nouvelles réservations sont acceptées. Dans Little Hotelier, CTA et CTD s'appliquent à tous vos canaux, y compris votre propre moteur de réservation ([guide vidéo CTA et CTD](https://helpcentre.littlehotelier.com/en/articles/8674081-enable-cta-and-ctd-restrictions-video)).

## Séjour minimum : à l'arrivée ou sur toute la durée ?

Un séjour minimum (min LOS, minimum length of stay) fixe le plus petit nombre de nuits d'une réservation. Les canaux l'appliquent de deux façons :

- **À l'arrivée** : contrôlé par rapport à la date d'arrivée. Un minimum de 2 le vendredi signifie que les arrivées du vendredi doivent réserver au moins 2 nuits ; une arrivée le samedi peut encore réserver une seule nuit.
- **Sur toute la durée (« through »)** : contrôlé pour chaque nuit du séjour. Un minimum de 2 le samedi signifie que toute réservation incluant la nuit du samedi doit durer au moins 2 nuits, quel que soit son début.

La grille de Little Hotelier propose simplement **Min Stay** et **Max Stay**. La façon dont un canal les interprète est un réglage du canal. Little Hotelier envoie par défaut les séjours minimum et maximum à Booking.com en mode « through » ([connexion à Booking.com](https://helpcentre.littlehotelier.com/en/articles/13830297-connect-to-booking-com)). Si votre compte Booking.com utilise « Min. stay from arrival », réglez **Use Length of Stay on Arrival** sur **Yes** sous **My Apps > Channel Manager > Channels > Booking.com > Configure** ([erreurs de mapping des canaux](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshoot-channel-mapping-and-disabled-rate-errors)). Si un séjour minimum est supérieur au séjour maximum, le tarif est désactivé automatiquement.

## Qu'est-ce qu'un stop sell, et en quoi est-ce différent ?

Un stop sell ferme un tarif à la vente à une date tout en conservant votre nombre de chambres. Little Hotelier s'appuie sur le channel manager de SiteMinder, et une nuit peut avoir un tarif tout à fait valable et ne se vendre nulle part parce qu'elle est en stop sell.

Little Hotelier propose deux façons de le faire, et vous ne pouvez en utiliser qu'une à la fois :

- **Close Channels** dans **Front Desk > Inventory** arrête la vente « sur tous les canaux connectés (y compris votre moteur de réservation) » pour les tarifs de chambre et les dates sélectionnés.
- **Stop Sell** dans **Channel Manager** ferme des canaux précis. Allez dans **My Apps > Channel Manager > Inventory**, cliquez sur le bouton bleu **Channels** à côté du tarif, trouvez le tarif du canal et choisissez **Stop Sell**. Pour une période, utilisez **Bulk Update** et réglez **Stop Sell** sur **On** ([stop sells pour des canaux précis](https://helpcentre.littlehotelier.com/en/articles/8673615-add-or-remove-stop-sells-for-specific-channels)).

Les stop sells de Channel Manager ne fonctionnent pas tant que **Close Channels** est coché dans Front Desk pour les mêmes dates.

| | Stop sell | Fermeture de chambre (moins de disponibilité) | CTA |
|---|---|---|---|
| Nouvelles réservations incluant cette nuit | Bloquées | Bloquées dès que la disponibilité atteint 0 | Autorisées si elles arrivent plus tôt |
| Votre nombre de chambres | Inchangé | Réduit pour ce type de chambre | Inchangé |
| Utile pour | Fermer vite, par canal | Chambres vraiment hors service | Orienter la durée des séjours |

Une **Room Closure** (**Front Desk > Calendar**) « réduit la disponibilité envoyée aux canaux pour le type de chambre fermé. Elle n'applique pas de stop sell » ([fermetures de chambres](https://helpcentre.littlehotelier.com/en/articles/8674039-create-and-manage-room-closures)).

## Comment régler CTA, CTD et séjour minimum dans Little Hotelier

### Une date à la fois

1. Allez dans **Front Desk > Inventory**.
2. Choisissez une vue qui affiche les champs dont vous avez besoin.
3. Placez-vous sur les dates et modifiez les cellules du tarif de chambre : Min Stay, Max Stay, CTA, CTD.
4. Cliquez sur **Save**.

### Une période avec Bulk Update

1. Dans **Front Desk > Inventory**, cliquez sur **Bulk Update**.
2. **When?** : choisissez la période.
3. **Which days?** : choisissez les jours de la semaine, par exemple seulement les samedis.
4. **Which room rates?** : choisissez les tarifs.
5. **What changes?** : réglez la restriction, par exemple un séjour minimum de 2 ou CTA activé.
6. Cliquez sur **Update**.

Bon à savoir :

- Les restrictions se règlent **par tarif de chambre**, pas par type de chambre.
- Les tarifs dérivés sont grisés dans la grille. Modifiez le tarif dont ils dérivent.
- Front Desk accepte par défaut les mises à jour jusqu'à environ 716 jours à l'avance.

## Comment les restrictions arrivent sur Booking.com, Expedia et Airbnb

Little Hotelier envoie vos restrictions à chaque canal connecté via le channel manager, avec quelques limites ([grille d'inventaire](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), [période de mise à jour des canaux](https://helpcentre.littlehotelier.com/en/articles/8673945-channel-manager-manage-update-period)) :

- **Tous les tarifs de canal n'acceptent pas toutes les restrictions.** Un tiret (-) dans une cellule de canal signifie que ce canal ne prend pas en charge ce type de mise à jour. Dans Channel Manager, l'écran **Configure** d'un tarif de canal indique quels types de mise à jour il accepte.
- **Les fenêtres de réservation diffèrent.** Channel Manager envoie par défaut les mises à jour 400 jours à l'avance (jusqu'à 750). Les mises à jour au-delà du maximum d'un canal ne se synchronisent pas ; pour Booking.com, ce maximum est de 545 jours.
- **Expedia** reçoit de Little Hotelier les stop sells au niveau du tarif uniquement. Les stop sells au niveau de la chambre se gèrent dans Expedia Partner Central ([problèmes de stop sell Expedia](https://helpcentre.littlehotelier.com/en/articles/15201269-troubleshoot-expedia-stop-sell-issues)).
- **Airbnb** avec Enhanced Sync reçoit les tarifs, disponibilités et restrictions, mais un champ que vous modifiez dans l'extranet d'Airbnb est ensuite grisé dans Channel Manager ([mapping vers Airbnb](https://helpcentre.littlehotelier.com/en/articles/8693078-map-to-airbnb)).

Après avoir réglé une restriction importante, ouvrez l'extranet du canal et vérifiez une date.

## Quand un petit hôtel doit-il les utiliser ?

- **Week-ends chargés et événements.** Un séjour minimum de deux nuits les nuits d'événement, ou un CTA sur la nuit la plus demandée, permet de vendre des séjours complets plutôt que des nuits isolées qui laissent des trous.
- **Nuits vides isolées.** Une nuit libre seule entre deux nuits pleines ne peut se vendre que comme séjour d'une nuit. Si un séjour minimum la bloque, levez le minimum sur cette nuit à l'approche de la date.
- **À l'approche de la date.** Des restrictions pertinentes un mois avant peuvent bloquer des réservations faciles quelques jours avant. Revoyez-les chaque semaine.
- **Jours où personne ne peut assurer les arrivées.** CTA ces jours-là, si votre règlement intérieur le permet.
- **Fermer vite.** Utilisez un stop sell plutôt qu'un prix de 999 quand vous devez retirer une date de la vente.

## La méthode rapide : règles de restriction et stop sell dans Hotelier Tools

Hotelier Tools se branche sur Little Hotelier avec vos propres identifiants. Au lieu de régler les restrictions date par date, vous rédigez la règle une fois et elle est proposée nuit par nuit, à côté du prix. Les fonctions de tarification sont en **alpha**.

### 1. Rédigez la règle une fois

Ouvrez **Pricing settings → Arrivals, departures & stays** (`/pricing/settings/restrictions`). Vous pouvez fermer les arrivées ou les départs :

- certains jours de la semaine fixes ou à des dates précises
- selon l'occupation ou le nombre de chambres restantes
- seulement lorsque les nuits de part et d'autre sont encore ouvertes

Hotelier Tools détecte le schéma hebdomadaire que vous utilisez déjà dans Little Hotelier et propose de l'adopter. Des **weekend packages** facultatifs fixent un séjour minimum ; ils sont désactivés par défaut et, une fois activés, la valeur par défaut est vendredi et samedi, 2 nuits. Un package ne réduit jamais un séjour minimum plus long fixé à la main. Rien sur cette page n'écrit dans Little Hotelier.

::screenshot{src="/images/blog/demo/en/pricing-settings-arrivals-departures-stays.webp" alt="Page Arrivals, departures & stays dans Hotelier Tools : la règle No arrivals avec Every week et les boutons de jours de Mon à Sun, On these dates, les conditions An event fills the town et The nights either side are still open, Occupancy above et Rooms left at most, puis le début de No departures" caption="Indiquez une seule fois quelles nuits refusent une arrivée ou un départ. Rien sur cette page n'écrit dans Little Hotelier." path="/pricing/settings/restrictions"}
::

### 2. Vérifiez et appliquez nuit par nuit

Sur **Recommendations** (`/price-recommendations`), chaque nuit affiche son état d'arrivée (A) et de départ (D) à côté du prix. Modifiez-les là où vous n'êtes pas d'accord, cochez les nuits et cliquez sur **Apply to Little Hotelier…**. Rien ne change tant que vous ne confirmez pas.

Pour des dates ponctuelles, **Date rules** (`/pricing/settings/dates`) propose une règle « stay » qui fixe uniquement un séjour minimum ou une règle d'arrivée pour ces nuits.

### 3. Vérifiez et réglez le stop sell des canaux

Cliquez sur **Check channel manager** sur la page Recommendations. Hotelier Tools lit l'état des stop sells de SiteMinder avec la même session Little Hotelier, uniquement quand vous cliquez, et une colonne de canal affiche ouvert, fermé ou mixte pour chaque nuit. Choisissez l'état voulu (tout ouvrir, tout fermer, ne rien changer). Il est envoyé **après** la modification de prix dans Little Hotelier, et seulement pour les nuits où cette modification a réussi.

::screenshot{src="/images/blog/demo/en/price-recommendations-apply-dialog.webp" alt="Fenêtre Apply to Little Hotelier pour trois nuits de Doble Estándar (sam. 3 oct., dim. 4 oct., lun. 5 oct.) avec les tarifs actuels et nouveaux et les colonnes Arr et Dep, un avertissement indiquant que les tarifs et restrictions changent immédiatement sans annulation automatique, une option Send me an email, une option Also update sales in the Channel Manager (SiteMinder) et Apply 3 change(s)" caption="Les prix, les changements d'arrivée et de départ et le stop sell SiteMinder sont confirmés dans une seule fenêtre. Rien ne change tant que vous n'appliquez pas." path="/price-recommendations"}
::

Le pilote automatique ne modifie jamais le stop sell, et il n'écrit des séjours minimum que si vous l'autorisez séparément.

::demo-cta{path="/pricing/settings/restrictions"}
::

## Résumé

- **CTA** bloque les arrivées à une date, **CTD** les départs, le **séjour minimum** fixe la réservation la plus courte, et **stop sell** ferme le tarif à la vente en conservant votre nombre de chambres.
- Dans Little Hotelier, réglez-les par tarif de chambre dans **Front Desk > Inventory**, ou avec **Bulk Update** pour une période. Le stop sell par canal se trouve dans Channel Manager.
- Vérifiez quelles restrictions chaque canal accepte, et revoyez-les chaque semaine à l'approche des dates.
- Avec la [tarification dynamique de Hotelier Tools](/tools/bot/dynamic-pricing), vous rédigez la règle une fois, la voyez à côté du prix et réglez le stop sell SiteMinder depuis la même page. Hotelier Tools est gratuit pour tous les hôtels jusqu'au 10 janvier 2027.
- Pour la suite : [tarification dynamique pour les petits hôtels sur Little Hotelier](/blog/dynamic-pricing-little-hotelier) et [astuces et fonctions cachées de Little Hotelier](/blog/little-hotelier-tips).
