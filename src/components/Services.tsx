import { Stethoscope, Building2, HeartPulse } from 'lucide-react';

export default function Services() {
  return (
    <section className="section-padding bg-[#F4F7FA]" id="servicos">
      <div className="container-custom text-center">
        <span className="section-tag">O que fazemos</span>
        <h2 className="section-title">Soluções médicas completas e personalizadas</h2>
        <p className="section-subtitle mx-auto">
          Cuidamos de toda a operação de saúde da sua instituição, para que você foque no que realmente importa: o cuidado com os seus pacientes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
          <div className="bg-white rounded-[16px] p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all duration-300 border-t-4 border-[#1FA8A0]">
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#0B3D6E] to-[#1FA8A0] rounded-[14px] flex items-center justify-center mb-5 text-white">
              <Stethoscope size={28} />
            </div>
            <h3 className="text-[20px] font-bold text-[#0B3D6E] mb-3">Fornecimento de Médicos</h3>
            <p className="text-[#5A6B7B] text-[15px]">
              Plantonistas e especialistas qualificados de diversas áreas, prontos para cobrir escalas com pontualidade e excelência técnica.
            </p>
          </div>

          <div className="bg-white rounded-[16px] p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all duration-300 border-t-4 border-[#1FA8A0]">
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#0B3D6E] to-[#1FA8A0] rounded-[14px] flex items-center justify-center mb-5 text-white">
              <Building2 size={28} />
            </div>
            <h3 className="text-[20px] font-bold text-[#0B3D6E] mb-3">Gestão Hospitalar e Administrativa</h3>
            <p className="text-[#5A6B7B] text-[15px]">
              Processos, escalas, compliance e eficiência operacional sob controle, com uso estratégico de ferramentas tecnológicas.
            </p>
          </div>

          <div className="bg-white rounded-[16px] p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all duration-300 border-t-4 border-[#1FA8A0]">
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#0B3D6E] to-[#1FA8A0] rounded-[14px] flex items-center justify-center mb-5 text-white">
              <HeartPulse size={28} />
            </div>
            <h3 className="text-[20px] font-bold text-[#0B3D6E] mb-3">Atendimento Ambulatorial</h3>
            <p className="text-[#5A6B7B] text-[15px]">
              Consultas e serviços clínicos com padrão de excelência, garantindo experiência humanizada e resultados de qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
