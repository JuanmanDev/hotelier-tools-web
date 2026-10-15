---
title: "Adicionar Botão de Verificação Front Desk do Direct Booking"
description: "Adiciona um botão às reservas do Direct Booking no Little Hotelier que abre a mesma reserva no Front Desk, para consultar os detalhes e eventuais reembolsos."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/add-button-check-front-desk/from.webp"
  after: "/images/scripts/add-button-check-front-desk/to.webp"
  gallery:
    - "/images/scripts/add-button-check-front-desk/from.webp"
    - "/images/scripts/add-button-check-front-desk/to.webp"
    - "/images/scripts/add-button-check-front-desk/from2.webp"
    - "/images/scripts/add-button-check-front-desk/to2.webp"
---

Este script adiciona um botão a cada reserva do extranet Direct Booking do Little Hotelier que abre a mesma reserva no Front Desk, num novo separador. Destina-se à equipa de receção e aos proprietários que gerem reservas diretas e precisam de consultar a reserva completa ou rever um reembolso sem a procurar à mão.

## O problema que resolve

O Direct Booking (o backoffice do motor de reservas, em app.thebookingbutton.com) e o Front Desk são ecrãs separados. Quando um hóspede que reservou no seu site liga para pedir uma alteração ou um reembolso, encontra a reserva no Direct Booking, mas o quarto, os pagamentos e os dados do hóspede estão no Front Desk. Sem o script, copia a referência, muda para o Front Desk e pesquisa à mão.

## O que muda

- No separador **Guest** de uma reserva do Direct Booking, aparece um novo botão na lista de ações: "View reservation data in Front Desk and check refunds" (ou a sua versão em espanhol).
- O botão abre a lista **Reservations** do Front Desk num novo separador, já filtrada pela referência da reserva.
- A pesquisa abrange datas de check-in desde há dois meses até daqui a um ano, para que as estadias recentes e futuras sejam encontradas.
- O script lê o ID do seu alojamento a partir da ligação ao Front Desk presente na página, por isso a pesquisa abre no seu próprio alojamento.
- Verifica a página a cada dois segundos. Quando passa para outra reserva, o botão é atualizado para apontar para a nova referência.

## Como instalar

Precisa da extensão gratuita Tampermonkey. Prima **Instalar no Tampermonkey** nesta página, confirme e volte a carregar o Direct Booking. O [guia de instalação](/tools/ui/instructions) mostra todos os passos. O script só funciona nas páginas de reservas do Direct Booking (app.thebookingbutton.com/extranet/properties/.../reservations). É gratuito e de código aberto: pode [ler o código no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js).

## Bom saber

- O script não verifica se tem sessão iniciada no Front Desk. Se não tiver, inicie sessão e prima o botão uma segunda vez.
- As reservas com data de check-in há mais de dois meses ou daqui a mais de um ano ficam fora do intervalo de pesquisa e não aparecem nos resultados.
- Se a ligação ao Front Desk não estiver na página, o script recorre a um ID de alojamento fixo escrito no código, e a pesquisa não abre no seu alojamento. Se isto acontecer, edite esse valor no script.
- O texto do botão existe apenas em inglês e espanhol.
- Não guarda nada nem envia nada para fora do Little Hotelier.

## Relacionado

- [Tables Full Width](/tools/ui/tables-full-width) para tabelas mais largas no Direct Booking
- [Extensão Chrome para o Little Hotelier: scripts gratuitos](/blog/little-hotelier-chrome-extensions)
