import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section className="section-padding" id="quem-somos">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
          <div className="rounded-[20px] overflow-hidden h-[400px] lg:h-[480px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1200&auto=format&fit=crop" 
              alt="Profissionais de saúde em reunião" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-lg:order-1">
            <span className="section-tag">Quem somos</span>
            <h2 className="section-title">A qualidade está no nosso DNA</h2>
            <p className="text-[17px] text-[#5A6B7B] max-w-[700px] mb-5">
              Nascemos da união de profissionais experientes em saúde com a visão de entregar o cuidado de forma ética, com transparência e alinhamento com a gestão das instituições de saúde.
            </p>
            <p className="text-[17px] text-[#5A6B7B] mb-8">
              Estamos em constante movimento e a nossa missão é transformar a gestão de saúde no Brasil, oferecendo soluções assertivas que impactam positivamente na entrega final.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-[#F4F7FA] rounded-xl font-semibold text-[#0B3D6E] text-[15px]">
                <CheckCircle2 className="text-[#1FA8A0] shrink-0" size={22} />
                Ética e transparência
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#F4F7FA] rounded-xl font-semibold text-[#0B3D6E] text-[15px]">
                <CheckCircle2 className="text-[#1FA8A0] shrink-0" size={22} />
                Compromisso com resultado
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#F4F7FA] rounded-xl font-semibold text-[#0B3D6E] text-[15px]">
                <CheckCircle2 className="text-[#1FA8A0] shrink-0" size={22} />
                Valorização de pessoas
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#F4F7FA] rounded-xl font-semibold text-[#0B3D6E] text-[15px]">
                <CheckCircle2 className="text-[#1FA8A0] shrink-0" size={22} />
                Melhoria contínua
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
