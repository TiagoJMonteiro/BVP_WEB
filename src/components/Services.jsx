import { Flame, Phone, Truck, Shield, Users } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Combate a Incêndios", desc: "Intervenção rápida e eficaz em incêndios urbanos e florestais.", icon: <Flame size={24} /> },
    { title: "Emergência Médica", desc: "Socorro imediato a vítimas, com ambulâncias equipadas INEM.", icon: <Phone size={24} /> },
    { title: "Desencarceramento", desc: "Resgate de vítimas encarceradas, com material especializado.", icon: <Truck size={24} /> },
    { title: "Proteção Civil", desc: "Apoio em situações de catástrofe, atuando com as autoridades.", icon: <Shield size={24} /> },
    { title: "Formação", desc: "Ações de sensibilização e cursos de suporte básico de vida.", icon: <Users size={24} /> }
  ];

  return (
    <section id="servicos" className="py-16 bg-[#242525] border-y border-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-brand-gold font-semibold tracking-widest mb-1 uppercase text-xs">Os Nossos Serviços</h3>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white">Prontos para a Missão</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-[#2a2a2a] p-6 rounded-lg border border-zinc-700 hover:border-brand-red transition group">
              <div className="bg-brand-red/10 text-brand-red w-12 h-12 rounded flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition">
                {srv.icon}
              </div>
              <h4 className="text-lg font-bold uppercase mb-2 text-white">{srv.title}</h4>
              <p className="text-gray-300 text-xs leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

