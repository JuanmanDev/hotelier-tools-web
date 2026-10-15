---
title: "Exibição de Preços"
description: "Mostra o preço de cada noite no calendário do Little Hotelier, lido da página Inventory num separador em segundo plano, para indicar tarifas sem mudar de ecrã."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/prices.user.js"
category: "Calendar View"
images:
  before: "/images/scripts/prices-display/from.webp"
  after: "/images/scripts/prices-display/to.webp"
  gallery:
    - "/images/scripts/prices-display/from.webp"
    - "/images/scripts/prices-display/to.webp"
---

Este script mostra o preço de cada tipo de quarto para cada noite diretamente no calendário do Little Hotelier. Quando um hóspede liga a perguntar quanto custa sexta-feira, a receção vê-o no mesmo ecrã da disponibilidade, sem abrir a página Inventory. Destina-se à equipa de receção que atende reservas por telefone e presenciais, e aos proprietários.

## O problema que resolve

No Little Hotelier, a disponibilidade está no calendário e as tarifas estão na página Inventory. Indicar um preço implica mudar de ecrã, encontrar as datas e o tipo de quarto certos e voltar ao calendário para fazer a reserva. Nos momentos de maior movimento, é lento e propenso a erros.

## O que muda

- No calendário, a última linha de cada tipo de quarto (a linha sem atribuição) mostra o preço dessa noite para o tipo de quarto.
- Os preços vêm da sua página Inventory: o script abre-a num separador em segundo plano, lê a primeira linha de tarifa de cada tipo de quarto e depois fecha o separador.
- A página Inventory abrange 14 dias de cada vez, por isso, nas vistas de calendário mais longas, o script lê-a em blocos de 14 dias, um a seguir ao outro.
- Enquanto um preço está a carregar, a célula mostra "...". As datas passadas ficam vazias.
- Os preços aparecem num tipo de letra cinzento e maior, para se destacarem das reservas.
- Ao avançar para outras datas, são carregados os preços do novo intervalo.

## Como instalar

Precisa da extensão gratuita Tampermonkey. Prima **Instalar no Tampermonkey** nesta página. O ecrã de instalação lista as permissões adicionais que o script utiliza, que lhe permitem abrir um separador em segundo plano e guardar preços no Tampermonkey. Confirme e volte a carregar o calendário. O [guia de instalação](/tools/ui/instructions) mostra cada passo. O script funciona no calendário (application.littlehotelier.com) e na página Inventory que lê (app.littlehotelier.com). É gratuito e de código aberto: [leia o código no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/prices.user.js).

## Bom saber

- Os preços ficam guardados no armazenamento do Tampermonkey no seu computador durante até uma hora e depois são lidos de novo. Uma tarifa que altere no Inventory pode demorar até uma hora a aparecer no calendário.
- Tem de ter sessão iniciada no Little Hotelier, porque o separador em segundo plano usa a sua sessão. É normal um separador abrir e fechar rapidamente.
- Mostra apenas a primeira linha de tarifa de cada tipo de quarto na página Inventory, e não todos os planos tarifários.
- Os nomes dos tipos de quarto têm de coincidir entre o calendário e a página Inventory para que um preço apareça.
- O script arranca quatro segundos depois de o calendário carregar e espera até 30 segundos por cada bloco do Inventory. Nada é enviado para fora do Little Hotelier.

## Relacionado

- [Change Inventory Name](/tools/ui/change-inventory-name)
- [Tarifa dinâmica para hotéis pequenos no Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [Compact Calendar UI](/tools/ui/compact-calendar-ui)
