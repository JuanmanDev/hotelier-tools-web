---
title: "Cara menghubungkan Claude ke Little Hotelier (MCP, langkah demi langkah)"
seoTitle: "Hubungkan Claude ke Little Hotelier: setup MCP"
description: "Hubungkan Claude ke Little Hotelier dengan custom connector: tempel satu URL, masuk, izinkan akses. Prompt pertama, keamanan aksi tulis, dan pemecahan masalah."
date: 2026-10-03
category: ai
tags: [claude, mcp, ai, connectors, little hotelier]
keywords: [cara menghubungkan claude ke little hotelier, little hotelier mcp, mcp claude adalah, claude desktop mcp setup, claude custom connector, ai little hotelier]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "Panduan setup MCP Hotelier Tools dengan penjelasan What is MCP? dan tab Claude Desktop terpilih, menampilkan langkah-langkah dan cuplikan konfigurasi berisi URL server MCP"
featured: true
faq:
  - q: "Paket Claude mana yang bisa menambahkan custom connector?"
    a: "Per Oktober 2026, Anthropic mencantumkan custom connector untuk paket Free, Pro, Max, Team, dan Enterprise. Akun Free bisa menambahkan satu custom connector. Di Team dan Enterprise, seorang Owner menambahkannya untuk organisasi lalu setiap anggota terhubung dengan login masing-masing."
  - q: "Apakah koneksi Little Hotelier berfungsi di aplikasi seluler Claude?"
    a: "Ya. Setelah Anda menghubungkannya di claude.ai atau Claude Desktop, Anthropic menyatakan koneksi itu juga tersedia di Claude untuk iOS dan Android. Menambahkan custom connector baru dari ponsel masih dalam beta, jadi lakukan setup di komputer."
  - q: "Bagaimana cara memutus koneksi Claude atau mengganti akses?"
    a: "Di Claude, buka Customize, lalu Connectors, dan pilih Disconnect atau Remove. Di Hotelier Tools, buka Developer, API Keys dan cabut koneksi atau key yang Anda pakai di Active keys. Pencabutan di sisi Hotelier Tools memutus akses seketika."
  - q: "Bisakah Claude mengubah reservasi atau harga saya?"
    a: "Bisa, jika Anda mengizinkannya. Tool tulis berjalan saat Claude memanggilnya, dan Hotelier Tools tidak menambahkan kartu persetujuan kedua di luar dashboardnya sendiri, jadi biarkan persetujuan per tool di Claude pada Needs approval. Refund, pengiriman invoice lewat email, pengajuan laporan INE, dan aksi tak terbalikkan lainnya diblokir untuk Claude."
  - q: "Apakah Little Hotelier punya server MCP sendiri?"
    a: "Belum yang resmi per Oktober 2026. Pekerjaan MCP SiteMinder berkaitan dengan penjualan kamar lewat asisten AI, bukan pemilik yang menanyakan datanya sendiri. Hotelier Tools menjalankan server MCP independen yang terhubung memakai login Little Hotelier milik properti Anda sendiri."
  - q: "Apakah ini integrasi resmi Anthropic atau Little Hotelier?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh Anthropic, SiteMinder, maupun Little Hotelier. Layanan ini memakai protokol MCP standar yang didukung Claude untuk custom connector apa pun."
---

Little Hotelier tidak menyediakan server MCP sendiri (per Oktober 2026), tetapi Anda tetap bisa menghubungkan Claude ke sana lewat Hotelier Tools, yang menjalankan satu server untuk properti Anda. Di Claude, buka **Customize → Connectors → Add custom connector**, tempel `https://dashboard.hotelier.tools/api/mcp`, masuk ke Hotelier Tools, lalu tekan **Allow access**. Claude kemudian bisa menjawab pertanyaan dari data reservasi langsung Anda dan, jika Anda mengizinkan, membuat perubahan.

Baru mengenal konsepnya? Baca dulu [MCP server adalah apa](/blog/what-is-mcp-server-hotels). Hanya butuh tiga menit.

## Yang Anda butuhkan sebelum mulai

::callout{type="tip" title="Daftar periksa"}
- **Akun Claude.** Per Oktober 2026, [Anthropic mencantumkan custom connector](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) untuk paket Free, Pro, Max, Team, dan Enterprise. Akun Free bisa menambahkan satu.
- **Akun Hotelier Tools** dengan Little Hotelier terhubung di **Credentials** (`/credentials`). Gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.
- **Akses API di Hotelier Tools.** Pemilik properti memilikinya. Tanpa akses itu, koneksi ditolak.
::

Hotelier Tools membaca data Anda dengan login Little Hotelier milik properti Anda sendiri. Layanan ini tidak berafiliasi dengan atau didukung oleh SiteMinder, Little Hotelier, maupun Anthropic.

## Cara menghubungkan Claude ke Little Hotelier (claude.ai dan Claude Desktop)

Ini jalur yang direkomendasikan. Anda masuk lewat browser, jadi tidak ada key yang perlu disalin. Langkah-langkah ini mengikuti [instruksi terbaru Anthropic](https://claude.com/docs/connectors/custom/add-unlisted) untuk akun Free, Pro, dan Max.

1. Buka [claude.ai](https://claude.ai) atau aplikasi Claude Desktop dan masuk ke **Customize → Connectors**. Beberapa tampilan masih menyebutnya **Settings → Connectors**.
2. Klik **Add custom connector** (di beberapa akun: **+ Add**, lalu **Add custom connector**).
3. Beri nama `Hotelier Tools` dan tempel URL server MCP: `https://dashboard.hotelier.tools/api/mcp`
4. Jika Claude menanyakan cara orang masuk, pilih **Sign in now**. Jika meminta OAuth client, pilih **Register automatically**: server Hotelier Tools mendukung registrasi otomatis ini. Jika Anda hanya melihat **Advanced settings**, biarkan kosong.
5. Klik **Add**, lalu **Connect**. Jendela Hotelier Tools terbuka.
6. Masuk ke Hotelier Tools. Di **Authorize MCP access**, pilih properti (hanya jika Anda punya beberapa) lalu tekan **Allow access**.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="Kartu Authorize MCP access: AI assistant (MCP client) ingin mengakses akun Hotelier Tools Anda lewat MCP API, email yang sedang masuk, token yang kedaluwarsa dalam 30 hari, serta tombol Deny dan Allow access" caption="Tekan Allow access (jika punya beberapa properti, pilih satu dulu). Claude tidak pernah melihat kata sandi Anda." path="/oauth/authorize" width="472" height="327"}
::

7. Mulai chat baru, klik **+**, buka **Connectors** dan pastikan **Hotelier Tools** menyala.
8. Ajukan pertanyaan pertama (contoh di bawah). Claude menampilkan tool mana yang ingin dipakainya dan meminta izin sebelum menjalankannya.

Login berlaku **30 hari**. Setelah itu, Claude meminta Anda terhubung lagi.

### Di paket Team atau Enterprise

Seorang Owner menambahkan connector sekali saja: **Organization settings → Connectors → Add → Custom → Web**, dengan URL yang sama. Setiap rekan kerja kemudian membuka **Customize → Connectors**, menemukan Hotelier Tools dengan label **Custom** dan mengklik **Connect**. Setiap koneksi masuk ke Hotelier Tools secara terpisah, dan Claude bertindak dengan izin dari login yang dipakai.

### Di aplikasi seluler

Menurut [Anthropic](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), connector yang Anda siapkan di claude.ai atau Claude Desktop juga tersedia di Claude untuk iOS dan Android. Menambahkannya langsung dari ponsel masih dalam beta, jadi lakukan setup di komputer.

## Memakai API key alih-alih login

Kebanyakan orang sebaiknya memakai login di atas. API key berguna jika Anda menginginkan akses yang tidak kedaluwarsa setelah 30 hari, atau klien yang tidak bisa melakukan login lewat browser.

1. Di Hotelier Tools, buka **Developer → API & MCP → API Keys** (`/developer/api-keys`).
2. Di bawah "Generate a new key", ketik nama seperti `claude-desktop` dan tekan **Generate key**.
3. Salin sekarang juga. Halaman memperingatkan: "Copy this key now — it will not be shown again." Key diawali `htk_`.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Halaman API keys tepat setelah membuat key: kotak hijau Key generated yang menyatakan Copy this key now, it will not be shown again, dengan key tersamar dan tombol salin, key baru Blog integration di Active keys di samping key lain, masing-masing dengan Revoke, serta pemberitahuan API key created" caption="Buat key, atau cabut salah satunya, di halaman API Keys. Key lengkap hanya ditampilkan sekali." path="/developer/api-keys"}
::

**Di claude.ai**, beberapa organisasi melihat bagian **Request headers** di dialog connector. Anthropic menandainya beta dan hanya tersedia untuk sejumlah organisasi terbatas. Jika Anda memilikinya, pilih **No sign-in**, tambahkan header `authorization` dan masukkan `Bearer htk_YOUR_API_KEY` (dengan kata Bearer dan satu spasi).

**Di Claude Desktop**, file konfigurasi (**Settings → Developer → Edit Config**) ditujukan untuk server yang berjalan di komputer Anda sendiri. Dokumentasi Anthropic menyatakan server jarak jauh ditambahkan [lewat Connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). Halaman MCP Setup Hotelier Tools menampilkan cuplikan `url` + `headers`; jika Claude Desktop mengabaikannya, solusi yang lazim adalah jembatan komunitas gratis [mcp-remote](https://github.com/punkpeye/mcp-remote), yang membutuhkan [Node.js](https://nodejs.org) terpasang. Ini konfigurasi umum yang belum kami uji di setiap versi Claude Desktop:

```json [claude_desktop_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://dashboard.hotelier.tools/api/mcp",
        "--header",
        "Authorization:${HT_AUTH}"
      ],
      "env": {
        "HT_AUTH": "Bearer htk_YOUR_API_KEY"
      }
    }
  }
}
```

Simpan file, lalu tutup Claude Desktop sepenuhnya dan buka kembali. Header sengaja ditulis tanpa spasi setelah titik dua: dokumentasi mcp-remote menjelaskan bahwa Claude Desktop di Windows bisa merusak spasi di dalam argumen.

### API key atau login: mana yang sebaiknya dipakai?

| | Login (OAuth) | API key (`htk_…`) |
|---|---|---|
| Setup | Tempel URL, masuk, **Allow access** | Buat key, tempel ke konfigurasi |
| Masa berlaku | 30 hari, lalu hubungkan ulang | Sampai Anda mencabutnya |
| Cocok untuk | claude.ai, Claude Desktop, seluler | Script, [Claude Code, Cursor, dan VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) |
| Dicabut di | `/developer/api-keys` (Active keys) | `/developer/api-keys` |

Keduanya bekerja sama setelah terhubung: Claude bertindak **sebagai orang yang masuk atau membuat key**, pada **satu properti**, dengan izin orang itu saat ini.

## Apa yang sebaiknya ditanyakan ke Claude pertama kali

Mulailah dengan pertanyaan yang hanya membaca. Menyebut "Hotelier Tools" membantu Claude memilih connector yang tepat alih-alih mencari di web.

::prompt{label="Claude"}
Dengan Hotelier Tools, siapa yang check-in hari ini dan besok? Tampilkan nama, jumlah malam, kamar, dan saldo yang masih belum lunas.
::

::prompt{label="Claude"}
Reservasi mana yang check-in dalam 7 hari ke depan dan belum punya kamar?
::

::prompt{label="Claude"}
Tamu mana yang check-out minggu lalu dan masih belum punya invoice? Untuk masing-masing, jelaskan mengapa belum bisa dibuatkan invoice.
::

::prompt{label="Claude"}
Tampilkan masalah terbuka dari pengecekan otomatis, dikelompokkan menurut tanggal kedatangan, beserta apa yang perlu saya perbaiki di Little Hotelier.
::

::prompt{label="Claude"}
Bagaimana tarif dan ketersediaan saya untuk akhir pekan depan, dan bagaimana perbandingannya dengan harga kompetitor yang Anda miliki?
::

::prompt{label="Claude"}
Jelaskan harga rekomendasi untuk kamar double pada Sabtu 14 November, langkah demi langkah.
::

Claude juga bisa menggabungkan jawaban: "Buat tabel kedatangan minggu depan beserta saldo belum lunas dan susun pengingat pembayaran yang sopan untuk masing-masing" berhasil dengan baik. Drafnya tetap di Claude; tidak ada yang dikirim.

## Apa yang bisa dilakukan Claude dengan data hotel Anda, dan bagaimana menjaganya tetap aman?

Server MCP Hotelier Tools menyediakan lebih dari 100 tool hotel untuk Claude, yang selalu dibatasi oleh izin Anda.

**Yang bisa dibaca:** reservasi dan tamu, pembayaran, invoice dan kesiapan invoice, tarif dan ketersediaan, harga kompetitor dan rekomendasi harga beserta alasannya, masalah dari pengecekan otomatis, daftar do-not-rebook, waiting list, tugas terjadwal, dan data properti yang dibaca dari Little Hotelier.

**Yang bisa diubah, saat Claude memanggil tool:** detail reservasi (pertama usulan sebelum/sesudah, lalu langkah penerapan yang membutuhkan `confirmed: true`), catatan pembayaran, pendaftaran untuk [invoice saat check-out](/blog/send-invoice-to-guest-at-checkout), harga dari rekomendasi, stop sell channel, entri waiting list, dan tugas terjadwal.

**Yang tidak bisa dilakukan** adalah apa pun yang tak terbalikkan: tool semacam itu diblokir untuk Claude dan setiap klien luar lainnya. Misalnya, Claude tidak bisa:

- mengirim invoice lewat email ke tamu
- melakukan refund
- mengajukan survei INE
- mengirim undangan tim
- mengirim tautan invoice tamu lewat email
- menjawab pertanyaan tamu Booking.com
- menjalankan pengecekan waiting list yang mengirim pesan ke tamu

Semua itu tetap di chat dashboard Hotelier Tools, di balik kartu persetujuan. Claude juga tidak bisa melihat properti lain, melampaui izin Anda, atau melakukan apa pun yang akan ditolak oleh Little Hotelier sendiri.

### Aksi tulis: cara menjaga Claude tetap aman

::callout{type="warning" title="Konfirmasi di Claude adalah persetujuan Anda"}
Di dalam dashboard Hotelier Tools, setiap perubahan menunggu kartu setujui/tolak. Di luarnya, tidak ada kartu kedua: **ketika Claude memanggil tool tulis, tool itu berjalan.** Persetujuan yang Anda berikan di Claude adalah satu-satunya.
::

Lima kebiasaan menjaganya tetap aman:

1. **Biarkan persetujuan aktif untuk tool tulis.** Di **Customize → Connectors → Hotelier Tools**, Anthropic memungkinkan Anda mengatur setiap tool ke **Always allow**, **Needs approval**, atau **Blocked**. Tool baca boleh "Always allow". Biarkan apa pun yang mengubah data pada "Needs approval".
2. **Blokir yang tidak pernah Anda pakai.** Jika Claude tidak boleh menyentuh harga, atur `apply_price_recommendations` dan `set_channel_stop_sell` ke **Blocked**.
3. **Baca usulannya.** Untuk perubahan reservasi, Claude lebih dulu menampilkan sebelum/sesudah dari `propose_reservation_changes`. Periksa nomor reservasi dan nilainya sebelum Anda menjawab ya.
4. **Waspadai instruksi tersembunyi di dalam teks.** Pesan tamu dan situs web ditulis oleh orang asing. Jika hasil sebuah tool tiba-tiba menyuruh Claude melakukan sesuatu yang tidak Anda minta, hentikan. Anthropic memberi [saran yang sama](https://claude.com/docs/connectors/custom/add-unlisted#security-and-privacy).
5. **Ketahui siapa yang terhubung.** Setiap koneksi bertindak sebagai login Hotelier Tools yang membuatnya. Cabut koneksi lama di `/developer/api-keys`, dan selalu lakukan saat seseorang keluar dari tim.

## Apakah data tamu saya dikirim ke Anthropic?

Ya, bagian yang dibaca Claude. Ketika Claude memanggil sebuah tool, hasilnya (nama tamu, tanggal, jumlah) menjadi bagian dari percakapan Anda dan diproses oleh Anthropic sesuai ketentuan paket Anda.

Per Oktober 2026, Anthropic menyatakan data pelatihan paket konsumennya "does not include raw content from connectors… including remote and local MCP servers", kecuali Anda menyalinnya ke chat ([sumber](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)). Di paket komersial (Team, Enterprise, API), input dan output [tidak dipakai untuk pelatihan secara default](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training).

Data tamu adalah data pribadi, dan hotel Anda tetap bertanggung jawab atasnya. Mintalah Claude hanya yang Anda butuhkan, dan matikan connector di chat yang tidak membutuhkannya.

::demo-cta{path="/developer/mcp-setup"}
::

## Pemecahan masalah

| Yang Anda lihat | Kemungkinan penyebab | Yang perlu dilakukan |
|---|---|---|
| Claude menyatakan tidak bisa terhubung, atau error 401 | Login kedaluwarsa (30 hari), key dicabut, atau Anda tidak lagi punya akses ke properti | **Disconnect** lalu **Connect** lagi, atau buat key baru |
| 400 "No Little Hotelier credentials configured" | Little Hotelier belum terhubung | Hubungkan di **Credentials** (`/credentials`) |
| 403 `permission_denied` | Login Anda tidak punya akses API | Minta pemilik memberi peran Anda akses API |
| 423 `lh_frozen` | Login Little Hotelier dijeda setelah gagal masuk, biasanya karena kata sandi kedaluwarsa | Simpan kata sandi baru di **Credentials** atau tekan **Check now & resume** |
| Tool tidak muncul di chat | Connector dimatikan untuk chat ini, atau Desktop belum dimulai ulang | **+ → Connectors** → nyalakan; mulai ulang Claude Desktop setelah mengubah konfigurasi |
| Jendela login tidak pernah terbuka | Pop-up diblokir | Izinkan pop-up untuk claude.ai dan coba **Connect** lagi |

## Langkah berikutnya

- Ingin hal yang sama di ChatGPT? Ikuti [menghubungkan ChatGPT ke Little Hotelier](/blog/connect-chatgpt-to-little-hotelier).
- Membuat laporan atau script? Lihat [Claude Code, Cursor, dan VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) atau [panduan REST API](/blog/little-hotelier-api).
- Lebih suka kartu persetujuan untuk setiap perubahan? Pakai [asisten bawaan](/blog/ai-assistant-hotel-front-desk) di dashboard.
- Semua yang disediakan server ada di [halaman fitur API & MCP](/tools/bot/api-mcp).
