---
title: "Kode promo Little Hotelier: cara membuat, membagikan, dan mengontrolnya di booking engine Anda"
seoTitle: "Kode promo Little Hotelier: buat, bagikan, dan kontrol"
description: "Buat kode promo di booking engine Little Hotelier, bagikan sebagai tautan, atur tanggal dan minimum stay, dan hindari kode yang menjatuhkan harga Anda."
date: 2026-10-26
category: pricing
tags: [kode promo, booking engine, reservasi langsung, little hotelier, diskon, harga]
keywords: [kode promo little hotelier, cara membuat kode promo little hotelier, promotion code booking engine little hotelier, kode promo reservasi langsung hotel, kode promo hotel minimum stay, link kode promo booking engine, thebookingbutton promotion code, kode diskon hotel booking langsung]
feature: dynamic-pricing
demoPath: /pricing/promo-codes
cover: /images/blog/demo/en/promo-codes-list.webp
coverAlt: "Halaman Promo codes di Hotelier Tools: tombol Read from the booking engine dan New code, lalu kode DEMOSOL dan banco, keduanya Active, masing-masing dengan ringkasan dalam bahasa sederhana, contoh harga untuk satu ranjang dorm pada 6 November, reservasi dalam 90 hari terakhir, peringatan, serta tombol Edit, Pause, dan hapus"
faq:
  - q: "Di mana kode promo di Little Hotelier?"
    a: "Di pengaturan booking engine, bukan di front desk. Di versi terbaru, buka Direct booking > Promotion codes. Di versi klasik, buka My Apps > Direct booking, buka tab Setup, lalu klik ubin Promotion Codes."
  - q: "Bisakah kode promo Little Hotelier mensyaratkan minimum stay?"
    a: "Tidak pada kodenya sendiri. Buat room rate dengan minimum stay yang Anda inginkan, tautkan kodenya ke rate itu, lalu di tab Promotions pada rate tersebut pilih untuk menampilkannya hanya saat kode promo yang tertaut dimasukkan."
  - q: "Bisakah saya membatasi berapa kali kode promo dipakai?"
    a: "Tidak. Kode promo Little Hotelier tidak punya batas pemakaian dan tidak bisa dibatasi untuk tamu pertama kali. Gunakan tanggal pemesanan agar setiap kode punya akhir, dan ganti kode secara rutin."
  - q: "Apakah kode promo Little Hotelier berlaku di Booking.com atau Expedia?"
    a: "Tidak. Kode ini hanya berlaku di booking engine Anda sendiri. Setiap channel punya promosinya sendiri, yang diatur di extranet masing-masing. Kode yang Anda sebarkan luas bisa dianggap harga publik untuk paritas tarif, jadi periksa kontrak channel Anda."
  - q: "Bagaimana cara menjeda kode promo tanpa menghapusnya?"
    a: "Booking engine tidak punya tombol aktif/nonaktif untuk kode. Ubah tanggal pemesanannya agar berakhir kemarin. Pause di Hotelier Tools melakukan persis itu dan menyimpan tanggal lama, sehingga Resume mengembalikan kode seperti semula."
  - q: "Apakah Hotelier Tools bagian dari Little Hotelier?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier hotel Anda sendiri dan hanya mengubah kode saat staf menekan tombolnya."
---

Kode promo Little Hotelier ada di booking engine-nya. Buka **Direct booking** > **Promotion codes** (versi klasik: **My Apps** > **Direct booking** > **Setup** > **Promotion Codes**), buat kode, atur diskon, tanggal pemesanan dan tanggal menginap, lalu tautkan room rate yang berlaku. Bagikan sebagai tautan dengan `?promotion_code=YOURCODE`. Hotelier Tools menambahkan halaman yang menjelaskan setiap kode dalam satu kalimat dan memberi peringatan saat kode menjatuhkan harga di bawah harga minimum Anda atau bertumpuk dengan diskon lain. Anda bisa menjeda kode dan melanjutkannya nanti.

## Di mana kode promo di Little Hotelier?

Kode promo adalah bagian dari booking engine di situs web Anda (direct-book.com), yang dibangun di atas TheBookingButton. Kode ini tidak mengubah tarif Anda di front desk atau di channel mana pun.

- **Versi terbaru:** **Direct booking** > **Promotion codes** ([pusat bantuan](https://help-platform.littlehotelier.com/en/articles/10911579-use-promo-codes-to-create-custom-links-for-your-booking-engine)).
- **Versi klasik:** **My Apps** > **Direct booking**, tab **Setup**, lalu ubin **Promotion Codes** ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes)).

Label di bawah ini diambil dari pusat bantuan Little Hotelier per November 2026.

## Cara membuat kode promo

1. Buka **Promotion Codes** dan klik **Create**.
2. Di **Code**, ketik kode yang akan dimasukkan tamu. Tanpa spasi, dan setiap kode harus unik.
3. Di **Description**, tulis teks yang dilihat tamu di booking engine.
4. Di **Default rate discount**, pilih persentase atau nominal, lalu ketik nilainya.
5. Atur **Available From/To**: tanggal di mana tamu bisa **memesan** dengan kode itu.
6. Atur **Applicable From/To**: malam-malam di mana tamu bisa **menginap** dengan kode itu.
7. Jika mau, centang **Hide Promo Code in reservation summary**.
8. Pilih room rate yang berlaku untuk kode itu. Sebuah rate bisa punya diskonnya sendiri, yang menggantikan diskon default.
9. Klik **Save**.

Sumber: [Set up and manage promotion codes](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes).

Ada dua pengaturan yang sering mengejutkan. Secara default, kode yang valid **menyembunyikan semua tarif publik Anda**, jadi tamu hanya melihat rate yang tertaut ke kode itu. Untuk mengubahnya, hapus centang **Hide public rates when a Promo Code is applied** di **Setup** > **Properties** > **Customisation**. Dan kolom **Add Promo Code** selalu terlihat di booking engine.

## Cara membagikan kode promo sebagai tautan

Tamu sering lupa mengetik kode. Kirim tautan yang menerapkan kode itu untuk mereka. Di **Promotion codes**, buka kodenya dan klik **Promotion code link** untuk menyalinnya ([pusat bantuan](https://help-platform.littlehotelier.com/en/articles/10911579-use-promo-codes-to-create-custom-links-for-your-booking-engine)). Formatnya:

- Eropa, Timur Tengah, Afrika, dan Amerika: `https://direct-book.com/properties/yourproperty?promotion_code=YOURCODE`
- Asia Pasifik: `https://book-directonline.com/properties/yourproperty?promotion_code=YOURCODE`

**Kode 0%** juga berguna: tautkan ke rate satu tipe kamar, dan tautannya hanya menampilkan tipe kamar itu (dengan tarif publik disembunyikan).

## Minimum stay, batas pemakaian, dan tamu pertama kali

Jawaban Little Hotelier sendiri, per November 2026 ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes)):

- **Minimum stay:** kode tidak punya minimum stay. Buat room rate dengan, misalnya, minimum dua malam, tautkan kodenya ke rate itu, lalu di tab **Promotions** pada rate tersebut pilih "Show only when a linked promotional code is entered".
- **Batas pemakaian:** tidak ada batas berapa kali kode dipakai. Beri tanggal berakhir dan ganti kode secara rutin.
- **Tamu pertama kali:** booking engine tidak bisa tahu apakah tamu pernah memesan sebelumnya.
- **Penawaran publik:** untuk diskon yang dilihat semua orang, Little Hotelier menyarankan dynamic discount atau rate multiplier untuk Direct booking, bukan kode.

## Praktik yang baik untuk kode promo

- **Selalu tetapkan akhir.** Kode tanpa tanggal pemesanan berlaku selamanya, dan kode lama beredar di situs kupon.
- **Pisahkan tanggal pemesanan dan tanggal menginap.** "Pesan minggu ini untuk menginap di bulan Januari" adalah dua periode, bukan satu.
- **Ketahui batas bawah Anda.** Kode 15% pada rate yang sudah didiskon bisa turun di bawah pendapatan minimum sebuah kamar. Periksa malam termurah, bukan rata-ratanya.
- **Waspadai diskon bertumpuk.** Kode memotong rate yang ditampilkan booking engine. Jika tarif web Anda sudah lebih rendah dari tarif front desk, tamu mendapat kedua diskon itu.
- **Satu kode, satu tujuan.** Kode per kampanye atau per mitra memberi tahu Anda mana yang mendatangkan reservasi.
- **Perhatikan paritas.** Kode yang bisa ditemukan siapa saja berfungsi seperti harga publik. Kelompok tertutup (newsletter, tamu yang kembali, perusahaan lokal) lebih aman. Periksa kontrak channel Anda.
- **Kode hanya untuk reservasi langsung.** Kode tidak sampai ke Booking.com atau Expedia, yang punya promosinya sendiri.

## Cara yang lebih cepat: setiap kode dijelaskan, diperiksa, dan dijeda di Hotelier Tools

Hotelier Tools membaca kode-kode di booking engine Anda dan menampilkannya dalam bahasa sederhana di **Promo codes** (`/pricing/promo-codes`), di bawah Pricing. Halaman ini baru (Oktober 2026). Membaca kode adalah bagian yang sudah diuji; membuat dan mengedit kode dari Hotelier Tools belum diperiksa pada booking engine yang aktif, itulah sebabnya setiap perubahan dibaca ulang dan ditampilkan sebagai terkonfirmasi atau tidak.

1. Buka **Promo codes** dan tekan **Read from the booking engine**. Membuka halaman tidak pernah membaca apa pun; tombol itulah yang membaca.
2. Setiap kode menampilkan statusnya (**Active**, **Scheduled**, **Paused**, **Expired**, atau **Does nothing**), ringkasan satu baris seperti "10% off the room price (not the extra-guest supplement) on 8 rates. Any booking date. Any stay date.", contoh harga, dan berapa reservasi yang memakainya dalam 90 hari terakhir.
3. Baca peringatan di bawah setiap kode, lalu gunakan **Edit**, **Pause**, **Resume**, atau tombol hapus.

::screenshot{src="/images/blog/demo/en/promo-codes-list.webp" alt="Halaman Promo codes: kode DEMOSOL, Active dan Used for quotes and links, diskon 10% pada 8 rate dengan contoh harga dari 27,09 menjadi 24,38 euro dan 14 reservasi dalam 90 hari terakhir, tiga peringatan di bawahnya; lalu kode banco, Active, diskon 15% pada 1 rate yang tersembunyi tanpa kode" caption="Setiap kode dalam satu kalimat, dengan dampaknya pada harga nyata dan masalah yang ditimbulkannya." path="/pricing/promo-codes"}
::

### Buat atau edit kode dengan pratinjau

Tekan **New code**. Isi **Code** (3 sampai 40 huruf, angka, - atau _; huruf besar atau kecil tidak berpengaruh), **Discount** (**% off the rate**, hingga 90%, atau **Amount off the rate**), **Description**, **Booking dates**, **Stay dates**, dan **Rates it applies to** (**Select all public rates** mencentang rate yang biasa). **What this code will do** menampilkan hasilnya sebelum Anda menekan **Create in TheBookingButton**.

::screenshot{src="/images/blog/demo/en/promo-codes-new-code.webp" alt="Dialog New promo code: kode AUTUMN26, diskon 10 dengan % off the rate, deskripsi kosong, Show the discount in the booking summary tidak dicentang, Booking dates dan Stay dates kosong, Rates it applies to dengan Tarifa Flexible dan No reembolsable untuk Doble Estándar dicentang, dan What this code will do: 10% off the room price (not the extra-guest supplement) on 2 rates. Any booking date. Any stay date." caption="Tanggal pemesanan dan tanggal menginap terpisah, dan pratinjau menjelaskan apa yang akan dilakukan kode sebelum apa pun disimpan." path="/pricing/promo-codes"}
::

Setiap perubahan diperiksa seperti ini:

- Kode dibaca ulang sebelum perubahan. Jika ada yang mengubahnya di booking engine sementara itu, Anda diminta membacanya lagi.
- Perubahan dikirim sekali, lalu dibaca kembali. Hasilnya **Confirmed**, **Differs**, atau **Unknown**. Hasil yang tidak diketahui tidak pernah dikirim ulang secara otomatis: tekan **Read again** di **Recent changes**.
- Membuat, mengubah, menjeda, dan menghapus memerlukan izin **Publish prices**, karena kode langsung sampai ke tamu. Menghapus meminta Anda mengetik kodenya.

### Peringatan yang menghemat uang

| Peringatan | Artinya |
|---|---|
| Di bawah harga minimum Anda | Dengan diskon, beberapa malam dalam 90 hari ke depan turun di bawah batas bawah Anda |
| Bertumpuk dengan diskon yang Anda terapkan | Tarif Anda sudah ditulis di bawah rekomendasi; dengan kode, tamu web membayar dengan kedua potongan itu |
| Menyembunyikan tarif publik Anda | Kode membuka rate khusus kode, dan tamu yang memakainya hanya melihat rate itu |
| Tidak berfungsi | Tidak ada rate yang tertaut: kode diterima dan tamu melihat harga normal |
| Kode sama, huruf besar berbeda | Booking engine tidak membedakan `SUMMER` dan `summer` |
| Kode publik | Penawaran harga dan tautan pemesanan Anda memakainya, jadi paritas tarif Booking.com bisa memperhitungkannya |
| Diubah di luar aplikasi ini | Seseorang mengeditnya di TheBookingButton sejak pembacaan terakhir |

Jika layar promosi milik Little Hotelier sendiri (sistem terpisah) berisi promosi, halaman ini juga memberi tahu bahwa situs web Anda tidak memakainya.

### Jeda dan lanjutkan

Booking engine tidak punya tombol aktif/nonaktif untuk kode. **Pause** mengatur tanggal pemesanan kode agar berakhir kemarin dan menyimpan tanggal lama. Diskon, rate, dan tanggal menginap tetap seperti semula, dan reservasi yang sudah dibuat tetap dengan harganya. **Resume** mengembalikan tanggal yang disimpan. Jika kode membuka rate yang hanya bisa dipesan dengan kode, dialog jeda memperingatkan bahwa rate tersebut tidak bisa dipesan lagi.

### Dibaca setiap hari, dan tanyakan dengan bahasa sehari-hari

Tugas terjadwal, **Read the codes every day** (pukul 06.40 secara default, dibuat otomatis sejak November 2026), menjaga halaman dan asisten tetap mutakhir. Tugas ini hanya membaca.

Di chat AI (beta), tanyakan "Kode mana yang aktif?" atau "Apa yang terjadi jika WEB memberi 18%?": asisten menjawab dari kode-kode itu dan menampilkan pratinjau perubahan tanpa menulisnya. Untuk mengubah kode, asisten menampilkan kartu persetujuan, dan tidak ada yang terjadi sampai Anda menyetujuinya. Developer mendapat aksi yang sama lewat REST API (`/api/v1/pricing/promo-codes`) dan MCP. Agen browser yang memakai WebMCP hanya bisa mengusulkan: mereka membuka formulir yang sudah terisi, dan staf yang menekan tombolnya.

### Lihat harga jual web Anda yang sebenarnya

Ada dua tempat lain yang memakai kode Anda:

- **Pricing settings** > **Channels & discounts** (`/pricing/settings/channels`), kartu **What your web really sells at**: **Check the web** membaca halaman pemesanan Anda untuk 30 malam ke depan, dengan dan tanpa kode Anda, lalu membandingkannya dengan tarif front desk dan harga yang dibayar tamu Booking.com. Kartu ini merekomendasikan diskon web umum.
- **New reservation** (`/reservations/new`) menampilkan harga masa inap yang sama di web Anda, di web Anda dengan kode, dan perkiraan untuk Booking.com, di samping tarif yang Anda pakai untuk memesan.

Atur kode yang dipakai penawaran harga dan tautan pemesanan Anda di **Direct-booking promo code** pada kartu properti.

::demo-cta{path="/pricing/promo-codes"}
::

**Belum dibuat:** email saat kode diubah di luar Hotelier Tools (halaman menampilkannya pada pembacaan berikutnya), dan batasan yang tidak dimiliki booking engine itu sendiri, seperti batas pemakaian.

Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027. Bagian lain dari mesin harga ada di [halaman Dynamic pricing](/tools/bot/dynamic-pricing).

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier hotel Anda sendiri, dan kode-kodenya tetap berada di booking engine Anda sendiri.
::

Lihat juga: [dynamic pricing untuk hotel kecil di Little Hotelier](/blog/dynamic-pricing-little-hotelier), [komisi Booking.com](/blog/booking-com-commission), [CTA, CTD, minimum stay, dan stop sell](/blog/little-hotelier-cta-ctd-stop-sell).

## Ringkasan

- Kode promo Little Hotelier adalah pengaturan booking engine: **Direct booking** > **Promotion codes**.
- Setiap kode punya diskon, tanggal pemesanan, tanggal menginap, dan rate yang tertaut. Secara default, kode menyembunyikan tarif publik Anda.
- Bagikan kode sebagai tautan dengan `?promotion_code=`. Untuk minimum stay, tautkan kode ke rate khusus kode dengan minimum tersebut.
- Beri setiap kode tanggal berakhir, periksa terhadap batas bawah Anda, dan ingat bahwa kode tidak sampai ke OTA.
- Hotelier Tools menjelaskan setiap kode dalam satu kalimat, memberi peringatan soal batas bawah, diskon bertumpuk, dan paritas, serta memungkinkan Anda menjeda dan melanjutkan kode tanpa kehilangan pengaturannya.
