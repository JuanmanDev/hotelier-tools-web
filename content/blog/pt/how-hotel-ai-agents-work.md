---
title: "Como funcionam os agentes de IA de um hotel, e porque não agem sozinhos (respostas a hóspedes, chat da equipa, MCP)"
seoTitle: "Como funcionam os agentes de IA num hotel, com segurança"
description: "Os agentes de IA de um dashboard de hotel: o que cada um lê e faz, como se verificam as mensagens dos hóspedes e porque cada alteração pede aprovação."
date: 2026-11-05
category: ai
tags: [ia, agentes de ia, segurança, mensagens de hóspedes, aprovações, mcp, prompt injection]
keywords: [como funcionam os agentes de ia num hotel, a ia é segura para mensagens de hóspedes, segurança de agentes de ia em hotelaria, prompt injection chatbot hotel, assistente de ia para hotel com aprovação humana, a ia pode alterar uma reserva sozinha, verificar identidade do hóspede whatsapp hotel, responder mensagens booking.com com ia, permissões servidor mcp hotel]
feature: ai-assistant
demoPath: /messaging
cover: /images/blog/demo/en/how-ai-agents-booking-thread-verified.webp
coverAlt: "Caixa de entrada de hóspedes do Hotelier Tools filtrada por Booking.com com a pergunta de Ingrid Larsen sobre estacionamento, em francês, aberta: Identity verified e o remetente coincide com a reserva na sua estadia de 24 noites com 759,55 € por pagar, um rascunho da IA em francês marcado como não enviado e um plano da IA em rascunho cuja linha Access diz que só pode ler a reserva 71020550 e que cada alteração espera aprovação"
featured: true
faq:
  - q: "Um agente de IA de hotel pode alterar uma reserva sozinho?"
    a: "No Hotelier Tools, não por padrão. O chat do dashboard, o assistente da caixa de entrada e o assistente para funcionários transformam cada alteração num cartão que uma pessoa aprova. A IA que responde aos hóspedes não tem ferramentas; só um canal em modo Autonomous lhe permite adicionar uma nota ou uma hora de chegada à única reserva verificada."
  - q: "Como sabe a IA que uma mensagem vem mesmo daquele hóspede?"
    a: "Só conta o remetente, nunca o texto da mensagem. O Booking.com arquiva cada conversa na sua reserva, um número de WhatsApp tem de coincidir com a reserva pelo menos nos últimos 8 dígitos, um endereço de e-mail tem de ser exatamente o mesmo e uma conversa da Expedia tem de indicar a sua referência EXP-. Se coincidirem dois hóspedes, não é mostrada nenhuma reserva."
  - q: "Um hóspede pode enganar a IA com uma mensagem do tipo \"ignora as tuas regras\"?"
    a: "Pode tentar. O modelo que responde aos hóspedes não tem ferramentas de que possa abusar, é avisado de que a mensagem é texto não fiável, só pode devolver um plano com quatro ações que não levam nenhum identificador de reserva, e a resposta final é analisada à procura de referências de outras reservas antes de sair."
  - q: "O chat de IA tem limites no que pode consultar?"
    a: "Só a sua função. O chat pode ler tudo o que a sua função permite em toda a conta, com até oito passos de ferramentas por pergunta. O que não pode é alterar nada sem o seu clique, funcionar sem que ninguém peça nem agendar-se a si próprio."
  - q: "O Claude ou o ChatGPT recebem os mesmos cartões de aprovação?"
    a: "Não. As apps externas conectadas por MCP passam pela mesma verificação de função, mas uma escrita é executada quando a app a chama, por isso a confirmação da própria app é o seu único controlo. Reembolsos, envio de faturas por e-mail, entrega do questionário do INE e respostas a hóspedes estão bloqueados para elas."
  - q: "O Hotelier Tools faz parte do Booking.com, do WhatsApp ou do Little Hotelier?"
    a: "Não. O Hotelier Tools é independente: não é afiliado ao Booking.com, à Expedia Group, ao WhatsApp, à Meta, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com os logins do seu próprio hotel."
---

Um agente de IA de hotel é um modelo de linguagem ligado aos dados das suas reservas, e só é tão seguro quanto duas coisas: o que pode ler e quem carrega no botão quando algo muda. No Hotelier Tools há vários agentes com níveis de confiança diferentes. O que lê as mensagens dos hóspedes não tem ferramenta nenhuma. Os que falam com a sua equipa podem consultar tudo dentro da função de cada pessoa, mas **cada alteração espera pelo clique de uma pessoa**, e nenhum deles funciona por iniciativa própria.

Este guia explica como funciona cada agente, como uma mensagem do Booking.com, WhatsApp, Expedia ou e-mail fica associada a exatamente uma reserva e o que impede o texto de um hóspede de comandar a IA. Para saber o que o assistente faz no dia a dia, leia [o assistente de IA para a receção de um hotel pequeno](/blog/ai-assistant-hotel-front-desk). Os detalhes de terceiros foram verificados em novembro de 2026.

## O que deve poder fazer um agente de IA de hotel?

Há duas referências públicas que servem de bitola para qualquer fornecedor. A OWASP coloca a prompt injection (injeção de instruções) como o principal risco das aplicações de IA e aconselha a "restrict the model's access privileges to the minimum necessary" (restringir os privilégios de acesso do modelo ao mínimo necessário), com uma pessoa a aprovar as ações privilegiadas ([OWASP LLM01:2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)). O Model Context Protocol, que o Claude e o ChatGPT usam para chamar ferramentas externas, diz que "SHOULD always be a human in the loop with the ability to deny tool invocations" (deve haver sempre uma pessoa no circuito, capaz de recusar as chamadas a ferramentas) ([especificação de ferramentas do MCP](https://modelcontextprotocol.io/specification/2025-06-18/server/tools)).

Por isso, faça quatro perguntas a qualquer IA para hotel: Quem escreveu o texto que lê? Em que pode mexer? Quem aprova uma alteração? Alguma vez funciona sem que ninguém peça?

## Os agentes do Hotelier Tools e os seus níveis de confiança

Uma única tabela decide onde pode ser usada cada ferramenta, e uma ferramenta que ninguém classificou é tratada como escrita. Uma segunda verificação pergunta, no momento em que a ferramenta é executada, se **a função desta pessoa** a pode usar.

| Agente | Com quem fala | O que pode ler | O que pode alterar | Quem aprova |
|---|---|---|---|---|
| **IA de resposta a hóspedes** (Inbox, alpha) | Hóspedes no WhatsApp, e-mail, Booking.com, Expedia | Uma reserva verificada, as suas FAQ, notas da casa, ficha da propriedade | Nada diretamente. Devolve um plano com 4 ações | Você, na caixa de entrada (ou um modo de canal restrito) |
| **AI Chat** (`/chat`, beta) | Você e a sua equipa no dashboard | Tudo o que a sua função permite | Tudo o que a sua função permite, como cartão | Quem fez o pedido, ao clicar no cartão |
| **Assistente da caixa de entrada** (painel ao lado de uma conversa) | Você, sobre a conversa aberta | A reserva, preços do seu motor de reservas, dados da propriedade | Propostas em cartões; nunca envia ao hóspede | Qualquer colega cuja função o permita |
| **Assistente para funcionários** (`/staff`) | Funcionários por WhatsApp ou e-mail | Reservas, disponibilidade, preços, faturas, verificações | Só com **Can request changes**, em fila | O proprietário, em `/staff` |
| **Apps de IA externas** (Claude, ChatGPT, por MCP) | Você, nessa app | O que a sua função permite | As escritas são executadas quando a app as chama; nada irreversível | Você, na confirmação da própria app |
| **Agentes do navegador** (WebMCP) | Você, no seu navegador | Só leituras | Nada; as propostas abrem o formulário da app já preenchido | Você carrega no botão da página |

**As tarefas agendadas não são agentes de IA.** A fatura no check-out, as verificações automáticas e o piloto automático de preços são código comum com um temporizador. Dois processos em segundo plano usam um modelo só para transformar texto em dados (os campos de uma fatura de fornecedor, eventos locais para os preços), sem ferramentas e sem forma de escrever a alguém ou de mexer numa reserva.

## Como uma mensagem de um hóspede se torna uma resposta

| Passo | O que acontece | Modelo? |
|---|---|---|
| 1. Chega | Um webhook (WhatsApp) ou uma consulta periódica (e-mail, Booking.com, Expedia) guarda a mensagem | Não |
| 2. Triagem | Só no e-mail: newsletters, fornecedores e prováveis burlas param aqui | Não |
| 3. Identidade | O remetente é associado a uma reserva, ou a nenhuma, e a decisão fica registada | Não |
| 4. Espera | 5 minutos no WhatsApp, uma hora no e-mail. Já foi respondida? Nada é analisado nem cobrado | Não |
| 5. Plano | Depois de verificar o crédito, o modelo lê o contexto delimitado e devolve uma resposta e ações, como dados | **Sim, uma vez** |
| 6. Verificações | As ações são validadas contra a lista fechada; a proteção de respostas analisa o texto | Não |
| 7. Decisão | Uma pessoa aprova, ou o modo do canal permite-o após um intervalo | Não |
| 8. Execução | O plano guardado é executado; a proteção volta a verificar o texto antes do envio | Não |

O modelo aparece uma vez, e o que produz é só uma proposta. Tudo à volta é código comum.

::screenshot{src="/images/blog/demo/en/how-ai-agents-booking-thread-verified.webp" alt="Caixa de entrada de hóspedes filtrada por Booking.com com a conversa de Ingrid Larsen aberta: o selo Identity verified, a estadia de 24 de outubro a 17 de novembro marcada como Checked-in e sender matches booking com 759,55 € por pagar, um rascunho da IA em francês (não enviado) sobre estacionamento, e o plano da IA em rascunho (parking, 91%) cuja linha Access diz Identity verified, may read reservation 71020550, every change waits for your approval, com a resposta editável, a ação send_message e o botão Send" caption="O plano indica o que a IA pôde ver: uma reserva verificada. No modo Draft nada sai até você aprovar." path="/messaging"}
::

## De onde vêm as mensagens dos hóspedes, e porque a origem importa

Uma mensagem só traz aquilo que o próprio canal garante. O Hotelier Tools confia no **remetente**, nunca no que a mensagem diz sobre si mesma.

| Canal | Como chega à caixa de entrada | O que a associa a uma reserva |
|---|---|---|
| **Booking.com** | Lida através da sua própria sessão da extranet (o seu login e o segundo fator) | O Booking.com arquiva a conversa na sua reserva, por isso conta como verificada |
| **Expedia** (beta) | Lida através da sua própria sessão do Partner Central; só a lista de conversas e a última mensagem | Só a referência `EXP-` indicada na conversa. Nunca se usa o nome do hóspede |
| **WhatsApp** | WAHA, uma sessão do WhatsApp Web no número do próprio hotel, que envia para um webhook com um token secreto por canal | O número coincide com o telefone da reserva pelo menos nos últimos 8 dígitos |
| **E-mail** | A sua caixa de correio, através do início de sessão Google ou Microsoft (OAuth) ou IMAP | O endereço exato. Sem correspondências parciais nem pontos ignorados |

O e-mail tem mais uma camada. Os resultados SPF, DKIM e DMARC de cada mensagem (as verificações que os fornecedores de correio usam para detetar remetentes falsificados, veja as [diretrizes para remetentes do Gmail](https://support.google.com/a/answer/81126)) alimentam uma **pontuação de burla** juntamente com outros sinais, como links de partilha de ficheiros ou um reembolso de uma estadia que ninguém encontra. A partir de 75%, o e-mail vai para uma pessoa e a IA não redige nada. Mais em [como identificar mensagens fraudulentas](/blog/hotel-scam-messages).

A caixa de entrada mostra o resultado da identidade em cada conversa:

- **Identity verified** (identidade verificada): coincidiu exatamente um hóspede, por isso a IA pode ver essa reserva (para um hóspede habitual, uma estadia: a atual, uma recente ou a próxima).
- **Ambiguous — refused** (ambíguo — recusado): coincidiram dois hóspedes diferentes, por isso não é mostrada nenhuma reserva e é você quem trata do assunto.
- **No reservation match** (nenhuma reserva coincidente): a IA responde a perguntas gerais com as suas FAQ e nunca confirma nem nega que exista uma reserva.
- **Not checked** (não verificado): a identidade ainda não foi estabelecida.

Uma pergunta pública no seu anúncio do Booking.com não tem nenhuma reserva por trás, por isso é respondida só com os dados da propriedade.

## O que a IA lê para responder, e o que nunca vê

| A IA de resposta a hóspedes lê | Nunca vê |
|---|---|
| A **única** reserva verificada: referência, datas, quarto, hóspedes, estado, total, valor por pagar, hora de chegada, notas internas | Qualquer outro hóspede ou reserva |
| As suas fontes de **FAQ & knowledge** (só as que marcou) | Os seus logins, chaves de API ou números de cartão |
| As notas da casa e a ficha da propriedade de **Settings > Property & AI knowledge** | O próprio Little Hotelier. Não pode consultar nada |
| Exemplos corrigidos e regras de **AI training** | Dados de reservas quando o remetente não está verificado |
| Memória de respostas: respostas parecidas que a sua equipa enviou, sem nomes, datas, referências nem contactos | |

Os excertos das FAQ, os exemplos de treino e a memória de respostas aparecem no prompt marcados como dados citados, nunca como instruções. Os preços ao vivo vêm do seu motor de reservas público através do **assistente da caixa de entrada**, do lado da equipa, e um preço que nenhuma cotação devolveu fica assinalado.

## O que impede a mensagem de um hóspede de comandar a IA?

A mensagem de um hóspede é escrita por um desconhecido, por isso o sistema parte do princípio de que pode ser hostil:

1. **Sem ferramentas.** O modelo de resposta a hóspedes não tem nada para chamar. Um "consulta a reserva 999" injetado não tem para onde ir.
2. **Dados, não ordens.** O prompt diz que a mensagem do hóspede é texto não fiável. Se pedir para ignorar as regras, mudar de papel, revelar o texto do sistema ou agir sobre outra reserva, o modelo tem de recusar e sinalizá-lo à equipa.
3. **Uma lista fechada.** A resposta tem de seguir um esquema fixo: no máximo quatro ações entre **enviar uma mensagem**, **sinalizar para um funcionário**, **adicionar uma nota à reserva** e **definir a hora de chegada**. Tudo o resto é descartado e registado.
4. **Nenhum identificador de reserva nas ações.** O servidor aplica uma nota ou uma hora de chegada à reserva associada à conversa, por isso uma alteração não pode ser desviada para outra.
5. **A proteção de respostas.** Antes de uma resposta sair, e de novo depois de alguém a editar, o texto é analisado. A referência de outra reserva, ou qualquer número longo quando o remetente não está verificado, bloqueia o envio e passa a conversa a uma pessoa. Se a reserva da conversa mudou enquanto um plano esperava, o plano é recusado.
6. **Limites por canal.** **Draft — I approve everything** (rascunho — eu aprovo tudo) é o padrão. No Booking.com a IA nunca envia nada, em nenhum modo; a Expedia só oferece Off e Draft. Mesmo **Autonomous — replies AND changes reservations** (autónomo — responde E altera reservas) só pode adicionar uma nota ou uma hora de chegada à reserva verificada, e as respostas sem supervisão param às 4 por hora, 12 por dia ou 3 seguidas sem resposta.
7. **A aprovação é executada sem o modelo.** Aprovar executa exatamente o plano guardado. A IA não tem uma segunda oportunidade para o reescrever.

::screenshot{src="/images/blog/demo/en/how-ai-agents-booking-channel-send-by-hand.webp" alt="Página Channels com o cartão de mensagens do Booking.com marcado como Active: um aviso Collects messages — replies are sent by hand a dizer que as respostas automáticas não são enviadas pelo Booking.com e que uma resposta só sai quando uma pessoa carrega em Send na caixa de entrada, a definição When a guest writes em Draft — I approve everything, Timing held 5 min e, por baixo, as mensagens do Expedia Partner Central ainda não conectadas" caption="O Booking.com é um canal que a IA pode ler e para o qual pode redigir, mas só o Send de uma pessoa publica uma resposta." path="/messaging/channels"}
::

## O chat de IA: consultas sem limites, nenhuma autonomia

O **AI Chat** (chat de IA, `/chat`, beta) foi construído ao contrário da IA dos hóspedes: quem escreve é uma pessoa de confiança, por isso recebe todas as ferramentas que **a sua função** permite. Pergunte por qualquer reserva, fatura, preço, verificação, relatório ou pela lista de espera, em toda a conta, com até oito passos de ferramentas por pergunta.

O que não pode é agir sozinho:

- **Cada alteração é um cartão.** Uma escrita é intercetada antes de ser executada e mostrada como **Approve** (aprovar) ou **Reject** (rejeitar) com os valores exatos. As ações irreversíveis (um reembolso, enviar uma fatura por e-mail, entregar o questionário do INE, enviar uma resposta a um hóspede) só são possíveis aqui, atrás do seu cartão.
- **O clique é executado sem o modelo.** Aprovar executa a chamada guardada, não um novo pedido à IA.
- **A aprovação é só sua.** Cada cartão é uma autorização de uso único para essa ferramenta, esses valores, essa conversa e a pessoa a quem foi mostrado, e expira ao fim de 24 horas. Um duplo clique ou um cartão copiado é recusado.
- **A sua função acompanha cada chamada.** Cada chamada a uma ferramenta leva uma declaração assinada de quem fez o pedido, válida durante 15 minutos, por isso é executada com as suas permissões, não com as do proprietário. Um colega suspenso a meio de uma resposta é recusado no passo seguinte.
- **Nunca funciona sozinho.** O modelo só é executado quando alguém envia uma mensagem. Não pode acordar mais tarde nem agendar-se a si próprio. Pode *propor* criar uma tarefa agendada ou mudar-lhe o horário, como cartão, e essa tarefa executa depois código fixo, não a IA.

::screenshot{src="/images/blog/demo/en/embed-card-change-approval.webp" alt="Cartão Approve these changes? marcado Nothing written yet: uma correspondência completa com o remetente do WhatsApp, uma tabela de evidências com colunas Little Hotelier, WhatsApp sender e message text, os novos valores de Company e Tax ID com as etiquetas New e Claim, uma caixa Also invoice this reservation automatically at checkout e os botões Reject e Approve and apply" caption="Uma alteração de reserva mostra de onde veio cada valor. Um valor que só aparece escrito na mensagem é uma afirmação, não uma prova." path="/mcp-ui/reservation-change-proposal" width="690" height="494"}
::

As funções vêm de **Team & roles** (equipa e funções, `/settings/team`). Um login da receção que peça um reembolso ao chat recebe uma recusa, com cartão ou sem ele.

## O assistente para funcionários e as apps de IA externas

**Assistente para funcionários** (`/staff`). Um funcionário escreve para o número de WhatsApp ou a caixa de correio do hotel e recebe resposta como funcionário. A identidade é o remetente: o número registado, ou o endereço exato com um e-mail que passe DKIM ou DMARC (o SPF sozinho não conta). Os funcionários **Read only** (só leitura) só podem perguntar. Com **Can request changes** (pode pedir alterações), cada escrita vira um pedido que o proprietário aprova com **Approve and run**, que executa essa chamada exata uma vez.

::screenshot{src="/images/blog/demo/en/staff-assistant.webp" alt="Página Staff assistant com uma alteração à espera de aprovação, um pedido invoice_on_leave_add de Lucía (recepción) com os botões Reject e Approve and run, dois funcionários marcados Can request changes e Read only, e as mensagens recentes de WhatsApp" caption="O pedido de um funcionário chega com a ferramenta e os valores exatos, e só é executado quando o proprietário o aprova." path="/staff"}
::

**O Claude, o ChatGPT e outras apps MCP** iniciam sessão com OAuth para uma propriedade à sua escolha e passam pela mesma verificação de função. Fora do dashboard não há um segundo cartão: uma escrita é executada quando a app a chama, por isso mantenha ativa a confirmação da própria app. As ações irreversíveis e as respostas a hóspedes estão bloqueadas. Veja [conectar o Claude ao Little Hotelier](/blog/connect-claude-to-little-hotelier).

**Os agentes do navegador (WebMCP)**, uma norma web ainda em fase inicial e em [rascunho comunitário](https://webmachinelearning.github.io/webmcp/), só têm leituras. Um reembolso ou uma resposta a um hóspede só podem ser *propostos*: abre-se o formulário da própria app já preenchido, e é você quem carrega no botão. Nas páginas para hóspedes, as ferramentas são retiradas.

## Registos, custos e limites, sem rodeios

**O que fica registado.** Cada decisão de identidade com o seu motivo, incluindo as recusas. Cada alteração de reserva aplicada, recusada ou rejeitada, com as evidências revistas. A atividade da equipa (convites, funções, contactos dos funcionários). Cada cobrança de IA em **AI credits** (créditos de IA, `/messaging/credits`). Nenhuma análise é feita sem crédito.

**O que não está construído, ou não está terminado:**

- A Inbox está em **alpha**, o AI Chat em **beta** e as mensagens da Expedia em **beta** (só a lista e a última mensagem; você responde no Partner Central).
- O WhatsApp funciona através do WAHA, não da API oficial da Meta, por isso um número pode ser bloqueado. Veja [WhatsApp com o Little Hotelier](/blog/whatsapp-little-hotelier).
- Desde 28 de setembro de 2026, o Booking.com deixou de enviar os telefones dos hóspedes aos channel managers, por isso um WhatsApp de um hóspede do Booking.com pode aparecer como **No reservation match**.
- A IA dos hóspedes não pode cancelar, mudar datas nem receber pagamentos, em nenhum modo.

O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.

::demo-cta{path="/messaging"}
::

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools não é afiliado ao Booking.com, à Expedia Group, ao WhatsApp, à Meta, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com os logins do Little Hotelier, do Booking.com e da Expedia do seu próprio hotel.
::

Veja também: [responder às mensagens dos hóspedes com IA](/blog/ai-replies-guest-messages), [o assistente de IA para a receção](/blog/ai-assistant-hotel-front-desk), [o que é um servidor MCP](/blog/what-is-mcp-server-hotels).

## Resumo

- A IA de resposta a hóspedes não tem ferramentas: lê uma reserva verificada e os seus próprios dados, e devolve um plano com quatro ações.
- Uma mensagem é associada a uma reserva pelo remetente (conversa do Booking.com, 8 ou mais dígitos do telefone, e-mail exato, referência `EXP-`), nunca pelo texto. Duas correspondências significam nenhuma reserva.
- O texto do hóspede é dado, não instrução; uma proteção de respostas bloqueia referências de outros hóspedes, e a IA nunca envia nada no Booking.com.
- O AI Chat pode consultar tudo o que a sua função permite, mas cada alteração é um cartão de uso único assinado em seu nome, executado sem o modelo, e nunca funciona sozinho.
- Funcionários, Claude ou ChatGPT e agentes do navegador passam pela mesma verificação de função, cada um com o seu próprio passo de aprovação.
