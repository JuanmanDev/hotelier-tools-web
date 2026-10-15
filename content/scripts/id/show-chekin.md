---
title: "Koneksi dengan Chekin"
description: "Menampilkan data check-in online Chekin setiap tamu di reservasi Little Hotelier, mengisi formulir tamu dengan satu klik, dan membagikan tautan pendaftaran."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js"
category: "Detail Reservasi"
images:
  before: "/images/scripts/show-chekin/from.webp"
  after: "/images/scripts/show-chekin/to.webp"
  gallery:
    - "/images/scripts/show-chekin/from.webp"
    - "/images/scripts/show-chekin/to.webp"
    - "/images/scripts/show-chekin/login-required.webp"
    - "/images/scripts/show-chekin/login-on-chekin.webp"
    - "/images/scripts/show-chekin/url-to-share.webp"
    - "/images/scripts/show-chekin/loading.webp"
---

Skrip ini menghubungkan Chekin, layanan check-in online, dengan Little Hotelier. Saat Anda membuka reservasi, panel Chekin menampilkan tamu yang sudah mendaftar dan memungkinkan Anda menyalin data mereka ke formulir tamu Little Hotelier. Skrip ini untuk tim front desk yang memakai Chekin untuk mengumpulkan identitas tamu.

## Masalah yang diselesaikan

Tanpa skrip ini, setiap kedatangan berarti mencari pemesanan di Chekin, memeriksa siapa yang sudah mendaftar, dan menyalin nomor dokumen serta alamat secara manual. Hal ini lambat, dan nomor identitas yang disalin mudah salah ketik.

## Apa yang berubah

Di layar edit reservasi di Front Desk, panel Chekin ditambahkan ke bagian kontak utama:

- **Status:** apakah reservasi ditemukan di Chekin dan berapa tamu yang sudah terdaftar, dengan tautan **View in Chekin**.
- **Tabel tamu:** nama, telepon, ID dokumen, kota, provinsi, dan negara setiap tamu yang terdaftar.
- **Use as Primary:** menyalin nomor dokumen tamu itu ke kolom ID tamu utama, siap untuk invoice.
- **Save Guest** dan **Save All Guests:** mengisi formulir tamu tambahan Little Hotelier dengan data Chekin. Anda kemudian menekan tombol Save milik Little Hotelier untuk mengonfirmasi.
- **Tautan formulir pendaftaran:** saat belum ada yang mendaftar, tautan formulir tamu dengan tombol Open, Copy, Email, dan WhatsApp, memakai email dan telepon tamu dari reservasi.
- **Create Checkin Reservation:** jika tidak ada yang cocok, membuat reservasi di Chekin dari tanggal, kamar, jumlah tamu, dan detail kontak di Little Hotelier.

Di kalender, skrip juga memuat data Chekin untuk reservasi yang terlihat di latar belakang, sehingga reservasi terbuka lebih cepat.

## Cara menginstal

Anda membutuhkan ekstensi Tampermonkey yang gratis dan akun Chekin. Tekan **Instal di Tampermonkey**, konfirmasikan, lalu masuk ke dashboard.chekin.com di browser yang sama. [Panduan instalasi](/tools/ui/instructions) menunjukkan langkah-langkahnya. Skrip berjalan di halaman edit reservasi Little Hotelier, kalender, dan halaman dashboard Chekin yang dibukanya sendiri. Skrip ini gratis dan open source: [baca kodenya di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js).

## Hal yang perlu diketahui

- Skrip memakai login Chekin Anda sendiri. Jika Anda sudah keluar, panel menampilkan tombol **Login Required on Chekin**.
- Untuk mencari, skrip membuka tab Chekin di latar belakang.
- Reservasi harus punya tanggal check-in dan kamar yang sudah ditentukan. Pencocokan dilakukan berdasarkan referensi pemesanan, lalu berdasarkan nomor kamar.
- Hasil disimpan di browser Anda hingga 24 jam, dan pramuat kalender hingga 4 jam.
- Panel mengikuti bahasa browser Anda (Inggris atau Spanyol). Pesan yang dibagikan diakhiri dengan tanda tangan properti milik penulis; ubah di skrip.

## Terkait

- [SES Hospedajes dengan Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [Aturan registrasi tamu per negara](/blog/guest-registration-rules-by-country)
- [Simpan Provinsi dan Negara dengan Mudah](/tools/ui/easy-save-province-country)
