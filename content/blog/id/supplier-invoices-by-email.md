---
title: "Cara mengumpulkan invoice pemasok lewat email secara otomatis (dan menyerahkan kuartal yang rapi ke akuntan)"
seoTitle: "Kumpulkan invoice pemasok lewat email secara otomatis"
description: "Terima invoice pemasok di satu alamat atau dari kotak masuk Anda, periksa satu per satu, deteksi duplikat dan IBAN yang berubah, lalu ekspor per kuartal."
date: 2026-10-31
category: invoicing
tags: [invoice pemasok, utang usaha, email, akuntan, pajak, facturae]
keywords: [mengumpulkan invoice pemasok otomatis, ambil invoice dari lampiran email, alamat email untuk invoice pemasok, invoice pembelian hotel untuk akuntan, berapa lama menyimpan faktur pembelian, cara memberi nama file invoice, deteksi invoice pemasok ganda, penipuan pemasok ganti rekening bank, ekspor invoice masuk untuk akuntan]
feature: invoicing
demoPath: /received-invoices
cover: /images/blog/demo/en/supplier-invoices-review-iban-warning.webp
coverAlt: "Invoice masuk dari Electra Norte, status To review, sebesar €218,70: tombol Confirm, Mark as duplicate, dan Reject, kotak merah Check this invoice before you confirm it yang menyatakan IBAN tidak sama dengan invoice pemasok ini sebelumnya, kotak I checked this supplier through a known channel yang belum dicentang dengan tombol Acknowledge, dan detail email berisi pengirim, subjek berbahasa Spanyol, kotak masuk reservas@example.com, Sender check Not available, dan Email risk Medium risk"
faq:
  - q: "Bagaimana cara mengumpulkan invoice pemasok dari email secara otomatis?"
    a: "Beri pemasok satu alamat yang hanya menerima invoice, atau biarkan software membaca kotak masuk yang sudah mereka kirimi. Di Hotelier Tools Anda bisa melakukan keduanya: setiap properti mendapat alamat invoice privat, dan kotak masuk yang terhubung bisa dipindai setiap hari, hanya-baca, untuk mencari lampiran invoice."
  - q: "Berapa lama saya harus menyimpan invoice pemasok di Spanyol?"
    a: "Minimal empat tahun untuk keperluan pajak, sesuai masa daluwarsa dalam Ley General Tributaria, seperti dijelaskan Agencia Tributaria. Código de Comercio meminta usaha menyimpan dokumennya selama enam tahun, jadi banyak akuntan menyarankan menyimpan semuanya enam tahun."
  - q: "Bolehkah saya menyimpan invoice pemasok hanya sebagai PDF atau hasil pindaian?"
    a: "Di Spanyol boleh, asalkan caranya menjamin keaslian asal, keutuhan isi, dan keterbacaan, serta otoritas pajak bisa mengaksesnya tanpa penundaan. Simpan file asli yang Anda terima, bukan salinan yang diketik ulang."
  - q: "Bagaimana cara mengenali invoice pemasok palsu?"
    a: "Waspadai jika rekening bank berbeda dari invoice sebelumnya, domain pengirim berubah, atau email gagal pemeriksaan keasliannya. Hotelier Tools menandai hal ini dan memblokir konfirmasi atau pembayaran sampai seseorang mengonfirmasi peringatan itu setelah menelepon pemasok di nomor yang sudah dikenal."
  - q: "Apakah AI yang menentukan apa yang masuk ke pembukuan saya?"
    a: "Tidak. Setiap invoice dimulai sebagai To review. E-invoice dibaca persis dan AI membaca PDF serta foto, tetapi hanya manusia yang bisa mengonfirmasi invoice atau menandainya lunas, dan apa yang dikoreksi manusia tidak pernah ditimpa oleh pembacaan baru."
  - q: "Apakah Hotelier Tools bagian dari Little Hotelier atau software akuntansi saya?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Ekspor invoice masuknya berupa CSV dan ZIP umum untuk akuntan Anda, bukan register pajak yang tersertifikasi."
---

Untuk mengumpulkan invoice pemasok secara otomatis, kirim semuanya ke satu tempat dan biarkan software mengambil file-nya: beri pemasok alamat khusus invoice, atau biarkan tool membaca kotak masuk yang sudah mereka kirimi. Di Hotelier Tools, pemasok bisa mengirim email ke alamat privat properti Anda, atau kotak masuk Anda yang terhubung dipindai setiap hari, hanya-baca. E-invoice dibaca persis, AI membaca PDF dan foto, dan manusia memeriksa setiap invoice sebelum masuk ke kuartal yang Anda ekspor untuk akuntan.

## Mengapa akuntan Anda ingin invoice pemasok tertata

Invoice pemasok adalah separuh lain dari pembukuan. Akuntan Anda membutuhkannya untuk:

- **Mengkreditkan pajak masukan.** Di Spanyol, PPN yang Anda bayar untuk laundry, listrik, atau komisi OTA dikreditkan dalam [modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml) per kuartal, dan hanya jika ada invoice yang sah di baliknya.
- **Menyimpan register invoice masuk.** Usaha di Spanyol menyimpan "libro registro de facturas recibidas": satu baris per invoice berisi tanggal, nomor, NPWP pemasok, dasar pengenaan pajak, tarif, dan pajaknya.
- **Mencatat biaya untuk pajak penghasilan**, dan memeriksa bahwa yang dibayar sesuai dengan yang ditagihkan.

Masalah yang biasa terjadi bukan pada pekerjaan akuntan. Masalahnya kardus sepatu: invoice tersebar di tiga kotak masuk, satu foto di WhatsApp, portal pemasok, dan satu lagi yang tidak pernah sampai.

## Berapa lama invoice pemasok harus disimpan?

Tergantung negaranya. Di Uni Eropa, Pasal 247 Direktif PPN membiarkan setiap negara anggota menetapkan jangka waktunya ([teks Pasal 247](https://www.legislation.gov.uk/eudr/2006/112/article/247/adopted)). Untuk Spanyol:

| Aturan | Jangka waktu | Sumber |
|---|---|---|
| Pajak (invoice masuk dan salinan invoice yang diterbitkan) | 4 tahun, masa daluwarsa dalam Ley General Tributaria | [Agencia Tributaria](https://sede.agenciatributaria.gob.es/Sede/iva/facturacion-registro/facturacion-iva/obligacion-conservar-facturas.html) |
| Invoice terkait PPN atas aset dengan masa penyesuaian | Masa tersebut ditambah 4 tahun berikutnya | Halaman yang sama |
| Komersial (buku, korespondensi, dokumen) | 6 tahun sejak pencatatan terakhir | [Código de Comercio, pasal 30](https://www.boe.es/buscar/act.php?id=BOE-A-1885-6627#a30) |

Agencia Tributaria juga menjelaskan caranya: invoice disimpan "dengan isi aslinya, secara berurutan", di atas kertas atau secara elektronik, asalkan caranya menjamin keaslian asal, keutuhan isi, dan keterbacaan, serta otoritas pajak bisa mengaksesnya tanpa penundaan. Dalam praktiknya: simpan file yang dikirim pemasok, secara berurutan, dan jangan hapus apa pun yang sudah dibukukan akuntan Anda. Untuk negara Anda sendiri (misalnya Indonesia), tanyakan jangka waktunya ke akuntan Anda.

## Aturan penamaan file yang menghemat pertanyaan

Jika Anda menyimpan invoice secara manual, beri nama setiap file dengan cara yang sama agar folder tersusun sendiri:

```text [naming.txt]
2026-10-12_Electra-Norte_EL-20261012.pdf
2026-10-03_Booking.com_BO-20261003.pdf
```

Tanggal lebih dulu (tahun-bulan-hari, agar urut berdasarkan tanggal), lalu nama pemasok, lalu nomor invoice. Simpan satu folder per kuartal. Jangan ubah nomor dari pemasok: nomor itulah yang dipakai akuntan untuk mencocokkan invoice dengan pembayarannya.

## Cara yang lebih cepat: Received invoices di Hotelier Tools

**Received invoices** (`/received-invoices`) mengumpulkan apa yang dikirim pemasok, membacanya, dan menahannya untuk Anda sampai Anda mengonfirmasi. Ada empat jalur masuk, dan Anda bisa memakai semuanya sekaligus:

| Jalur masuk | Paling cocok untuk | Yang Anda atur |
|---|---|---|
| **Invoice address** | Pemasok yang bisa mengirim email ke mana saja | Salin alamat `inv-…` properti Anda dan kirimkan ke mereka |
| **Kotak masuk Anda sendiri** | Pemasok yang sudah mengirim ke email hotel Anda | Hubungkan di Messaging, lalu aktifkan **Read for invoices** |
| **Seret atau tempel** | Invoice kertas, foto, unduhan dari portal | Tidak ada: seret file ke halaman |
| **REST API** | Skrip Anda sendiri | `POST /api/v1/received-invoices/upload` |

File yang sama tidak pernah masuk dua kali: lewat jalur mana pun datangnya, file yang sudah ada dikenali dari isinya.

### Opsi 1: beri pemasok alamat invoice Anda

1. Buka **Settings > Received invoices** (`/settings/received-invoices`), cari **Invoice address**, dan tekan **Create the address**.
2. Tekan **Copy** dan kirimkan ke pemasok Anda. Anda juga bisa meneruskan invoice yang sudah ada ke alamat itu.
3. Biarkan tugas **Read the hotel mailbox** tetap aktif (setiap 5 menit adalah yang disarankan).

Alamatnya berbentuk `inv-7k2m9qx4hp@in.hotelier.tools`. Alamat ini hanya milik properti Anda dan tidak butuh kata sandi kotak masuk. Cara kerja alamat ini, dan apa yang bukan fungsinya, dijelaskan di [alamat email hotel untuk invoice dan login](/blog/hotel-email-address).

### Opsi 2: pindai kotak masuk yang sudah dipakai pemasok

1. Hubungkan kotak masuknya (Google, Microsoft, atau akun IMAP mana pun) di **Messaging > Channels**.
2. Di **Received invoices**, buka **Setup guide**. Ada empat langkah:
   - **Choose the mailboxes your suppliers write to** lalu aktifkan.
   - **Choose how far back to read**: **The past** N hari, bulan, atau tahun, atau **Since the start of this** minggu, bulan, kuartal, atau tahun. Maksimal 5 tahun ke belakang.
   - **Read the mail you already have** dengan **Read the mail now**. Pengambilan data lama yang panjang berhenti setelah beberapa saat, dan pemindaian harian membaca sisanya.
   - **Read new mail every day**: pemindaian terjadwal, disarankan pukul 06.20.
3. Di **Settings > Received invoices**, sesuaikan setiap kotak masuk: **Folders to read**, **Always read mail from** (alamat persis pemasok Anda), dan **Never read mail from**.

Pembacaan bersifat hanya-baca: tidak ada yang ditandai sudah dibaca, dipindahkan, atau dihapus, dan folder Junk, Sent, Trash, dan Drafts tidak pernah dibaca. Pesan dianggap invoice jika berasal dari pemasok yang dikenal, berisi lampiran e-invoice, menyebut kata invoice ("invoice", "factura", "fattura"…), atau berisi foto.

::screenshot{src="/images/blog/demo/en/supplier-invoices-mailbox-settings.webp" alt="Pengaturan Received invoices: kartu Suggestions dengan Suggest invoices that have not arrived aktif dan riwayat 24 bulan, serta kartu Mailboxes dengan reservas@example.com terhubung, Read for invoices aktif, INBOX sebagai folder yang dibaca, pemindaian pertama 120 hari ke belakang, dan daftar Never read mail from serta Always read mail from yang kosong" caption="Setiap kotak masuk hanya dibaca setelah Anda mengaktifkannya, dan hanya untuk invoice." path="/settings/received-invoices"}
::

### Opsi 3: seret file-nya

Seret PDF, foto (PNG, JPEG, WebP), dan file XML e-invoice ke halaman, atau tekan **Choose files**. Hingga 20 file sekaligus, masing-masing 15 MB. Anda juga bisa menempelkan foto. Foto HEIC dari iPhone belum bisa dibaca: ekspor dulu sebagai JPEG.

## Cara setiap invoice dibaca

- **E-invoice dibaca persis.** File XML Facturae, UBL, dan CII diurai oleh kode, tanpa AI dan tanpa biaya. File Facturae yang berisi beberapa invoice menjadi beberapa baris. Tanda tangan ditampilkan sebagai ada, bukan terverifikasi.
- **AI membaca PDF dan foto.** PDF hingga 10 MB dan enam halaman, foto hingga 5 MB. Setiap pembacaan memakai jatah AI bulanan Anda, sama dengan balasan tamu, dan menampilkan token serta biayanya di invoice. Secara default AI membaca paling banyak 40 invoice per hari; Anda bisa mengubahnya.
- **Lampiran email menunggu Anda secara default.** **Read email attachments automatically** nonaktif sampai Anda mengaktifkannya, dan email dengan peringatan penipuan tidak pernah dibaca oleh mesin.

Setiap kolom menunjukkan asal nilainya (**E-invoice**, **AI**, atau **You**). Apa yang Anda koreksi tidak pernah ditimpa oleh pembacaan baru.

## Cocokkan dengan aslinya, lalu konfirmasi

Setiap invoice dimulai sebagai **To review**. Buka, bandingkan kolom-kolomnya dengan dokumen asli di sebelahnya, lalu tekan **Confirm** (atau **Confirm and next** untuk menyelesaikan antrean). Nanti, **Mark as paid** dengan tanggalnya. Ada yang salah? **Mark as duplicate**, atau **Reject** dengan alasan: **Not for this property**, **Not an invoice**, **Spam or fraud**, atau **Other**. File yang ditolak tidak pernah dimasukkan lagi oleh pemindaian kotak masuk.

::screenshot{src="/images/blog/demo/en/supplier-invoices-review-iban-warning.webp" alt="Invoice masuk dari Electra Norte, status To review, sebesar €218,70: tombol Confirm, Mark as duplicate, dan Reject, kotak merah Check this invoice before you confirm it yang menyatakan IBAN tidak sama dengan invoice pemasok ini sebelumnya, kotak I checked this supplier through a known channel yang belum dicentang dengan tombol Acknowledge, dan detail email berisi pengirim, subjek berbahasa Spanyol, kotak masuk reservas@example.com, Sender check Not available, dan Email risk Medium risk" caption="Rekening bank yang berubah memblokir Confirm sampai seseorang memeriksanya dengan pemasok lewat telepon." path="/received-invoices"}
::

### Peringatan yang mencegah pembayaran yang salah

Penipuan pemasok yang paling umum itu sederhana: invoice yang terlihat benar, dengan rekening bank baru. Hotelier Tools membandingkan setiap invoice dengan riwayat pemasok dan email asalnya:

- **Rekening bank (IBAN) tidak sama dengan invoice pemasok ini sebelumnya.** Hanya empat digit terakhir yang disimpan.
- **Alamat pengirim gagal pemeriksaan keasliannya (DMARC).** Halaman invoice menampilkan baris **Sender check** (**Passed**, **Failed**, atau **Not available**), dibaca dari header server email itu sendiri, bukan dari baris From.
- **Email asalnya punya peringatan penipuan**, invoice ditujukan ke NPWP perusahaan lain, penerbitnya adalah properti Anda sendiri, atau PDF-nya berisi skrip.

Salah satu dari hal ini memblokir **Confirm** dan **Mark as paid** sampai seseorang mencentang **I checked this supplier through a known channel** dan menekan **Acknowledge**. Telepon pemasok di nomor yang sudah Anda punya, jangan nomor dari email itu. Tidak ada API key atau tool AI yang bisa mengonfirmasi atas nama Anda.

Peringatan yang lebih ringan tidak memblokir, tetapi tetap ditampilkan: jumlahnya tidak cocok, NPWP gagal pemeriksaan digit kontrol, atau pemasok biasanya mengirim dari domain lain.

### Duplikat

Invoice ditandai sebagai kemungkinan duplikat jika ada invoice lain dengan NPWP pemasok dan nomor invoice yang sama, atau pemasok dan total yang sama dengan tanggal terbit berselisih tiga hari atau kurang. Anda yang memutuskan: **Mark as duplicate** lalu pilih yang asli, dan invoice itu tetap di daftar, tidak dihitung dalam total.

### Yang tidak pernah bisa Anda lakukan

Menghapus invoice yang sudah dikonfirmasi atau dibayar. Invoice itu tetap tersimpan (empat tahun di Spanyol) dan hanya bisa ditolak, sehingga tidak dihitung dalam total dan ekspor.

## Ekspor kuartal untuk akuntan Anda

1. Di **Received invoices**, daftar dikelompokkan per kuartal kalender (Q1 = Januari sampai Maret, seperti di modelo 303) secara default. Anda bisa mengelompokkan per bulan, tahun, pemasok, atau kategori, dan mengatur bulan awal tahun fiskal Anda.
2. Tekan **Export for accountant** pada suatu kuartal.
3. Pilih **Confirmed and paid invoices** (default) atau **Also the ones waiting for review**, dan **ZIP with the originals and the CSV** atau **CSV only**.
4. Jika perlu, centang **List the invoices that have not arrived**.

ZIP berisi satu file per invoice, **dinamai berdasarkan tanggal, pemasok, dan nomor**, sebuah CSV dengan susunan seperti libro registro de facturas recibidas (satu baris per baris pajak), dan sebuah README. Hingga 500 file per ekspor.

::screenshot{src="/images/blog/demo/en/supplier-invoices-export-dialog.webp" alt="Dialog Export for the accountant untuk periode 2026: Confirmed and paid invoices terpilih, ZIP with the originals and the CSV terpilih, List the invoices that have not arrived tidak dicentang, 29 invoice untuk diekspor, dan pemberitahuan bahwa 3 invoice yang menunggu pemeriksaan tidak disertakan" caption="Satu kuartal, satu ZIP: file asli yang sudah diberi nama ulang plus CSV bergaya register." path="/received-invoices"}
::

Jujurlah kepada akuntan Anda soal satu hal: CSV ini mengikuti susunan register, tetapi **tidak tersertifikasi** oleh otoritas pajak. Akuntanlah yang memutuskan apa yang masuk ke pembukuan.

### Invoice yang mungkin belum Anda terima

Untuk pemasok yang menagih secara rutin (laundry bulanan, listrik dua bulanan, konsultan pajak per kuartal), **Invoices you may be missing** menampilkan "Expected from Lavandería Sol SL around October 1" ketika invoice berikutnya belum datang. Ini perkiraan, bukan utang. **Not this time** menyembunyikan satu periode; **Stop expecting** menyembunyikan pemasok itu.

::screenshot{src="/images/blog/demo/en/supplier-invoices-quarter-list.webp" alt="Halaman Received invoices: kotak masuk terakhir dibaca dengan 2 diimpor, area Drop invoices here dengan Read PDFs and photos with AI aktif, kotak Spent €25.852,14, VAT €796,87, IGIC €0,00, 3 to review dan 1 unpaid, Invoices you may be missing dengan Lavandería Sol SL terlambat sejak 1 Oktober dan Electra Norte sudah tiba untuk diperiksa, serta tugas Scan the mailboxes yang dijeda" caption="Lihat pengeluaran Anda, apa yang masih perlu diperiksa, dan invoice rutin mana yang belum datang." path="/received-invoices"}
::

## Siapa bisa melakukan apa

Beri akuntan Anda login sendiri di **Settings > Team & roles** (`/settings/team`). Peran bawaan **accountant** bisa melihat, mengedit, dan meminta invoice dibaca, tetapi tidak bisa memindai kotak masuk. Memindai email bisnis dan memakai kredit AI adalah izin terpisah yang Anda berikan dengan sengaja.

Asisten juga bisa membantu: "Invoice pemasok mana yang belum saya terima untuk Q3?" atau "Berapa pajak masukan sejauh ini di kuartal ini?" dijawab dari data yang sama, dan apa pun yang mengubah invoice menunggu persetujuan Anda.

::demo-cta{path="/received-invoices"}
::

Received invoices adalah bagian dari [fitur Invoicing](/tools/bot/invoicing). Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Invoice masuk disimpan di Hotelier Tools; tidak ada yang ditulis ke Little Hotelier.
::

Lihat juga: [unduh semua invoice Little Hotelier Anda](/blog/download-all-little-hotelier-invoices), [alamat email hotel untuk invoice](/blog/hotel-email-address), [mengirim invoice tamu saat check-out](/blog/send-invoice-to-guest-at-checkout).

## Ringkasan

- Kirim invoice pemasok ke satu tempat: alamat invoice privat, kotak masuk Anda sendiri yang dipindai setiap hari, atau seret dan lepas.
- Simpan: di Spanyol minimal empat tahun untuk pajak dan enam tahun menurut Código de Comercio, sebagai file asli, secara berurutan.
- E-invoice dibaca persis; AI membaca PDF dan foto; manusia mengonfirmasi masing-masing.
- IBAN yang berubah, pemeriksaan pengirim yang gagal, atau skor penipuan memblokir pembayaran sampai seseorang memeriksanya dengan pemasok.
- Ekspor setiap kuartal sebagai ZIP berisi file asli yang diberi nama ulang dan CSV bergaya register untuk akuntan Anda.
