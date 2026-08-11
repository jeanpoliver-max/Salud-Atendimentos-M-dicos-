import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="section-padding bg-[#F4F7FA]" id="contato">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-[60px] items-start">
          <div>
            <span className="section-tag">Contato</span>
            <h2 className="section-title">Solicite uma proposta personalizada</h2>
            <p className="section-subtitle mb-8">
              Preencha o formulário e nossa equipe entrará em contato em até 1 dia útil.
            </p>
            
            <div className="mt-8">
              <h3 className="text-[22px] font-bold text-[#0B3D6E] mb-6">Fale conosco</h3>
              
              <div className="flex items-start gap-3.5 mb-6 text-[#5A6B7B]">
                <MapPin className="text-[#1FA8A0] shrink-0 mt-0.5" size={22} />
                <div className="leading-relaxed">
                  Rua Belém, 1001 - Sala 6<br/>
                  Centro - Catanduva/SP<br/>
                  CEP 15801-240
                </div>
              </div>

              <div className="flex items-start gap-3.5 mb-6 text-[#5A6B7B]">
                <Mail className="text-[#1FA8A0] shrink-0 mt-0.5" size={22} />
                <span>saludatendimentosmedicos@gmail.com</span>
              </div>

              <div className="flex items-start gap-3.5 mb-6 text-[#5A6B7B]">
                <Phone className="text-[#1FA8A0] shrink-0 mt-0.5" size={22} />
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-[#1FA8A0] tracking-wide mb-0.5 uppercase">Administrativo / Solicitação de Proposta</span>
                  <span>(16) 99753-2025</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 mb-6 text-[#5A6B7B]">
                <svg viewBox="0 0 24 24" className="text-[#1FA8A0] shrink-0 mt-0.5" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <a href="https://www.instagram.com/saludatendimentosmedicos/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1FA8A0] transition-colors">
                  Siga-nos no Instagram
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-7 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <h3 className="text-[24px] font-bold text-[#0B3D6E] mb-6">Envie sua mensagem</h3>
            
            {formState === 'success' && (
              <div className="mb-6 p-4 bg-[#1FA8A0]/10 border border-[#1FA8A0]/20 text-[#1FA8A0] rounded-lg font-medium">
                Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="assunto" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Selecione um assunto</label>
                <select id="assunto" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]">
                  <option value="">Escolha uma opção</option>
                  <option value="contratar">Quero contratar serviços</option>
                  <option value="medico">Sou médico e quero me cadastrar</option>
                  <option value="parceria">Parcerias</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              
              <div className="mb-5">
                <label htmlFor="nome" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Nome completo</label>
                <input type="text" id="nome" placeholder="Seu nome" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
              </div>
              
              <div className="mb-5">
                <label htmlFor="instituicao" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Instituição</label>
                <input type="text" id="instituicao" placeholder="Nome do hospital ou clínica" className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
              </div>
              
              <div className="mb-5">
                <label htmlFor="email" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">E-mail</label>
                <input type="email" id="email" placeholder="seu@email.com" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
              </div>
              
              <div className="mb-5">
                <label htmlFor="telefone" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Telefone</label>
                <input type="tel" id="telefone" placeholder="(00) 00000-0000" className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
              </div>
              
              <div className="mb-5">
                <label htmlFor="mensagem" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Mensagem</label>
                <textarea id="mensagem" placeholder="Conte-nos sobre a sua necessidade..." className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0] min-h-[120px] resize-y"></textarea>
              </div>
              
              <div className="flex items-start gap-2.5 text-[13px] text-[#5A6B7B] mb-6">
                <input type="checkbox" id="termos" required className="mt-1" />
                <label htmlFor="termos">Li, entendi e estou de acordo com a <a href="#" className="text-[#1FA8A0] hover:underline">Política de Privacidade</a>.</label>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={formState === 'submitting'}
              >
                {formState === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
