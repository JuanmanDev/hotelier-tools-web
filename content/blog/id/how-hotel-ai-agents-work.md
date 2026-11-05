---
title: "Cara kerja agen AI hotel, dan mengapa mereka tidak bisa bertindak sendiri (balasan tamu, chat staf, MCP)"
seoTitle: "Cara kerja agen AI hotel dan cara menjaganya tetap aman"
description: "Agen AI di dashboard hotel: apa yang boleh dibaca dan dilakukan, cara pesan tamu Booking.com dan WhatsApp diverifikasi, dan kenapa perubahan butuh staf."
date: 2026-11-05
category: ai
tags: [ai, agen ai, keamanan, pesan tamu, persetujuan, mcp, prompt injection]
keywords: [cara kerja ai agent hotel, apakah ai aman untuk pesan tamu hotel, keamanan ai agent hotel, prompt injection chatbot hotel, asisten ai hotel dengan persetujuan staf, bisakah ai mengubah reservasi hotel sendiri, verifikasi identitas tamu whatsapp hotel, ai balas pesan booking.com aman, izin mcp server hotel]
feature: ai-assistant
demoPath: /messaging
cover: /images/blog/demo/en/how-ai-agents-booking-thread-verified.webp
coverAlt: "Inbox tamu Hotelier Tools yang difilter ke Booking.com dengan pertanyaan parkir berbahasa Prancis dari Ingrid Larsen terbuka: Identity verified dan pengirim cocok dengan reservasi untuk masa inap 24 malam dengan sisa tagihan 759,55 euro, draf AI berbahasa Prancis bertanda belum dikirim, dan rencana AI berupa draf yang baris Access-nya menyatakan AI hanya boleh membaca reservasi 71020550 dan setiap perubahan menunggu persetujuan"
featured: true
faq:
  - q: "Bisakah agen AI hotel mengubah reservasi sendiri?"
    a: "Di Hotelier Tools, tidak secara default. Chat di dashboard, asisten inbox, dan asisten staf mengubah setiap perubahan menjadi kartu yang disetujui oleh orang. AI balasan tamu tidak punya tool; hanya channel yang diatur ke Autonomous yang membuatnya bisa menambahkan catatan atau jam kedatangan ke satu reservasi terverifikasi."
  - q: "Bagaimana AI tahu pesan tamu benar-benar dari tamu tersebut?"
    a: "Yang dihitung hanya pengirimnya, tidak pernah isi pesannya. Thread Booking.com ditempatkan di bawah reservasinya oleh Booking.com, nomor WhatsApp harus cocok dengan reservasi setidaknya pada 8 digit terakhirnya, alamat email harus sama persis, dan thread Expedia harus menyebut referensi EXP-. Jika dua tamu cocok, tidak ada reservasi yang ditampilkan."
  - q: "Bisakah tamu mengakali AI dengan pesan seperti \"abaikan aturanmu\"?"
    a: "Tamu bisa mencoba. Model balasan tamu tidak punya tool yang bisa disalahgunakan, diberi tahu bahwa pesan itu teks yang tidak tepercaya, hanya boleh mengembalikan rencana dari empat aksi yang tidak memuat ID reservasi, dan balasan akhirnya dipindai untuk mencari referensi reservasi lain sebelum apa pun dikirim."
  - q: "Apakah chat AI punya batasan dalam mencari data?"
    a: "Hanya peran Anda. Chat bisa membaca apa saja yang diizinkan peran Anda di seluruh akun, dengan hingga delapan langkah tool per pertanyaan. Yang tidak bisa dilakukannya adalah mengubah apa pun tanpa klik Anda, berjalan saat tidak ada yang bertanya, atau menjadwalkan dirinya sendiri."
  - q: "Apakah Claude atau ChatGPT juga mendapat kartu persetujuan yang sama?"
    a: "Tidak. Aplikasi eksternal yang terhubung lewat MCP melewati pemeriksaan peran yang sama, tetapi penulisan data langsung berjalan saat aplikasi memanggilnya, jadi prompt persetujuan aplikasi itu sendiri adalah satu-satunya pemeriksaan Anda. Refund, mengirim invoice lewat email, mengajukan laporan INE, dan balasan tamu diblokir untuk aplikasi tersebut."
  - q: "Apakah Hotelier Tools bagian dari Booking.com, WhatsApp, atau Little Hotelier?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh Booking.com, Expedia Group, WhatsApp, Meta, SiteMinder, maupun Little Hotelier. Layanan ini terhubung memakai login hotel Anda sendiri."
---

Agen AI hotel adalah model bahasa yang terhubung ke data reservasi Anda, dan keamanannya bergantung pada dua hal: apa yang boleh dibacanya, dan siapa yang menekan tombol saat ada yang berubah. Di Hotelier Tools ada beberapa agen dengan tingkat kepercayaan berbeda. Agen yang membaca pesan tamu sama sekali tidak punya tool. Agen yang diajak bicara tim Anda bisa mencari apa saja dalam batas peran orang tersebut, tetapi **setiap perubahan menunggu klik dari seseorang**, dan tidak ada yang berjalan dengan jadwalnya sendiri.

Panduan ini menjelaskan cara kerja setiap agen, bagaimana pesan dari Booking.com, WhatsApp, Expedia, atau email dikaitkan dengan tepat satu reservasi, dan apa yang mencegah teks tamu mengarahkan AI. Untuk apa yang bisa dilakukan asisten sehari-hari, baca [asisten AI untuk front desk hotel kecil](/blog/ai-assistant-hotel-front-desk). Detail pihak ketiga diperiksa per November 2026.

## Apa yang seharusnya boleh dilakukan agen AI hotel?

Dua acuan publik bisa menjadi tolok ukur untuk vendor mana pun. OWASP menempatkan prompt injection sebagai risiko teratas untuk aplikasi AI dan menyarankan untuk "restrict the model's access privileges to the minimum necessary" (membatasi hak akses model seminimal mungkin), dengan seseorang yang menyetujui aksi berhak istimewa ([OWASP LLM01:2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)). Model Context Protocol, yang dipakai Claude dan ChatGPT untuk memanggil tool luar, menyatakan bahwa "SHOULD always be a human in the loop with the ability to deny tool invocations" (harus selalu ada manusia yang bisa menolak pemanggilan tool) ([spesifikasi tool MCP](https://modelcontextprotocol.io/specification/2025-06-18/server/tools)).

Jadi ajukan empat pertanyaan kepada AI hotel mana pun: Siapa yang menulis teks yang dibacanya? Apa yang bisa disentuhnya? Siapa yang menyetujui perubahan? Apakah AI pernah berjalan saat tidak ada yang meminta?

## Agen di Hotelier Tools dan tingkat kepercayaannya

Satu tabel menentukan di mana setiap tool boleh berjalan, dan tool yang belum diklasifikasikan diperlakukan sebagai penulisan data. Pemeriksaan kedua menanyakan apakah **peran orang ini** boleh memakainya, tepat saat tool itu berjalan.

| Agen | Berbicara dengan siapa | Apa yang boleh dibaca | Apa yang boleh diubah | Siapa yang menyetujui |
|---|---|---|---|---|
| **AI balasan tamu** (Inbox, alpha) | Tamu di WhatsApp, email, Booking.com, Expedia | Satu reservasi terverifikasi, FAQ Anda, catatan properti, kartu properti | Tidak ada secara langsung. AI mengembalikan rencana dari 4 aksi | Anda, di inbox (atau mode channel yang sempit) |
| **AI Chat** (`/chat`, beta) | Anda dan tim Anda di dashboard | Semua yang diizinkan peran Anda | Apa saja yang diizinkan peran Anda, sebagai kartu | Orang yang bertanya, dengan mengklik kartunya |
| **Asisten inbox** (panel di samping thread) | Anda, tentang percakapan yang terbuka | Reservasi, harga dari booking engine Anda, fakta properti | Usulan sebagai kartu; tidak pernah mengirim ke tamu | Rekan kerja mana pun yang perannya mencakup aksi itu |
| **Asisten staf** (`/staff`) | Karyawan di WhatsApp atau email | Reservasi, ketersediaan, harga, invoice, pemeriksaan | Hanya untuk **Can request changes**, masuk antrean | Pemilik, di `/staff` |
| **Aplikasi AI eksternal** (Claude, ChatGPT, lewat MCP) | Anda, di aplikasi itu | Yang diizinkan peran Anda | Penulisan berjalan saat aplikasi memanggilnya; tidak ada yang tidak bisa dibatalkan | Anda, di prompt aplikasi itu sendiri |
| **Agen browser** (WebMCP) | Anda, di browser Anda | Hanya membaca | Tidak ada; usulan membuka formulir aplikasi yang sudah terisi | Anda menekan tombol di halaman |

**Tugas terjadwal bukan agen AI.** Invoice saat check-out, pemeriksaan otomatis, dan autopilot harga adalah kode biasa yang berjalan dengan timer. Dua tugas latar belakang memakai model hanya untuk mengubah teks menjadi data (kolom invoice pemasok, acara lokal untuk penetapan harga), tanpa tool dan tanpa cara untuk mengirim pesan kepada siapa pun atau menyentuh reservasi.

## Bagaimana pesan tamu menjadi balasan

| Langkah | Yang terjadi | Model? |
|---|---|---|
| 1. Masuk | Webhook (WhatsApp) atau polling (email, Booking.com, Expedia) menyimpan pesan | Tidak |
| 2. Penyaringan | Hanya email: newsletter, pemasok, dan kemungkinan penipuan berhenti di sini | Tidak |
| 3. Identitas | Pengirim dicocokkan dengan satu reservasi, atau tidak sama sekali, dan keputusannya dicatat | Tidak |
| 4. Menunggu | 5 menit di WhatsApp, satu jam di email. Sudah dijawab? Tidak ada yang dianalisis atau ditagih | Tidak |
| 5. Rencana | Setelah pemeriksaan kredit, model membaca konteks yang dibatasi dan mengembalikan balasan serta aksi, sebagai data | **Ya, sekali** |
| 6. Pemeriksaan | Aksi divalidasi terhadap daftar tertutup; filter balasan memindai teksnya | Tidak |
| 7. Keputusan | Seseorang menyetujui, atau mode channel mengizinkannya setelah jeda | Tidak |
| 8. Eksekusi | Rencana yang tersimpan dijalankan; filter memeriksa teksnya lagi sebelum dikirim | Tidak |

Model hanya muncul sekali, dan hasilnya hanya berupa usulan. Semua yang ada di sekitarnya adalah kode biasa.

::screenshot{src="/images/blog/demo/en/how-ai-agents-booking-thread-verified.webp" alt="Inbox tamu yang difilter ke Booking.com dengan percakapan Ingrid Larsen terbuka: lencana Identity verified, masa inapnya 24 Oktober sampai 17 November bertanda Checked-in dan pengirim cocok dengan reservasi dengan sisa tagihan 759,55 euro, draf AI berbahasa Prancis (belum dikirim) tentang parkir, dan rencana AI berupa draf (parkir, 91%) yang baris Access-nya berbunyi Identity verified, boleh membaca reservasi 71020550, setiap perubahan menunggu persetujuan Anda, dengan balasan yang bisa diedit, aksi send_message, dan tombol Send" caption="Rencana menyebutkan apa yang boleh dilihat AI: satu reservasi terverifikasi. Dalam mode Draft, tidak ada yang dikirim sampai Anda menyetujuinya." path="/messaging"}
::

## Dari mana pesan tamu berasal, dan mengapa sumbernya penting

Pesan hanya membawa apa yang dijamin oleh channel itu sendiri. Hotelier Tools memercayai **pengirimnya**, tidak pernah apa yang dikatakan pesan tentang dirinya sendiri.

| Channel | Cara masuk ke inbox | Yang mengaitkannya dengan reservasi |
|---|---|---|
| **Booking.com** | Dibaca lewat sesi extranet Anda sendiri (login Anda dan verifikasi keduanya) | Booking.com menempatkan thread di bawah reservasinya, jadi dianggap terverifikasi |
| **Expedia** (beta) | Dibaca lewat sesi Partner Central Anda sendiri; hanya daftar percakapan dan pesan terakhir | Hanya referensi `EXP-` yang disebut thread itu. Nama tamu tidak pernah dipakai |
| **WhatsApp** | WAHA, sesi WhatsApp Web di nomor hotel sendiri, mengirim ke webhook dengan token rahasia per channel | Nomornya cocok dengan telepon di reservasi setidaknya pada 8 digit terakhirnya |
| **Email** | Kotak masuk Anda, lewat login Google atau Microsoft (OAuth) atau IMAP | Alamat yang sama persis. Tidak ada kecocokan sebagian, titik tidak diabaikan |

Email mendapat satu lapisan tambahan. Hasil SPF, DKIM, dan DMARC setiap pesan (pemeriksaan yang dipakai penyedia email untuk mendeteksi pengirim palsu, lihat [panduan pengirim Gmail](https://support.google.com/a/answer/81126)) masuk ke **skor penipuan** bersama sinyal lain, seperti tautan berbagi file atau permintaan pengembalian dana untuk masa inap yang tidak bisa ditemukan. Pada 75% atau lebih, email diserahkan kepada staf dan AI tidak membuat draf apa pun. Selengkapnya di [cara mengenali pesan penipuan](/blog/hotel-scam-messages).

Inbox menampilkan hasil identitas di setiap percakapan:

- **Identity verified**: tepat satu tamu cocok, jadi AI boleh melihat satu reservasi itu (untuk tamu yang kembali, satu masa inap: yang sedang berjalan, yang baru saja, atau yang berikutnya).
- **Ambiguous — refused**: dua tamu berbeda cocok, jadi tidak ada reservasi yang ditampilkan dan Anda yang menanganinya.
- **No reservation match**: AI menjawab pertanyaan umum dari FAQ Anda dan tidak pernah mengonfirmasi atau menyangkal bahwa ada reservasi.
- **Not checked**: identitas belum ditetapkan.

Pertanyaan publik di listing Booking.com Anda tidak punya reservasi di baliknya, jadi dijawab hanya dari fakta properti.

## Apa yang dibaca AI untuk menjawab, dan apa yang tidak pernah dilihatnya

| AI balasan tamu membaca | AI tidak pernah melihat |
|---|---|
| **Satu** reservasi terverifikasi: referensi, tanggal, kamar, tamu, status, total, sisa tagihan, jam kedatangan, catatan internal | Tamu atau reservasi lain mana pun |
| Sumber **FAQ & knowledge** Anda (hanya yang Anda centang) | Login, API key, atau nomor kartu Anda |
| Catatan properti dan kartu properti dari **Settings > Property & AI knowledge** | Little Hotelier itu sendiri. AI tidak bisa mencari apa pun |
| Contoh yang dikoreksi dan aturan dari **AI training** | Data reservasi saat pengirimnya belum terverifikasi |
| Memori balasan: jawaban serupa yang dikirim tim Anda, dengan nama, tanggal, referensi, dan kontak dihapus | |

Kutipan FAQ, contoh pelatihan, dan memori balasan diberi label di prompt sebagai data kutipan, bukan instruksi. Harga langsung berasal dari booking engine publik Anda lewat **asisten inbox** di sisi staf, dan harga yang tidak berasal dari penawaran ditandai.

## Apa yang mencegah pesan tamu mengarahkan AI?

Pesan tamu ditulis oleh orang asing, jadi sistem menganggap pesan itu bisa saja berniat jahat:

1. **Tanpa tool.** Model balasan tamu tidak mendapat apa pun untuk dipanggil. Sisipan seperti "cari reservasi 999" tidak punya jalan ke mana pun.
2. **Data, bukan perintah.** Prompt menyatakan bahwa pesan tamu adalah teks yang tidak tepercaya. Jika pesan meminta mengabaikan aturan, berganti peran, membuka teks sistem, atau bertindak pada reservasi lain, model harus menolak dan menandainya untuk staf.
3. **Daftar tertutup.** Jawabannya harus sesuai skema tetap: paling banyak empat aksi dari **kirim pesan**, **tandai untuk staf**, **tambahkan catatan reservasi**, dan **atur jam kedatangan**. Selebihnya dibuang dan dilaporkan.
4. **Tanpa ID reservasi di aksi.** Server menerapkan catatan atau jam kedatangan ke reservasi yang terikat pada percakapan, jadi perubahan tidak bisa diarahkan ke tempat lain.
5. **Filter balasan.** Sebelum balasan keluar, dan lagi setelah siapa pun mengeditnya, teksnya dipindai. Referensi reservasi lain, atau nomor panjang apa pun saat pengirimnya belum terverifikasi, memblokir pengiriman dan menyerahkan thread kepada staf. Jika reservasi percakapan berubah selama rencana menunggu, rencana itu ditolak.
6. **Batasan per channel.** **Draft — I approve everything** adalah default. Booking.com tidak pernah dikirim oleh AI dalam mode apa pun; Expedia hanya menawarkan Off dan Draft. Bahkan **Autonomous — replies AND changes reservations** hanya bisa menambahkan catatan atau jam kedatangan ke reservasi terverifikasi, dan balasan tanpa pengawasan berhenti di 4 per jam, 12 per hari, atau 3 berturut-turut tanpa jawaban.
7. **Persetujuan berjalan tanpa model.** Menyetujui berarti menjalankan rencana yang tersimpan persis seperti adanya. AI tidak mendapat giliran kedua untuk menulis ulang.

::screenshot{src="/images/blog/demo/en/how-ai-agents-booking-channel-send-by-hand.webp" alt="Halaman Channels dengan kartu pesan Booking.com bertanda Active: pemberitahuan Collects messages — replies are sent by hand yang menyatakan balasan otomatis tidak dikirim lewat Booking.com dan balasan hanya keluar saat seseorang menekan Send di inbox, pengaturan When a guest writes pada Draft — I approve everything, Timing ditahan 5 menit, dan di bawahnya pesan Expedia Partner Central yang belum terhubung" caption="Booking.com adalah channel yang bisa dibaca dan dibuatkan draf oleh AI, tetapi hanya Send dari seseorang yang mengirim balasan." path="/messaging/channels"}
::

## Chat AI: tanpa batas untuk mencari, tanpa otonomi

**AI Chat** (`/chat`, beta) dibangun dengan cara kebalikan dari AI untuk tamu: yang mengetik adalah orang yang Anda percaya, jadi chat mendapat setiap tool yang diizinkan **peran Anda**. Tanyakan reservasi, invoice, harga, pemeriksaan, laporan, atau waiting list apa pun, di seluruh akun, dengan hingga delapan langkah tool per pertanyaan.

Yang tidak bisa dilakukannya adalah bertindak sendiri:

- **Setiap perubahan adalah kartu.** Penulisan data dicegat sebelum berjalan dan ditampilkan sebagai **Approve** atau **Reject** dengan nilai persisnya. Aksi yang tidak bisa dibatalkan (refund, mengirim invoice lewat email, mengajukan laporan INE, mengirim balasan tamu) hanya bisa dilakukan di sini, di balik kartunya.
- **Klik berjalan tanpa model.** Menyetujui menjalankan panggilan yang tersimpan, bukan permintaan baru ke AI.
- **Persetujuan hanya milik Anda.** Setiap kartu adalah izin sekali pakai untuk tool itu, nilai-nilai itu, chat itu, dan orang yang melihatnya, dan kedaluwarsa setelah 24 jam. Klik ganda atau kartu yang disalin ditolak.
- **Peran Anda ikut di setiap panggilan.** Setiap panggilan tool membawa pernyataan bertanda tangan tentang siapa yang meminta, berlaku 15 menit, jadi panggilan berjalan dengan izin Anda, bukan izin pemilik. Rekan kerja yang dinonaktifkan di tengah jawaban ditolak pada langkah berikutnya.
- **Tidak pernah berjalan sendiri.** Model hanya berjalan saat seseorang mengirim pesan. Model tidak bisa bangun belakangan atau menjadwalkan dirinya sendiri. Model bisa *mengusulkan* membuat atau mengubah jadwal tugas terjadwal, sebagai kartu, dan tugas itu kemudian menjalankan kode tetap, bukan AI.

::screenshot{src="/images/blog/demo/en/embed-card-change-approval.webp" alt="Kartu Approve these changes? bertanda Nothing written yet: kecocokan lengkap pada pengirim WhatsApp, tabel bukti dengan kolom Little Hotelier, pengirim WhatsApp, dan teks pesan, nilai Company dan Tax ID baru bertanda New dan Claim, kotak centang Also invoice this reservation automatically at checkout, serta tombol Reject dan Approve and apply" caption="Perubahan reservasi menunjukkan asal setiap nilai. Nilai yang hanya diketik di pesan adalah klaim, bukan bukti." path="/mcp-ui/reservation-change-proposal" width="690" height="494"}
::

Peran berasal dari **Team & roles** (`/settings/team`). Login front desk yang meminta refund lewat chat akan ditolak, dengan atau tanpa kartu.

## Asisten staf dan aplikasi AI luar

**Asisten staf** (`/staff`). Karyawan menulis ke nomor WhatsApp atau kotak masuk hotel dan dijawab sebagai staf. Identitasnya adalah pengirim: nomor yang terdaftar, atau alamat yang sama persis dengan email yang lolos DKIM atau DMARC (SPF saja tidak cukup). Karyawan **Read only** hanya bisa bertanya. Dengan **Can request changes**, setiap penulisan menjadi permintaan yang disetujui pemilik dengan **Approve and run**, yang menjalankan panggilan persis itu sekali.

::screenshot{src="/images/blog/demo/en/staff-assistant.webp" alt="Halaman Staff assistant dengan satu perubahan menunggu persetujuan, yaitu request invoice_on_leave_add dari Lucía (recepción) dengan tombol Reject dan Approve and run, dua karyawan berperan Can request changes dan Read only, serta pesan WhatsApp terbaru" caption="Permintaan karyawan masuk dengan tool dan nilai persisnya, dan hanya berjalan saat pemilik menyetujuinya." path="/staff"}
::

**Claude, ChatGPT, dan aplikasi MCP lain** masuk dengan OAuth untuk satu properti yang Anda pilih dan melewati pemeriksaan peran yang sama. Tidak ada kartu kedua di luar dashboard: penulisan berjalan saat aplikasi memanggilnya, jadi biarkan persetujuan di aplikasi itu tetap aktif. Aksi yang tidak bisa dibatalkan dan balasan tamu diblokir. Lihat [menghubungkan Claude ke Little Hotelier](/blog/connect-claude-to-little-hotelier).

**Agen browser (WebMCP)**, standar web awal yang masih berupa [draf komunitas](https://webmachinelearning.github.io/webmcp/), hanya mendapat akses baca. Refund atau balasan tamu hanya bisa *diusulkan*: formulir aplikasi terbuka sudah terisi, dan Anda yang menekan tombolnya. Di halaman yang dilihat tamu, tool ini ditarik.

## Log, biaya, dan batasan yang jujur

**Apa yang dicatat.** Setiap keputusan identitas beserta alasannya, termasuk penolakan. Setiap perubahan reservasi yang diterapkan, ditolak sistem, atau ditolak staf, dengan bukti yang diperiksa. Aktivitas tim (undangan, peran, kontak staf). Setiap biaya AI di **AI credits** (`/messaging/credits`). Tidak ada analisis yang berjalan tanpa kredit.

**Apa yang belum dibuat, atau belum selesai:**

- Inbox masih **alpha**, AI Chat **beta**, pesan Expedia **beta** (hanya daftar dan pesan terakhir; Anda menjawab di Partner Central).
- WhatsApp berjalan lewat WAHA, bukan API resmi Meta, jadi nomor bisa diblokir. Lihat [WhatsApp dengan Little Hotelier](/blog/whatsapp-little-hotelier).
- Sejak 28 September 2026, Booking.com tidak lagi mengirim nomor telepon tamu ke channel manager, jadi WhatsApp dari tamu Booking.com bisa menampilkan **No reservation match**.
- AI untuk tamu tidak bisa membatalkan, mengubah tanggal, atau menerima pembayaran, dalam mode apa pun.

Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

::demo-cta{path="/messaging"}
::

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh Booking.com, Expedia Group, WhatsApp, Meta, SiteMinder, maupun Little Hotelier. Layanan ini terhubung memakai login Little Hotelier, Booking.com, dan Expedia hotel Anda sendiri.
::

Lihat juga: [membalas pesan tamu dengan AI](/blog/ai-replies-guest-messages), [asisten AI untuk front desk](/blog/ai-assistant-hotel-front-desk), [apa itu MCP server](/blog/what-is-mcp-server-hotels).

## Ringkasan

- AI balasan tamu tidak punya tool: AI membaca satu reservasi terverifikasi dan fakta Anda sendiri, lalu mengembalikan rencana dari empat aksi.
- Pesan dikaitkan dengan reservasi lewat pengirimnya (thread Booking.com, 8+ digit telepon, email yang sama persis, referensi `EXP-`), tidak pernah lewat teksnya. Dua kecocokan berarti tidak ada reservasi.
- Teks tamu adalah data, bukan instruksi; filter balasan memblokir referensi tamu lain, dan Booking.com tidak pernah dikirim oleh AI.
- AI Chat bisa mencari apa saja yang diizinkan peran Anda, tetapi setiap perubahan adalah kartu sekali pakai yang ditandatangani untuk Anda, dijalankan tanpa model, dan chat tidak pernah berjalan sendiri.
- Karyawan, Claude atau ChatGPT, dan agen browser melewati pemeriksaan peran yang sama, masing-masing dengan langkah persetujuannya sendiri.
