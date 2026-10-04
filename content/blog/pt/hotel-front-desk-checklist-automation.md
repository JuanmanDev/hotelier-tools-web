---
title: "Checklist diária da receção / recepção do hotel no Little Hotelier: 8 problemas a identificar antes da chegada"
seoTitle: "Checklist diária da receção do hotel no Little Hotelier"
description: "Checklist diária da receção para o Little Hotelier: 8 problemas de reserva a identificar antes da chegada, onde ver cada um e como automatizar cinco deles."
date: 2026-10-03
category: operations
tags: [front desk, checklist, check-in, automation, little hotelier]
keywords: [checklist recepção hotel, checklist receção hotel, automação hoteleira, checklist check-in hotel, reservas sem quarto little hotelier, checklist diária recepção hotel]
feature: automated-checks
demoPath: /automated-checks
cover: /images/blog/demo/en/automated-checks-lifecycle.webp
coverAlt: "Página Automated Checks do Hotelier Tools: como funcionam as verificações em quatro passos, um aviso Nothing runs any check yet que sugere Before they arrive, e A jornada de uma reserva pelas suas cinco fases"
faq:
  - q: "O que deve a receção de um hotel verificar todos os dias?"
    a: "Nas chegadas de hoje e de amanhã: quarto atribuído, saldo pago, cartão válido, documento de identificação, endereço, número certo de hóspedes, hora de chegada e nenhuma correspondência com a sua lista de hóspedes a não aceitar de novo. Nas saídas de hoje: o saldo e tudo o que a fatura / nota fiscal precisa."
  - q: "Como encontro reservas sem quarto no Little Hotelier?"
    a: "Abra Front Desk > Reservations, filtre pela data de check-in e procure uma coluna Room vazia. O Calendar também mostra no topo um contador de reservas sem quarto atribuído."
  - q: "Com que frequência podem ser executadas as verificações automáticas?"
    a: "Cada tarefa de verificação tem o seu próprio horário. As recomendadas são executadas uma vez por dia, e cada tarefa pode ser executada no máximo uma vez por hora, porque cada execução entra no Little Hotelier."
  - q: "O Hotelier Tools altera ou cancela as minhas reservas?"
    a: "Não. As verificações só geram alertas. A única exceção é o check-out automático, que escreve no Little Hotelier e fica desativado até você o ativar."
  - q: "Posso imprimir esta checklist?"
    a: "Sim. Copie a tabela deste guia para um documento, ou exporte as chegadas filtradas de Front Desk > Reservations em CSV e imprima-o."
  - q: "O Hotelier Tools faz parte do Little Hotelier?"
    a: "Não. É um dashboard independente: não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel."
---

Todos os dias, verifique oito coisas nas chegadas de hoje e de amanhã: quarto atribuído, saldo pago, cartão válido, documento de identificação, endereço, número certo de hóspedes, hora de chegada e nenhuma correspondência com a sua lista de hóspedes a não aceitar de novo. No Little Hotelier, quase tudo cabe numa só página: **Front Desk > Reservations**, filtrado por data de check-in. O Hotelier Tools executa cinco das oito automaticamente em cinco momentos da estadia e envia-lhe um e-mail só com o que precisa de corrigir.

## Os 8 problemas de reserva a identificar antes de um hóspede chegar

1. **Sem quarto atribuído.** Uma reserva sem número de quarto passa facilmente despercebida até o hóspede estar à frente do balcão.
2. **Saldo pendente.** Convém saber antes da chegada se deve cobrar, insistir num depósito ou enviar um link de pagamento.
3. **Cartão inválido numa reserva do Booking.com.** O Booking.com dá um prazo ao hóspede para atualizar o cartão, por isso descobri-lo tarde custa-lhe opções.
4. **Documento de identificação em falta.** Muitos países exigem-no para o registo de hóspedes. Veja [regras de registo de hóspedes por país](/blog/guest-registration-rules-by-country).
5. **Endereço ou país em falta.** Necessário para o registo, para estatísticas oficiais como o questionário do INE de Espanha e para uma fatura / nota fiscal correta.
6. **Número de hóspedes errado.** Zero adultos, ou dois hóspedes numa reserva para quatro, podem estragar o registo, o pequeno-almoço / café da manhã e qualquer taxa turística cobrada por pessoa.
7. **Sem hora de chegada.** As chegadas tardias e o self check-in precisam de um plano no dia anterior.
8. **Um hóspede a quem pediu que não voltasse.** Melhor saber antes de chegar. Veja [como manter uma lista de hóspedes a não aceitar](/blog/hotel-do-not-rent-list).

Copie esta tabela como a sua checklist imprimível:

| Verificação | Onde ver no Little Hotelier | Automatizada no Hotelier Tools |
|---|---|---|
| Quarto atribuído | Coluna **Room** em Reservations; contador de reservas sem quarto no Calendar | Sim |
| Saldo pago | Coluna **Outstanding** em Reservations | Sim |
| Cartão válido (Booking.com) | Channel Manager > reserva > **Manage Reservation** | Não |
| Documento de identificação | Reserva > separador / aba **Guests** | Sim |
| Endereço e país | Reserva > separadores **Details** e **Guests** | Sim |
| Número de hóspedes | Coluna **Occupants** em Reservations | Não |
| Hora de chegada | Coluna **ETA** em Reservations | Não |
| Correspondência na lista de não aceitar | A sua própria lista | Sim |

## Como verificá-los no Little Hotelier sem abrir cada reserva

1. Vá a **My Apps > Front Desk > Reservations**.
2. Defina o tipo de data como **Check-in date**, escolha hoje e amanhã (ou a semana seguinte), defina o estado como **Confirmed** e clique em **Search**.
3. Percorra as colunas: um **Room** vazio, a contagem de **Occupants**, um **ETA** em branco e qualquer coisa em **Outstanding**.
4. Quer em papel? Clique em **Export** para obter um CSV. Os telefones dos hóspedes ficam fora do ficheiro / arquivo por razões de segurança.

Fonte: [Run and export reservations information](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information).

Os documentos de identificação e os endereços são a parte lenta. Estão nos separadores **Details** e **Guests** de cada reserva ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/8673701-edit-a-reservation)), por isso tem de abrir cada chegada.

### Cartões inválidos do Booking.com

No Little Hotelier, abra a reserva em **Channel Manager > Reservations**, vá ao separador **Manage Reservation** e clique em **Report payment card as invalid to Booking.com** ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)).

Em outubro de 2026, o hóspede tem então 24 horas para atualizar o cartão. Nas reservas feitas nas 48 horas anteriores ao check-in, o prazo é de 12 horas ou termina às 15h do dia do check-in, o que acontecer primeiro. Se o hóspede não o fizer, você pode cancelar a reserva antes das 15h (hora local) do dia do check-in ([Booking.com Partner Hub](https://partner.booking.com/en-us/help/policies-payments/guest-payments/handling-invalid-credit-cards)). É por isso que os cartões fazem parte da lista da véspera. Passo a passo completo: [cartão inválido ou no-show no Booking.com](/blog/booking-com-invalid-card-no-show).

::callout{type="tip" title="Scripts gratuitos que tornam esta página mais rápida"}
O [Full Width Reservation Table](/tools/ui/full-width-reservation-table) mostra todas as colunas sem scroll lateral. O [Update Number Adults](/tools/ui/update-number-adults) define as novas reservas com 2 adultos para que um 0 não escape. Mais em [extensões gratuitas do Chrome para o Little Hotelier](/blog/little-hotelier-chrome-extensions).
::

## Na véspera ou no próprio dia: quando executar cada verificação

Alguns problemas precisam de tempo para se resolverem (um cartão, um quarto), outros só se podem verificar quando o hóspede está à sua frente (o documento). O Hotelier Tools divide a estadia em cinco momentos, cada um com a sua tarefa agendada:

| Momento | Reservas que lê | O que verifica |
|---|---|---|
| Depois de uma reserva ser feita | Reservadas ontem e hoje | Quarto, ID, endereço, lista de não aceitar de novo |
| Antes de chegarem | Check-in de hoje a 7 dias à frente (1 a 60, à sua escolha) | Quarto, pagamento, lista de não aceitar de novo |
| Quando chegam | Check-in hoje | ID, endereço, quarto |
| Durante a estadia | Check-in nos últimos 7 dias (ajustável) | ID, endereço |
| Quando saem | Check-out hoje | ID, endereço, saldo |

Uma regra simples: quartos, pagamentos e cartões na véspera; ID e endereço no dia da chegada; o saldo no dia da partida.

## Como automatizar a checklist com o Hotelier Tools

1. Crie uma conta em [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) e conecte o Little Hotelier em **Credentials**.
2. Abra **Automated Checks** (`/automated-checks`). Se ainda não há nenhuma verificação ativa, a página sugere começar por **Before they arrive**: encontra uma estadia sem quarto enquanto ainda há tempo para o atribuir.
3. Abra um momento, ative ou desative as suas verificações e clique em **Save and activate task**. Isso cria a tarefa agendada com o horário recomendado, por exemplo todas as noites às 23:30 em "After a booking is made".
4. Os problemas aparecem em **Issues** (`/automated-checks/issues`), agrupados por reserva. Filtre por problemas abertos, tipo de verificação ou datas da estadia.
5. Corrija a reserva no Little Hotelier e clique em **Verify**. As verificações são executadas de novo nessa reserva e o problema fecha-se quando estiver corrigido.

::screenshot{src="/images/blog/demo/en/automated-checks-moment-on-arrival.webp" alt="Momento When they arrive no Hotelier Tools: o cartão de tarefa ainda não configurado com Every 3 hours, Choose e Run now, o botão Save and activate task, e as verificações ID / passaporte (registo policial), atribuição física de quarto e validação de endereço e origem ativadas" caption="Cada momento da estadia tem as suas verificações e o seu horário. Aqui, When they arrive." path="/automated-checks/moment/on_arrival"}
::

::screenshot{src="/images/blog/demo/en/automated-checks-issues.webp" alt="Página Issues com 20 problemas abertos, 5 resolvidos e 25 no total, filtros de problemas abertos, tipo de verificação e datas da estadia, e reservas listadas com um aviso de saldo pendente à chegada e um botão Verify" caption="Problemas agrupados por reserva. Corrija-os no Little Hotelier e clique em Verify." path="/automated-checks/issues"}
::

::demo-cta{path="/automated-checks"}
::

## Como é o relatório por e-mail

Cada execução envia **um e-mail de relatório por tarefa**, no idioma que definiu para essa tarefa: um resumo claro do que a execução encontrou, fácil de ler no telemóvel / celular. Cada problema também está em **Issues**, por isso o e-mail é o seu aviso e o dashboard é onde trabalha. Os destinatários comuns, como o proprietário e a receção, são definidos em **Settings > Notifications** (`/settings/notifications`).

::screenshot{src="/images/blog/demo/en/settings-report-recipients.webp" alt="Página de configurações Report recipients do Hotelier Tools com um endereço comum no campo Addresses, um endereço sugerido para acrescentar e a nota de que o relatório de cada tarefa agendada vai para esta lista, a menos que a tarefa indique a sua própria" caption="A página Report recipients em Settings: os endereços comuns recebem o e-mail de relatório de cada tarefa de verificação." path="/settings/notifications"}
::

## Limites e o que as verificações nunca alteram

- **Só alertam.** Nenhuma verificação edita, cancela ou cobra uma reserva. A exceção é o **check-out automático**, opcional, que escreve no Little Hotelier e está desativado por padrão.
- **No máximo uma vez por hora por tarefa.** Cada execução entra no Little Hotelier, por isso o intervalo mínimo é de 60 minutos.
- **Param em segurança.** Se a sua palavra-passe / senha do Little Hotelier expirar, as tarefas agendadas ficam em pausa sozinhas em vez de tentarem de novo, o que protege a sua conta de um bloqueio. O dashboard mostra "Automated jobs are paused" até você guardar a palavra-passe nova em **Credentials** ou clicar em **Check now & resume**.
- **Três verificações ficam manuais.** Cartões, número de hóspedes e horas de chegada não são verificados automaticamente, por isso mantenha-os na sua lista da manhã.

Cada tarefa está listada em **Cron Jobs** (`/cron`) e cada execução em **Run History** (`/cron-logs`). A funcionalidade está em beta. Mais sobre agendamento na [página Automations](/tools/bot/automations), e a funcionalidade completa em [Automated checks](/tools/bot/automated-checks).

## Resumo

- Verifique oito coisas antes de cada chegada: quarto, saldo, cartão, ID, endereço, número de hóspedes, hora de chegada e a sua lista de não aceitar de novo.
- No Little Hotelier, a lista **Reservations** filtrada por data de check-in mostra quatro delas de relance; o ID e o endereço exigem abrir cada reserva.
- O Hotelier Tools verifica quarto, pagamento, ID, endereço e a lista de não aceitar de novo em cinco momentos da estadia, lista os problemas em **Issues** e envia um relatório por e-mail.
- Comece por **Before they arrive** e depois acrescente os outros momentos.
