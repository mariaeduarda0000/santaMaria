"use client";
import React, { useState } from "react";

interface MovimentacaoSNGPC {
  id: string;
  data: string;
  medicamento: string;
  lote: string;
  categoria: "Portaria 344" | "Antimicrobiano";
  receita: string;
  prescritor: string;
  qtd: number;
  status: "Pendente" | "Transmitido";
  protocolo?: string;
}

const MOVIMENTACOES_INICIAIS: MovimentacaoSNGPC[] = [
  {
    id: "1",
    data: "25/11/2026 14:32",
    medicamento: "Clonazepam 2,0mg (30 comp)",
    lote: "LT-2024-0021",
    categoria: "Portaria 344",
    receita: "Notificação B1 (Azul) #88412",
    prescritor: "Dr. Carlos Mendes • CRM-SP 142890",
    qtd: 1,
    status: "Pendente",
  },
  {
    id: "2",
    data: "25/11/2026 11:15",
    medicamento: "Amoxicilina + Clavulanato 500/125mg",
    lote: "LT-2024-8849",
    categoria: "Antimicrobiano",
    receita: "Receita Branca 2 Vias #44109",
    prescritor: "Dra. Juliana Costa • CRM-SP 198421",
    qtd: 2,
    status: "Pendente",
  },
  {
    id: "3",
    data: "24/11/2026 17:48",
    medicamento: "Zolpidem 10mg (30 comp)",
    lote: "LT-2024-5510",
    categoria: "Portaria 344",
    receita: "Notificação B1 (Azul) #88390",
    prescritor: "Dr. Roberto Alves • CRM-SP 110234",
    qtd: 1,
    status: "Transmitido",
    protocolo: "ANV-20261124-9921A",
  },
  {
    id: "4",
    data: "24/11/2026 09:20",
    medicamento: "Azitromicina 500mg (5 comp)",
    lote: "LT-2024-3318",
    categoria: "Antimicrobiano",
    receita: "Receita Branca 2 Vias #44088",
    prescritor: "Dra. Fernanda Lima • CRM-SP 175602",
    qtd: 1,
    status: "Transmitido",
    protocolo: "ANV-20261124-9921A",
  },
];

export default function SNGPCPage() {
  const [movimentacoes, setMovimentacoes] = useState<MovimentacaoSNGPC[]>(
    MOVIMENTACOES_INICIAIS
  );
  const [filtro, setFiltro] = useState<string>("Todos");
  const [busca, setBusca] = useState("");
  const [transmitindo, setTransmitindo] = useState(false);
  const [ultimoProtocolo, setUltimoProtocolo] = useState("ANV-20261124-9921A");

  const pendentesCount = movimentacoes.filter(
    (m) => m.status === "Pendente"
  ).length;

  const itensFiltrados = movimentacoes.filter((m) => {
    const matchFiltro =
      filtro === "Todos" ||
      m.categoria === filtro ||
      m.status === filtro;
    const matchBusca =
      m.medicamento.toLowerCase().includes(busca.toLowerCase()) ||
      m.lote.toLowerCase().includes(busca.toLowerCase()) ||
      m.prescritor.toLowerCase().includes(busca.toLowerCase());
    return matchFiltro && matchBusca;
  });

  const handleTransmitirXML = () => {
    if (pendentesCount === 0) return;
    setTransmitindo(true);

    setTimeout(() => {
      const novoProtocolo = `ANV-20261125-${Math.floor(1000 + Math.random() * 9000)}X`;
      setMovimentacoes((prev) =>
        prev.map((m) =>
          m.status === "Pendente"
            ? { ...m, status: "Transmitido", protocolo: novoProtocolo }
            : m
        )
      );
      setUltimoProtocolo(novoProtocolo);
      setTransmitindo(false);
    }, 900);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Cards de Indicadores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Pendentes de Envio
            </span>
            <span className="material-symbols-outlined text-amber-600 text-[20px]">
              schedule_send
            </span>
          </div>
          <p className="text-2xl font-bold font-mono text-slate-900 mt-2">
            {pendentesCount}
          </p>
          <span className="text-[11px] text-amber-700 font-medium">
            {pendentesCount > 0
              ? "Aguardando transmissão XML"
              : "Tudo em dia com a Anvisa"}
          </span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Último Protocolo
            </span>
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">
              verified
            </span>
          </div>
          <p className="text-base font-bold font-mono text-slate-900 mt-3 truncate">
            {ultimoProtocolo}
          </p>
          <span className="text-[11px] text-emerald-700 font-medium">
            Validado sem divergências
          </span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Portaria 344/98
            </span>
            <span className="material-symbols-outlined text-red-600 text-[20px]">
              prescriptions
            </span>
          </div>
          <p className="text-2xl font-bold font-mono text-slate-900 mt-2">
            {movimentacoes.filter((m) => m.categoria === "Portaria 344").length}
          </p>
          <span className="text-[11px] text-slate-500">
            Receitas retidas no período
          </span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Antimicrobianos
            </span>
            <span className="material-symbols-outlined text-blue-600 text-[20px]">
              medication
            </span>
          </div>
          <p className="text-2xl font-bold font-mono text-slate-900 mt-2">
            {
              movimentacoes.filter((m) => m.categoria === "Antimicrobiano")
                .length
            }
          </p>
          <span className="text-[11px] text-slate-500">
            Dispensações registradas
          </span>
        </div>
      </div>

      {/* Barra de Ações e Filtros */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {["Todos", "Pendente", "Portaria 344", "Antimicrobiano"].map(
            (tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFiltro(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filtro === tab
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="relative">
            <span className="material-symbols-outlined text-slate-400 text-[18px] absolute left-3 top-1/2 -translate-y-1/2">
              search
            </span>
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar medicamento, lote ou CRM..."
              className="h-9 pl-9 pr-3 w-full sm:w-64 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <button
            type="button"
            disabled={pendentesCount === 0 || transmitindo}
            onClick={handleTransmitirXML}
            className="h-9 px-4 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              cloud_upload
            </span>
            {transmitindo
              ? "Transmitindo..."
              : `Transmitir XML (${pendentesCount})`}
          </button>
        </div>
      </div>

      {/* Tabela de Escrituração */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <span className="text-sm font-bold text-slate-900">
            Registro de Movimentações Controladas
          </span>
          <span className="text-xs text-slate-500">
            Exibindo {itensFiltrados.length} registro(s)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-bold uppercase text-slate-500 bg-slate-50/50">
                <th className="py-3 px-5">Data / Hora</th>
                <th className="py-3 px-4">Medicamento / Lote</th>
                <th className="py-3 px-4">Receituário &amp; Prescritor</th>
                <th className="py-3 px-4 text-center">Qtd</th>
                <th className="py-3 px-4">Status Anvisa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {itensFiltrados.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/60">
                  <td className="py-3.5 px-5 font-mono text-xs text-slate-600 whitespace-nowrap">
                    {item.data}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-900">
                        {item.medicamento}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono text-[11px] text-slate-500">
                          Lote: {item.lote}
                        </span>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                            item.categoria === "Portaria 344"
                              ? "bg-red-100 text-red-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {item.categoria}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-800">
                        {item.receita}
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5">
                        {item.prescritor}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-900">
                    {item.qtd}
                  </td>
                  <td className="py-3.5 px-4">
                    {item.status === "Transmitido" ? (
                      <div className="flex flex-col">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          Transmitido
                        </span>
                        <span className="font-mono text-[10px] text-slate-400 mt-0.5">
                          {item.protocolo}
                        </span>
                      </div>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        Pendente XML
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}