---
title: "Penyegaran Otomatis saat Tidak Aktif"
description: "Memuat ulang Little Hotelier dan Direct Booking setelah 10 menit tanpa klik, gulir, atau gerakan mouse, agar front desk tidak kembali ke halaman yang usang."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js"
category: "General"
images:
  before: "/images/scripts/auto-refresh-inactivity/from.webp"
  after: "/images/scripts/auto-refresh-inactivity/to.webp"
  gallery:
    - "/images/scripts/auto-refresh-inactivity/from.webp"
    - "/images/scripts/auto-refresh-inactivity/to.webp"
---

Skrip ini memuat ulang halaman Little Hotelier yang sedang terbuka setelah 10 menit tanpa aktivitas. Skrip ini dibuat untuk komputer resepsionis di mana Little Hotelier terbuka sepanjang hari, sehingga staf yang kembali ke meja melihat pemesanan terkini dan sesi yang masih berfungsi, bukan halaman lama yang menampilkan error.

## Masalah yang diselesaikan

Halaman yang dibiarkan begitu saja terus menampilkan data yang dimuat di awal. Pemesanan baru, pembatalan, dan perpindahan kamar yang dilakukan oleh kanal atau rekan kerja tidak muncul sampai seseorang memuat ulang. Sesi juga bisa kedaluwarsa di latar belakang, dan klik pertama setelah istirahat jadi gagal. Memuat ulang karena kebiasaan mudah terlupakan saat ada tamu menunggu di meja.

## Apa yang berubah

- Pengatur waktu 10 menit dimulai saat halaman dimuat.
- Setiap klik, gerakan mouse, gulir, atau gerakan sentuh di halaman menyetel ulang pengatur waktu, sehingga halaman tidak pernah dimuat ulang saat seseorang sedang memakainya.
- Ketika 10 menit berlalu tanpa satu pun tindakan itu, skrip memuat ulang alamat yang sama dengan yang sedang Anda buka.
- Tidak ada hal lain di halaman yang berubah: tidak ada tombol atau panel baru.

## Cara menginstal

Instal ekstensi Tampermonkey yang gratis, tekan **Instal di Tampermonkey** di halaman ini, konfirmasikan, lalu muat ulang Little Hotelier. [Panduan instalasi](/tools/ui/instructions) menjelaskan setiap langkahnya. Skrip berjalan di tiga alamat Little Hotelier: app.littlehotelier.com (Front Desk), application.littlehotelier.com (layar yang lebih baru seperti kalender), dan app.thebookingbutton.com (Direct Booking). Skrip ini gratis dan open source; [kodenya ada di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js).

## Hal yang perlu diketahui

- Pemuatan ulang membuang apa pun yang belum disimpan. Mengetik di keyboard tidak dihitung sebagai aktivitas, jadi jika seseorang menulis catatan panjang selama 10 menit tanpa menyentuh mouse, halaman bisa dimuat ulang sebelum mereka menyimpan. Simpan secara berkala.
- Jeda 10 menit adalah nilai tetap di skrip (600 detik). Untuk mengubahnya, edit angka itu di editor Tampermonkey.
- Skrip bekerja sama baiknya di desktop dan layar sentuh, karena gerakan sentuh dan ketukan juga dihitung sebagai aktivitas.
- Skrip berjalan di setiap halaman Little Hotelier yang cocok, termasuk kalender, daftar reservasi, dan Direct Booking.
- Skrip tidak menyimpan apa pun dan tidak mengirim apa pun ke mana pun.

## Terkait

- [Tips dan fitur tersembunyi Little Hotelier](/blog/little-hotelier-tips)
- [Checklist harian front desk hotel untuk Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Tabel Reservasi Lebar Penuh](/tools/ui/full-width-reservation-table)
