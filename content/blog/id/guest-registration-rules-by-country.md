---
title: "Wajib lapor tamu asing: aturan pendaftaran tamu hotel per negara (2026)"
seoTitle: "Wajib lapor tamu hotel: aturan per negara (2026)"
description: "Tamu mana yang wajib didaftarkan hotel, data apa, seberapa cepat, ke mana: Indonesia (APOA), Spanyol, Italia, Portugal, Jerman, Prancis, Brasil, Thailand."
date: 2026-10-03
category: compliance
tags: [guest registration, compliance, id, police, little hotelier]
keywords: [wajib lapor tamu asing, apoa imigrasi hotel, lapor tamu asing penginapan, pendaftaran tamu hotel per negara, check in hotel paspor, alloggiati web, tm30 hotel]
demoPath: /
cover: /images/blog/demo/en/automated-checks-moment-on-arrival.webp
coverAlt: "Pengecekan When they arrive di Hotelier Tools: ID / passport (police register), physical room assignment, serta validasi alamat dan asal diaktifkan, beserta apa yang bisa dan tidak bisa dilakukan tiap pengecekan"
faq:
  - q: "Mengapa hotel meminta paspor saya saat check-in?"
    a: "Karena hukum di banyak negara mewajibkannya. Spanyol, Italia, dan Brasil mendaftarkan setiap tamu, sedangkan Indonesia, Portugal, Prancis, Jerman, dan Thailand mendaftarkan tamu asing, biasanya dengan mencatat data paspor atau identitas dan mengirimkannya ke kepolisian atau imigrasi dalam hitungan jam atau hari."
  - q: "Apakah warga negara Uni Eropa dianggap tamu asing?"
    a: "Ya, jika aturannya tentang orang asing. SIBA Portugal dan fiche de police Prancis secara tegas mencakup warga negara UE lainnya, dan formulir pendaftaran Jerman kini berlaku untuk setiap tamu yang bukan warga negara Jerman."
  - q: "Bolehkah hotel menyimpan salinan paspor saya?"
    a: "Tergantung negara dan hukum perlindungan data. Sebagian besar aturan pendaftaran meminta hotel memeriksa dokumen dan mencatat datanya, bukan menyimpan salinan. Di Spanyol, badan perlindungan data menyatakan salinan DNI umumnya tidak diperlukan. Tanyakan kepada hotel mengapa mereka menyimpan salinan dan untuk berapa lama."
  - q: "Bisakah PMS saya mengirim pendaftaran secara otomatis?"
    a: "Sering kali bisa. Spanyol, Italia, Portugal, dan Brasil menerima data dari perangkat lunak lewat web service. Pelaporan kepatuhan Guest Engagement Little Hotelier mencakup Italia, Spanyol, Portugal, Jerman, Swiss, Austria, Kroasia, Republik Ceko, dan Kolombia, dan aplikasi mitra seperti Chekin mencakup lebih banyak negara."
  - q: "Apakah anak-anak harus didaftarkan?"
    a: "Biasanya ya, tetapi detailnya berbeda. Spanyol mendaftarkan anak di bawah umur dengan data yang diberikan orang dewasa dan mewajibkan hubungan kekerabatan; Prancis membolehkan anak di bawah 15 tahun dicantumkan di formulir orang dewasa; Jerman hanya menghitung anak yang mendampingi; Brasil menautkan anak di bawah umur ke catatan orang tua."
  - q: "Apakah Hotelier Tools mengirim data tamu ke kepolisian?"
    a: "Tidak. Hotelier Tools tidak mengirim pendaftaran ke otoritas mana pun. Layanan ini menandai reservasi dengan ID atau alamat yang kosong agar Anda bisa melengkapinya tepat waktu. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier."
---

Banyak negara mewajibkan hotel mencatat identitas tamu dan meneruskannya ke kepolisian atau imigrasi. Spanyol, Italia, dan Brasil mendaftarkan **setiap** tamu; Indonesia, Portugal, Prancis, Jerman (sejak 2025), dan Thailand mendaftarkan tamu **asing**. Batas waktunya berkisar dari 6 jam (menginap singkat di Italia) hingga 3 hari kerja (Portugal). Di bawah ini aturan tiap negara beserta tautan resmi, lalu cara mengumpulkan ID di Little Hotelier.

::callout{type="warning" title="Bukan nasihat hukum: periksa ke otoritas setempat"}
Ini ringkasan per Oktober 2026, diperiksa terhadap sumber resmi yang ditautkan di setiap bagian. Aturan berubah, dan daerah atau kota bisa menambahkan aturan sendiri (formulir pajak wisata, kepolisian daerah). Konfirmasikan kepada kepolisian, kantor imigrasi, atau penasihat Anda sebelum mengandalkannya.
::

| Negara | Sistem | Siapa yang didaftarkan | Batas waktu |
|---|---|---|---|
| Spanyol | SES.Hospedajes | Semua tamu | 24 jam setelah reservasi dan setelah check-in |
| Italia | Alloggiati Web | Semua tamu | 24 jam setelah kedatangan (6 jam untuk masa inap hingga 24 jam) |
| Portugal | SIBA | Tamu asing, termasuk UE | 3 hari kerja setelah kedatangan dan setelah keberangkatan |
| Jerman | Meldeschein | Tamu asing | Ditandatangani saat kedatangan |
| Prancis | Fiche individuelle de police | Tamu non-Prancis, termasuk UE | Saat kedatangan; ditunjukkan jika diminta |
| Brasil | FNRH Digital | Semua tamu | Saat check-in |
| Thailand | TM30 | Tamu asing | 24 jam |
| Indonesia | APOA | Tamu asing | 24 jam |

## Spanyol: SES.Hospedajes

- **Siapa:** setiap tamu, di hotel, hostal, B&B, rumah pedesaan, perkemahan, dan rumah liburan sewa, berdasarkan [Royal Decree 933/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-17461). Katalonia melapor ke Mossos d'Esquadra dan Negara Basque ke Ertzaintza.
- **Apa:** nama, jenis kelamin, jenis dan nomor ID beserta nomor pendukungnya, kewarganegaraan, tanggal lahir, alamat, telepon dan email, hubungan antartamu jika salah satunya anak di bawah umur, plus detail reservasi dan pembayaran.
- **Batas waktu:** dalam 24 jam setelah reservasi dibuat atau dibatalkan, dan dalam 24 jam setelah check-in. Simpan catatan selama 3 tahun.
- **Cara:** formulir web [SES.Hospedajes](https://sede.interior.gob.es/portal/sede/informacion_hospedajes), unggah file XML, atau web service dari perangkat lunak Anda.

Panduan lengkap: [SES Hospedajes dengan Little Hotelier](/blog/ses-hospedajes-little-hotelier).

## Italia: Alloggiati Web

- **Siapa:** setiap tamu, termasuk orang Italia, di hotel dan semua akomodasi lainnya, termasuk sewa singkat di bawah 30 hari (pasal 109 TULPS, [teks dari Polizia di Stato](https://questure.poliziadistato.it/statics/43/art.-109-tulps.pdf?lang=it)).
- **Apa:** untuk tamu utama, nama belakang, nama, jenis kelamin, tanggal dan tempat lahir, kewarganegaraan, serta jenis, nomor, dan tempat penerbitan dokumen ID, plus tanggal kedatangan dan lama menginap. Anggota keluarga atau rombongan memerlukan data pribadi tetapi tidak detail dokumen ([buku panduan pengguna](https://questure.poliziadistato.it/statics/13/manualeutente_alloggiatiweb.pdf?lang=it)).
- **Batas waktu:** dalam 24 jam setelah kedatangan, atau dalam **6 jam** untuk masa inap hingga 24 jam.
- **Cara:** hanya lewat [portal Alloggiati Web](https://alloggiatiweb.poliziadistato.it/PortaleAlloggiati/): entri manual, unggah file, atau web service. Anda meminta akses dari Questura setempat. Simpan tanda terima harian.
- **Self check-in:** surat edaran Kementerian Dalam Negeri November 2024 mewajibkan identifikasi tamu secara langsung dan melarang check-in dengan key box. TAR Lazio membatalkannya pada Mei 2025, tetapi Consiglio di Stato membalikkan putusan itu pada 21 November 2025 ([putusan 9101/2025](https://mdp.giustizia-amministrativa.it/visualizza/?nodeRef=&schema=cds&nrg=202505732&nomeFile=202509101_11.xml&subDir=Provvedimenti)), sehingga surat edaran itu berlaku kembali. Pengadilan menyebutkan bahwa identifikasi lewat tautan video bisa diterima.

Pelaporan statistik ke ISTAT atau daerah Anda (misalnya Ross1000) adalah kewajiban terpisah.

## Portugal: SIBA (buletin tamu asing)

- **Siapa:** setiap tamu asing, "including nationals of other European Union member states", di hotel, akomodasi lokal (*alojamento local*), dan siapa pun yang menyediakan akomodasi berbayar (Lei 23/2007, pasal 15 dan 16).
- **Apa:** nama lengkap, kewarganegaraan, tanggal lahir, jenis dan nomor dokumen, negara penerbit, negara tempat tinggal, serta tanggal check-in dan check-out. Tempat lahir dan tempat tinggal bersifat opsional ([pertanyaan teknis SIBA](https://siba.ssi.gov.pt/en/ajuda/perguntas-tecnicas/)).
- **Batas waktu:** dalam **3 hari kerja** setelah kedatangan, dan lagi dalam 3 hari kerja setelah keberangkatan.
- **Cara:** di [SIBA](https://siba.ssi.gov.pt/), kini dijalankan oleh unit koordinasi Sistem Keamanan Internal (UCFE) setelah SEF dibubarkan pada 2023. Pakai formulir online, unggah file, atau web service ([opsi pengiriman](https://siba.ssi.gov.pt/en/ajuda/modos-de-envio/)). Beberapa halaman SIBA masih menyebut SEF. Simpan buletin selama 1 tahun.
- **Denda:** dari €100 sampai €500 untuk 1 sampai 10 tamu yang tidak dilaporkan, naik menjadi €400 sampai €2.000 untuk di atas 50 tamu (pasal 203, [Lei 23/2007](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=920&tabela=leis)).

## Jerman: Meldeschein

- **Siapa:** sejak **1 Januari 2025**, hanya tamu **asing**. Bureaucracy Relief Act IV (BEG IV) menghapus kewajiban untuk warga negara Jerman ([Federal Law Gazette 2024 I No. 323](https://www.recht.bund.de/bgbl/1/2024/323/regelungstext.pdf?__blob=publicationFile&v=3)). Pasangan, mitra, dan anak di bawah umur asing yang mendampingi hanya dicatat jumlahnya. Untuk rombongan lebih dari 10 orang, pemandu wisata yang menandatangani.
- **Apa:** tanggal kedatangan dan perkiraan keberangkatan, nama belakang, nama depan, tanggal lahir, kewarganegaraan, alamat, jumlah dan kewarganegaraan teman perjalanan asing, serta nomor seri paspor. Anda harus mencocokkan formulir dengan dokumen ID ([§ 30 BMG](https://www.gesetze-im-internet.de/bmg/__30.html)).
- **Batas waktu:** tamu menandatangani dengan tangan pada hari kedatangan ([§ 29 BMG](https://www.gesetze-im-internet.de/bmg/__29.html)). Simpan formulir selama 1 tahun setelah keberangkatan, musnahkan dalam 3 bulan setelahnya, dan tunjukkan kepada otoritas jika diminta.
- **Cara:** kertas, atau digital dengan persetujuan tamu: pembayaran kartu dengan strong customer authentication, fungsi ID elektronik, atau prosedur percontohan yang disetujui.
- **Denda:** hingga €1.000.

Hukum negara bagian bisa menambahkan kolom untuk pajak wisata atau spa, jadi formulir lokal mungkin tetap berlaku untuk tamu Jerman.

## Prancis: fiche individuelle de police

- **Siapa:** setiap tamu yang bukan warga negara Prancis, "including" warga negara UE, di hotel, desa liburan, residensi wisata, vila liburan berperabot, *chambres d'hôtes*, dan perkemahan ([Service-Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F33458)).
- **Apa:** nama dan nama depan, tanggal dan tempat lahir, kewarganegaraan, alamat tetap, ponsel dan email, serta tanggal kedatangan dan rencana keberangkatan. Anak di bawah 15 tahun bisa dicantumkan di formulir orang dewasa yang mendampingi (CESEDA pasal R814-2, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042803266/)).
- **Batas waktu:** diisi saat kedatangan. Simpan formulir selama **6 bulan**.
- **Cara:** tidak ada pelaporan online rutin. Anda menyerahkan formulir kepada polisi atau gendarmerie ketika mereka memintanya, di atas kertas atau elektronik. Model formulirnya ditetapkan oleh [peraturan 1 Oktober 2015](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031285813).

## Brasil: FNRH Digital

- **Siapa:** setiap tamu, Brasil maupun asing, di semua jenis akomodasi. Setiap tamu mendapat catatan sendiri, dan anak di bawah umur ditautkan ke catatan orang tua ([Portaria MTur 41/2025](https://www.gov.br/turismo/pt-br/centrais-de-conteudo-/publicacoes/atos-normativos-2/2025/portaria-mtur-no-41-de-14-de-novembro-de-2025)). Properti harus memiliki pendaftaran Cadastur yang aktif.
- **Apa:** nama, tanggal lahir, kewarganegaraan, jenis kelamin, dokumen ID, CPF atau paspor, telepon, email, alamat rumah, tujuan perjalanan, asal dan tujuan berikutnya, transportasi, serta detail reservasi dan masa inap.
- **Kapan:** wajib sejak **20 April 2026**, setelah perpanjangan oleh [Portaria MTur 4/2026](https://www.gov.br/turismo/pt-br/centrais-de-conteudo-/publicacoes/atos-normativos-2/2026/portaria-mtur-no-4-de-18-de-fevereiro-de-2026). Data dikonfirmasi saat check-in dengan tamu hadir, dan check-out juga dicatat.
- **Cara:** [modul web FNRH](https://fnrh.turismo.serpro.gov.br/FNRH_SRH/Login) yang gratis atau PMS Anda lewat API Kementerian. Lihat [FAQ resmi](https://www.gov.br/turismo/pt-br/acesso-a-informacao/acoes-e-programas/programas-projetos-acoes-obras-e-atividades/ficha-nacional-de-registro-de-hospedes/faq).

## Thailand: TM30

- **Siapa:** manajer hotel, dan setiap pemilik atau house-master, wajib melaporkan orang asing yang menginap di tempat mereka (Immigration Act B.E. 2522, pasal 38).
- **Apa:** formulir TM.30 dengan data paspor tamu.
- **Batas waktu:** dalam **24 jam** setelah kedatangan orang asing.
- **Cara:** di kantor imigrasi setempat (atau kepolisian jika tidak ada), lewat pos tercatat, atau online setelah mendaftar di situs web Biro Imigrasi. Sumber: [buku panduan publik](http://web.archive.org/web/20240612020418/https://www.immigration.go.th/wp-content/uploads/2023/01/16-Public-Handbook-Notification-of-Residence-for-a-house-master-owner-or-possessor-of-residence-or-hotel-manager.pdf) Biro (salinan arsip).
- **Denda:** hingga THB 2.000, dan THB 2.000 sampai 10.000 untuk manajer hotel (pasal 77).

Situs Biro Imigrasi tidak bisa dimuat dari Eropa pada Oktober 2026, jadi konfirmasikan sistem online terbaru kepada kantor imigrasi setempat.

## Indonesia: APOA

- **Siapa:** hotel, apartemen, guest house, vila, losmen, rumah kos, rumah sewa, dan akomodasi komersial lainnya, serta perorangan yang menampung orang asing ([kantor wilayah Bali](http://web.archive.org/web/20240302132213/https://bali.kemenkumham.go.id/layanan-publik/keimigrasian/apoa), salinan arsip).
- **Apa:** data paspor dan masa inap tamu asing, lalu data check-out-nya ([kantor imigrasi Yogyakarta, 2025](https://jogja.imigrasi.go.id/pengelola-penginapan-wajib-laporkan-keberadaan-tamu-asing-lewat-apoa/)).
- **Batas waktu:** dalam **1 x 24 jam** sejak orang asing mulai menginap, menurut petunjuk Direktorat Jenderal Imigrasi yang dikutip kantor Bali.
- **Cara:** aplikasi seluler APOA atau [situs APOA](https://apoa.imigrasi.go.id).
- **Sanksi:** kurungan hingga tiga bulan atau denda hingga Rp25 juta berdasarkan Undang-Undang Keimigrasian (UU 6/2011, diubah pada 2024).

## Cara mengumpulkan ID tamu di Little Hotelier

Reservasi di Little Hotelier punya tab **Guests** dengan formulir untuk setiap tamu. Selain nama, email, dan telepon, formulir itu memuat jenis kelamin, nama belakang kedua, dan, di balik panah untuk membuka detail, jenis dokumen ID, nomor ID, kewarganegaraan, tanggal terbit, tanggal kedaluwarsa, tanggal lahir, dan alamat lengkap dengan negara, kota, provinsi, dan kode pos ([edit reservasi](https://helpcentre.littlehotelier.com/en/articles/8673701-edit-a-reservation)). Tambahkan teman perjalanan sebagai tamu tambahan.

::screenshot{src="/images/scripts/easy-save-province-country/from.png" alt="Tab Guests reservasi Little Hotelier dalam bahasa Spanyol dengan kolom nama, nama belakang, jenis dokumen ID, nomor ID, kewarganegaraan, tanggal terbit dan kedaluwarsa, tanggal lahir, dan alamat" caption="Tab Guests sudah punya kolom yang diminta sebagian besar aturan pendaftaran (antarmuka bahasa Spanyol)."}
::

Tiga cara mengisinya tanpa mengetik ulang:

1. **Check-in online Little Hotelier.** Dengan Guest Engagement, tamu mengisi formulir check-in sebelum kedatangan dan jawabannya masuk ke reservasi. Pelaporan kepatuhan otomatisnya mengirim data ke otoritas di Italia, Spanyol, Portugal, Jerman, Swiss, Austria, Kroasia, Republik Ceko, dan Kolombia ([pusat bantuan Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/10066500-automated-compliance-reporting), Mei 2026).
2. **Mitra check-in.** [Chekin](https://helpcentre.littlehotelier.com/en/articles/8674162-connecting-to-chekin) terhubung lewat App Store dan melapor ke kepolisian di banyak negara, termasuk Spanyol, Italia, Portugal, Prancis, Jerman, dan Thailand. Jika Anda memakainya, userscript gratis [Chekin Connection](/tools/ui/show-chekin) menampilkan pendaftaran setiap tamu di dalam reservasi Little Hotelier.
3. **Di front desk.** Untuk tamu Spanyol, userscript gratis [Easy Save Province and Country](/tools/ui/easy-save-province-country) mengubah kolom provinsi menjadi daftar provinsi Spanyol dan mengatur negara ke Spanyol saat Anda memilih satu.

::screenshot{src="/images/scripts/easy-save-province-country/to.png" alt="Tab Guests Little Hotelier dengan daftar provinsi Spanyol dari Easy Save Province and Country terbuka di bawah kolom Province/Region" caption="Pilih provinsi dari daftar dan negaranya terisi sendiri."}
::

### Deteksi ID yang kosong sebelum batas waktu

Data yang tidak lengkap atau terlambat merupakan pelanggaran tersendiri di beberapa negara; di Spanyol, misalnya, itu pelanggaran ringan dengan denda mulai €100. [Pengecekan otomatis](/tools/bot/automated-checks) Hotelier Tools memeriksa setiap reservasi setelah dipesan, saat kedatangan, selama menginap, dan saat check-out, lalu menandai dokumen ID atau alamat yang kosong di satu halaman Issues dan di email laporan. Layanan ini tidak mengirim apa pun ke otoritas. Lihat [checklist harian front desk](/blog/hotel-front-desk-checklist-automation).

::demo-cta{path="/automated-checks/issues"}
::

## Ringkasan

- Spanyol, Italia, dan Brasil mendaftarkan setiap tamu; Indonesia, Portugal, Prancis, Jerman, dan Thailand mendaftarkan tamu asing, termasuk warga UE jika aturannya berbunyi "asing".
- Batas waktu tersingkat adalah 6 jam di Italia untuk menginap satu malam; Spanyol, Thailand, dan Indonesia memberi 24 jam; Portugal 3 hari kerja.
- Little Hotelier sudah punya kolom ID; check-in online atau aplikasi mitra bisa mengisi dan meneruskannya.
- Pakai [pengecekan otomatis](/tools/bot/automated-checks) dan [userscript](/tools/ui) gratis untuk menjaga datanya tetap lengkap. Hotelier Tools gratis untuk setiap hotel sampai 10 Januari 2027.
- Spanyol secara mendalam: [SES Hospedajes dengan Little Hotelier](/blog/ses-hospedajes-little-hotelier) dan [survei okupansi INE](/blog/ine-hotel-occupancy-survey).
