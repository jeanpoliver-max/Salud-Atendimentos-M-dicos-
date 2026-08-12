import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#082C50] text-white/70 pt-[60px] pb-[30px]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.5fr_1.5fr] gap-10 mb-10">
          <div>
            <a href="#inicio" className="inline-block mb-6">
              <div className="bg-white px-4 py-2.5 rounded-xl shadow-md inline-block">
                <img 
                  src="https://i.imgur.com/IhrnJeZ.png" 
                  alt="Salud Atendimentos Médicos" 
                  className="h-[45px] w-auto object-contain" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </a>
            <p className="text-[14px] max-w-[300px] mb-6">
              Gestão hospitalar e terceirização de serviços médicos com ética, qualidade e compromisso com o resultado.
            </p>
            <p className="text-[13px] font-medium text-white/50">
              CNPJ: 11.966.803/0001-11
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-[16px] font-bold mb-6">Navegação</h4>
            <div className="flex flex-col gap-4">
              <a href="#inicio" className="text-white/70 hover:text-white transition-colors text-[14px]">Início</a>
              <a href="#quem-somos" className="text-white/70 hover:text-white transition-colors text-[14px]">Quem Somos</a>
              <a href="#servicos" className="text-white/70 hover:text-white transition-colors text-[14px]">Serviços</a>
              <a href="#diferenciais" className="text-white/70 hover:text-white transition-colors text-[14px]">Diferenciais</a>
              <a href="#contato" className="text-white/70 hover:text-white transition-colors text-[14px]">Contato</a>
              <a href="/futuros-medicos.html" className="text-[#1FA8A0] font-medium hover:text-[#2CC4BB] transition-colors text-[14px]">Comunidade Salud</a>
              <a href="/politica-de-privacidade.html" className="text-white/50 hover:text-white transition-colors text-[13px] mt-2">Política de Privacidade</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-[16px] font-bold mb-6">Serviços</h4>
            <div className="flex flex-col gap-4">
              <a href="#servicos" className="text-white/70 hover:text-white transition-colors text-[14px]">Fornecimento de Médicos</a>
              <a href="#servicos" className="text-white/70 hover:text-white transition-colors text-[14px]">Gestão Hospitalar</a>
              <a href="#servicos" className="text-white/70 hover:text-white transition-colors text-[14px]">Atendimento Ambulatorial</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-[16px] font-bold mb-6">Contato</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="text-white w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-white/70 text-[14px] leading-relaxed">
                  Rua Belém, 1001 - Sala 6<br/>
                  Centro - Catanduva/SP<br/>
                  CEP 15801-240
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-white w-5 h-5 shrink-0 mt-0.5" />
                <a href="mailto:saludatendimentosmedicos@gmail.com" className="text-white/70 hover:text-white transition-colors text-[14px] break-all">
                  saludatendimentosmedicos@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-white w-5 h-5 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-bold text-white tracking-wide">ADMINISTRATIVO</span>
                  <a href="https://wa.me/5516997532025" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-[14px]">(16) 99753-2025</a>
                </div>
              </div>
              
              <div className="mt-4">
                <a href="https://www.instagram.com/saludatendimentosmedicos/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-bold text-[13px] tracking-wide hover:text-[#2CC4BB] transition-colors uppercase">
                  <svg viewBox="0 0 24 24" className="shrink-0" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Siga-nos no Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-center text-white/50">
          <span>Salud Atendimentos Médicos © Todos os direitos reservados.</span>
          <span>saludatendimentosmedicos.com.br</span>
        </div>
      </div>
    </footer>
  );
}
