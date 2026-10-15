---
title: "Tutoriel Little Hotelier : 20 astuces et fonctions cachées que peu de propriétaires connaissent (2026)"
seoTitle: "Tutoriel Little Hotelier : 20 astuces (2026)"
description: "20 astuces Little Hotelier : calendrier plus rapide, passkeys, tarif minimum, nuits isolées, liens de réservation, journal d'audit et scripts gratuits."
date: 2026-10-03
category: tips
tags: [tips, how to, calendar, userscripts, little hotelier]
keywords: [little hotelier tutorial, little hotelier mode d'emploi, little hotelier guide, little hotelier astuces, little hotelier fonctions cachées, little hotelier calendrier, comment utiliser little hotelier]
feature: dashboard
demoPath: /
cover: /images/scripts/full-width-reservation-table/to.png
coverAlt: "Page Reservations de Little Hotelier (interface en espagnol) étirée sur toute la largeur de l'écran par le script Full Width Reservation Table : filtres de recherche, bouton Buscar, 36 réservations trouvées et lien Exportar"
faq:
  - q: "Comment éviter que Little Hotelier me demande sans cesse un code MFA ?"
    a: "Little Hotelier le redemande tous les 30 jours, quand vous changez de navigateur ou d'appareil, et avant les actions sensibles. Le plus rapide est une clé d'accès (passkey : My account, Passkeys, Create passkey) ou la validation avec l'application mobile Little Hotelier, qui affiche un numéro à faire correspondre au lieu d'un code."
  - q: "Comment éviter l'expiration de session de Little Hotelier ?"
    a: "Little Hotelier ne propose aucun réglage pour cela dans les articles du centre d'aide que nous avons consultés. Le userscript gratuit Auto Refresh On Inactivity recharge la page après 10 minutes sans activité : vous retrouvez un écran à jour au lieu d'un écran périmé."
  - q: "Puis-je voir les prix des chambres dans le calendrier de Little Hotelier ?"
    a: "Pas en natif : le calendrier affiche les réservations, et les prix se trouvent dans la grille d'inventaire. Le userscript gratuit Prices Display les lit dans la page d'inventaire et les affiche sous chaque type de chambre dans le calendrier."
  - q: "Little Hotelier a-t-il des raccourcis clavier ?"
    a: "Nous n'avons trouvé aucun raccourci clavier dans les centres d'aide de Little Hotelier (octobre 2026). Les boutons fléchés du calendrier font avancer de 1, 7 ou 14 jours, et View today ramène à aujourd'hui. Dans le tableau de bord Hotelier Tools, Ctrl+K (Cmd+K sur Mac) ouvre la recherche."
  - q: "Où se trouve le mode d'emploi de Little Hotelier ?"
    a: "Il n'existe pas de manuel unique. Little Hotelier tient deux centres d'aide, un pour la version classique et un pour la nouvelle plateforme, plus Sim, un chatbot IA que vous ouvrez depuis l'icône de discussion une fois connecté."
---

Little Hotelier cache certaines de ses fonctions les plus utiles à un ou deux clics de profondeur : la connexion par clé d'accès (passkey), un tarif minimum de l'établissement, des liens de moteur de réservation qui ouvrent une chambre précise, un bouton « flush » pour les canaux qui ne se mettent pas à jour, et un journal d'audit de qui a changé quoi. Voici 20 astuces : 14 intégrées à Little Hotelier (chacune avec un lien vers l'article d'aide officiel, en anglais), 4 scripts gratuits pour navigateur pour ce qu'il ne fait pas, et 2 pour les propriétaires qui utilisent le tableau de bord Hotelier Tools.

::callout{type="info" title="Version classique ou plateforme ?"}
Les comptes créés depuis mai 2025 (ou migrés) utilisent la nouvelle **plateforme** Little Hotelier ; les anciens comptes utilisent la version **classique**, qui a [son propre centre d'aide](https://helpcentre.littlehotelier.com/en/). Les noms de menus diffèrent : chaque astuce donne donc le chemin de la version décrite par l'article d'aide.
::

## Astuces pour le calendrier et la réception

### 1. Lisez le calendrier d'un coup d'œil

Choisissez une vue sur **14 ou 28 jours** dans la liste déroulante. Dans la vue de 14 jours, `<`, `<<` et `<<<` avancent de 1, 7 et 14 jours ; **View today** ramène à aujourd'hui. Les couleurs indiquent le statut : orange confirmée, vert arrivée enregistrée, gris départ effectué, bleu non attribuée, rouge fermeture de chambre. Un **triangle rouge** dans le coin signale un solde encore dû ([guide du calendrier](https://help-platform.littlehotelier.com/en/articles/10397723-getting-started-with-calendar)).

### 2. Utilisez la ligne Unallocated pour caser une réservation de plus

Quand un type de chambre semble complet mais que les nuits ne s'alignent pas, déplacez une réservation vers **Unallocated**, réorganisez les autres, puis replacez-la dans une chambre. Les réservations non attribuées comptent toujours dans la disponibilité : l'y placer ne remet donc pas la chambre en vente ([guide classique](https://helpcentre.littlehotelier.com/en/articles/8673713-overview-of-the-front-desk-calendar)).

### 3. Imprimez la fiche d'enregistrement comme fiche d'arrivée

Cliquez sur la loupe d'une réservation, puis **Print → Registration form**. Little Hotelier suggère de l'utiliser comme formulaire d'arrivée prêt à l'emploi.

### 4. Donnez au ménage son propre rapport

Ouvrez **Reservations → Housekeeping**. Marquez chaque chambre **Cleaned**, **Uncleaned** ou **Skip cleaning**, ajoutez des notes de chambre, alternez entre **Today**, **Tomorrow** ou des dates choisies, et cliquez sur **Print report**. Donnez au personnel de ménage son propre utilisateur avec accès Front desk pour qu'il le voie en direct. Le rapport n'est pas disponible dans l'application mobile ([guide du ménage](https://help-platform.littlehotelier.com/en/articles/12105307-how-to-manage-housekeeping-in-little-hotelier)).

### 5. Repérez l'origine d'une réservation grâce à sa référence

Les lettres au début de la référence de réservation indiquent la source : **LH** votre réception ou moteur de réservation, **BDC** Booking.com, **EXP** Expedia, **ABB** Airbnb, **AGO** Agoda, **HWL** Hostelworld ([guide des réservations](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data)). Pratique pour filtrer un export dans Excel.

## Tarifs, restrictions et canaux

### 6. Fixez un tarif minimum pour que rien ne se vende trop bas

Un tarif minimum de l'établissement empêche tout tarif de chambre, ou toute remise gérée dans Little Hotelier, de passer en dessous. Sur la plateforme : **Setup → Property settings → General information**, le crayon à côté de **Inventory**, puis **Minimum rate** ([guide](https://help-platform.littlehotelier.com/en/articles/13681648-set-a-minimum-rate-for-your-property)). En version classique : **Channel Manager**, cliquez sur le nom de votre établissement, puis **Property settings → General** ([guide](https://helpcentre.littlehotelier.com/en/articles/8673933-set-a-minimum-rate-for-all-your-rooms)). Les promotions créées directement sur Booking.com ou d'autres canaux peuvent encore descendre plus bas.

### 7. Rattrapez les nuits isolées laissées par les séjours minimum

Un séjour minimum de trois nuits laisse des trous de deux nuits que personne ne peut réserver. La solution de Little Hotelier : un second plan tarifaire, dérivé de votre plan standard avec un léger supplément (leur exemple : +5 %), avec un séjour minimum plus court, mappé sur vos canaux ([guide des nuits isolées](https://help-platform.littlehotelier.com/en/articles/16780102-manage-gap-nights)). Pour comprendre CTA, CTD et stop sell, voir [CTA, CTD, séjour minimum et stop sell : définitions](/blog/little-hotelier-cta-ctd-stop-sell).

### 8. Envoyez un « flush » quand un canal ne se met pas à jour

En version classique, **Setup → Property & Room Settings → Rooms & Rates**, sélectionnez le type de chambre ou le tarif et cliquez sur **Flush** en bas. Cela renvoie tarifs, restrictions et disponibilités à tous les canaux. Attendez cinq minutes après une petite modification avant de lancer le flush, et corrigez d'abord les erreurs de mapping ([guide du flush](https://helpcentre.littlehotelier.com/en/articles/8947419-send-inventory-updates-to-channel-manager-send-a-flush)).

### 9. Découvrez qui a modifié un tarif ou un mapping de canal

Ouvrez un tarif de chambre ou un canal et choisissez **Audit**. Le Lifecycle audit montre quand un réglage a changé et l'e-mail de l'utilisateur qui l'a modifié. Il n'enregistre ni les prix, ni les valeurs de restrictions, ni les modifications de réservations ([guide de l'audit](https://help-platform.littlehotelier.com/en/articles/10660168-track-configuration-changes-with-the-lifecycle-audit-tool)). Pour un stop sell mystérieux, vérifiez d'abord la **Release period** du tarif ; si elle est vide, c'est une règle de yield qui l'a fermé ([guide](https://help-platform.littlehotelier.com/en/articles/14177576-how-to-check-if-a-stop-sell-is-triggered-by-a-yield-rule)).

## Moteur de réservation et Booking.com

### 10. Faites un lien direct vers une chambre, un tarif ou un code promo

Ajoutez un paramètre à l'adresse de votre moteur de réservation :

- `?room_type=ID` ouvre un type de chambre (l'ID figure dans l'URL du type de chambre sous la configuration de Direct Booking)
- `?promocode=CODE` applique un code promo
- `?ratePlanId=ID` affiche un plan tarifaire (Little Hotelier explique comment trouver l'ID avec les outils de développement de votre navigateur)

L'adresse commence par `direct-book.com/properties/` en Europe, en Afrique, au Moyen-Orient et dans les Amériques, ou par `book-directonline.com/properties/` en Asie-Pacifique ([liens vers chambres et promos](https://helpcentre.littlehotelier.com/en/articles/9451551-create-unique-links-for-your-booking-engine), [liens vers plans tarifaires](https://help-platform.littlehotelier.com/en/articles/11935086-create-a-url-that-links-directly-to-a-rate-plan)).

### 11. Signalez une carte invalide ou un no-show Booking.com sans passer par l'extranet

Ouvrez la réservation Booking.com dans le channel manager et allez sur l'onglet **Manage Reservation**. De là, vous pouvez signaler la carte comme invalide, demander à Booking.com d'annuler pour carte invalide, ou marquer un no-show et choisir de renoncer ou non aux frais ([guide](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)). Les délais sont détaillés dans [carte de crédit invalide ou no-show sur Booking.com : que faire](/blog/booking-com-invalid-card-no-show).

### 12. Assurez-vous que les clients Booking.com reçoivent vos e-mails

Booking.com bloque les e-mails provenant de systèmes qu'il ne connaît pas. Si vous envoyez des confirmations ou des demandes de paiement depuis Little Hotelier, autorisez `@app.littlehotelier.com` et `@guestjoy.com` (et les liens `siteminder.com` et `guestjoy.com`) dans l'extranet sous **Property → Messaging preferences → Security settings** ([étapes](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).

## Connexion, support et exports

### 13. Connectez-vous avec une passkey plutôt qu'avec des codes

La MFA est obligatoire, et Little Hotelier la redemande tous les 30 jours ou sur un nouveau navigateur. Deux façons de la rendre indolore ([guide MFA](https://help-platform.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)) :

- **Validez avec l'application Little Hotelier.** Vous appuyez sur le numéro correspondant et confirmez avec votre visage ou votre empreinte. Les codes par SMS et par e-mail ne sont pas pris en charge.
- **Utilisez une passkey.** Icône de profil → **My account** → **Passkeys** → **Create passkey**, puis connectez-vous avec **Continue with a passkey**. Elle fonctionne dans les navigateurs web (Chrome et Edge 109+, Safari 16+), pas dans l'application mobile, et la MFA doit d'abord être configurée ([guide des passkeys](https://help-platform.littlehotelier.com/en/articles/12039017-how-to-set-up-and-log-in-with-passkeys)).

Chacun doit avoir son propre utilisateur : les codes MFA appartiennent à une personne et à un appareil.

### 14. Demandez à Sim avant de chercher, et exportez avant le jour 180

Une fois connecté, ouvrez l'icône de discussion en bas à droite et choisissez **Ask a question**. Sim, le chatbot IA de Little Hotelier, répond à partir du centre d'aide 24 h/24 et 7 j/7 en huit langues et peut vous passer à une personne. Posez une question précise à la fois, avec le nom du canal et l'erreur exacte ([conseils](https://help-platform.littlehotelier.com/en/articles/9452186-tips-on-using-our-help-centre-and-ai-chatbot-for-support)).

Et une habitude à prendre : exportez vos réservations chaque mois. Les coordonnées des clients sont masquées 180 jours après le départ, et les exports n'incluent jamais les numéros de téléphone. Pas à pas : [exporter les réservations vers Excel ou Google Sheets](/blog/export-little-hotelier-reservations-excel).

## Ajustements avec des userscripts gratuits

Ces [userscripts](/tools/ui) gratuits s'exécutent dans votre navigateur avec l'extension Tampermonkey et ne changent que ce que vous voyez. Ils restent gratuits pour toujours. Le [guide d'installation](/tools/ui/instructions) prend environ cinq minutes par script.

### 15. Voyez vos prix dans le calendrier

[Prices Display](/tools/ui/prices-display) lit vos tarifs dans la page d'inventaire et les affiche sous chaque type de chambre dans le calendrier : vous pouvez annoncer un prix au téléphone sans changer d'écran.

::screenshot{src="/images/scripts/prices-display/to.webp" alt="Calendrier Little Hotelier en espagnol avec une vue de 7 jours, des réservations en vert, orange et gris, et le prix par nuit de chaque type de chambre en gros chiffres sous ses chambres" caption="Avec Prices Display, le tarif par nuit de chaque type de chambre s'affiche juste sous ses chambres."}
::

### 16. Ne retombez plus sur une page périmée

Si vous laissez Little Hotelier ouvert à la réception et retrouvez des erreurs à votre retour, [Auto Refresh On Inactivity](/tools/ui/auto-refresh-inactivity) recharge la page après 10 minutes sans clic, défilement ni mouvement de souris. Il ne recharge jamais la page pendant que vous travaillez.

### 17. Voyez la commission Booking.com dans la réservation

[Show Booking.com Commissions](/tools/ui/show-booking-commissions) ajoute à chaque réservation Booking.com une estimation détaillée de la commission et votre net approximatif. Le fonctionnement réel de la commission est expliqué dans [combien Booking.com prélève de commission](/blog/booking-com-commission).

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Résumé d'une réservation Little Hotelier en espagnol avec des lignes supplémentaires pour les frais de virement, la commission Booking.com, la commission totale avec TVA et le net approximatif" caption="Une estimation de ce que garde Booking.com et de ce qu'il vous reste, dans la réservation."}
::

### 18. Faites tenir plus de choses à l'écran (et sur une tablette)

- [Compact Calendar UI](/tools/ui/compact-calendar-ui) met les en-têtes de dates sur une seule ligne et réduit les noms des types de chambres.
- [Full Width Reservation Table](/tools/ui/full-width-reservation-table) élargit la liste des réservations : fini le défilement horizontal.
- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens) agrandit les boutons et affiche toujours le bouton « remove room » qui n'apparaît sinon qu'au survol.

Tous les scripts, avec des images avant-après, se trouvent sur la [page des extensions de navigateur](/chrome-extensions) et dans notre guide des [extensions Chrome gratuites pour Little Hotelier](/blog/little-hotelier-chrome-extensions).

## Deux astuces si vous utilisez le tableau de bord Hotelier Tools

Hotelier Tools est un tableau de bord indépendant qui fonctionne à côté de Little Hotelier, avec les identifiants Little Hotelier de votre établissement. Il n'est ni affilié à SiteMinder ou à Little Hotelier, ni approuvé par eux, et il est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

### 19. Appuyez sur Ctrl+K pour tout trouver

**Ctrl+K** (**Cmd+K** sur Mac) recherche dans les pages, les entrées de liste d'attente, les tâches programmées et les conversations. Il ignore les accents et comprend les mots anglais et espagnols pour la même chose : « lista de espera » trouve l'Availability Queue.

::screenshot{src="/images/blog/demo/en/global-search-waitlist.webp" alt="Palette de commandes ouverte avec Ctrl+K sur le tableau de bord Hotelier Tools, avec la requête waitlist et des pages correspondantes comme Public waitlist form, Availability Queue, History, Do-not-rebook list et Scheduled invoices, chacune accompagnée de sa section" caption="Tapez un mot et allez directement à la page voulue." path="/"}
::

### 20. Laissez un contrôle nocturne repérer les pièces d'identité manquantes avant l'arrivée des clients

Les **Automated checks** lisent les réservations à venir et signalent ce que vous découvririez sinon à la réception : pas de chambre attribuée, pièce d'identité ou adresse manquante, solde impayé, ou client figurant sur votre liste do-not-rebook. Les problèmes arrivent sur une page Issues unique, et chaque exécution envoie un e-mail de rapport. Voir [la checklist quotidienne de la réception](/blog/hotel-front-desk-checklist-automation).

::demo-cta{path="/automated-checks/issues"}
::

À lire aussi : [ce qu'est un serveur MCP](/blog/what-is-mcp-server-hotels), [la tarification dynamique sur Little Hotelier](/blog/dynamic-pricing-little-hotelier), [télécharger toutes vos factures d'un coup](/blog/download-all-little-hotelier-invoices), [les règles d'enregistrement des clients par pays](/blog/guest-registration-rules-by-country), [utiliser WhatsApp avec Little Hotelier](/blog/whatsapp-little-hotelier), [les alternatives à Little Hotelier](/blog/little-hotelier-alternatives), [le tableau de bord Hotelier Tools](/tools/bot/dashboard), [les automatisations Hotelier Tools](/tools/bot/automations).

## Résumé

- **Plus gros gains de temps :** les passkeys, le rapport de ménage et les liens directs du moteur de réservation.
- **Plus gros gains d'argent :** un tarif minimum de l'établissement et un plan tarifaire pour les nuits isolées.
- **Quand les canaux déraillent :** flush, puis vérifiez le journal d'audit et la release period.
- **Pour ce que Little Hotelier ne fait pas :** des userscripts gratuits pour les prix dans le calendrier et les commissions Booking.com, et des [intégrations](/blog/little-hotelier-integrations) pour le reste.
