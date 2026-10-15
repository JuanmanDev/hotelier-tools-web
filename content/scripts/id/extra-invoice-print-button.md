---
title: "Tombol Cetak Invoice Tambahan"
description: "Menambahkan tombol Print Invoice di setiap reservasi Little Hotelier, di samping menu Print, agar front desk mencetak invoice dengan satu klik, bukan dua."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/extra-invoice-print-button/from.png"
  after: "/images/scripts/extra-invoice-print-button/to.png"
  gallery:
    - "/images/scripts/extra-invoice-print-button/from.png"
    - "/images/scripts/extra-invoice-print-button/to.png"
---

Skrip ini menaruh tombol **Print Invoice** langsung di layar reservasi Little Hotelier, di samping menu **Print** yang sudah ada. Satu klik membuka invoice, tanpa harus membuka menu terlebih dahulu. Skrip ini untuk staf front desk yang mencetak atau mengunduh invoice di hampir setiap check-out.

## Masalah yang diselesaikan

Di Front Desk, invoice berada di dalam menu Print reservasi: Anda membuka menu, lalu memilih invoice. Dua klik tidak banyak jika sekali saja, tetapi saat check-out, dengan tamu yang menunggu, jumlahnya terasa, dan di tablet menu kecil itu mudah terlewat. Staf baru juga tidak selalu tahu bahwa invoice ada di dalam menu itu.

## Apa yang berubah

- Sebuah tombol baru dengan ikon dokumen muncul di footer reservasi, tepat setelah tombol menu **Print**.
- Labelnya **Print Invoice**, atau **Imprimir Factura** saat Little Hotelier berbahasa Spanyol.
- Mengekliknya memicu tautan cetak invoice milik Little Hotelier sendiri, yang sama dengan yang Anda pilih dari menu Print. Hasilnya persis invoice yang dibuat Little Hotelier; skrip tidak membuat atau mengubah invoice.
- Menu Print yang asli tetap seperti semula, dengan semua opsi lainnya.

## Cara menginstal

Anda membutuhkan ekstensi Tampermonkey yang gratis. Tekan **Instal di Tampermonkey** di halaman ini, konfirmasikan, lalu muat ulang Little Hotelier. [Panduan instalasi](/tools/ui/instructions) punya gambar untuk setiap langkah. Skrip berjalan di halaman Front Desk di app.littlehotelier.com dan hanya menambahkan tombol di tempat tombol Print reservasi ada. Skrip ini gratis dan open source: [lihat kodenya di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js).

## Hal yang perlu diketahui

- Skrip mencari tombol Print beberapa kali selama lima detik pertama setelah halaman dimuat. Jika tombolnya tidak ada karena reservasi terbuka belakangan, muat ulang halaman.
- Skrip memeriksa lebih dulu apakah tombolnya sudah ada, sehingga Anda tidak pernah mendapat dua tombol.
- Label tersedia dalam bahasa Inggris dan Spanyol. Bahasa antarmuka lain menampilkan label bahasa Inggris.
- Skrip bekerja di desktop dan layar sentuh. Dengan [Tingkatkan Gaya untuk Layar Sentuh](/tools/ui/improve-style-touch-screens), tombol footer juga mendapat latar yang disorot.
- Skrip tidak menyimpan apa pun dan tidak mengirim apa pun ke luar Little Hotelier.

## Terkait

- [Cara mengirim invoice ke tamu saat check-out](/blog/send-invoice-to-guest-at-checkout)
- [Unduh semua invoice Little Hotelier](/blog/download-all-little-hotelier-invoices)
- [Tombol Email Transfer Bank](/tools/ui/bank-transfer-email-button)
