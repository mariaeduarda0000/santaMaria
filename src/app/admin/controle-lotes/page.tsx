"use client";
import React, { useState } from 'react';

export default function ControleLotesSNGPCPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSalvarLote = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Lote homologado e incorporado à base de dados. Protocolo SNGPC pendente gerado com sucesso!');
    setIsModalOpen(false);
  };

  const handleExportarXML = () => {
    const dummyXml =
      "data:text/xml;charset=utf-8," +
      encodeURIComponent(
        "<sngpc_inventario_drogaria_santa_maria crf='45892-SP' data='2024-06-24'></sngpc_inventario_drogaria_santa_maria>"
      );
    const link = document.createElement("a");
    link.href = dummyXml;
    link.download = "sngpc_inventario_santa_maria.xml";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      {/* Banner de Alerta Sanitário */}
      <div className="bg-red-100/90 border border-red-200 text-red-950 p-5 rounded-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 font-bold text-xs text-red-800 uppercase tracking-wider">
            <span className="material-symbols-outlined text-[18px]">warning</span>
            Alerta Sanitário SNGPC • RDC n° 843/2024
          </div>
          <h3 className="text-lg font-bold text-red-950">
            Lote sob Suspensão Cautelar Imediata: LT-2023-9901
          </h3>
          <p className="text-sm text-red-900/90 max-w-3xl">
            Notificação compulsória: recolhimento preventivo de Losartana Potássica 50mg (Laboratório Prati-Donaduzzi). Bloqueio digital de balcão e conferência de descarte fiscal ativados no SNGPC.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-col gap-2 shrink-0">
          <button
            type="button"
            className="px-4 py-2 bg-white text-slate-800 border border-red-200 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-xs hover:bg-slate-50 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">policy</span>
            Protocolo Rastreio Anvisa
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-red-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-xs hover:bg-red-800 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">block</span>
            Bloquear Vendas em PDV
          </button>
        </div>
      </div>

      {/* Cabeçalho da Página & Ações */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4">
        <div>
          <span className="text-xs text-blue-700 font-bold uppercase tracking-wider">
            Módulo de Retaguarda Farmacêutica • Conexão SNGPC em Tempo Real
          </span>
          <h1 className="text-2xl font-bold text-slate-900 mt-1">
            Controle Operacional de Lotes &amp; Validades
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Monitoramento metrológico e sanitário de medicamentos controlados e convencionais.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="px-4 py-2.5 flex items-center gap-2 rounded-lg text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors text-xs font-semibold shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">balance</span>
            Ajuste de Balanço
          </button>
          <button
            type="button"
            onClick={handleExportarXML}
            className="px-4 py-2.5 flex items-center gap-2 rounded-lg text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors text-xs font-semibold shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            Exportar Relatório SNGPC
          </button>
          <button
            type="button"
            onClick={handleOpenModal}
            className="px-4 py-2.5 flex items-center gap-2 rounded-lg bg-red-700 text-white hover:bg-red-800 transition-colors text-xs font-semibold shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">receipt_long</span>
            Entrada de NF / Novo Lote
          </button>
        </div>
      </div>

      {/* Cards de Indicadores (KPIs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl bg-white p-5 shadow-xs border border-slate-200 flex flex-col gap-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Lotes Ativos</span>
            <span className="material-symbols-outlined text-blue-700 text-[20px]">inventory_2</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900">284</span>
            <span className="font-mono text-xs text-emerald-700 font-semibold">+12 esta semana</span>
          </div>
          <span className="text-xs text-slate-500">R$ 148.920,00 em estoque</span>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-xs border border-slate-200 flex flex-col gap-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Crítico (&lt; 30 dias)</span>
            <span className="material-symbols-outlined text-red-600 text-[20px]">event_busy</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-red-600">09</span>
            <span className="font-mono text-xs text-red-600 font-semibold">Ação imediata</span>
          </div>
          <span className="text-xs text-slate-500">53 unidades em queima ativa</span>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-xs border border-slate-200 flex flex-col gap-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Atenção (30 a 90d)</span>
            <span className="material-symbols-outlined text-amber-600 text-[20px]">schedule</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900">24</span>
            <span className="font-mono text-xs text-amber-700 font-semibold">Prioridade FIFO</span>
          </div>
          <span className="text-xs text-slate-500">4 lotes termolábeis incluídos</span>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-xs border border-slate-200 flex flex-col gap-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Controlados (P. 344)</span>
            <span className="material-symbols-outlined text-slate-800 text-[20px]">lock</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900">68</span>
            <span className="font-mono text-xs text-emerald-700 font-semibold">100% conciliado</span>
          </div>
          <span className="text-xs text-slate-500">Último envio SNGPC: hoje 08:00</span>
        </div>
      </div>

      {/* Barra de Busca e Filtros */}
      <div className="rounded-xl bg-white p-4 shadow-xs border border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="relative flex-1">
          <span className="material-symbols-outlined text-slate-400 text-[20px] absolute left-3 top-1/2 -translate-y-1/2">
            search
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por medicamento, princípio ativo (DCB), lote ou código EAN..."
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-10 px-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 focus:outline-none focus:border-blue-500"
          >
            <option value="todos">Validade: Todos os Status</option>
            <option value="critico">Crítico (&lt; 30 dias)</option>
            <option value="atencao">Atenção (30 a 90 dias)</option>
            <option value="regular">Regular (&gt; 180 dias)</option>
          </select>
          <select className="h-10 px-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 focus:outline-none focus:border-blue-500">
            <option value="todos">Categoria: Todas</option>
            <option value="controlados">Portaria 344 (C1 / B1)</option>
            <option value="termolabeis">Termolábeis (2°C - 8°C)</option>
            <option value="genericos">Genéricos</option>
          </select>
        </div>
      </div>

      {/* Tabela de Lotes */}
      <div className="rounded-xl bg-white shadow-xs overflow-hidden flex flex-col border border-slate-200" id="tabela-lotes">
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-base font-bold text-slate-900">Tabela de Lotes Ativos &amp; Segregados</span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-200/80 font-mono text-xs text-slate-700 font-medium">
              284 lotes listados
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200/70 transition-colors"
              title="Atualizar dados"
            >
              <span className="material-symbols-outlined text-[20px]">refresh</span>
            </button>
            <button
              type="button"
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200/70 transition-colors"
              title="Visualização em colunas personalizadas"
            >
              <span className="material-symbols-outlined text-[20px]">view_column</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                <th className="py-3 px-6">Medicamento &amp; Apresentação</th>
                <th className="py-3 px-4">Lote / EAN</th>
                <th className="py-3 px-4">Laboratório</th>
                <th className="py-3 px-4">Fabricação / Validade</th>
                <th className="py-3 px-4 text-center">Localização</th>
                <th className="py-3 px-4 text-right">Estoque / Mínimo</th>
                <th className="py-3 px-4 text-right">Custos (PMC / Venda)</th>
                <th className="py-3 px-6 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">Amoxicilina + Clavulanato 500/125mg</span>
                    <span className="text-xs text-slate-500">Caixa com 21 comprimidos revestidos</span>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-semibold">Genérico</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 font-mono text-[11px] text-slate-600">Portaria 344 - C1</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-slate-900">LT-2024-8849</span>
                    <span className="font-mono text-xs text-slate-500">7896004702115</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-slate-700 text-xs font-medium">EMS Indústria Farmacêutica</td>
                <td className="py-4 px-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 font-mono text-xs">
                      <span className="text-slate-600">15/01/2024</span>
                      <span className="text-slate-400">→</span>
                      <span className="font-bold text-slate-900">15/01/2026</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Regular (&gt; 180d)
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                    Prateleira A-12
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900">142 un</span>
                    <span className="text-xs text-slate-500">Mínimo: 40 un</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900">R$ 48,90</span>
                    <span className="font-mono text-xs text-slate-500">Custo: R$ 26,40</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center gap-1">
                    <button type="button" className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors" title="Editar Informações">
                      <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    </button>
                    <button type="button" className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors" title="Queima Promocional">
                      <span className="material-symbols-outlined text-[18px]">price_change</span>
                    </button>
                    <button type="button" className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors" title="Baixa por Avaria">
                      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">Insulina Humana NPH 100 UI/mL</span>
                    <span className="text-xs text-slate-500">Frasco-ampola com 10mL (Suspensão Injetável)</span>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 text-[11px] font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">ac_unit</span> Termolábil
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium">Referência</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-slate-900">LT-2023-4102</span>
                    <span className="font-mono text-xs text-slate-500">7891045003291</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-slate-700 text-xs font-medium">Novo Nordisk Farmacêutica</td>
                <td className="py-4 px-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 font-mono text-xs">
                      <span className="text-slate-600">10/06/2023</span>
                      <span className="text-slate-400">→</span>
                      <span className="font-bold text-slate-900">25/08/2024</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-semibold w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span> Atenção (54 dias)
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-sky-100 text-sky-900 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">device_thermostat</span> Geladeira 4°C
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900">28 un</span>
                    <span className="text-xs text-red-600 font-semibold">Mínimo: 35 un (Reposição)</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900">R$ 62,50</span>
                    <span className="font-mono text-xs text-slate-500">Custo: R$ 38,10</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center gap-1">
                    <button type="button" className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    </button>
                    <button type="button" className="p-1.5 rounded-lg text-blue-700 hover:bg-blue-50 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">price_change</span>
                    </button>
                    <button type="button" className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">Dipirona Monoidratada 500mg/mL</span>
                    <span className="text-xs text-slate-500">Solução em gotas - Frasco gotejador 20mL</span>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-semibold">Genérico</span>
                      <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-mono text-[11px] font-semibold">Em Queima -35%</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-slate-900">LT-2023-1198</span>
                    <span className="font-mono text-xs text-slate-500">7896427200052</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-slate-700 text-xs font-medium">Medley Farmacêutica</td>
                <td className="py-4 px-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 font-mono text-xs">
                      <span className="text-slate-600">02/07/2022</span>
                      <span className="text-slate-400">→</span>
                      <span className="font-bold text-red-600">12/07/2024</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-[11px] font-bold w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> Crítico (18 dias)
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                    Gôndola Promocional 02
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900">53 un</span>
                    <span className="text-xs text-slate-500">Mínimo: 20 un</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-end gap-1.5">
                      <span className="text-xs line-through text-slate-400">R$ 11,50</span>
                      <span className="font-bold text-red-600">R$ 7,49</span>
                    </div>
                    <span className="font-mono text-xs text-slate-500">Custo: R$ 4,12</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center gap-1">
                    <button type="button" className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    </button>
                    <button type="button" className="p-1.5 rounded-lg text-emerald-700 hover:bg-emerald-50 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">percent</span>
                    </button>
                    <button type="button" className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">assignment_late</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">Clonazepam 2,0mg (Tarja Preta)</span>
                    <span className="text-xs text-slate-500">Embalagem blister com 30 comprimidos</span>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-white text-[11px] font-semibold">Tarja Preta (B1)</span>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-semibold">Genérico</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-slate-900">LT-2024-0021</span>
                    <span className="font-mono text-xs text-slate-500">7897595604100</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-slate-700 text-xs font-medium">Eurofarma Laboratórios</td>
                <td className="py-4 px-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 font-mono text-xs">
                      <span className="text-slate-600">04/03/2024</span>
                      <span className="text-slate-400">→</span>
                      <span className="font-bold text-slate-900">04/03/2026</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Regular (&gt; 180d)
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 text-white font-mono text-xs">
                    <span className="material-symbols-outlined text-[14px]">lock</span> Cofre Psico C-01
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900">94 un</span>
                    <span className="text-xs text-slate-500">Mínimo: 30 un</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900">R$ 18,30</span>
                    <span className="font-mono text-xs text-slate-500">Custo: R$ 8,15</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center gap-1">
                    <button type="button" className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    </button>
                    <button type="button" className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">history</span>
                    </button>
                    <button type="button" className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Mostrando 4 de 284 lotes monitorados</span>
            <span className="font-mono text-blue-700 font-semibold">| Padrão de saída: FIFO Sanitário</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-lg text-slate-400 disabled:opacity-40" disabled type="button">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-lg bg-blue-700 text-white text-xs font-bold" type="button">1</button>
            <button className="w-8 h-8 rounded-lg text-slate-600 hover:bg-slate-200 text-xs font-medium" type="button">2</button>
            <button className="w-8 h-8 rounded-lg text-slate-600 hover:bg-slate-200 text-xs font-medium" type="button">3</button>
            <span className="px-1 text-slate-400">...</span>
            <button className="w-8 h-8 rounded-lg text-slate-600 hover:bg-slate-200 text-xs font-medium" type="button">15</button>
            <button className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bento Grid (3 Cards Inferiores) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Card 1: Ocupação Física */}
        <div className="rounded-xl bg-white p-6 shadow-xs border border-slate-200 flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-slate-900">Ocupação Física da Farmácia</span>
              <span className="material-symbols-outlined text-blue-700 text-[20px]">warehouse</span>
            </div>
            <p className="text-xs text-slate-500">Capacidade de armazenamento e conformidade de lote por setor.</p>
          </div>
          <div className="flex flex-col gap-4 my-5">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-blue-600">ac_unit</span>
                  Geladeira 01 (Cadeia Fria)
                </span>
                <span className="font-mono text-blue-700 font-bold">78% Ocupada</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full rounded-full bg-blue-600" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-slate-800">lock</span>
                  Cofre Psicotrópicos (Portaria 344)
                </span>
                <span className="font-mono text-slate-900 font-bold">92% Ocupado</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full rounded-full bg-slate-900" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-emerald-600">inventory</span>
                  Prateleira A-12 (Antibióticos)
                </span>
                <span className="font-mono text-emerald-700 font-bold">54% Ocupada</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full rounded-full bg-emerald-600" style={{ width: '54%' }}></div>
              </div>
            </div>
          </div>
          <button
            className="w-full py-2.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">map</span>
            Mapa de Endereçamento do Galpão
          </button>
        </div>

        {/* Card 2: Previsão de Vencimentos */}
        <div className="rounded-xl bg-white p-6 shadow-xs border border-slate-200 flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-slate-900">Previsão de Vencimentos</span>
              <span className="material-symbols-outlined text-red-600 text-[20px]">calendar_month</span>
            </div>
            <p className="text-xs text-slate-500">Distribuição de lotes com validade nos próximos 90 dias.</p>
          </div>
          <div className="flex flex-col gap-2.5 my-5">
            <div className="p-3 rounded-lg bg-red-50 border border-red-100 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-red-900">Até 30 dias</span>
                <span className="text-xs text-red-700">9 lotes • R$ 3.410,00</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-mono text-[11px] font-bold">Crítico</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">31 a 60 dias</span>
                <span className="text-xs text-slate-500">14 lotes • R$ 8.920,00</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono text-[11px] font-bold">Atenção</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">61 a 90 dias</span>
                <span className="text-xs text-slate-500">10 lotes • R$ 5.180,00</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 font-mono text-[11px] font-bold">Monitorar</span>
            </div>
          </div>
          <button
            className="w-full py-2.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">local_offer</span>
            Gerar Campanha de Queima
          </button>
        </div>

        {/* Card 3: Assinatura Digital SNGPC */}
        <div className="rounded-xl bg-white p-6 shadow-xs border border-slate-200 flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-slate-900">Chave de Assinatura SNGPC</span>
              <span className="material-symbols-outlined text-emerald-700 text-[20px]">encrypted</span>
            </div>
            <p className="text-xs text-slate-500">Certificado Digital ICP-Brasil A1 válido até 11/2025.</p>
          </div>
          <div className="my-5 p-4 rounded-lg bg-slate-50 border border-slate-100 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">Status de Envio Diário</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[11px] font-bold">
                Transmitido
              </span>
            </div>
            <span className="font-mono text-[11px] text-slate-500 break-all">
              Hash: 9F8B2C4D7890AA5512EE45F9812A
            </span>
            <div className="flex items-center gap-1.5 text-slate-600 text-xs mt-1">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
              Confirmado pelo servidor federal sem rejeições.
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="flex-1 py-2.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors"
              type="button"
            >
              Gerar Novo Inventário
            </button>
            <button
              className="p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              title="Log de Erros"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">receipt_long</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Entrada de NF */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs transition-opacity"
          onClick={handleCloseModal}
        >
          <form
            onSubmit={handleSalvarLote}
            className="w-full max-w-xl bg-white h-full shadow-2xl p-8 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex flex-col">
                  <span className="text-xs text-blue-700 uppercase font-bold tracking-wider">Entrada de Mercadoria</span>
                  <h2 className="text-xl font-bold text-slate-900">Novo Lote &amp; Nota Fiscal</h2>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">Chave de Acesso NF-e (44 Dígitos)</label>
                  <div className="relative">
                    <input
                      className="w-full h-11 px-3.5 pr-24 rounded-lg bg-slate-50 border border-slate-200 font-mono text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      placeholder="3524 0700 0000..."
                      type="text"
                    />
                    <button
                      className="absolute right-1.5 top-1.5 px-3 py-1.5 rounded-md bg-blue-700 text-white text-xs font-semibold hover:bg-blue-800"
                      type="button"
                    >
                      Importar
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">Número do Lote</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      placeholder="Ex: LT-2024-9100"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">Código EAN</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      placeholder="789..."
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">Medicamento / DCB</label>
                  <input
                    className="h-11 px-3.5 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                    placeholder="Ex: Cloridrato de Sertralina 50mg"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">Fabricação</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      type="date"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">Validade Final</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      type="date"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">Qtd. Caixas</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      placeholder="50"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">Preço Custo</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      placeholder="R$ 15,20"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">Preço Venda</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      placeholder="R$ 29,90"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">Local de Armazenamento</label>
                  <select className="h-11 px-3 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:bg-white">
                    <option>Prateleira Geral B-04</option>
                    <option>Prateleira A-12 (Antibióticos)</option>
                    <option>Geladeira 2°C a 8°C (Termolábeis)</option>
                    <option>Cofre de Controlados (Portaria 344)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition-colors"
                type="button"
              >
                Cancelar
              </button>
              <button
                className="px-5 py-2.5 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors shadow-xs flex items-center gap-1.5"
                type="submit"
              >
                <span className="material-symbols-outlined text-[18px]">save</span>
                Salvar Lote e Assinar SNGPC
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}