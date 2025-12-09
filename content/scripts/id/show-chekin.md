---
title: "Koneksi dengan Chekin"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js"
category: "Detail Reservasi"
images:
  before: "/images/scripts/show-chekin/from.png"
  after: "/images/scripts/show-chekin/to.png"
  gallery:
    - "/images/scripts/show-chekin/from.png"
    - "/images/scripts/show-chekin/to.png"
    - "/images/scripts/show-chekin/login-required.png"
    - "/images/scripts/show-chekin/login-on-chekin.png"
    - "/images/scripts/show-chekin/url-to-share.png"
    - "/images/scripts/show-chekin/loading.png"
---

## Apa yang dilakukan skrip ini?

Menghubungkan data check-in langsung ke detail reservasi.
Lihat sekilas apakah tamu sudah check-in saat memeriksa kamar mana yang ditetapkan, serta data pendaftaran mereka dan jumlah pembayaran yang tertunda.

**Fitur:**
- Memperlancar peninjauan data check-in
- Menghindari beralih antar tab atau aplikasi
- Mengurangi waktu tunggu tamu saat kedatangan
- Menyalin ID langsung dari Chekin untuk digunakan dalam faktur
- Dapatkan lebih banyak nomor telepon tamu untuk menghubungi mereka jika ada masalah

Automatically retrieves and displays guest registration data from Chekin.com, including guest names, phone numbers, and document IDs, with options to share registration forms via email or WhatsApp.
