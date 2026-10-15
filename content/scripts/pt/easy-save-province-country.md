---
title: "Salvar Província e País Facilmente"
description: "Seletor de província e país espanhóis para os formulários de hóspedes do Little Hotelier: um toque define a província e Espanha, e preenche nomes vazios."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/easy-save-province-country/from.webp"
  after: "/images/scripts/easy-save-province-country/to.webp"
  gallery:
    - "/images/scripts/easy-save-province-country/from.webp"
    - "/images/scripts/easy-save-province-country/to.webp"
    - "/images/scripts/easy-save-province-country/three.webp"
---

Este script torna mais rápido preencher os dados dos hóspedes numa reserva do Little Hotelier, sobretudo de hóspedes espanhóis. Ao clicar no campo da província, mostra uma lista de províncias espanholas em que basta tocar, e escolher uma define também o país como Espanha. Foi criado para a equipa de receção de alojamentos em Espanha e pensado para ser fácil de usar num tablet.

## O problema que resolve

Para hóspedes espanhóis, o Little Hotelier precisa de uma província além do país, e relatórios como o inquérito de ocupação do INE agrupam os hóspedes por província de residência. Escrever os nomes das províncias à mão gera variantes de grafia (Vizcaya ou Bizkaia, Orense ou Ourense), a lista de países é longa de percorrer, e o formulário de um hóspede adicional não guarda enquanto os campos do nome estiverem vazios.

## O que muda

No ecrã de edição da reserva, no Front Desk:

- **Seletor de província:** ao focar o campo da província, abre-se uma grelha com as 50 províncias espanholas mais Ceuta e Melilla. Ao escrever, a lista filtra-se, e alternativas comuns como Gerona, Lérida, Seville, Mallorca ou Tenerife encontram a província certa.
- **País definido por si:** escolher uma província define o país do hóspede como Espanha.
- **Seletor de país:** o campo do país abre uma grelha com pesquisa que mostra cada país em espanhol, com o nome em inglês por baixo.
- **Nomes vazios preenchidos:** ao escolher uma província ou um país, os campos de nome e apelido vazios desse formulário recebem o nome do hóspede principal, ou um sublinhado "_" se este também estiver vazio, para que o formulário possa ser guardado.
- **Formulários de hóspedes abertos:** os formulários de hóspedes recolhidos são expandidos automaticamente e o cursor vai para o campo da província.
- **Botões adaptados ao toque:** o botão de adicionar hóspede e as setas de expandir são maiores, e a cruz vermelha para remover um hóspede está sempre visível.

## Como instalar

Precisa da extensão gratuita Tampermonkey. Prima **Instalar no Tampermonkey**, confirme e volte a carregar a reserva. O [guia de instalação](/tools/ui/instructions) mostra todos os passos. O script só funciona nas páginas de edição de reservas (app.littlehotelier.com/extranet/properties/.../reservations/.../edit). É gratuito e de código aberto: [leia o código no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js).

## Bom saber

- O seletor de província só aparece quando o país do hóspede está vazio ou é Espanha. Para outros países, o campo funciona normalmente.
- A caixa de pesquisa e os nomes dos países estão em espanhol, seja qual for o idioma do Little Hotelier.
- Os campos de nome preenchidos copiam o nome do hóspede principal. Corrija-os se o hóspede adicional tiver outro nome.
- As alterações são feitas apenas no formulário. Nada é guardado até premir Save, e o script não guarda nada.

## Relacionado

- [SES Hospedajes com o Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [Inquérito de ocupação hoteleira do INE: como preencher](/blog/ine-hotel-occupancy-survey)
- [Chekin Connection](/tools/ui/show-chekin)
