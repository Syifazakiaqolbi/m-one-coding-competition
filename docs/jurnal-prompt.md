# Jurnal Prompt Terkurasi — CodeKids

**M-ONE Telkomsel Coding Competition 2026**
**Kategori Umum · Innovating Education Through Technology**
**Subtema: Web Education for Kids (SD)**

---

**Peserta:** Syifa Zakia Qolbi
**Tanggal Pengerjaan:** 11-14 Oktober 2026
**Repository:** https://github.com/Syifazakiaqolbi/m-one-coding-competition
**Website Live:** https://m-one-coding-competition.vercel.app
**AI Assistant:** DeepSeek

---

## Prompt 1 — Ide / PRD

- **Tanggal:** 11 Oktober 2026
- **Jam:** 09.30 WIB

### Tujuan
Menyusun PRD lengkap untuk website edukasi coding anak SD.

### Prompt
Bertindaklah sebagai senior product manager dan full-stack architect.
Buatkan PRD lengkap untuk website edukasi coding untuk anak SD.
Tema: Innovating Education Through Technology.
Cakup: problem statement, target audiens, fitur utama (landing page, materi HTML/CSS/JS, quiz interaktif, playground, progress tracking, login), tech stack, struktur folder, prinsip responsif, checklist aksesibilitas, dan definisi selesai.
Output dalam format Markdown.

### Hasil dari AI
PRD lengkap dengan 6 fitur utama, stack React + Vite + Tailwind, dan target audiens anak SD usia 6-12 tahun.

### Yang saya ubah
Menambahkan fitur gamifikasi (badge, poin, level) setelah diskusi lanjutan.

---

## Prompt 2 — Debugging

- **Tanggal:** 11 Oktober 2026
- **Jam:** 13.00 WIB

### Tujuan
Memperbaiki error CSS dan routing React Router.

### Prompt yang saya tulis ke AI
Saya dapat error di Vite + Tailwind:
"[vite:css][postcss] @import statements must precede all other statements"
Selain itu React Router saya tidak berfungsi — link diklik tidak pindah halaman.
Tolong perbaiki keduanya. Jelaskan akar masalahnya.

### Hasil dari AI
`@import` harus dipindah ke baris paling atas, `BrowserRouter` ditambahkan di `main.jsx`, dan semua tag `<a href>` diganti dengan `<Link>`.

### Yang saya ubah
Menambahkan file `vercel.json` supaya refresh di route SPA tidak error 404.

---

## Prompt 3 — Audit & Optimasi

- **Tanggal:** 11 Oktober 2026
- **Jam:** 18.00 WIB

### Tujuan
Audit Lighthouse dan optimasi performa + aksesibilitas.

### Prompt yang saya tulis ke AI
Audit website Vite + React saya untuk performa, SEO, aksesibilitas, dan kualitas kode.
Skor Lighthouse saat ini: Performance 33, Accessibility 80, Best Practices 100, SEO 91.
Periksa: ukuran bundle, lazy loading, semantic HTML, ARIA labels, meta tag, optimasi gambar.
Berikan daftar perbaikan berurutan dengan contoh kode.

### Hasil dari AI
Performa naik ke 84, aksesibilitas naik ke 93. Perbaikan utama: tambah `aria-label` di tombol icon, ganti `lang="en"` jadi `lang="id"`, dan lazy loading halaman.

### Yang saya ubah
Menambahkan `React.lazy` + `Suspense` untuk code splitting per halaman.

---

## Prompt 4 — Finishing

- **Tanggal:** 11 Oktober 2026
- **Jam:** 15.00 WIB

### Tujuan
Mempercantik UI/UX dengan animasi, loading screen, dan halaman tambahan.

### Prompt yang saya tulis ke AI
Percantik UI/UX website edukasi coding anak saya.
Tambahkan: animasi masuk yang halus, efek hover, micro-interaction untuk quiz, loading screen dengan logo animasi, section testimoni, section "Cara Kerja", halaman 404, halaman Sertifikat, halaman Leaderboard, dan halaman Login dengan pilihan avatar.
Gunakan Framer Motion + Tailwind. Playful tapi tidak generik.

### Hasil dari AI
Loading screen animasi, 4 section di Home, halaman Tentang, 404, Sertifikat, Leaderboard, Login, dan efek hover di semua kartu.

### Yang saya ubah
Menyesuaikan warna agar konsisten dengan brand (ungu indigo + kuning).

---

## Prompt 5 — Bebas (Inovasi)

- **Tanggal:** 11-13 Oktober 2026
- **Jam:** 16.00 WIB

### Tujuan
Menambahkan fitur inovatif: gamifikasi, login, quiz 5 level, dan sertifikat.

### Prompt yang saya tulis ke AI
Sarankan dan implementasikan fitur inovatif untuk website coding anak saya yang melampaui ketentuan dasar:

Gamifikasi: 8 badge, poin, sistem level (50 poin = 1 level), pakai localStorage.

Login: username + 16 pilihan avatar emoji, progress per user, halaman profil.

Quiz 5 level per kategori (HTML/CSS/JS) = 15 level × 5 soal = 75 soal, dengan sistem unlock, rating bintang (60%/80%/100%), timer 20 detik, streak counter, dan auto-lanjut saat jawaban benar.

Sertifikat: otomatis terbuka setelah semua materi selesai + quiz minimal 70%, dengan nama user.

Leaderboard: podium top 3.

Syarat: semua soal quiz harus sesuai dengan materi yang dipelajari.
Berikan rencana implementasi dan kodenya.

### Hasil dari AI
- Sistem gamifikasi 8 badge, poin, dan progress tracking per user
- Login dengan 16 avatar, halaman profil dengan edit nama & avatar
- Quiz 15 level (5 HTML + 5 CSS + 5 JS) = 75 soal yang selaras dengan materi
- Sertifikat digital dengan nama user + siap print
- Leaderboard dengan animasi podium

### Yang saya ubah
Menambahkan sistem level, bonus streak, dan custom Toast notification untuk mengganti alert browser yang jadul.

---

## Kesimpulan

Melalui 5 prompt terkurasi ini, website **CodeKids** berhasil dibangun dari nol:

- Landing page dengan 4 section
- 15 materi belajar (5 HTML, 5 CSS, 5 JavaScript)
- Quiz 15 level (5 × 3 kategori) — 75 soal selaras materi
- Coding playground dengan live preview
- Login system dengan pilihan avatar
- Halaman profil dengan statistik
- Progress tracking + gamifikasi (8 badge, poin, level)
- Sertifikat digital
- Leaderboard dengan podium
- Deploy ke Vercel dengan CI/CD otomatis

**Skor Lighthouse final:**
- Performance: 84
- Accessibility: 93
- Best Practices: 100
- SEO: 91

---

**Disusun oleh:** Syifa Zakia Qolbi
**Tanggal:** 14 Oktober 2026
**Untuk:** M-ONE Telkomsel Coding Competition 2026