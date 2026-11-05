---
title: "Códigos promocionais do Little Hotelier: como criá-los, partilhá-los e controlá-los no seu motor de reservas"
seoTitle: "Códigos promocionais do Little Hotelier: criar e controlar"
description: "Crie um código promocional no motor de reservas do Little Hotelier, partilhe-o como link, defina datas e estadias mínimas e evite códigos abaixo do mínimo."
date: 2026-10-26
category: pricing
tags: [códigos promocionais, motor de reservas, reservas diretas, little hotelier, descontos, preços]
keywords: [código promocional little hotelier, como criar código promocional little hotelier, little hotelier promotion code, código de desconto reserva direta hotel, código promocional estadia mínima hotel, link com código promocional motor de reservas, thebookingbutton código promocional, cupão de desconto hotel reserva direta]
feature: dynamic-pricing
demoPath: /pricing/promo-codes
cover: /images/blog/demo/en/promo-codes-list.webp
coverAlt: "Página Promo codes do Hotelier Tools: botões Read from the booking engine e New code, e depois os códigos DEMOSOL e banco, ambos Active, cada um com o seu resumo em linguagem simples, um preço de exemplo para uma cama em dormitório a 6 de novembro, as reservas dos últimos 90 dias, avisos e os botões Edit, Pause e eliminar"
faq:
  - q: "Onde estão os códigos promocionais no Little Hotelier?"
    a: "Nas definições do motor de reservas, não na receção. Na versão atual, vá a Direct booking > Promotion codes. Na versão clássica, vá a My Apps > Direct booking, abra o separador Setup e clique no mosaico Promotion Codes."
  - q: "Um código promocional do Little Hotelier pode exigir uma estadia mínima?"
    a: "Não no próprio código. Crie uma tarifa de quarto com a estadia mínima que quer, associe-lhe o código e, no separador Promotions dessa tarifa, escolha mostrá-la só quando for introduzido um código promocional associado."
  - q: "Posso limitar quantas vezes um código promocional é usado?"
    a: "Não. Os códigos promocionais do Little Hotelier não têm limite de utilizações e não podem ser restringidos a hóspedes novos. Use as datas de reserva para dar um fim a cada código, e mude de códigos com regularidade."
  - q: "Os códigos promocionais do Little Hotelier funcionam no Booking.com ou na Expedia?"
    a: "Não. Só funcionam no seu próprio motor de reservas. Cada canal tem as suas próprias promoções, configuradas na sua extranet. Um código que publique amplamente pode contar como preço público para a paridade de tarifas, por isso verifique os seus contratos com os canais."
  - q: "Como pauso um código promocional sem o apagar?"
    a: "O motor de reservas não tem um interruptor para ligar e desligar um código. Altere as datas de reserva para terminarem ontem. O botão Pause do Hotelier Tools faz exatamente isso e guarda as datas antigas, para que Resume reponha o código como estava."
  - q: "O Hotelier Tools faz parte do Little Hotelier?"
    a: "Não. O Hotelier Tools é independente: não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel e só altera um código quando uma pessoa carrega no botão."
---

Os códigos promocionais do Little Hotelier estão no seu motor de reservas. Vá a **Direct booking** > **Promotion codes** (versão clássica: **My Apps** > **Direct booking** > **Setup** > **Promotion Codes**), crie um código, defina um desconto, as datas de reserva e as datas de estadia, e associe as tarifas de quarto a que se aplica. Partilhe-o como link com `?promotion_code=YOURCODE`. O Hotelier Tools acrescenta uma página que explica cada código numa frase e avisa quando um código fica abaixo do seu preço mínimo ou se acumula com outros descontos. Pode pausar um código e retomá-lo mais tarde.

## Onde estão os códigos promocionais no Little Hotelier?

Os códigos promocionais pertencem ao motor de reservas do seu site (direct-book.com), construído sobre o TheBookingButton. Não alteram as suas tarifas na receção / recepção nem em nenhum canal.

- **Versão atual:** **Direct booking** > **Promotion codes** ([centro de ajuda](https://help-platform.littlehotelier.com/en/articles/10911579-use-promo-codes-to-create-custom-links-for-your-booking-engine)).
- **Versão clássica:** **My Apps** > **Direct booking**, o separador / aba **Setup** e depois o mosaico **Promotion Codes** ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes)).

As etiquetas abaixo são do centro de ajuda do Little Hotelier, em novembro de 2026.

## Como criar um código promocional

1. Abra **Promotion Codes** e clique em **Create**.
2. Em **Code**, escreva o que os hóspedes vão introduzir. Sem espaços, e cada código tem de ser único.
3. Em **Description**, escreva o texto que os hóspedes veem no motor de reservas.
4. Em **Default rate discount**, escolha uma percentagem ou um valor, e escreva-o.
5. Defina **Available From/To**: as datas em que os hóspedes podem **reservar** com o código.
6. Defina **Applicable From/To**: as noites em que os hóspedes podem **ficar** com o código.
7. Se quiser, marque **Hide Promo Code in reservation summary**.
8. Selecione as tarifas de quarto a que o código se aplica. Uma tarifa pode ter o seu próprio desconto, que substitui o padrão.
9. Clique em **Save**.

Fonte: [Set up and manage promotion codes](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes).

Duas definições surpreendem as pessoas. Por padrão, um código válido **esconde todas as suas tarifas públicas**, por isso o hóspede só vê as tarifas associadas ao código. Para mudar isso, desmarque **Hide public rates when a Promo Code is applied** em **Setup** > **Properties** > **Customisation**. E o campo **Add Promo Code** está sempre visível no motor de reservas.

## Como partilhar um código promocional como link

Os hóspedes esquecem-se de escrever os códigos. Envie um link que aplica o código por eles. Em **Promotion codes**, expanda o código e clique em **Promotion code link** para o copiar ([centro de ajuda](https://help-platform.littlehotelier.com/en/articles/10911579-use-promo-codes-to-create-custom-links-for-your-booking-engine)). O formato é:

- Europa, Médio Oriente, África e Américas: `https://direct-book.com/properties/yourproperty?promotion_code=YOURCODE`
- Ásia-Pacífico: `https://book-directonline.com/properties/yourproperty?promotion_code=YOURCODE`

Um **código de 0%** também é útil: associe-o às tarifas de um só tipo de quarto e o link mostra apenas esse tipo de quarto (com as tarifas públicas escondidas).

## Estadia mínima, limites de utilização e hóspedes novos

As respostas do próprio Little Hotelier, em novembro de 2026 ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes)):

- **Estadia mínima:** os códigos não têm. Crie uma tarifa de quarto com, por exemplo, um mínimo de duas noites, associe-lhe o código e, no separador **Promotions** da tarifa, escolha "Show only when a linked promotional code is entered" (mostrar só quando for introduzido um código promocional associado).
- **Limites de utilização:** não há limite de quantas vezes um código é usado. Dê-lhe uma data de fim e mude de códigos com regularidade.
- **Hóspedes novos:** o motor de reservas não consegue saber se um hóspede já reservou antes.
- **Ofertas públicas:** para um desconto que todos veem, o Little Hotelier sugere descontos dinâmicos ou um multiplicador de tarifa para o Direct booking em vez de um código.

## Boas práticas com códigos promocionais

- **Defina sempre um fim.** Um código sem datas de reserva vive para sempre, e os códigos antigos circulam em sites de cupões.
- **Separe as datas de reserva das datas de estadia.** "Reserve esta semana para estadias em janeiro" são duas janelas, não uma.
- **Conheça o seu mínimo.** Um código de 15% numa tarifa já com desconto pode descer abaixo do que um quarto tem de render. Verifique a noite mais baixa, não a média.
- **Atenção à acumulação.** O código é descontado da tarifa que o motor de reservas mostra. Se as suas tarifas web já estão abaixo das tarifas da receção, o hóspede recebe os dois descontos.
- **Um código, um objetivo.** Um código por campanha ou parceiro diz-lhe qual trouxe reservas.
- **Cuidado com a paridade.** Um código que qualquer pessoa encontra funciona como um preço público. Os grupos fechados (newsletter, hóspedes que regressam, uma empresa local) são mais seguros. Verifique os seus contratos com os canais.
- **Os códigos são só para reservas diretas.** Não chegam ao Booking.com nem à Expedia, que têm as suas próprias promoções.

## A forma mais rápida: cada código explicado, verificado e pausado no Hotelier Tools

O Hotelier Tools lê os códigos do seu motor de reservas e mostra-os em palavras simples em **Promo codes** (`/pricing/promo-codes`), dentro de Pricing. A página é nova (outubro de 2026). Ler os códigos é a parte testada; criá-los e editá-los a partir do Hotelier Tools ainda não foi verificado contra um motor de reservas real, e é por isso que cada alteração é relida e mostrada como confirmada ou não.

1. Abra **Promo codes** e carregue em **Read from the booking engine**. Abrir a página nunca lê nada; é o botão que lê.
2. Cada código mostra o seu estado (**Active**, **Scheduled**, **Paused**, **Expired** ou **Does nothing**), um resumo de uma linha como "10% off the room price (not the extra-guest supplement) on 8 rates. Any booking date. Any stay date." (10% de desconto no preço do quarto, sem o suplemento de hóspede extra, em 8 tarifas; qualquer data de reserva; qualquer data de estadia), um preço de exemplo e quantas reservas o usaram nos últimos 90 dias.
3. Leia os avisos por baixo de cada código e depois use **Edit**, **Pause**, **Resume** ou o botão de eliminar.

::screenshot{src="/images/blog/demo/en/promo-codes-list.webp" alt="Página Promo codes: o código DEMOSOL, Active e Used for quotes and links, 10% de desconto em 8 tarifas com um preço de exemplo de 27,09 para 24,38 euros e 14 reservas nos últimos 90 dias, três avisos por baixo; depois o código banco, Active, 15% de desconto em 1 tarifa que fica escondida sem código" caption="Cada código numa frase, com o que faz a um preço real e os problemas que causa." path="/pricing/promo-codes"}
::

### Crie ou edite um código com pré-visualização

Carregue em **New code**. Preencha **Code** (3 a 40 letras, algarismos, - ou _; maiúsculas e minúsculas são iguais), **Discount** (**% off the rate**, até 90%, ou **Amount off the rate**), **Description**, **Booking dates**, **Stay dates** e **Rates it applies to** (**Select all public rates** marca as habituais). **What this code will do** mostra o resultado antes de carregar em **Create in TheBookingButton**.

::screenshot{src="/images/blog/demo/en/promo-codes-new-code.webp" alt="Janela New promo code: código AUTUMN26, desconto 10 com % off the rate, descrição vazia, Show the discount in the booking summary desmarcado, Booking dates e Stay dates vazias, Rates it applies to com Tarifa Flexible e No reembolsable do Doble Estándar marcadas, e What this code will do: 10% off the room price (not the extra-guest supplement) on 2 rates. Any booking date. Any stay date." caption="As datas de reserva e as datas de estadia são separadas, e a pré-visualização diz o que o código vai fazer antes de se guardar alguma coisa." path="/pricing/promo-codes"}
::

Cada alteração é verificada assim:

- O código é lido de novo antes da alteração. Se alguém o alterou entretanto no motor de reservas, é-lhe pedido que o volte a ler.
- A alteração é enviada uma vez e depois relida. O resultado é **Confirmed**, **Differs** ou **Unknown**. Um resultado desconhecido nunca é reenviado sozinho: carregue em **Read again** em **Recent changes**.
- Criar, alterar, pausar e eliminar exigem a permissão **Publish prices**, porque um código chega logo aos hóspedes. Para eliminar, tem de escrever o código.

### Os avisos que poupam dinheiro

| Aviso | O que significa |
|---|---|
| Under your minimum price | Com o desconto, algumas noites dos próximos 90 dias ficam abaixo do seu mínimo |
| Stacks with your apply discount | As suas tarifas já estão escritas abaixo da recomendação; com o código, um hóspede da web paga a soma dos descontos |
| Hides your public rates | O código desbloqueia tarifas só com código, e um hóspede que o usa vê apenas essas |
| Does nothing | Nenhuma tarifa está associada: o código é aceite e o hóspede vê o preço normal |
| Same code, other capitals | O motor de reservas não distingue `SUMMER` de `summer` |
| Public code | As suas cotações e links de reserva usam-no, por isso a paridade de tarifas do Booking.com pode contá-lo |
| Changed outside this app | Alguém o editou no TheBookingButton desde a última leitura |

Se o ecrã de promoções do próprio Little Hotelier (um sistema separado) tiver promoções, a página também lhe diz que o seu site não as usa.

### Pausar e retomar

O motor de reservas não tem um interruptor para ligar e desligar um código. **Pause** faz terminar as datas de reserva do código ontem e guarda as datas antigas. O desconto, as tarifas e as datas de estadia ficam como estão, e as reservas já feitas mantêm o seu preço. **Resume** repõe as datas guardadas. Se um código desbloqueia tarifas que só se podem reservar com código, a janela de pausa avisa que essas tarifas deixam de estar disponíveis.

### Leitura diária, e perguntas em palavras simples

Uma tarefa agendada, **Read the codes every day** (às 06:40 por padrão, criada automaticamente desde novembro de 2026), mantém a página e os assistentes atualizados. Só lê.

No chat de IA (beta), pergunte "Que códigos estão ativos?" ou "O que aconteceria se o WEB desse 18%?": o assistente responde a partir dos códigos e pré-visualiza uma alteração sem a escrever. Para alterar um código, mostra um cartão de aprovação, e nada acontece até você aprovar. Os programadores têm as mesmas ações através da API REST (`/api/v1/pricing/promo-codes`) e do MCP. Os agentes de navegador que usam WebMCP só podem propor: abrem o formulário preenchido, e é uma pessoa que carrega no botão.

### Veja a que preço vende realmente a sua web

Há mais dois sítios que usam o seu código:

- **Pricing settings** > **Channels & discounts** (`/pricing/settings/channels`), cartão **What your web really sells at** (a que preço vende realmente a sua web): **Check the web** lê a sua página de reservas para as próximas 30 noites, com e sem o seu código, e compara-a com a tarifa da receção e com o que paga um hóspede do Booking.com. Recomenda um desconto web geral.
- **New reservation** (`/reservations/new`) mostra quanto custa a mesma estadia na sua web, na sua web com o código e uma estimativa para o Booking.com, ao lado das tarifas a que reserva.

Defina o código que as suas cotações e links de reserva usam em **Direct-booking promo code**, na ficha da propriedade.

::demo-cta{path="/pricing/promo-codes"}
::

**Ainda não existe:** um e-mail quando um código muda fora do Hotelier Tools (a página mostra-o na leitura seguinte), nem limites que o próprio motor de reservas não tem, como um número máximo de utilizações.

O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança. O resto do motor de preços está na [página Dynamic pricing](/tools/bot/dynamic-pricing).

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel, e os códigos ficam no seu próprio motor de reservas.
::

Veja também: [tarifa dinâmica para hotéis pequenos no Little Hotelier](/blog/dynamic-pricing-little-hotelier), [a comissão do Booking.com](/blog/booking-com-commission), [CTA, CTD, estadia mínima e stop sell](/blog/little-hotelier-cta-ctd-stop-sell).

## Resumo

- Os códigos promocionais do Little Hotelier são definições do motor de reservas: **Direct booking** > **Promotion codes**.
- Cada código tem um desconto, datas de reserva, datas de estadia e tarifas associadas. Por padrão, esconde as suas tarifas públicas.
- Partilhe os códigos como links com `?promotion_code=`. Para uma estadia mínima, associe o código a uma tarifa só com código que tenha esse mínimo.
- Dê um fim a cada código, compare-o com o seu mínimo e lembre-se de que os códigos não chegam às OTA.
- O Hotelier Tools explica cada código numa frase, avisa sobre mínimos, acumulação e paridade, e permite pausar e retomar um código sem perder as suas definições.
