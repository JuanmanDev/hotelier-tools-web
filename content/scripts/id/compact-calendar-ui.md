---
title: "Antarmuka Kalender Kompak"
description: "Merapatkan kalender Little Hotelier: tanggal dalam satu baris, bukan tiga, dan baris tipe kamar yang lebih ramping, agar lebih banyak kamar dan hari muat."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/compactCalendarUI.user.js"
category: "Calendar View"
images:
  before: "/images/scripts/compact-calendar-ui/from.png"
  after: "/images/scripts/compact-calendar-ui/to.png"
  gallery:
    - "/images/scripts/compact-calendar-ui/from.png"
    - "/images/scripts/compact-calendar-ui/to.png"
---

Skrip ini memangkas ruang kosong di kalender Little Hotelier agar lebih banyak kamar muat di layar tanpa menggulir. Skrip ini untuk staf front desk yang membiarkan kalender terbuka sepanjang hari dan ingin melihat seluruh properti, atau sebagian besarnya, sekilas pandang.

## Masalah yang diselesaikan

Kalender standar memakai banyak ruang vertikal sebelum pemesanan pertama muncul. Header setiap hari menumpuk informasinya dalam tiga baris, setiap tipe kamar punya baris judul yang tinggi, dan bilah navigasi serta filter menambah margin ekstra. Di layar laptop, hal ini mendorong kamar keluar dari pandangan, sehingga Anda menggulir ke atas dan ke bawah untuk memeriksa ketersediaan sementara tamu menunggu.

## Apa yang berubah

Semua perubahan bersifat visual, dibuat dengan gaya yang ditambahkan ke halaman:

- **Header tanggal:** hari dalam seminggu dan tanggal berdampingan dalam satu baris, bukan bertumpuk dalam tiga baris.
- **Sel header kiri atas:** tingginya dibatasi, sehingga baris header tetap pendek.
- **Baris judul tipe kamar:** lebih pendek, dengan latar transparan dan tanpa garis tepi, sehingga memakai lebih sedikit ruang di antara kamar.
- **Tombol perluas atau ciutkan semua:** padding dan marginnya dihapus.
- **Navigasi dan filter:** margin di atas navigasi tanggal dan di bawah opsi filter dikurangi.

Bilah pemesanan dan baris kamar itu sendiri tidak diubah. Hanya jarak dan tata letak header yang berubah.

## Cara menginstal

Instal ekstensi Tampermonkey yang gratis, tekan **Instal di Tampermonkey** di halaman ini, konfirmasikan, lalu muat ulang kalender. Gambar langkah demi langkah ada di [panduan instalasi](/tools/ui/instructions). Skrip mencocokkan app.littlehotelier.com dan application.littlehotelier.com, tetapi gayanya hanya memengaruhi tabel kalender dan toolbarnya. Skrip ini gratis dan open source: [baca kodenya di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/compactCalendarUI.user.js).

## Hal yang perlu diketahui

- Skrip menambahkan gayanya sekali saat halaman dimuat. Skrip tidak membaca atau menyimpan data pemesanan apa pun.
- Skrip tidak mengubah jumlah hari yang ditampilkan. Untuk itu, gunakan opsi rentang tanggal bawaan Little Hotelier.
- Skrip bekerja sama baiknya dengan mouse maupun layar sentuh.
- Skrip bekerja berdampingan dengan [Tampilan Harga](/tools/ui/prices-display), yang menulis harga setiap malam di bawah setiap tipe kamar pada kalender yang sama.
- Jika Little Hotelier mengubah tata letak kalender, sebagian penyesuaian mungkin berhenti berlaku sampai skrip diperbarui. Matikan di menu Tampermonkey jika ada yang terlihat salah.

## Terkait

- [Tampilan Harga](/tools/ui/prices-display)
- [Tips dan fitur tersembunyi Little Hotelier](/blog/little-hotelier-tips)
- [Tabel Reservasi Lebar Penuh](/tools/ui/full-width-reservation-table)
