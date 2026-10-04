---
title: "CTA, CTD, estadia mínima e stop sell na hotelaria: o que significam no Little Hotelier"
seoTitle: "CTA, CTD e stop sell no Little Hotelier: o que são"
description: "CTA bloqueia check-ins, CTD check-outs, estadia mínima fixa o mínimo de noites e stop sell fecha vendas. O que são e como definir no Little Hotelier."
date: 2026-10-03
category: pricing
tags: [restrictions, cta, ctd, stop sell, little hotelier]
keywords: [cta ctd hotelaria o que é, o que é cta no little hotelier, closed to arrival significado, stop sell significado, siteminder stop sell, estadia mínima hotel]
feature: dynamic-pricing
demoPath: /pricing/settings/restrictions
cover: /images/blog/demo/en/price-recommendations.webp
coverAlt: "Recomendações de preço no Hotelier Tools para o quarto Doble Estándar, de 3 a 16 de outubro de 2026: preço atual e recomendado por noite, uma coluna CTA / CTD com interruptores A e D, a estadia mínima, uma coluna Channel e um botão Apply to Little Hotelier"
faq:
  - q: "Qual é a diferença entre closed to arrival e stop sell?"
    a: "O closed to arrival só impede novos check-ins nessa data: um hóspede que chegou na véspera pode continuar hospedado nessa data. O stop sell fecha a tarifa à venda nessa data, por isso nenhuma nova reserva pode incluir essa noite."
  - q: "Stop sell é o mesmo que definir a disponibilidade como 0?"
    a: "Para o hóspede o resultado parece igual: não é possível reservar a noite. Do seu lado é diferente. Um stop sell mantém a contagem de quartos, por isso reabrir é um só interruptor. Um bloqueio de quarto no Little Hotelier reduz a disponibilidade enviada aos canais e não aplica um stop sell."
  - q: "Quando deve um hotel pequeno usar o closed to arrival?"
    a: "Use-o para proteger estadias mais longas: no sábado de um fim de semana cheio, para que os hóspedes tenham de chegar na sexta, ou nas noites de eventos em que prefere vender estadias completas. Reveja-o à medida que a data se aproxima e retire-o se a noite continuar vazia."
  - q: "Por que motivo a minha restrição não aparece no Booking.com ou no Airbnb?"
    a: "Nem todas as tarifas de canal aceitam todas as restrições. Na grelha de inventário do Little Hotelier, um traço numa célula de canal significa que esse canal não suporta essa atualização, e as atualizações além da janela máxima de reserva de um canal não são sincronizadas. Consulte a configuração da tarifa do canal no Channel Manager para ver que tipos de atualização suporta."
  - q: "O Hotelier Tools altera restrições sozinho?"
    a: "Não. As políticas de restrições são propostas noite a noite na página Recommendations e nada é escrito até você aplicar. O piloto automático só escreve estadias mínimas se o permitir em separado, e nunca toca no stop sell dos canais. O Hotelier Tools é independente: não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles."
---

No Little Hotelier, **CTA** (closed to arrival, fechado para chegadas) significa que os hóspedes não podem fazer check-in nessa data, e **CTD** (closed to departure, fechado para saídas) significa que não podem fazer check-out nessa data. A **estadia mínima** (minimum stay) é o menor número de noites pelo qual um quarto pode ser reservado. Um **stop sell** fecha uma tarifa à venda numa data, mantendo os seus quartos no inventário. Todos se definem por tarifa de quarto em **Front Desk > Inventory**, data a data ou com **Bulk Update**.

| Termo | O que significa | Uso típico |
|---|---|---|
| **CTA** (Closed to Arrival) | "Guests cannot check in on this date." Os hóspedes que chegaram antes podem ficar nessa data. | Obrigar a chegar na sexta num fim de semana cheio. |
| **CTD** (Closed to Departure) | "Guests cannot check out on this date." Os hóspedes podem ficar nessa data, mas não sair nesse dia. | Manter um fim de semana unido. |
| **Min stay** (min LOS) | "Minimum or maximum nights a room must be booked for" (Min/Max Stay). | Duas noites nos fins de semana de eventos. |
| **Max stay** | A reserva mais longa permitida. | Raro em hotéis pequenos. |
| **Stop sell** | A tarifa fica fechada à venda nessa data, em todos os canais ou só em alguns. Chama-se **Close Channels** no Front Desk e **Stop Sell** no Channel Manager. | Fechar uma data depressa: manutenção, bloqueio do proprietário, um canal que quer pausar. |

As definições citadas vêm do centro de ajuda do Little Hotelier: [gerir tarifas, disponibilidade e restrições na grelha / grade de inventário](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid) (atualizado em agosto de 2026).

## CTA vs CTD: qual é a diferença?

Ambas as restrições dizem respeito ao **dia de chegada ou de saída**, não às noites do meio da estadia.

Imagine um fim de semana de festival: as noites de sexta e sábado têm muita procura, o domingo está calmo.

- **CTA no sábado**: ninguém pode fazer check-in no sábado. Um hóspede que quer só a noite de sábado não a pode reservar, mas um que chega na sexta para duas noites pode. Você vende o fim de semana inteiro em vez de um sábado isolado que deixa a sexta vazia.
- **CTD no sábado**: ninguém pode fazer check-out no sábado. Um hóspede que chega na sexta tem de ficar pelo menos até domingo.

Nenhuma das restrições afeta hóspedes que já têm reserva. Só filtram as novas reservas que podem entrar. No Little Hotelier, o CTA e o CTD aplicam-se a todos os seus canais, incluindo o seu próprio motor de reservas ([vídeo sobre CTA e CTD](https://helpcentre.littlehotelier.com/en/articles/8674081-enable-cta-and-ctd-restrictions-video)).

## Estadia mínima: na chegada ou "through"?

Uma estadia mínima (min LOS, minimum length of stay) fixa o menor número de noites de uma reserva. Os canais aplicam-na de duas formas:

- **Na chegada** (on arrival): verificada em relação à data de chegada. Um mínimo de 2 na sexta significa que as chegadas de sexta têm de reservar pelo menos 2 noites; uma chegada no sábado ainda pode reservar uma noite.
- **"Through"** (em todas as noites): verificada em relação a cada noite da estadia. Um mínimo de 2 no sábado significa que qualquer reserva que inclua a noite de sábado tem de ter pelo menos 2 noites, comece onde começar.

A grelha do Little Hotelier só tem **Min Stay** e **Max Stay**. A forma como um canal os lê é uma configuração do canal. O Little Hotelier envia a estadia mínima e máxima ao Booking.com como "through" por padrão ([conectar ao Booking.com](https://helpcentre.littlehotelier.com/en/articles/13830297-connect-to-booking-com)). Se a sua conta do Booking.com usa "Min. stay from arrival", defina **Use Length of Stay on Arrival** como **Yes** em **My Apps > Channel Manager > Channels > Booking.com > Configure** ([erros de mapeamento de canais](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshoot-channel-mapping-and-disabled-rate-errors)). Se uma estadia mínima for superior à máxima, a tarifa é desativada automaticamente.

## O que é um stop sell e em que difere?

Um stop sell fecha uma tarifa à venda numa data mantendo inalterada a contagem de quartos. O Little Hotelier assenta no channel manager da SiteMinder, e uma noite pode ter uma tarifa perfeitamente boa e mesmo assim não vender em nenhum canal porque está em stop sell.

O Little Hotelier dá-lhe duas formas de o fazer, e só pode usar uma de cada vez:

- **Close Channels** em **Front Desk > Inventory** interrompe a venda "on all connected channels (including your booking engine)" (em todos os canais conectados, incluindo o seu motor de reservas) para as tarifas de quarto e datas selecionadas.
- **Stop Sell** no **Channel Manager** fecha canais específicos. Vá a **My Apps > Channel Manager > Inventory**, clique no botão azul **Channels** junto à tarifa, encontre a tarifa do canal e escolha **Stop Sell**. Para um intervalo de datas, use **Bulk Update** e defina **Stop Sell** como **On** ([stop sells para canais específicos](https://helpcentre.littlehotelier.com/en/articles/8673615-add-or-remove-stop-sells-for-specific-channels)).

Os stop sells do Channel Manager não funcionam enquanto **Close Channels** estiver marcado no Front Desk para as mesmas datas.

| | Stop sell | Bloqueio de quarto (menos disponibilidade) | CTA |
|---|---|---|---|
| Novas reservas que incluem essa noite | Bloqueadas | Bloqueadas quando a disponibilidade chega a 0 | Permitidas se chegarem antes |
| A sua contagem de quartos | Inalterada | Reduzida para esse tipo de quarto | Inalterada |
| Bom para | Fechar depressa, por canal | Quartos realmente fora de serviço | Moldar estadias |

Um **Room Closure** (**Front Desk > Calendar**) "reduces the availability sent to the channels for the closed room type. It does not apply a stop sell" (reduz a disponibilidade enviada aos canais para o tipo de quarto fechado e não aplica um stop sell) ([bloqueios de quarto](https://helpcentre.littlehotelier.com/en/articles/8674039-create-and-manage-room-closures)).

## Como definir CTA, CTD e estadia mínima no Little Hotelier

### Uma data de cada vez

1. Vá a **Front Desk > Inventory**.
2. Escolha uma vista que mostre os campos de que precisa.
3. Vá às datas e edite as células da tarifa de quarto: Min Stay, Max Stay, CTA, CTD.
4. Clique em **Save**.

### Um intervalo de datas com Bulk Update

1. Em **Front Desk > Inventory**, clique em **Bulk Update**.
2. **When?**: escolha o intervalo de datas.
3. **Which days?**: escolha os dias da semana, por exemplo só os sábados.
4. **Which room rates?**: escolha as tarifas.
5. **What changes?**: defina a restrição, por exemplo uma estadia mínima de 2 ou CTA ativado.
6. Clique em **Update**.

Bom saber:

- As restrições definem-se **por tarifa de quarto**, não por tipo de quarto.
- As tarifas derivadas aparecem desativadas na grelha. Altere a tarifa de que derivam.
- O Front Desk aceita atualizações até cerca de 716 dias no futuro por padrão.

## Como as restrições chegam ao Booking.com, Expedia e Airbnb

O Little Hotelier envia as suas restrições a cada canal conectado através do channel manager, com alguns limites ([grelha de inventário](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), [período de atualização dos canais](https://helpcentre.littlehotelier.com/en/articles/8673945-channel-manager-manage-update-period)):

- **Nem todas as tarifas de canal suportam todas as restrições.** Um traço (-) numa célula de canal significa que esse canal não suporta esse tipo de atualização. No Channel Manager, a página **Configure** de uma tarifa de canal mostra que tipos de atualização aceita.
- **As janelas de reserva diferem.** O Channel Manager envia atualizações 400 dias à frente por padrão (até 750). As atualizações além do máximo de um canal não sincronizam; no Booking.com esse máximo é 545 dias.
- **A Expedia** aceita stop sells do Little Hotelier só ao nível da tarifa. Os stop sells ao nível do quarto são geridos na Expedia Partner Central ([problemas de stop sell na Expedia](https://helpcentre.littlehotelier.com/en/articles/15201269-troubleshoot-expedia-stop-sell-issues)).
- **O Airbnb** com Enhanced Sync recebe tarifas, disponibilidade e restrições, mas um campo que altere na extranet do próprio Airbnb fica depois desativado no Channel Manager ([mapear para o Airbnb](https://helpcentre.littlehotelier.com/en/articles/8693078-map-to-airbnb)).

Depois de definir uma restrição importante, abra a extranet do canal e verifique uma data.

## Quando deve um hotel pequeno usá-las?

- **Fins de semana cheios e eventos.** Uma estadia mínima de duas noites nas noites do evento, ou CTA na noite mais concorrida, vende estadias completas em vez de noites soltas que deixam buracos.
- **Noites vazias isoladas.** Uma noite livre entre duas ocupadas só se vende como estadia de uma noite. Se uma estadia mínima a bloqueia, retire o mínimo nessa noite à medida que a data se aproxima.
- **Perto da data.** Restrições que faziam sentido um mês antes podem bloquear reservas fáceis poucos dias antes. Reveja-as semanalmente.
- **Dias em que ninguém pode receber check-ins.** CTA nesses dias, se as regras da casa o permitirem.
- **Fechar depressa.** Use stop sell em vez de um preço de 999 quando precisa de tirar uma data da venda.

## A forma mais rápida: políticas de restrições e stop sell no Hotelier Tools

O Hotelier Tools funciona sobre o Little Hotelier com o seu próprio login. Em vez de definir restrições data a data, você escreve a política uma vez e ela é proposta noite a noite, junto ao preço. As funcionalidades de preços estão em **alpha**.

### 1. Escreva a política uma vez

Abra **Pricing settings → Arrivals, departures & stays** (`/pricing/settings/restrictions`). Pode fechar chegadas ou saídas:

- em dias da semana fixos ou datas específicas
- por ocupação ou quartos que restam
- só quando as noites de cada lado ainda estão abertas

O Hotelier Tools deteta o padrão de dias da semana que já usa no Little Hotelier e propõe adotá-lo. Os **weekend packages** opcionais definem uma estadia mínima; estão desativados por padrão e, quando ativados, o valor padrão é sexta e sábado, 2 noites. Um pacote nunca baixa uma estadia mínima mais longa definida à mão. Nada nesta página escreve no Little Hotelier.

::screenshot{src="/images/blog/demo/en/pricing-settings-arrivals-departures-stays.webp" alt="Página Arrivals, departures & stays no Hotelier Tools: a regra No arrivals com Every week e botões de dias da semana de Mon a Sun, On these dates, as condições An event fills the town e The nights either side are still open, Occupancy above e Rooms left at most, e o início de No departures" caption="Indique uma vez que noites recusam um check-in ou um check-out. Nada nesta página escreve no Little Hotelier." path="/pricing/settings/restrictions"}
::

### 2. Reveja e aplique noite a noite

Em **Recommendations** (`/price-recommendations`), cada noite mostra o estado de chegada (A) e de saída (D) junto ao preço. Alterne-os onde discordar, marque as noites e clique em **Apply to Little Hotelier…**. Nada muda até você confirmar.

Para datas pontuais, **Date rules** (`/pricing/settings/dates`) tem uma regra "stay" que define apenas uma estadia mínima ou uma regra de chegada nessas noites.

### 3. Verifique e defina o stop sell dos canais

Clique em **Check channel manager** na página Recommendations. O Hotelier Tools lê o estado de stop sell da SiteMinder com a mesma sessão do Little Hotelier, só quando você clica, e uma coluna de canal mostra aberto, fechado ou misto em cada noite. Escolha um destino (abrir tudo, fechar tudo, manter). É enviado **depois** da alteração de preço no Little Hotelier, e só para as noites em que essa alteração teve êxito.

::screenshot{src="/images/blog/demo/en/price-recommendations-apply-dialog.webp" alt="Janela Apply to Little Hotelier para três noites do Doble Estándar (sáb 3 de out, dom 4 de out, seg 5 de out) com tarifas atuais e novas e colunas Arr e Dep, um aviso de que tarifas e restrições mudam de imediato sem desfazer automático, uma opção Send me an email, uma opção Also update sales in the Channel Manager (SiteMinder) e Apply 3 change(s)" caption="Preços, alterações de chegada e saída e o stop sell da SiteMinder são confirmados numa só janela. Nada muda até você aplicar." path="/price-recommendations"}
::

O piloto automático nunca altera o stop sell, e só escreve estadias mínimas se o permitir em separado.

::demo-cta{path="/pricing/settings/restrictions"}
::

## Resumo

- **CTA** impede check-ins numa data, **CTD** impede check-outs, a **estadia mínima** fixa a reserva mais curta e o **stop sell** fecha a tarifa à venda mantendo a contagem de quartos.
- No Little Hotelier, defina-os por tarifa de quarto em **Front Desk > Inventory**, ou com **Bulk Update** para um intervalo de datas. O stop sell por canal está no Channel Manager.
- Verifique que restrições cada canal aceita e reveja-as semanalmente à medida que as datas se aproximam.
- Com os [preços dinâmicos do Hotelier Tools](/tools/bot/dynamic-pricing) você escreve a política uma vez, vê-a junto ao preço e define o stop sell da SiteMinder na mesma página. É gratuito para todos os hotéis até 10 de janeiro de 2027.
- A seguir: [preços dinâmicos para hotéis pequenos no Little Hotelier](/blog/dynamic-pricing-little-hotelier) e [dicas e funções escondidas do Little Hotelier](/blog/little-hotelier-tips).
