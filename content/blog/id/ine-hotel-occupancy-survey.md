---
title: "Cara mengisi survei okupansi hotel INE dari Little Hotelier (Spanyol)"
seoTitle: "Survei okupansi hotel INE dari Little Hotelier (Spanyol)"
description: "Wajib jika INE memilih hotel Anda, dengan denda hingga €30.050. Apa yang ditanyakan survei, cara kerja IRIA, dan cara mengisinya dari Little Hotelier."
date: 2026-10-03
category: compliance
tags: [ine, spain, compliance, reports, little hotelier]
keywords: [survei okupansi hotel ine, survei ine hotel spanyol, encuesta ocupacion hotelera ine, encuesta ine hoteles, iria ine encuesta, encuesta ine obligatoria multa]
feature: ine-reports
demoPath: /reports/guest-origins
cover: /images/blog/demo/en/ine-guest-origins-report.webp
coverAlt: "Guest Origin Statistics (survei INE HOT) di Hotelier Tools untuk 27 September sampai 3 Oktober 2026: 8 kedatangan, 24 malam menginap, 3,4 tamu per hari dan 3 data yang belum lengkap, di atas tab Daily summary, By guest origin, Rooms, ADR by client, dan Data quality"
faq:
  - q: "Apakah survei okupansi INE wajib untuk hostal atau B&B kecil?"
    a: "Ya, jika INE memilih akomodasi Anda. Survei ini mencakup semua properti bertipe hotel di Spanyol, termasuk hostal dan pensión, dan kuesioner INE menyatakan bahwa menjawab itu wajib berdasarkan undang-undang statistik Spanyol. Jika Anda menerima surat atau email dari INE berisi nomor order dan kata sandi, Anda wajib menjawab."
  - q: "Berapa denda jika tidak menjawab survei INE?"
    a: "Kuesioner INE mengutip undang-undang statistik: €60,10 sampai €300,51 untuk pelanggaran ringan, €300,52 sampai €3.005,06 untuk pelanggaran berat, dan €3.005,07 sampai €30.050,61 untuk pelanggaran sangat berat, seperti mengirim data palsu. Jawaban yang terlambat atau tidak dikirim tergolong ringan, kecuali sangat merugikan statistik."
  - q: "Apakah survei INE memerlukan nomor paspor atau DNI tamu saya?"
    a: "Tidak. INE meminta angka total: berapa tamu yang tiba dan berapa malam mereka menginap, dikelompokkan menurut negara tempat tinggal atau wilayah Spanyol, ditambah kamar, tarif, dan karyawan. Tidak ada nomor identitas, nama, atau alamat yang dikirim. Data identitas tamu dikirim ke SES.Hospedajes, yang merupakan kewajiban terpisah."
  - q: "Apakah survei INE memakai kewarganegaraan tamu atau tempat tinggalnya?"
    a: "Tempat tinggalnya. INE mengklasifikasikan wisatawan menurut tempat tinggal: penduduk Spanyol menurut wilayah dan selebihnya menurut negara. Warga negara Jerman yang tinggal di Valencia dihitung sebagai penduduk Valencia, jadi pastikan negara dan provinsi pada alamat tamu sudah terisi."
  - q: "Bisakah ini dipakai untuk apartemen wisata atau rumah pedesaan?"
    a: "Apartemen, campsite, rumah pedesaan, dan albergue menjawab kuesioner INE mereka sendiri. Hotelier Tools menyusun survei hotel (HOT) untuk akomodasi bertipe hotel seperti hotel, hostal, dan pensión."
  - q: "Apakah Hotelier Tools produk resmi INE atau Little Hotelier?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi atau didukung oleh INE, SiteMinder, atau Little Hotelier. Ia membaca reservasi Anda dengan login Little Hotelier Anda sendiri dan mengirim laporan lewat sistem IRIA milik INE dengan akses IRIA akomodasi Anda sendiri."
---

Jika INE (Institut Statistik Nasional Spanyol) memilih hotel atau hostal Anda untuk survei okupansinya, menjawab itu wajib. Formulir INE sendiri mencantumkan denda dari €60,10 sampai €30.050,61. Anda menjawab lewat portal web **IRIA** milik INE atau dengan mengirim berkas XML. Dengan cara apa pun, Anda melaporkan kedatangan dan malam menginap menurut tempat tinggal tamu, kamar terisi, tarif rata-rata menurut tipe klien, dan karyawan.

Little Hotelier menyimpan sebagian besar angka itu. Panduan ini menunjukkan apa yang diminta INE, cara mengumpulkannya dari Little Hotelier, dan cara Hotelier Tools menyusun, memeriksa, dan mengirim laporannya untuk Anda.

::callout{type="info" title="Terakhir diverifikasi: Oktober 2026"}
Fakta di bawah ini berasal dari [metodologi survei hotel INE 2025](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf) dan [kuesioner hotelnya](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf). Surat atau email INE Anda selalu menjadi acuan akhir untuk tanggal dan tenggat.
::

## Apa itu survei okupansi hotel INE?

Nama resminya **Encuesta de Ocupación en Alojamientos Turísticos** (survei okupansi akomodasi wisata). Bagian hotelnya adalah **Encuesta de Ocupación Hotelera (EOH)**. INE memakainya untuk menerbitkan angka bulanan tentang wisatawan, malam menginap, okupansi, dan lapangan kerja hotel untuk seluruh Spanyol, setiap wilayah, dan kawasan wisata utama.

Survei ini mencakup setiap *establecimiento hotelero*: hotel, aparthotel, motel, **hostal**, **pensión**, fonda, dan casa de huéspedes. Apartemen wisata, campsite, rumah pedesaan, dan *albergue* (hostel) memiliki kuesioner sendiri dalam keluarga yang sama ([INE: statistik perhotelan dan pariwisata](https://www.ine.es/dyngs/INEbase/es/categoria.htm?c=Estadistica_P&cid=1254735576863)).

### Siapa yang wajib menjawab?

Tidak semua hotel. INE mengambil sampel acak menurut provinsi, kategori, dan ukuran. Hotel bintang lima dan properti terbesar di setiap kelompok selalu dimasukkan. Hotel yang terpilih biasanya tetap berada dalam sampel selama empat tahun, dengan sekitar seperempat sampel diperbarui ([metodologi, bagian 6](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

Jika Anda terpilih, INE menulis kepada Anda dengan **nomor order** (*número de orden*, sering tertulis "NOrden") dan kata sandi untuk portalnya. Pesan itu adalah tanda bahwa survei kini berlaku untuk Anda.

## Apakah survei INE wajib? Berapa dendanya?

Ya, begitu Anda terpilih. Kuesionernya bertanda *"Estadística de cumplimentación obligatoria"*. Undang-undang statistik Spanyol (Ley 12/1989, LFEP) menyatakan responden harus menjawab "dengan jujur, akurat, lengkap, dan tepat waktu" (pasal 10.2). Undang-Undang 4/1990 dan 13/1996 menjadikan survei ini wajib.

Denda yang tercantum pada formulir INE (pasal 51 LFEP):

| Pelanggaran | Contoh dalam undang-undang | Denda |
|---|---|---|
| Ringan (*leve*) | Data terlambat, tidak ada, atau tidak lengkap, tanpa kerugian serius | €60,10 sampai €300,51 |
| Berat (*grave*) | Hal yang sama, dengan kerugian serius bagi statistik | €300,52 sampai €3.005,06 |
| Sangat berat (*muy grave*) | Data palsu, atau penolakan berulang | €3.005,07 sampai €30.050,61 |

Contoh-contoh itu berasal dari pasal 50 [Ley 12/1989 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-1989-10767). Jawaban Anda dilindungi kerahasiaan statistik (pasal 13 LFEP). INE menyatakan tidak membagikan data individual kepada administrasi lain, kecuali kantor statistik yang terikat kerahasiaan yang sama ([informasi INE untuk responden](https://www.ine.es/dyngs/COL/index.htm?cid=441)).

## Data apa yang diminta survei INE?

| Yang diminta INE (istilah Spanyol) | Yang Anda laporkan | Di mana menemukannya |
|---|---|---|
| *Viajeros entrados* | Tamu yang tiba, menurut tempat tinggal | Reservasi dan alamat tamu |
| *Pernoctaciones* | Malam menginap, menurut tempat tinggal | Tanggal menginap dan jumlah tamu |
| *Habitaciones ocupadas* | Kamar terisi (pemakaian double atau single) | Penempatan kamar |
| *Camas supletorias* | Tempat tidur tambahan dan baby cot yang dipakai | Catatan Anda sendiri |
| *Personal ocupado* | Karyawan bulan itu: tidak dibayar, tetap dibayar, sementara dibayar | Penggajian, bukan Little Hotelier |
| *ADR por tipo de cliente* | Tarif harian rata-rata dan porsi kamar per tipe klien | Tarif dan sumber pemesanan |

Tiga detail yang sering menjebak:

- **Tempat tinggal, bukan kewarganegaraan.** INE mengelompokkan tamu menurut tempat tinggal: penduduk Spanyol menurut wilayah (berkas XML memakai provinsi), selebihnya menurut negara. Warga negara Prancis yang tinggal di Málaga dihitung sebagai Málaga.
- **ADR punya aturan ketat.** INE menginginkan tarif kamar double, hanya kamar (tanpa sarapan atau makan), kotor sebelum komisi dan tanpa PPN. Tarif itu dibagi ke sembilan tipe klien: tour operator tradisional, agen perjalanan tradisional, perusahaan, perorangan, grup, pemesanan langsung di situs web Anda, tour operator online, agen perjalanan online, dan lainnya.
- **Baby cot dihitung sebagai tempat tidur tambahan.** INE menghitung baby cot sebagai *camas supletorias*. Laporkan, atau malam menginap yang Anda laporkan bisa melebihi jumlah tempat tidur Anda.

Survei ini tidak meminta nomor paspor atau DNI. Ini data agregat, bukan buku tamu. Mendaftarkan tamu ke kepolisian adalah kewajiban terpisah: lihat [SES Hospedajes dengan Little Hotelier](/blog/ses-hospedajes-little-hotelier).

## Tanggal mana yang dicakup, dan kapan tenggatnya?

Metodologi INE 2025 menyebutkan bahwa kuesioner dasar mencakup **tujuh hari berturut-turut setiap bulan, dipilih secara acak**, sehingga seluruh hotel bersama-sama mencakup satu bulan penuh. Hotel bintang tiga, empat, dan lima juga diminta total sebulan penuh. Berkas XML memuat setiap hari dalam bulan referensi ([metodologi, bagian 7 dan 8](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

Kuesioner pelengkap (karyawan dan ADR) jatuh tempo dalam **lima hari kalender setelah akhir bulan** yang menjadi acuan data, menurut [formulir INE](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf).

Dalam praktiknya, gunakan persis tanggal dan tenggat yang tertera pada permintaan INE untuk akomodasi Anda.

## Bagaimana cara mengirimnya: formulir web IRIA atau berkas XML?

1. **Formulir web IRIA.** IRIA adalah portal pengumpulan data online INE ([iria.ine.es](https://iria.ine.es/iriaPortal/contents/index.jsf)). Masukkan nomor order dan kata sandi dari pesan INE, lalu ketik angka-angkanya ke formulir yang meniru kuesioner kertas. Saat Anda mengirim, IRIA menerbitkan sertifikat dengan nomor unik ([bantuan IRIA](https://iria.ine.es/iriaPortal/contents/static/varios/ayuda.jsf)). Simpanlah.
2. **Berkas XML.** Software manajemen dapat membuat berkas dalam format yang diterbitkan INE dan mengirimnya, sehingga tidak ada yang mengetik ulang angka. [Kuesioner bulanan](https://www.ine.es/daco/daco42/ocuphotel/eohm_13.pdf) INE juga menunjuk ke sistem ARCE untuk unggahan XML.

Mengetik manual berarti menelusuri setiap reservasi dalam periode itu dan menghitung tamu serta malam menginap per negara dan per provinsi Spanyol. Di situlah waktu terbuang, dan di situlah kesalahan muncul.

## Cara mengisi negara dan provinsi tamu dengan benar di Little Hotelier

Data tamu di Little Hotelier sudah memiliki kolom yang dibutuhkan INE: **Country** dan **Province/Region** pada alamat, ditambah **Nationality**. Masalahnya, reservasi dari Booking.com dan channel lain sering datang tanpa alamat, sehingga kolomnya kosong.

Tiga kebiasaan menyelesaikan sebagian besar masalah:

1. Isi negara dan provinsi saat check-in, dari ID tamu atau dengan pertanyaan singkat.
2. Pasang userscript gratis [Easy Save Province and Country](/tools/ui/easy-save-province-country). Saat Anda mengklik kolom provinsi, skrip menampilkan daftar provinsi Spanyol, dan memilih salah satunya mengatur negara ke Spanyol.
3. Biarkan [pemeriksaan otomatis](/tools/bot/automated-checks) menandai reservasi yang negara atau provinsinya kosong setelah pemesanan, saat kedatangan, dan saat check-out, selagi tamu masih ada untuk ditanya.

::screenshot{src="/images/scripts/easy-save-province-country/to.webp" alt="Tab tamu Little Hotelier dengan daftar provinsi Spanyol dari Easy Save Province and Country terbuka di bawah kolom Province/Region" caption="Userscript gratis mengubah kolom provinsi menjadi daftar pilihan dan mengatur negaranya untuk Anda."}
::

## Cara yang lebih cepat: laporan INE langsung dari Little Hotelier

Per Oktober 2026 kami tidak menemukan ekspor survei INE di pusat bantuan Little Hotelier. Hotelier Tools mengisi celah itu: ia membaca reservasi Anda dengan login Little Hotelier Anda sendiri, menyusun angka INE, memvalidasinya, dan mengirim XML lewat IRIA. Fitur laporan INE ini berstatus stabil.

### 1. Siapkan akomodasi Anda sekali saja

Buka **INE Setup** (`/ine-setup`). Masukkan nomor order IRIA (**NOrden**) dan kata sandi Anda, tekan **Test IRIA connection**, isi alamat dan kapasitas akomodasi, lalu pilih tipe dan kategori. Data ini masuk ke header XML. Kata sandi disimpan terenkripsi dan tidak pernah ditampilkan sebagai teks biasa.

::screenshot{src="/images/blog/demo/en/ine-establishment-setup.webp" alt="INE setup, halaman Establishment di Hotelier Tools: pemberitahuan demo hanya-baca, kartu akses IRIA dengan kolom NOrden, kata sandi IRIA tersamar yang tersimpan terenkripsi dan tombol Test IRIA connection, lalu detail akomodasi dengan nama usaha dan alamat" caption="Masukkan akses IRIA dan detail akomodasi Anda sekali saja." path="/ine-setup"}
::

### 2. Buat laporan untuk tanggal yang diminta INE

Buka **Guest Origins** (`/reports/guest-origins`), pilih tanggal sesuai permintaan INE, lalu tekan **Generate report**. Hotelier Tools membaca reservasi tersebut dan menghitung kedatangan serta malam menginap setiap hari menurut wilayah Spanyol atau negara, ditambah kamar terisi, tempat tidur tambahan, dan tarif rata-rata menurut tipe klien. Hasilnya dibagi dalam tab **Daily summary**, **By guest origin**, **Rooms**, **ADR by client**, dan **Data quality**.

Jika kotak surat yang menerima email INE terhubung ke inbox Hotelier Tools, email INE menampilkan kartu dengan tombol yang membuat laporan untuk tanggal yang diminta persis. Kata sandi IRIA sekali pakai tetap berada di dalam email.

::screenshot{src="/images/blog/demo/en/ine-guest-origins-by-origin.webp" alt="Tab By guest origin pada laporan Guest Origins: kedatangan dan menginap untuk setiap malam dari 27/9 sampai 3/10, dikelompokkan di bawah Other countries (Irlanda, Países Bajos, Reino Unido) dan Missing/Unknown untuk tamu tanpa provinsi Spanyol, di atas bagian awal kartu pengiriman INE" caption="Kedatangan dan menginap setiap malam menurut asal tamu, dengan tamu yang tidak punya provinsi ditampilkan terpisah agar bisa Anda perbaiki." path="/reports/guest-origins"}
::

### 3. Perbaiki tamu tanpa asal

Reservasi tanpa kewarganegaraan atau provinsi akan ditandai. Perbaiki di Little Hotelier, lalu segarkan hanya baris-baris itu. Anda tidak perlu membangun ulang seluruh laporan.

### 4. Validasi, pratinjau, dan kirim

Tekan **Validate for the INE**, lalu **Preview XML** untuk melihat persis apa yang akan dikirim, lalu **Send to the INE**. Laporan dikirim ke IRIA dan tanda terima INE (*justificante*) disimpan bersamanya.

### 5. Simpan setiap tanda terima

**Saved Reports** (`/reports/list`) menampilkan setiap laporan dengan periode, status, dan tanda terima INE. Laporan yang sudah terkirim tidak dapat lagi diubah atau dihapus, dan Anda tetap bisa mengunduh XML-nya.

::screenshot{src="/images/blog/demo/en/ine-saved-reports.webp" alt="Halaman Saved reports di Hotelier Tools yang menampilkan tiga laporan guest-origin berstatus Draft, dengan kolom Period, Status, INE receipt, Staff, dan Created, aksi View dan hapus, serta tombol New report" caption="Setiap laporan dengan periode, status, dan, setelah terkirim, tanda terima INE." path="/reports/list"}
::

::callout{type="note" title="Mencobanya di demo"}
Demo publik memiliki hotel fiktif dengan satu laporan INE tersimpan. Pengiriman ke INE dinonaktifkan di sana, jadi tidak ada yang sampai ke INE, dan Anda tidak boleh mengetik kredensial IRIA asli ke dalamnya.
::

::demo-cta{path="/reports/guest-origins"}
::

### Mengapa IRIA menolak kuesioner?

Pengembang PMS hotel open-source yang memperbaiki penolakan berulang mencantumkan penyebab berikut ([commitsun/pms, pull request 233](https://github.com/commitsun/pms/pull/233)):

- kuesioner hotel dikirim untuk properti yang terdaftar sebagai apartemen
- rentang tanggal yang melintasi dua bulan, sehingga nomor hari berulang di dalam berkas
- baby cot atau tempat tidur tambahan tidak dilaporkan, sehingga malam menginap melebihi jumlah tempat tidur yang dilaporkan
- tamu dari negara tanpa kode ISO standar, yang membuat kolom negara kosong

Jalankan langkah validasi sebelum setiap pengiriman, dan jaga agar tipe dan kategori INE di setup sesuai dengan data yang dimiliki INE.

## Ringkasan

- Survei INE wajib begitu INE memilih akomodasi Anda, dan denda mencapai €30.050,61 untuk data palsu.
- Survei ini meminta total menurut tempat tinggal tamu (bukan kewarganegaraan), kamar, tempat tidur tambahan, ADR menurut tipe klien, dan karyawan. Tanpa nomor identitas.
- Kirim lewat IRIA secara manual, atau sebagai berkas XML dari software.
- Jaga negara dan provinsi tetap terisi di Little Hotelier, dengan [userscript provinsi](/tools/ui/easy-save-province-country) gratis dan [pemeriksaan otomatis](/tools/bot/automated-checks).
- [Laporan INE Hotelier Tools](/tools/bot/ine-reports) menyusun, memvalidasi, dan mengirim laporan lewat IRIA serta menyimpan tanda terimanya. Gratis untuk setiap hotel sampai 10 Januari 2027. Hotelier Tools independen dan tidak berafiliasi atau didukung oleh SiteMinder, Little Hotelier, atau INE.

Untuk buku tamu kepolisian dan aturan negara lain, baca [aturan registrasi tamu menurut negara](/blog/guest-registration-rules-by-country).
