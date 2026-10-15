---
title: "Botão Extra de Impressão de Fatura"
description: "Adiciona um botão Print Invoice a cada reserva do Little Hotelier, junto ao menu Print, para a receção imprimir a fatura com um clique em vez de dois."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/extra-invoice-print-button/from.png"
  after: "/images/scripts/extra-invoice-print-button/to.png"
  gallery:
    - "/images/scripts/extra-invoice-print-button/from.png"
    - "/images/scripts/extra-invoice-print-button/to.png"
---

Este script coloca um botão **Print Invoice** diretamente no ecrã da reserva do Little Hotelier, junto ao menu **Print** existente. Um clique abre a fatura, sem ter de abrir primeiro um menu. Destina-se à equipa de receção que imprime ou descarrega uma fatura em quase todos os check-outs.

## O problema que resolve

No Front Desk, a fatura está dentro do menu Print da reserva: abre o menu e depois escolhe a fatura. Dois cliques não é muito uma vez, mas na hora do check-out, com hóspedes à espera, vão-se somando, e num tablet o menu pequeno é fácil de falhar. Os funcionários novos também nem sempre sabem que a fatura está dentro desse menu.

## O que muda

- Aparece um novo botão com um ícone de documento no rodapé da reserva, logo a seguir ao botão do menu **Print**.
- O seu rótulo é **Print Invoice**, ou **Imprimir Factura** quando o Little Hotelier está em espanhol.
- Ao clicar, aciona a própria ligação de impressão da fatura do Little Hotelier, a mesma que escolheria no menu Print. O resultado é exatamente a fatura que o Little Hotelier produz; o script não cria nem altera faturas.
- O menu Print original mantém-se como está, com todas as suas outras opções.

## Como instalar

Precisa da extensão gratuita Tampermonkey. Prima **Instalar no Tampermonkey** nesta página, confirme e volte a carregar o Little Hotelier. O [guia de instalação](/tools/ui/instructions) tem imagens de cada passo. O script funciona nas páginas do Front Desk em app.littlehotelier.com e só adiciona o botão onde existe o botão Print da reserva. É gratuito e de código aberto: [veja o código no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js).

## Bom saber

- O script procura o botão Print algumas vezes durante os primeiros cinco segundos após o carregamento da página. Se o botão não aparecer porque a reserva abriu mais tarde, volte a carregar a página.
- Verifica primeiro se o seu botão já existe, por isso nunca fica com dois.
- Os rótulos existem em inglês e espanhol. Os outros idiomas da interface mostram o rótulo em inglês.
- Funciona em computadores e em ecrãs táteis. Com o [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens), os botões do rodapé ganham também um fundo destacado.
- Não guarda nada nem envia nada para fora do Little Hotelier.

## Relacionado

- [Como enviar a fatura ao hóspede no check-out](/blog/send-invoice-to-guest-at-checkout)
- [Descarregar todas as faturas do Little Hotelier](/blog/download-all-little-hotelier-invoices)
- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button)
