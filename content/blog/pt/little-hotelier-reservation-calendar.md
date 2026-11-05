---
title: "Um calendário de reservas mais rápido para o Little Hotelier: mapa de quartos, preços e novas reservas"
seoTitle: "Um calendário de reservas mais rápido para o Little Hotelier"
description: "Como funciona o calendário do Little Hotelier e como criar lá uma reserva, mais um mapa de quartos com preços e uma forma mais rápida de reservar."
date: 2026-10-24
category: operations
tags: [calendário, mapa de quartos, reservas, receção, little hotelier]
keywords: [calendário little hotelier, criar reserva little hotelier, mapa de quartos little hotelier, mapa de ocupação hotel, preços no calendário little hotelier, reserva manual little hotelier, calendário de reservas pequeno hotel, calendário little hotelier telemóvel]
feature: dashboard
demoPath: /reservations/calendar
cover: /images/blog/demo/en/reservation-calendar-prices.webp
coverAlt: "Calendário de reservas do Hotelier Tools para 14 noites a partir de 4 de novembro de 2026: tipos de quarto Doble Estándar, Doble Superior, Individual e Familiar 4 pax, cada um com uma linha Lowest rate de preços por noite como 63,47 € e 74,89 €, barras de reserva com ícones de canal, hóspedes e pagamento, um encerramento tracejado no quarto 104, uma faixa No room yet e a legenda das marcas de estado, origem e pagamento"
faq:
  - q: "Como crio uma reserva no Little Hotelier?"
    a: "No Calendar, clique em +Reservation, ou em Reservations clique em Create reservation. Escolha as datas, o tipo de quarto, a tarifa, o número do quarto e os hóspedes, preencha o contacto principal e clique em Save. As reservas manuais não enviam e-mail de confirmação: carregue em Email depois de guardar."
  - q: "Posso ver os preços no calendário do Little Hotelier?"
    a: "Não no próprio calendário do Little Hotelier, que mostra as reservas e o estado do pagamento. As tarifas estão na grelha de inventário. O calendário do Hotelier Tools pode acrescentar uma linha por tipo de quarto com a tarifa atual mais baixa de cada noite, e um userscript gratuito acrescenta os preços ao calendário do Little Hotelier."
  - q: "Quantos dias pode mostrar o calendário do Little Hotelier?"
    a: "14 ou 28 dias, escolhidos numa lista. O calendário do Hotelier Tools mostra qualquer número de noites entre 1 e 92, com escolhas rápidas de 7, 14, 30, 60 e 90."
  - q: "Posso mudar uma reserva de quarto a partir do Hotelier Tools?"
    a: "Não. O calendário do Hotelier Tools só lê. Mudar uma estadia de quarto, alterar as datas ou cancelá-la faz-se no Little Hotelier, que abre a partir do link Open in Little Hotelier da reserva."
  - q: "Uma reserva criada no Hotelier Tools envia e-mail ao hóspede?"
    a: "Não. Cria a reserva no Little Hotelier sem pagamento registado e sem enviar e-mail, tal como uma reserva manual lá. Envie a confirmação a partir do Little Hotelier e registe qualquer pagamento na reserva."
  - q: "O Hotelier Tools faz parte do Little Hotelier?"
    a: "Não. O Hotelier Tools é independente: não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Lê e cria reservas com o login do Little Hotelier do seu próprio hotel."
---

O calendário do Little Hotelier mostra 14 ou 28 dias de reservas, e é lá que cria uma reserva com **+Reservation**. Não mostra preços nem deixa ajustar o mapa. O Hotelier Tools acrescenta um segundo calendário, lido do Little Hotelier, com 1 a 92 noites, a tarifa mais baixa por tipo de quarto em cada noite, ícones de canal e de pagamento, e vistas guardadas. Tem também uma página **New reservation** (nova reserva) que calcula o preço da estadia, verifica a disponibilidade e os duplicados, e depois cria a reserva no Little Hotelier.

As funcionalidades do Little Hotelier abaixo foram verificadas nos seus centros de ajuda em novembro de 2026.

## Como funciona o calendário do Little Hotelier?

Na plataforma mais recente ([Getting started with Calendar](https://help-platform.littlehotelier.com/en/articles/10397723-getting-started-with-calendar)):

- **Duração da vista:** uma lista muda entre **14 ou 28 dias**. **View today** volta a hoje, e um seletor de data salta para a frente.
- **Navegação:** na vista de 14 dias, `<` avança um dia, `<<` sete e `<<<` catorze. Na vista de 28 dias, `<<<` avança 28.
- **Cores:** laranja ou amarelo para confirmada, verde para check-in feito, cinzento para check-out feito, azul-claro para sem quarto atribuído, vermelho-escuro para encerramento de quarto, e uma barra esbatida para um pagamento incompleto. Uma barra no lado esquerdo mostra pago (verde) ou por pagar (vermelho).
- **Arrastar e largar:** arraste uma reserva para outro quarto, tipo de quarto ou datas, ou arraste a ponta para a prolongar. As reservas de canais não podem ser prolongadas desta forma.
- **Linha Unallocated:** reservas confirmadas sem quarto físico. Arraste-as para um quarto livre.

A versão clássica funciona da mesma forma ([Overview of the front desk calendar](https://helpcentre.littlehotelier.com/en/articles/8673713-overview-of-the-front-desk-calendar)).

## Como criar uma reserva no Little Hotelier

As reservas manuais servem para clientes de passagem, pedidos por telefone e e-mail e agências de viagens ([Create a manual reservation](https://help-platform.littlehotelier.com/en/articles/13933574-create-a-manual-reservation-in-little-hotelier)):

1. Atualize a página e clique em **View Today**, para ver a disponibilidade atual.
2. No **Calendar**, clique em **+Reservation** (ou arraste ao longo das noites de um quarto). Em **Reservations**, clique em **Create reservation**.
3. Escolha as datas de check-in e check-out, um **Room type** e uma **Room rate**. Para um preço especial, deixe a tarifa vazia e escreva o total no campo **Room**.
4. Escolha um **Room number**. Se o deixar vazio, a reserva fica à espera na linha **Unallocated**.
5. Introduza **Adults**, **Children** e **Infants**, e um **Discount**, se houver.
6. Preencha o **Primary contact** e eventuais **Guest comments** e clique em **Save**.

Três coisas que passam despercebidas:

- **Não é enviado nenhum e-mail de confirmação** numa reserva manual. Carregue em **Email** depois de guardar.
- **Mais quartos:** **+Add another room** junta-os numa só fatura / nota fiscal. Partilham as mesmas datas.
- **Pagamentos:** **Record payment** para dinheiro ou um terminal externo, ou o separador **Payments** para cobrar um cartão.

As contas clássicas seguem [Create a reservation](https://helpcentre.littlehotelier.com/en/articles/8673932-create-a-reservation).

## Para que serve um segundo calendário?

O calendário do Little Hotelier é onde move as reservas. Um segundo ajuda quando sobretudo consulta: preços ao lado dos quartos quando um hóspede liga, mais de 28 dias de uma vez, a sua própria disposição e um mapa que se lê no telemóvel / celular.

Se só precisa de preços dentro do Little Hotelier, o userscript gratuito [Prices Display](/tools/ui/prices-display) acrescenta-os ao seu calendário.

## A forma mais rápida: a área de reservas do Hotelier Tools

A área de reservas são três páginas em **Reservations**: **Calendar** (`/reservations/calendar`), **Reservations** (`/reservations`) e a página da reserva (`/reservations/:id`). Cada uma lê o Little Hotelier uma vez e guarda os dados durante uns minutos, por isso navegar entre elas é rápido. **Refresh** volta a ler.

### O calendário (mapa de quartos)

1. Abra **Reservations > Calendar**. Começa uma noite antes de hoje, com 14 noites de largura, para que as partidas de hoje estejam no ecrã / tela.
2. Avance uma noite, uma semana ou a janela inteira com as setas, ou carregue em **Today**. Escreva qualquer número de noites entre 1 e 92 ao lado da data.
3. Clique numa barra para abrir a reserva num painel ao lado do mapa. O mapa fica onde estava.

Cada tipo de quarto é uma faixa com os seus quartos ocupados por noite. As reservas sem quarto ficam numa faixa **No room yet**, os encerramentos aparecem tracejados, e um quarto vendido duas vezes para a mesma noite fica rodeado a vermelho. As linhas por cima do mapa podem contar, por noite, os quartos **Occupied**, as **Arrivals** e as **Departures**.

::screenshot{src="/images/blog/demo/en/reservation-calendar-prices.webp" alt="Calendário de reservas a partir de 4 de novembro de 2026, 14 noites: contagens Occupied por noite, faixas por tipo de quarto com uma linha Lowest rate (de 63,47 € a 128,88 €, algumas riscadas, uma marca de stop sell), barras como Larsen, Ingrid com check-in feito, um ícone de site e uma marca de pagamento parcial, Marino, Onur confirmada a partir da Hostelworld, um encerramento tracejado no quarto 104 e a legenda das cores de estado, origem, pagamento, hóspedes e preços" caption="A tarifa atual mais baixa de cada tipo de quarto fica logo por cima dos seus quartos, noite a noite." path="/reservations/calendar"}
::

### Definições para o tornar seu

Abra **Settings** no calendário:

| Definição | Opções |
|---|---|
| **Nights shown** | 7, 14, 30, 60 ou 90, ou **Any number of nights** (1 a 92) |
| **Minimum night width** | **Narrow**, **Medium**, **Wide**, ou qualquer largura em píxeis. As noites alargam para encher o ecrã quando cabem todas |
| **Room type after the number** | **Full name**, **Abbreviated** ou **Hidden** |
| **Room order** | **As in Little Hotelier**, **By room number**, **By room type, then number**, ou **My own order** (arraste os quartos) |
| **What a booking shows** | Nome do hóspede, referência, canal, hóspedes, saldo em dívida, noites |
| **Colour bookings by** | **Status**, **Channel** ou **Payment** |
| **Icons in a booking** | **Where it came from** (Booking.com, Expedia, Airbnb, Hostelworld, o seu site, a receção), **Paid or not**, e **Guests** como um só ícone ou com adultos, crianças e bebés separados |
| **Show prices** | A tarifa atual mais baixa de cada tipo de quarto por noite |

**Show prices** lê o inventário do Little Hotelier, uma leitura por cada duas semanas mostradas, e escolhe a tarifa mais baixa entre todos os planos tarifários, incluindo os não reembolsáveis. Uma noite esgotada mostra o preço riscado e um stop sell mostra uma marca de fechado. Está disponível para quem pode editar reservas, e fica desligado até o ativar.

Quando o mapa estiver como quer, abra **Saved views** e escolha **Save as new view…**. Dê-lhe um nome ("Receção"), e escolha **Share with the team** ou **Open by default**. Um link também guarda as definições: `/reservations/calendar?origin=1&paid=1&guests=split&prices=1&color=payment`.

### No telemóvel

No telemóvel, o calendário abre como **List of days**: as chegadas, as partidas e os quartos fechados de cada dia, com a tarifa mais baixa de cada tipo de quarto. O interruptor **Layout**, no topo, muda para **Full calendar**, o mapa inteiro a deslizar para o lado, e a sua escolha fica guardada nesse navegador. Os passos, as definições e a legenda passam para o menu **More**.

::screenshot{src="/images/blog/demo/en/reservation-calendar-mobile.webp" alt="Calendário num telemóvel como lista de dias a partir de quarta-feira, 4 de novembro: quinta-feira, 5 de novembro marcada como Today com 2 quartos ocupados, a tarifa mais baixa de cada tipo de quarto (Doble Estándar 63,47 €, Doble Superior 84,13 €, Individual 46,49 €, Familiar 4 pax 109,22 €) e duas partidas, Okafor, Camila do quarto 105 e Alvarez, Greta do quarto 106, ambas Checked out; sexta-feira, 6 de novembro com as suas tarifas e duas chegadas" caption="No telemóvel, o calendário passa a ser uma lista de dias. Mude Layout para Full calendar para ver o mapa inteiro." path="/reservations/calendar" mobile}
::

### A tabela de reservas

**Reservations** (`/reservations`) lista todas as reservas de uma janela: **Today**, **Next 7 nights**, **Next 30 nights**, **This month** ou **Choose dates**, por **Stay**, **Arrival**, **Departure** ou **Booking date**. Filtre por estado, canal e tipo de quarto, marque **Owes money** ou **No room yet**, escolha entre 30 colunas e use **Export CSV** para exportar o que está no ecrã.

### Tudo sobre uma reserva

Abra uma reserva no painel lateral, ou na sua página completa:

- **Overview:** estadia, quartos, hóspedes, canal, **Total**, **Received**, **Outstanding**, e os indicadores do Little Hotelier como **Confirmation sent** ou **Card on file**.
- **Secções:** Guests, Rooms and rates (a tarifa de cada noite), Extras and taxes, Payments, Invoices, Notes, Channel and conversations, Check-in, History e **All other fields**. Mostre-as numa só página ou em separadores.
- **Ações:** **Confirm**, **Check in**, **Check out** (e anular), editar as notas internas, e editar os dados de faturação e a morada do hóspede principal (empresa, NIF, tipo de documento, morada). Cada uma é confirmada primeiro e enviada uma só vez.
- **Pagamentos:** reembolsos, links de pagamento e faturas na mesma página.

::screenshot{src="/images/blog/demo/en/reservation-detail.webp" alt="Página da reserva de Emma Berg, Confirmed, de sábado, 7 de novembro a quinta-feira, 12 de novembro de 2026, 5 noites, BBN-DEMO100408: botões Check in e Open in Little Hotelier, separadores das secções de Overview a All other fields (43), cartões Stay, Rooms 201 Doble Superior, Guests 1 adulto e Channel Extranet, Total 489,69 €, Received 146,91 € e Outstanding 342,78 €, indicadores como Payment: Partly paid e Confirmation sent, e o contacto Booked under" caption="Todos os campos que o Little Hotelier guarda sobre uma reserva, numa só página, com o check-in a um clique." path="/reservations"}
::

Numa reserva feita no seu próprio site, a página pode mostrar a **Original booking** ao lado da reserva atual do Little Hotelier. Carregue em **Read the original booking** e lista os motivos das diferenças: a estadia mudou de datas, o quarto é cobrado de outra forma, o desconto da reserva direta desapareceu, ou o depósito não foi recalculado depois de uma mudança. Isso explica um saldo que um hóspede diz que não deve.

### Criar uma reserva a partir do Hotelier Tools

**New reservation** (`/reservations/new`) é o caminho rápido para uma reserva por telefone ou de um cliente de passagem:

1. **Estadia.** Escolha a chegada e a partida num calendário cujos dias mostram os quartos disponíveis, o preço mais baixo, stop sells, fecho à chegada e estadias mínimas.
2. **Quartos.** A tabela de tarifas abre com todos os tipos de quarto e planos tarifários com o preço da estadia, noite a noite. Clique num preço para escolher esse quarto e essa tarifa, ou em **Custom rate** para escrever um preço por noite. Os limites de hóspedes de cada quarto no Little Hotelier limitam os campos **Adults**, **Children** e **Infants**, e os hóspedes acima dos lugares incluídos mostram o suplemento por hóspede extra.
3. **Comparar.** Por baixo, **To compare** mostra a mesma estadia como **Direct booking** no seu site (com o seu código promocional), no **Booking.com** com um desconto Genius típico, o que sugerem as recomendações de preço e **The market these nights** a partir de propriedades comparáveis.
4. **Hóspede e morada.** Escolha primeiro o país. Um código postal preenche a localidade e a província, e uma localidade sugere os seus códigos postais.
5. Carregue em **Check price and availability**. Calcula o preço de cada noite, confirma que há quartos e procura o mesmo hóspede já com reserva nessas datas. Nada é escrito.
6. Carregue em **Create reservation**. Só aparece depois de uma verificação exatamente do formulário que está no ecrã.

::screenshot{src="/images/blog/demo/en/reservation-new-rates.webp" alt="Nova reserva de quinta-feira, 12 de novembro a sábado, 14 de novembro com a tabela Rates e a comparação abertas para 2 hóspedes: Doble Estándar com 3 quartos disponíveis, Tarifa Flexible selecionada a 153,73 € pela estadia (70,52 € e 83,21 € por noite) e No reembolsable a 138,36 €, Doble Superior a 203,79 € e 183,41 €, Individual marcado como não aceitando este grupo, e uma linha Custom rate em cada tipo de quarto" caption="Todos os tipos de quarto e planos tarifários com o preço da estadia. Clique num preço para o escolher." path="/reservations/new"}
::

::screenshot{src="/images/blog/demo/en/reservation-new-compare.webp" alt="A faixa To compare da tabela de tarifas: Suite Ático como Direct booking com o código DEMOSOL −10% a 329,81 € em vez de 366,46 €, Booking.com com −10% Genius não lido, Recommended a 325,09 €, e depois The market these nights com seis propriedades, do Albergue Prueba Playa a 117,02 € ao Hotel Muestra Rambla a 211,56 €, com o Hotel Demo Sol (You) a 176,79 €" caption="A mesma estadia no seu site, no Booking.com e em propriedades próximas, antes de dar um preço." path="/reservations/new"}
::

Uma noite cheia ou um provável duplicado é recusado com a sua própria caixa (**Book it anyway…** ou **It is a second stay — book it anyway**): marque-a só quando for mesmo isso que quer. A reserva é enviada uma só vez. Se a resposta se perder, a página não volta a oferecer **Create** até uma nova verificação, que encontra a reserva como duplicado se ela tiver sido criada.

Depois de criada, a reserva aparece no calendário e deixa de estar à venda em todos os canais.

::demo-cta{path="/reservations/calendar"}
::

### Limites honestos

- **O calendário só lê.** Mudar uma estadia de quarto, alterar datas, cancelar ou marcar um no-show continua a fazer-se no Little Hotelier. Cada reserva tem um link **Open in Little Hotelier**. Não é possível arrastar barras.
- **New reservation é para uma estadia simples.** Para um depósito, extras ou um quarto específico, use o próprio formulário do Little Hotelier, para o qual a página tem um link logo no início. Até 30 noites e 10 quartos por reserva.
- **Sem pagamento, sem e-mail.** Uma reserva criada aqui não regista nenhum pagamento e não envia e-mail ao hóspede.
- **Os valores do site e do Booking.com servem para comparar.** A reserva usa a tarifa que escolher.

O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança. Mais na [página do dashboard](/tools/bot/dashboard).

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Lê e cria reservas com o login do Little Hotelier do seu próprio hotel.
::

Veja também: [listas diárias para imprimir](/blog/little-hotelier-daily-lists), [códigos promocionais no Little Hotelier](/blog/little-hotelier-promo-codes), [dicas do Little Hotelier](/blog/little-hotelier-tips).

## Resumo

- **No Little Hotelier:** o calendário mostra 14 ou 28 dias. Crie uma reserva com **+Reservation** e depois carregue em **Email** para enviar a confirmação.
- **Um segundo calendário** no Hotelier Tools mostra 1 a 92 noites, a tarifa mais baixa por tipo de quarto, ícones de canal e de pagamento, e vistas guardadas para a equipa.
- **No telemóvel:** uma lista de dias, ou o mapa completo.
- **New reservation:** escolha uma tarifa com preço, compare-a com o seu site e com o Booking.com, verifique e crie no Little Hotelier.
- **As alterações** de quartos, datas e cancelamentos continuam no Little Hotelier.
