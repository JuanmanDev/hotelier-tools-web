---
title: "Uma lista de espera para datas esgotadas no Little Hotelier"
---

A lista de espera, chamada **Availability Queue** no painel, acompanha as estadias para as quais está esgotado e verifica o Little Hotelier segundo um horário. Quando todos os quartos pedidos estão livres em todas as noites, o hóspede, a sua equipa ou ambos recebem uma mensagem por email ou WhatsApp, com uma ligação de reserva direta.

## Como funciona

1. **Adicione uma estadia a acompanhar.** Em `/availability-watch`, escolha a primeira e a última noite, os quartos necessários e, opcionalmente, os tipos de quarto. Um grupo misto pode pedir números diferentes por tipo de quarto.
2. **Escolha quem é avisado.** Adicione o contacto do hóspede e o seu. Escolha os alertas: **available** (todos os quartos livres, o que fecha o acompanhamento), **partial** (menos quartos do que os pedidos, por defeito só para o alojamento) ou **expiring** (a estadia começa dentro de 48 horas e nada foi encontrado).
3. **Agende a verificação.** Prima **Check every night at 01:00**, ou escolha qualquer intervalo entre a cada 20 minutos e uma vez por dia. **Check the queue now** executa-a de imediato.
4. **Uma mensagem por acompanhamento.** A noite mais fraca decide: uma estadia só está livre quando todas as noites têm os quartos. Depois de a mensagem seguir, a entrada fecha-se, e o **History** guarda o texto exato enviado.
5. **Deixe os hóspedes inscreverem-se.** A **Public waiting-list page** (`/availability-watch/public`) é um formulário que liga a partir do seu site. Os hóspedes escolhem as noites, deixam um email e assinalam uma caixa de consentimento.

Um método com folha de cálculo e regras sobre quem passa primeiro estão em [como gerir uma lista de espera para datas esgotadas](/blog/hotel-waitlist-sold-out-dates).

## O que precisa

- O Little Hotelier ligado em **Credentials**.
- A verificação agendada. Nada é verificado até essa tarefa existir.
- Para as mensagens de WhatsApp, um número de WhatsApp ligado.
- O seu nome legal e morada no cartão do alojamento, porque o aviso de privacidade do formulário público é construído a partir deles.

## Limites e bom saber

- **Estado: beta.**
- **Nada é reservado.** A lista de espera nunca reserva um quarto nem altera uma reserva. O primeiro hóspede a reservar fica com o quarto.
- **Uma verificação noturna pode chegar tarde.** Verifique com mais frequência na época alta.
- **A página pública fica desativada até a abrir.** Por defeito, pede aos hóspedes que confirmem o email e aceita estadias até 14 noites e 2 quartos por pedido. Limita a lista a 100 pessoas em espera e 40 inscrições por dia. Os dados de contacto são removidos das entradas fechadas ao fim de 90 dias.
- **Alimenta os seus preços.** Cada grupo em espera aumenta em 3% a [recomendação de preço](/tools/bot/dynamic-pricing) dessa noite, até 12%.
