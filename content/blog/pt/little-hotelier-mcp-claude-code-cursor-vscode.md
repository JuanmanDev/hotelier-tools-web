---
title: "Claude Code MCP: como usar os dados do Little Hotelier no Claude Code, Cursor e VS Code"
seoTitle: "MCP do Little Hotelier no Claude Code, Cursor e VS Code"
description: "Adicione o servidor MCP do Hotelier Tools ao Claude Code, Cursor, VS Code, Windsurf ou Gemini CLI e crie relatórios de ocupação, ligação a Sheets ou um painel."
date: 2026-10-03
category: ai
tags: [mcp, claude code, cursor, vs code, api]
keywords: [claude code mcp, configurar mcp claude code, conectar claude no vscode, cursor mcp.json, vscode mcp.json, claude code gratuito, little hotelier mcp]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "Guia MCP setup no Hotelier Tools: uma explicação What is MCP? e separadores Client configuration para Claude Desktop, VS Code, Cursor e Custom / SDK, com o Claude Desktop selecionado e o seu excerto de claude_desktop_config.json"
faq:
  - q: "Qual é o comando claude mcp add para o Little Hotelier?"
    a: "Execute: claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header \"Authorization: Bearer htk_YOUR_API_KEY\". Substitua a chave por uma de Developer, API Keys no Hotelier Tools e depois confirme com /mcp dentro do Claude Code."
  - q: "Onde fica o mcp.json no Cursor e no VS Code?"
    a: "O Cursor lê ~/.cursor/mcp.json para todos os projetos e .cursor/mcp.json dentro de um projeto. O VS Code lê .vscode/mcp.json no espaço de trabalho e um ficheiro ao nível do utilizador que abre com o comando MCP: Open User Configuration. O VS Code usa a chave servers, não mcpServers."
  - q: "Preciso de ser programador para usar o Claude Code com os dados do meu hotel?"
    a: "Não. Instala o Claude Code, cola um comando e depois pergunta em palavras simples. Ajuda saber onde ficam os seus ficheiros e como executar um script, mas o Claude Code pode explicar cada passo à medida que trabalha."
  - q: "Posso iniciar sessão em vez de usar uma chave de API?"
    a: "Sim, nos clientes que suportam OAuth. Adicione o URL do servidor sem cabeçalho e inicie sessão quando o cliente pedir: no Claude Code, execute /mcp e escolha autenticar. O início de sessão dura 30 dias. As chaves são melhores para scripts que correm sem supervisão."
  - q: "Esta é uma API oficial do Little Hotelier ou da SiteMinder?"
    a: "Não. O Hotelier Tools é independente e não tem afiliação nem aval da SiteMinder ou do Little Hotelier. Liga-se com o login do Little Hotelier da sua propriedade e oferece a sua própria API REST e o seu próprio servidor MCP."
---

Adicione um servidor MCP remoto, `https://dashboard.hotelier.tools/api/mcp`, com uma chave de API do Hotelier Tools, e o Claude Code, o Cursor, o VS Code (modo agente do Copilot), o Windsurf ou o Gemini CLI conseguem ler as suas reservas, tarifas e faturas do Little Hotelier enquanto escrevem código para si. No Claude Code é um único comando: `claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"`.

A seguir ficam as configurações exatas para cada ferramenta (conferidas com a documentação de cada fornecedor em outubro de 2026), três coisas que vale a pena construir e quando chamar diretamente a API REST.

## Antes de começar: crie uma chave de API

O Little Hotelier não publica um servidor MCP, e a própria documentação da API de parceiros da SiteMinder diz que os dados de disponibilidade e tarifas [não se conseguem obter do Little Hotelier](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers). O Hotelier Tools oferece um servidor MCP e uma API REST, usando o login do Little Hotelier da sua propriedade. Não tem afiliação nem aval da SiteMinder ou do Little Hotelier. Contexto: [o Little Hotelier tem API?](/blog/little-hotelier-api)

1. No Hotelier Tools, ligue o Little Hotelier em **Credentials** (`/credentials`), se ainda não o fez.
2. Abra **Developer → API & MCP → API Keys** (`/developer/api-keys`).
3. Escreva um nome que diga onde a chave vai ficar, como `cursor-laptop`, e carregue em **Generate key**.
4. Copie-a logo: "Copy this key now — it will not be shown again." Começa por `htk_`.

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="Página API keys no Hotelier Tools: o formulário Generate a new key com um campo de nome e o botão Generate key, uma chave ativa (MCP internal (chat), mascarada) com um botão Revoke e as notas Good security practice" caption="Uma chave por ferramenta facilita revogar só a que deixou de usar." path="/developer/api-keys"}
::

Uma chave tem as mesmas permissões que a sua conta do Hotelier Tools, na única propriedade em que a criou. Pode ter até 10 chaves.

**Mantenha a chave fora dos seus ficheiros.** Guarde-a numa variável de ambiente chamada `HT_API_KEY` e referencie-a nas configurações:

```bash [macOS / Linux]
echo 'export HT_API_KEY="htk_YOUR_API_KEY"' >> ~/.zshrc   # ou ~/.bashrc
```

```powershell [Windows PowerShell]
setx HT_API_KEY "htk_YOUR_API_KEY"
```

Abra um novo terminal (e reinicie o editor) para que apanhe a variável.

## Como adicionar o servidor MCP ao Claude Code, Cursor, VS Code, Windsurf e Gemini CLI

Cada ferramenta guarda os mesmos três dados (endereço, transporte, chave) num ficheiro ligeiramente diferente. Escolha a sua.

### Claude Code

O Claude Code tem um comando integrado para servidores remotos ([documentação da Anthropic](https://code.claude.com/docs/en/mcp)):

```bash [Terminal]
claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"
```

Depois inicie `claude` e escreva `/mcp`. O Hotelier Tools deve aparecer como **connected**; um estado `failed` com um 401 significa que a chave está errada.

- **Âmbito (scope).** Por defeito, o servidor fica guardado só para a pasta atual. Acrescente `--scope user` a seguir ao nome para o usar em todos os projetos, ou `--scope project` para escrever um `.mcp.json` partilhado.
- **Iniciar sessão em vez de usar uma chave.** Execute o comando sem `--header`, e depois, dentro do Claude Code, escreva `/mcp` e autentique-se no navegador. Se já ligou o Hotelier Tools como conector no claude.ai, o Claude Code pode aproveitá-lo quando inicia sessão com a mesma conta Claude.

Para um projeto que partilha com um colega ou guarda no Git, ponha o servidor no `.mcp.json` e deixe cada pessoa fornecer a sua própria chave:

```json [.mcp.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "type": "http",
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${HT_API_KEY}" }
    }
  }
}
```

A linha `"type": "http"` é obrigatória: o Claude Code trata uma entrada com `url` mas sem `type` como um erro de configuração.

### Cursor

O Cursor lê `~/.cursor/mcp.json` para todos os projetos, ou `.cursor/mcp.json` dentro de um projeto ([documentação do Cursor](https://cursor.com/docs/context/mcp)):

```json [~/.cursor/mcp.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${env:HT_API_KEY}" }
    }
  }
}
```

Guarde e depois confirme que o servidor está ativado nas definições MCP do Cursor (as versões recentes listam os servidores em **Customize** na barra lateral). Pergunte no chat **Agent**. Por defeito, o Cursor pede aprovação antes de executar uma ferramenta; mantenha-o assim para este servidor. Se omitir `headers`, o Cursor oferece o início de sessão pelo navegador.

### VS Code com GitHub Copilot

O VS Code usa `.vscode/mcp.json`, com `servers` como chave de topo e um `"type": "http"` obrigatório ([documentação do VS Code](https://code.visualstudio.com/docs/agents/reference/mcp-configuration)). A sua funcionalidade `inputs` pede a chave uma vez e guarda-a no armazenamento seguro do VS Code, para que nunca fique no ficheiro:

```json [.vscode/mcp.json]
{
  "inputs": [
    {
      "type": "promptString",
      "id": "ht-api-key",
      "description": "Hotelier Tools API key (htk_…)",
      "password": true
    }
  ],
  "servers": {
    "hotelier-tools": {
      "type": "http",
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${input:ht-api-key}" }
    }
  }
}
```

Abra o Copilot Chat, mude para o modo **Agent** e use **Configure Tools** para ver as ferramentas do Hotelier Tools. O VS Code pode pedir-lhe que confie no servidor na primeira vez que arranca. Para todos os espaços de trabalho, execute **MCP: Open User Configuration** e cole lá o mesmo bloco. O VS Code também suporta o início de sessão pelo navegador se omitir `headers`.

::screenshot{src="/images/blog/demo/en/mcp-config-vscode-copilot.webp" alt="Separador VS Code / GitHub Copilot da página MCP setup do Hotelier Tools: um excerto de .vscode/mcp.json com servers, hotelier-tools, type http, o URL /api/mcp da demonstração e um cabeçalho Authorization com o marcador htk_YOUR_API_KEY, e depois Turn on Agent mode in Copilot Chat" caption="A página MCP Setup tem um excerto pronto para cada cliente. A demonstração mostra o seu próprio endereço; o seu é dashboard.hotelier.tools." path="/developer/mcp-setup" width="1036" height="446"}
::

### Windsurf e Gemini CLI

O **Windsurf** (cuja documentação passou a estar sob o Devin) lê `~/.codeium/windsurf/mcp_config.json` e usa `serverUrl` para servidores remotos ([documentação](https://docs.devin.ai/windsurf/plugins/cascade/mcp)):

```json [~/.codeium/windsurf/mcp_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "serverUrl": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${env:HT_API_KEY}" }
    }
  }
}
```

O Windsurf limita o Cascade a 100 ferramentas no total, e o Hotelier Tools oferece mais de 100, pelo que pode ter de desativar no painel MCP as ferramentas que não usa.

O **Gemini CLI** lê `~/.gemini/settings.json` (ou `.gemini/settings.json` num projeto) e usa `httpUrl` para este tipo de servidor; `url` significaria o transporte SSE mais antigo, que o Hotelier Tools não serve ([documentação](https://geminicli.com/docs/tools/mcp-server/)):

```json [~/.gemini/settings.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "httpUrl": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer $HT_API_KEY" }
    }
  }
}
```

Ou a partir do terminal: `gemini mcp add --transport http --header "Authorization: Bearer htk_YOUR_API_KEY" hotelier-tools https://dashboard.hotelier.tools/api/mcp`. Escreva `/mcp` dentro do Gemini CLI para confirmar.

Estas duas configurações seguem a documentação de cada fornecedor; não as testámos em todas as versões.

| Ferramenta | Ficheiro de configuração | Chave de topo | Chave do URL |
|---|---|---|---|
| Claude Code | `.mcp.json` | `mcpServers` | `url` + `"type": "http"` |
| Cursor | `.cursor/mcp.json` | `mcpServers` | `url` |
| VS Code | `.vscode/mcp.json` | `servers` | `url` + `"type": "http"` |
| Windsurf | `mcp_config.json` | `mcpServers` | `serverUrl` |
| Gemini CLI | `settings.json` | `mcpServers` | `httpUrl` |

## Três coisas que vale a pena construir

O truque é deixar o agente usar o MCP para *olhar* para os seus dados reais e depois escrever código que chama a [API REST](/tools/bot/api-mcp), para que o resultado corra todos os meses sem IA.

### Um relatório mensal de ocupação

Peça ao Claude Code (ou ao agente do Cursor) numa pasta vazia:

::prompt{label="Claude Code"}
Usa o servidor MCP hotelier-tools para consultar os meus tipos de quarto e as reservas do mês passado. Depois escreve um script em Node.js que chame a API REST do Hotelier Tools (especificação: https://dashboard.hotelier.tools/api/v1/openapi.json) com a chave em HT_API_KEY e que, para qualquer mês que eu indique, mostre a ocupação e a tarifa média diária por tipo de quarto e as guarde num CSV.
::

Um bom script começa assim. Vai buscar os tipos de quarto e todas as reservas que se sobrepõem ao mês, e guarda a resposta em bruto para que possa conferir os campos antes de fazer contas:

```js [fetch-month.mjs]
// Uso: node fetch-month.mjs 2026-09   (precisa de HT_API_KEY no seu ambiente)
import { writeFile } from "node:fs/promises";

const API = "https://dashboard.hotelier.tools/api/v1";
const headers = {
  Authorization: `Bearer ${process.env.HT_API_KEY}`,
  "Content-Type": "application/json",
};

async function call(path, options = {}) {
  const res = await fetch(`${API}${path}`, { ...options, headers });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

const month = process.argv[2];
const [year, mon] = month.split("-").map(Number);
const startDate = `${month}-01`;
const endDate = new Date(Date.UTC(year, mon, 0)).toISOString().slice(0, 10);

const roomTypes = await call("/room-types");
const reservations = await call("/methods/getReservationsByDateRange", {
  method: "POST",
  body: JSON.stringify({ params: { startDate, endDate } }),
});

await writeFile(
  `raw-${month}.json`,
  JSON.stringify({ roomTypes: roomTypes.data, reservations: reservations.result }, null, 2)
);
console.log(`Saved raw-${month}.json`);
```

A própria especificação da API diz que os objetos de reserva vêm do Little Hotelier e que a sua "shape may vary" (estrutura pode variar), por isso deixe o agente ler o ficheiro guardado antes de calcular o que quer que seja. `/room-types` dá o `totalRooms` por tipo, que é a outra metade da conta da ocupação.

### Uma sincronização com o Google Sheets

Para uma folha que lista as chegadas dos próximos 30 dias e se atualiza todas as manhãs, abra a sua folha de cálculo, vá a **Extensions → Apps Script** e cole:

```js [Code.gs]
function syncArrivals() {
  const key = PropertiesService.getScriptProperties().getProperty('HT_API_KEY');
  const fmt = d => Utilities.formatDate(d, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  const today = new Date();
  const in30 = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const url = 'https://dashboard.hotelier.tools/api/v1/reservations'
    + '?startDate=' + fmt(today) + '&endDate=' + fmt(in30) + '&limit=100';

  const res = UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Bearer ' + key },
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 200) throw new Error(res.getContentText());

  const rows = JSON.parse(res.getContentText()).data.map(r => [
    r.id, r.guestName, r.status, r.checkIn, r.checkOut, r.roomType, r.totalAmount,
  ]);
  const book = SpreadsheetApp.getActive();
  const sheet = book.getSheetByName('Arrivals') || book.insertSheet('Arrivals');
  sheet.clearContents();
  sheet.appendRow(['ID', 'Guest', 'Status', 'Check-in', 'Check-out', 'Room type', 'Total']);
  if (rows.length) sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
}
```

Guarde a chave em **Project Settings → Script properties** como `HT_API_KEY`, execute-o uma vez para conceder acesso e depois acrescente um acionador diário por tempo em **Triggers**. `/reservations` devolve no máximo 100 estadias por chamada, filtradas pela data de check-in, por isso divida os meses movimentados em semanas. Lembre-se de que a folha passa a conter nomes de hóspedes: partilhe-a com cuidado.

### Um pequeno painel à medida

::prompt{label="Cursor"}
Cria uma pequena aplicação web em Node.js que mostre a ocupação desta noite, as chegadas e saídas de hoje e as estadias com saldo por pagar, usando a API REST do Hotelier Tools. Mantém a HT_API_KEY só no servidor; o navegador tem de chamar o meu servidor, nunca a API diretamente. Guarda as respostas em cache durante cinco minutos.
::

Duas regras tornam isto seguro: a chave fica no servidor (qualquer pessoa que abra uma página consegue ler chaves no código do navegador) e usa cache, porque a API permite 100 pedidos por minuto por endereço IP.

## MCP ou API REST: qual usar?

| | Servidor MCP | API REST |
|---|---|---|
| Melhor para | Fazer perguntas, deixar um agente explorar enquanto programa | Scripts, Sheets, painéis que correm com agendamento |
| Endereço | `https://dashboard.hotelier.tools/api/mcp` | `https://dashboard.hotelier.tools/api/v1` |
| Autenticação | Chave de API ou início de sessão no navegador | Chave de API (`Authorization: Bearer htk_…`) |
| Documentação | Página MCP Setup (`/developer/mcp-setup`) | Explorador Swagger (`/developer/rest-api`) |

Ambos usam a mesma chave e as mesmas permissões. O guia da API REST está em [API do Little Hotelier](/blog/little-hotelier-api).

## Ferramentas de leitura e de escrita: mantenha o agente sob rédea curta

Os agentes de programação são bons a executar ferramentas depressa, e é exatamente por isso que deve abrandá-los aqui.

- **As escritas correm quando o agente as chama.** Fora do painel do Hotelier Tools não há cartão de aprovação. Alterar uma reserva, registar um pagamento, aplicar preços ou definir stop sell acontece assim que a ferramenta corre. Mantenha ativa a definição do seu editor "perguntar antes de executar ferramentas" e não use modos de execução automática com este servidor.
- **As ações irreversíveis ficam bloqueadas de qualquer modo.** Oito ferramentas (enviar faturas por e-mail aos hóspedes, reembolsos, entregar o inquérito do INE, convites de equipa, enviar ligações por e-mail aos hóspedes, responder a perguntas do Booking.com e a verificação da lista de espera que envia mensagens aos hóspedes) só funcionam no painel.
- **As alterações a reservas fazem-se em dois passos.** `propose_reservation_changes` mostra o antes e o depois; `apply_reservation_changes` precisa de `confirmed: true`. Leia a proposta.
- **Nunca faça commit de uma chave.** Use referências no estilo `${HT_API_KEY}`, acrescente os ficheiros de configuração locais ao `.gitignore` e revogue qualquer chave que vaze em `/developer/api-keys`.

## Resolução de problemas: "o servidor não aparece"

- **Nada aparece depois de editar uma configuração:** reinicie o editor ou a CLI. A maioria das ferramentas lê as configurações MCP no arranque.
- **O Claude Code ou o VS Code ignora o servidor:** confirme o `"type": "http"`.
- **O Gemini CLI liga mas falha:** use `httpUrl`, não `url`.
- **401:** chave errada ou revogada, ou a variável de ambiente não está definida nesse terminal.
- **400 "No Little Hotelier credentials configured":** ligue o Little Hotelier em `/credentials`.
- **423 `lh_frozen`:** o início de sessão no Little Hotelier está em pausa após um login falhado (muitas vezes uma palavra-passe expirada). Guarde a nova palavra-passe em **Credentials** ou carregue em **Check now & resume**.
- **429:** demasiados pedidos; espere o tempo indicado em `Retry-After`.
- **A quebra de linha com barra invertida falha no Windows:** o PowerShell não usa `\` para continuar linhas. Cole os comandos numa só linha, como mostrado acima.

::demo-cta{path="/developer/mcp-setup"}
::

## Próximos passos

- Não é programador? [Ligue o Claude](/blog/connect-claude-to-little-hotelier) ou o [ChatGPT](/blog/connect-chatgpt-to-little-hotelier) no navegador.
- Novo nesta ideia? Leia [o que é um servidor MCP](/blog/what-is-mcp-server-hotels).
- Quer folhas de cálculo sem código? Veja [exportar reservas para o Excel](/blog/export-little-hotelier-reservations-excel).
