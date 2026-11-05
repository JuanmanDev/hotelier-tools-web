---
title: "Expedia Collect: cara dibayar lewat kartu virtual atau payment request (dan tidak pernah terlewat)"
seoTitle: "Pembayaran Expedia Collect: kartu virtual & payment request"
description: "Tamu Expedia Collect membayar ke Expedia, tapi Anda baru dibayar setelah menagih kartu virtual atau meminta pembayaran. Tenggat, langkah, dan otomatisasi."
date: 2026-11-04
updated: 2026-11-05
category: invoicing
tags: [expedia, expedia collect, pembayaran, kartu virtual, partner central, otomatisasi]
keywords: [expedia collect payment request, cara dibayar expedia collect, minta pembayaran expedia, kapan menagih kartu virtual expedia, expedia collect belum dibayar, pembayaran expedia partner central, expedia collect vs hotel collect, kartu virtual expedia kedaluwarsa, pencairan dana expedia]
feature: automated-checks
demoPath: /credentials/expedia-extranet
cover: /images/blog/demo/en/expedia-collect-checkout-check.webp
coverAlt: "Pemeriksaan When they leave di Hotelier Tools dengan pemeriksaan Expedia Collect payment dalam keadaan nonaktif: memeriksa di Partner Central apakah pembayaran sudah diminta saat tamu pergi, menautkan ke riwayat pembayaran Expedia, dan menyatakan tidak pernah meminta ulang untuk masa inap yang ditolak Expedia serta tidak menagih kartu virtual"
featured: true
faq:
  - q: "Berapa lama waktu saya untuk meminta pembayaran reservasi Expedia Collect?"
    a: "365 hari sejak tanggal check-out tamu. Setelah itu, Partner Central tidak lagi menawarkan payment request untuk masa inap tersebut, sehingga reservasi yang terlupa bisa berarti uang yang tidak pernah Anda terima."
  - q: "Kapan saya boleh menagih kartu virtual Expedia?"
    a: "Mulai tanggal check-in. Expedia menyarankan menagih saat check-in dan mencoba lagi di akhir hari jika gagal, karena perbedaan zona waktu. Tagih jumlah persis yang tertera; kartu nonaktif enam bulan setelah check-out."
  - q: "Berapa lama Expedia membayar sebuah payment request?"
    a: "Expedia mengirim pembayaran ke bank Anda sesuai ketentuan pembayaran Anda, biasanya 30 hari setelah permintaan. Bank bisa butuh 2 sampai 8 hari lagi."
  - q: "Apakah saya harus meminta setiap pembayaran Expedia Collect secara manual?"
    a: "Tidak, jika Anda memakai kartu virtual, yang Anda tagih sendiri, atau automatic payouts di pasar yang menyediakannya (pasar tertentu, dengan potongan 2%). Selain itu, setiap masa inap perlu payment request di Partner Central, atau tool yang mengirimkannya untuk Anda."
  - q: "Bisakah Hotelier Tools meminta pembayaran Expedia Collect secara otomatis?"
    a: "Bisa, dalam versi beta. Tugas terjadwal meminta Expedia membayar masa inap setelah check-out. Tugas ini dimulai dalam mode pratinjau, tidak pernah meminta dua kali untuk masa inap yang sama, tidak pernah login sendiri, dan tidak pernah menagih kartu virtual."
  - q: "Apakah Hotelier Tools bagian dari Expedia atau Little Hotelier?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh Expedia Group, SiteMinder, maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier hotel Anda sendiri dan login Partner Central Anda sendiri."
---

Dengan Expedia Collect, tamu membayar ke Expedia saat memesan, dan Expedia berutang uang itu kepada Anda setelah masa inap. Anda menerimanya lewat salah satu dari tiga cara: menagih kartu virtual Expedia mulai tanggal check-in, mengirim payment request di Partner Central (**Payments > Request a payment from Expedia Group**) dalam 365 hari setelah check-out, atau Expedia membayar Anda lewat automatic payouts jika tersedia. Jika tidak satu pun Anda lakukan, uangnya tidak pernah tertagih. Hotelier Tools (beta) menampilkan status pembayaran setiap masa inap Expedia dan bisa mengirim permintaannya untuk Anda secara terjadwal.

Aturan Expedia di bawah ini diperiksa terhadap bantuan Partner Central Expedia Group per November 2026.

## Bagaimana cara dibayar untuk reservasi Expedia Collect?

Dengan **Expedia Collect (EC)**, tamu membayar di muka ke Expedia atau salah satu mitra B2B-nya, dan notifikasi reservasi Anda menampilkan tarif net: jumlah yang dibayar Expedia kepada Anda setelah dipotong kompensasinya ([About Expedia Collect](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-expedia-collect)). Setelah masa inap, Anda menagihnya dengan salah satu cara berikut:

| Cara dibayar | Yang Anda lakukan | Kapan uang masuk | Biaya |
|---|---|---|---|
| **Kartu virtual** | Tagih di mesin EDC Anda, mulai tanggal check-in | Sesuai jadwal biasa pemroses kartu Anda | Tanpa biaya Expedia, hanya biaya pemroses Anda |
| **Payment request** (transfer bank) | Minta di Partner Central dalam 365 hari setelah check-out | Biasanya 30 hari kemudian, ditambah 2 sampai 8 hari kerja bank | Gratis |
| **Automatic payouts** (pasar tertentu) | Tidak ada per masa inap | Hari terakhir bulan setelah check-out | Potongan 2% |

Dua model lain terlihat mirip tetapi cara kerjanya berbeda. Dengan **Hotel Collect**, tamu membayar langsung kepada Anda di properti, jadi tidak ada yang perlu diminta dari Expedia. **Expedia Traveler Preference** membiarkan setiap tamu memilih salah satunya saat memesan.

Di beberapa pasar, Expedia telah mengganti EC dengan **Updated Expedia Collect (EC+)**. Pada model net-nya, kartu virtual diisi total reservasi dikurangi kompensasi Expedia dan pajak. Pada model gross, kartu berisi jumlah penuh, dan Expedia menagih Anda secara terpisah ([About virtual cards](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/about-the-expedia-virtual-card)).

## Cara menagih kartu virtual Expedia

**Expedia Virtual Card (EVC)**, kini cukup disebut "virtual card" di Partner Central, adalah kartu sekali pakai yang diterbitkan Expedia untuk setiap reservasi Expedia Collect setelah Anda mendaftar fitur ini ([Charge the virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/charge-the-expedia-virtual-card-for-expedia-collect-bookings)).

1. Cari detail kartunya: di notifikasi reservasi (jika Anda punya channel manager), di reservasi pada Partner Central di bawah **Payment method**, atau di halaman pencarian **Virtual cards** dengan ID reservasi dan tanggal check-in ([Find a virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/find-the-expedia-virtual-card-information)).
2. Tagih **mulai tanggal check-in**, sebesar total persis yang tertera, dalam mata uang kontrak Anda.
3. Jika ditolak di pagi hari, coba lagi di akhir hari. Menurut Expedia, kartu mungkin belum aktif karena perbedaan zona waktu.
4. Tagihkan biaya tambahan dan pajak kota ke kartu tamu sendiri, jangan pernah ke kartu virtual.

Perhatikan tenggatnya. Artikel tentang penagihan menyebut kartu tetap berlaku 180 hari setelah check-out, dan artikel pencarian kartu menyebut kartu nonaktif enam bulan setelah check-out. Menagih dalam mata uang lain? Pakai kurs hari itu, atau Anda berisiko ditolak atau terkena chargeback.

## Cara meminta pembayaran dari Expedia Group di Partner Central

Jika Anda tidak memakai kartu virtual, setiap masa inap Expedia Collect perlu payment request ([Request payment from Expedia Group](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/request-payment-from-expedia-group)):

1. Pilih **Payments** di menu.
2. Di bawah **Quick tasks**, pilih **Request a payment from Expedia Group**.
3. Cari **By Date Range** (maksimal 31 hari sekaligus) atau **By Reservation ID** (hingga 200 ID).
4. Centang reservasinya, periksa jumlah reservasi dan pajaknya, lalu pilih **Create Invoice**.
5. Simpan **Transmission Queue ID** yang muncul di konfirmasi. Itulah nomor referensi permintaan tersebut.

Jika Partner Central tidak punya detail untuk suatu reservasi, unggah file payment request sebagai gantinya. Jika detail rekening bank Anda belum lengkap, pop-up di halaman permintaan akan memberi tahu: lengkapi dulu, atau pembayarannya tertunda.

## Kapan Expedia membayar, dan apa yang terjadi jika Anda lupa?

Expedia mengirim uangnya sesuai ketentuan pembayaran Anda, biasanya 30 hari setelah permintaan, dan bank bisa butuh 2 sampai 8 hari lagi. Reservasi yang baru ditagih sebagian perlu permintaan baru untuk sisanya. Untuk no-show atau check-out lebih awal, hubungi Expedia untuk meminta refund.

Jika tidak ada yang meminta pembayaran untuk suatu masa inap, **Expedia tidak membayarnya**. Setelah 365 hari sejak check-out, opsinya hilang dari Partner Central. Musim ramai dengan sepuluh masa inap yang terlupa adalah uang sungguhan yang tertinggal di Expedia.

Automatic payouts menghapus langkah per masa inap, tetapi hanya di beberapa pasar, dan memotong 2% ([About automatic payouts](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-automatic-payouts)). Periksa di **Payments > Payment Settings** apakah properti Anda mendapatkannya.

## Cara mencocokkan pembayaran Expedia Collect

Setiap bulan, cocokkan tiga daftar:

- **Check-out Anda:** setiap masa inap Expedia Collect yang sudah selesai.
- **Permintaan Anda:** di Partner Central, **Payments > See all invoices**, pilih rentang tanggal, lalu lihat kolom **Status**. Riwayat disimpan dua tahun, lengkap dengan jumlah remitansi dan tanggal pembayaran ([Check the status of an invoice](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/research-an-invoice-status)).
- **Bank Anda:** transfer yang masuk, beserta queue ID-nya.

Check-out tanpa permintaan berarti uang yang perlu diminta. Permintaan tanpa transfer setelah 40 hari layak ditanyakan ke Expedia. Setelah masa inap dibayar, catat pembayarannya di sistem manajemen properti Anda, agar Little Hotelier tidak menampilkan saldo yang sebenarnya tidak terutang oleh tamu.

## Cara yang lebih cepat: minta pembayaran Expedia Collect dari Hotelier Tools (beta)

Hotelier Tools terhubung ke akun Partner Central Anda dan menjalankan rutinitas di atas untuk Anda. Layanan ini membaca setiap masa inap Expedia, menunjukkan posisi uangnya, dan meminta Expedia membayar, secara manual atau terjadwal.

### 1. Hubungkan Partner Central

Buka **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`). Login berjalan di browser pada server: Hotelier Tools mengetikkan email dan kata sandi, dan Anda hanya menjawab apa yang ditanyakan Expedia.

- **I have a login:** masukkan email login dan kata sandi. Pada perangkat baru, Expedia mengirim kode lewat email, yang Anda ketik di kotak **Code from Expedia**. Login berikutnya memakai perangkat yang tersimpan dan biasanya tidak butuh kode.
- **I have an invitation link:** opsi yang lebih rapi adalah pengguna Partner Central tersendiri untuk Hotelier Tools. Undang dari akun Anda, lalu tempel tautan dari email undangan Expedia apa adanya. Wizard membuat kata sandi (12 sampai 64 karakter, dengan huruf besar dan kecil, angka, dan simbol) serta profil yang diwajibkan Expedia, termasuk nomor telepon.

Setiap langkah yang tidak dikenali wizard, seperti pengaturan SMS atau pemeriksaan keamanan, ditampilkan sebagai gambar halaman: Anda mengeklik gambar itu dan mengetik di kolomnya. **Keep me signed in** selalu dicentang dan sesi disimpan terenkripsi. Tugas **Keep Expedia signed in** (setiap 20 menit) memakainya agar sesi tidak habis karena tidak aktif, dan tugas ini tidak pernah login sendiri. Jika sesi berakhir, seseorang harus login lagi.

### 2. Lihat status pembayaran setiap masa inap

Kartu **Expedia Collect payments** di halaman yang sama mencantumkan setiap masa inap Expedia yang check-out pada tanggal yang Anda pilih. Pilih **Last 30 days**, **This month**, **Last month**, **Last 3 months**, **This year**, atau **Last year**, atau rentang apa pun hingga 366 hari. Data Expedia dibaca per 31 hari, sama seperti formulir Partner Central sendiri.

Setiap masa inap mendapat satu status, dengan chip yang menyaring daftar:

| Status | Artinya |
|---|---|
| **To request** | Sudah check-out, belum dibayar, belum pernah diminta: Anda bisa memintanya sekarang |
| **Not yet** | Belum check-out, atau tidak ada yang perlu diminta |
| **Requested** | Diminta dari Hotelier Tools; Expedia menerimanya dan memberi queue ID |
| **Refused by Expedia** | Expedia menjawab dengan error; seseorang bisa memintanya lagi |
| **Check in Partner Central** | Tidak ada jawaban yang bisa dibaca: periksa di Partner Central sebelum meminta lagi |
| **Reconciled by Expedia** | Diminta dari sini; laporan Expedia menyebut jumlahnya diterima dan pembayaran masih tertunda |
| **Paid by Expedia** | Diminta dari sini; laporan Expedia mencantumkan tanggal dan jumlah yang dibayar |
| **Paid** / **Invoiced** | Catatan Expedia sendiri menyebut ada jumlah yang dibayar, atau masa inap sudah ditagihkan |
| **Not in Expedia's list** | Diminta manual di Partner Central, atau dibayar lewat automatic payouts |
| **Virtual card** | Tagih kartunya: tidak ada yang perlu diminta |
| **Hotel Collect** | Tamu membayar langsung kepada Anda |

Centang masa inapnya, atau pakai kotak pilih semua, lalu tekan **Request payment for N stays**. Setelah Anda konfirmasi, Hotelier Tools mengirim satu permintaan untuk semuanya, permintaan **Create Invoice** yang sama dengan di Partner Central. Setiap masa inap diklaim lebih dulu, sehingga tidak pernah terkirim dua kali. **Details** menampilkan apa kata Expedia tentang suatu masa inap dan riwayat permintaannya.

::screenshot{src="/images/blog/demo/en/expedia-collect-payments-card.webp" alt="Halaman Expedia Partner Central di Hotelier Tools: kartu Expedia Collect payments dengan tautan Payments history dan catatan Connect Expedia above to see them, kartu Request Expedia Collect payments automatically bertanda Not configured yet dengan tombol Every day at 09:30, Choose, dan Run now, serta daftar How it works" caption="Expedia tidak terhubung di demo, jadi kartu pembayarannya kosong. Setelah terhubung, kartu ini mencantumkan setiap masa inap dan statusnya; kartu di bawahnya menjadwalkan permintaan." path="/credentials/expedia-extranet"}
::

### 3. Biarkan berjalan terjadwal

Di **Automatic Expedia payment requests** (`/credentials/expedia-extranet/automatic-requests`), tekan **Every day at 09:30** (jadwal yang disarankan) atau **Choose** untuk memilih jam sendiri. Ini membuat tugas **Request Expedia Collect payments**. Tugas dimulai dalam mode **Preview**: setiap kali berjalan, log-nya mencatat masa inap mana yang akan diminta tanpa mengirim apa pun. Jika daftarnya sudah benar, ubah **What a run does** menjadi **Request: ask Expedia to pay**.

| Pengaturan | Default | Fungsinya |
|---|---|---|
| **Days after check-out** | 1 | Meminta setelah check-out berumur sekian hari |
| **Look back (days)** | 30 | Seberapa jauh ke belakang check-out dicari |
| **Most per stay** | No limit | Masa inap yang meminta lebih dari ini diserahkan ke manusia |
| **Most stays per run** | 20 | Sisanya menunggu jalankan berikutnya |

Yang tidak pernah dilakukannya: login ke Partner Central, meminta dua kali untuk satu masa inap, meminta untuk masa inap yang dibayar dengan kartu virtual atau belum check-out, atau meminta lagi untuk masa inap yang ditolak atau tidak dijawab Expedia. Semua itu diserahkan ke manusia, dan log-nya menyebutkannya satu per satu.

Sudah menjalankan pemeriksaan **When they leave**? Pemeriksaan **Expedia Collect payment** di sana memperingatkan jumlah yang belum diminta. Dengan perbaikan **Request the payment from Expedia (asks Expedia for money)** diaktifkan, pemeriksaan ini mengirim permintaan saat tamu pergi. Keduanya bisa aktif bersamaan: satu masa inap hanya diklaim sekali.

::screenshot{src="/images/blog/demo/en/expedia-collect-checkout-check.webp" alt="Halaman pemeriksaan When they leave: pemeriksaan Address and origin validation dan Automatic check-out, lalu pemeriksaan Expedia Collect payment dalam keadaan nonaktif, dengan apa yang bisa dilakukannya (memperingatkan jumlah yang belum diminta dan, jika perbaikannya aktif, meminta ke Expedia sekali per masa inap) dan apa yang tidak dilakukannya (meminta lagi untuk masa inap yang ditolak, menagih kartu virtual)" caption="Momen check-out bisa meminta ke Expedia untuk setiap masa inap saat tamu pergi, sekali per masa inap." path="/automated-checks/moment/at_checkout"}
::

### 4. Pantau riwayatnya

**Expedia payments** (`/automated-checks/expedia-payments`) adalah buku catatan setiap permintaan yang dibuat dari Hotelier Tools: oleh orang, tugas terjadwal, pemeriksaan check-out, asisten, atau API. Saring berdasarkan status, **Who asked**, dan tanggal check-out, lalu buka satu baris untuk melihat setiap klaim dan setiap jawaban Expedia. **Ask again** mencoba ulang masa inap yang ditolak Expedia. Untuk masa inap tanpa jawaban, Anda lebih dulu mencentang **I checked Partner Central and these stays are not there**, karena meminta dua kali bisa berarti dibayar dua kali.

Pada reservasi Expedia (`EXP-` diikuti kode konfirmasi), bagian **Payments** di reservasi punya panel **Expedia payment** dengan tombol **Check with Expedia**, dan tautan yang membuka kartu pembayaran dengan masa inap itu sudah tercentang.

Anda juga bisa bertanya ke asisten AI di dashboard, atau ke Claude dan ChatGPT lewat [server MCP](/blog/what-is-mcp-server-hotels). "Pembayaran Expedia mana yang ditolak bulan ini?" memanggil `list_expedia_payment_requests`. "Minta lagi ke Expedia untuk EXP-2570237397" memanggil `request_expedia_payments`, tool yang membutuhkan persetujuan Anda: di chat dashboard muncul sebuah kartu, dan tidak ada yang dikirim sampai Anda konfirmasi. Pembacaan dan permintaan yang sama tersedia di REST API.

### Batasan yang jujur

- **Beta, dan masih baru.** Fitur payment request dirilis pada November 2026.
- **Status pembayaran hanya diikuti untuk permintaan dari sini.** Sejak rilis 1.71 (November 2026), Hotelier Tools membaca halaman **Statements and invoices** di Partner Central (12 bulan terakhir) dan menampilkan permintaan sebagai **Reconciled by Expedia** (diterima, pembayaran tertunda) atau **Paid by Expedia** (dengan tanggal dan jumlahnya), juga di panel Expedia pada reservasi. Permintaan yang belum muncul di halaman itu tetap **Requested**.
- **Tidak pernah menagih kartu virtual.** Masa inap tersebut tampil sebagai **Virtual card**: tagih di mesin EDC Anda.
- **Memakai sesi Partner Central Anda sendiri.** Ketentuan mitra Expedia membatasi akses otomatis ke Partner Central. Hotelier Tools login sebagai pengguna Anda, tidak pernah sendiri, dan tidak ada yang dibagikan antarproperti.
- **Expedia tidak terhubung di demo**, jadi demo menampilkan kartunya tetapi tanpa masa inap Expedia.

::demo-cta{path="/credentials/expedia-extranet"}
::

Semua pemeriksaan ada di [halaman Automated checks](/tools/bot/automated-checks). Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh Expedia Group, SiteMinder, maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier hotel Anda sendiri dan login Expedia Partner Central Anda sendiri.
::

Lihat juga: [pesan tamu Expedia](/blog/expedia-guest-messages), [reservasi OTA yang tidak masuk ke Little Hotelier](/blog/ota-bookings-missing-little-hotelier), [kartu tidak valid atau no-show di Booking.com](/blog/booking-com-invalid-card-no-show).

## Ringkasan

- Expedia Collect berarti Expedia memegang uang tamu sampai Anda mengklaimnya.
- Kartu virtual: tagih mulai tanggal check-in, sebesar jumlah persis, sebelum kartu nonaktif enam bulan setelah check-out.
- Payment request: **Payments > Request a payment from Expedia Group**, dalam 365 hari setelah check-out; biasanya dibayar 30 hari kemudian.
- Cocokkan setiap bulan: check-out dengan **See all invoices** dan dengan rekening bank Anda.
- Hotelier Tools (beta) menampilkan status setiap masa inap dan bisa meminta pembayaran secara terjadwal, dimulai dalam mode pratinjau dan tidak pernah meminta dua kali.
