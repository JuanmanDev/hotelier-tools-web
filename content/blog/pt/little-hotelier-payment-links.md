---
title: "Links de pagamento do Little Hotelier: como enviar um, cobrar sinais e lembrar os hóspedes que não pagaram"
seoTitle: "Link de pagamento e lembretes no Little Hotelier"
description: "Envie um pedido de pagamento a partir do Little Hotelier, defina sinais e lembre os hóspedes em dívida, sem cobrar de novo o que já pagaram no Booking.com."
date: 2026-10-28
category: invoicing
tags: [pagamentos, link de pagamento, little hotelier, siteminder pay, sinais, automação]
keywords: [link de pagamento little hotelier, pedido de pagamento little hotelier, little hotelier pay, siteminder pay link de pagamento, lembrete de pagamento hotel e-mail, lembrar hóspede de pagar antes da chegada, sinal reserva little hotelier, reserva pré-paga booking.com little hotelier, como enviar link de pagamento ao hóspede]
feature: automated-checks
demoPath: /automated-checks/payments
cover: /images/blog/demo/en/payment-links-modal.webp
coverAlt: "Janela Payment link do Hotelier Tools para a reserva BBN-DEMO102550: 759,55 euros pendentes, o campo do valor, a opção SiteMinder Pay emails it to por marcar com o e-mail do hóspede, a nota Valid for 48 hours, o botão Create payment link e nenhum link de pagamento anterior"
faq:
  - q: "Como envio um link de pagamento a partir do Little Hotelier?"
    a: "Abra a reserva no Front Desk e clique em Send Payment Request. Preencha o valor, o motivo e a mensagem, clique em Create request e depois envie-o por e-mail a partir de um modelo ou copie o link para o enviar por chat ou SMS. É preciso ter o Little Hotelier Pay ativado."
  - q: "Quanto tempo é válido um link de pagamento do Little Hotelier?"
    a: "48 horas a partir do momento em que é criado. Depois disso, o hóspede vê que o pedido já não está ativo. Um pedido não pode ser editado: cancele-o e crie um novo se o valor mudar."
  - q: "Posso enviar um pedido de pagamento para uma reserva do Booking.com ou da Expedia?"
    a: "Só quando é você que cobra o dinheiro. Os pedidos de pagamento do Little Hotelier não funcionam em reservas cobradas pelo canal nem com os cartões virtuais da OTA. A um hóspede pré-pago do Booking.com ou do Expedia Collect só se deve pedir o que foi acrescentado na propriedade."
  - q: "O Little Hotelier envia lembretes de pagamento automaticamente?"
    a: "O seu centro de ajuda descreve sinais automáticos para reservas diretas e pagamentos automáticos que cobram um cartão guardado, mas não e-mails de lembrete para um saldo por pagar. O Hotelier Tools acrescenta regras de lembretes de pagamento por cima, com o mesmo link de pagamento."
  - q: "O Hotelier Tools cobra o cartão do hóspede?"
    a: "Não. Um link de pagamento só pede ao hóspede que pague na página segura da SiteMinder. O Hotelier Tools nunca vê nem guarda números de cartão e nunca cobra um cartão."
  - q: "O Hotelier Tools faz parte do Little Hotelier ou da SiteMinder?"
    a: "Não. O Hotelier Tools é independente: não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel."
---

Para enviar um link de pagamento no Little Hotelier, abra a reserva e clique em **Send Payment Request**. Insira o valor, clique em **Create request** e depois envie-o por e-mail ou copie o link. Precisa de ter o Little Hotelier Pay ativado, e o link é válido durante 48 horas. O Little Hotelier não faz o seguimento por você. Os lembretes de pagamento do Hotelier Tools fazem: nos dias que escolher, enviam aos hóspedes em dívida um e-mail com um link para o que ainda devem.

Os ecrãs / telas do Little Hotelier abaixo foram verificados no seu centro de ajuda em novembro de 2026.

## Como enviar um pedido de pagamento no Little Hotelier

Os pedidos de pagamento fazem parte do **Little Hotelier Pay**, o serviço de pagamentos integrado do Little Hotelier. Os pedidos funcionam na plataforma de pagamentos da SiteMinder, e é por isso que os ecrãs do Hotelier Tools lhes chamam **SiteMinder Pay**. Ative-o primeiro em **Front Desk > Setup > Guest Payment Options > Payment Gateways**. Os pedidos não funcionam com um gateway de pagamento de terceiros ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/8673558-little-hotelier-pay-payment-requests)).

**No computador:**

1. Abra a reserva no Front Desk e clique em **Send Payment Request**.
2. Confirme a reserva, o nome do hóspede e o valor, e acrescente um motivo e uma mensagem para o hóspede.
3. Clique em **Create request**.
4. Para o enviar por e-mail, escolha o modelo de e-mail, confirme o endereço do hóspede, clique em **Preview email** e depois em **Send request**. Ou copie o link e cole-o no WhatsApp, numa SMS ou num e-mail.

**Na app móvel:** abra a reserva, toque em **Take payment**, preencha o separador / aba **Request**, escolha e-mail, SMS ou um link, e toque em **Send request**.

O que deve saber antes de enviar um:

- **48 horas.** O link é válido durante 48 horas. Depois disso, o hóspede vê que o pedido já não está ativo.
- **Sem edições.** Se o valor mudar, cancele o pedido e crie um novo. Cancele-o também se a reserva for cancelada.
- **Onde acompanhá-lo.** **My apps > Payments > Payment requests** lista todos os pedidos. Em **Actions** pode cancelar um ou copiar o seu link para o partilhar de novo. Um pedido pago aparece também no separador **Payments** da reserva.
- **Sobretaxas.** Ao criar um pedido aparece a opção **Apply surcharge**. As sobretaxas de cartão não são permitidas em todo o lado, por isso confirme as regras do seu país.
- **Só cobrança pelo hotel.** Os pedidos não funcionam em reservas cobradas pelo canal nem com o cartão virtual de uma OTA.

## Sinais e saldos: o que o Little Hotelier automatiza

O Little Hotelier tem duas opções automáticas, ambas com o Little Hotelier Pay:

| Funcionalidade | O que faz | Onde |
|---|---|---|
| **Automatic deposits** (sinais automáticos) | O seu motor de reservas cobra um sinal quando um hóspede reserva diretamente: **Full amount**, **Percentage**, **First night**, **Fixed amount** ou **No deposit** | **Front Desk > Setup > Guest Payment Options > Property Level Deposits** ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/8951681-automatic-deposits)) |
| **Automated payments** (pagamentos automáticos) | Cobra o saldo pendente no cartão guardado do hóspede um número definido de dias antes do check-in, no check-in ou no check-out | **My Apps > Payments > Automated payments > Create a rule** ([FAQ](https://helpcentre.littlehotelier.com/en/articles/8829554-automated-payments-frequently-asked-questions)) |

Os pagamentos automáticos precisam de um cartão que funcione. Quando uma cobrança falha, ou não há cartão, o Little Hotelier sugere enviar um pedido de pagamento, e a partir daí o trabalho é de uma pessoa: enviá-lo, esperar e enviar outro quando acabarem as 48 horas.

## Pré-pago no Booking.com ou na Expedia? Não peça duas vezes

Uma reserva "pre-paid" do Booking.com ou uma reserva Expedia Collect foi paga ao canal. O Little Hotelier continua a mostrar a estadia como **outstanding** (pendente) até alguém registar esse dinheiro como um pagamento "OTA Paid". Envie um lembrete sobre esse saldo e está a pedir ao hóspede que pague outra vez noites que já pagou.

Há uma segunda armadilha. O Little Hotelier calcula as noites com as suas próprias tarifas, enquanto o hóspede pagou o preço do canal (com um desconto Genius ou de telemóvel / celular, por exemplo). Por isso, mesmo depois de registado o pagamento da OTA, o valor pendente pode misturar duas coisas:

- **Noites acrescentadas na receção** depois da reserva: o canal nunca as vendeu, por isso o hóspede paga-as na propriedade.
- **A diferença entre as suas tarifas e o preço do canal:** o hóspede já pagou o preço do canal. Essa diferença não é ele que a tem de pagar.

Imagine uma reserva pré-paga de 2 noites prolongada na receção com uma noite de 75 €. O Little Hotelier pode mostrar 88 € pendentes, mas o hóspede deve 75 €. O assistente de IA do Hotelier Tools lê a estadia desta forma e diz à receção o que o hóspede deve na propriedade, não apenas o valor do Little Hotelier. Para cartões inválidos do Booking.com e no-shows, veja [o que fazer com um cartão inválido](/blog/booking-com-invalid-card-no-show).

## A forma mais rápida: lembretes de pagamento com um link

Os **Payment reminders** (lembretes de pagamento) do Hotelier Tools (`/automated-checks/payments`, parte das verificações automáticas, beta) encontram as reservas que ainda devem dinheiro e lembram o hóspede nos dias que escolher, com um link se quiser. Também enviam um resumo à sua equipa. Nada é cobrado: é o hóspede que decide se paga.

1. Abra **Automated Checks** e o cartão **Payment reminders**, ou vá diretamente a `/automated-checks/payments`. Clique em **New rule**. Uma regra nova começa desativada.
2. Em **Which bookings**, defina o **Minimum outstanding amount** (valor pendente mínimo, para ignorar um cêntimo / centavo em falta). Escolha se ignora os sinais já pagos (**Only bookings with nothing paid**) e se inclui os hóspedes já alojados (**Include guests already in the house**). Em **Channels**, escolha **Every channel**, **Only these channels** ou **Every channel except these**.
3. Acrescente até seis **Reminders** (lembretes). Cada um é um número de dias antes, no dia ou depois da reserva, do check-in ou do check-out. Por exemplo: 7 dias antes do check-in e depois 2 dias antes do check-in.
4. Para cada lembrete, escolha o que recebe o hóspede: **Reminder only** (só o lembrete), **Reminder with a payment link** (lembrete com link de pagamento) ou **Payment request sent by SiteMinder Pay** (o e-mail da própria SiteMinder). O nosso texto sai no idioma do hóspede, ou clique em **Write my own text** para escrever o seu. Ative **Tell the team** para acrescentar a reserva ao resumo da equipa, com uma nota.
5. Clique em **Preview today** para ver a que hóspedes a regra escreveria hoje. Lê o Little Hotelier e não envia nada.
6. Ative a regra e dê-lhe um horário. O recomendado é **Every day at 10:00** (todos os dias às 10:00).

::screenshot{src="/images/blog/demo/en/payment-reminders-rule-editor.webp" alt="Editor de regras de lembretes de pagamento do Hotelier Tools: o aviso This rule is off, o nome da regra, a secção Which bookings com Minimum outstanding amount 1, Channels em Every channel, Only bookings with nothing paid desativado e Include guests already in the house ativado, e o início da secção Reminders" caption="Uma regra: que reservas segue, quando sai cada lembrete e quem fica a saber. As regras novas começam desativadas." path="/automated-checks/payments"}
::

### O que o torna seguro

- **Nunca duas vezes.** Cada lembrete é registado para cada reserva antes de ser enviado, por isso uma execução repetida, dois horários ou uma execução manual não o podem repetir.
- **Um lembrete por dia por hóspede**, somando todas as suas regras.
- **Recupera sem inundar.** Um lembrete ainda sai até dois dias atrasado se uma execução falhou. Se vários estiverem pendentes ao mesmo tempo, só sai o mais recente.
- **O valor é atual.** O saldo é lido da reserva mesmo antes do envio, e uma reserva paga entretanto não recebe nada. As reservas canceladas e os no-shows nunca são cobrados.
- **Links reutilizados.** Um link pendente para a mesma reserva e o mesmo valor, com mais de duas horas de validade, é reutilizado em vez de se criar um segundo.
- **Avisa quando é pago.** Cada execução acompanha os links enviados pelos seus lembretes. Quando um é pago, a equipa recebe um e-mail de "pagamentos recebidos" (se a regra avisar a equipa).

Para testar um lembrete, **Send now…** envia-o a uma única reserva, seja qual for o dia. Tudo o que foi enviado fica listado em **Activity**: quando, reserva, hóspede ou equipa, estado, valor pendente e o estado do link (**Waiting for payment**, **Paid**, **Expired**, **Cancelled**).

### As estadias pré-pagas são tratadas automaticamente

Quando a reserva indica que foi pré-paga no Booking.com ou na Expedia, o lembrete nunca pede o dinheiro do canal:

- **O valor está comprovado** (indicado nos comentários da reserva, ou exatamente o quarto vendido) e a opção da propriedade **Register proven OTA prepayments (whole property)** está ativada: o Hotelier Tools regista um pagamento "OTA Paid" no Little Hotelier e depois pede só as noites acrescentadas e os extras.
- **O valor não está comprovado** (uma estadia da Expedia com extras, outra moeda): nenhum e-mail ao hóspede. O resumo da equipa lista-a: verifique-a e registe o pagamento.
- **Nada por pagar:** a reserva fica de fora.

Escolha quando esse pagamento é registado em **When to register them**: **At the checks (before arrival and at checkout)** (nas verificações, antes da chegada e no check-out), ou **Some hours after arrival** (algumas horas depois da chegada: de 0 a 48 horas, 1 por padrão). Com a segunda, as alterações feitas na receção no check-in, como extras ou uma mudança de quarto, já estão no saldo. Nesse caso precisa da tarefa horária **Register OTA prepayments after arrival**, que agenda você mesmo.

## Um link para uma reserva

Nem todos os pagamentos precisam de uma regra. Abra uma reserva em `/reservations/<number>` e, em **Payments**, clique em **Payment link**. O mesmo botão aparece junto a um saldo nas listas diárias e no painel da reserva da caixa de entrada.

1. A janela mostra o que a reserva deve e os links anteriores, cada um com o seu estado.
2. Peça o saldo completo ou parte dele (um sinal, por exemplo) em **Amount**.
3. Marque **SiteMinder Pay emails it to …** para que seja enviado por e-mail, ou deixe por marcar e use **Copy** para copiar o link e enviá-lo você mesmo.
4. Clique em **Create payment link**. Um link pendente pode ser cancelado a partir da mesma janela.

::screenshot{src="/images/blog/demo/en/payment-links-reservation-payments.webp" alt="Secção Payments de uma reserva no Hotelier Tools: o botão Payment link, um sinal em dinheiro de 759,55 euros registado à mão a 4 de outubro de 2026 com um botão Refund, Still refundable no total de 759,55 euros, nenhum cartão guardado e o painel Original booking" caption="Todos os pagamentos da estadia num só sítio, com o link de pagamento e os reembolsos a um clique." path="/reservations"}
::

A secção **Payments** trata também dos reembolsos. Clique em **Refund** num pagamento, insira um valor total ou parcial (serve vírgula ou ponto), e o Hotelier Tools compara-o com o que ainda é reembolsável antes de o pedir ao Little Hotelier, uma única vez. Se o Little Hotelier não confirmar, diz-lhe para verificar a reserva antes de reembolsar de novo, em vez de enviar um segundo reembolso.

**Para programadores / desenvolvedores e IA:** o mesmo link existe na API REST (`POST /api/v1/reservations/{id}/payment-link`, o hóspede só recebe e-mail com `"notifyGuest": true`) e como a ferramenta `create_payment_link`, que pede a sua aprovação no chat de IA. Pelo chat de IA ou pela API, um pagamento com cartão feito no terminal da receção pode ser registado na estadia só com a marca e os últimos quatro dígitos. Não cobra nada. Um pedido com algo que pareça um número de cartão completo é recusado. Veja a [página REST API e MCP](/tools/bot/api-mcp).

::demo-cta{path="/automated-checks/payments"}
::

Em **Settings > Team**, criar e cancelar links exige a permissão **Record payments**, os reembolsos exigem **Refund payments**, e editar regras exige **Run payment reminders**. O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel. Os links de pagamento são os próprios pedidos de pagamento do SiteMinder Pay: o hóspede paga na página da SiteMinder, e nenhum dado de cartão passa pelo Hotelier Tools.
::

Veja também: [enviar a fatura no check-out](/blog/send-invoice-to-guest-at-checkout), [a checklist diária da receção](/blog/hotel-front-desk-checklist-automation), [cartão inválido ou no-show no Booking.com](/blog/booking-com-invalid-card-no-show).

## Resumo

- No Little Hotelier, **Send Payment Request** na reserva cria um link válido durante 48 horas. Precisa do Little Hotelier Pay e só funciona em reservas que você próprio cobra.
- Os sinais das reservas diretas e as cobranças automáticas no cartão vêm incluídos. Os e-mails de lembrete para saldos por pagar não.
- Os **Payment reminders** do Hotelier Tools enviam aos hóspedes em dívida um link por e-mail nos dias que escolher, nunca duas vezes, e avisam a equipa quando um link é pago.
- Às estadias pré-pagas do Booking.com e da Expedia nunca se pede de novo o dinheiro do canal: só as noites e os extras acrescentados na propriedade.
