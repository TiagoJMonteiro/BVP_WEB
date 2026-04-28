import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-dark text-white sticky top-0 z-50 shadow-md border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="bg-trasparent p-1.5 rounded flex items-center justify-center">
            <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-12 w-auto"
            />
        </div>
          <span className="font-bold text-lg tracking-wide uppercase">Bombeiros Voluntários do Porto</span>
        </div>
        
        <div className="hidden lg:flex space-x-6 text-xs font-semibold tracking-wide">
          <a href="#inicio" className="hover:text-brand-red transition">INÍCIO</a>
          <a href="#quem-somos" className="hover:text-brand-red transition">QUEM SOMOS</a>
          <a href="#servicos" className="hover:text-brand-red transition">SERVIÇOS</a>
          <a href="#voluntariado" className="hover:text-brand-red transition">VOLUNTARIADO</a>
          <a href="#frota" className="hover:text-brand-red transition">FROTA</a>
          <a href="#noticias" className="hover:text-brand-red transition">NOTÍCIAS</a>
          <a href="#contactos" className="hover:text-brand-red transition">CONTACTOS</a>
        </div>

        <div className="hidden lg:flex items-center">
          <button className="bg-brand-red hover:bg-red-800 flex items-center gap-2 px-5 py-1.5 rounded text-sm font-bold transition">
            <Phone size={16} /> 
          </button>
        </div>

        <button 
          className="lg:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-gray-800 absolute w-full left-0 flex flex-col px-4 py-4 space-y-4 shadow-xl text-white">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="text-sm font-semibold hover:text-brand-red transition">INÍCIO</a>
          <a href="#quem-somos" onClick={() => setIsOpen(false)} className="text-sm font-semibold hover:text-brand-red transition">QUEM SOMOS</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="text-sm font-semibold hover:text-brand-red transition">SERVIÇOS</a>
          <a href="#voluntariado" onClick={() => setIsOpen(false)} className="text-sm font-semibold hover:text-brand-red transition">VOLUNTARIADO</a>
          <a href="#frota" onClick={() => setIsOpen(false)} className="text-sm font-semibold hover:text-brand-red transition">FROTA</a>
          <a href="#noticias" onClick={() => setIsOpen(false)} className="text-sm font-semibold hover:text-brand-red transition">NOTÍCIAS</a>
          <a href="#contactos" onClick={() => setIsOpen(false)} className="text-sm font-semibold hover:text-brand-red transition">CONTACTOS</a>
          <button className="bg-brand-red w-full flex justify-center items-center gap-2 py-2 rounded text-sm font-bold mt-2">
            <Phone size={16} /> Entra em contacto
          </button>
        </div>
      )}
    </nav>
  );
}