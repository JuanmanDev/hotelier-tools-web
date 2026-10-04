---
title: "Como descarregar / baixar todas as faturas do Little Hotelier de uma vez (para a declaração trimestral)"
seoTitle: "Descarregar / baixar todas as faturas do Little Hotelier"
description: "O Little Hotelier junta num ZIP as faturas que já existem. Veja como, como criar as que faltam e como enviar ao contabilista um ZIP e um CSV por trimestre."
date: 2026-10-03
category: invoicing
tags: [invoices, accounting, little hotelier, quarterly tax, zip]
keywords: [baixar faturas little hotelier, descarregar faturas little hotelier, fatura little hotelier, nota fiscal little hotelier, exportar faturas little hotelier, little hotelier xero]
feature: invoicing
demoPath: /invoices
cover: /images/blog/demo/en/invoices-by-quarter.webp
coverAlt: "Página Invoices do Hotelier Tools com 66 faturas no total, Q4 e Q3 de 2026, cada um com os botões Preview CSV e ZIP, e setembro de 2026 aberto numa tabela com números de fatura, hóspedes, números fiscais, datas de check-out e totais"
featured: true
faq:
  - q: "O Little Hotelier consegue descarregar todas as minhas faturas em PDF de uma só vez?"
    a: "Sim, as faturas que já existem. Vá a Front Desk > Reports > Invoices, filtre as datas, clique em Download invoice PDFs e depois em Download zip. Antes, o Little Hotelier pede uma confirmação com autenticação multifator."
  - q: "O Little Hotelier sincroniza automaticamente as faturas com o Xero ou o QuickBooks?"
    a: "Não. O relatório Accounting exporta as faturas marcadas como finais para um ficheiro CSV pensado para importar no Xero e no QuickBooks, e é você quem importa esse ficheiro. Só entram as faturas finalizadas."
  - q: "O Hotelier Tools muda a numeração ou o modelo das minhas faturas?"
    a: "Não. O Hotelier Tools pede ao Little Hotelier que gere cada fatura, por isso é um documento do próprio Little Hotelier, com a sua numeração, o seu logo e o layout definido em Customise invoices."
  - q: "O que acontece às faturas anuladas na minha exportação?"
    a: "No Little Hotelier, uma fatura finalizada que é anulada passa para Older invoices com o estado Cancelled, e os seus dados continuam a aparecer nas exportações. Avise o seu contabilista para que a receita não seja contada duas vezes."
  - q: "Quanto custa o Hotelier Tools?"
    a: "É gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança. Os hotéis que começarem antes de 31 de dezembro de 2026 pagam depois 50 € por hotel por mês durante 2027. Não é preciso cartão para começar."
---

Sim. O Little Hotelier consegue pôr num só ZIP todas as faturas que **já existem**: abra **Front Desk > Reports > Invoices**, filtre o trimestre e clique em **Download invoice PDFs**. O que não faz é criar as faturas que ninguém gerou, nem avisar das que ainda não deviam ser emitidas. Para isso, o Hotelier Tools gera as faturas em falta numa só execução, recusa as arriscadas e entrega o trimestre num ZIP de PDF, com um resumo em CSV.

## O Little Hotelier exporta todas as faturas de forma nativa?

Sim. Em outubro de 2026, o centro de ajuda do Little Hotelier descreve três formas de exportar faturas / notas fiscais. A que lhe serve depende do que o seu contabilista / contador pede.

| Método | O que recebe | Limitação |
|---|---|---|
| Relatório Invoice | Um ZIP de PDF de faturas e uma lista em CSV | Só faturas que já existem |
| Relatório Accounting | Um CSV pensado para importar no Xero e no QuickBooks | Só faturas marcadas como finais |
| Uma reserva de cada vez | Um PDF (Print ou Save as PDF) | Lento para um trimestre inteiro |

### O relatório Invoice (PDF num ZIP)

1. Vá a **My Apps > Front Desk > Reports** e clique em **Invoices**.
2. Escolha o intervalo de datas do seu trimestre. Se quiser, filtre por **Invoice status** e **Payment status** e clique em **Apply**.
3. Clique em **Download invoice PDFs** e depois em **Download zip**.
4. Confirme o pedido de autenticação multifator. O download do ZIP começa.

No mesmo relatório, **Export** gera um CSV em vez do ZIP. Fonte: [How to run an Invoice report](https://helpcentre.littlehotelier.com/en/articles/14390555-how-to-run-an-invoice-report).

### O relatório Accounting (CSV para Xero ou QuickBooks)

Vá a **My Apps > Front Desk > Reports > Accounting**, escolha **Yesterday**, **Last 7 days** ou datas personalizadas e clique em **Export**. Recebe um CSV (ou um ZIP, nas exportações grandes) com contacto, endereço, número de fatura, datas, valores, conta e códigos de imposto.

Dois limites: só são exportadas as faturas **marcadas como finais**, e o ficheiro / arquivo serve para importar à mão. Não é uma sincronização em tempo real. Os códigos de conta são definidos uma única vez em **Front Desk > Setup > Accounting Integration**. Fontes: [Accounting: export invoices marked as final](https://helpcentre.littlehotelier.com/en/articles/8672956-accounting-export-invoices-marked-as-final) e [Accounting Integration: setup](https://helpcentre.littlehotelier.com/en/articles/8925025-accounting-integration-setup).

### Uma a uma

Abra a reserva, clique em **Print**, escolha **Invoice** e selecione **Save as PDF** na janela de impressão ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice)). Se faz isto com frequência, o script gratuito [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) coloca um link de impressão direto na reserva.

## O que a exportação nativa não faz

Descarregar é a parte fácil. Os problemas do trimestre costumam surgir antes:

- **Faturas em falta.** O ZIP só tem as faturas que alguém gerou. O centro de ajuda descreve como criá-las uma reserva de cada vez (separador / aba **Invoices** > **Generate invoice**), por isso uma estadia em que ninguém clicou simplesmente não aparece.
- **Duplicados.** Cada pedido de geração cria um documento novo no Little Hotelier, por isso voltar a gerar uma estadia pode deixar duas faturas onde o seu contabilista espera uma.
- **Faturas antecipadas.** Uma fatura emitida antes de o hóspede fazer check-out fica desatualizada assim que se acrescenta um extra ou um pagamento, e corrigi-la implica uma fatura corrigida, uma nota de crédito ou, em Espanha, uma retificação.
- **Finalização.** A exportação contabilística precisa de cada fatura marcada como final, e o centro de ajuda descreve fazê-lo reserva a reserva.

## Como descarregar um trimestre inteiro num ZIP e num CSV (a forma mais rápida)

O Hotelier Tools é um dashboard que se conecta ao Little Hotelier com o seu próprio login. A página **Invoice Download** (descarregar faturas) cria as faturas de um intervalo de datas numa só execução e entrega o resultado por trimestre.

1. Crie uma conta em [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) e conecte o Little Hotelier em **Credentials**. O seu login fica guardado encriptado.
2. No menu, abra **Invoice Download** (`/invoices`).
3. Clique em **Generate invoices** e escolha as datas, por exemplo de 1 de julho a 30 de setembro.
4. A app lê essas reservas do Little Hotelier e cria faturas para as estadias que reúnem as condições. O que não puder faturar vai para **Errors** com o motivo. Nada é ignorado em silêncio.
5. As faturas aparecem agrupadas por trimestre e mês. No trimestre, clique em **ZIP** para descarregar todos os PDF, ou em **Preview CSV** para ver primeiro o resumo.

::screenshot{src="/images/blog/demo/en/invoices-quarter-zip-downloaded.webp" alt="Página Invoices agrupada por trimestre, com os botões Preview CSV e ZIP em Q4 e Q3 de 2026, a tabela de faturas de setembro de 2026 aberta e um aviso Pack downloaded que confirma que o pacote de faturas de Q3 de 2026 foi descarregado" caption="Cada trimestre tem o seu ZIP de PDF e um resumo em CSV. Um clique em ZIP descarrega o trimestre inteiro." path="/invoices"}
::

As faturas são documentos do próprio Little Hotelier. O Hotelier Tools pede ao Little Hotelier que gere cada uma, por isso a sua numeração, o logo e o layout definidos em **Customise invoices** ficam exatamente como estão.

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools é independente: não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel.
::

## Verificações antes de faturar: número fiscal em falta, faturas antecipadas e duplicados

Antes de pedir uma fatura ao Little Hotelier, o Hotelier Tools faz uma verificação prévia. Recusa faturar uma estadia quando:

- o hóspede **ainda não fez check-out**, porque os valores não são finais
- é uma **fatura de empresa sem número de identificação fiscal** ou sem endereço fiscal
- o **número fiscal está mal formado**
- a estadia **já foi faturada**, o que evita duplicados

Um hóspede particular não precisa de dados fiscais, por isso, para ele, a falta de documento de identificação é apenas um aviso.

É a diferença entre um ZIP em que o seu contabilista pode confiar e um ZIP que ele devolve cheio de perguntas.

## O que acontece às reservas que não podem ser faturadas?

Vão para **Errors** (`/invoices/errors`), uma linha por reserva com o motivo.

1. Escolha o intervalo de datas no topo.
2. Filtre por tipo de problema: **Missing DNI**, **Pending payment**, **Not checked out**, **Download failed** e outros.
3. Corrija a reserva no Little Hotelier: acrescente o número fiscal, lance o pagamento ou faça o check-out do hóspede.
4. De volta a **Errors**, verifique-a de novo ou marque-a como resolvida. **Copy CSV** copia a lista para a enviar a um colega.

::screenshot{src="/images/blog/demo/en/invoice-failures.webp" alt="Página Errors and issues de 1 de julho a 30 de setembro de 2026 com Copy CSV, filtros por tipo de problema como Missing DNI, Pending payment, Not checked out e Download failed, e uma tabela de reservas com o seu ID de fatura, datas da estadia, total, selo do problema, motivo (em espanhol) e ações" caption="Todas as reservas que uma execução não conseguiu faturar, com o motivo e uma forma de tentar de novo." path="/invoices/errors"}
::

Se uma estadia estiver bloqueada por um saldo de arredondamento de um ou dois cêntimos / centavos, a opção cent-fix em **Settings > Invoices** pode fechar esses saldos minúsculos.

::demo-cta{path="/invoices"}
::

## Em que idioma ficam as faturas?

Você escolhe em **Settings > Invoices** (`/settings/invoices`):

- **From the guest's country** (pelo país do hóspede): cada fatura usa o idioma do país do endereço do hóspede. Se o país faltar ou não tiver correspondência, usa o seu idioma de recurso.
- **Always the same language** (sempre o mesmo idioma): todas as faturas num só idioma, seja quem for o hóspede.

Escolha o **Fallback language** (idioma de recurso) e clique em **Save changes**.

## O que enviar ao contabilista em cada trimestre

Uma rotina curta que evita a maior parte dos e-mails com perguntas:

1. **Processe o trimestre** alguns dias depois de ele terminar, para que os check-outs tardios já estejam fechados.
2. **Resolva a lista Errors** até restarem só as estadias que realmente não precisam de fatura.
3. **Descarregue o ZIP e o CSV** e envie os dois.
4. **Revise a numeração das faturas** à procura de saltos ou repetições antes de enviar.
5. **Mencione as faturas anuladas.** No Little Hotelier, anular uma fatura finalizada move-a para **Older invoices** com o estado Cancelled, e os seus dados continuam a aparecer nas exportações ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). O seu contabilista precisa de saber, para que a receita não seja contada duas vezes.

Em Espanha, isto serve de base à declaração de IVA ([modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml)). Se usa o VeriFactu, é o próprio Little Hotelier que finaliza as faturas ao enviá-las à AEAT ([centro de ajuda](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)). O Hotelier Tools não tem uma funcionalidade VeriFactu própria, por isso mantenha esse passo no Little Hotelier. Em qualquer país com faturação eletrónica obrigatória, trate o ZIP como cópias para o seu arquivo e confirme as regras com o seu contabilista.

Os programadores / desenvolvedores também podem obter os PDF das faturas um a um através da [API REST do Hotelier Tools](/blog/little-hotelier-api). E se o seu contabilista também quiser os dados das reservas, veja [como exportar reservas para Excel](/blog/export-little-hotelier-reservations-excel).

## Resumo

- O relatório **Invoice** do Little Hotelier compacta em ZIP os PDF das faturas que já existem; o relatório **Accounting** exporta as faturas finalizadas como CSV para Xero ou QuickBooks.
- Nenhum deles cria faturas em falta nem evita duplicados e faturas antecipadas.
- O Hotelier Tools gera um intervalo de datas numa só execução, recusa faturas arriscadas, lista cada falha com o seu motivo e entrega-lhe um ZIP e um CSV por trimestre.
- Para evitar a acumulação logo na origem, [envie cada fatura automaticamente no check-out](/blog/send-invoice-to-guest-at-checkout). Veja tudo o que a funcionalidade de faturação faz na [página Invoicing](/tools/bot/invoicing).
