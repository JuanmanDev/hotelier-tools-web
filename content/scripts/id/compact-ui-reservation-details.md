---
title: "Antarmuka Kompak Detail Reservasi"
description: "Menghapus padding berlebih di jendela reservasi Little Hotelier dan membuat kotak komentar tamu lebih tinggi, agar catatan terbaca tanpa menggulir di dalamnya."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/compact-ui-reservation-details/from.png"
  after: "/images/scripts/compact-ui-reservation-details/to.png"
  gallery:
    - "/images/scripts/compact-ui-reservation-details/from.png"
    - "/images/scripts/compact-ui-reservation-details/to.png"
---

Skrip ini merapatkan tata letak jendela reservasi di Little Hotelier Front Desk dan memberi kotak komentar tamu lebih banyak tinggi. Skrip ini untuk staf front desk yang membuka banyak reservasi setiap hari dan ingin membaca catatan dari tamu atau rekan kerja tanpa menggulir di dalam kotak kecil.

## Masalah yang diselesaikan

Komentar tamu sering berisi informasi yang penting saat check-in: kedatangan larut malam, boks bayi, permintaan parkir, perayaan khusus. Di jendela reservasi standar, kolom komentar pendek, sehingga catatan yang lebih panjang terpotong dan Anda harus menggulir di dalamnya. Pada saat yang sama, padding di bagian atas tab serta jarak di sekitar area peringatan dan garis pemisah mendorong kolom-kolom yang berguna lebih ke bawah.

## Apa yang berubah

Di layar reservasi di Front Desk:

- Kotak teks **guest comments** setinggi minimal 126 piksel, sehingga beberapa baris catatan terlihat sekaligus.
- Padding di bagian atas konten tab reservasi dihapus.
- Area placeholder peringatan yang kosong tidak lagi menambah margin.
- Garis pemisah horizontal kehilangan margin ekstranya.

Kolom, tombol, dan tab tetap di tempatnya. Hanya jarak dan tinggi kotak komentar yang berubah.

## Cara menginstal

Instal ekstensi Tampermonkey yang gratis, tekan **Instal di Tampermonkey** di halaman ini, konfirmasikan, lalu muat ulang Little Hotelier. [Panduan instalasi](/tools/ui/instructions) punya gambar untuk setiap langkah. Skrip berjalan di halaman Front Desk di app.littlehotelier.com, dan gayanya hanya memengaruhi jendela reservasi. Skrip ini gratis dan open source: [kodenya ada di GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js).

## Hal yang perlu diketahui

- Skrip bekerja dengan menambahkan beberapa gaya saat halaman dimuat. Skrip tidak membaca, mengubah, atau menyimpan data reservasi.
- Catatan yang lebih panjang dari tinggi baru tetap bisa digulir di dalam kotak seperti biasa.
- Skrip bekerja sama baiknya di desktop dan layar sentuh. Untuk tablet, gabungkan dengan [Tingkatkan Gaya untuk Layar Sentuh](/tools/ui/improve-style-touch-screens), yang memperbesar menu Print dan Email.
- Skrip ini juga cocok dipasangkan dengan [Simpan Provinsi dan Negara dengan Mudah](/tools/ui/easy-save-province-country), yang bekerja di formulir tamu pada jendela yang sama.
- Jika Little Hotelier mengubah jendela reservasi, sebagian penyesuaian jarak mungkin berhenti berlaku sampai skrip diperbarui.

## Terkait

- [Tingkatkan Gaya untuk Layar Sentuh](/tools/ui/improve-style-touch-screens)
- [Checklist harian front desk hotel untuk Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Ekstensi Chrome Little Hotelier: userscript gratis](/blog/little-hotelier-chrome-extensions)
