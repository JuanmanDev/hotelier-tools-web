---
title: "Botão de E-mail de Transferência Bancária"
description: "Um botão nas reservas do Little Hotelier que prepara um email com os dados da transferência bancária, o valor em dívida e as datas da estadia. Sob pedido."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/bank-transfer-email-button/from.png"
  after: "/images/scripts/bank-transfer-email-button/to.webp"
  gallery:
    - "/images/scripts/bank-transfer-email-button/from.png"
    - "/images/scripts/bank-transfer-email-button/to.webp"
---

Este script adiciona um botão às reservas do Little Hotelier que abre um email já preparado a pedir ao hóspede que pague por transferência bancária. O email já inclui o valor em dívida, as datas da estadia e os quartos reservados. Destina-se a proprietários e equipa de receção de alojamentos que aceitam transferências bancárias. Não está publicado para uso geral: a versão atual foi escrita para um único alojamento, por isso é configurado sob pedido.

## O problema que resolve

Quando um hóspede quer pagar por transferência, alguém tem de escrever sempre o mesmo email: número de conta, banco, beneficiário, uma referência de pagamento, o valor exato e as datas da reserva. Copiar o valor e as datas à mão é lento, e uma referência errada dificulta a identificação do pagamento mais tarde.

## O que muda

No ecrã da reserva, no Front Desk:

- É adicionada uma nova opção ao menu **Email**, e aparece um novo botão com um ícone de envelope junto ao botão **Print**.
- Ao clicar em qualquer um deles, abre-se o seu programa de email com uma nova mensagem dirigida ao email do hóspede.
- A mensagem é preenchida a partir da reserva: o valor em dívida, uma referência de pagamento composta pela data de check-in e pelo primeiro nome do hóspede, as datas de check-in e check-out, e os quartos agrupados por tipo de quarto com a respetiva contagem.
- Inclui também uma ligação à reserva no Little Hotelier, para sua referência.

## Como instalar

Este script ainda não está publicado para uso geral. [Contacte-me](/contact) e posso adaptá-lo ao seu alojamento. Depois de adaptado, instala-se como os restantes scripts: precisa da extensão gratuita Tampermonkey, e o [guia de instalação](/tools/ui/instructions) mostra os passos. Só funciona nas páginas do Front Desk do Little Hotelier (app.littlehotelier.com). É de código aberto, e pode ler o [código atual no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js).

## Bom saber

- Os dados bancários, o nome do alojamento, a assinatura, a hora de chegada e o texto do email estão escritos diretamente no código, em espanhol, para o alojamento do autor. Têm de ser alterados antes de outra pessoa o poder utilizar.
- O valor é apresentado em euros.
- O email abre-se no programa de email predefinido do seu computador através de uma ligação de email normal. Nada é enviado até premir enviar nesse programa.
- O email pede aos hóspedes que confirmem o número de conta por telefone, como proteção contra emails fraudulentos que alteram os dados bancários.
- O script não guarda nada nem envia dados para lado nenhum. Só lê campos que já estão no ecrã da reserva.

## Relacionado

- [Update Payment Link Button](/tools/ui/update-payment-link-button) para pagamentos com cartão por ligação
- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button)
- [Extensão Chrome para o Little Hotelier: scripts gratuitos](/blog/little-hotelier-chrome-extensions)
