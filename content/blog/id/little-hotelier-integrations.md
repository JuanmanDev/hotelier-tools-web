---
title: "Integrasi Little Hotelier terbaik 2026: akuntansi, check-in, harga, pesan tamu, dan AI"
seoTitle: "Integrasi Little Hotelier Terbaik di 2026"
description: "Apa saja yang terhubung ke Little Hotelier di 2026: ekspor Xero dan QuickBooks, check-in Chekin dan Duve, tool harga, pesan tamu, AI, dan add-on gratis."
date: 2026-10-03
category: api
tags: [integrations, app store, xero, chekin, little hotelier]
keywords: [integrasi little hotelier, little hotelier integrations, little hotelier xero integration, little hotelier app store, little hotelier booking widget, little hotelier chekin, little hotelier zapier]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "Portal developer di Hotelier Tools dengan kartu untuk REST API & Swagger, MCP setup, API keys, dan LH methods, serta kotak Authentication berisi contoh cURL dengan API key placeholder"
faq:
  - q: "Apakah Little Hotelier terintegrasi dengan Xero atau QuickBooks?"
    a: "Lewat file, bukan sinkronisasi langsung. Anda memetakan kode akun dan pajak di Little Hotelier, lalu mengekspor invoice final sebagai CSV yang dibuat untuk impor Xero dan QuickBooks. Per Oktober 2026, App Store tidak mencantumkan aplikasi akuntansi."
  - q: "Apakah Little Hotelier bisa dipakai dengan Zapier?"
    a: "Kami tidak menemukan aplikasi Little Hotelier di Zapier saat memeriksa pada 3 Oktober 2026; halaman integrasinya untuk Little Hotelier menampilkan not found. Untuk menghubungkan Little Hotelier ke tool lain, pakai aplikasi App Store atau skrip yang membaca data Anda lewat API."
  - q: "Berapa harga aplikasi App Store Little Hotelier?"
    a: "Little Hotelier tidak memungut biaya untuk menghubungkannya. Setiap aplikasi menetapkan harganya sendiri, dan halaman App Store Little Hotelier menyebut sebagian besar berharga di bawah 50 dolar AS per bulan. Banyak yang menawarkan uji coba gratis."
  - q: "Bagaimana cara menambahkan widget pemesanan Little Hotelier ke WordPress?"
    a: "Di Direct Booking, buka wizard widget, pilih tombol Book now, widget pemilihan tanggal, atau widget kustom, lalu salin kode yang ditampilkan. Tempel ke blok Custom HTML di halaman WordPress Anda. Little Hotelier meminta Anda menyalin kodenya, bukan mengetik ulang."
  - q: "Bisakah aplikasi revenue management mengubah minimum stay saya?"
    a: "Biasanya tidak. Pusat bantuan Little Hotelier menyebut RMS yang terhubung mengendalikan pembaruan tarif, sedangkan minimum stay dan stop sell tetap dikelola di Little Hotelier."
  - q: "Apakah Hotelier Tools ada di Little Hotelier App Store?"
    a: "Tidak. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier milik properti Anda sendiri, jadi Anda menyiapkannya sendiri, bukan lewat App Store."
---

Little Hotelier terhubung ke software luar di tiga tempat: **Little Hotelier App Store** (sekitar 30 aplikasi mitra untuk check-in, pesan tamu, upselling, ulasan, akses tanpa kunci, dan harga per Oktober 2026), **plug-in booking engine**, dan **add-on** miliknya sendiri seperti Guest Engagement dan Dynamic Revenue Plus. Akuntansi berupa ekspor CSV yang dibuat untuk Xero dan QuickBooks, bukan sinkronisasi langsung. Untuk yang belum ada, Anda bisa menambahkan lapisan yang membaca data Anda lewat API, atau skrip browser gratis.

## Di mana integrasi Little Hotelier berada

| Jenis | Di mana menemukannya | Cara terhubung |
|---|---|---|
| Aplikasi App Store | [littlehotelier.com/app-store](https://www.littlehotelier.com/app-store/) | Anda menghubungi penyedia aplikasi; mereka yang menyiapkannya |
| Plug-in booking engine | **Direct booking → Configuration → Plug-in apps** | Anda menempel kredensial aplikasi dan klik **Enable** |
| Add-on Little Hotelier | Paket Anda ([halaman harga](https://www.littlehotelier.com/pricing/)) | Diaktifkan oleh Little Hotelier |
| Channel (OTA) | **Distribution → Channels** | Dipetakan di channel manager |

Beberapa aturan dari [artikel bantuan App Store](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store):

- Aplikasi "not set up inside your platform". Anda memakai formulir kontak di halaman aplikasinya, dan penyedia yang menghubungkannya.
- Little Hotelier tidak memungut biaya untuk menghubungkan; setiap aplikasi punya harganya sendiri. [Halaman App Store](https://www.littlehotelier.com/app-store/) menyebut sebagian besar berharga di bawah USD 50 per bulan.
- Penyiapan memakan waktu beberapa menit, atau hingga 48 jam untuk beberapa aplikasi. Dukungan untuk sebuah aplikasi datang dari penyedia aplikasinya.

Plug-in hanya memengaruhi booking engine Anda. Per Oktober 2026, [daftarnya](https://help-platform.littlehotelier.com/en/articles/10440176-plug-in-apps-in-for-your-booking-engine) mencakup Google Analytics 4 dan Meta Pixel, perbandingan harga (123compare.me, TripTease), chatbot (HiJiffy, Book Me Bob), Tripadvisor Review Express, loyalitas (The Guestbook, Laasie), dan tool iklan (Google Ads, Sojern, The Hotels Network, Flip.to, dan lainnya).

## Akuntansi: Xero, QuickBooks, dan lainnya

Tidak ada sinkronisasi akuntansi langsung dalam daftar App Store yang kami periksa pada Oktober 2026. Yang ditawarkan Little Hotelier adalah **ekspor akuntansi**:

1. Siapkan dulu bagan akun dan kode pajak di Xero, QuickBooks, atau software Anda sendiri.
2. Di Little Hotelier, buka **Setup → Accounting exports** (classic: **Front Desk → Setup → Accounting Integration**) dan masukkan kode akun dan pajak default untuk pendapatan kamar, extras, pajak, biaya tambahan kartu, dan biaya layanan.
3. Setiap periode, buka **Reports → Operational → Accounting**, pilih tanggalnya, lalu klik **Export**.

Hanya invoice yang ditandai **final** yang diekspor, sebagai CSV (atau ZIP berisi CSV untuk periode besar) yang "designed for Xero and QuickBooks" untuk diimpor ([panduan penyiapan](https://help-platform.littlehotelier.com/en/articles/10397752-accounting-exports-setup-guide), [panduan ekspor](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final)). Di Spanyol, e-invoicing VeriFactu tercantum di antara fitur paket pada [halaman harga](https://www.littlehotelier.com/pricing/).

Di sinilah para pengulas paling banyak mengkritik. Di [Capterra](https://www.capterra.com/p/144307/Little-Hotelier/reviews/), pengguna menulis bahwa "the reports and syncing to accounting software can be improved". Jika yang sebenarnya diinginkan akuntan Anda adalah setiap PDF invoice untuk satu kuartal, lihat [unduh semua invoice Little Hotelier sekaligus](/blog/download-all-little-hotelier-invoices).

## Check-in online dan pendaftaran tamu

App Store memiliki beberapa aplikasi check-in, dengan kisaran harga yang ditampilkan halamannya (Oktober 2026):

- **Chekin** (USD 0-50/bulan): verifikasi ID dengan pencocokan biometrik, formulir registrasi digital, laporan untuk polisi dan statistik, serta pajak turis di 18 negara dan wilayah, termasuk Spanyol, Italia, Portugal, Prancis, Jerman, dan Thailand ([artikel bantuan](https://help-platform.littlehotelier.com/en/articles/10390472-connect-to-chekin)).
- **Duve** (USD 0-50): check-in online, aplikasi tamu, dan pengingat ulasan.
- **Vikey** (USD 0-50): self check-in dan kunci pintar.
- **Abitari Kiosk**, **OpenKey**, dan **Akia**: kiosk, kunci seluler, dan check-in tanpa kontak.

Little Hotelier juga punya opsi bawaan. Dengan add-on **Guest Engagement**, formulir check-in kepatuhan dapat mengirim data tamu ke otoritas di Italia, Spanyol, Portugal, Jerman, Swiss, Austria, Kroasia, Republik Ceko, dan Kolombia ([sumber](https://help-platform.littlehotelier.com/en/articles/10066500-automated-compliance-reporting)). Properti di Spanyol dapat melihat kecocokannya dengan SES Hospedajes di [SES Hospedajes dengan Little Hotelier](/blog/ses-hospedajes-little-hotelier), dan aturan setiap negara ada di [aturan pendaftaran tamu per negara](/blog/guest-registration-rules-by-country).

Jika Anda memakai Chekin, userscript gratis **Chekin Connection** menampilkan status check-in Chekin di dalam reservasi Little Hotelier: tamu yang ditemukan, nomor telepon, dan nomor ID, dengan tombol untuk menyalin dokumen ke reservasi untuk invoice.

::screenshot{src="/images/scripts/show-chekin/to.png" alt="Reservasi Little Hotelier dalam bahasa Spanyol dengan panel Chekin: status ditemukan 1 tamu, tabel berisi nama, telepon, dan dokumen ID, serta tombol Use document dan View in Chekin" caption="Skrip gratis Chekin Connection menampilkan data check-in tanpa meninggalkan reservasi."}
::

Pasang dari [Chekin Connection](/tools/ui/show-chekin); [panduan pemasangan](/tools/ui/instructions) hanya butuh beberapa menit.

## Harga dan revenue management

Aplikasi revenue management di App Store antara lain **RoomPriceGenie**, **Smartpricing**, **Happyhotel**, dan **Pricepoint**. Pusat bantuan juga menyebut **Aiosell** dan **Right Revenue** ([sumber](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store)).

Satu batasan yang perlu diketahui sebelum berlangganan: pusat bantuan versi classic menyebut RMS yang terhubung "can control rate updates, not restrictions". Minimum stay dan stop sell tetap di Little Hotelier ([sumber](https://helpcentre.littlehotelier.com/en/articles/15165178-little-hotelier-app-store)).

Opsi milik Little Hotelier sendiri adalah **Dynamic Revenue Plus**, add-on pada paket Pro dengan rekomendasi harga berbasis data. Paket Pro sendiri sudah mencakup laporan harga kompetitor dan rate parity.

Hotelier Tools menambahkan harga kompetitor dari Booking.com dan Google (beta) serta rekomendasi harga dengan "Why?" langkah demi langkah (alpha). Tidak ada yang berubah di Little Hotelier sampai Anda mengonfirmasi. Lihat [dynamic pricing untuk hotel kecil di Little Hotelier](/blog/dynamic-pricing-little-hotelier).

## Pesan tamu dan WhatsApp

Secara bawaan, **Messaging hub** di Guest Engagement menyatukan riwayat WhatsApp, Airbnb, SMS (lewat Twilio), Booking.com, dan email dalam satu inbox. WhatsApp berjalan di WhatsApp Business API: balasan dalam jendela 24 jam gratis, pesan template ditagih oleh WhatsApp ([sumber](https://help-platform.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

Alternatif di App Store antara lain **GuestTouch**, **Akia**, **Guest Talk**, **Bookboost**, **HelloShift**, **Hinstant**, dan **Zingle**.

::callout{type="tip" title="Tamu Booking.com tidak menerima email Anda?"}
Booking.com memblokir email dan tautan dari sistem yang tidak dikenalnya. Little Hotelier meminta Anda menambahkan `@app.littlehotelier.com` dan `@guestjoy.com` sebagai alamat email, serta `siteminder.com` dan `guestjoy.com` sebagai tautan di extranet, di bawah **Property → Messaging preferences → Security settings** ([langkah-langkah](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).
::

Hotelier Tools juga punya inbox tamu (alpha): WhatsApp, Gmail, Outlook atau akun email IMAP mana pun, dan pesan Booking.com dalam satu daftar, dengan balasan yang disusun AI dan disetujui oleh manusia. Koneksi WhatsApp-nya memakai sesi WhatsApp Web (WAHA), bukan Business API resmi. Bandingkan opsinya di [WhatsApp dengan Little Hotelier](/blog/whatsapp-little-hotelier).

## Integrasi AI dan API

"Integrasi AI" bisa berarti dua hal berbeda bagi properti Little Hotelier.

**AI yang menjual kamar Anda.** Demand Plus mencakup **AI bookings**: properti Anda bisa muncul di ChatGPT dan Claude lewat mitra DirectBooker, memakai tarif real-time, dan tamu menyelesaikan reservasi di booking engine Anda. Fitur ini dalam beta dengan komisi 0% sampai 30 November 2026; mulai 1 Desember 2026, berlaku 6% plus pajak untuk AI bookings yang selesai, dan Anda tidak bisa memilih keluar ([sumber](https://help-platform.littlehotelier.com/en/articles/16654506-ai-bookings-in-demand-plus)). Chatbot seperti HiJiffy dan Book Me Bob terpasang ke booking engine.

**AI yang bekerja pada data Anda sendiri.** Di sini tidak ada opsi resmi. Little Hotelier tidak memberi properti API key untuk reservasi atau tamu (jawaban lengkapnya ada di [apakah Little Hotelier punya API?](/blog/little-hotelier-api)).

Hotelier Tools mengisi celah itu dengan REST API dan MCP server (keduanya beta). Ini produk independen yang terhubung dengan login Little Hotelier Anda sendiri, disimpan terenkripsi. Dengannya Anda bisa:

- bertanya kepada Claude atau ChatGPT tentang kedatangan, saldo, atau invoice yang belum ada ([apa itu MCP server](/blog/what-is-mcp-server-hotels), [hubungkan ChatGPT](/blog/connect-chatgpt-to-little-hotelier))
- mengisi Google Sheet setiap bulan ([ekspor reservasi ke Excel](/blog/export-little-hotelier-reservations-excel))
- menghubungkan tool yang tidak punya aplikasi App Store, dengan skrip kecil

::demo-cta{path="/developer/rest-api"}
::

## Userscript gratis untuk menutup celah kecil

Sebagian kekurangan tidak butuh integrasi, hanya tampilan yang lebih baik. [Userscript](/tools/ui) gratis berjalan di browser Anda lewat Tampermonkey, hanya mengubah tampilan Little Hotelier bagi Anda, dan tetap gratis selamanya. Yang berguna di samping integrasi di atas:

- [Show Booking.com Commissions](/tools/ui/show-booking-commissions): perkiraan komisi Booking.com dan pendapatan bersih Anda, di dalam reservasi.
- [Prices Display](/tools/ui/prices-display): tarif Anda di tampilan kalender.
- [Easy Save Province and Country](/tools/ui/easy-save-province-country): daftar pilihan provinsi Spanyol yang juga mengisi negara.
- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button): cetak invoice tanpa membuka menu.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Ringkasan reservasi Little Hotelier dalam bahasa Spanyol dengan baris tambahan untuk biaya transfer, komisi Booking.com, total komisi dengan PPN, dan perkiraan pendapatan bersih" caption="Show Booking.com Commissions menambahkan perkiraan komisi dan pendapatan bersih pada setiap reservasi Booking.com."}
::

Seluruh set ada di [halaman ekstensi browser](/chrome-extensions), dan [ekstensi Chrome gratis untuk Little Hotelier](/blog/little-hotelier-chrome-extensions) menjelaskan masing-masingnya.

## Langkah berikutnya

- Butuh check-in, upselling, atau ulasan? Mulai dari App Store dan minta uji coba gratis.
- Butuh akuntansi? Petakan kode Anda sekali di **Setup → Accounting exports**, lalu ekspor invoice final setiap bulan.
- Butuh data Anda sendiri di sheet, skrip, atau asisten AI? Gunakan lapisan API seperti [API & MCP Hotelier Tools](/tools/bot/api-mcp), gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.
