---
title: "Ajouter un utilisateur dans Little Hotelier (et donner à un outil son propre accès plutôt que votre mot de passe)"
seoTitle: "Ajouter un utilisateur dans Little Hotelier, étape par étape"
description: "Ajoutez un collègue ou un utilisateur d'intégration dans Little Hotelier, réglez droits et MFA, et connectez vos outils sans partager votre mot de passe."
date: 2026-11-05
updated: 2026-11-05
category: tips
tags: [little hotelier, utilisateurs, droits, mfa, passkeys, sécurité]
keywords: [ajouter un utilisateur little hotelier, little hotelier créer un utilisateur, droits utilisateur little hotelier, gérer les utilisateurs little hotelier, little hotelier authentification à deux facteurs, little hotelier e-mail d'activation expiré, utilisateur d'intégration little hotelier, donner accès au personnel little hotelier, little hotelier clé d'accès passkey]
feature: dashboard
demoPath: /credentials/hotelier-advanced
cover: /images/blog/demo/en/lh-advanced-user-invite.webp
coverAlt: "Page Advanced account : Use an alias of your own email avec l'adresse suggérée demo+hoteliertools@hotelier.tools et un bouton Copy, puis The invite email: copy the link, do not open it, avec un avertissement de ne pas cliquer sur le bouton de l'e-mail et trois étapes qui aboutissent au champ Activation link"
faq:
  - q: "Comment ajouter un nouvel utilisateur dans Little Hotelier ?"
    a: "Sur un appareil de confiance, cliquez sur le nom de votre établissement en haut à droite et choisissez Manage users, puis Add user. Saisissez l'e-mail, le nom et la langue, choisissez les applications et le niveau d'utilisateur, puis cliquez sur Save. La personne reçoit un e-mail d'activation, valable 24 heures."
  - q: "Quels droits peut avoir un utilisateur Little Hotelier ?"
    a: "Un utilisateur Admin a tous les droits. Un utilisateur General n'a que ce que vous cochez par application : pour Front Desk, Calendar, Reservations, Inventory, Guests, Reports, Housekeeping et Setup ; pour Channel Manager, Config, Inventory, Reservations et Payments."
  - q: "Faut-il la MFA pour ajouter des utilisateurs dans Little Hotelier ?"
    a: "Oui. La gestion des utilisateurs exige un appareil de confiance, et vous devez configurer l'authentification multifacteur avant de pouvoir en ajouter un. La MFA fonctionne avec l'application Little Hotelier, une application d'authentification ou une extension de navigateur ; le SMS et l'e-mail ne sont pas pris en charge."
  - q: "Faut-il donner mon propre mot de passe Little Hotelier à une intégration ?"
    a: "Mieux vaut éviter. Un utilisateur dédié à l'outil garde votre identifiant privé, fait apparaître ses actions à part dans l'historique, et peut être désactivé sans toucher à personne d'autre. Hotelier Tools appelle cela le compte Advanced."
  - q: "Que faire si le lien d'activation a déjà été ouvert ?"
    a: "Le jeton d'activation ne fonctionne qu'une fois. Si quelqu'un a cliqué sur le bouton de l'e-mail avant de coller le lien dans Hotelier Tools, faites renvoyer l'invitation par Little Hotelier et copiez le nouveau lien sans l'ouvrir."
  - q: "Hotelier Tools fait-il partie de Little Hotelier ?"
    a: "Non. Hotelier Tools est indépendant et n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec un utilisateur Little Hotelier que votre hôtel crée et contrôle."
---

Pour ajouter un utilisateur dans Little Hotelier, connectez-vous sur un appareil de confiance, cliquez sur le nom de votre établissement en haut à droite, choisissez **Manage users** et appuyez sur **Add user**. Saisissez l'e-mail, le nom et la langue de la personne, choisissez les applications dont elle a besoin, sélectionnez **Admin** ou **General** (et cochez les droits), puis **Save**. Elle reçoit un e-mail d'activation valable 24 heures. Pour un logiciel, faites de même avec un utilisateur à part : ne partagez jamais le mot de passe du propriétaire avec un outil.

Les étapes Little Hotelier ci-dessous ont été vérifiées dans son centre d'aide en novembre 2026.

## Comment ajouter un utilisateur dans Little Hotelier

Avant de commencer, deux conditions ([Create and manage users](https://helpcentre.littlehotelier.com/en/articles/8673881-create-and-manage-user-accounts-and-permissions)) :

- Vous devez avoir le droit **Manage users**.
- Vous devez être sur un **appareil de confiance**, dans un navigateur d'ordinateur ou de mobile. La gestion des utilisateurs n'est pas disponible dans l'application mobile, et vous ne pouvez ajouter un appareil de confiance qu'après avoir configuré la MFA.

Ensuite :

1. Cliquez sur le nom de votre établissement en haut à droite et sélectionnez **Manage users**.
2. Cliquez sur **Add user**.
3. Saisissez l'e-mail, le nom et la langue préférée de l'utilisateur.
4. Sélectionnez les applications dont il a besoin (Front Desk, Channel Manager, Direct Booking, Payments).
5. Choisissez un niveau d'utilisateur pour chacune et cochez les droits.
6. Cliquez sur **Save**.

Le nouvel utilisateur reçoit un e-mail d'activation, valable 24 heures, pour définir son mot de passe. Si cette adresse e-mail a déjà un utilisateur Little Hotelier, aucun e-mail d'activation n'est envoyé : la personne se connecte avec son mot de passe actuel ou utilise **Reset password**.

La nouvelle plateforme de Little Hotelier décrit le même parcours sous **User management** ([article help-platform](https://help-platform.littlehotelier.com/en/articles/10700088-create-and-manage-little-hotelier-users)). Suivez l'article qui correspond aux écrans que vous voyez.

### Quels droits donner

- **Admin** : tous les droits.
- **General** : seulement ce que vous cochez. Pour **Front Desk** : Calendar, Reservations, Inventory, Guests, Reports, Housekeeping et Setup. Pour **Channel Manager** : Config, Inventory, Reservations et Payments.

Un réceptionniste a généralement besoin de Front Desk avec Calendar, Reservations et Guests. Donnez **Manage users** au moins de personnes possible.

::screenshot{src="/images/config/permissions.webp" alt="Page de modification d'un utilisateur Little Hotelier en espagnol pour un utilisateur nommé Bot Facturas 2 : droit de gestion des utilisateurs non coché, Channel Manager et Insights désactivés, Direct Booking activé en General, et Front Desk activé en General avec seulement Calendar et Reservations cochés" caption="Un utilisateur General avec seulement Calendar et Reservations dans Front Desk : la configuration minimale d'une connexion simple." width="1639" height="1742"}
::

### Modifier, désactiver ou supprimer un utilisateur

- **Modifiez les droits** à tout moment depuis la liste des utilisateurs.
- **Disable** (désactiver) est la façon conseillée de couper un accès : vous pourrez le réactiver plus tard. **Delete** (supprimer) est définitif.
- **L'e-mail ne peut pas être modifié.** Créez un nouvel utilisateur avec la bonne adresse, puis supprimez l'ancien.
- Un utilisateur est bloqué après 6 tentatives de connexion échouées ou plus, et se débloque avec **Forgot password**.

## Authentification à deux facteurs (MFA) et passkeys

Little Hotelier rend la MFA obligatoire dans les 30 jours suivant la première connexion d'un utilisateur ([Set up MFA](https://helpcentre.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)). Chaque utilisateur choisit une méthode :

- l'**application mobile Little Hotelier** (recommandée) : confirmez un nombre correspondant avec le visage ou l'empreinte digitale ;
- une **application d'authentification** comme Google Authenticator, Microsoft Authenticator ou Authy (un code à 6 chiffres) ;
- une **extension de navigateur d'authentification** dans Chrome, Edge ou Firefox.

Les codes par téléphone, SMS et e-mail ne sont pas pris en charge. Un utilisateur qui a **Manage users** peut réinitialiser la MFA d'un autre utilisateur ([comment faire](https://helpcentre.littlehotelier.com/en/articles/13364672-how-to-reset-mfa-for-another-user)), qui choisit alors une nouvelle méthode à sa prochaine connexion.

La page de connexion, gérée par SiteMinder, peut aussi proposer **Continue with a passkey** à un utilisateur qui en a créé une. Le centre d'aide de Little Hotelier ne documente pas les passkeys en novembre 2026 : considérez-les comme facultatives et gardez la MFA configurée.

Une conséquence compte pour les outils : **un utilisateur avec MFA se voit demander un code à la connexion.** Un outil qui ne stocke qu'un mot de passe s'arrête à cette demande, car personne n'est là pour y répondre.

## Pourquoi un outil doit avoir son propre utilisateur

Beaucoup d'intégrations demandent « votre e-mail et votre mot de passe Little Hotelier ». Partager l'identifiant du propriétaire a de vrais inconvénients :

- **Le mot de passe expire** environ tous les trois mois, et l'outil s'arrête jusqu'à ce que quelqu'un saisisse le nouveau.
- **L'historique ne fait pas la différence.** Les modifications faites par l'outil ressemblent aux vôtres.
- **Les sessions entrent en conflit.** Le même utilisateur connecté deux fois peut déconnecter l'une des sessions.
- **Quand cette personne part**, la connexion part avec elle.
- **La MFA sur votre propre identifiant** est une demande à laquelle l'outil ne peut pas répondre.

Un utilisateur dédié à l'outil règle tout cela : sa propre adresse, ses propres droits, son propre second facteur, et vous pouvez le désactiver sans toucher à personne d'autre.

## La méthode rapide : le compte Advanced de Hotelier Tools

Hotelier Tools propose deux connexions sur **Credentials** (identifiants, `/credentials`) :

| | **Simple** (`/credentials/hotelier-simple`) | **Advanced** (`/credentials/hotelier-advanced`) |
|---|---|---|
| Identifiant | Votre propre e-mail et mot de passe Little Hotelier | Un nouvel utilisateur Little Hotelier, réservé à Hotelier Tools |
| Mot de passe | Expire environ tous les 3 mois ; vous collez le nouveau | Robuste, aléatoire, défini par Hotelier Tools ; personne n'a besoin de s'en souvenir |
| Double authentification | Non prise en charge : une demande de code l'arrête | Détient son propre secret d'authentification, et peut détenir une passkey |
| Droits | Front Desk (Calendar, Reservations) et Direct Booking | Tous les droits : toutes les fonctions marchent |

La page Simple commence volontairement par ses limites : les prix et l'inventaire ne peuvent pas être modifiés, et un mot de passe expiré arrête les automatisations sans prévenir, quelques jours plus tard.

::screenshot{src="/images/blog/demo/en/lh-simple-account-limits.webp" alt="Page Simple account avec Before you use this: the limits, qui liste un mot de passe expirant environ tous les 3 mois, l'absence de double authentification, des droits limités avec ce qui fonctionne et ce qui est restreint ou désactivé, et un identifiant personnel partagé avec un robot, plus un bouton Use the Advanced way" caption="Le compte Simple est rapide, mais ses limites arrêtent les automatisations des semaines plus tard. Lisez-les avant de le choisir." path="/credentials/hotelier-simple"}
::

### Configurer le compte Advanced (ce que vous faites aujourd'hui)

1. Ouvrez **Credentials > Advanced** (`/credentials/hotelier-advanced`). Sous **Use an alias of your own email**, copiez la **Suggested address for the new user**, par exemple `vous+hoteliertools@votrehotel.fr`. Little Hotelier exige une nouvelle adresse ; une étiquette avec « + » arrive dans votre propre boîte chez la plupart des fournisseurs (Gmail, Outlook / Microsoft 365, iCloud, Fastmail).
2. Dans Little Hotelier, ajoutez un utilisateur avec cette adresse et **tous les droits activés**, en suivant les étapes ci-dessus.
3. Ouvrez l'e-mail d'invitation et **ne cliquez pas sur le bouton**. Faites un clic droit dessus et choisissez **Copier l'adresse du lien** (sur téléphone : appui long, **Copier le lien**). Le jeton d'activation ne fonctionne qu'une fois : l'ouvrir le consomme sur la page de mot de passe de Little Hotelier.
4. De retour sur la page Advanced, choisissez **Use an activation link**, collez-le dans **Activation link** et enregistrez.
5. Hotelier Tools active l'utilisateur : il définit un mot de passe robuste et aléatoire, le stocke chiffré et se connecte une fois pour vérifier.

Vous avez déjà créé l'utilisateur et connaissez son mot de passe ? Choisissez plutôt **Enter the credentials** et ajoutez son secret d'authentification (OTP) ou une passkey.

::screenshot{src="/images/blog/demo/en/lh-advanced-user-invite.webp" alt="Page Advanced account : Use an alias of your own email avec l'adresse suggérée demo+hoteliertools@hotelier.tools et un bouton Copy, puis The invite email: copy the link, do not open it, avec un avertissement de ne pas cliquer sur le bouton de l'e-mail et trois étapes qui aboutissent au champ Activation link" caption="Créez l'utilisateur avec votre propre e-mail plus une étiquette, puis collez le lien d'invitation au lieu de l'ouvrir." path="/credentials/hotelier-advanced"}
::

Vous pouvez donner moins de droits à cet utilisateur, mais Hotelier Tools prévient clairement que certaines fonctions échoueront alors et que cette configuration n'est pas prise en charge. Modifier les prix, par exemple, demande le rôle Rates & Inventory.

### MFA et passkeys sur l'utilisateur Advanced

- **Quand Little Hotelier commence à exiger la MFA**, Hotelier Tools inscrit lui-même une application d'authentification sur l'utilisateur Advanced, stocke le secret chiffré et répond au code à partir de là. Il ne le fait jamais sur votre identifiant Simple, car un secret détenu uniquement par l'application vous bloquerait hors de votre propre compte. S'il faut le faire à la main, le panneau du compte propose **Set up two-step verification**.
- **Une passkey détenue par le serveur (bêta).** **Passkeys and two-step verification** (`/credentials/passkeys`) peut ajouter une passkey à l'utilisateur Advanced (**Add passkey**, puis **Test passkey**). Les connexions programmées l'essaient en premier : elle fonctionne même quand le mot de passe a expiré et évite l'étape du code. Une fois une passkey enregistrée, le bouton devient **Replace passkey**. Le propriétaire peut **Download passkey** pour en garder une copie. L'ajouter ou la tester représente une connexion à Little Hotelier.

::screenshot{src="/images/blog/demo/en/add-user-lh-passkeys.webp" alt="Page Passkeys and two-step verification (bêta) : la carte Little Hotelier passkey (advanced login), Stored et On, pour bot-demo-sol@example.com avec sa date de création, l'algorithme ES256, le site auth0.siteminder.com, les identifiants credential et passkey et la dernière connexion, et les boutons Replace passkey, Test passkey et Download passkey ; en dessous, Authenticator codes (TOTP) avec Advanced login Stored et Simple login None" caption="L'utilisateur Advanced détient une passkey et un secret d'authentification : les connexions programmées ne s'arrêtent pas à un code." path="/credentials/passkeys"}
::

### Pour le supprimer

Désactivez ou supprimez l'utilisateur dans Little Hotelier. L'accès de Hotelier Tools prend fin avec lui, et votre propre identifiant n'est pas touché.

## Bientôt : Hotelier Tools comme utilisateur, sur invitation

La page Advanced comporte aussi une carte **Hotelier Tools as a user in Little Hotelier**. L'idée : Hotelier Tools donne à votre établissement une adresse d'accès privée sur son propre domaine (`lh-…@in.hotelier.tools`). Vous invitez cette adresse dans Little Hotelier avec les droits de votre choix, et Hotelier Tools accepte l'invitation, définit le mot de passe et la double authentification et garde la session. Rien n'est partagé avec d'autres hôtels, et le domaine ne devient jamais votre identifiant principal ni votre e-mail de récupération ([comment fonctionnent ces adresses](/blog/hotel-email-address)).

Voici exactement où en sont les choses au 5 novembre 2026 :

- **Développé :** l'adresse (**Get the login address**, après avoir saisi votre numéro d'établissement Little Hotelier), les états de l'accès (**Waiting for the invitation**, **Active**, **Paused**, **Retired**), **Retire this login**, et les règles de sécurité. Les alertes de sécurité sont transférées au propriétaire et jamais cliquées.
- **Pas encore développé :** la lecture et l'acceptation de l'invitation de Little Hotelier. Aucune vraie invitation n'a encore été capturée, donc **chaque message envoyé à l'adresse d'accès est retenu pour une personne**, et rien n'y est ouvert. La carte le dit elle-même.
- **Ce qu'une personne fait aujourd'hui :** suivre les étapes du lien d'activation ci-dessus.

::screenshot{src="/images/blog/demo/en/add-user-lh-login-address.webp" alt="Page Advanced account avec la carte Hotelier Tools as a user in Little Hotelier, Waiting for the invitation : un avertissement indiquant que la lecture automatique des invitations de Little Hotelier n'est pas encore disponible, l'adresse d'accès lh-dwfenz3etz@in.hotel-demo.invalid (le domaine fictif de la démo) avec Copy, le numéro d'établissement Little Hotelier 90210, Read sign-in codes désactivé, Retire this login et, sous Mail to this login, l'invitation You have been invited to Hotel Demo Sol on Little Hotelier, retenue pour vérification" caption="L'invitation arrive à l'adresse d'accès et attend une personne. Rien de ce qu'elle contient n'est encore suivi." path="/credentials/hotelier-advanced"}
::

## Vos collègues : les comptes d'équipe Hotelier Tools

Les membres de l'équipe n'ont pas besoin de l'utilisateur d'intégration. Dans **Settings > Team & roles** (`/settings/team`), appuyez sur **Invite someone**, saisissez leur e-mail et choisissez un rôle : **Administrator**, **Manager**, **Front desk**, **Revenue manager**, **Accountant**, **Read-only**, ou un rôle personnalisé. Ils acceptent via le lien de l'e-mail (valable 7 jours) et se connectent avec leur propre identifiant Hotelier Tools.

Ce sont des identifiants Hotelier Tools, pas des utilisateurs Little Hotelier. Hotelier Tools travaille dans Little Hotelier via l'unique connexion de l'établissement, et personne dans l'équipe ne voit son mot de passe ; seul le propriétaire le peut. Les modifications faites par un collègue apparaissent dans Little Hotelier au nom de l'utilisateur connecté, tandis que Hotelier Tools enregistre qui les a vraiment faites. Une personne qui travaille directement dans l'extranet Little Hotelier a toujours besoin de son propre utilisateur Little Hotelier.

::screenshot{src="/images/blog/demo/en/team-hotelier-tools-logins.webp" alt="Réglages Team avec les boutons Roles et Invite someone, un encadré expliquant que ces identifiants servent uniquement à Hotelier Tools, pas à Little Hotelier, 1 place utilisée, et le tableau de l'équipe avec Demo Manager en Owner, Active" caption="Chaque collègue a son propre identifiant et son rôle dans Hotelier Tools ; le mot de passe Little Hotelier reste au propriétaire." path="/settings/team"}
::

::demo-cta{path="/credentials/hotelier-advanced"}
::

Le tableau de bord est gratuit pour tous les hôtels jusqu'au début de la facturation, le 10 janvier 2027.

::callout{type="info" title="Outil indépendant"}
Hotelier Tools n'est ni affilié à SiteMinder ou Little Hotelier, ni approuvé par eux. Il se connecte avec un utilisateur Little Hotelier que votre hôtel crée, contrôle et peut désactiver à tout moment.
::

À lire aussi : [l'API de Little Hotelier](/blog/little-hotelier-api), [connecter Claude à Little Hotelier](/blog/connect-claude-to-little-hotelier), [une adresse e-mail d'hôtel pour les accès et les factures](/blog/hotel-email-address).

## Résumé

- Dans Little Hotelier : nom de l'établissement > **Manage users** > **Add user**, sur un appareil de confiance ; l'e-mail d'activation est valable 24 heures.
- **Admin** a tout ; **General** n'a que les droits cochés par application.
- La MFA est obligatoire dans les 30 jours ; les codes par SMS et e-mail ne sont pas pris en charge.
- Donnez aux outils leur propre utilisateur, pas votre mot de passe. Dans Hotelier Tools, c'est le compte **Advanced** : collez le lien d'invitation et il définit lui-même le mot de passe et la double authentification.
- L'invitation vers une adresse privée `lh-…` arrive bientôt ; pour l'instant, ces messages sont retenus pour une personne.
- Les collègues reçoivent des identifiants d'équipe Hotelier Tools avec des rôles, pas votre mot de passe Little Hotelier.
