// src/app/(cliente)/layout.tsx
import React from "react";
import Link from "next/link";

export default function ClienteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9] text-slate-900">
      {/* Cabeçalho / Navbar do Checkout */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#0047AB] flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[24px]">local_pharmacy</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-[#0047AB] leading-tight tracking-tight">
                DROGARIA SANTA MARIA
              </span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                Tradição &amp; Saúde
              </span>
            </div>
          </Link>

          {/* Stepper (1. Carrinho -> 2. Identificação -> 3. Pagamento) */}
          <nav className="hidden md:flex items-center gap-3 text-xs font-bold">
            <div className="flex items-center gap-2 text-[#0047AB]">
              <span className="w-6 h-6 rounded-full bg-[#0047AB] text-white flex items-center justify-center">
                1
              </span>
              <span>Carrinho</span>
            </div>
            <div className="w-10 h-0.5 bg-slate-200" />
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center">
                2
              </span>
              <span>Identificação</span>
            </div>
            <div className="w-10 h-0.5 bg-slate-200" />
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center">
                3
              </span>
              <span>Pagamento</span>
            </div>
          </nav>

          {/* Selo de Segurança / Ajuda */}
          <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-[11px] font-bold">Compra 100% Segura</span>
              <span className="text-[10px] text-emerald-600">SSL Criptografado</span>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 w-full">{children}</main>

      {/* Rodapé Institucional */}
      <footer className="bg-[#0B2545] text-slate-300 mt-auto border-t-4 border-[#0047AB]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          {/* Coluna 1 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-sm">
              <span className="material-symbols-outlined text-red-500">local_pharmacy</span>
              DROGARIA SANTA MARIA
            </div>
            <p className="text-slate-400 leading-relaxed">
              Cuidando da sua saúde com agilidade, procedência garantida e orientação farmacêutica em tempo real.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Autorizada ANVISA • CRF-SP
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold uppercase tracking-wider mb-1">Atendimento</h3>
            <span>Segunda a Sábado: 07h às 22h</span>
            <span>Domingos e Feriados: 08h às 20h</span>
            <span className="text-white font-semibold mt-1">WhatsApp: (14) 99999-0000</span>
            <span>sac@drogariasantamaria.com.br</span>
          </div>

          {/* Coluna 3 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold uppercase tracking-wider mb-1">Institucional</h3>
            <Link href="/" className="hover:text-white transition-colors">Política de Privacidade (LGPD)</Link>
            <Link href="/" className="hover:text-white transition-colors">Trocas e Devoluções</Link>
            <Link href="/" className="hover:text-white transition-colors">Envio de Receitas Digitais</Link>
            <Link href="/" className="hover:text-white transition-colors">Farmácia Popular / PBM</Link>
          </div>

          {/* Coluna 4 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold uppercase tracking-wider mb-1">Formas de Pagamento</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="px-2.5 py-1 rounded bg-white/10 text-white font-semibold">PIX (5% OFF)</span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-white font-semibold">Visa</span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-white font-semibold">Mastercard</span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-white font-semibold">Elo</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
            <span>© 2026 Drogaria Santa Maria Ltda. CNPJ: 00.000.000/0001-00</span>
            <span>Farmacêutico Responsável: Dr. Carlos Eduardo • CRF-SP 00000</span>
          </div>
        </div>
      </footer>
    </div>
  );
}