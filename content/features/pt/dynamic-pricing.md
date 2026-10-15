---
title: "Preços dinâmicos e stop sell para o Little Hotelier"
---

Os preços dinâmicos comparam as suas tarifas do Little Hotelier com as de hotéis semelhantes na zona e recomendam um preço para cada quarto e cada noite, com o motivo por trás. Nada é escrito no Little Hotelier até confirmar, a não ser que ative você mesmo o piloto automático.

## Como funciona

1. **Preços da concorrência.** Defina a sua cidade e os concorrentes reais em **Competitors & market**. **Competitor Prices** (`/competitor-prices`) mostra então o que cobram em cada noite ao lado da sua própria tarifa.
2. **Uma recomendação por noite.** Em **Recommendations** (`/price-recommendations`), cada preço parte da sua própria tarifa, é puxado um pouco para a mediana dos hotéis comparáveis e depois move-se com a procura: ocupação, quartos restantes, última hora, fins de semana, eventos locais aprovados e hóspedes na sua lista de espera. Os seus limites restringem a variação. **Why?** mostra a aritmética.
3. **Regras em linguagem simples.** Escreva uma regra como uma frase. A IA transforma-a numa regra estruturada, e você aprova-a antes de contar. As regras por data podem fixar, congelar ou limitar um preço.
4. **Eventos locais.** Uma análise por IA encontra feiras, concertos e feriados perto de si. Aprova ou rejeita cada um.
5. **Aplicar.** Assinale as noites e prima **Apply to Little Hotelier**. A mesma janela pode definir o stop sell do SiteMinder, enviado apenas para as noites em que a alteração de preço teve êxito.
6. **Verifique os resultados.** **History & outcomes** (`/pricing-log`) lista todas as tarifas escritas, com os quartos restantes na altura e agora.

O método, e uma rotina manual que pode seguir sem nenhuma ferramenta, estão em [tarifa dinâmica para hotéis pequenos](/blog/dynamic-pricing-little-hotelier). Para as restrições, veja [CTA, CTD, estadia mínima e stop sell](/blog/little-hotelier-cta-ctd-stop-sell).

## O que precisa

- O Little Hotelier ligado em **Credentials**.
- Um preço mínimo por tipo de quarto e os concorrentes com quem realmente compete.
- Uma verificação de que fontes de concorrência devolvem preços para a sua localidade. Foi concebido para ler o Booking.com, a Expedia, o Google Hotels, a Hostelworld e a Agoda.

## Limites e bom saber

- **Estado:** os preços da concorrência estão em beta. As recomendações, as regras, os eventos, o piloto automático e o stop sell estão em alfa.
- **O piloto automático vem desativado por defeito.** Quando ativo, corre no máximo de 3 em 3 horas, move cada noite no máximo 20% por defeito, nunca desce abaixo do seu mínimo e trabalha de 1 a 90 dias à frente (14 por defeito). Nunca altera o stop sell.
- As execuções noturnas de preços são aritmética simples. A IA só lê as frases das suas regras e encontra eventos.
- A estimativa de receita do registo de preços é uma orientação, não uma prova.
