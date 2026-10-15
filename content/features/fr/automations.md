---
title: "Tâches planifiées pour Little Hotelier, avec un journal de chaque exécution"
---

Les automatisations sont les tâches planifiées qui font tourner Hotelier Tools : vérifications des réservations, factures au départ, actualisation des prix de la concurrence, contrôle de la liste d'attente et relève de la messagerie s'exécutent d'elles-mêmes, selon le calendrier que vous choisissez. Chaque exécution est consignée, et les échecs arrivent dans votre boîte e-mail.

## Comment ça marche

1. **Chaque fonctionnalité crée sa propre tâche.** Vous partez rarement d'un calendrier vide. Par exemple :
   - Vérifications automatiques : **Save and activate task** applique le calendrier recommandé, comme chaque nuit à 23 h 30 pour les nouvelles réservations.
   - Facture au départ : **Create the daily task (16:00, after check-out)**.
   - Départ automatique : **Create the daily task (15:05)**.
   - Liste d'attente : **Check every night at 01:00**.
   - Pilotage automatique des prix : toutes les 3 heures est la suggestion.
   - Messagerie clients : votre page de FAQ peut être relue toutes les heures.
2. **Ajustez le calendrier.** Lancez une tâche maintenant, toutes les quelques minutes, chaque jour, chaque semaine ou chaque mois, dans les limites propres à chaque fonctionnalité.
3. **Lisez ce qui s'est passé.** **Cron Jobs** (`/cron`) liste chaque tâche, et **Run History** (`/cron-logs`) donne un résumé lisible de ce qu'a fait chaque exécution.
4. **Recevez le rapport.** Des tâches comme les vérifications de réservations envoient un e-mail de rapport par exécution. Les destinataires communs se définissent dans **Settings > Notifications**.

Voyez les tâches à l'œuvre dans [la checklist de la réception](/blog/hotel-front-desk-checklist-automation), [l'envoi de la facture au départ](/blog/send-invoice-to-guest-at-checkout) et [la liste d'attente pour les dates complètes](/blog/hotel-waitlist-sold-out-dates).

## Ce dont vous avez besoin

- Little Hotelier connecté sur **Credentials**. Chaque exécution se connecte avec cet identifiant.
- La fonctionnalité qui se trouve derrière la tâche, configurée au préalable, comme les vérifications souhaitées ou les dates que vous surveillez.

## Limites et bon à savoir

- **Statut : bêta.**
- **Pause de sécurité.** Si le mot de passe de votre Little Hotelier expire, les tâches se mettent en pause au lieu de réessayer, pour que le compte ne soit jamais verrouillé. Le tableau de bord indique que les tâches automatiques sont en pause tant que vous n'enregistrez pas le nouveau mot de passe sur **Credentials** ou n'appuyez pas sur **Check now & resume**.
- **Les intervalles minimaux diffèrent selon la tâche.** Les vérifications de réservations s'exécutent au plus une fois par heure et par tâche, le contrôle de la liste d'attente au plus toutes les 20 minutes, et le pilotage automatique des prix pas plus souvent que toutes les 3 heures.
- **Une tâche ne fait que ce que fait sa fonctionnalité.** Les vérifications se limitent à alerter. Le départ automatique écrit dans Little Hotelier, il reste donc désactivé tant que vous ne le créez pas.
- **Des assistants IA peuvent gérer les tâches.** Via le [serveur MCP](/tools/bot/api-mcp), Claude ou ChatGPT peuvent lire et modifier les tâches planifiées.
- **Pas de webhooks sortants.** Vos propres scripts ont besoin de leur propre planificateur, comme une tâche cron.
