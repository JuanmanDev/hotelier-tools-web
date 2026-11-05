---
title: "Tamu meminta tanggal yang belum bisa Anda jual? Simpan antrean permintaan ketersediaan"
seoTitle: "Permintaan ketersediaan hotel: jangan sampai ada yang hilang"
description: "Tamu menanyakan tanggal penuh atau belum bertarif, lalu emailnya tenggelam. Catat di log, atau biarkan antrean memeriksa dan membalas saat ada kamar."
date: 2026-11-05
updated: 2026-11-05
category: operations
tags: [availability, waitlist, enquiries, little hotelier, group requests, direct booking]
keywords: [tamu tanya kamar tanggal belum tersedia, cara mencatat permintaan kamar hotel, follow up permintaan ketersediaan hotel, template log permintaan tamu hotel, notifikasi tamu saat kamar tersedia, tarif belum dibuka booking engine hotel, permintaan kamar rombongan hotel penuh, waiting list hotel tanggal mendatang]
feature: waitlist
demoPath: /availability-watch
cover: /images/blog/demo/en/availability-queue-requests.webp
coverAlt: "Halaman Availability queue di Hotelier Tools: tombol Add to the queue, kartu Public waiting-list page berstatus terbuka dengan tautannya, dan In the queue dengan tiga permintaan aktif: Tom Walker (email dan WhatsApp, 1 kamar tipe apa pun, 27–29 Nov), Lena Fischer (1 Doble Superior, 18–21 Des) dan Viajes Ejemplo (agen) yang meminta 3 Doble Estándar plus 1 Familiar 4 pax untuk 26–29 Mar 2027"
featured: true
faq:
  - q: "Apa yang harus saya lakukan saat tamu meminta tanggal yang belum saya beri tarif?"
    a: "Catat permintaannya dengan malam, kamar, dan kontak yang persis, katakan kepada tamu bahwa Anda akan menulis begitu tanggalnya dibuka, dan periksa daftar itu setiap kali Anda memasukkan tarif baru. Tool seperti antrean ketersediaan Hotelier Tools melakukan pengecekan untuk Anda dan menulis kepada tamu saat pertama kali kamarnya bisa dipesan."
  - q: "Apakah permintaan ketersediaan menahan kamar untuk tamu?"
    a: "Tidak. Tidak ada yang dipesan atau diblokir. Ketika kamar kosong, tamu menerima pesan berisi tautan pemesanan, dan kamar jatuh kepada siapa pun yang memesan lebih dulu. Katakan dengan jelas di setiap balasan."
  - q: "Bagaimana antrean tahu sebuah masa inap benar-benar kosong?"
    a: "Antrean membaca inventory Little Hotelier untuk setiap malam dari masa inap dan mengambil jumlah terendah. Malam yang stop sell, ditutup untuk kedatangan pada hari kedatangan, atau tidak ada di inventory dihitung nol, jadi 'tidak ada data' tidak pernah dibaca sebagai 'kosong'."
  - q: "Bagaimana jika hanya sebagian kamar yang diminta agen menjadi kosong?"
    a: "Itu kecocokan 'partial'. Secara default hanya properti yang diberi tahu, sekali, agar Anda bisa menelepon agen dan menawarkan yang kosong. Permintaan tetap di antrean sampai semua kamar kosong."
  - q: "Apakah tamu bisa menerima pesan yang sama dua kali?"
    a: "Tidak. Sebuah permintaan mengumumkan 'available' sekali lalu ditutup. Hotelier Tools juga menolak memasukkan orang yang sama dua kali untuk tanggal yang sama, baik ditambahkan dari dashboard, asisten, API, maupun halaman publik."
  - q: "Apakah Hotelier Tools bagian dari Little Hotelier?"
    a: "Bukan. Hotelier Tools adalah tool independen, tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini membaca ketersediaan dengan login Little Hotelier hotel Anda sendiri dan tidak pernah membuat atau mengubah reservasi dari antrean."
---

Ketika tamu meminta tanggal yang belum bisa Anda jual hari ini (penuh, ditutup, atau belum ada tarifnya), catat permintaannya dengan malam, kamar, dan kontak yang persis, lalu lihat daftar itu setiap kali ada perubahan. Cara yang lebih cepat adalah antrean yang memeriksa Little Hotelier untuk Anda: **Availability queue** Hotelier Tools memeriksa setiap permintaan sesuai jadwal dan mengirim satu pesan kepada tamu, dengan tautan pemesanan, saat pertama kali setiap malam yang diminta bisa dipesan.

## Mengapa permintaan ketersediaan bisa hilang?

Karena permintaan ada di satu tempat dan jawabannya muncul di tempat lain, berminggu-minggu kemudian. Kasus yang biasa terjadi:

- **Email atau WhatsApp-nya tenggelam.** "Ada kamar double untuk minggu pertama Agustus?" masuk pada bulan Maret. Saat kamar kosong, pesan itu sudah 400 email ke bawah, dan tidak ada yang ingat siapa yang bertanya.
- **Tanggalnya belum ada tarif.** Anda belum memasukkan harga musim panas depan, jadi booking engine tidak menampilkan apa pun dan tamu menulis kepada Anda. Anda menjawab "nanti kami kabari", lalu memasukkan tarif pada sore yang sibuk.
- **Tanggalnya penuh.** Sebuah pembatalan membebaskan kamar pada hari Selasa pukul 10.00. Tamu yang bertanya pada bulan Januari tidak pernah tahu, dan OTA menjualnya lagi.
- **Agen menginginkan beberapa kamar.** Tiga kamar double dan satu kamar keluarga untuk akhir pekan Paskah. Anda punya dua double. Itu jawaban "tidak", atau alasan untuk menelepon?
- **Sebagian permintaan menjadi mungkin.** Dua dari tiga malam kosong, atau satu dari dua kamar. Tidak ada yang memeriksa setiap malam dari setiap permintaan secara manual.

Masing-masing adalah reservasi langsung yang sudah ada di inbox Anda.

## Bagaimana mencatat permintaan ketersediaan secara manual?

Log sederhana sudah cukup jika ada yang mengurusnya. Satu baris per permintaan:

| Yang dicatat | Alasannya |
|---|---|
| Tanggal permintaan, dan lewat apa (email, WhatsApp, telepon) | Agar pesan aslinya bisa ditemukan |
| Nama, email, dan telepon dengan kode negara | Agar Anda bisa membalas di channel yang mereka pakai |
| Malam pertama dan hari keberangkatan | Masa inap butuh setiap malam, bukan hanya yang pertama |
| Kamar dan tipe kamar, per tipe untuk rombongan | "3 double + 1 keluarga" tidak sama dengan "4 kamar" |
| Mengapa tidak bisa Anda jual | Penuh, ditutup, atau belum ada tarif: masing-masing memberi tahu kapan harus melihat lagi |
| Status dan tanggal | Menunggu, ditawarkan, dipesan, batal |

**Kapan melihatnya:**

- **Setiap kali Anda memasukkan atau membuka tarif.** Di Little Hotelier Anda mengatur tarif serta menutup atau membuka tanggal di **Front Desk > Inventory**, satu per satu atau dengan **Bulk Update** ([pusat bantuan Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), per November 2026). Filter log Anda berdasarkan tanggal yang baru dibuka.
- **Setiap kali ada pembatalan** untuk tanggal yang ada di log.
- **Seminggu sekali**, untuk menutup permintaan yang tanggalnya sudah lewat.

**Cara menjawab:** berikan tamu tautan pemesanan langsung untuk tanggal persisnya, katakan terus terang bahwa tidak ada yang ditahan, dan beri batas waktu jika Anda menawarkannya kepada beberapa orang. Jika Anda bekerja di Gmail, label seperti "Permintaan ketersediaan" menyatukan email-email aslinya ([Bantuan Gmail](https://support.google.com/mail/answer/118708)).

Titik lemahnya tetap manusia: seseorang harus mencocokkan setiap malam dari setiap baris dengan inventory, dan ingat untuk melakukannya.

## Cara yang lebih cepat: antrean ketersediaan Hotelier Tools

**Availability queue** (`/availability-watch`, beta) menyimpan daftar dan melakukan pengecekan. Anda menambahkan masa inap sekali. Tugas terjadwal membaca Little Hotelier untuk seluruh antrean, dan ketika kamar bisa dipesan pada setiap malam, tamu dan/atau Anda diberi tahu lewat email atau WhatsApp. Tidak ada yang dipesan atau ditahan, dan pesan itu menyatakannya.

1. Buka **Availability queue** dan isi **Add a stay to watch**: malam, **Rooms needed**, dan **Room types**. Untuk agen, centang **Different numbers per room type**.
2. Di bawah **Tell the guest** dan **Tell the property**, pilih channel dan kapan masing-masing diberi tahu.
3. Klik **Add to the queue**.
4. Periksa kartu **Checks on the queue**. Akun dengan login Little Hotelier biasanya sudah punya tugas ini, setiap malam pukul 01.00. Jika tertulis **Not configured yet**, tekan **Check every night at 01:00**, atau **Choose** jadwal lain (paling sering setiap 20 menit).

Langkah demi langkah untuk tanggal penuh dan pembatalan ada di panduan pendamping, [cara mengelola waiting list untuk tanggal penuh](/blog/hotel-waitlist-sold-out-dates). Panduan ini membahas cara antrean memutuskan, dan cara-cara baru permintaan masuk ke dalamnya.

::screenshot{src="/images/blog/demo/en/availability-queue-requests.webp" alt="Halaman Availability queue: tombol Add to the queue, kartu Public waiting-list page berstatus terbuka dengan alamatnya, dan In the queue dengan tiga entri aktif: Tom Walker lewat email dan WhatsApp untuk 1 kamar tipe apa pun, 27–29 Nov 2026; Lena Fischer untuk 1 Doble Superior, 18–21 Des 2026; dan Viajes Ejemplo (agen) untuk 3 Doble Estándar plus 1 Familiar 4 pax, 26–29 Mar 2027, masing-masing bertanda Not checked yet" caption="Satu daftar untuk setiap permintaan: tamu perorangan, pertanyaan lewat WhatsApp, dan rombongan agen berbulan-bulan sebelumnya." path="/availability-watch"}
::

### Bagaimana antrean memutuskan sebuah masa inap kosong?

- **Malam dengan kamar paling sedikit yang menentukan.** Tipe kamar dengan empat kamar kosong pada hari Jumat dan nol pada hari Sabtu tidak bisa menjual masa inap Jumat sampai Minggu. Antrean mengambil jumlah terendah di semua malam, yaitu jumlah yang benar-benar bisa Anda jual.
- **Ditutup berarti tidak bisa dipesan.** Malam yang stop sell (**Close Channels** di Little Hotelier), ditutup untuk kedatangan pada hari kedatangan, atau tidak ada di inventory dihitung nol, meskipun jumlah kamarnya berkata lain. "Tidak ada data" tidak pernah dibaca sebagai "kosong".
- **Jadi tanggal tanpa tarif juga bisa.** Jika Anda menutup musim depan sampai tarifnya masuk, tamu yang meminta Agustus menunggu di antrean. Pengecekan pertama setelah Anda memasukkan tarif dan membuka tanggal itu menemukan kamar kosong, dan tamu diberi tahu tanpa Anda mencari apa pun.
- **Satu pengecekan untuk seluruh antrean.** Setiap permintaan yang menunggu diperiksa pada setiap putaran, jadi dua tamu yang menunggu malam yang sama mendengar tentang pembatalan yang sama pada saat yang sama. Little Hotelier dibaca sekali per tanggal kedatangan, bukan sekali per permintaan.
- **Diumumkan sekali saja.** Ketika sebuah permintaan diumumkan tersedia, permintaan itu ditutup. Ketersediaan naik-turun, dan tamu tidak seharusnya menerima pesan setiap 30 menit tentang kamar yang sama.
- **Masa inap yang sudah dimulai dipensiunkan** tanpa mengirim apa pun.

### Siapa diberi tahu apa: available, partial, atau expiring

Setiap pengecekan berakhir pada salah satu dari tiga situasi, dan tamu serta properti berlangganan secara terpisah:

| Situasi | Label di formulir | Siapa yang diberi tahu secara default |
|---|---|---|
| **Available**: setiap kamar yang diminta bisa dipesan pada setiap malam | **Everything asked for is free** | Tamu dan properti. Permintaan ditutup. |
| **Partial**: ada yang kosong, tetapi kamarnya lebih sedikit dari yang diminta | **Some rooms came free, but not all** | Hanya properti. Ini urusan telepon, bukan email otomatis. |
| **Expiring**: masa inap dimulai dalam 48 jam dan tidak ada yang ditemukan | **About to expire with nothing found** | Hanya properti. Kesempatan terakhir Anda menawarkan alternatif. |

Kecocokan partial yang tidak berubah dilaporkan sekali, bukan pada setiap putaran, dan permintaan tetap menunggu semua kamarnya. Inilah kasus agen: "2 dari 3 double kosong" sampai ke resepsionis, dan agen tidak menerima email yang tidak bisa mereka tindak lanjuti.

### Email atau WhatsApp, untuk tamu dan untuk Anda

Tamu bisa diberi tahu lewat email, WhatsApp, atau keduanya, dan properti lewat channel-nya sendiri. Pesan WhatsApp dikirim dari nomor Anda yang terhubung ([WhatsApp dengan Little Hotelier](/blog/whatsapp-little-hotelier)); nomor telepon harus menyertakan kode negara, dan Hotelier Tools tidak pernah menebaknya. Biarkan **Property email** kosong untuk memakai alamat notifikasi akun Anda. Email tamu ditulis dalam bahasa yang Anda pilih di **Guest's language**, dan pada pesan **available** email itu menyertakan tautan pemesanan langsung dengan tanggal dan jumlah kamar yang sudah terisi. **History** (`/availability-watch/history`) menyimpan pesan persis yang dikirim setiap permintaan.

::screenshot{src="/images/blog/demo/en/availability-queue-history.webp" alt="Halaman Waiting list history: penghitung 1 fulfilled, 1 expired, 1 cancelled dan 3 with a message, lalu Closed entries: Pierre Dubois fulfilled, kamar kosong dan sudah diumumkan (AVAILABLE Doble Superior ×3, told guest/email, hotel/email) dengan tombol What was sent; Lucas Moreau expired karena masa inapnya dimulai sebelum ada kamar yang kosong; Sean Murphy cancelled oleh resepsionis karena tamu memesan tanggal lain lewat telepon" caption="Setiap permintaan yang ditutup tetap tercatat, dengan pesan persis yang diterima tamu." path="/availability-watch/history"}
::

### Permintaan yang masuk lewat inbox

Asisten AI ([AI Chat](/blog/ai-assistant-hotel-front-desk), beta, dan asisten inbox, alpha) tahu kapan properti Anda memakai antrean. Ketika tamu menanyakan tanggal dan booking engine tidak menemukan apa pun untuk dijual, asisten menawarkan waiting list dalam balasan yang sama, alih-alih berhenti di "tidak ada ketersediaan". Asisten lebih dulu memeriksa apakah orang itu sudah menunggu, lewat email atau telepon, dan tidak pernah memasukkannya dua kali untuk tanggal yang sama. Permintaan muncul sebagai kartu yang Anda konfirmasi, berisi tamu, masa inap, kamar, dan siapa yang akan diberi tahu. Jika hanya sebagian kamar yang bisa dipesan, asisten memberi harga untuk kamar itu dan menawarkan antrean untuk sisanya. Selengkapnya di [balasan AI untuk pesan tamu](/blog/ai-replies-guest-messages).

## Biarkan tamu meminta lewat situs web Anda: halaman waiting list publik

**Public waiting-list page** (`/availability-watch/public`) memungkinkan tamu menambahkan diri mereka sendiri. Halaman ini mati sampai Anda menyalakan **Page open**, dan **Ask guests to confirm their email (double opt-in)** menyala secara default: permintaan baru masuk ke antrean setelah tamu menekan tombol di email konfirmasi.

**Bisa dipesan sekarang: pesan saja, jangan menunggu.** Ketika tamu memilih masa inap, halaman ini memeriksa booking engine publik Anda (tidak pernah Little Hotelier) untuk tanggal dan jumlah tamu itu. Jika ada kamar kosong, halaman menampilkan harga dengan kode promo langsung Anda dan tombol **Book now**, dan tidak memasukkan masa inap itu ke waiting list. Jika yang kosong hanya tipe kamar lain atau kamarnya lebih sedikit, halaman menampilkannya dan tetap membiarkan tamu bergabung untuk sisanya. Jika booking engine tidak bisa dibaca, halaman menyatakannya dan tamu tetap bisa bergabung.

::screenshot{src="/images/blog/demo/en/availability-queue-bookable-now.webp" alt="Formulir waiting list publik untuk 18–21 Des 2026, 1 kamar untuk 2 dewasa: kotak hijau bertuliskan Good news: you can book these dates now, berisi Dormitorio 6 camas mixto, Doble Estándar, Doble Superior dan Familiar 4 pax dengan sisa kamar, harga dicoret dan total setelah diskon per tarif, catatan tentang kode diskon langsung DEMOSOL, dan tombol Book now" caption="Jika tanggalnya bisa dipesan, tamu melihat harga langsung Anda dan memesan, bukan menunggu." path="/waitlist"}
::

Anda mematikan pengecekan ini di **When a room is free now**, bersama tautan **Book on our website**. Pengaturan lainnya menentukan apa yang dilihat tamu:

- **Look of your booking page:** tempel alamat direct-book.com Anda lalu **Import** warna, banner, foto properti, dan deskripsi kamarnya. Tidak ada yang ditampilkan sampai Anda mencentang apa yang dipakai.
- **What the page shows about your property:** nama, alamat, telepon, email, dan situs web, masing-masing **From the property card**, **Own value for this page**, atau **Do not show**. Alamat login tidak pernah ditampilkan kepada tamu.
- **Map links and more ways to reach you:** tautan Google Maps dan Apple Maps yang dibuat dari alamat Anda, hingga tiga tautan peta lain, WhatsApp, dan hingga tiga alamat email tambahan (misalnya untuk rombongan).
- **Arrival and departure warnings:** halaman memperingatkan, tidak pernah menolak, ketika tamu memilih hari yang biasanya Anda tutup untuk kedatangan atau keberangkatan.

::screenshot{src="/images/blog/demo/en/availability-queue-public-settings.webp" alt="Pengaturan halaman waiting list publik: kartu When a room is free now dengan Check availability on the booking engine dan Show a Book on our website link yang sama-sama menyala, dan Direct promo code DEMOSOL dengan tautan pemesanannya; di bawahnya kartu Look of your booking page dengan kolom alamat direct-book.com dan tombol Import, Nothing imported yet" caption="Periksa booking engine lebih dulu, lalu pinjam tampilan halaman pemesanan Anda." path="/availability-watch/public"}
::

### Bagikan tautan yang sudah terisi, atau sematkan formulirnya

**Share and embed** (`/availability-watch/embed`) membuat dua hal untuk disalin. **Link** yang mengisi formulir, dengan nama parameter yang sama seperti halaman pemesanan Anda (`checkInDate`, `checkOutDate`, `items[0][adults]`, `promocode`, `locale`), sehingga Anda bisa membalas pertanyaan dengan tautan yang sudah berisi tanggal tamu. Dan **Frame for your website**: sebuah `<iframe>` selebar penuh atau 480, 640, atau 800 px, dengan pratinjau. Hanya halaman publik ini yang bisa ditampilkan dalam frame di situs lain; bagian dashboard lainnya tidak bisa.

::screenshot{src="/images/blog/demo/en/availability-queue-embed.webp" alt="Halaman Share and embed: What the link fills in dengan Your nights, Rooms, Adults, Children, Room type (opsional), Language diatur ke The guest's own dan Promo code DEMOSOL, serta kartu Link dengan alamat waitlist, Copy link dan Open" caption="Balas pertanyaan dengan tautan yang sudah berisi tanggal tamu." path="/availability-watch/embed"}
::

## Antrean memberi masukan untuk harga Anda

Orang yang menunggu sebuah malam adalah permintaan. Di dynamic pricing Hotelier Tools (alpha), setiap pihak yang menunggu menaikkan rekomendasi harga malam itu sebesar 3%, hingga 12% per malam, hanya untuk tipe kamar yang mereka minta, dan tamu yang sama dihitung sekali. Ubah atau matikan di aturan harga (`/pricing/settings/rules`): **Raise per guest on the waiting list** dan **Never raise for the waiting list more than**. Lihat [dynamic pricing untuk hotel kecil](/blog/dynamic-pricing-little-hotelier).

## Untuk developer: MCP dan REST

Tool MCP (`availability_watch_list`, `_add`, `_update`, `_cancel`, `_check_now`, `_schedule`, `_set_schedule`, plus `list_room_types`) dan REST API (`/api/v1/availability-watch`) melakukan hal yang sama, dengan pengecekan duplikat yang sama. Memeriksa antrean mengirim pesan sungguhan, jadi AI Chat meminta konfirmasi Anda. Lihat [panduan API Little Hotelier](/blog/little-hotelier-api) dan [menghubungkan Claude ke Little Hotelier](/blog/connect-claude-to-little-hotelier).

## Yang tidak dilakukan antrean

- **Antrean tidak menahan atau memesan apa pun.** Kamar jatuh kepada siapa pun yang memesan lebih dulu, di channel mana pun.
- **Antrean tidak membuat reservasi** atau mengubah apa pun di Little Hotelier.
- **Kecepatannya sebatas jadwalnya.** Pada musim ramai, periksa setiap 20 sampai 30 menit, bukan setiap malam.
- **Antrean melihat apa yang ditampilkan Little Hotelier.** Jika pembacaan inventory mengembalikan tarif tetapi tanpa jumlah kamar, halaman menampilkan **Little Hotelier is not returning room counts** alih-alih melaporkan tanggalnya penuh.
- **Tarif tidak termasuk dalam pengecekan.** Antrean membaca jumlah kamar dan penutupan, jadi biarkan tanggal tanpa harga tetap ditutup jika Anda tidak ingin tanggal itu diumumkan.

::demo-cta{path="/availability-watch"}
::

Semua yang dilakukan antrean ada di [halaman Waitlist](/tools/bot/waitlist). Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini membaca ketersediaan dengan login Little Hotelier hotel Anda sendiri dan tidak pernah membuat atau mengubah reservasi dari antrean.
::

Lihat juga: [CTA, CTD, minimum stay, dan stop sell](/blog/little-hotelier-cta-ctd-stop-sell), [alamat email hotel untuk tamu](/blog/hotel-email-address), [kode promo di Little Hotelier](/blog/little-hotelier-promo-codes).

## Ringkasan

- Permintaan hilang karena pertanyaan datang jauh sebelum jawabannya: pesan yang tenggelam, tanggal tanpa tarif, malam yang penuh, permintaan rombongan, kecocokan sebagian.
- Manual: catat malam, kamar per tipe, kontak, dan alasan tidak bisa dijual, lalu periksa setiap kali Anda memasukkan tarif atau menerima pembatalan.
- **Availability queue** Hotelier Tools memeriksa setiap malam dari setiap permintaan dalam satu jadwal, menghitung malam yang ditutup atau tanpa data sebagai penuh, dan memberi tahu tamu sekali, dengan tautan pemesanan.
- **Partial** dan **expiring** dikirim ke properti secara default; **available** dikirim ke keduanya.
- Tamu bisa bergabung dari halaman publik yang lebih dulu menawarkan untuk menjual tanggalnya jika bisa dipesan sekarang. Tidak ada yang pernah ditahan.
