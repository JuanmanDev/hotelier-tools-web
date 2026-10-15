---
title: "Pemeriksaan reservasi otomatis untuk Little Hotelier"
---

Pemeriksaan otomatis membaca reservasi Little Hotelier Anda pada lima momen masa menginap dan menandai apa yang perlu diperbaiki: kamar belum ditentukan, saldo belum lunas, dokumen identitas atau alamat kosong, atau tamu yang ada di daftar do-not-rebook Anda. Masalah masuk ke satu halaman Issues, dan setiap proses mengirimi Anda email laporan.

## Cara kerjanya

Setiap momen adalah tugas terjadwalnya sendiri, yang membaca kumpulan reservasi berbeda:

- **Setelah pemesanan dibuat:** dipesan kemarin dan hari ini. Memeriksa kamar, identitas, alamat, dan daftar do-not-rebook.
- **Sebelum mereka tiba:** check-in dari hari ini sampai 7 hari ke depan (bisa diatur dari 1 sampai 60). Memeriksa kamar, pembayaran, dan daftar do-not-rebook.
- **Saat mereka tiba:** check-in hari ini. Memeriksa identitas, alamat, dan kamar.
- **Selama mereka menginap:** check-in dalam 7 hari terakhir (bisa diatur). Memeriksa identitas dan alamat.
- **Saat mereka pergi:** check-out hari ini. Memeriksa identitas, alamat, dan saldo.

Buka satu momen di **Automated Checks** (`/automated-checks`), aktifkan atau nonaktifkan pemeriksaannya, lalu tekan **Save and activate task**. Masalah muncul di `/automated-checks/issues`, dikelompokkan per reservasi. Perbaiki pemesanan di Little Hotelier dan tekan **Verify**: pemeriksaan dijalankan lagi pada reservasi itu saja dan masalahnya ditutup.

**Do-not-rebook list** (`/automated-checks/watchlist`) membandingkan pemesanan baru dan kedatangan mendatang dengan tamu yang Anda tandai, setiap malam. Setiap kecocokan menjadi satu masalah dan satu baris di laporan.

Rutinitas lengkapnya ada di [checklist front desk](/blog/hotel-front-desk-checklist-automation). Cara menjaga daftar itu tetap sesuai hukum ada di [panduan daftar do-not-rent](/blog/hotel-do-not-rent-list).

## Yang Anda butuhkan

- Little Hotelier terhubung di **Credentials**.
- Satu momen yang diaktifkan untuk memulai. **Before they arrive** adalah yang disarankan pertama, karena menemukan masa menginap tanpa kamar selagi masih ada waktu untuk menentukannya.
- Penerima laporan, diatur di **Settings > Notifications** (`/settings/notifications`).

## Batasan dan hal yang perlu diketahui

- **Status: beta.**
- **Hanya memberi peringatan.** Tidak ada pemeriksaan yang mengedit, membatalkan, atau menagih pemesanan, dan kecocokan do-not-rebook tidak pernah menolak tamu. Pengecualiannya adalah check-out otomatis opsional, yang menulis ke Little Hotelier dan nonaktif secara default.
- **Paling banyak sekali per jam untuk setiap tugas**, karena setiap proses masuk ke Little Hotelier.
- **Tiga pemeriksaan tetap manual:** kartu Booking.com yang tidak valid, jumlah tamu, dan jam kedatangan. Lihat [apa yang harus dilakukan dengan kartu tidak valid atau no-show](/blog/booking-com-invalid-card-no-show).
- Jika kata sandi Little Hotelier Anda kedaluwarsa, tugas dijeda alih-alih mencoba ulang sampai Anda menyimpan kata sandi yang baru.
