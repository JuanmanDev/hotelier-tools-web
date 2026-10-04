---
title: "CTA, CTD, minimum stay, dan stop sell di Little Hotelier: apa artinya?"
seoTitle: "CTA, CTD, min stay, dan stop sell di Little Hotelier"
description: "CTA menutup check-in, CTD menutup check-out, min stay menetapkan masa inap terpendek, stop sell menutup penjualan. Cara mengaturnya di Little Hotelier."
date: 2026-10-03
category: pricing
tags: [restrictions, cta, ctd, stop sell, little hotelier]
keywords: [CTA CTD hotel adalah, closed to arrival adalah, stop sell hotel adalah, what is cta in little hotelier, little hotelier cta ctd, siteminder stop sell, minimum stay hotel adalah]
feature: dynamic-pricing
demoPath: /pricing/settings/restrictions
cover: /images/blog/demo/en/price-recommendations.webp
coverAlt: "Rekomendasi harga di Hotelier Tools untuk kamar Doble Estándar, 3 sampai 16 Oktober 2026: harga saat ini dan harga yang direkomendasikan per malam, kolom CTA / CTD dengan tombol A dan D, minimum stay, kolom Channel, dan tombol Apply to Little Hotelier"
faq:
  - q: "Apa beda closed to arrival dan stop sell?"
    a: "Closed to arrival hanya menghentikan check-in baru pada tanggal itu: tamu yang tiba sehari sebelumnya tetap bisa menginap melewatinya. Stop sell menutup tarif untuk dijual pada tanggal itu, sehingga tidak ada reservasi baru yang bisa mencakup malam tersebut sama sekali."
  - q: "Apakah stop sell sama dengan mengatur ketersediaan menjadi 0?"
    a: "Bagi tamu hasilnya tampak sama: malam itu tidak bisa dipesan. Di sisi Anda berbeda. Stop sell mempertahankan jumlah kamar Anda, jadi membukanya kembali cukup satu klik. Penutupan kamar (room closure) di Little Hotelier menurunkan ketersediaan yang dikirim ke channel dan tidak menerapkan stop sell."
  - q: "Kapan hotel kecil sebaiknya memakai closed to arrival?"
    a: "Pakai untuk melindungi masa inap yang lebih panjang: pada hari Sabtu di akhir pekan ramai, sehingga tamu harus tiba hari Jumat, atau pada malam acara ketika Anda lebih suka menjual masa inap penuh. Tinjau lagi saat tanggalnya mendekat dan cabut jika malam itu masih kosong."
  - q: "Mengapa pembatasan saya tidak muncul di Booking.com atau Airbnb?"
    a: "Tidak semua tarif channel menerima semua pembatasan. Di grid inventory Little Hotelier, tanda strip pada sel channel berarti channel tersebut tidak mendukung pembaruan itu, dan pembaruan di luar jendela pemesanan maksimum channel tidak disinkronkan. Periksa konfigurasi tarif channel di Channel Manager untuk melihat jenis pembaruan yang didukung."
  - q: "Apakah Hotelier Tools mengubah pembatasan dengan sendirinya?"
    a: "Tidak. Kebijakan pembatasan diusulkan malam demi malam di halaman Recommendations, dan tidak ada yang ditulis sampai Anda menerapkannya. Autopilot hanya menulis minimum stay jika Anda mengizinkannya secara terpisah, dan tidak pernah menyentuh stop sell channel. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier."
---

Di Little Hotelier, **CTA** (closed to arrival) berarti tamu tidak bisa check-in pada tanggal itu, dan **CTD** (closed to departure) berarti mereka tidak bisa check-out pada tanggal itu. **Minimum stay** adalah jumlah malam paling sedikit yang harus dipesan untuk sebuah kamar. **Stop sell** menutup tarif untuk dijual pada suatu tanggal sementara kamar Anda tetap ada di inventory. Semuanya diatur per tarif kamar di **Front Desk > Inventory**, per tanggal atau sekaligus dengan **Bulk Update**.

| Istilah | Artinya | Pemakaian umum |
|---|---|---|
| **CTA** (Closed to Arrival) | "Guests cannot check in on this date." Tamu yang tiba lebih awal tetap menginap melewatinya. | Membuat tamu tiba hari Jumat untuk akhir pekan ramai. |
| **CTD** (Closed to Departure) | "Guests cannot check out on this date." Tamu boleh menginap melewatinya tetapi tidak boleh pergi pada hari itu. | Menjaga akhir pekan tetap utuh. |
| **Min stay** (min LOS) | "Minimum or maximum nights a room must be booked for" (Min/Max Stay). | Dua malam pada akhir pekan acara. |
| **Max stay** | Masa inap terpanjang yang diterima. | Jarang dipakai hotel kecil. |
| **Stop sell** | Tarif ditutup untuk dijual pada tanggal itu, di semua channel atau hanya sebagian. Disebut **Close Channels** di Front Desk dan **Stop Sell** di Channel Manager. | Menutup tanggal dengan cepat: perawatan, blokir pemilik, channel yang ingin Anda jeda. |

Definisi yang dikutip berasal dari pusat bantuan Little Hotelier: [mengelola tarif, ketersediaan, dan pembatasan di grid inventory](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid) (diperbarui Agustus 2026).

## CTA dan CTD: apa bedanya?

Kedua pembatasan ini menyangkut **hari kedatangan atau keberangkatan**, bukan malam-malam di antaranya.

Ambil contoh akhir pekan festival: malam Jumat dan Sabtu sangat diminati, hari Minggu sepi.

- **CTA pada hari Sabtu**: tidak ada yang bisa check-in pada hari Sabtu. Tamu yang hanya ingin malam Sabtu tidak bisa memesannya, tetapi tamu yang tiba hari Jumat untuk dua malam bisa. Anda menjual seluruh akhir pekan, bukan satu malam Sabtu yang membuat malam Jumat kosong.
- **CTD pada hari Sabtu**: tidak ada yang bisa check-out pada hari Sabtu. Tamu yang tiba hari Jumat harus menginap setidaknya sampai hari Minggu.

Tidak satu pun pembatasan ini memengaruhi tamu yang sudah punya reservasi. Keduanya hanya menyaring reservasi baru yang diterima. Di Little Hotelier, CTA dan CTD berlaku untuk semua channel Anda, termasuk booking engine Anda sendiri ([panduan video CTA dan CTD](https://helpcentre.littlehotelier.com/en/articles/8674081-enable-cta-and-ctd-restrictions-video)).

## Minimum stay: berlaku saat kedatangan atau selama menginap?

Minimum stay (min LOS, minimum length of stay) menetapkan jumlah malam paling sedikit dalam sebuah reservasi. Channel menerapkannya dengan salah satu dari dua cara:

- **On arrival**: diperiksa terhadap tanggal kedatangan. Minimum 2 pada hari Jumat berarti kedatangan hari Jumat harus memesan minimal 2 malam; kedatangan hari Sabtu masih bisa memesan satu malam.
- **Through**: diperiksa terhadap setiap malam dalam masa inap. Minimum 2 pada hari Sabtu berarti setiap reservasi yang mencakup malam Sabtu harus minimal 2 malam, dari mana pun dimulainya.

Grid Little Hotelier hanya punya **Min Stay** dan **Max Stay**. Bagaimana channel membacanya adalah pengaturan di channel. Little Hotelier mengirim minimum stay dan maximum stay ke Booking.com sebagai "through" secara default ([hubungkan ke Booking.com](https://helpcentre.littlehotelier.com/en/articles/13830297-connect-to-booking-com)). Jika akun Booking.com Anda memakai "Min. stay from arrival", atur **Use Length of Stay on Arrival** ke **Yes** di **My Apps > Channel Manager > Channels > Booking.com > Configure** ([kesalahan pemetaan channel](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshoot-channel-mapping-and-disabled-rate-errors)). Jika minimum stay lebih tinggi daripada maximum stay, tarif dinonaktifkan secara otomatis.

## Stop sell itu apa, dan apa bedanya?

Stop sell menutup tarif untuk dijual pada suatu tanggal sambil menjaga jumlah kamar Anda tidak berubah. Little Hotelier berada di atas channel manager SiteMinder, dan sebuah malam bisa punya tarif yang baik namun tidak terjual di mana pun karena sedang stop sell.

Little Hotelier memberi dua cara untuk melakukannya, dan hanya satu yang bisa dipakai pada satu waktu:

- **Close Channels** di **Front Desk > Inventory** menghentikan penjualan "on all connected channels (including your booking engine)" untuk tarif kamar dan tanggal yang dipilih.
- **Stop Sell** di **Channel Manager** menutup channel tertentu. Buka **My Apps > Channel Manager > Inventory**, tekan tombol biru **Channels** di samping tarif, temukan tarif channel, lalu pilih **Stop Sell**. Untuk rentang tanggal, gunakan **Bulk Update** dan atur **Stop Sell** ke **On** ([stop sell untuk channel tertentu](https://helpcentre.littlehotelier.com/en/articles/8673615-add-or-remove-stop-sells-for-specific-channels)).

Stop sell di Channel Manager tidak berfungsi selama **Close Channels** dicentang di Front Desk untuk tanggal yang sama.

| | Stop sell | Penutupan kamar (ketersediaan dikurangi) | CTA |
|---|---|---|---|
| Reservasi baru yang mencakup malam itu | Diblokir | Diblokir setelah ketersediaan mencapai 0 | Diizinkan jika tiba lebih awal |
| Jumlah kamar Anda | Tidak berubah | Dikurangi untuk tipe kamar itu | Tidak berubah |
| Cocok untuk | Menutup cepat, per channel | Kamar yang benar-benar tidak bisa dipakai | Mengatur pola menginap |

**Room Closure** (**Front Desk > Calendar**) "reduces the availability sent to the channels for the closed room type. It does not apply a stop sell" ([penutupan kamar](https://helpcentre.littlehotelier.com/en/articles/8674039-create-and-manage-room-closures)).

## Cara mengatur CTA, CTD, dan minimum stay di Little Hotelier

### Per tanggal

1. Buka **Front Desk > Inventory**.
2. Pilih tampilan yang memperlihatkan kolom yang Anda butuhkan.
3. Geser ke tanggalnya dan ubah sel untuk tarif kamar: Min Stay, Max Stay, CTA, CTD.
4. Tekan **Save**.

### Rentang tanggal dengan Bulk Update

1. Di **Front Desk > Inventory**, tekan **Bulk Update**.
2. **When?**: pilih rentang tanggal.
3. **Which days?**: pilih hari dalam seminggu, misalnya hanya hari Sabtu.
4. **Which room rates?**: pilih tarifnya.
5. **What changes?**: atur pembatasannya, misalnya minimum stay 2 atau CTA aktif.
6. Tekan **Update**.

Perlu diketahui:

- Pembatasan diatur **per tarif kamar**, bukan per tipe kamar.
- Tarif turunan (derived rate) berwarna abu-abu di grid. Ubah tarif induk yang menjadi dasarnya.
- Front Desk menerima pembaruan sekitar 716 hari ke depan secara default.

## Bagaimana pembatasan sampai ke Booking.com, Expedia, dan Airbnb

Little Hotelier mengirim pembatasan Anda ke setiap channel terhubung lewat channel manager, dengan beberapa batasan ([grid inventory](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), [periode pembaruan channel](https://helpcentre.littlehotelier.com/en/articles/8673945-channel-manager-manage-update-period)):

- **Tidak semua tarif channel mendukung semua pembatasan.** Tanda strip (-) pada sel channel berarti channel itu tidak mendukung jenis pembaruan tersebut. Di Channel Manager, layar **Configure** pada tarif channel menunjukkan jenis pembaruan yang diterimanya.
- **Booking window berbeda-beda.** Channel Manager mengirim pembaruan 400 hari ke depan secara default (hingga 750). Pembaruan di luar batas maksimum channel tidak disinkronkan; untuk Booking.com batasnya 545 hari.
- **Expedia** menerima stop sell dari Little Hotelier hanya pada tingkat tarif. Stop sell tingkat kamar dikelola di Expedia Partner Central ([masalah stop sell Expedia](https://helpcentre.littlehotelier.com/en/articles/15201269-troubleshoot-expedia-stop-sell-issues)).
- **Airbnb** dengan Enhanced Sync menerima tarif, ketersediaan, dan pembatasan, tetapi kolom yang Anda ubah di extranet Airbnb sendiri akan menjadi abu-abu di Channel Manager ([hubungkan ke Airbnb](https://helpcentre.littlehotelier.com/en/articles/8693078-map-to-airbnb)).

Setelah mengatur pembatasan penting, buka extranet channel dan periksa satu tanggal.

## Kapan hotel kecil sebaiknya memakainya?

- **Akhir pekan ramai dan acara.** Minimum stay dua malam pada malam acara, atau CTA pada malam tersibuk, menjual masa inap penuh, bukan malam tunggal yang meninggalkan celah.
- **Malam kosong tunggal.** Satu malam kosong di antara dua malam penuh hanya bisa terjual sebagai masa inap satu malam. Jika minimum stay memblokirnya, cabut minimum pada malam itu saat tanggalnya mendekat.
- **Mendekati tanggalnya.** Pembatasan yang masuk akal sebulan sebelumnya bisa menghalangi reservasi yang sebenarnya mudah didapat beberapa hari sebelum tanggalnya. Tinjau setiap minggu.
- **Hari ketika tidak ada yang bisa melayani check-in.** Pasang CTA pada hari-hari itu, jika aturan rumah Anda memungkinkan.
- **Menutup dengan cepat.** Pakai stop sell, bukan harga 999, saat Anda perlu menarik sebuah tanggal dari penjualan.

## Cara yang lebih cepat: kebijakan pembatasan dan stop sell di Hotelier Tools

Hotelier Tools bekerja di atas Little Hotelier dengan login Anda sendiri. Alih-alih mengatur pembatasan tanggal demi tanggal, Anda menulis kebijakannya sekali dan kebijakan itu diusulkan malam demi malam, di samping harga. Fitur harga ini masih dalam tahap **alpha**.

### 1. Tulis kebijakan sekali saja

Buka **Pricing settings → Arrivals, departures & stays** (`/pricing/settings/restrictions`). Anda bisa menutup kedatangan atau keberangkatan:

- pada hari tertentu setiap minggu atau pada tanggal tertentu
- berdasarkan okupansi atau sisa kamar
- hanya ketika malam di kedua sisinya masih terbuka

Hotelier Tools mendeteksi pola hari yang sudah Anda pakai di Little Hotelier dan menawarkan untuk mengadopsinya. **Paket akhir pekan** opsional menetapkan minimum stay; secara default nonaktif, dan jika diaktifkan defaultnya adalah Jumat dan Sabtu, 2 malam. Sebuah paket tidak pernah menurunkan minimum stay yang lebih panjang yang Anda atur secara manual. Tidak ada pengaturan di halaman ini yang menulis ke Little Hotelier.

::screenshot{src="/images/blog/demo/en/pricing-settings-arrivals-departures-stays.webp" alt="Halaman Arrivals, departures & stays di Hotelier Tools: aturan No arrivals dengan Every week dan tombol hari Mon sampai Sun, On these dates, kondisi An event fills the town dan The nights either side are still open, Occupancy above dan Rooms left at most, lalu awal bagian No departures" caption="Tentukan sekali malam mana yang menolak check-in atau check-out. Tidak ada pengaturan di halaman ini yang menulis ke Little Hotelier." path="/pricing/settings/restrictions"}
::

### 2. Tinjau dan terapkan malam demi malam

Di **Recommendations** (`/price-recommendations`), setiap malam menampilkan status kedatangan (A) dan keberangkatan (D) di samping harga. Ubah yang tidak Anda setujui, centang malam-malamnya, lalu tekan **Apply to Little Hotelier…**. Tidak ada yang berubah sampai Anda mengonfirmasi.

Untuk tanggal khusus, **Date rules** (`/pricing/settings/dates`) memiliki aturan "stay" yang hanya mengatur minimum stay atau aturan kedatangan pada malam-malam tersebut.

### 3. Periksa dan atur stop sell channel

Tekan **Check channel manager** di halaman Recommendations. Hotelier Tools membaca status stop sell SiteMinder dengan sesi Little Hotelier yang sama, hanya saat Anda menekannya, dan kolom channel menampilkan terbuka, tertutup, atau campuran untuk setiap malam. Pilih target (buka semua, tutup semua, biarkan). Perubahan ini dikirim **setelah** perubahan harga di Little Hotelier, dan hanya untuk malam yang perubahannya berhasil.

::screenshot{src="/images/blog/demo/en/price-recommendations-apply-dialog.webp" alt="Dialog Apply to Little Hotelier untuk tiga malam Doble Estándar (Sab 3 Okt, Min 4 Okt, Sen 5 Okt) dengan tarif saat ini dan baru serta kolom Arr dan Dep, peringatan bahwa tarif dan pembatasan berubah segera tanpa undo otomatis, opsi Send me an email, opsi Also update sales in the Channel Manager (SiteMinder), dan Apply 3 change(s)" caption="Harga, perubahan kedatangan dan keberangkatan, serta stop sell SiteMinder dikonfirmasi dalam satu dialog. Tidak ada yang berubah sampai Anda menerapkannya." path="/price-recommendations"}
::

Autopilot tidak pernah mengubah stop sell, dan hanya menulis minimum stay jika Anda mengizinkannya secara terpisah.

::demo-cta{path="/pricing/settings/restrictions"}
::

## Ringkasan

- **CTA** menghentikan check-in pada suatu tanggal, **CTD** menghentikan check-out, **minimum stay** menetapkan masa inap terpendek, dan **stop sell** menutup tarif untuk dijual sambil mempertahankan jumlah kamar Anda.
- Di Little Hotelier, atur per tarif kamar di **Front Desk > Inventory**, atau dengan **Bulk Update** untuk rentang tanggal. Stop sell per channel ada di Channel Manager.
- Periksa pembatasan apa saja yang diterima setiap channel, dan tinjau setiap minggu saat tanggal mendekat.
- Dengan [dynamic pricing Hotelier Tools](/tools/bot/dynamic-pricing) Anda menulis kebijakan sekali, melihatnya di samping harga, dan mengatur stop sell SiteMinder dari halaman yang sama. Gratis untuk setiap hotel sampai 10 Januari 2027.
- Berikutnya: [dynamic pricing untuk hotel kecil di Little Hotelier](/blog/dynamic-pricing-little-hotelier) dan [tips dan fitur tersembunyi Little Hotelier](/blog/little-hotelier-tips).
