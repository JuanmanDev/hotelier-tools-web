---
title: "Pesan tamu Booking.com: cara mengelolanya tanpa terus-menerus membuka extranet"
seoTitle: "Pesan tamu Booking.com tanpa membuka extranet"
description: "Pulse, template, pesan terjadwal, balasan otomatis, cara mengenali pesan palsu Booking.com, dan satu inbox untuk Booking.com, WhatsApp, dan email."
date: 2026-10-03
category: guests
tags: [booking.com, guest messages, inbox, templates, little hotelier]
keywords: [pesan tamu booking.com, pesan booking.com tidak muncul, pesan terjadwal booking com, template email booking com, balasan otomatis booking.com, pesan phishing booking.com, guest q&a booking.com]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/guest-inbox-ai-draft-availability.webp
coverAlt: "Inbox tamu Hotelier Tools dengan filter WhatsApp, Email, dan Booking.com, email dari tamu yang menanyakan kamar double pada bulan September, rencana AI berupa draf dengan balasan bahasa Inggris yang bisa diedit, dan panel asisten privat"
faq:
  - q: "Mengapa pesan Booking.com saya tidak muncul di extranet?"
    a: "Mungkin channel manager Anda yang menangani pesan tamu. Di Extranet, buka Connection management: fungsi yang ditandai hijau dikelola di platform penyedia Anda, seperti Messaging hub milik Little Hotelier. Periksa juga apakah pengguna extranet Anda punya izin yang sesuai."
  - q: "Bisakah saya menjadwalkan pesan ke tamu Booking.com?"
    a: "Bisa. Di Extranet atau Pulse, buka Property > Messaging preferences > Template scheduler lalu kaitkan template dengan satu tahap: saat tamu memesan, satu minggu, tiga hari, atau satu hari sebelum kedatangan, pada hari kedatangan, atau satu hari sebelum keberangkatan."
  - q: "Bagaimana saya tahu sebuah pesan benar-benar dari Booking.com?"
    a: "Email Booking.com selalu berasal dari alamat berakhiran @booking.com, dan tautannya mengarah ke alamat berakhiran .booking.com. Waspadai permintaan mendesak yang tidak pernah diberitahukan sebelumnya: Booking.com menyatakan tidak pernah membuatnya tanpa komunikasi terlebih dahulu."
  - q: "Mengapa reservasi Booking.com baru tidak menampilkan nomor telepon di Little Hotelier?"
    a: "Sejak 28 September 2026, Booking.com tidak lagi menyertakan nomor telepon tamu dalam reservasi yang dikirim ke channel manager. Anda tetap bisa melihat nomornya di Extranet atau Pulse dengan Show phone number."
  - q: "Bisakah AI membalas tamu Booking.com secara otomatis di Hotelier Tools?"
    a: "Tidak. Untuk Booking.com, AI hanya menyiapkan draf dan manusia yang memutuskan. Pengiriman otomatis oleh AI tidak pernah diizinkan pada percakapan Booking.com, apa pun mode balasan yang Anda pilih."
  - q: "Apakah Hotelier Tools bagian dari Booking.com atau Little Hotelier?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh Booking.com, SiteMinder, maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier hotel Anda sendiri dan login extranet Booking.com Anda sendiri."
---

Anda tidak perlu membuka extranet sepanjang hari. Aplikasi Pulse membawa pesan Booking.com ke ponsel Anda lengkap dengan notifikasi, sementara template pesan, pesan terjadwal, dan balasan otomatis menangani pertanyaan rutin. Untuk melihat Booking.com berdampingan dengan WhatsApp dan email, pakai Messaging hub Little Hotelier (add-on berbayar) atau inbox Hotelier Tools, yang juga menyusun draf balasan untuk disetujui manusia.

Fitur Booking.com di bawah ini diperiksa terhadap Partner Help mereka per Oktober 2026.

## Di mana pesan Booking.com berada, dan mengapa tidak muncul?

Anda bisa membaca dan menjawabnya di tiga tempat ([Partner Help: Contacting guests](https://partner.booking.com/en-us/help/reservations/contact-extranet/contacting-your-guests)):

- **Extranet:** **Inbox > Reservation messages**, atau buka sebuah reservasi lalu gulir ke **Conversation with guest**.
- **Aplikasi Pulse:** ketuk **Bookings**, pilih tamu, dan tulis di bawah **Messages**.
- **Penyedia konektivitas Anda**, jika mereka yang mengelola pesan tamu untuk Anda.

Pesan hilang atau tidak termuat? Periksa tiga hal ini:

1. **Siapa yang mengelola pesan.** Di Extranet, buka halaman **Connection management**. Fungsi pesan yang ditandai hijau ditangani di platform penyedia Anda (misalnya Messaging hub Little Hotelier), bukan di Extranet.
2. **Hak akses pengguna Anda.** Beberapa fitur membutuhkan izin tertentu: template membutuhkan hak untuk mengelola template pesan tamu, dan nomor telepon membutuhkan hak untuk mengelola reservasi dan melihat detail kontak tamu.
3. **Notifikasi.** Di **Account > Notification settings**, pilih cara Anda mengetahui pesan baru, misalnya lewat email.

## Cara mengatur template, pesan terjadwal, dan balasan otomatis

Ketiganya ada di **Property > Messaging preferences**, di Extranet atau di bawah **More** di Pulse ([Partner Help: Templates and automatic replies](https://partner.booking.com/en-us/help/reservations/contact-extranet/setting-templates-automatic-replies-and-message-notifications)).

### Template pesan

1. Buka tab **Message templates** dan klik **Create new template**.
2. Tulis pesannya. Blok info yang sudah tersedia di Booking.com menyisipkan nama tamu, jam check-in, nama properti, dan detail reservasi lainnya.
3. Tambahkan bahasa dan gambar jika perlu, lalu klik **Continue**.
4. Beri **Template name** dan **Template topic**, lalu klik **Save template**.

Pakai nama template yang sama untuk setiap versi bahasa. Booking.com lalu mengirim dalam bahasa tamu dan kembali ke bahasa default Anda jika tidak tersedia. PDF dan kode QR tidak bisa dilampirkan, dan setiap tautan (misalnya check-in online Anda) harus disetujui terlebih dahulu di **Security settings**.

Contoh template sebelum kedatangan yang bisa Anda sesuaikan (ganti tanda kurung dengan blok info Booking.com):

```text [pre-arrival-template.txt]
Halo [nama tamu], kami menantikan kedatangan Anda di [nama properti].

Check-in mulai pukul [jam check-in]. Jika Anda tiba setelah pukul 22.00, cukup balas dengan perkiraan jam kedatangan Anda.
Parkir: [info parkir Anda]. Sarapan: [jam dan harga].

Kami tidak akan pernah meminta data kartu Anda lewat WhatsApp atau SMS.
Sampai jumpa!
```

### Pesan terjadwal

Buka tab **Template scheduler**, klik **Schedule a template**, pilih kapan pesan dikirim dan template mana, lalu **Add to schedule**. Tahapannya: saat tamu memesan, satu minggu sebelum kedatangan, tiga hari sebelum, satu hari sebelum, pada hari kedatangan, dan satu hari sebelum keberangkatan. Template yang terkirim muncul di inbox Anda.

### Balasan otomatis

Di tab **Automatic replies**, buka pengaturan sebuah topik, centang, pilih respons Anda, kaitkan template dengan **Select template**, lalu **Save**. Permintaan yang sesuai kebijakan Anda mendapat persetujuan otomatis; untuk permintaan di luar kebijakan, Anda memasangkan balasan dengan template. Tamu menerimanya lewat email dan di chat.

### Help me reply dan terjemahan

Chat di Extranet punya tombol **Help me reply** yang menyarankan template atau balasan teks bebas. Anda sendiri yang meninjau, mengedit, dan mengirimnya. Pesan juga bisa diterjemahkan di Extranet dan Pulse (Inggris, Jerman, Prancis, Spanyol, Belanda, Polandia, Rusia, Arab, dan Portugis).

## Apakah membalas dengan cepat penting?

Ya. Pusat bantuan Little Hotelier mencatat bahwa Booking.com memantau skor balasan internal yang mengukur seberapa cepat Anda merespons. Ketika sebuah pesan tidak perlu dijawab ("Terima kasih, sampai jumpa hari Jumat!"), tandai **No reply needed**: ini menutup jendela respons 24 jam sehingga thread itu tidak merugikan Anda ([Messaging hub FAQ](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

## Cara menjawab Guest Q&A (pertanyaan sebelum memesan)

Guest Q&A memungkinkan orang bertanya kepada Anda sebelum memesan. Jawaban Anda dipublikasikan di halaman properti setelah moderasi. Tamu lain bisa memberi upvote, sehingga yang paling berguna muncul lebih dulu ([Partner Help: Guest Q&A](https://partner.booking.com/en-us/help/property-page/general-info/guest-qa-feature)).

Anda bisa menghapus jawaban yang sudah usang, atau membalas secara privat jika pertanyaannya bersifat pribadi. Untuk menonaktifkannya, buka tab **Inbox** di Extranet, **Questions for your property**, **Guest Q&A preferences**. Pertanyaan yang terus berulang (parkir, check-in larut malam, hewan peliharaan) sebaiknya juga ada di deskripsi properti Anda.

## Opsi dari Little Hotelier sendiri: Messaging hub

Jika Anda memakai add-on **Guest Engagement** Little Hotelier (tercantum untuk paket Pro di [halaman harga](https://www.littlehotelier.com/pricing/) per Oktober 2026), **Messaging hub** miliknya bisa menjadwalkan pesan dan chat dengan tamu Booking.com, berdampingan dengan WhatsApp, Airbnb, SMS, dan email. Pesan Booking.com di sana tidak dikenai biaya tambahan ([Messaging hub FAQ](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

1. Pastikan Booking.com terhubung di **Channels**.
2. Buka **Guest Engagement > Communication > Settings**, cari Booking.com lalu klik **Configure**.
3. Klik **Connect** dan berikan izin pesan tamu kepada SiteMinder di widget Booking.com.
4. Muat ulang halaman dan mulai membalas. Ikon **No reply needed** menutup thread yang tidak perlu dijawab.

Inbox yang sama ada di aplikasi seluler Little Hotelier, dengan notifikasi push untuk pesan baru ([aplikasi seluler](https://helpcentre.littlehotelier.com/en/articles/15547083-guest-messaging-in-the-little-hotelier-mobile-app)). Tambahkan domain Little Hotelier ke allowlist Booking.com, atau pesannya tidak akan sampai ke tamu Booking.com ([caranya](https://helpcentre.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).

## Cara mengenali pesan palsu Booking.com

Penipu menyamar sebagai Booking.com untuk mencuri login extranet Anda, lalu mengirim pesan ke tamu Anda dengan tautan pembayaran palsu. Panduan Booking.com ([Partner Help: Phishing and email spoofing](https://partner.booking.com/en-us/help/account-and-log/security/online-security-awareness-phishing-and-email-spoofing)):

- **Periksa pengirimnya.** Email Booking.com selalu berasal dari alamat berakhiran **@booking.com**, apa pun subdomainnya. Alamat seperti support@booking-103266.com adalah palsu.
- **Periksa tautan sebelum mengeklik.** Arahkan kursor ke tautan, atau tekan dan tahan di ponsel. Jika alamatnya tidak berakhiran **.booking.com**, jangan dibuka.
- **Perhatikan nadanya.** Ancaman mendesak (akun Anda akan ditangguhkan), salah ketik, dan campuran bahasa adalah tanda bahaya. Booking.com "will never make urgent requests without sending prior communication": hubungi account manager atau Customer Service Anda terlebih dahulu.
- **Jika Anda sudah mengeklik:** atur ulang kata sandi email Anda lebih dulu, lalu kata sandi Booking.com, pindai perangkat Anda, dan laporkan dalam 24 jam.

Lindungi juga tamu Anda:

- **Aktifkan Messaging security settings** (**Property > Messaging preferences > Security settings**, dengan autentikasi dua faktor). Daftarkan alamat email dan tautan yang boleh sampai ke tamu: email dari alamat lain tidak diterima, dan tautan lain dihapus ([Messaging security](https://partner.booking.com/en-us/help/account-and-login/security/understanding-messaging-security-settings)). Jika Booking.com mendeteksi aktivitas mencurigakan di akun Anda, tautan di pesan Anda dinonaktifkan.
- **Ketahui di mana nomor telepon berada.** Sejak 28 September 2026, Booking.com tidak lagi mengirim nomor telepon tamu ke channel manager ([Booking.com for developers](https://developers.booking.com/connectivity/docs/migration-guides/migrating-to-new-versions)). Pakai **Show phone number** di Extranet atau Pulse.
- **Beri tahu tamu bagaimana Anda akan meminta pembayaran**, seperti baris terakhir pada template di atas.

## Cara yang lebih cepat: Booking.com, WhatsApp, dan email dalam satu inbox

**Inbox** Hotelier Tools (`/messaging`, alpha) menempatkan pesan Booking.com dan Guest Q&A berdampingan dengan WhatsApp dan email Anda, dengan reservasi di samping setiap percakapan dan balasan yang disusun AI untuk Anda periksa.

1. Hubungkan Booking.com sekali di **Credentials > Booking.com extranet** (`/credentials/booking-extranet`) dengan username partner, kata sandi, dan faktor kedua Anda (Pulse, SMS, atau panggilan telepon). Sesi disimpan terenkripsi untuk properti Anda. Booking.com mungkin sesekali meminta verifikasi ulang; wizard menanganinya.
2. Jika mau, hubungkan juga akun email Anda (Google, Microsoft, atau akun IMAP/SMTP mana pun) dan [WhatsApp](/blog/whatsapp-little-hotelier).
3. Buka **Inbox** dan filter dengan **Booking.com**. Thread Booking.com otomatis terhubung ke reservasinya.
4. Baca draf dan rencana AI, edit, atau minta asisten privat di sebelah kanan untuk mencari sesuatu di Little Hotelier.

::screenshot{src="/images/blog/demo/en/guest-inbox-ai-plan-late-arrival.webp" alt="Inbox tamu dengan percakapan WhatsApp terbuka: pesan tamu tentang kedatangan larut malam dalam bahasa Spanyol, reservasi yang cocok bertanda identitas terverifikasi dan lunas, rencana AI berupa draf dengan alasan dan balasan yang bisa diedit, serta panel Assistant privat di sebelah kanan" caption="Setiap percakapan menampilkan reservasi, draf AI yang menunggu Anda, dan asisten privat yang tidak pernah dilihat tamu." path="/messaging"}
::

Dua batasan yang jujur:

- **Untuk Booking.com, AI tidak pernah mengirim apa pun sendiri.** Dan mengirim balasan Anda kembali ke Booking.com dari inbox belum kami janjikan: salin draf yang sudah disetujui ke Extranet atau Pulse.
- **Layanan ini memakai sesi extranet Anda sendiri.** Hotelier Tools masuk sebagai Anda, karena API pesan Booking.com hanya terbuka untuk mitra konektivitas. Dashboard sendiri mencatat bahwa ketentuan mitra Booking.com membatasi akses extranet otomatis, dan bahwa Connectivity API tetap menjadi jalur yang didukung jika Anda memilikinya.

Dua pesan permintaan invoice baku dari Booking.com dikenali tanpa AI sama sekali: inbox menawarkan untuk mendaftarkan masa inap itu agar invoice-nya dikirim saat check-out (lihat [mengirim invoice otomatis saat check-out](/blog/send-invoice-to-guest-at-checkout)).

### Pilih seberapa jauh AI boleh bertindak

Di **Channels** (`/messaging/channels`), setiap akun yang terhubung punya mode balasan:

| Mode | Yang terjadi |
|---|---|
| **Off** | Pesan dikumpulkan dan ditampilkan. Tidak ada yang dianalisis atau dikirim. |
| **Draft** (default) | AI menyiapkan balasan dan rencana. Tidak ada yang terjadi sampai Anda menyetujuinya. |
| **Automatic reply** | AI mengirim balasannya setelah jeda. AI tidak pernah bisa mengubah reservasi. |
| **Autonomous** | AI membalas dan juga bisa menambah catatan atau mengatur jam kedatangan pada reservasi terverifikasi, tanpa persetujuan. Periksa beberapa kali sehari. |

Apa pun pilihan Anda, percakapan Booking.com tetap dikirim oleh manusia. AI untuk tamu tidak punya tool: ia mengembalikan rencana dari daftar tertutup (kirim pesan, tandai untuk staf, tambah catatan reservasi, atur jam kedatangan) dan tidak pernah bisa membatalkan, mengubah tanggal, atau menyentuh pembayaran. AI hanya melihat reservasi jika pengirimnya terverifikasi, dan thread Booking.com dianggap terverifikasi.

::screenshot{src="/images/blog/demo/en/guest-messaging-reply-modes-menu.webp" alt="Halaman Messaging Channels dengan menu When a guest writes terbuka pada koneksi WhatsApp: Off (collect only), Draft (I approve everything, terpilih), Automatic reply (no reservation changes), dan Autonomous (replies and changes reservations)" caption="Pilih mode balasan per akun, ditampilkan di sini untuk WhatsApp. Draft, yang default, menunggu Anda." path="/messaging/channels"}
::

### Ajari AI jawaban Anda: FAQ & knowledge

AI menjawab tamu hanya dari apa yang Anda berikan, ditambah kartu properti Anda. Buka **FAQ & knowledge** (`/messaging/faq`):

1. Di bawah **Pages and text the AI may quote**, pilih **FAQ page (URL)** atau **Plain text**, lalu klik **Add source**. Tugas terjadwal bisa membaca ulang halaman itu setiap jam.
2. Isi **House notes** dengan apa pun yang tidak ada di halaman itu: wifi, jam check-in dan check-out, parkir, tips lokal. Klik **Save notes**.
3. Di **Settings > Property & AI knowledge** (`/settings/property`), tekan **Read from Little Hotelier** untuk mengimpor alamat, kebijakan, tipe kamar, dan extras Anda, lalu **Save**.

Layanan yang belum Anda daftarkan dijawab sebagai "akan dikonfirmasi", bukan "ya". Setiap pesan yang dibaca AI dan dibuatkan drafnya memakai kredit AI, yang ditampilkan di **AI credits** (`/messaging/credits`).

::screenshot{src="/images/blog/demo/en/guest-messaging-faq-knowledge.webp" alt="Halaman FAQ and knowledge: satu sumber FAQ page sudah ditambahkan, opsi FAQ page (URL) dan Plain text dengan tombol Add source, serta House notes yang terisi (dalam bahasa Spanyol) berisi jam check-in dan check-out, harga sarapan, resepsionis 24 jam, dan wifi gratis" caption="AI hanya mengutip halaman FAQ, catatan, dan kartu properti Anda." path="/messaging/faq"}
::

::demo-cta{path="/messaging"}
::

Semua yang dilakukan inbox ada di [halaman Guest inbox](/tools/bot/guest-inbox). Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh Booking.com, SiteMinder, maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier hotel Anda sendiri dan login extranet Booking.com Anda sendiri.
::

Panduan terkait: [asisten AI untuk resepsionis](/blog/ai-assistant-hotel-front-desk), [daftar tamu yang tidak boleh menyewa](/blog/hotel-do-not-rent-list).

## Ringkasan

- Balas dari mana saja lewat Pulse, dan biarkan template, pesan terjadwal, dan balasan otomatis menangani pertanyaan rutin.
- Tandai thread yang tidak perlu dijawab sebagai **No reply needed**, dan jaga jawaban Guest Q&A tetap singkat dan layak dibaca publik.
- Anggap setiap pesan "Booking.com" yang bukan dari @booking.com, atau berisi tautan di luar .booking.com, sebagai penipuan. Aktifkan Messaging security settings.
- Untuk satu inbox dengan WhatsApp dan email, pakai Messaging hub Little Hotelier atau inbox Hotelier Tools, tempat AI membuat draf dan manusia yang mengirim.
