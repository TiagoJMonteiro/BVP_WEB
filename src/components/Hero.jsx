import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center">
      <div 
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/download.jpg')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
</div>
      
      <div className="relative z-10 px-4 text-white max-w-3xl">
        <h3 className="text-brand-gold font-semibold tracking-widest mb-3 uppercase text-sm">Associação Humanitária</h3>
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-1">Sempre Prontos.</h1>
        <h1 className="text-5xl md:text-7xl font-black uppercase text-brand-gold leading-tight mb-5">Sempre Presentes.</h1>
        <p className="text-base md:text-lg mb-8 max-w-xl mx-auto text-gray-300">
          Ao serviço da comunidade, protegemos vidas e bens com dedicação, coragem e espírito de missão.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button className="bg-brand-red hover:bg-red-800 px-6 py-3 text-sm font-bold uppercase tracking-wider transition border-2 border-brand-red rounded-sm">
            Conheça-nos
          </button>
          <button className="bg-transparent hover:bg-white hover:text-black px-6 py-3 text-sm font-bold uppercase tracking-wider border-2 border-white transition rounded-sm">
            Seja Voluntário
          </button>
        </div>
      </div>
      <div className="absolute bottom-24 animate-bounce text-white/70">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}