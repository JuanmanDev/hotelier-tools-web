---
title: "Tabela de Reservas em Largura Total"
description: "Alarga a lista Reservations do Front Desk do Little Hotelier para usar todo o ecrã, até 2000 píxeis, de modo que as colunas caibam sem deslocamento lateral."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js"
category: "Front Desk"
images:
  before: "/images/scripts/full-width-reservation-table/from.png"
  after: "/images/scripts/full-width-reservation-table/to.png"
  gallery:
    - "/images/scripts/full-width-reservation-table/from.png"
    - "/images/scripts/full-width-reservation-table/to.png"
---

Este script permite que a lista Reservations do Front Desk do Little Hotelier use a largura total do seu monitor. Destina-se à equipa de receção e aos proprietários que pesquisam e revêm reservas num ecrã largo e estão fartos de uma tabela estreita ao meio, com espaço vazio dos dois lados.

## O problema que resolve

A página Reservations do Front Desk mantém o conteúdo numa coluna de largura fixa. Num monitor grande, a tabela de reservas fica apertada nessa coluna, por isso os nomes longos dos hóspedes quebram em várias linhas e algumas colunas exigem deslocamento horizontal. Acaba por deslocar a página para o lado e para baixo para consultar uma única reserva, enquanto metade do ecrã fica vazia.

## O que muda

- Na página Reservations, o título da página, a área de conteúdo e o contentor principal podem crescer até 2000 píxeis de largura, em vez da largura fixa padrão.
- A tabela estende-se pelo ecrã, por isso as colunas ganham mais espaço e os nomes longos dos hóspedes quebram menos.
- Nada é removido nem reordenado: as mesmas colunas, filtros e ligações mantêm-se no lugar.

## Como instalar

Instale a extensão gratuita Tampermonkey, prima **Instalar no Tampermonkey** nesta página, confirme e volte a carregar a página Reservations. O [guia de instalação](/tools/ui/instructions) mostra cada passo com imagens. O script só funciona nas páginas do Front Desk cujo endereço contém /reservations (app.littlehotelier.com/extranet/properties/.../reservations). É gratuito e de código aberto: [o código está no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js).

## Bom saber

- Em ecrãs com mais de 2000 píxeis de largura, o conteúdo deixa de crescer nessa largura.
- Num portátil pequeno ou num tablet há pouca ou nenhuma diferença, porque a página já preenche o ecrã.
- Como corresponde a todos os endereços sob /reservations, a disposição mais larga aplica-se também a outras páginas dessa secção, como uma reserva aberta a partir da lista.
- Só adiciona uma regra de estilo quando a página carrega. Não guarda nada nem envia nada para lado nenhum.
- Para o mesmo efeito nas tabelas do Direct Booking, instale o [Tables Full Width](/tools/ui/tables-full-width).
- Se o Little Hotelier redesenhar a página Reservations, a disposição mais larga pode deixar de se aplicar até o script ser atualizado.

## Relacionado

- [Tables Full Width](/tools/ui/tables-full-width)
- [Exportar reservas do Little Hotelier para Excel](/blog/export-little-hotelier-reservations-excel)
- [Checklist diária da receção no Little Hotelier](/blog/hotel-front-desk-checklist-automation)
