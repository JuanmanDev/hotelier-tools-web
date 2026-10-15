---
title: "SES Hospedajes dengan Little Hotelier: cara mendaftarkan tamu (partes de viajeros) tanpa kerja ganda"
seoTitle: "SES Hospedajes dengan Little Hotelier: daftarkan tamu"
description: "Registrasi tamu SES.Hospedajes di Spanyol: siapa yang wajib, data apa, tenggat 24 jam, cara mengirim, dan cara Little Hotelier mengirimkannya untuk Anda."
date: 2026-10-03
category: compliance
tags: [ses hospedajes, spain, compliance, guest registration, little hotelier]
keywords: [ses hospedajes, ses hospedajes bahasa indonesia, ses hospedajes little hotelier, parte de viajeros, ses hospedajes datos obligatorios, ses hospedajes servicio web, como registrar viajeros ses hospedajes]
feature: automated-checks
demoPath: /
cover: /images/blog/demo/en/automated-checks-moment-on-arrival.webp
coverAlt: "Pengaturan When they arrive di Hotelier Tools dengan pemeriksaan ID / passport (police register), Physical room assignment, dan Address and origin validation aktif, masing-masing dengan penjelasan apa yang bisa dan tidak bisa dilakukannya"
faq:
  - q: "Apakah SES.Hospedajes wajib untuk B&B kecil atau vacation rental?"
    a: "Ya. Real Decreto 933/2021 mencakup hotel, hostal, pensión, rumah pedesaan, campsite, apartemen wisata, dan akomodasi sejenis di seluruh Spanyol, dan FAQ Kementerian Dalam Negeri menegaskan bahwa perorangan yang menyewakan akomodasi juga tercakup. Catalonia dan Basque Country melapor ke sistem kepolisian mereka sendiri."
  - q: "Apakah anak-anak dan bayi harus didaftarkan?"
    a: "Ya. Tamu di bawah 14 tahun termasuk dalam registrasi, dengan datanya diberikan oleh orang dewasa yang bepergian bersama mereka, dan dokumen identitas wajib mulai usia 14 tahun. Jika ada tamu yang masih di bawah umur, Anda juga harus mencatat hubungan antar pelancong, seperti orang tua atau wali."
  - q: "Berapa denda jika tidak mengirim data tamu ke SES.Hospedajes?"
    a: "Menurut undang-undang keamanan warga (Ley Orgánica 4/2015), tidak menyimpan registrasi atau tidak mengirim data adalah pelanggaran berat, dengan denda 601 sampai 30.000 euro. Kesalahan atau pengiriman terlambat adalah pelanggaran ringan, dengan denda 100 sampai 600 euro."
  - q: "Berapa lama saya harus menyimpan catatan tamu?"
    a: "Tiga tahun sejak akhir masa inap. Kementerian Dalam Negeri menyatakan tidak akan mengirimi Anda daftar komunikasi lama, jadi simpan salinan sendiri atau andalkan riwayat tool check-in Anda."
  - q: "Apakah Hotelier Tools mengirim data tamu ke SES.Hospedajes?"
    a: "Tidak. Hotelier Tools tidak mengirim apa pun ke SES.Hospedajes atau kepolisian. Ia menandai reservasi yang dokumen ID atau alamatnya kosong agar bisa Anda perbaiki sebelum kedatangan. Untuk pengiriman, gunakan pelaporan kepatuhan bawaan Little Hotelier atau penyedia check-in. Hotelier Tools independen dan tidak berafiliasi dengan SiteMinder atau Little Hotelier."
---

Setiap hotel, hostal, B&B, dan vacation rental di Spanyol wajib mengirim data tamunya ke **SES.Hospedajes**, registrasi online Kementerian Dalam Negeri (Catalonia dan Basque Country memakai sistem kepolisian mereka sendiri). Reservasi dan pembatalan dikirim dalam 24 jam, dan data tamu dalam 24 jam setelah check-in ([Real Decreto 933/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-17461)). Little Hotelier dapat mengirim keduanya secara otomatis lewat check-in online Guest Engagement, atau lewat aplikasi mitra seperti Chekin, sehingga tidak ada yang mengetik tamu yang sama dua kali.

::callout{type="warning" title="Bukan nasihat hukum"}
Terakhir diverifikasi pada Oktober 2026 terhadap BOE, sede electrónica Kementerian Dalam Negeri, dan pusat bantuan Little Hotelier. Aturan dan formulir bisa berubah: periksa dengan Kementerian atau gestor Anda sebelum mengandalkan detail apa pun.
::

## Apa itu SES.Hospedajes dan siapa yang wajib memakainya?

SES.Hospedajes adalah platform Ministerio del Interior untuk registrasi dokumen (*registro documental*) yang wajib disimpan oleh usaha akomodasi. Banyak pemilik masih menyebut catatan ini **partes de viajeros**. Kementerian mengaktifkan platform ini pada **2 Desember 2024**, setelah beberapa kali ditunda ([siaran pers Moncloa](https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/interior/paginas/2024/021224-registro-hospedaje-alquiler-vehiculos.aspx)).

Berlaku di seluruh Spanyol untuk (RD 933/2021, pasal 2):

- hotel, **hostal**, **pensión**, casa de huéspedes, dan akomodasi wisata pedesaan
- campsite dan area motorhome
- apartemen wisata, bungalow, dan akomodasi liburan sejenis
- perorangan yang menyewakan akomodasi, menurut [FAQ Kementerian Agustus 2026](https://sede.interior.gob.es/portal/dam/jcr:995aad35-2632-4de2-97fe-94cc2489c9c6/Preguntas-frecuentes-hospedajes-alquiler-vehiculos-20260810.pdf)

**Catalonia dan Basque Country** menjalankan sistem sendiri. Di Catalonia Anda melapor ke Mossos d'Esquadra lewat platform mereka yang sudah ada ([Mossos](https://mossos.gencat.cat/ca/serveis_i_tramits/registre-dactivitats-dhostalatge-i-lloguer-de-vehicles-a-motor/)); di Basque Country, ke Ertzaintza ([euskadi.eus](https://www.euskadi.eus/comunicacion/registro-hostelero/web01-tramite/es/)).

**Daftarkan akomodasi Anda lebih dulu.** Anda harus mendaftar di SES.Hospedajes sebelum mulai beroperasi, dengan sertifikat digital atau Cl@ve ([sede electrónica](https://sede.interior.gob.es/portal/sede/informacion_hospedajes)). Pendaftaran memberi Anda data login untuk aplikasi web dan kredensial terpisah untuk pengiriman lewat web service.

## Data apa yang diminta SES.Hospedajes?

Annex I RD 933/2021 mencantumkan tiga blok:

| Blok | Data |
|---|---|
| **Setiap tamu** | Nama depan, kedua nama belakang, jenis kelamin, jenis dokumen identitas (DNI, paspor, TIE) dan nomornya, *número de soporte* (nomor pendukung dokumen), kewarganegaraan, tanggal lahir, alamat tetap (alamat lengkap, kota, negara), telepon rumah, ponsel, email, jumlah pelancong, hubungan antar pelancong jika ada yang di bawah umur |
| **Reservasi** | Referensi dan tanggal kontrak, tanggal dan jam check-in dan check-out, alamat, jumlah kamar, akses internet ya atau tidak |
| **Pembayaran** | Jenis pembayaran, identifikasi metode pembayaran (jenis dan nomor kartu, IBAN, pembayaran seluler...), pemegang, masa berlaku, tanggal pembayaran |

FAQ Kementerian menjelaskan beberapa hal:

- DNI wajib mulai usia 14 tahun. Anak di bawah 14 tahun tetap didaftarkan, dengan datanya diberikan oleh orang dewasa yang bepergian bersama mereka.
- Jika ada tamu di bawah umur, catat hubungannya (*parentesco*): orang tua, kakek atau nenek, wali, atau lainnya.
- Jika tidak ada email, nomor ponsel sudah cukup.
- Jenis kelamin wajib diisi jika tercantum pada dokumen.

[Petunjuk unggah berkas](https://hospedajes.ses.mir.es/hospedajes-sede/assets/docs/Instrucciones.pdf) resmi menandai beberapa kolom sebagai opsional, tetapi dekrit mencantumkan semuanya. Kumpulkan sebanyak yang wajar bisa Anda dapatkan.

## Apa tenggat dan dendanya?

Pasal 6.3 dekrit menetapkan dua tenggat 24 jam yang terpisah, "segera, dan bagaimanapun dalam 24 jam":

1. sejak **reservasi**, kontrak, atau **pembatalannya**
2. sejak **awal masa inap** (check-in)

Setiap perubahan reservasi sesudahnya memerlukan komunikasi baru. Simpan catatan selama **tiga tahun** setelah masa inap berakhir (pasal 5.3). Kementerian menyatakan tidak akan mengirimi Anda daftar apa yang telah Anda kirim, jadi simpan riwayat Anda sendiri.

Denda berasal dari undang-undang keamanan warga, [Ley Orgánica 4/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-3442):

| Pelanggaran | Contoh | Denda |
|---|---|---|
| Ringan (*leve*, pasal 37.9) | Kesalahan pada data, atau pengiriman terlambat | €100 sampai €600 |
| Berat (*grave*, pasal 36.20) | Tidak ada registrasi, atau data tidak dikirim | €601 sampai €30.000 |

## Bagaimana cara mengirim data: formulir web, berkas, atau web service?

SES.Hospedajes menerima tiga cara, semuanya dijelaskan dalam [panduan visual](https://sede.interior.gob.es/portal/dam/jcr:01a016b6-5ec0-41b4-898c-7f77b2f16e7d/Guia-visual-de-Hospedajes-v.29.08.2025.pdf) Kementerian:

1. **Formulir web.** Ketik setiap reservasi dan tamu ke aplikasi SES.Hospedajes. Cukup untuk beberapa kamar, lambat untuk yang lebih ramai.
2. **Unggah berkas.** Unggah satu berkas XML berisi banyak komunikasi sekaligus. Semua komunikasi dalam satu berkas harus bertipe sama.
3. **Web service.** Software Anda mengirim data langsung. Dengan cara inilah PMS atau aplikasi check-in menghilangkan kerja ganda.

Anda dapat masuk ke aplikasi dengan sertifikat digital atau dengan username dan kata sandi, dan Anda dapat melihat serta memperbaiki komunikasi dengan cara apa pun ia dikirim.

## Apakah Little Hotelier terhubung ke SES.Hospedajes?

Ya. Per Oktober 2026 ada dua cara, ditambah satu ekspor lama.

### Opsi 1: pelaporan kepatuhan otomatis Little Hotelier

**Guest Engagement** Little Hotelier menyertakan formulir check-in kepatuhan yang mengirim data ke SES.Hospedajes untuk Anda ([pusat bantuan, diperbarui Juni 2025](https://helpcentre.littlehotelier.com/en/articles/10303885-how-to-connect-automated-compliance-reporting-to-ses-hospedajes-platform)). Anda memerlukan Guest Engagement pada akun Anda, jadi tanyakan kepada Little Hotelier apakah paket Anda menyertakannya.

1. **Di SES.Hospedajes**, buka data terdaftar Anda (**Mis datos registrados**) dan centang **Envío de comunicaciones por servicio web**. Anda menerima lewat email kode arrendador (*código de arrendador*), kode akomodasi, username, dan kata sandi.
2. **Di Little Hotelier**, buka **Guest Engagement > Check-in > Settings** dan pilih **Compliance reporting check-in form**.
3. Isi detail properti, pilih cara tamu menandatangani, aktifkan **Authority connection**, pilih **SES Hospedajes** di bawah **Automatically send info to**, masukkan keempat kredensial (username berakhiran "WS"), lalu tekan **Validate**.
4. Di bawah **Booking registration sending**, pilih **Enabled**. Data reservasi lalu dikirim saat reservasi dibuat, dan data tamu setelah check-in. Anda dapat mengecualikan sebagian sumber pemesanan.
5. Atur **Payment type** default.

Setiap pengiriman menampilkan status (Scheduled, In progress, Done, Failed, dan lainnya), dan daftar dokumen terkirim ada di halaman pengaturan yang sama. [Ikhtisar kepatuhan](https://helpcentre.littlehotelier.com/en/articles/10066500-automated-compliance-reporting) Little Hotelier menambahkan bahwa perubahan pada reservasi dikirim ke Chekin dan diperbarui di otoritas. Artikel bantuan terpisah membahas Mossos dan Ertzaintza.

### Opsi 2: Chekin dari App Store

[Chekin](https://helpcentre.littlehotelier.com/en/articles/8674162-connecting-to-chekin) adalah aplikasi pihak ketiga berbayar di App Store Little Hotelier. Ia menangani check-in online, verifikasi ID, dan laporan kepolisian di Spanyol dan negara lain. Penyedia check-in online lain menawarkan layanan serupa; pastikan penyedia Anda mengirim ke SES.Hospedajes lewat web service dan membaca reservasi Little Hotelier Anda.

### Ekspor laporan polisi yang lama

**Front Desk > Reports > Police Report** mengekspor berkas .txt tamu berusia 16 tahun ke atas untuk rentang tanggal tertentu ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/8673944-run-and-export-a-spanish-police-report)). Artikel itu menyuruh mengunggahnya ke "situs web kepolisian" dan tidak menyebut SES.Hospedajes, jadi pastikan SES menerimanya sebelum mengandalkannya.

## Cara menghindari kerja ganda dan data yang hilang

Kerja ganda terjadi ketika tamu yang sama diketik ke Little Hotelier lalu diketik lagi ke SES.Hospedajes atau aplikasi check-in. Solusinya adalah mengumpulkan data sekali, sedini mungkin, dan membiarkannya mengalir ke keduanya:

1. **Kirim check-in online sebelum kedatangan.** Tamu mengisi sendiri datanya dari konfirmasi reservasi atau tautan.
2. **Lengkapi sisanya di meja resepsionis** dengan tool yang sama, bukan di atas kertas.
3. **Periksa dokumennya.** Dekrit menyatakan dokumen harus ditunjukkan atau diberikan, dan FAQ Kementerian menerima pemeriksaan elektronik yang memverifikasi keakuratan.
4. **Perbaiki kekurangan sebelum tenggat 24 jam**, bukan di akhir bulan.

### Jika Anda memakai Chekin: lihat di dalam Little Hotelier

Userscript gratis [Chekin Connection](/tools/ui/show-chekin) menambahkan panel Chekin ke reservasi di Little Hotelier. Anda langsung melihat apakah tamu sudah mendaftar, lengkap dengan nama, telepon, dan nomor dokumen mereka, dan Anda dapat menyalin nomor dokumen ke reservasi, misalnya untuk invoice. Jika belum ada yang mendaftar, panel menampilkan tautan registrasi tamu dengan tombol untuk membuka, menyalin, mengirim lewat email, atau WhatsApp. Anda harus masuk ke Chekin di browser yang sama. Ini skrip independen, bukan buatan Chekin atau Little Hotelier. Panduan instalasi: [cara memasang userscript](/tools/ui/instructions).

::screenshot{src="/images/scripts/show-chekin/to.webp" alt="Reservasi Little Hotelier dengan panel Chekin: satu tamu ditemukan, lengkap dengan nama, telepon, dan nomor dokumen, serta tombol Use document dan View in Chekin" caption="Panel Chekin di dalam reservasi Little Hotelier, dengan dokumen tamu siap dipakai."}
::

### Tandai ID yang belum ada sebelum kedatangan

Hotelier Tools **tidak** mengirim data ke SES.Hospedajes atau kepolisian, dan tidak akan mengklaim demikian. Yang dilakukannya adalah memeriksa setiap reservasi untuk dokumen ID atau alamat yang kosong setelah reservasi dibuat, saat kedatangan, selama menginap, dan saat check-out, memakai [pemeriksaan otomatis](/tools/bot/automated-checks). Masalah muncul di satu halaman Issues dan di email laporan, sehingga Anda bisa menghubungi tamu selagi masih ada waktu. Lihat [daftar periksa harian front desk](/blog/hotel-front-desk-checklist-automation).

::screenshot{src="/images/blog/demo/en/automated-checks-issues-full.webp" alt="Halaman Issues di Hotelier Tools dengan 20 open, 5 fixed, dan 25 total, menampilkan reservasi dengan peringatan saldo belum lunas dan, lebih ke bawah, kesalahan ID / passport (police register) yang menyatakan tamu utama tidak punya dokumen identitas, masing-masing dengan tombol Verify (pesan demo dalam bahasa Spanyol)" caption="Masalah terbuka dikelompokkan per reservasi, termasuk masa inap yang tamu utamanya masih belum punya dokumen ID." path="/automated-checks/issues" width="1440" height="2400"}
::

::demo-cta{path="/automated-checks/issues"}
::

## Legalkah memfotokopi atau memindai DNI tamu?

Dekrit meminta Anda melihat dokumen dan mencatat datanya, bukan menyimpan salinan. Badan perlindungan data Spanyol menyatakan salinan DNI umumnya tidak diperlukan untuk menandatangani kontrak, dan usaha harus memilih cara identifikasi yang paling sesuai kecuali undang-undang mewajibkan salinan ([FAQ AEPD](https://www.aepd.es/preguntas-frecuentes/1-tus-derechos/3-identificacion-con-dni/FAQ-0115-es-necesario-proporcionar-una-copia-del-dni-para-realizar-una-contratacion)). Jika tool check-in Anda menyimpan gambar ID, periksa berapa lama dan mengapa ia menyimpannya.

## Ringkasan

- SES.Hospedajes wajib untuk setiap jenis akomodasi di Spanyol, kecuali Catalonia dan Basque Country yang melapor ke kepolisian mereka sendiri.
- Kirim reservasi dan pembatalan dalam 24 jam, dan data tamu dalam 24 jam setelah check-in. Simpan catatan selama tiga tahun.
- Little Hotelier dapat mengirim ke SES.Hospedajes lewat formulir check-in kepatuhan Guest Engagement, atau lewat Chekin.
- Kumpulkan data sekali, sebelum kedatangan, dan biarkan mengalir ke Little Hotelier dan SES.
- Gunakan [pemeriksaan otomatis](/tools/bot/automated-checks) untuk menangkap ID yang hilang, dan skrip gratis [Chekin Connection](/tools/ui/show-chekin) jika Anda memakai Chekin. Untuk negara lain, baca [aturan registrasi tamu menurut negara](/blog/guest-registration-rules-by-country); untuk survei statistik Spanyol, lihat [survei okupansi INE](/blog/ine-hotel-occupancy-survey).
