const STORAGE_KEY = 'codekids_progress';

const defaultProgress = {
  materiSelesai: [],
  quizTerakhir: 0,
  quizTerbaik: 0,
  poin: 0,
  badges: [],
};

export function getProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? { ...defaultProgress, ...JSON.parse(data) } : defaultProgress;
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Gagal simpan progress', e);
  }
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

export function tandaiMateriSelesai(materiId) {
  const p = getProgress();
  if (!p.materiSelesai.includes(materiId)) {
    p.materiSelesai.push(materiId);
    p.poin += 10;
    saveProgress(p);
    cekBadgeBaru();
  }
  return p;
}

export function simpanSkorQuiz(skor, total) {
  const p = getProgress();
  const persen = Math.round((skor / total) * 100);
  p.quizTerakhir = persen;
  if (persen > p.quizTerbaik) p.quizTerbaik = persen;
  p.poin += skor * 5;
  saveProgress(p);
  cekBadgeBaru();
  return p;
}

export const badgeList = [
  {
    id: 'first-step',
    nama: 'Langkah Pertama',
    deskripsi: 'Selesaikan 1 materi pertama',
    icon: '👣',
    syarat: (p) => p.materiSelesai.length >= 1,
  },
  {
    id: 'book-worm',
    nama: 'Kutu Buku',
    deskripsi: 'Selesaikan 3 materi',
    icon: '📚',
    syarat: (p) => p.materiSelesai.length >= 3,
  },
  {
    id: 'master-materi',
    nama: 'Master Materi',
    deskripsi: 'Selesaikan semua materi',
    icon: '🎓',
    syarat: (p) => p.materiSelesai.length >= 6,
  },
  {
    id: 'quiz-rookie',
    nama: 'Quiz Rookie',
    deskripsi: 'Dapat skor quiz minimal 50%',
    icon: '✏️',
    syarat: (p) => p.quizTerbaik >= 50,
  },
  {
    id: 'quiz-master',
    nama: 'Quiz Master',
    deskripsi: 'Dapat skor quiz minimal 90%',
    icon: '🏆',
    syarat: (p) => p.quizTerbaik >= 90,
  },
  {
    id: 'point-collector',
    nama: 'Kolektor Poin',
    deskripsi: 'Kumpulkan 100 poin',
    icon: '💎',
    syarat: (p) => p.poin >= 100,
  },
];

export function cekBadgeBaru() {
  const p = getProgress();
  const baru = [];
  badgeList.forEach((b) => {
    if (!p.badges.includes(b.id) && b.syarat(p)) {
      p.badges.push(b.id);
      baru.push(b);
    }
  });
  if (baru.length > 0) saveProgress(p);
  return baru;
}

export function getBadges() {
  const p = getProgress();
  return badgeList.map((b) => ({
    ...b,
    unlocked: p.badges.includes(b.id),
  }));
}