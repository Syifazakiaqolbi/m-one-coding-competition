import { motion } from 'framer-motion';

const steps = [
  {
    nomor: '01',
    judul: 'Pilih Materi',
    deskripsi: 'Pilih materi coding favoritmu: HTML, CSS, atau JavaScript.',
    icon: '📚',
  },
  {
    nomor: '02',
    judul: 'Belajar & Praktik',
    deskripsi: 'Baca materi, lihat contoh kode, dan praktik di playground.',
    icon: '💻',
  },
  {
    nomor: '03',
    judul: 'Uji dengan Quiz',
    deskripsi: 'Uji pemahamanmu dengan quiz seru dan kumpulkan poin.',
    icon: '🎯',
  },
  {
    nomor: '04',
    judul: 'Kumpulkan Badge',
    deskripsi: 'Dapatkan badge keren dan lihat progress belajarmu naik!',
    icon: '🏆',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Cara <span className="text-primary">Belajar</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cuma 4 langkah mudah untuk mulai belajar coding!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.nomor}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <div className="text-sm font-extrabold text-primary/40 mb-2">
                {step.nomor}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.judul}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.deskripsi}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-6 text-gray-300 text-3xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}