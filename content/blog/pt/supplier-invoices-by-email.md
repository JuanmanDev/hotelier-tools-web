---
title: "Como receber automaticamente as faturas de fornecedores por e-mail (e entregar ao contabilista um trimestre arrumado)"
seoTitle: "Receber faturas de fornecedores por e-mail automaticamente"
description: "Receba as faturas num só endereço ou leia-as da sua caixa de correio, reveja cada uma, apanhe duplicados e IBAN alterados e exporte o trimestre."
date: 2026-10-31
category: invoicing
tags: [faturas de fornecedores, contas a pagar, e-mail, contabilista, iva, facturae]
keywords: [receber faturas de fornecedores automaticamente, extrair faturas de anexos de e-mail, e-mail para faturas de fornecedores, faturas de compras hotel contabilista, quanto tempo guardar faturas, durante quantos anos guardar faturas, como nomear ficheiros de faturas, detetar faturas duplicadas de fornecedores, fornecedor mudou iban fraude, exportar faturas recebidas para o contabilista]
feature: invoicing
demoPath: /received-invoices
cover: /images/blog/demo/en/supplier-invoices-review-iban-warning.webp
coverAlt: "Fatura recebida da Electra Norte, To review, de 218,70 €: botões Confirm, Mark as duplicate e Reject, uma caixa vermelha Check this invoice before you confirm it a dizer que o IBAN não é o das faturas anteriores deste fornecedor, uma caixa I checked this supplier through a known channel por marcar com um botão Acknowledge, e os dados do e-mail com remetente, assunto em espanhol, caixa de correio reservas@example.com, Sender check Not available e Email risk Medium risk"
faq:
  - q: "Como posso receber automaticamente as faturas de fornecedores por e-mail?"
    a: "Ou dá aos fornecedores um endereço que só recebe faturas, ou deixa um software ler a caixa de correio para onde eles já escrevem. No Hotelier Tools pode fazer as duas coisas: cada propriedade tem um endereço de faturas privado, e as caixas de correio conectadas podem ser lidas todos os dias, só em modo de leitura, à procura de anexos de faturas."
  - q: "Durante quanto tempo tenho de guardar as faturas de fornecedores em Espanha?"
    a: "Pelo menos quatro anos para efeitos fiscais, o prazo de prescrição da Ley General Tributaria, como explica a Agencia Tributaria. O Código de Comercio pede às empresas que guardem a documentação durante seis anos, por isso muitos contabilistas aconselham guardar tudo seis anos."
  - q: "Posso guardar as faturas de fornecedores só em PDF ou digitalizadas?"
    a: "Em Espanha, sim, desde que o método garanta a autenticidade da origem, a integridade do conteúdo e a legibilidade, e que a administração fiscal lhes possa aceder sem demora. Guarde o ficheiro original que recebeu, não uma cópia escrita de novo."
  - q: "Como identifico uma fatura falsa de um fornecedor?"
    a: "Desconfie quando a conta bancária é diferente da das faturas anteriores, o domínio do remetente mudou ou o e-mail falha a verificação de autenticidade. O Hotelier Tools assinala estes casos e bloqueia a confirmação e o pagamento até uma pessoa reconhecer o aviso depois de ligar ao fornecedor para um número que já conhecia."
  - q: "É a IA que decide o que entra na minha contabilidade?"
    a: "Não. Todas as faturas começam como To review. As faturas eletrónicas são lidas com exatidão e a IA lê os PDF e as fotografias, mas só uma pessoa pode confirmar uma fatura ou marcá-la como paga, e o que uma pessoa corrige nunca é substituído por uma nova leitura."
  - q: "O Hotelier Tools faz parte do Little Hotelier ou do meu software de contabilidade?"
    a: "Não. O Hotelier Tools é independente: não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. A exportação de faturas recebidas é um CSV e um ZIP genéricos para o seu contabilista, não um registo fiscal certificado."
---

Para receber automaticamente as faturas de fornecedores, envie-as todas para um só sítio e deixe um software retirar os ficheiros / arquivos: dê aos fornecedores um endereço dedicado às faturas, ou deixe uma ferramenta ler a caixa de correio para onde eles já escrevem. No Hotelier Tools, os fornecedores podem enviar e-mails para um endereço privado da sua propriedade, ou a sua caixa de correio conectada é lida todos os dias, só em modo de leitura. As faturas eletrónicas são lidas com exatidão, a IA lê os PDF e as fotografias, e uma pessoa revê cada fatura antes de ela entrar no trimestre que exporta para o seu contabilista / contador.

## Por que razão o seu contabilista quer as faturas de fornecedores organizadas

As faturas de fornecedores são a outra metade da contabilidade. O seu contabilista precisa delas para:

- **Deduzir o IVA suportado.** Em Espanha, o IVA que pagou na lavandaria, na eletricidade ou na comissão das OTA é deduzido no [modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml) trimestral, e só com uma fatura válida por trás.
- **Manter o registo das faturas recebidas.** As empresas espanholas mantêm um "libro registro de facturas recibidas": uma linha por fatura com data, número, NIF do fornecedor, base, taxa e imposto.
- **Registar as despesas para o imposto sobre o rendimento**, e confirmar que o que foi pago corresponde ao que foi faturado.

O problema habitual não é o trabalho do contabilista. É a caixa de sapatos: faturas espalhadas por três caixas de correio, uma fotografia no WhatsApp, um portal de fornecedor e uma que nunca chegou.

## Durante quanto tempo tem de guardar as faturas de fornecedores?

Depende do país. Na UE, o artigo 247.º da Diretiva do IVA deixa cada Estado-membro fixar o prazo ([texto do artigo 247.º](https://www.legislation.gov.uk/eudr/2006/112/article/247/adopted)). Para Espanha:

| Regra | Prazo | Fonte |
|---|---|---|
| Fiscal (faturas recebidas e cópias das emitidas) | 4 anos, o prazo de prescrição da Ley General Tributaria | [Agencia Tributaria](https://sede.agenciatributaria.gob.es/Sede/iva/facturacion-registro/facturacion-iva/obligacion-conservar-facturas.html) |
| Faturas ligadas ao IVA de bens com período de regularização | Esse período mais os 4 anos seguintes | Mesma página |
| Comercial (livros, correspondência, documentação) | 6 anos a partir do último lançamento | [Código de Comercio, art. 30](https://www.boe.es/buscar/act.php?id=BOE-A-1885-6627#a30) |

A Agencia Tributaria também diz como: as faturas guardam-se "com o seu conteúdo original, por ordem", em papel ou em formato eletrónico, desde que o método garanta a autenticidade da origem, a integridade do conteúdo e a legibilidade, e que a administração fiscal lhes possa aceder sem demora. Na prática: guarde o ficheiro que o fornecedor enviou, por ordem, e não apague nada que o seu contabilista já tenha lançado. Confirme o prazo do seu próprio país com o seu contabilista.

## Uma regra de nomes que poupa perguntas

Se arquiva as faturas à mão, dê a cada ficheiro o mesmo tipo de nome, para que uma pasta se ordene sozinha:

```text [naming.txt]
2026-10-12_Electra-Norte_EL-20261012.pdf
2026-10-03_Booking.com_BO-20261003.pdf
```

Primeiro a data (ano-mês-dia, para ordenar por data), depois o fornecedor e por fim o número da fatura. Tenha uma pasta por trimestre. Não mude o número do fornecedor: é com ele que o seu contabilista associa a fatura ao pagamento.

## A forma mais rápida: Received invoices no Hotelier Tools

**Received invoices** (faturas recebidas, `/received-invoices`) recolhe o que os seus fornecedores enviam, lê-o e deixa-o à sua espera até você o confirmar. Há quatro formas de entrada, e pode usá-las todas em conjunto:

| Forma de entrada | Ideal para | O que configura |
|---|---|---|
| **Endereço de faturas** | Fornecedores que podem enviar e-mail para qualquer endereço | Copie o endereço `inv-…` da sua propriedade e envie-lho |
| **A sua própria caixa de correio** | Fornecedores que já escrevem para o e-mail do hotel | Conecte-a em Messaging e depois ative **Read for invoices** |
| **Arrastar ou colar** | Faturas em papel, fotografias, descargas de portais | Nada: arraste os ficheiros para a página |
| **API REST** | Os seus próprios scripts | `POST /api/v1/received-invoices/upload` |

O mesmo ficheiro nunca entra duas vezes: chegue por onde chegar, um ficheiro que já lá está é reconhecido pelo conteúdo.

### Opção 1: dê aos fornecedores o seu endereço de faturas

1. Abra **Settings > Received invoices** (`/settings/received-invoices`), procure **Invoice address** e carregue em **Create the address**.
2. Carregue em **Copy** e envie-o aos seus fornecedores. Também pode reencaminhar para ele faturas que já tem.
3. Mantenha a tarefa **Read the hotel mailbox** ligada (recomenda-se a cada 5 minutos).

O endereço tem o aspeto `inv-7k2m9qx4hp@in.hotelier.tools`. Pertence só à sua propriedade e não precisa de palavra-passe / senha de nenhuma caixa de correio. Como funcionam estes endereços, e o que não são, está em [um endereço de e-mail do hotel para faturas e logins](/blog/hotel-email-address).

### Opção 2: leia a caixa de correio que os fornecedores já usam

1. Conecte a caixa de correio (Google, Microsoft ou qualquer conta IMAP) em **Messaging > Channels**.
2. Em **Received invoices**, abra o **Setup guide**. Tem quatro passos:
   - **Choose the mailboxes your suppliers write to**: escolha as caixas para onde os fornecedores escrevem e ative-as.
   - **Choose how far back to read**: **The past** N dias, meses ou anos, ou **Since the start of this** semana, mês, trimestre ou ano. No máximo 5 anos para trás.
   - **Read the mail you already have** com **Read the mail now**. As recuperações longas param ao fim de algum tempo e a leitura diária lê o resto.
   - **Read new mail every day**: a leitura agendada, recomendada às 06:20.
3. Em **Settings > Received invoices**, afine cada caixa de correio: **Folders to read**, **Always read mail from** (os endereços exatos dos seus fornecedores) e **Never read mail from**.

A leitura é só de leitura: nada é marcado como lido, movido nem apagado, e as pastas de Spam, Enviados, Lixo e Rascunhos nunca são lidas. Uma mensagem conta como fatura quando vem de um fornecedor conhecido, traz uma fatura eletrónica em anexo, menciona uma palavra de fatura ("invoice", "factura", "fattura"…) ou traz uma fotografia.

::screenshot{src="/images/blog/demo/en/supplier-invoices-mailbox-settings.webp" alt="Definições de Received invoices: o cartão Suggestions com Suggest invoices that have not arrived ligado e 24 meses de histórico, e o cartão Mailboxes com reservas@example.com conectado, Read for invoices ligado, INBOX como pasta a ler, uma primeira leitura de 120 dias para trás e as listas Never read mail from e Always read mail from vazias" caption="Cada caixa de correio só é lida depois de a ativar, e só para faturas." path="/settings/received-invoices"}
::

### Opção 3: largue os ficheiros

Arraste para a página PDF, fotografias (PNG, JPEG, WebP) e ficheiros XML de faturas eletrónicas, ou carregue em **Choose files**. Até 20 ficheiros de cada vez, 15 MB cada um. Também pode colar uma fotografia. As fotografias HEIC do iPhone ainda não podem ser lidas: exporte-as primeiro como JPEG.

## Como é lida cada fatura

- **As faturas eletrónicas são lidas com exatidão.** Os ficheiros XML Facturae, UBL e CII são interpretados por código, sem IA e sem custo. Um ficheiro Facturae com várias faturas dá várias linhas. Uma assinatura aparece como presente, não como verificada.
- **A IA lê os PDF e as fotografias.** PDF até 10 MB e seis páginas, fotografias até 5 MB. Cada leitura usa a sua quota mensal de IA, a mesma das respostas aos hóspedes, e mostra os tokens e o custo na fatura. Por padrão, a IA lê no máximo 40 faturas por dia; pode alterar isso.
- **Os anexos de e-mail esperam por você por padrão.** **Read email attachments automatically** está desligado até o ativar, e o correio com avisos de fraude nunca é lido por uma máquina.

Cada campo mostra de onde veio o valor (**E-invoice**, **AI** ou **You**). O que corrige nunca é substituído por uma nova leitura.

## Compare com o original e depois confirme

Todas as faturas começam como **To review**. Abra-a, compare os campos com o original ao lado e carregue em **Confirm** (ou **Confirm and next** para avançar pela fila). Mais tarde, **Mark as paid** com a data. Algo está errado? **Mark as duplicate**, ou **Reject** com um motivo: **Not for this property**, **Not an invoice**, **Spam or fraud** ou **Other**. Um ficheiro rejeitado nunca é trazido de volta pela leitura da caixa de correio.

::screenshot{src="/images/blog/demo/en/supplier-invoices-review-iban-warning.webp" alt="Fatura recebida da Electra Norte, To review, de 218,70 €: botões Confirm, Mark as duplicate e Reject, uma caixa vermelha Check this invoice before you confirm it a dizer que o IBAN não é o das faturas anteriores deste fornecedor, uma caixa I checked this supplier through a known channel por marcar com um botão Acknowledge, e os dados do e-mail com remetente, assunto em espanhol, caixa de correio reservas@example.com, Sender check Not available e Email risk Medium risk" caption="Uma conta bancária alterada bloqueia o Confirm até alguém ter confirmado com o fornecedor por telefone." path="/received-invoices"}
::

### Os avisos que travam um pagamento indevido

A fraude de fornecedores mais comum é simples: uma fatura com bom aspeto, com uma conta bancária nova. O Hotelier Tools compara cada fatura com o histórico do fornecedor e com o e-mail em que chegou:

- **A conta bancária (IBAN) não é a das faturas anteriores deste fornecedor.** Só são guardados os últimos quatro dígitos.
- **O endereço do remetente falhou a verificação de autenticidade (DMARC).** A página da fatura mostra uma linha **Sender check** (**Passed**, **Failed** ou **Not available**), lida no cabeçalho do próprio servidor de correio, nunca na linha From.
- **O e-mail em que chegou tem avisos de fraude**, a fatura está dirigida ao NIF de outra empresa, o emissor é a sua própria propriedade ou o PDF contém scripts.

Qualquer um destes bloqueia **Confirm** e **Mark as paid** até uma pessoa marcar **I checked this supplier through a known channel** e carregar em **Acknowledge**. Ligue ao fornecedor para um número que já tinha, nunca para um que vem no e-mail. Nenhuma chave de API nem ferramenta de IA pode reconhecer o aviso por você.

Os avisos mais leves não bloqueiam, mas aparecem: os valores não batem certo, o NIF falha o dígito de controlo, o fornecedor costuma escrever de outro domínio.

### Duplicados

Uma fatura é assinalada como possível duplicado quando outra tem o mesmo NIF de fornecedor e o mesmo número de fatura, ou o mesmo fornecedor e o mesmo total com uma data de emissão a menos de três dias. Decide você: **Mark as duplicate** e escolha o original; o duplicado fica na lista, fora dos totais.

### O que nunca pode fazer

Apagar uma fatura confirmada ou paga. Fica guardada (quatro anos em Espanha) e só pode ser rejeitada, o que a deixa fora dos totais e da exportação.

## Exporte o trimestre para o seu contabilista

1. Em **Received invoices**, a lista está agrupada por trimestres naturais (T1 = janeiro a março, como no modelo 303) por padrão. Pode agrupar por mês, ano, fornecedor ou categoria, e definir o mês em que começa o seu ano fiscal.
2. Carregue em **Export for accountant** num trimestre.
3. Escolha **Confirmed and paid invoices** (o padrão) ou **Also the ones waiting for review**, e **ZIP with the originals and the CSV** ou **CSV only**.
4. Se quiser, marque **List the invoices that have not arrived**.

O ZIP contém um ficheiro por fatura, **com o nome por data, fornecedor e número**, um CSV com a estrutura do libro registro de facturas recibidas (uma linha por linha de imposto) e um README. Até 500 ficheiros por exportação.

::screenshot{src="/images/blog/demo/en/supplier-invoices-export-dialog.webp" alt="Janela Export for the accountant para o período 2026: Confirmed and paid invoices selecionado, ZIP with the originals and the CSV selecionado, List the invoices that have not arrived por marcar, 29 faturas a exportar e um aviso de que 3 faturas à espera de revisão não estão incluídas" caption="Um trimestre, um ZIP: os originais com o nome mudado e um CSV ao estilo do registo." path="/received-invoices"}
::

Seja honesto com o seu contabilista numa coisa: o CSV segue a estrutura do registo, mas **não está certificado** pela administração fiscal. É ele que decide o que entra na contabilidade.

### Faturas que lhe podem estar a faltar

Para fornecedores que faturam com regularidade (lavandaria mensal, eletricidade bimestral, uma gestoria trimestral), **Invoices you may be missing** diz "Expected from Lavandería Sol SL around October 1" quando a seguinte ainda não chegou. São estimativas, não dívidas. **Not this time** esconde um período; **Stop expecting** esconde o fornecedor.

::screenshot{src="/images/blog/demo/en/supplier-invoices-quarter-list.webp" alt="Página Received invoices: caixas de correio lidas pela última vez com 2 importadas, a zona Drop invoices here com Read PDFs and photos with AI ligado, blocos Spent 25 852,14 €, VAT 796,87 €, IGIC 0,00 €, 3 por rever e 1 por pagar, Invoices you may be missing com a Lavandería Sol SL atrasada desde 1 de outubro e a Electra Norte chegada e por rever, e a tarefa Scan the mailboxes em pausa" caption="Veja o que gastou, o que falta rever e que fatura habitual ainda não chegou." path="/received-invoices"}
::

## Quem pode fazer o quê

Dê ao seu contabilista o seu próprio login em **Settings > Team & roles** (`/settings/team`). A função **accountant** incluída pode ver, editar e mandar ler faturas, mas não ler caixas de correio. Ler o correio da empresa e gastar créditos de IA são permissões separadas que concede de propósito.

O assistente também ajuda: "Que faturas de fornecedores me faltam no T3?" ou "Quanto IVA suportado tenho até agora neste trimestre?" são respondidas com os mesmos dados, e tudo o que altere uma fatura espera pela sua aprovação.

::demo-cta{path="/received-invoices"}
::

Received invoices faz parte da [funcionalidade de faturação](/tools/bot/invoicing). O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. As faturas recebidas ficam no Hotelier Tools; nada é escrito no Little Hotelier.
::

Veja também: [descarregar / baixar todas as faturas do Little Hotelier](/blog/download-all-little-hotelier-invoices), [um endereço de e-mail do hotel para faturas](/blog/hotel-email-address), [enviar a fatura ao hóspede no check-out](/blog/send-invoice-to-guest-at-checkout).

## Resumo

- Envie as faturas de fornecedores para um só sítio: um endereço de faturas privado, a sua própria caixa de correio lida todos os dias, ou arrastar e largar.
- Guarde-as: em Espanha, pelo menos quatro anos para efeitos fiscais e seis pelo Código de Comercio, como ficheiros originais, por ordem.
- As faturas eletrónicas são lidas com exatidão; a IA lê os PDF e as fotografias; uma pessoa confirma cada uma.
- Um IBAN alterado, uma verificação de remetente falhada ou uma pontuação de fraude bloqueiam o pagamento até alguém confirmar com o fornecedor.
- Exporte cada trimestre como um ZIP de originais com o nome mudado e um CSV ao estilo do registo para o seu contabilista.
