---
title: "Uma API REST e um servidor MCP para os dados do Little Hotelier"
---

O Hotelier Tools dá ao seu alojamento do Little Hotelier uma API REST em `https://dashboard.hotelier.tools/api/v1` e um servidor MCP em `https://dashboard.hotelier.tools/api/mcp`. Os seus scripts, folhas de cálculo, Claude, ChatGPT, Cursor ou VS Code podem então ler reservas, hóspedes, preços e disponibilidade, e fazer algumas alterações, com as mesmas permissões da sua conta do Hotelier Tools.

## Como funciona

- **O seu próprio login, não uma API de parceiro.** Liga o Little Hotelier uma só vez em **Credentials**, guardado de forma encriptada. O Hotelier Tools usa os mesmos endpoints web da aplicação web do Little Hotelier, por isso pode fazer o que esse login pode, nada mais.
- **API REST.** JSON sobre HTTPS: `/reservations` (com faturas e PDFs por reserva), `/guests`, `/prices`, `/room-types` e `/methods` para métodos em bruto do Little Hotelier. A lista completa está na especificação OpenAPI pública em `/api/v1/openapi.json`, com um explorador interativo e modelos de código em **REST API & Swagger** (`/developer/rest-api`).
- **Servidor MCP.** Um servidor HTTP remoto com mais de 100 ferramentas de hotel. As configurações prontas para cada cliente estão em **MCP Setup** (`/developer/mcp-setup`).

## Como funciona a autenticação

- **Chaves de API.** Crie uma em **Developer > API & MCP > API Keys** (`/developer/api-keys`). As chaves começam por `htk_`, só são mostradas uma vez e vão num cabeçalho `Authorization: Bearer`. Uma chave não tem âmbitos: atua num alojamento como a pessoa que a criou. Cada pessoa pode ter até 10 chaves e revogar qualquer uma delas.
- **Início de sessão para o MCP.** Os clientes que suportam OAuth podem ligar-se iniciando sessão. Esse início de sessão dura 30 dias.

## Chamadas de leitura e de escrita

As chamadas de leitura não alteram nada no Little Hotelier. As escritas são reais: `POST /reservations/{id}/invoices` cria uma nova fatura de cada vez. Através do MCP, uma IA pode alterar reservas (primeiro uma proposta, depois um passo de aplicação com `confirmed: true`), registos de pagamento, preços, stop sell, entradas da lista de espera e tarefas agendadas. Fora do painel não há cartão de aprovação, por isso mantenha ativas as aprovações de ferramentas do seu cliente. As ações irreversíveis, como reembolsos ou o envio de faturas por email, estão bloqueadas para clientes externos.

## Limites e bom saber

- **Estado:** a API REST e o servidor MCP estão em beta. Os cartões incorporáveis estão em alfa.
- **Limite de pedidos:** 100 pedidos por minuto por endereço IP, depois `429` com `Retry-After`.
- **Paginação:** no máximo 100 reservas por chamada, filtradas pela data de check-in.
- **Não disponível:** webhooks de saída, uma chave de sandbox pública, pacotes SDK.
- **Os dados ocultados continuam ocultados:** o Little Hotelier oculta os dados dos hóspedes 180 dias após o check-out.
- Não é uma API oficial da SiteMinder.

Comece por [O Little Hotelier tem API?](/blog/little-hotelier-api) e [o que é um servidor MCP](/blog/what-is-mcp-server-hotels), e depois configure o [Claude](/blog/connect-claude-to-little-hotelier) ou o [Claude Code, Cursor e VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode).
