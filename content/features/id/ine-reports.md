---
title: "Survei okupansi hotel INE dari Little Hotelier"
---

Laporan INE menyusun survei okupansi hotel INE Spanyol dari reservasi Little Hotelier Anda: kedatangan dan malam menginap berdasarkan wilayah Spanyol atau negara, kamar terisi, tempat tidur tambahan, dan tarif rata-rata berdasarkan jenis klien. Hotelier Tools memvalidasi angkanya, mengirim XML lewat sistem IRIA milik INE, dan menyimpan bukti terimanya.

## Cara kerjanya

1. **Atur establishment Anda sekali.** Di **INE Setup** (`/ine-setup`), masukkan nomor pesanan IRIA (NOrden) dan kata sandi Anda, tekan **Test IRIA connection**, lalu isi alamat, kapasitas, jenis, dan kategori untuk header XML.
2. **Buat laporannya.** Di **Guest Origins** (`/reports/guest-origins`), pilih tanggal sesuai permintaan INE dan tekan **Generate report**. Tab membagi hasilnya menjadi ringkasan harian, asal tamu, kamar, ADR per klien, dan kualitas data.
3. **Perbaiki tamu tanpa asal.** Reservasi tanpa kewarganegaraan atau provinsi ditandai. Perbaiki di Little Hotelier dan segarkan hanya baris-baris itu.
4. **Validasi, pratinjau, dan kirim.** Tekan **Validate for the INE**, lalu **Preview XML**, lalu **Send to the INE**. Bukti terima dari INE disimpan bersama laporan.
5. **Simpan riwayatnya.** **Saved Reports** (`/reports/list`) mencantumkan setiap bulan beserta status dan bukti terimanya.

Jika kotak surat yang menerima email INE terhubung ke kotak masuk tamu, permintaan INE menampilkan tombol yang membuat laporan untuk tepat tanggal yang diminta.

Apa yang ditanyakan survei, dendanya, dan penolakan IRIA yang harus dihindari ada di [cara mengisi survei okupansi hotel INE](/blog/ine-hotel-occupancy-survey).

## Yang Anda butuhkan

- Permintaan dari INE yang berisi nomor pesanan dan kata sandi Anda. Survei ini hanya berlaku setelah INE memilih establishment Anda.
- Little Hotelier terhubung di **Credentials**.
- Negara dan provinsi tamu terisi. INE menghitung tamu berdasarkan tempat tinggal mereka, bukan kewarganegaraan. Skrip gratis [Simpan Provinsi dan Negara dengan Mudah](/tools/ui/easy-save-province-country) dan [pemeriksaan otomatis](/tools/bot/automated-checks) membantu menjaganya tetap lengkap.

## Batasan dan hal yang perlu diketahui

- **Status: stabil.**
- Fitur ini menyusun kuesioner hotel untuk establishment bertipe hotel: hotel, hostal, dan pensión. Apartemen wisata, tempat berkemah, rumah pedesaan, dan albergue menjawab kuesioner INE yang lain.
- Laporan yang sudah terkirim tidak bisa lagi diubah atau dihapus, tetapi Anda masih bisa mengunduh XML-nya.
- Kata sandi IRIA Anda disimpan terenkripsi dan tidak pernah ditampilkan sebagai teks biasa.
- Di demo publik, pengiriman ke INE dimatikan. Jangan pernah mengetik kredensial IRIA yang asli di sana.
- Hotelier Tools tidak berafiliasi dengan INE, SiteMinder, maupun Little Hotelier.
