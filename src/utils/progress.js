import { getCurrentUser } from './auth';

function getStorageKey() {
  const user = getCurrentUser();
  return user ? `codekids_progress_${user.username}` : 'codekids_progress_guest';
}

const defaultProgress = {
  materiSelesai: [],
  quizTerakhir: 0,
  quizTerbaik: 0,
  poin: 0,
  badges: [],
  quizLevels: {
    html: {},
    css: {},
    js: {},
  },
};

export function getProgress() {
  try {
    const data = localStorage.getItem(getStorageKey());
    return data ? { ...defaultProgress, ...JSON.parse(data) } : defaultProgress;
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(getStorageKey(), JSON.stringify(progress));
  } catch (e) {
    console.error('Gagal simpan progress', e);
  }
}

export function resetProgress() {
  localStorage.removeItem(getStorageKey());
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

export function simpanLevelQuiz(kategori, levelId, skor, total) {
  const p = getProgress();
  const persen = Math.round((skor / total) * 100);

  let stars = 0;
  if (persen === 100) stars = 3;
  else if (persen >= 80) stars = 2;
  else if (persen >= 60) stars = 1;

  if (!p.quizLevels[kategori]) p.quizLevels[kategori] = {};

  const existing = p.quizLevels[kategori][levelId] || { bestScore: 0, stars: 0 };

  p.quizLevels[kategori][levelId] = {
    bestScore: Math.max(existing.bestScore, persen),
    stars: Math.max(existing.stars, stars),
    selesai: true,
  };

  p.poin += skor * 5;
  p.quizTerakhir = persen;
  if (persen > p.quizTerbaik) p.quizTerbaik = persen;
  saveProgress(p);
  cekBadgeBaru();
  return p;
}

export function isLevelUnlocked(kategori, levelIndex) {
  if (levelIndex === 0) return true;
  const p = getProgress();
  const prevLevelId = `level_${levelIndex}`;
  return p.quizLevels?.[kategori]?.[prevLevelId]?.selesai === true;
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
    syarat: (p) => p.materiSelesai.length >= 15,
  },
  {
    id: 'html-hero',
    nama: 'HTML Hero',
    deskripsi: 'Lulus semua level HTML',
    icon: '📄',
    syarat: (p) =>
      ['level_1', 'level_2', 'level_3', 'level_4', 'level_5'].every(
        (l) => p.quizLevels?.html?.[l]?.selesai
      ),
  },
  {
    id: 'css-wizard',
    nama: 'CSS Wizard',
    deskripsi: 'Lulus semua level CSS',
    icon: '🎨',
    syarat: (p) =>
      ['level_1', 'level_2', 'level_3', 'level_4', 'level_5'].every(
        (l) => p.quizLevels?.css?.[l]?.selesai
      ),
  },
  {
    id: 'js-master',
    nama: 'JS Master',
    deskripsi: 'Lulus semua level JavaScript',
    icon: '⚡',
    syarat: (p) =>
      ['level_1', 'level_2', 'level_3', 'level_4', 'level_5'].every(
        (l) => p.quizLevels?.js?.[l]?.selesai
      ),
  },
  {
    id: 'perfect-score',
    nama: 'Nilai Sempurna',
    deskripsi: 'Dapat 3 bintang di salah satu level',
    icon: '⭐',
    syarat: (p) => {
      const all = Object.values(p.quizLevels || {}).flatMap((kat) =>
        Object.values(kat || {})
      );
      return all.some((l) => l.stars === 3);
    },
  },
  {
    id: 'point-collector',
    nama: 'Kolektor Poin',
    deskripsi: 'Kumpulkan 500 poin',
    icon: '💎',
    syarat: (p) => p.poin >= 500,
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