import { Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Fleet() {
  const allVehicles = [
    { type: "VUCI — VEICULO URBANO DE COMBATE A INCÊNDIOS", cat: "Combate a Incêndios", desc: "Viatura pesada equipada para incêndios urbanos." },
    { type: "VFCI — VEICULO FLORESTA DE COMBATE A INCÊNDIOS", cat: "Combate Florestal", desc: "Viatura todo-o-terreno equipada para combates florestais." },
    { type: "ABSC — AMBULÂNCIA DE SOCORRO", cat: "Emergência Médica", desc: "Ambulância equipada para socorro pré-hospitalar." },
  ];

  const displayVehicles = allVehicles.slice(0, 3);

  return (
    <section id="frota" className="py-16 bg-brand-gray border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-brand-gold font-semibold tracking-widest mb-1 uppercase text-xs">Frota & Equipamentos</h3>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900">Os Nossos Meios</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {displayVehicles.map((veh, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="bg-zinc-100 h-40 flex items-center justify-center text-zinc-400 border-b border-gray-200">
                <Truck size={48} strokeWidth={1.5} />
              </div>
              <div className="p-6">
                <p className="text-brand-gold text-[10px] font-bold uppercase mb-1 tracking-wider">{veh.cat}</p>
                <h4 className="text-base font-bold uppercase mb-3 text-gray-900 leading-snug">{veh.type}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{veh.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/frota" className="inline-block border border-[#372021] hover:border-gray-900 text-gray-600 hover:text-gray-900 px-6 py-2 text-xs font-bold uppercase tracking-wider rounded transition">
            Ver toda a frota
          </Link>
        </div>
      </div>
    </section>
  );
}