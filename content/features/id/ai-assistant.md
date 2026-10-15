---
title: "Asisten AI untuk front desk Little Hotelier Anda"
---

Asisten AI menjawab pertanyaan tentang reservasi, tamu, harga, faktur, pemeriksaan, dan daftar tunggu di Little Hotelier Anda dengan bahasa sehari-hari, lalu menyiapkan perubahan untuk Anda. Ia bebas membaca, tetapi setiap perubahan muncul sebagai kartu yang harus Anda setujui atau tolak sebelum apa pun sampai ke Little Hotelier.

## Cara kerjanya

1. **Bertanya lewat chat.** Buka **AI Chat** (`/chat`) dan ketik permintaan, misalnya siapa yang tiba besok dan siapa yang masih punya tagihan. Jawaban datang berupa teks dan kartu: ringkasan reservasi, usulan perubahan dengan tabel bukti, atau tabel rekomendasi harga.
2. **Setujui atau tolak.** Setiap penulisan data membutuhkan kartu. Jika sistem tidak bisa memastikan apakah sebuah alat hanya membaca atau juga menulis, alat itu diperlakukan sebagai penulisan. Kartu menampilkan nilai di Little Hotelier berdampingan dengan nilai baru dan asalnya.
3. **Persetujuan menjalankan persis perubahan itu.** Panggilan yang tersimpan dijalankan di server, dan AI tidak punya kesempatan kedua untuk menulis ulang. Setiap persetujuan hanya berlaku sekali dan kedaluwarsa setelah 24 jam. Pengembalian dana selalu memiliki kartunya sendiri.
4. **Staf Anda juga bisa bertanya.** Di **Staff assistant** (`/staff`), daftarkan karyawan dengan nomor WhatsApp atau email dan satu peran: **Read only** atau **Can request changes**. Mereka menulis ke nomor atau kotak surat Anda yang terhubung, dan setiap perubahan yang mereka minta menunggu persetujuan pemilik.

Permintaan nyata beserta apa yang terjadi setelahnya ada di [asisten AI untuk front desk hotel kecil](/blog/ai-assistant-hotel-front-desk).

## Yang Anda butuhkan

- Little Hotelier terhubung di **Credentials**.
- Kartu properti Anda di `/settings/property`, yang dibaca dari Little Hotelier.
- Untuk asisten staf, nomor WhatsApp atau kotak surat yang terhubung.
- Kredit AI: setiap jawaban memakainya, dan saldo Anda ada di **AI credits**.

## Batasan dan hal yang perlu diketahui

- **Status:** chat dan persetujuan masih beta, asisten staf masih alpha, dan akun tim dengan peran pemilik, manajer, dan staf segera hadir.
- **Suara untuk sementara hanya bahasa Spanyol.** Mikrofon memakai pengenalan suara browser Anda yang diatur ke bahasa Spanyol (es-ES). Anda bisa mengetik dalam bahasa apa pun.
- **Identitas staf adalah pengirimnya.** Yaitu nomor telepon yang terdaftar, atau email yang lolos pemeriksaan DKIM/DMARC. Pesan staf yang lebih lama dari 30 menit tidak dijawab.
- **Di luar dashboard tidak ada kartu.** Saat Claude atau ChatGPT memanggil alat penulisan lewat [server MCP](/tools/bot/api-mcp), perubahan langsung dijalankan, dan pengembalian dana diblokir di sana.
