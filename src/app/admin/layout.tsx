import React from 'react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-surface-container-lowest font-sans text-on-surface">
      {/* MENU LATERAL (Sidebar) */}
      <aside className="w-64 shrink-0 bg-surface-container-low border-r border-surface-container hidden md:flex flex-col justify-between h-full">
        <div className="flex flex-col overflow-y-auto">
          <div className="p-4 flex items-center gap-2 border-b border-surface-container">
            <span className="material-symbols-outlined text-primary">local_pharmacy</span>
            <div className="flex flex-col">
              <span className="font-title-md font-bold leading-tight">Santa Maria</span>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                Gestão &amp; SNGPC
              </span>
            </div>
          </div>

          <nav className="flex-1 p-2 flex flex-col gap-1 mt-2">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-2 p-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors text-left text-label-md"
            >
              <span className="material-symbols-outlined text-[18px]">dashboard</span> Visão Geral
            </Link>
            <Link
              href="/admin/controle-lotes"
              className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary-container text-on-secondary-container text-left text-label-md font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">inventory_2</span> Controle de Lotes
            </Link>
            <Link
              href="/admin/receitas"
              className="flex items-center gap-2 p-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors text-left text-label-md"
            >
              <span className="material-symbols-outlined text-[18px]">receipt</span> Receitas &amp; Retenção
            </Link>
            <Link
              href="/admin/pdv"
              className="flex items-center gap-2 p-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors text-left text-label-md"
            >
              <span className="material-symbols-outlined text-[18px]">local_shipping</span> Expedição &amp; Balcão
            </Link>
            <Link
              href="/admin/manipulacao"
              className="flex items-center gap-2 p-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors text-left text-label-md"
            >
              <span className="material-symbols-outlined text-[18px]">science</span> Ordens de Manipulação
            </Link>
            <Link
              href="/admin/sngpc"
              className="flex items-center gap-2 p-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors text-left text-label-md"
            >
              <span className="material-symbols-outlined text-[18px]">summarize</span> Relatórios SNGPC
            </Link>
          </nav>
        </div>

        {/* Rodapé da Sidebar */}
        <div className="p-3 flex flex-col gap-2 border-t border-surface-container shrink-0">
          <div className="p-3 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
            <span className="text-xs font-semibold text-tertiary flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px]">wifi_tethering</span> Plantão Online
            </span>
            <span className="font-code-sm text-xs text-on-surface-variant">CRF Ativo: 45.892-SP</span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 p-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors text-label-md"
          >
            <span className="material-symbols-outlined text-[18px]">storefront</span> Voltar à Loja
          </Link>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL (Topbar + Conteúdo das Páginas) */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* CABEÇALHO SUPERIOR (Topbar) */}
        <header className="px-6 py-3 bg-surface-container-lowest border-b border-surface-container flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2 text-primary font-label-md">
            <span className="material-symbols-outlined">verified</span>
            Ambiente Farmacêutico Certificado
          </div>
          <div className="flex items-center gap-4">
            <button type="button" className="text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button type="button" className="text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div className="flex items-center gap-2 pl-2 border-l border-surface-container">
              <div className="text-right">
                <div className="text-label-md font-bold">Dra. Helena Viana</div>
                <div className="text-body-sm text-on-surface-variant">Farmacêutica Chefe</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">
                HV
              </div>
            </div>
          </div>
        </header>

        {/* CONTEÚDO DINÂMICO */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}