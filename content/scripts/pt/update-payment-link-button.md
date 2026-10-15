---
title: "Atualizar Botão de Link de Pagamento"
description: "Dá ao botão de ligação de pagamento do Little Hotelier um rótulo mais claro e junta à ligação o telefone do hóspede da reserva, para não o escrever de novo."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/update-payment-link-button/from.png"
  after: "/images/scripts/update-payment-link-button/to.png"
  gallery:
    - "/images/scripts/update-payment-link-button/from.png"
    - "/images/scripts/update-payment-link-button/to.png"
---

Este script melhora o botão de ligação de pagamento no ecrã da reserva do Little Hotelier. Dá ao botão um rótulo mais claro e junta à ligação de pagamento o número de telefone do hóspede indicado na reserva. Destina-se à equipa de receção que pede aos hóspedes que paguem um depósito ou o saldo com cartão através de uma ligação de pagamento.

## O problema que resolve

O texto padrão do botão de pedido de pagamento não deixa claro a todos os funcionários que é assim que se pede a um hóspede que pague com cartão. E o número de telefone do hóspede, já guardado na reserva, não é passado para a ligação de pagamento, por isso tem de ser introduzido de novo. Ambas as coisas custam tempo enquanto o hóspede está ao telefone.

## O que muda

No ecrã da reserva, no Front Desk:

- O botão de pedido de pagamento passa a chamar-se **Generate Payment Link**, ou **Cobrar con tarjeta por correo electronico (Email)** quando o Little Hotelier está em espanhol.
- O número do campo de telefone do hóspede é adicionado à ligação do botão como parâmetro de telefone, sem espaços nem o sinal "+".
- Se o Little Hotelier reconstruir a ligação, o script aplica a alteração de novo.
- Se a ligação já incluir um número de telefone, fica como está.

## Como instalar

Instale a extensão gratuita Tampermonkey, prima **Instalar no Tampermonkey** nesta página, confirme e volte a carregar o Little Hotelier. O [guia de instalação](/tools/ui/instructions) mostra todos os passos. O script funciona nas páginas do Front Desk em app.littlehotelier.com e só atua quando uma reserva mostra o botão de pedido de pagamento. É gratuito e de código aberto: [leia o código no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js).

## Bom saber

- Só altera o texto e a ligação do botão. O pagamento em si é tratado pelo Little Hotelier como habitualmente, e o script nunca vê os dados do cartão.
- O script lê o campo de telefone uma só vez, assim que junta o número à ligação. Se escrever ou corrigir o número depois, a ligação mantém o primeiro valor lido, por isso guarde a reserva e volte a carregá-la antes de usar o botão.
- O número é adicionado apenas com dígitos, por isso inclua o indicativo do país no campo de telefone da reserva.
- Os rótulos existem em inglês e espanhol. Os outros idiomas da interface mostram o rótulo em inglês.
- Não guarda nada nem envia nada para fora do Little Hotelier.

## Relacionado

- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button)
- [Como usar o WhatsApp com o Little Hotelier](/blog/whatsapp-little-hotelier)
- [Extensão Chrome para o Little Hotelier: scripts gratuitos](/blog/little-hotelier-chrome-extensions)
