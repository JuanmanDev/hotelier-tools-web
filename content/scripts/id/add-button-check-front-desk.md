---
title: "Tambah Tombol Cek Front Desk dari Direct Booking"
description: "Menambahkan tombol di reservasi Direct Booking Little Hotelier yang membuka pemesanan yang sama di Front Desk, untuk memeriksa detail dan pengembalian dana."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/add-button-check-front-desk/from.webp"
  after: "/images/scripts/add-button-check-front-desk/to.webp"
  gallery:
    - "/images/scripts/add-button-check-front-desk/from.webp"
    - "/images/scripts/add-button-check-front-desk/to.webp"
    - "/images/scripts/add-button-check-front-desk/from2.webp"
    - "/images/scripts/add-button-check-front-desk/to2.webp"
---

Skrip ini menambahkan tombol pada setiap reservasi di extranet Direct Booking Little Hotelier yang membuka pemesanan yang sama di Front Desk, di tab baru. Skrip ini untuk staf front desk dan pemilik yang menangani pemesanan langsung dan perlu memeriksa reservasi lengkap atau meninjau pengembalian dana tanpa mencarinya secara manual.

## Masalah yang diselesaikan

Direct Booking (back office mesin pemesanan di app.thebookingbutton.com) dan Front Desk adalah layar yang terpisah. Ketika tamu yang memesan lewat situs web Anda menelepon untuk mengubah pemesanan atau meminta pengembalian dana, Anda menemukan pemesanannya di Direct Booking, tetapi kamar, pembayaran, dan data tamu ada di Front Desk. Tanpa skrip, Anda menyalin referensi, pindah ke Front Desk, lalu mencarinya secara manual.

## Apa yang berubah

- Di tab **Guest** pada reservasi Direct Booking, sebuah tombol baru muncul di daftar tindakan: "View reservation data in Front Desk and check refunds" (atau versi bahasa Spanyolnya).
- Tombol itu membuka daftar **Reservations** Front Desk di tab baru, yang sudah difilter berdasarkan referensi pemesanan reservasi tersebut.
- Pencarian mencakup tanggal check-in dari dua bulan lalu sampai satu tahun ke depan, sehingga masa menginap yang baru saja lewat maupun yang akan datang ditemukan.
- Skrip membaca ID properti Anda dari tautan Front Desk di halaman, sehingga pencarian terbuka di properti Anda sendiri.
- Skrip memeriksa halaman setiap dua detik. Saat Anda pindah ke reservasi lain, tombol diperbarui agar menunjuk ke referensi pemesanan yang baru.

## Cara menginstal

Anda membutuhkan ekstensi Tampermonkey yang gratis. Tekan **Instal di Tampermonkey** di halaman ini, konfirmasikan, lalu muat ulang Direct Booking. [Panduan instalasi](/tools/ui/instructions) menunjukkan setiap langkahnya. Skrip hanya berjalan di halaman reservasi Direct Booking (app.thebookingbutton.com/extranet/properties/.../reservations). Skrip ini gratis dan open source: Anda bisa [membaca kodenya di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js).

## Hal yang perlu diketahui

- Skrip tidak memeriksa apakah Anda sudah masuk ke Front Desk. Jika belum, masuklah lalu tekan tombolnya sekali lagi.
- Reservasi dengan tanggal check-in lebih dari dua bulan lalu, atau lebih dari setahun ke depan, berada di luar rentang pencarian dan tidak akan muncul di hasil.
- Jika tautan Front Desk tidak ada di halaman, skrip memakai ID properti tetap yang tertulis di kode, dan pencarian tidak akan terbuka di properti Anda. Ubah nilai itu di skrip jika hal ini terjadi.
- Teks tombol hanya tersedia dalam bahasa Inggris dan Spanyol.
- Skrip tidak menyimpan apa pun dan tidak mengirim apa pun ke luar Little Hotelier.

## Terkait

- [Tabel Lebar Penuh](/tools/ui/tables-full-width) untuk tabel yang lebih lebar di Direct Booking
- [Ekstensi Chrome Little Hotelier: userscript gratis](/blog/little-hotelier-chrome-extensions)
