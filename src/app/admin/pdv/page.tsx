"use client";
import React, { useState } from "react";

interface CartItem {
  id: string;
  nome: string;
  ean: string;
  lote: string;
  preco: number;
  qtd: number;
  exigeReceita?: string;
}

const CATALOGO_RAPIDO: Omit<CartItem, "qtd">[] = [
  {
    id: "1",
    nome: "Dipirona Monoidratada 500mg/mL (20mL)",
    ean: "7896427200052",
    lote: "LT-2023-1198",
    preco: 7.49,
  },
  {
    id: "2",
    nome: "Amoxicilina + Clavulanato 500/125mg (21 comp)",
    ean: "7896004702115",
    lote: "LT-2024-8849",
    preco: 48.9,
    exigeReceita: "Receita Branca (C1)",
  },
  {
    id: "3",
    nome: "Insulina Humana NPH 100 UI/mL (10mL)",
    ean: "7891045003291",
    lote: "LT-2023-4102",
    preco: 62.5,
  },
  {
    id: "4",
    nome: "Clonazepam 2,0mg (30 comp)",
    ean: "7897595604100",
    lote: "LT-2024-0021",
    preco: 18.3,
    exigeReceita: "Tarja Preta (B1)",
  },
];

export default function PDVPage() {
  const [busca, setBusca] = useState("");
  const [cpf, setCpf] = useState("");
  const [pagamento, setPagamento] = useState("pix");
  const [desconto, setDesconto] = useState(0);
  const [itens, setItens] = useState<CartItem[]>([
    { ...CATALOGO_RAPIDO[0], qtd: 2 },
  ]);

  const adicionarItem = (produto: Omit<CartItem, "qtd">) => {
    setItens((prev) => {
      const existe = prev.find((i) => i.id === produto.id);
      if (existe) {
        return prev.map((i) =>
          i.id === produto.id ? { ...i, qtd: i.qtd + 1 } : i
        );
      }
      return [...prev, { ...produto, qtd: 1 }];
    });
  };

  const alterarQtd = (id: string, delta: number) => {
    setItens((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qtd: i.qtd + delta } : i))
        .filter((i) => i.qtd > 0)
    );
  };

  const removerItem = (id: string) => {
    setItens((prev) => prev.filter((i) => i.id !== id));
  };

  const subtotal = itens.reduce((acc, item) => acc + item.preco * item.qtd, 0);
  const total = Math.max(0, subtotal - desconto);
  const temControlado = itens.some((i) => i.exigeReceita);

  const handleFinalizarVenda = () => {
    if (itens.length === 0) return;
    alert(
      `Venda finalizada com sucesso!\nTotal: R$ ${total.toFixed(2).replace(".", ",")}\nPagamento: ${pagamento.toUpperCase()}`
    );
    setItens([]);
    setCpf("");
    setDesconto(0);
  };

  const handleBiparSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!busca.trim()) return;
    const encontrado = CATALOGO_RAPIDO.find(
      (p) =>
        p.ean.includes(busca.trim()) ||
        p.nome.toLowerCase().includes(busca.trim().toLowerCase())
    );
    if (encontrado) {
      adicionarItem(encontrado);
      setBusca("");
    } else {
      alert("Produto não encontrado no catálogo rápido.");
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      {/* Cabeçalho do PDV */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs text-blue-700 font-bold uppercase tracking-wider">
            Expedição &amp; Balcão • Frente de Caixa
          </span>
          <h1 className="text-2xl font-bold text-slate-900 mt-1">
            Ponto de Venda (PDV)
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Bipagem de produtos com baixa automática de lote (FIFO) e validação SNGPC.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span className="text-xs font-semibold text-emerald-800">
              Caixa 01 Aberto
            </span>
          </div>
          <button
            type="button"
            onClick={() => setItens([])}
            className="px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">delete_outline</span>
            Limpar Carrinho
          </button>
        </div>
      </div>

      {/* Grid Principal: Esquerda (Bipagem e Itens) | Direita (Resumo e Pagamento) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Coluna Esquerda (2/3) */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Barra de Bipagem */}
          <form
            onSubmit={handleBiparSubmit}
            className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col gap-3"
          >
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="material-symbols-outlined text-slate-400 text-[20px] absolute left-3.5 top-1/2 -translate-y-1/2">
                  barcode_scanner
                </span>
                <input
                  type="text"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  placeholder="Bipe o código de barras (EAN) ou digite o nome do medicamento..."
                  className="w-full h-11 pl-11 pr-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-5 h-11 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                Adicionar
              </button>
            </div>

            {/* Atalhos Rápidos para Teste */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-semibold text-slate-400 uppercase">
                Acesso Rápido:
              </span>
              {CATALOGO_RAPIDO.map((prod) => (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => adicionarItem(prod)}
                  className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-medium transition-colors"
                >
                  + {prod.nome.split(" ")[0]} (R$ {prod.preco.toFixed(2).replace(".", ",")})
                </button>
              ))}
            </div>
          </form>

          {/* Alerta se houver medicamento controlado no carrinho */}
          {temControlado && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-700 text-[22px]">
                  prescriptions
                </span>
                <div>
                  <p className="text-xs font-bold text-amber-900">
                    Retenção de Receita Obrigatória (SNGPC)
                  </p>
                  <p className="text-xs text-amber-800">
                    Há medicamentos controlados nesta venda. Confira a prescrição e o documento do comprador antes de finalizar.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Lista de Itens Bipados */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-900">
                Itens da Venda ({itens.reduce((acc, i) => acc + i.qtd, 0)})
              </span>
              <span className="font-mono text-xs text-slate-500">
                Seleção de lote: FIFO Automático
              </span>
            </div>

            {itens.length === 0 ? (
              <div className="p-12 flex flex-col items-center justify-center text-center gap-2">
                <span className="material-symbols-outlined text-slate-300 text-[48px]">
                  shopping_cart
                </span>
                <p className="text-sm font-semibold text-slate-600">
                  Nenhum produto bipado ainda
                </p>
                <p className="text-xs text-slate-400">
                  Use o leitor de código de barras ou clique em um item de acesso rápido acima.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-[11px] font-bold uppercase text-slate-500 bg-slate-50/50">
                      <th className="py-3 px-5">Produto / Lote</th>
                      <th className="py-3 px-4 text-center">Qtd</th>
                      <th className="py-3 px-4 text-right">Unitário</th>
                      <th className="py-3 px-4 text-right">Subtotal</th>
                      <th className="py-3 px-4 text-center">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {itens.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/60">
                        <td className="py-3.5 px-5">
                          <div className="flex flex-col">
                            <span className="font-semibold text-slate-900">
                              {item.nome}
                            </span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="font-mono text-[11px] text-slate-500">
                                Lote: {item.lote}
                              </span>
                              {item.exigeReceita && (
                                <span className="px-1.5 py-0.5 rounded bg-red-100 text-red-800 text-[10px] font-bold">
                                  {item.exigeReceita}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              type="button"
                              onClick={() => alterarQtd(item.id, -1)}
                              className="w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center"
                            >
                              -
                            </button>
                            <span className="font-mono font-bold text-slate-900 w-6 text-center">
                              {item.qtd}
                            </span>
                            <button
                              type="button"
                              onClick={() => alterarQtd(item.id, 1)}
                              className="w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono text-xs text-slate-600">
                          R$ {item.preco.toFixed(2).replace(".", ",")}
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900">
                          R$ {(item.preco * item.qtd).toFixed(2).replace(".", ",")}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <button
                            type="button"
                            onClick={() => removerItem(item.id)}
                            className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                            title="Remover item"
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Coluna Direita (1/3) - Resumo e Pagamento */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 flex flex-col gap-5">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900">
              Resumo da Compra
            </h2>
            <p className="text-xs text-slate-500">
              Identificação e fechamento fiscal (NFC-e)
            </p>
          </div>

          {/* CPF na Nota */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700">
              CPF / CNPJ na Nota (Opcional)
            </label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="000.000.000-00"
              className="h-10 px-3 rounded-lg bg-slate-50 border border-slate-200 font-mono text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          {/* Forma de Pagamento */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-700">
              Forma de Pagamento
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "pix", label: "Pix", icon: "qr_code_2" },
                { id: "credito", label: "Crédito", icon: "credit_card" },
                { id: "debito", label: "Débito", icon: "credit_card" },
                { id: "dinheiro", label: "Dinheiro", icon: "payments" },
              ].map((forma) => (
                <button
                  key={forma.id}
                  type="button"
                  onClick={() => setPagamento(forma.id)}
                  className={`p-2.5 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    pagamento === forma.id
                      ? "bg-blue-50 border-blue-600 text-blue-800"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {forma.icon}
                  </span>
                  {forma.label}
                </button>
              ))}
            </div>
          </div>

          {/* Totais */}
          <div className="border-t border-slate-100 pt-4 flex flex-col gap-2 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-mono">
                R$ {subtotal.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span>Desconto (R$)</span>
              <input
                type="number"
                min={0}
                step="0.50"
                value={desconto}
                onChange={(e) => setDesconto(Number(e.target.value) || 0)}
                className="w-20 h-8 px-2 text-right rounded-md bg-slate-50 border border-slate-200 font-mono text-xs"
              />
            </div>
            <div className="flex justify-between items-baseline pt-3 mt-1 border-t border-slate-200">
              <span className="font-bold text-slate-900">Total a Pagar</span>
              <span className="text-2xl font-bold font-mono text-emerald-700">
                R$ {total.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>

          {/* Botão Finalizar */}
          <button
            type="button"
            disabled={itens.length === 0}
            onClick={handleFinalizarVenda}
            className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            Finalizar Venda &amp; Emitir NFC-e
          </button>
        </div>
      </div>
    </div>
  );
}