---
title: "Commission Booking.com : quel pourcentage ? (Et comment voir votre net réel dans Little Hotelier)"
seoTitle: "Commission Booking.com : pourcentage et calcul (2026)"
description: "Commission Booking.com : pas de taux unique, mais le % de votre contrat, plus programmes et frais de paiement. Assiette, TVA et net réel par réservation."
date: 2026-10-03
category: tips
tags: [booking.com, commission, little hotelier, userscript, vat]
keywords: [commission booking pourcentage, commission booking 2026, calculatrice commission booking, calcul commission booking hôtel, commission booking tva, commission booking genius]
demoPath: /
cover: /images/scripts/show-booking-commissions/to.png
coverAlt: "Récapitulatif d'une réservation Little Hotelier (interface en espagnol) avec la commission Booking.com, les frais de paiement et le net approximatif ajoutés par un script gratuit"
faq:
  - q: "Quel pourcentage Booking.com prélève-t-il sur les hôtels ?"
    a: "Booking.com ne publie pas de taux unique. Vous payez le pourcentage indiqué dans votre contrat d'hébergement, qui dépend de votre pays, de votre type d'établissement et des conditions signées. Vous voyez la commission de chaque réservation dans l'Extranet, sous Finance > Reservation statements."
  - q: "Booking.com prélève-t-il une commission sur la taxe de séjour ?"
    a: "Non. Booking.com ne prélève pas de commission sur les taxes locales comme la taxe de séjour. Dans la plupart des pays, il prélève en revanche une commission sur la TVA, selon la loi locale et vos conditions générales de distribution."
  - q: "Dois-je payer une commission sur un no-show ?"
    a: "Seulement si vous facturez des frais de no-show au client, et alors sur ces frais. Si vous déclarez le no-show dans l'Extranet dans les 48 heures suivant la date de départ prévue et que vous renoncez aux frais, il n'y a pas de commission."
  - q: "Le programme Genius augmente-t-il ma commission ?"
    a: "Genius n'ajoute pas de pourcentage de commission, mais vous financez vous-même la remise (10 % par défaut, jusqu'à 15 % ou 20 % pour les niveaux Genius supérieurs si vous les activez). Preferred Partner, Preferred Plus et Visibility Booster sont les programmes qui font monter votre commission."
  - q: "Quand Booking.com facture-t-il la commission ?"
    a: "Une fois par mois, pour chaque réservation dont le client est parti le mois précédent. Les factures doivent être réglées sous 14 jours. Avec Payments by Booking.com, la commission peut être déduite directement de vos versements."
  - q: "Le script de commission pour Little Hotelier est-il gratuit ?"
    a: "Oui. Le userscript Show Booking.com Commissions est gratuit pour toujours. Il s'exécute dans votre propre navigateur avec l'extension gratuite Tampermonkey et ne lit que la page de réservation que vous avez ouverte."
---

Il n'existe pas de commission Booking.com unique. Vous payez le pourcentage prévu dans votre propre contrat, qui dépend de votre pays, de votre type d'établissement et des conditions signées, et des programmes comme Preferred Partner ou Visibility Booster s'y ajoutent. Elle porte sur le montant total de la réservation (dans la plupart des pays TVA comprise, jamais sur la taxe de séjour), et Payments by Booking.com peut ajouter des frais de paiement : votre net réel est donc le total de la réservation moins tout cela.

Les règles ci-dessous ont été vérifiées dans l'aide partenaires de Booking.com en octobre 2026. Booking.com met souvent ces pages à jour, c'est pourquoi les liens renvoient à la source.

## Quel est le pourcentage de commission de Booking.com pour les hôtels ?

Booking.com définit la commission comme « a set percentage of the total booking amount » (un pourcentage fixe du montant total de la réservation) pour chaque réservation ([Partner Help : Understanding your commission](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission)). Il ne publie pas un taux unique pour tous : « the exact percentage depends on your country, property type, and the accommodation agreement you signed » (le pourcentage exact dépend de votre pays, du type d'établissement et du contrat d'hébergement que vous avez signé). Les nouveaux partenaires le voient à l'étape **Agreement** de l'inscription ([FAQ Booking.com](https://join.booking.com/faq.html?lang=en)).

Le taux est figé au moment où le client réserve. Si votre commission a changé récemment, les anciennes réservations gardent l'ancien taux.

Pour trouver le pourcentage que vous payez réellement :

1. Connectez-vous à l'Extranet et ouvrez **Finance > Reservation statements** (relevés de réservations). Chaque réservation affiche sa commission.
2. Comparez-la avec votre contrat d'hébergement. Pour obtenir une copie de vos conditions générales de distribution, allez dans **Contracts**, sous l'icône utilisateur.
3. Si le relevé indique un pourcentage plus élevé, ouvrez **Boost performance** : Preferred Partner ou Visibility Booster ajoutent un pourcentage à votre taux de base.
4. Avec Payments by Booking.com, **Finance help** affiche aussi votre taux et vos frais de paiement.

## Sur quoi porte la commission Booking.com ?

La commission couvre « the room rate as well as any additional fees you charge—such as cleaning fees, service fees, and costs for no-shows or cancellations » (le prix de la chambre ainsi que tous les frais supplémentaires que vous facturez, comme les frais de ménage, de service, de no-show ou d'annulation), et elle s'applique une fois que le client est parti ([source](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission)).

**Vous payez une commission sur :**

- les séjours effectués
- les réservations non remboursables et partiellement remboursables, que le client soit venu ou non
- les frais d'annulation et de no-show que vous facturez
- les surréservations (exonérées si votre établissement est en ligne depuis moins de 30 jours, ou si vous avez eu moins de cinq surréservations au cours des 12 derniers mois)

**Vous ne payez pas de commission sur :**

- les frais d'annulation auxquels vous choisissez de renoncer
- les no-shows que vous déclarez dans l'Extranet dans les 48 heures suivant le départ, quand vous renoncez aux frais
- les réservations dont vous avez marqué la carte du client comme invalide

**Taxes.** Booking.com ne prélève pas de commission sur les taxes locales comme la taxe de séjour. « However, in most countries, commission is charged on VAT or GST » (toutefois, dans la plupart des pays, la commission est prélevée sur la TVA), selon la loi locale. Vos conditions générales de distribution précisent ce qui s'applique à vous.

::callout{type="warning" title="La règle des 48 heures"}
Déclarez les no-shows, les annulations et les autres changements dans l'Extranet dans les 48 heures suivant le départ. Passé ce délai, Booking.com prélève la commission complète sur la réservation d'origine. La marche à suivre pas à pas est dans [Carte invalide ou no-show sur Booking.com : que faire](/blog/booking-com-invalid-card-no-show).
::

## Comment Genius, Preferred et Visibility Booster modifient ce que vous payez

- **Genius** n'ajoute aucun pourcentage de commission, mais vous payez la remise. L'adhésion applique 10 % à votre type de chambre le moins cher et le plus populaire, et vous pouvez activer 15 % ou 20 % pour les niveaux Genius supérieurs. Booking.com indique que la remise standard « is funded by you, the accommodation partner » (est financée par vous, le partenaire d'hébergement) ([programme Genius](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-genius-marketing-program)).
- Le **Preferred Partner Program** apporte plus de visibilité et un badge « in exchange for a small increase in commission » (en échange d'une légère hausse de la commission). Il faut un score de performance d'au moins 70 %, vérifié tous les 90 jours ([Preferred Partner](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-preferred-partner-program)). **Preferred Plus** exige un score de 80 % et un investissement de commission plus élevé ([Preferred Plus](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-preferred-plus)). Booking.com ne publie pas le pourcentage supplémentaire ; consultez-le sous **Boost performance** dans l'Extranet.
- **Visibility Booster** vous permet de choisir une commission plus élevée avec un curseur, uniquement pour les dates d'arrivée et les pays de clients que vous sélectionnez ([Visibility Booster](https://partner.booking.com/en-us/help/growing-your-business/increase-revenue/all-you-need-know-about-visibility-booster)).

## Qu'ajoute Payments by Booking.com ?

Il n'y a pas de frais d'activation ([Payments by Booking.com](https://partner.booking.com/en-us/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom)). Ce que vous payez dépend de la façon dont vous êtes payé :

| Mode de versement | Coût supplémentaire |
|---|---|
| Virement bancaire | Des frais de service de paiement, en pourcentage de chaque séjour effectué. Ils dépendent de l'emplacement de votre établissement. |
| Carte de crédit virtuelle (VCC) | Les frais de votre propre banque ou prestataire de paiement pour débiter la carte. Booking.com ne les fixe pas. |

Si vous renoncez aux frais d'annulation d'un client, il n'y a pas non plus de frais de paiement. Quand Booking.com gère tous les paiements de vos clients, il déduit la commission et les frais de paiement de chaque versement. Sinon, vous recevez une facture à la fin du mois.

Pour voir ces deux montants pour une réservation, ouvrez l'onglet **Reservations** de l'Extranet et regardez la colonne **Commission and charges**. Le détail figure dans **Reservation details**.

## La commission Booking.com est-elle soumise à la TVA ?

Dans l'UE, cela dépend de votre numéro de TVA ([TVA UE et factures de commission](https://partner.booking.com/en-us/compliance/tax-remittance-management/eu-vat-and-commission-invoices)) :

- **Avec un numéro de TVA valide pour les transactions dans l'UE** (Booking.com le vérifie dans la base VIES de l'UE), la facture de commission est émise sans TVA. Vous « remain responsible for reporting any VAT you may owe » (restez responsable de déclarer la TVA que vous pourriez devoir) à votre administration fiscale. Les comptables appellent cela l'autoliquidation.
- **Sans numéro**, Booking.com ajoute la TVA à votre facture de commission. Sur les versements nets par virement, il déduit la commission, les frais de paiement et la TVA sur les deux.

Pour ajouter votre numéro : **Finance > Finance settings > VAT details > Edit details**, confirmez qu'il est valide pour les transactions dans l'UE, saisissez-le et enregistrez. Hors de l'UE, les règles varient selon les pays : demandez à votre comptable.

Les factures de commission arrivent une fois par mois, pour chaque client parti le mois précédent, et doivent être réglées sous 14 jours. Les factures impayées peuvent entraîner la fermeture temporaire de votre établissement.

## Comment voir le net de chaque réservation Booking.com dans Little Hotelier

Le récapitulatif de réservation de Little Hotelier affiche le total de la chambre, les extras, les remises et les frais de carte. Il n'affiche pas ce que Booking.com garde. La commission exacte et les frais de paiement de chaque réservation figurent dans l'Extranet (**Reservation statements**, ou la colonne **Commission and charges**). Ce qui vous reste, c'est le total moins ces montants et la taxe comprise dans le prix.

### Exemple chiffré : du prix de la réservation à votre net

Voici les chiffres des captures d'écran ci-dessous : une réservation Booking.com de 125,18 €, avec 17 % de commission et 1,3 % de frais de paiement. Vos pourcentages peuvent différer.

| Ligne | Montant |
|---|---|
| Total de la réservation (taxe comprise) | 125,18 € |
| Commission, 17 % du total | −21,28 € |
| Frais de paiement, 1,3 % du total | −1,63 € |
| Taxe comprise dans le prix | −11,38 € |
| **Net approximatif** | **90,89 €** |

Environ un quart de ce qu'a payé le client ne vous parvient jamais. Si Booking.com ajoute de la TVA à votre facture de commission, déduisez-la aussi.

### L'afficher sur chaque réservation avec un script gratuit

::screenshot{src="/images/scripts/show-booking-commissions/from.png" alt="Récapitulatif d'une réservation Booking.com dans Little Hotelier (interface en espagnol), avec le total de la chambre, les extras, la remise et le total reçu, sans ligne de commission" caption="Avant : Little Hotelier affiche le total, pas ce que Booking.com garde." width="720" height="669"}
::

Pour une estimation rapide directement dans Little Hotelier, utilisez le script gratuit **Show Booking.com Commissions** :

1. Installez l'extension de navigateur gratuite Tampermonkey. Le [guide d'installation](/tools/ui/instructions) vous accompagne pas à pas.
2. Ouvrez [Show Booking.com Commissions](/tools/ui/show-booking-commissions) et cliquez sur **Install on Tampermonkey**.
3. Ouvrez dans Little Hotelier n'importe quelle réservation dont la source est Booking.com. Après quelques secondes, quatre lignes apparaissent au-dessus des totaux : les frais de virement (1,3 %), la commission Booking.com (17 %), le total des déductions et le net approximatif.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Récapitulatif d'une réservation Little Hotelier avec quatre lignes supplémentaires : frais de virement 1,3 %, commission Booking.com 17 %, total des déductions et net approximatif de 90,89 euros" caption="Après : commission, frais de paiement et net approximatif sur chaque réservation Booking.com." width="752" height="715"}
::

À savoir avant de vous y fier :

- **Les taux sont fixés dans le script** : 17 % de commission et 1,3 % de frais de paiement. Si les vôtres diffèrent, ouvrez le script dans l'éditeur de Tampermonkey et modifiez `0.17` et `0.013`.
- **Les libellés sont en espagnol** et les montants en euros.
- **C'est une estimation.** Il ne connaît ni Preferred, ni Visibility Booster, ni la TVA ajoutée à votre facture de commission.
- **Il reste dans votre navigateur.** Il lit la page que vous avez ouverte et n'envoie rien nulle part.

Vous trouverez d'autres scripts gratuits de ce type dans notre guide des [extensions Chrome gratuites pour Little Hotelier](/blog/little-hotelier-chrome-extensions).

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à Booking.com, SiteMinder ou Little Hotelier, ni approuvé par eux. Les scripts s'exécutent dans votre propre session Little Hotelier, et le tableau de bord Hotelier Tools se connecte avec les identifiants Little Hotelier de votre établissement.
::

## Fixer ses prix en tenant compte de la commission : Channels & discounts

Genius et les autres remises par canal modifient ce que paie un client, donc ce que vous gardez. Dans le tableau de bord Hotelier Tools (la tarification dynamique est en alpha), **Pricing settings > Channels & discounts** (`/pricing/settings/channels`) réunit deux chiffres :

1. **Discount when applying prices** (remise lors de l'application des prix). Les prix que vous appliquez depuis Recommendations sont préremplis avec « recommandé moins ce % ». Avec 5 %, une recommandation de 100,00 est appliquée à 95,00. Laissez 0 pour appliquer les recommandations telles quelles.
2. **What the guest pays per channel** (ce que paie le client par canal). Cliquez sur **Add a channel** et saisissez la remise que ce canal accorde à ses propres clients, comme Genius ou les tarifs membres. La page Recommendations affiche alors ce qu'un client paie réellement sur chaque canal.
3. Appuyez sur **Save changes**.

::screenshot{src="/images/blog/demo/en/pricing-settings-channels-discounts.webp" alt="Page Channels and discounts dans les paramètres de tarification de Hotelier Tools : Discount when applying prices réglé sur 5 % (une recommandation de 100,00 est appliquée à 95,00) et What the guest pays per channel avec le bouton Add a channel, des suggestions Booking Genius 10 %, Expedia member price 10 % et Agoda insider deal 10 %, et aucune remise de canal ajoutée pour l'instant" caption="Indiquez vos remises au moteur de tarification : les recommandations montrent alors ce que paie réellement le client de chaque canal." path="/pricing/settings/channels"}
::

::demo-cta{path="/pricing/settings/channels"}
::

Le reste du moteur de tarification (prix des concurrents, règles, événements locaux) est expliqué dans [tarification dynamique pour petits hôtels avec Little Hotelier](/blog/dynamic-pricing-little-hotelier) et sur la [page Tarification dynamique](/tools/bot/dynamic-pricing). Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027 ; les scripts de navigateur restent gratuits.

## Résumé

- La commission de Booking.com est le pourcentage de votre contrat. Preferred, Preferred Plus et Visibility Booster s'y ajoutent, et Genius vous coûte la remise.
- Elle porte sur le montant total de la réservation, en général TVA comprise, jamais sur la taxe de séjour.
- Payments by Booking.com ajoute des frais de paiement pour les versements par virement. Dans l'UE, un numéro de TVA valide évite la TVA sur votre facture de commission.
- Vérifiez les chiffres exacts dans **Finance > Reservation statements**, et voyez une estimation sur chaque réservation Booking.com dans Little Hotelier avec le script gratuit [Show Booking.com Commissions](/tools/ui/show-booking-commissions).
