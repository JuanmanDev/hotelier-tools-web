---
title: "Actualisation Automatique en cas d'Inactivité"
description: "Recharge la page Little Hotelier ouverte après 10 minutes d'inactivité, pour que la réception affiche toujours les réservations à jour et une session active."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js"
category: "General"
images:
  before: "/images/scripts/auto-refresh-inactivity/from.webp"
  after: "/images/scripts/auto-refresh-inactivity/to.webp"
  gallery:
    - "/images/scripts/auto-refresh-inactivity/from.webp"
    - "/images/scripts/auto-refresh-inactivity/to.webp"
---

Ce script recharge la page Little Hotelier que vous avez ouverte après 10 minutes sans activité. Il est conçu pour les ordinateurs de réception où Little Hotelier reste ouvert toute la journée : le personnel qui revient au comptoir voit les réservations actuelles et une session qui fonctionne, au lieu d'une vieille page pleine d'erreurs.

## Le problème résolu

Une page laissée de côté continue d'afficher les données chargées au départ. Les nouvelles réservations, annulations et changements de chambre effectués par les canaux ou par vos collègues n'apparaissent que si quelqu'un recharge la page. La session peut aussi expirer en arrière-plan, et le premier clic après une pause échoue alors. Recharger par habitude est facile à oublier quand un client attend au comptoir.

## Ce qui change

- Un minuteur de 10 minutes démarre au chargement de la page.
- Tout clic, mouvement de souris, défilement ou geste tactile sur la page relance le minuteur, donc la page ne se recharge jamais pendant que quelqu'un l'utilise.
- Quand 10 minutes s'écoulent sans aucune de ces actions, le script recharge la même adresse que celle où vous vous trouviez.
- Rien d'autre ne change sur la page : pas de nouveaux boutons ni de nouveaux panneaux.

## Comment l'installer

Installez l'extension gratuite Tampermonkey, appuyez sur **Install on Tampermonkey** sur cette page, confirmez, puis rechargez Little Hotelier. Le [guide d'installation](/tools/ui/instructions) détaille chaque étape. Le script s'exécute sur les trois adresses de Little Hotelier : app.littlehotelier.com (Front Desk), application.littlehotelier.com (les écrans plus récents, comme le calendrier) et app.thebookingbutton.com (Direct Booking). Il est gratuit et open source ; le [code est sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js).

## Bon à savoir

- Un rechargement fait perdre tout ce qui n'a pas été enregistré. La saisie au clavier ne compte pas comme une activité : si quelqu'un écrit une longue note pendant 10 minutes sans toucher à la souris, la page peut se recharger avant l'enregistrement. Enregistrez au fur et à mesure.
- Le délai de 10 minutes est une valeur fixe du script (600 secondes). Pour le changer, modifiez ce nombre dans l'éditeur de Tampermonkey.
- Il fonctionne de la même façon sur ordinateur et sur écran tactile, car les gestes et les appuis tactiles comptent aussi comme de l'activité.
- Il s'exécute sur toutes les pages Little Hotelier concernées, y compris le calendrier, la liste des réservations et Direct Booking.
- Le script ne stocke rien et n'envoie rien nulle part.

## À lire aussi

- [Astuces et fonctions cachées de Little Hotelier](/blog/little-hotelier-tips)
- [Checklist quotidienne de la réception d'hôtel pour Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Tableau de Réservation Pleine Largeur](/tools/ui/full-width-reservation-table)
