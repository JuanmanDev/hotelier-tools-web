---
title: "Checklist réception hôtel pour Little Hotelier : 8 problèmes à repérer avant l'arrivée des clients"
seoTitle: "Checklist réception hôtel quotidienne avec Little Hotelier"
description: "Une checklist quotidienne de réception pour Little Hotelier : 8 problèmes de réservation à repérer avant l'arrivée, où les voir, et comment en automatiser cinq."
date: 2026-10-03
category: operations
tags: [front desk, checklist, check-in, automation, little hotelier]
keywords: [checklist réception hôtel, checklist réception hôtel quotidienne, modèle de checklist réception, checklist check-in hôtel, réservations non attribuées little hotelier, automatisation hôtel]
feature: automated-checks
demoPath: /automated-checks
cover: /images/blog/demo/en/automated-checks-lifecycle.webp
coverAlt: "Page Automated Checks de Hotelier Tools : le fonctionnement des contrôles en quatre étapes, un avis Nothing runs any check yet suggérant Before they arrive, et The journey of a reservation à travers ses cinq étapes"
faq:
  - q: "Que doit contrôler la réception d'un hôtel chaque jour ?"
    a: "Pour les arrivées d'aujourd'hui et de demain : une chambre attribuée, le solde payé, une carte valide, une pièce d'identité, une adresse, le bon nombre de clients, une heure d'arrivée, et aucune correspondance avec votre liste do-not-rebook. Pour les départs du jour : le solde et tout ce dont la facture a besoin."
  - q: "Comment trouver les réservations sans chambre dans Little Hotelier ?"
    a: "Ouvrez Front Desk > Reservations, filtrez par date d'arrivée et cherchez une colonne Room vide. Le Calendar affiche aussi en haut un compteur de réservations non attribuées."
  - q: "À quelle fréquence les contrôles automatiques peuvent-ils s'exécuter ?"
    a: "Chaque tâche de contrôle a son propre calendrier. Les calendriers recommandés s'exécutent une fois par jour, et une tâche peut s'exécuter au plus une fois par heure, car chaque exécution se connecte à Little Hotelier."
  - q: "Hotelier Tools modifiera-t-il ou annulera-t-il mes réservations ?"
    a: "Non. Les contrôles ne font que déclencher des alertes. La seule exception est le départ automatique (automatic check-out), qui écrit dans Little Hotelier et reste désactivé tant que vous ne l'activez pas."
  - q: "Puis-je imprimer cette checklist ?"
    a: "Oui. Copiez le tableau de ce guide dans un document, ou exportez les arrivées filtrées depuis Front Desk > Reservations au format CSV et imprimez-le."
  - q: "Hotelier Tools fait-il partie de Little Hotelier ?"
    a: "Non. C'est un tableau de bord indépendant, ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec l'identifiant Little Hotelier de votre hôtel."
---

Chaque jour, contrôlez huit points sur les arrivées d'aujourd'hui et de demain : une chambre attribuée, le solde payé, une carte valide, une pièce d'identité, une adresse, le bon nombre de clients, une heure d'arrivée, et aucune correspondance avec votre liste do-not-rebook. Dans Little Hotelier, la plupart tiennent sur un seul écran : **Front Desk > Reservations**, filtré par date d'arrivée. Hotelier Tools exécute cinq des huit automatiquement à cinq moments du séjour et ne vous envoie par e-mail que ce qu'il faut corriger.

## Les 8 problèmes de réservation à repérer avant l'arrivée d'un client

1. **Pas de chambre attribuée.** Une réservation sans numéro de chambre passe facilement inaperçue jusqu'à ce que le client soit devant le comptoir.
2. **Solde impayé.** Vous voulez savoir avant l'arrivée s'il faut encaisser, relancer un acompte ou envoyer un lien de paiement.
3. **Carte invalide sur une réservation Booking.com.** Booking.com laisse un délai au client pour mettre à jour sa carte : la découvrir tard réduit vos options.
4. **Pièce d'identité manquante.** De nombreux pays l'exigent pour l'enregistrement des clients. Voyez la [fiche de police et les règles d'enregistrement par pays](/blog/guest-registration-rules-by-country).
5. **Adresse ou pays manquant.** Nécessaire à l'enregistrement, aux statistiques officielles comme l'enquête INE espagnole, et à une facture correcte.
6. **Mauvais nombre de clients.** Zéro adulte, ou deux clients sur une réservation pour quatre, peut fausser l'enregistrement, le petit-déjeuner et toute taxe de séjour facturée par personne.
7. **Pas d'heure d'arrivée.** Les arrivées tardives et le self check-in demandent un plan la veille.
8. **Un client à qui vous avez demandé de ne pas revenir.** Mieux vaut le savoir avant son arrivée. Voyez [comment tenir une liste noire de clients](/blog/hotel-do-not-rent-list).

Copiez ce tableau comme checklist imprimable :

| Contrôle | Où regarder dans Little Hotelier | Automatisé dans Hotelier Tools |
|---|---|---|
| Chambre attribuée | Colonne **Room** dans Reservations ; compteur de non-attribuées dans le Calendar | Oui |
| Solde payé | Colonne **Outstanding** dans Reservations | Oui |
| Carte valide (Booking.com) | Channel Manager > réservation > **Manage Reservation** | Non |
| Pièce d'identité | Réservation > onglet **Guests** | Oui |
| Adresse et pays | Réservation > onglets **Details** et **Guests** | Oui |
| Nombre de clients | Colonne **Occupants** dans Reservations | Non |
| Heure d'arrivée | Colonne **ETA** dans Reservations | Non |
| Correspondance do-not-rebook | Votre propre liste | Oui |

## Comment les vérifier dans Little Hotelier sans ouvrir chaque réservation

1. Allez dans **My Apps > Front Desk > Reservations**.
2. Réglez le type de date sur **Check-in date**, choisissez aujourd'hui et demain (ou la semaine à venir), réglez le statut sur **Confirmed** et cliquez sur **Search**.
3. Lisez les colonnes : une colonne **Room** vide, le nombre d'**Occupants**, une **ETA** vide et tout ce qui figure dans **Outstanding**.
4. Vous voulez du papier ? Cliquez sur **Export** pour un CSV. Les numéros de téléphone des clients sont exclus du fichier pour des raisons de sécurité.

Source : [Run and export reservations information](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information).

Les pièces d'identité et les adresses sont la partie lente. Elles se trouvent dans les onglets **Details** et **Guests** de chaque réservation ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8673701-edit-a-reservation)) : il faut donc ouvrir chaque arrivée.

### Cartes Booking.com invalides

Dans Little Hotelier, ouvrez la réservation sous **Channel Manager > Reservations**, allez dans l'onglet **Manage Reservation** et cliquez sur **Report payment card as invalid to Booking.com** ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)).

En octobre 2026, le client dispose alors de 24 heures pour mettre à jour la carte. Pour les réservations faites moins de 48 heures avant l'arrivée, c'est 12 heures, ou jusqu'à 15 h le jour de l'arrivée, selon ce qui arrive en premier. S'il ne le fait pas, vous pouvez annuler jusqu'à 15 h (heure locale) le jour de l'arrivée ([Booking.com Partner Hub](https://partner.booking.com/en-us/help/policies-payments/guest-payments/handling-invalid-credit-cards)). C'est pourquoi les cartes ont leur place sur la liste de la veille. Marche à suivre complète : [carte invalide ou no-show sur Booking.com](/blog/booking-com-invalid-card-no-show).

::callout{type="tip" title="Des scripts gratuits pour accélérer cet écran"}
[Full Width Reservation Table](/tools/ui/full-width-reservation-table) affiche toutes les colonnes sans défilement latéral. [Update Number Adults](/tools/ui/update-number-adults) règle les nouvelles réservations sur 2 adultes pour qu'un 0 ne passe pas à travers. Plus dans [extensions Chrome gratuites pour Little Hotelier](/blog/little-hotelier-chrome-extensions).
::

## La veille ou le jour même : quand lancer chaque contrôle

Certains problèmes demandent du temps pour être réglés (une carte, une chambre), d'autres ne peuvent être vérifiés que lorsque le client est devant vous (la pièce d'identité). Hotelier Tools découpe le séjour en cinq moments, chacun avec sa propre tâche programmée :

| Moment | Réservations lues | Ce qu'il contrôle |
|---|---|---|
| Après la prise d'une réservation | Réservées hier et aujourd'hui | Chambre, pièce d'identité, adresse, liste do-not-rebook |
| Avant l'arrivée | Arrivée d'aujourd'hui jusqu'à 7 jours à l'avance (1 à 60, à votre choix) | Chambre, paiement, liste do-not-rebook |
| À l'arrivée | Arrivée aujourd'hui | Pièce d'identité, adresse, chambre |
| Pendant le séjour | Arrivée au cours des 7 derniers jours (réglable) | Pièce d'identité, adresse |
| Au départ | Départ aujourd'hui | Pièce d'identité, adresse, solde |

Une règle simple : les chambres, les paiements et les cartes la veille ; la pièce d'identité et l'adresse le jour de l'arrivée ; le solde le jour du départ.

## Comment automatiser la checklist avec Hotelier Tools

1. Inscrivez-vous sur [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) et connectez Little Hotelier sur **Credentials**.
2. Ouvrez **Automated Checks** (`/automated-checks`). Si rien ne s'exécute encore, la page suggère de commencer par **Before they arrive** : il repère un séjour sans chambre alors qu'il est encore temps d'en attribuer une.
3. Ouvrez un moment, activez ou désactivez ses contrôles et appuyez sur **Save and activate task**. Cela crée la tâche programmée avec le calendrier recommandé, par exemple chaque nuit à 23 h 30 pour « After a booking is made ».
4. Les problèmes apparaissent sur **Issues** (`/automated-checks/issues`), regroupés par réservation. Filtrez par problèmes ouverts, type de contrôle ou dates de séjour.
5. Corrigez la réservation dans Little Hotelier, puis appuyez sur **Verify**. Les contrôles se relancent sur cette seule réservation et le problème se ferme une fois corrigé.

::screenshot{src="/images/blog/demo/en/automated-checks-moment-on-arrival.webp" alt="Moment When they arrive dans Hotelier Tools : la carte de tâche pas encore configurée avec Every 3 hours, Choose et Run now, le bouton Save and activate task, et les contrôles ID / passport (police register), physical room assignment et address and origin validation activés" caption="Chaque moment du séjour a ses propres contrôles et son propre calendrier. Ici, When they arrive." path="/automated-checks/moment/on_arrival"}
::

::screenshot{src="/images/blog/demo/en/automated-checks-issues.webp" alt="Page Issues avec 20 problèmes ouverts, 5 corrigés et 25 au total, des filtres par problèmes ouverts, type de contrôle et dates de séjour, et des réservations listées avec un avertissement de solde impayé à l'arrivée et un bouton Verify" caption="Les problèmes regroupés par réservation. Corrigez-les dans Little Hotelier, puis appuyez sur Verify." path="/automated-checks/issues"}
::

::demo-cta{path="/automated-checks"}
::

## À quoi ressemble l'e-mail de rapport

Chaque exécution envoie **un e-mail de rapport par tâche**, dans la langue que vous avez choisie pour cette tâche : un résumé clair de ce que l'exécution a trouvé, facile à lire sur un téléphone. Chaque problème figure aussi sur **Issues** : l'e-mail est votre rappel et le tableau de bord est l'endroit où vous travaillez. Les destinataires partagés, comme le propriétaire et la réception, se définissent dans **Settings > Notifications** (`/settings/notifications`).

::screenshot{src="/images/blog/demo/en/settings-report-recipients.webp" alt="Page de paramètres Report recipients dans Hotelier Tools avec une adresse partagée dans le champ Addresses, une adresse suggérée à ajouter, et la note indiquant que le rapport de chaque tâche programmée va à cette liste sauf si la tâche indique la sienne" caption="La page Report recipients dans Settings : les adresses partagées reçoivent l'e-mail de rapport de chaque tâche de contrôle." path="/settings/notifications"}
::

## Limites, et ce que les contrôles ne modifient jamais

- **Ils ne font qu'alerter.** Aucun contrôle ne modifie, n'annule ni ne débite une réservation. L'exception est le **départ automatique** facultatif, qui écrit dans Little Hotelier et reste désactivé par défaut.
- **Au plus une fois par heure par tâche.** Chaque exécution se connecte à Little Hotelier : l'intervalle minimal est donc de 60 minutes.
- **Ils se mettent en pause en toute sécurité.** Si votre mot de passe Little Hotelier expire, les tâches programmées se mettent elles-mêmes en pause au lieu de réessayer, ce qui protège votre compte d'un blocage. Le tableau de bord affiche « Automated jobs are paused » jusqu'à ce que vous enregistriez le nouveau mot de passe sur **Credentials** ou que vous appuyiez sur **Check now & resume**.
- **Trois contrôles restent manuels.** Les cartes, le nombre de clients et les heures d'arrivée ne sont pas contrôlés automatiquement : gardez-les sur votre liste du matin.

Chaque tâche est listée sous **Cron Jobs** (`/cron`) et chaque exécution sous **Run History** (`/cron-logs`). La fonctionnalité est en bêta. Plus de détails sur la programmation sur la [page Automations](/tools/bot/automations), et sur la fonctionnalité complète dans [Automated checks](/tools/bot/automated-checks).

## Résumé

- Contrôlez huit points avant chaque arrivée : chambre, solde, carte, pièce d'identité, adresse, nombre de clients, heure d'arrivée et votre liste do-not-rebook.
- Dans Little Hotelier, la liste **Reservations** filtrée par date d'arrivée en montre quatre d'un coup d'œil ; la pièce d'identité et l'adresse exigent d'ouvrir chaque réservation.
- Hotelier Tools contrôle la chambre, le paiement, la pièce d'identité, l'adresse et la liste do-not-rebook à cinq moments du séjour, liste les problèmes sur **Issues** et envoie un rapport par e-mail.
- Commencez par **Before they arrive**, puis ajoutez les autres moments.
