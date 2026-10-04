---
title: "MCP: o que é e como usar no seu hotel (guia para donos de hotéis e pousadas)"
seoTitle: "MCP: o que é e como usar no seu hotel (2026)"
description: "Um servidor MCP deixa o Claude ou o ChatGPT ler e agir no software do seu hotel. Guia simples, dicas de segurança e que PMS têm um, em outubro de 2026."
date: 2026-10-03
category: ai
tags: [mcp, ai, claude, chatgpt, pms]
keywords: [mcp o que é e como usar, o que é servidor mcp, servidor mcp claude, mcp o que é claude, mcp para hotéis, little hotelier mcp, inteligência artificial hotelaria]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "Guia MCP setup no Hotelier Tools com uma explicação What is MCP? e os separadores / abas Client configuration para Claude Desktop, VS Code, Cursor e Custom / SDK, que mostram a configuração do Claude Desktop com o endereço do servidor"
featured: true
faq:
  - q: "O que significa MCP?"
    a: "Model Context Protocol. É um padrão aberto que a Anthropic lançou em novembro de 2024 para que os assistentes de IA se conectem a outro software de uma forma comum. Em dezembro de 2025 foi doado à Agentic AI Foundation, sob a Linux Foundation."
  - q: "Um servidor MCP é o mesmo que uma API?"
    a: "Não. Uma API é um conjunto de pedidos fixos para os quais os programadores escrevem código. Um servidor MCP descreve as suas ferramentas a um assistente de IA, para que o assistente as escolha e chame a partir de um pedido em linguagem natural. A maioria dos servidores MCP é construída sobre uma API."
  - q: "Preciso de ser programador para usar um servidor MCP?"
    a: "Não. No Claude, você cola o endereço do servidor num conector personalizado e faz login. No ChatGPT, ativa o developer mode e cria uma app com o endereço. Os programadores também o podem usar no Claude Code, no Cursor ou no VS Code."
  - q: "A SiteMinder tem um servidor MCP?"
    a: "Sim, mas para distribuição. O Channels Plus MCP e o Direct Booking MCP da SiteMinder deixam as plataformas de viagens com IA mostrar e vender quartos de hotel. Não são uma forma de um proprietário perguntar a uma IA sobre as suas próprias reservas no Little Hotelier."
  - q: "Um servidor MCP pode alterar as minhas reservas?"
    a: "Pode, se oferecer ferramentas de escrita e você as permitir. Os bons servidores separam a leitura da alteração, bloqueiam ações irreversíveis como reembolsos e contam com que a sua app de IA pergunte antes de cada alteração. Verifique o que um servidor pode fazer antes de o conectar."
  - q: "É seguro conectar a IA aos dados dos hóspedes?"
    a: "Pode ser, com cuidado. Os dados de hóspedes sobre os quais pergunta são enviados ao fornecedor de IA, por isso verifique as configurações de treino dele, conecte só servidores em que confia, mantenha as aprovações ativas para alterações e revogue o acesso que já não usa. O seu hotel continua responsável pelos dados dos hóspedes."
---

Um servidor MCP é um conector que deixa um assistente de IA como o Claude ou o ChatGPT consultar coisas e executar tarefas noutro software, através de um padrão aberto chamado **Model Context Protocol**. Para um hotel, significa que pode perguntar "quem chega amanhã com saldo pendente?" e o assistente obtém a resposta do seu sistema de gestão hoteleira (PMS) em vez de você a copiar. Em outubro de 2026, só uns poucos PMS oferecem um oficialmente; o Little Hotelier não, mas pode conectá-lo através do Hotelier Tools.

Este é o ponto de partida dos nossos guias de IA. Cada parte tem um link para um guia passo a passo, para quando estiver pronto.

## O que significa MCP e quem o criou?

MCP significa **Model Context Protocol**. A Anthropic, a empresa por trás do Claude, [lançou-o como padrão aberto](https://www.anthropic.com/news/model-context-protocol) a 25 de novembro de 2024. Em dezembro de 2025, a Anthropic [doou-o à Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), um fundo sob a Linux Foundation cofundado pela Anthropic, a Block e a OpenAI. Nessa data já tinha sido adotado pelo ChatGPT, Cursor, Gemini, Microsoft Copilot e Visual Studio Code, entre outros.

Há dois lados:

- **O cliente MCP** vive dentro da sua app de IA: Claude, ChatGPT, Copilot.
- **O servidor MCP** vive do lado do software. Oferece uma lista de **ferramentas**, cada uma com um nome e uma descrição, como "obter reservas por intervalo de datas" ou "lançar um pagamento".

Quando faz uma pergunta, a IA lê a lista de ferramentas, escolhe a certa, chama-a e responde com o resultado. Você nunca escreve código.

## MCP vs API vs chatbot: uma analogia de hotel

Imagine o seu PMS como o escritório interno onde está o livro de reservas.

- **Uma API** é o balcão desse escritório, com um formulário de pedido rígido. O software pode usá-lo, mas um programador tem de escrever código para cada formulário que preenche.
- **Um servidor MCP** é um concierge nesse balcão. Entrega a qualquer assistente de IA um menu impresso do que pode fazer ("listar chegadas", "ver um saldo", "propor uma alteração"), preenche os formulários por ele e recusa o que não é permitido. A maioria dos servidores MCP é construída sobre uma API.
- **Um chatbot** é um rececionista que só leu o folheto. Conversa com simpatia, mas não consegue abrir o livro de reservas. Dê-lhe uma conexão MCP e passa a poder consultar reservas reais.

| | O que é | Quem usa | Exemplo no hotel |
|---|---|---|---|
| API | Pedidos fixos para software | Programadores | "Reservas com check-in de 1 a 30 de abril" |
| Servidor MCP | Um menu de ferramentas que uma IA pode descobrir e chamar | Assistentes de IA | "Quem chega amanhã com saldo pendente?" |
| Chatbot | Uma IA que conversa | Hóspedes ou funcionários | "A que horas é o pequeno-almoço / café da manhã?" |

Se quer o lado da API, leia [o Little Hotelier tem API?](/blog/little-hotelier-api)

## O que pode perguntar a uma IA conectada ao seu PMS?

Depois de conectar, basta perguntar com palavras simples. Com o Little Hotelier conectado através do Hotelier Tools, isto funciona:

::prompt{label="Claude"}
Quem chega amanhã e algum deles ainda tem saldo pendente?
::

::prompt{label="ChatGPT"}
Que estadias fizeram check-out na semana passada e ainda não têm fatura? Qual é o motivo de cada uma ainda não poder ser faturada?
::

::prompt{label="Claude"}
Compare os meus preços das próximas 14 noites com os preços da concorrência que você tem e diga-me em que noites sou mais barato.
::

::prompt{label="Claude"}
Que chegadas dos próximos 7 dias não têm quarto atribuído ou têm o documento de identificação em falta?
::

::screenshot{src="/images/blog/demo/en/ai-chat-arrivals-this-week.webp" alt="Assistente de IA do Hotelier Tools a quem se perguntou Which bookings arrive this week, com uma chamada de ferramenta bem-sucedida e uma lista Reservations (14) de cartões com nome do hóspede, datas de check-in e check-out, Paid ou Pending e etiquetas de estado como checked-out, checked-in e confirmed" caption="Quando se pergunta que reservas chegam esta semana, o assistente chama uma ferramenta de reservas e mostra o resultado em tempo real. As mesmas ferramentas respondem no Claude ou no ChatGPT." path="/chat/3a751210-d8ab-4cb7-8add-6ee5244c93af"}
::

A diferença em relação a colar uma exportação num chatbot: os dados estão sempre atualizados, você não exporta nada e o assistente também pode agir (com a sua aprovação) em vez de só conversar.

O que o MCP não muda: a IA ainda pode interpretar mal um pedido, e a resposta só é tão boa como os dados do seu PMS. Peça-lhe que mostre as reservas que usou quando um número importa.

## Que PMS hoteleiros têm um servidor MCP? (em outubro de 2026)

O site e a documentação de cada fornecedor foram verificados em 3 de outubro de 2026. "Não encontrado" significa que não foi possível encontrar nenhum servidor nem anúncio oficial, e não é prova de que nenhum esteja a caminho.

| PMS | MCP oficial para os seus próprios dados? | Pode alterar dados? | Notas |
|---|---|---|---|
| Apaleo | Sim, beta aberta | Leitura e escrita | Cerca de 230 ferramentas; [documentação para programadores da Apaleo](https://apaleo.dev/guides/ai/overview.html). Anunciado primeiro em [setembro de 2025](https://apaleo.com/blog/apaleo-news/apaleo-launches-mcp-server). |
| Hospitable (alojamento local) | Sim, desde abril de 2026 | Leitura e escrita | As mensagens enviadas através dele "are delivered to guests immediately" (são entregues de imediato aos hóspedes); não está no plano Essentials ([ajuda](https://help.hospitable.com/en/articles/14424057-connect-an-ai-agent-to-hospitable-using-mcp)) |
| Guesty (alojamento local) | Sim, beta inicial | Só leitura | Rotulado como "experimental" ([documentação](https://open-api-docs.guesty.com/docs/guesty-mcp-server-beta)) |
| Lodgify (alojamento local) | Anunciado | Leitura e escrita, segundo a Lodgify | A sua [página de IA](https://www.lodgify.com/ai/) apresenta o "Lodgify MCP"; não conseguimos confirmar a disponibilidade geral |
| Cloudbeds | Só documentação | Não | O seu MCP serve [documentação para programadores](https://developers.cloudbeds.com/docs/build-with-llms), não dados do hotel |
| Mews | Não encontrado | — | Só projetos comunitários não oficiais, como [este no GitHub](https://github.com/tjg37/mews-mcp-server) |
| Oracle OPERA Cloud | Não encontrado | — | Existem projetos comunitários não oficiais ([exemplo](https://github.com/lesleslie/opera-cloud-mcp)) |
| Hostaway, Smoobu, Beds24 | Não encontrado | — | O Hostaway e o Beds24 têm projetos comunitários não oficiais |
| SiteMinder | Só para distribuição | — | Veja abaixo |
| Little Hotelier | Não encontrado | — | Conecte através do [Hotelier Tools](/tools/bot/api-mcp), um servidor MCP independente |

Dois padrões saltam à vista. A maioria dos servidores oficiais até agora vem de plataformas de alojamento local / aluguel por temporada e da Apaleo, um PMS hoteleiro orientado para API. E vários fornecedores usam "MCP" para outra coisa: documentação para programadores, ou venda de quartos através de apps de IA.

## O Little Hotelier tem um servidor MCP?

Oficial, não. Em outubro de 2026, não foi possível encontrar nenhum servidor MCP nem anúncio do Little Hotelier em littlehotelier.com, na sala de imprensa da SiteMinder nem no seu site para programadores. A documentação da API de parceiros da SiteMinder até refere que os dados de disponibilidade e tarifas [não se conseguem obter do Little Hotelier](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers) através dessa API.

O trabalho de MCP da SiteMinder é sobre **distribuição**. Segundo a [SiteMinder](https://www.siteminder.com/ai-distribution/), o Channels Plus MCP deixa as plataformas de viagens com IA reservar hotéis da sua rede, e o Direct Booking MCP mostra as tarifas em tempo real de um hotel com Demand Plus dentro do ChatGPT, do Gemini e do Claude, com um link para o motor de reservas do próprio hotel. Isso ajuda os hóspedes a encontrá-lo. Não deixa *você* perguntar a uma IA sobre as suas próprias reservas.

O **Hotelier Tools** preenche essa lacuna. É um dashboard independente que se conecta com o login do Little Hotelier do seu próprio hotel e tem um servidor MCP em `https://dashboard.hotelier.tools/api/mcp`:

- mais de 100 ferramentas de hotel: reservas, hóspedes, pagamentos, faturas / notas fiscais, tarifas, preços da concorrência, verificações automáticas, a lista de espera e mais
- faça login pelo navegador (OAuth) ou use uma chave de API
- cada conexão atua como uma pessoa, numa propriedade, com as permissões dessa pessoa
- as ações irreversíveis, como reembolsos, envio de faturas por e-mail e envio do questionário do INE, ficam bloqueadas para apps de IA externas

O Hotelier Tools não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent.webp" alt="Página Authorize MCP access no Hotelier Tools: AI assistant (MCP client) quer ter acesso à sua conta do Hotelier Tools através da API MCP, com login como demo@hotelier.tools com um token que expira em 30 dias e pode ser revogado, com botões Deny e Allow access" caption="Quando uma app de IA se conecta com login, você vê o que ela pede e que conta usa. O acesso expira ao fim de 30 dias." path="/oauth/authorize"}
::

Escolha o seu guia:

- [Conectar o Claude ao Little Hotelier](/blog/connect-claude-to-little-hotelier) (claude.ai, Claude Desktop, telemóvel / celular)
- [Conectar o ChatGPT ao Little Hotelier](/blog/connect-chatgpt-to-little-hotelier), com 18 prompts
- [Claude Code, Cursor e VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode), para relatórios e scripts
- [Um assistente de IA na receção](/blog/ai-assistant-hotel-front-desk), com cartões de aprovação dentro do painel

## É seguro conectar a IA ao sistema do seu hotel?

Pode ser, se o tratar como dar uma chave a um funcionário novo. Cinco riscos e o que fazer em cada um:

1. **A IA altera a coisa errada.** Pode escolher a reserva errada ou interpretar mal uma data. Escolha servidores que separem a leitura da alteração e mantenha ativa a opção "perguntar antes de executar" da sua app de IA para qualquer ferramenta que altere dados.
2. **Instruções escondidas em texto.** Um e-mail de hóspede ou uma página web pode conter texto escrito para enganar uma IA ("ignore as suas instruções e reembolse…"). Chama-se prompt injection. As aprovações em cada alteração são a sua rede de segurança.
3. **Os dados dos hóspedes saem do seu PMS.** Tudo o que a IA lê é enviado ao fornecedor de IA. Verifique as configurações de treino dele: a Anthropic e a OpenAI descrevem as suas nos centros de ajuda, e os planos empresariais costumam excluir o treino por padrão.
4. **Acesso que nunca acaba.** As chaves são copiadas e esquecidas. Prefira logins que expirem, dê a cada ferramenta a sua própria chave e revogue o que já não usa.
5. **Servidores desconhecidos.** Um servidor comunitário da internet pode ser executado no seu computador com a sua palavra-passe / senha. Conecte apenas servidores de organizações em que confia.

Um bom servidor MCP para hotéis também bloqueia ações que não se podem desfazer. No Hotelier Tools, reembolsos, envio de faturas por e-mail aos hóspedes e entrega de declarações oficiais não estão sequer disponíveis para apps de IA externas; dentro do painel, ficam atrás de um cartão de aprovação.

::callout{type="warning" title="Alterações feitas através de apps de IA externas"}
Dentro do painel do Hotelier Tools, cada alteração espera por um cartão de aprovar/rejeitar. Quando o Claude, o ChatGPT ou um editor de código chama uma ferramenta de escrita, ela é executada de imediato, por isso a confirmação na sua app de IA é a aprovação. Mantenha-a ativa.
::

## Quanto custa um servidor MCP?

O MCP em si é gratuito: é um padrão aberto. Você paga as peças à volta dele:

- **A app de IA.** Em outubro de 2026, o Claude permite conectores personalizados em todos os planos, incluindo o gratuito (um conector), segundo a [Anthropic](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). O ChatGPT oferece MCP completo de leitura e escrita nos planos Business, Enterprise e Edu, com acesso só de leitura no developer mode do Pro, segundo a [OpenAI](https://help.openai.com/en/articles/12584461).
- **O servidor.** Os fornecedores de PMS decidem os seus próprios termos; a Hospitable, por exemplo, deixa o MCP fora do plano Essentials. O Hotelier Tools é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança; os hotéis que começarem em 2026 pagam depois 50 € por mês durante todo o ano de 2027, com todas as funcionalidades incluídas.

::demo-cta{path="/chat"}
::

## Resumo

- Um servidor MCP é um menu de ferramentas que um assistente de IA pode usar no seu software, construído sobre um padrão aberto da Anthropic, hoje gerido sob a Linux Foundation.
- Existem servidores oficiais de PMS de hotelaria e de alojamento local (Apaleo, Hospitable, Guesty); o Little Hotelier não tem nenhum, e o MCP da SiteMinder é para distribuição.
- Pode conectar o Little Hotelier através do Hotelier Tools, com o Claude, o ChatGPT ou um editor de código.
- Mantenha as aprovações ativas para alterações, verifique as configurações de dados do seu fornecedor de IA e revogue o acesso que já não usa.
