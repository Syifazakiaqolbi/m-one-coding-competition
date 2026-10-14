import { quizHTML } from './quiz-html';
import { quizCSS } from './quiz-css';
import { quizJS } from './quiz-js';

export const quizKategori = [
  {
    id: 'html',
    nama: 'HTML',
    icon: '📄',
    warna: 'from-orange-400 to-red-500',
    bg: 'bg-orange-100',
    text: 'text-orange-700',
    deskripsi: 'Belajar struktur website',
    levels: quizHTML,
  },
  {
    id: 'css',
    nama: 'CSS',
    icon: '🎨',
    warna: 'from-blue-400 to-cyan-500',
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    deskripsi: 'Belajar mempercantik tampilan',
    levels: quizCSS,
  },
  {
    id: 'js',
    nama: 'JavaScript',
    icon: '⚡',
    warna: 'from-yellow-400 to-orange-500',
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    deskripsi: 'Belajar logika & interaksi',
    levels: quizJS,
  },
];

// Backwards compat
export const quizLevels = quizHTML;
export const quizData = quizHTML[0].soal;