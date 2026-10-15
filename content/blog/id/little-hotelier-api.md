---
title: "Little Hotelier punya API? Jawaban 2026 dan cara mengambil data Anda"
seoTitle: "Apakah Little Hotelier Punya API? (Jawaban 2026)"
description: "Tidak ada API key untuk reservasi atau tamu Anda. Apa yang resmi dari SiteMinder, dan cara membaca data Little Hotelier lewat REST dalam hitungan menit."
date: 2026-10-03
category: api
tags: [api, rest, little hotelier, siteminder, developers]
keywords: [little hotelier api, API Little Hotelier adalah, little hotelier api documentation, little hotelier api key, siteminder api, siteminder exchange api, little hotelier rest api]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/rest-api-reference.webp
coverAlt: "Halaman REST API reference di Hotelier Tools dengan base URL, unduhan openapi.json, kotak Quick authorize (kolom Bearer token, Authorize Swagger, Use my session), dan template kode dalam cURL, JavaScript, Python, dan PowerShell"
featured: true
faq:
  - q: "Apakah Little Hotelier punya API publik untuk reservasi saya?"
    a: "Tidak ada yang bisa dipakai properti untuk reservasinya sendiri, per Oktober 2026. API SiteMinder diperuntukkan bagi mitra teknologi bersertifikasi, dan API key Direct Booking yang bisa Anda buat sendiri hanya mencakup tarif, ketersediaan, dan detail properti untuk situs pemesanan."
  - q: "Apa itu SiteMinder Exchange (SMX), dan apakah mencakup Little Hotelier?"
    a: "SMX adalah API SiteMinder untuk aplikasi mitra seperti check-in, pesan tamu, dan tool revenue. Panduan pengembang SiteMinder mencantumkan Little Hotelier sebagai sumber reservasi untuk SMX, tetapi bukan sumber ketersediaan dan tarif. Hanya mitra bersertifikasi yang dapat terhubung."
  - q: "Bagaimana cara menjadi mitra integrasi SiteMinder, dan berapa lama prosesnya?"
    a: "Anda mengirim formulir pendaftaran integrasi SiteMinder, menandatangani perjanjian kemitraan, lalu membangun, mensertifikasi, dan meluncurkan integrasi. SiteMinder menyebut sebagian besar integrasi memerlukan sekitar 60 hari dari awal hingga live. Jalur ini ditujukan bagi perusahaan software, bukan satu hotel."
  - q: "Apakah API tidak resmi seperti Hotelier Tools aman dan diizinkan?"
    a: "Hotelier Tools masuk memakai login Little Hotelier Anda sendiri, menyimpannya terenkripsi (AES-256-GCM), dan hanya bisa melakukan apa yang bisa dilakukan login tersebut di aplikasi web Little Hotelier. Ini bukan integrasi resmi SiteMinder, jadi jika ragu, periksa perjanjian Anda sendiri dengan SiteMinder. Anda dapat mencabut setiap key kapan saja."
  - q: "Apakah Little Hotelier punya MCP server untuk asisten AI?"
    a: "Belum ada untuk pemilik, per Oktober 2026. Pekerjaan AI SiteMinder di Demand Plus berfokus pada wisatawan yang menemukan dan memesan kamar Anda lewat ChatGPT dan Claude. Untuk bertanya ke AI tentang reservasi Anda sendiri, Anda memerlukan MCP server independen seperti yang ada di Hotelier Tools."
  - q: "Bisakah saya menguji API tanpa risiko pada data asli?"
    a: "Tidak ada sandbox key publik. Mulailah dengan panggilan hanya-baca (reservasi, harga, tipe kamar). Panggilan itu tidak mengubah apa pun di Little Hotelier. Panggilan yang menulis, seperti membuat invoice, menghasilkan dokumen sungguhan."
---

Tidak ada yang bisa Anda pakai untuk reservasi Anda sendiri. Per Oktober 2026, pusat bantuan Little Hotelier tidak mendokumentasikan API key yang bisa dipakai properti untuk reservasi, tamu, atau invoice-nya: API SiteMinder diperuntukkan bagi mitra teknologi bersertifikasi, dan satu-satunya key yang bisa Anda buat sendiri, **Direct Booking API**, mencakup tarif, ketersediaan, dan detail properti untuk situs pemesanan. Untuk membaca data Anda sendiri dari skrip, spreadsheet, atau asisten AI, Anda bisa memakai REST API independen seperti Hotelier Tools, yang terhubung dengan login Little Hotelier Anda sendiri.

Di bawah ini: apa persisnya yang ditawarkan SiteMinder, lalu setup lima menit dengan contoh `curl` sungguhan.

## Apakah Little Hotelier punya API publik?

Ada empat cara resmi untuk memasukkan atau mengeluarkan data dari Little Hotelier. Tidak satu pun memberi Anda API key untuk daftar reservasi Anda.

| Opsi resmi | Siapa yang bisa memakai | Cakupan |
|---|---|---|
| SiteMinder Exchange (SMX) | Aplikasi mitra bersertifikasi | Reservasi dari Little Hotelier. Bukan ketersediaan atau tarif |
| Direct Booking API | Properti yang memakai Direct Booking | Harga dan ketersediaan real-time, properti, tipe kamar, rate plan |
| Ekspor CSV | Pengguna mana pun, secara manual | Reservasi, pendapatan, invoice, akuntansi |
| Aplikasi App Store | Properti mana pun, lewat vendor aplikasinya | Apa pun yang disinkronkan aplikasi itu |

### SiteMinder Exchange (SMX): untuk perusahaan software

[Panduan pengembang](https://developer.siteminder.com/get-started/siteminder-apis) SiteMinder mencantumkan lima API: pmsXchange, SiteConnect, Channels Plus, SMX, dan Direct Booking. Yang penting untuk Little Hotelier adalah SMX, API di balik aplikasi seperti check-in online dan pesan tamu.

Dalam [daftar penerbit SMX](https://developer.siteminder.com/smx-api/additional-resources/reference-tables/property-publishers) milik SiteMinder, Little Hotelier mengirim **reservasi** tetapi bukan ketersediaan dan tarif. [Panduan cepat SMX](https://developer.siteminder.com/smx-api/guides/quick-start) menyatakan hal yang sama: "you are not able to obtain ARI data" dari Little Hotelier.

Aksesnya untuk mitra. [FAQ](https://developer.siteminder.com/get-started/resources/faq) SiteMinder menyebut Anda harus lebih dulu menandatangani perjanjian kemitraan melalui [formulir pendaftaran integrasi](https://www.siteminder.com/integrations/apply-now/), lalu membangun, mensertifikasi, dan go live, yang menurut mereka diselesaikan "most" mitra dalam 60 hari. Jalur itu cocok untuk perusahaan software. Satu hotel tidak bisa mendapatkan SMX key untuk dirinya sendiri.

### Direct Booking API: satu-satunya key yang bisa Anda buat

Jika akun Anda berada di platform Little Hotelier yang lebih baru (pendaftaran sejak Mei 2025, atau akun yang sudah di-upgrade), [pusat bantuan](https://help-platform.littlehotelier.com/en/articles/15689086-direct-booking-api) mendokumentasikan Direct Booking API:

1. Buka **Direct booking → Configuration → API integration**.
2. Klik **Generate key**.
3. Berikan key tersebut dan panduan pengembang SiteMinder kepada web developer Anda.

API ini mengembalikan harga dan ketersediaan real-time, detail properti, tipe kamar, dan rate plan, sehingga developer dapat membuat halaman atau aplikasi pemesanan khusus. Tersedia bersama Direct Booking tanpa biaya tambahan. API ini **tidak** mengembalikan reservasi, tamu, pembayaran, atau invoice, dan dukungan Little Hotelier tidak membantu membangun atau memperbaiki apa yang Anda buat dengannya.

### Ekspor CSV dan App Store

Selebihnya dilakukan manual atau lewat vendor. Halaman Reservations dan sebagian besar laporan dapat diekspor ke CSV (langkah demi langkah di [cara mengekspor reservasi ke Excel](/blog/export-little-hotelier-reservations-excel)). Aplikasi di [Little Hotelier App Store](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store) terhubung ketika Anda menghubungi penyedia aplikasinya; Anda sendiri tidak mendapatkan datanya. Lihat [integrasi Little Hotelier terbaik](/blog/little-hotelier-integrations) untuk yang tersedia.

## Cara mengambil data Little Hotelier Anda secara terprogram

Hotelier Tools adalah dashboard independen untuk properti Little Hotelier. Di dalamnya ada REST API (status: beta) dan MCP server untuk asisten AI.

Cara kerjanya, dengan bahasa sederhana:

- Anda menghubungkan login Little Hotelier Anda sendiri satu kali, di **Credentials** (`/credentials`). Login disimpan terenkripsi (AES-256-GCM).
- Hotelier Tools lalu memakai endpoint web yang sama dengan yang dipakai aplikasi web Little Hotelier. Ia hanya bisa membaca dan melakukan apa yang bisa dilakukan login tersebut, tidak lebih.
- Skrip Anda memanggil Hotelier Tools dengan API key, dan Hotelier Tools berkomunikasi dengan Little Hotelier.

::callout{type="note" title="Independen, bukan resmi"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Ini bukan API resmi SiteMinder dan terhubung memakai login Little Hotelier milik properti Anda sendiri. Dashboard-nya gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.
::

## Cara membuat API key dan melakukan panggilan pertama

Anda memerlukan akun Hotelier Tools (daftar di [dashboard.hotelier.tools/register](https://dashboard.hotelier.tools/register)) dengan Little Hotelier yang sudah terhubung di **Credentials**. Pemilik properti memiliki akses API secara default.

1. Buka **Developer → API & MCP → API Keys** (`/developer/api-keys`).
2. Di bawah "Generate a new key", ketik nama yang akan mudah Anda kenali nanti, misalnya `sheets-export`, lalu tekan **Generate key**.
3. Salin key tersebut segera. Halaman memperingatkan: "Copy this key now — it will not be shown again." Key diawali dengan `htk_`.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Halaman API keys tepat setelah membuat key: kotak hijau Key generated dengan key sekali-tampil yang disamarkan dan tombol salin, key Blog integration yang baru di bawah Active keys dengan tombol Revoke, dan toast API key created" caption="Salin key dari kotak hijau segera: key hanya ditampilkan sekali. Beri nama setiap key sesuai pemakainya, supaya Anda tahu mana yang perlu dicabut nanti." path="/developer/api-keys"}
::

4. Pastikan API menjawab. Panggilan ini publik dan tidak memerlukan key:

```bash
curl https://dashboard.hotelier.tools/api/v1/health
```

5. Sekarang panggilan dengan key Anda. Panggilan ini mengembalikan ID properti Little Hotelier Anda dan login yang dipakainya:

```bash
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  https://dashboard.hotelier.tools/api/v1/property
```

Di Windows, ketik `curl.exe` sebagai ganti `curl` di PowerShell, atau gunakan perintah bawaan PowerShell:

```powershell
$headers = @{ Authorization = "Bearer htk_YOUR_API_KEY" }
Invoke-RestMethod -Headers $headers -Uri "https://dashboard.hotelier.tools/api/v1/property"
```

Apa yang bisa dilakukan sebuah key: **tidak ada scope**. Key bertindak pada satu properti tempat ia dibuat, sebagai orang yang membuatnya, dengan izin orang itu saat ini. Setiap orang dapat memiliki hingga 10 key, dan Anda dapat mencabut salah satunya di halaman yang sama.

### Lebih suka klik daripada mengetik? Pakai explorer

Buka **REST API & Swagger** (`/developer/rest-api`). Di **Quick authorize**, tempel key Anda ke "Bearer token (API key or session JWT)" lalu tekan **Authorize Swagger**, atau tekan **Use my session** untuk melewati key. Setelah itu coba endpoint apa pun di "Interactive API explorer". Halaman ini juga punya **Download spec** dan "Code templates" dalam cURL, JavaScript, Python, dan PowerShell.

::screenshot{src="/images/blog/demo/en/rest-api-interactive-explorer.webp" alt="Interactive API explorer (Swagger) setelah Try it out dan Execute pada GET /property: URL permintaan https://demo.hotelier.tools/api/v1/property dan isi respons 200 dengan propertyId 90210" caption="Otorisasi sekali, lalu jalankan endpoint apa pun dari browser dan lihat permintaan persisnya serta JSON yang dikembalikan." path="/developer/rest-api"}
::

## Endpoint apa saja yang bisa dipakai?

Base URL-nya adalah `https://dashboard.hotelier.tools/api/v1`. Daftar lengkap dan terbarunya ada di [spesifikasi OpenAPI](https://dashboard.hotelier.tools/api/v1/openapi.json) yang publik. Berikut yang paling sering dipakai di awal:

| Metode | Path | Yang Anda dapatkan |
|---|---|---|
| GET | `/reservations` | Reservasi berdasarkan tanggal check-in, `status` dan `limit` opsional |
| GET | `/reservations/{id}` | Detail lengkap satu reservasi (id numerik atau referensi `LH…`) |
| GET | `/reservations/{id}/invoices` | Invoice dari sebuah reservasi |
| GET | `/reservations/{id}/invoices/{invoiceId}/download` | Satu invoice dalam bentuk PDF |
| POST | `/reservations/{id}/invoices` | Membuat invoice baru di Little Hotelier (tanpa email ke tamu) |
| GET | `/guests` | Pencarian tamu berdasarkan teks, nama, email, atau telepon |
| GET | `/prices` | Tarif dan ketersediaan untuk rentang tanggal |
| GET | `/room-types` | Tipe kamar beserta jumlah kamar masing-masing |
| GET | `/methods` | Metode mentah Little Hotelier yang bisa Anda panggil (publik) |
| POST | `/methods/{methodName}` | Menjalankan salah satunya, misalnya `getReservationsByDateRange` |

Beberapa contoh yang bisa disalin langsung (tanggal dan ID hanya karangan):

```bash
# Checked-out reservations with check-in in November 2026
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations?startDate=2026-11-01&endDate=2026-11-30&status=checked_out&limit=100"

# Everything about one booking
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations/LH00000000000001"

# Rates and availability for a week
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/prices?startDate=2026-12-01&endDate=2026-12-07"

# Find a guest by surname
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/guests?lastName=Garcia&perPage=50"

# Every reservation overlapping a range (raw method, named params)
curl -X POST "https://dashboard.hotelier.tools/api/v1/methods/getReservationsByDateRange" \
  -H "Authorization: Bearer htk_YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"params":{"startDate":"2026-11-01","endDate":"2026-11-30"}}'
```

Panggilan daftar mengembalikan JSON seperti `{ "success": true, "count": 2, "data": [ … ] }`. Untuk mencoba metode mentah tanpa kode, buka **LH Methods** (`/methods`) di dashboard dan jalankan dari browser. Setiap eksekusi tercatat di **Run History**.

::screenshot{src="/images/blog/demo/en/little-hotelier-methods.webp" alt="Workbench metode Little Hotelier di Hotelier Tools dengan satu kartu per metode mentah, seperti getReservations, getReservationDetails, getReservationsByDateRange, addPaymentRecord, updateReservation, dan generateInvoice, masing-masing dengan jumlah parameternya" caption="Jalankan metode mentah Little Hotelier mana pun secara manual sebelum Anda membuat skripnya." path="/methods"}
::

::demo-cta{path="/developer/rest-api"}
::

## Batas, error, dan hal yang tidak tersedia

**Batas laju.** 100 permintaan per menit per alamat IP. Setiap respons menyertakan `X-RateLimit-Limit`, `X-RateLimit-Remaining`, dan `X-RateLimit-Reset`. Jika melewati batas, Anda mendapat `429` dengan header `Retry-After`.

**Paginasi.** `/reservations` mengembalikan maksimal 100 per panggilan (`limit`, default 50) dan memfilter berdasarkan tanggal check-in. Untuk data setahun, ambil per bulan; jika satu bulan mengembalikan tepat 100, bagi menjadi dua. `/guests` memakai `page` dan `perPage` (hingga 50). `/prices` memecah rentang yang lebih panjang dari dua minggu menjadi beberapa bagian, jadi rentang panjang lebih lambat.

**Error** dikembalikan sebagai JSON dengan `statusCode` dan `statusMessage`:

| Kode | Biasanya berarti |
|---|---|
| 401 | Key tidak ada, salah, atau sudah dicabut |
| 404 | Reservasi tidak ada, atau bukan milik properti Anda |
| 422 | Ada parameter yang salah, misalnya tanggal tidak dalam format `YYYY-MM-DD` |
| 429 | Terlalu banyak permintaan; tunggu sesuai `Retry-After` |
| 500 / 502 | Little Hotelier tidak menjawab; coba lagi nanti |

**Data yang disamarkan tetap disamarkan.** API membaca apa yang masih disimpan Little Hotelier. Little Hotelier [menyamarkan data tamu 180 hari setelah check-out](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation), dan tidak ada API yang bisa mengembalikannya. Ekspor sebelum waktu itu.

**Tidak tersedia:** webhook keluar atau notifikasi real-time, sandbox key publik, dan paket SDK di npm atau PyPI. Untuk menjalankan sesuatu secara terjadwal, gunakan penjadwal Anda sendiri (cron job, Windows Task Scheduler, atau trigger Google Sheets).

**Penulisan data itu nyata.** `POST /reservations/{id}/invoices` membuat dokumen invoice baru di Little Hotelier setiap kali Anda memanggilnya. Mulailah dengan panggilan hanya-baca, dan jauhkan key dari spreadsheet bersama dan kode publik.

## Apa yang bisa Anda bangun dengannya?

- **Sheet reservasi yang selalu terbarui.** Tarik data masa inap bulan lalu ke Google Sheets atau Excel secara terjadwal: lihat [ekspor reservasi ke Excel dan Google Sheets](/blog/export-little-hotelier-reservations-excel).
- **Paket untuk akuntan.** Unduh PDF invoice per reservasi, atau lewati kodenya dengan ZIP per kuartal di [unduh semua invoice sekaligus](/blog/download-all-little-hotelier-invoices).
- **Dashboard.** Alirkan okupansi dan pendapatan ke Looker Studio atau Power BI dari sheet yang dijaga tetap terbarui oleh API.
- **Asisten AI.** Key yang sama bekerja dengan MCP server Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`), yang memberi Claude, ChatGPT, Cursor, atau VS Code lebih dari 100 tool hotel. Mulailah dengan [apa itu MCP server](/blog/what-is-mcp-server-hotels), lalu [hubungkan Claude](/blog/connect-claude-to-little-hotelier) atau siapkan [Claude Code, Cursor, dan VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode).
- **Penghubung antar-tool.** Jika tidak ada aplikasi App Store, skrip kecil dapat memindahkan data antara Little Hotelier dan sisa sistem Anda. Bandingkan opsinya di [integrasi Little Hotelier terbaik](/blog/little-hotelier-integrations).

Panduan terkait: [alternatif Little Hotelier](/blog/little-hotelier-alternatives).

## Langkah berikutnya

- Jika Anda membuat software untuk banyak hotel, daftarlah ke program mitra SiteMinder dan SMX.
- Jika Anda hanya butuh data properti Anda sendiri, buat key Hotelier Tools di `/developer/api-keys` dan panggil `/reservations`.
- Ekspor data tamu yang perlu Anda simpan sebelum Little Hotelier menyamarkannya pada hari ke-180.
- Semua yang ditawarkan API dan MCP server ada di [halaman fitur API & MCP](/tools/bot/api-mcp).
