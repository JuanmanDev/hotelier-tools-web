---
title: "Comissão do Booking.com: quanto cobra e como ver o líquido real no Little Hotelier"
seoTitle: "Comissão do Booking.com: quanto cobra (2026)"
description: "Não há uma taxa única: você paga a % do seu contrato, mais programas e taxas de pagamento. Sobre o que incide, IVA e o líquido real de cada reserva."
date: 2026-10-03
category: tips
tags: [booking.com, commission, little hotelier, userscript, vat]
keywords: [comissão booking, valor comissão booking, comissão booking portugal, comissão booking brasil, aumento comissão booking, calculadora comissão booking]
feature: dynamic-pricing
demoPath: /
cover: /images/scripts/show-booking-commissions/to.png
coverAlt: "Resumo de reserva do Little Hotelier (interface em espanhol) com a comissão do Booking.com, a taxa de pagamento e o líquido aproximado, acrescentados por um script gratuito"
faq:
  - q: "Que percentagem / porcentagem o Booking.com cobra aos hotéis?"
    a: "O Booking.com não publica uma taxa única. Você paga a percentagem do seu contrato de alojamento, que depende do país, do tipo de propriedade e do contrato. Pode ver a comissão de cada reserva na Extranet, em Finance > Reservation statements."
  - q: "O Booking.com cobra comissão sobre a taxa turística?"
    a: "Não. O Booking.com não cobra comissão sobre impostos locais como a taxa turística. Na maioria dos países cobra comissão sobre o IVA (VAT/GST), conforme a lei local e as suas General Delivery Terms."
  - q: "Pago comissão por um no-show?"
    a: "Só se cobrar ao hóspede uma taxa de no-show, e nesse caso sobre essa taxa. Se marcar o no-show na Extranet nas 48 horas seguintes ao check-out previsto e dispensar a taxa, não há comissão."
  - q: "O programa Genius aumenta a minha comissão?"
    a: "O Genius não acrescenta uma percentagem de comissão, mas o desconto é financiado por você (10% por padrão, até 15% ou 20% nos níveis Genius mais altos, se os ativar). Preferred Partner, Preferred Plus e Visibility Booster são os programas que aumentam a comissão."
  - q: "Quando o Booking.com fatura a comissão?"
    a: "Uma vez por mês, por cada reserva cujo hóspede fez check-out no mês anterior. As faturas têm de ser pagas em 14 dias. Com Payments by Booking.com, a comissão pode ser deduzida dos seus pagamentos."
  - q: "O script de comissões para o Little Hotelier é gratuito?"
    a: "Sim. O userscript Show Booking.com Commissions é gratuito para sempre. Funciona no seu próprio navegador com a extensão gratuita Tampermonkey e só lê a página de reserva que você tem aberta."
---

Não existe uma comissão única do Booking.com. Você paga a percentagem do seu próprio contrato, que depende do país, do tipo de propriedade e do acordo, e programas como Preferred Partner ou Visibility Booster somam-se a ela. Incide sobre o valor total da reserva (na maioria dos países, incluindo o IVA, nunca sobre a taxa turística), e o Payments by Booking.com pode acrescentar uma taxa de pagamento, por isso o seu líquido real é o total da reserva menos tudo isto.

As regras abaixo foram verificadas na Partner Help do Booking.com em outubro de 2026. O Booking.com atualiza estas páginas com frequência, por isso os links levam à fonte.

## Quanto cobra o Booking.com de comissão aos hotéis?

O Booking.com define a comissão como "a set percentage of the total booking amount" (uma percentagem fixa do valor total da reserva) em cada reserva ([Partner Help: Understanding your commission](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission)). Não publica uma taxa para todos: "the exact percentage depends on your country, property type, and the accommodation agreement you signed." Os novos parceiros veem-na no passo **Agreement** da inscrição ([Booking.com FAQ](https://join.booking.com/faq.html?lang=en)).

A taxa fica fixada no momento em que o hóspede reserva. Se a sua comissão mudou recentemente, as reservas antigas mantêm a taxa anterior.

Para descobrir a percentagem que realmente paga:

1. Entre na Extranet e abra **Finance > Reservation statements**. Cada reserva mostra a sua comissão.
2. Compare-a com o seu contrato de alojamento. Para obter uma cópia das General Delivery Terms, vá a **Contracts**, sob o ícone de utilizador / usuário.
3. Se o extrato mostrar uma percentagem mais alta, abra **Boost performance**: Preferred Partner ou Visibility Booster somam uma percentagem à sua taxa base.
4. Com Payments by Booking.com, **Finance help** também mostra a sua taxa e a taxa de pagamento.

## Sobre o que incide a comissão do Booking.com?

A comissão abrange "the room rate as well as any additional fees you charge—such as cleaning fees, service fees, and costs for no-shows or cancellations" (o preço do quarto e quaisquer taxas adicionais, como limpeza, serviço e custos de no-show ou cancelamento), e aplica-se quando o hóspede faz check-out ([fonte](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission)).

**Você paga comissão sobre:**

- estadias concluídas
- reservas não reembolsáveis e parcialmente reembolsáveis, quer o hóspede tenha vindo ou não
- taxas de cancelamento e de no-show que você cobra
- overbookings (dispensados se estiver online há menos de 30 dias ou tiver tido menos de cinco overbookings nos últimos 12 meses)

**Você não paga comissão sobre:**

- taxas de cancelamento que decide dispensar
- no-shows que marca na Extranet nas 48 horas seguintes ao check-out, quando dispensa a taxa
- reservas em que marcou o cartão do hóspede como inválido

**Impostos.** O Booking.com não cobra comissão sobre impostos locais como a taxa turística. "However, in most countries, commission is charged on VAT or GST" (na maioria dos países, a comissão é cobrada sobre o IVA), conforme a lei local. As suas General Delivery Terms dizem o que se aplica a você.

::callout{type="warning" title="A regra das 48 horas"}
Marque no-shows, cancelamentos e outras alterações na Extranet nas 48 horas seguintes ao check-out. Depois disso, o Booking.com cobra a comissão completa da reserva original. O passo a passo está em [Cartão inválido ou no-show no Booking.com: o que fazer](/blog/booking-com-invalid-card-no-show).
::

## Como Genius, Preferred e Visibility Booster mudam o que você paga

- **Genius** não acrescenta percentagem de comissão, mas você paga o desconto. Ao aderir, aplicam-se 10% ao seu tipo de quarto mais barato e mais popular, e pode ativar 15% ou 20% para os níveis Genius mais altos. O Booking.com diz que o desconto padrão "is funded by you, the accommodation partner" ([Genius program](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-genius-marketing-program)).
- **Preferred Partner Program** dá mais visibilidade e um selo "in exchange for a small increase in commission" (em troca de um pequeno aumento da comissão). É preciso uma pontuação de desempenho de pelo menos 70%, verificada a cada 90 dias ([Preferred Partner](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-preferred-partner-program)). O **Preferred Plus** exige 80% e um investimento de comissão maior ([Preferred Plus](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-preferred-plus)). O Booking.com não publica a percentagem extra; consulte-a em **Boost performance** na Extranet.
- **Visibility Booster** permite escolher uma comissão mais alta com uma barra deslizante, apenas para as datas de check-in e os países de origem dos hóspedes que escolher ([Visibility Booster](https://partner.booking.com/en-us/help/growing-your-business/increase-revenue/all-you-need-know-about-visibility-booster)).

## O que acrescenta o Payments by Booking.com?

Não há taxa de adesão ([Payments by Booking.com](https://partner.booking.com/en-us/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom)). O que você paga depende da forma como recebe o dinheiro:

| Forma de recebimento | Custo extra |
|---|---|
| Transferência bancária | Uma taxa de serviço de pagamento, como percentagem de cada reserva concluída. Depende da localização da propriedade. |
| Cartão de crédito virtual (VCC) | A taxa do seu banco ou prestador de pagamentos por cobrar o cartão. O Booking.com não a define. |

Se dispensar a taxa de cancelamento de um hóspede, também não há taxa de pagamento. Quando o Booking.com trata de todos os pagamentos dos seus hóspedes, deduz a comissão e a taxa de pagamento de cada transferência. Caso contrário, você recebe uma fatura no fim do mês.

Para ver as duas numa reserva, abra o separador / aba **Reservations** da Extranet e veja a coluna **Commission and charges**. Em **Reservation details** está o detalhe.

## Há IVA sobre a comissão do Booking.com?

Na UE, depende do seu número de IVA ([EU VAT and commission invoices](https://partner.booking.com/en-us/compliance/tax-remittance-management/eu-vat-and-commission-invoices)):

- **Com um número de IVA válido para transações na UE** (o Booking.com verifica-o na base de dados VIES da UE), a fatura de comissão vem sem IVA. Você "remain responsible for reporting any VAT you may owe" (continua responsável por declarar o IVA que possa dever) ao fisco. Os contabilistas / contadores chamam-lhe autoliquidação (reverse charge).
- **Sem ele**, o Booking.com acrescenta IVA à fatura de comissão. Nos pagamentos líquidos por transferência bancária, deduz a comissão, a taxa de pagamento e o IVA de ambas.

Para adicionar o seu número: **Finance > Finance settings > VAT details > Edit details**, confirme que é válido para transações na UE, insira-o e guarde. Fora da UE, as regras variam por país, por isso consulte o seu contabilista.

As faturas de comissão chegam uma vez por mês, por cada hóspede que fez check-out no mês anterior, e devem ser pagas em 14 dias. Faturas não pagas podem fechar temporariamente a sua propriedade.

## Como ver o líquido de cada reserva do Booking.com no Little Hotelier

O resumo de reserva do Little Hotelier mostra o total do quarto, extras, descontos e taxas de cartão. Não mostra o que o Booking.com retém. A comissão exata e a taxa de pagamento de cada reserva estão na Extranet (**Reservation statements**, ou a coluna **Commission and charges**). O que você recebe realmente é o total menos esses valores e o imposto incluído no preço.

### Exemplo prático: do preço da reserva ao seu líquido

São os valores das imagens abaixo: uma reserva do Booking.com de 125,18 €, com 17% de comissão e 1,3% de taxa de pagamento. As suas percentagens podem ser diferentes.

| Linha | Valor |
|---|---|
| Total da reserva (imposto incluído) | 125,18 € |
| Comissão, 17% do total | −21,28 € |
| Taxa de pagamento, 1,3% do total | −1,63 € |
| Imposto incluído no preço | −11,38 € |
| **Líquido aproximado** | **90,89 €** |

Cerca de um quarto do que o hóspede pagou nunca chega às suas mãos. Se o Booking.com acrescentar IVA à fatura de comissão, desconte também esse valor.

### Veja-o em todas as reservas com um script gratuito

::screenshot{src="/images/scripts/show-booking-commissions/from.png" alt="Resumo de reserva do Little Hotelier (interface em espanhol) de uma reserva do Booking.com, com total do quarto, extras, desconto e total recebido, sem linha de comissão" caption="Antes: o Little Hotelier mostra o total, não o que o Booking.com retém." width="720" height="669"}
::

Para uma estimativa rápida dentro do próprio Little Hotelier, use o script gratuito **Show Booking.com Commissions**:

1. Instale a extensão gratuita Tampermonkey no navegador. O [guia de instalação](/tools/ui/instructions) explica como.
2. Abra [Show Booking.com Commissions](/tools/ui/show-booking-commissions) e clique em **Install on Tampermonkey**.
3. Abra qualquer reserva do Little Hotelier cuja origem seja o Booking.com. Após alguns segundos, aparecem quatro linhas acima dos totais: a taxa de transferência (1,3%), a comissão do Booking.com (17%), tudo o que é deduzido e o líquido aproximado.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Resumo de reserva do Little Hotelier com quatro linhas extra: taxa de transferência 1,3%, comissão do Booking.com 17%, total de deduções e líquido aproximado de 90,89 euros" caption="Depois: comissão, taxa de pagamento e líquido aproximado em cada reserva do Booking.com." width="752" height="715"}
::

O que deve saber antes de confiar nele:

- **As taxas estão fixas no script**: 17% de comissão e 1,3% de taxa de pagamento. Se as suas forem diferentes, abra o script no editor do Tampermonkey e altere `0.17` e `0.013`.
- **Os textos estão em espanhol** e os valores em euros.
- **É uma estimativa.** Não conhece Preferred, Visibility Booster nem o IVA acrescentado à fatura de comissão.
- **Fica no seu navegador.** Lê a página que você tem aberta e não envia nada a ninguém.

Há mais scripts gratuitos como este em [extensões gratuitas do Chrome para o Little Hotelier](/blog/little-hotelier-chrome-extensions).

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools é independente: não é afiliado ao Booking.com, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Os scripts funcionam dentro da sua própria sessão do Little Hotelier, e o dashboard do Hotelier Tools conecta-se com o login do Little Hotelier do seu próprio hotel.
::

## Defina preços tendo em conta a comissão: Channels & discounts

O Genius e outros descontos de canal mudam o que o hóspede paga e, portanto, o que você fica. No dashboard do Hotelier Tools (os preços dinâmicos estão em alpha), **Pricing settings > Channels & discounts** (`/pricing/settings/channels`) reúne dois números:

1. **Discount when applying prices** (desconto ao aplicar preços). Os preços que aplica a partir de Recommendations vêm preenchidos como "recomendado menos esta %". Com 5%, uma recomendação de 100,00 é aplicada como 95,00. Deixe 0 para aplicar as recomendações tal como estão.
2. **What the guest pays per channel** (o que o hóspede paga por canal). Clique em **Add a channel** e insira o desconto que esse canal dá aos seus próprios hóspedes, como Genius ou preços para membros. A página Recommendations passa então a mostrar o que um hóspede realmente paga em cada canal.
3. Clique em **Save changes** (guardar alterações).

::screenshot{src="/images/blog/demo/en/pricing-settings-channels-discounts.webp" alt="Página Channels and discounts nas configurações de preços do Hotelier Tools: Discount when applying prices em 5% (uma recomendação de 100.00 é aplicada como 95.00) e What the guest pays per channel com o botão Add a channel, sugestões de Booking Genius 10%, Expedia member price 10% e Agoda insider deal 10%, e ainda nenhum desconto de canal adicionado" caption="Diga ao motor de preços quais são os seus descontos, para que as recomendações mostrem o que o hóspede de cada canal realmente paga." path="/pricing/settings/channels"}
::

::demo-cta{path="/pricing/settings/channels"}
::

O resto do motor de preços (preços da concorrência, regras, eventos locais) está explicado em [preços dinâmicos para hotéis pequenos no Little Hotelier](/blog/dynamic-pricing-little-hotelier) e na [página Dynamic pricing](/tools/bot/dynamic-pricing). O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança; os scripts do navegador continuam gratuitos.

Guias relacionados: [CTA/CTD e stop-sell](/blog/little-hotelier-cta-ctd-stop-sell).

## Resumo

- A comissão do Booking.com é a percentagem do seu contrato. Preferred, Preferred Plus e Visibility Booster somam-se a ela, e o Genius custa-lhe o desconto.
- Incide sobre o valor total da reserva, normalmente incluindo o IVA, nunca sobre a taxa turística.
- O Payments by Booking.com acrescenta uma taxa de pagamento nas transferências bancárias. Na UE, um número de IVA válido evita o IVA na fatura de comissão.
- Confirme os valores exatos em **Finance > Reservation statements** e veja uma estimativa em cada reserva do Booking.com no Little Hotelier com o script gratuito [Show Booking.com Commissions](/tools/ui/show-booking-commissions).
