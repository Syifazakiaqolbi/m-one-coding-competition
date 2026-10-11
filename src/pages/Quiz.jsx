import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Trophy, RotateCcw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { quizData } from '../data/quiz';

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const currentQuiz = quizData[currentIndex];
  const isCorrect = selected === currentQuiz.jawaban;

  const handleSelect = (index) => {
    if (isAnswered) return;
    setSelected(index);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setIsAnswered(true);
    if (isCorrect) setScore(score + 1);
    setAnswers([...answers, { id: currentQuiz.id, selected, isCorrect }]);
  };

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setAnswers([]);
  };

  // ==== HALAMAN SELESAI ====
  if (isFinished) {
    const persen = Math.round((score / quizData.length) * 100);
    let badge, pesan, warna;

    if (persen >= 90) {
      badge = '🏆';
      pesan = 'LUAR BIASA! Kamu Jenius Coding!';
      warna = 'from-yellow-400 to-orange-500';
    } else if (persen >= 70) {
      badge = '🥈';
      pesan = 'HEBAT! Kamu Hampir Sempurna!';
      warna = 'from-green-400 to-emerald-500';
    } else if (persen >= 50) {
      badge = '🥉';
      pesan = 'BAGUS! Terus Belajar Ya!';
      warna = 'from-blue-400 to-indigo-500';
    } else {
      badge = '💪';
      pesan = 'Jangan Menyerah, Coba Lagi!';
      warna = 'from-pink-400 to-red-500';
    }

    return (
      <div className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full mx-4 bg-white rounded-3xl shadow-2xl p-8 text-center"
        >
          <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${warna} flex items-center justify-center text-6xl`}>
            {badge}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Quiz Selesai!
          </h1>
          <p className="text-lg text-gray-600 mb-6">{pesan}</p>

          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <div className="text-5xl font-extrabold text-primary mb-2">
              {score}/{quizData.length}
            </div>
            <div className="text-gray-600 font-semibold">
              Skor: {persen}%
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${persen}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className={`h-full bg-gradient-to-r ${warna}`}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all"
            >
              <RotateCcw size={18} />
              Coba Lagi
            </button>
            <Link
              to="/materi"
              className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary px-6 py-3 rounded-full font-bold hover:bg-indigo-50 transition-all"
            >
              Kembali ke Materi
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // ==== HALAMAN QUIZ ====
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-gray-500">
              Soal {currentIndex + 1} dari {quizData.length}
            </span>
            <span className="text-sm font-bold text-primary flex items-center gap-1">
              <Trophy size={16} /> Skor: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / quizData.length) * 100}%` }}
              className="h-full bg-gradient-to-r from-primary to-indigo-500"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-lg p-6 md:p-8"
          >
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6">
              {currentQuiz.pertanyaan}
            </h2>

            <div className="space-y-3">
              {currentQuiz.pilihan.map((pilihan, index) => {
                const isSelected = selected === index;
                const isRightAnswer = index === currentQuiz.jawaban;

                let className =
                  'w-full text-left p-4 rounded-2xl border-2 font-semibold transition-all ';

                if (!isAnswered) {
                  className += isSelected
                    ? 'border-primary bg-indigo-50 text-primary'
                    : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50 text-gray-700';
                } else {
                  if (isRightAnswer) {
                    className += 'border-green-500 bg-green-50 text-green-700';
                  } else if (isSelected && !isCorrect) {
                    className += 'border-red-500 bg-red-50 text-red-700';
                  } else {
                    className += 'border-gray-200 bg-gray-50 text-gray-400';
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    disabled={isAnswered}
                    className={className}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-white border-2 border-current flex items-center justify-center text-sm font-bold">
                          {String.fromCharCode(65 + index)}
                        </span>
                        {pilihan}
                      </span>
                      {isAnswered && isRightAnswer && (
                        <CheckCircle size={24} className="text-green-600" />
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <XCircle size={24} className="text-red-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Penjelasan */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`mt-6 p-4 rounded-2xl ${
                    isCorrect
                      ? 'bg-green-50 border-l-4 border-green-500'
                      : 'bg-red-50 border-l-4 border-red-500'
                  }`}
                >
                  <p className="font-bold mb-1">
                    {isCorrect ? '✅ Benar!' : '❌ Salah'}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {currentQuiz.penjelasan}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tombol */}
            <div className="mt-6 flex justify-end">
              {!isAnswered ? (
                <button
                  onClick={handleSubmit}
                  disabled={selected === null}
                  className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Jawab
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all"
                >
                  {currentIndex < quizData.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil'}
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}