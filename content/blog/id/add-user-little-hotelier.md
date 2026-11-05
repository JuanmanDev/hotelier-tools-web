---
title: "Cara menambahkan pengguna di Little Hotelier (dan memberi tool login sendiri, bukan kata sandi Anda)"
seoTitle: "Tambah pengguna di Little Hotelier, langkah demi langkah"
description: "Tambahkan anggota tim atau pengguna integrasi di Little Hotelier, atur izin dan MFA, dan hubungkan tool dengan pengguna khusus, bukan kata sandi Anda."
date: 2026-11-05
category: tips
tags: [little hotelier, pengguna, izin, mfa, passkey, keamanan]
keywords: [cara menambahkan user di little hotelier, tambah user little hotelier, izin user little hotelier, kelola user little hotelier, cara setting mfa little hotelier, email aktivasi little hotelier kedaluwarsa, user integrasi little hotelier, akses staf little hotelier, passkey little hotelier]
feature: dashboard
demoPath: /credentials/hotelier-advanced
cover: /images/blog/demo/en/lh-advanced-user-invite.webp
coverAlt: "Halaman Advanced account: Use an alias of your own email dengan alamat yang disarankan demo+hoteliertools@hotelier.tools dan tombol Copy, lalu The invite email: copy the link, do not open it, dengan peringatan agar tidak mengeklik tombol di email dan tiga langkah yang berakhir di kolom Activation link"
faq:
  - q: "Bagaimana cara menambahkan pengguna baru di Little Hotelier?"
    a: "Di perangkat tepercaya, klik nama properti Anda di kanan atas dan pilih Manage users, lalu Add user. Masukkan email, nama, dan bahasa, pilih aplikasi dan level pengguna, lalu klik Save. Orang tersebut menerima email aktivasi yang berlaku 24 jam."
  - q: "Izin apa saja yang bisa dimiliki pengguna Little Hotelier?"
    a: "Pengguna Admin punya izin penuh. Pengguna General hanya mendapat yang Anda centang per aplikasi: untuk Front Desk, Calendar, Reservations, Inventory, Guests, Reports, Housekeeping, dan Setup; untuk Channel Manager, Config, Inventory, Reservations, dan Payments."
  - q: "Apakah saya butuh MFA untuk menambahkan pengguna di Little Hotelier?"
    a: "Ya. Mengelola pengguna membutuhkan perangkat tepercaya, dan Anda harus mengatur autentikasi multi-faktor sebelum bisa menambahkan pengguna. MFA bekerja dengan aplikasi Little Hotelier, aplikasi autentikator, atau ekstensi browser; SMS dan email tidak didukung."
  - q: "Haruskah saya memberikan kata sandi Little Hotelier saya sendiri ke sebuah integrasi?"
    a: "Sebaiknya tidak. Pengguna khusus untuk tool menjaga login Anda tetap privat, menampilkan tindakannya secara terpisah di log, dan bisa dinonaktifkan tanpa menyentuh orang lain. Hotelier Tools menyebutnya Advanced account."
  - q: "Apa yang terjadi jika tautan aktivasi sudah pernah dibuka?"
    a: "Token aktivasi hanya berlaku sekali. Jika seseorang mengeklik tombol di email sebelum menempelkan tautannya ke Hotelier Tools, minta Little Hotelier mengirim ulang undangan dan salin tautan baru tanpa membukanya."
  - q: "Apakah Hotelier Tools bagian dari Little Hotelier?"
    a: "Bukan. Hotelier Tools independen dan tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini terhubung memakai pengguna Little Hotelier yang dibuat dan dikendalikan oleh hotel Anda."
---

Untuk menambahkan pengguna di Little Hotelier, login di perangkat tepercaya, klik nama properti Anda di kanan atas, pilih **Manage users**, lalu tekan **Add user**. Masukkan email, nama, dan bahasa orang tersebut, pilih aplikasi yang dibutuhkannya, pilih **Admin** atau **General** (dan centang izinnya), lalu **Save**. Ia akan menerima email aktivasi yang berlaku 24 jam. Untuk software, lakukan hal yang sama dengan pengguna terpisah: jangan pernah membagikan kata sandi pemilik ke sebuah tool.

Langkah-langkah Little Hotelier di bawah ini diperiksa terhadap pusat bantuannya per November 2026.

## Cara menambahkan pengguna di Little Hotelier

Sebelum mulai, ada dua syarat ([Create and manage users](https://helpcentre.littlehotelier.com/en/articles/8673881-create-and-manage-user-accounts-and-permissions)):

- Anda membutuhkan izin **Manage users**.
- Anda harus memakai **perangkat tepercaya** (trusted device), di browser desktop atau ponsel. Manajemen pengguna tidak tersedia di aplikasi seluler, dan Anda hanya bisa menambahkan perangkat tepercaya setelah mengatur MFA.

Lalu:

1. Klik nama properti Anda di kanan atas dan pilih **Manage users**.
2. Klik **Add user**.
3. Masukkan email, nama, dan bahasa pilihan pengguna.
4. Pilih aplikasi yang dibutuhkan pengguna (Front Desk, Channel Manager, Direct Booking, Payments).
5. Pilih level pengguna untuk masing-masing dan centang izinnya.
6. Klik **Save**.

Pengguna baru menerima email aktivasi yang berlaku 24 jam untuk membuat kata sandinya. Jika alamat email itu sudah punya pengguna Little Hotelier, email aktivasi tidak dikirim: ia login dengan kata sandi yang sudah ada atau memakai **Reset password**.

Platform Little Hotelier yang lebih baru menjelaskan alur yang sama di bawah **User management** ([artikel help-platform](https://help-platform.littlehotelier.com/en/articles/10700088-create-and-manage-little-hotelier-users)). Pakai artikel yang sesuai dengan layar yang Anda lihat.

### Izin apa yang perlu diberikan

- **Admin**: izin penuh.
- **General**: hanya yang Anda centang. Untuk **Front Desk**: Calendar, Reservations, Inventory, Guests, Reports, Housekeeping, dan Setup. Untuk **Channel Manager**: Config, Inventory, Reservations, dan Payments.

Resepsionis biasanya butuh Front Desk dengan Calendar, Reservations, dan Guests. Berikan **Manage users** kepada sesedikit mungkin orang.

::screenshot{src="/images/config/permissions.webp" alt="Halaman edit pengguna Little Hotelier dalam bahasa Spanyol untuk pengguna bernama Bot Facturas 2: izin pengelolaan pengguna tidak dicentang, Channel Manager dan Insights nonaktif, Direct Booking aktif sebagai General, dan Front Desk aktif sebagai General dengan hanya Calendar dan Reservations yang dicentang" caption="Pengguna General dengan hanya Calendar dan Reservations di Front Desk: pengaturan minimal untuk koneksi sederhana." width="1639" height="1742"}
::

### Mengubah, menonaktifkan, atau menghapus pengguna

- **Edit izin** kapan saja dari daftar pengguna.
- **Disable** adalah cara yang disarankan untuk mencabut akses: Anda bisa mengaktifkannya lagi nanti. **Delete** bersifat permanen.
- **Email tidak bisa diedit.** Buat pengguna baru dengan alamat yang benar, lalu hapus yang lama.
- Pengguna terkunci setelah 6 kali atau lebih gagal login, dan bisa dibuka lagi dengan **Forgot password**.

## Autentikasi dua faktor (MFA) dan passkey

Little Hotelier mewajibkan MFA dalam 30 hari sejak login pertama pengguna ([Set up MFA](https://helpcentre.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)). Setiap pengguna memilih satu metode:

- **aplikasi seluler Little Hotelier** (disarankan): konfirmasi angka yang cocok dengan wajah atau sidik jari;
- **aplikasi autentikator** seperti Google Authenticator, Microsoft Authenticator, atau Authy (kode 6 digit);
- **ekstensi browser autentikator** di Chrome, Edge, atau Firefox.

Kode lewat telepon, SMS, dan email tidak didukung. Pengguna dengan izin **Manage users** bisa mereset MFA pengguna lain ([caranya](https://helpcentre.littlehotelier.com/en/articles/13364672-how-to-reset-mfa-for-another-user)), lalu pengguna itu mengatur metode baru saat login berikutnya.

Halaman login, yang dijalankan SiteMinder, juga bisa menawarkan **Continue with a passkey** kepada pengguna yang sudah membuatnya. Pusat bantuan Little Hotelier belum mendokumentasikan passkey per November 2026, jadi anggap sebagai opsional dan tetap atur MFA.

Ada satu konsekuensi penting untuk tool: **pengguna dengan MFA diminta kode saat login.** Tool yang hanya menyimpan kata sandi akan berhenti di permintaan itu, karena tidak ada orang yang menjawabnya.

## Mengapa tool sebaiknya punya pengguna sendiri

Banyak integrasi meminta "email dan kata sandi Little Hotelier Anda". Berbagi login pemilik punya biaya nyata:

- **Kata sandi kedaluwarsa** kira-kira setiap tiga bulan, dan tool berhenti sampai seseorang mengetik kata sandi baru.
- **Log tidak bisa membedakan Anda.** Perubahan yang dibuat tool terlihat seperti perubahan Anda.
- **Sesi bertabrakan.** Pengguna yang sama yang login dua kali bisa membuat salah satu sesi keluar.
- **Saat orang itu keluar dari pekerjaan**, koneksinya ikut pergi.
- **MFA di login Anda sendiri** adalah permintaan yang tidak bisa dijawab tool.

Pengguna khusus untuk tool menyelesaikan semuanya: alamatnya sendiri, izinnya sendiri, faktor keduanya sendiri, dan Anda bisa menonaktifkannya tanpa menyentuh orang lain.

## Cara yang lebih cepat: Advanced account Hotelier Tools

Hotelier Tools menawarkan dua koneksi di **Credentials** (`/credentials`):

| | **Simple** (`/credentials/hotelier-simple`) | **Advanced** (`/credentials/hotelier-advanced`) |
|---|---|---|
| Login | Email dan kata sandi Little Hotelier Anda sendiri | Pengguna Little Hotelier baru, khusus untuk Hotelier Tools |
| Kata sandi | Kedaluwarsa kira-kira setiap 3 bulan; Anda menempelkan yang baru | Kuat, acak, dibuat oleh Hotelier Tools; tidak ada yang perlu mengingatnya |
| Dua faktor | Tidak didukung: permintaan kode menghentikannya | Menyimpan secret autentikatornya sendiri, dan bisa menyimpan passkey |
| Izin | Front Desk (Calendar, Reservations) dan Direct Booking | Semua izin: setiap fitur berfungsi |

Halaman Simple sengaja menampilkan batasannya di awal: harga dan inventaris tidak bisa ditulis, dan kata sandi yang kedaluwarsa diam-diam menghentikan otomatisasi beberapa hari kemudian.

::screenshot{src="/images/blog/demo/en/lh-simple-account-limits.webp" alt="Halaman Simple account dengan Before you use this: the limits, yang mencantumkan kata sandi yang kedaluwarsa kira-kira setiap 3 bulan, tidak ada dukungan dua faktor, izin terbatas dengan apa yang berfungsi dan apa yang dibatasi atau nonaktif, serta login pribadi yang dibagi dengan robot, plus tombol Use the Advanced way" caption="Simple account itu cepat, tetapi batasannya menghentikan otomatisasi beberapa minggu kemudian. Baca dulu sebelum memilihnya." path="/credentials/hotelier-simple"}
::

### Mengatur Advanced account (yang Anda lakukan saat ini)

1. Buka **Credentials > Advanced** (`/credentials/hotelier-advanced`). Di bawah **Use an alias of your own email**, salin **Suggested address for the new user**, misalnya `anda+hoteliertools@hotelanda.com`. Little Hotelier butuh alamat baru; tag plus tetap masuk ke kotak masuk Anda sendiri di kebanyakan penyedia (Gmail, Outlook / Microsoft 365, iCloud, Fastmail).
2. Di Little Hotelier, tambahkan pengguna dengan alamat itu dan **semua izin diaktifkan**, memakai langkah-langkah di atas.
3. Buka email undangan dan **jangan klik tombolnya**. Klik kanan tombol itu dan pilih **Copy link address** (di ponsel: tekan dan tahan, **Copy link**). Token aktivasi hanya berlaku sekali: membukanya akan menghabiskannya di halaman kata sandi Little Hotelier sendiri.
4. Kembali ke halaman Advanced, pilih **Use an activation link**, tempel di **Activation link**, lalu simpan.
5. Hotelier Tools mengaktifkan pengguna itu: membuat kata sandi acak yang kuat, menyimpannya terenkripsi, dan login sekali untuk memastikan.

Sudah membuat pengguna dan tahu kata sandinya? Pilih **Enter the credentials** dan tambahkan secret autentikator (OTP) atau passkey-nya.

::screenshot{src="/images/blog/demo/en/lh-advanced-user-invite.webp" alt="Halaman Advanced account: Use an alias of your own email dengan alamat yang disarankan demo+hoteliertools@hotelier.tools dan tombol Copy, lalu The invite email: copy the link, do not open it, dengan peringatan agar tidak mengeklik tombol di email dan tiga langkah yang berakhir di kolom Activation link" caption="Buat pengguna dengan email Anda sendiri plus tag, lalu tempelkan tautan undangan alih-alih membukanya." path="/credentials/hotelier-advanced"}
::

Anda bisa memberi pengguna ini izin yang lebih sedikit, tetapi Hotelier Tools menyatakan terus terang bahwa beberapa fitur akan gagal dan pengaturan itu tidak didukung. Menulis harga, misalnya, membutuhkan peran Rates & Inventory.

### MFA dan passkey pada pengguna Advanced

- **Saat Little Hotelier mulai mewajibkan MFA**, Hotelier Tools mendaftarkan autentikator pada pengguna Advanced dengan sendirinya, menyimpan secret-nya terenkripsi, dan sejak itu menjawab kodenya. Ini tidak pernah dilakukan pada login Simple Anda, karena secret yang hanya dipegang aplikasi akan mengunci Anda dari akun Anda sendiri. Jika perlu dilakukan manual, panel akun punya **Set up two-step verification**.
- **Passkey yang disimpan di server (beta).** **Passkeys and two-step verification** (`/credentials/passkeys`) bisa menambahkan passkey ke pengguna Advanced (**Add passkey**, lalu **Test passkey**). Login terjadwal mencobanya lebih dulu: passkey tetap bekerja meski kata sandi sudah kedaluwarsa dan melewati langkah kode. Pemilik bisa memakai **Download passkey** untuk menyimpan salinan. Menambahkan atau mengujinya berarti satu kali login ke Little Hotelier.

### Untuk menghapusnya

Nonaktifkan atau hapus pengguna itu di Little Hotelier. Akses Hotelier Tools berakhir bersamanya, dan login Anda sendiri tidak tersentuh.

## Segera hadir: Hotelier Tools sebagai pengguna, lewat undangan

Halaman Advanced juga punya kartu **Hotelier Tools as a user in Little Hotelier**. Idenya: Hotelier Tools memberi properti Anda alamat login privat di domainnya sendiri (`lh-…@in.hotelier.tools`). Anda mengundang alamat itu di Little Hotelier dengan izin yang Anda pilih, dan Hotelier Tools menerima undangannya, membuat kata sandi dan verifikasi dua langkah, serta menjaga sesinya. Tidak ada yang dibagi dengan hotel lain, dan domain itu tidak pernah menjadi login utama atau email pemulihan Anda ([cara kerja alamat ini](/blog/hotel-email-address)).

Inilah posisi persisnya per 5 November 2026:

- **Sudah dibangun:** alamatnya (**Get the login address**, setelah Anda memasukkan nomor properti Little Hotelier Anda), status login (**Waiting for the invitation**, **Active**, **Paused**, **Retired**), **Retire this login**, dan aturan keamanannya. Peringatan keamanan diteruskan ke pemilik dan tidak pernah diklik.
- **Belum dibangun:** membaca dan menerima undangan Little Hotelier. Belum ada undangan asli yang pernah ditangkap, jadi **setiap pesan ke alamat login ditahan untuk manusia**, dan tidak ada isinya yang dibuka. Kartunya sendiri menyebutkan hal ini.
- **Yang dilakukan manusia saat ini:** pakai langkah tautan aktivasi di atas.

## Rekan kerja Anda: akun tim Hotelier Tools

Anggota tim tidak membutuhkan pengguna integrasi. Di **Settings > Team & roles** (`/settings/team`), tekan **Invite someone**, masukkan email mereka, dan pilih peran: **Administrator**, **Manager**, **Front desk**, **Revenue manager**, **Accountant**, **Read-only**, atau peran khusus. Mereka menerima undangan dari tautan di email (berlaku 7 hari) dan login dengan login Hotelier Tools mereka sendiri.

Ini adalah login Hotelier Tools, bukan pengguna Little Hotelier. Hotelier Tools bekerja di Little Hotelier lewat satu koneksi milik properti, dan tidak ada anggota tim yang melihat kata sandinya; hanya pemilik yang bisa. Perubahan yang dibuat rekan kerja tampil di Little Hotelier sebagai pengguna yang terhubung, sementara Hotelier Tools mencatat siapa yang sebenarnya melakukannya. Siapa pun yang bekerja langsung di extranet Little Hotelier tetap butuh pengguna Little Hotelier sendiri.

::screenshot{src="/images/blog/demo/en/team-hotelier-tools-logins.webp" alt="Pengaturan Team dengan tombol Roles dan Invite someone, kotak yang menjelaskan bahwa login ini hanya untuk Hotelier Tools, bukan Little Hotelier, 1 kursi terpakai, dan tabel tim dengan Demo Manager sebagai Owner, Active" caption="Setiap rekan kerja mendapat login dan peran Hotelier Tools sendiri; kata sandi Little Hotelier tetap di tangan pemilik." path="/settings/team"}
::

::demo-cta{path="/credentials/hotelier-advanced"}
::

Dashboard gratis untuk setiap hotel sampai penagihan dimulai pada 10 Januari 2027.

::callout{type="info" title="Tool independen"}
Hotelier Tools tidak berafiliasi dengan atau didukung oleh SiteMinder maupun Little Hotelier. Layanan ini terhubung memakai pengguna Little Hotelier yang dibuat dan dikendalikan oleh hotel Anda, dan bisa dinonaktifkan kapan saja.
::

Lihat juga: [API Little Hotelier](/blog/little-hotelier-api), [menghubungkan Claude ke Little Hotelier](/blog/connect-claude-to-little-hotelier), [alamat email hotel untuk login dan invoice](/blog/hotel-email-address).

## Ringkasan

- Di Little Hotelier: nama properti > **Manage users** > **Add user**, di perangkat tepercaya; email aktivasi berlaku 24 jam.
- **Admin** punya semuanya; **General** hanya mendapat izin yang Anda centang per aplikasi.
- MFA wajib dalam 30 hari; kode SMS dan email tidak didukung.
- Beri tool pengguna sendiri, bukan kata sandi Anda. Di Hotelier Tools, itulah **Advanced** account: tempelkan tautan undangan dan ia membuat kata sandi serta verifikasi dua langkah sendiri.
- Undangan ke alamat privat `lh-…` segera hadir; saat ini pesan-pesan itu ditahan untuk manusia.
- Rekan kerja mendapat login tim Hotelier Tools dengan peran, bukan kata sandi Little Hotelier Anda.
