---
title: "Tarification dynamique et stop sell pour Little Hotelier"
---

La tarification dynamique compare vos tarifs Little Hotelier à ceux d'hôtels similaires à proximité et recommande un prix pour chaque chambre et chaque nuit, avec la raison correspondante. Rien n'est écrit dans Little Hotelier tant que vous ne confirmez pas, sauf si vous activez vous-même le pilotage automatique.

## Comment ça marche

1. **Prix de la concurrence.** Indiquez votre ville et vos vrais concurrents dans **Competitors & market**. **Competitor Prices** (`/competitor-prices`) montre ensuite ce qu'ils facturent chaque nuit à côté de votre propre tarif.
2. **Une recommandation par nuit.** Sur **Recommendations** (`/price-recommendations`), chaque prix part de votre propre tarif, est tiré un peu vers la médiane des hôtels comparables, puis évolue avec la demande : taux d'occupation, chambres restantes, dernière minute, week-ends, événements locaux approuvés et clients de votre liste d'attente. Vos limites plafonnent la variation. **Why?** montre le calcul.
3. **Des règles en langage simple.** Écrivez une règle sous forme de phrase. L'IA la transforme en règle structurée, et vous l'approuvez avant qu'elle ne compte. Les règles par dates peuvent fixer, geler ou borner un prix.
4. **Événements locaux.** Une analyse par IA trouve les foires, concerts et jours fériés près de chez vous. Vous approuvez ou refusez chacun.
5. **Appliquer.** Cochez les nuits et appuyez sur **Apply to Little Hotelier**. La même fenêtre peut définir le stop sell SiteMinder, envoyé uniquement pour les nuits où le changement de prix a réussi.
6. **Vérifiez les résultats.** **History & outcomes** (`/pricing-log`) liste chaque tarif écrit, avec les chambres restantes à ce moment-là et maintenant.

La méthode, et une routine manuelle que vous pouvez suivre sans aucun outil, se trouvent dans [la tarification dynamique pour les petits hôtels](/blog/dynamic-pricing-little-hotelier). Pour les restrictions, voir [CTA, CTD, séjour minimum et stop sell](/blog/little-hotelier-cta-ctd-stop-sell).

## Ce dont vous avez besoin

- Little Hotelier connecté sur **Credentials**.
- Un prix minimum par type de chambre et les concurrents avec lesquels vous êtes réellement en concurrence.
- Une vérification des sources de concurrents qui renvoient des prix pour votre ville. Il est conçu pour lire Booking.com, Expedia, Google Hotels, Hostelworld et Agoda.

## Limites et bon à savoir

- **Statut :** les prix de la concurrence sont en bêta. Les recommandations, les règles, les événements, le pilotage automatique et le stop sell sont en alpha.
- **Le pilotage automatique est désactivé par défaut.** Activé, il s'exécute au plus toutes les 3 heures, fait varier chaque nuit de 20 % au maximum par défaut, ne descend jamais sous votre plancher et travaille de 1 à 90 jours à l'avance (14 par défaut). Il ne modifie jamais le stop sell.
- Les calculs de prix de nuit sont de la simple arithmétique. L'IA ne lit que vos phrases de règles et ne fait que trouver des événements.
- L'estimation de revenu du journal des prix est une indication, pas une preuve.
