export const materiList = [
  {
    id: 'html-dasar',
    kategori: 'HTML',
    judul: 'Pengenalan HTML',
    deskripsi: 'Belajar tag dasar HTML untuk membuat struktur website.',
    warna: 'bg-orange-100 text-orange-600',
    icon: '📄',
    level: 'Pemula',
    durasi: '10 menit',
    konten: [
      {
        tipe: 'teks',
        isi: 'HTML (HyperText Markup Language) adalah bahasa dasar untuk membuat website. Setiap website yang kamu lihat di internet dibuat dengan HTML!',
      },
      {
        tipe: 'kode',
        bahasa: 'html',
        isi: '<h1>Halo, Dunia!</h1>\n<p>Ini website pertamaku</p>',
      },
      {
        tipe: 'teks',
        isi: 'Tag <h1> digunakan untuk judul besar, sedangkan <p> digunakan untuk paragraf.',
      },
    ],
  },
  {
    id: 'css-warna',
    kategori: 'CSS',
    judul: 'Mewarnai Website dengan CSS',
    deskripsi: 'Belajar memberi warna dan gaya pada website dengan CSS.',
    warna: 'bg-blue-100 text-blue-600',
    icon: '🎨',
    level: 'Pemula',
    durasi: '12 menit',
    konten: [
      {
        tipe: 'teks',
        isi: 'CSS (Cascading Style Sheets) digunakan untuk mempercantik tampilan website. Dengan CSS, kita bisa mengubah warna, ukuran, dan posisi elemen.',
      },
      {
        tipe: 'kode',
        bahasa: 'css',
        isi: 'h1 {\n  color: blue;\n  font-size: 40px;\n}',
      },
      {
        tipe: 'teks',
        isi: 'Kode di atas membuat semua tag <h1> berwarna biru dengan ukuran 40 pixel.',
      },
    ],
  },
  {
    id: 'js-variabel',
    kategori: 'JavaScript',
    judul: 'Variabel di JavaScript',
    deskripsi: 'Belajar menyimpan data dengan variabel.',
    warna: 'bg-yellow-100 text-yellow-600',
    icon: '⚡',
    level: 'Pemula',
    durasi: '15 menit',
    konten: [
      {
        tipe: 'teks',
        isi: 'Variabel adalah tempat untuk menyimpan data. Bayangkan seperti kotak yang bisa diisi apa saja!',
      },
      {
        tipe: 'kode',
        bahasa: 'javascript',
        isi: 'let nama = "Andi";\nlet umur = 10;\nconsole.log("Halo, " + nama);',
      },
      {
        tipe: 'teks',
        isi: 'Kita menggunakan let untuk membuat variabel. Setelah itu kita bisa pakai variabel tersebut di mana saja.',
      },
    ],
  },
  {
    id: 'html-gambar',
    kategori: 'HTML',
    judul: 'Menambahkan Gambar',
    deskripsi: 'Cara menampilkan gambar di website.',
    warna: 'bg-orange-100 text-orange-600',
    icon: '🖼️',
    level: 'Pemula',
    durasi: '8 menit',
    konten: [
      {
        tipe: 'teks',
        isi: 'Gambar membuat website jadi lebih menarik! Kita pakai tag <img> untuk menampilkan gambar.',
      },
      {
        tipe: 'kode',
        bahasa: 'html',
        isi: '<img src="kucing.jpg" alt="Kucing lucu">',
      },
      {
        tipe: 'teks',
        isi: 'src adalah lokasi gambar, dan alt adalah teks yang muncul kalau gambar gagal dimuat.',
      },
    ],
  },
  {
    id: 'css-layout',
    kategori: 'CSS',
    judul: 'Mengatur Layout',
    deskripsi: 'Belajar mengatur posisi elemen dengan Flexbox.',
    warna: 'bg-blue-100 text-blue-600',
    icon: '📐',
    level: 'Menengah',
    durasi: '20 menit',
    konten: [
      {
        tipe: 'teks',
        isi: 'Flexbox adalah cara mudah untuk mengatur posisi elemen. Kita bisa membuat elemen berjejer atau bertumpuk dengan rapi.',
      },
      {
        tipe: 'kode',
        bahasa: 'css',
        isi: '.container {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}',
      },
      {
        tipe: 'teks',
        isi: 'justify-content: center membuat semua elemen di tengah. gap memberi jarak antar elemen.',
      },
    ],
  },
  {
    id: 'js-fungsi',
    kategori: 'JavaScript',
    judul: 'Fungsi di JavaScript',
    deskripsi: 'Belajar membuat fungsi untuk menjalankan perintah.',
    warna: 'bg-yellow-100 text-yellow-600',
    icon: '🔧',
    level: 'Menengah',
    durasi: '18 menit',
    konten: [
      {
        tipe: 'teks',
        isi: 'Fungsi adalah blok kode yang bisa dipanggil berkali-kali. Seperti resep masakan yang bisa dipakai berulang!',
      },
      {
        tipe: 'kode',
        bahasa: 'javascript',
        isi: 'function sapa(nama) {\n  return "Halo, " + nama + "!";\n}\n\nconsole.log(sapa("Andi"));',
      },
      {
        tipe: 'teks',
        isi: 'Fungsi sapa menerima nama dan mengembalikan sapaan. Kita panggil dengan sapa("Andi").',
      },
    ],
  },
];