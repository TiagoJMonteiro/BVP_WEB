import { Calendar } from 'lucide-react';

export default function News() {
  const newsItems = [
    { title: "EXERCÍCIO DE SIMULAÇÃO CONJUNTA", cat: "Formação", date: "28 Fev", desc: "A corporação participou num exercício de simulação de sismo." },
    { title: "NOVA AMBULÂNCIA ABSC", cat: "Equipamentos", date: "15 Fev", desc: "Integrada no dispositivo operacional a nova ambulância pré-hospitalar." },
    { title: "SENSIBILIZAÇÃO FLORESTAL", cat: "Comunidade", date: "02 Fev", desc: "Iniciou a campanha para a prevenção de incêndios rurais." }
  ];

  return (
    <section id="noticias" className="py-16 bg-white  border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-brand-gold font-semibold tracking-widest mb-1 uppercase text-xs">Atualidade</h3>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900">Notícias & Ocorrências</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {newsItems.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-300 border-t-8 border-t-brand-red rounded-b-lg p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-brand-gold text-[10px] font-bold uppercase tracking-wider">{item.cat}</span>
                  <span className="flex items-center text-gray-500 text-[10px]"><Calendar size={12} className="mr-1" /> {item.date}</span>
                </div>
                <h4 className="text-base font-bold uppercase mb-3 text-gray-900 leading-snug">{item.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed mb-5">{item.desc}</p>
              </div>
              <a href="#ler-mais" className="text-brand-red font-bold text-xs uppercase flex items-center hover:text-red-800 transition">
                Ler mais <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}