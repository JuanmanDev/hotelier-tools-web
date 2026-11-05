---
title: "Como ler e responder às mensagens dos hóspedes da Expedia (Partner Central, app e e-mail)"
seoTitle: "Como responder às mensagens da Expedia no Partner Central"
description: "Onde ver as mensagens da Expedia, como responder no Partner Central, na app ou por e-mail, mensagens agendadas e uma caixa de entrada com WhatsApp."
date: 2026-11-03
updated: 2026-11-05
category: guests
tags: [expedia, mensagens de hóspedes, partner central, caixa de entrada, modelos, little hotelier]
keywords: [mensagens expedia partner central, como responder a hóspedes expedia, e-mail alias hóspede expedia, centro de mensagens expedia, mensagens agendadas expedia, expedia não mostra telefone do hóspede, mensagens expedia numa só caixa de entrada, app expedia partner central mensagens]
feature: guest-inbox
demoPath: /messaging/channels
cover: /images/blog/demo/en/expedia-guest-messages-channels.webp
coverAlt: "Página Channels do Hotelier Tools: a conexão de mensagens do Booking.com a recolher mensagens no modo Draft (I approve everything) e, por baixo, as mensagens do Expedia Partner Central, ainda não conectadas, com um botão Switch on Expedia messages e um link de início de sessão no Partner Central"
faq:
  - q: "Onde encontro as mensagens dos hóspedes da Expedia?"
    a: "No Expedia Group Partner Central, em Guest relations > Messages. Pode pesquisar pelo nome do hóspede ou pelo ID da reserva, ou filtrar para encontrar uma conversa. Você e o hóspede também recebem notificações por e-mail das novas mensagens."
  - q: "Posso responder a um hóspede da Expedia a partir do meu próprio e-mail?"
    a: "Sim. Cada reserva tem um guest email alias, um endereço único que pode copiar da reserva ou de Messages. O e-mail tem de sair de um endereço associado a um utilizador validado do Partner Central, e as respostas do hóspede chegam à sua caixa de correio e ao Partner Central."
  - q: "Por que razão não vejo o telefone do hóspede nas reservas da Expedia?"
    a: "A Expedia desativou temporariamente a visualização e a exportação dos telefones dos viajantes no Partner Central, por causa de tentativas de phishing contra viajantes. As reservas recebidas por API têm um número genérico. A Expedia pede às propriedades que usem as mensagens da própria Expedia."
  - q: "Posso enviar mensagens agendadas aos hóspedes da Expedia?"
    a: "Sim. Em Messages, abra Manage templates, crie um modelo, ative Send on a schedule e escolha quando é enviado. A Expedia envia as mensagens agendadas às 22:00, hora local."
  - q: "O Hotelier Tools pode responder aos hóspedes da Expedia?"
    a: "Não. O Hotelier Tools nunca envia mensagens a um hóspede da Expedia. A sua caixa de entrada lista as conversas da Expedia (beta, a funcionar desde a versão 1.71 de novembro de 2026). Uma resposta que escreva lá fica guardada como rascunho para a enviar no Partner Central."
  - q: "O Hotelier Tools faz parte da Expedia ou do Little Hotelier?"
    a: "Não. O Hotelier Tools é independente: não é afiliado à Expedia Group, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel e com o seu próprio login do Partner Central."
---

As mensagens dos hóspedes da Expedia estão no Partner Central, em **Guest relations > Messages**, onde pesquisa pelo nome do hóspede ou pelo ID da reserva e responde na conversa. Também pode responder pela app do Partner Central, ou a partir da sua própria caixa de correio através do guest email alias de cada reserva. Os modelos e as mensagens agendadas tratam das perguntas de rotina. Para ver a Expedia ao lado do WhatsApp, do Booking.com e do e-mail, a caixa de entrada do Hotelier Tools pode mostrar as conversas da Expedia (beta), mas as respostas saem sempre do Partner Central.

As funcionalidades da Expedia abaixo foram verificadas na ajuda do Partner Central da Expedia Group em novembro de 2026.

## Onde estão as mensagens dos hóspedes da Expedia?

Abra o Partner Central e selecione **Guest relations** e depois **Messages** ([ajuda do Partner Central: About messages](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-the-partner-central-message-center)). A partir daí pode:

- **Pesquisar** um hóspede pelo nome ou pelo ID da reserva para lhe enviar uma nova mensagem.
- **Filtrar** a lista para encontrar uma conversa existente.
- **Responder** na conversa e anexar instruções de check-in ou fotografias.

Você e os seus hóspedes recebem notificações por e-mail das novas mensagens, e os hóspedes podem iniciar uma conversa a partir do itinerário ou da confirmação. A Expedia chama ao Message Center "a opção recomendada": está ligado à reserva, guarda um histórico verificável e não expõe os dados de contacto do hóspede ([Contact a guest](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/reservations/about-contacting-guests)).

Duas coisas que surpreendem os novos parceiros:

- **Algumas reservas não têm Message Center.** Muitas reservas dos parceiros business-to-business (B2B) da Expedia, como agências de viagens, não permitem mensagens. Contacte o parceiro B2B, ou peça à Expedia que transmita uma mensagem urgente.
- **Os telefones estão ocultos.** A Expedia desativou temporariamente a visualização e a exportação dos telefones dos viajantes no Partner Central, e as reservas por API têm um número genérico. O motivo é o phishing: burlões / golpistas fazem-se passar por hotéis no WhatsApp com números roubados ([aviso de phishing](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-off-platform-phishing-attempts-targeting-travelers)). O seu channel manager também não terá o número real.

### No telemóvel / celular: a app do Partner Central

A app Expedia Group Partner Central permite iniciar conversas e responder aos hóspedes, com notificações de reservas, avaliações e cancelamentos. A Expedia diz que os utilizadores ativos da app respondem 20% mais depressa do que os não ativos (a sua própria média de 2021, [página da app](https://partner.expediagroup.com/en-us/landing-pages/manage-your-property-from-the-palm-of-your-hand)).

## Como responder pelo seu próprio e-mail: o guest email alias

Cada reserva tem um **guest email alias**, um endereço único que reencaminha o seu e-mail para o hóspede através da Expedia ([About the guest email alias](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-the-guest-email-alias)). Para o copiar:

1. **A partir de uma reserva:** selecione **Reservations**, encontre a reserva, selecione o nome do hóspede e depois **Copy email to clipboard**.
2. **A partir de Messages:** selecione **Guest relations > Messages**, abra o hóspede, selecione **Show contact details** e depois **Copy email to clipboard**.

As regras que importam:

- O alias funciona para reservas da Expedia, Hotels.com, Travelocity, Orbitz e Wotif. Em novembro de 2026 não funciona para reservas B2B nem para a Egencia.
- O endereço de envio **tem de pertencer a um utilizador / usuário validado do Partner Central**. O correio de qualquer outro endereço não é entregue, por isso adicione a caixa de correio da receção como utilizador do Partner Central se quiser responder a partir dela.
- A resposta do hóspede chega à sua caixa de correio e ao Message Center.
- Um e-mail com um número de cartão de crédito é bloqueado. Os números de cartões virtuais da Expedia são permitidos.
- Pode anexar ficheiros / arquivos PDF ou Word, como um formulário de pré-chegada.

## Com que rapidez deve responder aos hóspedes da Expedia?

A ajuda da Expedia pede que "responda a todos os hóspedes atempadamente" e que "responda prontamente para evitar atrasos, cancelamentos ou escalamentos". Não publica um prazo fixo para mensagens normais. Na prática, considere o próprio dia como limite e responda em minutos a tudo o que tenha a ver com a chegada. Chegadas tardias, códigos de porta e estacionamento são o que os hóspedes perguntam no dia da viagem.

A Expedia também lista o que não deve fazer ([Contact a guest](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/reservations/about-contacting-guests)):

- **Nada de marketing.** Nada de vendas adicionais nem promoções através das mensagens da Expedia.
- **Nada de confirmações duplicadas.** O hóspede já tem uma da Expedia.
- **Não alterar as condições da reserva fora da Expedia.** Datas e preços mudam-se no Partner Central.
- **Evite links externos e anexos** sempre que possível. Os hóspedes podem achá-los suspeitos.

Quando algo é combinado pessoalmente durante a estadia, a Expedia recomenda confirmá-lo por escrito no Message Center. Essa mensagem é o seu registo se houver uma disputa mais tarde.

## Como configurar modelos e mensagens agendadas

Em **Guest relations > Messages**, selecione **Manage templates** ([Send scheduled messages](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/send-scheduled-messages-to-guests)):

1. Selecione **Create new template**, dê-lhe um nome e escreva o texto.
2. Em **Insert custom information**, adicione conteúdo variável, como o nome do hóspede.
3. Anexe ficheiros se precisar, por exemplo um mapa ou as instruções de check-in.
4. Ative **Send on a schedule** e escolha quando é enviado, sem data de fim ou para um intervalo de datas.
5. Selecione **Save**.

Todas as mensagens agendadas são enviadas às 22:00, hora local. Um **smart template** pode responder automaticamente a um tema; em novembro de 2026 o único é um pedido de avaliação depois da estadia. **Send bulk message** envia um modelo a vários hóspedes de uma vez.

Um modelo de pré-chegada que pode adaptar:

```text [expedia-pre-arrival.txt]
Olá [nome do hóspede], estamos à sua espera em [nome da propriedade].

O check-in é a partir das [hora]. Se chegar depois das 22:00, responda aqui com a sua hora de chegada e deixamos instruções.
Estacionamento: [informação de estacionamento]. Pequeno-almoço / café da manhã: [horários e preço].

Só o contactaremos por esta conversa da Expedia, e nunca pediremos os dados do seu cartão por WhatsApp nem por SMS.
```

A última linha conta ainda mais agora que os burlões escrevem aos hóspedes da Expedia pelo WhatsApp. Mais sobre isso em [como identificar mensagens fraudulentas num hotel](/blog/hotel-scam-messages).

## A forma mais rápida: as conversas da Expedia na caixa de entrada do Hotelier Tools (beta)

O Hotelier Tools pode mostrar as suas conversas da Expedia na sua **Inbox** (`/messaging`), ao lado do WhatsApp, do Booking.com e do e-mail, cada uma junto da sua reserva do Little Hotelier. As respostas escrevem-se no Partner Central. Como configurar:

1. **Conecte o Partner Central** em **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`). O Hotelier Tools inicia sessão por você num navegador no servidor; você responde ao que a Expedia pede, como o código que envia por e-mail num dispositivo novo. A sessão é guardada encriptada, e **Keep Expedia signed in** evita que expire por inatividade. A configuração é a mesma dos [pedidos de pagamento Expedia Collect](/blog/expedia-collect-payment-requests).
2. No cartão **Guest messages** da mesma página, ative **Read Expedia guest messages**. Ou abra **Channels** (`/messaging/channels`) e carregue em **Switch on Expedia messages**.
3. Escolha o modo em **Channels**. A Expedia só oferece dois: **Off (collect only)**, em que as mensagens são mostradas e nada é analisado, e **Draft**, em que a IA prepara uma resposta para você rever. Um canal novo da Expedia começa no modo de só recolher.
4. Abra a **Inbox** e filtre por **Expedia**. Cada conversa tem um link **Conversation on Expedia** que abre a conversa no Partner Central.

::screenshot{src="/images/blog/demo/en/expedia-guest-messages-card.webp" alt="Cartão Guest messages na página Expedia Partner Central: o interruptor está desligado, a nota diz Sign in to Partner Central first, uma caixa Replies stay in Partner Central diz que o Hotelier Tools nunca envia mensagens a um hóspede da Expedia e guarda a sua resposta como rascunho, e um link Mode and timing; por baixo segue-se o cartão Expedia Collect payments" caption="O interruptor fica ao lado do início de sessão no Partner Central. As respostas aos hóspedes da Expedia ficam sempre no Partner Central." path="/credentials/expedia-extranet"}
::

::screenshot{src="/images/blog/demo/en/expedia-guest-messages-channels.webp" alt="Página Channels: mensagens do Booking.com recolhidas no modo Draft (I approve everything) com Collect messages ligado, e mensagens do Expedia Partner Central marcadas como ainda não conectadas, com Switch on Expedia messages e o início de sessão no Partner Central" caption="A Expedia aparece na página Channels com as suas outras contas. Na demo não está ativada." path="/messaging/channels"}
::

### O que a caixa de entrada lê, e o que nunca faz

- **A lista de conversas, não todas as mensagens.** Para cada conversa lê o hóspede, a estadia e a última mensagem, tal como a pré-visualização da lista de mensagens do Partner Central. A conversa completa fica no Partner Central.
- **Nunca envia nada a um hóspede da Expedia.** Nem automaticamente, nem quando carrega num botão. O que escreve fica guardado como rascunho da conversa (**Save as a draft: Expedia replies are sent from Partner Central**). Copie-o para o Partner Central ou para a app.
- **As reservas só são associadas pelo código de confirmação.** O Little Hotelier guarda uma reserva da Expedia como `EXP-` mais o código de confirmação da Expedia. Uma conversa que indique esse código fica ligada à reserva e conta como verificada. O nome de um hóspede nunca serve de prova: uma conversa sem código fica sem associação, e a IA não vê dados de nenhuma reserva para ela.

No modo **Draft**, a IA escreve a sugestão a partir da reserva verificada e do que lhe ensinou em **FAQ & knowledge** (`/messaging/faq`): a sua página de FAQ, as notas da casa e a ficha da propriedade. Um serviço que não listou é respondido como "a confirmar", nunca "sim". Como funcionam esses rascunhos está em [respostas com IA às mensagens dos hóspedes](/blog/ai-replies-guest-messages).

::callout{type="warning" title="Estado em novembro de 2026"}
As conversas da Expedia estão em beta. Até 5 de novembro de 2026, o Partner Central recusava o pedido que lê a lista de mensagens (um HTTP 403), por isso nenhuma conversa da Expedia chegava à caixa de entrada. A versão 1.71 (novembro de 2026) resolveu-o: o Hotelier Tools envia agora o mesmo pedido que a própria caixa de entrada do Partner Central, e as conversas da Expedia chegam com o hóspede, a estadia e a última mensagem. Se a Expedia voltar a mudar esse pedido, a página da Expedia mostra um erro em vez de uma caixa de entrada vazia até ser atualizado. As respostas continuam a ser enviadas a partir do Partner Central ou da app.
::

Mais dois limites honestos:

- **Usa a sua própria sessão do Partner Central.** Os termos de parceiro da Expedia restringem o acesso automatizado ao Partner Central. A via de conectividade que a Expedia suporta é a sua Messaging API, disponível através de fornecedores de conectividade.
- **Aqui a Expedia é só de leitura.** As conversas de WhatsApp e de e-mail podem ser respondidas a partir da caixa de entrada. As da Expedia não.

::demo-cta{path="/messaging/channels"}
::

Tudo o que a caixa de entrada faz está na [página Guest inbox](/tools/bot/guest-inbox). O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools não é afiliado à Expedia Group, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel e com o seu próprio login do Expedia Partner Central.
::

Veja também: [mensagens do Booking.com sem viver na extranet](/blog/booking-com-guest-messages), [WhatsApp com o Little Hotelier](/blog/whatsapp-little-hotelier), [respostas com IA às mensagens dos hóspedes](/blog/ai-replies-guest-messages).

## Resumo

- As mensagens da Expedia estão no Partner Central, em **Guest relations > Messages**, e na app do Partner Central.
- Para responder a partir da sua caixa de correio, copie o guest email alias da reserva e envie de um endereço que seja um utilizador validado do Partner Central.
- Os telefones dos hóspedes estão ocultos por agora: mantenha o contacto dentro das mensagens da Expedia e diga aos hóspedes que nunca lhes pedirá os dados do cartão noutro lado.
- Os modelos com **Send on a schedule** tratam das instruções de check-in; as mensagens agendadas saem às 22:00, hora local.
- A caixa de entrada do Hotelier Tools pode listar as conversas da Expedia ao lado do WhatsApp e do Booking.com (beta, a funcionar desde a versão 1.71 de novembro de 2026), mas todas as respostas à Expedia são enviadas a partir do Partner Central.
