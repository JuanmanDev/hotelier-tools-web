---
title: "Tingkatkan Gaya untuk Layar Sentuh"
description: "Membuat Little Hotelier lebih mudah dipakai di tablet: menu Print dan Email lebih besar, tombol footer disorot, dan tombol hapus kamar selalu terlihat."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/improve-style-touch-screens/from.png"
  after: "/images/scripts/improve-style-touch-screens/to.png"
  gallery:
    - "/images/scripts/improve-style-touch-screens/from.png"
    - "/images/scripts/improve-style-touch-screens/to.png"
---

Skrip ini menyesuaikan layar reservasi Little Hotelier untuk layar sentuh, seperti tablet di resepsionis. Skrip ini memperbesar menu Print dan Email, menyorot tombolnya, dan menampilkan tombol hapus kamar yang biasanya hanya muncul saat mouse diarahkan ke atasnya. Skrip ini untuk tim front desk yang bekerja dengan tablet atau monitor sentuh.

## Masalah yang diselesaikan

Layar reservasi Little Hotelier dirancang untuk mouse. Opsi Print dan Email terbuka di menu popover kecil dengan teks kecil, yang sulit disentuh dengan jari. Tombol untuk menghapus kamar dari reservasi tetap tersembunyi sampai Anda mengarahkan mouse ke kamarnya, dan layar sentuh tidak punya hover, sehingga di tablet tombol itu sulit dijangkau.

## Apa yang berubah

Di layar reservasi di Front Desk:

- **Tombol hapus kamar:** tombol bulat untuk menghapus kamar dari reservasi selalu terlihat.
- **Menu Print dan Email:** item di menu popover ini memakai teks yang jauh lebih besar (30 piksel), dan menunya melebar agar muat.
- **Tombol footer:** tombol Print dan Email di footer reservasi mendapat latar biru muda dan jarak ekstra, sehingga mudah ditemukan dan diketuk.
- **Menu email invoice:** ikon info kecil di samping opsi invoice disembunyikan.

## Cara menginstal

Instal ekstensi Tampermonkey yang gratis di browser tablet atau komputer Anda, tekan **Instal di Tampermonkey** di halaman ini, konfirmasikan, lalu muat ulang Little Hotelier. [Panduan instalasi](/tools/ui/instructions) menunjukkan setiap langkahnya. Skrip berjalan di halaman Front Desk di app.littlehotelier.com. Skrip ini gratis dan open source: [baca kodenya di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js).

## Hal yang perlu diketahui

- Tampermonkey harus tersedia di browser tablet. Uji pengaturannya di perangkat Anda sendiri sebelum mengandalkannya di meja.
- Perubahan ini juga berlaku di komputer desktop. Tombol hapus kamar kini selalu tampil di layar, jadi berhati-hatilah agar tidak mengekliknya secara tidak sengaja.
- Skrip hanya mengubah gaya. Skrip tidak mengubah apa yang dilakukan tombol mana pun, dan tidak menyimpan apa pun.
- Layar yang lebih baru di application.littlehotelier.com, seperti kalender, tidak terpengaruh.
- Untuk formulir tamu yang lebih ramah sentuhan, [Simpan Provinsi dan Negara dengan Mudah](/tools/ui/easy-save-province-country) juga memperbesar tombol tambah tamu dan tombol perluas.

## Terkait

- [Antarmuka Kompak Detail Reservasi](/tools/ui/compact-ui-reservation-details)
- [Simpan Provinsi dan Negara dengan Mudah](/tools/ui/easy-save-province-country)
- [Ekstensi Chrome Little Hotelier: userscript gratis](/blog/little-hotelier-chrome-extensions)
