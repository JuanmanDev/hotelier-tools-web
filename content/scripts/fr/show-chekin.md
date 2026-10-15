---
title: "Connexion avec Chekin"
description: "Connecte Chekin, le service d'enregistrement, à Little Hotelier : un panneau liste les clients enregistrés et copie leurs données dans les formulaires."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js"
category: "Détails de la réservation"
images:
  before: "/images/scripts/show-chekin/from.webp"
  after: "/images/scripts/show-chekin/to.webp"
  gallery:
    - "/images/scripts/show-chekin/from.webp"
    - "/images/scripts/show-chekin/to.webp"
    - "/images/scripts/show-chekin/login-required.webp"
    - "/images/scripts/show-chekin/login-on-chekin.webp"
    - "/images/scripts/show-chekin/url-to-share.webp"
    - "/images/scripts/show-chekin/loading.webp"
---

Ce script connecte Chekin, le service d'enregistrement en ligne, à Little Hotelier. Quand vous ouvrez une réservation, un panneau Chekin affiche les clients déjà enregistrés et vous permet de copier leurs données dans les formulaires de clients de Little Hotelier. Il s'adresse aux équipes de réception qui utilisent Chekin pour recueillir les pièces d'identité des clients.

## Le problème résolu

Sans lui, chaque arrivée oblige à retrouver la réservation dans Chekin, à vérifier qui s'est enregistré, puis à copier à la main les numéros de document et les adresses. C'est lent, et les numéros de pièce d'identité copiés se tapent facilement de travers.

## Ce qui change

Sur l'écran de modification d'une réservation dans Front Desk, un panneau Chekin est ajouté à la section du contact principal :

- **Statut :** indique si la réservation a été trouvée dans Chekin et combien de clients sont enregistrés, avec un lien **View in Chekin**.
- **Tableau des clients :** nom, téléphone, numéro de document, ville, province et pays de chaque client enregistré.
- **Use as Primary :** copie le numéro de document de ce client dans le champ d'identité du client principal, prêt pour la facture.
- **Save Guest** et **Save All Guests :** remplissent les formulaires de clients supplémentaires de Little Hotelier avec les données de Chekin. Vous appuyez ensuite sur le bouton Save de Little Hotelier pour confirmer.
- **Lien du formulaire d'enregistrement :** quand personne ne s'est encore enregistré, le lien du formulaire client avec les boutons Open, Copy, Email et WhatsApp, à partir de l'e-mail et du téléphone du client indiqués dans la réservation.
- **Create Checkin Reservation :** si rien ne correspond, crée la réservation dans Chekin à partir des dates, des chambres, du nombre de clients et des coordonnées de Little Hotelier.

Sur le calendrier, le script charge aussi en arrière-plan les données Chekin des réservations visibles, pour que les réservations s'ouvrent plus vite.

## Comment l'installer

Il vous faut l'extension gratuite Tampermonkey et un compte Chekin. Appuyez sur **Install on Tampermonkey**, confirmez, puis connectez-vous à dashboard.chekin.com dans le même navigateur. Le [guide d'installation](/tools/ui/instructions) détaille les étapes. Le script s'exécute sur les pages de modification de réservation de Little Hotelier, sur le calendrier et sur les pages du tableau de bord Chekin qu'il ouvre lui-même. Il est gratuit et open source : [lisez le code sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js).

## Bon à savoir

- Il utilise votre propre connexion à Chekin. Si vous êtes déconnecté, le panneau affiche un bouton **Login Required on Chekin**.
- Pour effectuer la recherche, il ouvre un onglet Chekin en arrière-plan.
- La réservation doit avoir une date d'arrivée et une chambre attribuée. Il fait la correspondance par référence de réservation, puis par numéro de chambre.
- Les résultats sont conservés dans votre navigateur jusqu'à 24 heures, et les préchargements du calendrier jusqu'à 4 heures.
- Le panneau suit la langue de votre navigateur (anglais ou espagnol). Les messages partagés se terminent par la signature de l'établissement de l'auteur ; modifiez-la dans le script.

## À lire aussi

- [SES Hospedajes avec Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [Règles d'enregistrement des clients par pays](/blog/guest-registration-rules-by-country)
- [Sauvegarde Facile Province et Pays](/tools/ui/easy-save-province-country)
