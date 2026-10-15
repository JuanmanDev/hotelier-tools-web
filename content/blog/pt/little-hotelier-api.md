---
title: "O Little Hotelier tem API? A resposta de 2026 e como tirar os seus dados"
seoTitle: "O Little Hotelier tem API? A resposta de 2026"
description: "API do Little Hotelier: não há chave para as suas reservas ou hóspedes. O que a SiteMinder oferece e como ler os seus dados por REST em minutos."
date: 2026-10-03
category: api
tags: [api, rest, little hotelier, siteminder, developers]
keywords: [little hotelier api, little hotelier api documentação, little hotelier api key, siteminder api, siteminder exchange api, little hotelier rest api, little hotelier integração]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/rest-api-reference.webp
coverAlt: "Página REST API reference no Hotelier Tools com o URL base, um download de openapi.json, a caixa Quick authorize (campo de Bearer token, Authorize Swagger, Use my session) e modelos de código em cURL, JavaScript, Python e PowerShell"
featured: true
faq:
  - q: "O Little Hotelier tem uma API pública para as minhas reservas?"
    a: "Nenhuma que uma propriedade possa usar para as suas próprias reservas, em outubro de 2026. As APIs da SiteMinder são para parceiros tecnológicos certificados, e a chave da Direct Booking API que pode gerar sozinho só abrange tarifas, disponibilidade e dados da propriedade para um site de reservas."
  - q: "O que é o SiteMinder Exchange (SMX) e inclui o Little Hotelier?"
    a: "O SMX é a API da SiteMinder para apps de parceiros, como check-in, mensagens e ferramentas de receita. O guia para programadores da SiteMinder indica o Little Hotelier como fonte de reservas para o SMX, mas não de disponibilidade e tarifas. Só os parceiros certificados se conectam a ele."
  - q: "Como me torno parceiro de integração da SiteMinder e quanto tempo demora?"
    a: "Você envia o formulário de candidatura de integração da SiteMinder, assina um acordo de parceria e depois desenvolve, certifica e entra em produção. A SiteMinder diz que a maioria das integrações demora cerca de 60 dias do início à entrada em produção. Destina-se a empresas de software, não a um único hotel."
  - q: "Uma API não oficial como o Hotelier Tools é segura e permitida?"
    a: "O Hotelier Tools entra com o seu próprio login do Little Hotelier, guarda-o encriptado (AES-256-GCM) e só pode fazer o que esse login pode fazer na aplicação web do Little Hotelier. Não é uma integração oficial da SiteMinder, por isso, se tiver dúvidas, consulte o seu próprio contrato com a SiteMinder. Pode revogar todas as chaves a qualquer momento."
  - q: "O Little Hotelier tem um servidor MCP para assistentes de IA?"
    a: "Nenhum para proprietários, em outubro de 2026. O trabalho de IA da SiteMinder no Demand Plus serve para os viajantes encontrarem e reservarem os seus quartos no ChatGPT e no Claude. Para perguntar a uma IA sobre as suas próprias reservas, precisa de um servidor MCP independente, como o do Hotelier Tools."
  - q: "Posso testar a API sem arriscar dados reais?"
    a: "Não há chave de sandbox pública. Comece com chamadas só de leitura (reservas, preços, tipos de quarto). Não alteram nada no Little Hotelier. As chamadas que escrevem, como gerar uma fatura / nota fiscal, criam documentos reais."
---

Nenhuma que possa usar para as suas próprias reservas. Em outubro de 2026, o centro de ajuda do Little Hotelier não documenta nenhuma chave de API que uma propriedade possa usar para reservas, hóspedes ou faturas: as APIs da SiteMinder são para parceiros tecnológicos certificados, e a única chave que pode gerar sozinho, a **Direct Booking API**, abrange tarifas, disponibilidade e dados da propriedade para um site de reservas. Para ler os seus próprios dados a partir de um script, de uma folha de cálculo / planilha ou de um assistente de IA, pode usar uma API REST independente como a do Hotelier Tools, que se conecta com o seu próprio login do Little Hotelier.

A seguir: exatamente o que a SiteMinder oferece e depois uma configuração de cinco minutos com exemplos reais de `curl`.

## O Little Hotelier tem uma API pública?

Há quatro formas oficiais de levar dados para o Little Hotelier ou de os tirar de lá. Nenhuma lhe dá uma chave de API para a sua lista de reservas.

| Opção oficial | Quem pode usar | O que abrange |
|---|---|---|
| SiteMinder Exchange (SMX) | Apps de parceiros certificados | Reservas do Little Hotelier. Não disponibilidade nem tarifas |
| Direct Booking API | Propriedades que usam o Direct Booking | Preços em tempo real, disponibilidade, propriedade, tipos de quarto, planos tarifários |
| Exportações CSV | Qualquer utilizador / usuário, à mão | Reservas, receita, faturas, contabilidade |
| Apps da App Store | Qualquer propriedade, através do fornecedor da app | O que essa app sincronizar |

### SiteMinder Exchange (SMX): para empresas de software

O [guia para programadores](https://developer.siteminder.com/get-started/siteminder-apis) da SiteMinder lista cinco APIs: pmsXchange, SiteConnect, Channels Plus, SMX e Direct Booking. A que importa para o Little Hotelier é o SMX, a API por trás de apps como check-in online e mensagens com hóspedes.

Na [lista de publishers do SMX](https://developer.siteminder.com/smx-api/additional-resources/reference-tables/property-publishers) da SiteMinder, o Little Hotelier envia **reservas** mas não disponibilidade nem tarifas. O [quick start do SMX](https://developer.siteminder.com/smx-api/guides/quick-start) diz o mesmo: "you are not able to obtain ARI data" do Little Hotelier.

O acesso é para parceiros. As [FAQ](https://developer.siteminder.com/get-started/resources/faq) da SiteMinder dizem que primeiro tem de assinar um acordo de parceria através da [candidatura de integração](https://www.siteminder.com/integrations/apply-now/), depois desenvolver, certificar e entrar em produção, o que "a maioria" dos parceiros conclui em 60 dias. Esse caminho serve uma empresa de software. Um hotel isolado não consegue uma chave SMX para uso próprio.

### A Direct Booking API: a única chave que pode gerar

Se a sua conta está na plataforma mais recente do Little Hotelier (contas criadas desde maio de 2025, ou contas atualizadas), o [centro de ajuda](https://help-platform.littlehotelier.com/en/articles/15689086-direct-booking-api) documenta uma Direct Booking API:

1. Vá a **Direct booking → Configuration → API integration**.
2. Clique em **Generate key**.
3. Entregue a chave e o guia para programadores da SiteMinder ao seu programador web.

Devolve preços e disponibilidade em tempo real, dados da propriedade, tipos de quarto e planos tarifários, para que um programador possa criar uma página ou app de reservas personalizada. Está incluída no Direct Booking sem custo adicional. **Não** devolve reservas, hóspedes, pagamentos nem faturas, e o suporte do Little Hotelier não ajuda a criar nem a corrigir o que fizer com ela.

### Exportações CSV e App Store

Todo o resto é manual ou depende do fornecedor. A página Reservations e a maioria dos relatórios exportam um CSV (passo a passo em [como exportar reservas para o Excel](/blog/export-little-hotelier-reservations-excel)). As apps da [App Store do Little Hotelier](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store) conectam-se quando você contacta o fornecedor da app; você não recebe os dados diretamente. Veja [as melhores integrações do Little Hotelier](/blog/little-hotelier-integrations) para saber o que existe.

## Como tirar os seus dados do Little Hotelier de forma programática

O Hotelier Tools é um dashboard independente para propriedades com Little Hotelier. Inclui uma API REST (estado: beta) e um servidor MCP para assistentes de IA.

Como funciona, em termos simples:

- Você conecta uma vez o seu próprio login do Little Hotelier, em **Credentials** (`/credentials`). Fica guardado encriptado (AES-256-GCM).
- O Hotelier Tools usa então os mesmos endpoints web que a aplicação web do Little Hotelier usa. Só pode ler e fazer o que esse login pode, nada mais.
- Os seus scripts chamam o Hotelier Tools com uma chave de API, e o Hotelier Tools fala com o Little Hotelier.

::callout{type="note" title="Independente, não oficial"}
O Hotelier Tools não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Não é uma API oficial da SiteMinder e conecta-se com o login do Little Hotelier do seu próprio hotel. O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.
::

## Como criar uma chave de API e fazer a primeira chamada

Precisa de uma conta do Hotelier Tools (crie a conta em [dashboard.hotelier.tools/register](https://dashboard.hotelier.tools/register)) com o Little Hotelier conectado em **Credentials**. O proprietário da propriedade tem acesso à API por padrão.

1. Abra **Developer → API & MCP → API Keys** (`/developer/api-keys`).
2. Em "Generate a new key", escreva um nome que reconheça mais tarde, como `sheets-export`, e clique em **Generate key**.
3. Copie a chave logo. A página avisa: "Copy this key now — it will not be shown again." As chaves começam por `htk_`.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Página API keys logo depois de gerar uma chave: a caixa verde Key generated com a chave de uso único mascarada e um botão de copiar, a nova chave Blog integration em Active keys com um botão Revoke e um aviso API key created" caption="Copie a chave da caixa verde logo: só é mostrada uma vez. Dê a cada chave o nome do que a vai usar, para saber qual revogar mais tarde." path="/developer/api-keys"}
::

4. Confirme que a API responde. Esta chamada é pública e não precisa de chave:

```bash
curl https://dashboard.hotelier.tools/api/v1/health
```

5. Agora uma chamada com a sua chave. Devolve o ID da sua propriedade no Little Hotelier e o login que usa:

```bash
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  https://dashboard.hotelier.tools/api/v1/property
```

No Windows, escreva `curl.exe` em vez de `curl` no PowerShell, ou use o comando próprio do PowerShell:

```powershell
$headers = @{ Authorization = "Bearer htk_YOUR_API_KEY" }
Invoke-RestMethod -Headers $headers -Uri "https://dashboard.hotelier.tools/api/v1/property"
```

O que uma chave pode fazer: **não há scopes**. Uma chave atua sobre a única propriedade em que foi criada, como a pessoa que a criou, com as permissões atuais dessa pessoa. Cada pessoa pode ter até 10 chaves e pode revogar qualquer uma na mesma página.

### Prefere clicar em vez de digitar? Use o explorador

Abra **REST API & Swagger** (`/developer/rest-api`). Em **Quick authorize**, cole a sua chave em "Bearer token (API key or session JWT)" e clique em **Authorize Swagger**, ou em **Use my session** para dispensar a chave. Depois experimente qualquer endpoint no "Interactive API explorer". A página tem também **Download spec** e "Code templates" em cURL, JavaScript, Python e PowerShell.

::screenshot{src="/images/blog/demo/en/rest-api-interactive-explorer.webp" alt="Explorador interativo da API (Swagger) depois de Try it out e Execute em GET /property: o URL do pedido https://demo.hotelier.tools/api/v1/property e um corpo de resposta 200 com propertyId 90210" caption="Autorize uma vez e depois execute qualquer endpoint a partir do navegador e veja o pedido exato e o JSON que devolve." path="/developer/rest-api"}
::

## Que endpoints pode usar?

O URL base é `https://dashboard.hotelier.tools/api/v1`. A lista completa e atual está na [especificação OpenAPI](https://dashboard.hotelier.tools/api/v1/openapi.json) pública. Estes são os que a maioria das pessoas usa primeiro:

| Método | Caminho | O que obtém |
|---|---|---|
| GET | `/reservations` | Reservas por data de check-in, `status` e `limit` opcionais |
| GET | `/reservations/{id}` | Detalhes completos de uma reserva (id numérico ou referência `LH…`) |
| GET | `/reservations/{id}/invoices` | As faturas / notas fiscais de uma reserva |
| GET | `/reservations/{id}/invoices/{invoiceId}/download` | Uma fatura em PDF |
| POST | `/reservations/{id}/invoices` | Cria uma nova fatura no Little Hotelier (sem e-mail ao hóspede) |
| GET | `/guests` | Pesquisa de hóspedes por texto, nome, e-mail ou telefone |
| GET | `/prices` | Tarifas e disponibilidade para um intervalo de datas |
| GET | `/room-types` | Tipos de quarto com o número de quartos de cada |
| GET | `/methods` | Os métodos brutos do Little Hotelier que pode chamar (público) |
| POST | `/methods/{methodName}` | Executa um deles, por exemplo `getReservationsByDateRange` |

Alguns exemplos para copiar e colar (datas e IDs são inventados):

```bash
# Reservas com check-out feito e check-in em novembro de 2026
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations?startDate=2026-11-01&endDate=2026-11-30&status=checked_out&limit=100"

# Tudo sobre uma reserva
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations/LH00000000000001"

# Tarifas e disponibilidade de uma semana
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/prices?startDate=2026-12-01&endDate=2026-12-07"

# Encontrar um hóspede pelo apelido (sobrenome)
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/guests?lastName=Garcia&perPage=50"

# Todas as reservas que se sobrepõem a um intervalo (método bruto, parâmetros nomeados)
curl -X POST "https://dashboard.hotelier.tools/api/v1/methods/getReservationsByDateRange" \
  -H "Authorization: Bearer htk_YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"params":{"startDate":"2026-11-01","endDate":"2026-11-30"}}'
```

As chamadas de listagem devolvem JSON como `{ "success": true, "count": 2, "data": [ … ] }`. Para experimentar um método bruto sem código, abra **LH Methods** (`/methods`) no dashboard e execute-o a partir do navegador. As execuções ficam guardadas em **Run History**.

::screenshot{src="/images/blog/demo/en/little-hotelier-methods.webp" alt="Bancada de métodos do Little Hotelier no Hotelier Tools com um cartão por método bruto, como getReservations, getReservationDetails, getReservationsByDateRange, addPaymentRecord, updateReservation e generateInvoice, cada um com o seu número de parâmetros" caption="Execute qualquer método bruto do Little Hotelier à mão antes de o automatizar num script." path="/methods"}
::

::demo-cta{path="/developer/rest-api"}
::

## Limites, erros e o que não está disponível

**Limite de pedidos.** 100 pedidos por minuto por endereço IP. Cada resposta traz `X-RateLimit-Limit`, `X-RateLimit-Remaining` e `X-RateLimit-Reset`. Acima do limite recebe `429` com um cabeçalho `Retry-After`.

**Paginação.** `/reservations` devolve no máximo 100 por chamada (`limit`, 50 por padrão) e filtra pela data de check-in. Para um ano de dados, peça um mês de cada vez; se um mês devolver exatamente 100, divida-o em dois. `/guests` pagina com `page` e `perPage` (até 50). `/prices` divide intervalos superiores a duas semanas em blocos, por isso os intervalos longos são mais lentos.

**Os erros** chegam em JSON com `statusCode` e `statusMessage`:

| Código | Normalmente significa |
|---|---|
| 401 | Chave ausente, errada ou revogada |
| 404 | Essa reserva não existe ou não é da sua propriedade |
| 422 | Um parâmetro está errado, por exemplo uma data que não está em `YYYY-MM-DD` |
| 429 | Demasiados pedidos; espere pelo `Retry-After` |
| 500 / 502 | O Little Hotelier não respondeu; tente mais tarde |

**Os dados mascarados continuam mascarados.** A API lê o que o Little Hotelier ainda guarda. O Little Hotelier [mascara os dados dos hóspedes 180 dias após o check-out](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation), e nenhuma API os pode recuperar. Exporte antes disso.

**Não disponível:** webhooks de saída ou notificações em tempo real, uma chave de sandbox pública e pacotes SDK no npm ou PyPI. Para executar algo com agendamento, use o seu próprio agendador (uma tarefa cron, o Agendador de Tarefas do Windows ou um acionador do Google Sheets).

**As escritas são reais.** `POST /reservations/{id}/invoices` cria um novo documento de fatura no Little Hotelier de cada vez que o chama. Comece com chamadas só de leitura e mantenha as chaves longe de folhas de cálculo a que outras pessoas têm acesso e de código público.

## O que pode construir com ela?

- **Uma folha de reservas em tempo real.** Puxe as estadias do mês passado para o Google Sheets ou o Excel com agendamento: veja [exportar reservas para o Excel e o Google Sheets](/blog/export-little-hotelier-reservations-excel).
- **Pacotes para o contabilista / contador.** Descarregue / baixe os PDF das faturas por reserva, ou dispense o código com o ZIP trimestral em [descarregar todas as faturas de uma vez](/blog/download-all-little-hotelier-invoices).
- **Dashboards.** Alimente ocupação e receita no Looker Studio ou no Power BI a partir de uma folha que a API mantém atualizada.
- **Assistentes de IA.** A mesma chave funciona com o servidor MCP do Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`), que dá ao Claude, ChatGPT, Cursor ou VS Code mais de 100 ferramentas de hotel. Comece por [o que é um servidor MCP](/blog/what-is-mcp-server-hotels), depois [conecte o Claude](/blog/connect-claude-to-little-hotelier) ou configure o [Claude Code, o Cursor e o VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode).
- **Cola entre ferramentas.** Onde não existe app na App Store, um pequeno script pode mover dados entre o Little Hotelier e o resto das suas ferramentas. Compare opções em [as melhores integrações do Little Hotelier](/blog/little-hotelier-integrations).

Guias relacionados: [alternativas ao Little Hotelier](/blog/little-hotelier-alternatives).

## Próximos passos

- Se desenvolve software para muitos hotéis, candidate-se ao programa de parceiros da SiteMinder e ao SMX.
- Se só precisa dos dados da sua propriedade, crie uma chave do Hotelier Tools em `/developer/api-keys` e chame `/reservations`.
- Exporte os dados de hóspedes que precisa de conservar antes de o Little Hotelier os mascarar aos 180 dias.
- Tudo o que a API e o servidor MCP oferecem está na [página da funcionalidade API & MCP](/tools/bot/api-mcp).
