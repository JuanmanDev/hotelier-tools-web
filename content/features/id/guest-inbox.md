---
title: "Satu kotak masuk tamu untuk WhatsApp, email, dan Booking.com"
---

Kotak masuk tamu menyatukan pesan WhatsApp, email, dan Booking.com dalam satu daftar, dengan reservasi Little Hotelier di samping setiap percakapan. AI menyusun draf setiap balasan dari FAQ dan catatan rumah Anda sendiri, dan secara default seseorang menyetujuinya sebelum apa pun terkirim.

## Cara kerjanya

1. **Hubungkan kanal Anda.** Booking.com lewat **Credentials > Booking.com extranet** dengan login partner dan faktor kedua Anda. Email dari Google, Microsoft, atau akun IMAP/SMTP mana pun. WhatsApp lewat sesi WhatsApp Web (WAHA).
2. **Pesan datang di samping pemesanannya.** Percakapan Booking.com otomatis ditautkan ke reservasinya. Pertanyaan tanya-jawab tamu dari halaman Booking.com Anda masuk ke kotak masuk yang sama.
3. **Pilih mode balasan per akun** di **Channels** (`/messaging/channels`): **Off**, **Draft** (default, tidak ada yang terjadi sampai Anda menyetujui), **Automatic reply** setelah jeda yang Anda tentukan, atau **Autonomous**.
4. **Ajari jawaban Anda.** Di **FAQ & knowledge** (`/messaging/faq`), tambahkan halaman atau teks FAQ Anda dan catatan rumah seperti wifi dan parkir. Perbaiki satu balasan, dan asisten belajar darinya.
5. **Permintaan faktur dikenali tanpa AI.** Pesan permintaan faktur dari Booking.com menawarkan untuk mendaftarkan masa menginap tersebut ke faktur saat check-out.

Detail pengaturan per kanal: [WhatsApp dengan Little Hotelier](/blog/whatsapp-little-hotelier) dan [mengelola pesan tamu Booking.com](/blog/booking-com-guest-messages).

## Yang Anda butuhkan

- Little Hotelier terhubung di **Credentials**, dan kartu properti Anda terisi di `/settings/property`.
- Untuk WhatsApp, server WAHA: alamatnya, nama sesi, dan kunci API.
- Kredit AI. Setiap pesan yang dibaca dan disusun drafnya oleh AI memakainya, dan ditampilkan di **AI credits** (`/messaging/credits`).

## Batasan dan hal yang perlu diketahui

- **Status: alpha.** Ini versi awal dan sering berubah.
- **Booking.com tetap dikirim oleh manusia.** AI tidak pernah mengirim sendiri ke tamu Booking.com. Mengirim balasan yang sudah Anda setujui kembali ke Booking.com dari kotak masuk belum dijanjikan: salin ke Extranet atau Pulse.
- **AI tamu tidak punya alat.** Ia mengembalikan rencana dari daftar tertutup dan tidak pernah bisa membatalkan, mengubah tanggal, atau menyentuh pembayaran.
- **Ia hanya melihat pemesanan untuk pengirim yang terverifikasi:** nomor telepon yang cocok dengan 8 digit terakhir, email yang persis sama, atau percakapan Booking.com.
- **Layanan yang tidak Anda cantumkan** dijawab "perlu dikonfirmasi", tidak pernah ya.
- **WhatsApp lewat WAHA bukan API resmi.** Nomor yang dipakai dengan cara ini bisa diblokir, jadi balas hanya tamu yang menulis lebih dulu. Obrolan grup diabaikan.
- Balasan otomatis berhenti pada 4 per jam atau 12 per hari.
