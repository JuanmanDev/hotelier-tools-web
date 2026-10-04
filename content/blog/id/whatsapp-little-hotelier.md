---
title: "Cara memakai WhatsApp dengan Little Hotelier (Messaging hub, WhatsApp Business, dan opsi lain)"
seoTitle: "WhatsApp dengan Little Hotelier: pilihan Anda di 2026"
description: "Messaging hub Little Hotelier memakai WhatsApp Business API resmi. Bandingkan dengan aplikasi WhatsApp Business gratis dan inbox bersama, plus template."
date: 2026-10-03
category: guests
tags: [whatsapp, messaging, little hotelier, guest engagement, inbox]
keywords: [whatsapp untuk hotel, little hotelier whatsapp, whatsapp business api hotel, aplikasi whatsapp business hotel, template whatsapp check-in hotel, little hotelier messaging hub]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/guest-inbox-ai-plan-late-arrival.webp
coverAlt: "Inbox tamu Hotelier Tools dengan percakapan WhatsApp dari Ingrid Kowalski tentang kedatangan larut malam (identitas terverifikasi, reservasi tertaut), rencana AI berupa draf dengan balasan yang bisa diedit, dan panel Assistant pribadi"
faq:
  - q: "Apakah Little Hotelier punya WhatsApp?"
    a: "Ya, lewat Messaging hub di add-on Guest Engagement. Terhubung ke WhatsApp Business API resmi, menautkan percakapan ke reservasi tamu, dan memungkinkan beberapa pengguna membalas dari satu nomor."
  - q: "Bisakah saya mempertahankan nomor aplikasi WhatsApp Business saat menghubungkan Messaging hub?"
    a: "Tidak di keduanya sekaligus. Nomor yang terhubung ke WhatsApp Business API tidak bisa dipakai juga di aplikasi WhatsApp Business. Anda harus menghapusnya dari aplikasi lebih dulu, dan riwayat chat aplikasi tidak bisa dipulihkan, jadi Little Hotelier menyarankan pengujian dengan nomor lain."
  - q: "Berapa biaya WhatsApp untuk hotel kecil?"
    a: "Aplikasi WhatsApp Business gratis. Di WhatsApp Business Platform (API di balik Messaging hub), Meta menagih per pesan template yang terkirim, sedangkan balasan dalam jendela layanan pelanggan 24 jam gratis. Little Hotelier tidak menambah biaya WhatsApp, tetapi Guest Engagement sendiri adalah add-on berbayar."
  - q: "Bisakah saya mengirim pesan otomatis sebelum kedatangan lewat WhatsApp?"
    a: "Di Messaging hub Anda memulai percakapan WhatsApp dengan template yang sudah disetujui WhatsApp, seperti petunjuk check-in. Aplikasi WhatsApp Business gratis hanya mengotomatisasi pesan sapaan (greeting) dan pesan di luar jam kerja (away message)."
  - q: "Apakah koneksi WhatsApp Hotelier Tools adalah WhatsApp Business API resmi?"
    a: "Bukan. Koneksi ini memakai WAHA, yang menjalankan sesi WhatsApp Web. Artinya tidak ada verifikasi Meta atau persetujuan template, tetapi WhatsApp tidak mengizinkan klien tidak resmi, sehingga nomor yang dipakai dengan cara ini bisa diblokir. Gunakan terutama untuk menjawab tamu yang menulis kepada Anda."
  - q: "Apakah AI akan menjawab tamu WhatsApp dengan sendirinya?"
    a: "Hanya jika Anda memilih Automatic reply atau Autonomous untuk akun tersebut. Default-nya, Draft, menyiapkan balasan yang menunggu seseorang. Balasan otomatis juga memerlukan tamu terverifikasi, permintaan yang diizinkan, dan tingkat keyakinan yang cukup, serta dibatasi per jam dan per hari."
---

Ya, Little Hotelier terhubung ke WhatsApp secara bawaan lewat **Messaging hub**, bagian dari add-on berbayar **Guest Engagement**, memakai WhatsApp Business API resmi: membalas tamu yang menulis dalam 24 jam terakhir gratis, dan menulis lebih dulu memerlukan template yang disetujui dan ditagih oleh Meta. Jalur umum lainnya adalah aplikasi WhatsApp Business gratis di ponsel, yang tidak terhubung ke reservasi Anda. Hotelier Tools menambahkan opsi ketiga, WhatsApp dalam satu inbox bersama email dan Booking.com, lewat sesi WhatsApp Web (WAHA), bukan API resmi.

Detail Little Hotelier dan WhatsApp di bawah ini diperiksa terhadap halaman bantuan masing-masing per Oktober 2026.

## Apakah Little Hotelier mendukung WhatsApp?

Ya. **Messaging hub** di Guest Engagement menyatukan percakapan WhatsApp, Booking.com, Airbnb, SMS, dan email dalam satu inbox, dengan profil tamu dan reservasi yang tertaut ke setiap chat ([FAQ Messaging hub](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)). Guest Engagement adalah add-on, tercantum untuk paket Pro di [halaman harga](https://www.littlehotelier.com/pricing/) Little Hotelier.

Untuk menghubungkan WhatsApp ([Connect WhatsApp in Guest Engagement](https://helpcentre.littlehotelier.com/en/articles/9525852-connect-whatsapp-in-guest-engagement)):

1. Buka **Guest Engagement > Communication > Settings** dan klik **Configure** pada WhatsApp.
2. Verifikasi bisnis Anda dengan profil Facebook Anda (WhatsApp dan Facebook sama-sama milik Meta).
3. Buat atau tautkan akun dan profil WhatsApp Business Anda.
4. Tambahkan data pembayaran Anda. WhatsApp menagih Anda langsung; Little Hotelier tidak menambah biaya WhatsApp.

::callout{type="warning" title="Nomor Anda saat ini"}
Sebuah nomor tidak bisa berada di aplikasi WhatsApp Business dan Messaging hub pada saat yang sama. Untuk memindahkannya, cadangkan dan hapus dulu dari aplikasi; chat-nya tidak bisa dipulihkan di sana setelahnya. Little Hotelier menyarankan menguji Messaging hub dengan nomor lain terlebih dahulu.
::

## Aplikasi WhatsApp Business atau WhatsApp Business API?

| | Aplikasi WhatsApp Business | WhatsApp Business Platform (API) |
|---|---|---|
| Biaya | Gratis diunduh | Per pesan yang dikirim Meta; balasan dalam jendela 24 jam gratis |
| Tempat memakainya | Di ponsel, ditambah perangkat tertaut seperti WhatsApp Web | Lewat software seperti Messaging hub |
| Menulis lebih dulu | Kapan saja, kepada tamu yang setuju | Hanya dengan template yang disetujui WhatsApp |
| Tautan ke reservasi | Tidak ada | Tergantung software |

**Aplikasinya** memberi Anda profil bisnis, **quick replies** untuk jawaban yang sering dipakai, **greeting** dan **away message** otomatis, **labels** untuk memilah chat, dan katalog ([fitur aplikasi WhatsApp Business](https://whatsappbusiness.com/products/business-app-features/)). Cocok untuk B&B kecil yang dijawab oleh satu orang.

**Platform-nya** menagih "on a per-message basis for each message we deliver to users". Saat tamu menulis, jendela layanan pelanggan 24 jam terbuka, dan balasan Anda gratis selama jendela itu, yang diatur ulang setiap ada pesan dari tamu ([harga WhatsApp Business Platform](https://whatsappbusiness.com/products/platform-pricing/)). Di luar jendela itu Anda butuh template, dan persetujuannya bisa memakan waktu hingga 24 jam.

## Template WhatsApp untuk konfirmasi dan petunjuk check-in

Di Messaging hub, buat template di **Guest Engagement > Communication > Settings > WhatsApp > Templates** ([Create and manage WhatsApp templates](https://helpcentre.littlehotelier.com/en/articles/9525848-create-and-manage-whatsapp-templates)):

- **Template name:** huruf kecil dengan garis bawah, seperti `checkin_instructions`. Tamu tidak pernah melihatnya.
- **Category:** **Utility** untuk konfirmasi reservasi, petunjuk check-in, dan pengingat pembayaran. **Marketing** untuk penawaran dan upsell, dengan tombol Unsubscribe. Promosi yang dikirim sebagai Utility akan ditolak.
- **Variables:** gunakan **Add variable** untuk nama tamu, tanggal, nama properti, dan alamat.

Tiga contoh yang bisa Anda sesuaikan (setiap tanda kurung menjadi variabel):

```text [whatsapp-templates.txt]
booking_confirmation (Utility)
Halo [nama tamu], reservasi Anda di [nama properti] sudah dikonfirmasi: [tanggal kedatangan] sampai [tanggal keberangkatan]. Balas pesan ini jika Anda punya pertanyaan.

checkin_instructions (Utility)
Halo [nama tamu], sampai jumpa pada [tanggal kedatangan]! Check-in mulai pukul [jam check-in] di [alamat]. Balas dengan perkiraan jam kedatangan Anda dan kami akan menyiapkan semuanya.

payment_reminder (Utility)
Halo [nama tamu], ada sisa pembayaran sebesar [jumlah] untuk reservasi Anda tanggal [tanggal kedatangan]. Anda bisa membayar dengan aman di sini: [tautan pembayaran]. Kami tidak pernah meminta data kartu di chat ini.
```

WhatsApp menolak template yang meminta informasi pribadi sensitif, jadi jangan meminta nomor ID atau kartu di dalamnya.

## Bisakah beberapa staf memakai satu nomor WhatsApp?

- **Messaging hub:** ya. API dibuat untuk itu: beberapa pengguna membalas dari satu inbox bersama, dan reservasi berada di samping setiap chat.
- **Aplikasi WhatsApp Business:** chat yang sama muncul di ponsel dan perangkat tertautnya, seperti WhatsApp Web di front desk. Tidak ada penugasan, dan tidak ada yang menautkan chat ke reservasi. Dengan Meta Verified, WhatsApp menyebut Anda bisa menautkan hingga 10 perangkat dan agen.
- **Hotelier Tools:** inboxnya adalah halaman web, jadi siapa pun yang login ke dashboard melihat percakapan yang sama, dengan reservasi di samping masing-masing.

Satu perubahan memengaruhi semua opsi: sejak 28 September 2026, Booking.com tidak lagi mengirim nomor telepon tamu ke channel manager, jadi reservasi Booking.com yang baru masuk ke Little Hotelier tanpa nomor ([Booking.com for developers](https://developers.booking.com/connectivity/docs/migration-guides/migrating-to-new-versions)). Salin nomornya dari Extranet (**Show phone number**) saat Anda ingin menulis kepada tamu tersebut di WhatsApp.

## WhatsApp, email, dan Booking.com dalam satu inbox dengan Hotelier Tools

**Inbox** Hotelier Tools (`/messaging`, alpha) menampilkan pesan WhatsApp, email, dan Booking.com dalam satu daftar. Untuk setiap percakapan, inbox menampilkan reservasinya dan draf balasan dari AI yang harus disetujui seseorang.

### Apa arti "WAHA, bukan API resmi" bagi Anda

WhatsApp sampai ke Hotelier Tools lewat [WAHA](https://waha.devlike.pro/docs/overview/introduction/), server yang menjalankan sesi WhatsApp Web. Sebelum Anda memilihnya:

- **Nomor Anda tetap di ponsel Anda.** Cara kerjanya seperti WhatsApp Web yang terbuka di komputer, jadi Anda tetap memakai aplikasi WhatsApp atau WhatsApp Business seperti biasa.
- **Tidak ada verifikasi bisnis Meta dan tidak ada persetujuan template**, karena tidak melewati WhatsApp Business Platform.
- **Tidak diizinkan secara resmi.** Dokumentasi WAHA sendiri menyebut "WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe." Nomor yang dipakai dengan cara ini bisa diblokir. Saran WAHA adalah membalas orang yang menulis kepada Anda, bukan memulai percakapan, dan tidak pernah mengirim pesan massal ([How to avoid blocking](https://waha.devlike.pro/docs/overview/how-to-avoid-blocking/)).
- **Anda butuh server WAHA.** Dashboard meminta alamatnya, nama sesi, dan API key. Tanyakan kepada Hotelier Tools apakah satu server dapat disediakan untuk properti Anda; jika tidak, Anda perlu menjalankan server sendiri.
- **Chat grup diabaikan.**

Jika Anda membutuhkan API resmi, Messaging hub adalah pilihan yang tepat. Jika Anda sebagian besar menjawab tamu yang mengirim pesan dan ingin WhatsApp berdampingan dengan email dan Booking.com, inbox ini lebih cocok.

### Cara menghubungkannya

1. Buka **Credentials > WhatsApp (WAHA)** (`/credentials/messaging-whatsapp`). Masukkan **WAHA base URL**, **Session name**, dan **WAHA API key**, lalu simpan.
2. Klik **Copy webhook URL** dan tempel ke webhook sesi WAHA Anda, untuk event "message". Perlakukan URL itu seperti kata sandi.
3. Tekan **Test connection**.
4. Buka **Inbox** dan filter dengan **WhatsApp**. Pesan masuk begitu terkirim.
5. Di **Channels** (`/messaging/channels`), pilih mode balasan untuk nomor ini. **Draft** adalah default: AI menyiapkan balasan dan tidak ada yang terkirim sampai Anda menyetujuinya.

::screenshot{src="/images/blog/demo/en/guest-inbox.webp" alt="Inbox tamu Hotelier Tools dengan filter All, WhatsApp, Email, dan Booking.com, empat percakapan WhatsApp dan email yang masing-masing bertanda draft, dan pemberitahuan kuning bahwa WhatsApp masuk lewat webhook dan URL yang dihasilkan harus ditempel ke sesi WAHA untuk event message" caption="WhatsApp, email, dan Booking.com dalam satu daftar, masing-masing dengan draf AI. Jika tidak ada yang masuk, periksa URL webhook di sesi WAHA Anda." path="/messaging"}
::

### Apa yang boleh dilakukan AI di WhatsApp

- **Ia hanya melihat reservasi jika pengirimnya terverifikasi.** Di WhatsApp, nomor harus cocok dengan telepon di reservasi setidaknya pada 8 digit terakhirnya. Jika dua tamu cocok, ia tidak melihat keduanya. Untuk tamu Booking.com, tambahkan telepon ke reservasi Little Hotelier agar chat bisa dicocokkan.
- **Ia menjawab dari fakta Anda.** Ia memakai FAQ, catatan hotel, dan kartu properti Anda (`/messaging/faq`), dan menjawab "akan dikonfirmasi" untuk apa pun yang belum Anda cantumkan.
- **Ia tidak punya tool.** Ia mengembalikan rencana dari daftar tertutup (kirim pesan, tandai untuk staf, tambah catatan reservasi, atur jam kedatangan). Ia tidak bisa membatalkan, mengubah tanggal, atau menyentuh pembayaran.
- **Balasan otomatis punya syarat.** Memerlukan tamu terverifikasi, permintaan yang diizinkan, dan tingkat keyakinan yang cukup, serta berhenti pada 4 balasan per jam, 12 per hari, atau 3 berturut-turut tanpa jawaban dari tamu.
- **Ia menunggu Anda dulu.** Pesan WhatsApp dianalisis setelah 5 menit; jika seseorang di tim Anda sudah membalas, tidak ada yang dianalisis atau ditagih. Setiap analisis memakai kredit AI.

Staf Anda juga bisa bertanya kepada AI tentang reservasi dengan menulis ke nomor terhubung yang sama, lewat **Staff assistant** (`/staff`, alpha). Pesan mereka tidak pernah masuk ke inbox tamu, dan setiap perubahan yang mereka minta menunggu persetujuan pemilik.

::screenshot{src="/images/blog/demo/en/guest-messaging-reply-modes-menu.webp" alt="Halaman Channels dengan menu When a guest writes terbuka pada koneksi WhatsApp (WAHA): Off, collect only; Draft, I approve everything (terpilih); Automatic reply, no reservation changes; Autonomous, replies and changes reservations" caption="Satu mode balasan per nomor. Draft menunggu seseorang." path="/messaging/channels"}
::

::demo-cta{path="/messaging"}
::

Cara inbox menangani percakapan Booking.com ada di [cara mengelola pesan tamu Booking.com](/blog/booking-com-guest-messages), dan daftar fitur lengkapnya ada di [halaman Guest inbox](/tools/bot/guest-inbox). Dashboard-nya gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh SiteMinder, Little Hotelier, WhatsApp, atau Meta. Layanan ini terhubung dengan login Little Hotelier hotel Anda sendiri.
::

## Persetujuan dan privasi di WhatsApp

Kebijakan Bisnis WhatsApp menyatakan Anda hanya boleh menghubungi orang yang telah memberikan nomornya kepada Anda dan "opt-in permission ... confirming that they wish to receive subsequent messages or calls from you" ([WhatsApp Business Policy](https://business.whatsapp.com/policy)). Dalam praktiknya:

- Tanyakan saat reservasi atau check-in apakah tamu ingin menerima kabar lewat WhatsApp, dan catat di reservasi.
- Pakai nomor hanya untuk masa inap mereka. Pemasaran memerlukan izinnya sendiri.
- Sebutkan di pemberitahuan privasi Anda bahwa Anda memakai WhatsApp, dan berhenti jika tamu memintanya.

## Ringkasan

- **Messaging hub** (add-on Guest Engagement) adalah opsi bawaan Little Hotelier yang memakai API resmi: inbox bersama, reservasi tertaut, template, biaya Meta untuk pesan yang Anda mulai.
- **Aplikasi WhatsApp Business** gratis dan cukup untuk satu orang, tetapi tidak tahu apa pun tentang reservasi Anda.
- **Inbox Hotelier Tools** menggabungkan WhatsApp dengan email dan Booking.com, dengan draf AI yang disetujui seseorang. Memakai sesi WhatsApp Web (WAHA), bukan API resmi, jadi batasi untuk percakapan yang dimulai tamu.
- Sejak 28 September 2026, reservasi Booking.com masuk tanpa nomor telepon: salin dari Extranet saat Anda membutuhkannya.
