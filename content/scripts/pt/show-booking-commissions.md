---
title: "Mostrar Comissões do Booking.com"
description: "Adiciona às reservas do Little Hotelier uma estimativa das comissões do Booking.com e do valor líquido aproximado, com comissão fixa de 17% e encargo de 1,3%."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/show-booking-commissions/from.png"
  after: "/images/scripts/show-booking-commissions/to.png"
  gallery:
    - "/images/scripts/show-booking-commissions/from.png"
    - "/images/scripts/show-booking-commissions/to.png"
---

Este script adiciona ao ecrã da reserva do Little Hotelier uma estimativa do que o Booking.com retém de cada reserva. Para as reservas do Booking.com, mostra o encargo de transferência, a comissão, o total deduzido com impostos e um valor líquido aproximado. Destina-se a proprietários e gestores que querem uma ideia rápida de quanto rende realmente uma reserva do Booking.com.

## O problema que resolve

O total da reserva no Little Hotelier é o que o hóspede paga, não o que chega à sua conta bancária. No Booking.com, a comissão e os encargos de pagamento são descontados mais tarde, numa fatura à parte. Sem um valor aproximado à mão, é difícil comparar uma reserva de um canal com uma direta, ou ver se um desconto ainda deixa margem.

## O que muda

Quando a origem da reserva é **Booking.com**, são adicionadas quatro linhas ao resumo da reserva, mesmo acima da linha separadora. Os rótulos estão em espanhol:

- **Cargo por transferencia (1.3%)**: o encargo de transferência, 1,3% do total da reserva.
- **Comisiones Booking (17%)**: a comissão do Booking.com, 17% do total da reserva.
- **Total comisiones con IVA**: o encargo de transferência mais a comissão mais o valor do imposto indicado na reserva.
- **Neto Bruto (Aprox.)**: o líquido aproximado, o total da reserva menos essa soma.

As reservas de qualquer outra origem não são alteradas.

## Como instalar

Instale a extensão gratuita Tampermonkey, prima **Instalar no Tampermonkey** nesta página, confirme e volte a carregar o Little Hotelier. O [guia de instalação](/tools/ui/instructions) mostra todos os passos. O script funciona nas páginas do Front Desk em app.littlehotelier.com e só adiciona linhas às reservas do Booking.com. É gratuito e de código aberto: [veja o código no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js).

## Bom saber

- As taxas estão fixas no código: 17% de comissão e 1,3% de encargo de transferência. Se o seu contrato com o Booking.com usar outra taxa, edite esses números no editor do Tampermonkey.
- Os rótulos mantêm-se em espanhol e os valores são mostrados em euros, seja qual for o idioma da sua interface.
- É uma estimativa. A fatura do Booking.com é o valor final.
- As linhas são calculadas uma só vez, alguns segundos depois de a reserva carregar. Se alterar o total, volte a carregar a página para recalcular.
- Lê apenas a origem da reserva, o total e o imposto que já estão no ecrã. Não guarda nada nem envia nada para lado nenhum.

## Relacionado

- [Comissão do Booking.com: quanto cobra](/blog/booking-com-commission)
- [Extensão Chrome para o Little Hotelier: scripts gratuitos](/blog/little-hotelier-chrome-extensions)
