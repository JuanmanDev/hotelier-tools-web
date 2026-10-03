---
title: "SES.Hospedajes avec Little Hotelier : enregistrer les voyageurs sans double saisie"
seoTitle: "SES.Hospedajes avec Little Hotelier : fiche voyageurs"
description: "Registre des voyageurs espagnol SES.Hospedajes : qui, quelles données, délais de 24 h, comment l'envoyer et comment Little Hotelier peut le faire."
date: 2026-10-03
category: compliance
tags: [ses hospedajes, spain, compliance, guest registration, little hotelier]
keywords: [ses hospedajes, ses hospedajes en français, ses hospedajes little hotelier, fiche de police Espagne hôtel, parte de viajeros, ses hospedajes datos obligatorios, enregistrement des voyageurs Espagne]
demoPath: /
cover: /images/blog/demo/en/automated-checks-moment-on-arrival.webp
coverAlt: "Réglages When they arrive dans Hotelier Tools avec les contrôles ID / passport (police register), Physical room assignment et Address and origin validation activés, chacun avec ce qu'il peut et ne peut pas faire"
faq:
  - q: "SES.Hospedajes est-il obligatoire pour une petite chambre d'hôtes ou une location de vacances ?"
    a: "Oui. Le décret royal 933/2021 couvre les hôtels, hostales, pensiones, maisons rurales, campings, appartements touristiques et hébergements similaires dans toute l'Espagne, et la FAQ du ministère de l'Intérieur confirme que les particuliers qui louent un hébergement sont aussi concernés. La Catalogne et le Pays basque déclarent à leurs propres systèmes de police."
  - q: "Faut-il enregistrer les enfants et les bébés ?"
    a: "Oui. Les clients de moins de 14 ans figurent dans le registre, avec des données fournies par l'adulte qui les accompagne ; une pièce d'identité devient obligatoire à partir de 14 ans. Si un client est mineur, vous devez aussi indiquer le lien entre les voyageurs, par exemple parent ou tuteur."
  - q: "Quelle est l'amende si je n'envoie pas les données des clients à SES.Hospedajes ?"
    a: "Selon la loi sur la sécurité citoyenne (Ley Orgánica 4/2015), ne pas tenir le registre ou ne pas envoyer les données est une infraction grave, sanctionnée de 601 à 30 000 euros. Les erreurs ou les envois tardifs sont des infractions légères, sanctionnées de 100 à 600 euros."
  - q: "Combien de temps dois-je conserver les fiches des clients ?"
    a: "Trois ans à compter de la fin du séjour. Le ministère de l'Intérieur indique qu'il ne vous enverra pas la liste de vos communications passées : conservez vos propres copies ou appuyez-vous sur l'historique de votre outil d'enregistrement en ligne."
  - q: "Hotelier Tools envoie-t-il les données des clients à SES.Hospedajes ?"
    a: "Non. Hotelier Tools n'envoie rien à SES.Hospedajes ni à la police. Il signale les réservations dont la pièce d'identité ou l'adresse manque, pour que vous les corrigiez avant l'arrivée. Pour l'envoi, utilisez le suivi de conformité de Little Hotelier ou un fournisseur d'enregistrement en ligne. Hotelier Tools est indépendant et n'est pas affilié à SiteMinder ou Little Hotelier."
---

Tout hôtel, hostal, chambre d'hôtes et location de vacances en Espagne doit transmettre les données de ses clients à **SES.Hospedajes**, le registre en ligne du ministère de l'Intérieur (la Catalogne et le Pays basque utilisent leurs propres systèmes de police). Les réservations et annulations doivent être déclarées dans les 24 heures, et les données des clients dans les 24 heures suivant l'arrivée ([décret royal 933/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-17461)). Little Hotelier peut envoyer les deux automatiquement grâce à l'enregistrement en ligne de Guest Engagement, ou via une application partenaire comme Chekin, pour que personne ne saisisse deux fois le même client.

Ce guide s'adresse aux propriétaires francophones qui exploitent un établissement en Espagne. Les noms officiels espagnols sont conservés, avec une explication en français. SES.Hospedajes est l'équivalent espagnol de la fiche de police française.

::callout{type="warning" title="Pas un conseil juridique"}
Dernière vérification en octobre 2026 auprès du BOE (journal officiel espagnol), de la sede electrónica du ministère de l'Intérieur et du centre d'aide de Little Hotelier. Les règles et les formulaires changent : vérifiez auprès du ministère ou de votre gestor (conseiller administratif) avant de vous fier à un détail.
::

## SES.Hospedajes, c'est quoi et qui doit l'utiliser ?

SES.Hospedajes est la plateforme du Ministerio del Interior pour le registre des voyageurs (*registro documental*) que les hébergeurs doivent tenir. Beaucoup de propriétaires parlent encore de **partes de viajeros**. Le ministère a activé la plateforme le **2 décembre 2024**, après plusieurs reports ([communiqué de la Moncloa](https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/interior/paginas/2024/021224-registro-hospedaje-alquiler-vehiculos.aspx)).

Elle s'applique dans toute l'Espagne à (RD 933/2021, article 2) :

- les hôtels, **hostales**, **pensiones**, casas de huéspedes et hébergements de tourisme rural
- les campings et aires pour camping-cars
- les appartements touristiques, bungalows et hébergements de vacances similaires
- les particuliers qui louent un hébergement, d'après la [FAQ du ministère d'août 2026](https://sede.interior.gob.es/portal/dam/jcr:995aad35-2632-4de2-97fe-94cc2489c9c6/Preguntas-frecuentes-hospedajes-alquiler-vehiculos-20260810.pdf)

**La Catalogne et le Pays basque** gardent leurs propres systèmes. En Catalogne, vous déclarez aux Mossos d'Esquadra via leur plateforme existante ([Mossos](https://mossos.gencat.cat/ca/serveis_i_tramits/registre-dactivitats-dhostalatge-i-lloguer-de-vehicles-a-motor/)) ; au Pays basque, à l'Ertzaintza ([euskadi.eus](https://www.euskadi.eus/comunicacion/registro-hostelero/web01-tramite/es/)).

**Enregistrez d'abord votre établissement.** Vous devez vous inscrire sur SES.Hospedajes avant de commencer l'activité, avec un certificat numérique ou Cl@ve ([sede electrónica](https://sede.interior.gob.es/portal/sede/informacion_hospedajes)). L'inscription vous donne des identifiants pour l'application web et des identifiants distincts pour l'envoi par web service.

## Quelles données SES.Hospedajes demande-t-il ?

L'annexe I du RD 933/2021 liste trois blocs :

| Bloc | Données |
|---|---|
| **Chaque client** | Prénom, deux noms de famille, sexe, type de pièce d'identité (DNI, passeport, TIE) et numéro, *número de soporte* (numéro de support du document), nationalité, date de naissance, adresse habituelle (adresse complète, ville, pays), téléphone fixe, mobile, e-mail, nombre de voyageurs, lien entre les voyageurs si l'un est mineur |
| **La réservation** | Référence et date du contrat, date et heure d'arrivée et de départ, adresse, nombre de chambres, accès internet oui ou non |
| **Paiement** | Type de paiement, identification du moyen de paiement (type et numéro de carte, IBAN, paiement mobile…), titulaire, expiration, date de paiement |

La FAQ du ministère précise quelques points :

- Le DNI est obligatoire à partir de 14 ans. Les moins de 14 ans sont enregistrés aussi, avec des données fournies par l'adulte qui les accompagne.
- Si un client est mineur, indiquez le lien (*parentesco*) : parent, grand-parent, tuteur ou autre.
- Sans e-mail, un numéro de mobile suffit.
- Le sexe est obligatoire lorsqu'il figure sur le document.

Les [instructions officielles d'envoi de fichiers](https://hospedajes.ses.mir.es/hospedajes-sede/assets/docs/Instrucciones.pdf) marquent certains champs comme facultatifs, mais le décret les liste tous. Collectez tout ce que vous pouvez raisonnablement obtenir.

## Quels sont les délais et les amendes ?

L'article 6.3 du décret fixe deux délais distincts de 24 heures, « immédiatement et, en tout cas, dans les 24 heures » :

1. à partir de la **réservation**, du contrat ou de son **annulation**
2. à partir du **début du séjour** (arrivée)

Toute modification ultérieure d'une réservation exige une nouvelle communication. Conservez les fiches **trois ans** après la fin du séjour (article 5.3). Le ministère indique qu'il ne vous enverra pas la liste de ce que vous avez transmis : gardez votre propre historique.

Les amendes viennent de la loi sur la sécurité citoyenne, la [Ley Orgánica 4/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-3442) :

| Infraction | Exemple | Amende |
|---|---|---|
| Légère (*leve*, art. 37.9) | Erreurs dans les données ou envoi tardif | 100 € à 600 € |
| Grave (*grave*, art. 36.20) | Pas de registre ou données non envoyées | 601 € à 30 000 € |

## Comment envoyer les données : formulaire web, fichier ou web service ?

SES.Hospedajes accepte trois méthodes, toutes décrites dans le [guide visuel](https://sede.interior.gob.es/portal/dam/jcr:01a016b6-5ec0-41b4-898c-7f77b2f16e7d/Guia-visual-de-Hospedajes-v.29.08.2025.pdf) du ministère :

1. **Formulaire web.** Saisissez chaque réservation et chaque client dans l'application SES.Hospedajes. Convenable pour quelques chambres, lent dès que l'activité augmente.
2. **Envoi de fichier.** Envoyez un fichier XML contenant de nombreuses communications à la fois. Toutes les communications d'un même fichier doivent être du même type.
3. **Web service.** Votre logiciel envoie directement les données. C'est ainsi qu'un PMS ou une application d'enregistrement en ligne supprime la double saisie.

Vous pouvez vous connecter à l'application avec un certificat numérique ou avec un identifiant et un mot de passe, et vous pouvez consulter et corriger les communications quelle que soit la méthode d'envoi.

## Little Hotelier se connecte-t-il à SES.Hospedajes ?

Oui. En octobre 2026, il existe deux méthodes, plus un ancien export.

### Option 1 : le suivi de conformité automatisé de Little Hotelier

**Guest Engagement** de Little Hotelier comprend un formulaire d'enregistrement de conformité qui envoie les données à SES.Hospedajes pour vous ([centre d'aide, mis à jour en juin 2025](https://helpcentre.littlehotelier.com/en/articles/10303885-how-to-connect-automated-compliance-reporting-to-ses-hospedajes-platform), en anglais). Guest Engagement doit être activé sur votre compte : demandez à Little Hotelier si votre formule l'inclut.

1. **Dans SES.Hospedajes**, ouvrez vos données enregistrées (**Mis datos registrados**) et cochez **Envío de comunicaciones por servicio web**. Vous recevez par e-mail un code bailleur (*código de arrendador*), un code d'établissement, un identifiant et un mot de passe.
2. **Dans Little Hotelier**, allez dans **Guest Engagement > Check-in > Settings** et choisissez **Compliance reporting check-in form**.
3. Renseignez les informations de l'établissement, choisissez le mode de signature des clients, activez **Authority connection**, sélectionnez **SES Hospedajes** sous **Automatically send info to**, saisissez les quatre identifiants (l'identifiant se termine par « WS ») et cliquez sur **Validate**.
4. Sous **Booking registration sending**, choisissez **Enabled**. Les données de réservation sont alors envoyées à la création de la réservation, et celles des clients après l'enregistrement. Vous pouvez exclure certaines sources de réservation.
5. Définissez un **Payment type** par défaut.

Chaque envoi affiche un statut (Scheduled, In progress, Done, Failed, etc.), et la liste des documents envoyés se trouve sur la même page de réglages. L'[aperçu de la conformité](https://helpcentre.littlehotelier.com/en/articles/10066500-automated-compliance-reporting) de Little Hotelier ajoute que les modifications d'une réservation sont envoyées à Chekin et mises à jour auprès des autorités. D'autres articles d'aide couvrent les Mossos et l'Ertzaintza.

### Option 2 : Chekin depuis l'App Store

[Chekin](https://helpcentre.littlehotelier.com/en/articles/8674162-connecting-to-chekin) est une application tierce payante de l'App Store de Little Hotelier. Elle gère l'enregistrement en ligne, la vérification d'identité et les déclarations à la police en Espagne et dans d'autres pays. D'autres fournisseurs d'enregistrement en ligne proposent des services similaires ; vérifiez que le vôtre envoie à SES.Hospedajes par web service et lit vos réservations Little Hotelier.

### L'ancien export du rapport de police

**Front Desk > Reports > Police Report** exporte un fichier .txt des clients de 16 ans et plus pour une période donnée ([centre d'aide](https://helpcentre.littlehotelier.com/en/articles/8673944-run-and-export-a-spanish-police-report)). L'article demande de l'envoyer sur « le site de la police » et ne mentionne pas SES.Hospedajes : vérifiez que SES l'accepte avant de vous y fier.

## Comment éviter la double saisie et les données manquantes

La double saisie arrive quand le même client est saisi dans Little Hotelier, puis de nouveau dans SES.Hospedajes ou dans une application d'enregistrement. La solution : collecter les données une seule fois, le plus tôt possible, et les laisser circuler vers les deux.

1. **Envoyez l'enregistrement en ligne avant l'arrivée.** Les clients remplissent eux-mêmes leurs informations depuis la confirmation de réservation ou un lien.
2. **Complétez le reste à la réception**, dans le même outil, pas sur papier.
3. **Vérifiez le document.** Le décret impose de présenter ou fournir les documents, et la FAQ du ministère accepte les contrôles électroniques qui garantissent l'exactitude.
4. **Corrigez les manques avant le délai de 24 heures**, pas en fin de mois.

### Si vous utilisez Chekin : le voir dans Little Hotelier

Le userscript gratuit [Chekin Connection](/tools/ui/show-chekin) ajoute un panneau Chekin à la réservation dans Little Hotelier. Vous voyez d'un coup d'œil si les clients se sont enregistrés, avec leurs noms, téléphones et numéros de document, et vous pouvez copier le numéro du document dans la réservation, par exemple pour la facture. Tant que personne ne s'est enregistré, il affiche le lien d'enregistrement avec des boutons pour l'ouvrir, le copier, l'envoyer par e-mail ou par WhatsApp. Vous devez être connecté à Chekin dans le même navigateur. C'est un script indépendant, non créé par Chekin ni par Little Hotelier. Guide d'installation : [comment installer les userscripts](/tools/ui/instructions).

::screenshot{src="/images/scripts/show-chekin/to.png" alt="Réservation Little Hotelier avec le panneau Chekin : un client trouvé, avec nom, téléphone et numéro de document, et les boutons Use document et View in Chekin" caption="Le panneau Chekin dans la réservation Little Hotelier, avec le document du client prêt à l'emploi."}
::

### Repérer les pièces d'identité manquantes avant l'arrivée

Hotelier Tools n'envoie **pas** de données à SES.Hospedajes ni à la police, et ne prétend pas le faire. Il vérifie en revanche chaque réservation pour détecter une pièce d'identité ou une adresse manquante après la réservation, à l'arrivée, pendant le séjour et au départ, grâce aux [contrôles automatiques](/tools/bot/automated-checks). Les problèmes apparaissent sur une page Issues unique et dans un e-mail de rapport, pour que vous relanciez le client tant qu'il est encore temps. Voir la [checklist quotidienne de la réception](/blog/hotel-front-desk-checklist-automation).

::screenshot{src="/images/blog/demo/en/automated-checks-issues-full.webp" alt="Page Issues dans Hotelier Tools avec 20 ouverts, 5 corrigés et 25 au total, listant des réservations avec des alertes de solde impayé puis, plus bas, des erreurs ID / passport (police register) indiquant que le client principal n'a pas de pièce d'identité, chacune avec un bouton Verify (messages de démo en espagnol)" caption="Les problèmes ouverts regroupés par réservation, y compris les séjours dont le client principal n'a toujours pas de pièce d'identité." path="/automated-checks/issues" width="1440" height="2400"}
::

::demo-cta{path="/automated-checks/issues"}
::

## Peut-on photocopier ou scanner le DNI du client ?

Le décret demande de voir le document et d'enregistrer ses données, pas d'en conserver une copie. L'agence espagnole de protection des données indique qu'une copie du DNI n'est en général pas nécessaire pour conclure un contrat, et que l'entreprise doit choisir le moyen d'identification le plus adapté, sauf si une loi exige une copie ([FAQ de l'AEPD](https://www.aepd.es/preguntas-frecuentes/1-tus-derechos/3-identificacion-con-dni/FAQ-0115-es-necesario-proporcionar-una-copia-del-dni-para-realizar-una-contratacion)). Si votre outil d'enregistrement stocke des images de pièces d'identité, vérifiez combien de temps il les conserve et pourquoi.

## Résumé

- SES.Hospedajes est obligatoire pour tous les types d'hébergement en Espagne, sauf que la Catalogne et le Pays basque déclarent à leur propre police.
- Envoyez les réservations et annulations dans les 24 heures, et les données des clients dans les 24 heures suivant l'arrivée. Conservez les fiches trois ans.
- Little Hotelier peut envoyer à SES.Hospedajes via le formulaire d'enregistrement de conformité de Guest Engagement, ou via Chekin.
- Collectez les données une seule fois, avant l'arrivée, et laissez-les circuler vers Little Hotelier et SES.
- Utilisez les [contrôles automatiques](/tools/bot/automated-checks) pour repérer les pièces d'identité manquantes, et le script gratuit [Chekin Connection](/tools/ui/show-chekin) si vous utilisez Chekin. Pour les autres pays, lisez les [règles d'enregistrement des clients par pays](/blog/guest-registration-rules-by-country) ; pour l'enquête statistique espagnole, voir [l'enquête d'occupation de l'INE](/blog/ine-hotel-occupancy-survey).
