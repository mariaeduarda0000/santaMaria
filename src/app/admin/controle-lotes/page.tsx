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
      <div className="bg-error-container text-on-error-container p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 font-bold text-label-sm uppercase tracking-wide">
            <span className="material-symbols-outlined text-[18px]">warning</span>
            Alerta Sanitário SNGPC • RDC n° 843/2024
          </div>
          <h3 className="font-title-lg font-bold">Lote sob Suspensão Cautelar Imediata: LT-2023-9901</h3>
          <p className="font-body-sm">
            Notificação compulsória: recolhimento preventivo de Losartana Potássica 50mg (Laboratório Prati-Donaduzzi). Bloqueio digital de balcão e conferência de descarte fiscal ativados no SNGPC.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
          <button
            type="button"
            className="px-4 py-2 bg-surface-container-lowest text-on-surface rounded-lg font-label-sm font-semibold flex items-center gap-2 shadow-sm hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">policy</span> Protocolo Rastreio Anvisa
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-error text-on-error rounded-lg font-label-sm font-semibold flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined text-[18px]">block</span> Bloquear Vendas em PDV
          </button>
        </div>
      </div>

      {/* Header da Página & Ações */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4">
        <div>
          <span className="text-label-sm text-secondary font-bold uppercase tracking-wider">
            Módulo de Retaguarda Farmacêutica • Conexão SNGPC em Tempo Real
          </span>
          <h1 className="text-headline-md font-bold text-on-surface mt-1">
            Controle Operacional de Lotes &amp; Validades
          </h1>
          <p className="text-body-md text-on-surface-variant">
            Monitoramento metrológico e sanitário de medicamentos controlados e convencionais.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="px-4 py-2 flex items-center gap-2 rounded-lg text-on-surface bg-surface-container-low hover:bg-surface-container transition-colors text-label-sm font-semibold"
          >
            <span className="material-symbols-outlined text-[18px]">balance</span> Ajuste de Balanço
          </button>
          <button
            type="button"
            onClick={handleExportarXML}
            className="px-4 py-2 flex items-center gap-2 rounded-lg text-on-surface bg-surface-container-low hover:bg-surface-container transition-colors text-label-sm font-semibold"
          >
            <span className="material-symbols-outlined text-[18px]">download</span> Exportar Relatório SNGPC
          </button>
          <button
            type="button"
            onClick={handleOpenModal}
            className="px-4 py-2 flex items-center gap-2 rounded-lg bg-error text-on-error hover:bg-error/90 transition-colors text-label-sm font-semibold shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">receipt_long</span> Entrada de NF / Novo Lote
          </button>
        </div>
      </div>

      {/* Cards de Indicadores (KPIs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl bg-surface-container-lowest p-5 shadow-sm border border-surface-container flex flex-col gap-2">
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="font-label-sm font-semibold uppercase tracking-wider">Lotes Ativos</span>
            <span className="material-symbols-outlined text-primary text-[20px]">inventory_2</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-headline-md font-bold text-on-surface">284</span>
            <span className="font-code-sm text-tertiary font-semibold">+12 esta semana</span>
          </div>
          <span className="font-body-sm text-on-surface-variant">R$ 148.920,00 em estoque</span>
        </div>

        <div className="rounded-xl bg-surface-container-lowest p-5 shadow-sm border border-surface-container flex flex-col gap-2">
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="font-label-sm font-semibold uppercase tracking-wider">Crítico (&lt; 30 dias)</span>
            <span className="material-symbols-outlined text-error text-[20px]">event_busy</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-headline-md font-bold text-error">09</span>
            <span className="font-code-sm text-error font-semibold">Ação imediata</span>
          </div>
          <span className="font-body-sm text-on-surface-variant">53 unidades em queima ativa</span>
        </div>

        <div className="rounded-xl bg-surface-container-lowest p-5 shadow-sm border border-surface-container flex flex-col gap-2">
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="font-label-sm font-semibold uppercase tracking-wider">Atenção (30 a 90d)</span>
            <span className="material-symbols-outlined text-secondary text-[20px]">schedule</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-headline-md font-bold text-on-surface">24</span>
            <span className="font-code-sm text-secondary font-semibold">Prioridade FIFO</span>
          </div>
          <span className="font-body-sm text-on-surface-variant">4 lotes termolábeis incluídos</span>
        </div>

        <div className="rounded-xl bg-surface-container-lowest p-5 shadow-sm border border-surface-container flex flex-col gap-2">
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="font-label-sm font-semibold uppercase tracking-wider">Controlados (P. 344)</span>
            <span className="material-symbols-outlined text-on-surface text-[20px]">lock</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-headline-md font-bold text-on-surface">68</span>
            <span className="font-code-sm text-tertiary font-semibold">100% conciliado</span>
          </div>
          <span className="font-body-sm text-on-surface-variant">Último envio SNGPC: hoje 08:00</span>
        </div>
      </div>

      {/* Barra de Busca e Filtros */}
      <div className="rounded-xl bg-surface-container-lowest p-4 shadow-sm border border-surface-container flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="relative flex-1">
          <span className="material-symbols-outlined text-on-surface-variant text-[20px] absolute left-3 top-1/2 -translate-y-1/2">
            search
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por medicamento, princípio ativo (DCB), lote ou código EAN..."
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-surface-container-low font-body-md text-on-surface focus:outline-none focus:bg-surface-container transition-colors"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-10 px-3 rounded-lg bg-surface-container-low font-label-sm text-on-surface focus:outline-none focus:bg-surface-container"
          >
            <option value="todos">Validade: Todos os Status</option>
            <option value="critico">Crítico (&lt; 30 dias)</option>
            <option value="atencao">Atenção (30 a 90 dias)</option>
            <option value="regular">Regular (&gt; 180 dias)</option>
          </select>
          <select className="h-10 px-3 rounded-lg bg-surface-container-low font-label-sm text-on-surface focus:outline-none focus:bg-surface-container">
            <option value="todos">Categoria: Todas</option>
            <option value="controlados">Portaria 344 (C1 / B1)</option>
            <option value="termolabeis">Termolábeis (2°C - 8°C)</option>
            <option value="genericos">Genéricos</option>
          </select>
        </div>
      </div>

      {/* Tabela de Lotes */}
      <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col border border-surface-container" id="tabela-lotes">
        <div className="px-6 py-4 bg-surface-container-low flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-title-md text-on-surface font-semibold">Tabela de Lotes Ativos &amp; Segregados</span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest font-code-sm text-code-sm text-on-surface-variant">
              284 lotes listados
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"
              title="Atualizar dados"
            >
              <span className="material-symbols-outlined text-[20px]">refresh</span>
            </button>
            <button
              type="button"
              className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"
              title="Visualização em colunas personalizadas"
            >
              <span className="material-symbols-outlined text-[20px]">view_column</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                <th className="py-3 px-6">Medicamento &amp; Apresentação</th>
                <th className="py-3 px-6">Lote / EAN</th>
                <th className="py-3 px-6">Laboratório</th>
                <th className="py-3 px-6">Fabricação / Validade</th>
                <th className="py-3 px-6 text-center">Localização</th>
                <th className="py-3 px-6 text-right">Estoque / Mínimo</th>
                <th className="py-3 px-6 text-right">Custos (PMC / Venda)</th>
                <th className="py-3 px-6 text-center">Ações Operacionais</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-low/60 transition-colors group">
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-title-md font-semibold">Amoxicilina + Clavulanato 500/125mg</span>
                    <span className="font-body-sm text-on-surface-variant">Caixa com 21 comprimidos revestidos</span>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-secondary font-medium">Genérico</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-highest font-code-sm text-on-surface-variant">Portaria 344 - C1</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-code-sm font-bold">LT-2024-8849</span>
                    <span className="font-code-sm text-on-surface-variant">7896004702115</span>
                  </div>
                </td>
                <td className="py-4 px-6 font-body-md">EMS Indústria Farmacêutica</td>
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-code-sm">15/01/2024</span>
                      <span className="text-on-surface-variant">→</span>
                      <span className="font-code-sm font-semibold">15/01/2026</span>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Regular (&gt; 180d)
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-surface-container font-label-sm">Prateleira A-12</span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex flex-col">
                    <span className="font-title-md font-bold">142 un</span>
                    <span className="font-body-sm text-on-surface-variant">Mínimo: 40 un</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex flex-col">
                    <span className="font-title-md font-bold">R$ 48,90</span>
                    <span className="font-code-sm text-on-surface-variant">Custo: R$ 26,40</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center gap-1">
                    <button type="button" className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Editar Informações">
                      <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    </button>
                    <button type="button" className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Queima Promocional">
                      <span className="material-symbols-outlined text-[18px]">price_change</span>
                    </button>
                    <button type="button" className="p-2 rounded-lg text-error hover:bg-error-container hover:text-on-error-container transition-colors" title="Baixa por Avaria">
                      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-surface-container-low/60 transition-colors group">
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-title-md font-semibold">Insulina Humana NPH 100 UI/mL</span>
                    <span className="font-body-sm text-on-surface-variant">Frasco-ampola com 10mL (Suspensão Injetável)</span>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">ac_unit</span> Termolábil
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-on-surface-variant">Referência</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-code-sm font-bold">LT-2023-4102</span>
                    <span className="font-code-sm text-on-surface-variant">7891045003291</span>
                  </div>
                </td>
                <td className="py-4 px-6 font-body-md">Novo Nordisk Farmacêutica</td>
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-code-sm">10/06/2023</span>
                      <span className="text-on-surface-variant">→</span>
                      <span className="font-code-sm font-semibold">25/08/2024</span>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed-dim/40 text-on-secondary-fixed-variant font-label-sm w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Atenção (54 dias)
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-sm">
                    <span className="material-symbols-outlined text-[14px]">device_thermostat</span> Geladeira 4°C
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex flex-col">
                    <span className="font-title-md font-bold">28 un</span>
                    <span className="font-body-sm text-error font-medium">Mínimo: 35 un (Reposição)</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex flex-col">
                    <span className="font-title-md font-bold">R$ 62,50</span>
                    <span className="font-code-sm text-on-surface-variant">Custo: R$ 38,10</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center gap-1">
                    <button type="button" className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    </button>
                    <button type="button" className="p-2 rounded-lg text-primary hover:bg-primary-fixed transition-colors">
                      <span className="material-symbols-outlined text-[18px]">price_change</span>
                    </button>
                    <button type="button" className="p-2 rounded-lg text-error hover:bg-error-container transition-colors">
                      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-surface-container-low/60 transition-colors group">
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-title-md font-semibold">Dipirona Monoidratada 500mg/mL</span>
                    <span className="font-body-sm text-on-surface-variant">Solução em gotas - Frasco gotejador 20mL</span>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-secondary font-medium">Genérico</span>
                      <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-code-sm">Em Queima -35%</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-code-sm font-bold">LT-2023-1198</span>
                    <span className="font-code-sm text-on-surface-variant">7896427200052</span>
                  </div>
                </td>
                <td className="py-4 px-6 font-body-md">Medley Farmacêutica</td>
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-code-sm">02/07/2022</span>
                      <span className="text-on-surface-variant">→</span>
                      <span className="font-code-sm font-bold text-error">12/07/2024</span>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm w-fit font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Crítico (18 dias)
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-surface-container font-label-sm">Gôndola Promocional 02</span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex flex-col">
                    <span className="font-title-md font-bold">53 un</span>
                    <span className="font-body-sm text-on-surface-variant">Mínimo: 20 un</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-end gap-1">
                      <span className="font-body-sm line-through text-on-surface-variant">R$ 11,50</span>
                      <span className="font-title-md text-error font-bold">R$ 7,49</span>
                    </div>
                    <span className="font-code-sm text-on-surface-variant">Custo: R$ 4,12</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center gap-1">
                    <button type="button" className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    </button>
                    <button type="button" className="p-2 rounded-lg text-tertiary hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[18px]">percent</span>
                    </button>
                    <button type="button" className="p-2 rounded-lg text-error hover:bg-error-container transition-colors">
                      <span className="material-symbols-outlined text-[18px]">assignment_late</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-surface-container-low/60 transition-colors group">
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-title-md font-semibold">Clonazepam 2,0mg (Tarja Preta)</span>
                    <span className="font-body-sm text-on-surface-variant">Embalagem blister com 30 comprimidos</span>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-inverse-surface text-inverse-on-surface font-label-sm">Tarja Preta (B1)</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-secondary">Genérico</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-code-sm font-bold">LT-2024-0021</span>
                    <span className="font-code-sm text-on-surface-variant">7897595604100</span>
                  </div>
                </td>
                <td className="py-4 px-6 font-body-md">Eurofarma Laboratórios</td>
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-code-sm">04/03/2024</span>
                      <span className="text-on-surface-variant">→</span>
                      <span className="font-code-sm font-semibold">04/03/2026</span>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Regular (&gt; 180d)
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-inverse-surface text-inverse-on-surface font-code-sm">
                    <span className="material-symbols-outlined text-[14px]">lock</span> Cofre Psico C-01
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex flex-col">
                    <span className="font-title-md font-bold">94 un</span>
                    <span className="font-body-sm text-on-surface-variant">Mínimo: 30 un</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex flex-col">
                    <span className="font-title-md font-bold">R$ 18,30</span>
                    <span className="font-code-sm text-on-surface-variant">Custo: R$ 8,15</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center gap-1">
                    <button type="button" className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    </button>
                    <button type="button" className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[18px]">history</span>
                    </button>
                    <button type="button" className="p-2 rounded-lg text-error hover:bg-error-container transition-colors">
                      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        <div className="px-6 py-4 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-body-sm text-on-surface-variant">Mostrando 4 de 284 lotes monitorados</span>
            <span className="font-code-sm text-secondary font-medium">| Padrão de saída: FIFO Sanitário</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors disabled:opacity-40" disabled type="button">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-lg bg-secondary text-on-secondary font-label-sm font-bold" type="button">1</button>
            <button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container-high font-label-sm" type="button">2</button>
            <button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container-high font-label-sm" type="button">3</button>
            <span className="px-1 text-on-surface-variant">...</span>
            <button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container-high font-label-sm" type="button">15</button>
            <button className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bento Grid (Gráficos e Indicadores) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Card 1: Heatmap Físico */}
        <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm border border-surface-container flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-title-md font-semibold">Ocupação Física da Farmácia</span>
              <span className="material-symbols-outlined text-secondary text-[20px]">warehouse</span>
            </div>
            <p className="font-body-sm text-on-surface-variant">Capacidade de armazenamento e conformidade de lote por setor.</p>
          </div>
          <div className="flex flex-col gap-3 my-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between font-label-sm">
                <span className="font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">ac_unit</span> Geladeira 01 (Cadeia Fria)
                </span>
                <span className="font-code-sm text-secondary font-bold">78% Ocupada</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-low overflow-hidden">
                <div className="h-full rounded-full bg-secondary" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between font-label-sm">
                <span className="font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">lock</span> Cofre Psicotrópicos (Portaria 344)
                </span>
                <span className="font-code-sm font-bold">92% Ocupado</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-low overflow-hidden">
                <div className="h-full rounded-full bg-inverse-surface" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between font-label-sm">
                <span className="font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">inventory</span> Prateleira A-12 (Antibióticos)
                </span>
                <span className="font-code-sm text-tertiary font-bold">54% Ocupada</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-low overflow-hidden">
                <div className="h-full rounded-full bg-tertiary" style={{ width: '54%' }}></div>
              </div>
            </div>
          </div>
          <button
            className="w-full py-2.5 rounded-lg bg-surface-container-low font-label-md hover:bg-surface-container transition-colors flex items-center justify-center gap-1.5"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">map</span> Mapa de Endereçamento do Galpão
          </button>
        </div>

        {/* Card 2: Curva de Vencimentos */}
        <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm border border-surface-container flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-title-md font-semibold">Previsão de Vencimentos</span>
              <span className="material-symbols-outlined text-error text-[20px]">calendar_month</span>
            </div>
            <p className="font-body-sm text-on-surface-variant">Distribuição de lotes com validade nos próximos 90 dias.</p>
          </div>
          <div className="flex flex-col gap-3 my-4">
            <div className="p-3 rounded-lg bg-error-container/40 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm font-bold text-on-error-container">Até 30 dias</span>
                <span className="font-body-sm text-on-error-container/80">9 lotes • R$ 3.410,00</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-error text-on-error font-code-sm font-bold">Crítico</span>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm font-bold">31 a 60 dias</span>
                <span className="font-body-sm text-on-surface-variant">14 lotes • R$ 8.920,00</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-code-sm font-bold">Atenção</span>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm font-bold">61 a 90 dias</span>
                <span className="font-body-sm text-on-surface-variant">10 lotes • R$ 5.180,00</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-code-sm font-bold">Monitorar</span>
            </div>
          </div>
          <button
            className="w-full py-2.5 rounded-lg bg-surface-container-low font-label-md hover:bg-surface-container transition-colors flex items-center justify-center gap-1.5"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">local_offer</span> Gerar Campanha de Queima
          </button>
        </div>

        {/* Card 3: Assinatura Digital SNGPC */}
        <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm border border-surface-container flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-title-md font-semibold">Chave de Assinatura SNGPC</span>
              <span className="material-symbols-outlined text-tertiary text-[20px]">encrypted</span>
            </div>
            <p className="font-body-sm text-on-surface-variant">Certificado Digital ICP-Brasil A1 válido até 11/2025.</p>
          </div>
          <div className="my-4 p-4 rounded-lg bg-surface-container-low flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-label-sm font-semibold">Status de Envio Diário</span>
              <span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-code-sm font-semibold">Transmitido</span>
            </div>
            <span className="font-code-sm text-[11px] text-on-surface-variant break-all">
              Hash: 9F8B2C4D7890AA5512EE45F9812A
            </span>
            <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm mt-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
              Confirmado pelo servidor federal sem rejeições.
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="flex-1 py-2 rounded-lg bg-surface-container-high font-label-sm hover:bg-surface-container transition-colors"
              type="button"
            >
              Gerar Novo Inventário
            </button>
            <button
              className="p-2 rounded-lg bg-surface-container-high hover:bg-surface-container transition-colors"
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
          className="fixed inset-0 z-50 flex justify-end bg-on-background/40 backdrop-blur-sm transition-opacity"
          onClick={handleCloseModal}
        >
          <form
            onSubmit={handleSalvarLote}
            className="w-full max-w-xl bg-surface-container-lowest h-full shadow-2xl p-8 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-secondary uppercase font-bold tracking-wider">Entrada de Mercadoria</span>
                  <h2 className="font-headline-lg font-bold">Novo Lote &amp; Nota Fiscal</h2>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm font-semibold">Chave de Acesso NF-e (44 Dígitos)</label>
                  <div className="relative">
                    <input
                      className="w-full h-11 px-3.5 pr-20 rounded-lg bg-surface-container-low font-code-sm focus:outline-none focus:bg-surface-container"
                      placeholder="3524 0700 0000..."
                      type="text"
                    />
                    <button
                      className="absolute right-2 top-2 px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-sm"
                      type="button"
                    >
                      Importar
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm font-semibold">Número do Lote</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-surface-container-low font-code-sm focus:outline-none focus:bg-surface-container"
                      placeholder="Ex: LT-2024-9100"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm font-semibold">Código EAN</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-surface-container-low font-code-sm focus:outline-none focus:bg-surface-container"
                      placeholder="789..."
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm font-semibold">Medicamento / DCB</label>
                  <input
                    className="h-11 px-3.5 rounded-lg bg-surface-container-low font-body-md focus:outline-none focus:bg-surface-container"
                    placeholder="Ex: Cloridrato de Sertralina 50mg"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm font-semibold">Fabricação</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-surface-container-low font-body-md focus:outline-none focus:bg-surface-container"
                      type="date"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm font-semibold">Validade Final</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-surface-container-low font-body-md focus:outline-none focus:bg-surface-container"
                      type="date"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm font-semibold">Qtd. Caixas</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-surface-container-low font-code-sm focus:outline-none focus:bg-surface-container"
                      placeholder="50"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm font-semibold">Preço Custo</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-surface-container-low font-code-sm focus:outline-none focus:bg-surface-container"
                      placeholder="R$ 15,20"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm font-semibold">Preço Venda</label>
                    <input
                      className="h-11 px-3.5 rounded-lg bg-surface-container-low font-code-sm focus:outline-none focus:bg-surface-container"
                      placeholder="R$ 29,90"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm font-semibold">Local de Armazenamento</label>
                  <select className="h-11 px-3 rounded-lg bg-surface-container-low font-body-md focus:outline-none focus:bg-surface-container">
                    <option>Prateleira Geral B-04</option>
                    <option>Prateleira A-12 (Antibióticos)</option>
                    <option>Geladeira 2°C a 8°C (Termolábeis)</option>
                    <option>Cofre de Controlados (Portaria 344)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-end gap-3">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2.5 rounded-lg bg-surface-container-low font-label-md hover:bg-surface-container transition-colors"
                type="button"
              >
                Cancelar
              </button>
              <button
                className="px-6 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md hover:bg-secondary/90 transition-colors shadow-sm flex items-center gap-1.5"
                type="submit"
              >
                <span className="material-symbols-outlined text-[18px]">save</span> Salvar Lote e Assinar SNGPC
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}