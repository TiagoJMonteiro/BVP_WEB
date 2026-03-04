import { Info } from 'lucide-react';

export default function About() {
  return (
    <section id="quem-somos" className="py-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-brand-gold font-semibold tracking-widest mb-1 uppercase text-xs">Quem Somos</h3>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-black">Ao Serviço da Comunidade</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold uppercase mb-4 text-black">A Nossa História</h3>
            <p className="text-gray-800 text-sm mb-3 leading-relaxed">
              Fundada há mais de 150 anos, a nossa Associação Humanitária de Bombeiros Voluntários nasceu da vontade de um grupo de cidadãos empenhados em servir a comunidade. Desde então, temos crescido em capacidade, formação e meios.
            </p>
            <p className="text-gray-800 text-sm leading-relaxed">
              Ao longo das décadas, respondemos a milhares de ocorrências — de incêndios florestais a emergências pré-hospitalares — sempre com o mesmo compromisso: proteger quem mais precisa, quando mais precisa.
            </p>
          </div>
          <div className="bg-brand-gray p-6 border-l-4 border-brand-red rounded-r">
            <h3 className="text-lg font-bold uppercase mb-3 text-gray-900">Mensagem do Comandante</h3>
            <p className="italic text-gray-700 text-sm mb-4 leading-relaxed">
              "Ser bombeiro voluntário é mais do que uma escolha — é uma vocação. Cada dia trazemos connosco o compromisso de servir, a coragem de enfrentar o desconhecido e a humildade de saber que o nosso trabalho só tem sentido quando feito em equipa."
            </p>
            <p className="font-bold text-sm text-brand-gold">— Comandante Luís Silva</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {['Missão', 'Visão', 'Valores'].map((item, idx) => (
            <div key={idx} className="bg-white border p-6 text-center rounded-lg hover:shadow-lg transition">
              <div className="bg-[#f2e6e6] text-brand-red w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border-brand-red">
                <Info size={24} />
              </div>
              <h4 className="text-lg font-bold uppercase mb-3 text-black">{item}</h4>
              <p className="text-gray-800 text-xs leading-relaxed">
                Proteger vidas, bens e o ambiente, prestando socorro com prontidão, eficácia e humanidade a todos que necessitam.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}