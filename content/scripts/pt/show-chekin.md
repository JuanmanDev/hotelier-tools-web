---
title: "Conexão com Chekin"
description: "Mostra os dados do check-in online do Chekin na reserva do Little Hotelier, preenche os formulários dos hóspedes com um clique e partilha a ligação do registo."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js"
category: "Detalhes da Reserva"
images:
  before: "/images/scripts/show-chekin/from.webp"
  after: "/images/scripts/show-chekin/to.webp"
  gallery:
    - "/images/scripts/show-chekin/from.webp"
    - "/images/scripts/show-chekin/to.webp"
    - "/images/scripts/show-chekin/login-required.webp"
    - "/images/scripts/show-chekin/login-on-chekin.webp"
    - "/images/scripts/show-chekin/url-to-share.webp"
    - "/images/scripts/show-chekin/loading.webp"
---

Este script liga o Chekin, o serviço de check-in online, ao Little Hotelier. Ao abrir uma reserva, um painel do Chekin mostra os hóspedes que já se registaram e permite copiar os seus dados para os formulários de hóspedes do Little Hotelier. Destina-se às equipas de receção que usam o Chekin para recolher os documentos de identificação dos hóspedes.

## O problema que resolve

Sem ele, em cada chegada é preciso encontrar a reserva no Chekin, ver quem se registou e copiar à mão números de documento e moradas. É lento, e os números de identificação copiados são fáceis de escrever mal.

## O que muda

No ecrã de edição da reserva, no Front Desk, é adicionado um painel do Chekin à secção do contacto principal:

- **Estado:** se a reserva foi encontrada no Chekin e quantos hóspedes estão registados, com uma ligação **View in Chekin**.
- **Tabela de hóspedes:** nome, telefone, documento de identificação, cidade, província e país de cada hóspede registado.
- **Use as Primary:** copia o número de documento desse hóspede para o campo de identificação do hóspede principal, pronto para a fatura.
- **Save Guest** e **Save All Guests:** preenchem os formulários de hóspedes adicionais do Little Hotelier com os dados do Chekin. Depois, prima o botão Save do Little Hotelier para confirmar.
- **Ligação do formulário de registo:** quando ainda ninguém se registou, a ligação do formulário do hóspede com botões Open, Copy, Email e WhatsApp, usando o email e o telefone do hóspede indicados na reserva.
- **Create Checkin Reservation:** se não houver correspondência, cria a reserva no Chekin a partir das datas, quartos, número de hóspedes e dados de contacto do Little Hotelier.

No calendário, o script também carrega em segundo plano os dados do Chekin das reservas visíveis, para que as reservas abram mais depressa.

## Como instalar

Precisa da extensão gratuita Tampermonkey e de uma conta Chekin. Prima **Instalar no Tampermonkey**, confirme e depois inicie sessão em dashboard.chekin.com no mesmo navegador. O [guia de instalação](/tools/ui/instructions) mostra os passos. O script funciona nas páginas de edição de reservas do Little Hotelier, no calendário e nas páginas do painel do Chekin que ele próprio abre. É gratuito e de código aberto: [leia o código no GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js).

## Bom saber

- Usa o seu próprio login do Chekin. Se a sessão estiver terminada, o painel mostra um botão **Login Required on Chekin**.
- Para pesquisar, abre um separador do Chekin em segundo plano.
- A reserva precisa de uma data de check-in e de um quarto atribuído. A correspondência é feita pela referência da reserva e, depois, pelo número do quarto.
- Os resultados ficam guardados no seu navegador até 24 horas, e as pré-cargas do calendário até 4 horas.
- O painel segue o idioma do seu navegador (inglês ou espanhol). As mensagens partilhadas terminam com a assinatura do alojamento do autor; edite-a no script.

## Relacionado

- [SES Hospedajes com o Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [Regras de registo de hóspedes por país](/blog/guest-registration-rules-by-country)
- [Easy Save Province and Country](/tools/ui/easy-save-province-country)
