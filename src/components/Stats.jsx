import { useState, useEffect } from 'react';
import { Calendar, Users, Flame, Shield } from 'lucide-react';

const AnimatedNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function Stats() {
  return (
    <section className="bg-white py-12  border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <Calendar className="text-brand-gold mb-3" size={32} />
          <h2 className="text-4xl font-black text-brand-red mb-1">
            <AnimatedNumber end={150} />+
          </h2>
          <p className="text-gray-800 tracking-wider text-xs uppercase">Anos ao serviço</p>
        </div>
        <div className="flex flex-col items-center">
          <Users className="text-brand-gold mb-3" size={32} />
          <h2 className="text-4xl font-black text-brand-red mb-1">
            <AnimatedNumber end={60} />
          </h2>
          <p className="text-gray-800 tracking-wider text-xs uppercase">Operacionais</p>
        </div>
        <div className="flex flex-col items-center">
          <Flame className="text-brand-gold mb-3" size={32} />
          <h2 className="text-4xl font-black text-brand-red mb-1">
            <AnimatedNumber end={8000} />+
          </h2>
          <p className="text-gray-800 tracking-wider text-xs uppercase">Ocorrências/Ano</p>
        </div>
        <div className="flex flex-col items-center">
          <Shield className="text-brand-gold mb-3" size={32} />
          <h2 className="text-4xl font-black text-brand-red mb-1">24/7</h2>
          <p className="text-gray-800 tracking-wider text-xs uppercase">Disponibilidade</p>
        </div>
      </div>
    </section>
  );
}