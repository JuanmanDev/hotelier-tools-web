---
title: "Sauvegarde Facile Province et Pays"
description: "Accélère la saisie des données client dans une réservation Little Hotelier : provinces espagnoles à toucher, pays défini automatiquement sur l'Espagne."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/easy-save-province-country/from.webp"
  after: "/images/scripts/easy-save-province-country/to.webp"
  gallery:
    - "/images/scripts/easy-save-province-country/from.webp"
    - "/images/scripts/easy-save-province-country/to.webp"
    - "/images/scripts/easy-save-province-country/three.webp"
---

Ce script accélère la saisie des données des clients dans une réservation Little Hotelier, surtout pour les clients espagnols. Quand vous cliquez sur le champ de la province, il affiche une liste de provinces espagnoles à toucher, et en choisir une définit aussi le pays sur l'Espagne. Il est conçu pour le personnel de réception des établissements en Espagne et pour être facile à utiliser sur une tablette.

## Le problème résolu

Pour les clients espagnols, Little Hotelier a besoin d'une province en plus du pays, et des rapports comme l'enquête d'occupation hôtelière de l'INE regroupent les clients par province de résidence. Saisir les noms de provinces à la main entraîne des variantes d'orthographe (Vizcaya ou Bizkaia, Orense ou Ourense), la liste des pays est longue à parcourir, et le formulaire d'un client supplémentaire ne s'enregistre pas tant que ses champs de nom sont vides.

## Ce qui change

Sur l'écran de modification d'une réservation dans Front Desk :

- **Sélecteur de province :** quand on active le champ de la province, une grille s'ouvre avec les 50 provinces espagnoles plus Ceuta et Melilla. La saisie filtre la grille, et des variantes courantes comme Gerona, Lérida, Seville, Mallorca ou Tenerife trouvent la bonne province.
- **Pays défini pour vous :** choisir une province définit le pays du client sur l'Espagne.
- **Sélecteur de pays :** le champ du pays ouvre une grille avec recherche qui affiche chaque pays en espagnol, avec le nom anglais en dessous.
- **Noms vides remplis :** quand vous choisissez une province ou un pays, les champs de prénom et de nom vides de ce formulaire de client reprennent le nom du client principal, ou un trait de soulignement « _ » si celui-ci est vide aussi, pour que le formulaire puisse être enregistré.
- **Formulaires de clients ouverts :** les formulaires de clients repliés sont déployés automatiquement et le curseur se place dans le champ de la province.
- **Boutons adaptés au tactile :** le bouton d'ajout de client et les flèches de déploiement sont plus grands, et la croix rouge pour supprimer un client est toujours visible.

## Comment l'installer

Il vous faut l'extension gratuite Tampermonkey. Appuyez sur **Install on Tampermonkey**, confirmez, puis rechargez la réservation. Le [guide d'installation](/tools/ui/instructions) détaille chaque étape. Le script ne s'exécute que sur les pages de modification de réservation (app.littlehotelier.com/extranet/properties/.../reservations/.../edit). Il est gratuit et open source : [lisez le code sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js).

## Bon à savoir

- Le sélecteur de province n'apparaît que si le pays du client est vide ou l'Espagne. Pour les autres pays, le champ fonctionne normalement.
- Le champ de recherche et les noms de pays sont en espagnol, quelle que soit la langue utilisée par Little Hotelier.
- Les champs de nom remplis copient le nom du client principal. Corrigez-les si le client supplémentaire porte un autre nom.
- Les modifications se font uniquement dans le formulaire. Rien n'est enregistré tant que vous n'appuyez pas sur Save, et le script ne stocke rien.

## À lire aussi

- [SES Hospedajes avec Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [Comment remplir l'enquête d'occupation hôtelière de l'INE](/blog/ine-hotel-occupancy-survey)
- [Connexion avec Chekin](/tools/ui/show-chekin)
