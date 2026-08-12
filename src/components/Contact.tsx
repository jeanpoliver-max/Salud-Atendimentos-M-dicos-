import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [activeTab, setActiveTab] = useState<'contato' | 'estudante'>('contato');
  const [assunto, setAssunto] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    let payload;
    
    if (activeTab === 'estudante') {
      payload = {
        tipo: 'estudante',
        nome: data.nome,
        email: data.email,
        whatsapp: data.telefone,
        ano_faculdade: data.ano_faculdade,
        uf: data.uf,
        especialidade: data.especialidade
      };
    } else {
      if (assunto === 'medico') {
        payload = {
          tipo: 'medico',
          nome: data.nome,
          email: data.email,
          whatsapp: data.telefone,
          crm: data.crm,
          uf: data.uf,
          especialidade: data.especialidade,
          mensagem: data.mensagem
        };
      } else {
        payload = {
          tipo: 'contato',
          assunto: data.assunto,
          nome: data.nome,
          instituicao: data.instituicao,
          email: data.email,
          telefone: data.telefone,
          mensagem: data.mensagem
        };
      }
    }

    try {
      if (payload.tipo === 'medico' || payload.tipo === 'estudante') {
        await fetch('https://script.google.com/macros/s/AKfycbwB8Sewb77athAxxgyEjOwSmVxRBMoMlPq8GF95Nb-8ntf-mqD2LorU8FYL0RuQlYbv/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain'
          },
          body: JSON.stringify(payload)
        });
      } else {
        // Simulate default contact fetch since it doesn't have a specific endpoint yet
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setFormState('success');
      form.reset();
      if (activeTab === 'contato') setAssunto('');
      
      setTimeout(() => setFormState('idle'), 5000);
    } catch (error) {
      console.error(error);
      setFormState('idle');
      alert('Não foi possível enviar. Tente novamente.');
    }
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
            <h3 className="text-[24px] font-bold text-[#0B3D6E] mb-6">
              {activeTab === 'estudante' ? 'Faça parte da nossa comunidade' : 'Envie sua mensagem'}
            </h3>
            
            <div className="flex border-b border-[#E1E8EF] mb-6">
              <button 
                type="button"
                className={`flex-1 pb-3 px-2 font-semibold text-[15px] transition-colors border-b-2 ${activeTab === 'contato' ? 'border-[#1FA8A0] text-[#1FA8A0]' : 'border-transparent text-[#5A6B7B] hover:text-[#1E2A38]'}`}
                onClick={() => { setActiveTab('contato'); setFormState('idle'); }}
              >
                Contato / Médico
              </button>
              <button 
                type="button"
                className={`flex-1 pb-3 px-2 font-semibold text-[15px] transition-colors border-b-2 ${activeTab === 'estudante' ? 'border-[#1FA8A0] text-[#1FA8A0]' : 'border-transparent text-[#5A6B7B] hover:text-[#1E2A38]'}`}
                onClick={() => { setActiveTab('estudante'); setFormState('idle'); }}
              >
                Sou Estudante
              </button>
            </div>

            {formState === 'success' && (
              <div className="mb-6 p-4 bg-[#1FA8A0]/10 border border-[#1FA8A0]/20 text-[#1FA8A0] rounded-lg font-medium text-center">
                Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {activeTab === 'contato' ? (
                <>
                  <div className="mb-5">
                    <label htmlFor="assunto" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Selecione um assunto</label>
                    <select id="assunto" name="assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]">
                      <option value="">Escolha uma opção</option>
                      <option value="contratar">Quero contratar serviços</option>
                      <option value="medico">Sou médico e quero me cadastrar</option>
                      <option value="parceria">Parcerias</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="nome" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Nome completo</label>
                    <input type="text" id="nome" name="nome" placeholder="Seu nome" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
                  </div>
                  
                  {assunto !== 'medico' && (
                    <div className="mb-5">
                      <label htmlFor="instituicao" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Instituição</label>
                      <input type="text" id="instituicao" name="instituicao" placeholder="Nome do hospital ou clínica" className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
                    </div>
                  )}
                  
                  <div className="mb-5">
                    <label htmlFor="email" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="seu@email.com" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="telefone" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">{assunto === 'medico' ? 'WhatsApp' : 'Telefone'}</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required={assunto === 'medico'} className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
                  </div>

                  {assunto === 'medico' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <div>
                          <label htmlFor="crm" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">CRM</label>
                          <input type="text" id="crm" name="crm" placeholder="Número do CRM" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
                        </div>
                        <div>
                          <label htmlFor="uf" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">UF</label>
                          <input type="text" id="uf" name="uf" placeholder="Ex: SP" maxLength={2} pattern="[A-Za-z]{2}" title="Digite a sigla do estado (2 letras)" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0] uppercase" />
                        </div>
                      </div>
                      
                      <div className="mb-5">
                        <label htmlFor="especialidade" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Especialidade</label>
                        <select id="especialidade" name="especialidade" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]">
                          <option value="">Selecione...</option>
                          <option value="Ainda não sei">Ainda não sei</option>
                          <option value="Clínica Médica">Clínica Médica</option>
                          <option value="Cirurgia">Cirurgia</option>
                          <option value="Pediatria">Pediatria</option>
                          <option value="Ginecologia e Obstetrícia">Ginecologia e Obstetrícia</option>
                          <option value="Cardiologia">Cardiologia</option>
                          <option value="Medicina de Emergência">Medicina de Emergência</option>
                          <option value="Outra">Outra</option>
                        </select>
                      </div>
                    </>
                  )}
                  
                  <div className="mb-5">
                    <label htmlFor="mensagem" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Mensagem</label>
                    <textarea id="mensagem" name="mensagem" placeholder="Conte-nos sobre a sua necessidade..." required={assunto !== 'medico'} className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0] min-h-[120px] resize-y"></textarea>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-5">
                    <label htmlFor="nome_estudante" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Nome completo</label>
                    <input type="text" id="nome_estudante" name="nome" placeholder="Seu nome" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="email_estudante" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">E-mail</label>
                    <input type="email" id="email_estudante" name="email" placeholder="seu@email.com" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="whatsapp_estudante" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">WhatsApp</label>
                    <input type="tel" id="whatsapp_estudante" name="telefone" placeholder="(00) 00000-0000" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <label htmlFor="ano_faculdade" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Ano da Faculdade</label>
                      <select id="ano_faculdade" name="ano_faculdade" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]">
                        <option value="">Selecione...</option>
                        <option value="1º ano">1º ano</option>
                        <option value="2º ano">2º ano</option>
                        <option value="3º ano">3º ano</option>
                        <option value="4º ano">4º ano</option>
                        <option value="5º ano">5º ano</option>
                        <option value="6º ano">6º ano</option>
                        <option value="Recém-formado">Recém-formado</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="uf_estudante" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">UF</label>
                      <input type="text" id="uf_estudante" name="uf" placeholder="Ex: SP" maxLength={2} pattern="[A-Za-z]{2}" title="Digite a sigla do estado (2 letras)" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0] uppercase" />
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="especialidade_estudante" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Especialidade (Opcional)</label>
                    <select id="especialidade_estudante" name="especialidade" className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]">
                      <option value="">Selecione...</option>
                      <option value="Ainda não sei">Ainda não sei</option>
                      <option value="Clínica Médica">Clínica Médica</option>
                      <option value="Cirurgia">Cirurgia</option>
                      <option value="Pediatria">Pediatria</option>
                      <option value="Ginecologia e Obstetrícia">Ginecologia e Obstetrícia</option>
                      <option value="Cardiologia">Cardiologia</option>
                      <option value="Medicina de Emergência">Medicina de Emergência</option>
                      <option value="Outra">Outra</option>
                    </select>
                  </div>
                </>
              )}

              <div className="flex items-start gap-2.5 text-[13px] text-[#5A6B7B] mb-6">
                <input type="checkbox" id={`termos-${activeTab}`} required className="mt-1" />
                <label htmlFor={`termos-${activeTab}`}>Li, entendi e estou de acordo com a <a href="#" className="text-[#1FA8A0] hover:underline">Política de Privacidade</a>.</label>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={formState === 'submitting'}
              >
                {formState === 'submitting' ? 'Enviando...' : activeTab === 'estudante' ? 'Quero Participar' : assunto === 'medico' ? 'Quero me Cadastrar' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
