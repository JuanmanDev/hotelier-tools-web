---
title: "Atualização Automática por Inatividade"
description: "Recarrega o Little Hotelier e o Direct Booking após 10 minutos sem cliques, deslocamento ou movimento do rato, para a receção não voltar a uma página antiga."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js"
category: "General"
images:
  before: "/images/scripts/auto-refresh-inactivity/from.webp"
  after: "/images/scripts/auto-refresh-inactivity/to.webp"
  gallery:
    - "/images/scripts/auto-refresh-inactivity/from.webp"
    - "/images/scripts/auto-refresh-inactivity/to.webp"
---

Este script recarrega a página do Little Hotelier que tem aberta após 10 minutos sem atividade. Foi pensado para os computadores da receção onde o Little Hotelier fica aberto o dia todo, para que a equipa que volta ao balcão veja as reservas atuais e uma sessão funcional, e não uma página antiga que mostra erros.

## O problema que resolve

Uma página deixada sem uso continua a mostrar os dados que carregou no início. As novas reservas, cancelamentos e mudanças de quarto feitos pelos canais ou por colegas só aparecem quando alguém recarrega. A sessão também pode expirar em segundo plano, e o primeiro clique depois de uma pausa falha. Recarregar por hábito é fácil de esquecer quando há um hóspede à espera no balcão.

## O que muda

- Um temporizador de 10 minutos começa quando a página carrega.
- Qualquer clique, movimento do rato, deslocamento da página ou toque no ecrã reinicia o temporizador, por isso a página nunca recarrega enquanto alguém a está a utilizar.
- Quando passam 10 minutos sem nenhuma dessas ações, o script recarrega o mesmo endereço em que estava.
- Nada mais na página muda: sem novos botões nem painéis.

## Como instalar

Instale a extensão gratuita Tampermonkey, prima **Instalar no Tampermonkey** nesta página, confirme e volte a carregar o Little Hotelier. O [guia de instalação](/tools/ui/instructions) explica cada passo. O script funciona nos três endereços do Little Hotelier: app.littlehotelier.com (Front Desk), application.littlehotelier.com (os ecrãs mais recentes, como o calendário) e app.thebookingbutton.com (Direct Booking). É gratuito e de código aberto; o [código está no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js).

## Bom saber

- Recarregar descarta tudo o que não foi guardado. Escrever no teclado não conta como atividade, por isso, se alguém escrever uma nota longa durante 10 minutos sem tocar no rato, a página pode recarregar antes de guardar. Guarde à medida que avança.
- O intervalo de 10 minutos é um valor fixo no script (600 segundos). Para o alterar, edite esse número no editor do Tampermonkey.
- Funciona da mesma forma em computadores e em ecrãs táteis, porque os movimentos e toques no ecrã também contam como atividade.
- Funciona em todas as páginas do Little Hotelier que correspondam, incluindo o calendário, a lista de reservas e o Direct Booking.
- O script não guarda nada nem envia nada para lado nenhum.

## Relacionado

- [Little Hotelier: truques e funções escondidas](/blog/little-hotelier-tips)
- [Checklist diária da receção no Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Full Width Reservation Table](/tools/ui/full-width-reservation-table)
