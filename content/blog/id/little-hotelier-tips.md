---
title: "Tips dan fitur tersembunyi Little Hotelier yang jarang diketahui pemilik (2026)"
seoTitle: "Tips dan Fitur Tersembunyi Little Hotelier (2026)"
description: "20 tips Little Hotelier: kalender lebih cepat, passkey, tarif minimum, gap night, tautan pemesanan, audit log, dan skrip gratis untuk harga di kalender."
date: 2026-10-03
category: tips
tags: [tips, how to, calendar, userscripts, little hotelier]
keywords: [little hotelier adalah, cara menggunakan little hotelier, little hotelier tutorial, little hotelier tips, little hotelier hidden features, little hotelier calendar, aplikasi manajemen guest house]
feature: dashboard
demoPath: /
cover: /images/scripts/full-width-reservation-table/to.png
coverAlt: "Halaman Reservations Little Hotelier (antarmuka bahasa Spanyol) yang diperlebar hingga selebar layar oleh skrip Full Width Reservation Table: filter pencarian, tombol Buscar, 36 reservasi ditemukan, dan tautan Exportar"
faq:
  - q: "Bagaimana cara agar Little Hotelier tidak terus-menerus meminta kode MFA?"
    a: "Little Hotelier meminta lagi setiap 30 hari, saat Anda berganti browser atau perangkat, dan sebelum tindakan sensitif. Cara tercepat adalah passkey (My account, Passkeys, Create passkey) atau persetujuan lewat aplikasi seluler Little Hotelier, yang menampilkan angka yang cocok, bukan kode."
  - q: "Bagaimana cara menghindari session timeout di Little Hotelier?"
    a: "Little Hotelier tidak punya pengaturan untuk itu di artikel pusat bantuan yang kami periksa. Userscript gratis Auto Refresh On Inactivity memuat ulang halaman setelah 10 menit tanpa aktivitas, sehingga Anda kembali ke layar yang segar, bukan yang sudah usang."
  - q: "Bisakah saya melihat harga kamar di kalender Little Hotelier?"
    a: "Tidak secara bawaan: kalender menampilkan reservasi, dan harga ada di grid inventory. Userscript gratis Prices Display membacanya dari halaman inventory dan menampilkannya di bawah setiap tipe kamar di kalender."
  - q: "Apakah Little Hotelier punya pintasan keyboard?"
    a: "Kami tidak menemukan pintasan keyboard di pusat bantuan Little Hotelier (Oktober 2026). Tombol panah kalender bergeser 1, 7, atau 14 hari, dan View today kembali ke hari ini. Di dashboard Hotelier Tools, Ctrl+K (Cmd+K di Mac) membuka pencarian."
  - q: "Di mana buku panduan pengguna Little Hotelier?"
    a: "Tidak ada satu manual tunggal. Little Hotelier memiliki dua pusat bantuan, satu untuk versi classic dan satu untuk platform yang lebih baru, ditambah Sim, chatbot AI yang bisa Anda buka dari ikon chat setelah masuk."
---

Little Hotelier menyembunyikan beberapa fiturnya yang paling berguna satu atau dua klik lebih dalam: login dengan passkey, tarif minimum properti, tautan booking engine yang langsung membuka kamar tertentu, tombol flush untuk channel yang tidak mau ter-update, dan audit log tentang siapa mengubah apa. Berikut 20 tips: 14 bawaan Little Hotelier (masing-masing dengan tautan ke artikel bantuan resmi), 4 skrip browser gratis untuk hal yang tidak dilakukannya, dan 2 untuk pemilik yang memakai dashboard Hotelier Tools.

::callout{type="info" title="Classic atau platform?"}
Akun yang dibuat sejak Mei 2025 (atau yang sudah di-upgrade) memakai **platform** Little Hotelier yang lebih baru; akun lama memakai versi **classic**, yang punya [pusat bantuannya sendiri](https://helpcentre.littlehotelier.com/en/). Nama menu berbeda, jadi setiap tip memberikan jalur untuk versi yang dijelaskan artikel bantuannya.
::

## Tips kalender dan front desk

### 1. Baca kalender sekilas

Pilih tampilan **14 atau 28 hari** dari drop-down. Di tampilan 14 hari, `<`, `<<`, dan `<<<` bergeser 1, 7, dan 14 hari; **View today** kembali ke hari ini. Warna menunjukkan status: oranye terkonfirmasi, hijau sudah check-in, abu-abu sudah check-out, biru belum dialokasikan, merah penutupan kamar. **Segitiga merah** di sudut berarti masih ada uang yang harus dibayar ([panduan kalender](https://help-platform.littlehotelier.com/en/articles/10397723-getting-started-with-calendar)).

### 2. Pakai baris Unallocated untuk menyelipkan satu reservasi lagi

Saat sebuah tipe kamar tampak penuh tetapi malam-malamnya tidak sejajar, pindahkan satu reservasi ke **Unallocated**, susun ulang yang lain, lalu seret kembali ke sebuah kamar. Reservasi yang belum dialokasikan tetap mengurangi ketersediaan, jadi memarkirnya di sana tidak membuat kamar kembali dijual ([panduan versi classic](https://helpcentre.littlehotelier.com/en/articles/8673713-overview-of-the-front-desk-calendar)).

### 3. Cetak formulir registrasi sebagai lembar check-in

Klik kaca pembesar pada sebuah reservasi, lalu **Print → Registration form**. Little Hotelier menyarankan memakainya sebagai formulir check-in siap pakai.

### 4. Beri housekeeping laporannya sendiri

Buka **Reservations → Housekeeping**. Tandai setiap kamar **Cleaned**, **Uncleaned**, atau **Skip cleaning**, tambahkan catatan kamar, pindah antara **Today**, **Tomorrow**, atau tanggal pilihan, lalu tekan **Print report**. Beri staf housekeeping pengguna sendiri dengan akses Front desk agar mereka melihatnya secara langsung. Fitur ini tidak ada di aplikasi seluler ([panduan housekeeping](https://help-platform.littlehotelier.com/en/articles/12105307-how-to-manage-housekeeping-in-little-hotelier)).

### 5. Baca asal reservasi dari nomor referensinya

Huruf di awal nomor referensi reservasi menunjukkan sumbernya: **LH** front desk atau booking engine Anda, **BDC** Booking.com, **EXP** Expedia, **ABB** Airbnb, **AGO** Agoda, **HWL** Hostelworld ([panduan reservasi](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data)). Berguna saat Anda memfilter ekspor di Excel.

## Tarif, pembatasan, dan channel

### 6. Atur tarif minimum agar tidak ada yang terjual terlalu murah

Tarif minimum properti mencegah tarif kamar atau diskon apa pun yang dikelola di Little Hotelier turun di bawahnya. Di platform: **Setup → Property settings → General information**, ikon pensil di samping **Inventory**, lalu **Minimum rate** ([panduan](https://help-platform.littlehotelier.com/en/articles/13681648-set-a-minimum-rate-for-your-property)). Di versi classic: **Channel Manager**, klik nama properti Anda, lalu **Property settings → General** ([panduan](https://helpcentre.littlehotelier.com/en/articles/8673933-set-a-minimum-rate-for-all-your-rooms)). Promosi yang Anda buat langsung di Booking.com atau channel lain masih bisa lebih rendah.

### 7. Selamatkan gap night akibat minimum stay

Minimum tiga malam meninggalkan celah dua malam yang tidak bisa dipesan siapa pun. Solusi Little Hotelier: rate plan kedua, diturunkan dari rate plan standar Anda dengan harga sedikit lebih tinggi (contoh mereka +5%), dengan minimum stay lebih pendek, dipetakan ke channel Anda ([panduan gap night](https://help-platform.littlehotelier.com/en/articles/16780102-manage-gap-nights)). Untuk arti CTA, CTD, dan stop sell, lihat [CTA, CTD, minimum stay, dan stop sell di Little Hotelier](/blog/little-hotelier-cta-ctd-stop-sell).

### 8. Kirim "flush" saat channel tidak ter-update

Di versi classic, **Setup → Property & Room Settings → Rooms & Rates**, pilih tipe kamar atau tarif, lalu tekan **Flush** di bagian bawah. Ini mengirim ulang harga, pembatasan, dan ketersediaan ke setiap channel. Tunggu lima menit setelah perubahan kecil sebelum flush, dan perbaiki kesalahan pemetaan lebih dulu ([panduan flush](https://helpcentre.littlehotelier.com/en/articles/8947419-send-inventory-updates-to-channel-manager-send-a-flush)).

### 9. Cari tahu siapa yang mengubah tarif atau pemetaan channel

Buka sebuah tarif kamar atau channel lalu pilih **Audit**. Lifecycle audit menunjukkan kapan sebuah pengaturan berubah dan email pengguna yang mengubahnya. Audit ini tidak mencatat harga, nilai pembatasan, atau perubahan reservasi ([panduan audit](https://help-platform.littlehotelier.com/en/articles/10660168-track-configuration-changes-with-the-lifecycle-audit-tool)). Untuk stop sell yang misterius, periksa dulu **Release period** pada tarif; jika kosong, ada yield rule yang menutupnya ([panduan](https://help-platform.littlehotelier.com/en/articles/14177576-how-to-check-if-a-stop-sell-is-triggered-by-a-yield-rule)).

## Booking engine dan Booking.com

### 10. Tautkan langsung ke satu kamar, tarif, atau kode promo

Tambahkan parameter ke alamat booking engine Anda:

- `?room_type=ID` membuka satu tipe kamar (ID ada di URL tipe kamar di pengaturan Direct Booking)
- `?promocode=CODE` menerapkan kode promo
- `?ratePlanId=ID` menampilkan satu rate plan (Little Hotelier menjelaskan cara menemukan ID dengan developer tools browser Anda)

Alamatnya diawali `direct-book.com/properties/` di Eropa, Afrika, Timur Tengah, dan Amerika, atau `book-directonline.com/properties/` di Asia-Pasifik ([tautan kamar dan promo](https://helpcentre.littlehotelier.com/en/articles/9451551-create-unique-links-for-your-booking-engine), [tautan rate plan](https://help-platform.littlehotelier.com/en/articles/11935086-create-a-url-that-links-directly-to-a-rate-plan)).

### 11. Laporkan kartu tidak valid atau no-show Booking.com tanpa extranet

Buka reservasi Booking.com di channel manager lalu masuk ke tab **Manage Reservation**. Dari sana Anda bisa melaporkan kartu sebagai tidak valid, meminta Booking.com membatalkan karena kartu tidak valid, atau menandai no-show dan memilih apakah biayanya dibebaskan ([panduan](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)). Batas waktunya ada di [kartu tidak valid atau no-show Booking.com: apa yang harus dilakukan](/blog/booking-com-invalid-card-no-show).

### 12. Pastikan tamu Booking.com menerima email Anda

Booking.com memblokir email dari sistem yang tidak dikenalnya. Jika Anda mengirim konfirmasi atau permintaan pembayaran dari Little Hotelier, izinkan `@app.littlehotelier.com` dan `@guestjoy.com` (serta tautan `siteminder.com` dan `guestjoy.com`) di extranet pada **Property → Messaging preferences → Security settings** ([langkah-langkah](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).

## Login, dukungan, dan ekspor

### 13. Masuk dengan passkey, bukan kode

MFA wajib, dan Little Hotelier meminta lagi setiap 30 hari atau saat memakai browser baru. Dua cara agar tidak merepotkan ([panduan MFA](https://help-platform.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)):

- **Setujui dengan aplikasi Little Hotelier.** Anda mengetuk angka yang cocok dan mengonfirmasi dengan wajah atau sidik jari. Kode SMS dan email tidak didukung.
- **Pakai passkey.** Ikon profil → **My account** → **Passkeys** → **Create passkey**, lalu masuk dengan **Continue with a passkey**. Berfungsi di browser web (Chrome dan Edge 109+, Safari 16+), tidak di aplikasi seluler, dan memerlukan MFA yang sudah disiapkan lebih dulu ([panduan passkey](https://help-platform.littlehotelier.com/en/articles/12039017-how-to-set-up-and-log-in-with-passkeys)).

Setiap orang sebaiknya punya pengguna sendiri: kode MFA milik satu orang dan satu perangkat.

### 14. Tanya Sim sebelum mencari, dan ekspor sebelum hari ke-180

Setelah masuk, buka ikon chat di kanan bawah lalu pilih **Ask a question**. Sim, chatbot AI Little Hotelier, menjawab dari pusat bantuan 24/7 dalam delapan bahasa dan dapat menyambungkan Anda ke manusia. Ajukan satu pertanyaan spesifik setiap kali, dengan nama channel dan pesan kesalahan persisnya ([tips](https://help-platform.littlehotelier.com/en/articles/9452186-tips-on-using-our-help-centre-and-ai-chatbot-for-support)).

Dan satu kebiasaan yang layak dibangun: ekspor reservasi Anda setiap bulan. Data tamu disamarkan 180 hari setelah check-out, dan ekspor tidak pernah menyertakan nomor telepon. Langkah demi langkah: [ekspor reservasi ke Excel atau Google Sheets](/blog/export-little-hotelier-reservations-excel).

## Penyesuaian dengan userscript gratis

[Userscript](/tools/ui) gratis ini berjalan di browser Anda dengan ekstensi Tampermonkey dan hanya mengubah apa yang Anda lihat. Tetap gratis selamanya. [Panduan pemasangan](/tools/ui/instructions) membutuhkan sekitar lima menit per skrip.

### 15. Lihat harga Anda di kalender

[Prices Display](/tools/ui/prices-display) membaca tarif Anda dari halaman inventory dan menampilkannya di bawah setiap tipe kamar di kalender, sehingga Anda bisa menyebutkan harga lewat telepon tanpa berpindah layar.

::screenshot{src="/images/scripts/prices-display/to.webp" alt="Kalender Little Hotelier dalam bahasa Spanyol dengan tampilan 7 hari, reservasi berwarna hijau, oranye, dan abu-abu, dan harga per malam setiap tipe kamar dalam angka besar di bawah kamarnya" caption="Dengan Prices Display, tarif per malam setiap tipe kamar tepat berada di bawah kamarnya."}
::

### 16. Berhenti kembali ke halaman yang usang

Jika Anda membiarkan Little Hotelier terbuka di front desk dan kembali menemukan error, [Auto Refresh On Inactivity](/tools/ui/auto-refresh-inactivity) memuat ulang halaman setelah 10 menit tanpa klik, gulir, atau gerakan mouse. Tidak pernah memuat ulang saat Anda sedang bekerja.

### 17. Lihat komisi Booking.com di dalam reservasi

[Show Booking.com Commissions](/tools/ui/show-booking-commissions) menambahkan rincian perkiraan komisi dan pendapatan bersih Anda pada setiap reservasi Booking.com. Cara kerja komisi sebenarnya ada di [berapa komisi Booking.com](/blog/booking-com-commission).

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Ringkasan reservasi Little Hotelier dalam bahasa Spanyol dengan baris tambahan untuk biaya transfer, komisi Booking.com, total komisi dengan PPN, dan perkiraan pendapatan bersih" caption="Perkiraan apa yang diambil Booking.com dan apa yang Anda terima bersih, di dalam reservasi."}
::

### 18. Muat lebih banyak di layar (dan di tablet)

- [Compact Calendar UI](/tools/ui/compact-calendar-ui) menaruh header tanggal dalam satu baris dan memperkecil nama tipe kamar.
- [Full Width Reservation Table](/tools/ui/full-width-reservation-table) melebarkan daftar reservasi agar Anda tidak lagi menggulir ke samping.
- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens) membuat tombol lebih besar dan selalu menampilkan tombol "remove room" yang biasanya hanya muncul saat diarahkan mouse.

Semua skrip, dengan gambar sebelum-sesudah, ada di [halaman ekstensi browser](/chrome-extensions) dan di [ekstensi Chrome gratis untuk Little Hotelier](/blog/little-hotelier-chrome-extensions).

## Dua tips jika Anda memakai dashboard Hotelier Tools

Hotelier Tools adalah dashboard independen yang bekerja di samping Little Hotelier, memakai login Little Hotelier milik properti Anda sendiri. Layanan ini tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier, dan gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

### 19. Tekan Ctrl+K untuk menemukan apa saja

**Ctrl+K** (**Cmd+K** di Mac) mencari halaman, entri waiting list, tugas terjadwal, dan percakapan. Pencarian mengabaikan aksen dan memahami kata bahasa Inggris maupun Spanyol untuk hal yang sama: "lista de espera" menemukan Availability Queue.

::screenshot{src="/images/blog/demo/en/global-search-waitlist.webp" alt="Command palette dibuka dengan Ctrl+K di atas dashboard Hotelier Tools, dengan kueri waitlist dan halaman yang cocok seperti Public waitlist form, Availability Queue, History, Do-not-rebook list, dan Scheduled invoices, masing-masing diberi label bagiannya" caption="Ketik satu kata dan langsung lompat ke halaman yang Anda butuhkan." path="/"}
::

### 20. Biarkan pengecekan malam hari menemukan ID yang hilang sebelum tamu tiba

**Automated checks** membaca reservasi mendatang dan menandai hal yang biasanya baru Anda temukan di front desk: belum ada kamar yang dialokasikan, dokumen ID atau alamat belum ada, saldo belum dibayar, atau tamu yang ada di daftar do-not-rebook Anda. Masalah masuk ke satu halaman Issues, dan setiap eksekusi mengirim email laporan. Lihat [checklist harian front desk](/blog/hotel-front-desk-checklist-automation).

::demo-cta{path="/automated-checks/issues"}
::

Panduan terkait: [apa itu server MCP](/blog/what-is-mcp-server-hotels), [harga dinamis di Little Hotelier](/blog/dynamic-pricing-little-hotelier), [mengunduh semua faktur sekaligus](/blog/download-all-little-hotelier-invoices), [aturan registrasi tamu per negara](/blog/guest-registration-rules-by-country), [memakai WhatsApp dengan Little Hotelier](/blog/whatsapp-little-hotelier), [alternatif Little Hotelier](/blog/little-hotelier-alternatives), [dasbor Hotelier Tools](/tools/bot/dashboard), [otomatisasi Hotelier Tools](/tools/bot/automations).

## Ringkasan

- **Penghemat waktu terbesar:** passkey, laporan housekeeping, dan tautan langsung booking engine.
- **Penghemat uang terbesar:** tarif minimum properti dan rate plan gap night.
- **Saat channel bermasalah:** flush, lalu periksa audit log dan release period.
- **Untuk yang tidak dilakukan Little Hotelier:** userscript gratis untuk harga di kalender dan komisi Booking.com, serta [integrasi](/blog/little-hotelier-integrations) untuk sisanya.
