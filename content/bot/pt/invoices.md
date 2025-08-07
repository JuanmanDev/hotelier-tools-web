---
Obtém automaticamente todas as reservas entre duas datas e gera as faturas correspondentes.

Além disso, pode adicionar uma série de condições para que a fatura seja gerada de forma correta, como por exemplo:
- A reserva deve estar no estado "Checked Out" ou "Checked In".
- A reserva deve ter um número de identificação fiscal.
- A reserva não deve ter uma fatura emitida. Caso tenha, utilizar a última fatura emitida.
- A reserva deve ter um total superior a 0.
- A reserva deve estar totalmente paga.
- A reserva deve ter um número de identificação fiscal válido. Caso não tenha, o hotel é notificado para o adicionar manualmente.
- A reserva deve ter um método de pagamento válido.

Uma vez geradas as faturas, são enviadas por email ao hotel e guardadas no sistema para posterior consulta.
Como o tamanho das faturas pode ser grande, tentar-se-á enviá-las através de um link de download em vez de as anexar diretamente ao email.

Pode fornecer acesso a um sistema de armazenamento como Google Drive, Dropbox ou OneDrive para armazenar as faturas e enviar o link de download em vez de as anexar diretamente ao email.


Se tem que apresentar todas as faturas para a gestão de impostos, esta ferramenta ajudá-lo-á a gerar as faturas de forma automática e poupar muitíssimo tempo.
