---
title: "Cara kirim invoice ke tamu otomatis saat check-out di Little Hotelier"
seoTitle: "Kirim invoice ke tamu saat check-out di Little Hotelier"
description: "Booking.com tidak menerbitkan invoice untuk tamu, Anda yang harus. Kirim dari Little Hotelier secara manual, atau otomatis lewat email saat tamu check-out."
date: 2026-10-03
category: invoicing
tags: [invoices, checkout, booking.com, little hotelier, automation]
keywords: [cara download invoice booking com, guest invoice booking com, kirim invoice ke tamu, invoice hotel adalah, little hotelier invoice, send invoice to guest little hotelier, request invoice booking com]
feature: invoicing
demoPath: /invoice-on-leave
cover: /images/blog/demo/en/invoice-at-checkout.webp
coverAlt: "Halaman Invoice on leave di Hotelier Tools: tugas Automatic invoicing at check-out yang berjalan setiap hari pukul 12:00, rentang tanggal dengan Search reservations, dan tabel reservasi dengan tombol Auto-invoice untuk setiap menginap"
faq:
  - q: "Apakah Booking.com mengirim invoice ke tamu?"
    a: "Tidak. Booking.com menyatakan reservasi adalah perjanjian antara Anda dan tamu, sehingga properti yang harus menyediakan invoice, bahkan ketika Booking.com yang menerima pembayaran."
  - q: "Bisakah Little Hotelier mengirim invoice lewat email secara otomatis saat check-out?"
    a: "Tidak dengan sendirinya. Email otomatis untuk tamu adalah konfirmasi booking, pembatalan, pengingat sebelum kedatangan, dan ucapan terima kasih setelah keberangkatan. Anda mengirim invoice lewat email dari reservasi, atau memakai alat seperti Invoice on Leave di Hotelier Tools untuk melakukannya setelah check-out."
  - q: "Mengapa menunggu sampai check-out untuk menerbitkan invoice?"
    a: "Karena angka-angkanya baru final saat itu. Tambahan layanan, pembayaran, dan perubahan tanggal sering terjadi selama menginap, dan invoice yang terbit terlalu awal harus dikoreksi dengan credit note atau invoice baru."
  - q: "Apakah tamu akan melihat Hotelier Tools di dalam email?"
    a: "Tidak. Hotelier Tools meminta Little Hotelier mengirim invoice, sehingga terkirim dari template email dan pengirim Little Hotelier Anda sendiri, persis seperti saat Anda menekan Email > Invoice sendiri."
  - q: "Bagaimana jika tidak ada alamat email tamu di booking?"
    a: "Little Hotelier mengirim invoice ke email kontak utama reservasi, jadi tanpa itu tidak ada tujuan pengiriman. Invoice on Leave melaporkan menginap yang sudah lewat tanpa email tamu, bukan mengulang setiap hari, sehingga Anda bisa mencetak invoice atau meminta alamat dari tamu."
---

Booking.com tidak pernah menerbitkan invoice untuk tamu Anda: properti yang melakukannya, bahkan ketika Booking.com yang menerima pembayaran. Di Little Hotelier Anda mengirimnya dari reservasi dengan **Invoices > Generate invoice**, lalu **Email > Invoice**. Agar otomatis, tandai menginap tersebut di **Invoice on Leave** milik Hotelier Tools: setelah tamu check-out, tugas harian meminta Little Hotelier membuat invoice dan mengirimkannya ke tamu lewat email.

## Apakah Booking.com mengirim invoice ke tamu?

Tidak. Bantuan mitra Booking.com jelas: setiap reservasi adalah perjanjian antara Anda dan tamu Anda, sehingga "it's your responsibility to provide the guest with an invoice – not Booking.com", siapa pun yang menangani pembayarannya ([Booking.com Partner Hub](https://partner.booking.com/en-gb/help/policies-payments/guest-payments/supplying-guests-invoices)).

Halaman yang sama menambahkan tiga aturan praktis:

- Terbitkan invoice atas nama tamu, atau nama lain yang Anda sepakati dengan mereka.
- Jangan tampilkan Booking.com sebagai penjual. Anda adalah pemasoknya.
- Jika Anda dibayar dengan kartu virtual, pemegang kartu tertulis "Booking.com (Agent)", tetapi Anda tetap menerbitkan invoice untuk nilai penuh menginap.

Pelancong bisnis yang memesan lewat Booking.com for Business dapat menekan **Request invoice**, yang sekadar mengirim pesan kepada Anda ([bantuan Booking.com for Business](https://help.business.booking.com/hc/en-gb/articles/14862570197268-How-can-I-get-my-invoice)). Pekerjaannya tetap jatuh ke front desk Anda.

## Apa yang harus ada di invoice hotel?

Tergantung negara Anda, tetapi di UE invoice PPN lengkap memuat ([Komisi Eropa](https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en)):

- tanggal penerbitan dan nomor urut yang unik
- nama dan alamat lengkap Anda, serta milik pelanggan
- nomor PPN pelanggan, ketika pelanggan wajib membayar pajaknya (biasanya perusahaan)
- deskripsi menginap, harga satuan sebelum pajak, dan tanggal penyerahan jika berbeda
- tarif PPN, jumlah PPN, dan rincian per tarif

Banyak negara juga mengizinkan invoice "sederhana" yang lebih singkat untuk sebagian penjualan. Ketika tamu bisnis meminta invoice, biasanya mereka membutuhkan yang lengkap atas nama perusahaan, dengan nomor identitas pajaknya.

Atur tata letak Anda sekali di Little Hotelier pada **Front Desk > Setup > Guest Payment Options > Customise invoices**: judul (**Invoice**, **Tax Invoice**, atau milik Anda sendiri), awalan dan akhiran penomoran, logo, dan pajak ditampilkan inklusif atau eksklusif. Perubahan hanya berlaku untuk invoice baru ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/8910582-customise-guest-invoices)).

## Cara mengirim invoice dari Little Hotelier lewat email (cara manual)

1. Pastikan menginapnya sudah selesai: di tab **Details** pada reservasi, atur status ke **Checked-out** dan periksa saldonya.
2. Buka tab **Invoices** dan klik **Generate invoice**.
3. Klik **Email** dan pilih **Invoice**. Little Hotelier mengirimnya ke email kontak utama pada reservasi.

Anda juga bisa mencentang **Email invoice** saat **Record Payment**. Jika Anda mengedit reservasi setelahnya, tab Invoices menampilkan **Invoice is outdated**; klik untuk membuat invoice yang sudah dikoreksi dan kirim yang itu. Sumber: [Generate, print, and email a guest invoice](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice) dan [Record a payment](https://helpcentre.littlehotelier.com/en/articles/9743295-record-a-payment-or-refund-for-a-reservation).

Untuk mencetak, klik **Print** dan pilih **Invoice**. Skrip gratis [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) menambahkan tautan langsung sehingga Anda melewati menunya:

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="Bagian bawah reservasi Little Hotelier (antarmuka bahasa Spanyol) dengan tautan tambahan Imprimir Factura di samping menu Print dan Email" caption="Skrip Extra Invoice Print Button menambahkan tautan invoice sekali klik di samping Print dan Email." width="604" height="265"}
::

Kendalanya: ini langkah manual untuk setiap tamu. Email otomatis Little Hotelier untuk tamu adalah konfirmasi booking, pembatalan, pengingat sebelum kedatangan, dan ucapan terima kasih setelah keberangkatan ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/8910590-customise-guest-emails)). Tidak satu pun mengirim invoice.

## Cara mengirim invoice otomatis saat tamu check-out

**Invoice on Leave** di Hotelier Tools (beta) menjalankan langkah-langkah manual di atas untuk Anda, setelah check-out. Anda menandai sebuah reservasi sekali; menandai tidak mengirim apa pun saat itu juga.

1. Buka **Invoice on Leave** (`/invoice-on-leave`). Jika banner menyebut belum ada tugas, tekan **Create the daily task (16:00, after check-out)**.
2. Invoice hanya diterbitkan untuk menginap yang berstatus **checked out** di Little Hotelier. Jika tim Anda tidak men-check-out tamu secara manual sebelum pukul 16:00, gunakan kartu **Automatic check-out** dan tekan **Create the daily task (15:05)**. Tugas ini menutup keberangkatan hari itu di Little Hotelier, jadi tetap nonaktif sampai Anda membuatnya.
3. Temukan reservasinya dan aktifkan auto-invoice untuknya. Filter **Enrolled** dan **Not enrolled** menunjukkan posisi setiap menginap. Anda bisa mendaftarkan tamu yang masih menginap: invoice dikirim pada eksekusi pertama setelah mereka pergi.
4. Setelah check-out, tugas harian meminta Little Hotelier membuat invoice, dan Little Hotelier mengirimnya lewat email dari template dan pengirim Anda sendiri.
5. Periksa **Pending invoices to send** (`/invoice-on-leave/scheduled`) untuk melihat apa yang antre, jatuh tempo hari ini, terlambat, atau sudah diinvoice.

::screenshot{src="/images/blog/demo/en/invoice-at-checkout-full.webp" alt="Halaman Invoice on leave lengkap: pemberitahuan merah bahwa tidak ada yang meng-check-out tamu secara otomatis, kartu Automatic check-out (belum dikonfigurasi) dengan Create the daily task (15:05), tugas Automatic invoicing at check-out yang berjalan, tautan Pending invoices to send, dan sembilan reservasi, masing-masing dengan tombol Auto-invoice" caption="Buat tugas check-out jika Anda membutuhkannya, lalu tandai menginap dengan Auto-invoice. Invoice dibuat dan dikirim lewat email setelah tamu check-out." path="/invoice-on-leave" width="1440" height="1526"}
::

Butuh sekarang juga? Setiap baris punya aksi "process now" untuk menerbitkan invoice itu segera.

### Apa yang menjaganya tetap aman

- **Tandanya ada di Little Hotelier.** Pendaftaran disimpan sebagai tag di catatan reservasi di Little Hotelier, sehingga staf Anda dapat melihatnya di sana.
- **Tidak ada pengiriman ganda.** Tag kedua menandai "invoice sent", ditulis hanya setelah Little Hotelier menerima emailnya. Menginap yang sudah diinvoice tidak bisa didaftarkan lagi.
- **Pengecekan awal yang sama seperti pembuatan invoice massal.** Invoice perusahaan tanpa identitas pajak atau alamat fiskal, atau dengan identitas pajak yang salah format, ditolak, bukan dikirim setengah jadi.
- **Pengejaran dan batas.** Tugas harian menengok 8 hari ke belakang untuk mengejar eksekusi yang terlewat dan membaca hingga 100 check-out per eksekusi. Menginap yang sudah lewat tanpa email tamu dilaporkan sekali, tidak diulang setiap hari.

::callout{type="info" title="Alat independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier hotel Anda sendiri, dan invoicenya adalah dokumen milik Little Hotelier sendiri.
::

::demo-cta{path="/invoice-on-leave"}
::

## Invoice dikirim dalam bahasa apa?

Atur sekali di **Settings > Invoices** (`/settings/invoices`): **From the guest's country** (negara pada alamat tamu menentukan bahasanya) atau **Always the same language**. Negara yang kosong atau tidak cocok memakai **Fallback language** Anda.

## Tamu membutuhkannya atas nama perusahaan, atau setelah mereka pergi

**Sebelum invoice dibuat:** tambahkan nama perusahaan, identitas pajak, dan alamat fiskal ke detail tamu pada reservasi di Little Hotelier. Hotelier Tools menolak menerbitkan invoice perusahaan selama identitas pajak atau alamat fiskal belum ada atau salah format, sehingga tidak ada yang setengah jadi sampai ke tamu.

**Setelah invoice diterbitkan:** edit detailnya di Little Hotelier, lalu gunakan **Invoice is outdated** untuk membuat invoice yang sudah dikoreksi. Jika Anda sudah menandainya sebagai final, klik **Cancel invoice**, lalu **Generate invoice** lagi ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). Di Spanyol dengan VeriFactu, invoice final diubah lewat **Rectify invoice** ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)).

Tautan pribadi tempat tamu mengisi data perusahaan mereka sendiri sedang dikembangkan, dan belum tersedia.

Jika permintaan invoice masuk lewat pesan Booking.com, lihat [cara mengelola pesan tamu Booking.com](/blog/booking-com-guest-messages).

## Bagaimana cara mengirim ulang invoice?

Buka reservasi dan gunakan **Email > Invoice** lagi. Satu tips soal waktu: setelah invoice **ditandai final**, Little Hotelier tidak lagi menawarkan Print atau Email untuknya. Kirim dulu lalu finalkan, atau unduh PDF-nya nanti dari laporan Invoice.

::callout{type="tip" title="Tamu yang membayar lewat transfer bank"}
Skrip [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button) menambahkan tombol yang mengirim data rekening bank Anda lewat email dari reservasi. Belum dipublikasikan dan disiapkan berdasarkan permintaan untuk setiap properti.
::

## Ringkasan

- Propertilah, bukan Booking.com, yang harus menerbitkan invoice untuk tamu.
- Di Little Hotelier: **Invoices > Generate invoice**, lalu **Email > Invoice**, idealnya setelah check-out.
- **Invoice on Leave** di Hotelier Tools mengirimnya otomatis setelah check-out, dari template Little Hotelier Anda sendiri, dengan pengecekan data perusahaan dan duplikat.
- Di akhir kuartal, [unduh semua invoice Anda sekaligus](/blog/download-all-little-hotelier-invoices). Semua yang dilakukan fitur invoicing ada di [halaman Invoicing](/tools/bot/invoicing).
