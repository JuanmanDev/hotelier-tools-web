---
title: "Reservasi Booking.com atau Expedia tidak muncul di Little Hotelier: penyebab, pengecekan, dan cara menghindari overbooking"
seoTitle: "Reservasi Booking.com/Expedia tidak masuk Little Hotelier?"
description: "Mengapa reservasi OTA tidak sampai ke Little Hotelier, di mana mengecek status pengirimannya, cara melindungi kamar, dan cara dapat peringatan saat hilang."
date: 2026-10-29
category: operations
tags: [booking.com, expedia, channel manager, overbooking, little hotelier, siteminder]
keywords: [reservasi booking.com tidak masuk little hotelier, booking expedia tidak masuk channel manager, reservasi hilang little hotelier, reservasi ota tidak masuk pms, siteminder reservation delivery failed, overbooking channel manager, cara kirim ulang reservasi ke little hotelier, reservasi booking.com tidak muncul di channel manager]
feature: automated-checks
demoPath: /reservations/calendar
cover: /images/blog/demo/en/ota-missing-calendar-double-booked.webp
coverAlt: "Kalender reservasi Hotelier Tools dari 4 sampai 17 November 2026: kamar dikelompokkan per tipe dengan reservasi confirmed dan checked-in sebagai bar, baris No room yet, kamar 104 ditutup untuk perbaikan, dan legenda dengan Checked in, Checked out, Confirmed, Double booked, dan Room closed"
faq:
  - q: "Mengapa reservasi Booking.com tidak muncul di Little Hotelier?"
    a: "Biasanya kamar atau tarif yang dipesan belum di-mapping, atau dinonaktifkan, di Channel Manager Little Hotelier, reservasinya dibuat dengan kode properti lain, atau pengirimannya gagal. Cek status pengirimannya di My apps > Channel Manager > Reservations."
  - q: "Bagaimana cara mengirim ulang reservasi yang gagal ke Little Hotelier?"
    a: "Di My apps > Channel Manager > Reservations, klik ID reservasinya, buka tab Little Hotelier di Booking summary, lalu klik Resend PMS message. Reservasi tanpa status pengiriman tidak bisa dikirim ulang: masukkan secara manual."
  - q: "Apa yang harus saya lakukan pertama kali saat ada reservasi yang hilang?"
    a: "Lindungi kamarnya. Buat reservasi secara manual di Front Desk > Calendar dengan detail dari extranet, sehingga ketersediaan turun di semua channel. Setelah itu, cari tahu mengapa reservasinya tidak masuk."
  - q: "Apakah Booking.com memberi tahu saya jika reservasi gagal sampai ke channel manager?"
    a: "Ya. Booking.com mengirim email ke properti saat ada masalah menambahkan reservasi ke sistem penyedia konektivitas, jadi pastikan data kontak di Extranet Anda selalu terbaru. Reservasinya sendiri selalu ada di Extranet."
  - q: "Seberapa cepat Hotelier Tools memberi peringatan reservasi yang hilang?"
    a: "Untuk Expedia, pengecekan berjalan setiap 15 menit dan memberi peringatan untuk reservasi yang masih hilang setelah 30 menit, terlihat dalam setidaknya dua kali pembacaan: sekitar 30 sampai 45 menit setelah reservasi dibuat. Setiap reservasi diperingatkan sekali, dan sekali lagi saat reservasinya masuk. Untuk Booking.com, saat ini hanya insiden reservasi yang diperingatkan."
  - q: "Apakah Hotelier Tools bagian dari Little Hotelier, SiteMinder, Booking.com, atau Expedia?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh satu pun dari mereka. Layanan ini membaca extranet dan Little Hotelier Anda memakai login Anda sendiri, dan tidak pernah membuat, mengubah, atau membatalkan reservasi."
---

Saat reservasi Booking.com atau Expedia tidak ada di Little Hotelier, hampir selalu reservasi itu berhenti di salah satu dari tiga titik: kamar atau tarifnya belum di-mapping (atau dinonaktifkan) di Channel Manager, reservasinya masuk ke kode properti lain, atau pengirimannya gagal. Cek statusnya di **My apps > Channel Manager > Reservations** dan kirim ulang jika gagal. Apa pun penyebabnya, buat dulu reservasinya secara manual, agar kamar itu tidak terjual dua kali.

Tampilan Little Hotelier, Booking.com, dan Expedia di bawah ini diperiksa per November 2026.

## Mengapa reservasi tidak sampai ke Little Hotelier?

Reservasi berjalan dari OTA ke channel manager SiteMinder, lalu dari sana ke Front Desk Little Hotelier. Reservasi bisa berhenti di langkah mana pun. Penyebab yang umum, menurut [panduan reservasi hilang](https://helpcentre.littlehotelier.com/en/articles/12391160-troubleshooting-missing-reservations-and-overbookings) dari Little Hotelier dan [panduan sinkronisasi](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager) dari Booking.com:

| Penyebab | Tandanya |
|---|---|
| **Rate plan atau kamar belum di-mapping** | Tamu memesan tarif yang tidak terhubung di Channel Manager. Reservasinya sama sekali tidak punya status pengiriman. |
| **Tarif atau channel dinonaktifkan** | Item yang dinonaktifkan tidak mengirim pembaruan, tetapi OTA tetap menjual dengan ketersediaan lama. |
| **Dipesan sebelum tarif di-mapping** | Reservasi yang dibuat sebelum Anda mengaktifkan atau me-mapping tarif channel tidak tersinkron dengan sendirinya. |
| **Kode properti salah** | Akun extranet kedua dengan kode lain. Reservasinya tidak pernah sampai ke Little Hotelier. |
| **Pengiriman gagal** | Channel manager menerima reservasinya, tetapi Little Hotelier menolaknya atau tidak bisa mengonfirmasinya. |
| **Insiden di sisi OTA** | API reservasi milik OTA sedang down. Reservasi baru, perubahan, dan pembatalan berhenti masuk untuk sementara. |

Jangan lupakan perubahan dan pembatalan. Keduanya menempuh jalur yang sama. Pembatalan yang hilang membuat kamar tetap terblokir padahal bisa Anda jual. Perubahan tanggal yang hilang menempatkan tamu di malam yang salah. Keduanya diperbaiki dengan cara yang sama: bandingkan reservasi di extranet dengan Little Hotelier.

Reservasi yang diterima saat ketersediaan nol adalah masalah lain. Saran Little Hotelier: tanyakan ke OTA mengapa reservasi itu diterima, dan minta ke tim support log pembaruan inventaris yang dikirim ke channel tersebut sebagai bukti.

## Cara mengecek status pengiriman di Little Hotelier

1. Buka **My apps > Channel Manager > Reservations**. Pakai filter **All PMS status** untuk melihat status pengiriman setiap reservasi.
2. Baca statusnya ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/8673803-check-little-hotelier-s-reservation-delivery-statuses)):
   - **DELIVERED**: Little Hotelier sudah menerimanya. Jika Anda tetap tidak menemukannya, cari di Front Desk berdasarkan nama tamu dan tahun yang benar, lalu hubungi support.
   - **PENDING**: belum diterima. Biasanya beres dalam beberapa menit.
   - **FAILED**: ditolak atau tidak terkonfirmasi. Pesan kesalahannya juga dikirim ke email Anda.
   - **Tanpa status**: tarifnya belum di-mapping. Reservasi ini tidak bisa dikirim ulang, jadi masukkan secara manual.
3. Untuk mengirim ulang reservasi yang gagal, klik ID-nya. Di jendela **Booking summary**, buka tab **Little Hotelier** dan klik **Resend PMS message**.

Kegagalan juga muncul di ikon lonceng, di **Reservation delivery failures**. Setelah itu, perbaiki penyebabnya di **My apps > Channel Manager > Channels > Configure**: mapping tarif yang belum di-mapping, aktifkan lagi yang dinonaktifkan, dan pastikan **Rates Mapped** menunjukkan dua angka yang sama (misalnya 44/44). Tarif yang terus gagal dengan "Unable to locate" sudah dihapus atau diubah di sisi OTA dan harus di-mapping ulang ([kesalahan mapping](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshooting-channel-mapping-errors)).

## Cara mengecek di Booking.com dan Expedia

**Booking.com.** Setiap reservasi ada di daftar **Reservations** di Extranet, apa pun yang terjadi setelahnya. Booking.com menyebutkan bahwa reservasi bisa tidak ada di sistem penyedia Anda jika kamar atau tarifnya belum terhubung di sana, atau setelah ada masalah teknis. Booking.com juga mengirim email setiap kali tidak bisa menambahkan reservasi ke sistem penyedia Anda, jadi pastikan data kontak di Extranet selalu terbaru ([Booking.com Partner Help](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager)). Jika beberapa reservasi hilang sekaligus, lihat [halaman status konektivitas](https://connect.booking.com/status) publik Booking.com untuk insiden pada reservasi.

**Expedia.** Buka halaman reservasi di Partner Central, cari berdasarkan nomor konfirmasi atau tanggal, dan catat kamar serta tarif yang dipesan tamu. Jika reservasinya ada di Partner Central tetapi tidak di Little Hotelier, celahnya ada di antara Expedia dan SiteMinder: pastikan SiteMinder masih menjadi penyedia konektivitas Anda untuk tarif sekaligus reservasi, dan bahwa tarifnya sudah di-mapping.

Dalam kedua kasus, Little Hotelier tidak bisa menghubungi OTA atas nama Anda. Jika mapping-nya benar dan OTA menyatakan sudah mengirim reservasinya, minta log pengiriman XML reservasi itu ke OTA dan kirimkan ke support Little Hotelier.

## Cara menghindari overbooking selama Anda menyelidiki

1. **Buat reservasinya secara manual.** Di **Front Desk > Calendar**, klik tanggal check-in, pilih **Add Reservation**, dan salin detailnya dari extranet. Membuatnya akan menurunkan ketersediaan Anda di semua channel.
2. **Ingat bahwa ini manual.** Perubahan atau pembatalan reservasi itu nanti juga harus dilakukan secara manual di Front Desk. Jika reservasi aslinya masuk belakangan, pastikan Anda tidak menyimpan keduanya.
3. **Sudah penuh?** Minta OTA memindahkan tamu ke properti lain.
4. **Cegah penyebabnya terulang.** Mapping setiap tarif yang Anda jual, waspadai channel yang dinonaktifkan, dan pertimbangkan stop sell di channel yang lebih lemah saat hanya tersisa satu kamar.

## Cara yang lebih cepat: dapat peringatan saat reservasi OTA hilang

Mengecek secara manual berhasil kalau Anda sudah tahu ada reservasi yang hilang. Bagian sulitnya adalah mengetahuinya. Hotelier Tools membandingkan daftar reservasi milik Expedia dengan Little Hotelier setiap 15 menit dan mengirim email tentang reservasi yang tidak masuk. Untuk Booking.com, saat ini yang diperingatkan adalah insiden reservasi; pengecekan per reservasinya belum selesai (penjelasan di bawah).

1. Hubungkan extranet di **Credentials**: **Expedia Partner Central** (`/credentials/expedia-extranet`) atau **Booking.com extranet** (`/credentials/booking-extranet`).
2. Jaga sesinya tetap aktif dengan **Keep Expedia signed in** (atau **Keep the session signed in** untuk Booking.com) di halaman yang sama. Pengecekan tidak bisa membaca sesi yang sudah kedaluwarsa.
3. Jadwalkan **Check Expedia reservations are in Little Hotelier** (atau yang untuk Booking.com) dari kartunya, dengan pengaturan yang direkomendasikan: **Every 15 minutes**. Setelah extranet terhubung dan sesinya dijaga tetap aktif, Hotelier Tools membuat tugas ini untuk Anda.
4. Pastikan orang yang tepat menerima emailnya: **Settings > Notifications** (`/settings/notifications`). Jika tidak ada alamat di sana, email dikirim ke alamat kontak pemilik.
5. Saat email masuk, cari reservasinya di extranet, buat di Little Hotelier atau tutup kamar pada malam-malam itu, lalu perbaiki penyebabnya seperti di atas.

Setiap kali berjalan, pengecekan membaca reservasi yang dibuat hari ini dan kedatangan dalam 14 hari ke depan, serta reservasi di Little Hotelier. Reservasi Expedia dicocokkan berdasarkan kode konfirmasinya (`EXP-` plus nomornya), kode yang sama yang disimpan Little Hotelier.

### Satu peringatan per reservasi, bukan setiap 15 menit

Pengiriman biasanya butuh beberapa menit, jadi satu kali pembacaan tidak pernah cukup. Setiap reservasi yang hilang masuk ke sebuah catatan:

- **Diperingatkan setelah 30 menit, terlihat hilang dalam setidaknya dua kali pembacaan.** Artinya sekitar 30 sampai 45 menit setelah reservasi dibuat.
- **Diberi tahu sekali.** Email "diklaim" sebelum dikirim, jadi dua eksekusi tidak bisa sama-sama mengirimnya. Jika email tidak sampai ke siapa pun, klaimnya dilepas dan eksekusi berikutnya mencoba lagi.
- **Diberi tahu lagi saat sudah beres.** Saat reservasi muncul di Little Hotelier, atau OTA membatalkannya, atau masa inapnya sudah lewat, Anda menerima satu email "no longer missing".
- **Tidak ada "semua aman" palsu.** Jika suatu daftar tidak bisa dibaca sepenuhnya, eksekusi gagal dan menyatakannya. Tidak ada yang dihitung sebagai sudah dicek.

Pengecekan Expedia juga mencatat ketidakcocokan status dan tanggal (misalnya dibatalkan di Expedia tetapi masih aktif di Little Hotelier) serta reservasi tanpa kamar. Semua ini muncul di ringkasan eksekusi di **Run History** (`/cron-logs`).

::screenshot{src="/images/blog/demo/en/ota-missing-calendar-double-booked.webp" alt="Kalender reservasi Hotelier Tools dari 4 sampai 17 November 2026: kamar dikelompokkan per tipe dengan reservasi confirmed dan checked-in sebagai bar, baris No room yet, kamar 104 ditutup untuk perbaikan, dan legenda dengan Checked in, Checked out, Confirmed, Double booked, dan Room closed" caption="Kalender menandai dua reservasi di kamar yang sama sebagai Double booked, jadi overbooking yang sudah terjadi mudah terlihat." path="/reservations/calendar"}
::

### Booking.com: peringatan insiden berfungsi, pengecekan per reservasi belum selesai

Sebelum membaca extranet, pengecekan Booking.com membaca halaman status publik Booking.com. Insiden pada API reservasinya dikirim lewat email sekali saat dimulai dan sekali saat selesai, bahkan jika sesi extranet Anda sedang terputus. Justru saat itulah tidak ada orang lain yang akan menyadarinya.

Perbandingan per reservasi untuk Booking.com **belum berfungsi**. Extranet menampilkan daftar reservasinya dengan skrip, jadi halaman yang diterima Hotelier Tools berisi tabel tanpa baris. Daripada melaporkan "semua aman" untuk reservasi yang tidak pernah terlihat, pengecekan ini sengaja gagal dengan jelas di setiap eksekusi sampai daftar itu bisa dibaca. Untuk saat ini, peringatan per reservasi berfungsi untuk Expedia, dan Booking.com memberi Anda peringatan insiden.

### Yang tidak pernah dilakukannya

- **Hanya membaca** di semua sisi. Pengecekan ini tidak pernah membuat, mengubah, atau menutup reservasi, dan tidak pernah menutup kamar untuk Anda.
- **Hanya dua OTA.** Airbnb, Hostelworld, dan lainnya tidak dicek.
- **Bukan pengganti mapping.** Jika tarif belum di-mapping, Anda tetap harus memperbaikinya di Little Hotelier.

## Email yang lebih sedikit dan lebih berguna dari pengecekan lainnya

Aturan yang sama berlaku di peringatan Hotelier Tools lainnya. Di **Automated Checks** (`/automated-checks`), atur **Send email on** sebuah tugas ke **Only with new or changed issues**: laporan hanya berisi masalah yang belum disebut laporan sebelumnya, atau yang berubah. Dan saat seseorang menandai issue sebagai selesai di **Issues** (`/automated-checks/issues`), issue itu tetap selesai selama pengecekan terus menemukan hal yang sama. Masalah yang berbeda membuka issue baru.

::screenshot{src="/images/blog/demo/en/ota-missing-checks-issues.webp" alt="Halaman Issues di Hotelier Tools: pengantar empat langkah (pengecekan menemukan masalah, masalah didaftar per reservasi, Anda memperbaikinya di Little Hotelier, Verify mengeceknya ulang), penghitung 21 terbuka, 5 selesai, dan total 26, filter, serta kesalahan do-not-rebook pada satu reservasi dengan tombol Verify" caption="Masalah yang ditemukan pengecekan terjadwal, dikelompokkan per reservasi. Status Resolved yang diberikan seseorang bertahan sampai ada yang berubah." path="/automated-checks/issues"}
::

::demo-cta{path="/reservations/calendar"}
::

Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027. Semua pengecekan ada di [halaman Automated checks](/tools/bot/automated-checks).

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh Booking.com, Expedia, SiteMinder, maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier dan login extranet hotel Anda sendiri.
::

Lihat juga: [checklist harian front desk](/blog/hotel-front-desk-checklist-automation), [kalender reservasi Little Hotelier](/blog/little-hotelier-reservation-calendar), [tautan pembayaran Little Hotelier](/blog/little-hotelier-payment-links).

## Ringkasan

- Reservasi OTA yang hilang biasanya berarti tarif belum di-mapping atau dinonaktifkan, kode properti salah, atau pengiriman gagal.
- Cek **My apps > Channel Manager > Reservations**: **FAILED** bisa dikirim ulang dengan **Resend PMS message**; **tanpa status** berarti tarifnya belum di-mapping.
- Lindungi kamar lebih dulu: tambahkan reservasinya secara manual di **Front Desk > Calendar**, lalu perbaiki penyebabnya.
- Hotelier Tools membandingkan Expedia dengan Little Hotelier setiap 15 menit dan mengirim email untuk setiap reservasi yang hilang sekali saja, ditambah insiden reservasi Booking.com. Pengecekan per reservasi untuk Booking.com belum selesai.
