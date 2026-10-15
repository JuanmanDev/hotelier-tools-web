---
title: "Verificações automáticas de reservas para o Little Hotelier"
---

As verificações automáticas leem as suas reservas do Little Hotelier em cinco momentos da estadia e assinalam o que precisa de correção: sem quarto atribuído, um saldo por pagar, um documento de identificação ou uma morada em falta, ou um hóspede da sua lista de não reservar novamente. Os problemas ficam numa única página Issues, e cada execução envia-lhe um email de relatório.

## Como funciona

Cada momento é uma tarefa agendada própria, que lê um conjunto diferente de reservas:

- **Após a reserva:** reservadas ontem e hoje. Verifica quarto, identificação, morada e a lista de não reservar novamente.
- **Antes da chegada:** check-in de hoje até 7 dias à frente (ajustável de 1 a 60). Verifica quarto, pagamento e a lista de não reservar novamente.
- **Na chegada:** check-in hoje. Verifica identificação, morada e quarto.
- **Durante a estadia:** check-in nos últimos 7 dias (ajustável). Verifica identificação e morada.
- **Na saída:** check-out hoje. Verifica identificação, morada e saldo.

Abra um momento em **Automated Checks** (`/automated-checks`), ative ou desative as suas verificações e prima **Save and activate task**. Os problemas aparecem em `/automated-checks/issues`, agrupados por reserva. Corrija a reserva no Little Hotelier e prima **Verify**: as verificações voltam a correr nessa reserva e o problema fecha-se.

A **lista de não reservar novamente** (`/automated-checks/watchlist`) compara, todas as noites, as novas reservas e as próximas chegadas com os hóspedes que assinalou. Uma correspondência torna-se um problema e uma linha no relatório.

A rotina completa está na [checklist da receção](/blog/hotel-front-desk-checklist-automation). Como manter a lista dentro da lei está no [guia da lista de não alugar](/blog/hotel-do-not-rent-list).

## O que precisa

- O Little Hotelier ligado em **Credentials**.
- Um momento ativado para começar. **Antes da chegada** é o primeiro sugerido, porque deteta uma estadia sem quarto enquanto ainda há tempo para atribuir um.
- Destinatários do relatório, definidos em **Settings > Notifications** (`/settings/notifications`).

## Limites e bom saber

- **Estado: beta.**
- **Só alertam.** Nenhuma verificação edita, cancela ou cobra uma reserva, e uma correspondência da lista de não reservar novamente nunca recusa um hóspede. A exceção é o check-out automático opcional, que escreve no Little Hotelier e vem desativado por defeito.
- **No máximo uma vez por hora por tarefa**, porque cada execução inicia sessão no Little Hotelier.
- **Três verificações continuam manuais:** cartões inválidos do Booking.com, número de hóspedes e horas de chegada. Veja [o que fazer com um cartão inválido ou um no-show](/blog/booking-com-invalid-card-no-show).
- Se a palavra-passe do seu Little Hotelier expirar, as tarefas ficam em pausa em vez de tentarem de novo até guardar a nova.
