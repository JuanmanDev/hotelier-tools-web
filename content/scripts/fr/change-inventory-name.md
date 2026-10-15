---
title: "Changer le Nom d'Inventaire"
description: "Renomme l'élément Inventory du menu supérieur de Little Hotelier en Inventory - Prices, pour que le personnel sache que les tarifs se modifient sur cet écran."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js"
category: "General"
images:
  before: "/images/scripts/change-inventory-name/from.png"
  after: "/images/scripts/change-inventory-name/to.png"
  gallery:
    - "/images/scripts/change-inventory-name/from.png"
    - "/images/scripts/change-inventory-name/to.png"
---

Ce petit script renomme l'élément **Inventory** du menu supérieur de Little Hotelier en **Inventory - Prices** (ou **Inventario - Precios** en espagnol). Il s'adresse aux propriétaires qui forment du nouveau personnel de réception : le libellé indique que les tarifs se définissent sur cet écran, et pas seulement la disponibilité des chambres.

## Le problème résolu

Dans Little Hotelier, les tarifs des chambres se modifient sur l'écran Inventory. Pour quelqu'un qui découvre le système, « Inventory » évoque un stock ou un nombre de chambres, et l'on cherche donc un menu « Prices » ou « Rates » qui n'existe pas. Un libellé plus clair évite de répéter la même question à chaque changement d'équipe.

## Ce qui change

- Dans le menu de navigation horizontal des écrans plus récents de Little Hotelier, l'élément intitulé « Inventory » devient « Inventory - Prices ».
- Si le menu est en espagnol, « Inventario » devient « Inventario - Precios ».
- Le suffixe suit la langue de la page : les pages en espagnol reçoivent « Precios », toute autre langue reçoit « Prices ».
- Seul le libellé visible change. Le lien mène toujours au même écran Inventory.
- Comme le menu se charge par étapes, le script réessaie trois fois pendant les premières secondes après le chargement de la page, et n'ajoute jamais le suffixe deux fois.

## Comment l'installer

Il vous faut l'extension gratuite Tampermonkey. Appuyez sur **Install on Tampermonkey** sur cette page, confirmez, puis rechargez Little Hotelier. Le [guide d'installation](/tools/ui/instructions) détaille chaque étape. Le script ne s'exécute que sur application.littlehotelier.com, l'adresse utilisée par les écrans plus récents de Little Hotelier, comme le calendrier. Il est gratuit et open source : [consultez le code sur GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js).

## Bon à savoir

- Il ne reconnaît l'élément de menu que s'il indique exactement « Inventory » ou « Inventario ». Si Little Hotelier est réglé sur une autre langue, comme le français ou l'allemand, le libellé reste tel quel.
- Il ne modifie que le menu de navigation supérieur. Les pages d'app.littlehotelier.com et de Direct Booking ne sont pas concernées, leurs menus restent donc inchangés.
- Il fonctionne de la même façon sur ordinateur et sur écran tactile.
- Il ne stocke rien et n'envoie rien nulle part.
- Si Little Hotelier renomme ou redessine le menu, le libellé peut cesser de changer jusqu'à la mise à jour du script.

## À lire aussi

- [Affichage des Prix](/tools/ui/prices-display) affiche les prix de votre Inventory sur le calendrier
- [Tarification dynamique pour les petits hôtels sur Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [Astuces et fonctions cachées de Little Hotelier](/blog/little-hotelier-tips)
