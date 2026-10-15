---
title: "Vérifications automatiques des réservations pour Little Hotelier"
---

Les vérifications automatiques lisent vos réservations Little Hotelier à cinq moments du séjour et signalent ce qui doit être corrigé : pas de chambre attribuée, solde impayé, pièce d'identité ou adresse manquante, ou client figurant sur votre liste de clients à ne pas reprendre. Les problèmes arrivent sur une page Issues unique, et chaque exécution vous envoie un e-mail de rapport.

## Comment ça marche

Chaque moment est une tâche planifiée distincte, qui lit un ensemble différent de réservations :

- **After a booking is made :** réservé hier et aujourd'hui. Vérifie la chambre, la pièce d'identité, l'adresse et la liste des clients à ne pas reprendre.
- **Before they arrive :** arrivée d'aujourd'hui jusqu'à 7 jours à l'avance (réglable de 1 à 60). Vérifie la chambre, le paiement et la liste des clients à ne pas reprendre.
- **When they arrive :** arrivée aujourd'hui. Vérifie la pièce d'identité, l'adresse et la chambre.
- **While they are here :** arrivée au cours des 7 derniers jours (réglable). Vérifie la pièce d'identité et l'adresse.
- **When they leave :** départ aujourd'hui. Vérifie la pièce d'identité, l'adresse et le solde.

Ouvrez un moment sur **Automated Checks** (`/automated-checks`), activez ou désactivez ses vérifications et appuyez sur **Save and activate task**. Les problèmes apparaissent sur `/automated-checks/issues`, regroupés par réservation. Corrigez la réservation dans Little Hotelier et appuyez sur **Verify** : les vérifications sont relancées sur cette seule réservation et le problème se ferme.

La **Do-not-rebook list** (`/automated-checks/watchlist`) compare chaque nuit les nouvelles réservations et les arrivées à venir avec les clients que vous avez signalés. Une correspondance devient un problème et une ligne dans le rapport.

La routine complète se trouve dans [la checklist de la réception](/blog/hotel-front-desk-checklist-automation). Pour tenir la liste en toute légalité, consultez [le guide de la liste noire de clients](/blog/hotel-do-not-rent-list).

## Ce dont vous avez besoin

- Little Hotelier connecté sur **Credentials**.
- Un moment activé pour commencer. **Before they arrive** est le premier conseillé, car il repère un séjour sans chambre alors qu'il reste du temps pour en attribuer une.
- Les destinataires des rapports, définis dans **Settings > Notifications** (`/settings/notifications`).

## Limites et bon à savoir

- **Statut : bêta.**
- **Elles se limitent à alerter.** Aucune vérification ne modifie, n'annule ni ne facture une réservation, et une correspondance avec la liste des clients à ne pas reprendre ne refuse jamais un client. L'exception est le départ automatique facultatif, qui écrit dans Little Hotelier et est désactivé par défaut.
- **Au plus une fois par heure et par tâche**, car chaque exécution se connecte à Little Hotelier.
- **Trois vérifications restent manuelles :** cartes Booking.com invalides, nombre de clients et heures d'arrivée. Voir [que faire d'une carte invalide ou d'un no-show](/blog/booking-com-invalid-card-no-show).
- Si le mot de passe de votre Little Hotelier expire, les tâches se mettent en pause au lieu de réessayer, jusqu'à ce que vous enregistriez le nouveau.
