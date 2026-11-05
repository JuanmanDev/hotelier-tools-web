---
title: "Tautan pembayaran Little Hotelier: cara mengirimnya, menagih deposit, dan mengingatkan tamu yang belum membayar"
seoTitle: "Tautan pembayaran dan pengingat bayar di Little Hotelier"
description: "Kirim permintaan pembayaran dari Little Hotelier, atur deposit, dan ingatkan otomatis tamu yang belum bayar, tanpa menagih yang sudah lunas di Booking.com."
date: 2026-10-28
category: invoicing
tags: [pembayaran, tautan pembayaran, little hotelier, siteminder pay, deposit, otomatisasi]
keywords: [little hotelier payment link, cara kirim tautan pembayaran little hotelier, little hotelier send payment request, little hotelier pay, siteminder pay payment link, email pengingat pembayaran hotel, mengingatkan tamu bayar sisa tagihan sebelum datang, deposit little hotelier, reservasi prepaid booking.com little hotelier]
feature: automated-checks
demoPath: /automated-checks/payments
cover: /images/blog/demo/en/payment-links-modal.webp
coverAlt: "Jendela Payment link di Hotelier Tools untuk reservasi BBN-DEMO102550: tagihan 759,55 euro yang belum dibayar, kolom jumlah, kotak SiteMinder Pay emails it to yang tidak dicentang dengan email tamu, catatan Valid for 48 hours, tombol Create payment link, dan belum ada tautan pembayaran sebelumnya"
faq:
  - q: "Bagaimana cara mengirim tautan pembayaran dari Little Hotelier?"
    a: "Buka reservasi di Front Desk dan klik Send Payment Request. Isi jumlah, alasan, dan pesannya, klik Create request, lalu kirim lewat email dari template atau salin tautannya untuk dikirim lewat chat atau SMS. Fitur ini butuh Little Hotelier Pay dalam keadaan aktif."
  - q: "Berapa lama tautan pembayaran Little Hotelier berlaku?"
    a: "48 jam sejak dibuat. Setelah itu tamu melihat bahwa permintaan tersebut sudah tidak aktif. Permintaan tidak bisa diedit: batalkan dan buat yang baru jika jumlahnya berubah."
  - q: "Bisakah saya mengirim permintaan pembayaran untuk reservasi Booking.com atau Expedia?"
    a: "Hanya jika Anda sendiri yang menagih pembayarannya. Permintaan pembayaran Little Hotelier tidak berfungsi untuk reservasi yang ditagih channel atau untuk virtual card OTA. Tamu Booking.com prepaid atau Expedia Collect sebaiknya hanya ditagih untuk yang ditambahkan di properti."
  - q: "Apakah Little Hotelier mengirim pengingat pembayaran secara otomatis?"
    a: "Pusat bantuannya menjelaskan deposit otomatis untuk reservasi langsung dan pembayaran otomatis yang menagih kartu tersimpan, tetapi tidak ada email pengingat untuk saldo yang belum dibayar. Hotelier Tools menambahkan aturan pengingat pembayaran di atasnya, dengan tautan pembayaran yang sama."
  - q: "Apakah Hotelier Tools menagih kartu tamu?"
    a: "Tidak. Tautan pembayaran hanya meminta tamu membayar di halaman aman SiteMinder. Hotelier Tools tidak pernah melihat atau menyimpan nomor kartu dan tidak pernah menagih kartu."
  - q: "Apakah Hotelier Tools bagian dari Little Hotelier atau SiteMinder?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier hotel Anda sendiri."
---

Untuk mengirim tautan pembayaran di Little Hotelier, buka reservasinya dan klik **Send Payment Request**. Masukkan jumlahnya, klik **Create request**, lalu kirim lewat email atau salin tautannya. Little Hotelier Pay harus aktif, dan tautannya berlaku 48 jam. Little Hotelier tidak menindaklanjutinya untuk Anda. Pengingat pembayaran Hotelier Tools yang melakukannya: pada hari yang Anda pilih, tamu yang belum membayar menerima email berisi tautan untuk sisa tagihannya.

Tampilan Little Hotelier di bawah ini dicocokkan dengan pusat bantuannya per November 2026.

## Cara mengirim permintaan pembayaran di Little Hotelier

Permintaan pembayaran adalah bagian dari **Little Hotelier Pay**, layanan pembayaran bawaan Little Hotelier. Permintaan ini berjalan di platform pembayaran SiteMinder, itulah sebabnya layar Hotelier Tools menyebutnya **SiteMinder Pay**. Aktifkan dulu di **Front Desk > Setup > Guest Payment Options > Payment Gateways**. Permintaan pembayaran tidak berfungsi dengan payment gateway pihak ketiga ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/8673558-little-hotelier-pay-payment-requests)).

**Di komputer:**

1. Buka reservasi di Front Desk dan klik **Send Payment Request**.
2. Periksa reservasi, nama tamu, dan jumlahnya, lalu tambahkan alasan dan pesan untuk tamu.
3. Klik **Create request**.
4. Untuk mengirimnya lewat email, pilih template email, periksa alamat tamu, klik **Preview email**, lalu **Send request**. Atau salin tautannya dan tempelkan di WhatsApp, SMS, atau email.

**Di aplikasi seluler:** buka reservasi, ketuk **Take payment**, isi tab **Request**, pilih email, SMS, atau tautan, lalu ketuk **Send request**.

Yang perlu diketahui sebelum mengirim:

- **48 jam.** Tautannya berlaku 48 jam. Setelah itu tamu melihat bahwa permintaan tersebut sudah tidak aktif.
- **Tidak bisa diedit.** Jika jumlahnya berubah, batalkan permintaannya dan buat yang baru. Batalkan juga jika reservasinya dibatalkan.
- **Tempat memantaunya.** **My apps > Payments > Payment requests** menampilkan semua permintaan. Dari **Actions** Anda bisa membatalkannya atau menyalin tautannya untuk dibagikan lagi. Permintaan yang sudah dibayar juga muncul di tab **Payments** pada reservasi.
- **Biaya tambahan.** Opsi **Apply surcharge** muncul saat Anda membuat permintaan. Biaya tambahan kartu tidak diizinkan di semua tempat, jadi periksa aturan setempat.
- **Hanya untuk yang ditagih hotel.** Permintaan pembayaran tidak berfungsi untuk reservasi yang ditagih channel atau untuk virtual card OTA.

## Deposit dan saldo: apa yang diotomatiskan Little Hotelier

Little Hotelier punya dua opsi otomatis, keduanya dengan Little Hotelier Pay:

| Fitur | Fungsinya | Di mana |
|---|---|---|
| **Automatic deposits** | Booking engine Anda mengambil deposit saat tamu memesan langsung: **Full amount**, **Percentage**, **First night**, **Fixed amount**, atau **No deposit** | **Front Desk > Setup > Guest Payment Options > Property Level Deposits** ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/8951681-automatic-deposits)) |
| **Automated payments** | Menagih saldo yang belum dibayar ke kartu tersimpan milik tamu beberapa hari sebelum check-in, saat check-in, atau saat check-out | **My Apps > Payments > Automated payments > Create a rule** ([FAQ](https://helpcentre.littlehotelier.com/en/articles/8829554-automated-payments-frequently-asked-questions)) |

Automated payments butuh kartu yang berfungsi. Saat penagihan gagal, atau tidak ada kartu, Little Hotelier menyarankan untuk mengirim permintaan pembayaran, dan sejak itu tugasnya ada di tangan staf: kirim, tunggu, dan kirim lagi saat 48 jamnya habis.

## Sudah prepaid di Booking.com atau Expedia? Jangan menagih dua kali

Reservasi Booking.com "pre-paid" atau reservasi Expedia Collect sudah dibayar ke channel. Little Hotelier tetap menampilkan masa inap itu sebagai **outstanding** sampai ada yang mencatat uang tersebut sebagai pembayaran "OTA Paid". Kirim pengingat untuk saldo itu, dan Anda meminta tamu membayar lagi untuk malam yang sudah dibayarnya.

Ada jebakan kedua. Little Hotelier menghitung harga malam dengan tarifnya sendiri, sedangkan tamu membayar harga channel (misalnya dengan diskon Genius atau diskon mobile). Jadi, bahkan setelah pembayaran OTA dicatat, jumlah yang belum dibayar bisa mencampur dua hal:

- **Malam yang ditambahkan di resepsionis** setelah reservasi: channel tidak pernah menjualnya, jadi tamu membayarnya di properti.
- **Selisih antara tarif Anda dan harga channel:** tamu sudah membayar harga channel. Selisih itu bukan tanggungan tamu.

Ambil contoh reservasi prepaid 2 malam yang diperpanjang di resepsionis dengan satu malam seharga €75. Little Hotelier mungkin menampilkan €88 belum dibayar, tetapi tamu berutang €75. Asisten AI Hotelier Tools membaca masa inap dengan cara ini dan memberi tahu resepsionis berapa yang harus dibayar tamu di properti, bukan sekadar angka dari Little Hotelier. Untuk kartu Booking.com yang tidak valid dan no-show, lihat [apa yang harus dilakukan dengan kartu tidak valid](/blog/booking-com-invalid-card-no-show).

## Cara yang lebih cepat: pengingat pembayaran dengan tautan

**Payment reminders** (pengingat pembayaran) Hotelier Tools (`/automated-checks/payments`, bagian dari automated checks, beta) menemukan reservasi yang masih punya tagihan dan mengingatkan tamu pada hari yang Anda pilih, dengan tautan jika Anda mau. Fitur ini juga mengirim ringkasan ke tim Anda. Tidak ada yang ditagih: tamu yang memutuskan apakah akan membayar.

1. Buka **Automated Checks** lalu kartu **Payment reminders**, atau langsung ke `/automated-checks/payments`. Klik **New rule**. Aturan baru dimulai dalam keadaan nonaktif.
2. Di **Which bookings**, atur **Minimum outstanding amount** (agar selisih satu sen diabaikan). Pilih apakah reservasi dengan deposit yang sudah dibayar dilewati (**Only bookings with nothing paid**) dan apakah **Include guests already in the house**. Di **Channels**, pilih **Every channel**, **Only these channels**, atau **Every channel except these**.
3. Tambahkan hingga enam **Reminders**. Masing-masing berupa jumlah hari sebelum, pada, atau setelah tanggal reservasi, check-in, atau check-out. Contohnya: 7 hari sebelum check-in, lalu 2 hari sebelum check-in.
4. Untuk setiap pengingat, pilih apa yang diterima tamu: **Reminder only**, **Reminder with a payment link**, atau **Payment request sent by SiteMinder Pay** (email milik SiteMinder sendiri). Teks kami dikirim dalam bahasa tamu, atau klik **Write my own text**. Aktifkan **Tell the team** untuk memasukkan reservasi ke ringkasan tim, dengan catatan.
5. Klik **Preview today** untuk melihat tamu mana yang akan dikirimi pesan oleh aturan ini hari ini. Fitur ini membaca Little Hotelier dan tidak mengirim apa pun.
6. Aktifkan aturannya dan beri jadwal. Yang direkomendasikan adalah **Every day at 10:00**.

::screenshot{src="/images/blog/demo/en/payment-reminders-rule-editor.webp" alt="Editor aturan pengingat pembayaran di Hotelier Tools: pemberitahuan This rule is off, nama aturan, bagian Which bookings dengan Minimum outstanding amount 1, Channels diatur ke Every channel, Only bookings with nothing paid nonaktif dan Include guests already in the house aktif, serta awal bagian Reminders" caption="Satu aturan: reservasi mana yang ditagih, kapan setiap pengingat dikirim, dan siapa yang diberi tahu. Aturan baru dimulai dalam keadaan nonaktif." path="/automated-checks/payments"}
::

### Yang membuatnya aman

- **Tidak pernah dua kali.** Setiap pengingat dicatat untuk setiap reservasi sebelum dikirim, jadi eksekusi ulang, dua jadwal, atau eksekusi manual tidak bisa mengulanginya.
- **Satu pengingat per hari per tamu**, di semua aturan Anda.
- **Menyusul tanpa membanjiri.** Pengingat tetap dikirim hingga dua hari terlambat jika ada eksekusi yang terlewat. Jika beberapa jatuh tempo sekaligus, hanya yang terakhir yang dikirim.
- **Jumlahnya selalu terbaru.** Saldo dibaca dari reservasi tepat sebelum dikirim, dan reservasi yang sudah dibayar sejak itu tidak dikirimi apa pun. Reservasi yang dibatalkan dan no-show tidak pernah ditagih.
- **Tautan dipakai ulang.** Tautan yang masih menunggu untuk reservasi dan jumlah yang sama, dengan sisa waktu lebih dari dua jam, dipakai ulang alih-alih membuat tautan kedua.
- **Diberi tahu saat sudah dibayar.** Setiap eksekusi memantau tautan yang dikirim pengingatnya. Saat salah satunya dibayar, tim menerima email "payments received" (jika aturannya memberi tahu tim).

Untuk menguji satu pengingat, **Send now…** mengirimnya ke satu reservasi, berapa pun harinya. Semua yang terkirim tercantum di **Activity**: waktu, reservasi, tamu atau tim, status, jumlah yang belum dibayar, dan status tautannya (**Waiting for payment**, **Paid**, **Expired**, **Cancelled**).

### Masa inap prepaid ditangani untuk Anda

Saat reservasi menyebutkan sudah dibayar di muka di Booking.com atau Expedia, pengingat tidak pernah meminta uang yang menjadi bagian channel:

- **Jumlahnya terbukti** (tertulis di komentar reservasi, atau persis sama dengan kamar yang terjual) dan pengaturan properti **Register proven OTA prepayments (whole property)** aktif: Hotelier Tools mencatat satu pembayaran "OTA Paid" di Little Hotelier, lalu hanya meminta pembayaran untuk malam tambahan dan ekstra.
- **Jumlahnya tidak terbukti** (masa inap Expedia dengan ekstra, mata uang lain): tidak ada email ke tamu. Ringkasan tim mencantumkannya: periksa dan catat pembayarannya.
- **Tidak ada lagi yang harus dibayar:** reservasi itu dilewati.

Anda memilih kapan pembayaran itu dicatat di **When to register them**: **At the checks (before arrival and at checkout)**, atau **Some hours after arrival** (0 sampai 48 jam, default 1). Dengan pilihan kedua, perubahan di resepsionis saat check-in, seperti ekstra atau pindah kamar, sudah masuk ke saldo lebih dulu. Pilihan ini butuh tugas per jam **Register OTA prepayments after arrival**, yang Anda jadwalkan sendiri.

## Satu tautan untuk satu reservasi

Tidak semua pembayaran butuh aturan. Buka reservasi di `/reservations/<number>` dan, di **Payments**, klik **Payment link**. Tombol yang sama ada di samping saldo di daftar harian dan di panel reservasi inbox.

1. Jendelanya menampilkan tagihan reservasi dan tautan-tautan sebelumnya, masing-masing dengan statusnya.
2. Minta seluruh saldo atau sebagian (misalnya deposit) di **Amount**.
3. Centang **SiteMinder Pay emails it to …** agar dikirim lewat email, atau biarkan tidak dicentang dan **Copy** tautannya untuk Anda kirim sendiri.
4. Klik **Create payment link**. Tautan yang masih menunggu bisa dibatalkan dari jendela yang sama.

::screenshot{src="/images/blog/demo/en/payment-links-reservation-payments.webp" alt="Bagian Payments sebuah reservasi di Hotelier Tools: tombol Payment link, deposit tunai 759,55 euro yang dicatat manual pada 4 Oktober 2026 dengan tombol Refund, Still refundable sebesar total 759,55 euro, tidak ada kartu tersimpan, dan panel Original booking" caption="Semua pembayaran masa inap di satu tempat, dengan tautan pembayaran dan refund cukup satu klik." path="/reservations"}
::

Bagian **Payments** juga menangani refund. Klik **Refund** pada sebuah pembayaran, masukkan jumlah penuh atau sebagian (koma maupun titik sama-sama bisa), dan Hotelier Tools mencocokkannya dengan jumlah yang masih bisa di-refund sebelum meminta ke Little Hotelier, satu kali. Jika Little Hotelier tidak mengonfirmasi, Anda diminta memeriksa reservasinya sebelum melakukan refund lagi, alih-alih mengirim refund kedua.

**Untuk developer dan AI:** tautan yang sama tersedia di REST API (`POST /api/v1/reservations/{id}/payment-link`, tamu hanya dikirimi email dengan `"notifyGuest": true`) dan sebagai tool `create_payment_link`, yang meminta persetujuan Anda di chat AI. Lewat chat AI atau API, pembayaran kartu yang diambil di mesin EDC resepsionis bisa dicatat di masa inap hanya dengan merek dan empat digit terakhirnya. Tidak ada yang ditagih. Permintaan yang berisi sesuatu yang mirip nomor kartu lengkap akan ditolak. Lihat [halaman REST API dan MCP](/tools/bot/api-mcp).

::demo-cta{path="/automated-checks/payments"}
::

Di **Settings > Team**, membuat dan membatalkan tautan butuh izin **Record payments**, refund butuh **Refund payments**, dan mengedit aturan butuh **Run payment reminders**. Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier hotel Anda sendiri. Tautan pembayaran adalah permintaan pembayaran milik SiteMinder Pay sendiri: tamu membayar di halaman SiteMinder, dan tidak ada data kartu yang melewati Hotelier Tools.
::

Lihat juga: [mengirim invoice saat check-out](/blog/send-invoice-to-guest-at-checkout), [checklist harian front desk](/blog/hotel-front-desk-checklist-automation), [kartu tidak valid atau no-show di Booking.com](/blog/booking-com-invalid-card-no-show).

## Ringkasan

- Di Little Hotelier, **Send Payment Request** pada reservasi membuat tautan yang berlaku 48 jam. Fitur ini butuh Little Hotelier Pay dan hanya berfungsi untuk reservasi yang Anda tagih sendiri.
- Deposit untuk reservasi langsung dan penagihan kartu otomatis sudah tersedia bawaan. Email pengingat untuk saldo yang belum dibayar tidak.
- **Payment reminders** Hotelier Tools mengirim email berisi tautan ke tamu yang belum membayar pada hari yang Anda pilih, tidak pernah dua kali, dan memberi tahu tim saat tautan sudah dibayar.
- Tamu masa inap prepaid Booking.com dan Expedia tidak pernah ditagih lagi untuk uang yang menjadi bagian channel: hanya malam dan ekstra yang ditambahkan di properti.
