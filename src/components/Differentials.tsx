export default function Differentials() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#082C50] to-[#0B3D6E] text-white" id="diferenciais">
      <div className="container-custom text-center">
        <span className="section-tag !bg-[#1FA8A0]/15 !text-[#2CC4BB]">Por que a Salud</span>
        <h2 className="section-title !text-white">Diferenciais que impactam a sua operação</h2>
        <p className="section-subtitle !text-white/70 mx-auto">
          Temos consciência das inúmeras dificuldades que os contratantes enfrentam no dia a dia e, juntos, propomos soluções assertivas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          <div className="p-9 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
            <div className="text-[48px] font-extrabold text-[#2CC4BB] mb-4 leading-none">01</div>
            <h3 className="text-[20px] font-bold mb-3">Qualidade e Pontualidade</h3>
            <p className="text-white/75 text-[15px]">
              Não medimos esforços para cumprir nossas metas contratuais, mantendo a qualidade de todos os serviços prestados.
            </p>
          </div>

          <div className="p-9 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
            <div className="text-[48px] font-extrabold text-[#2CC4BB] mb-4 leading-none">02</div>
            <h3 className="text-[20px] font-bold mb-3">Acompanhamento Ágil</h3>
            <p className="text-white/75 text-[15px]">
              Geramos experiências personalizadas com acompanhamento próximo e tratativas ágeis em todas as etapas.
            </p>
          </div>

          <div className="p-9 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
            <div className="text-[48px] font-extrabold text-[#2CC4BB] mb-4 leading-none">03</div>
            <h3 className="text-[20px] font-bold mb-3">Soluções Assertivas</h3>
            <p className="text-white/75 text-[15px]">
              Entendemos os desafios da sua gestão e propomos soluções que impactam positivamente na entrega final.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
