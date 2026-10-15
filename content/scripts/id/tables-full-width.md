---
title: "Tabel Lebar Penuh"
description: "Membuat tabel di extranet Direct Booking Little Hotelier memakai lebar layar penuh dan menyorot baris di bawah mouse, agar daftar lebih mudah dibaca."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/tables-full-width/from.webp"
  after: "/images/scripts/tables-full-width/to.webp"
  gallery:
    - "/images/scripts/tables-full-width/from.webp"
    - "/images/scripts/tables-full-width/to.webp"
---

Skrip ini melebarkan tabel di extranet Direct Booking Little Hotelier, back office mesin pemesanan di app.thebookingbutton.com, agar memakai seluruh lebar layar Anda. Skrip ini untuk pemilik dan staf yang memeriksa reservasi langsung, laporan, dan inventory di sana lewat laptop atau monitor besar.

## Masalah yang diselesaikan

Direct Booking menaruh halamannya dalam kolom berlebar tetap. Daftar reservasi dan laporan terjepit di kolom itu, nama tamu terpotong, dan di monitor lebar separuh layar tetap kosong sementara Anda menggulir ke samping melintasi tabel. Tabel yang panjang juga sulit diikuti sepanjang satu baris tanpa kehilangan posisi.

## Apa yang berubah

Di halaman extranet Direct Booking:

- **Area konten utama:** tidak lagi berlebar tetap, sehingga tabel membentang di seluruh layar.
- **Daftar reservasi:** kolom nama tamu tidak lagi dibatasi lebarnya, sehingga nama lengkap terlihat.
- **Kontainer utama:** diizinkan memakai lebar penuh jendela.
- **Laporan:** memakai lebar penuh halaman.
- **Inventory:** mendapat lebar maksimum yang lebih besar dan diratakan ke tengah, sehingga tidak melebar terlalu jauh di layar yang sangat lebar.
- **Penyorotan baris:** di tabel data, baris di bawah penunjuk mouse mendapat latar abu-abu muda, sehingga lebih mudah dibaca sepanjang baris.

## Cara menginstal

Instal ekstensi Tampermonkey yang gratis, tekan **Instal di Tampermonkey** di halaman ini, konfirmasikan, lalu muat ulang Direct Booking. [Panduan instalasi](/tools/ui/instructions) punya gambar langkah demi langkah. Skrip hanya berjalan di halaman extranet Direct Booking (app.thebookingbutton.com/extranet/...), sehingga Front Desk tidak terpengaruh. Skrip ini gratis dan open source: [lihat kodenya di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js).

## Hal yang perlu diketahui

- Di laptop kecil atau tablet, perbedaannya kecil, karena halaman sudah memenuhi layar.
- Penyorotan baris mengikuti penunjuk mouse, sehingga terutama berguna di komputer.
- Skrip hanya menambahkan aturan gaya saat halaman dimuat. Skrip tidak menyimpan apa pun dan tidak mengirim apa pun ke mana pun.
- Untuk efek yang sama pada halaman Reservations di Front Desk, instal [Tabel Reservasi Lebar Penuh](/tools/ui/full-width-reservation-table).
- Jika Little Hotelier mendesain ulang Direct Booking, sebagian penyesuaian ini mungkin berhenti berlaku sampai skrip diperbarui.

## Terkait

- [Tabel Reservasi Lebar Penuh](/tools/ui/full-width-reservation-table)
- [Tambah Tombol Cek Front Desk dari Direct Booking](/tools/ui/add-button-check-front-desk)
- [Ekstensi Chrome Little Hotelier: userscript gratis](/blog/little-hotelier-chrome-extensions)
