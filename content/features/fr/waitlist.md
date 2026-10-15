---
title: "Une liste d'attente pour les dates complètes dans Little Hotelier"
---

La liste d'attente, appelée **Availability Queue** dans le tableau de bord, surveille les séjours pour lesquels vous êtes complet et interroge Little Hotelier selon un calendrier. Quand toutes les chambres demandées sont libres pour chaque nuit, le client, votre équipe, ou les deux, reçoivent un message par e-mail ou WhatsApp, avec un lien de réservation directe.

## Comment ça marche

1. **Ajoutez un séjour à surveiller.** Sur `/availability-watch`, choisissez la première et la dernière nuit, les chambres nécessaires et, facultativement, les types de chambre. Un groupe mixte peut demander des nombres différents par type de chambre.
2. **Choisissez qui est prévenu.** Ajoutez les coordonnées du client, et les vôtres. Choisissez les alertes : **available** (toutes les chambres sont libres, ce qui clôt la surveillance), **partial** (moins de chambres que demandé, uniquement pour l'établissement par défaut) ou **expiring** (le séjour commence dans les 48 heures et rien n'a été trouvé).
3. **Planifiez la vérification.** Appuyez sur **Check every night at 01:00**, ou choisissez n'importe quel rythme, de toutes les 20 minutes à une fois par jour. **Check the queue now** la lance immédiatement.
4. **Un message par surveillance.** La nuit la plus faible décide : un séjour n'est libre que si chaque nuit dispose des chambres. Une fois le message parti, l'entrée se clôt, et **History** conserve le texte exact envoyé.
5. **Laissez les clients s'inscrire.** La **Public waiting-list page** (`/availability-watch/public`) est un formulaire que vous reliez depuis votre site web. Les clients choisissent leurs nuits, laissent un e-mail et cochent une case de consentement.

Une méthode avec tableur et des règles pour décider qui passe en premier se trouvent dans [comment tenir une liste d'attente pour les dates complètes](/blog/hotel-waitlist-sold-out-dates).

## Ce dont vous avez besoin

- Little Hotelier connecté sur **Credentials**.
- La vérification planifiée. Rien n'est contrôlé tant que cette tâche n'existe pas.
- Pour les messages WhatsApp, un numéro WhatsApp connecté.
- Votre raison sociale et votre adresse sur la fiche de l'établissement, car l'avis de confidentialité du formulaire public en est issu.

## Limites et bon à savoir

- **Statut : bêta.**
- **Rien n'est bloqué.** La liste d'attente ne réserve jamais de chambre et ne modifie aucune réservation. Le premier client qui réserve obtient la chambre.
- **Une vérification de nuit peut arriver tard.** Vérifiez plus souvent en haute saison.
- **La page publique est désactivée tant que vous ne l'ouvrez pas.** Par défaut, elle demande aux clients de confirmer leur e-mail et accepte des séjours de 14 nuits et 2 chambres au maximum par demande. Elle plafonne la liste à 100 personnes en attente et 40 inscriptions par jour. Les coordonnées sont supprimées des entrées clôturées après 90 jours.
- **Elle alimente vos prix.** Chaque groupe en attente augmente de 3 % la [recommandation de prix](/tools/bot/dynamic-pricing) de cette nuit, jusqu'à 12 %.
