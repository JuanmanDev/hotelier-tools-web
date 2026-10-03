---
title: "Cara download semua invoice Little Hotelier sekaligus (untuk laporan pajak per kuartal)"
seoTitle: "Download semua invoice Little Hotelier sekaligus (2026)"
description: "Little Hotelier bisa meng-ZIP invoice yang sudah ada. Begini caranya, plus membuat yang belum ada dan mengirim akuntan satu ZIP dan CSV per kuartal."
date: 2026-10-03
category: invoicing
tags: [invoices, accounting, little hotelier, quarterly tax, zip]
keywords: [download semua invoice little hotelier, invoice little hotelier, laporan invoice little hotelier, cara download invoice, export invoice little hotelier, little hotelier xero]
feature: invoicing
demoPath: /invoices
cover: /images/blog/demo/en/invoices-by-quarter.webp
coverAlt: "Halaman Invoices di Hotelier Tools dengan total 66 invoice, Q4 dan Q3 2026 masing-masing dengan tombol Preview CSV dan ZIP, serta September 2026 terbuka sebagai tabel nomor invoice, tamu, tax ID, tanggal check-out, dan total"
featured: true
faq:
  - q: "Bisakah Little Hotelier mengunduh semua invoice sebagai PDF sekaligus?"
    a: "Bisa, untuk invoice yang sudah ada. Buka Front Desk > Reports > Invoices, filter tanggalnya, tekan Download invoice PDFs lalu Download zip. Little Hotelier akan meminta Anda mengonfirmasi dengan autentikasi multi-faktor terlebih dahulu."
  - q: "Apakah Little Hotelier menyinkronkan invoice ke Xero atau QuickBooks secara otomatis?"
    a: "Tidak. Laporan Accounting mengekspor invoice yang ditandai final ke file CSV yang dirancang untuk impor Xero dan QuickBooks, dan Anda mengimpor file itu sendiri. Hanya invoice yang sudah difinalisasi yang disertakan."
  - q: "Apakah Hotelier Tools akan mengubah nomor invoice atau template saya?"
    a: "Tidak. Hotelier Tools meminta Little Hotelier membuat setiap invoice, jadi itu dokumen Little Hotelier sendiri, dengan penomoran, logo, dan tata letak Anda dari Customise invoices."
  - q: "Bagaimana dengan invoice yang dibatalkan di hasil ekspor saya?"
    a: "Di Little Hotelier, invoice final yang dibatalkan dipindahkan ke Older invoices dengan status Cancelled, dan datanya tetap muncul di ekspor. Beri tahu akuntan Anda agar pendapatan tidak terhitung dua kali."
  - q: "Berapa biaya Hotelier Tools?"
    a: "Gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027. Hotel yang mulai sebelum 31 Desember 2026 kemudian membayar €50 per hotel per bulan sepanjang 2027. Tidak perlu kartu untuk memulai."
---

Bisa. Little Hotelier dapat memasukkan setiap invoice yang **sudah ada** ke dalam satu ZIP: buka **Front Desk > Reports > Invoices**, filter kuartalnya dan tekan **Download invoice PDFs**. Yang tidak dilakukannya adalah membuat invoice yang belum pernah dibuat siapa pun, atau memperingatkan Anda tentang invoice yang seharusnya belum diterbitkan. Untuk itu, Hotelier Tools membuat invoice yang belum ada dalam satu proses, menolak yang berisiko, dan memberi Anda kuartal itu sebagai satu ZIP berisi PDF plus ringkasan CSV.

## Bisakah Little Hotelier mengekspor semua invoice secara native?

Bisa. Per Oktober 2026, pusat bantuan Little Hotelier menjelaskan tiga cara mengeluarkan invoice. Mana yang Anda butuhkan tergantung pada permintaan akuntan Anda.

| Metode | Yang Anda dapat | Kendalanya |
|---|---|---|
| Invoice report | ZIP berisi PDF invoice dan daftar CSV | Hanya invoice yang sudah ada |
| Accounting report | CSV yang dibuat untuk impor Xero dan QuickBooks | Hanya invoice yang ditandai final |
| Satu reservasi per kali | Satu PDF (Print atau Save as PDF) | Lambat untuk satu kuartal penuh |

### Invoice report (PDF dalam ZIP)

1. Buka **My Apps > Front Desk > Reports** dan klik **Invoices**.
2. Pilih rentang tanggal untuk kuartal Anda. Secara opsional filter berdasarkan **Invoice status** dan **Payment status**, lalu klik **Apply**.
3. Klik **Download invoice PDFs**, lalu **Download zip**.
4. Konfirmasi permintaan autentikasi multi-faktor. ZIP akan terunduh.

**Export** pada laporan yang sama memberi Anda CSV. Sumber: [How to run an Invoice report](https://helpcentre.littlehotelier.com/en/articles/14390555-how-to-run-an-invoice-report).

### Accounting report (CSV untuk Xero atau QuickBooks)

Buka **My Apps > Front Desk > Reports > Accounting**, pilih **Yesterday**, **Last 7 days** atau tanggal kustom, lalu klik **Export**. Anda mendapat CSV (atau ZIP untuk ekspor besar) berisi kontak, alamat, nomor invoice, tanggal, jumlah, akun, dan kode pajak.

Dua batasan: hanya invoice yang **ditandai final** yang diekspor, dan file itu untuk diimpor secara manual. Ini bukan sinkronisasi langsung. Kode akun diatur sekali di **Front Desk > Setup > Accounting Integration**. Sumber: [Accounting: export invoices marked as final](https://helpcentre.littlehotelier.com/en/articles/8672956-accounting-export-invoices-marked-as-final) dan [Accounting Integration: setup](https://helpcentre.littlehotelier.com/en/articles/8925025-accounting-integration-setup).

### Satu per satu

Buka reservasi, klik **Print**, pilih **Invoice** dan pilih **Save as PDF** di jendela cetak ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice)). Jika Anda sering melakukannya, script gratis [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) menambahkan tautan cetak langsung di reservasi.

## Yang tidak dilakukan ekspor native

Mengunduh adalah bagian yang mudah. Kuartal biasanya bermasalah lebih awal:

- **Invoice yang hilang.** ZIP hanya berisi invoice yang dibuat seseorang. Pusat bantuan menjelaskan pembuatannya satu reservasi per kali (tab **Invoices** > **Generate invoice**), jadi menginap yang tidak diklik siapa pun tidak ada di sana.
- **Duplikat.** Setiap permintaan generate membuat dokumen baru di Little Hotelier, jadi membuat ulang sebuah menginap bisa menghasilkan dua invoice padahal akuntan Anda mengharapkan satu.
- **Invoice yang terlalu dini.** Invoice yang diterbitkan sebelum tamu check-out menjadi usang begitu ada extra atau pembayaran ditambahkan, dan memperbaikinya berarti invoice koreksi, credit note, atau, di Spanyol, rektifikasi.
- **Finalisasi.** Ekspor akuntansi membutuhkan setiap invoice ditandai final, dan pusat bantuan menjelaskan cara melakukannya per reservasi.

## Cara mengunduh satu kuartal penuh sebagai satu ZIP dan CSV (cara yang lebih cepat)

Hotelier Tools adalah dashboard yang terhubung ke Little Hotelier dengan login Anda sendiri. Halaman **Invoice Download** membuat invoice untuk satu rentang tanggal dalam satu proses dan menyerahkan hasilnya per kuartal.

1. Daftar di [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) dan hubungkan Little Hotelier di **Credentials**. Login Anda disimpan terenkripsi.
2. Di menu, buka **Invoice Download** (`/invoices`).
3. Tekan **Generate invoices** dan pilih tanggalnya, misalnya 1 Juli sampai 30 September.
4. Aplikasi membaca reservasi tersebut dari Little Hotelier dan membuat invoice untuk menginap yang memenuhi syarat. Apa pun yang tidak bisa dibuatkan invoice masuk ke **Errors** beserta alasannya. Tidak ada yang dilewati diam-diam.
5. Invoice Anda muncul dikelompokkan per kuartal dan bulan. Pada kuartal, tekan **ZIP** untuk mengunduh semua PDF, atau **Preview CSV** untuk memeriksa ringkasannya terlebih dahulu.

::screenshot{src="/images/blog/demo/en/invoices-quarter-zip-downloaded.webp" alt="Halaman Invoices dikelompokkan per kuartal, dengan tombol Preview CSV dan ZIP pada Q4 dan Q3 2026, tabel invoice September 2026 terbuka, dan pemberitahuan Pack downloaded yang mengonfirmasi paket invoice untuk Q3 2026 telah diunduh" caption="Setiap kuartal punya ZIP berisi PDF dan ringkasan CSV sendiri. Satu klik pada ZIP mengunduh seluruh kuartal." path="/invoices"}
::

Invoice itu adalah dokumen Little Hotelier sendiri. Hotelier Tools meminta Little Hotelier membuat tiap invoice, jadi penomoran, logo, dan tata letak Anda dari **Customise invoices** tetap persis seperti semula.

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier hotel Anda sendiri.
::

## Pengecekan sebelum membuat invoice: tax ID kosong, invoice dini, dan duplikat

Sebelum meminta invoice dari Little Hotelier, Hotelier Tools menjalankan pengecekan awal. Layanan ini menolak membuat invoice untuk sebuah menginap ketika:

- tamu **belum check-out**, karena angkanya belum final
- itu **invoice perusahaan tanpa tax ID** atau alamat fiskal
- **tax ID tidak berformat benar**
- menginap itu **sudah dibuatkan invoice**, yang mencegah duplikat

Tamu pribadi tidak membutuhkan data fiskal, jadi dokumen identitas yang kosong hanya berupa peringatan untuk mereka.

Inilah perbedaan antara ZIP yang bisa dipercaya akuntan Anda dan ZIP yang dikembalikan dengan banyak pertanyaan.

## Bagaimana dengan reservasi yang tidak bisa dibuatkan invoice?

Reservasi itu masuk ke **Errors** (`/invoices/errors`), satu baris per reservasi beserta alasannya.

1. Pilih rentang tanggal di bagian atas.
2. Filter berdasarkan jenis masalah: **Missing DNI**, **Pending payment**, **Not checked out**, **Download failed**, dan lainnya.
3. Perbaiki reservasi di Little Hotelier: tambahkan tax ID, catat pembayaran, atau check-out-kan tamunya.
4. Kembali di Errors, periksa lagi atau tandai selesai. **Copy CSV** memberi Anda daftar untuk rekan kerja.

::screenshot{src="/images/blog/demo/en/invoice-failures.webp" alt="Halaman Errors and issues untuk 1 Juli sampai 30 September 2026 dengan Copy CSV, chip filter jenis masalah seperti Missing DNI, Pending payment, Not checked out, dan Download failed, serta tabel reservasi dengan ID invoice, tanggal menginap, total, label masalah, alasan (dalam bahasa Spanyol), dan aksi" caption="Setiap reservasi yang tidak bisa dibuatkan invoice oleh sebuah proses, beserta alasan dan cara mencobanya lagi." path="/invoices/errors"}
::

Jika sebuah menginap tertahan oleh selisih pembulatan satu atau dua sen, opsi cent-fix di **Settings > Invoices** bisa menutup saldo kecil itu.

::demo-cta{path="/invoices"}
::

## Invoice akan dibuat dalam bahasa apa?

Anda memilihnya di **Settings > Invoices** (`/settings/invoices`):

- **From the guest's country**: setiap invoice memakai bahasa negara pada alamat tamu. Negara yang kosong atau tidak cocok memakai bahasa cadangan Anda.
- **Always the same language**: semua invoice dalam satu bahasa, siapa pun tamunya.

Pilih **Fallback language** lalu tekan **Save changes**.

## Apa yang dikirim ke akuntan setiap kuartal

Rutinitas singkat yang menghindari sebagian besar email tindak lanjut:

1. **Jalankan kuartalnya** beberapa hari setelah berakhir, agar check-out yang terlambat sudah tertutup.
2. **Bersihkan Errors** sampai hanya tersisa menginap yang memang tidak perlu invoice.
3. **Unduh ZIP dan CSV** lalu kirim keduanya.
4. **Periksa nomor invoice** untuk celah atau pengulangan sebelum Anda kirim.
5. **Sebutkan invoice yang dibatalkan.** Di Little Hotelier, membatalkan invoice final memindahkannya ke **Older invoices** dengan status Cancelled, dan datanya tetap muncul di ekspor ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). Akuntan Anda perlu tahu agar pendapatan tidak terhitung dua kali.

Di Spanyol, ini menjadi bahan laporan PPN Anda ([modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml)). Jika Anda memakai VeriFactu, Little Hotelier memfinalisasi invoice dengan mengirimkannya sendiri ke AEAT ([pusat bantuan](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)). Hotelier Tools tidak punya fitur VeriFactu sendiri, jadi biarkan langkah itu di Little Hotelier. Di negara mana pun yang mewajibkan e-invoicing, anggap ZIP ini sebagai salinan untuk arsip Anda dan periksa aturannya dengan akuntan Anda.

Developer juga bisa mengambil PDF invoice satu per satu lewat [REST API Hotelier Tools](/blog/little-hotelier-api). Dan jika akuntan Anda juga menginginkan data reservasi, lihat [cara mengekspor reservasi ke Excel](/blog/export-little-hotelier-reservations-excel).

## Ringkasan

- **Invoice report** Little Hotelier meng-ZIP PDF invoice yang sudah ada; **Accounting report** mengekspor invoice final sebagai CSV untuk Xero atau QuickBooks.
- Keduanya tidak membuat invoice yang hilang dan tidak mencegah duplikat maupun invoice dini.
- Hotelier Tools membuat invoice untuk satu rentang tanggal dalam satu proses, menolak invoice berisiko, mendaftar setiap kegagalan beserta alasannya, dan memberi Anda ZIP dan CSV per kuartal.
- Untuk menghentikan penumpukan dari sumbernya, [kirim setiap invoice otomatis saat check-out](/blog/send-invoice-to-guest-at-checkout). Lihat semua yang dilakukan fitur invoicing di [halaman Invoicing](/tools/bot/invoicing).
