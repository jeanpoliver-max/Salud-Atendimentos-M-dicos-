export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[120px] pb-20 bg-gradient-to-br from-[#082C50] to-[#0B3D6E] text-white overflow-hidden" id="inicio">
      {/* Decorative blobs */}
      <div className="absolute -top-[50%] -right-[20%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(31,168,160,0.3),transparent_70%)] rounded-full z-0 pointer-events-none max-md:-right-[50%] max-md:-top-[30%]"></div>
      <div className="absolute -bottom-[30%] -left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(31,168,160,0.2),transparent_70%)] rounded-full z-0 pointer-events-none max-md:-left-[40%] max-md:-bottom-[20%]"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-[60px] items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#1FA8A0]/15 border border-[#1FA8A0]/40 text-[#2CC4BB] px-[18px] py-2 rounded-full text-[13px] font-semibold mb-6">
              <span className="text-[10px]">&bull;</span> Gestão Hospitalar e Terceirização de Serviços Médicos
            </span>
            <h1 className="text-[40px] lg:text-[52px] font-extrabold leading-[1.15] mb-6 tracking-[-1px]">
              Gestão hospitalar e cobertura médica <span className="text-[#2CC4BB]">completa</span> para a sua instituição
            </h1>
            <p className="text-[18px] text-white/85 mb-9 max-w-[540px]">
              Fornecemos médicos plantonistas e especialistas, gestão administrativa e atendimento ambulatorial com qualidade, pontualidade e acompanhamento próximo.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/5516997532025" target="_blank" rel="noopener noreferrer" className="btn-primary">Solicitar Proposta</a>
              <a href="#servicos" className="btn-secondary text-white border-white hover:bg-white hover:text-[#082C50]">Conhecer Serviços</a>
            </div>
            
            <div className="flex flex-wrap gap-6 lg:gap-10 mt-12 pt-8 border-t border-white/15">
              <div>
                <div className="text-[32px] font-extrabold text-[#2CC4BB]">+120</div>
                <div className="text-[14px] text-white/70">Instituições atendidas</div>
              </div>
              <div>
                <div className="text-[32px] font-extrabold text-[#2CC4BB]">+800</div>
                <div className="text-[14px] text-white/70">Profissionais médicos</div>
              </div>
              <div>
                <div className="text-[32px] font-extrabold text-[#2CC4BB]">98%</div>
                <div className="text-[14px] text-white/70">Satisfação dos clientes</div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] h-[400px] lg:h-[520px]">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop" 
              alt="Equipe médica em ambiente hospitalar" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082C50]/40 to-transparent bottom-0 h-2/5 top-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
