---
title: "Liste d'attente hôtel : comment la gérer pour les dates complètes (et relouer vite les chambres annulées)"
seoTitle: "Liste d'attente hôtel pour les dates complètes"
description: "Tenez une liste des clients qui veulent vos dates complètes et proposez-leur d'abord les chambres libérées. Tableur, veille automatique, formulaire public."
date: 2026-10-03
category: guests
tags: [waitlist, cancellations, direct booking, little hotelier, availability]
keywords: [liste d'attente hôtel, liste d'attente hôtel complet, remplir les annulations hôtel, formulaire liste d'attente hôtel, hôtel complet que faire, réservation directe annulation hôtel]
feature: waitlist
demoPath: /availability-watch
cover: /images/blog/demo/en/availability-waiting-list.webp
coverAlt: "Page Availability queue de Hotelier Tools avec History et Check the queue now, la carte Checks on the queue proposant Check every night at 01:00, et le formulaire Add a stay to watch avec les nuits, les chambres nécessaires, les types de chambres et les coordonnées du client"
faq:
  - q: "Little Hotelier a-t-il une liste d'attente ?"
    a: "Pas à notre connaissance : une recherche de « waitlist » dans le centre d'aide de Little Hotelier n'a renvoyé aucun article en octobre 2026. Vous pouvez en tenir une dans un tableur, ou utiliser un outil qui surveille les disponibilités pour vous."
  - q: "S'inscrire sur la liste d'attente d'un hôtel réserve-t-il une chambre ?"
    a: "Non. Être sur liste d'attente signifie que l'hôtel vous contactera si une chambre se libère pour vos dates. Rien n'est bloqué, et vous ne payez rien tant que vous n'avez pas réellement réservé."
  - q: "En combien de temps les clients en liste d'attente sont-ils prévenus d'une chambre libre ?"
    a: "Avec un tableur, dès que quelqu'un voit l'alerte d'annulation. Avec l'Availability Queue de Hotelier Tools, lors du prochain contrôle programmé : nous recommandons un contrôle chaque nuit à 1 h, et vous pouvez contrôler jusqu'à toutes les 20 minutes."
  - q: "Les clients peuvent-ils s'ajouter eux-mêmes à la liste d'attente ?"
    a: "Oui, grâce à la page publique de liste d'attente de Hotelier Tools. Elle est désactivée tant que vous ne l'activez pas, demande un consentement et, par défaut, fait confirmer son adresse e-mail au client avant son inscription."
  - q: "Que se passe-t-il si seulement une partie des chambres se libère ?"
    a: "Hotelier Tools peut envoyer une alerte « partial » quand moins de chambres que demandé sont libres. Par défaut, seul l'établissement la reçoit : vous pouvez ainsi appeler le client et trouver une solution."
  - q: "Un formulaire de liste d'attente est-il autorisé par le RGPD ?"
    a: "Il peut l'être, si les clients y consentent et que vous n'utilisez leurs données que pour ce séjour. Le formulaire de Hotelier Tools exige une case de consentement, affiche une politique de confidentialité construite à partir des données de votre établissement et supprime les coordonnées des entrées closes après 90 jours."
---

Une liste d'attente d'hôtel est une liste de clients qui ont demandé des dates pour lesquelles vous êtes complet. Quand une annulation libère une chambre, vous la leur proposez en premier avec un lien de réservation directe, avant qu'elle ne soit revendue sur une OTA. Vous pouvez la gérer avec un tableur et vos alertes d'annulation, ou laisser Hotelier Tools contrôler Little Hotelier à intervalles réguliers et prévenir le client par e-mail dès que toutes les nuits de son séjour sont libres.

## Que signifie « sur liste d'attente » dans un hôtel ?

Cela signifie que vous avez demandé des dates complètes et que l'hôtel vous contactera si une chambre se libère. Rien n'est réservé et rien n'est payé. Quand le message arrive, la chambre revient à celui qui réserve en premier : un bon message de liste d'attente contient donc un lien pour réserver tout de suite.

## Pourquoi tenir une liste d'attente quand Booking.com affiche complet ?

- **Les annulations se revendent vite.** Une chambre annulée est remise en vente sur tous les canaux en même temps, et un client passant par une OTA peut la réserver avant que vous ne vous souveniez de qui l'avait demandée.
- **Elle transforme les demandes en réservations directes.** Le client qui vous a appelé réserve sur votre site, sans la commission de l'OTA ([ce que prélève Booking.com](/blog/booking-com-commission)).
- **Elle montre la demande.** Une liste des nuits que les gens voulaient et n'ont pas pu avoir est utile quand vous fixez les prix de l'an prochain.

Little Hotelier ne semble pas avoir de liste d'attente intégrée : une recherche de « waitlist » dans son centre d'aide n'a renvoyé aucun article en octobre 2026. Vous en tenez donc une vous-même, à la main ou avec un outil.

## La méthode manuelle : un tableur et des alertes d'annulation

### 1. Préparer la feuille

Une ligne par demande, avec ces colonnes :

| Colonne | Exemple |
|---|---|
| Demande faite le | 3 oct. |
| Nom et contact | Ana, ana@example.com, +34 600 000 000 |
| Arrivée et départ | 14-16 nov. |
| Chambres et type | 1 double |
| Flexible ? | ±1 jour |
| Accepte d'être contacté | Oui, par e-mail |
| Statut | Proposé le 15 oct., 10 h 05 |

### 2. Être alerté quand une chambre se libère

- **Application mobile Little Hotelier :** touchez la roue des paramètres, puis **Notification settings**, et activez les notifications **Reservations** (elles incluent les annulations) en push ou par e-mail ([centre d'aide Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/12055494-notifications-in-the-little-hotelier-mobile-app)).
- **Application Booking.com Pulse :** alertes en temps réel pour les nouvelles réservations et les annulations ([Partner Help](https://partner.booking.com/en-us/help/registration-getting-started/tools/using-pulse-app)).

### 3. Quand une annulation arrive

1. Filtrez la feuille par les dates libérées.
2. Vérifiez dans Little Hotelier que **chaque nuit** du séjour demandé est libre. Un client qui veut trois nuits a besoin des trois.
3. Écrivez au premier qui correspond avec votre lien de réservation directe et une échéance, par exemple « la chambre est à vous si vous réservez dans les deux prochaines heures ».
4. Pas de réponse à l'échéance ? Passez à la personne suivante.
5. Mettez le statut à jour. Supprimez les lignes une fois les dates passées.

Le point faible, c'est l'humain. Quelqu'un doit voir l'alerte, ouvrir la feuille et vérifier chaque nuit à la main, et les annulations n'attendent pas les heures de bureau.

## Qui est servi en premier, et faut-il bloquer la chambre ?

Choisissez une règle et écrivez-la en haut de la feuille :

- **Premier arrivé, premier servi.** Simple et facile à expliquer.
- **Meilleure adéquation d'abord.** Une correspondance exacte, ou le séjour le plus long, passe en premier.
- **Tout le monde à la fois.** Écrivez à toutes les personnes qui correspondent ; la première à réserver l'emporte. Le plus rapide, mais certains clients seront déçus.

**Bloquer la chambre** est une promesse que vous devez tenir sur tous les canaux. Si vous voulez la bloquer une heure, saisissez une réservation provisoire dans Little Hotelier pour que votre channel manager cesse de la vendre, puis envoyez un lien de paiement pour cette réservation. Avec Little Hotelier Pay, **Send Payment Request** le permet ([demandes de paiement](https://helpcentre.littlehotelier.com/en/articles/8673558-little-hotelier-pay-payment-requests)). Si vous ne bloquez pas les chambres, dites-le clairement : « rien n'est bloqué tant que vous n'avez pas réservé ». Fermer des nuits sur tous les canaux est un autre outil, expliqué dans [CTA, CTD, séjour minimum et stop sell](/blog/little-hotelier-cta-ctd-stop-sell).

## La méthode automatique : laisser Hotelier Tools surveiller Little Hotelier

L'**Availability Queue** de Hotelier Tools (`/availability-watch`, bêta) tient la liste et fait les contrôles. Une tâche programmée examine toute la file dans Little Hotelier. Quand chaque chambre demandée est réservable chaque nuit, le client et/ou vous recevez un message par e-mail ou WhatsApp. Rien n'est réservé ni bloqué, et le message le dit.

1. Ouvrez **Availability Queue** et allez dans **Add a stay to watch**.
2. Choisissez la première et la dernière nuit. Réglez **Rooms needed** (chaque nuit) et **Room types** ; si vous laissez les types vides, n'importe quelle chambre compte. Pour un groupe mixte, utilisez **Different numbers per room type**.
3. Sous **Tell the guest**, ajoutez son e-mail et/ou son téléphone. Sous **Tell the property**, ajoutez les vôtres, ou laissez l'e-mail vide pour utiliser l'adresse de votre compte.
4. Choisissez quand chacun est prévenu : **available** (toutes les chambres libres ; cela clôt la surveillance), **partial** (moins de chambres que demandé ; seulement l'établissement par défaut) ou **expiring** (le séjour commence dans moins de 48 heures et rien n'a été trouvé).
5. Cliquez sur **Add to the queue**.
6. Sur la carte **Checks on the queue**, appuyez sur **Check every night at 01:00**, ou **Choose** un autre calendrier, de toutes les 20 minutes à une fois par jour. Rien n'est contrôlé tant que cette tâche n'existe pas. **Check the queue now** la lance immédiatement.

::screenshot{src="/images/blog/demo/en/availability-waiting-list-full.webp" alt="Page Availability queue complète : la carte Checks on the queue pas encore configurée avec Check every night at 01:00, tout le formulaire Add a stay to watch (nuits, rooms needed, room types, Different numbers per room type, Tell the guest et Tell the property avec les canaux et les moments de notification) avec le bouton Add to the queue, et une file vide" caption="Ajoutez le séjour une seule fois. Le contrôle programmé prévient le client quand chaque nuit est libre." path="/availability-watch" width="1440" height="1563"}
::

À savoir :

- **C'est la nuit la plus chargée qui décide.** Un séjour n'est libre que si les chambres sont disponibles chaque nuit. Une nuit sans données compte comme complète, jamais comme libre.
- **L'e-mail au client contient un lien de réservation directe** pour ces dates : le premier à réserver obtient la chambre.
- **Un seul message par surveillance.** Une fois envoyé, l'entrée se clôt. **History** (`/availability-watch/history`) conserve le message exact envoyé par chaque entrée, ce qui aide quand un client répond.
- **L'envoi peut être désactivé côté serveur.** La page vous l'indique si c'est le cas. Dans cet état, le contrôle s'exécute quand même et enregistre le message qu'il aurait envoyé, sans l'envoyer.
- **Les messages WhatsApp** partent de votre numéro WhatsApp connecté (voir [WhatsApp avec Little Hotelier](/blog/whatsapp-little-hotelier)).

En haute saison, contrôlez plus souvent qu'une fois par nuit : avec un contrôle nocturne, une chambre libérée à 9 h attend 1 h du matin pour être proposée, et risque d'être déjà vendue d'ici là.

### Comment la liste d'attente influe sur vos prix

Chaque groupe qui attend une nuit augmente de 3 % la recommandation de prix de cette nuit, jusqu'à 12 % par nuit, dans la tarification dynamique de Hotelier Tools (alpha). Une liste d'attente pleine est un signal de demande, et la recommandation le reflète ([tarification dynamique pour petits hôtels](/blog/dynamic-pricing-little-hotelier)).

::demo-cta{path="/availability-watch"}
::

## Laisser les clients s'inscrire depuis votre site : la page publique de liste d'attente

Au lieu de saisir chaque demande vous-même, laissez les clients s'ajouter eux-mêmes. La **Public waiting-list page** (`/availability-watch/public`) est désactivée tant que vous ne l'ouvrez pas.

1. Activez **Page open**. L'adresse de la page reprend l'identifiant (slug) Direct Book de votre établissement dans Little Hotelier.
2. Sous **Which stays**, choisissez **Any future stay** ou **Only stays inside these dates**. Réglez **Longest stay** (14 nuits par défaut), **Which room types** et **Rooms per request** (2 par défaut, jusqu'à 10).
3. Gardez **Ask guests to confirm their email (double opt-in)** activé : le client appuie sur un bouton dans un e-mail avant de s'inscrire. La page plafonne aussi la liste à 100 personnes en attente et 40 inscriptions par jour. Laisser les clients indiquer un numéro WhatsApp est désactivé par défaut.
4. Ajoutez éventuellement un texte d'introduction, un lien vers votre site et des avertissements d'arrivée et de départ, pour que les clients sachent quand ils choisissent un jour où vous fermez habituellement les arrivées.
5. Cliquez sur **Copy link** et placez-le sur la page de réservation de votre site et dans vos réponses « désolé, nous sommes complets ».

::screenshot{src="/images/blog/demo/en/mobile-waitlist-public-form-dark.webp" alt="Page publique Join the waitlist sur un téléphone, en mode sombre : les dates souhaitées sont complètes, laissez vos coordonnées et recevez un lien direct pour réserver quand une chambre se libère, avec des champs pour l'établissement, le nom (facultatif), l'e-mail, le téléphone (facultatif) et vos nuits" caption="Les clients choisissent leurs nuits, laissent un e-mail et confirment. Rien n'est réservé." path="/waitlist" mobile}
::

Le client choisit ses nuits et, facultativement, un type de chambre, laisse un e-mail (le téléphone est facultatif) et coche la case de consentement. Le formulaire ne touche jamais Little Hotelier. Il est protégé par une vérification de preuve de travail dans le navigateur, un piège invisible à robots et des limites par adresse IP, et les entrées closes perdent leurs coordonnées après 90 jours. Votre établissement est le responsable du traitement, et la politique de confidentialité est construite à partir de la fiche de votre établissement : gardez donc votre raison sociale et votre adresse renseignées.

## Les listes d'attente fonctionnent-elles pour les auberges de jeunesse et les lits en dortoir ?

Oui. Choisissez le type de chambre du dortoir et le nombre d'unités dont le groupe a besoin. La surveillance lit les disponibilités comme Little Hotelier les compte pour ce type de chambre : si vous vendez le dortoir au lit, demandez des lits. Pour un groupe qui se répartirait entre plusieurs types de chambres, utilisez **Different numbers per room type**, et gardez les alertes **partial** actives pour vous : une correspondance partielle, c'est un appel téléphonique.

Tout ce que fait la liste d'attente se trouve sur la [page Liste d'attente](/tools/bot/waitlist). Hotelier Tools est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il lit les disponibilités avec les identifiants Little Hotelier de votre hôtel et ne modifie jamais une réservation depuis la liste d'attente.
::

## Résumé

- Une liste d'attente donne aux clients qui ont demandé en premier la première chance d'obtenir une chambre annulée, en réservation directe.
- À la main : une feuille, des alertes d'annulation dans l'application Little Hotelier ou Pulse, et une règle claire sur qui passe en premier.
- En automatique : l'**Availability Queue** de Hotelier Tools contrôle chaque nuit de chaque séjour à intervalles réguliers et envoie un message avec un lien de réservation. Rien n'est bloqué.
- Ajoutez la page publique de liste d'attente à votre site pour que les clients s'inscrivent eux-mêmes, avec consentement et confirmation par e-mail.
