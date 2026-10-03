---
title: "Extensão Chrome para o Little Hotelier: scripts gratuitos que o tornam mais rápido"
seoTitle: "Extensão Chrome para o Little Hotelier: scripts grátis"
description: "Userscripts gratuitos para o Little Hotelier: preços no calendário, tabelas mais largas, comissão do Booking.com e fatura com um clique. Instalação segura."
date: 2026-10-03
category: tips
tags: [chrome extension, tampermonkey, userscripts, little hotelier, productivity]
keywords: [extensão chrome little hotelier, little hotelier chrome extension, tampermonkey scripts, userscript chrome, preços no calendário little hotelier, comissão booking.com little hotelier]
demoPath: /
cover: /images/scripts/prices-display/to.png
coverAlt: "Calendário do Little Hotelier (interface em espanhol) com o preço de cada noite sob cada tipo de quarto, acrescentado pelo script Prices Display"
faq:
  - q: "Estes scripts são feitos pelo Little Hotelier?"
    a: "Não. São scripts gratuitos e independentes publicados pelo Hotelier Tools, que não tem afiliação nem aval da SiteMinder ou do Little Hotelier. Executam-se no seu próprio navegador, dentro da sua própria sessão do Little Hotelier."
  - q: "Tampermonkey ou uma extensão Chrome: de qual preciso?"
    a: "De ambos, de certa forma: o Tampermonkey é a extensão Chrome e os scripts correm dentro dele. Instala o Tampermonkey uma vez e depois acrescenta só os scripts que quiser."
  - q: "Os scripts funcionam num tablet?"
    a: "O Tampermonkey funciona em vários navegadores e o seu menu oferece uma versão para telemóveis (celulares) e tablets. Para ecrãs (telas) táteis, instale o Improve Style For Touch Screens, que aumenta os botões e os menus. Teste primeiro no seu próprio dispositivo."
  - q: "Um script pode deixar de funcionar quando o Little Hotelier se atualiza?"
    a: "Pode. Os scripts alteram as páginas do Little Hotelier, por isso uma renovação do design pode deixar um sem funcionar até ser atualizado. Desative-o no menu do Tampermonkey e comunique o problema no GitHub."
  - q: "Como desinstalo um script?"
    a: "Clique no ícone do Tampermonkey e desative o script, ou abra o Dashboard e apague-o. Recarregue o Little Hotelier e a página volta ao normal."
  - q: "Os scripts custam alguma coisa?"
    a: "Não. Os scripts do navegador são gratuitos para sempre e não precisam de conta."
---

Pode tornar o Little Hotelier mais rápido com userscripts gratuitos: pequenos complementos que correm no seu navegador através da extensão Tampermonkey. Acrescentam preços ao calendário, alargam tabelas apertadas, estimam a comissão do Booking.com em cada reserva, põem um botão de fatura / nota fiscal com um clique nas reservas, e mais. Instale o Tampermonkey uma vez, ative **Allow User Scripts** no Chrome e depois carregue em **Install on Tampermonkey** na página de qualquer script.

## O que é o Tampermonkey e porquê scripts em vez de uma extensão?

O Tampermonkey é uma extensão do navegador que executa **userscripts**: pequenos ficheiros JavaScript que ajustam uma página web depois de carregada. Em vez de uma extensão separada para cada ajuste, instala o Tampermonkey uma vez e acrescenta só os scripts de que precisa. Funciona no Chrome, Edge, Firefox, Safari e Opera.

Cada script do Hotelier Tools é um único ficheiro legível num [repositório público no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier). São 16: 15 prontos a instalar e um feito por encomenda. Todos são gratuitos para sempre.

## Os userscripts são seguros? O que podem e não podem tocar

É uma pergunta justa, já que um script corre dentro da página onde estão as suas reservas. Isto é o que estes scripts fazem e não fazem:

- **Só correm no Little Hotelier.** Cada script declara os sites onde pode correr: os endereços do próprio Little Hotelier (incluindo o Direct Booking) e, no caso do script do Chekin, os do Chekin.
- **Os seus dados ficam onde estão.** Os scripts falam com o Little Hotelier (e com o Chekin, nesse único script). Nada é enviado ao Hotelier Tools.
- **Agem como você.** Um script usa a sua sessão aberta, por isso só pode fazer o que você faria com os seus próprios cliques. Alguns ajustam um formulário antes de carregar em Save, como definir o país ou o número de adultos.
- **Pode lê-los.** O código é público e o Tampermonkey mostra-o antes de instalar.
- **Atualizam-se sozinhos.** Cada script leva o seu endereço do GitHub, para o Tampermonkey poder obter novas versões.

A regra geral para qualquer userscript: instale apenas de fontes em que confia. E se o Little Hotelier mudar uma página, um script pode deixar de funcionar até ser atualizado. Desative-o no menu do Tampermonkey e comunique o problema no GitHub.

::callout{type="info" title="Independente e gratuito"}
Estes scripts são publicados pelo Hotelier Tools, que não tem afiliação nem aval da SiteMinder ou do Little Hotelier. Funcionam dentro do login do Little Hotelier do seu próprio hotel e não precisam de conta.
::

## Como instalar um script (cerca de cinco minutos na primeira vez)

1. **Instale o Tampermonkey** a partir de [tampermonkey.net](https://www.tampermonkey.net/). Escolha a versão normal para o seu navegador, não a beta.
2. **Deixe-o executar scripts.** No Chrome 138 ou posterior, clique com o botão direito no ícone do Tampermonkey, escolha **Manage extension** e ative **Allow User Scripts**. Em versões mais antigas do Chrome ou no Edge, abra `chrome://extensions` (ou `edge://extensions`) e ative **Developer mode** ([FAQ do Tampermonkey](https://www.tampermonkey.net/faq.php?q=Q209)).
3. **Abra a página de um script** neste site, por exemplo [Prices Display](/tools/ui/prices-display), e carregue em **Install on Tampermonkey**. O Tampermonkey abre um separador com o código: carregue em **Install**.
4. **Recarregue o Little Hotelier** (F5). A alteração aparece logo.

Se o botão não funcionar, copie o código do GitHub, escolha **Create a new script…** no menu do Tampermonkey, cole-o e guarde com Ctrl+S. O [guia de instalação](/tools/ui/instructions) mostra cada passo com imagens, e [todos os scripts estão listados aqui](/chrome-extensions).

::screenshot{src="/images/ui/tamperMonkeyMenu.png" alt="Menu do Tampermonkey no Chrome com Enabled, Create a new script e Dashboard" caption="O menu do Tampermonkey: ative ou desative scripts, crie um à mão ou abra o Dashboard para remover um." width="624" height="645"}
::

Para remover um script, clique no ícone do Tampermonkey e desative-o, ou abra o **Dashboard** e apague-o.

## Os scripts, agrupados por tarefa

Cada script tem a sua própria página com imagens de antes e depois e o botão de instalação.

### Ver mais num único ecrã (tela)

- [Full Width Reservation Table](/tools/ui/full-width-reservation-table): a lista Reservations usa a largura toda do ecrã. Chega de deslocar para o lado.
- [Tables Full Width](/tools/ui/tables-full-width): o mesmo para todas as tabelas do Direct Booking.
- [Compact Calendar UI](/tools/ui/compact-calendar-ui): dia e data numa linha em vez de três, e linhas de tipo de quarto mais curtas, para caberem mais quartos no calendário.
- [Compact UI Reservation Details](/tools/ui/compact-ui-reservation-details): um ecrã de reserva mais compacto com uma caixa de comentários mais alta.

::screenshot{src="/images/scripts/compact-calendar-ui/to.png" alt="Calendário do Little Hotelier (interface em espanhol) depois do Compact Calendar UI, com o dia da semana e a data numa única linha e linhas compactas de tipo de quarto" caption="O Compact Calendar UI faz caber mais quartos e dias num único ecrã." width="1187" height="1306"}
::

### Preços e comissões do Booking.com

- [Prices Display](/tools/ui/prices-display): mostra o preço do quarto de cada noite no calendário, lido da sua página Inventory. Útil quando um hóspede liga a perguntar pela sexta-feira.
- [Show Booking.com Commissions](/tools/ui/show-booking-commissions): acrescenta uma estimativa da comissão e um valor líquido aproximado às reservas do Booking.com. É uma estimativa; a fatura do Booking.com é o valor final. Mais em [quanto cobra de comissão o Booking.com](/blog/booking-com-commission).
- [Change Inventory Name](/tools/ui/change-inventory-name): muda o nome do menu **Inventory** para "Inventory - Prices" (inglês e espanhol), para o pessoal novo encontrar as tarifas.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Reserva do Booking.com no Little Hotelier (interface em espanhol) com linhas de resumo extra para a taxa de transferência, a comissão do Booking.com, o total de comissões com IVA e um valor líquido aproximado" caption="Uma estimativa do que uma reserva do Booking.com lhe deixa depois da comissão." width="752" height="715"}
::

### Pagamentos e faturas com menos cliques

- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button): uma ligação direta para imprimir a fatura na reserva, sem abrir o menu Print.
- [Update Payment Link Button](/tools/ui/update-payment-link-button): texto mais claro no botão da ligação de pagamento, e o telefone do hóspede é acrescentado automaticamente a partir do formulário.
- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button): um botão que envia por e-mail os seus dados bancários com texto pré-preenchido. Ainda não está publicado e é configurado a pedido.

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="Rodapé de uma reserva do Little Hotelier (interface em espanhol) com uma ligação extra Imprimir Factura junto dos menus Print e Email" caption="Um clique para imprimir a fatura." width="604" height="265"}
::

Quer que a fatura saia sem nenhum clique? Veja [como enviar a fatura automaticamente no check-out](/blog/send-invoice-to-guest-at-checkout).

### Dados do hóspede e check-in

- [Chekin Connection](/tools/ui/show-chekin): se usa o Chekin para o check-in online, mostra o registo do Chekin de cada hóspede (nome, telefone, número de documento) dentro da reserva. Pode copiar o documento para a fatura e partilhar o formulário de registo por e-mail ou WhatsApp. Usa o seu próprio login do Chekin.
- [Easy Save Province and Country](/tools/ui/easy-save-province-country): para propriedades em Espanha, uma lista de províncias espanholas no campo da província. Ao escolher uma, o país passa a Espanha, e os campos de nome e apelido vazios recebem um sublinhado.
- [Update Number Adults](/tools/ui/update-number-adults): os novos formulários de reserva começam com 2 adultos em vez de 0, o que evita guardar uma reserva sem adultos.

::screenshot{src="/images/scripts/show-chekin/to.png" alt="Reserva do Little Hotelier (interface em espanhol) com um painel do Chekin que lista um hóspede registado, o número de documento e um botão Use document" caption="Os registos do Chekin dentro da reserva do Little Hotelier." width="1484" height="831"}
::

### Conforto do dia a dia: recargas, tablets e atalhos

- [Auto Refresh On Inactivity](/tools/ui/auto-refresh-inactivity): recarrega a página após 10 minutos sem cliques, movimento do rato nem deslocação, para não voltar a uma sessão expirada. Nunca recarrega enquanto está a trabalhar.
- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens): botões e menus maiores para tablets, e o botão de remover quarto, que normalmente só aparece ao passar o rato, fica sempre visível.
- [Add Button Check on Front Desk](/tools/ui/add-button-check-front-desk): numa reserva do Direct Booking, um botão para a verificar no Front Desk e rever reembolsos. Se não tiver sessão iniciada no Front Desk, pode ter de o carregar duas vezes.

## Que scripts instalar primeiro

- **Receção num portátil:** Full Width Reservation Table, Auto Refresh On Inactivity, Extra Invoice Print Button.
- **Proprietário ou gestão de receita:** Prices Display e Show Booking.com Commissions.
- **Propriedades em Espanha:** Easy Save Province and Country, mais o Chekin Connection se usa o Chekin.
- **Tablet na receção:** Improve Style For Touch Screens.

## Quando precisa de mais do que ajustes de interface

Os scripts mudam o que vê enquanto está diante do ecrã. Não conseguem trabalhar quando está ausente. Para tarefas que correm sozinhas, como verificar em cada chegada se faltam documentos de identificação ou enviar faturas no check-out, existe o [painel do Hotelier Tools](/tools/bot). É gratuito para todos os hotéis até começar a faturação, a 10 de janeiro de 2027; os scripts continuam gratuitos para sempre. Para mais atalhos dentro do próprio Little Hotelier, veja [dicas e funções escondidas do Little Hotelier](/blog/little-hotelier-tips).

::demo-cta{path="/"}
::

## Resumo

- Instale o Tampermonkey uma vez, permita userscripts e depois carregue em **Install on Tampermonkey** em cada script que quiser.
- Os scripts só correm no Little Hotelier (e no Chekin, um deles), não enviam nada ao Hotelier Tools e atualizam-se sozinhos.
- Comece pelos que se adequam à sua função: tabelas mais largas e recarga automática para a receção, preços e comissões para o proprietário.
- Se um se portar mal depois de uma atualização do Little Hotelier, desative-o no menu do Tampermonkey.
