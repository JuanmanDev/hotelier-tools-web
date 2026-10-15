---
title: "Uma só caixa de entrada de hóspedes para WhatsApp, email e Booking.com"
---

A caixa de entrada de hóspedes reúne as mensagens de WhatsApp, email e Booking.com numa só lista, com a reserva do Little Hotelier ao lado de cada conversa. Uma IA redige cada resposta a partir das suas próprias perguntas frequentes e notas da casa e, por defeito, uma pessoa aprova-a antes de qualquer envio.

## Como funciona

1. **Ligue os seus canais.** O Booking.com através de **Credentials > Booking.com extranet** com o seu login de parceiro e o segundo fator. O email a partir do Google, da Microsoft ou de qualquer conta IMAP/SMTP. O WhatsApp através de uma sessão do WhatsApp Web (WAHA).
2. **As mensagens chegam junto à reserva.** Uma conversa do Booking.com é associada automaticamente à sua reserva. As perguntas de hóspedes (Q&A) da sua página do Booking.com chegam à mesma caixa de entrada.
3. **Escolha um modo de resposta por conta** em **Channels** (`/messaging/channels`): **Off**, **Draft** (o predefinido, nada acontece até aprovar), **Automatic reply** após um atraso à sua escolha, ou **Autonomous**.
4. **Ensine-lhe as suas respostas.** Em **FAQ & knowledge** (`/messaging/faq`), acrescente a sua página de perguntas frequentes ou texto e notas da casa, como wifi e estacionamento. Corrija uma resposta uma vez e o assistente aprende com isso.
5. **Os pedidos de fatura são reconhecidos sem IA.** As mensagens de pedido de fatura do Booking.com propõem inscrever a estadia para a fatura na saída.

Detalhes de configuração por canal: [WhatsApp com o Little Hotelier](/blog/whatsapp-little-hotelier) e [gerir as mensagens de hóspedes do Booking.com](/blog/booking-com-guest-messages).

## O que precisa

- O Little Hotelier ligado em **Credentials**, e o cartão do seu alojamento preenchido em `/settings/property`.
- Para o WhatsApp, um servidor WAHA: o seu endereço, um nome de sessão e uma chave de API.
- Créditos de IA. Cada mensagem que a IA lê e redige usa-os, e são mostrados em **AI credits** (`/messaging/credits`).

## Limites e bom saber

- **Estado: alfa.** É uma versão inicial e muda com frequência.
- **O Booking.com continua a ser enviado por uma pessoa.** A IA nunca envia por si só aos hóspedes do Booking.com. Enviar a resposta aprovada de volta ao Booking.com a partir da caixa de entrada ainda não está prometido: copie-a para o Extranet ou o Pulse.
- **A IA dos hóspedes não tem ferramentas.** Devolve um plano a partir de uma lista fechada e nunca pode cancelar, alterar datas nem tocar em pagamentos.
- **Só vê uma reserva para um remetente verificado:** um telefone que coincida nos últimos 8 dígitos, o email exato ou uma conversa do Booking.com.
- **Um serviço que não tenha listado** é respondido com "a confirmar", nunca com sim.
- **O WhatsApp através do WAHA não é a API oficial.** Um número usado assim pode ser bloqueado, por isso responda apenas a hóspedes que escrevam primeiro. As conversas de grupo são ignoradas.
- As respostas automáticas param às 4 por hora ou 12 por dia.
