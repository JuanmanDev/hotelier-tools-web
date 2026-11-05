---
title: "So fügen Sie einen Nutzer in Little Hotelier hinzu (und geben einem Tool einen eigenen Login statt Ihres Passworts)"
seoTitle: "Nutzer in Little Hotelier hinzufügen: Schritt für Schritt"
description: "Legen Sie in Little Hotelier einen Mitarbeiter oder Integrationsnutzer an, setzen Sie Rechte und MFA und verbinden Sie Tools ohne Ihr eigenes Passwort."
date: 2026-11-05
category: tips
tags: [little hotelier, nutzer, berechtigungen, mfa, passkeys, sicherheit]
keywords: [little hotelier nutzer hinzufügen, little hotelier benutzer anlegen, little hotelier benutzerrechte, little hotelier benutzer verwalten, little hotelier mfa einrichten, little hotelier aktivierungslink abgelaufen, little hotelier integration benutzer, mitarbeiter zugang little hotelier, little hotelier passkey]
feature: dashboard
demoPath: /credentials/hotelier-advanced
cover: /images/blog/demo/en/lh-advanced-user-invite.webp
coverAlt: "Seite Advanced account: Use an alias of your own email mit der vorgeschlagenen Adresse demo+hoteliertools@hotelier.tools und einer Schaltfläche Copy, darunter The invite email: copy the link, do not open it, mit der Warnung, nicht auf die Schaltfläche in der E-Mail zu klicken, und drei Schritten bis zum Feld Activation link"
faq:
  - q: "Wie lege ich in Little Hotelier einen neuen Nutzer an?"
    a: "Klicken Sie auf einem vertrauenswürdigen Gerät oben rechts auf den Namen Ihrer Unterkunft, wählen Sie Manage users und dann Add user. Geben Sie E-Mail, Name und Sprache ein, wählen Sie die Apps und die Nutzerstufe und klicken Sie auf Save. Die Person erhält eine Aktivierungs-E-Mail, die 24 Stunden gültig ist."
  - q: "Welche Berechtigungen kann ein Little-Hotelier-Nutzer haben?"
    a: "Ein Admin-Nutzer hat alle Berechtigungen. Ein General-Nutzer bekommt nur, was Sie pro App anhaken: bei Front Desk Calendar, Reservations, Inventory, Guests, Reports, Housekeeping und Setup; bei Channel Manager Config, Inventory, Reservations und Payments."
  - q: "Brauche ich MFA, um in Little Hotelier Nutzer anzulegen?"
    a: "Ja. Die Nutzerverwaltung braucht ein vertrauenswürdiges Gerät, und Sie müssen die Multi-Faktor-Authentifizierung einrichten, bevor Sie einen Nutzer anlegen können. MFA funktioniert mit der Little-Hotelier-App, einer Authenticator-App oder einer Browser-Erweiterung; SMS und E-Mail werden nicht unterstützt."
  - q: "Sollte ich einer Integration mein eigenes Little-Hotelier-Passwort geben?"
    a: "Besser nicht. Ein eigener Nutzer für das Tool hält Ihren Login privat, zeigt seine Aktionen im Protokoll getrennt an und lässt sich deaktivieren, ohne andere zu betreffen. Hotelier Tools nennt das den Advanced account."
  - q: "Was passiert, wenn der Aktivierungslink schon geöffnet wurde?"
    a: "Das Aktivierungstoken funktioniert nur einmal. Hat jemand auf die Schaltfläche in der E-Mail geklickt, bevor der Link in Hotelier Tools eingefügt wurde, lassen Sie Little Hotelier die Einladung erneut senden und kopieren Sie den neuen Link, ohne ihn zu öffnen."
  - q: "Gehört Hotelier Tools zu Little Hotelier?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit einem Little-Hotelier-Nutzer, den Ihr Hotel anlegt und kontrolliert."
---

Um in Little Hotelier einen Nutzer hinzuzufügen, melden Sie sich auf einem vertrauenswürdigen Gerät an, klicken oben rechts auf den Namen Ihrer Unterkunft, wählen **Manage users** und drücken **Add user**. Geben Sie E-Mail, Name und Sprache der Person ein, wählen Sie die benötigten Apps, wählen Sie **Admin** oder **General** (und haken Sie die Berechtigungen an), dann **Save**. Die Person erhält eine Aktivierungs-E-Mail, die 24 Stunden gültig ist. Für eine Software machen Sie dasselbe mit einem separaten Nutzer: Geben Sie das Passwort des Inhabers nie an ein Tool weiter.

Die folgenden Schritte in Little Hotelier wurden mit dem Hilfecenter, Stand November 2026, geprüft.

## So fügen Sie in Little Hotelier einen Nutzer hinzu

Bevor Sie beginnen, zwei Voraussetzungen ([Create and manage users](https://helpcentre.littlehotelier.com/en/articles/8673881-create-and-manage-user-accounts-and-permissions)):

- Sie brauchen die Berechtigung **Manage users**.
- Sie müssen auf einem **vertrauenswürdigen Gerät** sein, im Browser am Computer oder Handy. In der mobilen App gibt es keine Nutzerverwaltung, und ein vertrauenswürdiges Gerät können Sie erst nach der Einrichtung von MFA hinzufügen.

Dann:

1. Klicken Sie oben rechts auf den Namen Ihrer Unterkunft und wählen Sie **Manage users**.
2. Klicken Sie auf **Add user**.
3. Geben Sie E-Mail, Name und bevorzugte Sprache des Nutzers ein.
4. Wählen Sie die Apps, die der Nutzer braucht (Front Desk, Channel Manager, Direct Booking, Payments).
5. Wählen Sie für jede eine Nutzerstufe und haken Sie die Berechtigungen an.
6. Klicken Sie auf **Save**.

Der neue Nutzer erhält eine Aktivierungs-E-Mail, 24 Stunden gültig, um sein Passwort festzulegen. Gibt es zu dieser E-Mail-Adresse schon einen Little-Hotelier-Nutzer, wird keine Aktivierungs-E-Mail gesendet: Die Person meldet sich mit ihrem bestehenden Passwort an oder nutzt **Reset password**.

Die neuere Plattform von Little Hotelier beschreibt denselben Ablauf unter **User management** ([Artikel auf help-platform](https://help-platform.littlehotelier.com/en/articles/10700088-create-and-manage-little-hotelier-users)). Nutzen Sie den Artikel, der zu den Bildschirmen passt, die Sie sehen.

### Welche Berechtigungen Sie vergeben

- **Admin**: alle Berechtigungen.
- **General**: nur, was Sie anhaken. Bei **Front Desk**: Calendar, Reservations, Inventory, Guests, Reports, Housekeeping und Setup. Bei **Channel Manager**: Config, Inventory, Reservations und Payments.

Eine Rezeptionskraft braucht meist Front Desk mit Calendar, Reservations und Guests. Vergeben Sie **Manage users** an so wenige Personen wie möglich.

::screenshot{src="/images/config/permissions.webp" alt="Bearbeitungsseite eines Little-Hotelier-Nutzers auf Spanisch für einen Nutzer namens Bot Facturas 2: Verwaltungsrecht für Nutzer nicht angehakt, Channel Manager und Insights aus, Direct Booking an als General und Front Desk an als General mit nur Calendar und Reservations angehakt" caption="Ein General-Nutzer mit nur Calendar und Reservations in Front Desk: die schmale Einrichtung einer einfachen Verbindung." width="1639" height="1742"}
::

### Einen Nutzer ändern, deaktivieren oder entfernen

- **Berechtigungen bearbeiten** Sie jederzeit aus der Nutzerliste.
- **Disable** ist der empfohlene Weg, den Zugang zu sperren: Sie können ihn später wieder aktivieren. **Delete** ist endgültig.
- **Die E-Mail-Adresse lässt sich nicht ändern.** Legen Sie einen neuen Nutzer mit der richtigen Adresse an und löschen Sie dann den alten.
- Nach 6 oder mehr fehlgeschlagenen Anmeldeversuchen wird ein Nutzer gesperrt und mit **Forgot password** wieder entsperrt.

## Zwei-Faktor-Authentifizierung (MFA) und Passkeys

Little Hotelier macht MFA innerhalb von 30 Tagen nach der ersten Anmeldung eines Nutzers zur Pflicht ([Set up MFA](https://helpcentre.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)). Jeder Nutzer wählt eine Methode:

- die **mobile App von Little Hotelier** (empfohlen): Sie bestätigen eine passende Zahl per Gesicht oder Fingerabdruck;
- eine **Authenticator-App** wie Google Authenticator, Microsoft Authenticator oder Authy (ein 6-stelliger Code);
- eine **Authenticator-Browsererweiterung** in Chrome, Edge oder Firefox.

Codes per Telefon, SMS oder E-Mail werden nicht unterstützt. Ein Nutzer mit **Manage users** kann die MFA eines anderen Nutzers zurücksetzen ([Anleitung](https://helpcentre.littlehotelier.com/en/articles/13364672-how-to-reset-mfa-for-another-user)), und dieser richtet bei der nächsten Anmeldung eine neue Methode ein.

Die Anmeldeseite, die SiteMinder betreibt, kann einem Nutzer, der einen Passkey angelegt hat, auch **Continue with a passkey** anbieten. Das Hilfecenter von Little Hotelier dokumentiert Passkeys Stand November 2026 nicht. Betrachten Sie sie also als optional und lassen Sie MFA eingerichtet.

Eine Folge ist für Tools wichtig: **Ein Nutzer mit MFA wird bei der Anmeldung nach einem Code gefragt.** Ein Tool, das nur ein Passwort speichert, bleibt an dieser Abfrage hängen, weil niemand da ist, der antwortet.

## Warum ein Tool einen eigenen Nutzer bekommen sollte

Viele Integrationen fragen nach „Ihrer Little-Hotelier-E-Mail und Ihrem Passwort“. Den Login des Inhabers zu teilen, hat echte Nachteile:

- **Das Passwort läuft ab**, etwa alle drei Monate, und das Tool steht still, bis jemand das neue eingibt.
- **Das Protokoll kann Sie nicht unterscheiden.** Änderungen des Tools sehen aus wie Ihre.
- **Sitzungen kollidieren.** Ist derselbe Nutzer zweimal angemeldet, kann eine Sitzung die andere abmelden.
- **Wenn diese Person geht**, geht die Verbindung mit.
- **MFA auf Ihrem eigenen Login** ist eine Abfrage, die das Tool nicht beantworten kann.

Ein eigener Nutzer für das Tool löst all das: eigene Adresse, eigene Berechtigungen, eigener zweiter Faktor, und Sie können ihn deaktivieren, ohne jemand anderen zu betreffen.

## Der schnellere Weg: der Advanced account von Hotelier Tools

Hotelier Tools bietet unter **Credentials** (`/credentials`) zwei Verbindungen:

| | **Simple** (`/credentials/hotelier-simple`) | **Advanced** (`/credentials/hotelier-advanced`) |
|---|---|---|
| Login | Ihre eigene Little-Hotelier-E-Mail und Ihr Passwort | Ein neuer Little-Hotelier-Nutzer, nur für Hotelier Tools |
| Passwort | Läuft etwa alle 3 Monate ab; Sie fügen das neue ein | Stark, zufällig, von Hotelier Tools gesetzt; niemand muss es sich merken |
| Zwei-Faktor | Nicht unterstützt: Eine Code-Abfrage stoppt es | Hat sein eigenes Authenticator-Geheimnis und kann einen Passkey haben |
| Berechtigungen | Front Desk (Calendar, Reservations) und Direct Booking | Alle Berechtigungen: Jede Funktion arbeitet |

Die Seite Simple nennt ihre Grenzen bewusst zuerst: Preise und Kontingente lassen sich nicht schreiben, und ein abgelaufenes Passwort stoppt Automatisierungen Tage später ohne Vorwarnung.

::screenshot{src="/images/blog/demo/en/lh-simple-account-limits.webp" alt="Seite Simple account mit Before you use this: the limits, die ein etwa alle 3 Monate ablaufendes Passwort, fehlende Zwei-Faktor-Unterstützung, eingeschränkte Berechtigungen mit dem, was funktioniert und was eingeschränkt oder aus ist, und einen mit einem Roboter geteilten persönlichen Login aufzählt, dazu eine Schaltfläche Use the Advanced way" caption="Der Simple account ist schnell eingerichtet, aber seine Grenzen stoppen Automatisierungen Wochen später. Lesen Sie sie, bevor Sie ihn wählen." path="/credentials/hotelier-simple"}
::

### Den Advanced account einrichten (was Sie heute tun)

1. Öffnen Sie **Credentials > Advanced** (`/credentials/hotelier-advanced`). Kopieren Sie unter **Use an alias of your own email** die **Suggested address for the new user**, zum Beispiel `sie+hoteliertools@ihrhotel.de`. Little Hotelier braucht eine neue Adresse; ein Plus-Zusatz landet bei den meisten Anbietern in Ihrem eigenen Postfach (Gmail, Outlook / Microsoft 365, iCloud, Fastmail).
2. Legen Sie in Little Hotelier mit den Schritten oben einen Nutzer mit dieser Adresse und **allen Berechtigungen** an.
3. Öffnen Sie die Einladungs-E-Mail und **klicken Sie nicht auf die Schaltfläche**. Klicken Sie mit der rechten Maustaste darauf und wählen Sie **Link-Adresse kopieren** (am Handy: gedrückt halten, **Link kopieren**). Das Aktivierungstoken funktioniert nur einmal: Wer ihn öffnet, verbraucht ihn auf der Passwortseite von Little Hotelier.
4. Wählen Sie zurück auf der Seite Advanced **Use an activation link**, fügen Sie den Link in **Activation link** ein und speichern Sie.
5. Hotelier Tools aktiviert den Nutzer: Es setzt ein starkes Zufallspasswort, speichert es verschlüsselt und meldet sich einmal zur Bestätigung an.

Haben Sie den Nutzer schon angelegt und kennen sein Passwort? Wählen Sie stattdessen **Enter the credentials** und fügen Sie sein Authenticator-Geheimnis (OTP) oder einen Passkey hinzu.

::screenshot{src="/images/blog/demo/en/lh-advanced-user-invite.webp" alt="Seite Advanced account: Use an alias of your own email mit der vorgeschlagenen Adresse demo+hoteliertools@hotelier.tools und einer Schaltfläche Copy, darunter The invite email: copy the link, do not open it, mit der Warnung, nicht auf die Schaltfläche in der E-Mail zu klicken, und drei Schritten bis zum Feld Activation link" caption="Legen Sie den Nutzer mit Ihrer eigenen E-Mail plus Zusatz an und fügen Sie dann den Einladungslink ein, statt ihn zu öffnen." path="/credentials/hotelier-advanced"}
::

Sie können diesem Nutzer weniger Berechtigungen geben, aber Hotelier Tools sagt klar, dass dann manche Funktionen scheitern und diese Einrichtung nicht unterstützt wird. Preise zu schreiben braucht zum Beispiel die Rolle Rates & Inventory.

### MFA und Passkeys beim Advanced-Nutzer

- **Sobald Little Hotelier MFA verlangt**, registriert Hotelier Tools selbst einen Authenticator beim Advanced-Nutzer, speichert das Geheimnis verschlüsselt und beantwortet ab dann den Code. Bei Ihrem Simple-Login tut es das nie, denn ein Geheimnis, das nur die App kennt, würde Sie aus Ihrem eigenen Konto aussperren. Falls es von Hand nötig ist, hat das Kontopanel **Set up two-step verification**.
- **Ein auf dem Server gehaltener Passkey (Beta).** **Passkeys and two-step verification** (`/credentials/passkeys`) kann dem Advanced-Nutzer einen Passkey hinzufügen (**Add passkey**, dann **Test passkey**). Geplante Anmeldungen probieren ihn zuerst: Er funktioniert auch bei abgelaufenem Passwort und überspringt den Code-Schritt. Der Inhaber kann mit **Download passkey** eine Kopie behalten. Hinzufügen oder Testen bedeutet je eine Anmeldung bei Little Hotelier.

### So entfernen Sie ihn

Deaktivieren oder löschen Sie den Nutzer in Little Hotelier. Damit endet der Zugriff von Hotelier Tools, und Ihr eigener Login bleibt unberührt.

## Als Nächstes: Hotelier Tools als Nutzer per Einladung

Die Seite Advanced hat auch eine Karte **Hotelier Tools as a user in Little Hotelier**. Die Idee: Hotelier Tools gibt Ihrem Haus eine private Login-Adresse auf seiner eigenen Domain (`lh-…@in.hotelier.tools`). Sie laden diese Adresse in Little Hotelier mit den Berechtigungen Ihrer Wahl ein, und Hotelier Tools nimmt die Einladung an, setzt Passwort und Zwei-Faktor-Verifizierung und hält die Sitzung. Nichts wird mit anderen Hotels geteilt, und die Domain wird nie Ihr Haupt-Login oder Ihre Wiederherstellungs-E-Mail ([wie diese Adressen funktionieren](/blog/hotel-email-address)).

So ist der genaue Stand am 5. November 2026:

- **Gebaut:** die Adresse (**Get the login address**, nachdem Sie Ihre Little-Hotelier-Unterkunftsnummer eingegeben haben), die Zustände des Logins (**Waiting for the invitation**, **Active**, **Paused**, **Retired**), **Retire this login** und die Sicherheitsregeln. Sicherheitswarnungen werden an den Inhaber weitergeleitet und nie angeklickt.
- **Noch nicht gebaut:** das Lesen und Annehmen der Einladung von Little Hotelier. Es wurde noch keine echte Einladung erfasst, deshalb wird **jede Nachricht an die Login-Adresse für eine Person zurückgehalten**, und nichts darin wird geöffnet. Die Karte sagt das selbst.
- **Was eine Person heute tut:** die Schritte mit dem Aktivierungslink oben.

## Ihre Kollegen: Teamkonten in Hotelier Tools

Teammitglieder brauchen den Integrationsnutzer nicht. Drücken Sie unter **Settings > Team & roles** (`/settings/team`) auf **Invite someone**, geben Sie die E-Mail ein und wählen Sie eine Rolle: **Administrator**, **Manager**, **Front desk**, **Revenue manager**, **Accountant**, **Read-only** oder eine eigene Rolle. Die Person nimmt über den Link in der E-Mail an (7 Tage gültig) und meldet sich mit ihrem eigenen Hotelier-Tools-Login an.

Das sind Logins für Hotelier Tools, keine Little-Hotelier-Nutzer. Hotelier Tools arbeitet in Little Hotelier über die eine Verbindung des Hauses, und niemand im Team sieht deren Passwort; nur der Inhaber kann es. Änderungen eines Kollegen erscheinen in Little Hotelier als der verbundene Nutzer, während Hotelier Tools festhält, wer sie wirklich gemacht hat. Wer selbst im Extranet von Little Hotelier arbeitet, braucht weiterhin einen eigenen Little-Hotelier-Nutzer.

::screenshot{src="/images/blog/demo/en/team-hotelier-tools-logins.webp" alt="Team-Einstellungen mit den Schaltflächen Roles und Invite someone, einem Kasten, der erklärt, dass diese Logins nur für Hotelier Tools gelten, nicht für Little Hotelier, 1 belegter Platz und die Teamtabelle mit Demo Manager als Owner, Active" caption="Jeder Kollege bekommt einen eigenen Hotelier-Tools-Login mit Rolle; das Little-Hotelier-Passwort bleibt beim Inhaber." path="/settings/team"}
::

::demo-cta{path="/credentials/hotelier-advanced"}
::

Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit einem Little-Hotelier-Nutzer, den Ihr Hotel anlegt, kontrolliert und jederzeit deaktivieren kann.
::

Siehe auch: [die Little-Hotelier-API](/blog/little-hotelier-api), [Claude mit Little Hotelier verbinden](/blog/connect-claude-to-little-hotelier), [eine Hotel-E-Mail-Adresse für Logins und Rechnungen](/blog/hotel-email-address).

## Zusammenfassung

- In Little Hotelier: Unterkunftsname > **Manage users** > **Add user**, auf einem vertrauenswürdigen Gerät; die Aktivierungs-E-Mail gilt 24 Stunden.
- **Admin** hat alles; **General** bekommt nur die Berechtigungen, die Sie pro App anhaken.
- MFA ist innerhalb von 30 Tagen Pflicht; Codes per SMS und E-Mail werden nicht unterstützt.
- Geben Sie Tools einen eigenen Nutzer, nicht Ihr Passwort. In Hotelier Tools ist das der **Advanced** account: Fügen Sie den Einladungslink ein, und es setzt Passwort und Zwei-Faktor-Verifizierung selbst.
- Die Einladung an eine private `lh-…`-Adresse kommt noch; heute werden diese Nachrichten für eine Person zurückgehalten.
- Kollegen bekommen Teamlogins mit Rollen in Hotelier Tools, nicht Ihr Little-Hotelier-Passwort.
