"use client";
import React, { useState } from "react";
import Link from "next/link";

const DADOS_GRAFICO: Record<string, { label: string; valor: number; altura: string }[]> = {
  Hoje: [
    { label: "08h", valor: 1200, altura: "h-12" },
    { label: "10h", valor: 2400, altura: "h-24" },
    { label: "12h", valor: 3100, altura: "h-32" },
    { label: "14h", valor: 2800, altura: "h-28" },
    { label: "16h", valor: 4200, altura: "h-40" },
    { label: "18h", valor: 3600, altura: "h-36" },
  ],
  "7 Dias": [
    { label: "Seg", valor: 11200, altura: "h-24" },
    { label: "Ter", valor: 13400, altura: "h-28" },
    { label: "Qua", valor: 10900, altura: "h-20" },
    { label: "Qui", valor: 15800, altura: "h-36" },
    { label: "Sex", valor: 18400, altura: "h-40" },
    { label: "Sáb", valor: 14100, altura: "h-32" },
  ],
  "30 Dias": [
    { label: "Sem 1", valor: 42000, altura: "h-24" },
    { label: "Sem 2", valor: 48500, altura: "h-32" },
    { label: "Sem 3", valor: 51200, altura: "h-36" },
    { label: "Sem 4", valor: 58900, altura: "h-40" },
  ],
  "Mês Atual": [
    { label: "01-07", valor: 39000, altura: "h-24" },
    { label: "08-14", valor: 46200, altura: "h-32" },
    { label: "15-21", valor: 53100, altura: "h-36" },
    { label: "22-25", valor: 49800, altura: "h-32" },
  ],
};

export default function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState("30 Dias");
  const filters = ["Hoje", "7 Dias", "30 Dias", "Mês Atual"];
  const barras = DADOS_GRAFICO[activeFilter] || DADOS_GRAFICO["30 Dias"];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      {/* Cabeçalho + Filtro de Período */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs text-blue-700 font-bold uppercase tracking-wider">
            Visão Geral • Operação Farmacêutica
          </span>
          <h1 className="text-2xl font-bold text-slate-900 mt-1">
            Dashboard Administrativo
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Acompanhamento de vendas, pedidos em separação e conformidade SNGPC.
          </p>
        </div>

        <div className="inline-flex bg-white p-1 rounded-lg border border-slate-200 shadow-xs self-start md:self-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                activeFilter === filter
                  ? "bg-blue-700 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Faturamento ({activeFilter})</span>
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">payments</span>
          </div>
          <p className="text-2xl font-bold font-mono text-slate-900 mt-2">R$ 200.600</p>
          <span className="text-[11px] font-semibold text-emerald-700">+12,4% vs período anterior</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Pedidos em Separação</span>
            <span className="material-symbols-outlined text-amber-600 text-[20px]">inventory_2</span>
          </div>
          <p className="text-2xl font-bold font-mono text-slate-900 mt-2">14</p>
          <span className="text-[11px] font-semibold text-amber-700">2 exigem validação de receita</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Ticket Médio</span>
            <span className="material-symbols-outlined text-blue-600 text-[20px]">shopping_bag</span>
          </div>
          <p className="text-2xl font-bold font-mono text-slate-900 mt-2">R$ 118,90</p>
          <span className="text-[11px] text-slate-500">Loja Física + E-commerce</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Lotes Críticos (Validade)</span>
            <span className="material-symbols-outlined text-red-600 text-[20px]">warning</span>
          </div>
          <p className="text-2xl font-bold font-mono text-slate-900 mt-2">5</p>
          <Link href="/admin/estoque" className="text-[11px] font-semibold text-red-700 hover:underline">
            Ver controle de lotes →
          </Link>
        </div>
      </div>

      {/* Gráfico de Faturamento */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Evolução de Vendas ({activeFilter})
            </h2>
            <p className="text-xs text-slate-500">
              Consolidado de Balcão (PDV), E-commerce e WhatsApp Bot
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold">
            Atualizado agora
          </span>
        </div>

        <div className="flex items-end justify-around gap-3 h-48 pt-4 border-b border-slate-100">
          {barras.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-2 flex-1 max-w-22.5">
              <span className="font-mono text-[11px] font-semibold text-slate-600">
                R$ {(b.valor / 1000).toFixed(1)}k
              </span>
              <div
                className={`w-full ${b.altura} rounded-t-lg bg-blue-600 hover:bg-blue-700 transition-all`}
              />
              <span className="text-xs font-medium text-slate-500 pb-2">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabela de Pedidos Recentes */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Pedidos &amp; Dispensações Recentes</h2>
            <p className="text-xs text-slate-500">Fila operacional em tempo real</p>
          </div>
          <Link
            href="/admin/pdv"
            className="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">point_of_sale</span>
            Abrir PDV
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-bold uppercase text-slate-500 bg-slate-50/50">
                <th className="py-3 px-5">Pedido</th>
                <th className="py-3 px-4">Cliente</th>
                <th className="py-3 px-4">Itens</th>
                <th className="py-3 px-4">Valor</th>
                <th className="py-3 px-4">Canal</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-5 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50/60">
                <td className="py-3.5 px-5 whitespace-nowrap">
                  <div className="font-mono text-xs font-bold text-slate-900">#SM-9841</div>
                  <div className="font-mono text-[11px] text-slate-500">14:15 (há 22 min)</div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-[11px]">
                      AS
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Amanda Silveira Castro</div>
                      <div className="font-mono text-[11px] text-slate-500">Convênio Unimed Diamante</div>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="text-xs font-medium text-slate-900">Protetor Solar Anthelios FPS 60 + Vitamina C</div>
                  <div className="text-[11px] text-slate-500">2 volumes cosméticos</div>
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap font-mono text-xs font-bold text-slate-900">
                  R$ 214,50
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-700">
                    <span className="material-symbols-outlined text-[13px]">desktop_windows</span> E-commerce Web
                  </span>
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span> Em Rota de Entrega
                  </span>
                </td>
                <td className="py-3.5 px-5 whitespace-nowrap text-right">
                  <button className="px-2.5 py-1.5 bg-slate-100 text-blue-700 hover:bg-blue-700 hover:text-white rounded-lg text-xs font-semibold transition-colors inline-flex items-center gap-1" type="button">
                    <span className="material-symbols-outlined text-[15px]">near_me</span> Rastrear
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50/60">
                <td className="py-3.5 px-5 whitespace-nowrap">
                  <div className="font-mono text-xs font-bold text-slate-900">#SM-9840</div>
                  <div className="font-mono text-[11px] text-slate-500">13:58 (há 39 min)</div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-[11px]">
                      RO
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Roberto de Oliveira</div>
                      <div className="font-mono text-[11px] text-slate-500">Balcão Central • PDV 02</div>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="text-xs font-medium text-slate-900">Dipirona 500mg (2x) + Dorflex 36 comp.</div>
                  <div className="text-[11px] text-emerald-700 font-medium">MIPs / Venda Direta</div>
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap font-mono text-xs font-bold text-slate-900">
                  R$ 38,40
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700">
                    <span className="material-symbols-outlined text-[13px]">point_of_sale</span> Loja Física
                  </span>
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Concluído
                  </span>
                </td>
                <td className="py-3.5 px-5 whitespace-nowrap text-right">
                  <button className="px-2.5 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg text-xs font-semibold transition-colors inline-flex items-center gap-1" type="button">
                    <span className="material-symbols-outlined text-[15px]">receipt_long</span> Cupom
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50/60">
                <td className="py-3.5 px-5 whitespace-nowrap">
                  <div className="font-mono text-xs font-bold text-slate-900">#SM-9839</div>
                  <div className="font-mono text-[11px] text-slate-500">13:42 (há 55 min)</div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-[11px]">
                      JL
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Juliana Lima Pires</div>
                      <div className="font-mono text-[11px] text-slate-500">CPF: ***.192.304-**</div>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="text-xs font-medium text-slate-900">Venlafaxina 75mg Cloridrato (30 cáps)</div>
                  <div className="flex items-center gap-1 text-[11px] text-red-700 font-semibold">
                    <span className="material-symbols-outlined text-[12px]">clinical_notes</span> Receita C1 / Notificação
                  </div>
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap font-mono text-xs font-bold text-slate-900">
                  R$ 89,70
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-800">
                    <span className="material-symbols-outlined text-[13px]">chat</span> WhatsApp Bot
                  </span>
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span> Aguardando Separação
                  </span>
                </td>
                <td className="py-3.5 px-5 whitespace-nowrap text-right">
                  <button className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-1" type="button">
                    <span className="material-symbols-outlined text-[15px]">draw</span> Validar
                  </button>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-slate-50/60">
                <td className="py-3.5 px-5 whitespace-nowrap">
                  <div className="font-mono text-xs font-bold text-slate-900">#SM-9838</div>
                  <div className="font-mono text-[11px] text-slate-500">13:10 (há 1h 27min)</div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-[11px]">
                      ES
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Eduardo Santoro</div>
                      <div className="font-mono text-[11px] text-slate-500">Entrega Expressa Zona Sul</div>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="text-xs font-medium text-slate-900">Whey Isolate 900g + Creatina Creapure 300g</div>
                  <div className="text-[11px] text-slate-500">Suplementação Esportiva</div>
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap font-mono text-xs font-bold text-slate-900">
                  R$ 289,00
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-700">
                    <span className="material-symbols-outlined text-[13px]">desktop_windows</span> E-commerce Web
                  </span>
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Concluído
                  </span>
                </td>
                <td className="py-3.5 px-5 whitespace-nowrap text-right">
                  <button className="px-2.5 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg text-xs font-semibold transition-colors inline-flex items-center gap-1" type="button">
                    <span className="material-symbols-outlined text-[15px]">print</span> Recibo
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Rodapé da Tabela */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600"></span>
            Sincronismo SNGPC Anvisa: <strong className="text-slate-900">Online (Último lote às 14:00)</strong>
          </div>
          <span>Página 1 de 128</span>
        </div>
      </div>

      {/* Cards de Alertas Rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
            <span className="material-symbols-outlined text-[22px]">cloud_sync</span>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Arquivo XML SNGPC</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              O relatório quinzenal de movimentação de psicotrópicos vence em <strong>3 dias úteis</strong>.
            </p>
            <Link href="/admin/sngpc" className="mt-2 inline-flex items-center gap-1 text-xs text-blue-700 font-semibold hover:underline">
              Gerar Arquivo XML <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-700 shrink-0">
            <span className="material-symbols-outlined text-[22px]">thermostat</span>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Termolábeis &amp; Geladeira</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Sensor Geladeira Insulina 01 registrando <strong>+4.2°C</strong> (Faixa segura: 2°C a 8°C).
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> Calibração em Dia
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
            <span className="material-symbols-outlined text-[22px]">support_agent</span>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Plantão Farmacêutico</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              3 clientes aguardam orientação farmacêutica sobre interações no canal WhatsApp.
            </p>
            <a className="mt-2 inline-flex items-center gap-1 text-xs text-blue-700 font-semibold hover:underline" href="#">
              Abrir Chat do Plantão <span className="material-symbols-outlined text-[14px]">chat</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}