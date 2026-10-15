---
title: "Tarefas agendadas para o Little Hotelier, com registo de cada execução"
---

As automatizações são as tarefas agendadas por trás do Hotelier Tools: as verificações de reservas, as faturas na saída, as atualizações de preços da concorrência, a verificação da lista de espera e a consulta da caixa de entrada funcionam sozinhas, segundo o horário que escolher. Cada execução fica registada, e as falhas chegam ao seu email.

## Como funciona

1. **Cada funcionalidade cria a sua própria tarefa.** Raramente começa de um horário em branco. Por exemplo:
   - Verificações automáticas: **Save and activate task** define o horário recomendado, como todas as noites às 23:30 para as novas reservas.
   - Fatura na saída: **Create the daily task (16:00, after check-out)**.
   - Check-out automático: **Create the daily task (15:05)**.
   - Lista de espera: **Check every night at 01:00**.
   - Piloto automático de preços: a sugestão é de 3 em 3 horas.
   - Caixa de entrada de hóspedes: a sua página de perguntas frequentes pode ser lida de novo a cada hora.
2. **Ajuste o horário.** Execute uma tarefa agora, a cada poucos minutos, diariamente, semanalmente ou mensalmente, dentro dos limites de cada funcionalidade.
3. **Leia o que aconteceu.** **Cron Jobs** (`/cron`) lista todas as tarefas, e **Run History** (`/cron-logs`) dá um resumo legível do que cada execução fez.
4. **Receba o relatório.** Tarefas como as verificações de reservas enviam um email de relatório por execução. Os destinatários partilhados definem-se em **Settings > Notifications**.

Veja as tarefas a funcionar na prática na [checklist da receção](/blog/hotel-front-desk-checklist-automation), em [enviar a fatura no check-out](/blog/send-invoice-to-guest-at-checkout) e na [lista de espera para datas esgotadas](/blog/hotel-waitlist-sold-out-dates).

## O que precisa

- O Little Hotelier ligado em **Credentials**. Cada execução inicia sessão com esse login.
- A funcionalidade por trás da tarefa configurada primeiro, como as verificações que quer ou as datas que acompanha.

## Limites e bom saber

- **Estado: beta.**
- **Pausa de segurança.** Se a palavra-passe do seu Little Hotelier expirar, as tarefas ficam em pausa em vez de tentarem de novo, para que a conta nunca seja bloqueada. O painel indica que as tarefas automáticas estão em pausa até guardar a nova palavra-passe em **Credentials** ou premir **Check now & resume**.
- **Os intervalos mínimos diferem por tarefa.** As verificações de reservas correm no máximo uma vez por hora por tarefa, a verificação da lista de espera no máximo a cada 20 minutos, e o piloto automático de preços não mais do que de 3 em 3 horas.
- **Uma tarefa só faz o que a sua funcionalidade faz.** As verificações só alertam. O check-out automático escreve no Little Hotelier, por isso fica desativado até o criar.
- **Os assistentes de IA podem gerir tarefas.** Através do [servidor MCP](/tools/bot/api-mcp), o Claude ou o ChatGPT podem ler e alterar tarefas agendadas.
- **Sem webhooks de saída.** Os seus próprios scripts precisam do seu próprio agendador, como uma tarefa cron.
