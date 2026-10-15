---
title: "Export data reservasi dan daftar tamu Little Hotelier ke Excel (sebelum data tamu disamarkan)"
seoTitle: "Export data reservasi Little Hotelier ke Excel atau Sheets"
description: "Little Hotelier menyamarkan data tamu 180 hari setelah check-out. Ekspor reservasi dan daftar tamu ke Excel atau Sheets sekarang, manual atau otomatis."
date: 2026-10-03
category: api
tags: [export, excel, google sheets, reports, little hotelier]
keywords: [export data reservasi little hotelier ke excel, laporan little hotelier, little hotelier export excel, little hotelier csv, daftar tamu hotel excel, laporan harian hotel, data tamu little hotelier disamarkan]
feature: api-mcp
demoPath: /methods
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "Portal developer Hotelier Tools dengan kartu REST API dan Swagger, MCP setup, API keys, dan LH methods, di atas contoh autentikasi memakai API key"
faq:
  - q: "Apa persisnya yang disamarkan setelah 180 hari?"
    a: "Little Hotelier menyatakan informasi pribadi yang dapat diidentifikasi (PII) tamu disamarkan 180 hari setelah tanggal check-out reservasi. Reservasinya tetap ada, tetapi laporan dan pencarian tidak lagi menampilkan data pribadi tamu. Ekspor yang Anda butuhkan sebelum tanggal itu."
  - q: "Mengapa nomor telepon tidak ada di hasil ekspor Little Hotelier saya?"
    a: "Little Hotelier tidak menyertakan nomor telepon tamu dalam CSV reservasi demi alasan keamanan. Anda tetap bisa melihat telepon di reservasi atau profil tamu, dan pencarian tamu di API Hotelier Tools mengembalikan field phone_number jika Little Hotelier memilikinya."
  - q: "Bisakah saya menjadwalkan ekspor di dalam Little Hotelier?"
    a: "Artikel pusat bantuan yang kami periksa pada Oktober 2026 menjelaskan menjalankan dan mengekspor laporan secara manual, tanpa ekspor terjadwal. Untuk mengotomatiskannya, pakai skrip atau trigger Google Sheets yang membaca data lewat API."
  - q: "Bisakah saya mengekspor lebih dari satu tahun sekaligus?"
    a: "Little Hotelier membatasi ekspor total tamu hingga 365 hari, dan pencarian reservasi channel manager hanya menjangkau 548 hari ke belakang. Ekspor satu tahun (atau satu bulan) per kali dan simpan filenya."
  - q: "Bagaimana mengekspor hanya reservasi Booking.com?"
    a: "Filter berdasarkan channel di laporan Channel Manager, atau ekspor semuanya lalu filter nomor referensi reservasi di Excel. Referensi berawalan BDC adalah Booking.com, EXP Expedia, ABB Airbnb, AGO Agoda, HWL Hostelworld, dan LH front desk atau booking engine Anda sendiri."
---

Buka **Reservations**, atur tanggalnya, tekan **Search**, lalu **Export**: Little Hotelier mengunduh file CSV yang bisa dibuka di Excel atau Google Sheets. Lakukan secara rutin, karena Little Hotelier menyamarkan data pribadi tamu **180 hari setelah check-out**, dan hasil ekspor tidak pernah menyertakan nomor telepon. Jika Anda ingin salinan yang tersusun sendiri setiap bulan, baca data yang sama lewat API.

## Mengapa mengekspor sebelum data tamu disamarkan

Pusat bantuan Little Hotelier menyatakannya dengan jelas: "Guest Personally Identifiable Information (PII) is masked 180 days after the reservation check out date" ([pencarian channel manager](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation), [laporan channel manager](https://helpcentre.littlehotelier.com/en/articles/8673872-channel-manager-run-and-export-reports), [laporan booking engine](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports)).

Dua batasan lain yang perlu diketahui:

- Pencarian reservasi channel manager hanya menemukan reservasi yang "created or checked out within the last 548 days".
- Setelah data disamarkan, tidak ada ekspor atau API yang bisa mengembalikannya.

Jadi jika Anda membutuhkan data tamu untuk invoice, daftar tamu yang kembali, sengketa, atau statistik Anda sendiri, ekspor selagi masih ada. Simpan hanya data yang memang perlu disimpan, dan taruh filenya di tempat yang aksesnya terbatas: file itu berisi data pribadi.

::callout{type="info" title="Dua versi Little Hotelier"}
Akun yang dibuat sejak Mei 2025 (atau di-upgrade) memakai **platform** yang lebih baru, dengan [pusat bantuan tersendiri](https://help-platform.littlehotelier.com/en/). Akun yang lebih lama memakai versi **classic**. Langkah di bawah mencantumkan kedua jalur menu.
::

## Cara mengekspor reservasi dari Little Hotelier ke Excel

1. Buka **Reservations**. Di versi classic: **My Apps → Front Desk → Reservations**.
2. Atur **Date type** (**Check-in date**, **Check-out date**, atau **Booked on date**), lalu **Date from** dan **Date to**. Satu bulan kalender adalah rentang yang pas.
3. Pilih **Status** jika Anda mau: **All**, **Confirmed**, **Checked-in**, **Checked-out**, atau **Cancelled**.
4. Klik **Search**.
5. Klik **Export**. File terunduh sebagai `.csv`. Di platform yang lebih baru, Little Hotelier meminta kode MFA atau passkey Anda sebelum ekspor reservasi, tamu, pembayaran, pendapatan, dan invoice.

::screenshot{src="/images/scripts/full-width-reservation-table/to.png" alt="Halaman Reservations Little Hotelier classic dalam bahasa Spanyol: filter untuk nama belakang tamu, referensi reservasi, nomor invoice, jenis tanggal, status, tanggal, dan sumber, tombol Search, 36 reservasi ditemukan, dan tautan Export" caption="Halaman Reservations versi classic (antarmuka bahasa Spanyol). Cari dulu, lalu Export mengunduh semua hasil sebagai CSV."}
::

Dua detail dari [pusat bantuan](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data) yang menghindarkan kebingungan:

- Jika pencarian menghasilkan banyak data, layar hanya menampilkan **31 hari pertama**. Ekspor berisi semuanya.
- Untuk menghitung tamu pada suatu periode, sesuaikan Date type dan Status (check-in dengan **Checked-in**, check-out dengan **Checked-out**). [Panduan classic](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information) membatasi ekspor itu hingga **365 hari**.

### Isi CSV (dan yang tidak ada)

Ekspor punya lebih banyak kolom daripada layar. Menurut [Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information), Anda mendapat:

- **Reservasi:** referensi, tanggal pemesanan, channel, status, tanggal pembatalan
- **Tamu:** nama depan dan belakang, email, organisasi, alamat lengkap
- **Menginap:** check-in, check-out, jumlah malam, jam kedatangan, komentar tamu, tipe kamar, kamar, rate plan
- **Uang:** subtotal, extras, surcharge, pajak, pembayaran diterima, saldo terutang
- **Jumlah tamu:** dewasa, anak, bayi; jawaban atas pertanyaan reservasi kustom

Tidak termasuk: **nomor telepon** ("for security reasons") dan riwayat perubahan, seperti jam persis tamu melakukan check-in.

## Laporan lain apa yang bisa diekspor Little Hotelier?

Sebagian besar laporan punya tombol **Export** yang menghasilkan CSV. Jalur di bawah untuk platform yang lebih baru, kecuali baris channel manager dan booking engine, yang berasal dari versi classic (di bawah **My Apps**). Akun classic menemukan sebagian besar laporan lain di **My Apps → Front Desk → Reports**.

| Laporan | Lokasi | Yang Anda dapat |
|---|---|---|
| Guests | Reports → Operational → Guests | Tamu yang menginap, berdasarkan rentang tanggal |
| Invoices | Reports → Operational → Invoices | Daftar invoice sebagai CSV, PDF sebagai ZIP |
| Accounting | Reports → Operational → Accounting | Invoice final, ditata untuk Xero dan QuickBooks |
| Revenue (7 tampilan) | Reports → Strategic → Revenue | Ringkasan, tipe kamar, kamar, rate plan, channel, pajak, extras |
| Channel manager | Channel Manager → Reports | Ringkasan reservasi, room stays, check-in, channel yield |
| Booking engine | Direct Booking → Reports | Reservasi dengan perangkat yang dipakai dan persetujuan GDPR |
| Spanish police | Reports → Operational → Police report | Hanya Spanyol: data tamu untuk pelaporan ke kepolisian |

Sumber: [Getting started with Reports](https://help-platform.littlehotelier.com/en/articles/10813931-getting-started-with-reports), [Invoice report](https://help-platform.littlehotelier.com/en/articles/14390737-how-to-run-an-invoice-report), [Accounting export](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final), [Revenue reports](https://helpcentre.littlehotelier.com/en/articles/8884214-revenue-reports).

Tips: ekspor pendapatan **Summary** punya kolom "Rate per night", satu baris per malam. Ini cara tercepat untuk melihat harga jual setiap malam dari masa inap yang panjang.

## Cara membuka CSV di Excel tanpa huruf beraksen yang rusak

Jika nama seperti "José" berubah menjadi "JosÃ©", Excel salah menebak encoding. Impor file itu, jangan klik dua kali:

1. Di Excel, buka **Data → From Text/CSV** dan pilih filenya ([langkah dari Microsoft](https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba)).
2. Atur **File Origin** ke **65001: Unicode (UTF-8)** dan **Delimiter** ke **Comma**.
3. Klik **Load**.

Di Google Sheets, pakai **File → Import → Upload** dan biarkan pemisah pada otomatis. Sheets membaca UTF-8 dengan benar.

## Daftar tamu yang kembali: apa yang bisa diekspor, dan apa yang Anda perlukan

CSV reservasi berisi nama, email, dan alamat, yang cukup untuk email ucapan terima kasih atau ajakan "datang kembali". Sebelum mengirim apa pun, periksa siapa yang setuju dihubungi:

- Ekspor **laporan booking engine** punya kolom **GDPR consent**. Little Hotelier menyatakan kolom itu terisi jika tamu setuju dan kosong jika tidak ([sumber](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports)).
- Jika Anda memakai Guest Engagement, **Guest engagement → Guests → Mailchimp export** mengirim tamu ke daftar Mailchimp. Semua tamu diekspor "regardless of GDPR consent status", dengan status opt-in ditandai, jadi filter berdasarkan itu ([sumber](https://help-platform.littlehotelier.com/en/articles/8051434-connect-guest-engagement-to-mailchimp)).

Aturan pemasaran berbeda di tiap negara. Kirim email hanya kepada tamu yang opt-in, kecuali Anda sudah memastikan dengan penasihat hukum bahwa dasar lain berlaku.

## Cara yang lebih cepat: ekspor otomatis dengan API

Little Hotelier tidak punya API key untuk reservasi Anda (detailnya ada di [apakah Little Hotelier punya API?](/blog/little-hotelier-api)). Hotelier Tools, dashboard independen, terhubung dengan login Little Hotelier Anda sendiri dan memberi Anda REST API serta server MCP untuk asisten AI. Layanan ini tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier, dan gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

::callout{type="warning" title="API tidak bisa membuka samaran data"}
Hotelier Tools membaca apa yang masih dimiliki Little Hotelier. Reservasi yang check-out-nya sudah lewat 180 hari juga tetap tersamarkan saat dibaca lewat API. Otomatiskan ekspornya sekarang agar setiap bulan tertangkap selagi datanya lengkap.
::

Pertama buat key: **Developer → API & MCP → API Keys** (`/developer/api-keys`), ketik nama, tekan **Generate key** dan salin. Halaman hanya menampilkannya sekali.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Halaman API keys tepat setelah membuat key bernama Blog integration: formulir Generate a new key, kotak hijau Key generated yang menyatakan Copy this key now, it will not be shown again, dengan key tersamar dan tombol salin, serta key baru terdaftar di Active keys dengan Revoke" caption="Satu key per keperluan: beri nama sesuai sheet atau skrip yang akan menyimpannya, dan salin selagi ditampilkan." path="/developer/api-keys"}
::

### Tanpa kode: jalankan ekspor dari dashboard

1. Buka **LH Methods** (`/methods`) dan pilih `fetchReservationsCSV`.
2. Isi `dateFrom` dan `dateTo` (misalnya `2026-09-01` dan `2026-09-30`).
3. Jalankan. Method ini mengambil reservasi Anda sebagai CSV, yang bisa Anda tempel ke sheet.

::screenshot{src="/images/blog/demo/en/little-hotelier-methods.webp" alt="Halaman Little Hotelier methods di Hotelier Tools dengan satu kartu per method, seperti getReservations, updateReservation, fetchReservationsCSV (Fetches reservations as a CSV file, 3 parameters), generateInvoice, dan getInvoices" caption="Pilih fetchReservationsCSV di LH Methods untuk menjalankan ekspor CSV reservasi dari browser Anda, tanpa kode." path="/methods"}
::

### Google Sheets, diperbarui setiap bulan

Apps Script ini menambahkan tab berisi reservasi bulan lalu (berdasarkan tanggal check-in) setiap kali dijalankan.

1. Di Google Sheet baru, buka **Extensions → Apps Script**.
2. Di **Project Settings**, tambahkan script property bernama `HT_API_KEY` dengan key `htk_…` Anda. Dengan begitu key tidak ada di dalam kode.
3. Tempel kode ini dan simpan:

```js [Code.gs]
function importLastMonth() {
  const key = PropertiesService.getScriptProperties().getProperty('HT_API_KEY');
  const tz = Session.getScriptTimeZone();
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const end = new Date(now.getFullYear(), now.getMonth(), 0);
  const day = d => Utilities.formatDate(d, tz, 'yyyy-MM-dd');

  const url = 'https://dashboard.hotelier.tools/api/v1/reservations'
    + '?startDate=' + day(start) + '&endDate=' + day(end) + '&limit=100';
  const res = UrlFetchApp.fetch(url, { headers: { Authorization: 'Bearer ' + key } });
  const rows = JSON.parse(res.getContentText()).data || [];
  if (!rows.length) return;

  const headers = Object.keys(rows[0]);
  const values = rows.map(r => headers.map(h =>
    r[h] !== null && typeof r[h] === 'object' ? JSON.stringify(r[h]) : r[h]));

  const ss = SpreadsheetApp.getActive();
  const name = Utilities.formatDate(start, tz, 'yyyy-MM');
  const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
}
```

4. Klik **Run** sekali dan izinkan akses saat Google memintanya.
5. Untuk menjadwalkannya, buka **Triggers → Add Trigger**, pilih `importLastMonth`, event source **Time-driven**, dan **Month timer** pada tanggal 1 ([panduan Google](https://developers.google.com/apps-script/guides/triggers/installable)).

API mengembalikan hingga 100 reservasi per panggilan. Jika satu bulan memenuhi 100 baris, bagi menjadi dua periode setengah bulan. Siapa pun yang bisa mengedit skrip bisa membaca key-nya, jadi bagikan sheet dengan hati-hati, dan cabut key di `/developer/api-keys` jika bocor.

### Minta asisten AI membuat tabelnya

Jika Anda sudah menghubungkan Claude atau ChatGPT ke Hotelier Tools (lihat [menghubungkan Claude ke Little Hotelier](/blog/connect-claude-to-little-hotelier)), minta dengan kata-kata biasa:

::prompt{label="Claude"}
Dengan Hotelier Tools, buat daftar semua reservasi yang check-out pada September 2026 sebagai tabel: referensi reservasi, nama tamu, email, check-in, check-out, jumlah malam, channel, dan total. Lalu berikan tabel yang sama dalam format CSV.
::

Asisten membaca reservasi Anda lewat server MCP dan mengembalikan tabelnya. Ingat bahwa apa yang dibacanya (nama, email, jumlah) menjadi bagian dari chat Anda dengan penyedia AI tersebut.

::demo-cta{path="/methods"}
::

Panduan terkait: [integrasi Little Hotelier](/blog/little-hotelier-integrations), [mengunduh semua faktur sekaligus](/blog/download-all-little-hotelier-invoices), [survei okupansi INE](/blog/ine-hotel-occupancy-survey).

## Ringkasan

- **Manual:** **Reservations → Search → Export** menghasilkan CSV berisi nama tamu, email, dan alamat, tetapi tanpa nomor telepon.
- **Batas waktu:** data tamu disamarkan 180 hari setelah check-out, jadi ekspor setiap bulan.
- **Huruf beraksen:** impor dengan **Data → From Text/CSV** dan UTF-8 di Excel.
- **Otomatis:** trigger Google Sheets dengan API Hotelier Tools, atau permintaan ke asisten AI Anda. Selengkapnya di [halaman fitur API & MCP](/tools/bot/api-mcp).
