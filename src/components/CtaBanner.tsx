export default function CtaBanner() {
  return (
    <section className="pt-0 pb-[100px] max-md:pb-[70px]">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-[#1FA8A0] to-[#2CC4BB] rounded-[20px] p-[60px] max-md:p-6 max-md:py-10 text-center text-white">
          <h2 className="text-[36px] max-md:text-[28px] font-extrabold mb-4 leading-tight">Pronto para transformar a gestão da sua instituição?</h2>
          <p className="text-[17px] opacity-90 mb-8 max-w-[600px] mx-auto">
            Fale com um de nossos consultores e receba uma proposta personalizada para o seu hospital ou clínica.
          </p>
          <a href="https://wa.me/5516997532025" target="_blank" rel="noopener noreferrer" className="btn-white">Falar com um Consultor</a>
        </div>
      </div>
    </section>
  );
}
