---
title: "Faturas em massa e faturas na saída para o Little Hotelier"
---

A faturação cria numa só execução as faturas do Little Hotelier em falta num intervalo de datas e dá-lhe cada trimestre num ZIP de PDFs mais um resumo em CSV para o seu contabilista. Também pode fazer com que o Little Hotelier envie a fatura por email a um hóspede automaticamente depois de este sair.

## Como funciona

1. **Gere um período.** Em **Invoice Download** (`/invoices`), prima **Generate invoices** e escolha as datas, por exemplo de 1 de julho a 30 de setembro. O Hotelier Tools lê essas reservas e pede ao Little Hotelier que gere uma fatura para cada estadia que reúna as condições.
2. **As faturas de risco são recusadas.** Uma verificação prévia impede uma estadia que ainda não fez check-out, uma fatura de empresa sem NIF ou morada fiscal, um NIF mal formado e uma estadia que já está faturada.
3. **Nada é ignorado em silêncio.** Cada recusa fica em **Errors** (`/invoices/errors`) com o seu motivo. Corrija a reserva no Little Hotelier e verifique-a de novo.
4. **Descarregue.** As faturas são agrupadas por trimestre e mês. Prima **ZIP** para todos os PDFs, ou **Preview CSV** para ver primeiro o resumo.
5. **Fatura na saída.** Em **Invoice on Leave** (`/invoice-on-leave`), assinale uma estadia uma só vez. Uma tarefa diária (às 16:00 por defeito) faz com que o Little Hotelier gere a fatura depois do check-out e a envie com o seu próprio modelo e remetente.

As faturas são documentos do próprio Little Hotelier, por isso a sua numeração, logótipo e formato ficam exatamente como estão. Guias passo a passo: [descarregar todas as faturas de uma vez](/blog/download-all-little-hotelier-invoices) e [enviar a fatura no check-out](/blog/send-invoice-to-guest-at-checkout).

## O que precisa

- O Little Hotelier ligado em **Credentials**.
- Hóspedes com check-out feito no Little Hotelier. Se a sua equipa não o faz à mão, uma tarefa opcional de **Automatic check-out** (15:05) fecha as saídas do dia.
- Nome da empresa, NIF e morada fiscal na reserva para hóspedes empresariais.
- Um email do hóspede na reserva para as faturas enviadas na saída.
- O idioma da fatura, definido em **Settings > Invoices**: segundo o país do hóspede, ou sempre o mesmo, com um idioma de reserva.

## Limites e bom saber

- **Estado:** o descarregamento em massa, as verificações prévias, os erros e o idioma estão estáveis. A fatura na saída está em beta.
- A tarefa de saída olha 8 dias para trás para recuperar execuções falhadas e lê até 100 check-outs por execução. Uma estadia passada sem email do hóspede é comunicada uma vez, não repetida todos os dias.
- Não existe nenhuma funcionalidade VeriFactu. Em Espanha, mantenha esse passo no Little Hotelier.
