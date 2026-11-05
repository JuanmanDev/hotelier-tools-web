---
title: "Cara membalas pesan tamu hotel dengan AI (WhatsApp, Booking.com, Expedia, dan email)"
seoTitle: "Membalas pesan tamu hotel dengan AI secara aman"
description: "Biarkan AI menyiapkan draf balasan untuk tamu di WhatsApp, Booking.com, Expedia, dan email dari data reservasi dan FAQ Anda, disetujui oleh staf."
date: 2026-11-02
updated: 2026-11-05
category: ai
tags: [ai, pesan tamu, whatsapp, booking.com, email, inbox, template]
keywords: [ai balas pesan tamu hotel, ai untuk pesan tamu hotel, otomatis balas pesan tamu whatsapp hotel, template balasan pesan tamu hotel, chatgpt untuk balas pesan tamu hotel, inbox ai untuk hotel kecil, asisten ai whatsapp untuk hotel, balas otomatis pesan booking.com ai]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/ai-replies-inbox-thread-plan.webp
coverAlt: "Inbox tamu Hotelier Tools dengan percakapan WhatsApp Noah Nilsson terbuka: bertanda Identity verified, reservasinya 3 sampai 7 November sudah check-in dan lunas, rencana AI berupa draf untuk kedatangan larut malam dengan alasannya dan balasan dalam bahasa Spanyol yang bisa diedit, serta panel Assistant pribadi"
featured: true
faq:
  - q: "Bisakah AI membalas pesan tamu hotel sendiri?"
    a: "Bisa, tetapi sebaiknya tidak secara default. Pengaturan yang aman membiarkan AI menyiapkan draf balasan dari data reservasi dan FAQ Anda, lalu staf menyetujuinya. Hotelier Tools memulai setiap channel dalam mode Draft; pengiriman otomatis adalah pilihan terpisah per channel, terbatas pada pertanyaan sederhana."
  - q: "Bagaimana AI tahu pesan itu tentang reservasi yang mana?"
    a: "AI mencocokkan pengirim dengan tepat satu reservasi: di WhatsApp, nomor telepon harus cocok setidaknya pada 8 digit terakhirnya, di email alamatnya harus sama persis. Jika dua tamu cocok, atau tidak ada yang cocok, AI tidak melihat reservasi apa pun dan hanya menjawab dari FAQ Anda."
  - q: "Apakah AI akan mengarang harga atau fasilitas?"
    a: "Seharusnya tidak, dan inbox dibuat agar hal itu tidak bisa disembunyikan. AI hanya menjawab dari sumber FAQ, catatan properti, dan kartu properti Anda, menulis \"akan dikonfirmasi\" untuk apa pun yang belum Anda daftarkan, dan harga yang tidak berasal dari penawaran booking engine ditandai di samping draf."
  - q: "Apakah AI mengirim balasan di Booking.com atau Expedia sendiri?"
    a: "Tidak. Di Booking.com, AI hanya menyiapkan draf dan staf yang menekan Send. Pesan Expedia (beta) hanya bisa dikumpulkan atau dibuatkan draf, dan balasannya ditulis di Partner Central."
  - q: "Apakah saya perlu WhatsApp Business API resmi?"
    a: "Tidak untuk Hotelier Tools. Layanan ini terhubung lewat WAHA, server yang Anda host sendiri dan menjalankan sesi WhatsApp Web. Cara ini menghindari proses persetujuan Meta, tetapi WhatsApp tidak mengizinkan klien tidak resmi, jadi nomor yang dipakai dengan cara ini bisa diblokir."
  - q: "Apakah Hotelier Tools bagian dari WhatsApp, Booking.com, atau Expedia?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh WhatsApp, Meta, Booking.com, Expedia Group, SiteMinder, maupun Little Hotelier. Layanan ini terhubung memakai login hotel Anda sendiri."
---

Cara aman memakai AI untuk pesan tamu adalah membiarkannya menyiapkan draf, bukan memutuskan. Berikan reservasi tamu dan fakta Anda sendiri (FAQ, aturan properti, harga dari booking engine Anda), biarkan AI menyiapkan balasan dalam bahasa tamu, lalu staf menyetujuinya sebelum dikirim. Di Hotelier Tools, pesan WhatsApp, email, Booking.com, dan Expedia masuk ke satu inbox, masing-masing dicocokkan dengan reservasinya, dengan draf AI yang tinggal diklik.

Detail pihak ketiga di bawah ini diperiksa per November 2026.

## Apa yang paling sering ditanyakan tamu hotel?

Di hotel kecil, sebagian besar pesan adalah belasan pertanyaan yang sama:

- **Jam check-in dan check-out**, dan apakah bisa check-in lebih awal.
- **Kedatangan larut malam:** "Kami tiba sekitar pukul 23.30, apakah resepsionis masih buka?"
- **Parkir, wifi, sarapan**: jam dan harganya.
- **Petunjuk arah** dan cara mengambil kunci.
- **Perubahan dan pembatalan:** tanggal, tamu tambahan, pengembalian dana.
- **Invoice**, sering dengan nama perusahaan dan NPWP.
- **Ketersediaan dan harga** dari orang yang belum memesan.

Kelompok pertama punya satu jawaban benar yang sudah Anda ketahui. Dua yang terakhir butuh staf atau data langsung: pembatalan adalah komitmen, dan harga bergantung pada tanggal, jumlah tamu, dan kamar yang masih tersedia. Pembagian inilah yang menentukan seberapa banyak AI boleh bertindak sendiri.

## Seberapa cepat tamu mengharapkan jawaban?

- **WhatsApp:** tamu sering menulis saat dalam perjalanan dan menunggu jawaban sambil memegang ponsel. Di WhatsApp Business Platform resmi, pesan tamu membuka jendela layanan pelanggan 24 jam, dan selama itu balasan Anda gratis ([harga WhatsApp](https://whatsappbusiness.com/products/platform-pricing/)).
- **Booking.com:** pusat bantuan Little Hotelier mencatat bahwa Booking.com menghitung skor balasan internal berdasarkan kecepatan Anda merespons, dan menandai pesan sebagai **No reply needed** menutup jendela 24 jamnya ([Messaging hub FAQ](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)). Selengkapnya di [mengelola pesan tamu Booking.com](/blog/booking-com-guest-messages).
- **Expedia:** tamu menulis lewat aplikasi Expedia dan Anda menjawab di Partner Central pada **Messages**. Lihat [pesan tamu Expedia](/blog/expedia-guest-messages).
- **Email:** lebih lambat, tetapi tamu yang menanyakan ketersediaan kemungkinan juga bertanya ke hotel lain.

Draf yang sudah menunggu di inbox memangkas waktu membalas tanpa melewatkan pemeriksaan.

## Mengapa AI tidak boleh mengarang jawaban

Jam check-in yang salah memang menyebalkan. Tetapi menjanjikan tempat parkir yang tidak ada, harga di bawah tarif Anda, atau detail reservasi tamu lain bisa mahal akibatnya. Chatbot mengisi kekosongan dengan teks yang terdengar masuk akal, jadi AI yang berhadapan dengan tamu butuh tiga batasan:

1. **Sumber tertutup.** AI hanya menjawab dari yang Anda berikan: halaman FAQ, catatan Anda, reservasinya. Selebihnya "akan dikonfirmasi".
2. **Satu reservasi, dan hanya untuk orang yang tepat.** AI hanya melihat reservasi jika pengirimnya terbukti tamu tersebut.
3. **Tanpa akses bertindak.** AI mengusulkan; staf (atau aturan sempit yang dibatasi) yang memutuskan apa yang sampai ke tamu atau ke reservasi.

## Kumpulan template sebagai titik awal

Apa pun tool yang Anda pakai, tulis ini sekali saja. Template ini menjadi FAQ Anda, fakta untuk AI Anda, dan balasan cepat Anda:

```text [guest-reply-templates.txt]
CHECK-IN
Halo [nama], check-in mulai pukul [jam] dan check-out paling lambat pukul [jam]. Jika Anda tiba lebih awal, Anda bisa menitipkan bagasi di tempat kami.

KEDATANGAN LARUT MALAM
Terima kasih sudah memberi tahu, [nama]. Resepsionis buka sampai pukul [jam]. Setelah itu, [cara mengambil kunci]. Jam kedatangan Anda sudah kami catat.

PARKIR
Kami punya parkir [gratis / berbayar X per malam] [di lokasi / di alamat]. [Tidak bisa dipesan sebelumnya / mohon informasikan nomor pelat kendaraan Anda].

SARAPAN
Sarapan disajikan pukul [jam] sampai [jam] dengan harga [harga] per orang. [Sudah termasuk / belum termasuk] dalam tarif Anda.

INVOICE
Tentu. Mohon kirimkan nama perusahaan, NPWP, dan alamat penagihan, dan kami akan menerbitkan invoice saat check-out.

PEMBATALAN (perlu staf)
Terima kasih, [nama]. Permintaan Anda sudah kami teruskan ke tim kami dan kami akan segera mengonfirmasi ketentuan reservasi Anda.

Kami tidak akan pernah meminta data kartu Anda lewat WhatsApp atau SMS.
```

## Cara yang lebih cepat: satu inbox, AI menyiapkan draf dan staf menyetujui

**Inbox** Hotelier Tools (`/messaging`, alpha) mengumpulkan pesan tamu dari empat tempat, mencocokkan masing-masing dengan reservasinya, dan menyiapkan balasan serta rencana untuk Anda setujui.

::screenshot{src="/images/blog/demo/en/ai-replies-inbox-thread-plan.webp" alt="Inbox tamu dengan percakapan WhatsApp Noah Nilsson terbuka: lencana Identity verified, reservasinya 3 sampai 7 November (4 malam, 1 tamu, sudah check-in, lunas), rencana AI berupa draf yang diklasifikasikan sebagai kedatangan larut malam dengan keyakinan 93%, bagian Why, balasan dalam bahasa Spanyol yang bisa diedit, dan aksi send_message, dengan panel Assistant di kanan" caption="Pesan, reservasi, dan draf berdampingan. Tidak ada yang dikirim sampai Anda menyetujuinya." path="/messaging"}
::

### Langkah 1: hubungkan channel Anda

| Channel | Di mana | Cara terhubung |
|---|---|---|
| **WhatsApp** | **Credentials > WhatsApp (WAHA)** (`/credentials/messaging-whatsapp`) | Server WAHA, sesi dan API key-nya, serta webhook |
| **Email** | **Credentials > Guest mailbox** (`/credentials/messaging-email`) | Login **Google** atau **Microsoft** (OAuth), atau **Other (IMAP/SMTP)** |
| **Booking.com** | **Credentials > Booking.com extranet** (`/credentials/booking-extranet`) | Login extranet Anda sendiri dengan verifikasi keduanya |
| **Expedia** (beta) | **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`), lalu **Switch on Expedia messages** | Login Partner Central Anda sendiri |

Expedia adalah yang terbaru: sejak rilis 1.71 (November 2026) thread Expedia masuk lengkap dengan tamu, masa inap, dan pesan terakhirnya, dan balasan tetap dikirim dari Partner Central ([detail](/blog/expedia-guest-messages)).

Kotak masuk Outlook dan Microsoft 365 memerlukan login Microsoft, karena Microsoft menolak login dengan kata sandi lewat IMAP. Kotak masuk baru dimulai dalam mode **Off** (hanya mengumpulkan): pembuatan draf memakai kredit AI, jadi Anda yang memutuskan kapan menyalakannya.

### Apa itu WAHA, dan risikonya

[WAHA](https://waha.devlike.pro/docs/overview/introduction/) (WhatsApp HTTP API) adalah server yang Anda host sendiri, menjalankan sesi WhatsApp Web, dan memungkinkan software lain membaca dan mengirim pesan nomor tersebut lewat HTTP. Cara kerjanya seperti WhatsApp Web yang terbuka di komputer: ponsel dan aplikasi Anda tetap berfungsi.

1. Di halaman WhatsApp, isi **WAHA base URL**, **Session name**, dan **WAHA API key**, lalu simpan.
2. Di panel **WhatsApp session**, tekan **Start session**. Saat kode QR muncul, buka WhatsApp di ponsel hotel, masuk ke **Setelan > Perangkat tertaut > Tautkan perangkat**, lalu pindai.
3. Tekan **Connect webhook** agar WAHA mengirim pesan baru ke inbox, lalu **Test connection**.
4. Jika mau, di bagian **Message history**, pilih seberapa jauh ke belakang (7, 30, atau 90 hari, atau **Last year**) dan tekan **Import history**. Chat yang diimpor hanya menjadi konteks: tidak ada yang dianalisis, dijawab, atau ditandai belum dibaca.

::screenshot{src="/images/blog/demo/en/ai-replies-whatsapp-session.webp" alt="Halaman kredensial WhatsApp (WAHA) dengan kolom WAHA base URL, Session name, dan WAHA API key, serta panel WhatsApp session yang menampilkan Connected, Webhook not configured, tombol Restart session dan Connect webhook, dan Message history dengan Last 90 days dan Import history" caption="Tautkan nomor, hubungkan webhook, dan impor chat lama dari satu panel." path="/credentials/messaging-whatsapp"}
::

Risikonya, terus terang:

- **Ini bukan API resmi.** Dokumentasi WAHA menyebutkan "WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe." Nomor bisa diblokir. Jawab tamu yang menghubungi Anda; jangan pernah mengirim pesan massal ([How to avoid blocking](https://waha.devlike.pro/docs/overview/how-to-avoid-blocking/)).
- **Amankan WAHA.** Panel memberi peringatan saat **WAHA answers without an API key**: siapa pun yang bisa menjangkaunya bisa membaca dan mengirim pesan nomor tersebut.
- **URL webhook adalah rahasia.** Token di dalamnya yang membuat pesan bisa masuk ke inbox Anda. Chat grup diabaikan.

Untuk API resmi Meta, lihat Messaging hub Little Hotelier di [WhatsApp dengan Little Hotelier](/blog/whatsapp-little-hotelier).

### Langkah 2: bagaimana setiap balasan dibuat

1. **Pengirim dicocokkan dengan satu reservasi.** Panel menampilkan hasilnya: **Identity verified**, **Ambiguous — refused** (lebih dari satu tamu cocok, jadi tidak ada reservasi yang ditampilkan), **No reservation match** (AI hanya menjawab dari FAQ Anda), atau **Not checked**. Di WhatsApp, nomor harus cocok dengan telepon di reservasi setidaknya pada 8 digit terakhirnya; di email, alamatnya harus sama persis. Thread Booking.com menyebut reservasinya sendiri; thread Expedia hanya terhubung lewat referensi `EXP-` yang ada di dalamnya.
2. **AI menunggu Anda dulu.** Pesan WhatsApp dianalisis setelah 5 menit, email setelah satu jam. Jika ada yang membalas dalam waktu itu, rencananya berbunyi **already answered** dan tidak ada biaya.
3. **AI membaca** satu reservasi itu, sumber **FAQ & knowledge** Anda (`/messaging/faq`), catatan properti, dan kartu properti dari **Settings > Property & AI knowledge**.
4. **AI mengembalikan rencana dari daftar tertutup:** kirim pesan, tandai untuk staf, tambahkan catatan reservasi, atau atur jam kedatangan. AI tidak punya tool, tidak bisa membatalkan, mengubah tanggal, atau menyentuh pembayaran, dan setiap aksi hanya berlaku untuk reservasi yang cocok.
5. **Staf yang memutuskan.** Edit balasannya, lalu **Approve (respect delay)** atau **Confirm & send now**. Rencana yang tidak disentuh kedaluwarsa setelah 48 jam.

Sebelum apa pun dikirim, ada pemeriksaan yang memblokir balasan berisi referensi reservasi lain, atau nomor panjang apa pun jika pengirimnya belum terverifikasi.

### Langkah 3: pilih seberapa banyak AI boleh bertindak

Di **Channels** (`/messaging/channels`), setiap akun yang terhubung punya modenya sendiri:

| Mode | Yang terjadi |
|---|---|
| **Off — collect only** | Pesan dikumpulkan dan ditampilkan. Tidak ada yang dianalisis atau dikirim. |
| **Draft — I approve everything** (default) | AI menyiapkan balasan dan rencana; tidak ada yang terjadi sampai Anda menyetujuinya. |
| **Automatic reply — no reservation changes** | AI mengirim setelah jeda, hanya untuk pertanyaan sederhana (jam check-in atau check-out, wifi, parkir, kedatangan larut malam, petunjuk arah, fasilitas), untuk tamu terverifikasi dan dengan keyakinan yang cukup. |
| **Autonomous — replies AND changes reservations** | AI juga menambahkan catatan atau mengatur jam kedatangan di reservasi terverifikasi tanpa persetujuan. Periksa beberapa kali sehari. |

Batasan per channel: percakapan **Booking.com** tidak pernah dikirim oleh AI, apa pun modenya; staf yang menekan Send. **Expedia** hanya menawarkan Off dan Draft, dan balasannya ditulis di Partner Central. Balasan otomatis berhenti setelah 4 per jam, 12 per hari, atau 3 berturut-turut tanpa jawaban dari tamu, jadi balasan otomatis "sedang di luar kantor" tidak bisa berputar tanpa henti.

### Langkah 4: tanda tangan, format, dan file per channel

Di **Signatures** (`/messaging/signatures`) Anda menyimpan beberapa tanda tangan bernama (Reception, Management, English…), masing-masing ditulis sekali untuk setiap channel sesuai cara channel itu menampilkannya, dan memilih satu sebagai default. Contohnya diisi dari fakta properti Anda. Balasan Booking.com di percakapan reservasi tamu ditandatangani dalam teks biasa; jawaban Q&A publik tidak pernah ditandatangani.

::screenshot{src="/images/blog/demo/en/ai-replies-signatures.webp" alt="Halaman Signatures dengan contoh Reception terbuka: nama Reception diatur sebagai Default, tab Email, WhatsApp, dan Booking.com, versi email dengan nama hotel, telepon resepsionis, dan tautan situs web, kolom Text version yang kosong, dan contoh tanda tangan (Reception, Formal, Short, Full contact, Bilingual) di kiri" caption="Satu tanda tangan, tiga versi: rich text untuk email, penanda WhatsApp, teks biasa untuk Booking.com." path="/messaging/signatures"}
::

AI menulis satu draf, dan inbox menyesuaikannya dengan channel:

| Channel | Format | File |
|---|---|---|
| Email | Rich text: tebal, tautan, daftar, kutipan | Ya, total hingga 18 MB |
| WhatsApp | Format WhatsApp sendiri: `*tebal*`, `_miring_`, daftar | Hingga 10 file masing-masing 16 MB, plus pesan suara yang direkam di browser |
| Booking.com | Teks biasa; jawaban Q&A publik tetap di bawah 320 karakter | Tidak |

Di WhatsApp, foto, pesan suara, dan dokumen yang dikirim tamu tampil di thread. WhatsApp hanya menyimpan media untuk sementara, jadi file lama bisa sudah hilang.

### Langkah 5: ajari jawaban Anda

- **FAQ & knowledge** (`/messaging/faq`): tambahkan halaman FAQ atau teks biasa, dan isi catatan properti. Halaman itu menyatakannya dengan jelas: AI "answers from these sources and nothing else".
- **AI training** (`/messaging/training`): di **Review recent**, tekan **Correct** saat AI salah memahami pesan; koreksinya menjadi contoh. Tambahkan **Rules** satu kalimat, dan pakai **Test bench** untuk memastikan AI masih sesuai (setiap tes adalah analisis sungguhan dan memakai kredit).
- **Memori balasan:** tanpa pengaturan. Balasan yang dikirim tim Anda dalam setahun terakhir dipasangkan dengan pertanyaan sebelumnya, dan yang paling mirip ditunjukkan ke AI saat pesan serupa masuk, dengan nama, tanggal, referensi, dan kontak tamu lain dihapus. Ketik "6 € per malam untuk anjing, dibayar saat tiba" sekali, dan tamu berikutnya yang bertanya mendapat jawaban yang sama. Catatan properti tetap lebih diutamakan daripada balasan lama.

::screenshot{src="/images/blog/demo/en/ai-replies-training-examples.webp" alt="Halaman AI training di tab Examples dengan tiga contoh tersimpan: pertanyaan parkir berbahasa Prancis di Booking.com tanpa aksi, kedatangan larut malam berbahasa Jerman di WhatsApp yang mengatur jam kedatangan ke 01.00, dan permintaan invoice berbahasa Spanyol lewat email yang menambahkan catatan ke reservasi, masing-masing dengan petunjuk singkat" caption="Koreksi menjadi contoh yang dilihat AI saat pesan serupa masuk lagi." path="/messaging/training"}
::

### Apa lagi yang ditangani inbox

- **Harga berasal dari booking engine Anda.** Asisten pribadi di kanan memberi penawaran dari halaman pemesanan langsung Anda untuk tanggal dan jumlah tamu tersebut, dengan kode promo Anda. Harga yang tidak berasal dari penawaran ditandai sebagai belum terverifikasi.
- **Malam yang penuh:** saat tamu menanyakan tanggal yang sudah habis dan [daftar tunggu](/blog/hotel-waitlist-sold-out-dates) Anda aktif, asisten menawarkan kartu untuk menambahkan tamu ke daftar itu.
- **Permintaan invoice:** dua pesan permintaan invoice baku dari Booking.com dibaca tanpa AI dan menjadi kartu yang mendaftarkan masa inap itu untuk [invoice saat check-out](/blog/send-invoice-to-guest-at-checkout), plus balasan dalam bahasa tamu.
- **Kredit AI** (`/messaging/credits`): satu analisis adalah satu pesan tamu yang dibaca, direncanakan, dan dibuatkan draf, ditagih sesuai biaya model yang sebenarnya, dari jatah bulanan terlebih dahulu, lalu dari saldo Anda. Harga paket di sana masih sementara.

::demo-cta{path="/messaging"}
::

Semua yang dilakukan inbox ada di [halaman Guest inbox](/tools/bot/guest-inbox). Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh WhatsApp, Meta, Booking.com, Expedia Group, SiteMinder, maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier, Booking.com, dan Expedia hotel Anda sendiri.
::

Lihat juga: [cara mengenali pesan penipuan](/blog/hotel-scam-messages), [asisten AI untuk resepsionis](/blog/ai-assistant-hotel-front-desk), [WhatsApp dengan Little Hotelier](/blog/whatsapp-little-hotelier).

## Ringkasan

- Tulis jawaban untuk belasan pertanyaan umum sekali saja: itulah template Anda, FAQ Anda, dan fakta untuk AI Anda.
- Biarkan AI menyiapkan draf, dan serahkan pembatalan, pengembalian dana, harga, dan keluhan kepada staf.
- AI hanya boleh melihat reservasi jika pengirimnya cocok dengan tepat satu reservasi, dan menjawab "akan dikonfirmasi" untuk apa pun yang belum Anda daftarkan.
- Di Hotelier Tools, WhatsApp (lewat WAHA), email, Booking.com, dan Expedia (beta) berbagi satu inbox, setiap channel dimulai dalam mode **Draft**, dan Booking.com serta Expedia tidak pernah dikirim oleh AI.
- Tanda tangan, format, pelatihan, dan memori balasan membuat draf terdengar seperti resepsionis Anda sendiri.
