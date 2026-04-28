import { CheckCircle } from 'lucide-react';

export default function Volunteering() {
  return (
    <section id="voluntariado" className="py-16 bg-[#1a1b1b]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-white font-semibold tracking-widest mb-1 uppercase text-xs">Voluntariado</h3>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white">Junte-se a Nós</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Ser bombeiro voluntário é abraçar uma causa maior. É estar disponível para servir, proteger e salvar. Se sente esta vocação, estamos à sua espera.
          </p>
        </div>#242525

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-[#242525] p-8 rounded-lg border border-gray-200/30">
            <h3 className="text-xl font-bold uppercase mb-5 text-gray-100">Requisitos</h3>
            <ul className="space-y-3">
              {['Idade entre 18 e 55 anos', 'Boa condição física e psicológica', 'Disponibilidade para formação inicial', 'Espírito de equipa'].map((req, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="text-brand-red flex-shrink-0" size={18} /> {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#242525] p-8 rounded-lg border border-gray-200/30">
            <h3 className="text-xl font-bold uppercase mb-5 text-gray-100">Benefícios</h3>
            <ul className="space-y-3">
              {['Formação certificada', 'Seguro de acidentes pessoais', 'Equipamento individual fornecido', 'Integração numa equipa unida'].map((ben, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={18} /> {ben}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <a href="#contactos"
          className="bg-brand-red hover:bg-red-800 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider rounded transition">
            Candidatar-me →
          </a>
        </div>
      </div>
    </section>
  );
}