---
title: "Perbarui Tombol Link Pembayaran"
description: "Memberi tombol tautan pembayaran Little Hotelier label yang lebih jelas dan menambahkan nomor telepon tamu dari reservasi ke tautan, agar tidak diketik ulang."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/update-payment-link-button/from.png"
  after: "/images/scripts/update-payment-link-button/to.png"
  gallery:
    - "/images/scripts/update-payment-link-button/from.png"
    - "/images/scripts/update-payment-link-button/to.png"
---

Skrip ini menyempurnakan tombol tautan pembayaran di layar reservasi Little Hotelier. Skrip ini memberi tombol label yang lebih jelas dan menambahkan nomor telepon tamu dari reservasi ke tautan pembayaran. Skrip ini untuk staf front desk yang meminta tamu membayar deposit atau sisa tagihan dengan kartu lewat tautan pembayaran.

## Masalah yang diselesaikan

Teks standar tombol permintaan pembayaran tidak membuat setiap anggota staf langsung paham bahwa inilah cara meminta tamu membayar dengan kartu. Dan nomor telepon tamu, yang sudah tersimpan di reservasi, tidak ikut masuk ke tautan pembayaran, sehingga harus dimasukkan lagi. Keduanya menghabiskan waktu saat tamu sedang menelepon.

## Apa yang berubah

Di layar reservasi di Front Desk:

- Tombol permintaan pembayaran diganti namanya menjadi **Generate Payment Link**, atau **Cobrar con tarjeta por correo electronico (Email)** saat Little Hotelier berbahasa Spanyol.
- Nomor di kolom telepon tamu ditambahkan ke tautan tombol sebagai parameter telepon, dengan spasi dan tanda "+" dihapus.
- Jika Little Hotelier membangun ulang tautannya, skrip menerapkan perubahan itu lagi.
- Jika tautan sudah menyertakan nomor telepon, skrip membiarkannya apa adanya.

## Cara menginstal

Instal ekstensi Tampermonkey yang gratis, tekan **Instal di Tampermonkey** di halaman ini, konfirmasikan, lalu muat ulang Little Hotelier. [Panduan instalasi](/tools/ui/instructions) menunjukkan setiap langkahnya. Skrip berjalan di halaman Front Desk di app.littlehotelier.com dan hanya bertindak saat reservasi menampilkan tombol permintaan pembayaran. Skrip ini gratis dan open source: [baca kodenya di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js).

## Hal yang perlu diketahui

- Skrip hanya mengubah teks dan tautan tombol. Pembayaran itu sendiri ditangani Little Hotelier seperti biasa, dan skrip tidak pernah melihat data kartu.
- Skrip membaca kolom telepon sekali, begitu menambahkan nomor ke tautan. Jika Anda mengetik atau memperbaiki nomor sesudahnya, tautan tetap memakai nilai pertama yang dibacanya, jadi simpan reservasi dan muat ulang sebelum memakai tombol.
- Nomor ditambahkan hanya berupa angka, jadi sertakan kode negara di kolom telepon reservasi.
- Label tersedia dalam bahasa Inggris dan Spanyol. Bahasa antarmuka lain menampilkan label bahasa Inggris.
- Skrip tidak menyimpan apa pun dan tidak mengirim apa pun ke luar Little Hotelier.

## Terkait

- [Tombol Email Transfer Bank](/tools/ui/bank-transfer-email-button)
- [Cara memakai WhatsApp dengan Little Hotelier](/blog/whatsapp-little-hotelier)
- [Ekstensi Chrome Little Hotelier: userscript gratis](/blog/little-hotelier-chrome-extensions)
