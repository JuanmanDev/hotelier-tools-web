---
title: "Un client demande des dates que vous ne pouvez pas encore vendre ? Tenez une file de demandes de disponibilité"
seoTitle: "Demandes de disponibilité hôtel : n'en perdez plus"
description: "Des clients demandent des dates complètes ou pas encore tarifées, et l'e-mail se perd. Tenez un registre, ou laissez une file vérifier et répondre."
date: 2026-11-05
category: operations
tags: [disponibilités, liste d'attente, demandes, little hotelier, groupes, réservation directe]
keywords: [client demande dates pas encore ouvertes hôtel, suivi demande de disponibilité hôtel, registre des demandes de réservation hôtel, prévenir client chambre disponible, tarifs pas encore chargés moteur de réservation, demande de groupe hôtel complet, liste d'attente hôtel dates futures, demande agence de voyage chambres hôtel, little hotelier disponibilités]
feature: waitlist
demoPath: /availability-watch
cover: /images/blog/demo/en/availability-queue-requests.webp
coverAlt: "Page Availability queue de Hotelier Tools : le bouton Add to the queue, la carte Public waiting-list page marquée ouverte avec son lien, et In the queue avec trois demandes actives : Tom Walker (e-mail et WhatsApp, 1 chambre de n'importe quel type, du 27 au 29 nov.), Lena Fischer (1 Doble Superior, du 18 au 21 déc.) et Viajes Ejemplo (agence) qui veut 3 Doble Estándar et 1 Familiar 4 pax du 26 au 29 mars 2027"
featured: true
faq:
  - q: "Que faire quand un client demande des dates que je n'ai pas encore tarifées ?"
    a: "Notez la demande avec les nuits exactes, les chambres et le contact, dites au client que vous lui écrirez dès que les dates seront ouvertes, et consultez la liste chaque fois que vous chargez de nouveaux tarifs. Un outil comme l'Availability Queue de Hotelier Tools fait ce contrôle pour vous et écrit au client la première fois que les chambres sont réservables."
  - q: "Une demande de disponibilité bloque-t-elle une chambre pour le client ?"
    a: "Non. Rien n'est réservé ni bloqué. Quand les chambres se libèrent, le client reçoit un message avec un lien de réservation, et la chambre revient au premier qui réserve. Dites-le clairement dans chaque réponse."
  - q: "Comment la file sait-elle qu'un séjour est vraiment libre ?"
    a: "Elle lit l'inventaire de Little Hotelier pour chaque nuit du séjour et retient le chiffre le plus bas. Une nuit en stop sell, fermée à l'arrivée le jour d'arrivée ou absente de l'inventaire compte comme zéro : « pas de données » ne veut jamais dire « libre »."
  - q: "Et si seulement une partie des chambres demandées par une agence se libère ?"
    a: "C'est une correspondance « partial ». Par défaut, seul l'établissement est prévenu, une seule fois, pour que vous puissiez appeler l'agence et proposer ce qui est libre. La demande reste dans la file jusqu'à ce que toutes les chambres soient libres."
  - q: "Un client peut-il recevoir deux fois le même message ?"
    a: "Non. Une demande annonce « available » une seule fois, puis se clôt. Hotelier Tools refuse aussi d'inscrire deux fois la même personne pour les mêmes dates, qu'elle ait été ajoutée depuis le tableau de bord, un assistant, l'API ou la page publique."
  - q: "Hotelier Tools fait-il partie de Little Hotelier ?"
    a: "Non. Hotelier Tools est un outil indépendant, ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il lit les disponibilités avec les identifiants Little Hotelier de votre hôtel et ne crée ni ne modifie jamais une réservation depuis la file."
---

Quand un client demande des dates que vous ne pouvez pas vendre aujourd'hui (complètes, fermées ou pas encore tarifées), notez la demande avec les nuits exactes, les chambres et le contact, et consultez cette liste à chaque changement. Le plus rapide, c'est une file qui contrôle Little Hotelier pour vous : l'**Availability Queue** de Hotelier Tools vérifie chaque demande à intervalles réguliers et envoie au client un seul message, avec un lien de réservation, la première fois que toutes les nuits demandées sont réservables.

## Pourquoi les demandes de disponibilité se perdent-elles ?

Parce que la demande arrive à un endroit et que la réponse apparaît ailleurs, des semaines plus tard. Les cas habituels :

- **L'e-mail ou le WhatsApp est enfoui.** « Avez-vous une double pour la première semaine d'août ? » arrive en mars. Quand des chambres se libèrent, le message est 400 e-mails plus bas, et personne ne se souvient de qui l'a demandé.
- **Les dates n'ont pas encore de tarifs.** Vous n'avez pas chargé les prix de l'été prochain, le moteur de réservation n'affiche rien et le client vous écrit. Vous répondez « nous vous tiendrons au courant », puis vous chargez les tarifs un après-midi de rush.
- **Les dates sont complètes.** Une annulation libère une chambre le mardi à 10 h. Le client qui avait demandé en janvier n'en sait rien, et une OTA la revend.
- **Une agence veut plusieurs chambres.** Trois doubles et une familiale pour le week-end de Pâques. Vous avez deux doubles. C'est un non, ou un appel téléphonique ?
- **Une partie de la demande devient possible.** Deux des trois nuits se libèrent, ou une des deux chambres. Personne ne vérifie à la main chaque nuit de chaque demande.

Chacun de ces cas est une réservation directe que vous aviez déjà dans votre boîte de réception.

## Comment suivre les demandes de disponibilité à la main ?

Un simple registre suffit si quelqu'un le tient à jour. Une ligne par demande :

| Ce qu'il faut noter | Pourquoi |
|---|---|
| Date de la demande, et par quel moyen (e-mail, WhatsApp, téléphone) | Pour retrouver le message d'origine |
| Nom, e-mail et téléphone avec l'indicatif du pays | Pour répondre sur le canal qu'il a utilisé |
| Première nuit et jour de départ | Un séjour a besoin de toutes les nuits, pas seulement de la première |
| Chambres et types de chambre, par type pour les groupes | « 3 doubles + 1 familiale » n'est pas « 4 chambres » |
| Pourquoi vous n'avez pas pu vendre | Complet, fermé ou sans tarifs : chaque cas vous dit quand regarder à nouveau |
| Statut et date | En attente, proposé, réservé, abandonné |

**Quand regarder :**

- **Chaque fois que vous chargez ou ouvrez des tarifs.** Dans Little Hotelier, vous fixez les tarifs et fermez ou ouvrez des dates dans **Front Desk > Inventory**, une par une ou avec **Bulk Update** ([centre d'aide Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), en novembre 2026). Filtrez votre registre sur les dates que vous venez d'ouvrir.
- **Chaque fois qu'une annulation arrive** pour des dates du registre.
- **Une fois par semaine**, pour clore les demandes dont les dates sont passées.

**Comment répondre :** envoyez au client un lien de réservation directe pour ses dates exactes, dites clairement que rien n'est bloqué, et fixez une échéance si vous proposez la chambre à plusieurs personnes. Si vous travaillez dans Gmail, un libellé comme « Demandes de disponibilité » regroupe les e-mails d'origine ([aide Gmail](https://support.google.com/mail/answer/118708)).

Le point faible reste l'humain : quelqu'un doit comparer chaque nuit de chaque ligne avec l'inventaire, et penser à le faire.

## La méthode rapide : l'Availability Queue de Hotelier Tools

L'**Availability Queue** (`/availability-watch`, bêta) tient la liste et fait les contrôles. Vous ajoutez un séjour une seule fois. Une tâche programmée examine toute la file dans Little Hotelier, et quand les chambres sont réservables chaque nuit, le client et/ou vous recevez un message par e-mail ou WhatsApp. Rien n'est réservé ni bloqué, et le message le dit.

1. Ouvrez **Availability Queue** et remplissez **Add a stay to watch** (ajouter un séjour à surveiller) : les nuits, **Rooms needed** (chambres nécessaires) et **Room types** (types de chambre). Pour une agence, cochez **Different numbers per room type**.
2. Sous **Tell the guest** (prévenir le client) et **Tell the property** (prévenir l'établissement), choisissez les canaux et le moment où chacun est prévenu.
3. Cliquez sur **Add to the queue** (ajouter à la file).
4. Regardez la carte **Checks on the queue** (contrôles de la file). Les comptes qui ont des identifiants Little Hotelier ont normalement déjà cette tâche, chaque nuit à 1 h. Si elle indique **Not configured yet**, appuyez sur **Check every night at 01:00**, ou **Choose** un autre calendrier (toutes les 20 minutes au plus).

La marche à suivre pour les dates complètes et les annulations se trouve dans le guide associé, [comment gérer une liste d'attente pour les dates complètes](/blog/hotel-waitlist-sold-out-dates). Ce guide-ci explique comment la file décide, et les nouvelles façons dont les demandes y arrivent.

::screenshot{src="/images/blog/demo/en/availability-queue-requests.webp" alt="Page Availability queue : le bouton Add to the queue, la carte Public waiting-list page marquée ouverte avec son adresse, et In the queue avec trois entrées actives : Tom Walker par e-mail et WhatsApp pour 1 chambre de n'importe quel type, du 27 au 29 novembre 2026 ; Lena Fischer pour 1 Doble Superior, du 18 au 21 décembre 2026 ; et Viajes Ejemplo (agence) pour 3 Doble Estándar et 1 Familiar 4 pax, du 26 au 29 mars 2027, chacune marquée Not checked yet" caption="Une seule liste pour toutes les demandes : un client seul, une demande WhatsApp et un groupe d'agence des mois à l'avance." path="/availability-watch"}
::

### Comment la file décide-t-elle qu'un séjour est libre ?

- **C'est la nuit la moins disponible qui décide.** Un type de chambre avec quatre chambres libres le vendredi et aucune le samedi ne peut pas vendre un séjour du vendredi au dimanche. La file retient le chiffre le plus bas sur l'ensemble des nuits, c'est-à-dire ce que vous pouvez réellement vendre.
- **Fermé veut dire non réservable.** Une nuit en stop sell (**Close Channels** dans Little Hotelier), fermée à l'arrivée le jour d'arrivée ou absente de l'inventaire compte comme zéro, même si le nombre de chambres dit autre chose. « Pas de données » ne veut jamais dire « libre ».
- **Les dates pas encore tarifées fonctionnent donc aussi.** Si vous gardez la saison prochaine fermée tant que les tarifs ne sont pas chargés, un client qui demande août attend dans la file. Le premier contrôle après le chargement des tarifs et l'ouverture des dates trouve les chambres libres, et le client est prévenu sans que vous ayez à vérifier quoi que ce soit.
- **Un seul contrôle pour toute la file.** Chaque demande en attente est contrôlée à chaque passage : deux clients qui attendent la même nuit apprennent la même annulation au même moment. Little Hotelier est lu une fois par date d'arrivée, pas une fois par demande.
- **Elle ne le dit qu'une fois.** Quand une demande est annoncée comme disponible, elle se clôt. Les disponibilités bougent sans cesse, et un client ne doit pas recevoir un message toutes les 30 minutes pour la même chambre.
- **Un séjour déjà commencé est retiré** sans rien envoyer.

### Qui est prévenu de quoi : available, partial ou expiring

Chaque contrôle aboutit à l'une de trois situations, et le client et l'établissement s'y abonnent séparément :

| Situation | Libellé dans le formulaire | Qui est prévenu par défaut |
|---|---|---|
| **Available** : chaque chambre demandée est réservable chaque nuit | **Everything asked for is free** | Le client et l'établissement. La demande se clôt. |
| **Partial** : quelque chose s'est libéré, mais moins de chambres que demandé | **Some rooms came free, but not all** | L'établissement seulement. C'est un appel téléphonique, pas un e-mail automatique. |
| **Expiring** : le séjour commence dans moins de 48 heures et rien n'a été trouvé | **About to expire with nothing found** | L'établissement seulement. Votre dernière chance de proposer une alternative. |

Une correspondance partielle qui ne change pas n'est signalée qu'une fois, pas à chaque passage, et la demande continue d'attendre l'ensemble des chambres. C'est le cas de l'agence : « 2 des 3 doubles sont libres » arrive à la réception, et l'agence ne reçoit pas un e-mail dont elle ne peut rien faire.

### E-mail ou WhatsApp, pour le client et pour vous

Le client peut être prévenu par e-mail, WhatsApp ou les deux, et l'établissement sur ses propres canaux. Les messages WhatsApp partent de votre numéro connecté ([WhatsApp avec Little Hotelier](/blog/whatsapp-little-hotelier)) ; un numéro de téléphone doit inclure l'indicatif du pays, et Hotelier Tools n'en devine jamais un. Laissez **Property email** vide pour utiliser l'adresse de notification de votre compte. L'e-mail au client est rédigé dans la langue choisie sous **Guest's language**, et un message **available** contient un lien de réservation directe avec les dates et le nombre de chambres déjà remplis. **History** (`/availability-watch/history`) conserve le message exact envoyé par chaque demande.

### Les demandes qui arrivent dans la boîte de réception

Les assistants IA ([AI Chat](/blog/ai-assistant-hotel-front-desk), bêta, et l'assistant de la boîte de réception, alpha) savent quand votre établissement utilise la file. Quand un client demande des dates et que le moteur de réservation ne trouve rien à vendre, l'assistant propose la liste d'attente dans la même réponse au lieu de s'arrêter à « pas de disponibilité ». Il vérifie d'abord si cette personne attend déjà, par e-mail ou par téléphone, et ne l'inscrit jamais deux fois pour les mêmes dates. La demande apparaît sous forme de carte à confirmer, avec le client, le séjour, les chambres et qui sera prévenu. Si seules certaines chambres sont réservables, il les propose et offre la file pour le reste. Plus de détails dans [répondre aux messages des clients avec l'IA](/blog/ai-replies-guest-messages).

## Laisser les clients demander sur votre site : la page publique de liste d'attente

La **Public waiting-list page** (`/availability-watch/public`) permet aux clients de s'inscrire eux-mêmes. Elle est désactivée tant que vous n'activez pas **Page open**, et **Ask guests to confirm their email (double opt-in)** est activé par défaut : une demande n'entre dans la file qu'après que le client a appuyé sur un bouton dans un e-mail de confirmation.

**Réservable maintenant : réservez, n'attendez pas.** Quand un client choisit un séjour, la page interroge votre moteur de réservation public (jamais Little Hotelier) pour ces dates et ce nombre de personnes. Si des chambres sont libres, elle affiche les prix avec votre code promo direct appliqué et un bouton **Book now**, et n'inscrit pas ce séjour sur la liste d'attente. Si seuls d'autres types de chambre ou moins de chambres sont libres, elle les affiche et laisse quand même le client s'inscrire pour le reste. Si le moteur ne peut pas être lu, elle le dit et le client peut tout de même s'inscrire.

::screenshot{src="/images/blog/demo/en/availability-queue-bookable-now.webp" alt="Formulaire public de liste d'attente pour le séjour du 18 au 21 décembre 2026, 1 chambre pour 2 adultes : un encadré vert indiquant Good news: you can book these dates now, avec Dormitorio 6 camas mixto, Doble Estándar, Doble Superior et Familiar 4 pax et leurs chambres restantes, des prix barrés et des totaux remisés par tarif, la mention du code de réduction direct DEMOSOL et un bouton Book now" caption="Si les dates sont réservables, le client voit votre prix direct et réserve au lieu d'attendre." path="/waitlist"}
::

Vous désactivez ce contrôle sous **When a room is free now**, tout comme le lien **Book on our website**. Les autres réglages déterminent ce que voient les clients :

- **Look of your booking page** (l'apparence de votre page de réservation) : collez l'adresse de votre page direct-book.com et cliquez sur **Import** pour reprendre ses couleurs, sa bannière, les photos de l'établissement et les descriptions des chambres. Rien n'est affiché tant que vous n'avez pas coché ce que vous voulez utiliser.
- **What the page shows about your property** (ce que la page montre de votre établissement) : nom, adresse, téléphone, e-mail et site web, chacun **From the property card**, avec une **Own value for this page** ou **Do not show**. Les adresses de connexion ne sont jamais montrées aux clients.
- **Map links and more ways to reach you** (liens de carte et autres moyens de vous joindre) : liens Google Maps et Apple Maps créés à partir de votre adresse, jusqu'à trois autres liens de carte, WhatsApp, et jusqu'à trois adresses e-mail supplémentaires (pour les groupes, par exemple).
- **Arrival and departure warnings** (avertissements d'arrivée et de départ) : la page avertit, sans jamais refuser, quand un client choisit un jour où vous fermez habituellement les arrivées ou les départs.

::screenshot{src="/images/blog/demo/en/availability-queue-public-settings.webp" alt="Réglages de la page publique de liste d'attente : la carte When a room is free now avec Check availability on the booking engine et Show a Book on our website link activés, et le code promo direct DEMOSOL avec son lien de réservation ; en dessous, la carte Look of your booking page avec un champ pour l'adresse direct-book.com et un bouton Import, Nothing imported yet" caption="Interrogez d'abord le moteur de réservation, puis reprenez l'apparence de votre page de réservation." path="/availability-watch/public"}
::

### Partager un lien prérempli, ou intégrer le formulaire

**Share and embed** (`/availability-watch/embed`) prépare deux éléments à copier. Un **Link** qui remplit le formulaire, avec les mêmes noms de paramètres que votre page de réservation (`checkInDate`, `checkOutDate`, `items[0][adults]`, `promocode`, `locale`), pour répondre à une demande avec un lien qui contient déjà les dates du client. Et un **Frame for your website** : un `<iframe>` en pleine largeur ou en 480, 640 ou 800 px, avec un aperçu. Seule cette page publique peut être intégrée par d'autres sites ; le reste du tableau de bord ne le peut pas.

::screenshot{src="/images/blog/demo/en/availability-queue-embed.webp" alt="Page Share and embed : What the link fills in avec Your nights, Rooms, Adults, Children, Room type (facultatif), Language réglé sur The guest's own et le code promo DEMOSOL, et la carte Link avec l'adresse de la liste d'attente, Copy link et Open" caption="Répondez à une demande avec un lien qui contient déjà les dates du client." path="/availability-watch/embed"}
::

## La file alimente vos prix

Les personnes qui attendent une nuit, c'est de la demande. Dans la tarification dynamique de Hotelier Tools (alpha), chaque groupe en attente augmente de 3 % la recommandation de prix de cette nuit, jusqu'à 12 % par nuit, uniquement pour les types de chambre demandés, en comptant une seule fois le même client. Modifiez ou désactivez ce réglage dans les règles de tarification (`/pricing/settings/rules`) : **Raise per guest on the waiting list** et **Never raise for the waiting list more than**. Voir [tarification dynamique pour petits hôtels](/blog/dynamic-pricing-little-hotelier).

## Pour les développeurs : MCP et REST

Les outils MCP (`availability_watch_list`, `_add`, `_update`, `_cancel`, `_check_now`, `_schedule`, `_set_schedule`, plus `list_room_types`) et l'API REST (`/api/v1/availability-watch`) font la même chose, avec le même contrôle des doublons. Contrôler la file envoie de vrais messages : AI Chat vous demande donc de confirmer. Voir [le guide de l'API Little Hotelier](/blog/little-hotelier-api) et [connecter Claude à Little Hotelier](/blog/connect-claude-to-little-hotelier).

## Ce que la file ne fait pas

- **Elle ne bloque ni ne réserve rien.** La chambre revient au premier qui réserve, sur n'importe quel canal.
- **Elle ne crée pas de réservations** et ne modifie rien dans Little Hotelier.
- **Elle n'est pas plus rapide que son calendrier.** En haute saison, contrôlez toutes les 20 à 30 minutes au lieu d'une fois par nuit.
- **Elle voit ce que montre Little Hotelier.** Si la lecture de l'inventaire renvoie des tarifs mais aucun nombre de chambres, la page affiche **Little Hotelier is not returning room counts** au lieu de considérer les dates comme complètes.
- **Les tarifs ne font pas partie du contrôle.** La file lit le nombre de chambres et les fermetures : gardez fermées les dates sans prix si vous ne voulez pas qu'elles soient annoncées.

::demo-cta{path="/availability-watch"}
::

Tout ce que fait la file se trouve sur la [page Liste d'attente](/tools/bot/waitlist). Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il lit les disponibilités avec les identifiants Little Hotelier de votre hôtel et ne crée ni ne modifie jamais une réservation depuis la file.
::

Voir aussi : [CTA, CTD, séjour minimum et stop sell](/blog/little-hotelier-cta-ctd-stop-sell), [une adresse e-mail d'hôtel pour les clients](/blog/hotel-email-address), [les codes promo dans Little Hotelier](/blog/little-hotelier-promo-codes).

## Résumé

- Les demandes se perdent parce que la question arrive longtemps avant la réponse : messages enfouis, dates pas encore tarifées, nuits complètes, demandes de groupe, correspondances partielles.
- À la main : notez les nuits, les chambres par type, le contact et la raison pour laquelle vous n'avez pas pu vendre, et consultez le registre à chaque chargement de tarifs ou annulation.
- L'**Availability Queue** de Hotelier Tools contrôle chaque nuit de chaque demande selon un seul calendrier, compte les nuits fermées ou absentes comme complètes et prévient le client une seule fois, avec un lien de réservation.
- **Partial** et **expiring** vont à l'établissement par défaut ; **available** va aux deux.
- Les clients peuvent s'inscrire depuis une page publique qui propose d'abord de vendre les dates si elles sont réservables tout de suite. Rien n'est jamais bloqué.
