---
title: "Codes promo Little Hotelier : les créer, les partager et les contrôler sur votre moteur de réservation"
seoTitle: "Codes promo Little Hotelier : créer, partager, contrôler"
description: "Créer un code promo sur le moteur de réservation Little Hotelier, le partager en lien, fixer dates et séjour minimum, et éviter qu'il casse vos prix."
date: 2026-10-26
category: pricing
tags: [codes promo, moteur de réservation, réservations directes, little hotelier, réductions, prix]
keywords: [code promo little hotelier, créer un code promo little hotelier, code promotionnel moteur de réservation little hotelier, code promo réservation directe hôtel, code promo hôtel durée minimum de séjour, lien code promo moteur de réservation, thebookingbutton code promo, code de réduction hôtel réservation en direct]
feature: dynamic-pricing
demoPath: /pricing/promo-codes
cover: /images/blog/demo/en/promo-codes-list.webp
coverAlt: "Page Promo codes de Hotelier Tools : boutons Read from the booking engine et New code, puis les codes DEMOSOL et banco, tous deux Active, chacun avec son résumé en langage courant, un exemple de prix pour un lit en dortoir le 6 novembre, les réservations des 90 derniers jours, les avertissements et les boutons Edit, Pause et supprimer"
faq:
  - q: "Où se trouvent les codes promo dans Little Hotelier ?"
    a: "Dans les réglages du moteur de réservation, pas dans le front desk. Dans la version actuelle, allez dans Direct booking > Promotion codes. Dans la version classique, allez dans My Apps > Direct booking, ouvrez l'onglet Setup et cliquez sur la tuile Promotion Codes."
  - q: "Un code promo Little Hotelier peut-il imposer une durée minimum de séjour ?"
    a: "Pas sur le code lui-même. Créez un tarif avec la durée minimum souhaitée, liez-y le code, et dans l'onglet Promotions de ce tarif, choisissez de ne l'afficher que lorsqu'un code promotionnel lié est saisi."
  - q: "Peut-on limiter le nombre d'utilisations d'un code promo ?"
    a: "Non. Les codes promo de Little Hotelier n'ont pas de plafond d'utilisation et ne peuvent pas être réservés aux nouveaux clients. Utilisez les dates de réservation pour donner une fin à chaque code, et changez de code régulièrement."
  - q: "Les codes promo Little Hotelier fonctionnent-ils sur Booking.com ou Expedia ?"
    a: "Non. Ils ne fonctionnent que sur votre propre moteur de réservation. Chaque canal a ses propres promotions, à configurer dans son extranet. Un code que vous diffusez largement peut compter comme un prix public pour la parité tarifaire : vérifiez vos contrats avec les canaux."
  - q: "Comment mettre un code promo en pause sans le supprimer ?"
    a: "Le moteur de réservation n'a pas d'interrupteur pour un code. Changez ses dates de réservation pour qu'elles se terminent hier. Le bouton Pause de Hotelier Tools fait exactement cela et garde les anciennes dates : Resume remet le code tel qu'il était."
  - q: "Hotelier Tools fait-il partie de Little Hotelier ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel et ne modifie un code que lorsqu'une personne appuie sur le bouton."
---

Les codes promo de Little Hotelier se trouvent dans son moteur de réservation. Allez dans **Direct booking** > **Promotion codes** (version classique : **My Apps** > **Direct booking** > **Setup** > **Promotion Codes**), créez un code, fixez une remise, les dates de réservation et les dates de séjour, et liez les tarifs auxquels il s'applique. Partagez-le en lien avec `?promotion_code=YOURCODE`. Hotelier Tools ajoute une page qui explique chaque code en une phrase et vous prévient quand un code passe sous votre prix minimum ou s'ajoute à d'autres remises. Vous pouvez mettre un code en pause et le réactiver plus tard.

## Où se trouvent les codes promo dans Little Hotelier ?

Les codes promo appartiennent au moteur de réservation de votre site web (direct-book.com), construit sur TheBookingButton. Ils ne changent pas vos tarifs dans le front desk ni sur aucun canal.

- **Version actuelle :** **Direct booking** > **Promotion codes** ([centre d'aide](https://help-platform.littlehotelier.com/en/articles/10911579-use-promo-codes-to-create-custom-links-for-your-booking-engine)).
- **Version classique :** **My Apps** > **Direct booking**, l'onglet **Setup**, puis la tuile **Promotion Codes** ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes)).

Les libellés ci-dessous viennent du centre d'aide de Little Hotelier, en novembre 2026.

## Comment créer un code promo

1. Ouvrez **Promotion Codes** et cliquez sur **Create**.
2. Dans **Code**, saisissez ce que les clients taperont. Pas d'espaces, et chaque code doit être unique.
3. Dans **Description**, rédigez le texte que les clients voient dans le moteur de réservation.
4. Dans **Default rate discount**, choisissez un pourcentage ou un montant, et saisissez-le.
5. Réglez **Available From/To** : les dates auxquelles les clients peuvent **réserver** avec le code.
6. Réglez **Applicable From/To** : les nuits pendant lesquelles les clients peuvent **séjourner** avec le code.
7. Cochez si vous le souhaitez **Hide Promo Code in reservation summary** (masquer le code promo dans le récapitulatif de réservation).
8. Sélectionnez les tarifs auxquels le code s'applique. Un tarif peut avoir sa propre remise, qui remplace la remise par défaut.
9. Cliquez sur **Save**.

Source : [Set up and manage promotion codes](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes).

Deux réglages surprennent. Par défaut, un code valide **masque tous vos tarifs publics** : le client ne voit que les tarifs liés au code. Pour changer cela, décochez **Hide public rates when a Promo Code is applied** dans **Setup** > **Properties** > **Customisation**. Et le champ **Add Promo Code** est toujours visible sur le moteur de réservation.

## Comment partager un code promo en lien

Les clients oublient de taper les codes. Envoyez un lien qui applique le code à leur place. Dans **Promotion codes**, dépliez le code et cliquez sur **Promotion code link** pour le copier ([centre d'aide](https://help-platform.littlehotelier.com/en/articles/10911579-use-promo-codes-to-create-custom-links-for-your-booking-engine)). Le format est :

- Europe, Moyen-Orient, Afrique et Amériques : `https://direct-book.com/properties/yourproperty?promotion_code=YOURCODE`
- Asie-Pacifique : `https://book-directonline.com/properties/yourproperty?promotion_code=YOURCODE`

Un **code à 0 %** est utile aussi : liez-le aux tarifs d'un seul type de chambre, et le lien n'affiche que ce type de chambre (tarifs publics masqués).

## Durée minimum de séjour, limites d'utilisation et nouveaux clients

Les réponses de Little Hotelier lui-même, en novembre 2026 ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes)) :

- **Durée minimum de séjour :** les codes n'en ont pas. Créez un tarif avec, par exemple, un minimum de deux nuits, liez-y le code, et dans l'onglet **Promotions** du tarif, choisissez « Show only when a linked promotional code is entered » (n'afficher que lorsqu'un code promotionnel lié est saisi).
- **Limites d'utilisation :** il n'y a pas de plafond au nombre d'utilisations d'un code. Donnez-lui une date de fin et changez de code régulièrement.
- **Nouveaux clients :** le moteur de réservation ne peut pas savoir si un client a déjà réservé.
- **Offres publiques :** pour une remise visible par tous, Little Hotelier suggère des remises dynamiques ou un multiplicateur de tarif pour Direct booking plutôt qu'un code.

## Les bonnes pratiques pour les codes promo

- **Fixez toujours une fin.** Un code sans dates de réservation vit éternellement, et les vieux codes circulent sur les sites de bons de réduction.
- **Séparez dates de réservation et dates de séjour.** « Réservez cette semaine pour un séjour en janvier », ce sont deux fenêtres, pas une.
- **Connaissez votre plancher.** Un code à 15 % sur un tarif déjà remisé peut descendre sous ce qu'une chambre doit rapporter. Vérifiez la nuit la moins chère, pas la moyenne.
- **Attention au cumul.** Le code s'applique au tarif affiché par le moteur de réservation. Si vos tarifs web sont déjà inférieurs à vos tarifs de réception, le client cumule les deux remises.
- **Un code, un objectif.** Un code par campagne ou par partenaire vous dit lequel a apporté des réservations.
- **Pensez à la parité.** Un code que tout le monde peut trouver fonctionne comme un prix public. Les groupes fermés (newsletter, clients fidèles, une entreprise locale) sont plus sûrs. Vérifiez vos contrats avec les canaux.
- **Les codes sont réservés au direct.** Ils n'atteignent ni Booking.com ni Expedia, qui ont leurs propres promotions.

## La méthode rapide : chaque code expliqué, vérifié et mis en pause dans Hotelier Tools

Hotelier Tools lit les codes de votre moteur de réservation et les affiche en langage courant sur **Promo codes** (codes promo, `/pricing/promo-codes`), sous Pricing. La page est nouvelle (octobre 2026). La lecture des codes est la partie testée ; la création et la modification depuis Hotelier Tools n'ont pas encore été vérifiées sur un moteur de réservation réel : c'est pourquoi chaque modification est relue et affichée comme confirmée ou non.

1. Ouvrez **Promo codes** et appuyez sur **Read from the booking engine**. Ouvrir la page ne lit rien ; c'est le bouton qui lit.
2. Chaque code affiche son statut (**Active**, **Scheduled**, **Paused**, **Expired** ou **Does nothing**), un résumé d'une ligne comme « 10% off the room price (not the extra-guest supplement) on 8 rates. Any booking date. Any stay date. » (10 % de remise sur le prix de la chambre, hors supplément personne en plus, sur 8 tarifs, à toute date de réservation et de séjour), un exemple de prix, et le nombre de réservations qui l'ont utilisé ces 90 derniers jours.
3. Lisez les avertissements sous chaque code, puis utilisez **Edit**, **Pause**, **Resume** ou le bouton de suppression.

::screenshot{src="/images/blog/demo/en/promo-codes-list.webp" alt="Page Promo codes : le code DEMOSOL, Active et Used for quotes and links, 10 % de remise sur 8 tarifs avec un exemple de prix de 27,09 à 24,38 euros et 14 réservations ces 90 derniers jours, trois avertissements en dessous ; puis le code banco, Active, 15 % de remise sur 1 tarif masqué sans code" caption="Chaque code en une phrase, avec son effet sur un prix réel et les problèmes qu'il pose." path="/pricing/promo-codes"}
::

### Créer ou modifier un code avec un aperçu

Appuyez sur **New code**. Remplissez **Code** (3 à 40 lettres, chiffres, - ou _ ; les majuscules ne comptent pas), **Discount** (**% off the rate**, jusqu'à 90 %, ou **Amount off the rate**), **Description**, **Booking dates** (dates de réservation), **Stay dates** (dates de séjour) et **Rates it applies to** (tarifs concernés ; **Select all public rates** coche les tarifs habituels). **What this code will do** montre le résultat avant que vous n'appuyiez sur **Create in TheBookingButton**.

::screenshot{src="/images/blog/demo/en/promo-codes-new-code.webp" alt="Fenêtre New promo code : code AUTUMN26, remise de 10 avec % off the rate, une description vide, Show the discount in the booking summary décoché, Booking dates et Stay dates vides, Rates it applies to avec Tarifa Flexible et No reembolsable pour Doble Estándar cochés, et What this code will do : 10% off the room price (not the extra-guest supplement) on 2 rates. Any booking date. Any stay date." caption="Dates de réservation et dates de séjour sont séparées, et l'aperçu dit ce que fera le code avant tout enregistrement." path="/pricing/promo-codes"}
::

Chaque modification est vérifiée ainsi :

- Le code est relu juste avant la modification. Si quelqu'un l'a changé entre-temps dans le moteur de réservation, on vous demande de le relire.
- La modification est envoyée une seule fois, puis relue. Le résultat est **Confirmed**, **Differs** ou **Unknown**. Un résultat inconnu n'est jamais renvoyé automatiquement : appuyez sur **Read again** dans **Recent changes**.
- Créer, modifier, mettre en pause et supprimer exigent l'autorisation **Publish prices**, car un code atteint les clients immédiatement. Pour supprimer, il faut taper le code.

### Les avertissements qui font économiser

| Avertissement | Ce qu'il signifie |
|---|---|
| Sous votre prix minimum | Avec la remise, certaines nuits des 90 prochains jours passent sous votre plancher |
| Se cumule avec votre remise appliquée | Vos tarifs sont déjà écrits sous la recommandation ; avec le code, un client web paie le cumul des deux |
| Masque vos tarifs publics | Le code débloque des tarifs réservés aux codes, et un client qui l'utilise ne voit que ceux-là |
| Ne fait rien | Aucun tarif n'est lié : le code est accepté et le client voit le prix normal |
| Même code, autres majuscules | Le moteur de réservation ne fait pas la différence entre `SUMMER` et `summer` |
| Code public | Vos devis et vos liens de réservation l'utilisent : la parité tarifaire Booking.com peut en tenir compte |
| Modifié hors de l'application | Quelqu'un l'a modifié dans TheBookingButton depuis la dernière lecture |

Si l'écran des promotions propre à Little Hotelier (un système distinct) contient des promotions, la page vous indique aussi que votre site web ne les utilise pas.

### Mettre en pause et réactiver

Le moteur de réservation n'a pas d'interrupteur pour un code. **Pause** fait se terminer les dates de réservation du code hier et garde les anciennes dates. La remise, les tarifs et les dates de séjour ne changent pas, et les réservations déjà faites gardent leur prix. **Resume** remet les dates enregistrées. Si un code débloque des tarifs réservables uniquement avec un code, la fenêtre de pause vous prévient que ces tarifs cessent d'être réservables.

### Lecture quotidienne, et questions en langage courant

Une tâche programmée, **Read the codes every day** (lire les codes chaque jour, à 06:40 par défaut, créée automatiquement depuis novembre 2026), tient la page et les assistants à jour. Elle ne fait que lire.

Dans le chat IA (bêta), demandez « Quels codes sont actifs ? » ou « Que se passerait-il si WEB donnait 18 % ? » : l'assistant répond à partir des codes et prévisualise une modification sans l'écrire. Pour modifier un code, il affiche une carte d'approbation, et rien ne se passe tant que vous ne l'avez pas approuvée. Les développeurs ont les mêmes actions via l'API REST (`/api/v1/pricing/promo-codes`) et MCP. Les agents de navigateur qui utilisent WebMCP peuvent seulement proposer : ils ouvrent le formulaire prérempli, et c'est une personne qui appuie sur le bouton.

### Voir à quel prix votre site vend vraiment

Votre code sert à deux autres endroits :

- **Pricing settings** > **Channels & discounts** (`/pricing/settings/channels`), carte **What your web really sells at** (ce que votre site vend vraiment) : **Check the web** lit votre page de réservation sur les 30 prochaines nuits, avec et sans votre code, et compare avec le tarif de réception et ce que paie un client Booking.com. Elle recommande une remise web générale.
- **New reservation** (nouvelle réservation, `/reservations/new`) montre ce que coûte le même séjour sur votre site, sur votre site avec le code, et une estimation pour Booking.com, à côté des tarifs auxquels vous réservez.

Choisissez le code qu'utilisent vos devis et vos liens de réservation dans **Direct-booking promo code** sur la fiche de l'établissement.

::demo-cta{path="/pricing/promo-codes"}
::

**Pas encore disponible :** un e-mail quand un code est modifié en dehors de Hotelier Tools (la page l'indique à la lecture suivante), et les limites que le moteur de réservation n'a pas lui-même, comme les plafonds d'utilisation.

Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027. Le reste du moteur de prix est décrit sur la [page Tarification dynamique](/tools/bot/dynamic-pricing).

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec les identifiants Little Hotelier de votre hôtel, et les codes restent dans votre propre moteur de réservation.
::

À lire aussi : [la tarification dynamique pour les petits hôtels sur Little Hotelier](/blog/dynamic-pricing-little-hotelier), [la commission Booking.com](/blog/booking-com-commission), [CTA, CTD, durée minimum de séjour et stop sell](/blog/little-hotelier-cta-ctd-stop-sell).

## Résumé

- Les codes promo de Little Hotelier sont des réglages du moteur de réservation : **Direct booking** > **Promotion codes**.
- Chaque code a une remise, des dates de réservation, des dates de séjour et des tarifs liés. Par défaut, il masque vos tarifs publics.
- Partagez les codes en lien avec `?promotion_code=`. Pour une durée minimum de séjour, liez le code à un tarif réservé aux codes avec ce minimum.
- Donnez une fin à chaque code, vérifiez-le par rapport à votre plancher, et n'oubliez pas que les codes n'atteignent pas les OTA.
- Hotelier Tools explique chaque code en une phrase, prévient pour les planchers, les cumuls et la parité, et vous permet de mettre un code en pause puis de le réactiver sans perdre ses réglages.
