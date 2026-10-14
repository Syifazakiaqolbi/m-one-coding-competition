export const quizHTML = [
  {
    id: 'level_1', nama: 'Level 1', judul: 'HTML Dasar', icon: '📄',
    deskripsi: 'Tag dasar HTML (sesuai materi Pengenalan HTML)',
    soal: [
      { pertanyaan: 'Tag HTML untuk judul besar?', pilihan: ['<p>', '<h1>', '<div>', '<span>'], jawaban: 1, penjelasan: 'Tag <h1> untuk judul utama.' },
      { pertanyaan: 'Tag HTML untuk paragraf?', pilihan: ['<p>', '<para>', '<text>', '<par>'], jawaban: 0, penjelasan: '<p> = paragraph.' },
      { pertanyaan: 'Tag HTML untuk membuat baris baru?', pilihan: ['<br>', '<lb>', '<newline>', '<break>'], jawaban: 0, penjelasan: '<br> untuk line break.' },
      { pertanyaan: 'Bagaimana cara menulis komentar di HTML?', pilihan: ['// komentar', '/* komentar */', '<!-- komentar -->', '# komentar'], jawaban: 2, penjelasan: 'Komentar HTML: <!-- -->.' },
      { pertanyaan: 'Tag <h1> yang benar ditutup dengan?', pilihan: ['<h1>', '</h1>', '<h1/>', '</h1 >'], jawaban: 1, penjelasan: 'Tag penutup pakai garis miring: </h1>.' },
    ],
  },
  {
    id: 'level_2', nama: 'Level 2', judul: 'Gambar HTML', icon: '🖼️',
    deskripsi: 'Menampilkan gambar (sesuai materi Menambahkan Gambar)',
    soal: [
      { pertanyaan: 'Tag HTML untuk menampilkan gambar?', pilihan: ['<image>', '<img>', '<picture>', '<photo>'], jawaban: 1, penjelasan: 'Tag <img> untuk gambar.' },
      { pertanyaan: 'Atribut untuk lokasi gambar?', pilihan: ['link', 'href', 'src', 'path'], jawaban: 2, penjelasan: 'src = source.' },
      { pertanyaan: 'Atribut untuk teks alternatif gambar?', pilihan: ['title', 'alt', 'text', 'name'], jawaban: 1, penjelasan: 'alt = teks pengganti kalau gambar gagal dimuat.' },
      { pertanyaan: 'Atribut untuk mengatur lebar gambar?', pilihan: ['size', 'width', 'wide', 'w'], jawaban: 1, penjelasan: 'Atribut width untuk lebar gambar.' },
      { pertanyaan: 'Apakah tag <img> perlu tag penutup?', pilihan: ['Ya, </img>', 'Tidak perlu', 'Ya, <img/>', 'Tergantung'], jawaban: 1, penjelasan: 'Tag <img> adalah self-closing, tidak butuh penutup.' },
    ],
  },
  {
    id: 'level_3', nama: 'Level 3', judul: 'Link HTML', icon: '🔗',
    deskripsi: 'Membuat link (sesuai materi Membuat Link)',
    soal: [
      { pertanyaan: 'Tag HTML untuk membuat link?', pilihan: ['<link>', '<a>', '<url>', '<href>'], jawaban: 1, penjelasan: 'Tag <a> = anchor untuk link.' },
      { pertanyaan: 'Atribut untuk tujuan link?', pilihan: ['src', 'target', 'href', 'to'], jawaban: 2, penjelasan: 'href = hypertext reference.' },
      { pertanyaan: 'target="_blank" akan?', pilihan: ['Buka di tab baru', 'Buka di jendela kecil', 'Tutup tab', 'Reload halaman'], jawaban: 0, penjelasan: 'target="_blank" buka link di tab baru.' },
      { pertanyaan: 'Contoh link ke halaman lain di website sendiri?', pilihan: ['href="tentang.html"', 'href="external"', 'src="tentang"', 'link="tentang"'], jawaban: 0, penjelasan: 'Link ke halaman lokal cukup tulis nama file HTML-nya.' },
      { pertanyaan: 'Teks yang bisa diklik ditulis di mana?', pilihan: ['Dalam atribut href', 'Antara <a> dan </a>', 'Di dalam title', 'Setelah tag'], jawaban: 1, penjelasan: 'Teks link ada di antara <a> dan </a>.' },
    ],
  },
  {
    id: 'level_4', nama: 'Level 4', judul: 'List & Tabel', icon: '📋',
    deskripsi: 'Membuat daftar dan tabel (sesuai materi List & Tabel)',
    soal: [
      { pertanyaan: 'Tag list dengan bullet?', pilihan: ['<ol>', '<ul>', '<list>', '<li>'], jawaban: 1, penjelasan: '<ul> = unordered list (bullet).' },
      { pertanyaan: 'Tag list dengan nomor?', pilihan: ['<ol>', '<ul>', '<nl>', '<num>'], jawaban: 0, penjelasan: '<ol> = ordered list (nomor otomatis).' },
      { pertanyaan: 'Tag untuk item di dalam list?', pilihan: ['<item>', '<li>', '<entry>', '<list-item>'], jawaban: 1, penjelasan: '<li> = list item.' },
      { pertanyaan: 'Tag untuk membuat tabel?', pilihan: ['<grid>', '<table>', '<tab>', '<data>'], jawaban: 1, penjelasan: '<table> untuk tabel.' },
      { pertanyaan: 'Tag untuk baris di tabel?', pilihan: ['<td>', '<tr>', '<row>', '<th>'], jawaban: 1, penjelasan: '<tr> = table row (baris).' },
    ],
  },
  {
    id: 'level_5', nama: 'Level 5', judul: 'Form HTML', icon: '📝',
    deskripsi: 'Membuat form (sesuai materi Form & Input)',
    soal: [
      { pertanyaan: 'Tag pembungkus form?', pilihan: ['<input>', '<form>', '<field>', '<entry>'], jawaban: 1, penjelasan: '<form> untuk membungkus form.' },
      { pertanyaan: 'Tag untuk kolom input?', pilihan: ['<text>', '<input>', '<field>', '<type>'], jawaban: 1, penjelasan: '<input> untuk kolom isian.' },
      { pertanyaan: 'Atribut untuk teks petunjuk di input?', pilihan: ['title', 'placeholder', 'hint', 'label'], jawaban: 1, penjelasan: 'placeholder = teks petunjuk sebelum diisi.' },
      { pertanyaan: 'Untuk input panjang (alamat), pakai?', pilihan: ['<input>', '<textarea>', '<longinput>', '<input type="long">'], jawaban: 1, penjelasan: '<textarea> untuk input panjang.' },
      { pertanyaan: 'Tombol kirim form bisa pakai?', pilihan: ['<button> atau <input type="submit">', 'Hanya <button>', 'Hanya <send>', '<submit>'], jawaban: 0, penjelasan: 'Bisa pakai <button> atau <input type="submit">.' },
    ],
  },
];