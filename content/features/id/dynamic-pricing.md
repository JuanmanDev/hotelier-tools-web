---
title: "Harga dinamis dan stop sell untuk Little Hotelier"
---

Harga dinamis membandingkan tarif Little Hotelier Anda dengan hotel sejenis di sekitar dan merekomendasikan harga untuk setiap kamar dan malam, lengkap dengan alasannya. Tidak ada yang ditulis ke Little Hotelier sampai Anda mengonfirmasi, kecuali Anda sendiri mengaktifkan autopilot.

## Cara kerjanya

1. **Harga kompetitor.** Tentukan kota dan pesaing nyata Anda di **Competitors & market**. **Competitor Prices** (`/competitor-prices`) lalu menampilkan harga mereka setiap malam berdampingan dengan tarif Anda sendiri.
2. **Satu rekomendasi per malam.** Di **Recommendations** (`/price-recommendations`), setiap harga bermula dari tarif Anda sendiri, ditarik sedikit ke arah median hotel sebanding, lalu bergerak mengikuti permintaan: okupansi, sisa kamar, last minute, akhir pekan, acara lokal yang sudah disetujui, dan tamu di daftar tunggu Anda. Batas Anda membatasi pergerakannya. **Why?** menunjukkan perhitungannya.
3. **Aturan dalam bahasa sederhana.** Ketik aturan sebagai kalimat. AI mengubahnya menjadi aturan terstruktur, dan Anda menyetujuinya sebelum berlaku. Aturan tanggal dapat menetapkan, membekukan, atau membatasi harga.
4. **Acara lokal.** Pemindaian AI menemukan pameran, konser, dan hari libur di dekat Anda. Anda menyetujui atau menolak masing-masing.
5. **Terapkan.** Centang malam-malamnya dan tekan **Apply to Little Hotelier**. Dialog yang sama bisa mengatur stop sell SiteMinder, yang hanya dikirim untuk malam di mana perubahan harga berhasil.
6. **Periksa hasilnya.** **History & outcomes** (`/pricing-log`) mencantumkan setiap tarif yang ditulis, dengan sisa kamar saat itu dan sekarang.

Metodenya, beserta rutinitas manual yang bisa Anda jalankan tanpa alat apa pun, ada di [harga dinamis untuk hotel kecil](/blog/dynamic-pricing-little-hotelier). Untuk pembatasan, lihat [CTA, CTD, minimum menginap, dan stop sell](/blog/little-hotelier-cta-ctd-stop-sell).

## Yang Anda butuhkan

- Little Hotelier terhubung di **Credentials**.
- Harga minimum per tipe kamar dan pesaing yang benar-benar bersaing dengan Anda.
- Pengecekan sumber kompetitor mana yang mengembalikan harga untuk kota Anda. Fitur ini dibuat untuk membaca Booking.com, Expedia, Google Hotels, Hostelworld, dan Agoda.

## Batasan dan hal yang perlu diketahui

- **Status:** harga kompetitor masih beta. Rekomendasi, aturan, acara, autopilot, dan stop sell masih alpha.
- **Autopilot nonaktif secara default.** Jika aktif, ia berjalan paling sering setiap 3 jam, menggeser setiap malam paling banyak 20% secara default, tidak pernah turun di bawah batas bawah Anda, dan bekerja 1 sampai 90 hari ke depan (14 secara default). Ia tidak pernah mengubah stop sell.
- Proses harga setiap malam hanyalah aritmetika biasa. AI hanya membaca kalimat aturan Anda dan menemukan acara.
- Estimasi pendapatan di log harga adalah panduan, bukan bukti.
