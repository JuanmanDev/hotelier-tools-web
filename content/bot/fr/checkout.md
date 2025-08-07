---
Le checkout automatique permet de marquer les réservations comme sorties sans avoir à le faire manuellement. 
Ceci est particulièrement utile pour les hôtels ou auberges qui ne nécessitent pas d'intervention manuelle dans le processus de checkout.

Actuellement le système s'exécute quotidiennement à 15h00.
Les conditions suivantes sont vérifiées pour marquer une réservation comme sortie :
- La réservation doit être dans l'état "Checked In".
- La date de sortie doit être le jour actuel.
- La date d'entrée doit être antérieure au jour actuel.
- La réservation ne doit pas avoir de paiements en attente.
- La réservation doit avoir un numéro d'identification fiscale pour générer la facture.
- La réservation ne doit pas avoir de facture émise.

Si une réservation remplit toutes ces conditions, elle sera automatiquement marquée comme sortie et la facture correspondante sera générée.

Au cas où une réservation ne remplirait pas l'une des conditions, un email sera envoyé à l'administrateur de l'hôtel pour notifier la situation.

Exemple d'email :
  
<br>

## Rapport de Check-ins (2025-08-05)

Total des réservations avec check-in aujourd'hui : **7**

Réservations avec problèmes : **1**

Réservations avec check-out automatique : **0**

| Chambre | Nom du Client | En attente | Total | Statut | Problèmes | Lien |
| --- | --- | --- | --- | --- | --- | --- |
| 323 | S****  *** *** | €0.00 | €45.87 | ✅ Correct | Tout correct | [Voir Réservation](#) |
| 301 | A****  D****  Q**** | €0.00 | €51.61 | ✅ Correct | Tout correct | [Voir Réservation](#) |
| 302 | A****  C****  D**** | €0.00 | €141.00 | ✅ Correct | Tout correct | [Voir Réservation](#) |
| 306, 304 | D****  S**** | €0.00 | €280.00 | ❌ Problèmes | ID/Passeport manquant | [Voir Réservation](#) |
| 308 | A****  M****  L**** | €0.00 | €154.83 | ✅ Correct | Tout correct | [Voir Réservation](#) |
| 322 | M****  M**** | €0.00 | €51.61 | ✅ Correct | Tout correct | [Voir Réservation](#) |
| 307 | V** **** | €0.00 | €51.61 | ✅ Correct | Tout correct | [Voir Réservation](#) |

### Résumé :

*   **Vert :** Réservations traitées automatiquement (check-out effectué)
*   **Rouge :** Réservations nécessitant une attention manuelle

**⚠️ 1 réservations nécessitent une attention manuelle**


### Notes :
- Les réservations avec des problèmes doivent être vérifiées manuellement.
