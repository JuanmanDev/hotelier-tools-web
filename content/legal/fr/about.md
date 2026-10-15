---
title: "À propos de Hotelier Tools"
description: "Projet indépendant de Juan Manuel Béc., développeur en Espagne : un tableau de bord et des scripts gratuits, au code public, pour Little Hotelier."
updated: "2026-10-15"
---

Hotelier Tools est un projet indépendant de **Juan Manuel Béc.**, développeur de logiciels installé en Espagne. Il ajoute à Little Hotelier ce que la réception d'un petit hôtel doit souvent faire à la main. Il est exploité par un particulier, et non par une société.

## Ce qu'est Hotelier Tools

- **Un tableau de bord** sur [dashboard.hotelier.tools](https://dashboard.hotelier.tools) qui fonctionne à côté de Little Hotelier : factures groupées et factures au départ du client, contrôles automatiques des réservations, tarification dynamique, une boîte de réception clients pour WhatsApp, e-mail et Booking.com, un assistant IA, une liste d'attente pour les dates complètes et l'enquête d'occupation hôtelière de l'INE espagnol. Il propose aussi une API REST et un serveur MCP, afin que des outils comme Claude ou ChatGPT puissent travailler avec les données de votre hôtel. Voir [toutes les fonctionnalités du tableau de bord](/tools/bot), ou essayez la [démo publique](https://demo.hotelier.tools) avec un hôtel fictif.
- **Des scripts gratuits pour le navigateur** (Tampermonkey) qui améliorent les écrans de Little Hotelier : tableaux plus larges, calendriers compacts, commissions et prix là où vous en avez besoin, et d'autres petites corrections. Voir [tous les scripts](/tools/ui).
- **Des guides** sur la gestion d'un établissement avec Little Hotelier, dans [le blog](/blog).

## Fonctionnement avec Little Hotelier

Vos réservations, tarifs et calendrier restent dans Little Hotelier. Les scripts s'exécutent dans votre propre session Little Hotelier et n'envoient rien à Hotelier Tools. Le tableau de bord se connecte avec l'identifiant Little Hotelier de votre établissement, stocké chiffré (AES-256-GCM) ; il ne peut donc faire que ce que cet identifiant permet, et chaque modification qu'il effectue est visible dans Little Hotelier comme d'habitude.

## Indépendant de SiteMinder

Hotelier Tools n'est **ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux**. Il ne s'agit pas d'une intégration officielle ni d'un produit partenaire. Little Hotelier et SiteMinder ne sont cités que pour décrire les services avec lesquels Hotelier Tools fonctionne.

## Code source public

Les scripts sont gratuits et leur code source est public sur GitHub, dans le [dépôt TampermonkeyLittleHotelier](https://github.com/JuanmanDev/TampermonkeyLittleHotelier). Chacun peut lire ce que fait un script avant de l'installer, signaler un problème ou proposer une modification. Le code source de ce site web est également public, dans le [dépôt hotelier-tools-web](https://github.com/JuanmanDev/hotelier-tools-web).

## Tarifs

Toutes les fonctionnalités du tableau de bord sont gratuites pour tous les hôtels jusqu'au 10 janvier 2027. Les hôtels qui commencent en 2026 paient ensuite 50 € par mois pendant toute l'année 2027, toutes les fonctionnalités incluses. Les scripts pour navigateur restent gratuits. Les détails figurent dans les [Conditions d'utilisation](/terms).

## Contact

- **E-mail :** [JuanmaDeveloper+hotelierTools@outlook.com](mailto:JuanmaDeveloper+hotelierTools@outlook.com)
- **Formulaire de contact :** [page de contact](/contact)
- **GitHub :** [github.com/JuanmanDev](https://github.com/JuanmanDev)

Les signalements de bugs et les idées de nouveaux scripts sont les bienvenus sur GitHub ou par e-mail. Si Hotelier Tools vous fait gagner du temps, vous pouvez soutenir le projet via [GitHub Sponsors](https://github.com/sponsors/JuanmanDev), [Ko-fi](https://ko-fi.com/juanmandev) ou [PayPal](https://paypal.me/juanmandev).

Le traitement des données personnelles est expliqué dans la [Politique de confidentialité](/privacy).
