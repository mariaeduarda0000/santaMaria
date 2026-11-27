"use client";
import React, { useState } from "react";

type EtapaManipulacao =
  | "AGUARDANDO"
  | "EM_PRODUCAO"
  | "CONTROLE_QUALIDADE"
  | "PRONTA";

type Prioridade = "NORMAL" | "URGENTE";

interface Ingrediente {
  ativo: string;
  dosagem: string;
  loteInsumo: string;
}

interface OrdemManipulacao {
  id: string;
  paciente: string;
  telefone: string;
  medico: string;
  crm: string;
  formulaTitulo: string;
  formaFarmaceutica: string;
  quantidade: string;
  farmaceutico: string;
  previsao: string;
  prioridade: Prioridade;
  etapa: EtapaManipulacao;
  posologia: string;
  ingredientes: Ingrediente[];
}

const ORDENS_INICIAIS: OrdemManipulacao[] = [
  {
    id: "OM-2026-0412",
    paciente: "Beatriz Almeida Costa",
    telefone: "(14) 99812-3341",
    medico: "Dra. Juliana Ferreira",
    crm: "CRM-SP 154820",
    formulaTitulo: "Fórmula Dermatológica Clareadora",
    formaFarmaceutica: "Creme Base Ômega Gold",
    quantidade: "30g (Pump Airless)",
    farmaceutico: "Dr. Lucas Andrade (CRF 68412)",
    previsao: "Hoje, 17:30",
    prioridade: "URGENTE",
    etapa: "EM_PRODUCAO",
    posologia: "Aplicar fina camada à noite nas áreas afetadas. Usar FPS 50 pela manhã.",
    ingredientes: [
      { ativo: "Ácido Tranexâmico", dosagem: "3%", loteInsumo: "INS-8821A" },
      { ativo: "Niacinamida PC", dosagem: "4%", loteInsumo: "INS-9014C" },
      { ativo: "Alfa-Arbutin", dosagem: "2%", loteInsumo: "INS-7740B" },
    ],
  },
  {
    id: "OM-2026-0411",
    paciente: "Ricardo Oliveira Mendes",
    telefone: "(14) 99741-0092",
    medico: "Dr. Marcos Vinícius",
    crm: "CRM-SP 112094",
    formulaTitulo: "Complexo Magnésio + L-Teanina",
    formaFarmaceutica: "Cápsulas Vegetais",
    quantidade: "60 Cápsulas",
    farmaceutico: "Dra. Carla Nunes (CRF 71209)",
    previsao: "Amanhã, 11:00",
    prioridade: "NORMAL",
    etapa: "AGUARDANDO",
    posologia: "Tomar 2 cápsulas ao dia, preferencialmente 1 hora antes de dormir.",
    ingredientes: [
      { ativo: "Magnésio Dimalato", dosagem: "300mg", loteInsumo: "INS-4510M" },
      { ativo: "L-Teanina", dosagem: "200mg", loteInsumo: "INS-3392T" },
      { ativo: "Vitamina B6 (Piridoxal-5-Fosfato)", dosagem: "15mg", loteInsumo: "INS-1108V" },
    ],
  },
  {
    id: "OM-2026-0409",
    paciente: "Fernanda Ribeiro Silva",
    telefone: "(14) 99605-8821",
    medico: "Dr. Eduardo Campos",
    crm: "CRM-SP 99310",
    formulaTitulo: "Minoxidil + Biotina Tópico",
    formaFarmaceutica: "Solução Hidroalcoólica",
    quantidade: "100mL (Conta-gotas)",
    farmaceutico: "Dr. Lucas Andrade (CRF 68412)",
    previsao: "Hoje, 16:00",
    prioridade: "NORMAL",
    etapa: "CONTROLE_QUALIDADE",
    posologia: "Aplicar 1mL no couro cabeludo seco 1x ao dia à noite.",
    ingredientes: [
      { ativo: "Minoxidil Base", dosagem: "5%", loteInsumo: "INS-6120X" },
      { ativo: "D-Pantenol", dosagem: "2%", loteInsumo: "INS-2219P" },
      { ativo: "Biotina", dosagem: "0,5%", loteInsumo: "INS-5501B" },
    ],
  },
  {
    id: "OM-2026-0405",
    paciente: "Sérgio Augusto Lima",
    telefone: "(14) 99123-4490",
    medico: "Dra. Patrícia Souza",
    crm: "CRM-SP 138405",
    formulaTitulo: "Pool de Probióticos Gastro",
    formaFarmaceutica: "Cápsulas Gastrorresistentes",
    quantidade: "30 Cápsulas",
    farmaceutico: "Dra. Carla Nunes (CRF 71209)",
    previsao: "Pronta para retirada",
    prioridade: "NORMAL",
    etapa: "PRONTA",
    posologia: "Tomar 1 cápsula em jejum com água.",
    ingredientes: [
      { ativo: "Lactobacillus acidophilus", dosagem: "2 Bilhões UFC", loteInsumo: "INS-9910L" },
      { ativo: "Bifidobacterium lactis", dosagem: "2 Bilhões UFC", loteInsumo: "INS-9912B" },
      { ativo: "FOS (Frutooligossacarídeo)", dosagem: "200mg", loteInsumo: "INS-4002F" },
    ],
  },
];

const ETAPA_CONFIG: Record<
  EtapaManipulacao,
  { label: string; badge: string; proxima?: EtapaManipulacao; labelBotao?: string }
> = {
  AGUARDANDO: {
    label: "Aguardando Pesagem",
    badge: "bg-amber-100 text-amber-800",
    proxima: "EM_PRODUCAO",
    labelBotao: "Iniciar Manipulação",
  },
  EM_PRODUCAO: {
    label: "Em Manipulação",
    badge: "bg-blue-100 text-[#0047AB]",
    proxima: "CONTROLE_QUALIDADE",
    labelBotao: "Enviar p/ Qualidade",
  },
  CONTROLE_QUALIDADE: {
    label: "Controle de Qualidade",
    badge: "bg-purple-100 text-purple-800",
    proxima: "PRONTA",
    labelBotao: "Aprovar & Liberar",
  },
  PRONTA: {
    label: "Pronta p/ Retirada",
    badge: "bg-emerald-100 text-emerald-700",
  },
};

export default function AdminManipulacaoPage() {
  const [ordens, setOrdens] = useState<OrdemManipulacao[]>(ORDENS_INICIAIS);
  const [busca, setBusca] = useState("");
  const [filtroEtapa, setFiltroEtapa] = useState<string>("TODOS");
  const [ordemSelecionada, setOrdemSelecionada] = useState<OrdemManipulacao | null>(null);
  const [modalNovaAberto, setModalNovaAberto] = useState(false);

  // Estado do formulário de nova ordem
  const [novoPaciente, setNovoPaciente] = useState("");
  const [novoMedico, setNovoMedico] = useState("");
  const [novoCrm, setNovoCrm] = useState("");
  const [novaFormula, setNovaFormula] = useState("");
  const [novaForma, setNovaForma] = useState("Cápsulas Vegetais");
  const [novaQtd, setNovaQtd] = useState("60 Cápsulas");
  const [novaPrioridade, setNovaPrioridade] = useState<Prioridade>("NORMAL");

  const avancarEtapa = (id: string) => {
    setOrdens((prev) =>
      prev.map((ordem) => {
        if (ordem.id !== id) return ordem;
        const proxima = ETAPA_CONFIG[ordem.etapa].proxima;
        if (!proxima) return ordem;
        const atualizada = { ...ordem, etapa: proxima };
        if (ordemSelecionada?.id === id) setOrdemSelecionada(atualizada);
        return atualizada;
      })
    );
  };

  const criarNovaOrdem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoPaciente.trim() || !novaFormula.trim()) return;

    const novaOrdem: OrdemManipulacao = {
      id: `OM-2026-0${Math.floor(413 + Math.random() * 500)}`,
      paciente: novoPaciente,
      telefone: "(14) 99999-0000",
      medico: novoMedico || "Prescrição Balcão",
      crm: novoCrm || "CRM-SP 000000",
      formulaTitulo: novaFormula,
      formaFarmaceutica: novaForma,
      quantidade: novaQtd,
      farmaceutico: "Dr. Lucas Andrade (CRF 68412)",
      previsao: novaPrioridade === "URGENTE" ? "Hoje, 18:00" : "Amanhã, 14:00",
      prioridade: novaPrioridade,
      etapa: "AGUARDANDO",
      posologia: "Conforme orientação médica na receita anexada.",
      ingredientes: [
        { ativo: "Ativo Principal (conforme receita)", dosagem: "q.s.p.", loteInsumo: "INS-PADRÃO" },
      ],
    };

    setOrdens((prev) => [novaOrdem, ...prev]);
    setNovoPaciente("");
    setNovoMedico("");
    setNovoCrm("");
    setNovaFormula("");
    setModalNovaAberto(false);
  };

  const ordensFiltradas = ordens.filter((o) => {
    const matchEtapa = filtroEtapa === "TODOS" || o.etapa === filtroEtapa;
    const termo = busca.toLowerCase();
    const matchBusca =
      o.id.toLowerCase().includes(termo) ||
      o.paciente.toLowerCase().includes(termo) ||
      o.formulaTitulo.toLowerCase().includes(termo) ||
      o.farmaceutico.toLowerCase().includes(termo);
    return matchEtapa && matchBusca;
  });

  const countAguardando = ordens.filter((o) => o.etapa === "AGUARDANDO").length;
  const countProducao = ordens.filter((o) => o.etapa === "EM_PRODUCAO").length;
  const countQualidade = ordens.filter((o) => o.etapa === "CONTROLE_QUALIDADE").length;
  const countProntas = ordens.filter((o) => o.etapa === "PRONTA").length;

  return (
    <div className="p-6 max-w-7xl mx-auto flex flex-col gap-6">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#0047AB] uppercase tracking-wider mb-1">
            <span className="material-symbols-outlined text-[16px]">science</span>
            Laboratório Magistral • Controle de Produção
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Ordens de Manipulação
          </h1>
          <p className="text-sm text-slate-500">
            Acompanhe pesagem, manipulação de fórmulas, controle de qualidade e liberação.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setModalNovaAberto(true)}
          className="px-4 py-2.5 rounded-xl bg-[#0047AB] hover:bg-blue-900 text-white text-sm font-bold flex items-center gap-2 shadow-sm transition-colors w-fit"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Nova Ordem
        </button>
      </div>

      {/* KPIs do Laboratório */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500">Aguardando Pesagem</span>
            <p className="text-2xl font-extrabold text-amber-600 mt-1">{countAguardando}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <span className="material-symbols-outlined">schedule</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500">Em Manipulação</span>
            <p className="text-2xl font-extrabold text-[#0047AB] mt-1">{countProducao}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0047AB] flex items-center justify-center">
            <span className="material-symbols-outlined">science</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500">Controle de Qualidade</span>
            <p className="text-2xl font-extrabold text-purple-700 mt-1">{countQualidade}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <span className="material-symbols-outlined">biotech</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500">Prontas p/ Retirada</span>
            <p className="text-2xl font-extrabold text-emerald-600 mt-1">{countProntas}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <span className="material-symbols-outlined">check_circle</span>
          </div>
        </div>
      </div>

      {/* Barra de Busca e Filtros */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[20px]">
            search
          </span>
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por código OM, paciente, fórmula ou farmacêutico..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#0047AB]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "TODOS", label: "Todas" },
            { id: "AGUARDANDO", label: "Aguardando" },
            { id: "EM_PRODUCAO", label: "Em Manipulação" },
            { id: "CONTROLE_QUALIDADE", label: "Qualidade" },
            { id: "PRONTA", label: "Prontas" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFiltroEtapa(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filtroEtapa === tab.id
                  ? "bg-[#0047AB] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabela de Ordens */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-5">Ordem / Prioridade</th>
                <th className="py-3.5 px-5">Paciente &amp; Prescritor</th>
                <th className="py-3.5 px-5">Fórmula / Forma</th>
                <th className="py-3.5 px-5">Previsão</th>
                <th className="py-3.5 px-5">Etapa</th>
                <th className="py-3.5 px-5 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {ordensFiltradas.map((ordem) => {
                const cfg = ETAPA_CONFIG[ordem.etapa];
                return (
                  <tr key={ordem.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-5">
                      <div className="font-bold text-slate-900">{ordem.id}</div>
                      {ordem.prioridade === "URGENTE" ? (
                        <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-700">
                          URGENTE
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400">Prioridade normal</span>
                      )}
                    </td>

                    <td className="py-4 px-5">
                      <div className="font-semibold text-slate-900">{ordem.paciente}</div>
                      <div className="text-xs text-slate-500">
                        {ordem.medico} • {ordem.crm}
                      </div>
                    </td>

                    <td className="py-4 px-5">
                      <div className="font-medium text-slate-900">{ordem.formulaTitulo}</div>
                      <div className="text-xs text-slate-500">
                        {ordem.formaFarmaceutica} ({ordem.quantidade})
                      </div>
                    </td>

                    <td className="py-4 px-5">
                      <div className="font-medium text-slate-800">{ordem.previsao}</div>
                      <div className="text-[11px] text-slate-500">{ordem.farmaceutico}</div>
                    </td>

                    <td className="py-4 px-5">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${cfg.badge}`}
                      >
                        {cfg.label}
                      </span>
                    </td>

                    <td className="py-4 px-5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => setOrdemSelecionada(ordem)}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#0047AB] hover:text-white text-slate-700 text-xs font-bold transition-colors"
                        >
                          Ficha
                        </button>
                        {cfg.proxima && (
                          <button
                            type="button"
                            onClick={() => avancarEtapa(ordem.id)}
                            title={cfg.labelBotao}
                            className="p-1.5 rounded-lg bg-blue-50 text-[#0047AB] hover:bg-[#0047AB] hover:text-white transition-colors"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}

              {ordensFiltradas.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-slate-500 text-sm">
                    Nenhuma ordem de manipulação encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: Ficha de Manipulação */}
      {ordemSelecionada && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-slate-900">
                    Ficha de Manipulação — {ordemSelecionada.id}
                  </h2>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      ETAPA_CONFIG[ordemSelecionada.etapa].badge
                    }`}
                  >
                    {ETAPA_CONFIG[ordemSelecionada.etapa].label}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Responsável técnico: {ordemSelecionada.farmaceutico}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOrdemSelecionada(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6 flex flex-col gap-5 text-sm max-h-[75vh] overflow-y-auto">
              {/* Dados Gerais */}
              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <span className="text-slate-500 block">Paciente</span>
                  <strong className="text-slate-900">{ordemSelecionada.paciente}</strong>
                  <span className="block text-slate-500">{ordemSelecionada.telefone}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Prescritor</span>
                  <strong className="text-slate-900">{ordemSelecionada.medico}</strong>
                  <span className="block text-slate-500">{ordemSelecionada.crm}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Forma Farmacêutica</span>
                  <strong className="text-slate-900">{ordemSelecionada.formaFarmaceutica}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Quantidade / Embalagem</span>
                  <strong className="text-slate-900">{ordemSelecionada.quantidade}</strong>
                </div>
              </div>

              {/* Composição / Pesagem */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Composição da Fórmula &amp; Rastreabilidade de Lotes
                </h3>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-4 font-bold">Insumo / Ativo</th>
                        <th className="py-2.5 px-4 font-bold">Dosagem</th>
                        <th className="py-2.5 px-4 font-bold">Lote Insumo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {ordemSelecionada.ingredientes.map((ing, idx) => (
                        <tr key={idx}>
                          <td className="py-2.5 px-4 font-semibold text-slate-900">{ing.ativo}</td>
                          <td className="py-2.5 px-4 text-slate-700">{ing.dosagem}</td>
                          <td className="py-2.5 px-4 font-mono text-slate-500">{ing.loteInsumo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Posologia */}
              <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 text-xs">
                <span className="font-bold text-[#0047AB] block mb-1">Posologia para Rótulo:</span>
                <p className="text-slate-700">{ordemSelecionada.posologia}</p>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-3.5 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">print</span>
                Imprimir Rótulo / Ficha
              </button>

              <div className="flex items-center gap-2">
                {ETAPA_CONFIG[ordemSelecionada.etapa].proxima && (
                  <button
                    type="button"
                    onClick={() => avancarEtapa(ordemSelecionada.id)}
                    className="px-4 py-2 rounded-lg bg-[#0047AB] hover:bg-blue-900 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    {ETAPA_CONFIG[ordemSelecionada.etapa].labelBotao}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Nova Ordem de Manipulação */}
      {modalNovaAberto && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4">
          <form
            onSubmit={criarNovaOrdem}
            className="bg-white rounded-2xl max-w-lg w-full shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900">Nova Ordem de Manipulação</h2>
              <button
                type="button"
                onClick={() => setModalNovaAberto(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6 flex flex-col gap-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nome do Paciente *
                </label>
                <input
                  type="text"
                  required
                  value={novoPaciente}
                  onChange={(e) => setNovoPaciente(e.target.value)}
                  placeholder="Ex: Ana Paula Ferreira"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0047AB]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Médico</label>
                  <input
                    type="text"
                    value={novoMedico}
                    onChange={(e) => setNovoMedico(e.target.value)}
                    placeholder="Dr(a). Nome"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0047AB]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">CRM</label>
                  <input
                    type="text"
                    value={novoCrm}
                    onChange={(e) => setNovoCrm(e.target.value)}
                    placeholder="CRM-SP 000000"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0047AB]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Descrição da Fórmula *
                </label>
                <input
                  type="text"
                  required
                  value={novaFormula}
                  onChange={(e) => setNovaFormula(e.target.value)}
                  placeholder="Ex: Vitamina D3 + K2 + Magnésio"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0047AB]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Forma Farmacêutica
                  </label>
                  <select
                    value={novaForma}
                    onChange={(e) => setNovaForma(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#0047AB]"
                  >
                    <option>Cápsulas Vegetais</option>
                    <option>Creme Dermatológico</option>
                    <option>Solução Oral / Gotas</option>
                    <option>Sachês Efervescentes</option>
                    <option>Gel Transdérmico</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Quantidade</label>
                  <input
                    type="text"
                    value={novaQtd}
                    onChange={(e) => setNovaQtd(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0047AB]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Prioridade</label>
                <div className="flex gap-2">
                  {(["NORMAL", "URGENTE"] as Prioridade[]).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setNovaPrioridade(p)}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-colors ${
                        novaPrioridade === p
                          ? p === "URGENTE"
                            ? "bg-red-600 text-white border-red-600"
                            : "bg-[#0047AB] text-white border-[#0047AB]"
                          : "bg-slate-50 text-slate-600 border-slate-200"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setModalNovaAberto(false)}
                className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#0047AB] hover:bg-blue-900 text-white text-xs font-bold transition-colors"
              >
                Cadastrar Ordem
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}