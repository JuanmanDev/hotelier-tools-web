---
title: "Um assistente de IA para a receção do seu Little Hotelier"
---

O assistente de IA responde, em linguagem simples, a perguntas sobre as suas reservas, hóspedes, preços, faturas, verificações e lista de espera do Little Hotelier, e prepara alterações por si. Lê livremente, mas cada alteração aparece como um cartão que aprova ou rejeita antes de qualquer coisa chegar ao Little Hotelier.

## Como funciona

1. **Pergunte no chat.** Abra o **AI Chat** (`/chat`) e escreva um pedido, por exemplo quem chega amanhã e quem ainda deve dinheiro. As respostas voltam em texto e cartões: resumos de reservas, uma alteração proposta com uma tabela de evidências ou uma tabela de recomendações de preço.
2. **Aprove ou rejeite.** Cada escrita exige um cartão. Se o sistema não consegue saber se uma ferramenta lê ou escreve, trata-a como uma escrita. O cartão mostra o valor atual no Little Hotelier ao lado do novo e a sua origem.
3. **Aprovar executa exatamente essa alteração.** A chamada guardada é executada no servidor, e a IA não tem uma segunda hipótese de a reescrever. Cada aprovação funciona uma só vez e expira ao fim de 24 horas. Os reembolsos têm sempre o seu próprio cartão.
4. **A sua equipa também pode perguntar.** Em **Staff assistant** (`/staff`), registe um funcionário com o número de WhatsApp ou o email e uma função: **Read only** ou **Can request changes**. Escrevem para o seu número ou caixa de correio ligados, e qualquer alteração que peçam fica à espera da aprovação do proprietário.

Pedidos reais e o que acontece a seguir a cada um estão em [Inteligência artificial para hotel: o que um assistente de IA pode fazer na receção](/blog/ai-assistant-hotel-front-desk).

## O que precisa

- O Little Hotelier ligado em **Credentials**.
- O cartão do seu alojamento em `/settings/property`, lido do Little Hotelier.
- Para o assistente da equipa, um número de WhatsApp ou uma caixa de correio ligados.
- Créditos de IA: cada resposta usa-os, e o seu saldo está em **AI credits**.

## Limites e bom saber

- **Estado:** o chat e as aprovações estão em beta, o assistente da equipa está em alfa, e as contas de equipa com funções de proprietário, gestor e funcionário estão para breve.
- **Por agora, a voz é em espanhol.** O microfone usa o reconhecimento de voz do seu navegador definido para espanhol (es-ES). Pode escrever em qualquer idioma.
- **A identidade do funcionário é o remetente.** Um número de telefone registado, ou um email que passe as verificações DKIM/DMARC. As mensagens da equipa com mais de 30 minutos não são respondidas.
- **Fora do painel não há cartão.** Quando o Claude ou o ChatGPT chamam uma ferramenta de escrita através do [servidor MCP](/tools/bot/api-mcp), esta é executada de imediato, e os reembolsos estão bloqueados aí.
