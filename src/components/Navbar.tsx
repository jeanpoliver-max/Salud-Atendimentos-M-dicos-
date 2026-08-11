import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.1)]' : 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]'}`}>
      <nav className="container-custom flex items-center justify-between py-4">
        <a href="#" className="flex items-center no-underline group" onClick={closeMenu}>
          <img 
            src="https://i.imgur.com/IhrnJeZ.png" 
            alt="Salud Atendimentos Médicos" 
            className="h-[55px] md:h-[65px] w-auto object-contain transition-transform group-hover:scale-105" 
            referrerPolicy="no-referrer"
          />
        </a>
        
        <ul className={`md:flex items-center gap-8 list-none max-md:fixed max-md:top-[76px] max-md:left-0 max-md:w-full max-md:bg-white max-md:flex-col max-md:p-6 max-md:gap-5 max-md:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 ${isOpen ? 'max-md:translate-y-0' : 'max-md:-translate-y-[150%] max-md:hidden'}`}>
          <li><a href="#inicio" onClick={closeMenu} className="text-[#1E2A38] font-medium text-[15px] hover:text-[#1FA8A0] transition-colors">Início</a></li>
          <li><a href="#quem-somos" onClick={closeMenu} className="text-[#1E2A38] font-medium text-[15px] hover:text-[#1FA8A0] transition-colors">Quem Somos</a></li>
          <li><a href="#servicos" onClick={closeMenu} className="text-[#1E2A38] font-medium text-[15px] hover:text-[#1FA8A0] transition-colors">Serviços</a></li>
          <li><a href="#diferenciais" onClick={closeMenu} className="text-[#1E2A38] font-medium text-[15px] hover:text-[#1FA8A0] transition-colors">Diferenciais</a></li>
          <li><a href="#contato" onClick={closeMenu} className="text-[#1E2A38] font-medium text-[15px] hover:text-[#1FA8A0] transition-colors">Contato</a></li>
          <li className="md:hidden"><a href="https://wa.me/5516997532025" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="btn-primary w-full text-center">Solicitar Proposta</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/5516997532025" target="_blank" rel="noopener noreferrer" className="btn-primary max-md:hidden">Solicitar Proposta</a>
          <button 
            className="md:hidden text-[#0B3D6E] p-1" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
