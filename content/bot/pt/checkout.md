---
O checkout automático permite marcar as reservas como saídas sem ter que fazê-lo manualmente. 
Isto é especialmente útil para hotéis ou hostels que não requerem intervenção manual no processo de checkout.

Atualmente o sistema executa diariamente às 15:00.
As seguintes condições são revistas para marcar uma reserva como saída:
- A reserva deve estar no estado "Checked In".
- A data de saída deve ser o dia atual.
- A data de entrada deve ser anterior ao dia atual.
- A reserva não deve ter pagamentos pendentes.
- A reserva deve ter um número de identificação fiscal para gerar a fatura.
- A reserva não deve ter uma fatura emitida.

Se uma reserva cumpre todas estas condições, será automaticamente marcada como saída e a fatura correspondente será gerada.

No caso de uma reserva não cumprir alguma das condições, será enviado um email ao administrador do hotel notificando a situação.

Exemplo de email:
  
<br>

## Relatório de Check-ins (2025-08-05)

Total de reservas com check-in hoje: **7**

Reservas com problemas: **1**

Reservas com check-out automático: **0**

| Quarto | Nome do Hóspede | Pendente | Total | Estado | Problemas | Link |
| --- | --- | --- | --- | --- | --- | --- |
| 323 | S****  *** *** | €0.00 | €45.87 | ✅ Correto | Tudo correto | [Ver Reserva](#) |
| 301 | A****  D****  Q**** | €0.00 | €51.61 | ✅ Correto | Tudo correto | [Ver Reserva](#) |
| 302 | A****  C****  D**** | €0.00 | €141.00 | ✅ Correto | Tudo correto | [Ver Reserva](#) |
| 306, 304 | D****  S**** | €0.00 | €280.00 | ❌ Problemas | Falta ID/Passaporte | [Ver Reserva](#) |
| 308 | A****  M****  L**** | €0.00 | €154.83 | ✅ Correto | Tudo correto | [Ver Reserva](#) |
| 322 | M****  M**** | €0.00 | €51.61 | ✅ Correto | Tudo correto | [Ver Reserva](#) |
| 307 | V** **** | €0.00 | €51.61 | ✅ Correto | Tudo correto | [Ver Reserva](#) |

### Resumo:

*   **Verde:** Reservas processadas automaticamente (check-out realizado)
*   **Vermelho:** Reservas que requerem atenção manual

**⚠️ 1 reservas requerem atenção manual**


### Notas:
- As reservas com problemas devem ser revistas manualmente.
