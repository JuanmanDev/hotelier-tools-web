---
title: "Faktur massal dan faktur saat check-out untuk Little Hotelier"
---

Fitur faktur membuat faktur Little Hotelier yang belum ada untuk satu rentang tanggal dalam sekali jalan, dan memberi Anda setiap kuartal sebagai ZIP berisi PDF plus ringkasan CSV untuk akuntan Anda. Ia juga bisa meminta Little Hotelier mengirim faktur lewat email ke tamu secara otomatis begitu mereka check-out.

## Cara kerjanya

1. **Buat satu periode.** Di **Invoice Download** (`/invoices`), tekan **Generate invoices** dan pilih tanggalnya, misalnya 1 Juli sampai 30 September. Hotelier Tools membaca reservasi tersebut dan meminta Little Hotelier membuat faktur untuk setiap masa menginap yang memenuhi syarat.
2. **Faktur berisiko ditolak.** Pemeriksaan awal menghentikan masa menginap yang belum check-out, faktur perusahaan tanpa nomor pajak atau alamat fiskal, nomor pajak dengan format salah, dan masa menginap yang sudah difakturkan.
3. **Tidak ada yang dilewati diam-diam.** Setiap penolakan masuk ke **Errors** (`/invoices/errors`) beserta alasannya. Perbaiki reservasi di Little Hotelier, lalu periksa lagi.
4. **Unduh.** Faktur dikelompokkan per kuartal dan bulan. Tekan **ZIP** untuk semua PDF, atau **Preview CSV** untuk memeriksa ringkasannya lebih dulu.
5. **Faktur saat check-out.** Di **Invoice on Leave** (`/invoice-on-leave`), tandai satu masa menginap sekali saja. Tugas harian (pukul 16.00 secara default) meminta Little Hotelier membuat faktur setelah check-out dan mengirimkannya lewat email dari templat dan pengirim Anda sendiri.

Faktur-faktur itu adalah dokumen milik Little Hotelier sendiri, jadi penomoran, logo, dan tata letak Anda tetap persis seperti semula. Panduan langkah demi langkah: [unduh semua faktur Anda sekaligus](/blog/download-all-little-hotelier-invoices) dan [kirim faktur saat check-out](/blog/send-invoice-to-guest-at-checkout).

## Yang Anda butuhkan

- Little Hotelier terhubung di **Credentials**.
- Tamu yang sudah di-check-out di Little Hotelier. Jika tim Anda tidak melakukannya secara manual, tugas opsional **Automatic check-out** (15.05) menutup keberangkatan hari itu.
- Nama perusahaan, nomor pajak, dan alamat fiskal pada reservasi untuk tamu bisnis.
- Email tamu pada reservasi untuk faktur yang dikirim saat check-out.
- Bahasa faktur, diatur di **Settings > Invoices**: berdasarkan negara tamu, atau selalu sama, dengan bahasa cadangan.

## Batasan dan hal yang perlu diketahui

- **Status:** unduhan massal, pemeriksaan awal, error, dan bahasa sudah stabil. Faktur saat check-out masih beta.
- Tugas check-out menengok ke belakang 8 hari untuk menyusul proses yang terlewat dan membaca hingga 100 check-out per proses. Masa menginap lampau tanpa email tamu dilaporkan sekali, tidak dicoba ulang setiap hari.
- Tidak ada fitur VeriFactu. Di Spanyol, biarkan langkah itu di Little Hotelier.
