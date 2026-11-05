---
title: "Kalender reservasi yang lebih cepat untuk Little Hotelier: tape chart, harga, dan reservasi baru"
seoTitle: "Tape chart & kalender reservasi cepat untuk Little Hotelier"
description: "Cara kerja kalender Little Hotelier dan cara membuat reservasi di sana, lalu tape chart dengan harga per tipe kamar dan cara lebih cepat memesan masa inap."
date: 2026-10-24
category: operations
tags: [kalender, tape chart, reservasi, resepsionis, little hotelier]
keywords: [kalender little hotelier, cara membuat reservasi di little hotelier, tape chart little hotelier, tape chart hotel, harga di kalender little hotelier, reservasi manual little hotelier, kalender reservasi hotel kecil, kalender little hotelier di hp]
feature: dashboard
demoPath: /reservations/calendar
cover: /images/blog/demo/en/reservation-calendar-prices.webp
coverAlt: "Kalender reservasi Hotelier Tools untuk 14 malam mulai 4 November 2026: tipe kamar Doble Estándar, Doble Superior, Individual, dan Familiar 4 pax, masing-masing dengan baris Lowest rate berisi harga per malam seperti €63,47 dan €74,89, bar reservasi dengan ikon channel, tamu, dan pembayaran, penutupan kamar berarsir di kamar 104, jalur No room yet, dan legenda untuk tanda status, asal, dan pembayaran"
faq:
  - q: "Bagaimana cara membuat reservasi di Little Hotelier?"
    a: "Di Calendar klik +Reservation, atau di Reservations klik Create reservation. Pilih tanggal, tipe kamar, tarif, nomor kamar, dan jumlah tamu, isi kontak utama, lalu klik Save. Reservasi manual tidak mengirim email konfirmasi: tekan Email setelah menyimpan."
  - q: "Bisakah saya melihat harga di kalender Little Hotelier?"
    a: "Tidak di kalender Little Hotelier sendiri, yang menampilkan reservasi dan status pembayaran. Tarif ada di grid inventaris. Kalender Hotelier Tools bisa menambahkan satu baris per tipe kamar dengan tarif terendah saat ini untuk setiap malam, dan userscript gratis bisa menambahkan harga ke kalender Little Hotelier."
  - q: "Berapa hari yang bisa ditampilkan kalender Little Hotelier?"
    a: "14 atau 28 hari, dipilih dari menu drop-down. Kalender Hotelier Tools menampilkan berapa pun malam dari 1 sampai 92, dengan pilihan cepat 7, 14, 30, 60, dan 90."
  - q: "Bisakah saya memindahkan reservasi ke kamar lain dari Hotelier Tools?"
    a: "Tidak. Kalender Hotelier Tools hanya membaca. Memindahkan masa inap, mengubah tanggal, atau membatalkannya dilakukan di Little Hotelier, yang bisa Anda buka dari tautan Open in Little Hotelier pada reservasi itu."
  - q: "Apakah reservasi yang dibuat di Hotelier Tools mengirim email ke tamu?"
    a: "Tidak. Reservasi dibuat di Little Hotelier tanpa pembayaran tercatat dan tanpa email terkirim, sama seperti reservasi manual di sana. Kirim konfirmasi dari Little Hotelier dan catat pembayaran apa pun di reservasi."
  - q: "Apakah Hotelier Tools bagian dari Little Hotelier?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini membaca dan membuat reservasi memakai login Little Hotelier hotel Anda sendiri."
---

Kalender Little Hotelier menampilkan reservasi selama 14 atau 28 hari, dan Anda membuat reservasi dari sana dengan **+Reservation**. Kalender itu tidak menampilkan harga dan tidak bisa Anda atur tampilannya. Hotelier Tools menambahkan kalender kedua, yang dibaca dari Little Hotelier, dengan 1 sampai 92 malam, tarif terendah per tipe kamar di setiap malam, ikon channel dan pembayaran, serta tampilan tersimpan. Ada juga halaman **New reservation** yang menghitung harga masa inap, memeriksa ketersediaan dan duplikat, lalu memesannya ke Little Hotelier.

Fitur Little Hotelier di bawah ini diperiksa terhadap pusat bantuannya per November 2026.

## Bagaimana cara kerja kalender Little Hotelier?

Di platform yang lebih baru ([Getting started with Calendar](https://help-platform.littlehotelier.com/en/articles/10397723-getting-started-with-calendar)):

- **Panjang tampilan:** menu drop-down beralih antara **14 atau 28 hari**. **View today** kembali ke hari ini, dan pemilih tanggal melompat ke depan.
- **Berpindah:** di tampilan 14 hari, `<` bergeser satu hari, `<<` tujuh, dan `<<<` empat belas. Di tampilan 28 hari, `<<<` bergeser 28.
- **Warna:** oranye atau kuning untuk terkonfirmasi, hijau untuk sudah check-in, abu-abu untuk sudah check-out, biru muda untuk belum dialokasikan, merah tua untuk penutupan kamar, dan bar pudar untuk pembayaran yang belum lengkap. Garis di tepi kiri menunjukkan lunas (hijau) atau belum lunas (merah).
- **Seret dan lepas:** seret reservasi ke kamar, tipe kamar, atau tanggal lain, atau seret ujungnya untuk memperpanjang. Reservasi dari channel tidak bisa diperpanjang dengan cara ini.
- **Baris Unallocated:** reservasi terkonfirmasi yang belum punya kamar fisik. Seret ke kamar yang kosong.

Versi classic bekerja dengan cara yang sama ([Overview of the front desk calendar](https://helpcentre.littlehotelier.com/en/articles/8673713-overview-of-the-front-desk-calendar)).

## Cara membuat reservasi di Little Hotelier

Reservasi manual dipakai untuk tamu walk-in, permintaan lewat telepon dan email, serta agen perjalanan ([Create a manual reservation](https://help-platform.littlehotelier.com/en/articles/13933574-create-a-manual-reservation-in-little-hotelier)):

1. Muat ulang halaman dan klik **View Today**, agar Anda melihat ketersediaan terkini.
2. Di **Calendar**, klik **+Reservation** (atau seret melintasi malam-malam sebuah kamar). Di **Reservations**, klik **Create reservation**.
3. Pilih tanggal check-in dan check-out, **Room type**, dan **Room rate**. Untuk harga khusus, kosongkan tarif dan ketik totalnya di kolom **Room**.
4. Pilih **Room number**. Jika dikosongkan, reservasi menunggu di baris **Unallocated**.
5. Masukkan **Adults**, **Children**, dan **Infants**, serta **Discount** jika ada.
6. Isi **Primary contact** dan **Guest comments** jika ada, lalu klik **Save**.

Tiga hal yang sering terlewat:

- **Tidak ada email konfirmasi yang dikirim** untuk reservasi manual. Tekan **Email** setelah menyimpan.
- **Kamar tambahan:** **+Add another room** memasukkannya ke satu invoice. Semuanya memakai tanggal yang sama.
- **Pembayaran:** **Record payment** untuk tunai atau mesin EDC eksternal, atau tab **Payments** untuk menagih kartu.

Akun classic mengikuti [Create a reservation](https://helpcentre.littlehotelier.com/en/articles/8673932-create-a-reservation).

## Mengapa memakai kalender kedua?

Kalender Little Hotelier adalah tempat Anda memindahkan reservasi. Kalender kedua membantu saat Anda lebih banyak melihat: harga di samping kamar saat tamu menelepon, lebih dari 28 hari sekaligus, tata letak Anda sendiri, dan chart yang bisa dibaca di ponsel.

Jika Anda hanya butuh harga di dalam Little Hotelier, userscript gratis [Prices Display](/tools/ui/prices-display) menambahkannya ke kalender di sana.

## Cara yang lebih cepat: meja reservasi di Hotelier Tools

Meja reservasi terdiri dari tiga halaman di bawah **Reservations**: **Calendar** (`/reservations/calendar`), **Reservations** (`/reservations`), dan halaman reservasi (`/reservations/:id`). Masing-masing membaca Little Hotelier sekali dan menyimpannya selama beberapa menit, jadi berpindah halaman terasa cepat. **Refresh** membaca ulang.

### Kalender (tape chart)

1. Buka **Reservations > Calendar**. Kalender dimulai satu malam sebelum hari ini, selebar 14 malam, sehingga keberangkatan hari ini terlihat di layar.
2. Bergeser satu malam, satu minggu, atau seluruh jendela dengan tanda panah, atau tekan **Today**. Ketik berapa pun malam dari 1 sampai 92 di samping tanggal.
3. Klik sebuah bar untuk membuka reservasi di panel samping chart. Chart tetap di posisinya.

Setiap tipe kamar adalah satu pita dengan kamar-kamarnya yang terisi per malam. Reservasi tanpa kamar ada di jalur **No room yet**, penutupan kamar diarsir, dan kamar yang terjual dua kali untuk malam yang sama dilingkari merah. Baris di atas chart bisa menghitung kamar **Occupied**, **Arrivals**, dan **Departures** per malam.

::screenshot{src="/images/blog/demo/en/reservation-calendar-prices.webp" alt="Kalender reservasi mulai 4 November 2026, 14 malam: jumlah Occupied per malam, pita tipe kamar dengan baris Lowest rate (€63,47 sampai €128,88, sebagian dicoret, satu tanda stop sell), bar seperti Larsen, Ingrid sudah check-in dengan ikon website dan tanda dibayar sebagian, Marino, Onur terkonfirmasi dari Hostelworld, penutupan berarsir di kamar 104, dan legenda untuk warna status, asal, pembayaran, tamu, dan harga" caption="Tarif terendah saat ini untuk setiap tipe kamar ada tepat di atas kamar-kamarnya, malam demi malam." path="/reservations/calendar"}
::

### Pengaturan agar sesuai kebutuhan Anda

Buka **Settings** di kalender:

| Pengaturan | Opsi |
|---|---|
| **Nights shown** | 7, 14, 30, 60, atau 90, atau **Any number of nights** (1 sampai 92) |
| **Minimum night width** | **Narrow**, **Medium**, **Wide**, atau lebar berapa pun dalam piksel. Kolom malam melebar memenuhi layar jika semuanya muat |
| **Room type after the number** | **Full name**, **Abbreviated**, atau **Hidden** |
| **Room order** | **As in Little Hotelier**, **By room number**, **By room type, then number**, atau **My own order** (seret kamarnya) |
| **What a booking shows** | Nama tamu, referensi, channel, tamu, sisa tagihan, malam |
| **Colour bookings by** | **Status**, **Channel**, atau **Payment** |
| **Icons in a booking** | **Where it came from** (Booking.com, Expedia, Airbnb, Hostelworld, website Anda, resepsionis), **Paid or not**, dan **Guests** sebagai satu ikon atau dewasa, anak, dan bayi terpisah |
| **Show prices** | Tarif terendah saat ini untuk setiap tipe kamar per malam |

**Show prices** membaca inventaris Little Hotelier, satu kali pembacaan untuk setiap dua minggu yang ditampilkan, dan mengambil tarif terendah di antara semua rate plan, termasuk yang non-refundable. Malam yang habis terjual menampilkan harga yang dicoret, dan stop sell menampilkan tanda tutup. Opsi ini ditawarkan kepada orang yang boleh mengedit reservasi, dan nonaktif sampai Anda mengaktifkannya.

Jika tampilan chart sudah sesuai, buka **Saved views** dan pilih **Save as new view…**. Beri nama ("Resepsionis"), **Share with the team**, atau **Open by default**. Tautan juga menyimpan pengaturan: `/reservations/calendar?origin=1&paid=1&guests=split&prices=1&color=payment`.

### Di ponsel

Di ponsel, kalender terbuka sebagai **List of days**: kedatangan, keberangkatan, dan kamar tertutup setiap hari, dengan tarif terendah setiap tipe kamar. Sakelar **Layout** di bagian atas beralih ke **Full calendar**, yaitu seluruh chart yang digulir ke samping, dan pilihan Anda diingat di browser itu. Langkah, pengaturan, dan legenda pindah ke menu **More**.

::screenshot{src="/images/blog/demo/en/reservation-calendar-mobile.webp" alt="Kalender di ponsel sebagai daftar hari mulai Rabu, 4 November: Kamis, 5 November bertanda Today dengan 2 kamar terisi, tarif terendah setiap tipe kamar (Doble Estándar €63,47, Doble Superior €84,13, Individual €46,49, Familiar 4 pax €109,22), dan dua keberangkatan, Okafor, Camila dari kamar 105 dan Alvarez, Greta dari kamar 106, keduanya Checked out; Jumat, 6 November dengan tarifnya dan dua kedatangan" caption="Di ponsel, kalender menjadi daftar hari. Ubah Layout ke Full calendar untuk melihat seluruh chart." path="/reservations/calendar" mobile}
::

### Tabel reservasi

**Reservations** (`/reservations`) mencantumkan setiap reservasi dalam satu jendela waktu: **Today**, **Next 7 nights**, **Next 30 nights**, **This month**, atau **Choose dates**, berdasarkan **Stay**, **Arrival**, **Departure**, atau **Booking date**. Filter berdasarkan status, channel, dan tipe kamar, centang **Owes money** atau **No room yet**, pilih dari 30 kolom, dan **Export CSV** apa yang ada di layar.

### Semua tentang satu reservasi

Buka reservasi di panel samping, atau sebagai halaman penuh:

- **Overview:** masa inap, kamar, tamu, channel, **Total**, **Received**, **Outstanding**, dan tanda dari Little Hotelier seperti **Confirmation sent** atau **Card on file**.
- **Bagian:** Guests, Rooms and rates (tarif setiap malam), Extras and taxes, Payments, Invoices, Notes, Channel and conversations, Check-in, History, dan **All other fields**. Tampilkan dalam satu halaman atau sebagai tab.
- **Tindakan:** **Confirm**, **Check in**, **Check out** (dan membatalkannya), mengedit catatan internal, dan mengedit data penagihan serta alamat tamu utama (perusahaan, NPWP, jenis dokumen, alamat). Masing-masing dikonfirmasi dulu dan dikirim sekali.
- **Pembayaran:** refund, payment link, dan invoice dari halaman yang sama.

::screenshot{src="/images/blog/demo/en/reservation-detail.webp" alt="Halaman reservasi untuk Emma Berg, Confirmed, Sabtu 7 November sampai Kamis 12 November 2026, 5 malam, BBN-DEMO100408: tombol Check in dan Open in Little Hotelier, tab bagian dari Overview sampai All other fields (43), kartu untuk Stay, Rooms 201 Doble Superior, Guests 1 dewasa, dan Channel Extranet, Total €489,69, Received €146,91, dan Outstanding €342,78, tanda seperti Payment: Partly paid dan Confirmation sent, serta kontak Booked under" caption="Setiap kolom yang disimpan Little Hotelier tentang sebuah reservasi, dalam satu halaman, dengan check-in sejauh satu klik." path="/reservations"}
::

Untuk reservasi dari website Anda sendiri, halaman ini bisa menampilkan **Original booking** di samping versi terkini di Little Hotelier. Tekan **Read the original booking** dan halaman akan mencantumkan mengapa keduanya berbeda: masa inap dipindah ke tanggal lain, kamar ditagih dengan cara berbeda, diskon direct booking hilang, atau deposit tidak dihitung ulang setelah pemindahan. Itu menjelaskan saldo yang menurut tamu tidak mereka utang.

### Membuat reservasi dari Hotelier Tools

**New reservation** (`/reservations/new`) adalah jalur cepat untuk reservasi lewat telepon atau walk-in:

1. **Stay.** Pilih tanggal kedatangan dan keberangkatan pada kalender yang harinya menampilkan sisa kamar, harga terendah, stop sell, closed to arrival, dan minimum stay.
2. **Rooms.** Tabel tarif terbuka dengan setiap tipe kamar dan rate plan yang sudah dihitung harganya untuk masa inap itu, malam demi malam. Klik sebuah harga untuk memilih kamar dan tarif itu, atau **Custom rate** untuk mengetik harga per malam. Batas tamu setiap kamar di Little Hotelier membatasi kolom **Adults**, **Children**, dan **Infants**, dan tamu yang melebihi kapasitas yang termasuk menampilkan biaya tamu tambahan.
3. **Compare.** Di bawahnya, **To compare** menampilkan masa inap yang sama sebagai **Direct booking** di website Anda (dengan kode promo Anda), di **Booking.com** dengan diskon Genius yang umum, apa yang disarankan rekomendasi harga, dan **The market these nights** dari properti sebanding.
4. **Guest and address.** Pilih negara lebih dulu. Kode pos mengisi kota dan provinsi, dan kota menyarankan kode posnya.
5. Tekan **Check price and availability**. Ini menghitung harga setiap malam, memastikan masih ada kamar, dan mencari tamu yang sama yang sudah memesan pada tanggal itu. Tidak ada yang ditulis.
6. Tekan **Create reservation**. Tombol ini hanya muncul untuk pemeriksaan atas formulir yang persis sama dengan yang ada di layar.

::screenshot{src="/images/blog/demo/en/reservation-new-rates.webp" alt="New reservation untuk Kamis 12 November sampai Sabtu 14 November dengan tabel Rates dan perbandingan terbuka untuk 2 tamu: Doble Estándar dengan sisa 3 kamar, Tarifa Flexible terpilih seharga 153,73 € untuk masa inap (70,52 € dan 83,21 € per malam) dan No reembolsable seharga 138,36 €, Doble Superior seharga 203,79 € dan 183,41 €, Individual bertanda tidak menerima rombongan ini, dan baris Custom rate di bawah setiap tipe kamar" caption="Setiap tipe kamar dan rate plan sudah dihitung harganya untuk masa inap itu. Klik sebuah harga untuk memilihnya." path="/reservations/new"}
::

::screenshot{src="/images/blog/demo/en/reservation-new-compare.webp" alt="Pita To compare di tabel tarif: Suite Ático sebagai Direct booking dengan kode DEMOSOL −10% seharga 329,81 € alih-alih 366,46 €, Booking.com dengan −10% Genius tidak terbaca, Recommended seharga 325,09 €, lalu The market these nights yang mencantumkan enam properti dari Albergue Prueba Playa seharga 117,02 € sampai Hotel Muestra Rambla seharga 211,56 €, dengan Hotel Demo Sol (You) seharga 176,79 €" caption="Masa inap yang sama di website Anda, di Booking.com, dan di properti terdekat, sebelum Anda menyebutkan harga." path="/reservations/new"}
::

Malam yang sudah penuh atau kemungkinan duplikat ditolak dengan kotak centangnya sendiri (**Book it anyway…** atau **It is a second stay — book it anyway**): centang hanya jika Anda memang bermaksud demikian. Reservasi dikirim sekali. Jika jawabannya hilang, halaman tidak pernah menawarkan **Create** lagi sampai ada pemeriksaan baru, yang akan menemukan reservasi itu sebagai duplikat jika ternyata sudah dibuat.

Setelah dibuat, reservasi ada di kalender dan tidak lagi dijual di semua channel.

::demo-cta{path="/reservations/calendar"}
::

### Batasan yang jujur

- **Kalender hanya membaca.** Memindahkan masa inap ke kamar lain, mengubah tanggal, membatalkan, atau no-show tetap dilakukan di Little Hotelier. Setiap reservasi punya tautan **Open in Little Hotelier**. Menyeret bar tidak tersedia.
- **New reservation untuk masa inap biasa.** Untuk deposit, extras, atau kamar tertentu, pakai formulir Little Hotelier sendiri, yang ditautkan paling atas di halaman. Hingga 30 malam dan 10 kamar per reservasi.
- **Tanpa pembayaran, tanpa email.** Reservasi yang dibuat di sini tidak mencatat pembayaran dan tidak mengirim email ke tamu.
- **Angka website dan Booking.com hanya untuk perbandingan.** Reservasi memakai tarif yang Anda pilih.

Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027. Selengkapnya di [halaman dashboard](/tools/bot/dashboard).

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini membaca dan membuat reservasi memakai login Little Hotelier hotel Anda sendiri.
::

Lihat juga: [daftar harian siap cetak](/blog/little-hotelier-daily-lists), [kode promo di Little Hotelier](/blog/little-hotelier-promo-codes), [tips Little Hotelier](/blog/little-hotelier-tips).

## Ringkasan

- **Di Little Hotelier:** kalender menampilkan 14 atau 28 hari. Buat reservasi dengan **+Reservation**, lalu tekan **Email** untuk mengirim konfirmasi.
- **Kalender kedua** di Hotelier Tools menampilkan 1 sampai 92 malam, tarif terendah per tipe kamar, ikon channel dan pembayaran, serta tampilan tersimpan untuk tim.
- **Di ponsel:** daftar hari, atau chart lengkap.
- **New reservation:** pilih tarif yang sudah dihitung, bandingkan dengan website Anda dan Booking.com, periksa, lalu buat di Little Hotelier.
- **Perubahan** kamar, tanggal, dan pembatalan tetap dilakukan di Little Hotelier.
