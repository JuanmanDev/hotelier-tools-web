---
title: "Mettre à Jour le Nombre d'Adultes"
description: "Passe le nombre d'adultes par défaut d'une nouvelle réservation Little Hotelier de 0 à 2, pour éviter les réservations enregistrées sans adulte."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateNumberAdults.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/update-number-adults/from.png"
  after: "/images/scripts/update-number-adults/to.png"
  gallery:
    - "/images/scripts/update-number-adults/from.png"
    - "/images/scripts/update-number-adults/to.png"
---

Ce script fait passer le nombre d'adultes par défaut d'une nouvelle réservation Little Hotelier de 0 à 2. Il s'adresse au personnel de réception qui crée à la main des réservations au comptoir et par téléphone, où la plupart concernent deux personnes et où un champ d'adultes oublié cause des problèmes par la suite.

## Le problème résolu

Quand vous créez une réservation dans Front Desk, le champ des adultes peut démarrer à 0. Si personne ne le modifie, la réservation est enregistrée sans adulte. Zéro adulte peut fausser l'enregistrement des clients, le nombre de petits-déjeuners et toute taxe de séjour facturée par personne, et la corriger après coup oblige à retrouver et à rouvrir chaque réservation.

## Ce qui change

- Au chargement d'une page de réservation, le script regarde le champ du **nombre d'adultes**.
- S'il vaut 0, le script le fixe à 2 et signale à Little Hotelier que la valeur a changé, comme si vous l'aviez saisie.
- S'il contient un autre nombre, il est laissé tel quel, de sorte que les réservations existantes ne sont pas touchées.
- Vous pouvez toujours remplacer la valeur par 1, 3 ou tout autre nombre avant d'enregistrer.

## Comment l'installer

Installez l'extension gratuite Tampermonkey, appuyez sur **Install on Tampermonkey** sur cette page, confirmez, puis rechargez Little Hotelier. Le [guide d'installation](/tools/ui/instructions) détaille chaque étape. Le script s'exécute sur les pages Front Desk d'app.littlehotelier.com et n'agit que lorsque le champ des adultes est présent sur la page. Il est gratuit et open source : [lisez le code sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateNumberAdults.user.js).

## Bon à savoir

- La valeur 2 est fixée dans le code. Si votre établissement vend surtout des chambres ou des lits individuels, modifiez ce nombre dans l'éditeur de Tampermonkey.
- La vérification s'exécute une seule fois, une demi-seconde après le chargement de la page. Si un formulaire de réservation s'ouvre plus tard sans rechargement de la page, le champ n'est pas modifié.
- Il ne modifie que le champ dans le formulaire. Rien n'est enregistré tant que vous n'appuyez pas sur Save.
- Le nombre d'enfants n'est pas modifié.
- Il fonctionne de la même façon sur ordinateur et sur écran tactile. Il ne stocke rien et n'envoie rien nulle part.

## À lire aussi

- [Checklist quotidienne de la réception d'hôtel pour Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Sauvegarde Facile Province et Pays](/tools/ui/easy-save-province-country)
- [Astuces et fonctions cachées de Little Hotelier](/blog/little-hotelier-tips)
