---
title: "Atualizar Número de Adultos"
description: "Define o campo de adultos como 2 quando o formulário de reserva do Little Hotelier abre com 0 adultos, para não guardar por engano uma reserva sem hóspedes."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateNumberAdults.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/update-number-adults/from.png"
  after: "/images/scripts/update-number-adults/to.png"
  gallery:
    - "/images/scripts/update-number-adults/from.png"
    - "/images/scripts/update-number-adults/to.png"
---

Este script muda o número predefinido de adultos numa nova reserva do Little Hotelier de 0 para 2. Destina-se à equipa de receção que cria à mão reservas presenciais e por telefone, em que a maioria das reservas é para duas pessoas e um campo de adultos esquecido causa problemas mais tarde.

## O problema que resolve

Quando cria uma reserva no Front Desk, o campo de adultos pode começar em 0. Se ninguém o alterar, a reserva é guardada sem adultos. Zero adultos pode desajustar o registo de hóspedes, a contagem de pequenos-almoços e qualquer taxa turística cobrada por pessoa, e corrigi-lo depois implica encontrar e reabrir cada reserva.

## O que muda

- Quando uma página de reserva carrega, o script verifica o campo **número de adultos**.
- Se for 0, o script define-o como 2 e avisa o Little Hotelier de que o valor mudou, como se o tivesse escrito.
- Se tiver qualquer outro número, não lhe toca, por isso as reservas existentes não são alteradas.
- Continua a poder mudar o valor para 1, 3 ou qualquer outro número antes de guardar.

## Como instalar

Instale a extensão gratuita Tampermonkey, prima **Instalar no Tampermonkey** nesta página, confirme e volte a carregar o Little Hotelier. O [guia de instalação](/tools/ui/instructions) mostra cada passo. O script funciona nas páginas do Front Desk em app.littlehotelier.com e só atua quando o campo de adultos está na página. É gratuito e de código aberto: [leia o código no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateNumberAdults.user.js).

## Bom saber

- O valor 2 está fixo no código. Se o seu alojamento vende sobretudo quartos individuais ou camas, edite o número no editor do Tampermonkey.
- A verificação é feita uma só vez, meio segundo depois de a página carregar. Se um formulário de reserva abrir mais tarde sem recarregar a página, o campo não é alterado.
- Só altera o campo no formulário. Nada é guardado até premir Save.
- O número de crianças não é alterado.
- Funciona da mesma forma em computadores e em ecrãs táteis. Não guarda nada nem envia nada para lado nenhum.

## Relacionado

- [Checklist diária da receção no Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Easy Save Province and Country](/tools/ui/easy-save-province-country)
- [Little Hotelier: truques e funções escondidas](/blog/little-hotelier-tips)
