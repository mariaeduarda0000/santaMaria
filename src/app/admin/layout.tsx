import React from 'react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-sans text-slate-900">
      {/* MENU LATERAL (Sidebar) */}
      <aside className="w-64 shrink-0 bg-slate-100/90 border-r border-slate-200 hidden md:flex flex-col justify-between h-full">
        <div className="flex flex-col overflow-y-auto">
          {/* Logo */}
          <div className="px-5 py-4 flex items-center gap-3 border-b border-slate-200">
            <div className="w-9 h-9 rounded-lg bg-red-700 text-white flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">local_pharmacy</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold leading-tight text-slate-900">Santa Maria</span>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                Gestão &amp; SNGPC
              </span>
            </div>
          </div>

          {/* Navegação */}
          <nav className="flex-1 p-3 flex flex-col gap-1 mt-1">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              Visão Geral
            </Link>
            <Link
              href="/admin/controle-lotes"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-100 text-blue-900 text-sm font-semibold"
            >
              <span className="material-symbols-outlined text-[20px] text-blue-700">inventory_2</span>
              Controle de Lotes
            </Link>
            <Link
              href="/admin/receitas"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">receipt</span>
              Receitas &amp; Retenção
            </Link>
            <Link
              href="/admin/pdv"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">local_shipping</span>
              Expedição &amp; Balcão
            </Link>
            <Link
              href="/admin/manipulacao"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">science</span>
              Ordens de Manipulação
            </Link>
            <Link
              href="/admin/sngpc"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">summarize</span>
              Relatórios SNGPC
            </Link>
          </nav>
        </div>

        {/* Rodapé da Sidebar */}
        <div className="p-3 flex flex-col gap-2 border-t border-slate-200 shrink-0">
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col gap-0.5">
            <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">wifi_tethering</span>
              Plantão Online
            </span>
            <span className="font-mono text-xs text-slate-500">CRF Ativo: 45.892-SP</span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-[18px]">storefront</span>
            Voltar à Loja
          </Link>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL (Topbar + Conteúdo) */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="px-6 py-3 bg-white border-b border-slate-200 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2 text-red-700 text-sm font-semibold">
            <span className="material-symbols-outlined text-[20px]">verified</span>
            Ambiente Farmacêutico Certificado
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
            </button>
            <button
              type="button"
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">help</span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right">
                <div className="text-sm font-bold text-slate-900 leading-tight">Dra. Helena Viana</div>
                <div className="text-xs text-slate-500">Farmacêutica Chefe</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-red-100 text-red-800 flex items-center justify-center font-bold text-sm">
                HV
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo das Páginas */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}