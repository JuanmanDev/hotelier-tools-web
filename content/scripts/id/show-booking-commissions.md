---
title: "Tampilkan Komisi Booking.com"
description: "Menambahkan perkiraan rincian komisi Booking.com dan jumlah bersih perkiraan pada reservasi Little Hotelier, dengan komisi tetap 17% dan biaya 1,3%."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/show-booking-commissions/from.png"
  after: "/images/scripts/show-booking-commissions/to.png"
  gallery:
    - "/images/scripts/show-booking-commissions/from.png"
    - "/images/scripts/show-booking-commissions/to.png"
---

Skrip ini menambahkan perkiraan jumlah yang dipotong Booking.com dari setiap pemesanan ke layar reservasi di Little Hotelier. Untuk reservasi Booking.com, skrip menampilkan biaya transfer, komisi, total potongan termasuk pajak, dan jumlah bersih perkiraan. Skrip ini untuk pemilik dan manajer yang ingin gambaran cepat tentang berapa sebenarnya penghasilan dari sebuah reservasi Booking.com.

## Masalah yang diselesaikan

Total reservasi di Little Hotelier adalah yang dibayar tamu, bukan yang masuk ke rekening bank Anda. Dengan Booking.com, komisi dan biaya pembayaran dipotong belakangan, di invoice terpisah. Tanpa angka kasar di tangan, sulit membandingkan pemesanan dari kanal dengan pemesanan langsung, atau melihat apakah sebuah diskon masih menyisakan margin.

## Apa yang berubah

Ketika sumber pemesanan reservasi adalah **Booking.com**, empat baris ditambahkan ke ringkasan reservasi, tepat di atas garis pemisah. Labelnya dalam bahasa Spanyol:

- **Cargo por transferencia (1.3%)**: biaya transfer, 1,3% dari total reservasi.
- **Comisiones Booking (17%)**: komisi Booking.com, 17% dari total reservasi.
- **Total comisiones con IVA**: biaya transfer ditambah komisi ditambah jumlah pajak yang ditampilkan pada reservasi.
- **Neto Bruto (Aprox.)**: jumlah bersih perkiraan, yaitu total reservasi dikurangi jumlah tersebut.

Reservasi dari sumber lain tidak diubah.

## Cara menginstal

Instal ekstensi Tampermonkey yang gratis, tekan **Instal di Tampermonkey** di halaman ini, konfirmasikan, lalu muat ulang Little Hotelier. [Panduan instalasi](/tools/ui/instructions) menunjukkan setiap langkahnya. Skrip berjalan di halaman Front Desk di app.littlehotelier.com dan hanya menambahkan baris pada reservasi Booking.com. Skrip ini gratis dan open source: [lihat kodenya di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js).

## Hal yang perlu diketahui

- Persentasenya tetap di kode: komisi 17% dan biaya transfer 1,3%. Jika kontrak Booking.com Anda memakai persentase lain, ubah angka itu di editor Tampermonkey.
- Labelnya tetap dalam bahasa Spanyol dan jumlah ditampilkan dalam euro, apa pun bahasa antarmuka Anda.
- Ini hanya perkiraan. Invoice Booking.com Anda adalah angka akhirnya.
- Baris-baris itu dihitung sekali, beberapa detik setelah reservasi dimuat. Jika Anda mengubah total, muat ulang halaman untuk menghitung ulang.
- Skrip hanya membaca sumber pemesanan, total, dan pajak yang sudah ada di layar. Skrip tidak menyimpan apa pun dan tidak mengirim apa pun ke mana pun.

## Terkait

- [Berapa komisi yang diambil Booking.com](/blog/booking-com-commission)
- [Ekstensi Chrome Little Hotelier: userscript gratis](/blog/little-hotelier-chrome-extensions)
