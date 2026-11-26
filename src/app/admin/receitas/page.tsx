    "use client";
import React, { useState } from "react";

type StatusReceita = "PENDENTE" | "APROVADA" | "RETIDA" | "RECUSADA";
type TipoReceita = "ANTIBIOTICO" | "CONTROLE_C1" | "NOTIFICACAO_B";

interface ReceitaAdmin {
  id: string;
  pedido: string;
  paciente: string;
  cpf: string;
  medicamento: string;
  medico: string;
  crm: string;
  tipo: TipoReceita;
  formato: "Digital (ICP-Brasil)" | "Física (Foto / Balcão)";
  emissao: string;
  validadeDias: number;
  status: StatusReceita;
}

const RECEITAS_INICIAIS: ReceitaAdmin[] = [
  {
    id: "REC-2026-0891",
    pedido: "#PED-4592",
    paciente: "Mariana Silva Oliveira",
    cpf: "384.***.***-12",
    medicamento: "Amoxicilina + Clavulanato 875mg (14 comp.)",
    medico: "Dr. Roberto Mendes",
    crm: "CRM-SP 142890",
    tipo: "ANTIBIOTICO",
    formato: "Digital (ICP-Brasil)",
    emissao: "24/11/2026",
    validadeDias: 10,
    status: "PENDENTE",
  },
  {
    id: "REC-2026-0890",
    pedido: "#PED-4588",
    paciente: "Carlos Henrique Souza",
    cpf: "219.***.***-08",
    medicamento: "Clonazepam 2mg — 30 Comprimidos (B1)",
    medico: "Dra. Fernanda Costa",
    crm: "CRM-SP 98412",
    tipo: "NOTIFICACAO_B",
    formato: "Física (Foto / Balcão)",
    emissao: "20/11/2026",
    validadeDias: 30,
    status: "PENDENTE",
  },
  {
    id: "REC-2026-0887",
    pedido: "#PED-4579",
    paciente: "Juliana Pereira Lima",
    cpf: "412.***.***-55",
    medicamento: "Sertralina 50mg — 30 Comprimidos (C1)",
    medico: "Dr. André Luiz",
    crm: "CRM-SP 115203",
    tipo: "CONTROLE_C1",
    formato: "Digital (ICP-Brasil)",
    emissao: "18/11/2026",
    validadeDias: 30,
    status: "RETIDA",
  },
  {
    id: "REC-2026-0882",
    pedido: "#PED-4561",
    paciente: "João Pedro Santos",
    cpf: "109.***.***-31",
    medicamento: "Azitromicina 500mg — 5 Comprimidos",
    medico: "Dra. Camila Rocha",
    crm: "CRM-SP 176340",
    tipo: "ANTIBIOTICO",
    formato: "Física (Foto / Balcão)",
    emissao: "10/11/2026",
    validadeDias: 10,
    status: "RECUSADA",
  },
];

const TIPO_LABEL: Record<TipoReceita, { texto: string; cor: string }> = {
  ANTIBIOTICO: { texto: "Antibiótico (RDC 471)", cor: "bg-slate-100 text-slate-700" },
  CONTROLE_C1: { texto: "Controle Especial (C1)", cor: "bg-red-50 text-red-700" },
  NOTIFICACAO_B: { texto: "Notificação Azul (B1)", cor: "bg-blue-100 text-[#0047AB]" },
};

const STATUS_STYLE: Record<StatusReceita, string> = {
  PENDENTE: "bg-amber-100 text-amber-800",
  APROVADA: "bg-blue-100 text-[#0047AB]",
  RETIDA: "bg-emerald-100 text-emerald-700",
  RECUSADA: "bg-red-100 text-red-700",
};

export default function AdminReceitasPage() {
  const [receitas, setReceitas] = useState<ReceitaAdmin[]>(RECEITAS_INICIAIS);
  const [busca, setBusca] = useState("");
  const [filtroStatus, setFiltroStatus] = useState<string>("TODOS");
  const [selecionada, setSelecionada] = useState<ReceitaAdmin | null>(null);

  const atualizarStatus = (id: string, novoStatus: StatusReceita) => {
    setReceitas((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: novoStatus } : r))
    );
    if (selecionada?.id === id) {
      setSelecionada({ ...selecionada, status: novoStatus });
    }
  };

  const receitasFiltradas = receitas.filter((r) => {
    const matchStatus = filtroStatus === "TODOS" || r.status === filtroStatus;
    const termo = busca.toLowerCase();
    const matchBusca =
      r.paciente.toLowerCase().includes(termo) ||
      r.medicamento.toLowerCase().includes(termo) ||
      r.pedido.toLowerCase().includes(termo) ||
      r.crm.toLowerCase().includes(termo);
    return matchStatus && matchBusca;
  });

  const totalPendentes = receitas.filter((r) => r.status === "PENDENTE").length;
  const totalRetidas = receitas.filter((r) => r.status === "RETIDA").length;
  const totalRecusadas = receitas.filter((r) => r.status === "RECUSADA").length;

  return (
    <div className="p-6 max-w-7xl mx-auto flex flex-col gap-6">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#0047AB] uppercase tracking-wider mb-1">
            <span className="material-symbols-outlined text-[16px]">prescriptions</span>
            Controle Sanitário • SNGPC / ANVISA
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Receitas &amp; Retenção
          </h1>
          <p className="text-sm text-slate-500">
            Validação farmacêutica, conferência de CRM e registro de retenção de receitas.
          </p>
        </div>

        <button
          type="button"
          className="px-4 py-2.5 rounded-xl bg-[#0047AB] hover:bg-blue-900 text-white text-sm font-bold flex items-center gap-2 shadow-sm transition-colors w-fit"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          Exportar Relatório SNGPC
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500">Aguardando Validação</span>
            <p className="text-2xl font-extrabold text-amber-600 mt-1">{totalPendentes}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <span className="material-symbols-outlined">pending_actions</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500">Retidas / Escrituradas</span>
            <p className="text-2xl font-extrabold text-emerald-600 mt-1">{totalRetidas}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <span className="material-symbols-outlined">inventory</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500">Receitas Recusadas</span>
            <p className="text-2xl font-extrabold text-red-600 mt-1">{totalRecusadas}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <span className="material-symbols-outlined">cancel</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500">Total no Período</span>
            <p className="text-2xl font-extrabold text-[#0047AB] mt-1">{receitas.length}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0047AB] flex items-center justify-center">
            <span className="material-symbols-outlined">description</span>
          </div>
        </div>
      </div>

      {/* Filtros e Busca */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[20px]">
            search
          </span>
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por paciente, medicamento, pedido ou CRM..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#0047AB]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {["TODOS", "PENDENTE", "RETIDA", "RECUSADA"].map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setFiltroStatus(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filtroStatus === st
                  ? "bg-[#0047AB] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {st === "TODOS" ? "Todas" : st}
            </button>
          ))}
        </div>
      </div>

      {/* Tabela de Receitas */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-5">Receita / Pedido</th>
                <th className="py-3.5 px-5">Paciente</th>
                <th className="py-3.5 px-5">Medicamento &amp; Tipo</th>
                <th className="py-3.5 px-5">Prescritor / Emissão</th>
                <th className="py-3.5 px-5">Status</th>
                <th className="py-3.5 px-5 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {receitasFiltradas.map((rec) => (
                <tr key={rec.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-5">
                    <div className="font-bold text-slate-900">{rec.id}</div>
                    <div className="text-xs text-[#0047AB] font-semibold">{rec.pedido}</div>
                  </td>
                  <td className="py-4 px-5">
                    <div className="font-semibold text-slate-900">{rec.paciente}</div>
                    <div className="text-xs text-slate-500">CPF: {rec.cpf}</div>
                  </td>
                  <td className="py-4 px-5">
                    <div className="font-medium text-slate-900">{rec.medicamento}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${TIPO_LABEL[rec.tipo].cor}`}
                      >
                        {TIPO_LABEL[rec.tipo].texto}
                      </span>
                      <span className="text-[11px] text-slate-500">{rec.formato}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <div className="font-medium text-slate-800">{rec.medico}</div>
                    <div className="text-xs text-slate-500">
                      {rec.crm} • {rec.emissao}
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${STATUS_STYLE[rec.status]}`}
                    >
                      {rec.status}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => setSelecionada(rec)}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#0047AB] hover:text-white text-slate-700 text-xs font-bold transition-colors"
                      >
                        Analisar
                      </button>
                      {rec.status === "PENDENTE" && (
                        <button
                          type="button"
                          onClick={() => atualizarStatus(rec.id, "RETIDA")}
                          title="Aprovar e Reter"
                          className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">check</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {receitasFiltradas.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-slate-500 text-sm">
                    Nenhuma receita encontrada com os filtros atuais.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Conferência Farmacêutica */}
      {selecionada && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Conferência Farmacêutica — {selecionada.id}
                </h2>
                <p className="text-xs text-slate-500">Pedido vinculado: {selecionada.pedido}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelecionada(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6 flex flex-col gap-4 text-sm">
              {/* Preview simulado da receita */}
              <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2">
                <span className="material-symbols-outlined text-4xl text-[#0047AB]">
                  fact_check
                </span>
                <span className="font-bold text-slate-800">{selecionada.formato}</span>
                <span className="text-xs text-slate-500">
                  Assinatura válida • Emissão: {selecionada.emissao} (Validade:{" "}
                  {selecionada.validadeDias} dias)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <span className="text-slate-500 block">Paciente</span>
                  <strong className="text-slate-900">{selecionada.paciente}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Prescritor</span>
                  <strong className="text-slate-900">
                    {selecionada.medico} ({selecionada.crm})
                  </strong>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-500 block">Medicamento Prescrito</span>
                  <strong className="text-slate-900">{selecionada.medicamento}</strong>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  atualizarStatus(selecionada.id, "RECUSADA");
                  setSelecionada(null);
                }}
                className="px-4 py-2 rounded-lg bg-red-50 text-red-700 hover:bg-red-600 hover:text-white text-xs font-bold transition-colors"
              >
                Recusar Receita
              </button>
              <button
                type="button"
                onClick={() => {
                  atualizarStatus(selecionada.id, "RETIDA");
                  setSelecionada(null);
                }}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Aprovar &amp; Registrar Retenção
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}