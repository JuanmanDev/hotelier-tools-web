---
title: "Um hóspede pediu datas que ainda não pode vender? Mantenha uma fila de pedidos de disponibilidade"
seoTitle: "Pedidos de disponibilidade no hotel: não perca nenhum"
description: "Os hóspedes pedem datas cheias ou ainda sem preço e o e-mail perde-se. Mantenha um registo de pedidos ou deixe uma fila verificar e responder."
date: 2026-11-05
category: operations
tags: [availability, waitlist, enquiries, little hotelier, group requests, direct booking]
keywords: [pedido de disponibilidade hotel, hóspede pede datas sem disponibilidade, registo de pedidos de reserva hotel, avisar hóspede quando houver quarto livre, tarifas ainda não carregadas motor de reservas, pedido de grupo hotel esgotado, lista de espera hotel datas futuras, fila de espera reservas little hotelier]
feature: waitlist
demoPath: /availability-watch
cover: /images/blog/demo/en/availability-queue-requests.webp
coverAlt: "Página Availability queue do Hotelier Tools: o botão Add to the queue, o cartão Public waiting-list page marcado como aberto com o seu link e In the queue com três pedidos ativos: Tom Walker (e-mail e WhatsApp, 1 quarto de qualquer tipo, 27 a 29 de novembro), Lena Fischer (1 Doble Superior, 18 a 21 de dezembro) e Viajes Ejemplo (agência), que quer 3 Doble Estándar e 1 Familiar 4 pax de 26 a 29 de março de 2027"
featured: true
faq:
  - q: "O que devo fazer quando um hóspede pede datas a que ainda não dei preço?"
    a: "Anote o pedido com as noites exatas, os quartos e o contacto, diga ao hóspede que lhe escreve assim que as datas abrirem e consulte a lista sempre que carregar tarifas novas. Uma ferramenta como a Availability Queue do Hotelier Tools faz essa verificação por você e escreve ao hóspede na primeira vez que os quartos estiverem reserváveis."
  - q: "Um pedido de disponibilidade segura um quarto para o hóspede?"
    a: "Não. Nada fica reservado nem bloqueado. Quando os quartos ficam livres, o hóspede recebe uma mensagem com um link de reserva, e o quarto fica para quem reservar primeiro. Diga-o claramente em cada resposta."
  - q: "Como sabe a fila que uma estadia está mesmo livre?"
    a: "Lê o inventário do Little Hotelier para cada noite da estadia e fica com o número mais baixo. Uma noite em stop sell, fechada a chegadas no dia de chegada ou ausente do inventário conta como zero, por isso 'sem dados' nunca significa 'livre'."
  - q: "E se só alguns dos quartos pedidos por uma agência ficarem livres?"
    a: "É uma correspondência 'partial' (parcial). Por padrão, só a propriedade é avisada, uma vez, para que possa ligar à agência e oferecer o que está livre. O pedido continua na fila até todos os quartos estarem livres."
  - q: "Um hóspede pode receber a mesma mensagem duas vezes?"
    a: "Não. Um pedido anuncia 'available' (disponível) uma vez e depois fecha-se. O Hotelier Tools também recusa pôr a mesma pessoa duas vezes na fila para as mesmas datas, quer tenha sido acrescentada a partir do painel, de um assistente, da API ou da página pública."
  - q: "O Hotelier Tools faz parte do Little Hotelier?"
    a: "Não. O Hotelier Tools é uma ferramenta independente: não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Lê a disponibilidade com o login do Little Hotelier do seu próprio hotel e nunca cria nem altera uma reserva a partir da fila."
---

Quando um hóspede pede datas que hoje não pode vender (cheias, fechadas ou ainda sem preço), anote o pedido com as noites exatas, os quartos e o contacto, e consulte essa lista sempre que algo mudar. A forma mais rápida é uma fila que verifica o Little Hotelier por você: a **Availability Queue** do Hotelier Tools verifica cada pedido de forma agendada e envia ao hóspede uma única mensagem, com um link de reserva, na primeira vez que todas as noites pedidas estiverem reserváveis.

## Porque se perdem os pedidos de disponibilidade?

Porque o pedido está num sítio e a resposta aparece noutro, semanas depois. Os casos habituais:

- **O e-mail ou o WhatsApp fica soterrado.** "Tem um duplo para a primeira semana de agosto?" chega em março. Quando os quartos ficam livres, a mensagem está 400 e-mails abaixo e ninguém se lembra de quem perguntou.
- **As datas ainda não têm tarifas.** Ainda não carregou os preços do próximo verão, por isso o motor de reservas não mostra nada e o hóspede escreve-lhe. Você responde "nós avisamos" e depois carrega as tarifas numa tarde cheia de trabalho.
- **As datas estão esgotadas.** Um cancelamento liberta um quarto numa terça-feira às 10:00. O hóspede que perguntou em janeiro nunca sabe, e uma OTA volta a vendê-lo.
- **Uma agência quer vários quartos.** Três duplos e um quarto familiar para o fim de semana da Páscoa. Tem dois duplos. É um não, ou um telefonema?
- **Parte do pedido torna-se possível.** Duas das três noites ficam livres, ou um dos dois quartos. Ninguém verifica à mão cada noite de cada pedido.

Cada um destes casos é uma reserva direta que já tinha na sua caixa de entrada.

## Como acompanhar os pedidos de disponibilidade à mão?

Um registo simples funciona se alguém o mantiver. Uma linha por pedido:

| O que anotar | Porquê |
|---|---|
| Data do pedido e como chegou (e-mail, WhatsApp, telefone) | Para encontrar a mensagem original |
| Nome, e-mail e telefone com indicativo do país | Para responder pelo canal que o hóspede usou |
| Primeira noite e dia de partida | Uma estadia precisa de todas as noites, não só da primeira |
| Quartos e tipos de quarto, por tipo nos grupos | "3 duplos + 1 familiar" não é "4 quartos" |
| Porque não o pôde vender | Cheio, fechado ou sem tarifas: cada motivo diz-lhe quando voltar a ver |
| Estado e data | À espera, oferecido, reservado, desistiu |

**Quando consultar:**

- **Sempre que carregar ou abrir tarifas.** No Little Hotelier, as tarifas definem-se e as datas fecham-se ou abrem-se em **Front Desk > Inventory**, uma a uma ou com **Bulk Update** ([centro de ajuda do Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), em novembro de 2026). Filtre o registo pelas datas que acabou de abrir.
- **Sempre que chegar um cancelamento** para datas que estão no registo.
- **Uma vez por semana**, para fechar os pedidos cujas datas já passaram.

**Como responder:** dê ao hóspede um link de reserva direta para as datas exatas, diga claramente que nada fica retido e defina um prazo se estiver a oferecer o quarto a várias pessoas. Se trabalha no Gmail, uma etiqueta como "Pedidos de disponibilidade" mantém os e-mails originais juntos ([Ajuda do Gmail](https://support.google.com/mail/answer/118708)).

O ponto fraco continuam a ser as pessoas: alguém tem de comparar cada noite de cada linha com o inventário, e lembrar-se de o fazer.

## A forma mais rápida: a Availability Queue do Hotelier Tools

A **Availability Queue** (`/availability-watch`, beta) guarda a lista e faz a verificação. Acrescenta a estadia uma vez. Uma tarefa agendada lê o Little Hotelier para toda a fila e, quando os quartos estão reserváveis em todas as noites, o hóspede e/ou você recebem uma mensagem por e-mail ou WhatsApp. Nada fica reservado nem retido, e a mensagem deixa isso claro.

1. Abra **Availability queue** e preencha **Add a stay to watch** (acrescentar uma estadia a vigiar): as noites, **Rooms needed** (quartos necessários) e **Room types** (tipos de quarto). Para uma agência, marque **Different numbers per room type**.
2. Em **Tell the guest** (avisar o hóspede) e **Tell the property** (avisar a propriedade), escolha os canais e quando cada um é avisado.
3. Clique em **Add to the queue**.
4. Veja o cartão **Checks on the queue**. As contas com um login do Little Hotelier normalmente já têm esta tarefa, todas as noites à 01:00. Se disser **Not configured yet**, clique em **Check every night at 01:00**, ou em **Choose** para outro horário (no máximo de 20 em 20 minutos).

O passo a passo para datas esgotadas e cancelamentos está no guia que acompanha este, [como gerir uma lista de espera para datas esgotadas](/blog/hotel-waitlist-sold-out-dates). Este guia explica como a fila decide e as novas formas de os pedidos lá entrarem.

::screenshot{src="/images/blog/demo/en/availability-queue-requests.webp" alt="Página Availability queue: o botão Add to the queue, o cartão Public waiting-list page marcado como aberto com o seu endereço e In the queue com três entradas ativas: Tom Walker por e-mail e WhatsApp para 1 quarto de qualquer tipo, de 27 a 29 de novembro de 2026; Lena Fischer para 1 Doble Superior, de 18 a 21 de dezembro de 2026; e Viajes Ejemplo (agência) para 3 Doble Estándar e 1 Familiar 4 pax, de 26 a 29 de março de 2027, todas marcadas Not checked yet" caption="Uma lista para todos os pedidos: um hóspede individual, um pedido por WhatsApp e um grupo de agência com meses de antecedência." path="/availability-watch"}
::

### Como decide a fila que uma estadia está livre?

- **A noite com menos quartos livres decide.** Um tipo de quarto com quatro livres na sexta e nenhum no sábado não pode vender uma estadia de sexta a domingo. A fila fica com o número mais baixo de todas as noites, que é o que pode realmente vender.
- **Fechado significa não reservável.** Uma noite em stop sell (**Close Channels** no Little Hotelier), fechada a chegadas no dia de chegada ou ausente do inventário conta como zero, mesmo que o número de quartos diga outra coisa. "Sem dados" nunca significa "livre".
- **Por isso, as datas sem preço também funcionam.** Se mantém a próxima época fechada até as tarifas estarem carregadas, um hóspede que pede agosto fica à espera na fila. A primeira verificação depois de carregar as tarifas e abrir essas datas encontra os quartos livres, e o hóspede é avisado sem você ter de procurar nada.
- **Uma verificação para toda a fila.** Todos os pedidos à espera são verificados em cada execução, por isso dois hóspedes à espera da mesma noite sabem do mesmo cancelamento ao mesmo tempo. O Little Hotelier é lido uma vez por data de chegada, não uma vez por pedido.
- **Avisa uma só vez.** Quando um pedido é anunciado como disponível, fecha-se. A disponibilidade oscila, e um hóspede não deve receber uma mensagem a cada 30 minutos sobre o mesmo quarto.
- **Uma estadia que já começou é retirada** sem enviar nada.

### Quem recebe o quê: available, partial ou expiring

Cada verificação acaba numa de três situações, e o hóspede e a propriedade subscrevem-nas em separado:

| Situação | Texto no formulário | Quem é avisado por padrão |
|---|---|---|
| **Available** (disponível): todos os quartos pedidos estão reserváveis em todas as noites | **Everything asked for is free** | O hóspede e a propriedade. O pedido fecha-se. |
| **Partial** (parcial): ficou algo livre, mas menos quartos do que os pedidos | **Some rooms came free, but not all** | Só a propriedade. É um telefonema, não um e-mail automático. |
| **Expiring** (a expirar): a estadia começa dentro de 48 horas e nada foi encontrado | **About to expire with nothing found** | Só a propriedade. A sua última oportunidade de oferecer uma alternativa. |

Uma correspondência parcial que não muda é comunicada uma vez, não em cada execução, e o pedido continua à espera do conjunto completo de quartos. É o caso da agência: "2 dos 3 duplos estão livres" chega à receção, e a agência não recebe um e-mail com que nada pode fazer.

### E-mail ou WhatsApp, para o hóspede e para você

O hóspede pode ser avisado por e-mail, WhatsApp ou ambos, e a propriedade pelos seus próprios canais. As mensagens de WhatsApp saem do seu número conectado ([WhatsApp com o Little Hotelier](/blog/whatsapp-little-hotelier)); um número de telefone tem de incluir o indicativo do país, e o Hotelier Tools nunca o adivinha. Deixe **Property email** vazio para usar o endereço de notificações da sua conta. O e-mail do hóspede é escrito no idioma que escolher em **Guest's language** e, numa mensagem **available**, leva um link de reserva direta com as datas e o número de quartos já preenchidos. **History** (`/availability-watch/history`) guarda a mensagem exata que cada pedido enviou.

### Pedidos que chegam à caixa de entrada

Os assistentes de IA ([AI Chat](/blog/ai-assistant-hotel-front-desk), beta, e o assistente da caixa de entrada, alpha) sabem quando a sua propriedade usa a fila. Quando um hóspede pede datas e o motor de reservas não encontra nada para vender, o assistente oferece a lista de espera na mesma resposta, em vez de ficar por "sem disponibilidade". Primeiro verifica se essa pessoa já está à espera, pelo e-mail ou pelo telefone, e nunca a põe duas vezes na fila para as mesmas datas. O pedido aparece como um cartão que você confirma, com o hóspede, a estadia, os quartos e quem será avisado. Se só alguns quartos estiverem reserváveis, indica esses e oferece a fila para o resto. Mais em [respostas com IA às mensagens dos hóspedes](/blog/ai-replies-guest-messages).

## Deixe os hóspedes pedir no seu site: a página pública de lista de espera

A **Public waiting-list page** (`/availability-watch/public`) permite que os hóspedes se inscrevam sozinhos. Está desligada até ativar **Page open**, e **Ask guests to confirm their email (double opt-in)** está ativado por padrão: um pedido só entra na fila depois de o hóspede clicar num botão de um e-mail de confirmação.

**Reservável agora: reserve, não espere.** Quando um hóspede escolhe uma estadia, a página consulta o seu motor de reservas público (nunca o Little Hotelier) para essas datas e esse número de pessoas. Se houver quartos livres, mostra os preços com o seu código promocional direto aplicado e um botão **Book now**, e não põe essa estadia na lista de espera. Se só houver outros tipos de quarto ou menos quartos livres, mostra-os e deixa o hóspede entrar na fila para o resto. Se não for possível ler o motor, a página di-lo e o hóspede pode entrar na fila na mesma.

::screenshot{src="/images/blog/demo/en/availability-queue-bookable-now.webp" alt="Formulário público da lista de espera para 18 a 21 de dezembro de 2026, 1 quarto para 2 adultos: uma caixa verde a dizer Good news: you can book these dates now, com Dormitorio 6 camas mixto, Doble Estándar, Doble Superior e Familiar 4 pax com quartos restantes, preços riscados e totais com desconto por tarifa, a nota sobre o código de desconto direto DEMOSOL e um botão Book now" caption="Se as datas puderem ser reservadas, o hóspede vê o seu preço direto e reserva em vez de esperar." path="/waitlist"}
::

Pode desligar esta verificação em **When a room is free now** (quando há um quarto livre agora), tal como o link **Book on our website**. As restantes definições moldam o que os hóspedes veem:

- **Look of your booking page** (aspeto da sua página de reservas): cole o seu endereço direct-book.com e clique em **Import** para trazer as cores, o banner, as fotos da propriedade e as descrições dos quartos. Nada é mostrado até marcar o que quer usar.
- **What the page shows about your property** (o que a página mostra sobre a sua propriedade): nome, endereço, telefone, e-mail e site, cada um **From the property card** (da ficha da propriedade), **Own value for this page** (valor próprio para esta página) ou **Do not show** (não mostrar). Os endereços de login nunca são mostrados aos hóspedes.
- **Map links and more ways to reach you** (links de mapa e outras formas de contacto): links do Google Maps e do Apple Maps criados a partir do seu endereço, até três outros links de mapa, WhatsApp e até três endereços de e-mail extra (para grupos, por exemplo).
- **Arrival and departure warnings** (avisos de chegada e partida): a página avisa, mas nunca recusa, quando um hóspede escolhe um dia em que você normalmente fecha chegadas ou partidas.

::screenshot{src="/images/blog/demo/en/availability-queue-public-settings.webp" alt="Definições da página pública de lista de espera: o cartão When a room is free now com Check availability on the booking engine e Show a Book on our website link ambos ativados, e o Direct promo code DEMOSOL com o seu link de reserva; por baixo, o cartão Look of your booking page com um campo para o endereço direct-book.com e um botão Import, Nothing imported yet" caption="Primeiro consulte o motor de reservas, depois aproveite o aspeto da sua página de reservas." path="/availability-watch/public"}
::

### Partilhe um link pré-preenchido ou incorpore o formulário

**Share and embed** (`/availability-watch/embed`) cria duas coisas para copiar. Um **Link** que preenche o formulário, com os mesmos nomes de parâmetros da sua página de reservas (`checkInDate`, `checkOutDate`, `items[0][adults]`, `promocode`, `locale`), para que possa responder a um pedido com um link que já tem as datas do hóspede. E um **Frame for your website**: um `<iframe>` a toda a largura ou a 480, 640 ou 800 px, com pré-visualização. Só esta página pública pode ser incorporada noutros sites; o resto do painel não.

::screenshot{src="/images/blog/demo/en/availability-queue-embed.webp" alt="Página Share and embed: What the link fills in com Your nights, Rooms, Adults, Children, Room type (opcional), Language definido como The guest's own e Promo code DEMOSOL, e o cartão Link com o endereço da lista de espera, Copy link e Open" caption="Responda a um pedido com um link que já tem as datas do hóspede." path="/availability-watch/embed"}
::

## A fila alimenta os seus preços

As pessoas à espera de uma noite são procura / demanda. Na tarifa dinâmica do Hotelier Tools (alpha), cada grupo à espera sobe em 3% a recomendação de preço dessa noite, até 12% por noite, só para os tipos de quarto pedidos, contando o mesmo hóspede uma única vez. Altere ou desative isto nas regras de preços (`/pricing/settings/rules`): **Raise per guest on the waiting list** e **Never raise for the waiting list more than**. Veja [tarifa dinâmica para hotéis pequenos](/blog/dynamic-pricing-little-hotelier).

## Para programadores: MCP e REST

As ferramentas MCP (`availability_watch_list`, `_add`, `_update`, `_cancel`, `_check_now`, `_schedule`, `_set_schedule`, mais `list_room_types`) e a API REST (`/api/v1/availability-watch`) fazem o mesmo, com a mesma verificação de duplicados. Verificar a fila envia mensagens reais, por isso o AI Chat pede-lhe confirmação. Veja [o guia da API do Little Hotelier](/blog/little-hotelier-api) e [ligar o Claude ao Little Hotelier](/blog/connect-claude-to-little-hotelier).

## O que a fila não faz

- **Não segura nem reserva nada.** O quarto fica para quem reservar primeiro, em qualquer canal.
- **Não cria reservas** nem altera nada no Little Hotelier.
- **É tão rápida quanto o seu horário.** Na época alta, verifique a cada 20 a 30 minutos em vez de uma vez por noite.
- **Vê o que o Little Hotelier mostra.** Se a leitura do inventário devolver tarifas mas não o número de quartos, a página diz **Little Hotelier is not returning room counts** em vez de dar as datas como cheias.
- **As tarifas não fazem parte da verificação.** A fila lê o número de quartos e os fechos, por isso mantenha fechadas as datas sem preço se não quiser que sejam anunciadas.

::demo-cta{path="/availability-watch"}
::

Tudo o que a fila faz está na [página Waitlist](/tools/bot/waitlist). O painel é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools é independente: não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Lê a disponibilidade com o login do Little Hotelier do seu próprio hotel e nunca cria nem altera uma reserva a partir da fila.
::

Veja também: [CTA, CTD, estadia mínima e stop sell](/blog/little-hotelier-cta-ctd-stop-sell), [um endereço de e-mail do hotel para os hóspedes](/blog/hotel-email-address), [códigos promocionais no Little Hotelier](/blog/little-hotelier-promo-codes).

## Resumo

- Os pedidos perdem-se porque a pergunta chega muito antes da resposta: mensagens soterradas, datas sem preço, noites esgotadas, pedidos de grupo, correspondências parciais.
- À mão: registe as noites, os quartos por tipo, o contacto e o motivo por que não pôde vender, e consulte o registo sempre que carregar tarifas ou receber um cancelamento.
- A **Availability Queue** do Hotelier Tools verifica cada noite de cada pedido num único horário, conta as noites fechadas ou sem dados como cheias e avisa o hóspede uma vez, com um link de reserva.
- **Partial** e **expiring** vão por padrão para a propriedade; **available** vai para os dois.
- Os hóspedes podem inscrever-se numa página pública que primeiro oferece a reserva das datas se estiverem reserváveis agora. Nada fica retido.
