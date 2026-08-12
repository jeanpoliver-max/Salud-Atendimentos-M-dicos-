import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function PoliticaDePrivacidadeApp() {
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

      <main className="pt-[120px] pb-24 bg-[#F4F7FA] min-h-screen">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            
            <div className="flex items-center gap-4 mb-8 border-b border-[#E1E8EF] pb-8">
              <div className="w-16 h-16 rounded-full bg-[#1FA8A0]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="text-[#1FA8A0]" size={32} />
              </div>
              <div>
                <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#0B3D6E] leading-tight tracking-tight">
                  Política de Privacidade
                </h1>
                <p className="text-[#5A6B7B] text-[15px] mt-2">
                  Saiba como cuidamos dos seus dados com segurança e transparência.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-[#5A6B7B] leading-relaxed">
              
              <h2 className="text-[22px] font-bold text-[#0B3D6E] mt-8 mb-4">1. Introdução</h2>
              <p className="mb-6">
                A <strong>Salud Atendimentos Médicos</strong>, especializada em gestão hospitalar e terceirização de serviços médicos, reafirma o seu compromisso com a segurança, a privacidade e a transparência no tratamento dos dados pessoais de seus usuários, clientes, parceiros e médicos. Esta Política de Privacidade explica como coletamos, utilizamos, compartilhamos e protegemos as suas informações, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>

              <h2 className="text-[22px] font-bold text-[#0B3D6E] mt-8 mb-4">2. Dados Coletados</h2>
              <p className="mb-4">
                Coletamos apenas as informações estritamente necessárias para a prestação dos nossos serviços, enviadas voluntariamente por você através dos nossos formulários no site. Os dados que podemos coletar incluem:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Dados de Contato e Identificação:</strong> Nome completo, E-mail, WhatsApp, Telefone e Instituição.</li>
                <li><strong>Dados Profissionais e Acadêmicos:</strong> Ano da faculdade, UF (Estado), Especialidade de interesse e CRM.</li>
                <li><strong>Outras Informações:</strong> Mensagens ou comentários enviados nos campos abertos dos formulários de contato.</li>
              </ul>

              <h2 className="text-[22px] font-bold text-[#0B3D6E] mt-8 mb-4">3. Finalidade do Tratamento</h2>
              <p className="mb-4">
                Os dados pessoais coletados são utilizados exclusivamente para as seguintes finalidades:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Responder a solicitações de propostas comerciais e dúvidas de clientes ou parceiros.</li>
                <li>Realizar e avaliar o cadastro de médicos interessados em atuar conosco.</li>
                <li>Realizar o cadastro de estudantes de medicina em nossa comunidade "Salud Futuros Médicos", fornecendo conteúdos informativos.</li>
                <li>Manter comunicação ágil via e-mail ou WhatsApp referente aos nossos serviços, parcerias e atualizações.</li>
              </ul>

              <h2 className="text-[22px] font-bold text-[#0B3D6E] mt-8 mb-4">4. Base Legal</h2>
              <p className="mb-6">
                O tratamento das suas informações é realizado mediante o seu <strong>consentimento explícito</strong> (conforme previsto no Art. 7º, inciso I, da LGPD), concedido no momento do preenchimento e envio dos formulários. Além disso, utilizamos os dados com base no nosso <strong>legítimo interesse</strong> em promover e operar nossas atividades de gestão em saúde, respeitando sempre as suas liberdades e direitos fundamentais.
              </p>

              <h2 className="text-[22px] font-bold text-[#0B3D6E] mt-8 mb-4">5. Compartilhamento de Dados</h2>
              <p className="mb-6">
                A Salud Atendimentos Médicos não comercializa, vende ou aluga seus dados pessoais. O compartilhamento de informações ocorrerá <strong>exclusivamente</strong> com parceiros tecnológicos (como serviços de hospedagem e servidores em nuvem necessários à nossa operação) que também seguem os rigorosos padrões de segurança da informação, ou mediante obrigação legal e regulatória por requisição de autoridades competentes.
              </p>

              <h2 className="text-[22px] font-bold text-[#0B3D6E] mt-8 mb-4">6. Armazenamento e Segurança</h2>
              <p className="mb-6">
                Seus dados são armazenados em ambientes seguros e confiáveis, suportados por provedores de infraestrutura globais (como serviços Google), que aplicam medidas técnicas, operacionais e organizacionais rigorosas para evitar acesso não autorizado, perda, alteração ou vazamento das informações.
              </p>

              <h2 className="text-[22px] font-bold text-[#0B3D6E] mt-8 mb-4">7. Seus Direitos como Titular</h2>
              <p className="mb-4">
                Em conformidade com o Art. 18 da LGPD, você, como titular dos dados, possui direitos que podem ser exercidos a qualquer momento, incluindo:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Acesso:</strong> Solicitar a confirmação e o acesso aos dados que possuímos sobre você.</li>
                <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                <li><strong>Exclusão:</strong> Solicitar a exclusão ou anonimização dos seus dados pessoais dos nossos sistemas (ressalvadas as guardas obrigatórias por lei).</li>
                <li><strong>Portabilidade:</strong> Solicitar a transferência dos seus dados a outro prestador de serviços, mediante requisição expressa.</li>
                <li><strong>Revogação do Consentimento:</strong> Retirar, a qualquer momento, o consentimento dado anteriormente para o tratamento dos dados.</li>
              </ul>

              <h2 className="text-[22px] font-bold text-[#0B3D6E] mt-8 mb-4">8. Uso de Cookies</h2>
              <p className="mb-6">
                O nosso site utiliza cookies — pequenos arquivos de texto baixados no seu dispositivo — para garantir o funcionamento correto da plataforma, gravar suas preferências, melhorar a sua experiência de navegação e para análise anônima de tráfego. Você pode configurar seu navegador a qualquer instante para recusar ou ser alertado quando cookies estiverem sendo enviados.
              </p>

              <h2 className="text-[22px] font-bold text-[#0B3D6E] mt-8 mb-4">9. Contato do Encarregado (DPO)</h2>
              <p className="mb-6">
                Para exercer seus direitos, fazer solicitações ou esclarecer quaisquer dúvidas sobre esta Política de Privacidade, entre em contato diretamente com a nossa equipe responsável pela proteção de dados pelo e-mail:
                <br/>
                <a href="mailto:saludatendimentosmedicos@gmail.com" className="text-[#1FA8A0] font-semibold hover:underline mt-2 inline-block">
                  saludatendimentosmedicos@gmail.com
                </a>
              </p>

              <h2 className="text-[22px] font-bold text-[#0B3D6E] mt-8 mb-4">10. Alterações na Política</h2>
              <p className="mb-6">
                Buscamos constantemente melhorar nossos processos, por isso, esta Política de Privacidade pode ser atualizada periodicamente para refletir essas melhorias ou para adequar-se a novas determinações legais. 
              </p>
            </div>
            
          </div>
        </div>
      </main>

      {/* Footer */}
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
            <p className="text-[12px] text-white/40 mt-1">Última atualização: Agosto de 2026</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-[14px]">
            <a href="/" className="hover:text-white transition-colors">Voltar ao site</a>
            <span className="hidden md:inline text-white/20">|</span>
            <a href="/futuros-medicos.html" className="hover:text-white transition-colors">Comunidade Estudantes</a>
          </div>
        </div>
      </footer>
    </>
  );
}
