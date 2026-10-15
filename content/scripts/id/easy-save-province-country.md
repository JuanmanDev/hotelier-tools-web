---
title: "Simpan Provinsi dan Negara dengan Mudah"
description: "Pemilih provinsi Spanyol dan negara untuk formulir tamu Little Hotelier: satu ketukan mengisi provinsi dan Spanyol, nama tamu kosong, dan membuka formulir tamu."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/easy-save-province-country/from.webp"
  after: "/images/scripts/easy-save-province-country/to.webp"
  gallery:
    - "/images/scripts/easy-save-province-country/from.webp"
    - "/images/scripts/easy-save-province-country/to.webp"
    - "/images/scripts/easy-save-province-country/three.webp"
---

Skrip ini mempercepat pengisian data tamu pada reservasi Little Hotelier, terutama untuk tamu Spanyol. Saat Anda mengeklik kolom provinsi, skrip menampilkan daftar provinsi Spanyol untuk diketuk, dan memilih satu provinsi juga mengatur negara menjadi Spanyol. Skrip ini dibuat untuk staf front desk di properti di Spanyol dan dirancang agar mudah dipakai di tablet.

## Masalah yang diselesaikan

Untuk tamu Spanyol, Little Hotelier membutuhkan provinsi selain negara, dan laporan seperti survei okupansi INE mengelompokkan tamu berdasarkan provinsi tempat tinggal. Mengetik nama provinsi secara manual menimbulkan variasi ejaan (Vizcaya atau Bizkaia, Orense atau Ourense), daftar negara panjang untuk digulir, dan formulir tamu tambahan tidak bisa disimpan selama kolom namanya kosong.

## Apa yang berubah

Di layar edit reservasi di Front Desk:

- **Pemilih provinsi:** memfokuskan kolom provinsi membuka kisi berisi 50 provinsi Spanyol ditambah Ceuta dan Melilla. Mengetik akan menyaringnya, dan nama alternatif yang umum seperti Gerona, Lérida, Seville, Mallorca, atau Tenerife menemukan provinsi yang tepat.
- **Negara diatur untuk Anda:** memilih provinsi mengatur negara tamu menjadi Spanyol.
- **Pemilih negara:** kolom negara membuka kisi yang bisa dicari yang menampilkan setiap negara dalam bahasa Spanyol, dengan nama bahasa Inggrisnya di bawah.
- **Nama kosong terisi:** saat Anda memilih provinsi atau negara, kolom nama depan dan belakang yang kosong pada formulir tamu itu diisi dengan nama tamu utama, atau garis bawah "_" jika itu juga kosong, sehingga formulir bisa disimpan.
- **Formulir tamu terbuka:** formulir tamu yang tertutup dibuka otomatis dan kursor berpindah ke kolom provinsi.
- **Tombol ramah sentuhan:** tombol tambah tamu dan panah perluas lebih besar, dan tanda silang merah untuk menghapus tamu selalu terlihat.

## Cara menginstal

Anda membutuhkan ekstensi Tampermonkey yang gratis. Tekan **Instal di Tampermonkey**, konfirmasikan, lalu muat ulang reservasinya. [Panduan instalasi](/tools/ui/instructions) menunjukkan setiap langkahnya. Skrip hanya berjalan di halaman edit reservasi (app.littlehotelier.com/extranet/properties/.../reservations/.../edit). Skrip ini gratis dan open source: [baca kodenya di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js).

## Hal yang perlu diketahui

- Pemilih provinsi hanya muncul saat negara tamu kosong atau Spanyol. Untuk negara lain, kolomnya berfungsi seperti biasa.
- Kotak pencarian dan nama negara dalam bahasa Spanyol, apa pun bahasa yang dipakai Little Hotelier.
- Kolom nama yang terisi menyalin nama tamu utama. Perbaiki jika tamu tambahan punya nama yang berbeda.
- Perubahan hanya dibuat di formulir. Tidak ada yang disimpan sampai Anda menekan Save, dan skrip tidak menyimpan apa pun.

## Terkait

- [SES Hospedajes dengan Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [Cara mengisi survei okupansi hotel INE](/blog/ine-hotel-occupancy-survey)
- [Koneksi dengan Chekin](/tools/ui/show-chekin)
