---
title: "Tabel Reservasi Lebar Penuh"
description: "Melebarkan daftar Reservations di Front Desk Little Hotelier agar memakai seluruh layar, hingga 2000 piksel, sehingga kolom muat tanpa menggulir ke samping."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js"
category: "Front Desk"
images:
  before: "/images/scripts/full-width-reservation-table/from.png"
  after: "/images/scripts/full-width-reservation-table/to.png"
  gallery:
    - "/images/scripts/full-width-reservation-table/from.png"
    - "/images/scripts/full-width-reservation-table/to.png"
---

Skrip ini membuat daftar Reservations di Little Hotelier Front Desk memakai selebar monitor Anda. Skrip ini untuk staf front desk dan pemilik yang mencari dan meninjau pemesanan di layar lebar dan lelah dengan tabel sempit di tengah dengan ruang kosong di kedua sisinya.

## Masalah yang diselesaikan

Halaman Reservations di Front Desk menaruh kontennya dalam kolom berlebar tetap. Di monitor besar, tabel pemesanan terjepit di kolom itu, sehingga nama tamu yang panjang terbagi ke beberapa baris dan sebagian kolom membutuhkan gulir horizontal. Anda akhirnya menggulir ke samping dan ke bawah hanya untuk memeriksa satu pemesanan, sementara separuh layar tetap kosong.

## Apa yang berubah

- Di halaman Reservations, judul halaman, area konten, dan kontainer utama bisa melebar hingga 2000 piksel, bukan lebar tetap standar.
- Tabel membentang di seluruh layar, sehingga kolom mendapat lebih banyak ruang dan nama tamu yang panjang lebih jarang terbagi ke baris berikutnya.
- Tidak ada yang dihapus atau diurutkan ulang: kolom, filter, dan tautan yang sama tetap di tempatnya.

## Cara menginstal

Instal ekstensi Tampermonkey yang gratis, tekan **Instal di Tampermonkey** di halaman ini, konfirmasikan, lalu muat ulang halaman Reservations. [Panduan instalasi](/tools/ui/instructions) menunjukkan setiap langkah dengan gambar. Skrip hanya berjalan di halaman Front Desk yang alamatnya mengandung /reservations (app.littlehotelier.com/extranet/properties/.../reservations). Skrip ini gratis dan open source: [kodenya ada di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js).

## Hal yang perlu diketahui

- Di layar yang lebih lebar dari 2000 piksel, konten berhenti melebar pada ukuran itu.
- Di laptop kecil atau tablet, perbedaannya sedikit atau tidak ada, karena halaman sudah memenuhi layar.
- Karena skrip mencocokkan setiap alamat di bawah /reservations, tata letak yang lebih lebar juga berlaku di halaman lain pada bagian itu, seperti reservasi yang dibuka dari daftar.
- Skrip hanya menambahkan aturan gaya saat halaman dimuat. Skrip tidak menyimpan apa pun dan tidak mengirim apa pun ke mana pun.
- Untuk efek yang sama pada tabel Direct Booking, instal [Tabel Lebar Penuh](/tools/ui/tables-full-width).
- Jika Little Hotelier mendesain ulang halaman Reservations, tata letak yang lebih lebar mungkin berhenti berlaku sampai skrip diperbarui.

## Terkait

- [Tabel Lebar Penuh](/tools/ui/tables-full-width)
- [Ekspor reservasi Little Hotelier ke Excel](/blog/export-little-hotelier-reservations-excel)
- [Checklist harian front desk hotel untuk Little Hotelier](/blog/hotel-front-desk-checklist-automation)
