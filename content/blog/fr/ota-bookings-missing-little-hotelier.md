---
title: "Réservation Booking.com ou Expedia absente de Little Hotelier : causes, vérifications et comment éviter une surréservation"
seoTitle: "Réservation Booking.com/Expedia absente de Little Hotelier ?"
description: "Pourquoi une réservation OTA n'arrive pas dans Little Hotelier, où voir son statut de livraison, comment protéger la chambre et être alerté à temps."
date: 2026-10-29
category: operations
tags: [booking.com, expedia, channel manager, surréservation, little hotelier, siteminder]
keywords: [réservation booking.com absente little hotelier, réservation expedia pas dans le channel manager, réservation manquante little hotelier, réservation non reçue channel manager, siteminder échec livraison réservation, surréservation channel manager, renvoyer une réservation little hotelier, réservation booking.com non synchronisée, overbooking booking.com que faire]
feature: automated-checks
demoPath: /reservations/calendar
cover: /images/blog/demo/en/ota-missing-calendar-double-booked.webp
coverAlt: "Calendrier des réservations de Hotelier Tools du 4 au 17 novembre 2026 : chambres regroupées par type avec les réservations confirmées et arrivées en barres, une ligne No room yet, la chambre 104 fermée pour maintenance, et la légende Checked in, Checked out, Confirmed, Double booked et Room closed"
faq:
  - q: "Pourquoi une réservation Booking.com n'apparaît-elle pas dans Little Hotelier ?"
    a: "Le plus souvent, la chambre ou le tarif réservé n'est pas mappé, ou est désactivé, dans le Channel Manager de Little Hotelier ; ou la réservation a été faite sous un autre code d'établissement ; ou la livraison a échoué. Vérifiez son statut de livraison sous My apps > Channel Manager > Reservations."
  - q: "Comment renvoyer à Little Hotelier une réservation en échec ?"
    a: "Dans My apps > Channel Manager > Reservations, cliquez sur l'identifiant de la réservation, ouvrez l'onglet Little Hotelier du Booking summary et cliquez sur Resend PMS message. Une réservation sans statut de livraison ne peut pas être renvoyée : saisissez-la à la main."
  - q: "Que faire en premier quand une réservation manque ?"
    a: "Protégez la chambre. Créez la réservation à la main dans Front Desk > Calendar avec les informations de l'extranet, ce qui réduit la disponibilité sur tous les canaux. Cherchez ensuite pourquoi elle n'est pas arrivée."
  - q: "Booking.com me prévient-il quand une réservation n'atteint pas mon channel manager ?"
    a: "Oui. Booking.com envoie un e-mail à l'établissement quand il ne parvient pas à ajouter une réservation dans le système du fournisseur de connectivité : gardez donc vos coordonnées à jour dans l'Extranet. La réservation elle-même figure toujours dans l'Extranet."
  - q: "En combien de temps Hotelier Tools signale-t-il une réservation manquante ?"
    a: "Pour Expedia, le contrôle s'exécute toutes les 15 minutes et signale une réservation toujours absente au bout de 30 minutes, constatée lors d'au moins deux lectures : environ 30 à 45 minutes après la réservation. Il signale chaque réservation une fois, puis une fois de plus quand elle arrive. Pour Booking.com, il ne signale pour l'instant que les incidents de réservation."
  - q: "Hotelier Tools fait-il partie de Little Hotelier, SiteMinder, Booking.com ou Expedia ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à l'un d'eux, ni approuvé par eux. Il lit vos extranets et Little Hotelier avec vos propres identifiants et ne crée, ne modifie ni n'annule jamais une réservation."
---

Quand une réservation Booking.com ou Expedia manque dans Little Hotelier, elle s'est presque toujours arrêtée à l'un de ces trois endroits : la chambre ou le tarif n'est pas mappé (ou est désactivé) dans le Channel Manager, la réservation est partie vers un autre code d'établissement, ou la livraison a échoué. Vérifiez son statut sous **My apps > Channel Manager > Reservations** et renvoyez-la si elle a échoué. Quelle que soit la cause, créez d'abord la réservation à la main, pour que la chambre ne puisse pas être vendue deux fois.

Les écrans de Little Hotelier, Booking.com et Expedia ci-dessous ont été vérifiés en novembre 2026.

## Pourquoi la réservation n'est-elle pas arrivée dans Little Hotelier ?

Une réservation passe de l'OTA au channel manager de SiteMinder, puis de là au Front Desk de Little Hotelier. Elle peut s'arrêter à chaque étape. Les causes habituelles, d'après le [guide des réservations manquantes](https://helpcentre.littlehotelier.com/en/articles/12391160-troubleshooting-missing-reservations-and-overbookings) de Little Hotelier et le [guide de synchronisation](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager) de Booking.com :

| Cause | Ce que l'on constate |
|---|---|
| **Plan tarifaire ou chambre non mappé** | Le client a réservé un tarif qui n'est pas connecté dans le Channel Manager. La réservation n'a aucun statut de livraison. |
| **Tarif ou canal désactivé** | Les éléments désactivés n'envoient aucune mise à jour, mais l'OTA continue de vendre sur l'ancienne disponibilité. |
| **Réservée avant le mapping du tarif** | Les réservations faites avant que vous activiez ou mappiez un tarif de canal ne se synchronisent pas d'elles-mêmes. |
| **Mauvais code d'établissement** | Un second compte extranet sous un autre code. Ses réservations n'atteignent jamais Little Hotelier. |
| **Échec de livraison** | Le channel manager a reçu la réservation, mais Little Hotelier l'a refusée ou n'a pas pu la confirmer. |
| **Incident du côté de l'OTA** | L'API de réservation de l'OTA est en panne. Les nouvelles réservations, modifications et annulations cessent d'arriver pendant un moment. |

N'oubliez pas les modifications et les annulations. Elles suivent le même chemin. Une annulation perdue laisse bloquée une chambre que vous pourriez vendre. Un changement de dates perdu place le client sur les mauvaises nuits. Les deux se règlent de la même façon : comparez la réservation dans l'extranet avec Little Hotelier.

Une réservation acceptée alors que la disponibilité était à zéro est un autre problème. Little Hotelier conseille de demander à l'OTA pourquoi elle l'a acceptée, et de demander au support, comme preuve, l'historique des mises à jour d'inventaire envoyées à ce canal.

## Comment vérifier le statut de livraison dans Little Hotelier

1. Allez dans **My apps > Channel Manager > Reservations**. Utilisez le filtre **All PMS status** pour voir le statut de livraison de chaque réservation.
2. Lisez le statut ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8673803-check-little-hotelier-s-reservation-delivery-statuses)) :
   - **DELIVERED** : Little Hotelier l'a acceptée. Si vous ne la trouvez toujours pas, cherchez dans Front Desk par nom du client et avec la bonne année, puis contactez le support.
   - **PENDING** : pas encore reçue. Cela se règle en général en quelques minutes.
   - **FAILED** : refusée ou non confirmée. L'erreur vous est aussi envoyée par e-mail.
   - **Aucun statut** : le tarif n'est pas mappé. La réservation ne peut pas être renvoyée : saisissez-la à la main.
3. Pour renvoyer une réservation en échec, cliquez sur son identifiant. Dans la fenêtre **Booking summary**, ouvrez l'onglet **Little Hotelier** et cliquez sur **Resend PMS message**.

Les échecs apparaissent aussi sous la cloche, dans **Reservation delivery failures**. Corrigez ensuite la cause dans **My apps > Channel Manager > Channels > Configure** : mappez les tarifs non mappés, réactivez ceux qui sont désactivés, et vérifiez que **Rates Mapped** affiche deux nombres identiques (par exemple 44/44). Un tarif qui échoue sans cesse avec « Unable to locate » a été supprimé ou modifié du côté de l'OTA et doit être mappé de nouveau ([erreurs de mapping](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshooting-channel-mapping-errors)).

## Comment vérifier sur Booking.com et Expedia

**Booking.com.** Chaque réservation figure dans la liste **Reservations** de l'Extranet, quoi qu'il se soit passé ensuite. Booking.com indique qu'une réservation peut manquer chez votre fournisseur quand la chambre ou le tarif n'y est pas encore connecté, ou après un problème technique. Il vous envoie aussi un e-mail chaque fois qu'il n'a pas pu ajouter une réservation au système de votre fournisseur : gardez donc vos coordonnées à jour dans l'Extranet ([Booking.com Partner Help](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager)). Quand plusieurs réservations manquent en même temps, regardez sur la [page d'état de la connectivité](https://connect.booking.com/status), publique, s'il y a un incident sur les réservations.

**Expedia.** Ouvrez la page des réservations de Partner Central, cherchez par numéro de confirmation ou par dates, et notez la chambre et le tarif réservés par le client. Si la réservation est dans Partner Central mais pas dans Little Hotelier, la coupure se situe entre Expedia et SiteMinder : vérifiez que SiteMinder est toujours votre fournisseur de connectivité pour les tarifs et pour les réservations, et que le tarif est mappé.

Dans les deux cas, Little Hotelier ne peut pas contacter l'OTA à votre place. Si le mapping est correct et que l'OTA affirme avoir envoyé la réservation, demandez à l'OTA le journal de livraison XML de la réservation et transmettez-le au support de Little Hotelier.

## Comment éviter une surréservation pendant que vous cherchez

1. **Créez la réservation à la main.** Dans **Front Desk > Calendar**, cliquez sur la date d'arrivée, choisissez **Add Reservation** et recopiez les informations de l'extranet. La créer réduit votre disponibilité sur tous les canaux.
2. **N'oubliez pas qu'elle est manuelle.** Les modifications ou annulations ultérieures de cette réservation devront aussi se faire à la main dans Front Desk. Si l'originale arrive plus tard, vérifiez que vous ne gardez pas les deux.
3. **Déjà complet ?** Demandez à l'OTA de reloger le client.
4. **Empêchez la cause de revenir.** Mappez chaque tarif que vous vendez, surveillez les canaux désactivés, et envisagez un stop sell sur les canaux les moins rentables quand il ne reste qu'une chambre.

## La méthode rapide : être alerté quand une réservation OTA manque

La vérification à la main fonctionne une fois que vous savez qu'une réservation manque. Le plus difficile, c'est de le savoir. Hotelier Tools compare la liste des réservations d'Expedia avec Little Hotelier toutes les 15 minutes et vous envoie un e-mail pour toute réservation qui n'arrive pas. Pour Booking.com, il signale aujourd'hui les incidents de réservation ; son contrôle réservation par réservation n'est pas encore terminé (voir plus bas).

1. Connectez l'extranet sur **Credentials** (identifiants) : **Expedia Partner Central** (`/credentials/expedia-extranet`) ou **Booking.com extranet** (`/credentials/booking-extranet`).
2. Gardez la session active avec **Keep Expedia signed in** (ou **Keep the session signed in** pour Booking.com) sur la même page. Le contrôle ne peut pas lire une session expirée.
3. Programmez **Check Expedia reservations are in Little Hotelier** (vérifier que les réservations Expedia sont dans Little Hotelier), ou la tâche Booking.com, depuis sa carte, avec le réglage recommandé : **Every 15 minutes** (toutes les 15 minutes). Une fois l'extranet connecté et la session maintenue, Hotelier Tools crée cette tâche pour vous.
4. Vérifiez que les bonnes personnes reçoivent l'e-mail : **Settings > Notifications** (`/settings/notifications`). Sans adresse à cet endroit, il part à l'e-mail de contact du propriétaire.
5. Quand l'e-mail arrive, trouvez la réservation dans l'extranet, créez-la dans Little Hotelier ou fermez la chambre sur ces nuits, puis corrigez la cause comme expliqué plus haut.

Chaque exécution lit les réservations faites aujourd'hui et les arrivées des 14 prochains jours, ainsi que les réservations de Little Hotelier. Les réservations Expedia sont rapprochées par leur code de confirmation (`EXP-` suivi du numéro), le même code que celui enregistré par Little Hotelier.

### Une alerte par réservation, pas une toutes les 15 minutes

La livraison prend souvent quelques minutes : une seule lecture ne suffit donc jamais. Chaque réservation manquante entre dans un registre :

- **Alerte au bout de 30 minutes, absence constatée lors d'au moins deux lectures.** Soit environ 30 à 45 minutes après la réservation.
- **Un seul avertissement.** L'envoi de l'e-mail est verrouillé avant son départ : deux exécutions ne peuvent donc pas l'envoyer toutes les deux. Si l'e-mail n'a atteint personne, le verrou est levé et l'exécution suivante réessaie.
- **Un nouvel avertissement quand c'est réglé.** Quand la réservation apparaît dans Little Hotelier, que l'OTA l'annule ou que le séjour est terminé, vous recevez un seul e-mail « no longer missing » (n'est plus manquante).
- **Pas de faux feu vert.** Si une liste n'a pas pu être lue en entier, l'exécution échoue et le dit. Rien n'est compté comme vérifié.

Le contrôle Expedia relève aussi les écarts de statut et de dates (annulée sur Expedia mais active dans Little Hotelier, par exemple) et les réservations sans chambre. Ils apparaissent dans le résumé de l'exécution sous **Run History** (historique des exécutions, `/cron-logs`).

::screenshot{src="/images/blog/demo/en/ota-missing-calendar-double-booked.webp" alt="Calendrier des réservations de Hotelier Tools du 4 au 17 novembre 2026 : chambres regroupées par type avec les réservations confirmées et arrivées en barres, une ligne No room yet, la chambre 104 fermée pour maintenance, et la légende Checked in, Checked out, Confirmed, Double booked et Room closed" caption="Le calendrier marque Double booked deux réservations dans la même chambre : une surréservation déjà faite saute aux yeux." path="/reservations/calendar"}
::

### Booking.com : les alertes d'incident fonctionnent, le contrôle réservation par réservation n'est pas terminé

Avant de lire l'extranet, le contrôle Booking.com lit la page d'état publique de Booking.com. Un incident sur son API de réservation vous est envoyé par e-mail une fois à son ouverture et une fois à sa résolution, même si votre session extranet est coupée. C'est justement le moment où personne d'autre ne le remarquerait.

La comparaison réservation par réservation pour Booking.com **ne fonctionne pas encore**. L'Extranet affiche sa liste de réservations avec un script : la page que reçoit Hotelier Tools contient donc le tableau, sans les lignes. Plutôt que d'annoncer « tout va bien » pour des réservations que personne n'a vues, le contrôle échoue clairement à chaque exécution tant que cette liste ne peut pas être lue. Pour l'instant, l'alerte par réservation fonctionne pour Expedia, et Booking.com vous donne les alertes d'incident.

### Ce qu'il ne fait jamais

- **Il est en lecture seule** de tous les côtés. Il ne crée, ne modifie ni ne ferme jamais une réservation, et ne ferme jamais une chambre à votre place.
- **Deux OTA seulement.** Airbnb, Hostelworld et les autres ne sont pas contrôlés.
- **Il ne remplace pas le mapping.** Si un tarif n'est pas mappé, c'est toujours dans Little Hotelier que vous le corrigez.

## Moins d'e-mails, et plus utiles, pour vos autres contrôles

La même règle s'applique aux autres alertes de Hotelier Tools. Sur **Automated Checks** (contrôles automatiques, `/automated-checks`), réglez le **Send email on** d'une tâche sur **Only with new or changed issues** (seulement en cas de problèmes nouveaux ou modifiés) : le rapport ne contient alors que les problèmes qu'aucun rapport précédent n'a mentionnés, ou qui ont changé. Et quand une personne marque un problème comme résolu sur **Issues** (`/automated-checks/issues`), il reste résolu tant que le contrôle trouve la même chose. Un problème différent ouvre un nouveau problème.

::screenshot{src="/images/blog/demo/en/ota-missing-checks-issues.webp" alt="Page Issues de Hotelier Tools : son introduction en quatre étapes (un contrôle trouve un problème, il est listé par réservation, vous le corrigez dans Little Hotelier, Verify le contrôle de nouveau), les compteurs 21 ouverts, 5 corrigés et 26 au total, des filtres, et une erreur do-not-rebook sur une réservation avec un bouton Verify" caption="Les problèmes trouvés par les contrôles programmés, regroupés par réservation. Le Resolved d'une personne tient jusqu'à ce que quelque chose change." path="/automated-checks/issues"}
::

::demo-cta{path="/reservations/calendar"}
::

Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027. Tous les contrôles sont sur la [page Contrôles automatiques](/tools/bot/automated-checks).

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à Booking.com, Expedia, SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel et vos propres identifiants d'extranet.
::

À lire aussi : [la checklist quotidienne de la réception](/blog/hotel-front-desk-checklist-automation), [le calendrier des réservations Little Hotelier](/blog/little-hotelier-reservation-calendar), [les liens de paiement Little Hotelier](/blog/little-hotelier-payment-links).

## Résumé

- Une réservation OTA manquante signifie en général un tarif non mappé ou désactivé, un mauvais code d'établissement ou un échec de livraison.
- Vérifiez **My apps > Channel Manager > Reservations** : **FAILED** peut être renvoyée avec **Resend PMS message** ; **aucun statut** signifie que le tarif n'est pas mappé.
- Protégez d'abord la chambre : ajoutez la réservation à la main dans **Front Desk > Calendar**, puis corrigez la cause.
- Hotelier Tools compare Expedia avec Little Hotelier toutes les 15 minutes et envoie un seul e-mail par réservation manquante, ainsi que les incidents de réservation Booking.com. Son contrôle réservation par réservation pour Booking.com n'est pas encore terminé.
