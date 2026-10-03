---
title: "Little Hotelier: como funciona e 20 truques e funções escondidas que a maioria não conhece (2026)"
seoTitle: "Little Hotelier: como funciona, truques e funções (2026)"
description: "20 truques do Little Hotelier: calendário mais rápido, passkeys, tarifa mínima, noites soltas, ligações de reserva, registo de auditoria e scripts gratuitos."
date: 2026-10-03
category: tips
tags: [tips, how to, calendar, userscripts, little hotelier]
keywords: [little hotelier como funciona, little hotelier tutorial, little hotelier como usar, little hotelier manual, little hotelier dicas, little hotelier funções escondidas, little hotelier calendário]
feature: dashboard
demoPath: /
cover: /images/scripts/full-width-reservation-table/to.png
coverAlt: "Página Reservations do Little Hotelier (interface em espanhol) esticada até à largura total do ecrã pelo script Full Width Reservation Table: filtros de pesquisa, o botão Buscar, 36 reservas encontradas e a ligação Exportar"
faq:
  - q: "Como evito que o Little Hotelier peça sempre um código MFA?"
    a: "O Little Hotelier volta a pedir de 30 em 30 dias, quando muda de navegador ou de dispositivo e antes de ações sensíveis. O caminho mais rápido é uma passkey (My account, Passkeys, Create passkey) ou aprovar com a aplicação móvel do Little Hotelier, que mostra um número correspondente em vez de um código."
  - q: "Como evito que a sessão do Little Hotelier expire?"
    a: "Nos artigos do centro de ajuda que consultámos, o Little Hotelier não tem nenhuma definição para isso. O userscript gratuito Auto Refresh On Inactivity recarrega a página após 10 minutos sem atividade, para voltar a um ecrã (tela) atualizado em vez de um desatualizado."
  - q: "Posso ver os preços dos quartos no calendário do Little Hotelier?"
    a: "Nativamente não: o calendário mostra reservas, e os preços estão na grelha de inventário. O userscript gratuito Prices Display lê-os da página de inventário e mostra-os sob cada tipo de quarto no calendário."
  - q: "O Little Hotelier tem atalhos de teclado?"
    a: "Não encontrámos atalhos de teclado nos centros de ajuda do Little Hotelier (outubro de 2026). Os botões de seta do calendário avançam 1, 7 ou 14 dias e View today volta ao dia atual. No painel do Hotelier Tools, Ctrl+K (Cmd+K num Mac) abre a pesquisa."
  - q: "Onde está o manual do utilizador do Little Hotelier?"
    a: "Não há um manual único. O Little Hotelier mantém dois centros de ajuda, um para a versão clássica e outro para a plataforma mais recente, além do Sim, um chatbot de IA que abre no ícone de chat depois de iniciar sessão."
---

O Little Hotelier esconde algumas das suas funções mais úteis a um ou dois cliques de distância: início de sessão com passkey, uma tarifa mínima da propriedade, ligações do motor de reservas que abrem um quarto específico, um botão flush para canais que não atualizam e um registo de auditoria de quem mudou o quê. Aqui ficam 20 truques: 14 já incluídos no Little Hotelier (cada um com ligação ao artigo de ajuda oficial), 4 scripts gratuitos para o navegador para o que ele não faz e 2 para quem usa o painel do Hotelier Tools.

::callout{type="info" title="Clássico ou plataforma?"}
As contas criadas desde maio de 2025 (ou atualizadas) usam a **plataforma** mais recente do Little Hotelier; as contas mais antigas usam a versão **clássica**, que tem [o seu próprio centro de ajuda](https://helpcentre.littlehotelier.com/en/). Os nomes dos menus diferem, por isso cada truque indica o caminho da versão que o artigo de ajuda descreve.
::

## Truques de calendário e de receção

### 1. Leia o calendário num relance

Escolha uma vista de **14 ou 28 dias** no menu pendente. Na vista de 14 dias, `<`, `<<` e `<<<` avançam 1, 7 e 14 dias; **View today** volta ao dia atual. As cores indicam o estado: laranja confirmada, verde com check-in feito, cinzento com check-out feito, azul sem quarto atribuído, vermelho bloqueio de quarto. Um **triângulo vermelho** no canto significa que ainda há dinheiro por receber ([guia do calendário](https://help-platform.littlehotelier.com/en/articles/10397723-getting-started-with-calendar)).

### 2. Use a linha Unallocated para encaixar mais uma reserva

Quando um tipo de quarto parece cheio mas as noites não encaixam, mova uma reserva para **Unallocated**, reorganize as outras e depois arraste-a de volta para um quarto. As reservas sem quarto atribuído continuam a contar para a disponibilidade, por isso deixar uma lá não volta a pôr o quarto à venda ([guia clássico](https://helpcentre.littlehotelier.com/en/articles/8673713-overview-of-the-front-desk-calendar)).

### 3. Imprima o formulário de registo como ficha de check-in

Clique na lupa de uma reserva e depois em **Print → Registration form**. O Little Hotelier sugere usá-lo como formulário de check-in já pronto.

### 4. Dê à limpeza o seu próprio relatório

Abra **Reservations → Housekeeping**. Marque cada quarto como **Cleaned**, **Uncleaned** ou **Skip cleaning**, acrescente notas, alterne entre **Today**, **Tomorrow** ou datas à escolha e carregue em **Print report**. Dê às camareiras o seu próprio utilizador com acesso Front desk para o verem em direto. Não está na aplicação móvel ([guia de housekeeping](https://help-platform.littlehotelier.com/en/articles/12105307-how-to-manage-housekeeping-in-little-hotelier)).

### 5. Veja de onde veio uma reserva pela sua referência

As letras do início da referência da reserva indicam a origem: **LH** a sua receção ou motor de reservas, **BDC** Booking.com, **EXP** Expedia, **ABB** Airbnb, **AGO** Agoda, **HWL** Hostelworld ([guia de reservas](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data)). Útil quando filtra uma exportação no Excel.

## Tarifas, restrições e canais

### 6. Defina uma tarifa mínima para que nada se venda demasiado barato

Uma tarifa mínima da propriedade impede que qualquer tarifa de quarto, ou qualquer desconto gerido no Little Hotelier, desça abaixo dela. Na plataforma: **Setup → Property settings → General information**, o lápis junto a **Inventory** e depois **Minimum rate** ([guia](https://help-platform.littlehotelier.com/en/articles/13681648-set-a-minimum-rate-for-your-property)). No clássico: **Channel Manager**, clique no nome da propriedade e depois **Property settings → General** ([guia](https://helpcentre.littlehotelier.com/en/articles/8673933-set-a-minimum-rate-for-all-your-rooms)). As promoções que criar diretamente no Booking.com ou noutros canais ainda podem ficar abaixo.

### 7. Salve as noites soltas deixadas pelas estadias mínimas

Uma estadia mínima de três noites deixa buracos de duas noites que ninguém pode reservar. A solução do Little Hotelier: um segundo plano tarifário, derivado do padrão por um pouco mais (o exemplo deles é +5%), com uma estadia mínima mais curta, mapeado para os seus canais ([guia de noites soltas](https://help-platform.littlehotelier.com/en/articles/16780102-manage-gap-nights)). Para saber o que fazem CTA, CTD e stop sell, veja [CTA, CTD, estadia mínima e stop sell explicados](/blog/little-hotelier-cta-ctd-stop-sell).

### 8. Envie um "flush" quando um canal não atualiza

No clássico, **Setup → Property & Room Settings → Rooms & Rates**, selecione o tipo de quarto ou a tarifa e carregue em **Flush** em baixo. Volta a enviar preços, restrições e disponibilidade a todos os canais. Espere cinco minutos depois de uma pequena alteração antes de fazer flush e corrija primeiro os erros de mapeamento ([guia do flush](https://helpcentre.littlehotelier.com/en/articles/8947419-send-inventory-updates-to-channel-manager-send-a-flush)).

### 9. Descubra quem alterou uma tarifa ou um mapeamento de canal

Abra uma tarifa de quarto ou um canal e escolha **Audit**. A auditoria de ciclo de vida (Lifecycle audit) mostra quando uma definição mudou e o e-mail do utilizador que a mudou. Não regista preços, valores de restrições nem alterações a reservas ([guia de auditoria](https://help-platform.littlehotelier.com/en/articles/10660168-track-configuration-changes-with-the-lifecycle-audit-tool)). Para um stop sell misterioso, verifique primeiro o **Release period** da tarifa; se estiver vazio, foi uma regra de yield que o fechou ([guia](https://help-platform.littlehotelier.com/en/articles/14177576-how-to-check-if-a-stop-sell-is-triggered-by-a-yield-rule)).

## Motor de reservas e Booking.com

### 10. Ligue diretamente a um quarto, tarifa ou código promocional

Acrescente um parâmetro ao endereço do seu motor de reservas:

- `?room_type=ID` abre um tipo de quarto (o ID está no URL do tipo de quarto na configuração do Direct Booking)
- `?promocode=CODE` aplica um código promocional
- `?ratePlanId=ID` mostra um plano tarifário (o Little Hotelier explica como encontrar o ID com as ferramentas de programador do navegador)

O endereço começa por `direct-book.com/properties/` na Europa, África, Médio Oriente e Américas, ou por `book-directonline.com/properties/` na Ásia-Pacífico ([ligações de quarto e promoção](https://helpcentre.littlehotelier.com/en/articles/9451551-create-unique-links-for-your-booking-engine), [ligações de plano tarifário](https://help-platform.littlehotelier.com/en/articles/11935086-create-a-url-that-links-directly-to-a-rate-plan)).

### 11. Comunique um cartão inválido ou um no-show do Booking.com sem a extranet

Abra a reserva do Booking.com no channel manager e vá ao separador **Manage Reservation**. Aí pode comunicar o cartão como inválido, pedir ao Booking.com que cancele por cartão inválido, ou marcar um no-show e escolher se dispensa a taxa ([guia](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)). Os prazos estão em [cartão inválido ou no-show no Booking.com: o que fazer](/blog/booking-com-invalid-card-no-show).

### 12. Garanta que os hóspedes do Booking.com recebem os seus e-mails

O Booking.com bloqueia e-mails de sistemas que não conhece. Se envia confirmações ou pedidos de pagamento a partir do Little Hotelier, permita `@app.littlehotelier.com` e `@guestjoy.com` (e as ligações `siteminder.com` e `guestjoy.com`) na extranet, em **Property → Messaging preferences → Security settings** ([passos](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).

## Início de sessão, apoio e exportações

### 13. Inicie sessão com uma passkey em vez de códigos

O MFA é obrigatório, e o Little Hotelier volta a pedir de 30 em 30 dias ou num novo navegador. Duas formas de o tornar indolor ([guia de MFA](https://help-platform.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)):

- **Aprove com a aplicação do Little Hotelier.** Toca no número correspondente e confirma com o rosto ou a impressão digital. Não são suportados códigos por SMS nem por e-mail.
- **Use uma passkey.** Ícone do perfil → **My account** → **Passkeys** → **Create passkey** e depois inicie sessão com **Continue with a passkey**. Funciona nos navegadores web (Chrome e Edge 109+, Safari 16+), não na aplicação móvel, e exige ter o MFA configurado primeiro ([guia de passkeys](https://help-platform.littlehotelier.com/en/articles/12039017-how-to-set-up-and-log-in-with-passkeys)).

Cada pessoa deve ter o seu próprio utilizador: os códigos MFA pertencem a uma pessoa e a um dispositivo.

### 14. Pergunte ao Sim antes de pesquisar e exporte antes do dia 180

Depois de iniciar sessão, abra o ícone de chat em baixo à direita e escolha **Ask a question**. O Sim, o chatbot de IA do Little Hotelier, responde a partir do centro de ajuda 24 horas por dia em oito idiomas e pode passá-lo a uma pessoa. Faça uma pergunta concreta de cada vez, com o nome do canal e o erro exato ([dicas](https://help-platform.littlehotelier.com/en/articles/9452186-tips-on-using-our-help-centre-and-ai-chatbot-for-support)).

E um hábito que vale a pena criar: exporte as suas reservas todos os meses. Os dados dos hóspedes ficam mascarados 180 dias após o check-out, e as exportações nunca incluem números de telefone. Passo a passo: [exportar reservas para o Excel ou o Google Sheets](/blog/export-little-hotelier-reservations-excel).

## Ajustes com userscripts gratuitos

Estes [userscripts](/tools/ui) gratuitos correm no seu navegador com a extensão Tampermonkey e só mudam o que vê. Continuam gratuitos para sempre. O [guia de instalação](/tools/ui/instructions) demora cerca de cinco minutos por script.

### 15. Veja os seus preços no calendário

O [Prices Display](/tools/ui/prices-display) lê as suas tarifas da página de inventário e mostra-as sob cada tipo de quarto no calendário, para dar um preço ao telefone sem mudar de ecrã (tela).

::screenshot{src="/images/scripts/prices-display/to.png" alt="Calendário do Little Hotelier em espanhol com vista de 7 dias, reservas a verde, laranja e cinzento, e o preço por noite de cada tipo de quarto em algarismos grandes sob os seus quartos" caption="Com o Prices Display, a tarifa por noite de cada tipo de quarto fica mesmo por baixo dos seus quartos."}
::

### 16. Deixe de voltar a uma página desatualizada

Se deixa o Little Hotelier aberto na receção e volta a encontrar erros, o [Auto Refresh On Inactivity](/tools/ui/auto-refresh-inactivity) recarrega a página após 10 minutos sem cliques, deslocação nem movimento do rato. Nunca recarrega enquanto está a trabalhar.

### 17. Veja a comissão do Booking.com dentro da reserva

O [Show Booking.com Commissions](/tools/ui/show-booking-commissions) acrescenta a cada reserva do Booking.com uma estimativa da comissão e o seu valor líquido aproximado. Como funciona a comissão real está em [quanto cobra de comissão o Booking.com](/blog/booking-com-commission).

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Resumo de uma reserva do Little Hotelier em espanhol com linhas extra para taxa de transferência, comissão do Booking.com, comissão total com IVA e valor líquido aproximado" caption="Uma estimativa do que o Booking.com fica e do que lhe sobra, dentro da reserva."}
::

### 18. Faça caber mais no ecrã (e num tablet)

- O [Compact Calendar UI](/tools/ui/compact-calendar-ui) põe os cabeçalhos de data numa só linha e encurta os nomes dos tipos de quarto.
- O [Full Width Reservation Table](/tools/ui/full-width-reservation-table) alarga a lista de reservas para deixar de deslocar para o lado.
- O [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens) aumenta os botões e mostra sempre o botão "remover quarto" que de outro modo só aparece ao passar o rato.

Todos os scripts, com imagens de antes e depois, estão na [página de extensões do navegador](/chrome-extensions) e em [extensões Chrome gratuitas para o Little Hotelier](/blog/little-hotelier-chrome-extensions).

## Dois truques se usa o painel do Hotelier Tools

O Hotelier Tools é um painel independente que funciona ao lado do Little Hotelier, com o login do Little Hotelier da sua propriedade. Não tem afiliação nem aval da SiteMinder ou do Little Hotelier e é gratuito para todos os hotéis até começar a faturação, a 10 de janeiro de 2027.

### 19. Carregue em Ctrl+K para encontrar tudo

**Ctrl+K** (**Cmd+K** num Mac) pesquisa páginas, entradas da lista de espera, tarefas agendadas e conversas. Ignora acentos e entende palavras em inglês e em espanhol para a mesma coisa: "lista de espera" encontra a Availability Queue.

::screenshot{src="/images/blog/demo/en/global-search-waitlist.webp" alt="Paleta de comandos aberta com Ctrl+K sobre o painel do Hotelier Tools, com a consulta waitlist e páginas correspondentes como Public waitlist form, Availability Queue, History, Do-not-rebook list e Scheduled invoices, cada uma com a sua secção" caption="Escreva uma palavra e salte direto para a página de que precisa." path="/"}
::

### 20. Deixe uma verificação noturna encontrar documentos em falta antes de os hóspedes chegarem

As **Automated checks** leem as próximas reservas e assinalam o que de outro modo descobriria na receção: sem quarto atribuído, documento de identificação ou morada em falta, saldo por pagar ou um hóspede na sua lista de não aceitar de novo. Os problemas aparecem numa só página Issues, e cada execução envia um e-mail com o relatório. Veja [a lista de verificação diária da receção](/blog/hotel-front-desk-checklist-automation).

::demo-cta{path="/automated-checks/issues"}
::

## Resumo

- **Maiores poupanças de tempo:** passkeys, o relatório de housekeeping e as ligações diretas do motor de reservas.
- **Maiores poupanças de dinheiro:** uma tarifa mínima da propriedade e um plano tarifário para noites soltas.
- **Quando os canais se portam mal:** flush e depois o registo de auditoria e o release period.
- **Para o que o Little Hotelier não faz:** userscripts gratuitos para preços no calendário e comissões do Booking.com, e [integrações](/blog/little-hotelier-integrations) para o resto.
