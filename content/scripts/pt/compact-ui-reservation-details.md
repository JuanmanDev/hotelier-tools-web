---
title: "Interface Compacta para Detalhes da Reserva"
description: "Remove o preenchimento excessivo da janela de reserva do Little Hotelier e aumenta a caixa de comentários do hóspede, para ler as notas sem deslocar o texto."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/compact-ui-reservation-details/from.png"
  after: "/images/scripts/compact-ui-reservation-details/to.png"
  gallery:
    - "/images/scripts/compact-ui-reservation-details/from.png"
    - "/images/scripts/compact-ui-reservation-details/to.png"
---

Este script compacta a disposição da janela de reserva no Front Desk do Little Hotelier e dá mais altura à caixa de comentários do hóspede. Destina-se à equipa de receção que abre muitas reservas por dia e quer ler as notas deixadas por hóspedes ou colegas sem se deslocar dentro de uma caixa pequena.

## O problema que resolve

Os comentários do hóspede costumam conter a informação que importa no check-in: uma chegada tardia, um berço, um pedido de estacionamento, uma ocasião especial. Na janela de reserva padrão, o campo de comentários é curto, por isso as notas mais longas ficam cortadas e é preciso deslocar o texto dentro dele. Ao mesmo tempo, o preenchimento no topo dos separadores e o espaçamento à volta das áreas de alerta e das linhas separadoras empurram os campos úteis mais para baixo.

## O que muda

No ecrã da reserva, no Front Desk:

- A caixa de texto dos **comentários do hóspede** tem pelo menos 126 píxeis de altura, para que várias linhas de notas fiquem visíveis ao mesmo tempo.
- O preenchimento no topo do conteúdo dos separadores da reserva é removido.
- As áreas de alerta vazias deixam de acrescentar margem.
- As linhas separadoras horizontais perdem a margem extra.

Os campos, botões e separadores mantêm-se onde estão. Só mudam o espaçamento e a altura da caixa de comentários.

## Como instalar

Instale a extensão gratuita Tampermonkey, prima **Instalar no Tampermonkey** nesta página, confirme e volte a carregar o Little Hotelier. O [guia de instalação](/tools/ui/instructions) tem imagens de cada passo. O script funciona nas páginas do Front Desk em app.littlehotelier.com, e os seus estilos só afetam a janela de reserva. É gratuito e de código aberto: [o código está no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js).

## Bom saber

- Funciona adicionando alguns estilos quando a página carrega. Não lê, altera nem guarda dados de reservas.
- As notas mais longas do que a nova altura continuam a deslocar-se dentro da caixa como habitualmente.
- Funciona da mesma forma em computadores e em ecrãs táteis. Num tablet, combine-o com o [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens), que aumenta os menus Print e Email.
- Combina também bem com o [Easy Save Province and Country](/tools/ui/easy-save-province-country), que atua nos formulários do hóspede da mesma janela.
- Se o Little Hotelier mudar a janela de reserva, alguns ajustes de espaçamento podem deixar de se aplicar até o script ser atualizado.

## Relacionado

- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens)
- [Checklist diária da receção no Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Extensão Chrome para o Little Hotelier: scripts gratuitos](/blog/little-hotelier-chrome-extensions)
