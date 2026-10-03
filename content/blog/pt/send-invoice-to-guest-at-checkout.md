---
title: "Fatura (nota fiscal) do Booking.com: como enviá-la ao hóspede automaticamente no check-out"
seoTitle: "Enviar a fatura ao hóspede no check-out, no Little Hotelier"
description: "O Booking.com não emite fatura aos seus hóspedes, é você. Envie a fatura / nota fiscal do Little Hotelier à mão ou por e-mail automático no check-out."
date: 2026-10-03
category: invoicing
tags: [invoices, checkout, booking.com, little hotelier, automation]
keywords: [fatura booking com nif, pedir fatura booking, emitir fatura booking, como obter nota fiscal booking, nota fiscal hospedagem booking, fatura alojamento booking, little hotelier fatura]
feature: invoicing
demoPath: /invoice-on-leave
cover: /images/blog/demo/en/invoice-at-checkout.webp
coverAlt: "Página Invoice on leave no Hotelier Tools: a tarefa Automatic invoicing at check-out a correr todos os dias às 12:00, um intervalo de datas com Search reservations e a tabela de reservas com um botão Auto-invoice em cada estadia"
faq:
  - q: "O Booking.com envia faturas aos hóspedes?"
    a: "Não. O Booking.com diz que a reserva é um acordo entre si e o hóspede, pelo que é o alojamento que tem de fornecer a fatura / nota fiscal, mesmo quando foi o Booking.com a cobrar o pagamento."
  - q: "O Little Hotelier pode enviar a fatura por e-mail automaticamente no check-out?"
    a: "Por si só, não. Os seus e-mails automáticos para hóspedes são a confirmação da reserva, o cancelamento, o lembrete de pré-chegada e o agradecimento pós-partida. Envia a fatura por e-mail a partir da reserva, ou usa uma ferramenta como o Invoice on Leave do Hotelier Tools para o fazer depois do check-out."
  - q: "Porque esperar pelo check-out para emitir a fatura?"
    a: "Porque só então os valores são definitivos. Extras, pagamentos e mudanças de datas acontecem muitas vezes durante a estadia, e uma fatura emitida demasiado cedo tem de ser corrigida com uma nota de crédito ou uma nova fatura."
  - q: "O hóspede vê o Hotelier Tools no e-mail?"
    a: "Não. O Hotelier Tools pede ao Little Hotelier que envie a fatura, por isso ela sai do seu próprio modelo de e-mail e remetente do Little Hotelier, exatamente como se você carregasse em Email > Invoice."
  - q: "E se o hóspede não tiver endereço de e-mail na reserva?"
    a: "O Little Hotelier envia a fatura para o e-mail do contacto principal da reserva, pelo que, sem um, não há para onde a enviar. O Invoice on Leave assinala uma estadia passada sem e-mail do hóspede em vez de tentar todos os dias, para poder imprimir a fatura ou pedir um endereço ao hóspede."
---

O Booking.com nunca emite fatura aos seus hóspedes: é o alojamento que a emite, mesmo quando foi o Booking.com a cobrar. No Little Hotelier envia-a a partir da reserva com **Invoices > Generate invoice** e depois **Email > Invoice**. Para a tornar automática, marque a estadia no **Invoice on Leave** do Hotelier Tools: quando o hóspede faz o check-out, uma tarefa diária pede ao Little Hotelier que gere a fatura e a envie por e-mail.

## O Booking.com envia fatura ao hóspede?

Não. A ajuda para parceiros do Booking.com é clara: cada reserva é um acordo entre si e o seu hóspede, pelo que "it's your responsibility to provide the guest with an invoice – not Booking.com" (é da sua responsabilidade fornecer a fatura ao hóspede, não do Booking.com), seja quem for que tratou do pagamento ([Booking.com Partner Hub](https://partner.booking.com/en-gb/help/policies-payments/guest-payments/supplying-guests-invoices)).

A mesma página acrescenta três regras práticas:

- Emita a fatura em nome do hóspede, ou noutro nome combinado com ele.
- Não mostre o Booking.com como vendedor. O fornecedor é você.
- Se for pago por cartão virtual, o titular do cartão aparece como "Booking.com (Agent)", mas continua a faturar o valor total da estadia.

Os viajantes de negócios que reservaram pelo Booking.com for Business podem carregar em **Request invoice**, que se limita a enviar-lhe uma mensagem ([ajuda do Booking.com for Business](https://help.business.booking.com/hc/en-gb/articles/14862570197268-How-can-I-get-my-invoice)). O trabalho continua a cair na sua receção.

## O que deve incluir uma fatura de hotel?

Depende do seu país, mas na UE uma fatura de IVA completa inclui ([Comissão Europeia](https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en)):

- data de emissão e um número sequencial único
- o seu nome e morada completos e os do cliente
- o número de IVA do cliente (NIF em Portugal), quando o cliente é devedor do imposto (tipicamente uma empresa)
- uma descrição da estadia, o preço unitário sem imposto e a data da prestação, se for diferente
- a taxa de IVA, o valor do IVA e uma discriminação por taxa

Muitos países também permitem uma fatura "simplificada" mais curta para algumas vendas. Quando um hóspede empresarial pede fatura, costuma precisar da completa, em nome da empresa, com o seu número fiscal (NIF em Portugal, CNPJ no Brasil).

Configure uma vez o modelo no Little Hotelier em **Front Desk > Setup > Guest Payment Options > Customise invoices**: título (**Invoice**, **Tax Invoice** ou o seu), prefixo e sufixo da numeração, logótipo e imposto mostrado incluído ou excluído. As alterações só se aplicam a faturas novas ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/8910582-customise-guest-invoices)).

## Como enviar uma fatura por e-mail a partir do Little Hotelier (à mão)

1. Confirme que a estadia terminou: no separador **Details** da reserva, defina o estado como **Checked-out** e verifique o saldo.
2. Vá ao separador **Invoices** e clique em **Generate invoice**.
3. Clique em **Email** e escolha **Invoice**. O Little Hotelier envia-a para o e-mail do contacto principal da reserva.

Também pode assinalar **Email invoice** ao fazer **Record Payment**. Se editar a reserva depois, o separador Invoices mostra **Invoice is outdated**; clique para gerar uma fatura corrigida e envie essa. Fontes: [Generate, print, and email a guest invoice](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice) e [Record a payment](https://helpcentre.littlehotelier.com/en/articles/9743295-record-a-payment-or-refund-for-a-reservation).

Para imprimir, clique em **Print** e escolha **Invoice**. O script gratuito [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) acrescenta uma ligação direta para dispensar o menu:

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="Rodapé de uma reserva do Little Hotelier (interface em espanhol) com uma ligação extra Imprimir Factura junto dos menus Print e Email" caption="O script Extra Invoice Print Button acrescenta uma ligação de fatura com um clique junto a Print e Email." width="604" height="265"}
::

O senão: é um passo manual para cada hóspede. Os e-mails automáticos do Little Hotelier para hóspedes são a confirmação da reserva, o cancelamento, o lembrete de pré-chegada e o agradecimento pós-partida ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/8910590-customise-guest-emails)). Nenhum deles envia a fatura.

## Como enviar a fatura automaticamente quando o hóspede faz o check-out

O **Invoice on Leave** do Hotelier Tools (beta) faz por si os passos manuais acima, depois do check-out. Marca uma reserva uma vez; marcá-la não envia nada nesse momento.

1. Abra **Invoice on Leave** (`/invoice-on-leave`). Se o aviso disser que ainda não há tarefa, carregue em **Create the daily task (16:00, after check-out)**.
2. Só se emite fatura para uma estadia com **check-out feito** no Little Hotelier. Se a sua equipa não faz o check-out dos hóspedes à mão antes das 16:00, use o cartão **Automatic check-out** e carregue em **Create the daily task (15:05)**. Fecha as saídas do dia no Little Hotelier, por isso fica desligado até o criar.
3. Encontre a reserva e ative a fatura automática (auto-invoice) para ela. Os filtros **Enrolled** e **Not enrolled** mostram em que ponto está cada estadia. Pode inscrever um hóspede que ainda está na casa: a fatura sai na primeira execução depois de ele partir.
4. Depois do check-out, a tarefa diária pede ao Little Hotelier que gere a fatura, e o Little Hotelier envia-a por e-mail a partir do seu próprio modelo e remetente.
5. Consulte **Pending invoices to send** (`/invoice-on-leave/scheduled`) para ver o que está em fila, a vencer hoje, em atraso ou já faturado.

::screenshot{src="/images/blog/demo/en/invoice-at-checkout-full.webp" alt="Página Invoice on leave completa: um aviso vermelho de que nada faz o check-out dos hóspedes automaticamente, o cartão Automatic check-out (ainda não configurado) com Create the daily task (15:05), a tarefa Automatic invoicing at check-out em execução, a ligação Pending invoices to send e nove reservas, cada uma com um botão Auto-invoice" caption="Crie a tarefa de check-out se precisar dela e depois marque a estadia com Auto-invoice. A fatura é criada e enviada por e-mail depois de o hóspede fazer o check-out." path="/invoice-on-leave" width="1440" height="1526"}
::

Precisa dela já? Cada linha tem uma ação "process now" para emitir essa fatura de imediato.

### O que a mantém segura

- **A marca vive no Little Hotelier.** A inscrição fica guardada como etiqueta nas notas da reserva no Little Hotelier, para a sua equipa a ver lá.
- **Sem envios em duplicado.** Uma segunda etiqueta marca "fatura enviada", escrita só depois de o Little Hotelier aceitar o e-mail. Estadias já faturadas não podem voltar a ser inscritas.
- **A mesma verificação prévia da faturação em massa.** Uma fatura de empresa sem número fiscal ou morada fiscal, ou com um número fiscal mal formado, é recusada em vez de enviada a meio.
- **Recuperação e limites.** A tarefa diária recua 8 dias para recuperar execuções falhadas e lê até 100 check-outs por execução. Uma estadia passada sem e-mail do hóspede é comunicada uma vez, não tentada de novo todos os dias.

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools não tem afiliação nem aval da SiteMinder ou do Little Hotelier. Liga-se com o login do Little Hotelier do seu próprio hotel, e a fatura é um documento do próprio Little Hotelier.
::

::demo-cta{path="/invoice-on-leave"}
::

## Em que idioma sai a fatura?

Defina-o uma vez em **Settings > Invoices** (`/settings/invoices`): **From the guest's country** (o país da morada do hóspede escolhe o idioma) ou **Always the same language**. Um país em falta ou sem correspondência usa o seu **Fallback language**.

## O hóspede precisa dela em nome de uma empresa, ou depois de partir

**Antes de a fatura existir:** acrescente o nome da empresa, o número fiscal e a morada fiscal aos dados do hóspede da reserva no Little Hotelier. O Hotelier Tools recusa emitir uma fatura de empresa enquanto o número fiscal ou a morada fiscal estiverem em falta ou mal formados, para que nada feito a meio chegue ao hóspede.

**Depois de emitida:** edite os dados no Little Hotelier e use **Invoice is outdated** para gerar uma fatura corrigida. Se já a tinha marcado como final, clique em **Cancel invoice** e depois em **Generate invoice** outra vez ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). Em Espanha com VeriFactu, uma fatura finalizada altera-se através de **Rectify invoice** ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)).

Uma ligação privada onde os hóspedes preenchem os dados da sua própria empresa está em desenvolvimento e ainda não está disponível.

Se os pedidos de fatura chegam por mensagens do Booking.com, veja [como gerir as mensagens de hóspedes do Booking.com](/blog/booking-com-guest-messages).

## Como reenviar uma fatura?

Abra a reserva e use **Email > Invoice** outra vez. Um conselho de timing: depois de uma fatura ser **marcada como final**, o Little Hotelier deixa de oferecer Print ou Email para ela. Envie-a primeiro e finalize depois, ou descarregue / baixe o PDF mais tarde a partir do relatório de faturas (Invoice report).

::callout{type="tip" title="Hóspedes que pagam por transferência bancária"}
O script [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button) acrescenta um botão que envia por e-mail os seus dados bancários a partir da reserva. Ainda não está publicado e é configurado a pedido para cada propriedade.
::

## Resumo

- É o alojamento, não o Booking.com, que tem de emitir a fatura ao hóspede.
- No Little Hotelier: **Invoices > Generate invoice** e depois **Email > Invoice**, de preferência depois do check-out.
- O **Invoice on Leave** do Hotelier Tools envia-a por e-mail automaticamente depois do check-out, a partir do seu próprio modelo do Little Hotelier, com verificações de dados da empresa e de duplicados.
- No fim do trimestre, [descarregue todas as suas faturas de uma vez](/blog/download-all-little-hotelier-invoices). Tudo o que a funcionalidade de faturação faz está na [página Invoicing](/tools/bot/invoicing).
