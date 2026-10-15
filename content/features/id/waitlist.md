---
title: "Daftar tunggu untuk tanggal penuh di Little Hotelier"
---

Daftar tunggu, yang di dashboard bernama **Availability Queue**, memantau masa menginap yang penuh untuk Anda dan memeriksa Little Hotelier sesuai jadwal. Ketika setiap kamar yang diminta kosong pada setiap malam, tamu, tim Anda, atau keduanya menerima satu pesan lewat email atau WhatsApp, dengan tautan pemesanan langsung.

## Cara kerjanya

1. **Tambahkan masa menginap untuk dipantau.** Di `/availability-watch`, pilih malam pertama dan terakhir, kamar yang dibutuhkan, dan secara opsional tipe kamarnya. Grup campuran bisa meminta jumlah berbeda per tipe kamar.
2. **Pilih siapa yang diberi tahu.** Tambahkan kontak tamu, dan kontak Anda. Pilih peringatannya: **available** (semua kamar kosong, yang menutup pemantauan), **partial** (kamar lebih sedikit dari yang diminta, secara default hanya untuk properti), atau **expiring** (masa menginap dimulai dalam 48 jam dan belum ada yang ditemukan).
3. **Jadwalkan pengecekannya.** Tekan **Check every night at 01:00**, atau pilih apa saja dari setiap 20 menit sampai sekali sehari. **Check the queue now** menjalankannya seketika.
4. **Satu pesan per pantauan.** Malam yang paling lemah menentukan: masa menginap baru kosong jika setiap malamnya punya kamar. Setelah pesan terkirim, entri ditutup, dan **History** menyimpan teks persis yang dikirim.
5. **Biarkan tamu mendaftar sendiri.** **Public waiting-list page** (`/availability-watch/public`) adalah formulir yang Anda tautkan dari situs web Anda. Tamu memilih malamnya, meninggalkan email, dan mencentang kotak persetujuan.

Metode spreadsheet dan aturan siapa yang didahulukan ada di [cara mengelola daftar tunggu untuk tanggal penuh](/blog/hotel-waitlist-sold-out-dates).

## Yang Anda butuhkan

- Little Hotelier terhubung di **Credentials**.
- Pengecekan terjadwal. Tidak ada yang diperiksa sampai tugas itu ada.
- Untuk pesan WhatsApp, nomor WhatsApp yang terhubung.
- Nama legal dan alamat Anda di kartu properti, karena pemberitahuan privasi formulir publik dibuat dari situ.

## Batasan dan hal yang perlu diketahui

- **Status: beta.**
- **Tidak ada yang ditahan.** Daftar tunggu tidak pernah memesan kamar atau mengubah pemesanan. Tamu pertama yang memesan mendapatkan kamarnya.
- **Pengecekan setiap malam bisa terlambat.** Periksa lebih sering saat musim ramai.
- **Halaman publik nonaktif sampai Anda membukanya.** Secara default ia meminta tamu mengonfirmasi email dan menerima masa menginap hingga 14 malam dan 2 kamar per permintaan. Daftar dibatasi 100 orang yang menunggu dan 40 pendaftaran per hari. Detail kontak dihapus dari entri yang sudah ditutup setelah 90 hari.
- **Ia memengaruhi harga Anda.** Setiap pihak yang menunggu menaikkan [rekomendasi harga](/tools/bot/dynamic-pricing) malam itu sebesar 3%, hingga 12%.
