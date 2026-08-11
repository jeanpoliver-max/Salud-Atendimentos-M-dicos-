export default function Process() {
  return (
    <section className="section-padding">
      <div className="container-custom text-center">
        <span className="section-tag">Como funciona</span>
        <h2 className="section-title">Processo simples e transparente</h2>
        <p className="section-subtitle mx-auto">
          Da primeira conversa à implantação, acompanhamos cada etapa com proximidade e eficiência.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-5 relative">
            <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-[#0B3D6E] to-[#1FA8A0] rounded-full flex items-center justify-center text-white text-[24px] font-extrabold">1</div>
            <h3 className="text-[18px] font-bold text-[#0B3D6E] mb-2.5">Contato e Briefing</h3>
            <p className="text-[#5A6B7B] text-[14px]">Entendemos as necessidades e o contexto da sua instituição.</p>
          </div>
          <div className="text-center p-5 relative">
            <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-[#0B3D6E] to-[#1FA8A0] rounded-full flex items-center justify-center text-white text-[24px] font-extrabold">2</div>
            <h3 className="text-[18px] font-bold text-[#0B3D6E] mb-2.5">Diagnóstico</h3>
            <p className="text-[#5A6B7B] text-[14px]">Analisamos demandas, escalas e pontos críticos da operação.</p>
          </div>
          <div className="text-center p-5 relative">
            <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-[#0B3D6E] to-[#1FA8A0] rounded-full flex items-center justify-center text-white text-[24px] font-extrabold">3</div>
            <h3 className="text-[18px] font-bold text-[#0B3D6E] mb-2.5">Proposta Personalizada</h3>
            <p className="text-[#5A6B7B] text-[14px]">Apresentamos uma solução sob medida para o seu cenário.</p>
          </div>
          <div className="text-center p-5 relative">
            <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-[#0B3D6E] to-[#1FA8A0] rounded-full flex items-center justify-center text-white text-[24px] font-extrabold">4</div>
            <h3 className="text-[18px] font-bold text-[#0B3D6E] mb-2.5">Implantação e Acompanhamento</h3>
            <p className="text-[#5A6B7B] text-[14px]">Colocamos em prática com suporte próximo e contínuo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
