---
title: "Como responder às mensagens dos hóspedes com IA (WhatsApp, Booking.com, Expedia e e-mail)"
seoTitle: "Responder às mensagens dos hóspedes com IA, com segurança"
description: "Deixe a IA redigir respostas aos hóspedes no WhatsApp, Booking.com, Expedia e e-mail a partir das reservas e das FAQ, com uma pessoa a aprovar cada uma."
date: 2026-11-02
updated: 2026-11-05
category: ai
tags: [ia, mensagens de hóspedes, whatsapp, booking.com, e-mail, caixa de entrada, modelos]
keywords: [responder mensagens hóspedes com ia, ia para mensagens de hotel, automatizar mensagens whatsapp hotel, modelos de mensagens para hóspedes, chatgpt responder hóspedes hotel, resposta automática booking ia, assistente whatsapp ia hotel, caixa de entrada com ia para alojamento local]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/ai-replies-inbox-thread-plan.webp
coverAlt: "Caixa de entrada de hóspedes do Hotelier Tools com a conversa de WhatsApp de Noah Nilsson aberta: marcada como Identity verified, a reserva de 3 a 7 de novembro com check-in feito e paga, um plano da IA em rascunho para uma chegada tardia com o motivo e uma resposta editável em espanhol, e o painel privado Assistant"
featured: true
faq:
  - q: "A IA pode responder sozinha às mensagens dos hóspedes?"
    a: "Pode, mas não deve por padrão. Uma configuração segura deixa a IA redigir uma resposta a partir das suas reservas e FAQ, e uma pessoa aprova-a. O Hotelier Tools começa todos os canais no modo Draft; o envio automático é uma escolha à parte por canal, limitada a perguntas simples."
  - q: "Como sabe a IA a que reserva se refere uma mensagem?"
    a: "Associa o remetente a exatamente uma reserva: no WhatsApp, o número tem de coincidir pelo menos nos últimos 8 dígitos; no e-mail, o endereço tem de ser exatamente o mesmo. Se coincidirem dois hóspedes, ou nenhum, a IA não vê nenhuma reserva e responde só com as suas FAQ."
  - q: "A IA vai inventar preços ou serviços?"
    a: "Não deveria, e a caixa de entrada foi feita para que não o possa esconder. A IA responde só com as suas fontes de FAQ, notas da casa e ficha da propriedade, escreve \"a confirmar\" para tudo o que não listou, e um preço que nenhuma cotação do motor de reservas devolveu fica assinalado junto ao rascunho."
  - q: "A IA envia sozinha respostas no Booking.com ou na Expedia?"
    a: "Não. No Booking.com a IA só redige e é uma pessoa que carrega em Send. As mensagens da Expedia (beta) só podem ser recolhidas ou redigidas, e a resposta escreve-se no Partner Central."
  - q: "Preciso da API oficial do WhatsApp Business?"
    a: "Para o Hotelier Tools, não. Conecta-se através do WAHA, um servidor alojado por você que executa uma sessão do WhatsApp Web. Isso evita o processo de aprovação da Meta, mas o WhatsApp não permite clientes não oficiais, por isso um número usado assim pode ser bloqueado."
  - q: "O Hotelier Tools faz parte do WhatsApp, do Booking.com ou da Expedia?"
    a: "Não. O Hotelier Tools é independente: não é afiliado ao WhatsApp, à Meta, ao Booking.com, à Expedia Group, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com os logins do seu próprio hotel."
---

A forma segura de usar IA nas mensagens dos hóspedes é deixá-la redigir, não decidir. Dê-lhe a reserva do hóspede e os seus próprios dados (FAQ, regras da casa, preços do seu motor de reservas), deixe-a preparar uma resposta no idioma do hóspede e faça com que uma pessoa a aprove antes de sair. No Hotelier Tools, as mensagens de WhatsApp, e-mail, Booking.com e Expedia chegam a uma só caixa de entrada, cada uma associada à sua reserva, com um rascunho da IA à espera de um clique.

Os detalhes de terceiros abaixo foram verificados em novembro de 2026.

## O que perguntam mais os hóspedes de um hotel?

Num hotel pequeno, a maioria das mensagens são sempre as mesmas doze perguntas:

- **Horas de check-in e check-out**, e se é possível fazer o check-in mais cedo.
- **Chegada tardia:** "Chegamos por volta das 23:30, há alguém na receção?"
- **Estacionamento, wifi, pequeno-almoço / café da manhã**: horários e preços.
- **Como chegar** e como levantar as chaves.
- **Alterações e cancelamentos:** datas, hóspedes extra, reembolsos.
- **Faturas / notas fiscais**, muitas vezes com nome de empresa e número fiscal.
- **Disponibilidade e preços**, de pessoas que ainda não reservaram.

O primeiro grupo tem uma única resposta certa, que você já sabe. Os dois últimos precisam de uma pessoa ou de dados ao vivo: um cancelamento é um compromisso, e um preço depende das datas, do número de pessoas e do que resta para vender. É essa divisão que decide quanto pode uma IA fazer sozinha.

## Com que rapidez esperam os hóspedes uma resposta?

- **WhatsApp:** os hóspedes escrevem muitas vezes em viagem e esperam a resposta de telemóvel / celular na mão. Na WhatsApp Business Platform oficial, a mensagem de um hóspede abre uma janela de atendimento de 24 horas em que as suas respostas são gratuitas ([preços do WhatsApp](https://whatsappbusiness.com/products/platform-pricing/)).
- **Booking.com:** o centro de ajuda do Little Hotelier refere que o Booking.com acompanha uma pontuação de resposta interna baseada na rapidez com que responde, e que marcar uma mensagem como **No reply needed** fecha a sua janela de 24 horas ([Messaging hub FAQ](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)). Mais em [gerir as mensagens dos hóspedes do Booking.com](/blog/booking-com-guest-messages).
- **Expedia:** os hóspedes escrevem pela app da Expedia e você responde no Partner Central, em **Messages**. Veja [mensagens dos hóspedes da Expedia](/blog/expedia-guest-messages).
- **E-mail:** mais lento, mas um hóspede que pergunta pela disponibilidade provavelmente está a perguntar também a outros hotéis.

Um rascunho à espera na caixa de entrada reduz o tempo de resposta sem saltar a verificação.

## Por que razão a IA nunca deve inventar uma resposta

Uma hora de check-in errada é incómoda. Um lugar de estacionamento prometido que não tem, um preço abaixo da sua tarifa ou os dados da reserva de outro hóspede saem caros. Os chatbots preenchem as lacunas com texto plausível, por isso uma IA que fala com hóspedes precisa de três limites:

1. **Fontes fechadas.** Responde só com o que lhe deu: a sua página de FAQ, as suas notas, a reserva. Tudo o resto é "a confirmar".
2. **Uma reserva, e só para a pessoa certa.** Só vê uma reserva quando está provado que o remetente é esse hóspede.
3. **Sem mãos.** Propõe; uma pessoa (ou uma regra estreita e com limites) decide o que chega ao hóspede ou à reserva.

## Um conjunto de modelos para começar

Use a ferramenta que usar, escreva isto uma vez. Passam a ser as suas FAQ, os factos da sua IA e as suas respostas rápidas:

```text [guest-reply-templates.txt]
CHECK-IN
Olá [nome], o check-in é a partir das [hora] e o check-out até às [hora]. Se chegar mais cedo, pode deixar a bagagem connosco.

CHEGADA TARDIA
Obrigado por nos avisar, [nome]. A receção está aberta até às [hora]. Depois disso, [como levantar a chave]. Já registámos a sua hora de chegada.

ESTACIONAMENTO
Temos estacionamento [gratuito / pago, a X por noite] [na propriedade / em morada]. [Não é possível reservar / indique-nos a sua matrícula].

PEQUENO-ALMOÇO
O pequeno-almoço é servido das [hora] às [hora] por [preço] por pessoa. [Incluído / não incluído] na sua tarifa.

FATURA
Claro. Envie-nos o nome da empresa, o número fiscal e o endereço de faturação, e emitimos a fatura no check-out.

CANCELAMENTO (precisa de uma pessoa)
Obrigado, [nome]. Passámos o seu pedido à nossa equipa e vamos confirmar-lhe em breve as condições da sua reserva.

Nunca lhe pediremos os dados do cartão por WhatsApp nem por SMS.
```

## A forma mais rápida: uma caixa de entrada onde a IA redige e uma pessoa aprova

A **Inbox** do Hotelier Tools (`/messaging`, alpha) recolhe as mensagens dos hóspedes de quatro sítios, associa cada uma à sua reserva e prepara uma resposta e um plano para você aprovar.

::screenshot{src="/images/blog/demo/en/ai-replies-inbox-thread-plan.webp" alt="Caixa de entrada de hóspedes com a conversa de WhatsApp de Noah Nilsson aberta: o selo Identity verified, a reserva de 3 a 7 de novembro (4 noites, 1 hóspede, check-in feito, paga), o plano da IA em rascunho classificado como chegada tardia a 93%, a secção Why, uma resposta editável em espanhol e a ação send_message, com o painel Assistant à direita" caption="A mensagem, a reserva e um rascunho lado a lado. Nada é enviado até você aprovar." path="/messaging"}
::

### Passo 1: conecte os seus canais

| Canal | Onde | Como se conecta |
|---|---|---|
| **WhatsApp** | **Credentials > WhatsApp (WAHA)** (`/credentials/messaging-whatsapp`) | Um servidor WAHA, a sua sessão e chave de API, e um webhook |
| **E-mail** | **Credentials > Guest mailbox** (`/credentials/messaging-email`) | Início de sessão **Google** ou **Microsoft** (OAuth), ou **Other (IMAP/SMTP)** |
| **Booking.com** | **Credentials > Booking.com extranet** (`/credentials/booking-extranet`) | O seu próprio login da extranet, com o segundo fator |
| **Expedia** (beta) | **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`) e depois **Switch on Expedia messages** | O seu próprio login do Partner Central |

A Expedia é o mais recente: desde a versão 1.71 (novembro de 2026) as suas conversas chegam com o hóspede, a estadia e a última mensagem, e as respostas continuam a ser enviadas a partir do Partner Central ([detalhes](/blog/expedia-guest-messages)).

As caixas de correio do Outlook e do Microsoft 365 precisam do início de sessão Microsoft, porque a Microsoft recusa logins com palavra-passe / senha por IMAP. Uma caixa de correio nova começa em **Off** (só recolher): redigir consome créditos de IA, por isso ligá-lo é decisão sua.

### O que é o WAHA, e os seus riscos

O [WAHA](https://waha.devlike.pro/docs/overview/introduction/) (WhatsApp HTTP API) é um servidor alojado por você que executa uma sessão do WhatsApp Web e deixa outro software ler e enviar as mensagens desse número por HTTP. Funciona como o WhatsApp Web aberto num computador: o seu telemóvel e a app continuam a funcionar.

1. Na página do WhatsApp, insira o **WAHA base URL**, o **Session name** e a **WAHA API key**, e guarde.
2. No painel **WhatsApp session**, carregue em **Start session**. Quando aparecer um código QR, abra o WhatsApp no telemóvel / celular do hotel, vá a **Definições > Dispositivos ligados > Ligar um dispositivo** e leia-o.
3. Carregue em **Connect webhook**, para que o WAHA envie as novas mensagens para a caixa de entrada, e depois em **Test connection**.
4. Se quiser, em **Message history**, escolha até onde recuar (7, 30 ou 90 dias, ou **Last year**) e carregue em **Import history**. As conversas importadas servem só de contexto: nada é analisado, respondido nem marcado como não lido.

::screenshot{src="/images/blog/demo/en/ai-replies-whatsapp-session.webp" alt="Página de credenciais WhatsApp (WAHA) com os campos WAHA base URL, Session name e WAHA API key, e o painel WhatsApp session a mostrar Connected, Webhook not configured, os botões Restart session e Connect webhook, e Message history com Last 90 days e Import history" caption="Emparelhe o número, conecte o webhook e importe conversas antigas a partir de um só painel." path="/credentials/messaging-whatsapp"}
::

Os riscos, sem rodeios:

- **Não é a API oficial.** A documentação do WAHA diz que "WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe" (o WhatsApp não permite bots nem clientes não oficiais, por isso não deve ser considerado totalmente seguro). Um número pode ser bloqueado. Responda aos hóspedes que lhe escrevem; nunca envie mensagens em massa ([How to avoid blocking](https://waha.devlike.pro/docs/overview/how-to-avoid-blocking/)).
- **Proteja o WAHA.** O painel avisa quando o **WAHA answers without an API key**: qualquer pessoa que lá chegue pode ler e enviar as mensagens desse número.
- **O URL do webhook é um segredo.** O seu token é o que deixa as mensagens entrar na caixa de entrada. As conversas de grupo são ignoradas.

Para a API oficial da Meta, veja o Messaging hub do Little Hotelier em [WhatsApp com o Little Hotelier](/blog/whatsapp-little-hotelier).

### Passo 2: como se constrói cada resposta

1. **O remetente é associado a uma reserva.** O painel mostra o resultado: **Identity verified**, **Ambiguous — refused** (coincidiu mais de um hóspede, por isso não é mostrada nenhuma reserva), **No reservation match** (a IA responde só com as suas FAQ) ou **Not checked**. No WhatsApp, o número tem de coincidir com o telefone da reserva pelo menos nos últimos 8 dígitos; no e-mail, o endereço exato. Uma conversa do Booking.com indica a sua própria reserva; uma conversa da Expedia só fica associada pela referência `EXP-` que contém.
2. **Primeiro espera por você.** Uma mensagem de WhatsApp é analisada ao fim de 5 minutos, um e-mail ao fim de uma hora. Se alguém responder entretanto, o plano indica **already answered** e nada é cobrado.
3. **A IA lê** essa única reserva, as suas fontes de **FAQ & knowledge** (`/messaging/faq`), as suas notas da casa e a ficha da propriedade de **Settings > Property & AI knowledge**.
4. **Devolve um plano de uma lista fechada:** enviar uma mensagem, sinalizar para um funcionário, adicionar uma nota à reserva ou definir a hora de chegada. Não tem ferramentas, não pode cancelar, mudar datas nem mexer em pagamentos, e cada ação aplica-se só à reserva associada.
5. **Uma pessoa decide.** Edite a resposta e depois **Approve (respect delay)** ou **Confirm & send now**. Os planos sem resposta expiram ao fim de 48 horas.

Antes de sair qualquer coisa, uma verificação bloqueia uma resposta que contenha a referência de outra reserva, ou qualquer número longo quando o remetente não está verificado.

### Passo 3: escolha quanto pode fazer a IA

Em **Channels** (`/messaging/channels`), cada conta conectada tem o seu próprio modo:

| Modo | O que acontece |
|---|---|
| **Off — collect only** | As mensagens são recolhidas e mostradas. Nada é analisado nem enviado. |
| **Draft — I approve everything** (padrão) | A IA prepara uma resposta e um plano; nada acontece até você aprovar. |
| **Automatic reply — no reservation changes** | A IA envia após um intervalo, só para perguntas simples (hora de check-in ou check-out, wifi, estacionamento, chegada tardia, como chegar, serviços), para um hóspede verificado e com confiança suficiente. |
| **Autonomous — replies AND changes reservations** | Também adiciona notas ou define a hora de chegada numa reserva verificada sem aprovação. Reveja várias vezes por dia. |

Limites por canal: as conversas do **Booking.com** nunca são enviadas pela IA, seja qual for o modo; é uma pessoa que carrega em Send. A **Expedia** só oferece Off e Draft, e a resposta escreve-se no Partner Central. As respostas automáticas param às 4 por hora, 12 por dia, ou 3 seguidas sem resposta do hóspede, para que uma resposta automática de ausência não entre num ciclo sem fim.

### Passo 4: assinaturas, formatação e ficheiros por canal

Em **Signatures** (`/messaging/signatures`) guarda várias assinaturas com nome (Receção, Direção, Inglês…), cada uma escrita uma vez por canal da forma como esse canal a mostra, e escolhe uma por padrão. Os exemplos são preenchidos com os dados da sua propriedade. As respostas do Booking.com na conversa da reserva de um hóspede são assinadas em texto simples; as respostas públicas do Q&A nunca são.

::screenshot{src="/images/blog/demo/en/ai-replies-signatures.webp" alt="Página Signatures com o exemplo Reception aberto: nome Reception definido como Default, separadores Email, WhatsApp e Booking.com, a versão de e-mail com o nome do hotel, o telefone da receção e o link do site, um campo Text version vazio, e assinaturas de exemplo (Reception, Formal, Short, Full contact, Bilingual) à esquerda" caption="Uma assinatura, três versões: rica para e-mail, marcadores do WhatsApp, texto simples para o Booking.com." path="/messaging/signatures"}
::

A IA escreve um rascunho, e a caixa de entrada adapta-o ao canal:

| Canal | Formatação | Ficheiros / arquivos |
|---|---|---|
| E-mail | Texto rico: negrito, links, listas, citações | Sim, até 18 MB no total |
| WhatsApp | O `*negrito*`, o `_itálico_` e as listas do próprio WhatsApp | Até 10 ficheiros de 16 MB cada, mais notas de voz gravadas no navegador |
| Booking.com | Texto simples; uma resposta pública do Q&A fica abaixo de 320 caracteres | Não |

No WhatsApp, as fotografias, as notas de voz e os documentos que os hóspedes enviam aparecem na conversa. O WhatsApp só guarda os ficheiros durante algum tempo, por isso um ficheiro antigo pode já não estar disponível.

### Passo 5: ensine-lhe as suas respostas

- **FAQ & knowledge** (`/messaging/faq`): adicione a sua página de FAQ ou texto simples e preencha as notas da casa. A página diz claramente que a IA "answers from these sources and nothing else" (responde com estas fontes e mais nada).
- **AI training** (`/messaging/training`): em **Review recent**, carregue em **Correct** quando a IA interpretou mal uma mensagem; passa a ser um exemplo. Acrescente **Rules** de uma frase e use o **Test bench** para verificar que continua de acordo (cada teste é uma análise real e consome crédito).
- **Memória de respostas:** não precisa de configurar nada. As respostas que a sua equipa enviou no último ano são emparelhadas com a pergunta anterior, e as mais parecidas são mostradas à IA quando chega uma mensagem semelhante, sem o nome, as datas, as referências e os contactos do outro hóspede. Escreva uma vez "6 € por noite por um cão, pagos à chegada", e o próximo hóspede que perguntar recebe a mesma resposta. As notas da casa continuam a ter prioridade sobre uma resposta antiga.

::screenshot{src="/images/blog/demo/en/ai-replies-training-examples.webp" alt="Página AI training no separador Examples com três exemplos guardados: uma pergunta em francês sobre estacionamento no Booking.com sem ações, uma chegada tardia em alemão no WhatsApp que define a hora de chegada para as 01:00 e um pedido de fatura em espanhol por e-mail que adiciona uma nota à reserva, cada um com uma breve indicação" caption="As correções passam a exemplos que a IA vê da próxima vez que chega uma mensagem semelhante." path="/messaging/training"}
::

### O que mais trata a caixa de entrada

- **Os preços vêm do seu motor de reservas.** O assistente privado à direita cota a partir da sua página de reservas diretas para essas datas e esse grupo, com o seu código promocional. Um preço que nenhuma cotação devolveu fica assinalado como não verificado.
- **Noites esgotadas:** quando um hóspede pede uma data esgotada e a sua [lista de espera](/blog/hotel-waitlist-sold-out-dates) está ativa, o assistente propõe um cartão para o acrescentar a ela.
- **Pedidos de fatura:** as duas mensagens fixas de pedido de fatura do Booking.com são lidas sem IA e passam a um cartão que inscreve a estadia para a sua [fatura no check-out](/blog/send-invoice-to-guest-at-checkout), mais uma resposta no idioma do hóspede.
- **Créditos de IA** (`/messaging/credits`): uma análise é uma mensagem de hóspede lida, planeada e redigida, cobrada ao custo real do modelo, primeiro de uma quota mensal e depois do seu saldo. Os preços dos pacotes nessa página ainda são provisórios.

::demo-cta{path="/messaging"}
::

Tudo o que a caixa de entrada faz está na [página Guest inbox](/tools/bot/guest-inbox). O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools não é afiliado ao WhatsApp, à Meta, ao Booking.com, à Expedia Group, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com os logins do Little Hotelier, do Booking.com e da Expedia do seu próprio hotel.
::

Veja também: [como identificar mensagens fraudulentas](/blog/hotel-scam-messages), [o assistente de IA para a receção](/blog/ai-assistant-hotel-front-desk), [WhatsApp com o Little Hotelier](/blog/whatsapp-little-hotelier).

## Resumo

- Escreva uma vez as respostas às doze perguntas mais comuns: são os seus modelos, as suas FAQ e os factos da sua IA.
- Deixe a IA redigir, e mantenha uma pessoa nos cancelamentos, reembolsos, preços e reclamações.
- A IA só deve ver uma reserva quando o remetente está associado a exatamente uma reserva, e responder "a confirmar" a tudo o que não listou.
- No Hotelier Tools, WhatsApp (através do WAHA), e-mail, Booking.com e Expedia (beta) partilham uma caixa de entrada, todos os canais começam em **Draft**, e a IA nunca envia nada no Booking.com nem na Expedia.
- As assinaturas, a formatação, o treino e a memória de respostas fazem os rascunhos soar à sua receção.
