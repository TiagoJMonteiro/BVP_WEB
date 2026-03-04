import { Shield, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export default function FooterContact() {
  return (
    <footer id="contactos" className="bg-[#1a1b1b] pt-16 pb-8 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        {/* Emergency Banner */}
        <div className="bg-[#2f1918] border border-[#4f1918] rounded-lg p-5 flex flex-col md:flex-row items-center justify-between mb-16 shadow-lg">
          <div className="flex items-center gap-4 mb-3 md:mb-0">
            <Shield size={36} className="text-white/80" />
            <div>
              <h3 className="text-xl font-bold uppercase text-white">Em Caso de Emergência</h3>
              <p className="text-red-200 text-xs">Ligue imediatamente para o número europeu de emergência</p>
            </div>
          </div>
          <div className="bg-black/20 px-6 py-2 rounded text-3xl text-white font-black tracking-widest">
            112
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          {/* Contacts & Map */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-brand-gold mt-0.5 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-bold uppercase text-sm mb-0.5 text-white">Morada</h4>
                <p className="text-gray-400 text-xs">R. de Rodrigues Sampaio 145<br/>4000-065 Porto, Portugal</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-brand-gold mt-0.5 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-bold uppercase text-sm mb-0.5 text-white">Telefone</h4>
                <p className="text-gray-400 text-xs">+351 22 205 5845</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-brand-gold mt-0.5 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-bold uppercase text-sm mb-0.5 text-white">Email</h4>
                <p className="text-gray-400 text-xs">geral@bombeirosvoluntarios.pt</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-brand-gold mt-0.5 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-bold uppercase text-sm mb-0.5 text-white">Secretariado</h4>
                <p className="text-gray-400 text-xs">Segunda a Sexta: 09h00 – 17h00</p>
              </div>
            </div>
            {/* Embedded Map */}
            <div className="w-full h-40 rounded border border-gray-800 overflow-hidden mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.2317020018413!2d-8.612497123550682!3d41.1485946107724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464fa352cb3d1%3A0x13d89416a7c65db8!2sBombeiros%20Volunt%C3%A1rios%20do%20Porto!5e1!3m2!1spt-PT!2spt!4v1772649903809!5m2!1spt-PT!2spt"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Localização dos Bombeiros"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7">
            <form className="space-y-5">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-2 text-white tracking-wider">Nome</label>
                <input   
                  type="text"   
                  placeholder="O seu nome completo" 
                  className="w-full bg-[#242424] border border-[#434343] p-3.5 text-sm rounded focus:outline-none focus:border-brand-red text-white transition placeholder-gray-600" 
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-2 text-white tracking-wider">Email</label>
                <input 
                  type="email" 
                  placeholder="email@exemplo.pt" 
                  className="w-full bg-[#242424] border border-[#434343] p-3.5 text-sm rounded focus:outline-none focus:border-brand-red text-white transition placeholder-gray-600" 
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-2 text-white tracking-wider">Assunto</label>
                <input 
                  type="text" 
                  placeholder="Assunto da mensagem" 
                  className="w-full bg-[#242424] border border-[#434343] p-3.5 text-sm rounded focus:outline-none focus:border-brand-red text-white transition placeholder-gray-600" 
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-2 text-white tracking-wider">Mensagem</label>
                <textarea 
                  rows="4" 
                  placeholder="Escreva a sua mensagem..." 
                  className="w-full bg-[#242424] border border-[#434343] p-3.5 text-sm rounded focus:outline-none focus:border-brand-red text-white transition resize-none placeholder-gray-600"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full bg-brand-red hover:bg-red-800 py-4 text-sm font-bold uppercase tracking-wider rounded text-white transition mt-2"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer Area - Updated Layout */}
      <div className="border-t border-gray-800 pt-16">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Column 1: Logo & Info */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-lg leading-none">
                  <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-24 w-auto"
            />
                </div>
                <span className="font-bold text-xl text-white tracking-wide uppercase">Bombeiros Voluntários</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed pr-6">
                Associação Humanitária de Bombeiros Voluntários ao serviço da comunidade desde 1950.
              </p>
            </div>

            {/* Column 2: Links Rápidos */}
            <div className="flex flex-col gap-5">
              <h4 className="font-bold uppercase text-sm tracking-wider text-white">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#quem-somos" className="text-sm text-gray-400 hover:text-white transition">Quem Somos</a></li>
                <li><a href="#servicos" className="text-sm text-gray-400 hover:text-white transition">Serviços</a></li>
                <li><a href="#voluntariado" className="text-sm text-gray-400 hover:text-white transition">Voluntariado</a></li>
                <li><a href="#frota" className="text-sm text-gray-400 hover:text-white transition">Frota</a></li>
                <li><a href="#noticias" className="text-sm text-gray-400 hover:text-white transition">Notícias</a></li>
                <li><a href="#contactos" className="text-sm text-gray-400 hover:text-white transition">Contactos</a></li>
              </ul>
            </div>

            {/* Column 3: Redes Sociais */}
            <div className="flex flex-col gap-5">
              <h4 className="font-bold uppercase text-sm tracking-wider text-white">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#facebook" className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition">
                  <Facebook size={18} />
                </a>
                <a href="#instagram" className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition">
                  <Instagram size={18} />
                </a>
                <a href="#youtube" className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Line */}
          <div className="border-t border-gray-800 pt-6 pb-2">
            <p className="text-center text-sm text-gray-500">
              © 2026 Bombeiros Voluntários. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}