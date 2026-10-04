---
title: "Integrações do Little Hotelier em 2026: contabilidade, check-in, preços, mensagens e IA"
seoTitle: "As melhores integrações do Little Hotelier em 2026"
description: "O que se conecta ao Little Hotelier em 2026: exportação para Xero e QuickBooks, check-in com Chekin e Duve, preços, mensagens, IA e extras gratuitos."
date: 2026-10-03
category: api
tags: [integrations, app store, xero, chekin, little hotelier]
keywords: [integrações little hotelier, little hotelier integrações, little hotelier xero, little hotelier app store, little hotelier chekin, little hotelier zapier, widget de reservas little hotelier]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "Portal de programadores no Hotelier Tools com cartões para REST API & Swagger, MCP setup, API keys e LH methods, e uma caixa Authentication com um exemplo de cURL com uma chave de API de exemplo"
faq:
  - q: "O Little Hotelier integra-se com o Xero ou o QuickBooks?"
    a: "Através de um ficheiro / arquivo, não de uma sincronização em tempo real. Você mapeia as suas contas e códigos de imposto no Little Hotelier e depois exporta as faturas / notas fiscais finalizadas como um CSV feito para importação no Xero e no QuickBooks. Em outubro de 2026, a App Store não lista nenhuma app de contabilidade."
  - q: "O Little Hotelier funciona com o Zapier?"
    a: "Não foi encontrada nenhuma app do Little Hotelier no Zapier na verificação de 3 de outubro de 2026: a página de integrações do Little Hotelier no Zapier dava erro de página não encontrada. Para conectar o Little Hotelier a outras ferramentas, use uma app da App Store ou um script que leia os seus dados através de uma API."
  - q: "Quanto custam as apps da App Store do Little Hotelier?"
    a: "O Little Hotelier não cobra pela conexão. Cada app define o seu preço, e a página da App Store do Little Hotelier diz que a maioria custa menos de 50 dólares americanos por mês. Muitas oferecem um teste gratuito."
  - q: "Como acrescento o widget de reservas do Little Hotelier ao WordPress?"
    a: "No Direct Booking, abra o assistente de widgets, escolha um botão Book now, um widget de seleção de datas ou um widget personalizado e copie o código que ele mostra. Cole-o num bloco HTML personalizado da sua página WordPress. O Little Hotelier pede que copie o código, e não que o digite de novo."
  - q: "Uma app de revenue management pode alterar as minhas estadias mínimas?"
    a: "Normalmente não. O centro de ajuda do Little Hotelier diz que uma app de RMS conectada controla as atualizações de tarifas, enquanto a estadia mínima e o stop sell continuam a ser geridos no Little Hotelier."
  - q: "O Hotelier Tools está na App Store do Little Hotelier?"
    a: "Não. O Hotelier Tools é independente: não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com o login do Little Hotelier do seu próprio hotel, por isso você mesmo o configura, sem passar pela App Store."
---

O Little Hotelier conecta-se a software externo em três lugares: a **App Store do Little Hotelier** (cerca de 30 apps de parceiros para check-in, mensagens, upselling, avaliações, entrada sem chave e preços, em outubro de 2026), os **plug-ins do motor de reservas** e os seus próprios **extras (add-ons)**, como o Guest Engagement e o Dynamic Revenue Plus. A contabilidade é uma exportação CSV feita para o Xero e o QuickBooks, não uma sincronização em tempo real. Para o que faltar, pode acrescentar uma camada que lê os seus dados através de uma API, ou um script gratuito para o navegador.

## Onde estão as integrações do Little Hotelier

| Tipo | Onde encontra | Como se conecta |
|---|---|---|
| Apps da App Store | [littlehotelier.com/app-store](https://www.littlehotelier.com/app-store/) | Você contacta o fornecedor da app; ele configura |
| Plug-ins do motor de reservas | **Direct booking → Configuration → Plug-in apps** | Você cola as credenciais da app e clica em **Enable** |
| Add-ons do Little Hotelier | O seu plano ([página de preços](https://www.littlehotelier.com/pricing/)) | Ativados pelo Little Hotelier |
| Canais (OTA) | **Distribution → Channels** | Mapeados no channel manager |

Algumas regras do [artigo de ajuda da App Store](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store):

- As apps "not set up inside your platform" (não se configuram dentro da sua plataforma). Você usa o formulário de contacto na página da app e o fornecedor faz a conexão.
- O Little Hotelier não cobra pela conexão; cada app tem o seu preço. A [página da App Store](https://www.littlehotelier.com/app-store/) diz que a maioria custa menos de 50 USD por mês.
- A configuração demora minutos, ou até 48 horas em algumas apps. O suporte de cada app é dado pelo fornecedor dela.

Os plug-ins só afetam o seu motor de reservas. Em outubro de 2026, a [lista](https://help-platform.littlehotelier.com/en/articles/10440176-plug-in-apps-in-for-your-booking-engine) inclui Google Analytics 4 e Meta Pixel, comparação de preços (123compare.me, TripTease), chatbots (HiJiffy, Book Me Bob), Tripadvisor Review Express, fidelização (The Guestbook, Laasie) e ferramentas de anúncios (Google Ads, Sojern, The Hotels Network, Flip.to e outras).

## Contabilidade: Xero, QuickBooks e os outros

Na lista da App Store consultada em outubro de 2026 não há nenhuma sincronização contabilística em tempo real. O que o Little Hotelier oferece é uma **exportação contabilística**:

1. Configure primeiro o seu plano de contas e códigos de imposto no Xero, no QuickBooks ou no seu próprio software.
2. No Little Hotelier, abra **Setup → Accounting exports** (clássico: **Front Desk → Setup → Accounting Integration**) e insira a conta e os códigos de imposto padrão para receita de quartos, extras, impostos, sobretaxas de cartão e taxas de serviço.
3. Em cada período, abra **Reports → Operational → Accounting**, escolha as datas e clique em **Export**.

Só as faturas marcadas como **final** são exportadas, num CSV (ou num ZIP de CSV para períodos grandes) "designed for Xero and QuickBooks" import (feito para importação no Xero e no QuickBooks) ([guia de configuração](https://help-platform.littlehotelier.com/en/articles/10397752-accounting-exports-setup-guide), [guia de exportação](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final)). Em Espanha, a faturação eletrónica VeriFactu consta entre as funcionalidades do plano na [página de preços](https://www.littlehotelier.com/pricing/).

É aqui que os avaliadores mais criticam. No [Capterra](https://www.capterra.com/p/144307/Little-Hotelier/reviews/), os utilizadores / usuários escrevem que "the reports and syncing to accounting software can be improved" (os relatórios e a sincronização com software de contabilidade podem melhorar). Se o que o seu contabilista / contador realmente quer é cada PDF de fatura do trimestre, veja [descarregar / baixar todas as faturas do Little Hotelier de uma vez](/blog/download-all-little-hotelier-invoices).

## Check-in online e registo / registro de hóspedes

A App Store tem várias apps de check-in, com as faixas de preço que a sua página mostra (outubro de 2026):

- **Chekin** (0–50 USD/mês): verificação de documentos com comparação biométrica, formulários de registo digitais, comunicações à polícia e para estatística e taxa turística em 18 países e regiões, incluindo Espanha, Itália, Portugal, França, Alemanha e Tailândia ([artigo de ajuda](https://help-platform.littlehotelier.com/en/articles/10390472-connect-to-chekin)).
- **Duve** (0–50 USD): check-in online, uma app para hóspedes e pedidos de avaliação.
- **Vikey** (0–50 USD): self check-in e fechaduras inteligentes.
- **Abitari Kiosk**, **OpenKey** e **Akia**: quiosque, chaves móveis e check-in sem contacto.

O Little Hotelier também tem uma opção nativa. Com o extra **Guest Engagement**, um formulário de check-in de conformidade pode enviar os dados dos hóspedes às autoridades em Itália, Espanha, Portugal, Alemanha, Suíça, Áustria, Croácia, República Checa e Colômbia ([fonte](https://help-platform.littlehotelier.com/en/articles/10066500-automated-compliance-reporting)). As propriedades espanholas podem ver como isto se encaixa no SES Hospedajes em [SES Hospedajes com o Little Hotelier](/blog/ses-hospedajes-little-hotelier), e as regras de cada país estão em [regras de registo de hóspedes por país](/blog/guest-registration-rules-by-country).

Se usa o Chekin, o userscript gratuito **Chekin Connection** põe o estado do check-in do Chekin dentro da reserva do Little Hotelier: hóspedes encontrados, números de telefone e de documento, com um botão para copiar o documento para a reserva, para a fatura.

::screenshot{src="/images/scripts/show-chekin/to.png" alt="Reserva do Little Hotelier em espanhol com um painel do Chekin: estado found 1 guest, uma tabela com nome, telefone e documento de identificação, e botões Use document e View in Chekin" caption="O script gratuito Chekin Connection mostra os dados do check-in sem sair da reserva."}
::

Instale-o a partir de [Chekin Connection](/tools/ui/show-chekin); o [guia de instalação](/tools/ui/instructions) leva poucos minutos.

## Preços e revenue management

As apps de revenue management da App Store incluem **RoomPriceGenie**, **Smartpricing**, **Happyhotel** e **Pricepoint**. O centro de ajuda nomeia também **Aiosell** e **Right Revenue** ([fonte](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store)).

Um limite a conhecer antes de assinar: o centro de ajuda clássico diz que um RMS conectado "can control rate updates, not restrictions" (pode controlar as atualizações de tarifas, não as restrições). As estadias mínimas e os stop sells continuam no Little Hotelier ([fonte](https://helpcentre.littlehotelier.com/en/articles/15165178-little-hotelier-app-store)).

A opção do próprio Little Hotelier é o **Dynamic Revenue Plus**, um extra do plano Pro com recomendações de preço baseadas em dados. O próprio plano Pro inclui relatórios de preços da concorrência e de paridade de tarifas.

O Hotelier Tools acrescenta preços da concorrência do Booking.com e do Google (beta) e recomendações de preço com um "Why?" passo a passo (alpha). Nada muda no Little Hotelier até você confirmar. Veja [preços dinâmicos para hotéis pequenos no Little Hotelier](/blog/dynamic-pricing-little-hotelier).

## Mensagens com hóspedes e WhatsApp

Nativamente, o **Messaging hub** do Guest Engagement junta WhatsApp, Airbnb, SMS (via Twilio), Booking.com e histórico de e-mail numa única caixa de entrada. O WhatsApp funciona com a WhatsApp Business API: as respostas dentro da janela de 24 horas são gratuitas e as mensagens-modelo são cobradas pelo WhatsApp ([fonte](https://help-platform.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

As alternativas na App Store incluem **GuestTouch**, **Akia**, **Guest Talk**, **Bookboost**, **HelloShift**, **Hinstant** e **Zingle**.

::callout{type="tip" title="Os hóspedes do Booking.com não recebem os seus e-mails?"}
O Booking.com bloqueia e-mails e links de sistemas que não conhece. O Little Hotelier pede que acrescente `@app.littlehotelier.com` e `@guestjoy.com` como endereços de e-mail e `siteminder.com` e `guestjoy.com` como links na extranet, em **Property → Messaging preferences → Security settings** ([passos](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).
::

O Hotelier Tools também tem uma caixa de entrada de hóspedes (alpha): WhatsApp, Gmail, Outlook ou qualquer caixa IMAP e mensagens do Booking.com numa só lista, com respostas redigidas por IA que uma pessoa aprova. A sua conexão ao WhatsApp usa uma sessão do WhatsApp Web (WAHA), não a Business API oficial. Compare as opções em [WhatsApp com o Little Hotelier](/blog/whatsapp-little-hotelier).

## Integrações de IA e de API

"Integração de IA" significa duas coisas diferentes para uma propriedade com Little Hotelier.

**IA que vende os seus quartos.** O Demand Plus inclui **AI bookings**: a sua propriedade pode aparecer no ChatGPT e no Claude através do parceiro DirectBooker, com tarifas em tempo real, e os hóspedes concluem a reserva no seu motor de reservas. Está em beta com 0% de comissão até 30 de novembro de 2026; a partir de 1 de dezembro de 2026 aplicam-se 6% mais impostos às reservas de IA concluídas, e não é possível optar por sair ([fonte](https://help-platform.littlehotelier.com/en/articles/16654506-ai-bookings-in-demand-plus)). Chatbots como o HiJiffy e o Book Me Bob conectam-se ao motor de reservas.

**IA que trabalha com os seus próprios dados.** Aqui não há opção oficial. O Little Hotelier não dá às propriedades nenhuma chave de API para reservas ou hóspedes (a resposta completa está em [o Little Hotelier tem API?](/blog/little-hotelier-api)).

O Hotelier Tools preenche essa lacuna com uma API REST e um servidor MCP (ambos beta). É um produto independente que se conecta com o seu próprio login do Little Hotelier, guardado encriptado. Com ele pode:

- perguntar ao Claude ou ao ChatGPT sobre chegadas, saldos ou faturas que faltam ([o que é um servidor MCP](/blog/what-is-mcp-server-hotels), [conectar o ChatGPT](/blog/connect-chatgpt-to-little-hotelier))
- preencher uma folha de cálculo / planilha do Google todos os meses ([exportar reservas para o Excel](/blog/export-little-hotelier-reservations-excel))
- conectar ferramentas que não têm app na App Store, com um pequeno script

::demo-cta{path="/developer/rest-api"}
::

## Userscripts gratuitos que resolvem pequenas lacunas

Algumas lacunas não precisam de uma integração, só de uma interface melhor. Os [userscripts](/tools/ui) gratuitos funcionam no seu navegador através do Tampermonkey, só mudam a forma como você vê o Little Hotelier e continuam gratuitos para sempre. Úteis em conjunto com as integrações acima:

- [Show Booking.com Commissions](/tools/ui/show-booking-commissions): uma estimativa da comissão do Booking.com e do seu valor líquido, dentro da reserva.
- [Prices Display](/tools/ui/prices-display): as suas tarifas na vista de calendário.
- [Easy Save Province and Country](/tools/ui/easy-save-province-country): uma lista de escolha de províncias espanholas que também preenche o país.
- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button): imprima a fatura sem abrir menus.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Resumo de uma reserva do Little Hotelier em espanhol com linhas extra para taxa de transferência, comissão do Booking.com, comissão total com IVA e valor líquido aproximado" caption="O Show Booking.com Commissions acrescenta uma comissão e um líquido estimados a cada reserva do Booking.com."}
::

O conjunto completo está na [página de extensões do navegador](/chrome-extensions), e [extensões Chrome gratuitas para o Little Hotelier](/blog/little-hotelier-chrome-extensions) explica cada uma.

## Próximos passos

- Precisa de check-in, upselling ou avaliações? Comece na App Store e peça um teste gratuito.
- Precisa de contabilidade? Mapeie os seus códigos uma vez em **Setup → Accounting exports** e exporte as faturas finalizadas todos os meses.
- Precisa dos seus dados numa folha de cálculo, num script ou num assistente de IA? Use uma camada de API como a [API & MCP do Hotelier Tools](/tools/bot/api-mcp), gratuita para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.
