---
title: "L'enquête d'occupation hôtelière de l'INE depuis Little Hotelier"
---

Les rapports INE élaborent l'enquête d'occupation hôtelière espagnole de l'INE à partir de vos réservations Little Hotelier : arrivées et nuitées par région espagnole ou par pays, chambres occupées, lits supplémentaires et tarif moyen par type de client. Hotelier Tools valide les chiffres, envoie le XML par le système IRIA de l'INE et conserve l'accusé de réception.

## Comment ça marche

1. **Configurez votre établissement une seule fois.** Sur **INE Setup** (`/ine-setup`), saisissez votre numéro d'ordre IRIA (NOrden) et votre mot de passe, appuyez sur **Test IRIA connection**, puis renseignez l'adresse, la capacité, le type et la catégorie pour l'en-tête du XML.
2. **Générez le rapport.** Sur **Guest Origins** (`/reports/guest-origins`), choisissez les dates indiquées dans la demande de l'INE et appuyez sur **Generate report**. Des onglets répartissent le résultat en résumé quotidien, origine des clients, chambres, ADR par client et qualité des données.
3. **Corrigez les clients sans origine.** Les réservations sans nationalité ni province sont signalées. Corrigez-les dans Little Hotelier et actualisez uniquement ces lignes.
4. **Validez, prévisualisez et envoyez.** Appuyez sur **Validate for the INE**, puis **Preview XML**, puis **Send to the INE**. L'accusé de réception de l'INE est conservé avec le rapport.
5. **Gardez l'historique.** **Saved Reports** (`/reports/list`) liste chaque mois avec son statut et son accusé de réception.

Si la messagerie qui reçoit les e-mails de l'INE est connectée à la messagerie clients, la demande de l'INE affiche un bouton qui génère le rapport pour exactement les dates demandées.

Ce que demande l'enquête, les amendes et les rejets d'IRIA à éviter se trouvent dans [comment remplir l'enquête d'occupation hôtelière de l'INE](/blog/ine-hotel-occupancy-survey).

## Ce dont vous avez besoin

- Une demande de l'INE avec votre numéro d'ordre et votre mot de passe. L'enquête ne s'applique qu'une fois que l'INE a sélectionné votre établissement.
- Little Hotelier connecté sur **Credentials**.
- Le pays et la province des clients renseignés. L'INE compte les clients selon leur lieu de résidence, pas leur nationalité. Le script gratuit [Sauvegarde Facile Province et Pays](/tools/ui/easy-save-province-country) et les [vérifications automatiques](/tools/bot/automated-checks) aident à les garder complets.

## Limites et bon à savoir

- **Statut : stable.**
- Il élabore le questionnaire hôtelier pour les établissements de type hôtel : hôtels, hostales et pensiones. Les appartements touristiques, campings, maisons rurales et albergues répondent à d'autres questionnaires de l'INE.
- Un rapport envoyé ne peut plus être modifié ni supprimé, mais vous pouvez toujours télécharger son XML.
- Votre mot de passe IRIA est stocké chiffré et n'est jamais affiché en clair.
- Dans la démo publique, l'envoi à l'INE est désactivé. N'y saisissez jamais de véritables identifiants IRIA.
- Hotelier Tools n'est affilié ni à l'INE, ni à SiteMinder, ni à Little Hotelier.
