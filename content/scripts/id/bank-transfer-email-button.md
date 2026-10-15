---
title: "Tombol Email Transfer Bank"
description: "Tombol reservasi Little Hotelier yang menyiapkan email berisi detail transfer bank, jumlah terutang, dan tanggal menginap. Dipasang atas permintaan."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/bank-transfer-email-button/from.png"
  after: "/images/scripts/bank-transfer-email-button/to.webp"
  gallery:
    - "/images/scripts/bank-transfer-email-button/from.png"
    - "/images/scripts/bank-transfer-email-button/to.webp"
---

Skrip ini menambahkan tombol pada reservasi Little Hotelier yang membuka email siap pakai yang meminta tamu membayar lewat transfer bank. Email itu sudah berisi jumlah yang masih terutang, tanggal menginap, dan kamar yang dipesan. Skrip ini ditujukan untuk pemilik dan staf front desk di properti yang menerima transfer bank. Skrip ini tidak dipublikasikan untuk umum: versi saat ini ditulis untuk satu properti, jadi dipasang atas permintaan.

## Masalah yang diselesaikan

Ketika tamu ingin membayar lewat transfer, seseorang harus menulis email yang sama setiap kali: nomor rekening, bank, penerima, referensi pembayaran, jumlah yang tepat, dan tanggal pemesanan. Menyalin jumlah dan tanggal secara manual itu lambat, dan referensi yang salah membuat pembayaran sulit dicocokkan nanti.

## Apa yang berubah

Di layar reservasi di Front Desk:

- Sebuah opsi baru ditambahkan ke menu **Email**, dan sebuah tombol baru dengan ikon amplop muncul di samping tombol **Print**.
- Mengeklik salah satunya membuka program email Anda dengan pesan baru yang ditujukan ke email tamu.
- Pesan itu diisi dari reservasi: jumlah yang masih terutang, referensi pembayaran yang terdiri dari tanggal check-in dan nama depan tamu, tanggal check-in dan check-out, serta kamar yang dikelompokkan per tipe kamar dengan jumlahnya masing-masing.
- Pesan itu juga menyertakan tautan ke reservasi di Little Hotelier, sebagai acuan Anda sendiri.

## Cara menginstal

Skrip ini belum dipublikasikan untuk umum. Silakan [hubungi saya](/contact) dan saya bisa menyesuaikannya dengan properti Anda. Setelah disesuaikan, skrip diinstal seperti skrip lainnya: Anda membutuhkan ekstensi Tampermonkey yang gratis, dan [panduan instalasi](/tools/ui/instructions) menunjukkan langkah-langkahnya. Skrip hanya berjalan di halaman Front Desk Little Hotelier (app.littlehotelier.com). Skrip ini open source, dan Anda bisa membaca [kode saat ini di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js).

## Hal yang perlu diketahui

- Detail bank, nama properti, tanda tangan, jam kedatangan, dan susunan kata email ditulis langsung di kode, dalam bahasa Spanyol, untuk properti milik penulisnya sendiri. Semuanya harus diubah sebelum orang lain bisa memakainya.
- Jumlah ditampilkan dalam euro.
- Email terbuka di program email default di komputer Anda melalui tautan email standar. Tidak ada yang terkirim sampai Anda menekan kirim di sana.
- Email itu meminta tamu mengonfirmasi nomor rekening lewat telepon, sebagai perlindungan dari email penipuan yang mengubah detail bank.
- Skrip tidak menyimpan apa pun dan tidak mengirim data ke mana pun. Skrip hanya membaca kolom yang sudah ada di layar reservasi.

## Terkait

- [Perbarui Tombol Link Pembayaran](/tools/ui/update-payment-link-button) untuk pembayaran kartu lewat tautan
- [Tombol Cetak Invoice Tambahan](/tools/ui/extra-invoice-print-button)
- [Ekstensi Chrome Little Hotelier: userscript gratis](/blog/little-hotelier-chrome-extensions)
