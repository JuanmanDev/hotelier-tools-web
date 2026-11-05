---
title: "Um endereço de e-mail do hotel para faturas de fornecedores e logins de portais: como funcionam os endereços só de receção"
seoTitle: "E-mail do hotel para faturas de fornecedores e logins"
description: "Dê ao seu hotel um endereço privado, só de receção, para as faturas de fornecedores e um por login de portal. Sem senha IMAP, nada partilhado entre hotéis."
date: 2026-11-01
category: operations
tags: [e-mail, faturas de fornecedores, little hotelier, booking.com, expedia, segurança]
keywords: [e-mail do hotel para faturas, e-mail dedicado para faturas de fornecedores, endereço de e-mail para faturas de compras, endereço de e-mail só de receção, e-mail separado para utilizador little hotelier, e-mail para utilizador da extranet booking.com, reencaminhar faturas para e-mail da contabilidade, caixa de correio de faturas do hotel]
feature: dashboard
demoPath: /credentials
cover: /images/blog/demo/en/supplier-invoices-mailbox-settings.webp
coverAlt: "Definições de Received invoices: o cartão Suggestions com Suggest invoices that have not arrived ligado e 24 meses de histórico, e o cartão Mailboxes com reservas@example.com conectado, Read for invoices ligado, INBOX como pasta a ler, uma primeira leitura de 120 dias para trás e as listas Never read mail from e Always read mail from vazias"
faq:
  - q: "O que é um endereço de e-mail só de receção para um hotel?"
    a: "Um endereço que só aceita correio e nunca envia nenhum. No Hotelier Tools, cada propriedade pode ter o seu, como inv-7k2m9qx4hp@in.hotelier.tools para as faturas de fornecedores. O que lá chega entra na conta dessa propriedade, sem palavra-passe IMAP nem início de sessão da Microsoft."
  - q: "Outro hotel pode ver o que é enviado para o meu endereço?"
    a: "Não. Cada endereço e cada login pertencem a uma única propriedade. O endereço é feito de caracteres aleatórios, por isso não revela o nome do seu hotel, e ninguém consegue adivinhar os seus outros endereços a partir dele."
  - q: "O in.hotelier.tools vai passar a ser o meu login do Little Hotelier ou do Booking.com?"
    a: "Não. O domínio do Hotelier Tools nunca passa a ser o seu login principal nem o seu e-mail de recuperação em lado nenhum. Um login de serviço é um utilizador extra que adiciona à sua própria extranet e que pode remover quando quiser."
  - q: "O que acontece ao correio enviado para um endereço que não existe?"
    a: "É descartado em silêncio, sem devolução. Assim ninguém consegue sondar que endereços existem. O correio para um endereço de faturas retirado continua a chegar durante 30 dias e depois também é descartado."
  - q: "Há um limite de correio que um endereço pode receber?"
    a: "Sim. Cada propriedade pode receber 100 mensagens por mês no servidor de correio do Hotelier Tools. Acima do limite, as mensagens ficam guardadas e são tratadas quando o mês recomeça ou quando o suporte aumenta o limite. A sua própria caixa de correio conectada nunca conta."
  - q: "O Hotelier Tools faz parte do Little Hotelier, do Booking.com ou da Expedia?"
    a: "Não. O Hotelier Tools é independente: não é afiliado à SiteMinder, ao Little Hotelier, ao Booking.com nem à Expedia, nem tem o aval deles. Conecta-se com os logins do seu próprio hotel."
---

O Hotelier Tools dá a cada propriedade os seus próprios endereços de e-mail só de receção no domínio `in.hotelier.tools`. Um é para as faturas de fornecedores: os fornecedores enviam para lá os seus PDF, fotografias e faturas eletrónicas, e cada uma espera em **Received invoices** (faturas recebidas) que você a reveja. Não precisa de palavra-passe / senha IMAP nem de início de sessão da Microsoft. Os outros são um por portal (Little Hotelier, Booking.com, Expedia), para um login dedicado do "Hotelier Tools como utilizador". Em novembro de 2026, os convites que chegam a esses endereços ficam para uma pessoa, não são aceites automaticamente.

## O que é um endereço de e-mail do hotel só de receção?

É um endereço que aceita correio e nunca envia nenhum. Cada um tem este aspeto:

```text
inv-7k2m9qx4hp@in.hotelier.tools
```

- **A primeira parte diz para que serve.** `inv` são as faturas de fornecedores; `lh`, `bk` e `ex` são os logins do Little Hotelier, do Booking.com e da Expedia. É esse código que decide para onde vai uma mensagem. O remetente e o conteúdo nunca decidem.
- **O resto é aleatório.** Dez caracteres, sem `0/o` nem `1/l/i` que se possam confundir. Não contém o nome nem o ID do seu hotel: só a base de dados do Hotelier Tools sabe a que propriedade pertence.
- **Cada finalidade tem o seu próprio código.** Se um fornecedor conhece o seu endereço de faturas, isso não lhe diz nada sobre os seus endereços de login.
- **Nada é enviado a partir dele.** O domínio publica uma regra que diz que nenhum servidor pode enviar correio em seu nome, por isso ninguém consegue enviar a partir do seu endereço.

## Por que não usar a caixa de correio do próprio hotel?

Pode, e muitos hotéis começam por aí. A boa prática habitual é um endereço separado só para faturas (por exemplo `faturas@oseuhotel.com`) e uma regra de reencaminhamento, para que o correio dos fornecedores não se perca no meio dos e-mails de reservas:

- **Gmail:** **Definições > Ver todas as definições > Encaminhamento e POP/IMAP**, adicione e verifique o endereço e depois crie um filtro que reencaminhe só o correio que corresponda ([ajuda da Google](https://support.google.com/mail/answer/10957)).
- **Outlook:** crie uma regra que reencaminhe as mensagens dos seus fornecedores ([suporte da Microsoft](https://support.microsoft.com/office/45aa9664-4911-4f96-9663-ece42816d746)).

O problema é o passo seguinte. Para que um software leia essa caixa de correio, tem de lhe dar uma palavra-passe IMAP ou aprovar um início de sessão da Microsoft ou da Google, e a partir daí ele vê a caixa inteira. Um endereço só de receção inverte isso: os fornecedores enviam para um endereço que só recebe faturas, e nada da sua própria caixa de correio é aberto.

O Hotelier Tools suporta as duas opções. Se preferir manter tudo na sua própria caixa de correio, conecte-a em **Messaging > Channels** e ative-a em **Settings > Received invoices**. É só de leitura: nada é marcado como lido, movido nem apagado (veja [receber as faturas de fornecedores por e-mail](/blog/supplier-invoices-by-email)).

::screenshot{src="/images/blog/demo/en/supplier-invoices-mailbox-settings.webp" alt="Definições de Received invoices: o cartão Suggestions com Suggest invoices that have not arrived ligado e 24 meses de histórico, e o cartão Mailboxes com reservas@example.com conectado, Read for invoices ligado, INBOX como pasta a ler, uma primeira leitura de 120 dias para trás e as listas Never read mail from e Always read mail from vazias" caption="A outra via: a sua própria caixa de correio conectada, lida só para faturas. O endereço de faturas não precisa de caixa de correio nenhuma." path="/settings/received-invoices"}
::

## Há alguma coisa partilhada entre hotéis?

Não. Cada endereço e cada login pertencem a uma única propriedade:

- Não existe nenhum login do Hotelier Tools que veja as extranets de dois hotéis. Um login roubado ou uma conta bloqueada afetam só um hotel.
- **O nosso domínio nunca passa a ser o seu login principal nem o seu e-mail de recuperação em lado nenhum.** Se o nosso correio fosse comprometido, ou se deixasse de usar o Hotelier Tools, não perderia o acesso à sua própria extranet.
- Cada servidor (instalação) tem o seu próprio domínio e a sua própria caixa de correio. O correio nunca passa da base de dados de um servidor para a de outro.

## Como configurar o endereço de faturas de fornecedores

1. Abra **Settings > Received invoices** (`/settings/received-invoices`) e procure o cartão **Invoice address**.
2. Carregue em **Create the address**. Recebe um endereço para a propriedade, feito de caracteres aleatórios.
3. Carregue em **Copy** e envie-o aos seus fornecedores: "Por favor, enviem as vossas faturas para este endereço." A lista **Received invoices** (`/received-invoices`) mostra o mesmo endereço em **Suppliers can email invoices to**.
4. Confirme que a tarefa **Read the hotel mailbox** está ligada. É ela que traz o que chega ao endereço; a cada 5 minutos é o horário recomendado.
5. Acompanhe **Recent mail** no mesmo cartão: cada mensagem mostra o remetente, os ficheiros / arquivos e o que lhe aconteceu.

Também pode reencaminhar para o endereço faturas que já tem. O Hotelier Tools encaminha pelo endereço a que a mensagem foi entregue, por isso uma mensagem reencaminhada ou em BCC chega na mesma à propriedade certa. Se guardou um e-mail como ficheiro, **Add an email by hand** aceita um `.eml` e faz as mesmas verificações.

Precisa de um endereço novo, por exemplo depois de uma vaga de spam? Carregue em **New address**. O antigo continua a entregar durante 30 dias, com uma nota em cada mensagem a dizer que chegou a um endereço retirado, e depois deixa de funcionar.

## O que acontece ao correio enviado para o endereço de faturas?

Cada mensagem é tratada como não fiável:

- **Primeiro, a verificação de fraude.** Uma mensagem classificada como de alto risco fica retida para uma pessoa, nunca é importada, e o original é guardado.
- **A verificação do remetente é nossa.** Se o domínio do remetente passou a verificação de autenticidade (DMARC) é lido no cabeçalho que o nosso próprio servidor de correio acrescenta, nunca na linha **From**. Um fornecedor cuja verificação falhe recebe um aviso que uma pessoa tem de reconhecer antes de a fatura poder ser confirmada ou paga.
- **Os anexos passam pela importação normal.** PDF, fotografias (PNG, JPEG, WebP) e faturas eletrónicas (Facturae, UBL, CII) são adicionados a **Received invoices**. Cada um começa como **To review**: nada é confirmado nem pago sozinho.
- **Nunca duas vezes.** Um ficheiro que já chegou pela sua própria caixa de correio, ou à mão, é reconhecido pelo conteúdo e não volta a ser adicionado.
- **Tamanho e plano.** Uma mensagem com mais de 25 MB não é guardada. Num plano sem faturação, o correio para o endereço fica guardado e retido, e nada é lido por IA.

O correio enviado para um endereço que não existe é descartado em silêncio, sem devolução. Ninguém consegue sondar que endereços são reais.

## Logins de serviço: um endereço por portal

A segunda utilização são os logins. Em vez de dar ao Hotelier Tools a sua própria palavra-passe do Little Hotelier, do Booking.com ou da Expedia, adiciona um novo utilizador / usuário à sua extranet com um endereço privado, e esse utilizador é o Hotelier Tools, só para a sua propriedade. Você escolhe as permissões e pode removê-lo com um clique.

| Portal | Endereço | Onde está |
|---|---|---|
| Little Hotelier | `lh-…@in.hotelier.tools` | `/credentials/hotelier-advanced` |
| Extranet do Booking.com | `bk-…@in.hotelier.tools` | `/credentials/booking-extranet` |
| Expedia Partner Central | `ex-…@in.hotelier.tools` | `/credentials/expedia-extranet` |

Cada uma dessas páginas tem um cartão como **Hotelier Tools as a user in Little Hotelier**: introduz o número da propriedade no próprio portal, carrega em **Get the login address** e convida esse endereço na sua extranet.

Convém ser claro sobre o ponto em que isto está, em novembro de 2026:

- **O que é automático:** o endereço, a verificação de que uma mensagem vem mesmo do domínio do próprio portal, e as regras de segurança. Um alerta de segurança ("New sign-in", "Password changed") nunca é clicado: é reencaminhado para o proprietário da propriedade. Uma reposição de palavra-passe que ninguém pediu nunca é seguida, e o proprietário é avisado.
- **O que hoje faz uma pessoa:** ainda não foi capturado e lido nenhum convite de nenhum portal, por isso o Hotelier Tools não consegue aceitar um sozinho. Todas as mensagens para um endereço de login ficam **retidas para uma pessoa**, e o cartão diz isso. Até isso mudar, conecte-se com o formulário mais abaixo na mesma página. No Little Hotelier, isso significa colar o link de ativação do novo utilizador (veja [como adicionar um utilizador no Little Hotelier](/blog/add-user-little-hotelier)).

Quando estiver pronto, um convite só será aceite se for para o número de propriedade que declarou, para que um endereço divulgado não consiga trazer a propriedade de um desconhecido para a sua conta.

Prefere o seu próprio endereço? A opção **Where the portal writes to this login** do cartão permite que um login use **Your own mailbox**, uma das suas caixas de correio conectadas. Só são lidas as mensagens que o portal envia. O Gmail e o Microsoft 365 / Outlook conseguem provar que uma mensagem é genuína; com outros fornecedores, todas as mensagens do portal ficam retidas para uma pessoa.

## Onde encontro todos os meus endereços?

**Credentials** (`/credentials`) termina com **Hotel mailbox addresses**: o endereço de faturas e os três endereços de login, cada um com o seu estado (por exemplo **Waiting for the invitation** ou **Active**) e um link **Open** para a página que o gere. A lista é só de leitura.

Há duas regras de visibilidade:

- Um endereço de login só é mostrado às pessoas da sua equipa que gerem as conexões. Os outros veem o estado, com "The address is shown only to people who manage connections".
- O endereço de faturas é mostrado às pessoas que podem ver as faturas recebidas.

Se o seu servidor não tiver um domínio de correio configurado, a secção diz isso uma vez, em vez de listar endereços vazios.

## Quanto correio pode receber cada propriedade?

Cada propriedade pode receber **100 mensagens por mês** no servidor de correio do Hotelier Tools. Serve para proteger o servidor; não é um preço.

- Consulte-o em **Plan and billing** (`/subscriptions`), em **Received mail**: a contagem, as mensagens em espera e a lista do mês.
- **Acima do limite**, a mensagem fica guardada, não se perde. Espera e é tratada automaticamente, das mais antigas para as mais recentes, quando o mês recomeça ou quando o limite é aumentado. O proprietário recebe um e-mail nesse mês.
- **Precisa de mais?** Use **Contact support** no mesmo cartão.
- O correio lido da sua própria caixa de correio conectada e os ficheiros `.eml` que carrega nunca contam.

## Pergunte ao assistente

Os endereços têm ferramentas para o assistente de IA (`/chat`) e para clientes MCP como o Claude:

- "Para que endereço é que os fornecedores enviam as faturas?" → `list_hotel_mail_addresses`
- "Chegou alguma coisa ao endereço de faturas esta semana?" → `list_hotel_mail_messages`
- "Cria um endereço novo para as faturas de fornecedores" → `rotate_hotel_mail_address`, só depois de aprovar o cartão
- "O utilizador do Hotelier Tools está conectado no Booking.com?" → `get_service_login`

Nenhuma ferramenta devolve um endereço de login: só é mostrado a uma pessoa na página da conexão. Aceitar um convite também nunca é tarefa de uma ferramenta.

::demo-cta{path="/received-invoices"}
::

O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools não é afiliado à SiteMinder, ao Little Hotelier, ao Booking.com nem à Expedia, nem tem o aval deles. Conecta-se com os logins do seu próprio hotel, e os seus endereços nunca substituem o seu próprio login nem o seu e-mail de recuperação.
::

Veja também: [faturas de fornecedores por e-mail](/blog/supplier-invoices-by-email), [adicionar um utilizador no Little Hotelier](/blog/add-user-little-hotelier), [o dashboard](/tools/bot/dashboard).

## Resumo

- Cada propriedade recebe endereços privados, só de receção, em `in.hotelier.tools`: `inv-…` para as faturas de fornecedores e um por login de portal.
- As faturas de fornecedores enviadas para `inv-…` chegam a **Received invoices** como **To review**, depois de uma verificação de fraude, sem palavra-passe IMAP.
- Nada é partilhado entre hotéis, e o domínio nunca passa a ser o seu login nem o seu e-mail de recuperação.
- Os endereços de login já existem, mas os convites ficam retidos para uma pessoa até o passo de aceitação de cada portal estar pronto.
- 100 mensagens por mês por propriedade; encontre todos os endereços no fundo de `/credentials`.
