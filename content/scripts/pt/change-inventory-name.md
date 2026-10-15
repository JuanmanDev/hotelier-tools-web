---
title: "Alterar Nome do Inventário"
description: "Muda o nome do menu Inventory do Little Hotelier para Inventory - Prices, em inglês e espanhol, para a nova equipa saber onde encontrar e alterar as tarifas."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js"
category: "General"
images:
  before: "/images/scripts/change-inventory-name/from.png"
  after: "/images/scripts/change-inventory-name/to.png"
  gallery:
    - "/images/scripts/change-inventory-name/from.png"
    - "/images/scripts/change-inventory-name/to.png"
---

Este pequeno script muda o nome do item **Inventory** no menu superior do Little Hotelier para **Inventory - Prices** (ou **Inventario - Precios** em espanhol). Destina-se a proprietários que formam novos funcionários de receção: o rótulo indica que as tarifas se definem nesse ecrã, e não apenas a disponibilidade dos quartos.

## O problema que resolve

No Little Hotelier, as tarifas dos quartos editam-se no ecrã Inventory. Para quem é novo no sistema, "Inventory" soa a stock ou a contagem de quartos, por isso procuram um menu "Prices" ou "Rates" que não existe. Um rótulo mais claro evita que a mesma pergunta se repita a cada mudança de turno.

## O que muda

- No menu de navegação horizontal dos ecrãs mais recentes do Little Hotelier, o item com o rótulo "Inventory" passa a "Inventory - Prices".
- Se o menu estiver em espanhol, "Inventario" passa a "Inventario - Precios".
- O sufixo segue o idioma da página: as páginas em espanhol recebem "Precios", qualquer outro idioma recebe "Prices".
- Só muda o rótulo visível. A ligação continua a levar ao mesmo ecrã Inventory.
- Como o menu carrega por fases, o script tenta três vezes nos primeiros segundos após o carregamento da página, e nunca adiciona o sufixo duas vezes.

## Como instalar

Precisa da extensão gratuita Tampermonkey. Prima **Instalar no Tampermonkey** nesta página, confirme e volte a carregar o Little Hotelier. O [guia de instalação](/tools/ui/instructions) mostra cada passo. O script só funciona em application.littlehotelier.com, o endereço usado pelos ecrãs mais recentes do Little Hotelier, como o calendário. É gratuito e de código aberto: [veja o código no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js).

## Bom saber

- Só reconhece o item do menu quando diz exatamente "Inventory" ou "Inventario". Se o Little Hotelier estiver noutro idioma, como francês ou alemão, o rótulo mantém-se.
- Só altera o menu de navegação superior. As páginas em app.littlehotelier.com e no Direct Booking não são abrangidas, por isso os respetivos menus não mudam.
- Funciona da mesma forma em computadores e em ecrãs táteis.
- Não guarda nada nem envia nada para lado nenhum.
- Se o Little Hotelier mudar o nome ou redesenhar o menu, o rótulo pode deixar de mudar até o script ser atualizado.

## Relacionado

- [Prices Display](/tools/ui/prices-display) mostra os preços do seu Inventory no calendário
- [Tarifa dinâmica para hotéis pequenos no Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [Little Hotelier: truques e funções escondidas](/blog/little-hotelier-tips)
