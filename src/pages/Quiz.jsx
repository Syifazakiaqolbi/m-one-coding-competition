import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle, XCircle, Trophy, RotateCcw, ArrowRight, ArrowLeft,
  Flame, Clock, Zap, Lock, Star, Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { quizKategori } from '../data/quiz';
import { simpanLevelQuiz, isLevelUnlocked, getProgress } from '../utils/progress';

const TIMER = 20;

export default function Quiz() {
  const [kategoriIdx, setKategoriIdx] = useState(null);
  const [levelIdx, setLevelIdx] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER);
  const [progress, setProgress] = useState(getProgress());

  const kategori = kategoriIdx !== null ? quizKategori[kategoriIdx] : null;
  const level = kategori && levelIdx !== null ? kategori.levels[levelIdx] : null;
  const currentQuiz = level?.soal[currentIndex];
  const isCorrect = selected === currentQuiz?.jawaban;

  useEffect(() => {
    if (!level || isAnswered || isFinished) return;
    if (timeLeft === 0) { handleTimeUp(); return; }
    const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, isAnswered, isFinished, level]);

  const handleTimeUp = () => { setSelected(-1); setIsAnswered(true); setStreak(0); };
  const handleSelect = (i) => { if (!isAnswered) setSelected(i); };

  const handleSubmit = () => {
    if (selected === null) return;
    setIsAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
      const ns = streak + 1;
      setStreak(ns);
      if (ns > maxStreak) setMaxStreak(ns);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);
      setTimeout(() => handleNext(), 1200);
    } else setStreak(0);
  };

  const handleNext = () => {
    if (currentIndex < level.soal.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null); setIsAnswered(false); setTimeLeft(TIMER);
    } else finishLevel();
  };

  const finishLevel = () => {
    setIsFinished(true);
    simpanLevelQuiz(kategori.id, level.id, score, level.soal.length);
    setProgress(getProgress());
  };

  const resetLevel = () => {
    setCurrentIndex(0); setSelected(null); setIsAnswered(false);
    setScore(0); setIsFinished(false); setStreak(0); setMaxStreak(0);
    setTimeLeft(TIMER);
  };

  const backToCategories = () => {
    setKategoriIdx(null); setLevelIdx(null); resetLevel();
    setProgress(getProgress());
  };

  const backToLevels = () => {
    setLevelIdx(null); resetLevel();
    setProgress(getProgress());
  };

  // ===== STEP 1: PILIH KATEGORI =====
  if (kategoriIdx === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-yellow-50 to-pink-100 pt-20 pb-10 relative overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">🎮</div>
        <div className="absolute bottom-40 right-10 text-6xl opacity-20 animate-pulse">🏆</div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} className="inline-block text-7xl mb-3">
              🎯
            </motion.div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">
              Pilih <span className="text-primary">Kategori</span> Quiz!
            </h1>
            <p className="text-gray-600 font-semibold">Setiap kategori punya 5 level seru!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {quizKategori.map((k, i) => {
              const totalStars = Object.values(progress.quizLevels?.[k.id] || {}).reduce((sum, l) => sum + (l.stars || 0), 0);
              const maxStars = k.levels.length * 3;
              return (
                <motion.button
                  key={k.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setKategoriIdx(i)}
                  className="bg-white rounded-3xl p-6 shadow-xl border-4 border-white text-center relative overflow-hidden"
                >
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${k.warna} rounded-full opacity-20 blur-2xl`}></div>
                  <div className="relative">
                    <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }} className={`w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br ${k.warna} flex items-center justify-center text-4xl shadow-lg`}>
                      {k.icon}
                    </motion.div>
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{k.nama}</h2>
                    <p className="text-gray-600 font-semibold text-sm mb-3">{k.deskripsi}</p>
                    <div className={`inline-flex items-center gap-1 ${k.bg} ${k.text} font-extrabold px-3 py-1.5 rounded-full text-xs`}>
                      <Star size={12} className="fill-current" /> {totalStars}/{maxStars}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ===== STEP 2: PILIH LEVEL =====
  if (levelIdx === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-yellow-50 to-pink-100 pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={backToCategories}
            className="mb-5 inline-flex items-center gap-2 bg-white text-gray-700 font-extrabold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform text-sm"
          >
            <ArrowLeft size={16} /> Ganti Kategori
          </motion.button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
            <div className={`inline-block bg-gradient-to-r ${kategori.warna} text-white font-extrabold px-5 py-2 rounded-full text-sm mb-3`}>
              {kategori.icon} Quiz {kategori.nama}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Pilih <span className="text-primary">Level</span>!
            </h1>
            <p className="text-gray-600 font-semibold mt-1">Selesaikan level untuk membuka level berikutnya</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {kategori.levels.map((lv, i) => {
              const unlocked = isLevelUnlocked(kategori.id, i);
              const data = progress.quizLevels?.[kategori.id]?.[lv.id] || {};
              const stars = data.stars || 0;
              const best = data.bestScore || 0;
              return (
                <motion.button
                  key={lv.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={unlocked ? { scale: 1.05, y: -4 } : {}}
                  whileTap={unlocked ? { scale: 0.97 } : {}}
                  onClick={() => unlocked && setLevelIdx(i)}
                  disabled={!unlocked}
                  className={`relative bg-white rounded-3xl p-5 shadow-xl border-4 text-left transition-all overflow-hidden ${
                    unlocked ? 'border-white hover:shadow-2xl' : 'border-gray-200 opacity-70'
                  }`}
                >
                  {unlocked && <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${kategori.warna} rounded-full opacity-20 blur-2xl`}></div>}

                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${unlocked ? kategori.warna : 'from-gray-300 to-gray-400'} flex items-center justify-center text-2xl shadow-md`}>
                        {unlocked ? lv.icon : <Lock className="text-white" size={22} />}
                      </div>
                      <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${unlocked ? 'bg-gray-100 text-gray-700' : 'bg-gray-200 text-gray-500'}`}>
                        {lv.nama}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-gray-900 mb-1">{lv.judul}</h3>
                    <p className="text-xs text-gray-500 font-semibold mb-3">{lv.deskripsi}</p>

                    <div className="flex items-center gap-1 mb-2">
                      {[0, 1, 2].map((s) => (
                        <Star key={s} size={18} className={s < stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                      ))}
                      {best > 0 && <span className="ml-2 text-xs font-extrabold text-gray-500">{best}%</span>}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t-2 border-dashed border-gray-100">
                      <span className="text-xs font-extrabold text-gray-500">📝 {lv.soal.length} Soal</span>
                      {unlocked ? (
                        <span className="text-xs font-extrabold text-primary flex items-center gap-1">
                          {stars > 0 ? 'Main Lagi' : 'Mulai'} <ArrowRight size={14} />
                        </span>
                      ) : (
                        <span className="text-xs font-extrabold text-gray-400">🔒 Terkunci</span>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ===== STEP 3: HASIL LEVEL =====
  if (isFinished) {
    const persen = Math.round((score / level.soal.length) * 100);
    let stars = 0, badge, pesan, warna;
    if (persen === 100) { stars = 3; badge = '🏆'; pesan = 'SEMPURNA!'; warna = 'from-yellow-400 to-orange-500'; }
    else if (persen >= 80) { stars = 2; badge = '🌟'; pesan = 'HEBAT!'; warna = 'from-green-400 to-emerald-500'; }
    else if (persen >= 60) { stars = 1; badge = '🥉'; pesan = 'BAGUS!'; warna = 'from-blue-400 to-indigo-500'; }
    else { badge = '💪'; pesan = 'Coba Lagi!'; warna = 'from-pink-400 to-red-500'; }

    const nextUnlocked = levelIdx < kategori.levels.length - 1 && persen >= 60;

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-yellow-50 to-pink-100 pt-20 pb-16 flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-7 text-center border-4 border-white">
          <div className={`inline-block bg-gradient-to-r ${kategori.warna} text-white font-extrabold px-4 py-1.5 rounded-full text-xs mb-4`}>
            {kategori.icon} {kategori.nama} · {level.nama}
          </div>

          <motion.div animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} className={`w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br ${warna} flex items-center justify-center text-6xl shadow-2xl`}>
            {badge}
          </motion.div>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Level Selesai!</h1>
          <p className="text-gray-600 font-semibold mb-4">{pesan}</p>

          <div className="flex justify-center gap-2 mb-4">
            {[0, 1, 2].map((s) => (
              <motion.div key={s} initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.3 + s * 0.2, type: 'spring' }}>
                <Star size={48} className={s < stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 mb-5 border-2 border-indigo-100">
            <div className="text-5xl font-extrabold text-primary mb-1">
              {score}<span className="text-2xl text-gray-400">/{level.soal.length}</span>
            </div>
            <div className="text-gray-600 font-bold">Skor: {persen}%</div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <div className="text-2xl mb-1">🔥</div>
                <div className="text-lg font-extrabold text-orange-500">{maxStreak}</div>
                <div className="text-xs text-gray-500 font-semibold">Streak</div>
              </div>
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <div className="text-2xl mb-1">⭐</div>
                <div className="text-lg font-extrabold text-yellow-500">{score * 5}</div>
                <div className="text-xs text-gray-500 font-semibold">Poin</div>
              </div>
            </div>
          </div>

          {nextUnlocked && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 border-2 border-green-200 rounded-2xl p-3 mb-4 flex items-center justify-center gap-2">
              <Sparkles className="text-green-600" size={18} />
              <span className="text-green-700 font-extrabold text-sm">Level {levelIdx + 2} Terbuka! 🎉</span>
            </motion.div>
          )}

          <div className="flex flex-wrap gap-2 justify-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={resetLevel}
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-extrabold shadow-lg text-sm">
              <RotateCcw size={16} /> Coba Lagi
            </motion.button>
            {nextUnlocked && (
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => { setLevelIdx(levelIdx + 1); resetLevel(); }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-5 py-2.5 rounded-full font-extrabold shadow-lg text-sm">
                Level {levelIdx + 2} <ArrowRight size={16} />
              </motion.button>
            )}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={backToLevels}
              className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary px-5 py-2.5 rounded-full font-extrabold text-sm">
              🎯 Pilih Level
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ===== STEP 4: QUIZ =====
  const timePercent = (timeLeft / TIMER) * 100;
  const timeColor = timeLeft <= 5 ? 'bg-red-500' : timeLeft <= 10 ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-yellow-50 to-pink-100 pt-20 pb-10 relative overflow-hidden">
      <AnimatePresence>
        {showConfetti && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 pointer-events-none z-[150] flex items-center justify-center">
            {[...Array(20)].map((_, i) => (
              <motion.div key={i}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ x: (Math.random() - 0.5) * 600, y: (Math.random() - 0.5) * 600, opacity: 0, scale: 0.5, rotate: Math.random() * 360 }}
                transition={{ duration: 1.5 }} className="absolute text-4xl">
                {['🎉', '⭐', '✨', '🎊', '💫'][i % 5]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <div className="mb-4 space-y-2">
          <div className="flex items-center justify-between">
            <button onClick={backToLevels} className={`bg-gradient-to-r ${kategori.warna} text-white font-extrabold px-3 py-1.5 rounded-full shadow-md text-xs hover:scale-105 transition-transform`}>
              {kategori.icon} {kategori.nama} · {level.nama}
            </button>
            <div className="flex items-center gap-1.5">
              {streak >= 2 && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-1 bg-gradient-to-r from-orange-400 to-red-500 text-white font-extrabold px-2.5 py-1.5 rounded-full shadow-lg text-xs">
                  <Flame size={12} className="fill-white" /> {streak}
                </motion.div>
              )}
              <span className="flex items-center gap-1 bg-white text-primary font-extrabold px-2.5 py-1.5 rounded-full shadow-md text-xs">
                <Trophy size={12} /> {score}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold text-gray-700 whitespace-nowrap">{currentIndex + 1}/{level.soal.length}</span>
            <div className="flex-1 bg-white rounded-full h-3 overflow-hidden shadow-inner">
              <motion.div initial={{ width: 0 }} animate={{ width: `${((currentIndex + 1) / level.soal.length) * 100}%` }} className="h-full bg-gradient-to-r from-primary to-purple-500" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={14} className="text-gray-600" />
            <div className="flex-1 bg-white rounded-full h-2 overflow-hidden shadow-inner">
              <motion.div animate={{ width: `${timePercent}%` }} className={`h-full ${timeColor} transition-all`} />
            </div>
            <span className={`text-xs font-extrabold w-8 text-right ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-gray-700'}`}>{timeLeft}s</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={currentIndex}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-5 md:p-7 border-4 border-white relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-200 to-pink-200 rounded-full opacity-40 blur-2xl"></div>
            <div className="relative">
              <h2 className="text-lg md:text-xl font-extrabold text-gray-900 mb-5 leading-snug">{currentQuiz.pertanyaan}</h2>

              <div className="space-y-2.5">
                {currentQuiz.pilihan.map((pilihan, index) => {
                  const isSel = selected === index;
                  const isRight = index === currentQuiz.jawaban;
                  let cls = 'w-full text-left p-3.5 rounded-2xl border-2 font-bold transition-all text-sm md:text-base ';
                  if (!isAnswered) {
                    cls += isSel ? 'border-primary bg-indigo-50 text-primary scale-[1.02] shadow-lg' : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50 text-gray-700';
                  } else {
                    if (isRight) cls += 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 scale-[1.02] shadow-lg';
                    else if (isSel && !isCorrect) cls += 'border-red-500 bg-gradient-to-r from-red-50 to-pink-50 text-red-700';
                    else cls += 'border-gray-200 bg-gray-50 text-gray-400';
                  }
                  return (
                    <motion.button key={index} whileTap={{ scale: isAnswered ? 1 : 0.98 }} onClick={() => handleSelect(index)} disabled={isAnswered} className={cls}>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2.5">
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 ${
                            isAnswered && isRight ? 'bg-green-500 text-white'
                            : isAnswered && isSel && !isCorrect ? 'bg-red-500 text-white'
                            : isSel ? 'bg-primary text-white' : 'bg-white border-2 border-current'
                          }`}>{String.fromCharCode(65 + index)}</span>
                          {pilihan}
                        </span>
                        <AnimatePresence>
                          {isAnswered && isRight && <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }}><CheckCircle size={22} className="text-green-600" /></motion.div>}
                          {isAnswered && isSel && !isCorrect && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><XCircle size={22} className="text-red-600" /></motion.div>}
                        </AnimatePresence>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence>
                {isAnswered && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className={`mt-5 p-4 rounded-2xl border-2 ${isCorrect ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-300' : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-300'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{isCorrect ? '🎉' : '💭'}</span>
                      <p className="font-extrabold text-base">{isCorrect ? 'Benar!' : selected === -1 ? 'Waktu Habis!' : 'Belum Tepat'}</p>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{currentQuiz.penjelasan}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-5 flex justify-end">
                {!isAnswered ? (
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSubmit} disabled={selected === null}
                    className="bg-gradient-to-r from-primary to-purple-600 text-white px-7 py-2.5 rounded-full font-extrabold shadow-lg text-sm disabled:opacity-40 disabled:cursor-not-allowed">
                    Jawab
                  </motion.button>
                ) : isCorrect ? (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2.5 rounded-full font-extrabold text-xs">
                    <Zap size={14} className="fill-green-600" /> Lanjut otomatis...
                  </motion.div>
                ) : (
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleNext}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-7 py-2.5 rounded-full font-extrabold shadow-lg text-sm">
                    {currentIndex < level.soal.length - 1 ? 'Lanjut' : 'Lihat Hasil'} <ArrowRight size={16} />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}