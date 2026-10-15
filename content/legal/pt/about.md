---
title: "Sobre a Hotelier Tools"
description: "Projeto independente de Juan Manuel Béc., programador em Espanha: um painel e scripts gratuitos de código público para hotéis que utilizam o Little Hotelier."
updated: "2026-10-15"
---

A Hotelier Tools é um projeto independente de **Juan Manuel Béc.**, programador de software sediado em Espanha. Acrescenta ao Little Hotelier aquilo que a receção de um pequeno hotel tem muitas vezes de fazer à mão. É gerida por uma pessoa singular, não por uma empresa.

## O que é a Hotelier Tools

- **Um painel** em [dashboard.hotelier.tools](https://dashboard.hotelier.tools) que funciona ao lado do Little Hotelier: faturas em massa e faturas no check-out, verificações automáticas de reservas, preços dinâmicos, uma caixa de entrada de hóspedes para WhatsApp, email e Booking.com, um assistente de IA, uma lista de espera para datas esgotadas e o inquérito de ocupação do INE de Espanha. Oferece também uma API REST e um servidor MCP, para que ferramentas como o Claude ou o ChatGPT possam trabalhar com os dados do seu hotel. Veja [todas as funcionalidades do painel](/tools/bot) ou experimente a [demonstração pública](https://demo.hotelier.tools) com um hotel inventado.
- **Scripts gratuitos para o browser**, para o Tampermonkey, que melhoram os próprios ecrãs do Little Hotelier: tabelas mais largas, calendários compactos, comissões e preços onde precisa deles e outras pequenas correções. Veja [todos os scripts](/tools/ui).
- **Guias** sobre a gestão de um alojamento com o Little Hotelier, no [blogue](/blog).

## Como funciona com o Little Hotelier

As suas reservas, tarifas e calendário permanecem no Little Hotelier. Os scripts são executados dentro da sua própria sessão do Little Hotelier e não enviam nada à Hotelier Tools. O painel liga-se com o próprio início de sessão do seu alojamento no Little Hotelier, guardado com cifragem (AES-256-GCM), pelo que só pode fazer o que esse início de sessão pode fazer, e cada alteração que faz fica visível no Little Hotelier como habitualmente.

## Independente da SiteMinder

A Hotelier Tools **não está afiliada nem é recomendada pela SiteMinder ou pelo Little Hotelier**. Não é uma integração oficial nem um produto de um parceiro. O Little Hotelier e a SiteMinder são mencionados apenas para descrever aquilo com que a Hotelier Tools funciona.

## Código-fonte público

Os scripts são gratuitos e o seu código-fonte é público no GitHub, no [repositório TampermonkeyLittleHotelier](https://github.com/JuanmanDev/TampermonkeyLittleHotelier). Qualquer pessoa pode ler o que um script faz antes de o instalar, comunicar um problema ou sugerir uma alteração. O código-fonte deste sítio Web também é público, no [repositório hotelier-tools-web](https://github.com/JuanmanDev/hotelier-tools-web).

## Preços

Todas as funcionalidades do painel são gratuitas para todos os hotéis até 10 de janeiro de 2027. Os hotéis que começarem em 2026 pagam depois 50 € por mês durante todo o ano de 2027, com todas as funcionalidades incluídas. Os scripts para o browser continuam gratuitos. Os detalhes estão nos [Termos de Utilização](/terms).

## Contacto

- **Email:** [JuanmaDeveloper+hotelierTools@outlook.com](mailto:JuanmaDeveloper+hotelierTools@outlook.com)
- **Formulário de contacto:** [página de contacto](/contact)
- **GitHub:** [github.com/JuanmanDev](https://github.com/JuanmanDev)

Os relatórios de erros e as ideias para novos scripts são bem-vindos no GitHub ou por email. Se a Hotelier Tools lhe poupar tempo, pode apoiar o projeto através do [GitHub Sponsors](https://github.com/sponsors/JuanmanDev), do [Ko-fi](https://ko-fi.com/juanmandev) ou do [PayPal](https://paypal.me/juanmandev).

O tratamento dos dados pessoais está explicado na [Política de Privacidade](/privacy).
