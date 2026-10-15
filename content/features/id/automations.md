---
title: "Tugas terjadwal untuk Little Hotelier, dengan catatan setiap proses"
---

Otomatisasi adalah tugas terjadwal di balik Hotelier Tools: pemeriksaan reservasi, faktur saat check-out, pembaruan harga kompetitor, pengecekan daftar tunggu, dan pemeriksaan kotak masuk berjalan sendiri, sesuai jadwal yang Anda pilih. Setiap proses dicatat, dan kegagalan sampai ke email Anda.

## Cara kerjanya

1. **Setiap fitur membuat tugasnya sendiri.** Anda jarang perlu memulai dari jadwal kosong. Contohnya:
   - Pemeriksaan otomatis: **Save and activate task** mengatur jadwal yang direkomendasikan, misalnya setiap malam pukul 23.30 untuk pemesanan baru.
   - Faktur saat check-out: **Create the daily task (16:00, after check-out)**.
   - Check-out otomatis: **Create the daily task (15:05)**.
   - Daftar tunggu: **Check every night at 01:00**.
   - Autopilot harga: setiap 3 jam adalah sarannya.
   - Kotak masuk tamu: halaman FAQ Anda bisa dibaca ulang setiap jam.
2. **Sesuaikan jadwalnya.** Jalankan tugas sekarang, setiap beberapa menit, harian, mingguan, atau bulanan, dalam batas masing-masing fitur.
3. **Baca apa yang terjadi.** **Cron Jobs** (`/cron`) menampilkan setiap tugas, dan **Run History** (`/cron-logs`) memberi ringkasan yang mudah dibaca tentang apa yang dilakukan setiap proses.
4. **Terima laporannya.** Tugas seperti pemeriksaan reservasi mengirim email laporan setiap kali berjalan. Penerima bersama diatur di **Settings > Notifications**.

Lihat tugas bekerja dalam praktik di [checklist front desk](/blog/hotel-front-desk-checklist-automation), [mengirim faktur saat check-out](/blog/send-invoice-to-guest-at-checkout), dan [daftar tunggu untuk tanggal penuh](/blog/hotel-waitlist-sold-out-dates).

## Yang Anda butuhkan

- Little Hotelier terhubung di **Credentials**. Setiap proses masuk dengan login itu.
- Fitur di balik tugas itu sudah disiapkan lebih dulu, seperti pemeriksaan yang Anda inginkan atau tanggal yang Anda pantau.

## Batasan dan hal yang perlu diketahui

- **Status: beta.**
- **Jeda aman.** Jika kata sandi Little Hotelier Anda kedaluwarsa, tugas dijeda alih-alih mencoba ulang, sehingga akun tidak pernah terkunci. Dashboard menampilkan bahwa tugas otomatis dijeda sampai Anda menyimpan kata sandi baru di **Credentials** atau menekan **Check now & resume**.
- **Interval minimum berbeda untuk setiap tugas.** Pemeriksaan reservasi berjalan paling banyak sekali per jam untuk setiap tugas, pengecekan daftar tunggu paling cepat setiap 20 menit, dan autopilot harga tidak lebih sering dari setiap 3 jam.
- **Sebuah tugas hanya melakukan apa yang dilakukan fiturnya.** Pemeriksaan hanya memberi peringatan. Check-out otomatis menulis ke Little Hotelier, jadi ia tetap nonaktif sampai Anda membuatnya.
- **Asisten AI bisa mengelola tugas.** Lewat [server MCP](/tools/bot/api-mcp), Claude atau ChatGPT dapat membaca dan mengubah tugas terjadwal.
- **Tidak ada webhook keluar.** Skrip Anda sendiri memerlukan penjadwal sendiri, seperti cron job.
