---
title: "Reserva do Booking.com ou da Expedia que não aparece no Little Hotelier: causas, verificações e como evitar um overbooking"
seoTitle: "Reserva Booking.com ou Expedia em falta no Little Hotelier?"
description: "Porque uma reserva de uma OTA não chega ao Little Hotelier, onde ver o estado de entrega, como proteger o quarto e como ser avisado quando falta uma."
date: 2026-10-29
updated: 2026-11-05
category: operations
tags: [booking.com, expedia, channel manager, overbooking, little hotelier, siteminder]
keywords: [reserva booking não aparece no little hotelier, reserva expedia não chegou ao channel manager, little hotelier reserva em falta, siteminder reserva não entregue, reserva booking não aparece no pms, overbooking channel manager, reenviar reserva little hotelier, reserva booking não chegou ao channel manager, como evitar overbooking hotel]
feature: automated-checks
demoPath: /reservations/calendar
cover: /images/blog/demo/en/ota-missing-calendar-double-booked.webp
coverAlt: "Calendário de reservas do Hotelier Tools de 4 a 17 de novembro de 2026: quartos agrupados por tipo com reservas confirmadas e com check-in feito em barras, uma linha No room yet, o quarto 104 fechado para manutenção e a legenda com Checked in, Checked out, Confirmed, Double booked e Room closed"
faq:
  - q: "Porque é que uma reserva do Booking.com não aparece no Little Hotelier?"
    a: "Normalmente o quarto ou a tarifa reservados não estão mapeados, ou estão desativados, no Channel Manager do Little Hotelier, a reserva foi feita com outro código de propriedade, ou a entrega falhou. Veja o estado de entrega em My apps > Channel Manager > Reservations."
  - q: "Como reenvio uma reserva falhada para o Little Hotelier?"
    a: "Em My apps > Channel Manager > Reservations, clique no ID da reserva, abra o separador / aba Little Hotelier no Booking summary e clique em Resend PMS message. Uma reserva sem estado de entrega não pode ser reenviada: crie-a à mão."
  - q: "O que devo fazer primeiro quando falta uma reserva?"
    a: "Proteja o quarto. Crie a reserva à mão em Front Desk > Calendar com os dados da extranet, o que baixa a disponibilidade em todos os canais. Depois descubra porque não chegou."
  - q: "O Booking.com avisa-me quando uma reserva não chega ao meu channel manager?"
    a: "Sim. O Booking.com envia um e-mail à propriedade quando há um problema ao adicionar uma reserva ao sistema do fornecedor de conectividade, por isso mantenha atualizados os contactos na sua Extranet. A reserva em si está sempre na Extranet."
  - q: "Com que rapidez o Hotelier Tools avisa de uma reserva em falta?"
    a: "Na Expedia, a verificação corre a cada 15 minutos e avisa de uma reserva que continua em falta ao fim de 30 minutos, vista em pelo menos duas leituras: cerca de 30 a 45 minutos depois de a reserva ser feita. Avisa uma vez por reserva, e mais uma quando ela chega. No Booking.com, por agora, só avisa de incidentes nas reservas."
  - q: "O Hotelier Tools faz parte do Little Hotelier, da SiteMinder, do Booking.com ou da Expedia?"
    a: "Não. O Hotelier Tools é independente: não é afiliado a nenhum deles, nem tem o aval deles. Lê as suas extranets e o Little Hotelier com os seus próprios logins e nunca cria, altera nem cancela uma reserva."
---

Quando falta no Little Hotelier uma reserva do Booking.com ou da Expedia, quase sempre parou num de três pontos: o quarto ou a tarifa não estão mapeados (ou estão desativados) no Channel Manager, a reserva foi para outro código de propriedade, ou a entrega falhou. Veja o estado em **My apps > Channel Manager > Reservations** e reenvie-a se falhou. Seja qual for a causa, crie primeiro a reserva à mão, para que o quarto não possa ser vendido duas vezes.

Os ecrãs / telas do Little Hotelier, do Booking.com e da Expedia abaixo foram verificados em novembro de 2026.

## Porque é que a reserva não chegou ao Little Hotelier?

Uma reserva viaja da OTA para o channel manager da SiteMinder e daí para o Front Desk do Little Hotelier. Pode parar em qualquer passo. As causas habituais, segundo o [guia de reservas em falta](https://helpcentre.littlehotelier.com/en/articles/12391160-troubleshooting-missing-reservations-and-overbookings) do Little Hotelier e o [guia de sincronização](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager) do Booking.com:

| Causa | Como se manifesta |
|---|---|
| **Plano tarifário ou quarto não mapeado** | O hóspede reservou uma tarifa que não está conectada no Channel Manager. A reserva não tem nenhum estado de entrega. |
| **Tarifa ou canal desativado** | Os itens desativados não enviam atualizações, mas a OTA continua a vender com a disponibilidade antiga. |
| **Reservada antes de a tarifa ser mapeada** | As reservas feitas antes de ativar ou mapear uma tarifa de canal não sincronizam sozinhas. |
| **Código de propriedade errado** | Uma segunda conta da extranet com outro código. As suas reservas nunca chegam ao Little Hotelier. |
| **Entrega falhada** | O channel manager recebeu a reserva, mas o Little Hotelier rejeitou-a ou não a conseguiu confirmar. |
| **Incidente do lado da OTA** | A própria API de reservas da OTA está em baixo. Durante algum tempo deixam de chegar reservas novas, alterações e cancelamentos. |

Não se esqueça das alterações e dos cancelamentos. Fazem o mesmo caminho. Um cancelamento perdido mantém bloqueado um quarto que podia vender. Uma mudança de datas perdida põe o hóspede nas noites erradas. As duas resolvem-se da mesma forma: compare a reserva na extranet com o Little Hotelier.

Uma reserva aceite com disponibilidade zero é outro problema. O conselho do Little Hotelier é perguntar à OTA porque a aceitou e pedir ao suporte o registo das atualizações de inventário enviadas a esse canal, como prova.

## Como ver o estado de entrega no Little Hotelier

1. Vá a **My apps > Channel Manager > Reservations**. Use o filtro **All PMS status** para ver o estado de entrega de cada reserva.
2. Leia o estado ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/8673803-check-little-hotelier-s-reservation-delivery-statuses)):
   - **DELIVERED**: o Little Hotelier aceitou-a. Se mesmo assim não a encontra, procure no Front Desk pelo nome do hóspede e no ano certo, e depois contacte o suporte.
   - **PENDING**: ainda não foi recebida. Normalmente resolve-se em poucos minutos.
   - **FAILED**: rejeitada ou não confirmada. O erro também lhe é enviado por e-mail.
   - **Sem estado**: a tarifa não está mapeada. Não pode ser reenviada, por isso crie-a à mão.
3. Para reenviar uma reserva falhada, clique no seu ID. Na janela **Booking summary**, abra o separador **Little Hotelier** e clique em **Resend PMS message**.

As falhas também aparecem no sino, em **Reservation delivery failures**. Depois corrija a causa em **My apps > Channel Manager > Channels > Configure**: mapeie as tarifas por mapear, volte a ativar as desativadas e confirme que **Rates Mapped** mostra os dois números iguais (por exemplo 44/44). Uma tarifa que continua a falhar com "Unable to locate" foi apagada ou alterada do lado da OTA e tem de ser mapeada de novo ([erros de mapeamento](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshooting-channel-mapping-errors)).

## Como verificar no Booking.com e na Expedia

**Booking.com.** Todas as reservas estão na lista **Reservations** da Extranet, aconteça o que acontecer depois. O Booking.com diz que uma reserva pode faltar no seu fornecedor quando o quarto ou a tarifa ainda não estão conectados lá, ou depois de um problema técnico. Também lhe envia um e-mail sempre que não conseguiu adicionar uma reserva ao sistema do seu fornecedor, por isso mantenha atualizados os contactos da Extranet ([Booking.com Partner Help](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager)). Quando faltam várias reservas ao mesmo tempo, veja na [página pública de estado da conectividade](https://connect.booking.com/status) do Booking.com se há um incidente nas reservas.

**Expedia.** Abra a página de reservas do Partner Central, pesquise pelo número de confirmação ou pelas datas, e anote o quarto e a tarifa que o hóspede reservou. Se está no Partner Central mas não no Little Hotelier, a falha está entre a Expedia e a SiteMinder: confirme que a SiteMinder continua a ser o seu fornecedor de conectividade tanto para tarifas como para reservas, e que a tarifa está mapeada.

Em ambos os casos, o Little Hotelier não pode contactar a OTA por você. Se o mapeamento está certo e a OTA diz que enviou a reserva, peça à OTA o registo XML de entrega dessa reserva e envie-o ao suporte do Little Hotelier.

## Como evitar um overbooking enquanto investiga

1. **Crie a reserva à mão.** Em **Front Desk > Calendar**, clique na data de check-in, escolha **Add Reservation** e copie os dados da extranet. Ao criá-la, a sua disponibilidade baixa em todos os canais.
2. **Lembre-se de que é manual.** As alterações ou cancelamentos posteriores dessa reserva também têm de ser feitos à mão no Front Desk. Se a original chegar mais tarde, confirme que não fica com as duas.
3. **Já está cheio?** Peça à OTA para realojar o hóspede.
4. **Evite que a causa volte.** Mapeie todas as tarifas que vende, fique atento aos canais desativados e considere um stop sell nos canais mais fracos quando só resta um quarto.

## A forma mais rápida: ser avisado quando falta uma reserva de uma OTA

Verificar à mão funciona quando já sabe que falta uma reserva. O difícil é saber. O Hotelier Tools compara a lista de reservas da própria Expedia com o Little Hotelier a cada 15 minutos e envia-lhe um e-mail sobre uma reserva que não chega. No Booking.com, hoje avisa de incidentes nas reservas; a verificação reserva a reserva ainda não está terminada (mais abaixo).

1. Conecte a extranet em **Credentials**: **Expedia Partner Central** (`/credentials/expedia-extranet`) ou **Booking.com extranet** (`/credentials/booking-extranet`).
2. Mantenha a sessão ativa com **Keep Expedia signed in** (ou **Keep the session signed in** no Booking.com) na mesma página. A verificação não consegue ler uma sessão expirada.
3. Agende **Check Expedia reservations are in Little Hotelier** (ou a do Booking.com) a partir do seu cartão, com a configuração recomendada: **Every 15 minutes** (a cada 15 minutos). Quando a extranet está conectada e a sessão mantida ativa, o Hotelier Tools cria esta tarefa por você.
4. Confirme que o e-mail chega às pessoas certas: **Settings > Notifications** (`/settings/notifications`). Sem endereços lá, vai para o e-mail de contacto do proprietário.
5. Quando chegar o e-mail, encontre a reserva na extranet, crie-a no Little Hotelier ou feche o quarto nessas noites, e depois corrija a causa como acima.

Cada execução lê as reservas feitas hoje e as chegadas dos próximos 14 dias, e as reservas do Little Hotelier. As reservas da Expedia são associadas pelo seu código de confirmação (`EXP-` mais o número), o mesmo código que o Little Hotelier guarda.

::screenshot{src="/images/blog/demo/en/ota-missing-expedia-alert-run.webp" alt="Detalhes da execução de checkExpediaReservationsInLh a 1 de novembro de 2026 às 11:30, marcada como Success, com o resumo do resultado: Expedia → Little Hotelier: 1 of 6 bookings in scope are NOT in Little Hotelier: 2570106574. Alert emailed for 1 booking missing for over 30 minutes: 2570106574" caption="Cada execução diz quantas reservas comparou e qual falta. O aviso é enviado uma só vez." path="/cron-logs"}
::

### Um aviso por reserva, não um a cada 15 minutos

A entrega demora habitualmente alguns minutos, por isso uma leitura nunca chega. Cada reserva em falta entra num registo:

- **Aviso ao fim de 30 minutos, em falta em pelo menos duas leituras.** Ou seja, cerca de 30 a 45 minutos depois de a reserva ser feita.
- **Avisa uma vez.** O e-mail é reservado antes de ser enviado, por isso duas execuções não o podem enviar as duas. Se o e-mail não chegou a ninguém, a reserva do envio é libertada e a execução seguinte tenta de novo.
- **Avisa de novo quando se resolve.** Quando a reserva aparece no Little Hotelier, ou a OTA a cancela, ou a estadia termina, recebe um e-mail de "já não está em falta".
- **Sem falsos "tudo bem".** Se uma lista não pôde ser lida por completo, a execução falha e di-lo. Nada conta como verificado.

A demo mostra um episódio completo no histórico de execuções da verificação da Expedia: uma reserva vista em falta pela primeira vez, o aviso 30 minutos depois e, quando a reserva chegou ao Little Hotelier, a nota de "já não está em falta".

::screenshot{src="/images/blog/demo/en/ota-missing-expedia-check-runs.webp" alt="Run History filtrado pela tarefa Check Expedia reservations are in Little Hotelier, com três execuções bem-sucedidas a 1 de novembro de 2026: às 10:59 a reserva 2570106574 é uma das 6 do período que não estão no Little Hotelier, às 11:29 a mesma reserva com Alert emailed, e às 12:44 as 6 reservas estão no Little Hotelier e 1 reserva de um aviso anterior já não está em falta" caption="Um episódio em três execuções: vista em falta, um só aviso ao fim de 30 minutos e depois dada como resolvida." path="/cron-logs"}
::

A verificação da Expedia também regista diferenças de estado e de datas (cancelada na Expedia mas ativa no Little Hotelier, por exemplo) e reservas sem quarto. Aparecem no resumo da execução em **Run History** (`/cron-logs`).

::screenshot{src="/images/blog/demo/en/ota-missing-calendar-double-booked.webp" alt="Calendário de reservas do Hotelier Tools de 4 a 17 de novembro de 2026: quartos agrupados por tipo com reservas confirmadas e com check-in feito em barras, uma linha No room yet, o quarto 104 fechado para manutenção e a legenda com Checked in, Checked out, Confirmed, Double booked e Room closed" caption="O calendário marca duas reservas no mesmo quarto como Double booked, por isso um overbooking que já aconteceu salta à vista." path="/reservations/calendar"}
::

### Booking.com: os avisos de incidentes funcionam, a verificação reserva a reserva não está terminada

Antes de ler a extranet, a verificação do Booking.com lê a página pública de estado do Booking.com. Um incidente na sua API de reservas é enviado por e-mail uma vez quando começa e outra quando fica resolvido, mesmo que a sua sessão da extranet esteja em baixo. É exatamente quando mais ninguém daria por isso.

A comparação reserva a reserva no Booking.com **ainda não funciona**. A Extranet desenha a lista de reservas com um script, por isso a página que o Hotelier Tools recebe tem a tabela sem linhas. Em vez de dizer "tudo bem" sobre reservas que ninguém viu, a verificação falha de forma visível em cada execução até essa lista poder ser lida. Por agora, o aviso por reserva funciona na Expedia, e o Booking.com dá-lhe os avisos de incidentes.

### O que nunca faz

- **Só lê**, em todos os lados. Nunca cria, altera nem fecha uma reserva, e nunca fecha um quarto por você.
- **Só duas OTA.** O Airbnb, a Hostelworld e outras não são verificadas.
- **Não substitui o mapeamento.** Se uma tarifa não está mapeada, continua a ter de a corrigir no Little Hotelier.

## Menos e-mails, e melhores, das suas outras verificações

A mesma regra aplica-se aos outros avisos do Hotelier Tools. Em **Automated Checks** (`/automated-checks`), defina o **Send email on** de uma tarefa como **Only with new or changed issues** (só com problemas novos ou alterados): o relatório passa a trazer só os problemas que nenhum relatório anterior mencionou, ou que mudaram. E quando uma pessoa marca um problema como resolvido em **Issues** (`/automated-checks/issues`), ele continua resolvido enquanto a verificação encontrar a mesma coisa. Um problema diferente abre um problema novo.

::screenshot{src="/images/blog/demo/en/ota-missing-checks-issues.webp" alt="Página Issues do Hotelier Tools: a introdução em quatro passos (uma verificação encontra um problema, fica listado por reserva, você corrige-o no Little Hotelier, Verify volta a verificá-lo), contadores de 21 abertos, 5 resolvidos e 26 no total, filtros e um erro de não aceitar de novo numa reserva com um botão Verify" caption="Problemas encontrados pelas verificações agendadas, agrupados por reserva. O Resolved de uma pessoa mantém-se até algo mudar." path="/automated-checks/issues"}
::

::demo-cta{path="/reservations/calendar"}
::

O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança. Cada verificação está na [página Automated checks](/tools/bot/automated-checks).

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools não é afiliado ao Booking.com, à Expedia, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel e com os seus próprios logins das extranets.
::

Veja também: [a checklist diária da receção](/blog/hotel-front-desk-checklist-automation), [o calendário de reservas do Little Hotelier](/blog/little-hotelier-reservation-calendar), [links de pagamento do Little Hotelier](/blog/little-hotelier-payment-links).

## Resumo

- Uma reserva de uma OTA em falta significa normalmente uma tarifa por mapear ou desativada, o código de propriedade errado ou uma entrega falhada.
- Veja **My apps > Channel Manager > Reservations**: uma **FAILED** pode ser reenviada com **Resend PMS message**; **sem estado** significa que a tarifa não está mapeada.
- Proteja primeiro o quarto: crie a reserva à mão em **Front Desk > Calendar** e depois corrija a causa.
- O Hotelier Tools compara a Expedia com o Little Hotelier a cada 15 minutos e envia um e-mail uma vez por cada reserva em falta, além dos incidentes nas reservas do Booking.com. A sua verificação reserva a reserva no Booking.com ainda não está terminada.
