---
title: "Conectar o ChatGPT ao Little Hotelier: passo a passo e 18 prompts para hotéis"
seoTitle: "Conectar o ChatGPT ao Little Hotelier + 18 prompts"
description: "Conecte o ChatGPT ao Little Hotelier com o modo de programador e uma app MCP, veja o que o seu plano permite e copie 18 prompts para hotéis."
date: 2026-10-03
category: ai
tags: [chatgpt, mcp, ai, prompts, little hotelier]
keywords: [conectar chatgpt ao little hotelier, conector mcp chatgpt, mcp o que é e como usar, chatgpt para hotéis, prompts chatgpt hotel, chatgpt developer mode mcp]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-oauth-consent.webp
coverAlt: "Página Authorize MCP access do Hotelier Tools que um assistente de IA abre ao conectar-se, com um aviso de token de 30 dias e os botões Deny e Allow access"
faq:
  - q: "Que planos do ChatGPT podem conectar-se ao Little Hotelier?"
    a: "Em outubro de 2026, o centro de ajuda da OpenAI diz que o suporte completo a MCP, incluindo ações de escrita, é para Business, Enterprise e Edu na web, enquanto o Pro pode conectar apps MCP com permissões de leitura e fetch no modo de programador. A documentação para programadores da OpenAI também lista o Plus. Free e Go não aparecem. Confirme o que a sua própria conta mostra."
  - q: "Posso usar uma chave de API em vez de iniciar sessão?"
    a: "Não. A OpenAI diz que o ChatGPT não consegue apresentar chaves de API personalizadas a um servidor MCP, por isso escolha OAuth. Você inicia sessão no Hotelier Tools numa janela do navegador e carrega em Allow access."
  - q: "O ChatGPT pode alterar as minhas reservas ou preços?"
    a: "Só se o seu plano permitir ações de escrita e você as confirmar. A OpenAI pede confirmação antes de ações de escrita por predefinição. O Hotelier Tools não acrescenta uma segunda aprovação fora do seu dashboard e bloqueia por completo, para o ChatGPT, os reembolsos, o envio de faturas / notas fiscais por e-mail, a entrega do inquérito do INE e outras ações irreversíveis."
  - q: "Funciona na app móvel do ChatGPT?"
    a: "Não para apps MCP personalizadas. O centro de ajuda da OpenAI diz que as apps MCP do modo de programador são só para web. Use o chatgpt.com num navegador."
  - q: "Os dados dos meus hóspedes são usados para treinar os modelos da OpenAI?"
    a: "Em Business, Enterprise e Edu, a OpenAI diz que por predefinição não treina com informação das apps conectadas. Em Free, Plus, Go e Pro pode fazê-lo, se Improve the model for everyone estiver ativado nos Data controls. Desative-o antes de conectar dados do hotel."
  - q: "Claude ou ChatGPT: qual é melhor para tarefas de hotel?"
    a: "Os dois funcionam com o mesmo servidor do Hotelier Tools. Em outubro de 2026, o Claude permite conectores personalizados com ferramentas de escrita em todos os planos, incluindo o Free (um conector), enquanto o ChatGPT limita o MCP completo de leitura e escrita a Business, Enterprise e Edu. Escolha o assistente que a sua equipa já usa."
---

Sim, pode conectar o ChatGPT ao Little Hotelier. Ative o **developer mode** (modo de programador) no ChatGPT, crie uma app que aponte para o servidor MCP do Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`) com **OAuth** e inicie sessão no Hotelier Tools. O que o ChatGPT poderá fazer depois depende do seu plano: em outubro de 2026, a OpenAI reserva o acesso completo de leitura e escrita para Business, Enterprise e Edu, enquanto o Pro (e, segundo a documentação para programadores da OpenAI, o Plus) conecta-se só com permissões de leitura.

Abaixo estão os passos como a OpenAI os documenta hoje, o que deve verificar na sua conta e 18 prompts que funcionam num hotel pequeno.

## O que você precisa antes de começar

- **Um plano do ChatGPT com modo de programador.** O [guia do developer mode](https://developers.openai.com/api/docs/guides/developer-mode) da OpenAI lista contas Pro, Plus, Business, Enterprise e Education, na web. O seu [centro de ajuda](https://help.openai.com/en/articles/12584461) acrescenta que o **MCP completo, incluindo ações de escrita, é para Business e Enterprise/Edu**, e que o Pro só pode conectar-se com permissões de leitura e fetch.
- **Um navegador no computador.** A OpenAI diz que as apps MCP personalizadas são só para web, não para as apps móveis.
- **Uma conta do Hotelier Tools** com o Little Hotelier conectado em **Credentials** (`/credentials`). O login do proprietário tem o acesso à API de que você precisa. O Hotelier Tools é gratuito para todos os hotéis até o início da cobrança, em 10 de janeiro de 2027.

::callout{type="info" title="O que verificámos e o que você deve verificar"}
O servidor do Hotelier Tools suporta o início de sessão que o ChatGPT usa: OAuth com PKCE e registo automático de clientes. Os menus e as regras de planos do ChatGPT mudam com frequência e não testámos todos os planos de ponta a ponta. Na sua conta, confirme três coisas: que o **Developer mode** aparece, que as ferramentas do Hotelier Tools surgem depois de conectar e se o seu plano permite que o ChatGPT execute ações de escrita.
::

O Hotelier Tools é independente. Não é afiliado nem recomendado pela OpenAI, pela SiteMinder ou pelo Little Hotelier, e liga-se com o login do Little Hotelier da sua própria propriedade.

## Como conectar o ChatGPT ao Little Hotelier, passo a passo

Estes passos seguem o [guia de ligação](https://developers.openai.com/plugins/deploy/connect-chatgpt) da OpenAI em outubro de 2026. Se os seus ecrãs forem diferentes, em cada passo indica-se o caminho antigo do centro de ajuda.

1. Vá a [chatgpt.com](https://chatgpt.com) num navegador e abra **Settings → Security and login**. Ative o **Developer mode**. (Algumas contas mostram-no em **Settings → Apps → Advanced settings**.)
2. Abra **Plugins** ([chatgpt.com/plugins](https://chatgpt.com/plugins)) e carregue no botão **+** para criar uma app do modo de programador. (Ecrãs antigos: **Settings → Apps → Create**.)
3. Preencha o formulário:
   - **Name:** `Hotelier Tools`
   - **Description:** `Reservas, hóspedes, faturas e preços da minha propriedade no Little Hotelier`
   - **MCP server URL:** `https://dashboard.hotelier.tools/api/mcp`
   - **Authentication:** **OAuth**
4. Crie a app. O ChatGPT pode mostrar primeiro **Scan Tools**. Abre-se uma janela do Hotelier Tools.
5. Inicie sessão no Hotelier Tools. Em **Authorize MCP access**, escolha a propriedade, se tiver várias, e carregue em **Allow access**.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="Cartão Authorize MCP access: AI assistant (MCP client) quer aceder à sua conta do Hotelier Tools através da API MCP, o e-mail com sessão iniciada, um token que expira em 30 dias e os botões Deny e Allow access" caption="Carregue em Allow access. O ChatGPT nunca vê a sua palavra-passe / senha do Hotelier Tools nem do Little Hotelier." path="/oauth/authorize" width="472" height="327"}
::

6. Reveja a lista de ferramentas que o ChatGPT encontrou. A app aparece com uma etiqueta **Dev**.
7. Comece uma conversa nova. Abra o menu **+**, escolha **Developer mode** e selecione **Hotelier Tools** (as contas mais recentes também permitem escrever `@` e escolhê-la).

O início de sessão dura **30 dias**. Depois disso, o ChatGPT pede-lhe que volte a conectar. Pode ver e revogar a ligação no Hotelier Tools em **Developer → API Keys** (`/developer/api-keys`), onde tem um selo **MCP client**.

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="Página API keys do Hotelier Tools com o formulário Generate a new key, uma lista Active keys com uma chave mascarada e um botão Revoke, e as notas Good security practice" caption="As chaves e ligações estão listadas em Active keys. Revogue uma para cortar o seu acesso de imediato." path="/developer/api-keys"}
::

### Num espaço de trabalho Business, Enterprise ou Edu

No **Business**, a OpenAI diz que só administradores e proprietários podem usar o modo de programador e publicar apps. Para partilhar a app com colegas, um administrador publica-a em **Workspace settings → Apps → Drafts → Publish**. No **Enterprise e Edu**, os administradores podem conceder o modo de programador a membros escolhidos com acesso por funções. Cada pessoa continua a iniciar sessão no Hotelier Tools com um login que tenha acesso à API.

### Por que não uma chave de API?

A [documentação de autenticação](https://developers.openai.com/plugins/build/auth) da OpenAI diz que o ChatGPT "cannot present custom API keys" (não consegue apresentar chaves de API personalizadas). Por isso, as chaves de API `htk_` que funcionam no [Claude Code, Cursor e VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) não se usam aqui. O caminho é o início de sessão no navegador.

## 18 prompts que funcionam em hotéis pequenos

Comece cada conversa com o Hotelier Tools selecionado. Nomeá-lo no prompt ajuda o ChatGPT a usar os seus dados em vez da web. A referência de reserva abaixo é inventada.

### Chegadas e quartos

::prompt{label="ChatGPT"}
Com o Hotelier Tools, quem chega hoje? Liste hóspede, noites, tipo de quarto e se já tem quarto atribuído.
::

::prompt{label="ChatGPT"}
Que reservas com chegada nos próximos 7 dias ainda não têm quarto atribuído?
::

::prompt{label="ChatGPT"}
Quem faz check-out hoje e alguém ainda tem saldo em aberto?
::

::prompt{label="ChatGPT"}
Quantos quartos de cada tipo ainda estão disponíveis esta noite e amanhã à noite?
::

### Pagamentos e faturas

::prompt{label="ChatGPT"}
Liste as reservas com chegada nos próximos 14 dias que têm saldo por pagar, ordenadas por valor, da maior para a menor.
::

::prompt{label="ChatGPT"}
Que estadias fizeram check-out na semana passada e ainda não têm fatura / nota fiscal? Para cada uma, diga-me por que ainda não pode ser faturada.
::

::prompt{label="ChatGPT"}
A reserva BDC-1234567890 está pronta para faturar? Se não, o que falta exatamente?
::

::prompt{label="ChatGPT"}
Escreva um lembrete de pagamento curto e simpático para cada hóspede que chega esta semana com saldo por pagar. Não envie nada; só me dê os textos.
::

### Preços e disponibilidade

::prompt{label="ChatGPT"}
Mostre-me as minhas tarifas e a disponibilidade de sexta e sábado da próxima semana, por tipo de quarto.
::

::prompt{label="ChatGPT"}
Compare os meus preços das próximas 14 noites com os preços da concorrência que você tem. Em que noites sou o mais barato e em quais sou o mais caro?
::

::prompt{label="ChatGPT"}
Explique, passo a passo, por que o preço recomendado para um quarto duplo no sábado, 14 de novembro, é o que é.
::

::prompt{label="ChatGPT"}
Que noites dos próximos 30 dias têm a ocupação mais baixa? Sugira quais devo olhar primeiro.
::

### Hóspedes

::prompt{label="ChatGPT"}
Encontre o hóspede cujo telefone termina em 4521 e mostre-me as estadias passadas e futuras dele.
::

::prompt{label="ChatGPT"}
Alguma das chegadas dos próximos 7 dias coincide com a minha lista de hóspedes a não aceitar de novo?
::

::prompt{label="ChatGPT"}
Que hóspedes que chegam esta semana ainda não têm documento de identificação ou morada / endereço?
::

### Relatórios

::prompt{label="ChatGPT"}
Resuma o mês passado: chegadas, noites vendidas por tipo de quarto, cancelamentos e no-shows. Apresente em tabela.
::

::prompt{label="ChatGPT"}
O que fizeram as tarefas agendadas esta semana e alguma falhou? Explique qualquer falha em palavras simples.
::

::prompt{label="ChatGPT"}
Quem está na lista de espera, para que datas, e já ficou disponível alguma coisa para eles?
::

As respostas valem o que valem os dados do Little Hotelier. Se um valor parecer errado, peça ao ChatGPT que mostre as reservas que usou.

## ChatGPT conectado ou copiar e colar: qual é a diferença?

Sem ligação, você exporta um relatório do Little Hotelier, cola-o no ChatGPT e pergunta. Serve para uma análise pontual, mas os dados são uma fotografia do momento, a sua exportação pode não ter alguns campos e a lista de hóspedes que colou fica na conversa.

Com a app MCP, o ChatGPT pede ao Hotelier Tools exatamente o que precisa, quando precisa: as chegadas de hoje, o saldo de um hóspede, as tarifas da próxima semana. Você não exporta nada e a resposta reflete o Little Hotelier nesse momento.

Se ainda quiser folhas de cálculo, veja [exportar reservas para Excel](/blog/export-little-hotelier-reservations-excel).

## O ChatGPT pode fazer alterações e como são aprovadas?

Nos planos com MCP completo, sim. O Hotelier Tools oferece ferramentas de escrita como atualizar uma reserva (primeiro uma proposta de antes/depois e depois um passo de aplicação), registar um pagamento, inscrever uma estadia para a [fatura no check-out](/blog/send-invoice-to-guest-at-checkout) e aplicar preços.

::callout{type="warning" title="A confirmação do ChatGPT é a única aprovação"}
Dentro do dashboard do Hotelier Tools, toda a alteração espera por um cartão de aprovação. Fora dele não há nenhum: **uma ferramenta de escrita corre quando o ChatGPT a chama.** A OpenAI diz que "write actions by default require confirmation" e avisa que ações de escrita erradas "could destroy data". Leia cada confirmação antes de a aceitar.
::

Regras práticas:

- **Mantenha as permissões da app em Always ask.** As [permissões de apps](https://help.openai.com/en/articles/20001495) da OpenAI vão de **Always ask** a **Allow all actions**; esta última salta os avisos e acarreta "elevated risk". O ChatGPT trata qualquer ferramenta que não esteja marcada como só de leitura como ação de escrita, por isso espere um aviso mesmo em algumas consultas.
- **Não deixe que memorize aprovações de escrita** em conversas longas. Uma escolha memorizada só dura nessa conversa, mas uma conversa pode fazer muita coisa.
- **Atenção a instruções escondidas em mensagens de hóspedes.** A OpenAI avisa sobre prompt injection. Se o ChatGPT propuser algo que você não pediu, recuse.

Algumas ações nunca estão disponíveis para o ChatGPT, seja o que for que aprove. As ferramentas irreversíveis estão bloqueadas para qualquer cliente externo, incluindo enviar uma fatura / nota fiscal por e-mail a um hóspede, reembolsos, entregar o inquérito do INE, enviar convites à equipa, enviar por e-mail o link da fatura de um hóspede, responder a uma pergunta do Booking.com e executar a verificação da lista de espera que envia mensagens a hóspedes. Ficam no [assistente do dashboard](/blog/ai-assistant-hotel-front-desk), atrás de um cartão.

## Privacidade: para onde vão os dados?

Quando o ChatGPT chama uma ferramenta do Hotelier Tools, o resultado, como nomes de hóspedes, datas e valores, entra na conversa e é processado pela OpenAI.

Segundo o [artigo sobre apps conectadas](https://help.openai.com/en/articles/11487775) da OpenAI, em outubro de 2026:

- No **Business, Enterprise e Edu**, a OpenAI "does not use information accessed from connectors to train models by default" (não usa por predefinição a informação acedida por conectores para treinar modelos).
- No **Free, Plus, Go e Pro**, a OpenAI "may use information accessed from apps to train our models" (pode usar a informação acedida por apps para treinar os seus modelos) se **Improve the model for everyone** estiver ativado. Desative-o em [Data controls](https://help.openai.com/en/articles/7730893) antes de conectar dados do hotel.
- A memória do ChatGPT pode guardar detalhes que leu através de uma app. Reveja **Memory** nas definições se isso lhe interessar.

Os dados dos hóspedes são dados pessoais e o seu hotel continua a ser responsável por eles. Peça apenas o que precisa.

::demo-cta{path="/developer/mcp-setup"}
::

## Resolução de problemas

- **Falta o Developer mode.** O seu plano pode não o incluir ou, no Business, só os administradores o podem usar. No Enterprise e Edu, peça a um administrador que o conceda.
- **Não aparecem ferramentas do Hotelier Tools, ou só algumas.** O seu plano pode permitir apenas permissões de leitura e fetch. Consulte o centro de ajuda da OpenAI para o seu plano, ou use o [Claude](/blog/connect-claude-to-little-hotelier), que permite conectores personalizados com ferramentas de escrita em todos os planos.
- **O ChatGPT deixa de funcionar com a app ao fim de um mês.** O início de sessão durou 30 dias. Volte a conectar em **Settings → Plugins** (ou **Apps**).
- **Erro "No Little Hotelier credentials configured".** Conecte primeiro o Little Hotelier em **Credentials**, no Hotelier Tools.
- **"lh_frozen" ou semelhante.** O início de sessão no Little Hotelier está em pausa após um login falhado, muitas vezes por uma palavra-passe / senha expirada. Guarde a palavra-passe nova em **Credentials** ou carregue em **Check now & resume**.

## Resumo

- Ative o modo de programador, crie uma app com o URL `https://dashboard.hotelier.tools/api/mcp` e **OAuth**, e carregue em **Allow access**.
- Verifique o seu plano: o MCP completo de leitura e escrita é Business, Enterprise e Edu; o Pro, e possivelmente o Plus, recebem permissões só de leitura, segundo a OpenAI.
- Mantenha as permissões da app em **Always ask**; os reembolsos e outras ações irreversíveis estão bloqueados de qualquer forma.
- Novo no MCP? Comece por [o que é um servidor MCP](/blog/what-is-mcp-server-hotels). Todas as ferramentas estão na [página API & MCP](/tools/bot/api-mcp).
