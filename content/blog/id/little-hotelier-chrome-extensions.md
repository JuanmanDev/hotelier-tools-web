---
title: "Ekstensi Chrome Little Hotelier: userscript gratis agar lebih cepat"
seoTitle: "Ekstensi Chrome Little Hotelier: skrip gratis"
description: "Userscript gratis untuk Little Hotelier: harga di kalender, tabel lebih lebar, estimasi komisi Booking.com, invoice sekali klik. Cara memasangnya."
date: 2026-10-03
category: tips
tags: [chrome extension, tampermonkey, userscripts, little hotelier, productivity]
keywords: [ekstensi chrome little hotelier, little hotelier chrome extension, tampermonkey scripts, userscript chrome, little hotelier calendar prices, little hotelier booking.com commission]
demoPath: /
cover: /images/scripts/prices-display/to.png
coverAlt: "Kalender Little Hotelier (antarmuka bahasa Spanyol) dengan harga setiap malam di bawah tiap tipe kamar, ditambahkan oleh skrip Prices Display"
faq:
  - q: "Apakah skrip ini dibuat oleh Little Hotelier?"
    a: "Bukan. Ini adalah skrip independen yang gratis, diterbitkan oleh Hotelier Tools, yang tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Skrip berjalan di browser Anda sendiri, di dalam sesi Little Hotelier Anda sendiri."
  - q: "Tampermonkey atau ekstensi Chrome: mana yang saya butuhkan?"
    a: "Dua-duanya, dalam arti tertentu: Tampermonkey adalah ekstensi Chrome-nya, dan skrip berjalan di dalamnya. Anda memasang Tampermonkey satu kali, lalu menambahkan hanya skrip yang Anda inginkan."
  - q: "Apakah skrip bekerja di tablet?"
    a: "Tampermonkey berjalan di beberapa browser dan menunya menyediakan versi untuk ponsel dan tablet. Untuk layar sentuh, pasang Improve Style For Touch Screens, yang membuat tombol dan menu lebih besar. Coba dulu di perangkat Anda sendiri."
  - q: "Apakah skrip akan rusak saat Little Hotelier diperbarui?"
    a: "Bisa. Skrip mengubah halaman Little Hotelier, jadi perubahan tampilan dapat membuat skrip berhenti bekerja sampai diperbarui. Matikan di menu Tampermonkey dan laporkan masalahnya di GitHub."
  - q: "Bagaimana cara menghapus skrip?"
    a: "Klik ikon Tampermonkey dan matikan skripnya, atau buka Dashboard dan hapus. Muat ulang Little Hotelier dan halaman kembali normal."
  - q: "Apakah skrip ini berbayar?"
    a: "Tidak. Skrip browser ini gratis selamanya, tanpa perlu akun."
---

Anda bisa membuat Little Hotelier lebih cepat dengan userscript gratis: add-on kecil yang berjalan di browser lewat ekstensi Tampermonkey. Skrip ini menambahkan harga ke kalender, melebarkan tabel yang sempit, memperkirakan komisi Booking.com pada setiap booking, menaruh tombol invoice sekali klik di reservasi, dan masih banyak lagi. Pasang Tampermonkey sekali, aktifkan **Allow User Scripts** di Chrome, lalu tekan **Install on Tampermonkey** di halaman skrip mana pun.

## Apa itu Tampermonkey, dan mengapa skrip dan bukan ekstensi?

Tampermonkey adalah ekstensi browser yang menjalankan **userscript**: file JavaScript kecil yang menyesuaikan halaman web setelah dimuat. Daripada satu ekstensi terpisah untuk setiap penyesuaian, Anda memasang Tampermonkey sekali dan menambahkan hanya skrip yang Anda perlukan. Berjalan di Chrome, Edge, Firefox, Safari, dan Opera.

Setiap skrip Hotelier Tools adalah satu file yang bisa dibaca di [repositori GitHub publik](https://github.com/JuanmanDev/TampermonkeyLittleHotelier). Ada 16: 15 siap dipasang dan satu dibuat berdasarkan permintaan. Semuanya gratis selamanya.

## Apakah userscript aman? Apa yang bisa dan tidak bisa disentuhnya

Pertanyaan yang wajar, karena skrip berjalan di halaman tempat booking Anda berada. Inilah yang dilakukan dan tidak dilakukan skrip ini:

- **Hanya berjalan di Little Hotelier.** Setiap skrip menyatakan situs mana saja yang boleh dijalankannya: alamat resmi Little Hotelier (termasuk Direct Booking), ditambah alamat Chekin untuk skrip Chekin.
- **Data Anda tetap di tempatnya.** Skrip berkomunikasi dengan Little Hotelier (dan Chekin, untuk satu skrip itu). Tidak ada yang dikirim ke Hotelier Tools.
- **Bertindak sebagai Anda.** Skrip memakai sesi Anda yang sedang terbuka, jadi hanya bisa melakukan apa yang bisa Anda lakukan dengan klik sendiri. Beberapa skrip menyesuaikan formulir sebelum Anda menekan Save, misalnya mengatur negara atau jumlah dewasa.
- **Bisa Anda baca.** Kodenya publik, dan Tampermonkey menampilkannya sebelum Anda memasang.
- **Memperbarui diri sendiri.** Setiap skrip membawa alamat GitHub-nya, sehingga Tampermonkey dapat mengambil versi baru.

Aturan umum untuk userscript apa pun: pasang hanya dari sumber yang Anda percaya. Dan jika Little Hotelier mengubah sebuah halaman, skrip bisa berhenti bekerja sampai diperbarui. Matikan di menu Tampermonkey dan laporkan di GitHub.

::callout{type="info" title="Independen dan gratis"}
Skrip ini diterbitkan oleh Hotelier Tools, yang tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Skrip bekerja di dalam login Little Hotelier hotel Anda sendiri dan tidak memerlukan akun.
::

## Cara memasang skrip (sekitar lima menit untuk pertama kali)

1. **Pasang Tampermonkey** dari [tampermonkey.net](https://www.tampermonkey.net/). Pilih versi biasa untuk browser Anda, bukan beta.
2. **Izinkan menjalankan skrip.** Di Chrome 138 atau lebih baru, klik kanan ikon Tampermonkey, pilih **Manage extension**, lalu aktifkan **Allow User Scripts**. Di Chrome yang lebih lama atau di Edge, buka `chrome://extensions` (atau `edge://extensions`) dan aktifkan **Developer mode** ([FAQ Tampermonkey](https://www.tampermonkey.net/faq.php?q=Q209)).
3. **Buka halaman sebuah skrip** di situs ini, misalnya [Prices Display](/tools/ui/prices-display), lalu tekan **Install on Tampermonkey**. Tampermonkey membuka tab berisi kode: tekan **Install**.
4. **Muat ulang Little Hotelier** (F5). Perubahannya langsung tampil.

Jika tombolnya tidak berfungsi, salin kode dari GitHub, pilih **Create a new script…** di menu Tampermonkey, tempel, lalu simpan dengan Ctrl+S. [Panduan pemasangan](/tools/ui/instructions) menunjukkan setiap langkah dengan gambar, dan [semua skrip terdaftar di sini](/chrome-extensions).

::screenshot{src="/images/ui/tamperMonkeyMenu.png" alt="Menu Tampermonkey di Chrome yang menampilkan Enabled, Create a new script, dan Dashboard" caption="Menu Tampermonkey: nyalakan atau matikan skrip, buat satu secara manual, atau buka Dashboard untuk menghapusnya." width="624" height="645"}
::

Untuk menghapus skrip, klik ikon Tampermonkey dan matikan, atau buka **Dashboard** lalu hapus.

## Daftar skrip, dikelompokkan menurut fungsinya

Setiap skrip punya halamannya sendiri dengan gambar sebelum-sesudah dan tombol pasang.

### Lihat lebih banyak dalam satu layar

- [Full Width Reservation Table](/tools/ui/full-width-reservation-table): daftar Reservations memakai seluruh lebar layar Anda. Tidak perlu lagi menggulir ke samping.
- [Tables Full Width](/tools/ui/tables-full-width): hal yang sama untuk setiap tabel di Direct Booking.
- [Compact Calendar UI](/tools/ui/compact-calendar-ui): hari dan tanggal dalam satu baris, bukan tiga, dan baris tipe kamar yang lebih pendek, sehingga lebih banyak kamar muat di kalender.
- [Compact UI Reservation Details](/tools/ui/compact-ui-reservation-details): layar reservasi yang lebih rapat dengan kotak komentar yang lebih tinggi.

::screenshot{src="/images/scripts/compact-calendar-ui/to.png" alt="Kalender Little Hotelier (antarmuka bahasa Spanyol) setelah Compact Calendar UI, dengan hari dan tanggal dalam satu baris dan baris tipe kamar yang ringkas" caption="Compact Calendar UI memuat lebih banyak kamar dan hari dalam satu layar." width="1187" height="1306"}
::

### Harga dan komisi Booking.com

- [Prices Display](/tools/ui/prices-display): menampilkan harga kamar setiap malam di kalender, dibaca dari halaman Inventory Anda. Berguna saat tamu menelepon menanyakan hari Jumat.
- [Show Booking.com Commissions](/tools/ui/show-booking-commissions): menambahkan rincian estimasi komisi dan perkiraan jumlah bersih pada reservasi Booking.com. Ini perkiraan; invoice Booking.com Anda adalah angka akhirnya. Selengkapnya di [berapa komisi Booking.com](/blog/booking-com-commission).
- [Change Inventory Name](/tools/ui/change-inventory-name): mengganti nama menu **Inventory** menjadi "Inventory - Prices" (bahasa Inggris dan Spanyol), agar staf baru menemukan tarifnya.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Reservasi Booking.com di Little Hotelier (antarmuka bahasa Spanyol) dengan baris ringkasan tambahan untuk biaya transfer, komisi Booking.com, total komisi dengan PPN, dan perkiraan jumlah bersih" caption="Perkiraan sisa uang dari booking Booking.com setelah komisi." width="752" height="715"}
::

### Pembayaran dan invoice dengan lebih sedikit klik

- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button): tautan cetak invoice langsung di reservasi, tanpa membuka menu Print.
- [Update Payment Link Button](/tools/ui/update-payment-link-button): kalimat yang lebih jelas pada tombol tautan pembayaran, dan nomor telepon tamu ditambahkan dari formulir secara otomatis.
- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button): tombol yang mengirim email berisi data rekening bank Anda dengan teks yang sudah terisi. Belum dipublikasikan dan disiapkan berdasarkan permintaan.

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="Bagian bawah reservasi Little Hotelier (antarmuka bahasa Spanyol) dengan tautan tambahan Imprimir Factura di samping menu Print dan Email" caption="Satu klik untuk mencetak invoice." width="604" height="265"}
::

Ingin invoice terkirim tanpa klik sama sekali? Lihat [cara mengirim invoice otomatis saat check-out](/blog/send-invoice-to-guest-at-checkout).

### Data tamu dan check-in

- [Chekin Connection](/tools/ui/show-chekin): jika Anda memakai Chekin untuk check-in online, menampilkan registrasi Chekin setiap tamu (nama, telepon, nomor dokumen) di dalam reservasi. Anda bisa menyalin ID ke invoice dan membagikan formulir registrasi lewat email atau WhatsApp. Memakai login Chekin Anda sendiri.
- [Easy Save Province and Country](/tools/ui/easy-save-province-country): untuk properti di Spanyol, daftar provinsi Spanyol pada kolom provinsi. Memilih satu akan mengatur negara ke Spanyol, dan kolom nama serta nama belakang yang kosong diisi garis bawah.
- [Update Number Adults](/tools/ui/update-number-adults): formulir reservasi baru dimulai dengan 2 dewasa, bukan 0, sehingga tidak menyimpan booking tanpa dewasa.

::screenshot{src="/images/scripts/show-chekin/to.png" alt="Reservasi Little Hotelier (antarmuka bahasa Spanyol) dengan panel Chekin yang mencantumkan satu tamu terdaftar, nomor dokumen, dan tombol Use document" caption="Registrasi Chekin di dalam reservasi Little Hotelier." width="1484" height="831"}
::

### Kenyamanan sehari-hari: muat ulang, tablet, dan pintasan

- [Auto Refresh On Inactivity](/tools/ui/auto-refresh-inactivity): memuat ulang halaman setelah 10 menit tanpa klik, gerakan mouse, atau gulir, agar Anda tidak kembali ke sesi yang sudah kedaluwarsa. Tidak pernah memuat ulang saat Anda sedang bekerja.
- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens): tombol dan menu lebih besar untuk tablet, dan tombol hapus kamar yang biasanya hanya muncul saat mouse diarahkan kini selalu terlihat.
- [Add Button Check on Front Desk](/tools/ui/add-button-check-front-desk): dari reservasi Direct Booking, tombol untuk memeriksanya di Front Desk dan meninjau refund. Jika Anda belum masuk ke Front Desk, mungkin perlu menekannya dua kali.

## Skrip mana yang dipasang lebih dulu

- **Front desk di laptop:** Full Width Reservation Table, Auto Refresh On Inactivity, Extra Invoice Print Button.
- **Pemilik atau revenue:** Prices Display dan Show Booking.com Commissions.
- **Properti di Spanyol:** Easy Save Province and Country, ditambah Chekin Connection jika Anda memakai Chekin.
- **Tablet di resepsionis:** Improve Style For Touch Screens.

## Saat Anda butuh lebih dari sekadar penyesuaian tampilan

Skrip mengubah apa yang Anda lihat selama Anda ada di depan layar. Skrip tidak bisa bekerja saat Anda pergi. Untuk tugas yang berjalan sendiri, seperti memeriksa setiap kedatangan yang belum punya ID atau mengirim invoice saat check-out, ada [dasbor Hotelier Tools](/tools/bot). Gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027; skrip tetap gratis selamanya. Untuk pintasan lain di dalam Little Hotelier sendiri, lihat [tips dan fitur tersembunyi Little Hotelier](/blog/little-hotelier-tips).

::demo-cta{path="/"}
::

## Ringkasan

- Pasang Tampermonkey sekali, izinkan user scripts, lalu tekan **Install on Tampermonkey** pada setiap skrip yang Anda inginkan.
- Skrip hanya berjalan di Little Hotelier (dan Chekin untuk salah satunya), tidak mengirim apa pun ke Hotelier Tools, dan memperbarui dirinya sendiri.
- Mulailah dengan yang sesuai tugas Anda: tabel lebih lebar dan auto refresh untuk front desk, harga dan komisi untuk pemilik.
- Jika ada yang bermasalah setelah Little Hotelier diperbarui, matikan di menu Tampermonkey.
