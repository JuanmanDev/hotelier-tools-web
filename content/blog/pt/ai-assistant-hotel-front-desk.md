---
title: "Inteligência artificial para hotel: o que um assistente de IA faz com segurança na receção"
seoTitle: "IA para hotel: o que o assistente faz com segurança"
description: "Um assistente de IA consulta reservas, redige respostas e prepara alterações num hotel pequeno. O que ele faz com segurança e por que você aprova cada mudança."
date: 2026-10-03
category: ai
tags: [ai, ai assistant, front desk, approvals, little hotelier]
keywords: [inteligência artificial para hotel, inteligência artificial hotelaria, assistente de ia para hotel, recepcionista virtual hotel, ia para pousadas, automação hoteleira]
feature: ai-assistant
demoPath: /chat
cover: /images/blog/demo/en/ai-chat-start.webp
coverAlt: "Ecrã inicial do assistente de IA do Hotelier Tools, que avisa que tudo o que altera dados pede confirmação antes, com perguntas sugeridas e o histórico de conversas à esquerda"
faq:
  - q: "Um assistente de IA pode substituir o recepcionista do hotel?"
    a: "Não. Ele tira da receção as consultas e os primeiros rascunhos: quem chega, quem deve dinheiro, o que responder. As decisões sobre dinheiro, reservas e hóspedes difíceis continuam com uma pessoa, que aprova cada alteração."
  - q: "A IA pode cancelar uma reserva ou devolver dinheiro sozinha?"
    a: "Não no chat do dashboard. Toda alteração mostra antes um cartão para aprovar ou rejeitar, e o reembolso é uma ação irreversível à parte, que sempre exige um cartão. A IA que fala com os hóspedes não pode cancelar, mudar datas nem mexer em pagamentos."
  - q: "O assistente de voz entende português?"
    a: "Ainda não. O botão do microfone usa o reconhecimento de voz do seu navegador, configurado para espanhol (es-ES), e o navegador precisa de o suportar. Você pode sempre escrever em qualquer idioma."
  - q: "A IA responde sozinha aos meus hóspedes do Booking.com?"
    a: "Não. As mensagens do Booking.com e as perguntas dos hóspedes chegam à mesma caixa de entrada, mas o envio automático por IA para o Booking.com nunca é permitido. Quem decide é uma pessoa."
  - q: "Quanto custa o assistente de IA?"
    a: "O Hotelier Tools é gratuito para todos os hotéis até o início da cobrança, em 10 de janeiro de 2027. Os hotéis que começam em 2026 pagam depois 50 € por mês durante todo o ano de 2027. As respostas do assistente consomem créditos de IA, que você consulta na página AI credits."
  - q: "O Hotelier Tools faz parte do Little Hotelier?"
    a: "Não. O Hotelier Tools é independente e não é afiliado nem recomendado pela SiteMinder ou pelo Little Hotelier. Ele liga-se com o login do Little Hotelier da sua própria propriedade."
---

Sim, um assistente de IA já pode tirar trabalho real da receção de um hotel pequeno: responder a "quem chega amanhã e quem ainda deve dinheiro?", redigir respostas aos hóspedes e preparar alterações de reservas ou faturas / notas fiscais. A forma segura de o usar é simples: ele pode ler à vontade, mas **toda alteração espera que uma pessoa a aprove**, e reembolsos, aplicação de preços e respostas a hóspedes do Booking.com nunca ficam só nas mãos da IA.

Este guia mostra como isso funciona na prática com o Hotelier Tools por cima do Little Hotelier, com pedidos reais e o que acontece exatamente depois de você carregar em Enter.

## O que um assistente de IA pode fazer hoje na receção de um hotel pequeno?

Pense em três tipos de trabalho, cada um com um nível de confiança diferente.

| Tipo de trabalho | Exemplos | Quem decide |
|---|---|---|
| **Consultar** | Chegadas de amanhã, saldos por pagar, quartos sem atribuição, se uma estadia pode ser faturada, tarifas de hoje à noite | O assistente responde. Nada muda. |
| **Redigir** | Uma resposta a uma pergunta por WhatsApp ou e-mail, uma nota para o recepcionista da noite | Você lê e envia, ou edita antes. |
| **Alterar** | Atualizar o telefone de um hóspede, inscrever uma estadia para a fatura no check-out, aplicar um preço | O assistente prepara um cartão. Você carrega em **Approve** ou **Reject**. |

O Little Hotelier já oferece bastante na receção. O seu [Guest Engagement Messaging Hub](https://www.littlehotelier.com/blog/learn-about-tech/unified-inbox/) reúne conversas de e-mail, SMS, WhatsApp e Airbnb numa só caixa de entrada, com modelos e mensagens agendadas. O que um assistente acrescenta é a possibilidade de *perguntar* com palavras simples e receber uma resposta construída a partir das suas reservas em tempo real, em vez de navegar pelo calendário e pelos ecrãs de reserva.

## Três lugares onde o assistente trabalha no Hotelier Tools

O [Hotelier Tools](/tools/bot/ai-assistant) usa o mesmo conjunto de ferramentas em três lugares. Todos seguem a mesma regra: as leituras correm, as alterações esperam por uma pessoa.

### O chat do assistente no dashboard (beta)

Abra **AI Chat** (`/chat`) e escreva uma pergunta sobre reservas, hóspedes, preços, faturas / notas fiscais, verificações ou a lista de espera. O chat vazio diz-o claramente: "Anything that changes data asks for your confirmation first." (Tudo o que altera dados pede primeiro a sua confirmação.)

As respostas chegam em texto e em cartões: um resumo da reserva, uma alteração proposta com tabela de evidências, um cartão para inscrever a fatura no check-out, uma tabela de recomendações de preço ou controlos deslizantes das regras de preço. Todas as conversas anteriores ficam guardadas em **Chat History** (`/chat/history`).

Há também um botão de microfone. Usa o reconhecimento de voz integrado no navegador, que por agora está **configurado para espanhol (es-ES)**, pelo que a voz serve a quem fala espanhol. Todos os outros escrevem.

::screenshot{src="/images/blog/demo/en/ai-chat-arrivals-this-week.webp" alt="Chat de IA do Hotelier Tools a responder Which bookings arrive this week? com uma chamada de ferramenta e uma lista Reservations (14) de cartões que mostram cada hóspede, datas de check-in e check-out, Paid ou Pending e um selo de checked-out, checked-in ou confirmed" caption="Pergunte com palavras simples e a resposta chega em cartões de reserva. Uma consulta como esta não altera nada." path="/chat/3a751210-d8ab-4cb7-8add-6ee5244c93af"}
::

### O assistente da equipa por WhatsApp ou e-mail (alpha)

Em **Staff assistant** (`/staff`) você regista um funcionário com nome, número de WhatsApp e/ou e-mail e uma função: **Read only** (só leitura) ou **Can request changes** (pode pedir alterações).

Quando essa pessoa escreve para o número de WhatsApp ou a caixa de correio ligados ao seu hotel, a IA responde-lhe como a um membro da equipa, no mesmo canal, com os seus dados do Little Hotelier. As mensagens dela nunca se misturam com a caixa de entrada dos hóspedes.

- Um funcionário com **Read only** só pode fazer perguntas.
- Um funcionário com **Can request changes** pode pedir alterações, mas cada uma vira um pedido que o proprietário aprova em `/staff`.
- A identidade é o próprio remetente: o número de telefone registado ou um e-mail que passe as verificações DKIM/DMARC.
- Mensagens com mais de 30 minutos não são respondidas, para que uma resposta tardia nunca aja com informação desatualizada.

O WhatsApp aqui funciona através de uma sessão do WhatsApp Web (WAHA), não da API oficial do WhatsApp Business. Veja [WhatsApp com o Little Hotelier](/blog/whatsapp-little-hotelier) para conhecer as opções.

### Rascunhos de resposta na caixa de entrada de hóspedes (alpha)

A [caixa de entrada de hóspedes](/tools/bot/guest-inbox) (`/messaging`) reúne mensagens de WhatsApp, e-mail e Booking.com. Para cada conta ligada, você escolhe um modo de resposta em `/messaging/channels`:

| Modo | O que acontece |
|---|---|
| Off | As mensagens são mostradas. Nada é analisado nem enviado. |
| **Draft** (predefinido) | A IA prepara uma resposta e um plano. Nada acontece até você aprovar. |
| Auto | A IA envia a resposta após um intervalo, mas nunca pode alterar uma reserva. |
| Autonomous | A IA também executa as alterações de reserva permitidas, sem passo de aprovação. Reveja várias vezes por dia. |

Comece com **Draft** e fique nele até confiar nas respostas. A IA que fala com os hóspedes não tem ferramentas nenhumas: só pode devolver um plano de uma lista curta (enviar uma mensagem, sinalizar para a equipa, adicionar uma nota à reserva, definir uma hora de chegada).

## Como os cartões de aprovação evitam que a IA cometa um erro caro

Uma IA pode interpretar mal uma mensagem ou escolher a reserva errada. Os cartões de aprovação existem para que um palpite errado nunca chegue ao Little Hotelier.

1. **Toda a escrita precisa de um cartão.** Se o sistema não consegue distinguir se uma ferramenta lê ou escreve, trata-a como escrita.
2. **O cartão mostra a alteração exata.** Numa reserva, você vê uma tabela de evidências: o valor no Little Hotelier, o que o remetente indicou e o que diz o texto da mensagem.
3. **Você confirma a origem.** As alterações de reserva escritas no chat incluem uma caixa de seleção ("esta é a reserva certa e confio na origem"), porque uma mensagem de chat é uma afirmação, não uma prova de quem alguém é.
4. **Approve executa exatamente essa chamada.** Ao carregar em **Approve**, a alteração guardada corre no servidor. A IA não tem uma segunda hipótese de a reescrever.
5. **Cada aprovação é de uso único.** Está ligada a essa ferramenta, a esses valores, a essa conversa e a essa pessoa, e expira ao fim de 24 horas.
6. **Os reembolsos são à parte.** Um reembolso é uma ação irreversível que fica sempre atrás do seu próprio cartão.

::screenshot{src="/images/blog/demo/en/embed-card-change-approval.webp" alt="Cartão Approve these changes? marcado Nothing written yet: uma correspondência completa com o remetente do WhatsApp, uma tabela de evidências com colunas Little Hotelier, WhatsApp sender e message text, os novos valores de Company e Tax ID com as etiquetas New e Claim, uma caixa Also invoice this reservation automatically at checkout e os botões Reject e Approve and apply" caption="O cartão de alteração mostra o que o Little Hotelier tem agora, o que seria escrito e de onde veio cada valor. Nada é escrito até você aprovar." path="/mcp-ui/reservation-change-proposal" width="690" height="494"}
::

## Pedidos reais e o que acontece a seguir

São o tipo de coisas que um recepcionista escreve numa manhã normal. As referências de reserva são inventadas.

::prompt{label="Assistente do Hotelier Tools"}
Quem chega amanhã e algum deles ainda tem saldo por pagar?
::

O assistente lê os check-ins de amanhã e os respetivos pagamentos e lista-os, com um cartão de resumo da reserva por hóspede. Nada muda, por isso não há cartão para aprovar.

::prompt{label="Assistente do Hotelier Tools"}
O hóspede da reserva BDC-1234567890 enviou um e-mail com um novo telemóvel / celular: +34 600 000 000. Atualize, por favor.
::

O assistente encontra a reserva e prepara um cartão de **proposed change**: o telefone antigo, o telefone novo e a origem do valor novo. Você marca a caixa de confiança e carrega em **Approve**. Só então o Little Hotelier é atualizado.

::prompt{label="Assistente do Hotelier Tools"}
O hóspede da BDC-1234567890 quer uma fatura / nota fiscal. Envie-a automaticamente quando fizer o check-out.
::

Você recebe o cartão para inscrever a fatura no check-out. Depois de aprovar, a estadia fica marcada para a tarefa diária de faturação e o Little Hotelier envia a fatura por e-mail, com o seu próprio modelo, depois do check-out. Os detalhes estão em [enviar a fatura no check-out](/blog/send-invoice-to-guest-at-checkout).

::prompt{label="Assistente do Hotelier Tools"}
Quanto deve custar um quarto duplo no próximo sábado, e porquê?
::

Você recebe a tabela de recomendações de preço com as razões de cada valor: concorrência, procura, limites. Lê-la não altera nada. Aplicar um preço é uma escrita, por isso espera pela sua aprovação.

::prompt{label="Assistente do Hotelier Tools"}
Reembolse o depósito de 40 € da BDC-1234567890.
::

O reembolso aparece como um cartão à parte. Nada é reembolsado até você aprovar. Fora do dashboard, através de [assistentes de IA externos](/blog/connect-claude-to-little-hotelier), os reembolsos estão totalmente bloqueados.

E a partir do assistente da equipa no WhatsApp:

::prompt{label="Funcionário no WhatsApp"}
O quarto 5 está livre esta noite? Se estiver, passe para lá a reserva Martin que chega hoje.
::

A primeira parte é respondida logo. A mudança é uma alteração, por isso fica como pedido pendente em `/staff`, para o proprietário aprovar.

::screenshot{src="/images/blog/demo/en/staff-assistant.webp" alt="Página Staff assistant com uma alteração à espera de aprovação, um pedido invoice_on_leave_add de Lucía (recepción) com os botões Reject e Approve and run, dois funcionários marcados Can request changes e Read only, e as mensagens recentes de WhatsApp" caption="As alterações que a sua equipa pede por WhatsApp ou e-mail esperam aqui por aprovação." path="/staff"}
::

## O que um assistente de IA nunca deve fazer sozinho?

Seja qual for a ferramenta, deixe estas coisas com uma pessoa. Veja como o Hotelier Tools aplica cada uma.

- **Movimentar dinheiro.** Os reembolsos precisam sempre do seu próprio cartão. As apps de IA externas ligadas por MCP não podem reembolsar de todo.
- **Alterar uma reserva porque uma mensagem o pede.** A IA dos hóspedes só vê uma reserva quando o remetente é verificado: um telefone que coincide com a reserva nos últimos 8 ou mais dígitos, o e-mail exato ou uma conversa do Booking.com. Se dois hóspedes coincidirem, nenhuma reserva é associada.
- **Responder sozinha aos hóspedes do Booking.com.** O envio automático por IA para o Booking.com nunca é permitido.
- **Inventar coisas.** A IA dos hóspedes só responde com base nas suas perguntas frequentes, nas notas da casa e na ficha da propriedade. Se você não disse se há estacionamento, a resposta é "a confirmar", nunca "sim".
- **Mencionar outros hóspedes.** Uma proteção nas respostas bloqueia referências de reserva que não pertencem ao hóspede da conversa.
- **Aplicar preços sem limites.** A IA não está dentro do cálculo noturno de preços. O piloto automático vem desligado por predefinição e, quando ligado, move uma noite no máximo ±20% por predefinição e nunca abaixo do seu preço mínimo.
- **Entregar declarações oficiais ou enviar e-mails a hóspedes a partir de fora.** Submeter o inquérito do INE, enviar uma fatura por e-mail ou escrever a hóspedes em lista de espera está bloqueado para apps de IA externas. No chat do dashboard, cada uma fica atrás de um cartão.

As respostas sem supervisão também têm limites de volume: 4 por hora, 12 por dia e 3 seguidas sem resposta do hóspede.

## Funções, privacidade e custo

**Funções.** Os pedidos do assistente da equipa são aprovados pelo proprietário em `/staff`. As contas de equipa com funções aparecem como "em breve" na [página do assistente](/tools/bot/ai-assistant); foram pensadas para que, por exemplo, o login da receção possa ver preços mas não alterá-los, e não possa fazer um reembolso nem com um cartão.

**Privacidade.** Os logins do Little Hotelier, do Booking.com e da caixa de correio ficam guardados cifrados (AES-256-GCM). As mensagens dos hóspedes e os dados das reservas são processados por um fornecedor de IA quando o assistente os lê. O [acordo de tratamento de dados](https://dashboard.hotelier.tools/legal/dpa) e o [aviso de privacidade](https://dashboard.hotelier.tools/legal/privacy) explicam o que é processado.

**Custo.** O Hotelier Tools é gratuito para todos os hotéis até o início da cobrança, em 10 de janeiro de 2027. Os hotéis que começam em 2026 pagam depois 50 € por mês durante todo o ano de 2027, com todas as funcionalidades incluídas. Cada resposta do assistente e cada análise de mensagem de hóspede consome créditos de IA; o seu saldo, limite e consumo estão em **AI credits** (`/messaging/credits`).

::callout{type="note" title="Ferramenta independente"}
O Hotelier Tools não é afiliado nem recomendado pela SiteMinder ou pelo Little Hotelier. Liga-se com o login do Little Hotelier da sua própria propriedade, e toda a alteração que faz fica visível no Little Hotelier como de costume.
::

## Como experimentar com segurança

1. Abra a demonstração pública abaixo. Usa um hotel inventado e nada chega a sistemas reais.
2. Peça as chegadas de amanhã, depois peça uma alteração e veja o cartão que recebe.
3. No seu próprio dashboard, ligue o Little Hotelier em **Credentials**, preencha a ficha da propriedade em `/settings/property` (lê do Little Hotelier o endereço, as políticas e os quartos) e adicione as suas perguntas frequentes em `/messaging/faq`.
4. Deixe a caixa de entrada de hóspedes em **Draft** nas primeiras semanas e corrija o que a IA interpretar mal em `/messaging/training`.

::demo-cta{path="/chat"}
::

## Resumo

- Um assistente de IA é seguro na receção quando lê à vontade e **pergunta antes de cada alteração**.
- No Hotelier Tools isso funciona no chat do dashboard, por WhatsApp ou e-mail para a equipa e como rascunhos de resposta na caixa de entrada de hóspedes.
- Reembolsos, respostas no Booking.com, limites de preço e declarações oficiais ficam com pessoas.
- Quer as mesmas respostas dentro do Claude ou do ChatGPT? Leia [o que é um servidor MCP](/blog/what-is-mcp-server-hotels) e depois [conectar o Claude ao Little Hotelier](/blog/connect-claude-to-little-hotelier).
