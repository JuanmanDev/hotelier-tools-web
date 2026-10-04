---
title: "Extension Chrome pour Little Hotelier : userscripts gratuits pour aller plus vite"
seoTitle: "Extension Chrome Little Hotelier : scripts gratuits"
description: "Userscripts gratuits pour Little Hotelier : prix dans le calendrier, tableaux larges, commission Booking.com, facture en un clic. Installation sûre."
date: 2026-10-03
category: tips
tags: [chrome extension, tampermonkey, userscripts, little hotelier, productivity]
keywords: [extension chrome little hotelier, tampermonkey scripts, userscript chrome, little hotelier calendrier prix, little hotelier pleine largeur, little hotelier commission booking.com]
demoPath: /
cover: /images/scripts/prices-display/to.png
coverAlt: "Calendrier Little Hotelier (interface en espagnol) avec le prix de chaque nuit affiché sous chaque type de chambre, ajouté par le script Prices Display"
faq:
  - q: "Ces scripts sont-ils créés par Little Hotelier ?"
    a: "Non. Ce sont des scripts gratuits et indépendants publiés par Hotelier Tools, qui n'est ni affilié à SiteMinder ou à Little Hotelier, ni approuvé par eux. Ils s'exécutent dans votre propre navigateur, au sein de votre propre session Little Hotelier."
  - q: "Tampermonkey ou une extension Chrome : laquelle me faut-il ?"
    a: "Les deux, en quelque sorte : Tampermonkey est l'extension Chrome, et les scripts s'exécutent à l'intérieur. Vous installez Tampermonkey une seule fois, puis vous ajoutez uniquement les scripts que vous voulez."
  - q: "Les scripts fonctionnent-ils sur une tablette ?"
    a: "Tampermonkey fonctionne dans plusieurs navigateurs et son menu propose une version pour téléphones et tablettes. Pour les écrans tactiles, installez Improve Style For Touch Screens, qui agrandit les boutons et les menus. Testez d'abord sur votre propre appareil."
  - q: "Un script peut-il cesser de fonctionner après une mise à jour de Little Hotelier ?"
    a: "C'est possible. Les scripts modifient les pages de Little Hotelier : une refonte peut en bloquer un jusqu'à sa mise à jour. Désactivez-le dans le menu Tampermonkey et signalez le problème sur GitHub."
  - q: "Comment désinstaller un script ?"
    a: "Cliquez sur l'icône Tampermonkey et désactivez le script, ou ouvrez Dashboard et supprimez-le. Rechargez Little Hotelier : la page retrouve son aspect normal."
  - q: "Les scripts sont-ils payants ?"
    a: "Non. Les scripts pour navigateur sont gratuits pour toujours, sans compte nécessaire."
---

Vous pouvez rendre Little Hotelier plus rapide avec des userscripts gratuits : de petits compléments qui s'exécutent dans votre navigateur grâce à l'extension Tampermonkey. Ils ajoutent les prix au calendrier, élargissent les tableaux trop étroits, estiment la commission Booking.com de chaque réservation, placent un bouton de facture en un clic sur les réservations, et plus encore. Installez Tampermonkey une seule fois, activez **Allow User Scripts** dans Chrome, puis cliquez sur **Install on Tampermonkey** sur la page de n'importe quel script.

## Qu'est-ce que Tampermonkey, et pourquoi des scripts plutôt qu'une extension ?

Tampermonkey est une extension de navigateur qui exécute des **userscripts** : de petits fichiers JavaScript qui ajustent une page web après son chargement. Au lieu d'une extension distincte pour chaque ajustement, vous installez Tampermonkey une seule fois et vous n'ajoutez que les scripts dont vous avez besoin. Il fonctionne dans Chrome, Edge, Firefox, Safari et Opera.

Chaque script de Hotelier Tools est un fichier unique et lisible dans un [dépôt GitHub public](https://github.com/JuanmanDev/TampermonkeyLittleHotelier). Il y en a 16 : 15 prêts à installer et un réalisé sur demande. Tous sont gratuits pour toujours.

## Les userscripts sont-ils sûrs ? Ce qu'ils peuvent et ne peuvent pas toucher

Question légitime, puisqu'un script s'exécute dans la page où se trouvent vos réservations. Voici ce que ces scripts font et ne font pas :

- **Ils ne s'exécutent que sur Little Hotelier.** Chaque script déclare les sites sur lesquels il peut fonctionner : les adresses propres de Little Hotelier (y compris Direct Booking), plus celles de Chekin pour le script Chekin.
- **Vos données ne sortent pas.** Les scripts dialoguent avec Little Hotelier (et avec Chekin, pour ce seul script). Rien n'est envoyé à Hotelier Tools.
- **Ils agissent en votre nom.** Un script utilise votre session ouverte : il ne peut faire que ce que vous pourriez faire par vos propres clics. Quelques-uns ajustent un formulaire avant que vous ne cliquiez sur Save, par exemple en renseignant le pays ou le nombre d'adultes.
- **Vous pouvez les lire.** Le code est public, et Tampermonkey l'affiche avant l'installation.
- **Ils se mettent à jour seuls.** Chaque script porte son adresse GitHub, ce qui permet à Tampermonkey de récupérer les nouvelles versions.

La règle générale pour tout userscript : n'installez que depuis des sources de confiance. Et si Little Hotelier modifie une page, un script peut cesser de fonctionner jusqu'à sa mise à jour. Désactivez-le dans le menu Tampermonkey et signalez-le sur GitHub.

::callout{type="info" title="Indépendant et gratuit"}
Ces scripts sont publiés par Hotelier Tools, qui n'est ni affilié à SiteMinder ou à Little Hotelier, ni approuvé par eux. Ils fonctionnent dans la propre session Little Hotelier de votre hôtel et ne nécessitent aucun compte.
::

## Comment installer un script (environ cinq minutes la première fois)

1. **Installez Tampermonkey** depuis [tampermonkey.net](https://www.tampermonkey.net/). Choisissez la version normale pour votre navigateur, pas la bêta.
2. **Autorisez-le à exécuter des scripts.** Dans Chrome 138 ou plus récent, faites un clic droit sur l'icône Tampermonkey, choisissez **Manage extension** et activez **Allow User Scripts**. Dans un Chrome plus ancien ou dans Edge, ouvrez `chrome://extensions` (ou `edge://extensions`) et activez le **Developer mode** ([FAQ Tampermonkey](https://www.tampermonkey.net/faq.php?q=Q209), en anglais).
3. **Ouvrez la page d'un script** sur ce site, par exemple [Prices Display](/tools/ui/prices-display), et cliquez sur **Install on Tampermonkey**. Tampermonkey ouvre un onglet avec le code : cliquez sur **Install**.
4. **Rechargez Little Hotelier** (F5). Le changement apparaît aussitôt.

Si le bouton ne fonctionne pas, copiez le code depuis GitHub, choisissez **Create a new script…** dans le menu Tampermonkey, collez-le et enregistrez avec Ctrl+S. Le [guide d'installation](/tools/ui/instructions) montre chaque étape en images, et [tous les scripts sont listés ici](/chrome-extensions).

::screenshot{src="/images/ui/tamperMonkeyMenu.png" alt="Menu Tampermonkey dans Chrome affichant Enabled, Create a new script et Dashboard" caption="Le menu Tampermonkey : activez ou désactivez des scripts, créez-en un à la main, ou ouvrez le Dashboard pour en supprimer un." width="624" height="645"}
::

Pour supprimer un script, cliquez sur l'icône Tampermonkey et désactivez-le, ou ouvrez **Dashboard** et supprimez-le.

## Les scripts, regroupés par usage

Chaque script a sa propre page avec des images avant-après et le bouton d'installation.

### En voir plus sur un seul écran

- [Full Width Reservation Table](/tools/ui/full-width-reservation-table) : la liste des réservations occupe toute la largeur de votre écran. Fini le défilement latéral.
- [Tables Full Width](/tools/ui/tables-full-width) : la même chose pour tous les tableaux de Direct Booking.
- [Compact Calendar UI](/tools/ui/compact-calendar-ui) : le jour et la date sur une ligne au lieu de trois, et des lignes de types de chambres plus courtes, pour que davantage de chambres tiennent dans le calendrier.
- [Compact UI Reservation Details](/tools/ui/compact-ui-reservation-details) : un écran de réservation plus compact avec une zone de commentaires plus haute.

::screenshot{src="/images/scripts/compact-calendar-ui/to.png" alt="Calendrier Little Hotelier (interface en espagnol) après Compact Calendar UI, avec le jour de la semaine et la date sur une seule ligne et des lignes de types de chambres compactes" caption="Compact Calendar UI affiche plus de chambres et de jours sur un seul écran." width="1187" height="1306"}
::

### Prix et commissions Booking.com

- [Prices Display](/tools/ui/prices-display) : affiche dans le calendrier le prix de la chambre pour chaque nuit, lu depuis votre page Inventory. Pratique quand un client appelle pour demander le prix du vendredi.
- [Show Booking.com Commissions](/tools/ui/show-booking-commissions) : ajoute une estimation détaillée de la commission et un montant net approximatif aux réservations Booking.com. C'est une estimation ; votre facture Booking.com fait foi. Plus de détails dans [combien Booking.com prélève de commission](/blog/booking-com-commission).
- [Change Inventory Name](/tools/ui/change-inventory-name) : renomme le menu **Inventory** en « Inventory - Prices » (anglais et espagnol), pour que les nouveaux employés trouvent les tarifs.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Réservation Booking.com dans Little Hotelier (interface en espagnol) avec des lignes de résumé supplémentaires pour les frais de virement, la commission Booking.com, le total des commissions avec TVA et un montant net approximatif" caption="Une estimation de ce qu'une réservation Booking.com vous rapporte après commission." width="752" height="715"}
::

### Paiements et factures en moins de clics

- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) : un lien direct d'impression de la facture sur la réservation, sans ouvrir le menu Print.
- [Update Payment Link Button](/tools/ui/update-payment-link-button) : un libellé plus clair sur le bouton de lien de paiement, et le numéro de téléphone du client est ajouté automatiquement depuis le formulaire.
- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button) : un bouton qui envoie par e-mail vos coordonnées bancaires avec un texte prérempli. Il n'est pas encore publié et se configure sur demande.

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="Pied de page d'une réservation Little Hotelier (interface en espagnol) avec un lien supplémentaire Imprimir Factura à côté des menus Print et Email" caption="Un clic pour imprimer la facture." width="604" height="265"}
::

Vous voulez que la facture parte sans aucun clic ? Voir [comment envoyer la facture automatiquement au départ du client](/blog/send-invoice-to-guest-at-checkout).

### Données des clients et enregistrement

- [Chekin Connection](/tools/ui/show-chekin) : si vous utilisez Chekin pour l'enregistrement en ligne, affiche l'enregistrement Chekin de chaque client (nom, téléphone, numéro de document) dans la réservation. Vous pouvez copier le numéro de pièce d'identité dans la facture et partager le formulaire d'enregistrement par e-mail ou WhatsApp. Il utilise vos propres identifiants Chekin.
- [Easy Save Province and Country](/tools/ui/easy-save-province-country) : pour les établissements en Espagne, une liste des provinces espagnoles sur le champ de la province. En choisir une renseigne automatiquement le pays (Espagne), et les champs nom et prénom vides reçoivent un tiret bas.
- [Update Number Adults](/tools/ui/update-number-adults) : les nouveaux formulaires de réservation démarrent à 2 adultes au lieu de 0, ce qui évite d'enregistrer une réservation sans adulte.

::screenshot{src="/images/scripts/show-chekin/to.png" alt="Réservation Little Hotelier (interface en espagnol) avec un panneau Chekin listant un client enregistré, le numéro de document et un bouton Use document" caption="Les enregistrements Chekin dans la réservation Little Hotelier." width="1484" height="831"}
::

### Confort au quotidien : rechargements, tablettes et raccourcis

- [Auto Refresh On Inactivity](/tools/ui/auto-refresh-inactivity) : recharge la page après 10 minutes sans clic, mouvement de souris ni défilement, pour que vous ne reveniez pas sur une session expirée. Il ne recharge jamais la page pendant que vous travaillez.
- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens) : boutons et menus plus grands pour les tablettes, et le bouton de suppression de chambre, qui n'apparaît normalement qu'au survol de la souris, est toujours visible.
- [Add Button Check on Front Desk](/tools/ui/add-button-check-front-desk) : depuis une réservation Direct Booking, un bouton pour la vérifier dans Front Desk et contrôler les remboursements. Si vous n'êtes pas connecté à Front Desk, il faudra peut-être cliquer deux fois.

## Quels scripts installer en premier

- **Réception sur ordinateur portable :** Full Width Reservation Table, Auto Refresh On Inactivity, Extra Invoice Print Button.
- **Propriétaire ou revenue manager :** Prices Display et Show Booking.com Commissions.
- **Établissements en Espagne :** Easy Save Province and Country, plus Chekin Connection si vous utilisez Chekin.
- **Tablette à la réception :** Improve Style For Touch Screens.

## Quand il vous faut plus que des retouches d'interface

Les scripts modifient ce que vous voyez quand vous êtes devant l'écran. Ils ne peuvent pas travailler en votre absence. Pour les tâches qui tournent seules, comme vérifier chaque arrivée pour repérer les pièces d'identité manquantes ou envoyer les factures au départ, il y a le [tableau de bord Hotelier Tools](/tools/bot). Il est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027 ; les scripts restent gratuits pour toujours. Pour d'autres raccourcis dans Little Hotelier lui-même, voir [astuces et fonctions cachées de Little Hotelier](/blog/little-hotelier-tips).

::demo-cta{path="/"}
::

## Résumé

- Installez Tampermonkey une fois, autorisez les scripts utilisateur, puis cliquez sur **Install on Tampermonkey** pour chaque script voulu.
- Les scripts ne s'exécutent que sur Little Hotelier (et sur Chekin pour l'un d'eux), n'envoient rien à Hotelier Tools et se mettent à jour seuls.
- Commencez par ceux qui correspondent à votre poste : tableaux plus larges et rechargement automatique pour la réception, prix et commissions pour le propriétaire.
- Si l'un d'eux se comporte mal après une mise à jour de Little Hotelier, désactivez-le dans le menu Tampermonkey.
