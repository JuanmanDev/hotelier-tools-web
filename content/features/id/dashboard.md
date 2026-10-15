---
title: "Properti Little Hotelier Anda dalam satu dashboard"
---

Dashboard Hotelier Tools adalah layar yang Anda lihat setelah masuk: menampilkan koneksi mana yang berfungsi, fitur mana yang berjalan, siapa yang tiba berikutnya, dan apa yang baru terjadi. Ia berdampingan dengan Little Hotelier dan memakai login Little Hotelier properti Anda sendiri, sehingga pemesanan Anda tetap di tempatnya.

## Cara kerjanya

1. **Hubungkan sekali.** Di **Credentials** (`/credentials`) Anda menyimpan login Little Hotelier. Login disimpan terenkripsi (AES-256-GCM). Booking.com, kotak surat, dan WhatsApp adalah koneksi opsional yang bisa Anda tambahkan nanti dari tempat yang sama.
2. **Kartu properti Anda terisi sendiri.** Alamat, kamar, pajak, dan kebijakan dibaca dari Little Hotelier dan dijaga tetap terbaru di **Settings > Property & AI knowledge** (`/settings/property`). Kotak masuk tamu dan halaman daftar tunggu publik memakai kartu ini.
3. **Layar utama menampilkan kondisi terkini.** Koneksi, fitur yang berjalan, kedatangan mendatang, dan aktivitas terbaru ada dalam satu layar.
4. **Pencarian menemukan sisanya.** Tekan **Ctrl+K** (**Cmd+K** di Mac) untuk mencari halaman, entri daftar tunggu, tugas terjadwal, dan percakapan. Pencarian mengabaikan aksen dan memahami kata bahasa Inggris dan Spanyol untuk hal yang sama: "lista de espera" menemukan Availability Queue.

Lebih banyak penghemat waktu untuk front desk ada di [tips dan fitur tersembunyi Little Hotelier](/blog/little-hotelier-tips).

## Yang Anda butuhkan

- Akun Little Hotelier beserta loginnya.
- Akun Hotelier Tools, yang dibuat di [dashboard.hotelier.tools/register](https://dashboard.hotelier.tools/register). Anda bisa masuk dengan passkey.
- Tidak ada yang perlu dipasang. Semuanya berjalan di browser.

Ingin melihat-lihat dulu? [Demo publik](https://demo.hotelier.tools/) memakai hotel rekaan, dan detail masuknya ada di halaman login-nya.

## Batasan dan hal yang perlu diketahui

- **Status: beta.** Sudah berjalan baik dan masih terus disempurnakan.
- **Independen.** Hotelier Tools tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Ia hanya bisa melakukan apa yang bisa dilakukan login Little Hotelier Anda di aplikasi web.
- **Kata sandi kedaluwarsa menjeda semuanya.** Jika kata sandi Little Hotelier Anda tidak lagi berfungsi, tugas terjadwal dijeda alih-alih mencoba ulang, yang melindungi akun Anda dari penguncian. Simpan kata sandi baru di **Credentials** atau tekan **Check now & resume**.
- **Pencarian memahami dua bahasa.** Ia mengerti istilah bahasa Inggris dan Spanyol.

## Pertanyaan

**Apakah ini menggantikan Little Hotelier?**
Tidak. Reservasi, tarif, dan kalender tetap di Little Hotelier. Dashboard membacanya dan menambahkan apa yang tidak dilakukan Little Hotelier.

**Berapa biayanya?**
Setiap fitur gratis untuk setiap hotel sampai 10 Januari 2027.
