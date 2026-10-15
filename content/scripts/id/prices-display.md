---
title: "Tampilan Harga"
description: "Menampilkan harga kamar setiap malam di kalender Little Hotelier, dibaca dari halaman Inventory di tab latar belakang, sehingga tarif langsung terlihat."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/prices.user.js"
category: "Calendar View"
images:
  before: "/images/scripts/prices-display/from.webp"
  after: "/images/scripts/prices-display/to.webp"
  gallery:
    - "/images/scripts/prices-display/from.webp"
    - "/images/scripts/prices-display/to.webp"
---

Skrip ini menampilkan harga setiap tipe kamar untuk setiap malam langsung di kalender Little Hotelier. Ketika tamu menelepon dan bertanya berapa harga hari Jumat, front desk melihatnya di layar yang sama dengan ketersediaan, tanpa membuka halaman Inventory. Skrip ini untuk staf front desk yang menerima pemesanan lewat telepon dan tamu langsung datang, serta untuk pemilik.

## Masalah yang diselesaikan

Di Little Hotelier, ketersediaan ada di kalender dan tarif ada di halaman Inventory. Menyebut harga berarti pindah layar, mencari tanggal dan tipe kamar yang tepat, lalu kembali ke kalender untuk membuat pemesanan. Di saat sibuk, hal ini lambat dan rawan salah.

## Apa yang berubah

- Di kalender, baris terakhir setiap tipe kamar (baris yang belum dialokasikan) menampilkan harga tipe kamar itu pada malam tersebut.
- Harga berasal dari halaman Inventory Anda: skrip membukanya di tab latar belakang, membaca baris tarif pertama untuk setiap tipe kamar, lalu menutup tab itu.
- Halaman Inventory mencakup 14 hari sekaligus, jadi untuk tampilan kalender yang lebih panjang, skrip membacanya dalam blok 14 hari, satu per satu.
- Saat harga sedang dimuat, selnya menampilkan "...". Tanggal yang sudah lewat tetap kosong.
- Harga muncul dengan font abu-abu yang lebih besar, sehingga tampak berbeda dari pemesanan.
- Berpindah ke tanggal lain memuat harga untuk rentang yang baru.

## Cara menginstal

Anda membutuhkan ekstensi Tampermonkey yang gratis. Tekan **Instal di Tampermonkey** di halaman ini. Layar instalasi mencantumkan izin tambahan yang dipakai skrip, yang memungkinkannya membuka tab latar belakang dan menyimpan harga di Tampermonkey. Konfirmasikan, lalu muat ulang kalender. [Panduan instalasi](/tools/ui/instructions) menunjukkan setiap langkahnya. Skrip berjalan di kalender (application.littlehotelier.com) dan di halaman Inventory yang dibacanya (app.littlehotelier.com). Skrip ini gratis dan open source: [baca kodenya di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/prices.user.js).

## Hal yang perlu diketahui

- Harga disimpan di penyimpanan Tampermonkey di komputer Anda hingga satu jam, lalu dibaca ulang. Tarif yang Anda ubah di Inventory bisa memerlukan waktu hingga satu jam untuk tampil di kalender.
- Anda harus sudah masuk ke Little Hotelier, karena tab latar belakang memakai sesi Anda. Tab yang sebentar terbuka lalu tertutup itu normal.
- Skrip hanya menampilkan baris tarif pertama dari setiap tipe kamar di halaman Inventory, bukan setiap rate plan.
- Nama tipe kamar harus sama antara kalender dan halaman Inventory agar harga muncul.
- Skrip mulai empat detik setelah kalender dimuat dan menunggu hingga 30 detik untuk setiap blok Inventory. Tidak ada yang dikirim ke luar Little Hotelier.

## Terkait

- [Ubah Nama Inventaris](/tools/ui/change-inventory-name)
- [Harga dinamis untuk hotel kecil di Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [Antarmuka Kalender Kompak](/tools/ui/compact-calendar-ui)
