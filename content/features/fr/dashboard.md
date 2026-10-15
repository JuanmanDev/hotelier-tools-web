---
title: "Votre établissement Little Hotelier dans un seul tableau de bord"
---

Le tableau de bord de Hotelier Tools est l'écran sur lequel vous arrivez après la connexion : il montre quelles connexions fonctionnent, quelles fonctionnalités tournent, qui arrive ensuite et ce qui s'est passé récemment. Il se place à côté de Little Hotelier et utilise l'identifiant Little Hotelier de votre établissement, de sorte que vos réservations restent là où elles sont.

## Comment ça marche

1. **Connectez-vous une seule fois.** Sur **Credentials** (`/credentials`), vous enregistrez votre identifiant Little Hotelier. Il est stocké chiffré (AES-256-GCM). Booking.com, une messagerie e-mail et WhatsApp sont des connexions facultatives que vous ajoutez plus tard depuis le même endroit.
2. **La fiche de votre établissement se remplit toute seule.** L'adresse, les chambres, les taxes et les politiques sont lues depuis Little Hotelier et tenues à jour sur **Settings > Property & AI knowledge** (`/settings/property`). La messagerie clients et la page publique de la liste d'attente utilisent cette fiche.
3. **L'écran d'accueil montre l'état des choses.** Connexions, fonctionnalités en cours, prochaines arrivées et activité récente se trouvent sur un seul écran.
4. **La recherche trouve le reste.** Appuyez sur **Ctrl+K** (**Cmd+K** sur Mac) pour chercher des pages, des entrées de la liste d'attente, des tâches planifiées et des conversations. Elle ignore les accents et comprend les mots anglais et espagnols pour une même chose : « lista de espera » trouve l'Availability Queue.

D'autres gains de temps pour la réception se trouvent dans [Astuces et fonctions cachées de Little Hotelier](/blog/little-hotelier-tips).

## Ce dont vous avez besoin

- Un compte Little Hotelier et son identifiant.
- Un compte Hotelier Tools, créé sur [dashboard.hotelier.tools/register](https://dashboard.hotelier.tools/register). Vous pouvez vous connecter avec une clé d'accès (passkey).
- Rien à installer. Il fonctionne dans le navigateur.

Envie de jeter d'abord un coup d'œil ? La [démo publique](https://demo.hotelier.tools/) utilise un hôtel inventé, et ses identifiants de connexion figurent sur sa page de connexion.

## Limites et bon à savoir

- **Statut : bêta.** Il fonctionne bien et est encore en finition.
- **Indépendant.** Hotelier Tools n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il ne peut faire que ce que votre identifiant Little Hotelier permet de faire dans l'application web.
- **Un mot de passe expiré met tout en pause.** Si le mot de passe de votre Little Hotelier ne fonctionne plus, les tâches planifiées se mettent en pause au lieu de réessayer, ce qui protège votre compte d'un verrouillage. Enregistrez le nouveau mot de passe sur **Credentials** ou appuyez sur **Check now & resume**.
- **La recherche parle deux langues.** Elle comprend les termes anglais et espagnols.

## Questions

**Remplace-t-il Little Hotelier ?**
Non. Les réservations, les tarifs et le calendrier restent dans Little Hotelier. Le tableau de bord les lit et ajoute ce que Little Hotelier ne fait pas.

**Combien ça coûte ?**
Toutes les fonctionnalités sont gratuites pour tous les hôtels jusqu'au 10 janvier 2027.
