---
title: "Tabelas em Largura Total"
description: "Faz as tabelas do extranet Direct Booking do Little Hotelier usarem toda a largura do ecrã e destaca a linha sob o rato, para as listas serem mais legíveis."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/tables-full-width/from.webp"
  after: "/images/scripts/tables-full-width/to.webp"
  gallery:
    - "/images/scripts/tables-full-width/from.webp"
    - "/images/scripts/tables-full-width/to.webp"
---

Este script alarga as tabelas do extranet Direct Booking do Little Hotelier, o backoffice do motor de reservas em app.thebookingbutton.com, para que usem toda a largura do ecrã. Destina-se a proprietários e funcionários que consultam aí reservas diretas, relatórios e inventário num portátil ou num monitor grande.

## O problema que resolve

O Direct Booking mantém as suas páginas numa coluna de largura fixa. As listas de reservas e os relatórios ficam apertados nessa coluna, os nomes dos hóspedes aparecem cortados e, num monitor largo, metade do ecrã fica vazia enquanto desloca a tabela para o lado. Também é difícil seguir uma linha longa de uma tabela sem perder o sítio.

## O que muda

Nas páginas do extranet Direct Booking:

- **Área de conteúdo principal:** deixa de ter largura fixa, por isso as tabelas esticam pelo ecrã.
- **Lista de reservas:** a coluna do nome do hóspede deixa de ter largura limitada, por isso os nomes completos aparecem.
- **Contentor principal:** pode usar a largura total da janela.
- **Relatórios:** usam a largura total da página.
- **Inventory:** ganha uma largura máxima maior e fica centrado, para não esticar demasiado em ecrãs muito largos.
- **Destaque de linhas:** nas tabelas de dados, a linha sob o ponteiro do rato ganha um fundo cinzento claro, o que facilita a leitura ao longo da linha.

## Como instalar

Instale a extensão gratuita Tampermonkey, prima **Instalar no Tampermonkey** nesta página, confirme e volte a carregar o Direct Booking. O [guia de instalação](/tools/ui/instructions) tem imagens passo a passo. O script só funciona nas páginas do extranet Direct Booking (app.thebookingbutton.com/extranet/...), por isso o Front Desk não é afetado. É gratuito e de código aberto: [veja o código no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js).

## Bom saber

- Num portátil pequeno ou num tablet a diferença é pequena, porque a página já preenche o ecrã.
- O destaque de linhas segue o ponteiro do rato, por isso é sobretudo útil num computador.
- Só adiciona regras de estilo quando a página carrega. Não guarda nada nem envia nada para lado nenhum.
- Para o mesmo efeito na página Reservations do Front Desk, instale o [Full Width Reservation Table](/tools/ui/full-width-reservation-table).
- Se o Little Hotelier redesenhar o Direct Booking, alguns destes ajustes podem deixar de se aplicar até o script ser atualizado.

## Relacionado

- [Full Width Reservation Table](/tools/ui/full-width-reservation-table)
- [Add Button Check on Front Desk](/tools/ui/add-button-check-front-desk)
- [Extensão Chrome para o Little Hotelier: scripts gratuitos](/blog/little-hotelier-chrome-extensions)
