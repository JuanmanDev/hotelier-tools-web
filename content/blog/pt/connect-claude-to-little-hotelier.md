---
title: "Como conectar o Claude ao Little Hotelier (MCP, passo a passo)"
seoTitle: "Conectar o Claude ao Little Hotelier: MCP passo a passo"
description: "Conecte o Claude ao Little Hotelier com um conector personalizado: cole um URL, inicie sessão e permita o acesso. Prompts, segurança e problemas comuns."
date: 2026-10-03
category: ai
tags: [claude, mcp, ai, connectors, little hotelier]
keywords: [conectar claude ao little hotelier, little hotelier mcp, servidor mcp claude, mcp o que é e como usar, conector personalizado claude, claude desktop mcp]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "Guia de configuração MCP do Hotelier Tools com a explicação What is MCP? e o separador Claude Desktop selecionado, a mostrar os passos e o trecho de configuração com o URL do servidor MCP"
featured: true
faq:
  - q: "Que planos do Claude podem adicionar um conector personalizado?"
    a: "Em outubro de 2026, a Anthropic lista os conectores personalizados nos planos Free, Pro, Max, Team e Enterprise. As contas Free podem adicionar um conector personalizado. No Team e no Enterprise, um Owner adiciona-o para a organização e cada membro conecta-se depois com o seu próprio login."
  - q: "A ligação ao Little Hotelier funciona na app móvel do Claude?"
    a: "Sim. Depois de a conectar no claude.ai ou no Claude Desktop, a Anthropic diz que também fica disponível no Claude para iOS e Android. Adicionar novos conectores personalizados pelo telemóvel / celular ainda está em beta, por isso faça a configuração num computador."
  - q: "Como desligo o Claude ou giro o acesso?"
    a: "No Claude, abra Customize, depois Connectors, e escolha Disconnect ou Remove. No Hotelier Tools, abra Developer, API Keys e revogue a ligação ou a chave que usou em Active keys. Revogar do lado do Hotelier Tools corta o acesso de imediato."
  - q: "O Claude pode alterar as minhas reservas ou preços?"
    a: "Sim, se você deixar. As ferramentas de escrita correm quando o Claude as chama, e o Hotelier Tools não acrescenta um segundo cartão de aprovação fora do seu próprio dashboard, por isso mantenha a aprovação por ferramenta do Claude em Needs approval. Reembolsos, envio de faturas / notas fiscais por e-mail, entrega do inquérito do INE e outras ações irreversíveis estão bloqueados para o Claude."
  - q: "O Little Hotelier tem um servidor MCP próprio?"
    a: "Não oficial, em outubro de 2026. O trabalho de MCP da SiteMinder é sobre vender quartos através de assistentes de IA, não sobre proprietários consultarem os seus próprios dados. O Hotelier Tools gere um servidor MCP independente que se liga com o login do Little Hotelier da sua propriedade."
  - q: "Isto é uma integração oficial da Anthropic ou do Little Hotelier?"
    a: "Não. O Hotelier Tools é independente e não é afiliado nem recomendado pela Anthropic, pela SiteMinder ou pelo Little Hotelier. Usa o protocolo MCP padrão que o Claude suporta em qualquer conector personalizado."
---

O Little Hotelier não tem um servidor MCP próprio (em outubro de 2026), mas pode conectar o Claude a ele através do Hotelier Tools, que gere um para a sua propriedade. No Claude, abra **Customize → Connectors → Add custom connector**, cole `https://dashboard.hotelier.tools/api/mcp`, inicie sessão no Hotelier Tools e carregue em **Allow access**. O Claude passa a responder com base nas suas reservas em tempo real e, se você deixar, a fazer alterações.

Novo na ideia? Leia primeiro [o que é um servidor MCP](/blog/what-is-mcp-server-hotels). Leva três minutos.

## O que você precisa antes de começar

::callout{type="tip" title="Lista de verificação"}
- **Uma conta do Claude.** Em outubro de 2026, a [Anthropic lista os conectores personalizados](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) nos planos Free, Pro, Max, Team e Enterprise. As contas Free podem adicionar um.
- **Uma conta do Hotelier Tools** com o Little Hotelier conectado em **Credentials** (`/credentials`). É gratuito para todos os hotéis até o início da cobrança, em 10 de janeiro de 2027.
- **Acesso à API no Hotelier Tools.** O proprietário da propriedade tem-no. Sem ele, a ligação é recusada.
::

O Hotelier Tools lê os seus dados com o login do Little Hotelier da sua própria propriedade. Não é afiliado nem recomendado pela SiteMinder, pelo Little Hotelier nem pela Anthropic.

## Como conectar o Claude ao Little Hotelier (claude.ai e Claude Desktop)

Este é o caminho recomendado. Você inicia sessão pelo navegador, por isso não há chave para copiar. Estes passos seguem as [instruções atuais da Anthropic](https://claude.com/docs/connectors/custom/add-unlisted) para contas Free, Pro e Max.

1. Abra o [claude.ai](https://claude.ai) ou a app Claude Desktop e vá a **Customize → Connectors**. Alguns ecrãs ainda lhe chamam **Settings → Connectors**.
2. Clique em **Add custom connector** (em algumas contas: **+ Add** e depois **Add custom connector**).
3. Dê-lhe o nome `Hotelier Tools` e cole o URL do servidor MCP: `https://dashboard.hotelier.tools/api/mcp`
4. Se o Claude perguntar como as pessoas iniciam sessão, escolha **Sign in now**. Se pedir um cliente OAuth, escolha **Register automatically**: o servidor do Hotelier Tools suporta esse registo automático. Se só vir **Advanced settings**, deixe-as vazias.
5. Clique em **Add** e depois em **Connect**. Abre-se uma janela do Hotelier Tools.
6. Inicie sessão no Hotelier Tools. Em **Authorize MCP access**, escolha a propriedade (só se tiver várias) e carregue em **Allow access**.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="Cartão Authorize MCP access: AI assistant (MCP client) quer aceder à sua conta do Hotelier Tools através da API MCP, o e-mail com sessão iniciada, um token que expira em 30 dias e os botões Deny e Allow access" caption="Carregue em Allow access (com várias propriedades, escolhe primeiro uma). O Claude nunca vê a sua palavra-passe / senha." path="/oauth/authorize" width="472" height="327"}
::

7. Comece uma conversa nova, clique em **+**, abra **Connectors** e confirme que o **Hotelier Tools** está ligado.
8. Faça uma primeira pergunta (exemplos abaixo). O Claude mostra que ferramenta quer usar e pergunta antes de a executar.

O início de sessão dura **30 dias**. Depois disso, o Claude pede-lhe que volte a conectar.

### Num plano Team ou Enterprise

Um Owner adiciona o conector uma vez: **Organization settings → Connectors → Add → Custom → Web**, com o mesmo URL. Cada colega abre depois **Customize → Connectors**, encontra o Hotelier Tools com a etiqueta **Custom** e clica em **Connect**. Cada ligação inicia sessão no Hotelier Tools em separado, e o Claude age com as permissões do login usado.

### Na app móvel

Segundo a [Anthropic](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), um conector que configurou no claude.ai ou no Claude Desktop também está disponível no Claude para iOS e Android. Adicionar um diretamente no telemóvel / celular ainda está em beta, por isso faça a configuração num computador.

## Usar uma chave de API em vez de iniciar sessão

A maioria das pessoas deve usar o início de sessão acima. Uma chave de API é útil quando quer um acesso que não expire aos 30 dias ou um cliente que não consegue fazer o início de sessão no navegador.

1. No Hotelier Tools, abra **Developer → API & MCP → API Keys** (`/developer/api-keys`).
2. Em "Generate a new key", escreva um nome como `claude-desktop` e carregue em **Generate key**.
3. Copie-a agora. A página avisa: "Copy this key now — it will not be shown again." (Copie esta chave agora, não voltará a ser mostrada.) As chaves começam por `htk_`.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Página API keys logo depois de gerar uma chave: caixa verde Key generated com o aviso Copy this key now, it will not be shown again, com a chave mascarada e um botão de copiar, a nova chave Blog integration em Active keys junto a outra chave, cada uma com Revoke, e um aviso de API key created" caption="Crie uma chave, ou revogue uma, na página API Keys. A chave completa só é mostrada uma vez." path="/developer/api-keys"}
::

**No claude.ai**, algumas organizações veem uma secção **Request headers** na caixa do conector. A Anthropic marca-a como beta e só disponível para um conjunto limitado de organizações. Se a tiver, escolha **No sign-in**, adicione o cabeçalho `authorization` e introduza `Bearer htk_YOUR_API_KEY` (com a palavra Bearer e um espaço).

**No Claude Desktop**, o ficheiro / arquivo de configuração (**Settings → Developer → Edit Config**) destina-se a servidores que correm no seu próprio computador. A documentação da Anthropic diz que os servidores remotos se adicionam [através de Connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). A página MCP Setup do Hotelier Tools mostra um trecho com `url` + `headers`; se o Claude Desktop o ignorar, a solução habitual é a ponte gratuita da comunidade [mcp-remote](https://github.com/punkpeye/mcp-remote), que precisa do [Node.js](https://nodejs.org) instalado. É uma configuração típica que não testámos em todas as versões do Claude Desktop:

```json [claude_desktop_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://dashboard.hotelier.tools/api/mcp",
        "--header",
        "Authorization:${HT_AUTH}"
      ],
      "env": {
        "HT_AUTH": "Bearer htk_YOUR_API_KEY"
      }
    }
  }
}
```

Guarde o ficheiro / arquivo e feche e volte a abrir por completo o Claude Desktop. O cabeçalho escreve-se sem espaço depois dos dois pontos de propósito: a documentação do mcp-remote explica que o Claude Desktop no Windows pode estragar os espaços nos argumentos.

### Chave de API ou início de sessão: qual usar?

| | Início de sessão (OAuth) | Chave de API (`htk_…`) |
|---|---|---|
| Configuração | Cole o URL, inicie sessão, **Allow access** | Gere uma chave, cole-a numa configuração |
| Dura | 30 dias, depois volta a conectar | Até você a revogar |
| Ideal para | claude.ai, Claude Desktop, móvel | Scripts, [Claude Code, Cursor e VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) |
| Revogar em | `/developer/api-keys` (Active keys) | `/developer/api-keys` |

As duas funcionam da mesma forma depois de conectadas: o Claude age **como a pessoa que iniciou sessão ou criou a chave**, numa **única propriedade**, com as permissões atuais dessa pessoa.

## O que perguntar primeiro ao Claude

Comece com perguntas que só leem. Mencionar "Hotelier Tools" ajuda o Claude a escolher o conector certo em vez de pesquisar na web.

::prompt{label="Claude"}
Com o Hotelier Tools, quem chega hoje e amanhã? Mostre nome, noites, quarto e qualquer saldo ainda por pagar.
::

::prompt{label="Claude"}
Que reservas com chegada nos próximos 7 dias ainda não têm quarto atribuído?
::

::prompt{label="Claude"}
Que hóspedes fizeram check-out na semana passada e ainda não têm fatura / nota fiscal? Para cada um, diga-me por que ainda não pode ser faturado.
::

::prompt{label="Claude"}
Mostre-me os problemas em aberto das verificações automáticas, agrupados por data de chegada, com o que preciso de corrigir no Little Hotelier.
::

::prompt{label="Claude"}
Quais são as minhas tarifas e a disponibilidade do próximo fim de semana, e como se comparam com os preços da concorrência que você tem?
::

::prompt{label="Claude"}
Explique, passo a passo, o preço recomendado para um quarto duplo no sábado, 14 de novembro.
::

O Claude também pode combinar respostas: "Faça uma tabela das chegadas da próxima semana com saldos por pagar e redija um lembrete de pagamento educado para cada uma" funciona bem. Os rascunhos ficam no Claude; nada é enviado.

## O que o Claude pode fazer com os dados do seu hotel e como mantê-los seguros?

O servidor MCP do Hotelier Tools oferece ao Claude mais de 100 ferramentas de hotel, sempre limitadas pelas suas permissões.

**Pode ler:** reservas e hóspedes, pagamentos, faturas e a preparação para faturar, tarifas e disponibilidade, preços da concorrência e recomendações de preço com as suas razões, problemas das verificações automáticas, a lista de não aceitar de novo, a lista de espera, tarefas agendadas e os dados da propriedade lidos do Little Hotelier.

**Pode alterar, quando o Claude chama a ferramenta:** dados de reservas (primeiro uma proposta de antes/depois e depois um passo de aplicação que precisa de `confirmed: true`), registos de pagamento, inscrição para a [fatura no check-out](/blog/send-invoice-to-guest-at-checkout), preços a partir das recomendações, stop sell por canal, entradas da lista de espera e tarefas agendadas.

**Não pode** fazer nada irreversível: essas ferramentas estão bloqueadas para o Claude e para qualquer outro cliente externo. Por exemplo, não pode:

- enviar uma fatura / nota fiscal por e-mail a um hóspede
- fazer um reembolso
- entregar o inquérito do INE
- enviar convites à equipa
- enviar por e-mail o link da fatura de um hóspede
- responder a uma pergunta de um hóspede do Booking.com
- executar a verificação da lista de espera que envia mensagens a hóspedes

Isso fica no chat do dashboard do Hotelier Tools, atrás de um cartão de aprovação. O Claude também não pode ver outras propriedades, ir além das suas permissões nem fazer nada que o próprio Little Hotelier recusaria.

### Ações de escrita: como manter o Claude seguro

::callout{type="warning" title="O aviso do Claude é a sua aprovação"}
Dentro do dashboard do Hotelier Tools, toda a alteração espera por um cartão de aprovar/rejeitar. Fora dele, não há segundo cartão: **quando o Claude chama uma ferramenta de escrita, ela corre.** A aprovação que dá no Claude é a única.
::

Cinco hábitos mantêm isso seguro:

1. **Mantenha as aprovações ativas nas ferramentas de escrita.** Em **Customize → Connectors → Hotelier Tools**, a Anthropic permite definir cada ferramenta como **Always allow**, **Needs approval** ou **Blocked**. As ferramentas de leitura podem ficar em "Always allow". Deixe em "Needs approval" tudo o que altera dados.
2. **Bloqueie o que nunca usa.** Se o Claude nunca deve mexer em preços, defina `apply_price_recommendations` e `set_channel_stop_sell` como **Blocked**.
3. **Leia a proposta.** Nas alterações de reserva, o Claude mostra primeiro um antes/depois a partir de `propose_reservation_changes`. Confirme a referência da reserva e os valores antes de dizer que sim.
4. **Atenção a instruções escondidas em texto.** As mensagens de hóspedes e os sites são escritos por desconhecidos. Se o resultado de uma ferramenta de repente pedir ao Claude algo que você não pediu, pare. A Anthropic dá o [mesmo conselho](https://claude.com/docs/connectors/custom/add-unlisted#security-and-privacy).
5. **Saiba quem está conectado.** Cada ligação age como o login do Hotelier Tools que a criou. Revogue as antigas em `/developer/api-keys`, e sempre que alguém sair.

## Os dados dos meus hóspedes são enviados à Anthropic?

Sim, as partes que o Claude lê. Quando o Claude chama uma ferramenta, o resultado (nomes de hóspedes, datas, valores) passa a fazer parte da sua conversa e é processado pela Anthropic nos termos do seu plano.

Em outubro de 2026, a Anthropic diz que os dados de treino dos planos de consumidor "does not include raw content from connectors… including remote and local MCP servers" (não incluem conteúdo bruto de conectores, incluindo servidores MCP remotos e locais), a menos que você o copie para a conversa ([fonte](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)). Nos planos comerciais (Team, Enterprise, API), as entradas e saídas [não são usadas para treino por predefinição](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training).

Os dados dos hóspedes são dados pessoais e o seu hotel continua a ser responsável por eles. Peça ao Claude só o que precisa e desligue o conector nas conversas que não o exigem.

::demo-cta{path="/developer/mcp-setup"}
::

## Resolução de problemas

| O que vê | Causa provável | O que fazer |
|---|---|---|
| O Claude diz que não consegue conectar, ou um erro 401 | O início de sessão expirou (30 dias), a chave foi revogada ou já não tem acesso à propriedade | **Disconnect** e **Connect** de novo, ou crie uma chave nova |
| 400 "No Little Hotelier credentials configured" | O Little Hotelier ainda não está conectado | Conecte-o em **Credentials** (`/credentials`) |
| 403 `permission_denied` | O seu login não tem acesso à API | Peça ao proprietário que dê acesso à API à sua função |
| 423 `lh_frozen` | O início de sessão no Little Hotelier ficou em pausa após uma falha, muitas vezes por uma palavra-passe / senha expirada | Guarde a palavra-passe nova em **Credentials** ou carregue em **Check now & resume** |
| As ferramentas não aparecem na conversa | O conector está desligado nesta conversa, ou o Desktop não foi reiniciado | **+ → Connectors** → ligue-o; reinicie o Claude Desktop depois de editar a configuração |
| A janela de início de sessão nunca abre | Pop-ups bloqueados | Permita pop-ups para o claude.ai e tente **Connect** de novo |

## Próximos passos

- Quer o mesmo no ChatGPT? Siga [conectar o ChatGPT ao Little Hotelier](/blog/connect-chatgpt-to-little-hotelier).
- Vai criar relatórios ou scripts? Veja [Claude Code, Cursor e VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) ou o [guia da API REST](/blog/little-hotelier-api).
- Prefere cartões de aprovação para cada alteração? Use o [assistente integrado](/blog/ai-assistant-hotel-front-desk) no dashboard.
- Tudo o que o servidor oferece está na [página de funcionalidade API & MCP](/tools/bot/api-mcp).
