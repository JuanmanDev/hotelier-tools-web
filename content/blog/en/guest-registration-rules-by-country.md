---
title: "Guest registration rules by country (2026): Spain, Italy, Portugal, Germany, France, Brazil, Thailand and Indonesia"
seoTitle: "Hotel guest registration rules by country (2026)"
description: "Which guests hotels must register, what data, how fast and where: Spain, Italy, Portugal, Germany, France, Brazil, Thailand, Indonesia. Official links."
date: 2026-10-03
category: compliance
tags: [guest registration, compliance, id, police, little hotelier]
keywords: [hotel check in id requirements, why do hotels scan your passport, guest registration hotel police, alloggiati web, meldeschein hotel, fiche de police hotel, siba alojamento local, tm30 hotel]
demoPath: /
cover: /images/blog/demo/en/automated-checks-moment-on-arrival.webp
coverAlt: "When they arrive checks in Hotelier Tools: ID / passport (police register), physical room assignment and address and origin validation switched on, with what each check can and cannot do"
faq:
  - q: "Why do hotels ask for my passport at check-in?"
    a: "Because the law in many countries requires it. Spain, Italy and Brazil register every guest, and Portugal, France, Germany, Thailand and Indonesia register foreign guests, usually by recording the passport or ID details and sending them to the police or immigration within hours or days."
  - q: "Do EU citizens count as foreign guests?"
    a: "Yes, where the rule is about foreigners. Portugal's SIBA and France's fiche de police explicitly include other EU nationals, and Germany's registration form now applies to every guest who is not a German citizen."
  - q: "Can a hotel keep a copy of my passport?"
    a: "It depends on the country and on data protection law. Most registration rules ask the hotel to check the document and record its details, not to keep a copy. In Spain the data protection agency says a copy of the DNI is generally not needed. Ask the hotel why it keeps a copy and for how long."
  - q: "Can my PMS send the registrations automatically?"
    a: "Often, yes. Spain, Italy, Portugal and Brazil accept data from software through web services. Little Hotelier's Guest Engagement compliance reporting covers Italy, Spain, Portugal, Germany, Switzerland, Austria, Croatia, the Czech Republic and Colombia, and partner apps such as Chekin cover more countries."
  - q: "Do children have to be registered?"
    a: "Usually, yes, but the details differ. Spain registers minors with their data given by the adult and requires the relationship; France lets under-15s go on an adult's form; Germany only counts accompanying children; Brazil links minors to a parent's record."
  - q: "Does Hotelier Tools send guest data to the police?"
    a: "No. Hotelier Tools does not send registrations to any authority. It flags reservations with a missing ID or address so you can complete them in time. It is independent and not affiliated with or endorsed by SiteMinder or Little Hotelier."
---

Many countries require hotels to record their guests' identity and pass it to the police or immigration. Spain, Italy and Brazil register **every** guest; Portugal, France, Germany (since 2025), Thailand and Indonesia register **foreign** guests. Deadlines run from 6 hours (short stays in Italy) to 3 working days (Portugal). Below is each country's rule with official links, then how to collect IDs in Little Hotelier.

::callout{type="warning" title="Not legal advice: check your local authority"}
This is a summary as of October 2026, checked against official sources linked in each section. Rules change, and regions or towns can add their own (tourist tax forms, regional police). Confirm with your local police, immigration office or adviser before relying on it.
::

| Country | System | Who is registered | Deadline |
|---|---|---|---|
| Spain | SES.Hospedajes | All guests | 24 h after booking and after check-in |
| Italy | Alloggiati Web | All guests | 24 h after arrival (6 h for stays up to 24 h) |
| Portugal | SIBA | Foreign guests, incl. EU | 3 working days after arrival and after departure |
| Germany | Meldeschein | Foreign guests | Signed on arrival |
| France | Fiche individuelle de police | Non-French guests, incl. EU | On arrival; shown on request |
| Brazil | FNRH Digital | All guests | At check-in |
| Thailand | TM30 | Foreign guests | 24 h |
| Indonesia | APOA | Foreign guests | 24 h |

## Spain: SES.Hospedajes

- **Who:** every guest, in hotels, hostales, B&Bs, rural houses, campsites and vacation rentals, under [Royal Decree 933/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-17461). Catalonia reports to the Mossos d'Esquadra and the Basque Country to the Ertzaintza instead.
- **What:** names, sex, ID type and number with its support number, nationality, date of birth, address, phone and email, the relationship between travelers when one is a minor, plus booking and payment details.
- **Deadline:** within 24 hours of the booking or cancellation, and within 24 hours of check-in. Keep records for 3 years.
- **How:** the [SES.Hospedajes](https://sede.interior.gob.es/portal/sede/informacion_hospedajes) web form, an XML file upload, or a web service from your software.

Full guide: [SES Hospedajes with Little Hotelier](/blog/ses-hospedajes-little-hotelier).

## Italy: Alloggiati Web

- **Who:** every guest, Italians included, in hotels and all other accommodation, including short lets under 30 days (art. 109 TULPS, [text from the Polizia di Stato](https://questure.poliziadistato.it/statics/43/art.-109-tulps.pdf?lang=it)).
- **What:** for the lead guest, surname, name, sex, date and place of birth, citizenship, and the ID document's type, number and place of issue, plus arrival date and length of stay. Family or group members need personal data but no document details ([user manual](https://questure.poliziadistato.it/statics/13/manualeutente_alloggiatiweb.pdf?lang=it)).
- **Deadline:** within 24 hours of arrival, or within **6 hours** for stays of up to 24 hours.
- **How:** only through the [Alloggiati Web portal](https://alloggiatiweb.poliziadistato.it/PortaleAlloggiati/): manual entry, file upload or web service. You request access from your local Questura. Keep the daily receipts.
- **Self check-in:** the Interior Ministry's circular of November 2024 requires identifying guests in person and bans key-box check-in. TAR Lazio annulled it in May 2025, but the Consiglio di Stato reversed that ruling on 21 November 2025 ([judgment 9101/2025](https://mdp.giustizia-amministrativa.it/visualizza/?nodeRef=&schema=cds&nrg=202505732&nomeFile=202509101_11.xml&subDir=Provvedimenti)), so the circular applies again. The court mentioned that identification by video link could be acceptable.

Statistics reporting to ISTAT or your region (for example Ross1000) is a separate duty.

## Portugal: SIBA (foreign guest bulletin)

- **Who:** every foreign guest, "including nationals of other European Union member states", in hotels, local accommodation (*alojamento local*) and anyone providing paid accommodation (Lei 23/2007, articles 15 and 16).
- **What:** full name, nationality, date of birth, document type and number, issuing country, country of residence, and check-in and check-out dates. Place of birth and residence are optional ([SIBA technical questions](https://siba.ssi.gov.pt/en/ajuda/perguntas-tecnicas/)).
- **Deadline:** within **3 working days** of arrival, and again within 3 working days of departure.
- **How:** on [SIBA](https://siba.ssi.gov.pt/), now run by the Internal Security System's coordination unit (UCFE) after SEF was dissolved in 2023. Use the online form, a file upload or web services ([sending options](https://siba.ssi.gov.pt/en/ajuda/modos-de-envio/)). Some SIBA pages still mention SEF. Keep bulletins for 1 year.
- **Fines:** from €100–500 for 1 to 10 unreported guests, rising to €400–2,000 above 50 guests (article 203, [Lei 23/2007](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=920&tabela=leis)).

## Germany: Meldeschein

- **Who:** since **1 January 2025**, only **foreign** guests. The Bureaucracy Relief Act IV (BEG IV) removed the duty for German citizens ([Federal Law Gazette 2024 I No. 323](https://www.recht.bund.de/bgbl/1/2024/323/regelungstext.pdf?__blob=publicationFile&v=3)). Accompanying foreign spouses, partners and minor children are only counted. For groups of more than 10, the tour leader signs.
- **What:** arrival and expected departure dates, surname, first names, date of birth, nationalities, address, number and nationality of foreign co-travelers, and the passport serial number. You must compare the form with the ID document ([§ 30 BMG](https://www.gesetze-im-internet.de/bmg/__30.html)).
- **Deadline:** the guest signs by hand on the day of arrival ([§ 29 BMG](https://www.gesetze-im-internet.de/bmg/__29.html)). Keep forms for 1 year after departure, destroy them within 3 months after that, and show them to the authorities on request.
- **How:** paper, or digitally with the guest's consent: a card payment with strong customer authentication, the electronic ID function, or an approved pilot procedure.
- **Fines:** up to €1,000.

Federal state law can add fields for tourist or spa tax, so a local form may still apply to German guests.

## France: fiche individuelle de police

- **Who:** every guest who is not French, "including" EU nationals, in hotels, vacation villages, tourist residences, furnished vacation rentals, *chambres d'hôtes* and campsites ([Service-Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F33458)).
- **What:** name and first names, date and place of birth, nationality, usual address, mobile phone and email, and arrival and planned departure dates. Children under 15 can go on an accompanying adult's form (CESEDA article R814-2, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042803266/)).
- **Deadline:** filled in on arrival. Keep the forms for **6 months**.
- **How:** there is no routine online reporting. You hand the forms to the police or gendarmerie when they ask, on paper or electronically. The form model is set by the [order of 1 October 2015](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031285813).

## Brazil: FNRH Digital

- **Who:** every guest, Brazilian or foreign, in every type of accommodation. Each guest gets their own record, and minors are linked to a parent's ([Portaria MTur 41/2025](https://www.gov.br/turismo/pt-br/centrais-de-conteudo-/publicacoes/atos-normativos-2/2025/portaria-mtur-no-41-de-14-de-novembro-de-2025)). The property needs an active Cadastur registration.
- **What:** name, date of birth, nationality, sex, ID document, CPF or passport, phone, email, home address, trip purpose, origin and next destination, transport, and the booking and stay details.
- **When:** mandatory since **20 April 2026**, after an extension by [Portaria MTur 4/2026](https://www.gov.br/turismo/pt-br/centrais-de-conteudo-/publicacoes/atos-normativos-2/2026/portaria-mtur-no-4-de-18-de-fevereiro-de-2026). Data is confirmed at check-in with the guest present, and check-out is recorded too.
- **How:** the free [FNRH web module](https://fnrh.turismo.serpro.gov.br/FNRH_SRH/Login) or your PMS through the Ministry's API. See the [official FAQ](https://www.gov.br/turismo/pt-br/acesso-a-informacao/acoes-e-programas/programas-projetos-acoes-obras-e-atividades/ficha-nacional-de-registro-de-hospedes/faq).

## Thailand: TM30

- **Who:** hotel managers, and any owner or house-master, must report foreigners who stay with them (Immigration Act B.E. 2522, section 38).
- **What:** the TM.30 form with the guest's passport details.
- **Deadline:** within **24 hours** of the foreigner's arrival.
- **How:** at the local immigration office (or the police where there is none), by registered post, or online after registering on the Immigration Bureau's website. Source: the Bureau's [public handbook](http://web.archive.org/web/20240612020418/https://www.immigration.go.th/wp-content/uploads/2023/01/16-Public-Handbook-Notification-of-Residence-for-a-house-master-owner-or-possessor-of-residence-or-hotel-manager.pdf) (archived copy).
- **Fines:** up to THB 2,000, and THB 2,000 to 10,000 for hotel managers (section 77).

The Immigration Bureau's site could not be loaded from Europe in October 2026, so confirm the current online system with your local immigration office.

## Indonesia: APOA

- **Who:** hotels, apartments, guest houses, villas, *losmen*, boarding houses (*kos*), rental houses and other commercial accommodation, plus private individuals who host foreigners ([Bali regional office](http://web.archive.org/web/20240302132213/https://bali.kemenkumham.go.id/layanan-publik/keimigrasian/apoa), archived copy).
- **What:** the foreign guest's passport and stay details, and later the check-out ([Yogyakarta immigration office, 2025](https://jogja.imigrasi.go.id/pengelola-penginapan-wajib-laporkan-keberadaan-tamu-asing-lewat-apoa/)).
- **Deadline:** within **1 x 24 hours** of the foreigner starting to stay, according to the Directorate General of Immigration's instructions quoted by the Bali office.
- **How:** the APOA mobile app or the [APOA website](https://apoa.imigrasi.go.id).
- **Fines:** up to three months' detention or a fine of up to Rp25 million under the Immigration Law (Law 6/2011, amended in 2024).

## How to collect guest IDs in Little Hotelier

Little Hotelier's reservation has a **Guests** tab with a form for each guest. Besides name, email and phone, it has gender, a second surname, and, under the expand arrow, the ID document type, ID number, nationality, issue date, expiry date, date of birth and a full address with country, city, state and postal code ([edit a reservation](https://helpcentre.littlehotelier.com/en/articles/8673701-edit-a-reservation)). Add companions as extra guests.

::screenshot{src="/images/scripts/easy-save-province-country/from.png" alt="Little Hotelier reservation Guests tab in Spanish with name, surnames, ID document type, ID number, nationality, issue and expiry dates, date of birth and address fields" caption="The Guests tab already has the fields most registration rules ask for (Spanish interface shown)."}
::

Three ways to fill them without retyping:

1. **Little Hotelier's online check-in.** With Guest Engagement, guests answer a check-in form before arrival and the answers land in the reservation. Its automated compliance reporting sends data to the authorities in Italy, Spain, Portugal, Germany, Switzerland, Austria, Croatia, the Czech Republic and Colombia ([Little Hotelier help centre](https://helpcentre.littlehotelier.com/en/articles/10066500-automated-compliance-reporting), May 2026).
2. **A check-in partner.** [Chekin](https://helpcentre.littlehotelier.com/en/articles/8674162-connecting-to-chekin) connects through the App Store and reports to the police in many countries, including Spain, Italy, Portugal, France, Germany and Thailand. If you use it, the free [Chekin Connection](/tools/ui/show-chekin) userscript shows each guest's registration inside the Little Hotelier reservation.
3. **At the desk.** For Spanish guests, the free [Easy Save Province and Country](/tools/ui/easy-save-province-country) userscript turns the province field into a list of Spanish provinces and sets the country to Spain when you pick one.

::screenshot{src="/images/scripts/easy-save-province-country/to.png" alt="Little Hotelier Guests tab with the Easy Save Province and Country list of Spanish provinces open under the Province/Region field" caption="Pick the province from a list and the country fills itself."}
::

### Catch missing IDs before the deadline

Incomplete or late data is an offense in itself in several countries; in Spain, for example, it is a minor offense fined from €100. Hotelier Tools' [automated checks](/tools/bot/automated-checks) look at every reservation after it is booked, on arrival, during the stay and at check-out, and flag a missing ID document or address on one Issues page and in a report email. It does not send anything to the authorities. See the [daily front-desk checklist](/blog/hotel-front-desk-checklist-automation).

::demo-cta{path="/automated-checks/issues"}
::

## Summary

- Spain, Italy and Brazil register every guest; Portugal, France, Germany, Thailand and Indonesia register foreign guests, including EU citizens where the rule says "foreign".
- The fastest deadline is Italy's 6 hours for one-night stays; Spain, Thailand and Indonesia allow 24 hours; Portugal 3 working days.
- Little Hotelier already has the ID fields; online check-in or a partner app can fill them and send them on.
- Use [automated checks](/tools/bot/automated-checks) and the free [userscripts](/tools/ui) to keep the data complete. Hotelier Tools is free for every hotel until 10 January 2027.
- Spain in depth: [SES Hospedajes with Little Hotelier](/blog/ses-hospedajes-little-hotelier) and [the INE occupancy survey](/blog/ine-hotel-occupancy-survey).
