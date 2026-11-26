"use client";
import React, { useState } from "react";
import Link from "next/link";

interface CartItem {
  id: number;
  badge: string;
  anvisa: string;
  nome: string;
  detalhes: string;
  extra: string;
  preco: number;
  unitario: string;
  qtd: number;
}

const ITENS_INICIAIS: CartItem[] = [
  {
    id: 1,
    badge: "GENÉRICO",
    anvisa: "ANVISA: 1.0043.0921",
    nome: "Dipirona Monoidratada 500mg — 30 Comprimidos",
    detalhes: "Medley Genéricos • Analgésico e Antitérmico",
    extra: "Venda sem prescrição médica (MIP)",
    preco: 14.9,
    unitario: "R$ 0,50 / comp.",
    qtd: 1,
  },
  {
    id: 2,
    badge: "IMUNIDADE",
    anvisa: "ANVISA: 6.2384.0015",
    nome: "Vitamina D3 2.000 UI — 60 Cápsulas Gelatinosas",
    detalhes: "Addera / Suplemento Alimentar • Alta Absorção",
    extra: "Zero açúcar e não contém glúten",
    preco: 34.8,
    unitario: "R$ 0,58 / cáps.",
    qtd: 1,
  },
  {
    id: 3,
    badge: "CUIDADO INTENSIVO",
    anvisa: "ANVISA: 25351.482910",
    nome: "Creme Hidratante Dermo Reparador Intensivo",
    detalhes: "Dermocare Lab • Bisnaga 200g • Com Ácido Hialurônico e Ceramidas",
    extra: "Hipoalergênico e Sem Parabenos",
    preco: 58.0,
    unitario: "R$ 0,29 / g",
    qtd: 1,
  },
];

const RECOMENDADOS = [
  {
    id: 101,
    tag: "CUIDADOS",
    nome: "Solução Fisiológica 0,9% 500ml",
    desc: "Solução estéril de cloreto de sódio",
    preco: 7.5,
    selo: "Essencial",
  },
  {
    id: 102,
    tag: "HIGIENE",
    nome: "Álcool em Gel 70% Antisséptico 440g",
    desc: "Elimina 99,9% das bactérias com Aloe Vera",
    preco: 12.9,
    selo: "Mais vendido",
  },
  {
    id: 103,
    tag: "DIAGNÓSTICO",
    nome: "Termômetro Clínico Digital G-Tech",
    desc: "Leitura rápida, à prova d'água e alarme",
    preco: 24.9,
    selo: "Garantia 1 ano",
  },
  {
    id: 104,
    tag: "IMUNIDADE",
    nome: "Vitamina C 1g + Zinco Efervescente",
    desc: "Tubo com 10 comprimidos sabor laranja",
    preco: 18.5,
    selo: "Oferta",
  },
];

export default function CartPage() {
  const [itens, setItens] = useState<CartItem[]>(ITENS_INICIAIS);
  const [freteTipo, setFreteTipo] = useState<"retirada" | "express">("retirada");

  const alterarQtd = (id: number, delta: number) => {
    setItens((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qtd: item.qtd + delta } : item))
        .filter((item) => item.qtd > 0)
    );
  };

  const removerItem = (id: number) => {
    setItens((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = itens.reduce((acc, item) => acc + item.preco * item.qtd, 0);
  const desconto = itens.length > 0 ? 15.0 : 0;
  const valorFrete = freteTipo === "express" && subtotal < 99 ? 9.9 : 0;
  const total = Math.max(0, subtotal - desconto + valorFrete);
  const totalPix = total * 0.95;

  const formatar = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-20 w-full">
      {/* Título da Página */}
      <div className="flex flex-col gap-1.5 mb-8">
        <div className="flex items-center gap-1.5 text-[#0047AB]">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          <span className="text-[11px] font-bold uppercase tracking-widest">
            Ambiente Criptografado / Drogaria Santa Maria Express
          </span>
        </div>
        <h1 className="text-3xl text-slate-900 font-extrabold tracking-tight">
          Meu Carrinho de Compras
        </h1>
      </div>

      {/* Layout Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Coluna Esquerda */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Lista de Produtos */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#0047AB] text-[22px]">
                  shopping_cart
                </span>
                <h2 className="text-base sm:text-lg text-slate-900 font-bold">
                  Itens Selecionados
                </h2>
                <span className="bg-[#0047AB]/10 text-[#0047AB] px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                  {itens.length} {itens.length === 1 ? "produto" : "produtos"}
                </span>
              </div>
              {itens.length > 0 && (
                <button
                  type="button"
                  onClick={() => setItens([])}
                  className="text-xs sm:text-sm text-slate-500 hover:text-red-600 transition-colors flex items-center gap-1 font-medium"
                >
                  <span className="material-symbols-outlined text-[16px]">delete_sweep</span>
                  Limpar tudo
                </button>
              )}
            </div>

            <div className="px-6 divide-y divide-slate-100">
              {itens.length === 0 ? (
                <div className="py-12 text-center flex flex-col items-center gap-3">
                  <span className="material-symbols-outlined text-4xl text-slate-300">
                    remove_shopping_cart
                  </span>
                  <p className="text-slate-600 font-medium">Seu carrinho está vazio.</p>
                  <Link
                    href="/"
                    className="px-4 py-2 rounded-lg bg-[#0047AB] text-white text-sm font-bold hover:bg-blue-900 transition-colors"
                  >
                    Voltar para a Loja
                  </Link>
                </div>
              ) : (
                itens.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row gap-5 py-6 items-start md:items-center"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 bg-slate-50 border border-slate-200 rounded-lg p-2 shrink-0 flex items-center justify-center relative">
                      <span className="absolute -top-2 -left-2 bg-blue-100 text-[#0047AB] text-[9px] px-1.5 py-0.5 rounded font-bold">
                        {item.badge}
                      </span>
                      <span className="material-symbols-outlined text-3xl text-[#0047AB]/60">
                        medication
                      </span>
                    </div>

                    {/* Informações */}
                    <div className="flex flex-col flex-1 gap-1">
                      <span className="text-[10px] text-slate-500 font-bold">{item.anvisa}</span>
                      <h3 className="text-sm text-slate-900 font-bold leading-snug">
                        {item.nome}
                      </h3>
                      <p className="text-xs text-slate-500">{item.detalhes}</p>
                      <div className="flex items-center gap-1 mt-0.5 text-slate-500 text-[11px]">
                        <span className="material-symbols-outlined text-[14px] text-[#0047AB]">
                          science
                        </span>
                        {item.extra}
                      </div>
                    </div>

                    {/* Quantidade + Preço + Remover */}
                    <div className="flex flex-row md:flex-col items-center justify-between md:items-end gap-2 w-full md:w-auto shrink-0">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 p-0.5">
                        <button
                          type="button"
                          onClick={() => alterarQtd(item.id, -1)}
                          aria-label="Diminuir quantidade"
                          className="w-8 h-8 flex items-center justify-center rounded-md text-slate-600 hover:bg-white transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">remove</span>
                        </button>
                        <span className="text-sm font-bold px-3 text-center min-w-8">
                          {item.qtd}
                        </span>
                        <button
                          type="button"
                          onClick={() => alterarQtd(item.id, 1)}
                          aria-label="Aumentar quantidade"
                          className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-[#0047AB] hover:bg-blue-50 transition-colors font-bold shadow-xs"
                        >
                          <span className="material-symbols-outlined text-[16px]">add</span>
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-base sm:text-lg text-slate-900 font-extrabold block leading-none">
                          {formatar(item.preco * item.qtd)}
                        </span>
                        <span className="text-[11px] text-slate-500">{item.unitario}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => removerItem(item.id)}
                        aria-label="Remover item"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[19px]">delete_outline</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Aviso Regulatório */}
            <div className="bg-blue-50/70 m-6 rounded-xl p-4 flex items-start gap-3 border border-blue-100">
              <span className="material-symbols-outlined text-[#0047AB] text-[22px] shrink-0 mt-0.5">
                assignment_late
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs sm:text-sm text-slate-900 font-bold">
                  Informação Regulatória Sanitária (RDC ANVISA nº 44/2009):
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nenhum dos itens atualmente adicionados ao seu carrinho exige retenção física de receita médica ou controle especial (Portaria 344/98). Caso inclua controlados, o envio digital da receita será solicitado na etapa seguinte.
                </p>
              </div>
            </div>
          </div>

          {/* Frete e Cupom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frete */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#0047AB] text-[20px]">
                    local_shipping
                  </span>
                  <h2 className="text-base text-slate-900 font-bold">Calcular Frete e Prazos</h2>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Informe seu CEP para entrega expressa ou retirada na loja.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="text"
                    defaultValue="17500-000"
                    placeholder="00000-000"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 text-sm text-slate-900 border border-slate-200 focus:outline-none focus:border-[#0047AB]"
                  />
                  <button
                    type="button"
                    className="px-4 py-2.5 rounded-lg bg-[#0047AB]/10 text-[#0047AB] text-sm font-bold hover:bg-[#0047AB] hover:text-white transition-colors shrink-0"
                  >
                    Calcular
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center justify-between p-3 rounded-lg bg-slate-50 cursor-pointer border border-slate-200 hover:border-[#0047AB]">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={freteTipo === "retirada"}
                      onChange={() => setFreteTipo("retirada")}
                      className="accent-[#0047AB] h-4 w-4"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm text-slate-900 font-bold">
                        Retirar na Loja Física (Centro)
                      </span>
                      <span className="text-[11px] text-emerald-600 font-semibold">
                        Pronto em até 1 hora útil
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-emerald-600 font-bold uppercase">
                    Grátis
                  </span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-slate-50 cursor-pointer border border-slate-200 hover:border-[#0047AB]">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={freteTipo === "express"}
                      onChange={() => setFreteTipo("express")}
                      className="accent-[#0047AB] h-4 w-4"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm text-slate-900 font-bold">
                        Entrega Expressa Motoboy
                      </span>
                      <span className="text-[11px] text-slate-500">Chega hoje em até 2 horas</span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-slate-900 font-bold">
                    {subtotal >= 99 ? "Grátis" : "R$ 9,90"}
                  </span>
                </label>
              </div>
            </div>

            {/* Cupom */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#0047AB] text-[20px]">sell</span>
                  <h2 className="text-base text-slate-900 font-bold">Cupom de Desconto</h2>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Possui código promocional ou convênio?
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      defaultValue="PRIMEIRACOMPRA"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 text-sm text-slate-900 uppercase font-bold tracking-wider border border-slate-200 focus:outline-none focus:border-[#0047AB]"
                    />
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-emerald-500 text-[20px]">
                      check_circle
                    </span>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2.5 rounded-lg bg-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-300 transition-colors shrink-0"
                  >
                    Aplicar
                  </button>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-600">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  Cupom <strong>PRIMEIRACOMPRA</strong> ativado!
                </div>
              </div>

              <div className="p-3 rounded-lg bg-blue-50 flex items-center justify-between border border-blue-100">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0047AB] text-[22px]">
                    health_and_safety
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#0047AB] font-bold">
                      Farmácia Popular / PBM
                    </span>
                    <span className="text-[10px] text-blue-700">Descontos de até 70% pelo CPF</span>
                  </div>
                </div>
                <button type="button" className="text-xs text-[#0047AB] font-bold hover:underline">
                  Vincular
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Resumo do Pedido */}
        <div className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-24">
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h2 className="text-lg text-slate-900 font-bold">Resumo do Pedido</h2>
              <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">
                ECONOMIA: {formatar(desconto)}
              </span>
            </div>

            <div className="flex flex-col gap-2.5 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal dos produtos</span>
                <span className="text-slate-900 font-semibold">{formatar(subtotal)}</span>
              </div>
              <div className="flex justify-between text-emerald-600">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">redeem</span>
                  Desconto Cupom
                </span>
                <span className="font-bold">- {formatar(desconto)}</span>
              </div>
              <div className="flex justify-between">
                <span>Frete (compras &gt; R$ 99)</span>
                <span className="font-bold text-emerald-600 uppercase">
                  {valorFrete === 0 ? "Grátis" : formatar(valorFrete)}
                </span>
              </div>

              {/* Barra de Frete Grátis */}
              <div className="p-2.5 rounded-lg bg-slate-50 flex flex-col gap-1.5 mt-1 border border-slate-200">
                <div className="flex justify-between text-[11px] text-slate-900">
                  <span className="font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-emerald-600 text-[15px]">
                      local_shipping
                    </span>
                    {subtotal >= 99
                      ? "Frete Grátis Atingido!"
                      : `Faltam ${formatar(99 - subtotal)} para Frete Grátis`}
                  </span>
                  <span className="font-bold text-emerald-600">
                    {Math.min(100, Math.round((subtotal / 99) * 100))}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-emerald-500 h-1.5 rounded-full transition-all"
                    style={{ width: `${Math.min(100, (subtotal / 99) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-200" />

            {/* Total */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <span className="text-base text-slate-900 font-bold">Total do Pedido</span>
                <span className="text-3xl text-[#0047AB] font-extrabold tracking-tight">
                  {formatar(total)}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 mt-2 bg-slate-50 p-3 rounded-lg text-center border border-slate-200">
                <span className="text-sm text-slate-900 font-semibold">
                  ou <strong className="text-emerald-600 font-bold">{formatar(totalPix)} no PIX</strong> (5% OFF)
                </span>
                <span className="text-xs text-slate-500">
                  em até <strong>3x de {formatar(total / 3)} sem juros</strong>
                </span>
              </div>
            </div>

            {/* Botão Principal Vermelho */}
            <button
              type="button"
              className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white text-base font-bold shadow-md flex items-center justify-center gap-2 transition-colors"
            >
              <span>Finalizar Compra</span>
              <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
            </button>

            <Link
              href="/"
              className="w-full py-2 rounded-lg text-center text-sm text-slate-500 hover:text-[#0047AB] transition-colors flex items-center justify-center gap-1 font-medium"
            >
              <span className="material-symbols-outlined text-[18px]">keyboard_backspace</span>
              Continuar Comprando
            </Link>
          </div>

          {/* Selos de Confiança */}
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-slate-500 font-semibold">
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-[#0047AB] text-[18px]">lock</span>
              <span>Site Seguro</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
              <span>ANVISA</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-[#0047AB] text-[18px]">support_agent</span>
              <span>Farmacêutico</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-sell (4 Cards) */}
      <div className="mt-14 pt-8 border-t border-slate-200">
        <div className="mb-6">
          <span className="text-xs text-[#0047AB] font-bold uppercase tracking-wider">
            Aproveite o frete grátis
          </span>
          <h2 className="text-2xl text-slate-900 font-bold tracking-tight">
            Frequentemente Comprados Juntos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RECOMENDADOS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="relative w-full h-32 bg-slate-50 rounded-lg mb-3 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-[#0047AB]/40">
                    medical_services
                  </span>
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-blue-100 text-[#0047AB] text-[9px] font-bold">
                    {prod.tag}
                  </span>
                </div>
                <h3 className="text-sm text-slate-900 font-bold line-clamp-1">{prod.nome}</h3>
                <p className="text-xs text-slate-500 mb-3 line-clamp-1">{prod.desc}</p>
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-base text-slate-900 font-extrabold">
                    {formatar(prod.preco)}
                  </span>
                  <span className="text-[11px] text-[#0047AB] font-semibold">{prod.selo}</span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setItens((prev) => [
                      ...prev,
                      {
                        id: Date.now(),
                        badge: prod.tag,
                        anvisa: "ANVISA: Regularizado",
                        nome: prod.nome,
                        detalhes: prod.desc,
                        extra: "Produto original com nota fiscal",
                        preco: prod.preco,
                        unitario: "Unidade",
                        qtd: 1,
                      },
                    ])
                  }
                  className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-[#0047AB] hover:text-white text-slate-900 text-xs font-bold transition-colors flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-[17px]">add_shopping_cart</span>
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}