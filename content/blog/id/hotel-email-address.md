---
title: "Alamat email hotel untuk invoice pemasok dan login portal: cara kerja alamat khusus penerima"
seoTitle: "Alamat email hotel untuk invoice pemasok dan login portal"
description: "Beri hotel Anda alamat privat khusus penerima untuk invoice pemasok, dan satu per login portal. Tanpa kata sandi IMAP, tidak ada yang dibagi antarhotel."
date: 2026-11-01
category: operations
tags: [email, invoice pemasok, little hotelier, booking.com, expedia, keamanan]
keywords: [alamat email hotel untuk invoice, email khusus invoice pemasok, email untuk tagihan pemasok hotel, alamat email hanya menerima, email terpisah untuk user little hotelier, email untuk user extranet booking.com, teruskan invoice ke email akuntansi, inbox invoice hotel]
feature: dashboard
demoPath: /credentials
cover: /images/blog/demo/en/supplier-invoices-mailbox-settings.webp
coverAlt: "Pengaturan Received invoices: kartu Suggestions dengan Suggest invoices that have not arrived aktif dan riwayat 24 bulan, serta kartu Mailboxes dengan reservas@example.com terhubung, Read for invoices aktif, INBOX sebagai folder yang dibaca, pemindaian pertama 120 hari ke belakang, dan daftar Never read mail from serta Always read mail from yang kosong"
faq:
  - q: "Apa itu alamat email khusus penerima untuk hotel?"
    a: "Alamat yang hanya menerima email dan tidak pernah mengirim. Di Hotelier Tools setiap properti bisa punya alamat sendiri, misalnya inv-7k2m9qx4hp@in.hotelier.tools untuk invoice pemasok. Yang masuk ke sana langsung tiba di akun properti itu, tanpa kata sandi IMAP atau login Microsoft."
  - q: "Bisakah hotel lain melihat apa yang dikirim ke alamat saya?"
    a: "Tidak. Setiap alamat dan setiap login hanya milik satu properti. Alamatnya terdiri dari karakter acak, jadi tidak menyebut nama hotel Anda, dan tidak ada yang bisa menebak alamat Anda yang lain dari situ."
  - q: "Apakah in.hotelier.tools akan menjadi login Little Hotelier atau Booking.com saya?"
    a: "Tidak. Domain Hotelier Tools tidak pernah menjadi login utama atau email pemulihan Anda di mana pun. Login layanan adalah pengguna tambahan yang Anda tambahkan ke extranet Anda sendiri, dan bisa Anda hapus kapan saja."
  - q: "Apa yang terjadi pada email yang dikirim ke alamat yang tidak ada?"
    a: "Email itu dibuang diam-diam, tanpa bounce. Dengan begitu, tidak ada yang bisa menguji alamat mana yang benar-benar ada. Email ke alamat invoice yang sudah dipensiunkan tetap diterima selama 30 hari, lalu ikut dibuang."
  - q: "Apakah ada batas jumlah email yang bisa diterima sebuah alamat?"
    a: "Ada. Setiap properti bisa menerima 100 pesan per bulan di server email Hotelier Tools. Jika melebihi batas, pesan disimpan dan diproses saat bulan berganti atau saat support menaikkan batasnya. Kotak masuk Anda sendiri yang terhubung tidak pernah dihitung."
  - q: "Apakah Hotelier Tools bagian dari Little Hotelier, Booking.com, atau Expedia?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh SiteMinder, Little Hotelier, Booking.com, maupun Expedia. Layanan ini terhubung memakai login hotel Anda sendiri."
---

Hotelier Tools memberi setiap properti alamat email khusus penerima pada domain `in.hotelier.tools`. Satu alamat untuk invoice pemasok: pemasok mengirim PDF, foto, dan e-invoice mereka ke sana, dan masing-masing menunggu di **Received invoices** untuk Anda periksa. Tanpa kata sandi IMAP atau login Microsoft. Alamat lainnya satu per portal (Little Hotelier, Booking.com, Expedia), untuk login khusus "Hotelier Tools sebagai pengguna". Per November 2026, undangan yang masuk ke alamat-alamat itu disimpan untuk ditangani manusia, tidak diterima otomatis.

## Apa itu alamat email hotel khusus penerima?

Alamat yang menerima email dan tidak pernah mengirim. Bentuknya seperti ini:

```text
inv-7k2m9qx4hp@in.hotelier.tools
```

- **Bagian pertama menunjukkan fungsinya.** `inv` untuk invoice pemasok; `lh`, `bk`, dan `ex` untuk login Little Hotelier, Booking.com, dan Expedia. Kode itulah yang menentukan ke mana pesan diarahkan. Pengirim dan isi pesan tidak pernah menentukannya.
- **Sisanya acak.** Sepuluh karakter, tanpa `0/o` atau `1/l/i` yang mudah salah baca. Alamat ini tidak memuat nama atau ID hotel Anda: hanya database Hotelier Tools yang tahu milik properti mana.
- **Setiap fungsi punya token sendiri.** Jika pemasok tahu alamat invoice Anda, itu tidak memberi tahu apa pun tentang alamat login Anda.
- **Tidak ada yang dikirim darinya.** Domain ini memublikasikan aturan bahwa tidak ada server yang boleh mengirim email atas namanya, jadi tidak ada yang bisa mengirim dari alamat Anda.

## Mengapa tidak memakai kotak masuk hotel sendiri?

Bisa saja, dan banyak hotel memulai dari situ. Praktik terbaik yang umum adalah alamat terpisah khusus invoice (misalnya `invoices@hotelanda.com`) dan aturan penerusan, agar email pemasok tidak tenggelam di antara email reservasi:

- **Gmail:** **Setelan > Lihat semua setelan > Penerusan dan POP/IMAP**, tambahkan dan verifikasi alamatnya, lalu buat filter yang hanya meneruskan email yang cocok ([bantuan Google](https://support.google.com/mail/answer/10957)).
- **Outlook:** buat aturan yang meneruskan pesan dari pemasok Anda ([dukungan Microsoft](https://support.microsoft.com/office/45aa9664-4911-4f96-9663-ece42816d746)).

Masalahnya ada di langkah berikutnya. Agar software bisa membaca kotak masuk itu, Anda memberinya kata sandi IMAP atau menyetujui login Microsoft atau Google, dan software itu lalu bisa melihat seluruh kotak masuk. Alamat khusus penerima membalik hal itu: pemasok mengirim ke alamat yang hanya menerima invoice, dan tidak ada apa pun di kotak masuk Anda sendiri yang dibuka.

Hotelier Tools mendukung keduanya. Jika Anda lebih suka menyimpan semuanya di kotak masuk sendiri, hubungkan di **Messaging > Channels** dan aktifkan di **Settings > Received invoices**. Aksesnya hanya-baca: tidak ada yang ditandai sudah dibaca, dipindahkan, atau dihapus (lihat [mengumpulkan invoice pemasok lewat email](/blog/supplier-invoices-by-email)).

::screenshot{src="/images/blog/demo/en/supplier-invoices-mailbox-settings.webp" alt="Pengaturan Received invoices: kartu Suggestions dengan Suggest invoices that have not arrived aktif dan riwayat 24 bulan, serta kartu Mailboxes dengan reservas@example.com terhubung, Read for invoices aktif, INBOX sebagai folder yang dibaca, pemindaian pertama 120 hari ke belakang, dan daftar Never read mail from serta Always read mail from yang kosong" caption="Jalur lainnya: kotak masuk Anda sendiri yang terhubung, dibaca hanya untuk invoice. Alamat invoice sama sekali tidak butuh kotak masuk." path="/settings/received-invoices"}
::

## Apakah ada yang dibagi antarhotel?

Tidak. Setiap alamat dan setiap login hanya milik satu properti:

- Tidak ada login Hotelier Tools yang bisa melihat extranet dua hotel. Satu login yang dicuri atau satu akun yang diblokir hanya memengaruhi satu hotel.
- **Domain kami tidak pernah menjadi login utama atau email pemulihan Anda di mana pun.** Jika email kami suatu saat dibobol, atau Anda berhenti memakai Hotelier Tools, Anda tidak kehilangan akses ke extranet Anda sendiri.
- Setiap server (deployment) punya domain dan kotak masuknya sendiri. Email tidak pernah dipindahkan dari database satu server ke server lain.

## Cara mengatur alamat invoice pemasok

1. Buka **Settings > Received invoices** (`/settings/received-invoices`) dan cari kartu **Invoice address**.
2. Tekan **Create the address**. Anda mendapat satu alamat untuk properti itu, terdiri dari karakter acak.
3. Tekan **Copy** dan kirim ke pemasok Anda: "Mohon kirim invoice Anda ke alamat ini." Daftar **Received invoices** (`/received-invoices`) menampilkan alamat yang sama di bawah **Suppliers can email invoices to**.
4. Pastikan tugas **Read the hotel mailbox** aktif. Tugas ini mengambil apa yang masuk ke alamat itu; setiap 5 menit adalah jadwal yang disarankan.
5. Pantau **Recent mail** di kartu yang sama: setiap pesan menampilkan pengirim, file-nya, dan apa yang terjadi padanya.

Anda juga bisa meneruskan invoice yang sudah Anda punya ke alamat itu. Hotelier Tools mengarahkan pesan berdasarkan alamat tujuan pengiriman, jadi pesan yang diteruskan atau dikirim lewat BCC tetap sampai ke properti yang benar. Jika Anda menyimpan email sebagai file, **Add an email by hand** menerima file `.eml` dan menjalankan pemeriksaan yang sama.

Butuh alamat baru, misalnya setelah gelombang spam? Tekan **New address**. Alamat lama tetap menerima selama 30 hari, dengan catatan di setiap pesan bahwa pesan itu masuk ke alamat yang sudah dipensiunkan, lalu berhenti.

## Apa yang terjadi pada email yang dikirim ke alamat invoice?

Setiap pesan diperlakukan sebagai tidak tepercaya:

- **Pemeriksaan penipuan lebih dulu.** Pesan dengan skor risiko tinggi ditahan untuk manusia, tidak pernah diimpor, dan aslinya disimpan.
- **Pemeriksaan pengirim dilakukan oleh kami.** Apakah domain pengirim lolos pemeriksaan keasliannya (DMARC) dibaca dari header yang ditambahkan server email kami sendiri, bukan dari baris **From**. Pemasok yang gagal pemeriksaan ini mendapat peringatan yang harus dikonfirmasi manusia sebelum invoice bisa dikonfirmasi atau dibayar.
- **Lampiran melewati impor biasa.** PDF, foto (PNG, JPEG, WebP), dan e-invoice (Facturae, UBL, CII) ditambahkan ke **Received invoices**. Masing-masing dimulai sebagai **To review**: tidak ada yang dikonfirmasi atau dibayar dengan sendirinya.
- **Tidak pernah dua kali.** File yang sudah masuk lewat kotak masuk Anda sendiri, atau secara manual, dikenali dari isinya dan tidak ditambahkan lagi.
- **Ukuran dan paket.** Pesan lebih dari 25 MB tidak disimpan. Pada paket tanpa fitur invoice, email ke alamat itu disimpan dan ditahan, dan tidak ada yang dibaca oleh AI.

Email yang dikirim ke alamat yang tidak ada dibuang diam-diam, tanpa bounce. Tidak ada yang bisa menguji alamat mana yang asli.

## Login layanan: satu alamat per portal

Kegunaan kedua adalah login. Alih-alih memberikan kata sandi Little Hotelier, Booking.com, atau Expedia Anda sendiri kepada Hotelier Tools, Anda menambahkan pengguna baru ke extranet dengan alamat privat, dan pengguna itu adalah Hotelier Tools, khusus untuk properti Anda. Anda memilih izinnya dan bisa menghapusnya dengan satu klik.

| Portal | Alamat | Tempatnya |
|---|---|---|
| Little Hotelier | `lh-…@in.hotelier.tools` | `/credentials/hotelier-advanced` |
| Extranet Booking.com | `bk-…@in.hotelier.tools` | `/credentials/booking-extranet` |
| Expedia Partner Central | `ex-…@in.hotelier.tools` | `/credentials/expedia-extranet` |

Setiap halaman itu punya kartu seperti **Hotelier Tools as a user in Little Hotelier**: Anda memasukkan nomor properti dari portal tersebut, menekan **Get the login address**, lalu mengundang alamat itu di extranet Anda.

Agar jelas sejauh mana fitur ini, per November 2026:

- **Yang sudah otomatis:** alamatnya, pemeriksaan bahwa pesan benar-benar berasal dari domain portal itu sendiri, dan aturan keamanannya. Peringatan keamanan ("New sign-in", "Password changed") tidak pernah diklik: diteruskan ke pemilik properti. Reset kata sandi yang tidak diminta siapa pun tidak pernah diikuti, dan pemilik diberi tahu.
- **Yang saat ini dilakukan manusia:** belum ada undangan portal yang pernah ditangkap dan dibaca, jadi Hotelier Tools belum bisa menerimanya sendiri. Setiap pesan ke alamat login **ditahan untuk manusia**, dan kartunya menyebutkan hal itu. Sampai ini berubah, hubungkan dengan formulir di bagian bawah halaman yang sama. Untuk Little Hotelier, artinya menempelkan tautan aktivasi pengguna baru (lihat [cara menambahkan pengguna di Little Hotelier](/blog/add-user-little-hotelier)).

Setelah fitur ini dibangun, undangan hanya akan diterima jika ditujukan untuk nomor properti yang Anda daftarkan, sehingga alamat yang bocor tidak bisa menarik properti orang lain ke akun Anda.

Lebih suka alamat Anda sendiri? Opsi **Where the portal writes to this login** di kartu itu memungkinkan login memakai **Your own mailbox**, salah satu kotak masuk Anda yang terhubung. Hanya pesan yang dikirim portal yang dibaca. Gmail dan Microsoft 365 / Outlook bisa membuktikan bahwa pesan itu asli; dengan penyedia lain, setiap pesan portal ditahan untuk manusia.

## Di mana saya menemukan semua alamat saya?

**Credentials** (`/credentials`) diakhiri dengan **Hotel mailbox addresses**: alamat invoice dan tiga alamat login, masing-masing dengan statusnya (misalnya **Waiting for the invitation** atau **Active**) dan tautan **Open** ke halaman yang mengelolanya. Daftar ini hanya-baca.

Ada dua aturan visibilitas:

- Alamat login hanya ditampilkan kepada anggota tim Anda yang mengelola koneksi. Yang lain melihat statusnya, dengan keterangan "The address is shown only to people who manage connections".
- Alamat invoice ditampilkan kepada orang yang boleh melihat invoice yang diterima.

Jika server Anda belum punya domain email, bagian ini menyebutkannya sekali alih-alih menampilkan alamat kosong.

## Berapa banyak email yang bisa diterima setiap properti?

Setiap properti bisa menerima **100 pesan per bulan** di server email Hotelier Tools. Batas ini untuk melindungi server, bukan soal harga.

- Periksa di **Plan and billing** (`/subscriptions`), di bawah **Received mail**: jumlahnya, pesan yang menunggu, dan daftar bulan itu.
- **Jika melebihi batas**, pesan disimpan, tidak hilang. Pesan menunggu dan diproses otomatis, mulai dari yang terlama, saat bulan berganti atau batasnya dinaikkan. Pemilik menerima satu email pada bulan itu.
- **Butuh lebih?** Pakai **Contact support** di kartu yang sama.
- Email yang dibaca dari kotak masuk Anda sendiri yang terhubung dan file `.eml` yang Anda unggah tidak pernah dihitung.

## Tanya asisten

Alamat-alamat ini punya tool untuk asisten AI (`/chat`) dan untuk klien MCP seperti Claude:

- "Ke alamat mana pemasok mengirim invoice?" → `list_hotel_mail_addresses`
- "Apakah ada yang masuk ke alamat invoice minggu ini?" → `list_hotel_mail_messages`
- "Buat alamat baru untuk invoice pemasok" → `rotate_hotel_mail_address`, hanya setelah Anda menyetujui kartunya
- "Apakah pengguna Hotelier Tools sudah terhubung di Booking.com?" → `get_service_login`

Tidak ada tool yang pernah mengembalikan alamat login: alamat itu hanya ditampilkan kepada manusia di halaman koneksi. Menerima undangan juga tidak pernah menjadi tugas tool.

::demo-cta{path="/received-invoices"}
::

Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh SiteMinder, Little Hotelier, Booking.com, maupun Expedia. Layanan ini terhubung memakai login hotel Anda sendiri, dan alamatnya tidak pernah menggantikan login atau email pemulihan Anda sendiri.
::

Lihat juga: [invoice pemasok lewat email](/blog/supplier-invoices-by-email), [menambahkan pengguna di Little Hotelier](/blog/add-user-little-hotelier), [dashboard](/tools/bot/dashboard).

## Ringkasan

- Setiap properti mendapat alamat privat khusus penerima di `in.hotelier.tools`: `inv-…` untuk invoice pemasok dan satu per login portal.
- Invoice pemasok yang dikirim ke `inv-…` masuk ke **Received invoices** sebagai **To review**, setelah pemeriksaan penipuan, tanpa kata sandi IMAP.
- Tidak ada yang dibagi antarhotel, dan domain ini tidak pernah menjadi login atau email pemulihan Anda.
- Alamat login sudah ada sekarang, tetapi undangan ditahan untuk manusia sampai langkah penerimaan untuk setiap portal dibangun.
- 100 pesan per bulan per properti; semua alamat ada di bagian bawah `/credentials`.
