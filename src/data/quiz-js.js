export const quizJS = [
  {
    id: 'level_1', nama: 'Level 1', judul: 'Variabel', icon: '⚡',
    deskripsi: 'Variabel & tipe data (sesuai materi Variabel)',
    soal: [
      { pertanyaan: 'Kata kunci variabel yang BISA diubah?', pilihan: ['const', 'let', 'fixed', 'var tetap'], jawaban: 1, penjelasan: 'let bisa diubah nilainya.' },
      { pertanyaan: 'Kata kunci variabel yang TIDAK bisa diubah?', pilihan: ['let', 'var', 'const', 'fixed'], jawaban: 2, penjelasan: 'const tidak bisa diubah setelah dibuat.' },
      { pertanyaan: 'Tipe data untuk teks seperti "Halo"?', pilihan: ['number', 'string', 'boolean', 'array'], jawaban: 1, penjelasan: 'string = tipe data teks.' },
      { pertanyaan: 'Tipe data untuk angka seperti 25?', pilihan: ['number', 'string', 'boolean', 'object'], jawaban: 0, penjelasan: 'number = tipe data angka.' },
      { pertanyaan: 'Tipe data true/false?', pilihan: ['string', 'number', 'boolean', 'array'], jawaban: 2, penjelasan: 'boolean = true/false.' },
    ],
  },
  {
    id: 'level_2', nama: 'Level 2', judul: 'Operator', icon: '➕',
    deskripsi: 'Operasi & perbandingan (sesuai materi Operator)',
    soal: [
      { pertanyaan: 'Hasil dari 5 + 3 adalah?', pilihan: ['8', '53', 'error', '15'], jawaban: 0, penjelasan: '+ = penjumlahan. 5+3=8.' },
      { pertanyaan: 'Hasil dari "Halo" + "!" adalah?', pilihan: ['Halo!', 'Halo !', 'error', 'Halo'], jawaban: 0, penjelasan: '+ menggabungkan teks.' },
      { pertanyaan: 'Hasil dari 10 % 3 adalah?', pilihan: ['1', '3', '0', '10'], jawaban: 0, penjelasan: '% = sisa bagi. 10 % 3 = 1.' },
      { pertanyaan: 'Hasil dari 5 > 3 adalah?', pilihan: ['true', 'false', 'error', '5'], jawaban: 0, penjelasan: '5 lebih besar dari 3 = true.' },
      { pertanyaan: 'Operator untuk cek sama dengan (nilai & tipe)?', pilihan: ['=', '==', '===', '=>'], jawaban: 2, penjelasan: '=== membandingkan nilai dan tipe.' },
    ],
  },
  {
    id: 'level_3', nama: 'Level 3', judul: 'If-Else', icon: '🔀',
    deskripsi: 'Percabangan logika (sesuai materi Logika If-Else)',
    soal: [
      { pertanyaan: 'Kata kunci untuk kondisi di JavaScript?', pilihan: ['when', 'if', 'check', 'case'], jawaban: 1, penjelasan: 'if untuk membuat kondisi.' },
      { pertanyaan: 'Kondisi if (x > 5) akan jalan jika?', pilihan: ['x lebih dari 5', 'x kurang dari 5', 'x = 5', 'x = 0'], jawaban: 0, penjelasan: 'x > 5 = x lebih besar dari 5.' },
      { pertanyaan: 'else dijalankan kapan?', pilihan: ['Kondisi true', 'Kondisi false', 'Selalu', 'Tidak pernah'], jawaban: 1, penjelasan: 'else = ketika kondisi if tidak terpenuhi.' },
      { pertanyaan: 'else if berguna untuk?', pilihan: ['Kondisi tambahan', 'Menghentikan', 'Mengulang', 'Variabel'], jawaban: 0, penjelasan: 'else if = kondisi alternatif.' },
      { pertanyaan: 'Kondisi harus menghasilkan nilai?', pilihan: ['Angka', 'Teks', 'true/false', 'Apapun'], jawaban: 2, penjelasan: 'Kondisi harus boolean (true/false).' },
    ],
  },
  {
    id: 'level_4', nama: 'Level 4', judul: 'Array & Loop', icon: '📚',
    deskripsi: 'Array & perulangan (sesuai materi Array & Loop)',
    soal: [
      { pertanyaan: 'Array didefinisikan dengan tanda?', pilihan: ['{}', '[]', '()', '<>'], jawaban: 1, penjelasan: '[] untuk array.' },
      { pertanyaan: 'Index array dimulai dari angka?', pilihan: ['0', '1', '2', '-1'], jawaban: 0, penjelasan: 'Index array mulai dari 0.' },
      { pertanyaan: 'Properti untuk panjang array?', pilihan: ['.size', '.length', '.count', '.total'], jawaban: 1, penjelasan: '.length = panjang array.' },
      { pertanyaan: 'Loop untuk mengulang perintah?', pilihan: ['if', 'for', 'return', 'const'], jawaban: 1, penjelasan: 'for = perulangan.' },
      { pertanyaan: 'Kata kunci untuk menghentikan loop?', pilihan: ['stop', 'break', 'end', 'exit'], jawaban: 1, penjelasan: 'break = hentikan loop.' },
    ],
  },
  {
    id: 'level_5', nama: 'Level 5', judul: 'Fungsi', icon: '🔧',
    deskripsi: 'Fungsi & parameter (sesuai materi Fungsi)',
    soal: [
      { pertanyaan: 'Kata kunci untuk membuat fungsi?', pilihan: ['def', 'func', 'function', 'make'], jawaban: 2, penjelasan: 'function diikuti nama, kurung, dan isi.' },
      { pertanyaan: 'Bagaimana cara memanggil fungsi?', pilihan: ['nama()', 'call nama', 'nama{}', 'do nama'], jawaban: 0, penjelasan: 'nama() = panggil fungsi.' },
      { pertanyaan: 'Parameter pada fungsi adalah?', pilihan: ['Hasil fungsi', 'Input fungsi', 'Nama fungsi', 'Komentar'], jawaban: 1, penjelasan: 'Parameter = input yang dikirim ke fungsi.' },
      { pertanyaan: 'Kata kunci untuk mengembalikan nilai?', pilihan: ['send', 'give', 'return', 'output'], jawaban: 2, penjelasan: 'return = kembalikan nilai dari fungsi.' },
      { pertanyaan: 'console.log() berfungsi untuk?', pilihan: ['Simpan data', 'Tampilkan output', 'Hapus data', 'Ubah warna'], jawaban: 1, penjelasan: 'console.log() menampilkan output ke console.' },
    ],
  },
];