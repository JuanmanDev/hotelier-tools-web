---
title: "Interface de Calendário Compacta"
description: "Compacta o calendário do Little Hotelier: datas numa só linha em vez de três e filas de tipo de quarto mais finas, para caberem mais quartos e dias no ecrã."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/compactCalendarUI.user.js"
category: "Calendar View"
images:
  before: "/images/scripts/compact-calendar-ui/from.png"
  after: "/images/scripts/compact-calendar-ui/to.png"
  gallery:
    - "/images/scripts/compact-calendar-ui/from.png"
    - "/images/scripts/compact-calendar-ui/to.png"
---

Este script retira espaço vazio ao calendário do Little Hotelier para que caibam mais quartos no ecrã sem deslocar a página. Destina-se à equipa de receção que mantém o calendário aberto o dia todo e quer ver o alojamento inteiro, ou quase, de relance.

## O problema que resolve

O calendário padrão usa muito espaço vertical antes de aparecer a primeira reserva. O cabeçalho de cada dia empilha a informação em três linhas, cada tipo de quarto tem a sua própria linha de título alta, e a barra de navegação e de filtros acrescentam margens extra. Num portátil, isto empurra quartos para fora do ecrã, e tem de deslocar a página para cima e para baixo para verificar a disponibilidade enquanto um hóspede espera.

## O que muda

Todas as alterações são visuais, feitas com estilos adicionados à página:

- **Cabeçalhos de data:** o dia da semana e a data ficam lado a lado numa só linha, em vez de empilhados em três.
- **Célula do cabeçalho superior esquerda:** a altura é limitada, para que a linha do cabeçalho se mantenha curta.
- **Linhas de título dos tipos de quarto:** mais baixas, com fundo transparente e sem bordas, para ocuparem menos espaço entre os quartos.
- **Botão de expandir ou recolher tudo:** o preenchimento e as margens são removidos.
- **Navegação e filtros:** reduzem-se as margens acima da navegação de datas e abaixo das opções de filtro.

As barras de reserva e as filas dos quartos não são alteradas. Só mudam os espaçamentos e a disposição do cabeçalho.

## Como instalar

Instale a extensão gratuita Tampermonkey, prima **Instalar no Tampermonkey** nesta página, confirme e depois volte a carregar o calendário. As imagens passo a passo estão no [guia de instalação](/tools/ui/instructions). O script corresponde a app.littlehotelier.com e application.littlehotelier.com, mas os seus estilos só afetam a tabela do calendário e a respetiva barra de ferramentas. É gratuito e de código aberto: [leia o código no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/compactCalendarUI.user.js).

## Bom saber

- Adiciona os seus estilos uma só vez quando a página carrega. Não lê nem guarda dados de reservas.
- Não altera o número de dias apresentados. Para isso, utilize as opções de intervalo de datas do próprio Little Hotelier.
- Funciona da mesma forma com rato ou num ecrã tátil.
- Funciona em conjunto com o [Prices Display](/tools/ui/prices-display), que escreve o preço de cada noite por baixo de cada tipo de quarto no mesmo calendário.
- Se o Little Hotelier mudar a disposição do calendário, alguns dos ajustes podem deixar de se aplicar até o script ser atualizado. Desative-o no menu do Tampermonkey se algo parecer errado.

## Relacionado

- [Prices Display](/tools/ui/prices-display)
- [Little Hotelier: truques e funções escondidas](/blog/little-hotelier-tips)
- [Full Width Reservation Table](/tools/ui/full-width-reservation-table)
