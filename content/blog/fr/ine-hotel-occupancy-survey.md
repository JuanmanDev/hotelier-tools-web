---
title: "Enquête INE d'occupation hôtelière (Espagne) : comment la remplir depuis Little Hotelier"
seoTitle: "Enquête INE hôtelière (Espagne) avec Little Hotelier"
description: "Enquête INE d'occupation hôtelière : obligatoire si l'INE vous sélectionne, amendes jusqu'à 30 050 €. Contenu, IRIA et remplissage depuis Little Hotelier."
date: 2026-10-03
category: compliance
tags: [ine, spain, compliance, reports, little hotelier]
keywords: [enquête INE hôtel Espagne, enquête occupation hôtelière INE, encuesta ocupación hotelera ine, enquête fréquentation hôtelière Espagne, iria ine encuesta, encuesta ine obligatoria multa]
feature: ine-reports
demoPath: /reports/guest-origins
cover: /images/blog/demo/en/ine-guest-origins-report.webp
coverAlt: "Guest Origin Statistics (enquête INE HOT) dans Hotelier Tools pour la période du 27 septembre au 3 octobre 2026 : 8 arrivées, 24 nuitées, 3,4 clients par jour et 3 fiches avec données manquantes, au-dessus des onglets Daily summary, By guest origin, Rooms, ADR by client et Data quality"
faq:
  - q: "L'enquête d'occupation de l'INE est-elle obligatoire pour un petit hostal ou une chambre d'hôtes ?"
    a: "Oui, si l'INE a sélectionné votre établissement. L'enquête couvre tous les établissements de type hôtelier en Espagne, y compris les hostales et les pensiones, et le questionnaire de l'INE indique que la réponse est obligatoire en vertu de la loi espagnole sur la statistique. Si vous avez reçu un courrier ou un e-mail de l'INE avec un numéro d'ordre et un mot de passe, vous devez répondre."
  - q: "Quelle est l'amende en cas de non-réponse à l'enquête de l'INE ?"
    a: "Le questionnaire de l'INE cite la loi sur la statistique : de 60,10 € à 300,51 € pour les infractions légères, de 300,52 € à 3 005,06 € pour les graves et de 3 005,07 € à 30 050,61 € pour les très graves, comme l'envoi de données fausses. Une réponse tardive ou absente est une infraction légère, sauf si elle nuit gravement à la statistique."
  - q: "L'enquête de l'INE demande-t-elle les numéros de passeport ou de DNI de mes clients ?"
    a: "Non. L'INE demande des totaux : combien de clients sont arrivés et combien de nuits ils ont passées, regroupés par pays de résidence ou par région espagnole, plus les chambres, les tarifs et le personnel. Aucun numéro de pièce d'identité, nom ou adresse n'est envoyé. L'identité des clients est transmise à SES.Hospedajes, qui est une obligation distincte."
  - q: "L'enquête de l'INE utilise-t-elle la nationalité du client ou son lieu de résidence ?"
    a: "Son lieu de résidence. L'INE classe les voyageurs selon leur résidence : les résidents espagnols par région, tous les autres par pays. Un Allemand qui vit à Valence compte comme résident de Valence ; vérifiez donc que le pays et la province de l'adresse du client sont renseignés."
  - q: "Puis-je l'utiliser pour des appartements touristiques ou des maisons rurales ?"
    a: "Les appartements, campings, maisons rurales et albergues répondent à leurs propres questionnaires de l'INE. Hotelier Tools prépare l'enquête hôtelière (HOT) pour les établissements de type hôtelier : hôtels, hostales et pensiones."
  - q: "Hotelier Tools est-il un produit officiel de l'INE ou de Little Hotelier ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à l'INE, à SiteMinder ou à Little Hotelier, ni approuvé par eux. Il lit vos réservations avec vos propres identifiants Little Hotelier et transmet le rapport via le système IRIA de l'INE, avec les accès IRIA de votre établissement."
---

Si l'INE (l'Institut national de la statistique espagnol) a sélectionné votre hôtel ou votre hostal pour son enquête d'occupation, répondre est obligatoire. Le formulaire de l'INE cite des amendes de 60,10 € à 30 050,61 €. Vous répondez sur le portail web **IRIA** de l'INE ou en envoyant un fichier XML. Dans les deux cas, vous déclarez les arrivées et les nuitées selon le lieu de résidence des clients, les chambres occupées, les tarifs moyens par type de clientèle et le personnel.

Little Hotelier contient la plupart de ces chiffres. Ce guide, destiné aux propriétaires francophones qui exploitent un établissement en Espagne, explique ce que demande l'INE, comment récupérer les données dans Little Hotelier et comment Hotelier Tools prépare, contrôle et envoie le rapport à votre place. Les noms officiels espagnols sont conservés, avec une explication en français.

::callout{type="info" title="Dernière vérification : octobre 2026"}
Les informations ci-dessous proviennent de la [méthodologie 2025 de l'enquête hôtelière](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf) de l'INE et de son [questionnaire hôtelier](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf), tous deux en espagnol. Le courrier ou l'e-mail de l'INE reste la référence pour les dates et les délais.
::

## Qu'est-ce que l'enquête d'occupation hôtelière de l'INE ?

Son nom officiel est **Encuesta de Ocupación en Alojamientos Turísticos** (enquête d'occupation des hébergements touristiques). Le volet hôtelier s'appelle **Encuesta de Ocupación Hotelera (EOH)**. L'INE s'en sert pour publier chaque mois les chiffres des voyageurs, des nuitées, de l'occupation et de l'emploi hôtelier pour l'Espagne, chaque région et les principales zones touristiques. C'est l'équivalent espagnol de l'enquête de fréquentation hôtelière que l'INSEE mène en France.

Elle couvre tout *establecimiento hotelero* : hôtel, aparthôtel, motel, **hostal**, **pensión**, fonda et casa de huéspedes. Les appartements touristiques, campings, maisons rurales et *albergues* (auberges) ont leurs propres questionnaires dans la même famille d'enquêtes ([INE : statistiques d'hôtellerie et de tourisme](https://www.ine.es/dyngs/INEbase/es/categoria.htm?c=Estadistica_P&cid=1254735576863)).

### Qui doit y répondre ?

Pas tous les hôtels. L'INE tire un échantillon aléatoire par province, catégorie et taille. Les hôtels cinq étoiles et les plus grands établissements de chaque groupe sont toujours inclus. Un hôtel sélectionné reste normalement quatre ans dans l'échantillon, dont environ un quart est renouvelé ([méthodologie, section 6](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

Si vous êtes sélectionné, l'INE vous écrit avec un **numéro d'ordre** (*número de orden*, souvent affiché « NOrden ») et un mot de passe pour son portail. Ce message vous indique que l'enquête vous concerne désormais.

## L'enquête de l'INE est-elle obligatoire ? Quelle est l'amende ?

Oui, dès que vous êtes sélectionné. Le questionnaire porte la mention *« Estadística de cumplimentación obligatoria »*. La loi espagnole sur la statistique (Ley 12/1989, LFEP) impose aux répondants de répondre « de manière véridique, exacte, complète et dans les délais » (article 10.2). Les lois 4/1990 et 13/1996 rendent cette enquête obligatoire.

Amendes citées sur le formulaire de l'INE (article 51 LFEP) :

| Infraction | Exemple dans la loi | Amende |
|---|---|---|
| Légère (*leve*) | Données tardives, manquantes ou incomplètes, sans préjudice grave | 60,10 € à 300,51 € |
| Grave (*grave*) | Idem, avec un préjudice grave pour la statistique | 300,52 € à 3 005,06 € |
| Très grave (*muy grave*) | Données fausses ou refus répété | 3 005,07 € à 30 050,61 € |

Les exemples proviennent de l'article 50 de la [Ley 12/1989 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-1989-10767). Vos réponses sont protégées par le secret statistique (article 13 LFEP). L'INE indique qu'il ne transmet pas de données individuelles aux autres administrations, sauf aux offices statistiques soumis au même secret ([information de l'INE pour les répondants](https://www.ine.es/dyngs/COL/index.htm?cid=441)).

## Quelles données l'enquête de l'INE demande-t-elle ?

| Ce que demande l'INE (terme espagnol) | Ce que vous déclarez | Où le trouver |
|---|---|---|
| *Viajeros entrados* | Clients arrivés, par lieu de résidence | Réservations et adresses des clients |
| *Pernoctaciones* | Nuitées, par lieu de résidence | Dates de séjour et nombre de clients |
| *Habitaciones ocupadas* | Chambres occupées (usage double ou individuel) | Attributions de chambres |
| *Camas supletorias* | Lits d'appoint et lits bébé utilisés | Vos propres registres |
| *Personal ocupado* | Personnel du mois : non rémunéré, rémunéré fixe, rémunéré temporaire | Paie, pas Little Hotelier |
| *ADR por tipo de cliente* | Prix moyen par chambre et part des chambres par type de client | Tarifs et canal de réservation |

Trois points piègent souvent les établissements :

- **Résidence, pas nationalité.** L'INE regroupe les clients selon leur lieu de vie : les résidents espagnols par région (le fichier XML utilise la province), tous les autres par pays. Un Français qui vit à Málaga compte comme résident de Málaga.
- **L'ADR obéit à des règles strictes.** L'INE veut le prix d'une chambre double, chambre seule (sans petit-déjeuner ni pension), commissions incluses et hors TVA. Il le répartit en neuf types de clientèle : tour-opérateur traditionnel, agence de voyages traditionnelle, entreprises, particuliers, groupes, réservation directe sur votre site, tour-opérateur en ligne, agence de voyages en ligne et autres.
- **Les lits bébé comptent comme lits d'appoint.** L'INE compte les lits bébé comme *camas supletorias*. Déclarez-les, sinon les nuitées déclarées peuvent dépasser votre nombre de lits.

L'enquête ne demande aucun numéro de passeport ou de DNI. Ce sont des données agrégées, pas un registre des voyageurs. L'enregistrement des clients auprès de la police est une obligation distincte : voir [SES Hospedajes avec Little Hotelier](/blog/ses-hospedajes-little-hotelier).

## Quelles dates couvre-t-elle et quand faut-il répondre ?

La méthodologie 2025 de l'INE indique que le questionnaire de base couvre **sept jours consécutifs de chaque mois, tirés au hasard**, de sorte que l'ensemble des hôtels couvre tout le mois. Les hôtels trois, quatre et cinq étoiles doivent aussi fournir des totaux pour le mois entier. Un fichier XML contient chaque jour du mois de référence ([méthodologie, sections 7 et 8](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

Le questionnaire complémentaire (personnel et ADR) doit être rendu dans les **cinq jours calendaires suivant la fin du mois** concerné, selon le [formulaire de l'INE](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf).

En pratique, utilisez exactement les dates et le délai indiqués dans la demande de l'INE adressée à votre établissement.

## Comment l'envoyer : formulaire web IRIA ou fichier XML ?

1. **Formulaire web IRIA.** IRIA est le portail de collecte de données en ligne de l'INE ([iria.ine.es](https://iria.ine.es/iriaPortal/contents/index.jsf)). Saisissez le numéro d'ordre et le mot de passe du message de l'INE, puis tapez les chiffres dans un formulaire qui reprend le questionnaire papier. À l'envoi, IRIA délivre un justificatif avec un numéro unique ([aide IRIA](https://iria.ine.es/iriaPortal/contents/static/varios/ayuda.jsf)). Conservez-le.
2. **Fichier XML.** Un logiciel de gestion peut générer un fichier au format publié par l'INE et l'envoyer, sans ressaisie. Le [questionnaire mensuel](https://www.ine.es/daco/daco42/ocuphotel/eohm_13.pdf) de l'INE renvoie aussi à son système ARCE pour les envois XML.

La saisie manuelle oblige à reprendre chaque réservation de la période et à compter clients et nuitées par pays et par province espagnole. C'est là que le temps passe, et que les erreurs s'invitent.

## Comment bien renseigner le pays et la province des clients dans Little Hotelier

La fiche client de Little Hotelier contient déjà les champs dont l'INE a besoin : **Country** et **Province/Region** dans l'adresse, plus **Nationality**. Le problème, c'est que les réservations de Booking.com et d'autres canaux arrivent souvent sans adresse, et que ces champs restent vides.

Trois habitudes règlent l'essentiel :

1. Renseignez le pays et la province à l'arrivée, d'après la pièce d'identité du client ou une question rapide.
2. Installez le userscript gratuit [Easy Save Province and Country](/tools/ui/easy-save-province-country). Quand vous cliquez sur le champ de la province, il affiche la liste des provinces espagnoles, et en choisir une renseigne automatiquement le pays (Espagne).
3. Laissez les [contrôles automatiques](/tools/bot/automated-checks) signaler les réservations sans pays ni province après la réservation, à l'arrivée et au départ, quand le client est encore là pour répondre.

::screenshot{src="/images/scripts/easy-save-province-country/to.png" alt="Onglet client de Little Hotelier avec la liste des provinces espagnoles d'Easy Save Province and Country ouverte sous le champ Province/Region" caption="Le userscript gratuit transforme le champ de la province en liste de choix et renseigne le pays à votre place."}
::

## La méthode rapide : le rapport INE directement depuis Little Hotelier

En octobre 2026, nous n'avons trouvé aucun export pour l'enquête de l'INE dans le centre d'aide de Little Hotelier. Hotelier Tools comble ce manque : il lit vos réservations avec vos propres identifiants Little Hotelier, calcule les chiffres de l'INE, les valide et envoie le XML via IRIA. La fonctionnalité de rapports INE est marquée comme stable.

### 1. Configurez votre établissement une seule fois

Ouvrez **INE Setup** (`/ine-setup`). Saisissez votre numéro d'ordre IRIA (**NOrden**) et votre mot de passe, cliquez sur **Test IRIA connection**, renseignez l'adresse et la capacité de l'établissement, puis choisissez le type et la catégorie. Ces données alimentent l'en-tête du XML. Le mot de passe est stocké chiffré et jamais affiché en clair.

::screenshot{src="/images/blog/demo/en/ine-establishment-setup.webp" alt="Page INE setup, Establishment dans Hotelier Tools : avis de démo en lecture seule, carte d'accès IRIA avec le champ NOrden, mot de passe IRIA masqué et stocké chiffré, bouton Test IRIA connection, puis les informations de l'établissement avec raison sociale et adresse" caption="Saisissez une seule fois vos accès IRIA et les informations de l'établissement." path="/ine-setup"}
::

### 2. Générez le rapport pour les dates demandées par l'INE

Ouvrez **Guest Origins** (`/reports/guest-origins`), choisissez les dates de la demande de l'INE et cliquez sur **Generate report**. Hotelier Tools lit ces réservations et compte les arrivées et nuitées de chaque jour par région espagnole ou par pays, ainsi que les chambres occupées, les lits d'appoint et le tarif moyen par type de client. Des onglets répartissent le résultat en **Daily summary**, **By guest origin**, **Rooms**, **ADR by client** et **Data quality**.

Si la boîte mail qui reçoit les e-mails de l'INE est connectée à la messagerie Hotelier Tools, l'e-mail de l'INE affiche une carte avec un bouton qui génère le rapport pour exactement les dates demandées. Le mot de passe IRIA à usage unique reste dans l'e-mail.

::screenshot{src="/images/blog/demo/en/ine-guest-origins-by-origin.webp" alt="Onglet By guest origin du rapport Guest Origins : arrivées et séjours de chaque nuit du 27/9 au 3/10, regroupés sous Other countries (Irlanda, Países Bajos, Reino Unido) et Missing/Unknown pour les clients sans province espagnole, au-dessus du début de la carte d'envoi à l'INE" caption="Arrivées et séjours de chaque nuit par origine des clients, les clients sans province étant listés à part pour que vous puissiez les corriger." path="/reports/guest-origins"}
::

### 3. Corrigez les clients sans origine

Les réservations sans nationalité ni province sont signalées. Corrigez-les dans Little Hotelier, puis actualisez uniquement ces lignes. Inutile de refaire tout le rapport.

### 4. Validez, prévisualisez et envoyez

Cliquez sur **Validate for the INE**, puis sur **Preview XML** pour voir exactement ce qui sera envoyé, puis sur **Send to the INE**. Le rapport part vers IRIA et le justificatif de l'INE (*justificante*) est conservé avec lui.

### 5. Gardez chaque justificatif

**Saved Reports** (`/reports/list`) liste tous les rapports avec leur période, leur statut et le justificatif de l'INE. Un rapport envoyé ne peut plus être modifié ni supprimé, et vous pouvez toujours télécharger son XML.

::screenshot{src="/images/blog/demo/en/ine-saved-reports.webp" alt="Page Saved reports dans Hotelier Tools listant trois rapports d'origine des clients au statut Draft, avec les colonnes Period, Status, INE receipt, Staff et Created, les actions View et supprimer, et un bouton New report" caption="Chaque rapport avec sa période, son statut et, une fois envoyé, le justificatif de l'INE." path="/reports/list"}
::

::callout{type="note" title="Essayer dans la démo"}
La démo publique contient un hôtel fictif avec un rapport INE enregistré. L'envoi à l'INE y est désactivé, donc rien n'arrive à l'INE, et vous ne devez jamais y saisir de vrais identifiants IRIA.
::

::demo-cta{path="/reports/guest-origins"}
::

### Pourquoi IRIA rejette-t-il un questionnaire ?

Les développeurs d'un PMS hôtelier open source qui ont corrigé des rejets récurrents ont listé ces causes ([commitsun/pms, pull request 233](https://github.com/commitsun/pms/pull/233)) :

- le questionnaire hôtelier envoyé pour un établissement enregistré comme appartements
- une plage de dates à cheval sur deux mois, ce qui répète des numéros de jour dans le fichier
- des lits bébé ou d'appoint non déclarés, de sorte que les nuitées dépassent les lits déclarés
- un client d'un pays sans code ISO standard, ce qui laisse le pays vide

Lancez l'étape de validation avant chaque envoi, et veillez à ce que le type et la catégorie INE saisis dans la configuration correspondent à ceux que l'INE a enregistrés pour vous.

## Résumé

- L'enquête de l'INE est obligatoire dès que l'INE sélectionne votre établissement, avec des amendes allant jusqu'à 30 050,61 € pour des données fausses.
- Elle demande des totaux par résidence des clients (pas par nationalité), les chambres, les lits d'appoint, l'ADR par type de clientèle et le personnel. Aucun numéro de pièce d'identité.
- Envoyez-la à la main sur IRIA, ou sous forme de fichier XML depuis un logiciel.
- Gardez le pays et la province renseignés dans Little Hotelier, avec le [userscript des provinces](/tools/ui/easy-save-province-country) gratuit et les [contrôles automatiques](/tools/bot/automated-checks).
- Les [rapports INE de Hotelier Tools](/tools/bot/ine-reports) préparent, valident et envoient le rapport via IRIA et conservent les justificatifs. L'outil est gratuit pour tous les hôtels jusqu'au 10 janvier 2027. Hotelier Tools est indépendant et n'est ni affilié à SiteMinder, à Little Hotelier ou à l'INE, ni approuvé par eux.

Pour le registre de police des voyageurs et les règles d'autres pays, lisez les [règles d'enregistrement des clients par pays](/blog/guest-registration-rules-by-country).
