import { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-brand-dark text-white sticky top-0 z-50 shadow-md border-b border-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-12 w-auto"
            />
          </div>

          <span className="font-bold text-lg tracking-wide uppercase">
            BV Porto
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex space-x-6 text-xs font-semibold tracking-wide items-center">

          <a href="#inicio" className="hover:text-brand-red transition">
            INÍCIO
          </a>

          {/* QUEM SOMOS */}
          <div className="relative group">

            <button className="flex items-center gap-1 hover:text-brand-red transition">
              QUEM SOMOS
              <ChevronDown size={14} />
            </button>

            {/* invisible hover bridge (fix dropdown closing bug) */}
            <div className="absolute left-0 top-full w-full h-3"></div>

            <div className="absolute left-0 top-full mt-2 w-48 bg-brand-dark border border-gray-800 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <a href="#estrutura" className="block px-4 py-2 text-sm hover:bg-gray-800">
                Estrutura do CB
              </a>

              {/* VEICULOS → agora aponta para #frota */}
              <a href="#frota" className="block px-4 py-2 text-sm hover:bg-gray-800">
                Veículos
              </a>

              <a href="#stats" className="block px-4 py-2 text-sm hover:bg-gray-800">
                Estatisticas
              </a>

            </div>

          </div>

          {/* SERVIÇOS */}
          <div className="relative group">

            <button className="flex items-center gap-1 hover:text-brand-red transition">
              SERVIÇOS
              <ChevronDown size={14} />
            </button>

            {/* invisible hover bridge */}
            <div className="absolute left-0 top-full w-full h-3"></div>

            <div className="absolute left-0 top-full mt-2 w-56 bg-brand-dark border border-gray-800 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <a href="#socio" className="block px-4 py-2 text-sm hover:bg-gray-800">
                Faz-te Sócio
              </a>

              <a href="#emergencia" className="block px-4 py-2 text-sm hover:bg-gray-800">
                Particulares
              </a>

            </div>

          </div>

          <a href="#voluntariado" className="hover:text-brand-red transition">
            VOLUNTARIADO
          </a>

          <a href="#noticias" className="hover:text-brand-red transition">
            NOTÍCIAS
          </a>

          <a href="#contactos" className="hover:text-brand-red transition">
            CONTACTOS
          </a>

        </div>

        {/* CONTACT BUTTON */}
        <div className="hidden lg:flex items-center">
          <button className="bg-brand-red hover:bg-red-800 flex items-center gap-2 px-5 py-1.5 rounded text-sm font-bold transition">
            <Phone size={16} />
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button 
          className="lg:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-gray-800 absolute w-full left-0 flex flex-col px-4 py-4 space-y-2 shadow-xl text-white">

          <a href="#inicio" onClick={() => setIsOpen(false)} className="text-sm font-semibold hover:text-brand-red">
            INÍCIO
          </a>

          {/* MOBILE QUEM SOMOS */}
          <button
            onClick={() => toggleDropdown("quem")}
            className="flex justify-between items-center text-sm font-semibold hover:text-brand-red"
          >
            QUEM SOMOS
            <ChevronDown size={16} />
          </button>

          {openDropdown === "quem" && (
            <div className="flex flex-col ml-4 space-y-2 text-sm">

              <a href="#estrutura" onClick={() => setIsOpen(false)}>
                Estrutura do CB
              </a>

              <a href="#frota" onClick={() => setIsOpen(false)}>
                Veículos
              </a>

              <a href="#stats" onClick={() => setIsOpen(false)}>
                Estatisticas
              </a>

            </div>
          )}

          {/* MOBILE SERVIÇOS */}
          <button
            onClick={() => toggleDropdown("servicos")}
            className="flex justify-between items-center text-sm font-semibold hover:text-brand-red"
          >
            SERVIÇOS
            <ChevronDown size={16} />
          </button>

          {openDropdown === "servicos" && (
            <div className="flex flex-col ml-4 space-y-2 text-sm">

              <a href="#socio" onClick={() => setIsOpen(false)}>
                Faz-te Sócio
              </a>

              <a href="#emergencia" onClick={() => setIsOpen(false)}>
                Particulares
              </a>

            </div>
          )}

          <a href="#voluntariado" onClick={() => setIsOpen(false)} className="text-sm font-semibold hover:text-brand-red">
            VOLUNTARIADO
          </a>

          <a href="#noticias" onClick={() => setIsOpen(false)} className="text-sm font-semibold hover:text-brand-red">
            NOTÍCIAS
          </a>

          <a href="#contactos" onClick={() => setIsOpen(false)} className="text-sm font-semibold hover:text-brand-red">
            CONTACTOS
          </a>

          <button className="bg-brand-red w-full flex justify-center items-center gap-2 py-2 rounded text-sm font-bold mt-2">
            <Phone size={16} /> Entra em contacto
          </button>

        </div>
      )}
    </nav>
  );
}