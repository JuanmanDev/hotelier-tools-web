---
title: "O inquérito de ocupação hoteleira do INE a partir do Little Hotelier"
---

Os relatórios do INE constroem o inquérito de ocupação hoteleira do INE de Espanha a partir das suas reservas do Little Hotelier: chegadas e dormidas por região espanhola ou país, quartos ocupados, camas extra e tarifa média por tipo de cliente. O Hotelier Tools valida os valores, envia o XML através do sistema IRIA do INE e guarda o comprovativo.

## Como funciona

1. **Configure o seu estabelecimento uma só vez.** Em **INE Setup** (`/ine-setup`), introduza o seu número de ordem IRIA (NOrden) e a palavra-passe, prima **Test IRIA connection** e preencha a morada, a capacidade, o tipo e a categoria para o cabeçalho do XML.
2. **Gere o relatório.** Em **Guest Origins** (`/reports/guest-origins`), escolha as datas do pedido do INE e prima **Generate report**. Os separadores dividem o resultado em resumo diário, origem dos hóspedes, quartos, ADR por cliente e qualidade dos dados.
3. **Corrija os hóspedes sem origem.** As reservas sem nacionalidade ou província são assinaladas. Corrija-as no Little Hotelier e atualize apenas essas linhas.
4. **Valide, pré-visualize e envie.** Prima **Validate for the INE**, depois **Preview XML** e depois **Send to the INE**. O comprovativo do INE fica guardado com o relatório.
5. **Mantenha o histórico.** **Saved Reports** (`/reports/list`) lista todos os meses com o seu estado e comprovativo.

Se a caixa de correio que recebe os emails do INE estiver ligada à caixa de entrada de hóspedes, o pedido do INE mostra um botão que gera o relatório exatamente para as datas pedidas.

O que o inquérito pergunta, as multas e as rejeições do IRIA a evitar estão em [como preencher o inquérito de ocupação hoteleira do INE](/blog/ine-hotel-occupancy-survey).

## O que precisa

- Um pedido do INE com o seu número de ordem e palavra-passe. O inquérito só se aplica depois de o INE selecionar o seu estabelecimento.
- O Little Hotelier ligado em **Credentials**.
- O país e a província dos hóspedes preenchidos. O INE conta os hóspedes pelo local onde vivem, não pela nacionalidade. O script gratuito [Easy Save Province and Country](/tools/ui/easy-save-province-country) e as [verificações automáticas](/tools/bot/automated-checks) ajudam a mantê-los completos.

## Limites e bom saber

- **Estado: estável.**
- Constrói o questionário hoteleiro para estabelecimentos de tipo hoteleiro: hotéis, hostales e pensiones. Os apartamentos turísticos, parques de campismo, casas rurais e albergues respondem a outros questionários do INE.
- Um relatório enviado já não pode ser alterado nem eliminado, mas ainda pode descarregar o respetivo XML.
- A sua palavra-passe do IRIA é guardada de forma encriptada e nunca é mostrada em texto simples.
- Na demonstração pública, o envio ao INE está desativado. Nunca introduza aí credenciais reais do IRIA.
- O Hotelier Tools não é afiliado ao INE, à SiteMinder nem ao Little Hotelier.
