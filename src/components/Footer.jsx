import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Code2 className="text-white" size={24} />
              </div>
              <span className="text-xl font-extrabold text-white">CodeKids</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Platform edukasi coding untuk anak SD. Belajar sambil bermain!
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#fitur" className="hover:text-primary transition-colors">Fitur</a></li>
              <li><a href="#materi" className="hover:text-primary transition-colors">Materi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hello@codekids.id</li>
              <li>Instagram: @codekids.id</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p className="flex items-center justify-center gap-1">
            Dibuat dengan <Heart size={14} className="text-red-500 fill-red-500" /> untuk
            M-ONE Coding Competition 2026
          </p>
        </div>
      </div>
    </footer>
  );
}