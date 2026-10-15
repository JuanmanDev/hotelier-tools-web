---
title: "Perbarui Jumlah Dewasa"
description: "Mengatur kolom dewasa menjadi 2 saat formulir reservasi Little Hotelier terbuka dengan 0 dewasa, agar pemesanan tidak tersimpan tanpa tamu secara tidak sengaja."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateNumberAdults.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/update-number-adults/from.png"
  after: "/images/scripts/update-number-adults/to.png"
  gallery:
    - "/images/scripts/update-number-adults/from.png"
    - "/images/scripts/update-number-adults/to.png"
---

Skrip ini mengubah jumlah dewasa default pada reservasi Little Hotelier yang baru dari 0 menjadi 2. Skrip ini untuk staf front desk yang membuat pemesanan walk-in dan lewat telepon secara manual, di mana sebagian besar reservasi untuk dua orang dan kolom dewasa yang terlupa menimbulkan masalah di kemudian hari.

## Masalah yang diselesaikan

Saat Anda membuat reservasi di Front Desk, kolom dewasa bisa dimulai dari 0. Jika tidak ada yang mengubahnya, pemesanan tersimpan tanpa dewasa. Nol dewasa dapat mengacaukan registrasi tamu, jumlah sarapan, dan pajak turis apa pun yang dikenakan per orang, dan memperbaikinya sesudahnya berarti mencari dan membuka kembali setiap reservasi.

## Apa yang berubah

- Saat halaman reservasi dimuat, skrip melihat kolom **number of adults**.
- Jika nilainya 0, skrip mengaturnya menjadi 2 dan memberi tahu Little Hotelier bahwa nilainya berubah, seolah-olah Anda yang mengetiknya.
- Jika berisi angka lain, skrip membiarkannya, sehingga reservasi yang sudah ada tidak disentuh.
- Anda tetap bisa mengubah nilainya menjadi 1, 3, atau angka lain sebelum menyimpan.

## Cara menginstal

Instal ekstensi Tampermonkey yang gratis, tekan **Instal di Tampermonkey** di halaman ini, konfirmasikan, lalu muat ulang Little Hotelier. [Panduan instalasi](/tools/ui/instructions) menunjukkan setiap langkahnya. Skrip berjalan di halaman Front Desk di app.littlehotelier.com dan hanya bertindak saat kolom dewasa ada di halaman. Skrip ini gratis dan open source: [baca kodenya di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateNumberAdults.user.js).

## Hal yang perlu diketahui

- Nilai 2 tetap di kode. Jika properti Anda sebagian besar menjual kamar atau tempat tidur untuk satu orang, ubah angkanya di editor Tampermonkey.
- Pemeriksaan berjalan sekali, setengah detik setelah halaman dimuat. Jika formulir reservasi terbuka belakangan tanpa memuat ulang halaman, kolomnya tidak diubah.
- Skrip hanya mengubah kolom di formulir. Tidak ada yang disimpan sampai Anda menekan Save.
- Jumlah anak tidak diubah.
- Skrip bekerja sama baiknya di desktop dan layar sentuh. Skrip tidak menyimpan apa pun dan tidak mengirim apa pun ke mana pun.

## Terkait

- [Checklist harian front desk hotel untuk Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Simpan Provinsi dan Negara dengan Mudah](/tools/ui/easy-save-province-country)
- [Tips dan fitur tersembunyi Little Hotelier](/blog/little-hotelier-tips)
