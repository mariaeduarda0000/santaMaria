'use client';

import React, { useState, useRef } from 'react';

// Subcomponente para o contador de quantidade dos produtos
const QuantityInput = () => {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex items-center bg-surface-container-low rounded-lg p-0.5">
      <button 
        type="button" 
        className="w-7 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container rounded text-sm font-bold transition-colors" 
        onClick={() => setQty(prev => Math.max(1, prev - 1))}
      >
        -
      </button>
      <input 
        className="w-8 text-center bg-transparent text-sm font-semibold text-on-surface focus:outline-none" 
        readOnly 
        type="text" 
        value={qty} 
      />
      <button 
        type="button" 
        className="w-7 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container rounded text-sm font-bold transition-colors" 
        onClick={() => setQty(prev => Math.min(99, prev + 1))}
      >
        +
      </button>
    </div>
  );
};

export default function PharmacyPage() {
  const [fileName, setFileName] = useState('');
  const [rxSuccess, setRxSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleRxSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRxSuccess(true);
    setFileName('');
    e.currentTarget.reset();
    
    setTimeout(() => {
      document.getElementById('rx-success')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  return (
    <>
      {/* HEADER FIXO - Agora com fundo sólido vindo do globals.css */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-inverse-surface text-inverse-on-surface px-margin">
          <div className="max-w-7xl mx-auto h-9 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-space-md">
              <span className="flex items-center gap-space-xs text-tertiary-fixed-dim">
                <span className="material-symbols-outlined text-[16px]">support_agent</span>
                Tele-Farmácia: (11) 98765-4321
              </span>
              <span className="text-outline-variant/40 hidden sm:inline">|</span>
              <span className="hidden sm:inline text-inverse-on-surface/90">
                Frete Grátis em compras acima de R$ 99
              </span>
            </div>
            <div className="flex items-center gap-space-md">
              <span className="flex items-center gap-space-xs text-inverse-on-surface/80">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">local_shipping</span>
                Entrega: <strong className="text-inverse-on-surface">São Paulo - SP</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="px-margin bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-space-lg">
            <div className="flex items-center gap-space-md shrink-0">
              <img alt="Drogaria Santa Maria Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ALJJyrDxEZKi1Z_l8FwAfUqJAFX1z3b3zAjd1tOzCE3E9Wcu3uMV41mZ4frV-O1quNc-1waqbeQ43qh505M25miMZ_gMADav7eHHWBq8sAsXgNEGWS9WDme7anuOD4jl6NHZl0VwZIW-F-5RS8T_TmLrh6_ZRlHMYiDoFKcaQ560-gbPFtvC2xZGpBvhJl412CNuQAZqXow4oU_SE3U3nTuQpiOwsytmfM5XZJpJ3-sa0Iba6A" />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-on-surface leading-none">Drogaria Santa Maria</span>
                <span className="text-xs text-on-surface-variant font-medium tracking-wide">Farmácia & Manipulação</span>
              </div>
            </div>

            <div className="flex-1 max-w-2xl hidden md:flex items-center">
              <div className="flex w-full rounded-lg bg-surface-container-low p-1 gap-1">
                <div className="relative flex items-center px-space-sm rounded bg-surface-container-lowest">
                  <select className="appearance-none bg-transparent pr-space-lg pl-space-xs py-space-xs text-sm text-on-surface outline-none cursor-pointer">
                    <option>Todas as Categorias</option>
                    <option>Medicamentos</option>
                    <option>Genéricos</option>
                    <option>Manipulação</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-space-xs pointer-events-none text-on-surface-variant text-[18px]">expand_more</span>
                </div>
                <div className="relative flex-1 flex items-center">
                  <input className="w-full bg-transparent px-space-md py-space-xs text-sm text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none" placeholder="Buscar medicamentos, princípios ativos..." type="text" />
                  <button aria-label="Buscar" className="flex items-center justify-center px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-space-md shrink-0">
              <a className="hidden xl:flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-secondary text-on-secondary text-sm hover:bg-secondary/90 transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">medical_services</span>Área Farmacêutico
              </a>
              <a className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface text-sm hover:bg-surface-container-highest transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px] text-primary-container">person</span>
                <span className="hidden sm:inline">Minha Conta</span>
              </a>
              <a aria-label="Carrinho de Compras" className="relative flex items-center justify-center p-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" href="#">
                <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
                <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 min-w-[20px] px-1 rounded-full bg-primary-container text-on-primary text-[10px] font-bold leading-none shadow-sm">3</span>
              </a>
            </div>
          </div>
        </div>

        <div className="px-margin bg-surface-container-low">
          <div className="max-w-7xl mx-auto h-11 flex items-center justify-between">
            <nav className="flex items-center gap-space-lg text-sm">
              <a className="text-on-surface-variant hover:text-on-surface transition-colors py-2 font-medium" href="#">Início / Catálogo</a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors py-2 font-medium" href="#">Ofertas da Semana</a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors py-2 font-medium" href="#">Manipulação</a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors py-2 font-medium" href="#">Sobre Nós</a>
            </nav>
            <div className="hidden md:flex items-center gap-space-md text-sm text-tertiary">
              <span className="flex items-center gap-space-xs font-medium">
                <span className="material-symbols-outlined text-[16px]">verified</span>Receituário Digital & Controle Sanitário
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT - pt-40 empurra o conteúdo para baixo do header fixo */}
      <main className="w-full pt-40 flex-1 bg-surface pb-space-xl">
        <div className="flex flex-col w-full">
          {/* Notification Pill */}
          <section className="max-w-7xl mx-auto w-full px-margin mb-space-md">
            <div className="bg-surface-container-low rounded-xl px-space-md py-space-xs flex flex-wrap items-center justify-between gap-space-sm shadow-sm">
              <div className="flex items-center gap-space-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container"></span>
                </span>
                <span className="text-sm font-semibold text-on-surface">Plantão Logístico Ativo:</span>
                <span className="text-sm text-on-surface-variant">Entregas em até <strong>1h45min</strong>.</span>
              </div>
              <div className="flex items-center gap-space-md text-xs font-medium text-tertiary">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">verified</span>Lotes Auditados Hoje</span>
              </div>
            </div>
          </section>

          {/* Hero Section */}
          <section className="max-w-7xl mx-auto w-full px-margin mb-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
              <div className="lg:col-span-8 relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary-fixed to-surface-container-lowest p-space-xl flex flex-col justify-between shadow-sm min-h-[460px]">
                <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 lg:opacity-40 mix-blend-multiply pointer-events-none hidden sm:block">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGvQTfxD6avOSjkFf63MOHX7cuVMvTTjTchQB-T9BNlzSD6a7eERZmlRFdflCKkloahZ40HB9TsEFI6jcJrYHD6vTnFF5FEwcT5krWkLD1_w5ujfujamisM2Q1Q14dklOvhYLpsfmwwrbTFYZFJPHSk2_INT3GnzmStJGJNMyLbIpnUhDi55BqNgkG4Obav17064uBRZXQxMnBuuqWbw_jt78Z5qB64OPBC93aX2c2')" }}></div>
                </div>
                <div className="relative z-10 max-w-xl">
                  <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-lowest text-primary-container shadow-sm mb-space-md">
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Despacho Ultra Rápido • Até 2 Horas</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight mb-space-sm">
                    Cuidado Contínuo, <span className="text-primary-container">Preço Justo</span> & Precisão Farmacêutica.
                  </h1>
                  <p className="text-lg text-on-surface-variant max-w-lg mb-space-lg">
                    Garanta seus tratamentos regulares com até <strong>45% OFF</strong> em genéricos certificados, polivitamínicos puros e dermocosméticos.
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md">
                    <a className="px-space-lg py-space-md rounded-lg bg-primary-container text-on-primary text-sm font-bold shadow-md hover:bg-primary transition-all flex items-center gap-space-xs group" href="#catalogo-destaques">
                      <span>Explorar Ofertas do Mês</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between flex-1 relative group">
                  <div className="flex items-start justify-between gap-space-xs mb-space-sm">
                    <div>
                      <span className="text-xs text-primary-container uppercase tracking-wider font-semibold">Programa Cuidados</span>
                      <h2 className="text-xl font-bold text-on-surface mt-1">Uso Contínuo & Hipertensão</h2>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-error-container text-on-error-container text-xs font-bold">-38%</span>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-space-md">
                    Economize programando a entrega mensal de anti-hipertensivos, estatinas e hipoglicemiantes.
                  </p>
                  <div className="flex items-center justify-between pt-space-xs">
                    <div className="flex flex-col">
                      <span className="text-sm text-on-surface-variant line-through">De R$ 112,90</span>
                      <span className="text-2xl text-primary-container font-bold">R$ 69,99<span className="text-sm text-on-surface-variant font-normal">/mês</span></span>
                    </div>
                    <button className="p-space-sm rounded-lg bg-surface-container-high text-on-surface hover:bg-secondary hover:text-on-secondary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
                <div className="bg-secondary-fixed/50 rounded-xl p-space-lg shadow-sm flex flex-col justify-between flex-1 relative">
                  <div className="flex items-start justify-between gap-space-xs mb-space-sm">
                    <div>
                      <span className="text-xs text-tertiary uppercase tracking-wider font-semibold">Dermo Clínico</span>
                      <h2 className="text-xl font-bold text-on-surface mt-1">Fotoproteção Médica</h2>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold">Brinde Exclusivo</span>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <button className="p-space-sm rounded-lg bg-surface-container-lowest text-secondary hover:bg-surface-container-highest transition-colors">
                      <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="max-w-7xl mx-auto w-full px-margin mb-space-xl">
            <div className="flex items-center justify-between mb-space-md">
              <div>
                <span className="text-xs uppercase tracking-wider text-secondary font-semibold">Navegação Clínica Rápida</span>
                <h2 className="text-2xl font-bold text-on-surface">Categorias em Destaque</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-md">
              {['Medicamentos', 'Dermocosméticos', 'Vitaminas', 'Cuidados Diários', 'Mamãe & Bebê', 'Aparelhos & Testes'].map((cat, i) => (
                <a key={i} className="group bg-surface-container-lowest hover:bg-surface-container-low rounded-xl p-space-md shadow-sm transition-all duration-200 flex flex-col items-center text-center" href="#">
                  <div className="w-14 h-14 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center mb-space-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">medical_services</span>
                  </div>
                  <span className="font-semibold text-on-surface group-hover:text-primary-container transition-colors">{cat}</span>
                </a>
              ))}
            </div>
          </section>

          {/* Product Grid */}
          <section className="max-w-7xl mx-auto w-full px-margin mb-space-xl" id="catalogo-destaques">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
              <div>
                <h2 className="text-3xl font-bold text-on-surface">Medicamentos e Itens Mais Procurados</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {/* Product 1 */}
              <article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow p-space-md flex flex-col justify-between group">
                <div>
                  <div className="w-full h-44 rounded-lg bg-surface-bright flex items-center justify-center p-space-sm mb-space-md overflow-hidden relative">
                    <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-primary-container text-on-primary text-[10px] font-bold">-42%</div>
                    <img alt="Dipirona" className="max-h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZhG_gVpESP35KQNw9BPDmo2eBGTASJB0ds2JAUMi97aUBWIrB1Yit859aNjUFkHAytMuWLu4uYotKDExYdbtLiS9ZDNMy853QiCkwj4f6a-apZ8Uf6uNh84TvxI04M0YcVC9fhqhcL_HBloc6UyrR5oDuGE8Rl8QIC7qinyrANEaOj5gOmxYTpytOcw6SNLiMwn1g1xcUQABH_hEKusH2kc_nUCEyEq2APzl0LktM" />
                  </div>
                  <div className="mb-space-sm">
                    <span className="inline-block px-2 py-0.5 rounded bg-surface-container-low text-xs text-secondary font-medium mb-1">500mg • 20 Comprimidos</span>
                    <h3 className="text-lg font-bold text-on-surface leading-snug group-hover:text-primary-container transition-colors">Dipirona Monoidratada 500mg</h3>
                  </div>
                </div>
                <div>
                  <div className="mb-space-md pt-space-xs">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-on-surface-variant line-through">R$ 13,90</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg text-primary-container font-bold">R$</span>
                      <span className="text-3xl text-primary-container font-bold">7,99</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <QuantityInput />
                    <button className="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Comprar
                    </button>
                  </div>
                </div>
              </article>

              {/* Product 2 */}
              <article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow p-space-md flex flex-col justify-between group">
                <div>
                  <div className="w-full h-44 rounded-lg bg-surface-bright flex items-center justify-center p-space-sm mb-space-md overflow-hidden relative">
                    <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-primary-container text-on-primary text-[10px] font-bold">-35%</div>
                    <img alt="Losartana" className="max-h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA042VeIxyLIo_P8djBfTeign0t890Y8G-E-vGCefcpESDiPVNdPSh2WcLlOrz4z8y929ppkXdRNgsu998Pl3IgeorVCPNOEyVZnNATqSAX7_L7Vf82az414U982duIwDtIZ6zqam9TjajpHrjqX1FQ6j3BdVhorcM9vY6KV45veeSoR_C0GMEAI7lWb6V3SdDZrp88-nISVKclEQqRCWxDN6CRQCrLHdnnFHd9ZCJI" />
                  </div>
                  <div className="mb-space-sm">
                    <span className="inline-block px-2 py-0.5 rounded bg-surface-container-low text-xs text-secondary font-medium mb-1">50mg • 30 Comprimidos</span>
                    <h3 className="text-lg font-bold text-on-surface leading-snug group-hover:text-primary-container transition-colors">Losartana Potássica 50mg</h3>
                  </div>
                </div>
                <div>
                  <div className="mb-space-md pt-space-xs">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-on-surface-variant line-through">R$ 18,50</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg text-primary-container font-bold">R$</span>
                      <span className="text-3xl text-primary-container font-bold">11,99</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <QuantityInput />
                    <button className="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Comprar
                    </button>
                  </div>
                </div>
              </article>

              {/* Product 3 */}
              <article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow p-space-md flex flex-col justify-between group">
                <div>
                  <div className="w-full h-44 rounded-lg bg-surface-bright flex items-center justify-center p-space-sm mb-space-md overflow-hidden relative">
                    <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-primary-container text-on-primary text-[10px] font-bold">-20%</div>
                    <img alt="Vitamina C" className="max-h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDpv_P8uo4xRJP9WkqcJAMtV1VzbuKrS4vYrsniznPbjVsPR7nCkaeIyTaMMWvG6o8eQNC7w6sjsnGsGoVFhCfzcvxoC55eYpPRDQsawqIWuDx4V4Z1_ok-8J6qn8KnrOz0ISt1ukMKzo4pyI0vHl3glmx8cXA7Ms5AP_2py58nqEaCxrWD6GHCnL2sBdGo6PqdevPf_CguRUGAPIKqyrGk_L9nhnFITJsWBshSnf4" />
                  </div>
                  <div className="mb-space-sm">
                    <span className="inline-block px-2 py-0.5 rounded bg-surface-container-low text-xs text-secondary font-medium mb-1">1000mg + Zinco • 30 Tabs</span>
                    <h3 className="text-lg font-bold text-on-surface leading-snug group-hover:text-primary-container transition-colors">Vitamina C 1g Efervescente</h3>
                  </div>
                </div>
                <div>
                  <div className="mb-space-md pt-space-xs">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-on-surface-variant line-through">R$ 34,90</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg text-primary-container font-bold">R$</span>
                      <span className="text-3xl text-primary-container font-bold">27,90</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <QuantityInput />
                    <button className="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Comprar
                    </button>
                  </div>
                </div>
              </article>

              {/* Product 4 */}
              <article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow p-space-md flex flex-col justify-between group">
                <div>
                  <div className="w-full h-44 rounded-lg bg-surface-bright flex items-center justify-center p-space-sm mb-space-md overflow-hidden relative">
                    <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-primary-container text-on-primary text-[10px] font-bold">-25%</div>
                    <img alt="Protetor Solar" className="max-h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKjsg0Wcqy_lueDpiTL9oRCzTPVPU7dO5Od0jRprCwNnZVWjINwmYLwZs3V7CR1chvI7GQCABwrK40Qri5WGPb21yjo0t6zMd3CXCCBBIUWSplhL0uaYSGxrBh4JxEwlorp3zBBzvMFe6XuH9fHaw-3HyVxbwM5Ao-GXthEjHjICdSBkAKQrPdesgvXwe3uHHjYRE1EKIlYOwWPA3hekFhgNw1oeL87BbAvZuL1AjY" />
                  </div>
                  <div className="mb-space-sm">
                    <span className="inline-block px-2 py-0.5 rounded bg-surface-container-low text-xs text-secondary font-medium mb-1">FPS 70 • Gel-Creme 50g</span>
                    <h3 className="text-lg font-bold text-on-surface leading-snug group-hover:text-primary-container transition-colors">Protetor Solar FPS 70 Toque Seco</h3>
                  </div>
                </div>
                <div>
                  <div className="mb-space-md pt-space-xs">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-on-surface-variant line-through">R$ 89,90</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg text-primary-container font-bold">R$</span>
                      <span className="text-3xl text-primary-container font-bold">67,40</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <QuantityInput />
                    <button className="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Comprar
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Rx Upload Form */}
          <section className="max-w-7xl mx-auto w-full px-margin mb-space-xl" id="receituario-digital">
            <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 bg-gradient-to-br from-secondary to-inverse-surface p-space-xl text-inverse-on-surface flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-space-sm text-inverse-on-surface">Envie sua Receita Médica</h2>
                  <p className="text-base text-inverse-on-surface/80 mb-space-lg">
                    Nossos farmacêuticos analisam sua prescrição e criam um carrinho pronto com as melhores opções.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 p-space-xl flex flex-col justify-between bg-surface-container-lowest">
                <div>
                  <h3 className="text-2xl font-bold text-on-surface mb-6">Formulário de Envio</h3>
                  <form className="flex flex-col gap-space-md" onSubmit={handleRxSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-on-surface">Nome Completo *</label>
                        <input required type="text" className="h-11 px-space-md rounded-lg bg-surface-container-low text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/40" placeholder="Ex: Roberto Silva Mendes" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-on-surface">WhatsApp *</label>
                        <input required type="tel" className="h-11 px-space-md rounded-lg bg-surface-container-low text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/40" placeholder="(11) 98765-4321" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-on-surface">Arquivo da Receita</label>
                      <div 
                        className="cursor-pointer border-2 border-dashed border-secondary/30 rounded-xl p-space-lg flex flex-col items-center justify-center text-center bg-surface-container-low/50 hover:bg-surface-container-low transition-colors" 
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <span className="material-symbols-outlined text-[32px] text-secondary mb-2">cloud_upload</span>
                        <p className="text-sm font-medium text-on-surface">Clique para selecionar o arquivo</p>
                        <input 
                          type="file" 
                          className="hidden" 
                          ref={fileInputRef} 
                          onChange={handleFileSelected} 
                        />
                        {fileName && (
                          <div className="mt-2 text-xs text-tertiary font-bold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">check_circle</span>
                            <span>{fileName}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <button type="submit" className="w-full py-3 rounded-lg bg-primary-container text-on-primary text-sm font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-md">
                      <span className="material-symbols-outlined text-[20px]">send</span> Enviar Prescrição
                    </button>
                  </form>
                </div>
                
                {rxSuccess && (
                  <div id="rx-success" className="mt-space-md p-space-md rounded-lg bg-on-tertiary-container text-on-surface flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-tertiary text-[24px]">task_alt</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-on-surface">Receita Recebida com Sucesso!</span>
                      <span className="text-xs text-on-surface-variant">Nossa farmacêutica entrará em contato via WhatsApp.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="max-w-7xl mx-auto w-full px-margin mb-space-xl">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
              <div>
                <h2 className="text-3xl font-bold text-on-surface">Confiança de Quem Cuida da Família Conosco</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                <p className="text-base text-on-surface mb-space-md italic">
                  "Enviei a foto da receita do meu pai para pressão e colesterol pelo site. Em 5 minutos a farmacêutica me chamou no WhatsApp. Chegou em casa em 1 hora e meia!"
                </p>
                <div className="flex items-center gap-space-sm pt-space-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center font-bold">MS</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-on-surface">Mariana Silveira</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Floating Action Button */}
          <aside className="fixed bottom-6 right-6 z-40">
            <a className="flex items-center gap-space-sm bg-tertiary text-on-tertiary px-space-md py-space-sm rounded-full shadow-lg hover:shadow-xl hover:bg-tertiary-container transition-all group" href="https://wa.me/5511987654321" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[24px]">chat</span>
              <span className="text-sm font-bold hidden sm:inline">Falar com Farmacêutico</span>
            </a>
          </aside>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low py-space-xl text-on-surface border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
            <div className="flex flex-col gap-4 lg:col-span-2">
              <div className="flex items-center gap-3">
                <img alt="Drogaria Santa Maria Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ALJJyrDxEZKi1Z_l8FwAfUqJAFX1z3b3zAjd1tOzCE3E9Wcu3uMV41mZ4frV-O1quNc-1waqbeQ43qh505M25miMZ_gMADav7eHHWBq8sAsXgNEGWS9WDme7anuOD4jl6NHZl0VwZIW-F-5RS8T_TmLrh6_ZRlHMYiDoFKcaQ560-gbPFtvC2xZGpBvhJl412CNuQAZqXow4oU_SE3U3nTuQpiOwsytmfM5XZJpJ3-sa0Iba6A" />
                <span className="text-xl font-bold">Drogaria Santa Maria</span>
              </div>
              <p className="text-sm text-on-surface-variant max-w-sm">Compromisso ético, saúde e precisão farmacêutica. Ampla linha de medicamentos e manipulação.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold mb-2">Atendimento</span>
              <a className="text-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Central de Ajuda</a>
              <a className="text-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Tele-Farmácia 24h</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold mb-2">Institucional</span>
              <a className="text-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Quem Somos</a>
              <a className="text-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Nossas Filiais</a>
            </div>
          </div>
          <div className="pt-8 border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-on-surface-variant">
            <p>© 2025 Drogaria Santa Maria S.A. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}