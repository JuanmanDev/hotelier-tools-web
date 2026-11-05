---
title: "Como adicionar um utilizador no Little Hotelier (e dar a uma ferramenta o seu próprio login em vez da sua palavra-passe)"
seoTitle: "Adicionar um utilizador no Little Hotelier, passo a passo"
description: "Adicione um colaborador ou um utilizador de integração no Little Hotelier, defina permissões e MFA e conecte ferramentas sem partilhar a sua palavra-passe."
date: 2026-11-05
category: tips
tags: [little hotelier, utilizadores, permissões, mfa, passkeys, segurança]
keywords: [como adicionar utilizador little hotelier, little hotelier adicionar usuário, permissões de utilizador little hotelier, gerir utilizadores little hotelier, configurar mfa little hotelier, e-mail de ativação little hotelier expirado, utilizador de integração little hotelier, dar acesso a funcionários little hotelier, passkey little hotelier]
feature: dashboard
demoPath: /credentials/hotelier-advanced
cover: /images/blog/demo/en/lh-advanced-user-invite.webp
coverAlt: "Página da conta Advanced: Use an alias of your own email com o endereço sugerido demo+hoteliertools@hotelier.tools e um botão Copy, e depois The invite email: copy the link, do not open it, com um aviso para não clicar no botão do e-mail e três passos que terminam no campo Activation link"
faq:
  - q: "Como adiciono um novo utilizador no Little Hotelier?"
    a: "Num dispositivo de confiança, clique no nome da sua propriedade no canto superior direito e escolha Manage users e depois Add user. Introduza o e-mail, o nome e o idioma, escolha as apps e o nível de utilizador e clique em Save. A pessoa recebe um e-mail de ativação válido durante 24 horas."
  - q: "Que permissões pode ter um utilizador do Little Hotelier?"
    a: "Um utilizador Admin tem todas as permissões. Um utilizador General só tem o que marcar por app: no Front Desk, Calendar, Reservations, Inventory, Guests, Reports, Housekeeping e Setup; no Channel Manager, Config, Inventory, Reservations e Payments."
  - q: "Preciso de MFA para adicionar utilizadores no Little Hotelier?"
    a: "Sim. Gerir utilizadores exige um dispositivo de confiança, e tem de configurar a autenticação multifator antes de poder adicionar um. A MFA funciona com a app do Little Hotelier, uma app de autenticação ou uma extensão do navegador; SMS e e-mail não são suportados."
  - q: "Devo dar a uma integração a minha própria palavra-passe do Little Hotelier?"
    a: "É melhor não. Um utilizador dedicado à ferramenta mantém o seu login privado, mostra as ações dela separadamente no registo e pode ser desativado sem mexer em mais ninguém. No Hotelier Tools chama-se conta Advanced."
  - q: "O que acontece quando o link de ativação já foi aberto?"
    a: "O token de ativação só funciona uma vez. Se alguém clicou no botão do e-mail antes de colar o link no Hotelier Tools, peça ao Little Hotelier que reenvie o convite e copie o novo link sem o abrir."
  - q: "O Hotelier Tools faz parte do Little Hotelier?"
    a: "Não. O Hotelier Tools é independente: não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com um utilizador do Little Hotelier que o seu hotel cria e controla."
---

Para adicionar um utilizador / usuário no Little Hotelier, inicie sessão num dispositivo de confiança, clique no nome da sua propriedade no canto superior direito, escolha **Manage users** e carregue em **Add user**. Introduza o e-mail, o nome e o idioma da pessoa, escolha as apps de que precisa, escolha **Admin** ou **General** (e marque as permissões) e depois **Save**. A pessoa recebe um e-mail de ativação válido durante 24 horas. Para um software, faça o mesmo com um utilizador separado: nunca partilhe a palavra-passe / senha do proprietário com uma ferramenta.

Os passos do Little Hotelier abaixo foram verificados no seu centro de ajuda em novembro de 2026.

## Como adicionar um utilizador no Little Hotelier

Antes de começar, há dois requisitos ([Create and manage users](https://helpcentre.littlehotelier.com/en/articles/8673881-create-and-manage-user-accounts-and-permissions)):

- Precisa da permissão **Manage users**.
- Tem de estar num **dispositivo de confiança**, num navegador de computador ou de telemóvel / celular. A gestão de utilizadores não está disponível na app móvel, e só pode adicionar um dispositivo de confiança depois de configurar a MFA.

Depois:

1. Clique no nome da sua propriedade no canto superior direito e selecione **Manage users**.
2. Clique em **Add user**.
3. Introduza o e-mail, o nome e o idioma preferido do utilizador.
4. Selecione as apps de que o utilizador precisa (Front Desk, Channel Manager, Direct Booking, Payments).
5. Escolha um nível de utilizador para cada uma e marque as permissões.
6. Clique em **Save**.

O novo utilizador recebe um e-mail de ativação, válido durante 24 horas, para definir a palavra-passe. Se esse endereço de e-mail já tiver um utilizador no Little Hotelier, não é enviado nenhum e-mail de ativação: a pessoa entra com a palavra-passe que já tem ou usa **Reset password**.

A plataforma mais recente do Little Hotelier descreve o mesmo processo em **User management** ([artigo do help-platform](https://help-platform.littlehotelier.com/en/articles/10700088-create-and-manage-little-hotelier-users)). Use o artigo que corresponde aos ecrãs / telas que vê.

### Que permissões dar

- **Admin**: todas as permissões.
- **General**: só o que marcar. No **Front Desk**: Calendar, Reservations, Inventory, Guests, Reports, Housekeeping e Setup. No **Channel Manager**: Config, Inventory, Reservations e Payments.

Um rececionista precisa normalmente do Front Desk com Calendar, Reservations e Guests. Dê **Manage users** ao menor número possível de pessoas.

::screenshot{src="/images/config/permissions.webp" alt="Página de edição de utilizador do Little Hotelier em espanhol para um utilizador chamado Bot Facturas 2: permissão de gestão de utilizadores por marcar, Channel Manager e Insights desligados, Direct Booking ligado como General, e Front Desk ligado como General só com Calendar e Reservations marcados" caption="Um utilizador General só com Calendar e Reservations do Front Desk: a configuração restrita de uma conexão simples." width="1639" height="1742"}
::

### Alterar, desativar ou remover um utilizador

- **Edite as permissões** quando quiser a partir da lista de utilizadores.
- **Desativar** é a forma recomendada de cortar o acesso: pode reativá-lo mais tarde. **Apagar** é definitivo.
- **O e-mail não pode ser editado.** Crie um novo utilizador com o endereço certo e depois apague o antigo.
- Um utilizador fica bloqueado após 6 ou mais tentativas de acesso falhadas e desbloqueia-se com **Forgot password**.

## Autenticação de dois fatores (MFA) e passkeys

O Little Hotelier torna a MFA obrigatória nos 30 dias seguintes ao primeiro acesso de um utilizador ([Set up MFA](https://helpcentre.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)). Cada utilizador escolhe um método:

- a **app móvel do Little Hotelier** (recomendada): confirma um número correspondente com o rosto ou a impressão digital;
- uma **app de autenticação** como o Google Authenticator, o Microsoft Authenticator ou o Authy (um código de 6 dígitos);
- uma **extensão de autenticação para o navegador** no Chrome, no Edge ou no Firefox.

Os códigos por telefone, SMS e e-mail não são suportados. Um utilizador com **Manage users** pode repor a MFA de outro utilizador ([como fazer](https://helpcentre.littlehotelier.com/en/articles/13364672-how-to-reset-mfa-for-another-user)), e esse utilizador define depois um novo método no próximo acesso.

A página de início de sessão, gerida pela SiteMinder, também pode oferecer **Continue with a passkey** a um utilizador que tenha criado uma. Em novembro de 2026, o centro de ajuda do Little Hotelier não documenta as passkeys, por isso trate-as como opcionais e mantenha a MFA configurada.

Há uma consequência que importa para as ferramentas: **um utilizador com MFA pede um código ao iniciar sessão.** Uma ferramenta que só guarda uma palavra-passe fica parada nesse pedido, porque não está ninguém para responder.

## Por que razão uma ferramenta deve ter o seu próprio utilizador

Muitas integrações pedem "o seu e-mail e a sua palavra-passe do Little Hotelier". Partilhar o login do proprietário tem custos reais:

- **A palavra-passe expira** mais ou menos de três em três meses, e a ferramenta para até alguém escrever a nova.
- **O registo não vos distingue.** As alterações feitas pela ferramenta parecem suas.
- **As sessões chocam.** O mesmo utilizador com sessão iniciada duas vezes pode terminar uma das sessões.
- **Quando essa pessoa sai**, a conexão vai com ela.
- **A MFA no seu próprio login** é um pedido a que a ferramenta não consegue responder.

Um utilizador dedicado à ferramenta resolve tudo isto: endereço próprio, permissões próprias, segundo fator próprio, e pode desativá-lo sem mexer em mais ninguém.

## A forma mais rápida: a conta Advanced do Hotelier Tools

O Hotelier Tools oferece duas conexões em **Credentials** (`/credentials`):

| | **Simple** (`/credentials/hotelier-simple`) | **Advanced** (`/credentials/hotelier-advanced`) |
|---|---|---|
| Login | O seu próprio e-mail e palavra-passe do Little Hotelier | Um novo utilizador do Little Hotelier, só para o Hotelier Tools |
| Palavra-passe | Expira mais ou menos de 3 em 3 meses; você cola a nova | Forte, aleatória, definida pelo Hotelier Tools; ninguém tem de a decorar |
| Dois fatores | Não suportado: um pedido de código para-a | Guarda o seu próprio segredo de autenticação e pode guardar uma passkey |
| Permissões | Front Desk (Calendar, Reservations) e Direct Booking | Todas as permissões: todas as funcionalidades funcionam |

A página Simple começa de propósito pelos seus limites: os preços e o inventário não podem ser escritos, e uma palavra-passe expirada para as automatizações em silêncio dias depois.

::screenshot{src="/images/blog/demo/en/lh-simple-account-limits.webp" alt="Página da conta Simple com Before you use this: the limits, que lista uma palavra-passe que expira mais ou menos de 3 em 3 meses, sem suporte de dois fatores, permissões limitadas com o que funciona e o que está restringido ou desligado, e um login pessoal partilhado com um robô, mais um botão Use the Advanced way" caption="A conta Simple é rápida, mas os seus limites param as automatizações semanas depois. Leia-os antes de a escolher." path="/credentials/hotelier-simple"}
::

### Configurar a conta Advanced (o que faz hoje)

1. Abra **Credentials > Advanced** (`/credentials/hotelier-advanced`). Em **Use an alias of your own email**, copie o **Suggested address for the new user**, por exemplo `voce+hoteliertools@oseuhotel.com`. O Little Hotelier precisa de um endereço novo; com a maioria dos fornecedores (Gmail, Outlook / Microsoft 365, iCloud, Fastmail), uma etiqueta com sinal de mais chega à sua própria caixa de correio.
2. No Little Hotelier, adicione um utilizador com esse endereço e **todas as permissões ativas**, com os passos acima.
3. Abra o e-mail de convite e **não clique no botão**. Clique com o botão direito e escolha **Copiar endereço do link** (no telemóvel: mantenha o dedo pressionado e **Copiar link**). O token de ativação só funciona uma vez: abri-lo gasta-o na própria página de palavra-passe do Little Hotelier.
4. De volta à página Advanced, escolha **Use an activation link**, cole-o em **Activation link** e guarde.
5. O Hotelier Tools ativa o utilizador: define uma palavra-passe forte e aleatória, guarda-a encriptada e inicia sessão uma vez para confirmar.

Já criou o utilizador e sabe a palavra-passe? Escolha antes **Enter the credentials** e adicione o seu segredo de autenticação (OTP) ou uma passkey.

::screenshot{src="/images/blog/demo/en/lh-advanced-user-invite.webp" alt="Página da conta Advanced: Use an alias of your own email com o endereço sugerido demo+hoteliertools@hotelier.tools e um botão Copy, e depois The invite email: copy the link, do not open it, com um aviso para não clicar no botão do e-mail e três passos que terminam no campo Activation link" caption="Crie o utilizador com o seu próprio e-mail mais uma etiqueta e cole o link do convite em vez de o abrir." path="/credentials/hotelier-advanced"}
::

Pode dar menos permissões a este utilizador, mas o Hotelier Tools diz claramente que algumas funcionalidades vão falhar e que essa configuração não é suportada. Escrever preços, por exemplo, precisa da função Rates & Inventory.

### MFA e passkeys no utilizador Advanced

- **Quando o Little Hotelier começar a exigir MFA**, o Hotelier Tools regista sozinho um autenticador no utilizador Advanced, guarda o segredo encriptado e passa a responder ao código. Nunca faz isto no seu login Simple, porque um segredo que só a app tem deixá-lo-ia fora da sua própria conta. Se for preciso fazê-lo à mão, o painel da conta tem **Set up two-step verification**.
- **Uma passkey guardada no servidor (beta).** **Passkeys and two-step verification** (`/credentials/passkeys`) pode adicionar uma passkey ao utilizador Advanced (**Add passkey** e depois **Test passkey**). Os inícios de sessão agendados tentam-na primeiro: funciona mesmo quando a palavra-passe expirou e salta o passo do código. O proprietário pode usar **Download passkey** para guardar uma cópia. Adicioná-la ou testá-la é um início de sessão no Little Hotelier.

### Para o remover

Desative ou apague o utilizador no Little Hotelier. O acesso do Hotelier Tools termina com ele, e o seu próprio login fica intacto.

## Brevemente: o Hotelier Tools como utilizador, por convite

A página Advanced também tem um cartão **Hotelier Tools as a user in Little Hotelier**. A ideia: o Hotelier Tools dá à sua propriedade um endereço de login privado no seu próprio domínio (`lh-…@in.hotelier.tools`). Você convida esse endereço no Little Hotelier com as permissões que escolher, e o Hotelier Tools aceita o convite, define a palavra-passe e a verificação em dois passos e mantém a sessão. Nada é partilhado com outros hotéis, e o domínio nunca passa a ser o seu login principal nem o seu e-mail de recuperação ([como funcionam estes endereços](/blog/hotel-email-address)).

Eis o ponto exato em que está, a 5 de novembro de 2026:

- **Feito:** o endereço (**Get the login address**, depois de introduzir o número da sua propriedade no Little Hotelier), os estados do login (**Waiting for the invitation**, **Active**, **Paused**, **Retired**), **Retire this login** e as regras de segurança. Os alertas de segurança são reencaminhados para o proprietário e nunca são clicados.
- **Ainda por fazer:** ler e aceitar o convite do Little Hotelier. Ainda não foi capturado nenhum convite real, por isso **todas as mensagens para o endereço de login ficam retidas para uma pessoa**, e nada nelas é aberto. O próprio cartão diz isso.
- **O que hoje faz uma pessoa:** usar os passos do link de ativação acima.

## Os seus colegas: contas de equipa do Hotelier Tools

Os membros da equipa não precisam do utilizador de integração. Em **Settings > Team & roles** (`/settings/team`), carregue em **Invite someone**, introduza o e-mail e escolha uma função: **Administrator**, **Manager**, **Front desk**, **Revenue manager**, **Accountant**, **Read-only** ou uma função personalizada. A pessoa aceita a partir do link do e-mail (válido durante 7 dias) e entra com o seu próprio login do Hotelier Tools.

Estes são logins do Hotelier Tools, não utilizadores do Little Hotelier. O Hotelier Tools trabalha no Little Hotelier através da única conexão da propriedade, e ninguém da equipa vê a palavra-passe dela; só o proprietário pode. As alterações que um colega faz aparecem no Little Hotelier como feitas pelo utilizador conectado, enquanto o Hotelier Tools regista quem as fez realmente. Quem trabalha diretamente na extranet do Little Hotelier continua a precisar do seu próprio utilizador do Little Hotelier.

::screenshot{src="/images/blog/demo/en/team-hotelier-tools-logins.webp" alt="Definições de equipa com os botões Roles e Invite someone, uma caixa a explicar que estes logins são só para o Hotelier Tools, não para o Little Hotelier, 1 lugar usado, e a tabela da equipa com Demo Manager como Owner, Active" caption="Cada colega recebe o seu próprio login e função no Hotelier Tools; a palavra-passe do Little Hotelier fica com o proprietário." path="/settings/team"}
::

::demo-cta{path="/credentials/hotelier-advanced"}
::

O dashboard é gratuito para todos os hotéis até 10 de janeiro de 2027, quando começa a cobrança.

::callout{type="info" title="Ferramenta independente"}
O Hotelier Tools não é afiliado à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Conecta-se com um utilizador do Little Hotelier que o seu hotel cria, controla e pode desativar a qualquer momento.
::

Veja também: [a API do Little Hotelier](/blog/little-hotelier-api), [conectar o Claude ao Little Hotelier](/blog/connect-claude-to-little-hotelier), [um endereço de e-mail do hotel para logins e faturas](/blog/hotel-email-address).

## Resumo

- No Little Hotelier: nome da propriedade > **Manage users** > **Add user**, num dispositivo de confiança; o e-mail de ativação dura 24 horas.
- **Admin** tem tudo; **General** só tem as permissões que marcar por app.
- A MFA é obrigatória ao fim de 30 dias; os códigos por SMS e e-mail não são suportados.
- Dê às ferramentas o seu próprio utilizador, não a sua palavra-passe. No Hotelier Tools, essa é a conta **Advanced**: cole o link do convite e ela define sozinha a palavra-passe e a verificação em dois passos.
- O convite para um endereço privado `lh-…` está a caminho; hoje essas mensagens ficam retidas para uma pessoa.
- Os colegas recebem logins de equipa do Hotelier Tools com funções, não a sua palavra-passe do Little Hotelier.
