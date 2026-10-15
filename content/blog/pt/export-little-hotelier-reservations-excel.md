---
title: "Como exportar reservas do Little Hotelier para Excel (e a lista de hóspedes, antes de os dados serem ocultados)"
seoTitle: "Exportar reservas do Little Hotelier para Excel"
description: "O Little Hotelier oculta os dados do hóspede 180 dias após o check-out. Exporte reservas e hóspedes para Excel ou Google Sheets, à mão ou automaticamente."
date: 2026-10-03
category: api
tags: [export, excel, google sheets, reports, little hotelier]
keywords: [exportar reservas do little hotelier para excel, relatórios little hotelier, little hotelier csv, lista de hóspedes excel, planilha de reservas hotel, dados de hóspedes ocultados little hotelier]
feature: api-mcp
demoPath: /methods
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "Portal Developer do Hotelier Tools com cartões para REST API e Swagger, MCP setup, API keys e LH methods, acima de um exemplo de autenticação com uma chave de API"
faq:
  - q: "O que é exatamente ocultado após 180 dias?"
    a: "O Little Hotelier diz que os dados pessoais identificáveis (PII) do hóspede são ocultados 180 dias depois da data de check-out da reserva. A reserva continua lá, mas os relatórios e as pesquisas deixam de mostrar os dados pessoais do hóspede. Exporte o que precisa antes dessa data."
  - q: "Os telefones não aparecem na minha exportação do Little Hotelier. Qual é o motivo?"
    a: "O Little Hotelier deixa os telefones dos hóspedes fora do CSV de reservas por razões de segurança. Ainda pode ver o telefone na reserva ou no perfil do hóspede, e a pesquisa de hóspedes da API do Hotelier Tools devolve um campo phone_number quando o Little Hotelier tem esse dado."
  - q: "Posso agendar a exportação dentro do Little Hotelier?"
    a: "Os artigos do centro de ajuda consultados em outubro de 2026 descrevem como executar e exportar relatórios à mão, sem exportação agendada. Para automatizar, use um script ou um gatilho do Google Sheets que leia os dados através de uma API."
  - q: "Posso exportar mais de um ano de uma só vez?"
    a: "O Little Hotelier limita a exportação de totais de hóspedes a 365 dias, e a pesquisa de reservas do channel manager só recua 548 dias. Exporte um ano (ou um mês) de cada vez e guarde os ficheiros."
  - q: "Como exporto só as reservas do Booking.com?"
    a: "Filtre por canal nos relatórios do Channel Manager, ou exporte tudo e filtre a referência da reserva no Excel. As referências que começam com BDC são do Booking.com, EXP da Expedia, ABB do Airbnb, AGO da Agoda, HWL do Hostelworld e LH da sua própria receção / recepção ou motor de reservas."
---

Abra **Reservations**, defina as datas, clique em **Search** e depois em **Export**: o Little Hotelier faz o download de um ficheiro / arquivo CSV que abre no Excel ou no Google Sheets. Faça isto com regularidade, porque o Little Hotelier oculta os dados pessoais dos hóspedes **180 dias depois do check-out**, e a exportação nunca inclui telefones. Se quiser uma cópia que se atualiza sozinha todos os meses, leia os mesmos dados através de uma API.

## Exporte antes de os dados dos hóspedes serem ocultados

O centro de ajuda do Little Hotelier diz isso sem rodeios: "Guest Personally Identifiable Information (PII) is masked 180 days after the reservation check out date" ([pesquisa no channel manager](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation), [relatórios do channel manager](https://helpcentre.littlehotelier.com/en/articles/8673872-channel-manager-run-and-export-reports), [relatórios do motor de reservas](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports)).

Mais dois limites que vale a pena conhecer:

- A pesquisa de reservas do channel manager só encontra reservas "created or checked out within the last 548 days" (criadas ou com check-out nos últimos 548 dias).
- Depois de os dados serem ocultados, nenhuma exportação nem API os pode recuperar.

Por isso, se precisar dos dados dos hóspedes para faturas / notas fiscais, uma lista de hóspedes habituais, uma disputa ou as suas próprias estatísticas, exporte-os enquanto ainda lá estão. Guarde só o que tem motivo para guardar e armazene os ficheiros num local com acesso controlado: contêm dados pessoais.

::callout{type="info" title="Duas versões do Little Hotelier"}
As contas criadas desde maio de 2025 (ou atualizadas) usam a **plataforma** mais recente, com um [centro de ajuda separado](https://help-platform.littlehotelier.com/en/). As contas mais antigas usam a versão **clássica**. Os passos abaixo indicam os dois caminhos de menu.
::

## Como exportar reservas do Little Hotelier para Excel

1. Abra **Reservations**. Na versão clássica: **My Apps → Front Desk → Reservations**.
2. Defina **Date type** (**Check-in date**, **Check-out date** ou **Booked on date**) e depois **Date from** e **Date to**. Um mês de calendário é uma boa unidade.
3. Escolha um **Status**, se quiser: **All**, **Confirmed**, **Checked-in**, **Checked-out** ou **Cancelled**.
4. Clique em **Search**.
5. Clique em **Export**. O ficheiro é descarregado em formato `.csv`. Na plataforma mais recente, o Little Hotelier pede o seu código MFA ou a sua passkey antes de exportar reservas, hóspedes, pagamentos, receitas e faturas.

::screenshot{src="/images/scripts/full-width-reservation-table/to.png" alt="Página Reservations do Little Hotelier clássico, em espanhol: filtros de apelido / sobrenome do hóspede, referência da reserva, número de fatura, tipo de data, estado, datas e origem, o botão Search, 36 reservas encontradas e o link Export" caption="A página Reservations clássica (interface em espanhol). Primeiro clique em Search; depois, Export descarrega todos os resultados em CSV."}
::

Dois detalhes do [centro de ajuda](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data) evitam confusões:

- Se uma pesquisa devolver muitos resultados, a página só mostra os **primeiros 31 dias**. A exportação contém tudo.
- Para contar hóspedes num período, faça corresponder Date type e Status (check-in com **Checked-in**, check-out com **Checked-out**). O [guia clássico](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information) limita essa exportação a **365 dias**.

### O que há no CSV (e o que não há)

A exportação tem mais colunas do que a página. Segundo o [Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information), recebe:

- **Reserva:** referência, data da reserva, canal, estado, data de cancelamento
- **Hóspede:** nome e apelido, e-mail, organização, endereço completo
- **Estadia:** check-in, check-out, noites, hora de chegada, comentários do hóspede, tipos de quarto, quartos, planos tarifários
- **Dinheiro:** subtotal, extras, suplementos, impostos, pagamentos recebidos, saldo pendente
- **Hóspedes:** adultos, crianças, bebés; respostas a perguntas personalizadas da reserva

Não incluídos: **telefones** ("for security reasons") e um histórico de alterações, como a hora exata em que um hóspede fez check-in.

## Que outros relatórios o Little Hotelier pode exportar?

A maioria dos relatórios tem um botão **Export** que produz um CSV. Os caminhos são os da plataforma mais recente, exceto as linhas de channel manager e motor de reservas, que vêm da versão clássica (em **My Apps**). As contas clássicas encontram a maioria dos outros relatórios em **My Apps → Front Desk → Reports**.

| Relatório | Onde | O que recebe |
|---|---|---|
| Guests | Reports → Operational → Guests | Hóspedes alojados, por intervalo de datas |
| Invoices | Reports → Operational → Invoices | Lista de faturas em CSV, PDF num ZIP |
| Accounting | Reports → Operational → Accounting | Faturas finalizadas, organizadas para Xero e QuickBooks |
| Revenue (7 vistas) | Reports → Strategic → Revenue | Resumo, tipo de quarto, quarto, plano tarifário, canal, impostos, extras |
| Channel manager | Channel Manager → Reports | Resumo de reservas, estadias por quarto, check-ins, rendimento por canal |
| Booking engine | Direct Booking → Reports | Reservas com o dispositivo usado e o consentimento RGPD |
| Polícia espanhola | Reports → Operational → Police report | Só em Espanha: dados dos hóspedes para comunicar à polícia |

Fontes: [Getting started with Reports](https://help-platform.littlehotelier.com/en/articles/10813931-getting-started-with-reports), [Invoice report](https://help-platform.littlehotelier.com/en/articles/14390737-how-to-run-an-invoice-report), [Accounting export](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final), [Revenue reports](https://helpcentre.littlehotelier.com/en/articles/8884214-revenue-reports).

Dica: a exportação de receitas **Summary** tem uma coluna "Rate per night", com uma linha por noite. É a forma mais rápida de ver a que preço se vendeu cada noite de uma estadia longa.

## Como abrir o CSV no Excel sem estragar os acentos

Se nomes como "José" aparecem como "JosÃ©", o Excel adivinhou a codificação errada. Importe o ficheiro em vez de o abrir com duplo clique:

1. No Excel, vá a **Data → From Text/CSV** (Dados → De Texto/CSV) e escolha o ficheiro ([passos da Microsoft](https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba)).
2. Defina **File Origin** como **65001: Unicode (UTF-8)** e **Delimiter** como **Comma**.
3. Clique em **Load**.

No Google Sheets, use **File → Import → Upload** e deixe o separador em automático. O Sheets lê UTF-8 corretamente.

## Uma lista de hóspedes habituais: o que pode exportar e do que precisa

O CSV de reservas tem nomes, e-mails e endereços, o que basta para um e-mail de agradecimento ou de "volte sempre". Antes de enviar qualquer coisa, verifique quem aceitou receber comunicações suas:

- A exportação do **relatório do motor de reservas** tem uma coluna **GDPR consent**. O Little Hotelier diz que é preenchida quando o hóspede consentiu e fica vazia quando não consentiu ([fonte](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports)).
- Se usa o Guest Engagement, **Guest engagement → Guests → Mailchimp export** envia os hóspedes para uma lista do Mailchimp. Todos os hóspedes são exportados "regardless of GDPR consent status" (independentemente do consentimento RGPD), com o estado de opt-in indicado, por isso filtre por ele ([fonte](https://help-platform.littlehotelier.com/en/articles/8051434-connect-guest-engagement-to-mailchimp)).

As regras de marketing diferem por país. Envie e-mails só a hóspedes que deram consentimento, a menos que um consultor lhe tenha confirmado que se aplica outra base legal.

## A forma mais rápida: exportações automáticas com uma API

O Little Hotelier não tem chave de API para as suas reservas (os detalhes estão em [o Little Hotelier tem API?](/blog/little-hotelier-api)). O Hotelier Tools, um dashboard independente, conecta-se com o seu próprio login do Little Hotelier e oferece uma API REST e um servidor MCP para assistentes de IA. Não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles, e é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.

::callout{type="warning" title="Uma API não consegue reverter a ocultação"}
O Hotelier Tools lê o que o Little Hotelier ainda tem. As reservas com mais de 180 dias após o check-out também vêm ocultadas pela API. Automatize a exportação agora, para captar cada mês enquanto os dados estão completos.
::

Primeiro crie uma chave: **Developer → API & MCP → API Keys** (`/developer/api-keys`), escreva um nome, clique em **Generate key** e copie-a. A página só a mostra uma vez.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Página API keys logo depois de gerar uma chave chamada Blog integration: o formulário Generate a new key, uma caixa verde Key generated com o aviso Copy this key now, it will not be shown again, com a chave mascarada e um botão de copiar, e a nova chave listada em Active keys com Revoke" caption="Uma chave para cada uso: dê-lhe o nome da folha de cálculo / planilha ou do script que a vai usar e copie-a enquanto está visível." path="/developer/api-keys"}
::

### Sem código: execute a exportação a partir do dashboard

1. Abra **LH Methods** (`/methods`) e escolha `fetchReservationsCSV`.
2. Preencha `dateFrom` e `dateTo` (por exemplo `2026-09-01` e `2026-09-30`).
3. Execute-o. O método obtém as suas reservas em CSV, que pode colar numa folha de cálculo.

::screenshot{src="/images/blog/demo/en/little-hotelier-methods.webp" alt="Página Little Hotelier methods no Hotelier Tools com um cartão por método, como getReservations, updateReservation, fetchReservationsCSV (Fetches reservations as a CSV file, 3 parâmetros), generateInvoice e getInvoices" caption="Escolha fetchReservationsCSV em LH Methods para executar a exportação CSV de reservas a partir do navegador, sem código." path="/methods"}
::

### Google Sheets, atualizado todos os meses

Este Apps Script acrescenta um separador / aba com as reservas do mês passado (por data de check-in) cada vez que é executado.

1. Numa folha nova do Google Sheets, abra **Extensions → Apps Script**.
2. Em **Project Settings**, adicione uma propriedade de script chamada `HT_API_KEY` com a sua chave `htk_…`. Assim a chave fica fora do código.
3. Cole este código e guarde:

```js [Code.gs]
function importLastMonth() {
  const key = PropertiesService.getScriptProperties().getProperty('HT_API_KEY');
  const tz = Session.getScriptTimeZone();
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const end = new Date(now.getFullYear(), now.getMonth(), 0);
  const day = d => Utilities.formatDate(d, tz, 'yyyy-MM-dd');

  const url = 'https://dashboard.hotelier.tools/api/v1/reservations'
    + '?startDate=' + day(start) + '&endDate=' + day(end) + '&limit=100';
  const res = UrlFetchApp.fetch(url, { headers: { Authorization: 'Bearer ' + key } });
  const rows = JSON.parse(res.getContentText()).data || [];
  if (!rows.length) return;

  const headers = Object.keys(rows[0]);
  const values = rows.map(r => headers.map(h =>
    r[h] !== null && typeof r[h] === 'object' ? JSON.stringify(r[h]) : r[h]));

  const ss = SpreadsheetApp.getActive();
  const name = Utilities.formatDate(start, tz, 'yyyy-MM');
  const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
}
```

4. Clique em **Run** uma vez e permita o acesso quando o Google pedir.
5. Para agendar, abra **Triggers → Add Trigger**, escolha `importLastMonth`, origem do evento **Time-driven** e um **Month timer** no dia 1 ([guia do Google](https://developers.google.com/apps-script/guides/triggers/installable)).

A API devolve até 100 reservas por chamada. Se um mês encher as 100 linhas, divida-o em duas metades. Quem puder editar o script pode ler a chave, por isso partilhe / compartilhe a folha com cuidado e revogue a chave em `/developer/api-keys` se ela vazar.

### Peça a um assistente de IA que construa a tabela

Se conectou o Claude ou o ChatGPT ao Hotelier Tools (veja [conectar o Claude ao Little Hotelier](/blog/connect-claude-to-little-hotelier)), peça com palavras simples:

::prompt{label="Claude"}
Com o Hotelier Tools, liste todas as reservas que fizeram check-out em setembro de 2026 numa tabela: referência da reserva, nome do hóspede, e-mail, check-in, check-out, noites, canal e total. Depois dê-me a mesma tabela em CSV.
::

O assistente lê as suas reservas através do servidor MCP e devolve a tabela. Lembre-se de que o que ele lê (nomes, e-mails, valores) passa a fazer parte da sua conversa com esse fornecedor de IA.

::demo-cta{path="/methods"}
::

Guias relacionados: [integrações do Little Hotelier](/blog/little-hotelier-integrations), [baixar todas as faturas de uma vez](/blog/download-all-little-hotelier-invoices), [o inquérito de ocupação do INE](/blog/ine-hotel-occupancy-survey).

## Resumo

- **À mão:** **Reservations → Search → Export** dá um CSV com nomes, e-mails e endereços dos hóspedes, mas sem telefones.
- **Prazo:** os dados dos hóspedes são ocultados 180 dias depois do check-out, por isso exporte todos os meses.
- **Acentos:** importe com **Data → From Text/CSV** e UTF-8 no Excel.
- **Automático:** um gatilho do Google Sheets com a API do Hotelier Tools, ou um pedido ao seu assistente de IA. Mais na [página de funcionalidade API & MCP](/tools/bot/api-mcp).
