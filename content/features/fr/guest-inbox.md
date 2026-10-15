---
title: "Une seule messagerie clients pour WhatsApp, e-mail et Booking.com"
---

La messagerie clients réunit les messages WhatsApp, e-mail et Booking.com dans une seule liste, avec la réservation Little Hotelier à côté de chaque conversation. Une IA rédige chaque réponse à partir de votre propre FAQ et de vos notes sur l'établissement, et par défaut une personne l'approuve avant tout envoi.

## Comment ça marche

1. **Connectez vos canaux.** Booking.com via **Credentials > Booking.com extranet** avec votre identifiant partenaire et votre second facteur. L'e-mail depuis Google, Microsoft ou n'importe quel compte IMAP/SMTP. WhatsApp via une session WhatsApp Web (WAHA).
2. **Les messages arrivent à côté de la réservation.** Une conversation Booking.com est liée automatiquement à sa réservation. Les questions des clients (Q&A) posées sur votre page Booking.com arrivent dans la même messagerie.
3. **Choisissez un mode de réponse par compte** sur **Channels** (`/messaging/channels`) : **Off**, **Draft** (le mode par défaut, rien ne se passe tant que vous n'approuvez pas), **Automatic reply** après un délai que vous choisissez, ou **Autonomous**.
4. **Apprenez-lui vos réponses.** Sur **FAQ & knowledge** (`/messaging/faq`), ajoutez votre page de FAQ ou un texte, et des notes sur l'établissement comme le wifi et le parking. Corrigez une réponse une fois et l'assistant en tire des leçons.
5. **Les demandes de facture sont reconnues sans IA.** Les messages de demande de facture de Booking.com proposent d'inscrire le séjour à la facture au départ.

Détails de configuration par canal : [WhatsApp avec Little Hotelier](/blog/whatsapp-little-hotelier) et [gérer les messages des clients Booking.com](/blog/booking-com-guest-messages).

## Ce dont vous avez besoin

- Little Hotelier connecté sur **Credentials**, et la fiche de votre établissement remplie sur `/settings/property`.
- Pour WhatsApp, un serveur WAHA : son adresse, un nom de session et une clé d'API.
- Des crédits IA. Chaque message que l'IA lit et rédige en consomme, et ils s'affichent sur **AI credits** (`/messaging/credits`).

## Limites et bon à savoir

- **Statut : alpha.** C'est une version précoce qui change souvent.
- **Booking.com reste envoyé par une personne.** L'IA n'envoie jamais d'elle-même aux clients Booking.com. L'envoi de votre réponse approuvée vers Booking.com depuis la messagerie n'est pas encore promis : copiez-la dans l'Extranet ou dans Pulse.
- **L'IA des clients n'a pas d'outils.** Elle renvoie un plan tiré d'une liste fermée et ne peut jamais annuler, changer des dates ni toucher aux paiements.
- **Elle ne voit une réservation que pour un expéditeur vérifié :** un téléphone correspondant sur les 8 derniers chiffres, l'e-mail exact, ou une conversation Booking.com.
- **Un service que vous n'avez pas listé** reçoit la réponse « à confirmer », jamais oui.
- **WhatsApp via WAHA n'est pas l'API officielle.** Un numéro utilisé ainsi pourrait être bloqué : ne répondez donc qu'aux clients qui écrivent en premier. Les discussions de groupe sont ignorées.
- Les réponses automatiques s'arrêtent à 4 par heure ou 12 par jour.
