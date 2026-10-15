---
title: "Ubah Nama Inventaris"
description: "Mengganti nama menu Inventory di Little Hotelier menjadi Inventory - Prices, dalam bahasa Inggris dan Spanyol, agar staf baru tahu tempat mengubah tarif kamar."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js"
category: "General"
images:
  before: "/images/scripts/change-inventory-name/from.png"
  after: "/images/scripts/change-inventory-name/to.png"
  gallery:
    - "/images/scripts/change-inventory-name/from.png"
    - "/images/scripts/change-inventory-name/to.png"
---

Skrip kecil ini mengganti nama item **Inventory** di menu atas Little Hotelier menjadi **Inventory - Prices** (atau **Inventario - Precios** dalam bahasa Spanyol). Skrip ini untuk pemilik yang melatih staf front desk baru: label itu memberi tahu orang bahwa tarif diatur di layar tersebut, bukan hanya ketersediaan kamar.

## Masalah yang diselesaikan

Di Little Hotelier, tarif kamar diedit di layar Inventory. Bagi orang yang baru memakai sistem ini, "Inventory" terdengar seperti stok atau jumlah kamar, sehingga orang mencari menu "Prices" atau "Rates" yang tidak ada. Label yang lebih jelas menghemat pertanyaan yang sama agar tidak diulang di setiap pergantian shift.

## Apa yang berubah

- Di menu navigasi horizontal pada layar Little Hotelier yang lebih baru, item berlabel "Inventory" menjadi "Inventory - Prices".
- Jika menunya berbahasa Spanyol, "Inventario" menjadi "Inventario - Precios".
- Akhiran mengikuti bahasa halaman: halaman berbahasa Spanyol mendapat "Precios", bahasa lain mendapat "Prices".
- Hanya label yang terlihat yang berubah. Tautannya tetap menuju layar Inventory yang sama.
- Karena menu dimuat secara bertahap, skrip mencoba tiga kali dalam beberapa detik pertama setelah halaman dimuat, dan tidak pernah menambahkan akhiran dua kali.

## Cara menginstal

Anda membutuhkan ekstensi Tampermonkey yang gratis. Tekan **Instal di Tampermonkey** di halaman ini, konfirmasikan, lalu muat ulang Little Hotelier. [Panduan instalasi](/tools/ui/instructions) menunjukkan setiap langkahnya. Skrip hanya berjalan di application.littlehotelier.com, alamat yang dipakai layar Little Hotelier yang lebih baru seperti kalender. Skrip ini gratis dan open source: [lihat kodenya di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js).

## Hal yang perlu diketahui

- Skrip hanya mengenali item menu jika tulisannya persis "Inventory" atau "Inventario". Jika Little Hotelier diatur ke bahasa lain, seperti Prancis atau Jerman, labelnya tetap seperti semula.
- Skrip hanya mengubah menu navigasi atas. Halaman di app.littlehotelier.com dan Direct Booking tidak dicocokkan, sehingga menunya tidak berubah.
- Skrip bekerja sama baiknya di desktop dan layar sentuh.
- Skrip tidak menyimpan apa pun dan tidak mengirim apa pun ke mana pun.
- Jika Little Hotelier mengganti nama atau mendesain ulang menunya, label mungkin berhenti berubah sampai skrip diperbarui.

## Terkait

- [Tampilan Harga](/tools/ui/prices-display) menampilkan harga Inventory Anda di kalender
- [Harga dinamis untuk hotel kecil di Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [Tips dan fitur tersembunyi Little Hotelier](/blog/little-hotelier-tips)
