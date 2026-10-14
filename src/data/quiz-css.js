export const quizCSS = [
  {
    id: 'level_1', nama: 'Level 1', judul: 'Warna CSS', icon: '🎨',
    deskripsi: 'Warna & latar (sesuai materi Warna dengan CSS)',
    soal: [
      { pertanyaan: 'Properti CSS untuk warna teks?', pilihan: ['background', 'color', 'text-color', 'font'], jawaban: 1, penjelasan: 'color = warna teks.' },
      { pertanyaan: 'Properti CSS untuk warna latar?', pilihan: ['background-color', 'color-bg', 'bg', 'back'], jawaban: 0, penjelasan: 'background-color untuk warna latar belakang.' },
      { pertanyaan: 'Format warna HEX yang benar?', pilihan: ['rgb(255,0,0)', '#FF0000', 'color:red', 'red(255)'], jawaban: 1, penjelasan: 'HEX: #RRGGBB.' },
      { pertanyaan: 'Format warna RGB ditulis?', pilihan: ['rgb(255, 0, 0)', '#rgb', 'R=255', 'color:255'], jawaban: 0, penjelasan: 'rgb(red, green, blue).' },
      { pertanyaan: 'Kata kunci untuk warna tembus pandang?', pilihan: ['clear', 'transparent', 'none', 'invisible'], jawaban: 1, penjelasan: 'transparent = tembus pandang.' },
    ],
  },
  {
    id: 'level_2', nama: 'Level 2', judul: 'Font & Teks', icon: '🔤',
    deskripsi: 'Jenis huruf & format (sesuai materi Font & Teks)',
    soal: [
      { pertanyaan: 'Properti CSS untuk jenis huruf?', pilihan: ['font-type', 'font-family', 'font-name', 'type'], jawaban: 1, penjelasan: 'font-family mengatur jenis huruf.' },
      { pertanyaan: 'Properti CSS untuk ukuran huruf?', pilihan: ['font-size', 'text-size', 'size', 'font-w'], jawaban: 0, penjelasan: 'font-size mengatur ukuran huruf.' },
      { pertanyaan: 'font-weight: bold akan membuat teks?', pilihan: ['Miring', 'Tebal', 'Garis bawah', 'Kecil'], jawaban: 1, penjelasan: 'bold = tebal.' },
      { pertanyaan: 'text-align: center akan mengatur teks ke?', pilihan: ['Kiri', 'Tengah', 'Kanan', 'Justify'], jawaban: 1, penjelasan: 'center = rata tengah.' },
      { pertanyaan: 'text-decoration: underline akan membuat?', pilihan: ['Miring', 'Tebal', 'Garis bawah', 'Coret'], jawaban: 2, penjelasan: 'underline = garis bawah.' },
    ],
  },
  {
    id: 'level_3', nama: 'Level 3', judul: 'Box Model', icon: '📦',
    deskripsi: 'Padding, margin, border (sesuai materi Box Model)',
    soal: [
      { pertanyaan: 'padding adalah jarak?', pilihan: ['Dalam elemen', 'Luar elemen', 'Garis tepi', 'Tinggi'], jawaban: 0, penjelasan: 'padding = jarak dalam (konten ke border).' },
      { pertanyaan: 'margin adalah jarak?', pilihan: ['Dalam elemen', 'Luar elemen', 'Garis tepi', 'Lebar'], jawaban: 1, penjelasan: 'margin = jarak luar (border ke elemen lain).' },
      { pertanyaan: 'Properti untuk garis tepi elemen?', pilihan: ['line', 'border', 'outline', 'edge'], jawaban: 1, penjelasan: 'border untuk garis tepi.' },
      { pertanyaan: 'border-radius berfungsi untuk?', pilihan: ['Mempertebal', 'Membuat sudut bulat', 'Mengubah warna', 'Menambah bayangan'], jawaban: 1, penjelasan: 'border-radius = sudut membulat.' },
      { pertanyaan: 'Properti untuk bayangan elemen?', pilihan: ['shadow', 'box-shadow', 'drop', 'dark'], jawaban: 1, penjelasan: 'box-shadow = bayangan elemen.' },
    ],
  },
  {
    id: 'level_4', nama: 'Level 4', judul: 'Flexbox Layout', icon: '📐',
    deskripsi: 'Flexbox & posisi (sesuai materi Layout Flexbox)',
    soal: [
      { pertanyaan: 'Bagaimana cara mengaktifkan Flexbox?', pilihan: ['flex: on', 'display: flex', 'layout: flex', 'use-flex: true'], jawaban: 1, penjelasan: 'display: flex mengaktifkan Flexbox.' },
      { pertanyaan: 'justify-content mengatur posisi?', pilihan: ['Vertikal', 'Horizontal', 'Warna', 'Font'], jawaban: 1, penjelasan: 'justify-content = posisi horizontal.' },
      { pertanyaan: 'align-items mengatur posisi?', pilihan: ['Vertikal', 'Horizontal', 'Warna', 'Font'], jawaban: 0, penjelasan: 'align-items = posisi vertikal.' },
      { pertanyaan: 'flex-direction: column akan menyusun elemen?', pilihan: ['Horizontal', 'Vertikal', 'Diagonal', 'Random'], jawaban: 1, penjelasan: 'column = vertikal (atas ke bawah).' },
      { pertanyaan: 'Properti gap pada Flexbox untuk?', pilihan: ['Jarak antar elemen', 'Warna', 'Border', 'Font'], jawaban: 0, penjelasan: 'gap = jarak antar anak elemen.' },
    ],
  },
  {
    id: 'level_5', nama: 'Level 5', judul: 'Animasi CSS', icon: '✨',
    deskripsi: 'Transisi & efek (sesuai materi Animasi & Efek)',
    soal: [
      { pertanyaan: 'transition: 0.3s berfungsi untuk?', pilihan: ['Animasi scroll', 'Perubahan halus 0.3 detik', 'Warna', 'Font'], jawaban: 1, penjelasan: 'transition = transisi halus.' },
      { pertanyaan: 'hover pada CSS akan aktif saat?', pilihan: ['Diklik', 'Mouse di atas elemen', 'Scroll', 'Load'], jawaban: 1, penjelasan: 'hover = saat mouse di atas elemen.' },
      { pertanyaan: 'opacity: 0.5 akan membuat elemen?', pilihan: ['Tembus 50%', 'Hilang total', 'Terlihat penuh', 'Berwarna'], jawaban: 0, penjelasan: 'opacity 0.5 = tembus 50%.' },
      { pertanyaan: 'z-index: 100 berfungsi untuk?', pilihan: ['Warna', 'Urutan tumpukan (layer)', 'Ukuran', 'Font'], jawaban: 1, penjelasan: 'z-index = urutan layer (mana yang di depan).' },
      { pertanyaan: 'transform: scale(1.1) akan?', pilihan: ['Putar', 'Perbesar 110%', 'Kecilkan', 'Geser'], jawaban: 1, penjelasan: 'scale(1.1) = perbesar jadi 110%.' },
    ],
  },
];