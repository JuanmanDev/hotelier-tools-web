---
title: "Cara menghubungkan ChatGPT ke Little Hotelier (plus 18 prompt untuk hotel kecil)"
seoTitle: "Hubungkan ChatGPT ke Little Hotelier + 18 prompt hotel"
description: "Hubungkan ChatGPT ke Little Hotelier lewat developer mode dan aplikasi MCP, cek izin paket Anda, plus 18 prompt untuk kedatangan, pembayaran, dan harga."
date: 2026-10-03
category: ai
tags: [chatgpt, mcp, ai, prompts, little hotelier]
keywords: [menghubungkan chatgpt ke little hotelier, chatgpt mcp connector, connector chatgpt mcp, prompt chatgpt untuk hotel, chatgpt untuk manajemen hotel, chatgpt developer mode mcp]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-oauth-consent.webp
coverAlt: "Halaman Authorize MCP access di Hotelier Tools yang dibuka asisten AI saat terhubung, dengan pemberitahuan token 30 hari serta tombol Deny dan Allow access"
faq:
  - q: "Paket ChatGPT mana yang bisa terhubung ke Little Hotelier?"
    a: "Per Oktober 2026, pusat bantuan OpenAI menyatakan dukungan MCP penuh, termasuk aksi tulis, untuk Business, Enterprise, dan Edu di web, sedangkan Pro bisa menghubungkan aplikasi MCP dengan izin baca dan fetch di developer mode. Dokumentasi developer OpenAI juga mencantumkan Plus. Free dan Go tidak tercantum. Periksa apa yang ditampilkan akun Anda sendiri."
  - q: "Bisakah saya memakai API key alih-alih login?"
    a: "Tidak. OpenAI menyatakan ChatGPT tidak bisa menyodorkan API key kustom ke server MCP, jadi pilih OAuth. Anda masuk ke Hotelier Tools di jendela browser dan menekan Allow access."
  - q: "Bisakah ChatGPT mengubah reservasi atau harga saya?"
    a: "Hanya jika paket Anda mengizinkan aksi tulis dan Anda mengonfirmasinya. OpenAI secara default meminta konfirmasi sebelum aksi tulis. Hotelier Tools tidak menambahkan persetujuan kedua di luar dashboardnya, dan memblokir sepenuhnya refund, pengiriman invoice lewat email, pengajuan laporan INE, dan aksi lain yang tidak bisa dibatalkan untuk ChatGPT."
  - q: "Apakah ini berfungsi di aplikasi seluler ChatGPT?"
    a: "Tidak untuk aplikasi MCP kustom. Pusat bantuan OpenAI menyatakan aplikasi MCP developer mode hanya untuk web. Pakai chatgpt.com di browser."
  - q: "Apakah data tamu saya dipakai untuk melatih model OpenAI?"
    a: "Di Business, Enterprise, dan Edu, OpenAI menyatakan tidak melatih model dari informasi aplikasi yang terhubung secara default. Di Free, Plus, Go, dan Pro, hal itu mungkin terjadi jika Improve the model for everyone aktif di Data controls. Matikan sebelum menghubungkan data hotel."
  - q: "Claude atau ChatGPT: mana yang lebih baik untuk tugas hotel?"
    a: "Keduanya bekerja dengan server Hotelier Tools yang sama. Per Oktober 2026, Claude mengizinkan custom connector dengan tool tulis di semua paket, termasuk Free (satu connector), sedangkan ChatGPT membatasi MCP baca-tulis penuh untuk Business, Enterprise, dan Edu. Pilih asisten yang sudah dipakai tim Anda."
---

Ya, Anda bisa menghubungkan ChatGPT ke Little Hotelier. Aktifkan **developer mode** di ChatGPT, buat aplikasi yang mengarah ke server MCP Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`) dengan **OAuth**, lalu masuk ke Hotelier Tools. Apa yang bisa dilakukan ChatGPT setelah itu bergantung pada paket Anda: per Oktober 2026, OpenAI menyediakan akses baca-tulis penuh untuk Business, Enterprise, dan Edu, sedangkan Pro (dan, menurut dokumentasi developer OpenAI, Plus) terhubung dengan izin hanya-baca.

Di bawah ini langkah-langkah seperti yang didokumentasikan OpenAI saat ini, apa yang perlu Anda periksa di akun Anda sendiri, dan 18 prompt yang berguna untuk hotel kecil.

## Yang Anda butuhkan sebelum mulai

- **Paket ChatGPT dengan developer mode.** [Panduan developer mode](https://developers.openai.com/api/docs/guides/developer-mode) OpenAI mencantumkan akun Pro, Plus, Business, Enterprise, dan Education, di web. [Pusat bantuannya](https://help.openai.com/en/articles/12584461) menambahkan bahwa **MCP penuh, termasuk aksi tulis, untuk Business dan Enterprise/Edu**, dan bahwa Pro hanya bisa terhubung dengan izin baca dan fetch.
- **Browser di komputer.** OpenAI menyatakan aplikasi MCP kustom hanya untuk web, tidak ada di aplikasi seluler.
- **Akun Hotelier Tools** dengan Little Hotelier terhubung di **Credentials** (`/credentials`). Login pemilik memiliki akses API yang Anda butuhkan. Hotelier Tools gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

::callout{type="info" title="Yang sudah kami periksa, dan yang perlu Anda periksa"}
Server Hotelier Tools mendukung metode masuk yang dipakai ChatGPT: OAuth dengan PKCE dan registrasi klien otomatis. Menu dan aturan paket ChatGPT sering berubah, dan kami belum menguji setiap paket dari ujung ke ujung. Di akun Anda, pastikan tiga hal: **Developer mode** muncul, tool Hotelier Tools muncul setelah Anda terhubung, dan apakah paket Anda mengizinkan ChatGPT menjalankan aksi tulis.
::

Hotelier Tools independen. Layanan ini tidak berafiliasi dengan atau didukung oleh OpenAI, SiteMinder, maupun Little Hotelier, dan terhubung memakai login Little Hotelier milik properti Anda sendiri.

## Cara menghubungkan ChatGPT ke Little Hotelier, langkah demi langkah

Langkah-langkah ini mengikuti [panduan koneksi](https://developers.openai.com/plugins/deploy/connect-chatgpt) OpenAI per Oktober 2026. Jika tampilan Anda berbeda, jalur lama dari pusat bantuan dicantumkan di setiap langkah.

1. Buka [chatgpt.com](https://chatgpt.com) di browser dan buka **Settings → Security and login**. Aktifkan **Developer mode**. (Beberapa akun menampilkannya di **Settings → Apps → Advanced settings**.)
2. Buka **Plugins** ([chatgpt.com/plugins](https://chatgpt.com/plugins)) dan tekan tombol **+** untuk membuat aplikasi developer mode. (Tampilan lama: **Settings → Apps → Create**.)
3. Isi formulirnya:
   - **Name:** `Hotelier Tools`
   - **Description:** `Reservations, guests, invoices and prices from my Little Hotelier property`
   - **MCP server URL:** `https://dashboard.hotelier.tools/api/mcp`
   - **Authentication:** **OAuth**
4. Buat aplikasinya. ChatGPT mungkin menampilkan **Scan Tools** terlebih dahulu. Jendela Hotelier Tools akan terbuka.
5. Masuk ke Hotelier Tools. Di **Authorize MCP access**, pilih properti jika Anda punya beberapa lalu tekan **Allow access**.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="Kartu Authorize MCP access: AI assistant (MCP client) ingin mengakses akun Hotelier Tools Anda lewat MCP API, email yang sedang masuk, token yang kedaluwarsa dalam 30 hari, serta tombol Deny dan Allow access" caption="Tekan Allow access. ChatGPT tidak pernah melihat kata sandi Hotelier Tools atau Little Hotelier Anda." path="/oauth/authorize" width="472" height="327"}
::

6. Tinjau daftar tool yang ditemukan ChatGPT. Aplikasi muncul dengan label **Dev**.
7. Mulai chat baru. Buka menu **+**, pilih **Developer mode** dan pilih **Hotelier Tools** (akun yang lebih baru juga memungkinkan Anda mengetik `@` lalu memilihnya).

Login berlaku **30 hari**. Setelah itu, ChatGPT meminta Anda menghubungkan ulang. Anda bisa melihat dan mencabut koneksi di Hotelier Tools pada **Developer → API Keys** (`/developer/api-keys`), tempat koneksi itu bertanda **MCP client**.

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="Halaman API keys di Hotelier Tools dengan formulir Generate a new key, daftar Active keys berisi satu key tersamar dengan tombol Revoke, dan catatan Good security practice" caption="Key dan koneksi terdaftar di Active keys. Cabut salah satunya untuk memutus aksesnya seketika." path="/developer/api-keys"}
::

### Di workspace Business, Enterprise, atau Edu

Di **Business**, OpenAI menyatakan hanya admin dan pemilik yang bisa memakai developer mode dan menerbitkan aplikasi. Untuk membagikan aplikasi kepada rekan kerja, admin menerbitkannya dari **Workspace settings → Apps → Drafts → Publish**. Di **Enterprise dan Edu**, admin bisa memberi developer mode kepada anggota tertentu dengan akses berbasis peran. Setiap orang tetap masuk ke Hotelier Tools dengan login yang memiliki akses API.

### Mengapa bukan API key?

[Dokumentasi autentikasi](https://developers.openai.com/plugins/build/auth) OpenAI menyatakan ChatGPT "cannot present custom API keys". Jadi API key `htk_` yang berfungsi di [Claude Code, Cursor, dan VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) tidak dipakai di sini. Login lewat browser adalah jalan masuknya.

## 18 prompt yang berguna untuk hotel kecil

Mulai setiap chat dengan Hotelier Tools terpilih. Menyebutnya di dalam prompt membantu ChatGPT memakai data Anda, bukan web. Nomor reservasi di bawah ini fiktif.

### Kedatangan dan kamar

::prompt{label="ChatGPT"}
Dengan Hotelier Tools, siapa yang check-in hari ini? Tampilkan tamu, jumlah malam, tipe kamar, dan apakah kamarnya sudah dialokasikan.
::

::prompt{label="ChatGPT"}
Reservasi mana yang check-in dalam 7 hari ke depan dan belum dialokasikan ke kamar?
::

::prompt{label="ChatGPT"}
Siapa yang check-out hari ini, dan apakah ada yang saldonya belum lunas?
::

::prompt{label="ChatGPT"}
Berapa kamar tiap tipe yang masih tersedia malam ini dan besok malam?
::

### Pembayaran dan invoice

::prompt{label="ChatGPT"}
Tampilkan reservasi yang check-in dalam 14 hari ke depan dengan saldo belum lunas, urutkan dari jumlah terbesar.
::

::prompt{label="ChatGPT"}
Reservasi mana yang check-out minggu lalu dan masih belum punya invoice? Untuk masing-masing, jelaskan mengapa belum bisa dibuatkan invoice.
::

::prompt{label="ChatGPT"}
Apakah reservasi BDC-1234567890 siap dibuatkan invoice? Jika belum, apa persisnya yang kurang?
::

::prompt{label="ChatGPT"}
Tulis pengingat pembayaran yang singkat dan ramah untuk setiap tamu yang check-in minggu ini dengan saldo belum lunas. Jangan kirim apa pun; cukup berikan teksnya.
::

### Harga dan ketersediaan

::prompt{label="ChatGPT"}
Tampilkan tarif dan ketersediaan saya untuk Jumat dan Sabtu depan per tipe kamar.
::

::prompt{label="ChatGPT"}
Bandingkan harga saya untuk 14 malam ke depan dengan harga kompetitor yang Anda miliki. Pada malam mana saya paling murah, dan pada malam mana paling mahal?
::

::prompt{label="ChatGPT"}
Jelaskan langkah demi langkah mengapa harga rekomendasi untuk kamar double pada Sabtu 14 November adalah sebesar itu.
::

::prompt{label="ChatGPT"}
Malam mana dalam 30 hari ke depan yang okupansinya paling rendah? Sarankan mana yang sebaiknya saya lihat lebih dulu.
::

### Tamu

::prompt{label="ChatGPT"}
Cari tamu yang nomor teleponnya berakhiran 4521 dan tampilkan riwayat serta jadwal menginapnya.
::

::prompt{label="ChatGPT"}
Apakah ada tamu yang check-in dalam 7 hari ke depan yang cocok dengan daftar do-not-rebook saya?
::

::prompt{label="ChatGPT"}
Tamu mana yang check-in minggu ini yang masih belum melengkapi dokumen identitas atau alamat?
::

### Laporan

::prompt{label="ChatGPT"}
Ringkas bulan lalu: kedatangan, malam terjual per tipe kamar, pembatalan, dan no-show. Sajikan dalam tabel.
::

::prompt{label="ChatGPT"}
Apa yang dikerjakan tugas terjadwal minggu ini, dan apakah ada yang gagal? Jelaskan kegagalannya dengan bahasa sederhana.
::

::prompt{label="ChatGPT"}
Siapa saja yang ada di waiting list, untuk tanggal berapa, dan apakah ada yang sudah tersedia untuk mereka?
::

Jawaban hanya sebaik data di Little Hotelier. Jika sebuah angka tampak keliru, minta ChatGPT menampilkan reservasi yang ia pakai.

## ChatGPT yang terhubung vs salin-tempel: apa bedanya?

Tanpa koneksi, Anda mengekspor laporan dari Little Hotelier, menempelkannya ke ChatGPT, lalu bertanya. Cara itu cukup untuk analisis sekali pakai, tetapi datanya hanya potret sesaat, ekspor Anda mungkin kehilangan beberapa kolom, dan daftar tamu yang Anda tempel tetap tersimpan di chat.

Dengan aplikasi MCP, ChatGPT meminta Hotelier Tools persis apa yang ia butuhkan, saat ia membutuhkannya: kedatangan hari ini, saldo satu tamu, tarif minggu depan. Anda tidak mengekspor apa pun, dan jawabannya mencerminkan kondisi Little Hotelier pada saat itu.

Jika Anda tetap menginginkan spreadsheet, lihat [mengekspor reservasi ke Excel](/blog/export-little-hotelier-reservations-excel).

## Bisakah ChatGPT membuat perubahan, dan bagaimana persetujuannya?

Di paket dengan MCP penuh, bisa. Hotelier Tools menyediakan tool tulis seperti memperbarui reservasi (pertama usulan sebelum/sesudah, lalu langkah penerapan), mencatat pembayaran, mendaftarkan masa inap untuk [invoice saat check-out](/blog/send-invoice-to-guest-at-checkout), dan menerapkan harga.

::callout{type="warning" title="Konfirmasi ChatGPT adalah satu-satunya persetujuan"}
Di dalam dashboard Hotelier Tools, setiap perubahan menunggu kartu persetujuan. Di luarnya, tidak ada: **tool tulis berjalan saat ChatGPT memanggilnya.** OpenAI menyatakan "write actions by default require confirmation" dan memperingatkan bahwa aksi tulis yang salah "could destroy data". Baca setiap konfirmasi sebelum Anda menerimanya.
::

Aturan praktis:

- **Biarkan izin aplikasi di Always ask.** [Izin aplikasi](https://help.openai.com/en/articles/20001495) OpenAI berkisar dari **Always ask** sampai **Allow all actions**; yang terakhir melewati konfirmasi dan, menurut OpenAI, membawa "elevated risk" (risiko lebih tinggi). ChatGPT menganggap tool apa pun yang tidak berlabel hanya-baca sebagai aksi tulis, jadi bersiaplah melihat konfirmasi bahkan untuk beberapa pencarian data.
- **Jangan biarkan ia mengingat persetujuan untuk aksi tulis** dalam percakapan panjang. Pilihan yang diingat hanya bertahan di chat itu, tetapi satu chat bisa melakukan banyak hal.
- **Waspadai instruksi tersembunyi di pesan tamu.** OpenAI memperingatkan soal prompt injection. Jika ChatGPT mengusulkan sesuatu yang tidak Anda minta, tolak.

Beberapa aksi tidak pernah tersedia untuk ChatGPT, apa pun yang Anda setujui. Tool yang tidak bisa dibatalkan diblokir untuk setiap klien luar, termasuk mengirim invoice lewat email ke tamu, refund, pengajuan survei INE, mengirim undangan tim, mengirim tautan invoice tamu lewat email, menjawab pertanyaan Booking.com, dan menjalankan pengecekan waiting list yang mengirim pesan ke tamu. Semua itu tetap di [asisten dashboard](/blog/ai-assistant-hotel-front-desk), di balik kartu.

## Privasi: ke mana data pergi?

Ketika ChatGPT memanggil tool Hotelier Tools, hasilnya, seperti nama tamu, tanggal, dan jumlah, masuk ke percakapan dan diproses oleh OpenAI.

Menurut [artikel aplikasi terhubung](https://help.openai.com/en/articles/11487775) OpenAI, per Oktober 2026:

- Di **Business, Enterprise, dan Edu**, OpenAI "does not use information accessed from connectors to train models by default".
- Di **Free, Plus, Go, dan Pro**, OpenAI "may use information accessed from apps to train our models" jika **Improve the model for everyone** aktif. Matikan di [Data controls](https://help.openai.com/en/articles/7730893) sebelum menghubungkan data hotel.
- Memori ChatGPT mungkin menyimpan detail yang dibacanya lewat aplikasi. Tinjau **Memory** di pengaturan jika itu penting bagi Anda.

Data tamu adalah data pribadi, dan hotel Anda tetap bertanggung jawab atasnya. Mintalah hanya yang Anda butuhkan.

::demo-cta{path="/developer/mcp-setup"}
::

## Pemecahan masalah

- **Developer mode tidak muncul.** Paket Anda mungkin tidak menyertakannya, atau di Business hanya admin yang bisa memakainya. Di Enterprise dan Edu, minta admin untuk memberikannya.
- **Tool Hotelier Tools tidak muncul, atau hanya sebagian.** Paket Anda mungkin hanya mengizinkan izin baca dan fetch. Cek pusat bantuan OpenAI untuk paket Anda, atau pakai [Claude](/blog/connect-claude-to-little-hotelier), yang mengizinkan custom connector dengan tool tulis di semua paket.
- **ChatGPT berhenti bekerja dengan aplikasi setelah sebulan.** Login berlaku 30 hari. Hubungkan ulang dari **Settings → Plugins** (atau **Apps**).
- **Error "No Little Hotelier credentials configured".** Hubungkan Little Hotelier di **Credentials** di Hotelier Tools terlebih dahulu.
- **"lh_frozen" atau serupa.** Login Little Hotelier dijeda setelah login gagal, biasanya karena kata sandi kedaluwarsa. Simpan kata sandi baru di **Credentials** atau tekan **Check now & resume**.

## Ringkasan

- Aktifkan developer mode, buat aplikasi dengan URL `https://dashboard.hotelier.tools/api/mcp` dan **OAuth**, lalu tekan **Allow access**.
- Cek paket Anda: MCP baca-tulis penuh untuk Business, Enterprise, dan Edu; Pro, dan mungkin Plus, mendapat izin hanya-baca, menurut OpenAI.
- Biarkan izin aplikasi di **Always ask**; refund dan aksi lain yang tidak bisa dibatalkan tetap diblokir.
- Baru mengenal MCP? Mulai dari [apa itu MCP server](/blog/what-is-mcp-server-hotels). Semua tool ada di [halaman API & MCP](/tools/bot/api-mcp).
