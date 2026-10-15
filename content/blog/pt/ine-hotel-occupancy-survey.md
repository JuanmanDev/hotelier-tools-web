---
title: "Inquérito de ocupação hoteleira do INE em Espanha: como preencher com o Little Hotelier"
seoTitle: "Inquérito INE de ocupação hoteleira com o Little Hotelier"
description: "Inquérito do INE: obrigatório se o seu hotel for selecionado, com multas até 30.050 €. O que pede, o IRIA e como preenchê-lo com o Little Hotelier."
date: 2026-10-03
category: compliance
tags: [ine, spain, compliance, reports, little hotelier]
keywords: [inquérito ocupação hoteleira ine espanha, encuesta ocupación hotelera ine, encuesta ine hoteles, iria ine encuesta, encuesta ine obligatoria multa, ine hotel little hotelier]
feature: ine-reports
demoPath: /reports/guest-origins
cover: /images/blog/demo/en/ine-guest-origins-report.webp
coverAlt: "Guest Origin Statistics (INE HOT survey) no Hotelier Tools, de 27 de setembro a 3 de outubro de 2026: 8 chegadas, 24 dormidas, 3,4 hóspedes por dia e 3 com dados em falta, acima dos separadores Daily summary, By guest origin, Rooms, ADR by client e Data quality"
faq:
  - q: "O inquérito do INE é obrigatório para uma pensão ou B&B pequeno?"
    a: "Sim, se o INE tiver selecionado o seu estabelecimento. O inquérito abrange todos os estabelecimentos de tipo hoteleiro em Espanha, incluindo hostales e pensiones, e o questionário do INE indica que responder é obrigatório por força da lei estatística espanhola. Se recebeu uma carta ou um e-mail do INE com um número de ordem e uma palavra-passe / senha, tem de responder."
  - q: "Qual é a multa por não responder ao inquérito do INE?"
    a: "O questionário do INE cita a lei estatística: de 60,10 € a 300,51 € nas infrações leves, de 300,52 € a 3.005,06 € nas graves e de 3.005,07 € a 30.050,61 € nas muito graves, como o envio de dados falsos. Uma resposta tardia ou em falta é leve, a não ser que prejudique gravemente a estatística."
  - q: "O inquérito do INE pede os números de passaporte ou DNI dos hóspedes?"
    a: "Não. O INE pede totais: quantos hóspedes chegaram e quantas noites ficaram, agrupados por país de residência ou região espanhola, além de quartos, tarifas e pessoal. Não se enviam números de documento, nomes nem endereços. Os dados de identidade dos hóspedes vão para o SES.Hospedajes, que é outra obrigação, independente."
  - q: "O inquérito do INE usa a nacionalidade do hóspede ou o local onde vive?"
    a: "O local onde vive. O INE classifica os viajantes por local de residência: os residentes em Espanha por região e os restantes por país. Um cidadão alemão que vive em Valência conta como residente em Valência, por isso confirme que o país e a província do endereço do hóspede estão preenchidos."
  - q: "Posso usar isto para apartamentos turísticos ou casas rurais?"
    a: "Apartamentos, parques de campismo / campings, casas rurais e albergues respondem aos seus próprios questionários do INE. O Hotelier Tools gera o inquérito hoteleiro (HOT), para estabelecimentos de tipo hoteleiro como hotéis, hostales e pensiones."
  - q: "O Hotelier Tools é um produto oficial do INE ou do Little Hotelier?"
    a: "Não. O Hotelier Tools é independente: não é afiliado ao INE, à SiteMinder nem ao Little Hotelier, nem tem o aval deles. Lê as suas reservas com o seu próprio login do Little Hotelier e envia o relatório através do sistema IRIA do INE, com o acesso IRIA do seu próprio estabelecimento."
---

Este guia é para proprietários que falam português e têm um alojamento em Espanha. Se o INE (Instituto Nacional de Estadística, o instituto de estatística espanhol) selecionou o seu hotel ou hostal para o inquérito / pesquisa de ocupação, responder é obrigatório. O formulário do próprio INE cita multas de 60,10 € a 30.050,61 €. Responde-se no portal web **IRIA** do INE ou enviando um ficheiro XML. Em qualquer caso, você comunica chegadas e dormidas / pernoites por local de residência dos hóspedes, quartos ocupados, tarifas médias por tipo de cliente e pessoal.

O Little Hotelier guarda a maior parte desses dados. Este guia mostra o que o INE pede, como recolher os dados no Little Hotelier e como o Hotelier Tools gera, valida e envia o relatório por você.

::callout{type="info" title="Última verificação: outubro de 2026"}
Os dados abaixo vêm da [metodologia do inquérito hoteleiro de 2025](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf) do INE e do seu [questionário hoteleiro](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf). A carta ou o e-mail do INE que recebeu prevalece sempre quanto a datas e prazos.
::

## O que é o inquérito de ocupação hoteleira do INE?

O nome oficial é **Encuesta de Ocupación en Alojamientos Turísticos** (inquérito de ocupação em alojamentos turísticos). A parte hoteleira é a **Encuesta de Ocupación Hotelera (EOH)**. O INE usa-a para publicar todos os meses números sobre viajantes, dormidas, ocupação e emprego hoteleiro em Espanha, em cada região e nas principais zonas turísticas.

Abrange todos os *establecimientos hoteleros*: hotel, apartotel, motel, **hostal**, **pensión**, fonda e casa de huéspedes. Os apartamentos turísticos, parques de campismo, casas rurais e *albergues* (hostels) têm questionários próprios na mesma família ([INE: estatísticas de hotelaria e turismo](https://www.ine.es/dyngs/INEbase/es/categoria.htm?c=Estadistica_P&cid=1254735576863)).

### Quem tem de responder?

Nem todos os hotéis. O INE extrai uma amostra aleatória por província, categoria e dimensão. Os hotéis de cinco estrelas e os maiores de cada grupo são sempre incluídos. Um hotel selecionado costuma ficar na amostra durante quatro anos, com cerca de um quarto da amostra renovado ([metodologia, ponto 6](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

Se for selecionado, o INE escreve-lhe com um **número de ordem** (*número de orden*, muitas vezes indicado como "NOrden") e uma palavra-passe para o seu portal. Essa mensagem é o sinal de que o inquérito passa a aplicar-se ao seu hotel.

## O inquérito do INE é obrigatório? Qual é a multa?

Sim, a partir do momento em que é selecionado. O questionário traz a menção *"Estadística de cumplimentación obligatoria"*. A lei estatística espanhola (Ley 12/1989, LFEP) diz que os inquiridos devem responder "com veracidade, exatidão, de forma completa e dentro do prazo" (artigo 10.2). As leis 4/1990 e 13/1996 tornam este inquérito obrigatório.

Multas indicadas no formulário do INE (artigo 51 da LFEP):

| Infração | Exemplo na lei | Multa |
|---|---|---|
| Leve (*leve*) | Dados tardios, em falta ou incompletos, sem prejuízo grave | 60,10 € a 300,51 € |
| Grave (*grave*) | O mesmo, causando prejuízo grave à estatística | 300,52 € a 3.005,06 € |
| Muito grave (*muy grave*) | Dados falsos ou recusa repetida | 3.005,07 € a 30.050,61 € |

Os exemplos vêm do artigo 50 da [Ley 12/1989 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-1989-10767). As suas respostas estão protegidas pelo segredo estatístico (artigo 13 da LFEP). O INE diz que não cede dados individuais a outras administrações, exceto serviços estatísticos sujeitos ao mesmo segredo ([informação do INE para inquiridos](https://www.ine.es/dyngs/COL/index.htm?cid=441)).

## Que dados pede o inquérito do INE?

| O que o INE pede (termo em espanhol) | O que comunica | Onde encontra |
|---|---|---|
| *Viajeros entrados* | Hóspedes que chegam, por local de residência | Reservas e endereços dos hóspedes |
| *Pernoctaciones* | Noites de estadia (dormidas), por local de residência | Datas da estadia e número de hóspedes |
| *Habitaciones ocupadas* | Quartos ocupados (uso duplo ou individual) | Atribuição de quartos |
| *Camas supletorias* | Camas extra e berços usados | Os seus próprios registos |
| *Personal ocupado* | Pessoal nesse mês: não remunerado, remunerado fixo, remunerado temporário | Folha de salários / de pagamento, não o Little Hotelier |
| *ADR por tipo de cliente* | Tarifa média diária e percentagem de quartos por tipo de cliente | Tarifas e canal da reserva |

Há três detalhes em que muita gente se engana:

- **Residência, não nacionalidade.** O INE agrupa os hóspedes pelo local onde vivem: residentes em Espanha por região (o ficheiro XML usa a província), todos os outros por país. Um cidadão francês que vive em Málaga conta como Málaga.
- **O ADR tem regras estritas.** O INE quer a tarifa de um quarto duplo, apenas alojamento (sem pequeno-almoço / café da manhã nem pensão), bruta de comissões e sem IVA. Divide-a por nove tipos de cliente: operador turístico tradicional, agência de viagens tradicional, empresas, particulares, grupos, reserva direta no seu site, operador turístico online, agência de viagens online e outros.
- **Os berços são camas extra.** O INE conta os berços como *camas supletorias*. Declare-os, ou as noites que comunicar podem exceder as suas camas.

O inquérito não pede números de passaporte nem de DNI. São dados agregados, não um registo de hóspedes. O registo de hóspedes na polícia é outra obrigação: veja [SES Hospedajes com o Little Hotelier](/blog/ses-hospedajes-little-hotelier).

## Que datas abrange e quando é o prazo?

A metodologia do INE de 2025 diz que o questionário básico abrange **sete dias consecutivos de cada mês, escolhidos ao acaso**, para que todos os hotéis juntos cubram o mês inteiro. Os hotéis de três, quatro e cinco estrelas também têm de enviar totais do mês completo. Um ficheiro XML inclui todos os dias do mês de referência ([metodologia, pontos 7 e 8](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

O questionário complementar (pessoal e ADR) deve ser entregue em **cinco dias de calendário após o fim do mês** a que os dados dizem respeito, segundo o [formulário do INE](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf).

Na prática, use exatamente as datas e o prazo indicados no pedido do INE ao seu estabelecimento.

## Como se envia: formulário web IRIA ou ficheiro XML?

1. **Formulário web IRIA.** O IRIA é o portal de recolha de dados online do INE ([iria.ine.es](https://iria.ine.es/iriaPortal/contents/index.jsf)). Insira o número de ordem e a palavra-passe da mensagem do INE e depois escreva os valores num formulário que reproduz o questionário em papel. Ao enviar, o IRIA emite um certificado com um número único ([ajuda do IRIA](https://iria.ine.es/iriaPortal/contents/static/varios/ayuda.jsf)). Guarde-o.
2. **Ficheiro XML.** Um software de gestão pode gerar um ficheiro no formato publicado pelo INE e enviá-lo, sem ninguém voltar a digitar os valores. O [questionário mensal](https://www.ine.es/daco/daco42/ocuphotel/eohm_13.pdf) do INE também remete para o seu sistema ARCE para envios XML.

Fazê-lo à mão significa percorrer todas as reservas do período e contar hóspedes e noites por país e por província espanhola. É aí que se perde tempo e que surgem os erros.

## Como ter o país e a província certos no Little Hotelier

A ficha do hóspede no Little Hotelier já tem os campos de que o INE precisa: **Country** e **Province/Region** no endereço, além de **Nationality**. O problema é que as reservas do Booking.com e de outros canais chegam muitas vezes sem endereço, e os campos ficam vazios.

Três hábitos resolvem a maior parte:

1. Preencha o país e a província no check-in, a partir do documento de identificação do hóspede ou com uma pergunta rápida.
2. Instale o userscript gratuito [Easy Save Province and Country](/tools/ui/easy-save-province-country). Ao clicar no campo da província, mostra uma lista das províncias de Espanha, e ao escolher uma, o país muda para Espanha.
3. Deixe as [verificações automáticas](/tools/bot/automated-checks) sinalizar as reservas sem país ou província depois da reserva, à chegada e no check-out, enquanto o hóspede ainda está no hotel e pode responder.

::screenshot{src="/images/scripts/easy-save-province-country/to.webp" alt="Separador do hóspede no Little Hotelier com a lista de províncias espanholas do Easy Save Province and Country aberta por baixo do campo Province/Region" caption="O userscript gratuito transforma o campo da província numa lista de escolha e define o país por você."}
::

## A forma mais rápida: o relatório do INE direto do Little Hotelier

Em outubro de 2026, o centro de ajuda do Little Hotelier não mostrava nenhuma exportação do inquérito do INE. O Hotelier Tools preenche essa lacuna: lê as suas reservas com o seu próprio login do Little Hotelier, gera os valores do INE, valida-os e envia o XML pelo IRIA. A funcionalidade de relatórios do INE está marcada como estável.

### 1. Configure o seu estabelecimento uma única vez

Abra **INE Setup** (`/ine-setup`). Insira o seu número de ordem do IRIA (**NOrden**) e a palavra-passe, clique em **Test IRIA connection**, preencha o endereço e a capacidade do estabelecimento e escolha o tipo e a categoria. Estes dados vão para o cabeçalho do XML. A palavra-passe fica guardada encriptada e nunca é mostrada em texto simples.

::screenshot{src="/images/blog/demo/en/ine-establishment-setup.webp" alt="Página INE setup, Establishment, no Hotelier Tools: um aviso de demonstração só de leitura, o cartão de acesso IRIA com o campo NOrden, a palavra-passe IRIA mascarada e guardada encriptada e um botão Test IRIA connection, e depois os dados do estabelecimento com nome comercial e endereço" caption="Insira uma só vez o seu acesso IRIA e os dados do estabelecimento." path="/ine-setup"}
::

### 2. Gere o relatório para as datas que o INE pede

Abra **Guest Origins** (`/reports/guest-origins`), escolha as datas do pedido do INE e clique em **Generate report**. O Hotelier Tools lê essas reservas e conta as chegadas e dormidas de cada dia por região espanhola ou país, além de quartos ocupados, camas extra e tarifa média por tipo de cliente. Os separadores / abas dividem o resultado em **Daily summary**, **By guest origin**, **Rooms**, **ADR by client** e **Data quality**.

Se a caixa de correio que recebe os e-mails do INE estiver conectada à caixa de entrada do Hotelier Tools, o e-mail do INE mostra um cartão com um botão que gera o relatório exatamente para as datas pedidas. A palavra-passe IRIA de uso único continua no e-mail.

::screenshot{src="/images/blog/demo/en/ine-guest-origins-by-origin.webp" alt="Separador By guest origin do relatório Guest Origins: chegadas e estadias de cada noite de 27/9 a 3/10, agrupadas em Other countries (Irlanda, Países Baixos, Reino Unido) e Missing/Unknown para hóspedes sem província espanhola, acima do início do cartão de envio ao INE" caption="Chegadas e estadias de cada noite por origem do hóspede, com os hóspedes sem província listados à parte para que os possa corrigir." path="/reports/guest-origins"}
::

### 3. Corrija os hóspedes sem origem

As reservas sem nacionalidade ou província ficam sinalizadas. Corrija-as no Little Hotelier e depois atualize só essas linhas. Não precisa de refazer o relatório todo.

### 4. Valide, pré-visualize e envie

Clique em **Validate for the INE**, depois em **Preview XML** para ver exatamente o que vai ser enviado, e por fim em **Send to the INE**. O relatório segue para o IRIA e o comprovativo do INE (*justificante*) fica guardado junto com ele.

### 5. Guarde todos os comprovativos

**Saved Reports** (`/reports/list`) lista todos os relatórios com o período, o estado e o comprovativo do INE. Um relatório enviado já não pode ser alterado nem apagado, e pode continuar a descarregar / baixar o seu XML.

::screenshot{src="/images/blog/demo/en/ine-saved-reports.webp" alt="Página Saved reports no Hotelier Tools com três relatórios de origem de hóspedes em estado Draft, com as colunas Period, Status, INE receipt, Staff e Created, ações View e apagar e um botão New report" caption="Cada relatório com o seu período, o estado e, depois de enviado, o comprovativo do INE." path="/reports/list"}
::

::callout{type="note" title="Experimentar na demo"}
A demo pública tem um hotel fictício com um relatório do INE guardado. O envio ao INE está desativado, por isso nada chega ao INE, e nunca deve escrever credenciais IRIA reais na demo.
::

::demo-cta{path="/reports/guest-origins"}
::

### Por que motivo o IRIA rejeita um questionário?

Os programadores / desenvolvedores de um PMS hoteleiro de código aberto que corrigiram rejeições recorrentes listaram estas causas ([commitsun/pms, pull request 233](https://github.com/commitsun/pms/pull/233)):

- o questionário hoteleiro enviado para um alojamento inscrito como apartamentos
- um intervalo de datas que atravessa dois meses, o que repete números de dia no ficheiro
- berços ou camas extra por declarar, por isso as dormidas excedem as camas declaradas
- um hóspede de um país sem código ISO padrão, o que deixa o país vazio

Execute a validação antes de cada envio e mantenha o tipo e a categoria do INE na configuração iguais aos que constam no INE.

## Resumo

- O inquérito do INE é obrigatório a partir do momento em que o INE seleciona o seu estabelecimento, e as multas chegam a 30.050,61 € por dados falsos.
- Pede totais por residência dos hóspedes (não nacionalidade), quartos, camas extra, ADR por tipo de cliente e pessoal. Sem números de documento.
- Envie-o no IRIA à mão ou como ficheiro XML a partir de um software.
- Mantenha o país e a província preenchidos no Little Hotelier, com o [userscript de províncias](/tools/ui/easy-save-province-country) gratuito e as [verificações automáticas](/tools/bot/automated-checks).
- Os [relatórios INE do Hotelier Tools](/tools/bot/ine-reports) geram, validam e enviam o relatório pelo IRIA e guardam os comprovativos. É gratuito para todos os hotéis até 10 de janeiro de 2027. O Hotelier Tools é independente: não é afiliado à SiteMinder, ao Little Hotelier nem ao INE, nem tem o aval deles.

Para o registo policial de hóspedes e as regras de outros países, leia [regras de registo de hóspedes por país](/blog/guest-registration-rules-by-country).
