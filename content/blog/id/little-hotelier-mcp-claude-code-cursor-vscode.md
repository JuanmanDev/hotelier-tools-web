---
title: "Cara memakai data Little Hotelier di Claude Code, Cursor, dan VS Code (MCP)"
seoTitle: "Little Hotelier MCP di Claude Code, Cursor, VS Code"
description: "Pasang MCP server Hotelier Tools di Claude Code, Cursor, VS Code, Windsurf, atau Gemini CLI, lalu buat laporan okupansi, sync ke Sheets, atau dashboard."
date: 2026-10-03
category: ai
tags: [mcp, claude code, cursor, vs code, api]
keywords: [claude code adalah, claude code mcp setup, cursor mcp.json, vscode mcp.json, little hotelier mcp, mcp server adalah, gemini cli mcp, windsurf mcp config]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "Panduan setup MCP di Hotelier Tools: penjelasan What is MCP? dan tab Client configuration untuk Claude Desktop, VS Code, Cursor, dan Custom / SDK, dengan Claude Desktop terpilih beserta cuplikan claude_desktop_config.json"
faq:
  - q: "Apa perintah claude mcp add untuk Little Hotelier?"
    a: "Jalankan: claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header \"Authorization: Bearer htk_YOUR_API_KEY\". Ganti key dengan yang dari Developer, API Keys di Hotelier Tools, lalu periksa dengan /mcp di dalam Claude Code."
  - q: "Di mana mcp.json berada di Cursor dan VS Code?"
    a: "Cursor membaca ~/.cursor/mcp.json untuk semua proyek dan .cursor/mcp.json di dalam sebuah proyek. VS Code membaca .vscode/mcp.json di workspace, dan file tingkat pengguna yang Anda buka dengan perintah MCP: Open User Configuration. VS Code memakai kunci servers, bukan mcpServers."
  - q: "Apakah saya harus seorang developer untuk memakai Claude Code dengan data hotel saya?"
    a: "Tidak. Anda memasang Claude Code, menempel satu perintah, lalu bertanya dengan kata-kata biasa. Sebaiknya Anda tahu ke mana file Anda disimpan dan cara menjalankan skrip, tetapi Claude Code bisa menjelaskan setiap langkah saat bekerja."
  - q: "Bisakah saya masuk (sign in) tanpa memakai API key?"
    a: "Bisa, di klien yang mendukung OAuth. Tambahkan URL server tanpa header, lalu masuk ketika klien memintanya: di Claude Code jalankan /mcp dan pilih untuk melakukan autentikasi. Sesi masuk berlaku 30 hari. Key lebih baik untuk skrip yang berjalan tanpa pengawasan."
  - q: "Apakah ini API resmi Little Hotelier atau SiteMinder?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini terhubung dengan login Little Hotelier milik properti Anda sendiri dan menawarkan REST API dan MCP server miliknya sendiri."
---

Tambahkan satu MCP server jarak jauh, `https://dashboard.hotelier.tools/api/mcp`, dengan API key Hotelier Tools, dan Claude Code, Cursor, VS Code (mode agen Copilot), Windsurf, atau Gemini CLI dapat membaca reservasi, tarif, dan invoice Little Hotelier Anda sambil menulis kode untuk Anda. Di Claude Code cukup satu perintah: `claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"`.

Di bawah ini ada konfigurasi persis untuk setiap tool (diperiksa terhadap dokumentasi masing-masing vendor pada Oktober 2026), tiga hal yang layak dibuat, dan kapan sebaiknya memanggil REST API secara langsung.

## Sebelum mulai: buat API key

Little Hotelier tidak menerbitkan MCP server, dan dokumentasi API mitra SiteMinder sendiri menyebut data ketersediaan dan tarif [tidak bisa diperoleh dari Little Hotelier](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers). Hotelier Tools menyediakan MCP server sekaligus REST API, memakai login Little Hotelier milik properti Anda sendiri. Layanan ini tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Latar belakangnya: [apakah Little Hotelier punya API?](/blog/little-hotelier-api)

1. Di Hotelier Tools, hubungkan Little Hotelier di **Credentials** (`/credentials`) jika belum.
2. Buka **Developer → API & MCP → API Keys** (`/developer/api-keys`).
3. Ketik nama yang menunjukkan di mana key akan dipakai, misalnya `cursor-laptop`, lalu tekan **Generate key**.
4. Salin segera: "Copy this key now — it will not be shown again." Key diawali dengan `htk_`.

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="Halaman API keys di Hotelier Tools: formulir Generate a new key dengan kolom nama dan tombol Generate key, satu key aktif (MCP internal (chat), disamarkan) dengan tombol Revoke, dan catatan Good security practice" caption="Satu key per tool memudahkan Anda mencabut hanya yang tidak lagi dipakai." path="/developer/api-keys"}
::

Sebuah key memiliki izin yang sama dengan akun Hotelier Tools Anda, pada satu properti tempat Anda membuatnya. Anda bisa memiliki hingga 10 key.

**Jauhkan key dari file Anda.** Simpan di variabel lingkungan bernama `HT_API_KEY` dan rujuk dari konfigurasi:

```bash [macOS / Linux]
echo 'export HT_API_KEY="htk_YOUR_API_KEY"' >> ~/.zshrc   # atau ~/.bashrc
```

```powershell [Windows PowerShell]
setx HT_API_KEY "htk_YOUR_API_KEY"
```

Buka terminal baru (dan mulai ulang editor Anda) agar variabelnya terbaca.

## Cara menambahkan MCP server ke Claude Code, Cursor, VS Code, Windsurf, dan Gemini CLI

Setiap tool menyimpan tiga fakta yang sama (alamat, transport, key) dalam file yang sedikit berbeda. Pilih yang Anda pakai.

### Claude Code

Claude Code punya perintah bawaan untuk server jarak jauh ([dokumentasi Anthropic](https://code.claude.com/docs/en/mcp)):

```bash [Terminal]
claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"
```

Lalu jalankan `claude` dan ketik `/mcp`. Hotelier Tools seharusnya tampil sebagai **connected**; status `failed` dengan 401 berarti key salah.

- **Scope.** Secara default server disimpan hanya untuk folder saat ini. Tambahkan `--scope user` setelah nama untuk memakainya di setiap proyek, atau `--scope project` untuk menulis `.mcp.json` bersama.
- **Masuk, bukan memakai key.** Jalankan perintah tanpa `--header`, lalu di dalam Claude Code ketik `/mcp` dan lakukan autentikasi di browser. Jika Anda sudah menghubungkan Hotelier Tools sebagai connector di claude.ai, Claude Code dapat mengambilnya saat Anda masuk dengan akun Claude yang sama.

Untuk proyek yang Anda bagikan dengan rekan atau simpan di Git, taruh server di `.mcp.json` dan biarkan setiap orang memasukkan key-nya sendiri:

```json [.mcp.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "type": "http",
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${HT_API_KEY}" }
    }
  }
}
```

Baris `"type": "http"` wajib ada: Claude Code menganggap entri dengan `url` tetapi tanpa `type` sebagai kesalahan konfigurasi.

### Cursor

Cursor membaca `~/.cursor/mcp.json` untuk semua proyek, atau `.cursor/mcp.json` di dalam satu proyek ([dokumentasi Cursor](https://cursor.com/docs/context/mcp)):

```json [~/.cursor/mcp.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${env:HT_API_KEY}" }
    }
  }
}
```

Simpan, lalu pastikan server aktif di pengaturan MCP Cursor (versi terbaru menampilkan daftar server di bawah **Customize** pada sidebar). Bertanyalah di chat **Agent**. Cursor secara default meminta persetujuan sebelum menjalankan sebuah tool; biarkan begitu untuk server ini. Jika `headers` dihilangkan, Cursor akan menawarkan masuk lewat browser.

### VS Code dengan GitHub Copilot

VS Code memakai `.vscode/mcp.json`, dengan `servers` sebagai kunci teratas dan `"type": "http"` yang wajib ([dokumentasi VS Code](https://code.visualstudio.com/docs/agents/reference/mcp-configuration)). Fitur `inputs`-nya meminta key sekali dan menyimpannya di penyimpanan aman VS Code, sehingga tidak pernah ada di dalam file:

```json [.vscode/mcp.json]
{
  "inputs": [
    {
      "type": "promptString",
      "id": "ht-api-key",
      "description": "Hotelier Tools API key (htk_…)",
      "password": true
    }
  ],
  "servers": {
    "hotelier-tools": {
      "type": "http",
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${input:ht-api-key}" }
    }
  }
}
```

Buka Copilot Chat, pindah ke mode **Agent**, dan gunakan **Configure Tools** untuk melihat tool Hotelier Tools. VS Code mungkin meminta Anda mempercayai server saat pertama kali dijalankan. Untuk semua workspace, jalankan **MCP: Open User Configuration** dan tempel blok yang sama di sana. VS Code juga mendukung masuk lewat browser jika Anda menghilangkan `headers`.

::screenshot{src="/images/blog/demo/en/mcp-config-vscode-copilot.webp" alt="Tab VS Code / GitHub Copilot pada halaman penyiapan MCP Hotelier Tools: cuplikan .vscode/mcp.json dengan servers, hotelier-tools, type http, URL /api/mcp milik demo, dan header Authorization dengan placeholder htk_YOUR_API_KEY, lalu Turn on Agent mode in Copilot Chat" caption="Halaman MCP Setup menyediakan cuplikan siap pakai untuk setiap klien. Demo menampilkan alamatnya sendiri; alamat Anda adalah dashboard.hotelier.tools." path="/developer/mcp-setup" width="1036" height="446"}
::

### Windsurf dan Gemini CLI

**Windsurf** (yang dokumentasinya kini berada di bawah Devin) membaca `~/.codeium/windsurf/mcp_config.json` dan memakai `serverUrl` untuk server jarak jauh ([dokumentasi](https://docs.devin.ai/windsurf/plugins/cascade/mcp)):

```json [~/.codeium/windsurf/mcp_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "serverUrl": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${env:HT_API_KEY}" }
    }
  }
}
```

Windsurf membatasi Cascade hingga 100 tool secara total, dan Hotelier Tools menawarkan lebih dari 100, jadi Anda mungkin perlu mematikan tool yang tidak dipakai di panel MCP.

**Gemini CLI** membaca `~/.gemini/settings.json` (atau `.gemini/settings.json` di sebuah proyek) dan memakai `httpUrl` untuk jenis server ini; `url` berarti transport SSE yang lebih lama, yang tidak dilayani Hotelier Tools ([dokumentasi](https://geminicli.com/docs/tools/mcp-server/)):

```json [~/.gemini/settings.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "httpUrl": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer $HT_API_KEY" }
    }
  }
}
```

Atau dari terminal: `gemini mcp add --transport http --header "Authorization: Bearer htk_YOUR_API_KEY" hotelier-tools https://dashboard.hotelier.tools/api/mcp`. Ketik `/mcp` di dalam Gemini CLI untuk memeriksanya.

Kedua konfigurasi ini mengikuti dokumentasi masing-masing vendor; kami belum mengujinya di setiap versi.

| Tool | File konfigurasi | Kunci teratas | Kunci URL |
|---|---|---|---|
| Claude Code | `.mcp.json` | `mcpServers` | `url` + `"type": "http"` |
| Cursor | `.cursor/mcp.json` | `mcpServers` | `url` |
| VS Code | `.vscode/mcp.json` | `servers` | `url` + `"type": "http"` |
| Windsurf | `mcp_config.json` | `mcpServers` | `serverUrl` |
| Gemini CLI | `settings.json` | `mcpServers` | `httpUrl` |

## Tiga hal yang layak dibuat

Triknya adalah membiarkan agen memakai MCP untuk *melihat* data asli Anda, lalu menulis kode yang memanggil [REST API](/tools/bot/api-mcp) agar hasilnya berjalan setiap bulan tanpa AI.

### Laporan okupansi bulanan

Minta Claude Code (atau agen Cursor) di folder kosong:

::prompt{label="Claude Code"}
Pakai MCP server hotelier-tools untuk melihat tipe kamar saya dan reservasi bulan lalu. Lalu tulis skrip Node.js yang memanggil REST API Hotelier Tools (spesifikasi: https://dashboard.hotelier.tools/api/v1/openapi.json) dengan key di HT_API_KEY, dan untuk bulan apa pun yang saya berikan, cetak okupansi dan average daily rate per tipe kamar lalu simpan ke file CSV.
::

Skrip yang baik dimulai seperti ini. Skrip mengambil tipe kamar dan setiap reservasi yang beririsan dengan bulan tersebut, lalu menyimpan jawaban mentahnya agar Anda bisa memeriksa kolom-kolomnya sebelum menghitung:

```js [fetch-month.mjs]
// Cara pakai: node fetch-month.mjs 2026-09   (butuh HT_API_KEY di environment Anda)
import { writeFile } from "node:fs/promises";

const API = "https://dashboard.hotelier.tools/api/v1";
const headers = {
  Authorization: `Bearer ${process.env.HT_API_KEY}`,
  "Content-Type": "application/json",
};

async function call(path, options = {}) {
  const res = await fetch(`${API}${path}`, { ...options, headers });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

const month = process.argv[2];
const [year, mon] = month.split("-").map(Number);
const startDate = `${month}-01`;
const endDate = new Date(Date.UTC(year, mon, 0)).toISOString().slice(0, 10);

const roomTypes = await call("/room-types");
const reservations = await call("/methods/getReservationsByDateRange", {
  method: "POST",
  body: JSON.stringify({ params: { startDate, endDate } }),
});

await writeFile(
  `raw-${month}.json`,
  JSON.stringify({ roomTypes: roomTypes.data, reservations: reservations.result }, null, 2)
);
console.log(`Saved raw-${month}.json`);
```

Spesifikasi API sendiri menyebut objek reservasi berasal dari Little Hotelier dan "shape may vary", jadi biarkan agen membaca file yang tersimpan sebelum menghitung apa pun. `/room-types` memberi `totalRooms` per tipe, yang merupakan separuh lainnya dari perhitungan okupansi.

### Sinkronisasi Google Sheets

Untuk sheet yang mendaftar kedatangan 30 hari ke depan dan diperbarui setiap pagi, buka spreadsheet Anda, masuk ke **Extensions → Apps Script**, lalu tempel:

```js [Code.gs]
function syncArrivals() {
  const key = PropertiesService.getScriptProperties().getProperty('HT_API_KEY');
  const fmt = d => Utilities.formatDate(d, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  const today = new Date();
  const in30 = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const url = 'https://dashboard.hotelier.tools/api/v1/reservations'
    + '?startDate=' + fmt(today) + '&endDate=' + fmt(in30) + '&limit=100';

  const res = UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Bearer ' + key },
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 200) throw new Error(res.getContentText());

  const rows = JSON.parse(res.getContentText()).data.map(r => [
    r.id, r.guestName, r.status, r.checkIn, r.checkOut, r.roomType, r.totalAmount,
  ]);
  const book = SpreadsheetApp.getActive();
  const sheet = book.getSheetByName('Arrivals') || book.insertSheet('Arrivals');
  sheet.clearContents();
  sheet.appendRow(['ID', 'Guest', 'Status', 'Check-in', 'Check-out', 'Room type', 'Total']);
  if (rows.length) sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
}
```

Simpan key di **Project Settings → Script properties** sebagai `HT_API_KEY`, jalankan sekali untuk memberi akses, lalu tambahkan trigger harian berbasis waktu di **Triggers**. `/reservations` mengembalikan maksimal 100 reservasi per panggilan, difilter berdasarkan tanggal check-in, jadi bagi bulan yang padat menjadi per minggu. Ingat bahwa sheet kini berisi nama tamu: bagikan dengan hati-hati.

### Dashboard kustom kecil

::prompt{label="Cursor"}
Buat aplikasi web Node.js kecil yang menampilkan okupansi malam ini, kedatangan dan keberangkatan hari ini, serta reservasi dengan saldo belum dibayar, memakai REST API Hotelier Tools. Simpan HT_API_KEY hanya di server; browser harus memanggil server saya, tidak pernah memanggil API secara langsung. Simpan jawaban di cache selama lima menit.
::

Dua aturan membuatnya aman: key tetap di server (siapa pun yang membuka halaman bisa membaca key di kode browser), dan Anda memakai cache, karena API mengizinkan 100 permintaan per menit per alamat IP.

## MCP atau REST API: mana yang sebaiknya dipakai?

| | MCP server | REST API |
|---|---|---|
| Paling cocok untuk | Bertanya, membiarkan agen menjelajah sambil menulis kode | Skrip, Sheets, dashboard yang berjalan terjadwal |
| Alamat | `https://dashboard.hotelier.tools/api/mcp` | `https://dashboard.hotelier.tools/api/v1` |
| Autentikasi | API key atau masuk lewat browser | API key (`Authorization: Bearer htk_…`) |
| Dokumentasi | Halaman MCP Setup (`/developer/mcp-setup`) | Explorer Swagger (`/developer/rest-api`) |

Keduanya memakai key dan izin yang sama. Panduan REST ada di [API Little Hotelier](/blog/little-hotelier-api).

## Tool baca vs tulis: jaga agen tetap terkendali

Agen pemrograman pandai menjalankan tool dengan cepat, dan itulah alasan mengapa Anda perlu memperlambatnya di sini.

- **Operasi tulis berjalan begitu agen memanggilnya.** Di luar dashboard Hotelier Tools tidak ada kartu persetujuan. Mengubah reservasi, mencatat pembayaran, menerapkan harga, atau mengatur stop sell terjadi begitu tool-nya berjalan. Biarkan pengaturan "ask before running tools" di editor Anda aktif, dan jangan pakai mode auto-run dengan server ini.
- **Tindakan yang tidak bisa dibatalkan tetap diblokir.** Delapan tool (mengirim invoice ke tamu lewat email, refund, mengajukan survei INE, undangan tim, mengirim tautan tamu lewat email, menjawab pertanyaan Booking.com, dan pengecekan waiting list yang mengirim pesan ke tamu) hanya tersedia di dashboard.
- **Perubahan reservasi dilakukan dua langkah.** `propose_reservation_changes` menampilkan sebelum/sesudah; `apply_reservation_changes` memerlukan `confirmed: true`. Baca usulannya.
- **Jangan pernah meng-commit key.** Pakai rujukan bergaya `${HT_API_KEY}`, tambahkan file konfigurasi lokal ke `.gitignore`, dan cabut key yang bocor di `/developer/api-keys`.

## Pemecahan masalah "server tidak muncul"

- **Tidak ada yang muncul setelah mengedit konfigurasi:** mulai ulang editor atau CLI. Sebagian besar tool membaca konfigurasi MCP saat dijalankan.
- **Claude Code atau VS Code mengabaikan server:** periksa `"type": "http"`.
- **Gemini CLI terhubung tetapi gagal:** gunakan `httpUrl`, bukan `url`.
- **401:** key salah atau sudah dicabut, atau variabel lingkungan belum diatur di terminal tersebut.
- **400 "No Little Hotelier credentials configured":** hubungkan Little Hotelier di `/credentials`.
- **423 `lh_frozen`:** login Little Hotelier dijeda setelah gagal masuk (sering karena kata sandi kedaluwarsa). Simpan kata sandi baru di **Credentials** atau tekan **Check now & resume**.
- **429:** terlalu banyak permintaan; tunggu sesuai waktu di `Retry-After`.
- **Pemisah baris dengan backslash gagal di Windows:** PowerShell tidak memakai `\` untuk melanjutkan baris. Tempel perintah dalam satu baris, seperti ditunjukkan di atas.

::demo-cta{path="/developer/mcp-setup"}
::

## Langkah berikutnya

- Bukan developer? [Hubungkan Claude](/blog/connect-claude-to-little-hotelier) atau [ChatGPT](/blog/connect-chatgpt-to-little-hotelier) lewat browser saja.
- Baru mengenal idenya? Baca [apa itu MCP server](/blog/what-is-mcp-server-hotels).
- Ingin spreadsheet tanpa kode? Lihat [mengekspor reservasi ke Excel](/blog/export-little-hotelier-reservations-excel).
