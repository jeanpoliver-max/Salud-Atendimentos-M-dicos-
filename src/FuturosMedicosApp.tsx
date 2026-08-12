import { useState } from 'react';
import { ArrowLeft, BookOpen, Users, Briefcase, GraduationCap, ArrowRight, Stethoscope } from 'lucide-react';

export default function FuturosMedicosApp() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    const payload = {
      tipo: 'estudante',
      nome: data.nome,
      email: data.email,
      whatsapp: data.whatsapp,
      ano_faculdade: data.ano_faculdade,
      uf: data.uf,
      especialidade: data.especialidade,
      origem: 'futuros_medicos'
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwB8Sewb77athAxxgyEjOwSmVxRBMoMlPq8GF95Nb-8ntf-mqD2LorU8FYL0RuQlYbv/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify(payload)
      });
      
      setFormState('success');
      form.reset();
      
      setTimeout(() => setFormState('idle'), 5000);
    } catch (error) {
      console.error(error);
      setFormState('idle');
      alert('Não foi possível enviar. Tente novamente.');
    }
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
        <nav className="container-custom flex items-center justify-between py-4">
          <a href="/" className="flex items-center no-underline group">
            <img 
              src="https://i.imgur.com/IhrnJeZ.png" 
              alt="Salud Atendimentos Médicos" 
              className="h-[55px] md:h-[65px] w-auto object-contain transition-transform group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
          </a>
          <a href="/" className="flex items-center gap-2 text-[#0B3D6E] font-medium hover:text-[#1FA8A0] transition-colors">
            <ArrowLeft size={20} />
            <span className="hidden md:inline">Voltar ao site principal</span>
          </a>
        </nav>
      </header>

      <main className="pt-[90px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#F4F7FA] to-white section-padding text-center">
          <div className="container-custom max-w-4xl mx-auto">
            <span className="section-tag">Comunidade Salud</span>
            <h1 className="text-[44px] md:text-[56px] font-extrabold text-[#0B3D6E] leading-[1.1] mb-6 tracking-tight">
              Sua jornada para a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1FA8A0] to-[#2CC4BB]">carreira médica</span> de excelência começa aqui.
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#5A6B7B] leading-relaxed mb-10">
              Prepare-se para o internato e para o mercado de trabalho com conteúdos práticos, 
              guias essenciais e o suporte de uma rede de médicos experientes.
            </p>
            <a href="#cadastro" className="btn-primary inline-flex items-center gap-2 text-[16px] px-8 py-4">
              Quero me preparar <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* Benefícios */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title text-center">Por que participar?</h2>
              <p className="section-subtitle mx-auto text-center">
                A transição da faculdade para a prática médica exige mais do que teoria. 
                Nossa comunidade foca na sua realidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F4F7FA] p-8 rounded-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
                <div className="w-14 h-14 rounded-full bg-[#1FA8A0]/10 flex items-center justify-center mb-6">
                  <BookOpen className="text-[#1FA8A0]" size={28} />
                </div>
                <h3 className="text-[20px] font-bold text-[#0B3D6E] mb-3">Conteúdo Semanal</h3>
                <p className="text-[#5A6B7B] leading-relaxed">
                  Receba dicas práticas, discussões de casos reais e atualizações médicas diretas no seu e-mail ou WhatsApp.
                </p>
              </div>
              <div className="bg-[#F4F7FA] p-8 rounded-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
                <div className="w-14 h-14 rounded-full bg-[#1FA8A0]/10 flex items-center justify-center mb-6">
                  <Stethoscope className="text-[#1FA8A0]" size={28} />
                </div>
                <h3 className="text-[20px] font-bold text-[#0B3D6E] mb-3">Guias do Internato</h3>
                <p className="text-[#5A6B7B] leading-relaxed">
                  Sobreviva e brilhe nos plantões do internato com protocolos simplificados e manuais de bolso.
                </p>
              </div>
              <div className="bg-[#F4F7FA] p-8 rounded-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
                <div className="w-14 h-14 rounded-full bg-[#1FA8A0]/10 flex items-center justify-center mb-6">
                  <Briefcase className="text-[#1FA8A0]" size={28} />
                </div>
                <h3 className="text-[20px] font-bold text-[#0B3D6E] mb-3">Oportunidades</h3>
                <p className="text-[#5A6B7B] leading-relaxed">
                  Networking, visão sobre o mercado de trabalho e portas abertas para a sua futura atuação médica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* A Jornada */}
        <section className="section-padding bg-[#082C50] text-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[40px] font-extrabold mb-4">A Jornada do Futuro Médico</h2>
              <p className="text-white/70 max-w-2xl mx-auto text-[18px]">Estaremos com você em todas as fases da sua formação.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto relative">
              {/* Linha conectora desktop */}
              <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0"></div>
              
              <div className="flex-1 relative z-10 text-center group">
                <div className="w-24 h-24 mx-auto bg-[#0B3D6E] border-4 border-[#1FA8A0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="text-[#1FA8A0]" size={36} />
                </div>
                <h3 className="text-[22px] font-bold mb-2">Preparação</h3>
                <p className="text-[#2CC4BB] font-medium mb-3">Agora até 2027</p>
                <p className="text-white/70 text-[15px]">Construindo a base clínica sólida, macetes de estudo e imersão no raciocínio clínico correto.</p>
              </div>

              <div className="flex-1 relative z-10 text-center group">
                <div className="w-24 h-24 mx-auto bg-[#0B3D6E] border-4 border-[#1FA8A0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Stethoscope className="text-[#1FA8A0]" size={36} />
                </div>
                <h3 className="text-[22px] font-bold mb-2">Internato</h3>
                <p className="text-[#2CC4BB] font-medium mb-3">2027 até a Formação</p>
                <p className="text-white/70 text-[15px]">Mão na massa. Postura no plantão, exames, evolução e condutas práticas nas principais áreas.</p>
              </div>

              <div className="flex-1 relative z-10 text-center group">
                <div className="w-24 h-24 mx-auto bg-[#0B3D6E] border-4 border-[#1FA8A0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase className="text-[#1FA8A0]" size={36} />
                </div>
                <h3 className="text-[22px] font-bold mb-2">Mercado</h3>
                <p className="text-[#2CC4BB] font-medium mb-3">Após a Formação</p>
                <p className="text-white/70 text-[15px]">Mentoria de carreira, plantões reais, questões burocráticas (CRM, PJ) e networking com a Salud.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cadastro Form */}
        <section id="cadastro" className="section-padding bg-[#F4F7FA]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="text-center mb-10">
                <Users className="text-[#1FA8A0] w-12 h-12 mx-auto mb-4" />
                <h2 className="text-[28px] font-bold text-[#0B3D6E] mb-3">Faça parte da nossa comunidade</h2>
                <p className="text-[#5A6B7B]">Cadastre-se gratuitamente para receber materiais exclusivos e fazer parte do grupo de estudantes da Salud.</p>
              </div>

              {formState === 'success' && (
                <div className="mb-8 p-5 bg-[#1FA8A0]/10 border border-[#1FA8A0]/30 text-[#1FA8A0] rounded-xl font-medium text-center shadow-sm">
                  <h4 className="text-[18px] font-bold mb-1">Inscrição realizada com sucesso!</h4>
                  <p className="text-[15px] opacity-90">Bem-vindo(a) à comunidade Salud Futuros Médicos. Em breve você receberá nossos materiais.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className={formState === 'success' ? 'hidden' : 'block'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="nome" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Nome completo</label>
                    <input type="text" id="nome" name="nome" placeholder="Seu nome" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="seu@email.com" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="whatsapp" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">WhatsApp</label>
                  <input type="tel" id="whatsapp" name="whatsapp" placeholder="(00) 00000-0000" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
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
                    <label htmlFor="uf" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">UF (Estado)</label>
                    <input type="text" id="uf" name="uf" placeholder="Ex: SP" maxLength={2} pattern="[A-Za-z]{2}" title="Digite a sigla do estado (2 letras)" required className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0] uppercase" />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="especialidade" className="block text-[14px] font-semibold text-[#1E2A38] mb-2">Especialidade de Interesse (Opcional)</label>
                  <select id="especialidade" name="especialidade" className="w-full p-3.5 border-1.5 border-[#E1E8EF] rounded-[10px] text-[15px] text-[#1E2A38] bg-[#FAFCFE] transition-colors focus:outline-none focus:border-[#1FA8A0]">
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

                <div className="flex items-start gap-3 text-[14px] text-[#5A6B7B] mb-8">
                  <input type="checkbox" id="termos" required className="mt-1 w-4 h-4 rounded text-[#1FA8A0] focus:ring-[#1FA8A0]" />
                  <label htmlFor="termos" className="leading-snug">
                    Declaro que sou estudante de medicina (ou recém-formado) e aceito a <a href="#" className="text-[#1FA8A0] font-medium hover:underline">Política de Privacidade</a> da Salud.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary w-full text-[16px] py-4 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? 'Enviando sua inscrição...' : 'Quero Participar da Comunidade'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Simplificado */}
      <footer className="bg-[#082C50] text-white/70 py-10">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <img 
              src="https://i.imgur.com/IhrnJeZ.png" 
              alt="Salud Atendimentos Médicos" 
              className="h-[40px] w-auto object-contain bg-white px-3 py-1.5 rounded-lg mb-3 mx-auto md:mx-0" 
              referrerPolicy="no-referrer"
            />
            <p className="text-[13px] text-white/50">Salud Atendimentos Médicos © Todos os direitos reservados.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-[14px]">
            <a href="/" className="hover:text-white transition-colors">Site Institucional</a>
            <span className="hidden md:inline text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </>
  );
}
