import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-[14px] sm:text-[15px] text-[#5A6B7B] max-w-4xl">
        <strong>Aviso de Cookies:</strong> Utilizamos cookies para oferecer uma melhor experiência, analisar o tráfego do site e personalizar conteúdo. Ao continuar navegando, você concorda com o uso de cookies.
      </div>
      <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
        <button 
          onClick={declineCookies}
          className="px-4 py-2.5 text-[14px] font-medium text-[#5A6B7B] hover:text-[#0B3D6E] hover:bg-[#F4F7FA] rounded-lg transition-colors w-full md:w-auto"
        >
          Recusar
        </button>
        <button 
          onClick={acceptCookies}
          className="bg-[#1FA8A0] text-white px-6 py-2.5 rounded-lg text-[14px] font-medium hover:bg-[#158f88] hover:shadow-md transition-all duration-300 w-full md:w-auto"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
