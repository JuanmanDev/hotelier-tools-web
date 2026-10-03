---
title: "Komisi Booking.com berapa persen? Cara melihat net sebenarnya di Little Hotelier"
seoTitle: "Komisi Booking.com berapa persen? Panduan 2026"
description: "Tidak ada satu tarif: Anda membayar persentase di perjanjian Anda, plus program dan biaya pembayaran. Dasar pengenaan, PPN, dan net per reservasi."
date: 2026-10-03
category: tips
tags: [booking.com, commission, little hotelier, userscript, vat]
keywords: [komisi booking.com berapa persen, komisi booking com untuk hotel, kalkulator komisi booking com, cara bayar komisi booking com, komisi genius booking.com, biaya pembayaran booking.com]
demoPath: /
cover: /images/scripts/show-booking-commissions/to.png
coverAlt: "Ringkasan reservasi Little Hotelier (antarmuka bahasa Spanyol) dengan komisi Booking.com, biaya pembayaran, dan perkiraan net yang ditambahkan oleh script gratis"
faq:
  - q: "Berapa persen yang diambil Booking.com dari hotel?"
    a: "Booking.com tidak mengumumkan satu tarif. Anda membayar persentase yang tercantum di perjanjian akomodasi Anda, yang bergantung pada negara, jenis properti, dan kontrak. Komisi tiap reservasi bisa dilihat di Extranet pada Finance > Reservation statements."
  - q: "Apakah Booking.com mengenakan komisi atas pajak kota (city tax)?"
    a: "Tidak. Booking.com tidak mengenakan komisi atas pajak lokal seperti city tax. Di sebagian besar negara, komisi memang dikenakan atas PPN (VAT atau GST), tergantung hukum setempat dan General Delivery Terms Anda."
  - q: "Apakah saya membayar komisi untuk tamu no-show?"
    a: "Hanya jika Anda membebankan biaya no-show kepada tamu, dan itu pun hanya atas biaya tersebut. Jika Anda menandai no-show di Extranet dalam 48 jam setelah tanggal check-out yang direncanakan dan membebaskan biayanya, tidak ada komisi."
  - q: "Apakah program Genius menaikkan komisi saya?"
    a: "Genius tidak menambah persentase komisi, tetapi diskonnya Anda tanggung sendiri (10% secara default, hingga 15% atau 20% untuk level Genius yang lebih tinggi jika Anda mengaktifkannya). Preferred Partner, Preferred Plus, dan Visibility Booster adalah program yang menaikkan komisi Anda."
  - q: "Kapan Booking.com menagih komisi?"
    a: "Sebulan sekali, untuk setiap reservasi yang tamunya check-out pada bulan sebelumnya. Invoice harus dibayar dalam 14 hari. Pada Payments by Booking.com, komisi bisa dipotong langsung dari pencairan dana Anda."
  - q: "Apakah script komisi untuk Little Hotelier gratis?"
    a: "Ya. Userscript Show Booking.com Commissions gratis selamanya. Script berjalan di browser Anda sendiri dengan ekstensi Tampermonkey yang gratis dan hanya membaca halaman reservasi yang sedang Anda buka."
---

Tidak ada satu komisi Booking.com yang berlaku untuk semua. Anda membayar persentase yang tertulis di perjanjian Anda sendiri, yang bergantung pada negara, jenis properti, dan kontrak, dan program seperti Preferred Partner atau Visibility Booster menambahkannya. Komisi dikenakan atas seluruh nilai reservasi (di sebagian besar negara termasuk PPN, tidak pernah atas city tax), dan Payments by Booking.com bisa menambah biaya pembayaran, jadi net Anda yang sebenarnya adalah total reservasi dikurangi semuanya.

Aturan di bawah ini diperiksa terhadap Partner Help Booking.com per Oktober 2026. Booking.com sering memperbarui halaman-halaman ini, jadi tautannya mengarah ke sumber aslinya.

## Berapa komisi Booking.com untuk hotel?

Booking.com mendefinisikan komisi sebagai "a set percentage of the total booking amount" (persentase tetap dari total nilai reservasi) untuk setiap reservasi ([Partner Help: Understanding your commission](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission)). Booking.com tidak mengumumkan satu tarif untuk semua: "the exact percentage depends on your country, property type, and the accommodation agreement you signed." Mitra baru melihatnya pada langkah **Agreement** saat pendaftaran ([Booking.com FAQ](https://join.booking.com/faq.html?lang=en)).

Tarifnya dikunci saat tamu memesan. Jika komisi Anda baru berubah, reservasi yang lebih lama tetap memakai tarif lama.

Untuk mengetahui persentase yang benar-benar Anda bayar:

1. Masuk ke Extranet dan buka **Finance > Reservation statements**. Setiap reservasi menampilkan komisinya.
2. Bandingkan dengan perjanjian akomodasi Anda. Untuk mendapatkan salinan General Delivery Terms, buka **Contracts** di bawah ikon pengguna.
3. Jika laporan menunjukkan persentase yang lebih tinggi, buka **Boost performance**: Preferred Partner atau Visibility Booster menambah persentase di atas tarif dasar Anda.
4. Pada Payments by Booking.com, **Finance help** juga menampilkan tarif dan biaya pembayaran Anda.

## Komisi Booking.com dikenakan atas apa?

Komisi mencakup "the room rate as well as any additional fees you charge—such as cleaning fees, service fees, and costs for no-shows or cancellations", dan diterapkan setelah tamu check-out ([sumber](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission)).

**Anda membayar komisi atas:**

- menginap yang selesai
- reservasi non-refundable dan sebagian refundable, baik tamu datang maupun tidak
- biaya pembatalan dan no-show yang Anda kenakan
- overbooking (dibebaskan jika Anda baru aktif kurang dari 30 hari, atau mengalami kurang dari lima overbooking dalam 12 bulan terakhir)

**Anda tidak membayar komisi atas:**

- biaya pembatalan yang Anda putuskan untuk dibebaskan
- no-show yang Anda tandai di Extranet dalam 48 jam setelah check-out, ketika Anda membebaskan biayanya
- reservasi yang kartu tamunya Anda tandai tidak valid

**Pajak.** Booking.com tidak mengenakan komisi atas pajak lokal seperti city tax. "However, in most countries, commission is charged on VAT or GST", tergantung hukum setempat. General Delivery Terms Anda menjelaskan apa yang berlaku untuk Anda.

::callout{type="warning" title="Aturan 48 jam"}
Tandai no-show, pembatalan, dan perubahan lainnya di Extranet dalam 48 jam setelah check-out. Setelah itu, Booking.com mengenakan komisi penuh atas reservasi aslinya. Langkah demi langkahnya ada di [kartu kredit tidak valid atau no-show di Booking.com: apa yang harus dilakukan](/blog/booking-com-invalid-card-no-show).
::

## Bagaimana Genius, Preferred, dan Visibility Booster mengubah yang Anda bayar

- **Genius** tidak menambah persentase komisi, tetapi Anda membayar diskonnya. Saat bergabung, diskon 10% diterapkan pada tipe kamar termurah dan terpopuler Anda, dan Anda bisa mengaktifkan 15% atau 20% untuk level Genius yang lebih tinggi. Booking.com menyatakan diskon standar itu "is funded by you, the accommodation partner" ([Genius program](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-genius-marketing-program)).
- **Preferred Partner Program** memberi visibilitas lebih besar dan lencana "in exchange for a small increase in commission". Anda memerlukan skor performa minimal 70%, yang diperiksa setiap 90 hari ([Preferred Partner](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-preferred-partner-program)). **Preferred Plus** meminta skor 80% dan investasi komisi yang lebih tinggi ([Preferred Plus](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-preferred-plus)). Booking.com tidak mengumumkan persentase tambahannya; cek di **Boost performance** di Extranet.
- **Visibility Booster** memungkinkan Anda memilih komisi yang lebih tinggi dengan slider, hanya untuk tanggal check-in dan negara asal tamu yang Anda pilih ([Visibility Booster](https://partner.booking.com/en-us/help/growing-your-business/increase-revenue/all-you-need-know-about-visibility-booster)).

## Apa yang ditambahkan Payments by Booking.com?

Tidak ada biaya pendaftaran ([Payments by Booking.com](https://partner.booking.com/en-us/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom)). Yang Anda bayar bergantung pada cara dana dicairkan:

| Metode pencairan | Biaya tambahan |
|---|---|
| Transfer bank | Biaya layanan pembayaran, sebagai persentase dari setiap reservasi yang selesai. Besarnya bergantung pada lokasi properti Anda. |
| Virtual credit card (VCC) | Biaya dari bank atau penyedia pembayaran Anda sendiri untuk memproses kartu. Booking.com tidak menetapkannya. |

Jika Anda membebaskan biaya pembatalan tamu, tidak ada biaya pembayaran juga. Ketika Booking.com menangani semua pembayaran tamu Anda, komisi dan biaya pembayaran dipotong dari setiap pencairan. Jika tidak, Anda menerima satu invoice di akhir bulan.

Untuk melihat keduanya pada satu reservasi, buka tab **Reservations** di Extranet dan lihat kolom **Commission and charges**. **Reservation details** menampilkan rinciannya.

## Apakah ada PPN atas komisi Booking.com?

Di Uni Eropa, tergantung nomor VAT Anda ([EU VAT and commission invoices](https://partner.booking.com/en-us/compliance/tax-remittance-management/eu-vat-and-commission-invoices)):

- **Dengan nomor VAT yang valid untuk transaksi UE** (Booking.com memeriksanya di database VIES milik UE), invoice komisi terbit tanpa PPN. Anda "remain responsible for reporting any VAT you may owe" kepada kantor pajak Anda. Akuntan menyebutnya reverse charge.
- **Tanpa nomor tersebut**, Booking.com menambahkan PPN pada invoice komisi Anda. Pada pencairan transfer bank bersih, Booking.com memotong komisi, biaya pembayaran, dan PPN atas keduanya.

Untuk menambahkan nomor Anda: **Finance > Finance settings > VAT details > Edit details**, pastikan nomornya valid untuk transaksi UE, masukkan, lalu simpan. Di luar UE, aturannya berbeda di tiap negara, jadi tanyakan kepada akuntan Anda.

Invoice komisi tiba sebulan sekali, untuk setiap tamu yang check-out pada bulan sebelumnya, dan harus dibayar dalam 14 hari. Invoice yang tidak dibayar dapat menutup sementara properti Anda.

## Cara melihat net setiap reservasi Booking.com di Little Hotelier

Ringkasan reservasi Little Hotelier menampilkan total kamar, extra, diskon, dan biaya kartu. Ringkasan itu tidak menampilkan berapa yang ditahan Booking.com. Komisi dan biaya pembayaran yang persis untuk setiap reservasi ada di Extranet (**Reservation statements**, atau kolom **Commission and charges**). Yang Anda terima adalah total dikurangi semua itu dan pajak yang sudah termasuk dalam harga.

### Contoh perhitungan: dari harga reservasi ke net Anda

Ini angka dari tangkapan layar di bawah: reservasi Booking.com sebesar €125,18, dengan komisi 17% dan biaya pembayaran 1,3%. Persentase Anda mungkin berbeda.

| Baris | Jumlah |
|---|---|
| Total reservasi (pajak termasuk) | €125,18 |
| Komisi, 17% dari total | −€21,28 |
| Biaya pembayaran, 1,3% dari total | −€1,63 |
| Pajak yang termasuk dalam harga | −€11,38 |
| **Perkiraan net** | **€90,89** |

Kira-kira seperempat dari yang dibayar tamu tidak pernah sampai kepada Anda. Jika Booking.com menambahkan PPN pada invoice komisi Anda, kurangkan juga.

### Lihat di setiap reservasi dengan script gratis

::screenshot{src="/images/scripts/show-booking-commissions/from.png" alt="Ringkasan reservasi Little Hotelier (antarmuka bahasa Spanyol) untuk reservasi Booking.com, menampilkan total kamar, extra, diskon, dan total diterima, tanpa baris komisi" caption="Sebelum: Little Hotelier menampilkan totalnya, bukan yang ditahan Booking.com." width="720" height="669"}
::

Untuk perkiraan cepat langsung di dalam Little Hotelier, pakai script gratis **Show Booking.com Commissions**:

1. Pasang ekstensi browser Tampermonkey yang gratis. [Panduan instalasi](/tools/ui/instructions) memandu Anda langkah demi langkah.
2. Buka [Show Booking.com Commissions](/tools/ui/show-booking-commissions) dan klik **Install on Tampermonkey**.
3. Buka reservasi mana pun yang sumbernya Booking.com di Little Hotelier. Setelah beberapa detik, empat baris muncul di atas total: biaya transfer (1,3%), komisi Booking.com (17%), seluruh potongan, dan perkiraan net.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Ringkasan reservasi Little Hotelier dengan empat baris tambahan: biaya transfer 1,3%, komisi Booking.com 17%, total potongan, dan perkiraan net 90,89 euro" caption="Sesudah: komisi, biaya pembayaran, dan perkiraan net pada setiap reservasi Booking.com." width="752" height="715"}
::

Yang perlu diketahui sebelum Anda mengandalkannya:

- **Tarifnya tetap di dalam script**: komisi 17% dan biaya pembayaran 1,3%. Jika milik Anda berbeda, buka script di editor Tampermonkey dan ubah `0.17` dan `0.013`.
- **Labelnya berbahasa Spanyol** dan jumlahnya dalam euro.
- **Ini hanya perkiraan.** Script tidak tahu soal Preferred, Visibility Booster, atau PPN yang ditambahkan pada invoice komisi Anda.
- **Semuanya tetap di browser Anda.** Script membaca halaman yang Anda buka dan tidak mengirim apa pun ke mana pun.

Script gratis lainnya seperti ini ada di [ekstensi Chrome gratis untuk Little Hotelier](/blog/little-hotelier-chrome-extensions).

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh Booking.com, SiteMinder, maupun Little Hotelier. Script berjalan di dalam sesi Little Hotelier Anda sendiri, dan dashboard Hotelier Tools terhubung memakai login Little Hotelier milik hotel Anda sendiri.
::

## Tentukan harga dengan memperhitungkan komisi: Channels & discounts

Genius dan diskon channel lainnya mengubah yang dibayar tamu, dan karena itu yang Anda terima. Di dashboard Hotelier Tools (dynamic pricing masih alpha), **Pricing settings > Channels & discounts** (`/pricing/settings/channels`) menyimpan dua angka sekaligus:

1. **Discount when applying prices.** Harga yang Anda terapkan dari Recommendations terisi otomatis sebagai "rekomendasi dikurangi % ini". Dengan 5%, rekomendasi 100,00 diterapkan sebagai 95,00. Biarkan 0 untuk menerapkan rekomendasi apa adanya.
2. **What the guest pays per channel.** Klik **Add a channel** dan masukkan diskon yang diberikan channel itu kepada tamunya sendiri, seperti Genius atau harga member. Halaman Recommendations lalu menampilkan berapa yang benar-benar dibayar tamu di tiap channel.
3. Tekan **Save changes**.

::screenshot{src="/images/blog/demo/en/pricing-settings-channels-discounts.webp" alt="Halaman Channels and discounts di pengaturan harga Hotelier Tools: Discount when applying prices diatur 5% (rekomendasi 100,00 diterapkan sebagai 95,00) dan What the guest pays per channel dengan tombol Add a channel, saran Booking Genius 10%, Expedia member price 10% dan Agoda insider deal 10%, serta belum ada diskon channel yang ditambahkan" caption="Beri tahu mesin harga tentang diskon Anda, agar rekomendasi menampilkan berapa yang benar-benar dibayar tamu di tiap channel." path="/pricing/settings/channels"}
::

::demo-cta{path="/pricing/settings/channels"}
::

Sisa mesin harga (harga kompetitor, aturan, acara lokal) dijelaskan di [dynamic pricing untuk hotel kecil di Little Hotelier](/blog/dynamic-pricing-little-hotelier) dan di [halaman Dynamic pricing](/tools/bot/dynamic-pricing). Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027; script browser tetap gratis.

## Ringkasan

- Komisi Booking.com adalah persentase di perjanjian Anda. Preferred, Preferred Plus, dan Visibility Booster menambahnya, dan Genius membuat Anda menanggung diskonnya.
- Komisi dikenakan atas seluruh nilai reservasi, biasanya termasuk PPN, tidak pernah atas city tax.
- Payments by Booking.com menambah biaya pembayaran untuk pencairan via transfer bank. Di UE, nomor VAT yang valid membuat invoice komisi Anda bebas PPN.
- Cek angka pastinya di **Finance > Reservation statements**, dan lihat perkiraan di setiap reservasi Booking.com di Little Hotelier dengan script gratis [Show Booking.com Commissions](/tools/ui/show-booking-commissions).
