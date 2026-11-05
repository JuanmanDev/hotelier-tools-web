---
title: "Expedia Collect: como receber com o cartão virtual ou um pedido de pagamento (e não deixar nenhum para trás)"
seoTitle: "Pagamentos Expedia Collect: cartão virtual ou pedido"
description: "Com o Expedia Collect o hóspede paga à Expedia, mas só recebe quando cobra o cartão virtual ou pede o pagamento. Prazos, passos e como automatizar."
date: 2026-11-04
updated: 2026-11-05
category: invoicing
tags: [expedia, expedia collect, pagamentos, cartão virtual, partner central, automação]
keywords: [expedia collect pedido de pagamento, como receber da expedia collect, pedir pagamento à expedia, cartão virtual expedia quando cobrar, expedia collect não pagou, pagamentos expedia partner central, expedia collect ou hotel collect, pagamentos automáticos expedia, cartão virtual expedia expirado]
feature: automated-checks
demoPath: /credentials/expedia-extranet
cover: /images/blog/demo/en/expedia-collect-payments-states.webp
coverAlt: "Cartão Expedia Collect payments no Hotelier Tools para check-outs de 7 de outubro a 5 de novembro de 2026: os filtros All 7, To request 2 (€224.08), Refused by Expedia 1, Check in Partner Central 1, Requested 1, Reconciled by Expedia 1 e Cancelled 1, e sete estadias de demonstração com valor, estado, quem pediu (Check at check-out ou Demo Manager) e IDs de fila da Expedia, por cima do botão Request payment"
featured: true
faq:
  - q: "Quanto tempo tenho para pedir o pagamento de uma reserva Expedia Collect?"
    a: "365 dias a partir da data de check-out do hóspede. Depois disso, o Partner Central deixa de oferecer o pedido de pagamento para essa estadia, e uma reserva esquecida pode ser dinheiro que nunca recebe."
  - q: "Quando posso cobrar o cartão virtual da Expedia?"
    a: "A partir da data de check-in. A Expedia recomenda cobrar no check-in e, se falhar, tentar de novo ao fim do dia, por causa dos fusos horários. Cobre o valor exato indicado; o cartão é desativado seis meses após o check-out."
  - q: "Quanto tempo demora a Expedia a pagar um pedido de pagamento?"
    a: "A Expedia envia o pagamento para o seu banco segundo as suas condições de pagamento, normalmente 30 dias após o pedido. O banco pode demorar mais 2 a 8 dias."
  - q: "Tenho de pedir à mão cada pagamento Expedia Collect?"
    a: "Não, se usar o cartão virtual, que cobra você mesmo, ou os pagamentos automáticos onde a Expedia os oferece (alguns mercados, com uma dedução de 2%). Caso contrário, cada estadia precisa de um pedido de pagamento no Partner Central, ou de uma ferramenta que o envie por você."
  - q: "O Hotelier Tools pode pedir os pagamentos Expedia Collect automaticamente?"
    a: "Sim, em beta. Uma tarefa agendada pede à Expedia que pague as estadias depois do check-out. Começa em modo de pré-visualização, nunca pede duas vezes a mesma estadia, nunca inicia sessão sozinha e nunca cobra cartões virtuais."
  - q: "O Hotelier Tools faz parte da Expedia ou do Little Hotelier?"
    a: "Não. O Hotelier Tools é independente: não é afiliado à Expedia Group, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel e com o seu próprio login do Partner Central."
---

Com o Expedia Collect, o hóspede paga à Expedia quando reserva, e a Expedia fica a dever-lhe o dinheiro depois da estadia. Recebe-o de uma de três formas: cobra o cartão virtual da Expedia a partir da data de check-in, envia um pedido de pagamento no Partner Central (**Payments > Request a payment from Expedia Group**) até 365 dias após o check-out, ou a Expedia paga-lhe através de pagamentos automáticos, onde existem. Se não fizer nada disto, o dinheiro nunca é cobrado. O Hotelier Tools (beta) mostra o estado de pagamento de cada estadia da Expedia e pode enviar os pedidos por você, de forma agendada.

As regras da Expedia abaixo foram verificadas na ajuda do Partner Central da Expedia Group em novembro de 2026.

## Como receber as reservas Expedia Collect?

Com o **Expedia Collect (EC)**, os viajantes pagam antecipadamente à Expedia ou a um dos seus parceiros B2B, e a notificação da reserva mostra a tarifa líquida: o que a Expedia lhe paga depois da sua comissão ([About Expedia Collect](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-expedia-collect)). Depois da estadia, recebe de uma destas formas:

| Como recebe | O que faz | Quando chega o dinheiro | Custo |
|---|---|---|---|
| **Cartão virtual** | Cobra-o no seu terminal de pagamento, a partir da data de check-in | No prazo habitual do seu processador de cartões | Sem taxa da Expedia, só a do seu processador |
| **Pedido de pagamento** (transferência bancária) | Pede-o no Partner Central até 365 dias após o check-out | Normalmente 30 dias depois, mais 2 a 8 dias úteis do banco | Gratuito |
| **Pagamentos automáticos** (alguns mercados) | Nada por estadia | Último dia do mês seguinte ao check-out | Dedução de 2% |

Há dois outros modelos parecidos que funcionam de outra forma. Com o **Hotel Collect**, o hóspede paga-lhe diretamente na propriedade, por isso não há nada a pedir à Expedia. O **Expedia Traveler Preference** deixa cada hóspede escolher um ou outro ao reservar.

Em alguns mercados, a Expedia substituiu o EC pelo **Updated Expedia Collect (EC+)**. No modelo líquido, o cartão virtual é carregado com o total da reserva menos a comissão da Expedia e os impostos. No modelo bruto, leva o valor total e a Expedia fatura-lhe a comissão à parte ([About virtual cards](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/about-the-expedia-virtual-card)).

## Como cobrar o cartão virtual da Expedia

O **Expedia Virtual Card (EVC)**, agora só "virtual card" no Partner Central, é um cartão de utilização única que a Expedia emite para cada reserva Expedia Collect, depois de aderir ao serviço ([Charge the virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/charge-the-expedia-virtual-card-for-expedia-collect-bookings)).

1. Encontre os dados do cartão: na notificação da reserva (se tiver um channel manager), na reserva no Partner Central em **Payment method**, ou na página de consulta **Virtual cards** com o ID da reserva e a data de check-in ([Find a virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/find-the-expedia-virtual-card-information)).
2. Cobre-o **a partir da data de check-in**, pelo total exato indicado, na moeda do seu contrato.
3. Se for recusado de manhã, tente de novo ao fim do dia. A Expedia explica que o cartão pode ainda não estar ativo por causa dos fusos horários.
4. Cobre os extras e a taxa turística no cartão do próprio hóspede, nunca no cartão virtual.

Atenção aos prazos. O artigo sobre a cobrança diz que o cartão é válido durante 180 dias após o check-out, e o artigo de consulta diz que é desativado seis meses após o check-out. Vai cobrar noutra moeda? Use a taxa de câmbio desse dia, ou arrisca uma recusa ou um chargeback.

## Como pedir o pagamento à Expedia Group no Partner Central

Se não usa o cartão virtual, cada estadia Expedia Collect precisa de um pedido de pagamento ([Request payment from Expedia Group](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/request-payment-from-expedia-group)):

1. Selecione **Payments** no menu.
2. Em **Quick tasks**, selecione **Request a payment from Expedia Group**.
3. Pesquise **By Date Range** (no máximo 31 dias de cada vez) ou **By Reservation ID** (até 200 IDs).
4. Marque as reservas, confirme os valores da reserva e dos impostos e selecione **Create Invoice**.
5. Guarde o **Transmission Queue ID** que aparece na confirmação. É a referência desse pedido.

Se o Partner Central não tiver os dados de uma reserva, carregue antes um ficheiro / arquivo de pedido de pagamento. Se os seus dados bancários estiverem incompletos, uma janela na página do pedido avisa: corrija-os primeiro, ou o pagamento atrasa.

## Quando paga a Expedia, e o que acontece se se esquecer?

A Expedia envia o dinheiro segundo as suas condições de pagamento, normalmente 30 dias após o pedido, e o banco pode demorar mais 2 a 8 dias. Uma reserva faturada só por parte do valor precisa de um novo pedido para o resto. Num no-show ou numa saída antecipada, contacte a Expedia para pedir um reembolso.

Se ninguém pedir uma estadia, **a Expedia não a paga**. Passados 365 dias do check-out, a opção desaparece do Partner Central. Um verão cheio com dez estadias esquecidas é muito dinheiro que fica na Expedia.

Os pagamentos automáticos eliminam o passo por estadia, mas só existem em alguns mercados e ficam com 2% ([About automatic payouts](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-automatic-payouts)). Veja em **Payments > Payment Settings** se a sua propriedade os tem.

## Como conciliar os pagamentos Expedia Collect

Todos os meses, cruze três listas:

- **Os seus check-outs:** todas as estadias Expedia Collect que terminaram.
- **Os seus pedidos:** no Partner Central, **Payments > See all invoices**, um intervalo de datas e depois a coluna **Status**. Ficam guardados dois anos de histórico, com o valor da remessa e a data de pagamento ([Check the status of an invoice](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/research-an-invoice-status)).
- **O seu banco:** as transferências recebidas, com os queue IDs.

Um check-out sem pedido é dinheiro a pedir. Um pedido sem transferência ao fim de 40 dias justifica uma pergunta à Expedia. Quando uma estadia estiver paga, registe o pagamento no seu sistema de gestão (PMS), para que o Little Hotelier não mostre um saldo que o hóspede não deve.

## A forma mais rápida: pedir os pagamentos Expedia Collect a partir do Hotelier Tools (beta)

O Hotelier Tools conecta-se à sua conta do Partner Central e faz esta ronda por você. Lê todas as estadias da Expedia, mostra em que ponto está o dinheiro de cada uma e pede à Expedia que pague, à mão ou de forma agendada.

### 1. Conecte o Partner Central

Abra **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`). O início de sessão corre num navegador no servidor: o Hotelier Tools escreve o e-mail e a palavra-passe / senha, e você só responde ao que a Expedia pergunta.

- **I have a login** (tenho um login): introduza o e-mail e a palavra-passe de acesso. Num dispositivo novo, a Expedia envia um código por e-mail, que escreve na caixa **Code from Expedia**. Os acessos seguintes reutilizam o dispositivo guardado e normalmente não pedem código.
- **I have an invitation link** (tenho um link de convite): uma opção mais limpa é um utilizador / usuário do Partner Central só para o Hotelier Tools. Convide-o a partir da sua conta e cole o link do e-mail de convite da Expedia tal como está. O assistente cria a palavra-passe (12 a 64 caracteres, com maiúsculas e minúsculas, um número e um símbolo) e o perfil que a Expedia exige, que inclui um telefone.

Qualquer passo que o assistente não conheça, como configurar SMS ou uma verificação de segurança, mostra uma imagem da página: você clica nela e escreve no campo. **Keep me signed in** fica sempre marcado e a sessão é guardada encriptada. A tarefa **Keep Expedia signed in** (a cada 20 minutos) usa-a para que não expire por inatividade, e nunca inicia sessão sozinha. Se a sessão expirar, é uma pessoa que volta a entrar.

### 2. Veja o estado de pagamento de cada estadia

O cartão **Expedia Collect payments**, na mesma página, lista todas as estadias da Expedia com check-out nas datas que escolher. Escolha **Last 30 days**, **This month**, **Last month**, **Last 3 months**, **This year** ou **Last year**, ou qualquer intervalo até 366 dias. A Expedia é lida 31 dias de cada vez, tal como no próprio formulário do Partner Central.

Cada estadia tem um estado, com um botão que filtra a lista:

| Estado | O que significa |
|---|---|
| **To request** | Check-out feito, nada pago, nunca pedido: pode pedi-lo agora |
| **Not yet** | Ainda sem check-out, ou nada a pedir |
| **Requested** | Pedido a partir do Hotelier Tools; a Expedia aceitou-o e deu um queue ID |
| **Refused by Expedia** | A Expedia respondeu com um erro; uma pessoa pode pedir de novo |
| **Check in Partner Central** | Sem resposta legível: veja no Partner Central antes de pedir de novo |
| **Reconciled by Expedia** | Pedido a partir daqui; os extratos da Expedia dizem que aceitou o valor e que o pagamento está pendente |
| **Paid by Expedia** | Pedido a partir daqui; os extratos da Expedia indicam a data e o valor pago |
| **Paid** / **Invoiced** | Os registos da própria Expedia dizem que foi pago um valor, ou a estadia está faturada |
| **Not in Expedia's list** | Pedido à mão no Partner Central, ou pago por pagamentos automáticos |
| **Virtual card** | Cobre o cartão: não há nada a pedir |
| **Hotel Collect** | O hóspede paga-lhe diretamente |

Marque as estadias, ou use a caixa para selecionar todas, e carregue em **Request payment for N stays**. Depois de confirmar, o Hotelier Tools envia um único pedido para todas, o mesmo pedido **Create Invoice** do Partner Central. Cada estadia é reservada primeiro, por isso nunca é enviada duas vezes. **Details** mostra o que a Expedia diz sobre uma estadia e o histórico do pedido.

::screenshot{src="/images/blog/demo/en/expedia-collect-payments-states.webp" alt="Cartão Expedia Collect payments no Hotelier Tools para check-outs de 7 de outubro a 5 de novembro de 2026: os filtros All 7, To request 2 (€224.08), Refused by Expedia 1, Check in Partner Central 1, Requested 1, Reconciled by Expedia 1 e Cancelled 1, e sete estadias de demonstração com valor, estado, quem pediu (Check at check-out ou Demo Manager) e IDs de fila da Expedia, por cima do botão Request payment" caption="Todas as estadias da Expedia nas datas que escolher, com o ponto em que está o dinheiro de cada uma. Marque as que quer pedir e peça-as de uma só vez." path="/credentials/expedia-extranet"}
::

### 3. Deixe-o correr de forma agendada

Em **Automatic Expedia payment requests** (`/credentials/expedia-extranet/automatic-requests`), carregue em **Every day at 09:30** (o horário recomendado) ou em **Choose** para escolher a sua hora. Isso cria a tarefa **Request Expedia Collect payments**. Começa em **Preview**: cada execução escreve no registo as estadias que pediria e não envia nada. Quando a lista estiver certa, mude **What a run does** para **Request: ask Expedia to pay**.

| Definição | Padrão | O que faz |
|---|---|---|
| **Days after check-out** | 1 | Pede quando o check-out já tem este número de dias |
| **Look back (days)** | 30 | Até quando procura check-outs para trás |
| **Most per stay** | No limit | Uma estadia que peça mais do que isto fica para uma pessoa |
| **Most stays per run** | 20 | As restantes esperam pela execução seguinte |

O que nunca faz: iniciar sessão no Partner Central, pedir duas vezes a mesma estadia, pedir uma estadia paga com cartão virtual ou ainda sem check-out, ou voltar a pedir uma estadia que a Expedia recusou ou não respondeu. Essas ficam para uma pessoa, e o registo da execução indica-as.

::screenshot{src="/images/blog/demo/en/expedia-collect-preview-run.webp" alt="Detalhes da execução da tarefa Request Expedia Collect payments a 5 de novembro de 2026, marcada como Success, com o resumo do resultado: Preview, nothing sent: 1 stay would be requested from Expedia (54.08 EUR): EXP-2570209049. 2 stays Expedia refused or did not answer before are left for a person" caption="Em modo Preview, cada execução escreve as estadias que pediria e não envia nada. As estadias que a Expedia recusou ficam para uma pessoa." path="/credentials/expedia-extranet/automatic-requests"}
::

Já usa as verificações **When they leave**? A verificação **Expedia Collect payment** avisa de um valor ainda não pedido. Com a correção **Request the payment from Expedia (asks Expedia for money)** ligada, envia o pedido quando o hóspede sai. Pode ter as duas ligadas: cada estadia só é reservada uma vez.

::screenshot{src="/images/blog/demo/en/expedia-collect-checkout-check.webp" alt="Página de verificações When they leave: as verificações Address and origin validation e Automatic check-out, e depois a verificação Expedia Collect payment, desligada, com o que pode fazer (avisar de um valor ainda não pedido e, com a correção ligada, pedir à Expedia uma vez por estadia) e o que não faz (pedir de novo uma estadia recusada, cobrar cartões virtuais)" caption="O momento do check-out pode pedir à Expedia cada estadia quando o hóspede sai, uma vez por estadia." path="/automated-checks/moment/at_checkout"}
::

### 4. Acompanhe o histórico

**Expedia payments** (`/automated-checks/expedia-payments`) é o registo de todos os pedidos feitos a partir do Hotelier Tools: por uma pessoa, pela tarefa agendada, pela verificação de check-out, por um assistente ou pela API. Filtre por estado, por **Who asked** e por datas de check-out, e abra uma linha para ver cada reserva e cada resposta da Expedia. **Ask again** volta a tentar as estadias que a Expedia recusou. Para uma estadia sem resposta, marque primeiro **I checked Partner Central and these stays are not there**, porque pedir duas vezes pode significar receber duas vezes.

::screenshot{src="/images/blog/demo/en/expedia-collect-payments-history.webp" alt="Página do histórico Expedia payments: a pesquisa Search, os filtros Who asked e de datas de check-out, os filtros Requested 12, Refused by Expedia 1, Check in Partner Central 1 e Sending 0, um botão Ask again e os pedidos: Lucas Alvarez recusado pela Expedia porque o valor não coincidia com a reserva, Chiara Larsen pedido com um ID de fila, Sean Bianchi sem resposta legível, a verificar no Partner Central, e estadias pedidas pela verificação no check-out" caption="Cada pedido feito a partir do Hotelier Tools, quem o fez e o que a Expedia respondeu. As estadias recusadas ou sem resposta podem voltar a ser pedidas." path="/automated-checks/expedia-payments"}
::

Numa reserva da Expedia (`EXP-` seguido do código de confirmação), a secção **Payments** da reserva tem um painel **Expedia payment** com **Check with Expedia** e um link que abre o cartão de pagamentos com essa estadia marcada.

Também pode perguntar ao assistente de IA do dashboard, ou ao Claude e ao ChatGPT através do [servidor MCP](/blog/what-is-mcp-server-hotels). "Que pagamentos da Expedia foram recusados este mês?" chama `list_expedia_payment_requests`. "Pede de novo à Expedia a EXP-2570237397" chama `request_expedia_payments`, uma ferramenta que precisa da sua aprovação: no chat do dashboard mostra um cartão, e nada é enviado até você confirmar. As mesmas consultas e pedidos estão na API REST.

### Limites honestos

- **Beta, e recente.** Os pedidos de pagamento foram lançados em novembro de 2026.
- **Só acompanha o pagamento dos pedidos feitos aqui.** Desde a versão 1.71 (novembro de 2026), o Hotelier Tools lê a página **Statements and invoices** do Partner Central (os últimos 12 meses) e mostra um pedido como **Reconciled by Expedia** (aceite, pagamento pendente) ou **Paid by Expedia** (com a data e o valor), também no painel da Expedia da reserva. Um pedido que ainda não esteja nessa página continua como **Requested**.
- **Nunca cobra cartões virtuais.** Essas estadias aparecem como **Virtual card**: cobre-as no seu terminal.
- **Usa a sua própria sessão do Partner Central.** Os termos de parceiro da Expedia restringem o acesso automatizado ao Partner Central. O Hotelier Tools entra como o seu utilizador, nunca por iniciativa própria, e nada é partilhado entre propriedades.
- **A demo usa um Partner Central simulado.** As suas estadias da Expedia mostram todos os estados, e um pedido que envie aí só é aceite em memória: nada chega à Expedia.

::demo-cta{path="/credentials/expedia-extranet"}
::

Todas as verificações estão na [página Automated checks](/tools/bot/automated-checks). O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools não é afiliado à Expedia Group, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel e com o seu próprio login do Expedia Partner Central.
::

Veja também: [mensagens de hóspedes da Expedia](/blog/expedia-guest-messages), [reservas de OTA que faltam no Little Hotelier](/blog/ota-bookings-missing-little-hotelier), [cartão inválido ou no-show no Booking.com](/blog/booking-com-invalid-card-no-show).

## Resumo

- Expedia Collect significa que a Expedia guarda o dinheiro do hóspede até você o reclamar.
- Cartão virtual: cobre-o a partir da data de check-in, pelo valor exato, antes de ser desativado seis meses após o check-out.
- Pedido de pagamento: **Payments > Request a payment from Expedia Group**, até 365 dias após o check-out; pago normalmente 30 dias depois.
- Concilie todos os meses: check-outs contra **See all invoices** contra o seu banco.
- O Hotelier Tools (beta) mostra o estado de cada estadia e pode pedir os pagamentos de forma agendada, começando em pré-visualização e sem nunca pedir duas vezes.
