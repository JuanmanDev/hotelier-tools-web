---
title: "Intégrations Little Hotelier en 2026 : comptabilité, enregistrement, tarifs, messagerie et IA"
seoTitle: "Intégrations Little Hotelier : les meilleures en 2026"
description: "Ce qui se connecte à Little Hotelier en 2026 : exports Xero et QuickBooks, enregistrement Chekin et Duve, tarification, messagerie, IA et ajouts gratuits."
date: 2026-10-03
category: api
tags: [integrations, app store, xero, chekin, little hotelier]
keywords: [intégrations little hotelier, little hotelier xero, little hotelier app store, little hotelier widget de réservation, little hotelier plugin wordpress, little hotelier chekin, little hotelier zapier]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "Portail développeur dans Hotelier Tools avec des cartes pour REST API & Swagger, MCP setup, API keys et LH methods, et un encadré Authentication avec un exemple cURL utilisant une clé d'API fictive"
faq:
  - q: "Little Hotelier s'intègre-t-il à Xero ou QuickBooks ?"
    a: "Par fichier, pas par synchronisation en direct. Vous associez vos comptes et codes de TVA dans Little Hotelier, puis vous exportez les factures finalisées dans un CSV conçu pour l'import Xero et QuickBooks. En octobre 2026, l'App Store ne liste aucune application de comptabilité."
  - q: "Little Hotelier fonctionne-t-il avec Zapier ?"
    a: "Nous n'avons trouvé aucune application Little Hotelier sur Zapier au 3 octobre 2026 ; sa page d'intégrations pour Little Hotelier renvoyait « introuvable ». Pour connecter Little Hotelier à d'autres outils, utilisez une application de l'App Store ou un script qui lit vos données via une API."
  - q: "Combien coûtent les applications de l'App Store de Little Hotelier ?"
    a: "Little Hotelier ne facture pas la connexion. Chaque application fixe son propre prix, et la page App Store de Little Hotelier indique que la plupart coûtent moins de 50 dollars US par mois. Beaucoup proposent un essai gratuit."
  - q: "Comment ajouter le widget de réservation Little Hotelier à WordPress ?"
    a: "Dans Direct Booking, ouvrez l'assistant de widget, choisissez un bouton Book now, un widget de sélection de dates ou un widget personnalisé, puis copiez le code affiché. Collez-le dans un bloc HTML personnalisé de votre page WordPress. Little Hotelier demande de copier le code, pas de le retaper."
  - q: "Une application de revenue management peut-elle modifier mes séjours minimums ?"
    a: "En général non. Le centre d'aide de Little Hotelier indique qu'une application RMS connectée contrôle les mises à jour de tarifs, tandis que le séjour minimum et le stop sell restent gérés dans Little Hotelier."
  - q: "Hotelier Tools est-il dans l'App Store de Little Hotelier ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié ni approuvé par SiteMinder ou Little Hotelier. Il se connecte avec l'identifiant Little Hotelier de votre établissement : vous le configurez vous-même, sans passer par l'App Store."
---

Little Hotelier se connecte à des logiciels extérieurs à trois endroits : l'**App Store de Little Hotelier** (une trentaine d'applications partenaires pour l'enregistrement, la messagerie, les ventes additionnelles, les avis, l'accès sans clé et la tarification en octobre 2026), les **plug-ins du moteur de réservation**, et ses propres **options** comme Guest Engagement et Dynamic Revenue Plus. La comptabilité passe par un export CSV conçu pour Xero et QuickBooks, pas par une synchronisation en direct. Pour tout ce qui manque, vous pouvez ajouter une couche qui lit vos données via une API, ou un script gratuit pour navigateur.

## Où se trouvent les intégrations Little Hotelier

| Type | Où le trouver | Comment il se connecte |
|---|---|---|
| Applications de l'App Store | [littlehotelier.com/app-store](https://www.littlehotelier.com/app-store/) | Vous contactez l'éditeur de l'application, qui la configure |
| Plug-ins du moteur de réservation | **Direct booking → Configuration → Plug-in apps** | Vous collez les identifiants de l'application et cliquez sur **Enable** |
| Options de Little Hotelier | Votre formule ([page des tarifs](https://www.littlehotelier.com/pricing/)) | Activées par Little Hotelier |
| Canaux (OTA) | **Distribution → Channels** | Associés dans le channel manager |

Quelques règles tirées de l'[article d'aide sur l'App Store](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store) (en anglais) :

- Les applications ne sont « pas configurées dans votre plateforme ». Vous utilisez le formulaire de contact sur la page de l'application, et l'éditeur la connecte.
- Little Hotelier ne facture rien pour la connexion ; chaque application a son propre prix. La [page App Store](https://www.littlehotelier.com/app-store/) indique que la plupart coûtent moins de 50 USD par mois.
- La configuration prend quelques minutes, voire jusqu'à 48 heures pour certaines applications. Le support d'une application vient de son éditeur.

Les plug-ins n'affectent que votre moteur de réservation. En octobre 2026, la [liste](https://help-platform.littlehotelier.com/en/articles/10440176-plug-in-apps-in-for-your-booking-engine) couvre Google Analytics 4 et Meta Pixel, la comparaison de prix (123compare.me, TripTease), les chatbots (HiJiffy, Book Me Bob), Tripadvisor Review Express, la fidélité (The Guestbook, Laasie) et les outils publicitaires (Google Ads, Sojern, The Hotels Network, Flip.to et d'autres).

## Comptabilité : Xero, QuickBooks et les autres

Il n'existe pas de synchronisation comptable en direct dans la liste de l'App Store que nous avons consultée en octobre 2026. Little Hotelier propose en revanche un **export comptable** :

1. Configurez d'abord votre plan comptable et vos codes de TVA dans Xero, QuickBooks ou votre propre logiciel.
2. Dans Little Hotelier, ouvrez **Setup → Accounting exports** (version classique : **Front Desk → Setup → Accounting Integration**) et saisissez les comptes et codes de TVA par défaut pour le chiffre d'affaires des chambres, les extras, les taxes, les frais de carte et les frais de service.
3. À chaque période, ouvrez **Reports → Operational → Accounting**, choisissez les dates et cliquez sur **Export**.

Seules les factures marquées **final** sont exportées, dans un CSV (ou un ZIP de CSV pour les longues périodes) « conçu pour l'import Xero et QuickBooks » ([guide de configuration](https://help-platform.littlehotelier.com/en/articles/10397752-accounting-exports-setup-guide), [guide d'export](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final)). En Espagne, la facturation électronique VeriFactu figure parmi les fonctions de la formule sur la [page des tarifs](https://www.littlehotelier.com/pricing/).

C'est là que les avis sont les plus critiques. Sur [Capterra](https://www.capterra.com/p/144307/Little-Hotelier/reviews/), des utilisateurs écrivent que « les rapports et la synchronisation avec les logiciels de comptabilité peuvent être améliorés ». Si ce que veut vraiment votre comptable, c'est tous les PDF de factures du trimestre, voir [télécharger toutes les factures Little Hotelier d'un coup](/blog/download-all-little-hotelier-invoices).

## Enregistrement en ligne et fiche des voyageurs

L'App Store propose plusieurs applications d'enregistrement, avec les fourchettes de prix affichées sur sa page (octobre 2026) :

- **Chekin** (0–50 USD/mois) : vérification d'identité avec comparaison biométrique, formulaires d'enregistrement numériques, déclarations de police et statistiques et taxe de séjour dans 18 pays et régions, dont l'Espagne, l'Italie, le Portugal, la France, l'Allemagne et la Thaïlande ([article d'aide](https://help-platform.littlehotelier.com/en/articles/10390472-connect-to-chekin)).
- **Duve** (0–50 USD) : enregistrement en ligne, application client et invitations à laisser un avis.
- **Vikey** (0–50 USD) : enregistrement autonome et serrures connectées.
- **Abitari Kiosk**, **OpenKey** et **Akia** : borne, clés mobiles et enregistrement sans contact.

Little Hotelier propose aussi une option native. Avec l'option **Guest Engagement**, un formulaire d'enregistrement de conformité peut envoyer les données des clients aux autorités en Italie, Espagne, Portugal, Allemagne, Suisse, Autriche, Croatie, République tchèque et Colombie ([source](https://help-platform.littlehotelier.com/en/articles/10066500-automated-compliance-reporting)). Les établissements espagnols peuvent voir comment cela s'articule avec SES Hospedajes dans [SES Hospedajes avec Little Hotelier](/blog/ses-hospedajes-little-hotelier), et les règles de chaque pays se trouvent dans [règles d'enregistrement des clients par pays](/blog/guest-registration-rules-by-country).

Si vous utilisez Chekin, le userscript gratuit **Chekin Connection** affiche l'état de l'enregistrement Chekin dans la réservation Little Hotelier : clients trouvés, numéros de téléphone et numéros de pièce d'identité, avec un bouton pour copier le document dans la réservation pour la facture.

::screenshot{src="/images/scripts/show-chekin/to.png" alt="Réservation Little Hotelier en espagnol avec un panneau Chekin : statut found 1 guest, un tableau avec nom, téléphone et pièce d'identité, et les boutons Use document et View in Chekin" caption="Le script gratuit Chekin Connection affiche les données d'enregistrement sans quitter la réservation."}
::

Installez-le depuis [Chekin Connection](/tools/ui/show-chekin) ; le [guide d'installation](/tools/ui/instructions) prend quelques minutes.

## Tarification et revenue management

Les applications de revenue management de l'App Store comprennent **RoomPriceGenie**, **Smartpricing**, **Happyhotel** et **Pricepoint**. Le centre d'aide cite aussi **Aiosell** et **Right Revenue** ([source](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store)).

Une limite à connaître avant de signer : le centre d'aide classique indique qu'un RMS connecté « peut contrôler les mises à jour de tarifs, pas les restrictions ». Les séjours minimums et les stop sells restent dans Little Hotelier ([source](https://helpcentre.littlehotelier.com/en/articles/15165178-little-hotelier-app-store)).

L'option propre à Little Hotelier est **Dynamic Revenue Plus**, un complément de la formule Pro avec des recommandations de prix fondées sur les données. La formule Pro elle-même inclut des rapports sur les tarifs concurrents et la parité tarifaire.

Hotelier Tools ajoute les prix des concurrents depuis Booking.com et Google (bêta) et des recommandations de prix avec un « Why? » pas à pas (alpha). Rien ne change dans Little Hotelier tant que vous ne confirmez pas. Voir [tarification dynamique pour les petits hôtels sur Little Hotelier](/blog/dynamic-pricing-little-hotelier).

## Messagerie client et WhatsApp

En natif, le **Messaging hub** de Guest Engagement réunit WhatsApp, Airbnb, SMS (via Twilio), Booking.com et l'historique des e-mails dans une seule boîte de réception. WhatsApp fonctionne avec l'API WhatsApp Business : les réponses dans la fenêtre de 24 heures sont gratuites, les messages modèles sont facturés par WhatsApp ([source](https://help-platform.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

Les alternatives de l'App Store comprennent **GuestTouch**, **Akia**, **Guest Talk**, **Bookboost**, **HelloShift**, **Hinstant** et **Zingle**.

::callout{type="tip" title="Les clients Booking.com ne reçoivent pas vos e-mails ?"}
Booking.com bloque les e-mails et les liens provenant de systèmes qu'il ne connaît pas. Little Hotelier vous demande d'ajouter `@app.littlehotelier.com` et `@guestjoy.com` comme adresses e-mail, et `siteminder.com` et `guestjoy.com` comme liens, dans l'extranet, sous **Property → Messaging preferences → Security settings** ([étapes](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).
::

Hotelier Tools a lui aussi une messagerie client (alpha) : WhatsApp, Gmail, Outlook ou toute boîte IMAP et les messages Booking.com dans une seule liste, avec des réponses rédigées par l'IA qu'une personne valide. Sa connexion WhatsApp utilise une session WhatsApp Web (WAHA), pas l'API Business officielle. Comparez les options dans [WhatsApp avec Little Hotelier](/blog/whatsapp-little-hotelier).

## IA et intégrations par API

« Intégration IA » recouvre deux choses différentes pour un établissement Little Hotelier.

**L'IA qui vend vos chambres.** Demand Plus comprend les **AI bookings** : votre établissement peut apparaître dans ChatGPT et Claude via le partenaire DirectBooker, avec des tarifs en direct, et les clients terminent la réservation sur votre moteur de réservation. C'est en bêta avec 0 % de commission jusqu'au 30 novembre 2026 ; à partir du 1er décembre 2026, 6 % plus taxes s'appliquent aux réservations IA finalisées, sans possibilité de refus ([source](https://help-platform.littlehotelier.com/en/articles/16654506-ai-bookings-in-demand-plus)). Des chatbots comme HiJiffy et Book Me Bob se branchent sur le moteur de réservation.

**L'IA qui travaille sur vos propres données.** Il n'y a ici aucune option officielle. Little Hotelier ne donne aux établissements aucune clé d'API pour les réservations ou les clients (la réponse complète est dans [Little Hotelier a-t-il une API ?](/blog/little-hotelier-api)).

Hotelier Tools comble ce manque avec une API REST et un serveur MCP (tous deux en bêta). C'est un produit indépendant qui se connecte avec votre propre identifiant Little Hotelier, stocké chiffré. Avec lui, vous pouvez :

- interroger Claude ou ChatGPT sur les arrivées, les soldes ou les factures manquantes ([ce qu'est un serveur MCP](/blog/what-is-mcp-server-hotels), [connecter ChatGPT](/blog/connect-chatgpt-to-little-hotelier))
- remplir un Google Sheet chaque mois ([exporter les réservations vers Excel](/blog/export-little-hotelier-reservations-excel))
- connecter des outils qui n'ont pas d'application dans l'App Store, avec un petit script

::demo-cta{path="/developer/rest-api"}
::

## Des userscripts gratuits pour combler de petits manques

Certains manques n'exigent pas une intégration, juste un meilleur écran. Les [userscripts](/tools/ui) gratuits s'exécutent dans votre navigateur via Tampermonkey, ne changent que l'affichage de Little Hotelier pour vous et restent gratuits pour toujours. Voici des scripts utiles à côté des intégrations ci-dessus :

- [Show Booking.com Commissions](/tools/ui/show-booking-commissions) : une estimation de la commission de Booking.com et de votre net, dans la réservation.
- [Prices Display](/tools/ui/prices-display) : vos tarifs dans la vue calendrier.
- [Easy Save Province and Country](/tools/ui/easy-save-province-country) : une liste de choix des provinces espagnoles qui renseigne aussi le pays.
- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) : imprimer la facture sans ouvrir de menus.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Résumé d'une réservation Little Hotelier en espagnol avec des lignes supplémentaires pour les frais de virement, la commission Booking.com, la commission totale avec TVA et le net approximatif" caption="Show Booking.com Commissions ajoute une commission estimée et le net à chaque réservation Booking.com."}
::

L'ensemble des scripts est sur la [page des extensions de navigateur](/chrome-extensions), et [les extensions Chrome gratuites pour Little Hotelier](/blog/little-hotelier-chrome-extensions) détaille chacun d'eux.

## Prochaines étapes

- Besoin d'enregistrement, de ventes additionnelles ou d'avis ? Commencez par l'App Store et demandez un essai gratuit.
- Besoin de comptabilité ? Associez vos codes une fois dans **Setup → Accounting exports**, puis exportez les factures finalisées chaque mois.
- Besoin de vos propres données dans une feuille, un script ou un assistant IA ? Utilisez une couche d'API comme l'[API & MCP de Hotelier Tools](/tools/bot/api-mcp), gratuite pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.
