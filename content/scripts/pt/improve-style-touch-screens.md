---
title: "Melhorar Estilo para Telas Sensíveis ao Toque"
description: "Facilita o uso do Little Hotelier num tablet: menus Print e Email maiores, botões do rodapé destacados e botão de remover quarto sempre visível nas reservas."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/improve-style-touch-screens/from.png"
  after: "/images/scripts/improve-style-touch-screens/to.png"
  gallery:
    - "/images/scripts/improve-style-touch-screens/from.png"
    - "/images/scripts/improve-style-touch-screens/to.png"
---

Este script ajusta o ecrã de reserva do Little Hotelier para ecrãs táteis, como um tablet na receção. Aumenta os menus Print e Email, destaca os respetivos botões e mostra o botão de remover quarto, que de outro modo só aparece quando o rato passa por cima. Destina-se às equipas de receção que trabalham com tablets ou monitores táteis.

## O problema que resolve

O ecrã de reserva do Little Hotelier foi pensado para o rato. As opções Print e Email abrem em pequenos menus flutuantes com texto pequeno, difíceis de acertar com o dedo. O botão para remover um quarto de uma reserva fica escondido até passar o rato por cima do quarto, e um ecrã tátil não tem hover, por isso num tablet esse botão é difícil de alcançar.

## O que muda

No ecrã da reserva, no Front Desk:

- **Botão de remover quarto:** o botão redondo para remover um quarto da reserva está sempre visível.
- **Menus Print e Email:** os itens destes menus flutuantes usam texto muito maior (30 píxeis), e os menus ficam mais largos para os acomodar.
- **Botões do rodapé:** os botões Print e Email no rodapé da reserva ganham um fundo azul claro e espaçamento extra, para serem fáceis de encontrar e tocar.
- **Menu de email da fatura:** o pequeno ícone de informação junto à opção da fatura fica oculto.

## Como instalar

Instale a extensão gratuita Tampermonkey no navegador do seu tablet ou computador, prima **Instalar no Tampermonkey** nesta página, confirme e volte a carregar o Little Hotelier. O [guia de instalação](/tools/ui/instructions) mostra todos os passos. O script funciona nas páginas do Front Desk em app.littlehotelier.com. É gratuito e de código aberto: [leia o código no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js).

## Bom saber

- O Tampermonkey tem de estar disponível no navegador do tablet. Teste a configuração no seu próprio dispositivo antes de depender dela na receção.
- As alterações aplicam-se também num computador de secretária. O botão de remover quarto está agora sempre no ecrã, por isso tenha cuidado para não clicar nele por engano.
- Só altera estilos. Não muda o que qualquer botão faz, e não guarda nada.
- Os ecrãs mais recentes em application.littlehotelier.com, como o calendário, não são afetados.
- Para formulários de hóspedes mais fáceis de usar com o toque, o [Easy Save Province and Country](/tools/ui/easy-save-province-country) também aumenta os botões de adicionar hóspede e de expandir.

## Relacionado

- [Compact UI Reservation Details](/tools/ui/compact-ui-reservation-details)
- [Easy Save Province and Country](/tools/ui/easy-save-province-country)
- [Extensão Chrome para o Little Hotelier: scripts gratuitos](/blog/little-hotelier-chrome-extensions)
