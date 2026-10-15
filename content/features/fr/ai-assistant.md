---
title: "Un assistant IA pour la réception de votre Little Hotelier"
---

L'assistant IA répond en langage courant à vos questions sur vos réservations, clients, prix, factures, vérifications et liste d'attente Little Hotelier, et prépare des modifications pour vous. Il lit librement, mais chaque modification apparaît sous forme de carte que vous approuvez ou refusez avant que quoi que ce soit n'arrive dans Little Hotelier.

## Comment ça marche

1. **Posez votre question dans le chat.** Ouvrez **AI Chat** (`/chat`) et tapez une demande, par exemple qui arrive demain et qui doit encore de l'argent. Les réponses reviennent sous forme de texte et de cartes : résumés de réservations, modification proposée avec un tableau de preuves, ou tableau de recommandations de prix.
2. **Approuvez ou refusez.** Toute écriture passe par une carte. Si le système ne peut pas savoir si un outil lit ou écrit, il le traite comme une écriture. La carte montre la valeur dans Little Hotelier à côté de la nouvelle, et d'où elle vient.
3. **Approuver exécute exactement cette modification.** L'appel enregistré s'exécute sur le serveur, et l'IA n'a pas de seconde chance de le réécrire. Chaque approbation ne fonctionne qu'une fois et expire au bout de 24 heures. Les remboursements passent toujours par leur propre carte.
4. **Votre personnel peut aussi poser des questions.** Sur **Staff assistant** (`/staff`), enregistrez un employé avec son numéro WhatsApp ou son e-mail et un rôle : **Read only** ou **Can request changes**. Il écrit à votre numéro ou à votre messagerie connectés, et toute modification qu'il demande attend l'approbation du propriétaire.

Des demandes réelles et ce qui se passe après chacune sont décrites dans [Assistant IA pour la réception d'un petit hôtel](/blog/ai-assistant-hotel-front-desk).

## Ce dont vous avez besoin

- Little Hotelier connecté sur **Credentials**.
- La fiche de votre établissement sur `/settings/property`, lue depuis Little Hotelier.
- Pour l'assistant du personnel, un numéro WhatsApp ou une messagerie connectés.
- Des crédits IA : chaque réponse en consomme, et votre solde se trouve sur **AI credits**.

## Limites et bon à savoir

- **Statut :** le chat et les approbations sont en bêta, l'assistant du personnel est en alpha, et les comptes d'équipe avec les rôles propriétaire, responsable et employé arrivent bientôt.
- **La voix est en espagnol pour l'instant.** Le microphone utilise la reconnaissance vocale de votre navigateur réglée sur l'espagnol (es-ES). Vous pouvez écrire dans n'importe quelle langue.
- **L'identité du personnel est l'expéditeur.** Un numéro de téléphone enregistré, ou un e-mail qui passe les contrôles DKIM/DMARC. Les messages du personnel de plus de 30 minutes ne reçoivent pas de réponse.
- **En dehors du tableau de bord, il n'y a pas de carte.** Quand Claude ou ChatGPT appelle un outil d'écriture via le [serveur MCP](/tools/bot/api-mcp), il s'exécute immédiatement, et les remboursements y sont bloqués.
