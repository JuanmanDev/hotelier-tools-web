---
title: "Checklist harian front desk hotel untuk Little Hotelier: 8 masalah sebelum tamu tiba"
seoTitle: "Checklist harian front desk hotel di Little Hotelier"
description: "Checklist front desk harian untuk Little Hotelier: 8 masalah reservasi yang perlu dideteksi sebelum kedatangan, dan cara mengotomatiskan lima di antaranya."
date: 2026-10-03
category: operations
tags: [front desk, checklist, check-in, automation, little hotelier]
keywords: [checklist front office hotel, checklist harian front desk hotel, template checklist front desk, checklist check in hotel, reservasi belum ada kamar little hotelier, otomatisasi hotel]
feature: automated-checks
demoPath: /automated-checks
cover: /images/blog/demo/en/automated-checks-lifecycle.webp
coverAlt: "Halaman Automated Checks di Hotelier Tools: cara kerja pengecekan dalam empat langkah, pemberitahuan Nothing runs any check yet yang menyarankan Before they arrive, dan The journey of a reservation melalui lima tahapnya"
faq:
  - q: "Apa yang harus diperiksa front desk hotel setiap hari?"
    a: "Untuk kedatangan hari ini dan besok: kamar sudah dialokasikan, saldo lunas, kartu valid, dokumen ID, alamat, jumlah tamu yang benar, jam kedatangan, dan tidak cocok dengan daftar do-not-rebook Anda. Untuk keberangkatan hari ini: saldo dan semua yang dibutuhkan invoice."
  - q: "Bagaimana menemukan reservasi tanpa kamar di Little Hotelier?"
    a: "Buka Front Desk > Reservations, filter berdasarkan tanggal check-in dan cari kolom Room yang kosong. Kalender juga menampilkan penghitung reservasi yang belum dialokasikan di bagian atas."
  - q: "Seberapa sering pengecekan otomatis bisa berjalan?"
    a: "Setiap tugas pengecekan punya jadwalnya sendiri. Yang direkomendasikan berjalan sekali sehari, dan satu tugas bisa berjalan paling banyak sekali per jam, karena setiap kali berjalan, tugas itu login ke Little Hotelier."
  - q: "Apakah Hotelier Tools akan mengubah atau membatalkan reservasi saya?"
    a: "Tidak. Pengecekan hanya memunculkan peringatan. Satu-satunya pengecualian adalah check-out otomatis, yang menulis ke Little Hotelier dan mati sampai Anda menyalakannya."
  - q: "Bisakah saya mencetak checklist ini?"
    a: "Bisa. Salin tabel di panduan ini ke dokumen, atau ekspor daftar kedatangan yang sudah difilter dari Front Desk > Reservations sebagai CSV lalu cetak."
  - q: "Apakah Hotelier Tools bagian dari Little Hotelier?"
    a: "Bukan. Ini dashboard independen, tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier hotel Anda sendiri."
---

Setiap hari, periksa kedatangan hari ini dan besok untuk delapan hal: kamar sudah dialokasikan, saldo lunas, kartu valid, dokumen ID, alamat, jumlah tamu yang benar, jam kedatangan, dan tidak cocok dengan daftar do-not-rebook Anda. Di Little Hotelier sebagian besar muat dalam satu layar: **Front Desk > Reservations**, difilter berdasarkan tanggal check-in. Hotelier Tools menjalankan lima dari delapan secara otomatis pada lima momen selama masa inap dan hanya mengirim email tentang apa yang perlu diperbaiki.

## 8 masalah reservasi yang perlu dideteksi sebelum tamu tiba

1. **Kamar belum dialokasikan.** Reservasi tanpa nomor kamar mudah terlewat sampai tamu sudah berdiri di front desk.
2. **Saldo belum lunas.** Anda ingin tahu sebelum kedatangan apakah harus menagih, mengejar deposit, atau mengirim tautan pembayaran.
3. **Kartu tidak valid pada reservasi Booking.com.** Booking.com memberi tamu batas waktu untuk memperbarui kartu, jadi menemukannya terlambat mengurangi pilihan Anda.
4. **Dokumen ID kosong.** Banyak negara mewajibkannya untuk pendaftaran tamu. Lihat [aturan pendaftaran tamu per negara](/blog/guest-registration-rules-by-country).
5. **Alamat atau negara kosong.** Dibutuhkan untuk pendaftaran, statistik resmi seperti survei INE di Spanyol, dan invoice yang benar.
6. **Jumlah tamu salah.** Nol orang dewasa, atau dua tamu dalam reservasi untuk empat orang, bisa mengacaukan pendaftaran, sarapan, dan pajak wisata yang dikenakan per orang.
7. **Tidak ada jam kedatangan.** Kedatangan larut malam dan self check-in perlu rencana sehari sebelumnya.
8. **Tamu yang Anda minta untuk tidak kembali.** Lebih baik tahu sebelum mereka tiba. Lihat [cara membuat daftar do-not-rent](/blog/hotel-do-not-rent-list).

Salin tabel ini sebagai checklist yang bisa dicetak:

| Pengecekan | Di mana melihatnya di Little Hotelier | Diotomatiskan di Hotelier Tools |
|---|---|---|
| Kamar dialokasikan | Kolom **Room** di Reservations; penghitung unallocated di Calendar | Ya |
| Saldo lunas | Kolom **Outstanding** di Reservations | Ya |
| Kartu valid (Booking.com) | Channel Manager > reservasi > **Manage Reservation** | Tidak |
| Dokumen ID | Reservasi > tab **Guests** | Ya |
| Alamat dan negara | Reservasi > tab **Details** dan **Guests** | Ya |
| Jumlah tamu | Kolom **Occupants** di Reservations | Tidak |
| Jam kedatangan | Kolom **ETA** di Reservations | Tidak |
| Kecocokan do-not-rebook | Daftar Anda sendiri | Ya |

## Cara memeriksanya di Little Hotelier tanpa membuka setiap reservasi

1. Buka **My Apps > Front Desk > Reservations**.
2. Atur jenis tanggal ke **Check-in date**, pilih hari ini dan besok (atau satu minggu ke depan), atur status ke **Confirmed** dan klik **Search**.
3. Baca di sepanjang kolom: **Room** yang kosong, jumlah **Occupants**, **ETA** yang kosong, dan apa pun di **Outstanding**.
4. Ingin versi cetak? Klik **Export** untuk CSV. Nomor telepon tamu tidak disertakan dalam file demi keamanan.

Sumber: [Run and export reservations information](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information).

Dokumen ID dan alamat adalah bagian yang lambat. Keduanya ada di tab **Details** dan **Guests** setiap reservasi ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/8673701-edit-a-reservation)), jadi Anda harus membuka setiap kedatangan.

### Kartu Booking.com yang tidak valid

Di Little Hotelier, buka reservasi di **Channel Manager > Reservations**, masuk ke tab **Manage Reservation** dan klik **Report payment card as invalid to Booking.com** ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)).

Per Oktober 2026, tamu kemudian punya 24 jam untuk memperbarui kartu. Untuk reservasi yang dibuat dalam 48 jam sebelum check-in, waktunya 12 jam, atau sampai pukul 15.00 pada hari check-in, mana yang lebih dulu. Jika mereka tidak melakukannya, Anda bisa membatalkan hingga pukul 15.00 (waktu setempat Anda) pada hari check-in ([Booking.com Partner Hub](https://partner.booking.com/en-us/help/policies-payments/guest-payments/handling-invalid-credit-cards)). Itulah sebabnya kartu masuk dalam daftar malam sebelumnya. Panduan lengkap: [kartu tidak valid atau no-show di Booking.com](/blog/booking-com-invalid-card-no-show).

::callout{type="tip" title="Skrip gratis yang mempercepat layar ini"}
[Full Width Reservation Table](/tools/ui/full-width-reservation-table) menampilkan semua kolom tanpa menggulir ke samping. [Update Number Adults](/tools/ui/update-number-adults) mengatur reservasi baru ke 2 dewasa agar angka 0 tidak lolos. Selengkapnya di [ekstensi Chrome gratis untuk Little Hotelier](/blog/little-hotelier-chrome-extensions).
::

## Malam sebelumnya atau di hari yang sama: kapan menjalankan tiap pengecekan

Sebagian masalah butuh waktu untuk diperbaiki (kartu, kamar), yang lain hanya bisa diperiksa setelah tamu ada di depan Anda (ID). Hotelier Tools membagi masa inap menjadi lima momen, masing-masing dengan tugas terjadwalnya sendiri:

| Momen | Reservasi yang dibaca | Yang diperiksa |
|---|---|---|
| Setelah reservasi dibuat | Dipesan kemarin dan hari ini | Kamar, ID, alamat, daftar do-not-rebook |
| Sebelum mereka tiba | Check-in dari hari ini hingga 7 hari ke depan (1–60, pilihan Anda) | Kamar, pembayaran, daftar do-not-rebook |
| Saat mereka tiba | Check-in hari ini | ID, alamat, kamar |
| Selama mereka menginap | Check-in dalam 7 hari terakhir (bisa disesuaikan) | ID, alamat |
| Saat mereka pergi | Check-out hari ini | ID, alamat, saldo |

Aturan sederhana: kamar, pembayaran, dan kartu pada malam sebelumnya; ID dan alamat pada hari kedatangan; saldo pada hari keberangkatan.

## Cara mengotomatiskan checklist dengan Hotelier Tools

1. Daftar di [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) dan hubungkan Little Hotelier di **Credentials**.
2. Buka **Automated Checks** (`/automated-checks`). Jika belum ada yang berjalan, halaman menyarankan memulai dengan **Before they arrive**: pengecekan ini menemukan reservasi yang belum dapat kamar selagi masih ada waktu untuk mengalokasikannya.
3. Buka satu momen, nyalakan atau matikan pengecekannya, lalu tekan **Save and activate task**. Itu membuat tugas terjadwal dengan jadwal yang direkomendasikan, misalnya setiap malam pukul 23:30 untuk "After a booking is made".
4. Masalah muncul di **Issues** (`/automated-checks/issues`), dikelompokkan per reservasi. Filter berdasarkan masalah yang masih terbuka, jenis pengecekan, atau tanggal menginap.
5. Perbaiki reservasi di Little Hotelier, lalu tekan **Verify**. Pengecekan berjalan lagi pada satu reservasi itu dan masalahnya ditutup setelah diperbaiki.

::screenshot{src="/images/blog/demo/en/automated-checks-moment-on-arrival.webp" alt="Momen When they arrive di Hotelier Tools: kartu tugas belum dikonfigurasi dengan Every 3 hours, Choose, dan Run now, tombol Save and activate task, serta pengecekan ID / passport (police register), physical room assignment, dan address and origin validation yang menyala" caption="Setiap momen masa inap punya pengecekan dan jadwalnya sendiri. Di sini, When they arrive." path="/automated-checks/moment/on_arrival"}
::

::screenshot{src="/images/blog/demo/en/automated-checks-issues.webp" alt="Halaman Issues dengan 20 issue terbuka, 5 selesai, dan total 25, filter untuk issue terbuka, jenis pengecekan, dan tanggal menginap, serta reservasi dengan peringatan saldo belum lunas saat kedatangan dan tombol Verify" caption="Masalah dikelompokkan per reservasi. Perbaiki di Little Hotelier, lalu tekan Verify." path="/automated-checks/issues"}
::

::demo-cta{path="/automated-checks"}
::

## Seperti apa email laporannya

Setiap kali berjalan, tugas mengirim **satu email laporan**, dalam bahasa yang Anda atur untuk tugas itu: ringkasan jelas tentang apa yang ditemukan, mudah dibaca di ponsel. Setiap masalah juga ada di **Issues**, jadi email adalah pengingat Anda dan dashboard adalah tempat Anda bekerja. Penerima bersama, seperti pemilik dan front desk, diatur di **Settings > Notifications** (`/settings/notifications`).

::screenshot{src="/images/blog/demo/en/settings-report-recipients.webp" alt="Halaman pengaturan Report recipients di Hotelier Tools dengan satu alamat bersama di kolom Addresses, saran alamat untuk ditambahkan, dan catatan bahwa laporan setiap tugas terjadwal dikirim ke daftar ini kecuali tugas menyebut daftarnya sendiri" caption="Halaman Report recipients di Settings: alamat bersama menerima email laporan setiap tugas pengecekan." path="/settings/notifications"}
::

## Batasan, dan apa yang tidak pernah diubah pengecekan

- **Hanya memberi peringatan.** Tidak ada pengecekan yang mengedit, membatalkan, atau menagih reservasi. Pengecualiannya adalah **check-out otomatis** opsional, yang menulis ke Little Hotelier dan mati secara default.
- **Paling banyak sekali per jam per tugas.** Setiap kali berjalan, tugas login ke Little Hotelier, jadi interval minimumnya 60 menit.
- **Berhenti dengan aman.** Jika kata sandi Little Hotelier Anda kedaluwarsa, tugas terjadwal menjeda dirinya sendiri alih-alih mencoba ulang, yang melindungi akun Anda dari penguncian. Dashboard menampilkan "Automated jobs are paused" sampai Anda menyimpan kata sandi baru di **Credentials** atau menekan **Check now & resume**.
- **Tiga pengecekan tetap manual.** Kartu, jumlah tamu, dan jam kedatangan tidak diperiksa otomatis, jadi tetap masukkan dalam daftar pagi Anda.

Setiap tugas terdaftar di **Cron Jobs** (`/cron`) dan setiap eksekusinya di **Run History** (`/cron-logs`). Fitur ini dalam beta. Selengkapnya tentang penjadwalan di [halaman Automations](/tools/bot/automations), dan fitur lengkapnya di [Automated checks](/tools/bot/automated-checks).

Panduan terkait: [panduan Little Hotelier](/blog/little-hotelier-tips), [asisten AI untuk resepsionis](/blog/ai-assistant-hotel-front-desk), [daftar tunggu untuk tanggal penuh](/blog/hotel-waitlist-sold-out-dates).

## Ringkasan

- Periksa delapan hal sebelum setiap kedatangan: kamar, saldo, kartu, ID, alamat, jumlah tamu, jam kedatangan, dan daftar do-not-rebook Anda.
- Di Little Hotelier, daftar **Reservations** yang difilter berdasarkan tanggal check-in menampilkan empat di antaranya sekilas; ID dan alamat harus dicek dengan membuka setiap reservasi.
- Hotelier Tools memeriksa kamar, pembayaran, ID, alamat, dan daftar do-not-rebook pada lima momen masa inap, mendaftar masalah di **Issues** dan mengirim email laporan.
- Mulai dengan **Before they arrive**, lalu tambahkan momen lainnya.
