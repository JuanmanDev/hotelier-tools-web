---
title: "Mensagens automáticas do Booking.com: como gerir as mensagens dos hóspedes sem viver na extranet"
seoTitle: "Mensagens do Booking.com: gerir sem viver na extranet"
description: "Pulse, modelos, mensagens agendadas e respostas automáticas, como identificar mensagens falsas do Booking.com e uma caixa de entrada com WhatsApp e e-mail."
date: 2026-10-03
category: guests
tags: [booking.com, guest messages, inbox, templates, little hotelier]
keywords: [mensagens automáticas booking, onde ver mensagens booking, mensagens pré reserva booking, mensagens fraudulentas booking, modelos de mensagens booking, mensagens booking não funcionam, perguntas e respostas hóspedes booking]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/guest-inbox-ai-draft-availability.webp
coverAlt: "Caixa de entrada de hóspedes do Hotelier Tools com filtros WhatsApp, Email e Booking.com, um e-mail de um hóspede a perguntar por um quarto duplo em setembro, o plano da IA em rascunho com uma resposta editável em inglês e o painel do assistente privado"
faq:
  - q: "Por que razão as minhas mensagens do Booking.com não aparecem na extranet?"
    a: "Talvez seja o seu channel manager que trata das mensagens aos hóspedes. Na Extranet, abra Connection management: as funções marcadas em verde são geridas na plataforma do seu fornecedor, como o Messaging hub do Little Hotelier. Verifique também se o seu utilizador / usuário da extranet tem as permissões certas."
  - q: "Posso agendar mensagens para hóspedes do Booking.com?"
    a: "Sim. Na Extranet ou no Pulse, vá a Property > Messaging preferences > Template scheduler e associe um modelo a uma fase: na reserva, uma semana, três dias ou um dia antes da chegada, no dia da chegada ou um dia antes da partida."
  - q: "Como sei que uma mensagem vem mesmo do Booking.com?"
    a: "Os e-mails do Booking.com vêm sempre de um endereço que termina em @booking.com, e os seus links levam a endereços que terminam em .booking.com. Desconfie de pedidos urgentes de que não foi avisado antes: o Booking.com diz que nunca os faz sem comunicação prévia."
  - q: "Por que razão as novas reservas do Booking.com não mostram o telefone no Little Hotelier?"
    a: "Desde 28 de setembro de 2026, o Booking.com deixou de incluir os telefones dos hóspedes nas reservas que envia aos channel managers. Pode continuar a ver o número na Extranet ou no Pulse com Show phone number."
  - q: "A IA pode responder automaticamente aos hóspedes do Booking.com no Hotelier Tools?"
    a: "Não. No Booking.com, a IA só prepara um rascunho e quem decide é uma pessoa. O envio automático por IA nunca é permitido nas conversas do Booking.com, seja qual for o modo de resposta."
  - q: "O Hotelier Tools faz parte do Booking.com ou do Little Hotelier?"
    a: "Não. O Hotelier Tools é independente: não é afiliado ao Booking.com, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel e com o seu próprio login da extranet do Booking.com."
---

Você não precisa de ter a extranet aberta o dia todo. A app Pulse leva as mensagens do Booking.com para o seu telemóvel / celular com notificações, e os modelos de mensagem, as mensagens agendadas e as respostas automáticas tratam das perguntas de rotina. Para ver o Booking.com ao lado do WhatsApp e do e-mail, use o Messaging hub do Little Hotelier (um complemento pago) ou a caixa de entrada do Hotelier Tools, que também redige respostas para uma pessoa aprovar.

As funcionalidades do Booking.com abaixo foram verificadas na sua Partner Help em outubro de 2026.

## Onde ver as mensagens do Booking.com e por que razão não aparecem?

Pode ler e responder às mensagens em três lugares ([Partner Help: Contacting guests](https://partner.booking.com/en-us/help/reservations/contact-extranet/contacting-your-guests)):

- **Extranet:** **Inbox > Reservation messages**, ou abra uma reserva e desça até **Conversation with guest**.
- **App Pulse:** toque em **Bookings**, escolha o hóspede e escreva em **Messages**.
- **O seu fornecedor de conectividade**, se for ele que gere as mensagens com os hóspedes por você.

Mensagens que faltam ou que não carregam? Verifique estas três coisas:

1. **Quem gere as mensagens.** Na Extranet, abra a página **Connection management**. As funções de mensagens marcadas em verde são tratadas na plataforma do seu fornecedor (por exemplo o Messaging hub do Little Hotelier), não na Extranet.
2. **Os direitos do seu utilizador.** Algumas funcionalidades exigem permissões específicas: os modelos precisam do direito de gerir modelos de mensagens a hóspedes, e os telefones precisam dos direitos de gerir reservas e ver os dados de contacto dos hóspedes.
3. **Notificações.** Em **Account > Notification settings**, escolha como quer saber das novas mensagens, por exemplo por e-mail.

## Como configurar modelos, mensagens agendadas e respostas automáticas

As três estão em **Property > Messaging preferences**, na Extranet ou em **More** no Pulse ([Partner Help: Templates and automatic replies](https://partner.booking.com/en-us/help/reservations/contact-extranet/setting-templates-automatic-replies-and-message-notifications)).

### Modelos de mensagem

1. Abra o separador / aba **Message templates** e clique em **Create new template**.
2. Escreva a mensagem. Os blocos de informação pré-preenchidos do Booking.com inserem o nome do hóspede, a hora de check-in, o nome da propriedade e outros dados da reserva.
3. Adicione um idioma e imagens, se precisar, e clique em **Continue**.
4. Dê-lhe um **Template name** e um **Template topic** e clique em **Save template**.

Use o mesmo nome de modelo em todas as versões de idioma. O Booking.com envia então o idioma do hóspede e recorre ao seu idioma padrão. Não é possível anexar PDF nem códigos QR, e qualquer link (o seu check-in online, por exemplo) tem de ser aprovado primeiro em **Security settings**.

Um modelo de pré-chegada que você pode adaptar (troque os parênteses retos / colchetes pelos blocos de informação do Booking.com):

```text [pre-arrival-template.txt]
Olá [nome do hóspede], estamos à sua espera em [nome da propriedade].

O check-in é a partir das [hora de check-in]. Se chegar depois das 22:00, basta responder com a sua hora de chegada.
Estacionamento: [informação de estacionamento]. Pequeno-almoço / café da manhã: [horários e preço].

Nunca pediremos os dados do seu cartão por WhatsApp nem por SMS.
Até breve!
```

### Mensagens agendadas

Abra o separador **Template scheduler**, clique em **Schedule a template**, escolha quando sai e qual o modelo, e depois **Add to schedule**. As fases são: quando um hóspede reserva, uma semana antes da chegada, três dias antes, um dia antes, no dia da chegada e um dia antes da partida. Os modelos enviados aparecem na sua caixa de entrada.

### Respostas automáticas

No separador **Automatic replies**, abra as configurações de um tema, marque-o, escolha a resposta, associe um modelo com **Select template** e **Save**. Os pedidos dentro da sua política recebem uma aceitação automática; para pedidos fora dela, você associa a resposta a um modelo. O hóspede recebe-a por e-mail e no chat.

### Help me reply e tradução

O chat da Extranet tem um botão **Help me reply** que sugere um modelo ou uma resposta em texto livre. Você revê, edita e envia. As mensagens também podem ser traduzidas na Extranet e no Pulse (inglês, alemão, francês, espanhol, neerlandês, polaco, russo, árabe e português).

## Responder rapidamente faz diferença?

Sim. O centro de ajuda do Little Hotelier refere que o Booking.com acompanha uma pontuação de resposta interna que mede a rapidez com que responde. Quando uma mensagem não precisa de resposta ("Obrigado, até sexta!"), marque-a como **No reply needed**: fecha a janela de resposta de 24 horas, para que essa conversa não conte contra você ([Messaging hub FAQ](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

## Como responder ao Guest Q&A (perguntas antes de reservar)

O Guest Q&A permite que as pessoas lhe façam perguntas antes de reservar. As suas respostas são publicadas na página da propriedade depois de moderadas. Outros hóspedes podem votar nelas, para que as mais úteis apareçam primeiro ([Partner Help: Guest Q&A](https://partner.booking.com/en-us/help/property-page/general-info/guest-qa-feature)).

Pode remover respostas desatualizadas ou responder em privado quando a pergunta é pessoal. Para desativar, vá ao separador **Inbox** da Extranet, **Questions for your property**, **Guest Q&A preferences**. As perguntas que se repetem (estacionamento, check-in tardio, animais) também devem estar na descrição da propriedade.

## A opção do próprio Little Hotelier: Messaging hub

Se usa o complemento **Guest Engagement** do Little Hotelier (listado para o plano Pro na [página de preços](https://www.littlehotelier.com/pricing/) em outubro de 2026), o seu **Messaging hub** pode agendar mensagens e conversar com hóspedes do Booking.com, ao lado de WhatsApp, Airbnb, SMS e e-mail. As mensagens do Booking.com não têm custo extra aí ([Messaging hub FAQ](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

1. Confirme que o Booking.com está conectado em **Channels**.
2. Vá a **Guest Engagement > Communication > Settings**, encontre o Booking.com e clique em **Configure**.
3. Clique em **Connect** e dê à SiteMinder a permissão de mensagens a hóspedes no widget do Booking.com.
4. Atualize a página e comece a responder. Um ícone **No reply needed** fecha as conversas que não precisam de resposta.

A mesma caixa de entrada está na app móvel do Little Hotelier, com notificações push para novas mensagens ([app móvel](https://helpcentre.littlehotelier.com/en/articles/15547083-guest-messaging-in-the-little-hotelier-mobile-app)). Adicione os domínios do Little Hotelier à lista de permitidos do Booking.com, ou as suas mensagens não chegarão aos hóspedes do Booking.com ([como fazer](https://helpcentre.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).

## Como identificar mensagens falsas do Booking.com

Os burlões / golpistas imitam o Booking.com para roubar o seu login da extranet e depois enviam aos seus hóspedes mensagens com links de pagamento falsos. A orientação do Booking.com ([Partner Help: Phishing and email spoofing](https://partner.booking.com/en-us/help/account-and-log/security/online-security-awareness-phishing-and-email-spoofing)):

- **Verifique o remetente.** Os e-mails do Booking.com vêm sempre de um endereço que termina em **@booking.com**, seja qual for o subdomínio. Um endereço como support@booking-103266.com é falso.
- **Verifique os links antes de clicar.** Passe o cursor por cima ou, no telemóvel, mantenha o dedo pressionado. Se o endereço não terminar em **.booking.com**, não o abra.
- **Repare no tom.** Ameaças urgentes (a sua conta vai ser suspensa), erros ortográficos e idiomas misturados são sinais de alerta. O Booking.com "will never make urgent requests without sending prior communication" (nunca faz pedidos urgentes sem comunicação prévia): ligue primeiro ao seu gestor de conta ou ao atendimento ao cliente.
- **Se clicou:** altere primeiro a palavra-passe / senha do seu e-mail, depois a do Booking.com, analise o seu dispositivo e comunique o caso nas 24 horas seguintes.

Proteja também os seus hóspedes:

- **Ative as Messaging security settings** (**Property > Messaging preferences > Security settings**, com autenticação de dois fatores). Liste os endereços de e-mail e os links autorizados a chegar aos hóspedes: os e-mails de outros endereços não chegam e os outros links são removidos ([Messaging security](https://partner.booking.com/en-us/help/account-and-login/security/understanding-messaging-security-settings)). Se o Booking.com identificar atividade suspeita na sua conta, desativa os links nas suas mensagens.
- **Saiba onde estão os telefones.** Desde 28 de setembro de 2026, o Booking.com deixou de enviar os telefones dos hóspedes aos channel managers ([Booking.com for developers](https://developers.booking.com/connectivity/docs/migration-guides/migrating-to-new-versions)). Use **Show phone number** na Extranet ou no Pulse.
- **Diga aos hóspedes como lhes vai pedir dinheiro**, como na última linha do modelo acima.

## A forma mais rápida: Booking.com, WhatsApp e e-mail numa só caixa de entrada

A **Inbox** do Hotelier Tools (`/messaging`, alpha) junta as mensagens e o Guest Q&A do Booking.com ao seu WhatsApp e e-mail, com a reserva ao lado de cada conversa e uma resposta redigida pela IA para você rever.

1. Conecte o Booking.com uma única vez em **Credentials > Booking.com extranet** (`/credentials/booking-extranet`) com o seu nome de utilizador de parceiro, a palavra-passe e o segundo fator (Pulse, SMS ou chamada). A sessão é guardada encriptada para a sua propriedade. O Booking.com pode pedir-lhe que volte a verificar de vez em quando; o assistente trata disso.
2. Se quiser, conecte a sua caixa de e-mail (Google, Microsoft ou qualquer conta IMAP/SMTP) e o [WhatsApp](/blog/whatsapp-little-hotelier).
3. Abra a **Inbox** e filtre por **Booking.com**. Uma conversa do Booking.com fica associada automaticamente à sua reserva.
4. Leia o rascunho e o plano da IA, edite-o ou peça ao assistente privado, à direita, que consulte algo no Little Hotelier.

::screenshot{src="/images/blog/demo/en/guest-inbox-ai-plan-late-arrival.webp" alt="Caixa de entrada de hóspedes com uma conversa de WhatsApp aberta: a mensagem do hóspede sobre uma chegada tardia, em espanhol, a reserva associada marcada como identity verified e paid, o plano da IA em rascunho com o motivo e uma resposta editável, e o painel Assistant privado à direita" caption="Cada conversa mostra a reserva, um rascunho da IA à sua espera e um assistente privado que o hóspede nunca vê." path="/messaging"}
::

Dois limites honestos:

- **No Booking.com, a IA nunca envia nada sozinha.** E enviar a sua resposta de volta ao Booking.com a partir da caixa de entrada ainda não é algo que prometamos: copie o rascunho aprovado para a Extranet ou para o Pulse.
- **Usa a sua própria sessão da extranet.** O Hotelier Tools entra como você, porque a API de mensagens do Booking.com só está aberta a parceiros de conectividade. O próprio dashboard refere que os termos de parceiro do Booking.com restringem o acesso automatizado à extranet e que a Connectivity API continua a ser a via suportada onde a tiver.

As duas mensagens fixas de pedido de fatura / nota fiscal do Booking.com são reconhecidas sem qualquer IA: a caixa de entrada propõe inscrever a estadia para a sua fatura no check-out (veja [enviar a fatura automaticamente no check-out](/blog/send-invoice-to-guest-at-checkout)).

### Escolha o que a IA pode fazer

Em **Channels** (`/messaging/channels`), cada conta conectada tem um modo de resposta:

| Modo | O que acontece |
|---|---|
| **Off** | As mensagens são recolhidas e mostradas. Nada é analisado nem enviado. |
| **Draft** (padrão) | A IA prepara uma resposta e um plano. Nada acontece até você aprovar. |
| **Automatic reply** | A IA envia a resposta após um intervalo. Nunca pode alterar uma reserva. |
| **Autonomous** | A IA responde e também pode adicionar uma nota ou definir a hora de chegada numa reserva verificada, sem aprovação. Reveja várias vezes por dia. |

Escolha o que escolher, as conversas do Booking.com continuam a ser enviadas por uma pessoa. A IA que fala com os hóspedes não tem ferramentas: devolve um plano de uma lista fechada (enviar uma mensagem, sinalizar para um funcionário, adicionar uma nota à reserva, definir a hora de chegada) e nunca pode cancelar, mudar datas nem mexer em pagamentos. Só vê uma reserva quando o remetente é verificado, e uma conversa do Booking.com conta como verificada.

::screenshot{src="/images/blog/demo/en/guest-messaging-reply-modes-menu.webp" alt="Página Messaging Channels com o menu When a guest writes aberto na conexão do WhatsApp: Off (collect only), Draft (I approve everything, selecionado), Automatic reply (no reservation changes) e Autonomous (replies and changes reservations)" caption="Escolha um modo de resposta por conta, aqui para o WhatsApp. O Draft, o modo padrão, espera por você." path="/messaging/channels"}
::

### Ensine-lhe as suas respostas: FAQ & knowledge

A IA só responde aos hóspedes com o que você lhe der, mais a ficha da sua propriedade. Abra **FAQ & knowledge** (`/messaging/faq`):

1. Em **Pages and text the AI may quote**, escolha **FAQ page (URL)** ou **Plain text** e clique em **Add source**. Uma tarefa agendada pode reler a página a cada hora.
2. Preencha **House notes** com tudo o que não esteja nessa página: wifi, horas de check-in e check-out, estacionamento, dicas locais. Clique em **Save notes**.
3. Em **Settings > Property & AI knowledge** (`/settings/property`), clique em **Read from Little Hotelier** para importar o endereço, as políticas, os tipos de quarto e os extras, e depois em **Save**.

Um serviço que você não listou é respondido como "a confirmar", nunca "sim". Cada mensagem que a IA lê e redige consome créditos de IA, mostrados em **AI credits** (`/messaging/credits`).

::screenshot{src="/images/blog/demo/en/guest-messaging-faq-knowledge.webp" alt="Página FAQ and knowledge: uma fonte de página de FAQ já adicionada, as opções FAQ page (URL) e Plain text com o botão Add source, e House notes preenchidas (em espanhol) com horas de check-in e check-out, preço do pequeno-almoço, receção 24 horas e wifi gratuito" caption="A IA só cita a sua página de FAQ, as suas notas e a ficha da sua propriedade." path="/messaging/faq"}
::

::demo-cta{path="/messaging"}
::

Tudo o que a caixa de entrada faz está na [página Guest inbox](/tools/bot/guest-inbox). O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools é independente: não é afiliado ao Booking.com, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel e com o seu próprio login da extranet do Booking.com.
::

## Resumo

- Responda de qualquer lugar pelo Pulse e deixe que modelos, mensagens agendadas e respostas automáticas cubram as perguntas de rotina.
- Marque as conversas que não precisam de resposta como **No reply needed** e mantenha as respostas do Guest Q&A curtas e adequadas a um público amplo.
- Trate como burla / golpe qualquer mensagem "do Booking.com" que não venha de @booking.com ou que tenha links fora de .booking.com. Ative as Messaging security settings.
- Para uma só caixa de entrada com WhatsApp e e-mail, use o Messaging hub do Little Hotelier ou a caixa de entrada do Hotelier Tools, onde a IA redige e uma pessoa envia.
