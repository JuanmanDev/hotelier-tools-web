---
title: "REST API dan server MCP untuk data Little Hotelier"
---

Hotelier Tools memberi properti Little Hotelier Anda sebuah REST API di `https://dashboard.hotelier.tools/api/v1` dan server MCP di `https://dashboard.hotelier.tools/api/mcp`. Dengan begitu skrip, spreadsheet, Claude, ChatGPT, Cursor, atau VS Code Anda dapat membaca reservasi, tamu, harga, dan ketersediaan, serta melakukan beberapa perubahan, dengan izin yang sama seperti akun Hotelier Tools Anda.

## Cara kerjanya

- **Login Anda sendiri, bukan API partner.** Anda menghubungkan Little Hotelier sekali di **Credentials**, dan disimpan terenkripsi. Hotelier Tools memakai endpoint web yang sama dengan aplikasi web Little Hotelier, jadi ia hanya bisa melakukan apa yang bisa dilakukan login itu, tidak lebih.
- **REST API.** JSON lewat HTTPS: `/reservations` (dengan faktur dan PDF per pemesanan), `/guests`, `/prices`, `/room-types`, dan `/methods` untuk metode mentah Little Hotelier. Daftar lengkapnya ada di spesifikasi OpenAPI publik di `/api/v1/openapi.json`, dengan penjelajah interaktif dan templat kode di **REST API & Swagger** (`/developer/rest-api`).
- **Server MCP.** Server HTTP jarak jauh dengan lebih dari 100 alat hotel. Konfigurasi siap pakai untuk setiap klien ada di **MCP Setup** (`/developer/mcp-setup`).

## Cara autentikasi bekerja

- **Kunci API.** Buat satu di **Developer > API & MCP > API Keys** (`/developer/api-keys`). Kunci diawali `htk_`, hanya ditampilkan sekali, dan dimasukkan ke header `Authorization: Bearer`. Kunci tidak memiliki scope: ia bertindak pada satu properti sebagai orang yang membuatnya. Setiap orang bisa memiliki hingga 10 kunci dan mencabut yang mana pun.
- **Masuk untuk MCP.** Klien yang mendukung OAuth dapat terhubung dengan masuk, tanpa kunci. Sesi masuk itu berlaku 30 hari.

## Panggilan baca dan tulis

Panggilan baca tidak mengubah apa pun di Little Hotelier. Panggilan tulis itu nyata: `POST /reservations/{id}/invoices` membuat faktur baru setiap kali dipanggil. Lewat MCP, AI dapat mengubah reservasi (usulan dulu, lalu langkah penerapan dengan `confirmed: true`), catatan pembayaran, harga, stop sell, entri daftar tunggu, dan tugas terjadwal. Di luar dashboard tidak ada kartu persetujuan, jadi biarkan persetujuan alat di klien Anda tetap aktif. Tindakan yang tidak bisa dibatalkan, seperti pengembalian dana atau mengirim faktur lewat email, diblokir untuk klien luar.

## Batasan dan hal yang perlu diketahui

- **Status:** REST API dan server MCP masih beta. Kartu yang dapat disematkan masih alpha.
- **Batas laju:** 100 permintaan per menit per alamat IP, setelah itu `429` dengan `Retry-After`.
- **Paginasi:** maksimal 100 reservasi per panggilan, difilter berdasarkan tanggal check-in.
- **Belum tersedia:** webhook keluar, kunci sandbox publik, paket SDK.
- **Data yang disamarkan tetap tersamarkan:** Little Hotelier menyamarkan detail tamu 180 hari setelah check-out.
- Ini bukan API resmi SiteMinder.

Mulailah dengan [apakah Little Hotelier punya API?](/blog/little-hotelier-api) dan [apa itu server MCP](/blog/what-is-mcp-server-hotels), lalu siapkan [Claude](/blog/connect-claude-to-little-hotelier) atau [Claude Code, Cursor, dan VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode).
