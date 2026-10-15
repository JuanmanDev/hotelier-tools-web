---
title: "Factures en masse et factures au départ pour Little Hotelier"
---

La facturation crée en une seule exécution les factures Little Hotelier manquantes pour une période, et vous donne chaque trimestre sous forme d'un ZIP de PDF et d'un résumé CSV pour votre comptable. Elle peut aussi faire envoyer par Little Hotelier la facture par e-mail à un client automatiquement une fois qu'il est parti.

## Comment ça marche

1. **Générez une période.** Sur **Invoice Download** (`/invoices`), appuyez sur **Generate invoices** et choisissez les dates, par exemple du 1er juillet au 30 septembre. Hotelier Tools lit ces réservations et demande à Little Hotelier de générer une facture pour chaque séjour concerné.
2. **Les factures à risque sont refusées.** Un contrôle préalable bloque un séjour qui n'est pas terminé, une facture d'entreprise sans numéro fiscal ni adresse fiscale, un numéro fiscal mal formé, et un séjour déjà facturé.
3. **Rien n'est ignoré en silence.** Chaque refus arrive sur **Errors** (`/invoices/errors`) avec sa raison. Corrigez la réservation dans Little Hotelier, puis vérifiez-la de nouveau.
4. **Téléchargez.** Les factures sont regroupées par trimestre et par mois. Appuyez sur **ZIP** pour tous les PDF, ou sur **Preview CSV** pour vérifier d'abord le résumé.
5. **Facture au départ.** Sur **Invoice on Leave** (`/invoice-on-leave`), marquez un séjour une seule fois. Une tâche quotidienne (16:00 par défaut) fait générer la facture par Little Hotelier après le départ et l'envoie par e-mail à partir de votre propre modèle et de votre propre expéditeur.

Les factures sont les propres documents de Little Hotelier : votre numérotation, votre logo et votre mise en page restent donc exactement tels quels. Guides pas à pas : [télécharger toutes vos factures d'un coup](/blog/download-all-little-hotelier-invoices) et [envoyer la facture au départ](/blog/send-invoice-to-guest-at-checkout).

## Ce dont vous avez besoin

- Little Hotelier connecté sur **Credentials**.
- Des clients passés en départ effectué dans Little Hotelier. Si votre équipe ne le fait pas à la main, une tâche facultative **Automatic check-out** (15:05) clôture les départs de la journée.
- Raison sociale, numéro fiscal et adresse fiscale sur la réservation pour les clients professionnels.
- Un e-mail du client sur la réservation pour les factures envoyées au départ.
- La langue des factures, définie dans **Settings > Invoices** : d'après le pays du client, ou toujours la même, avec une langue de repli.

## Limites et bon à savoir

- **Statut :** le téléchargement en masse, les contrôles préalables, les erreurs et la langue sont stables. La facture au départ est en bêta.
- La tâche de départ remonte 8 jours en arrière pour rattraper les exécutions manquées et lit jusqu'à 100 départs par exécution. Un séjour passé sans e-mail du client est signalé une seule fois, et non réessayé chaque jour.
- Il n'y a pas de fonctionnalité VeriFactu. En Espagne, gardez cette étape dans Little Hotelier.
