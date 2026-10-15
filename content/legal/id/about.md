---
title: "Tentang Hotelier Tools"
description: "Hotelier Tools, proyek independen Juan Manuel Béc., pengembang di Spanyol: dasbor dan skrip gratis berkode sumber publik untuk hotel pengguna Little Hotelier."
updated: "2026-10-15"
---

Hotelier Tools adalah proyek independen dari **Juan Manuel Béc.**, seorang pengembang perangkat lunak yang berbasis di Spanyol. Proyek ini menambahkan ke Little Hotelier hal-hal yang sering harus dikerjakan manual oleh resepsionis hotel kecil. Proyek ini dijalankan oleh perorangan, bukan perusahaan.

## Apa itu Hotelier Tools

- **Sebuah dasbor** di [dashboard.hotelier.tools](https://dashboard.hotelier.tools) yang berjalan berdampingan dengan Little Hotelier: faktur massal dan faktur saat check-out, pemeriksaan reservasi otomatis, penetapan harga dinamis, kotak masuk tamu untuk WhatsApp, email, dan Booking.com, asisten AI, daftar tunggu untuk tanggal yang sudah penuh, dan survei okupansi INE Spanyol. Dasbor ini juga menyediakan REST API dan server MCP, sehingga alat seperti Claude atau ChatGPT dapat bekerja dengan data hotel Anda. Lihat [semua fitur dasbor](/tools/bot), atau coba [demo publik](https://demo.hotelier.tools) dengan hotel fiktif.
- **Skrip browser gratis** untuk Tampermonkey yang menyempurnakan layar Little Hotelier itu sendiri: tabel yang lebih lebar, kalender ringkas, komisi dan harga di tempat yang Anda butuhkan, serta perbaikan kecil lainnya. Lihat [semua skrip](/tools/ui).
- **Panduan** tentang mengelola properti dengan Little Hotelier, di [blog](/blog).

## Cara kerjanya dengan Little Hotelier

Reservasi, tarif, dan kalender Anda tetap berada di Little Hotelier. Skrip berjalan di dalam sesi Little Hotelier Anda sendiri dan tidak mengirim apa pun ke Hotelier Tools. Dasbor terhubung menggunakan login Little Hotelier milik properti Anda sendiri, yang disimpan dalam bentuk terenkripsi (AES-256-GCM), sehingga hanya dapat melakukan apa yang dapat dilakukan login tersebut, dan setiap perubahan yang dibuatnya terlihat di Little Hotelier seperti biasa.

## Independen dari SiteMinder

Hotelier Tools **tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier**. Proyek ini bukan integrasi resmi dan bukan produk mitra. Little Hotelier dan SiteMinder disebutkan hanya untuk menjelaskan layanan yang didukung Hotelier Tools.

## Kode sumber publik

Skrip ini gratis, dan kode sumbernya publik di GitHub, di [repositori TampermonkeyLittleHotelier](https://github.com/JuanmanDev/TampermonkeyLittleHotelier). Siapa pun dapat membaca apa yang dilakukan sebuah skrip sebelum memasangnya, melaporkan masalah, atau mengusulkan perubahan. Kode sumber situs web ini juga publik, di [repositori hotelier-tools-web](https://github.com/JuanmanDev/hotelier-tools-web).

## Harga

Semua fitur dasbor gratis untuk setiap hotel hingga 10 Januari 2027. Hotel yang mulai menggunakan pada tahun 2026 kemudian membayar 50 € per bulan sepanjang tahun 2027, dengan semua fitur termasuk. Skrip browser tetap gratis. Rinciannya ada di [Ketentuan Penggunaan](/terms).

## Kontak

- **Email:** [JuanmaDeveloper+hotelierTools@outlook.com](mailto:JuanmaDeveloper+hotelierTools@outlook.com)
- **Formulir kontak:** [halaman kontak](/contact)
- **GitHub:** [github.com/JuanmanDev](https://github.com/JuanmanDev)

Laporan bug dan ide untuk skrip baru dipersilakan di GitHub atau melalui email. Jika Hotelier Tools menghemat waktu Anda, Anda dapat mendukung proyek ini melalui [GitHub Sponsors](https://github.com/sponsors/JuanmanDev), [Ko-fi](https://ko-fi.com/juanmandev), atau [PayPal](https://paypal.me/juanmandev).

Cara data pribadi ditangani dijelaskan dalam [Kebijakan Privasi](/privacy).
