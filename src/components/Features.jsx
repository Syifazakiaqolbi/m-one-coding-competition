import { BookOpen, Gamepad2, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: BookOpen,
    title: 'Materi Interaktif',
    desc: 'Belajar HTML, CSS, dan JavaScript dengan penjelasan sederhana dan gambar menarik.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Gamepad2,
    title: 'Playground Kode',
    desc: 'Tulis kode langsung di browser dan lihat hasilnya secara real-time.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Trophy,
    title: 'Quiz & Badge',
    desc: 'Uji pemahaman dengan quiz seru dan kumpulkan badge keren.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Users,
    title: 'Progress Tracking',
    desc: 'Pantau kemajuan belajar dengan progress bar yang mudah dipahami.',
    color: 'bg-pink-100 text-pink-600',
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Fitur <span className="text-primary">Keren</span> untuk Anak
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Semua yang dibutuhkan untuk belajar coding dengan menyenangkan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-4`}>
                <f.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}