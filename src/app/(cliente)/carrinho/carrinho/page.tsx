// src/app/(cliente)/carrinho/page.tsx

import React from 'react';
import Link from 'next/link';
// Caso tenha imagens locais, você importaria o Image do next/image. 
// Como está usando URLs externas (src="https..."), as tags <img> funcionam normalmente.

export default function CartPage() {
  return (
    // Removi a tag <div> externa que englobava toda a página, pois o layout raiz já faz o container do <main>
    <div className="grow max-w-7xl mx-auto px-6 pt-12 pb-24 w-full">
      {/* Título da Página */}
      <div className="flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-2 text-slate-500">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          <span className="text-[11px] font-bold uppercase tracking-widest">
            Ambiente Criptografado / Drogaria Santa Maria Express
          </span>
        </div>
        <h1 className="text-3xl text-slate-900 font-extrabold tracking-tight">
          Meu Carrinho de Compras
        </h1>
      </div>

      {/* Layout Principal do Carrinho */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        
        {/* Coluna Esquerda: Itens, Frete, Cupom */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Lista de Produtos */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-800 text-[20px]">
                  shopping_cart
                </span>
                <h2 className="text-lg text-slate-900 font-bold">
                  Itens Selecionados
                </h2>
                <span className="bg-slate-200 text-slate-900 px-2 py-0.5 rounded-full text-[11px] font-bold">
                  3 produtos
                </span>
              </div>
              <button
                type="button"
                className="text-sm text-slate-500 hover:text-red-600 transition-colors flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">delete_sweep</span>
                Limpar tudo
              </button>
            </div>

            <div className="p-6 flex flex-col gap-6">
              {/* Item 3 (Creme Hidratante) */}
              <div className="flex flex-col md:flex-row gap-6 py-6 border-b border-slate-200 last:border-0 relative">
                <div className="w-20 h-20 bg-slate-50 rounded-lg p-1 shrink-0 flex items-center justify-center relative">
                  <span className="absolute -top-2 -left-2 bg-blue-100 text-blue-800 text-[9px] px-1.5 py-0.5 rounded shadow-sm font-bold z-10">
                    CUIDADO INTENSIVO
                  </span>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFo8GvOa99m85vRz8n..."
                    alt="Creme Hidratante"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                
                <div className="flex flex-col flex-1 gap-1">
                  <span className="text-[10px] text-slate-500 font-bold">
                    ANVISA: 25351.482910
                  </span>
                  <h3 className="text-sm text-slate-900 font-bold leading-tight">
                    Creme Hidratante Dermo Reparador Intensivo
                  </h3>
                  <p className="text-[12px] text-slate-500 leading-snug">
                    Dermocare Lab • Bisnaga 200g • Com Ácido Hialurônico e Ceramidas
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-slate-500 text-[11px]">
                    <span className="material-symbols-outlined text-[14px]">science</span>
                    Hipoalergênico e Sem Parabenos
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center justify-between md:items-end gap-2 shrink-0">
                  <div className="flex items-center border border-slate-200 rounded bg-white h-10 w-28">
                    <button
                      type="button"
                      aria-label="Diminuir quantidade"
                      className="w-8 h-8 flex items-center justify-center rounded text-slate-500 hover:bg-slate-50 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">remove</span>
                    </button>
                    <span className="text-sm font-bold px-3 text-center min-w-10">
                      1
                    </span>
                    <button
                      type="button"
                      aria-label="Aumentar quantidade"
                      className="w-8 h-8 flex items-center justify-center rounded bg-white text-slate-900 hover:bg-slate-100 transition-colors font-bold shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                  <div className="text-right min-w-22.5">
                    <span className="text-lg text-slate-900 font-bold block leading-none">
                      R$ 58,00
                    </span>
                    <span className="text-xs text-slate-500">
                      R$ 0,29 / g
                    </span>
                  </div>
                  <button
                    type="button"
                    aria-label="Remover item"
                    className="p-2 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">delete_outline</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Aviso Regulatório de Receita */}
            <div className="bg-slate-50 m-6 rounded-xl p-4 flex items-start gap-3 border border-slate-200">
              <span className="material-symbols-outlined text-blue-600 text-[24px] shrink-0 mt-0.5">
                assignment_late
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-slate-900 font-bold">
                  Informação Regulatória Sanitária (RDC ANVISA nº 44/2009):
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nenhum dos itens atualmente adicionados ao seu carrinho exige retenção física de receita médica ou controle especial (Portaria 344/98). Se você incluir medicamentos controlados, o upload digital da receita ou validação presencial na entrega será solicitado no próximo passo.
                </p>
              </div>
            </div>
          </div>

          {/* Seção Secundária: Frete e Cupom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Calculadora de Frete */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-slate-500 text-[20px]">
                    local_shipping
                  </span>
                  <h2 className="text-base text-slate-900 font-bold">
                    Calcular Frete e Prazos
                  </h2>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Informe seu CEP para visualizar as opções de entrega ágil ou retirada física.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      defaultValue="01310-100"
                      placeholder="00000-000"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50 text-sm text-slate-900 border border-slate-200 focus:outline-none focus:border-blue-500"
                    />
                    <span className="absolute right-3 top-3 text-[11px] text-slate-400 font-bold">
                      SP - Bela Vista
                    </span>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2.5 rounded-lg bg-blue-100 text-blue-800 text-sm font-bold hover:bg-blue-200 transition-colors shrink-0"
                  >
                    Calcular
                  </button>
                </div>
              </div>

              {/* Opções de Entrega */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center justify-between p-3 rounded-lg bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors border border-slate-200">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping_method"
                      value="retirada"
                      defaultChecked
                      className="accent-blue-600 h-4 w-4"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-900 font-bold">
                        Retirar na Loja Física (Centro)
                      </span>
                      <span className="text-[11px] text-green-600 font-semibold">
                        Pronto em até 1 hora útil • Sem custos adicionais
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-green-600 font-bold uppercase">Grátis</span>
                </label>
                
                <label className="flex items-center justify-between p-3 rounded-lg bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors border border-slate-200">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping_method"
                      value="express"
                      className="accent-blue-600 h-4 w-4"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-900 font-bold">
                        Entrega Expressa Motoboy
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Chega hoje em até 2 horas
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-slate-900 font-bold">R$ 9,90</span>
                </label>
              </div>
            </div>

            {/* Cupom */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-blue-800 text-[20px]">
                    sell
                  </span>
                  <h2 className="text-base text-slate-900 font-bold">
                    Cupom de Desconto
                  </h2>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Possui código promocional ou convênio?
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      defaultValue="PRIMEIRACOMPRA"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50 text-sm text-slate-900 uppercase font-bold tracking-wider border border-slate-200 focus:outline-none focus:border-blue-500"
                    />
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-green-500 text-[20px]">
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
                <div className="flex items-center gap-1 text-[12px] text-green-600">
                  <span className="material-symbols-outlined text-[15px]">verified</span> 
                  Cupom <strong>PRIMEIRACOMPRA</strong> ativado com sucesso!
                </div>
              </div>

              {/* Callout PBM */}
              <div className="p-3 rounded-lg bg-blue-50 mt-4 flex items-center justify-between border border-blue-100">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-600 text-[22px]">
                    health_and_safety
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs text-blue-900 font-bold">
                      Programa Farmácia Popular / PBM
                    </span>
                    <span className="text-[10px] text-blue-700">
                      Descontos de até 70% pelo CPF
                    </span>
                  </div>
                </div>
                <button type="button" className="text-xs text-blue-800 font-bold hover:underline shrink-0">
                  Vincular
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Resumo do Pedido & Checkout */}
        <div className="lg:col-span-4 flex flex-col gap-4 sticky top-6">
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h2 className="text-lg text-slate-900 font-bold">Resumo do Pedido</h2>
              <span className="text-[10px] text-green-700 bg-green-100 px-2 py-0.5 rounded font-bold">
                ECONOMIA: R$ 15,00
              </span>
            </div>
            
            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <div className="flex justify-between items-center">
                <span>Subtotal dos produtos</span>
                <span className="text-slate-900 font-semibold">R$ 107,70</span>
              </div>
              <div className="flex justify-between items-center text-green-600">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">redeem</span>
                  Desconto Cupom
                </span>
                <span className="font-bold">- R$ 15,00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <span>Frete (compras &gt; R$ 99)</span>
                </span>
                <span className="font-bold text-green-600 uppercase">Grátis</span>
              </div>
              
              {/* Barra de Frete Grátis */}
              <div className="p-2 rounded bg-slate-50 flex flex-col gap-1 mt-1 border border-slate-200">
                <div className="flex justify-between text-[11px] text-slate-900">
                  <span className="font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-green-600 text-[14px]">local_shipping</span> 
                    Frete Grátis Atingido!
                  </span>
                  <span className="font-bold text-green-600">100%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-200 my-1"></div>

            {/* Total */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <span className="text-base text-slate-900 font-bold">Total do Pedido</span>
                <div className="text-right">
                  <span className="text-3xl text-blue-800 font-extrabold tracking-tight leading-none block">
                    R$ 92,70
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-0.5 mt-2 bg-slate-50 p-3 rounded-lg text-center border border-slate-200">
                <span className="text-sm text-slate-900 font-semibold">
                  ou <strong className="text-green-600 font-bold">R$ 88,06 no PIX</strong>
                </span>
                <span className="text-xs text-slate-500">
                  em até <strong>3x de R$ 30,90 sem juros</strong>
                </span>
              </div>
            </div>

            {/* Botão de Compra */}
            <button
              type="button"
              className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white text-lg font-bold tracking-tight shadow-md flex items-center justify-center gap-3 transition-transform active:scale-[0.99]"
            >
              <span>Finalizar Compra</span>
              <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
            </button>
            
            <Link href="/" className="w-full py-2 rounded-lg text-center text-sm text-slate-500 hover:text-slate-900 transition-colors flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[18px]">keyboard_backspace</span> 
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>

      {/* Seção de Cross-sell (Add-ons) */}
      <div className="mt-16 pt-8 border-t border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs text-blue-800 font-bold uppercase tracking-wider">Aproveite o frete grátis</span>
            <h2 className="text-2xl text-slate-900 font-bold tracking-tight">Frequentemente Comprados Juntos</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Card Add-on 4 */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="relative w-full h-36 bg-slate-50 rounded-lg p-2 mb-3 flex items-center justify-center overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6s16GJtCY2ljWH2w0GirgDe4xvoEj5_E1buyjEa1fc8pBw6zuBiwfZ2BEc48QPGsKjpGWDGh-F3odvNEOMMCsdfd4XaHVkzQ6Xx6thPgEv4c4OWkt39HMAltifk5aRGzDfXa-t_IE85FPsELLcS5pUksH94JVj_Sbs5NnVkXY5YAxU_TZdFWnn3KToCPOBOFle4Y5QqeZ2nw04KZ9OBRNglL11TgdABfQ6QSEQpwr" alt="Solução Fisiológica 0,9%" className="h-full object-contain mix-blend-multiply" />
                <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 text-[9px] font-bold">CUIDADOS</span>
              </div>
              <h3 className="text-sm text-slate-900 font-bold line-clamp-1">Solução Fisiológica 0,9% 500ml</h3>
              <p className="text-xs text-slate-500 mb-3">Solução estéril de cloreto de sódio</p>
            </div>
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-base text-slate-900 font-bold">R$ 7,50</span>
                <span className="text-[11px] text-blue-600 font-semibold">Essencial</span>
              </div>
              <button type="button" className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-blue-800 hover:text-white text-slate-900 text-sm font-bold transition-colors flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> Adicionar
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}