"use client";

import { useState } from "react";
import Head from "next/head";

export default function LoginPage() {
  // Estados para controlar a interface
  const [role, setRole] = useState<"client" | "admin">("client");
  const [clientAuthMode, setClientAuthMode] = useState<"login" | "register">("login");
  const [showClientPassword, setShowClientPassword] = useState(false);
  const [showAdminPassword, setShowAdminPassword] = useState(false);

  return (
    <>
      {/* Importando a fonte e os ícones do Google */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </Head>

      <main className="w-full min-h-screen flex flex-col lg:flex-row items-stretch bg-bege-suave">
        
        {/* LADO ESQUERDO: Painel Institucional */}
        <section className="lg:w-[46%] xl:w-[44%] bg-zinc-900 text-white flex flex-col justify-between p-8 sm:p-12 xl:p-16 relative overflow-hidden shrink-0 border-r border-zinc-800">
          
          {/* Elementos Decorativos de Fundo (Aura Farmacêutica) */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-esmeralda opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 bottom-1/4 w-80 h-80 bg-zinc-400 opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute right-10 bottom-10 w-72 h-72 bg-esmeralda opacity-15 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Topo: Link de Retorno e Marca */}
          <div className="relative z-10 flex flex-col gap-8">
            <a href="#" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-semibold tracking-wide group w-fit">
              <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
              <span>Voltar para a Drogaria Santa Maria</span>
            </a>
            
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-esmeralda to-esmeralda-dark flex items-center justify-center shadow-lg shadow-esmeralda-dark/40 ring-2 ring-esmeralda/30">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1", fontSize: "28px" }}>local_pharmacy</span>
              </div>
              <div>
                <div className="font-bold text-2xl tracking-tight text-white flex items-center gap-2">
                  DROGARIA SANTA MARIA
                  <span className="text-esmeralda text-xs font-semibold px-2 py-0.5 rounded-full bg-esmeralda-dark/40 border border-esmeralda/40 uppercase tracking-widest">Farma</span>
                </div>
                <p className="font-mono text-xs text-zinc-400 tracking-wider uppercase mt-0.5">Cuidado, Tradição & Saúde Farmacêutica desde 1994</p>
              </div>
            </div>
            
            {/* Headline & Apresentação */}
            <div className="mt-2">
              <span className="text-xs uppercase tracking-widest text-esmeralda font-semibold bg-esmeralda-dark/30 border border-esmeralda/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-esmeralda inline-block animate-pulse"></span>
                30 Anos de Excelência Farmacêutica
              </span>
              <h1 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight">
                Sua saúde e seus medicamentos em primeiro lugar com segurança integral.
              </h1>
              <p className="text-zinc-300 text-base mt-3 leading-relaxed max-w-xl font-normal">
                Acesse seu histórico médico, receituários validados pela ANVISA, convênios de coparticipação e acompanhe entregas com rastreamento térmico rigoroso.
              </p>
            </div>
          </div>
          
          {/* Centro: Destaques */}
          <div className="relative z-10 my-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              { icon: 'verified', title: 'Precisão Farmacêutica', desc: 'Farmacêuticos RT online e em balcão 24 horas por dia.' },
              { icon: 'account_balance', title: 'Farmácia Popular & SNGPC', desc: 'Integração oficial com Ministério da Saúde e ANVISA.' },
              { icon: 'thermometer', title: 'Cadeia Térmica 2h', desc: 'Insulinas e termolábeis com monitoramento digital ativo.' },
              { icon: 'folder_managed', title: 'Cofre de Receitas', desc: 'Renovação e lembretes automáticos de uso contínuo.' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all p-3.5 rounded-xl backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-esmeralda/20 text-esmeralda flex items-center justify-center shrink-0 border border-esmeralda/30">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Rodapé Lado Esquerdo */}
          <div className="relative z-10 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-zinc-300 font-medium">
                <span className="material-symbols-outlined text-esmeralda text-base">lock</span> Criptografia SSL 256-bit
              </span>
              <span className="inline-flex items-center gap-1.5 text-zinc-300 font-medium">
                <span className="material-symbols-outlined text-esmeralda text-base">shield_with_heart</span> ICP-Brasil & ANVISA
              </span>
            </div>
            <div className="font-mono text-zinc-500">CRF-SP 48.910 • AFE 1.09241-2</div>
          </div>
        </section>

        {/* LADO DIREITO: Autenticação */}
        <section className="lg:w-[54%] xl:w-[56%] bg-bege-suave flex flex-col justify-center items-center p-6 sm:p-12 xl:p-16 overflow-y-auto">
          <div className="w-full max-w-xl mx-auto flex flex-col justify-between min-h-[640px]">
            
            <div>
              {/* Seletor de Ambiente */}
              <div className="bg-cinza-claro/30 p-1.5 rounded-xl flex items-center gap-1.5 border border-cinza-claro mb-6">
                <button 
                  onClick={() => setRole("client")}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${role === "client" ? "bg-white text-zinc-900 shadow-sm border border-cinza-claro" : "text-zinc-500 hover:text-zinc-800 border border-transparent"}`}
                >
                  <span className="material-symbols-outlined text-lg text-esmeralda">person</span>
                  <span>Sou Cliente</span>
                </button>
                <button 
                  onClick={() => setRole("admin")}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${role === "admin" ? "bg-white text-zinc-900 shadow-sm border border-cinza-claro" : "text-zinc-500 hover:text-zinc-800 border border-transparent"}`}
                >
                  <span className="material-symbols-outlined text-lg text-zinc-700">shield_person</span>
                  <span>Farmacêutico / Admin</span>
                </button>
              </div>

              {/* CONTAINER CLIENTE */}
              {role === "client" && (
                <div>
                  <div className="flex items-center justify-between border-b border-cinza-claro pb-3 mb-6">
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setClientAuthMode("login")}
                        className={`font-semibold text-lg pb-3 -mb-3 transition-all ${clientAuthMode === "login" ? "font-bold text-zinc-900 border-b-2 border-esmeralda" : "text-zinc-500 hover:text-zinc-800 border-b-2 border-transparent"}`}
                      >
                        Acessar Minha Conta
                      </button>
                      <button 
                        onClick={() => setClientAuthMode("register")}
                        className={`font-semibold text-lg pb-3 -mb-3 transition-all ${clientAuthMode === "register" ? "font-bold text-zinc-900 border-b-2 border-esmeralda" : "text-zinc-500 hover:text-zinc-800 border-b-2 border-transparent"}`}
                      >
                        Criar Novo Cadastro
                      </button>
                    </div>
                    <span className="text-xs text-esmeralda-dark bg-esmeralda/10 border border-esmeralda/20 font-semibold px-2.5 py-1 rounded-full hidden sm:inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">local_offer</span> Até 60% OFF
                    </span>
                  </div>

                  {/* LOGIN CLIENTE */}
                  {clientAuthMode === "login" && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="mb-5">
                        <h2 className="text-2xl font-bold text-zinc-900">Bem-vindo de volta!</h2>
                        <p className="text-zinc-600 text-sm mt-1">Acesse seus pedidos, receitas digitais e vantagens.</p>
                      </div>

                      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <label className="block text-sm font-semibold text-zinc-800 mb-1.5">CPF ou E-mail</label>
                          <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute left-3.5 text-zinc-400 text-xl">badge</span>
                            <input type="text" required placeholder="000.000.000-00 ou seu@email.com" className="w-full pl-11 pr-4 py-3 bg-white border border-cinza-claro rounded-xl text-zinc-900 text-sm focus:border-esmeralda focus:ring-2 focus:ring-esmeralda/20 outline-none transition-all shadow-sm" />
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-1.5">
                            <label className="text-sm font-semibold text-zinc-800">Senha de Acesso</label>
                            <a href="#" className="text-xs font-semibold text-esmeralda-dark hover:underline">Esqueceu a senha?</a>
                          </div>
                          <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute left-3.5 text-zinc-400 text-xl">lock</span>
                            <input type={showClientPassword ? "text" : "password"} required placeholder="••••••••" className="w-full pl-11 pr-11 py-3 bg-white border border-cinza-claro rounded-xl text-zinc-900 text-sm focus:border-esmeralda focus:ring-2 focus:ring-esmeralda/20 outline-none transition-all shadow-sm" />
                            <button type="button" onClick={() => setShowClientPassword(!showClientPassword)} className="absolute right-3.5 text-zinc-400 hover:text-zinc-600">
                              <span className="material-symbols-outlined text-lg">{showClientPassword ? "visibility_off" : "visibility"}</span>
                            </button>
                          </div>
                        </div>

                        <button type="submit" className="w-full py-3.5 px-5 rounded-xl bg-esmeralda hover:bg-esmeralda-dark text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-esmeralda/20 flex items-center justify-center gap-2 mt-2">
                          <span className="material-symbols-outlined text-xl">login</span>
                          <span>Acessar Conta</span>
                        </button>
                      </form>
                    </div>
                  )}

                  {/* CADASTRO CLIENTE */}
                  {clientAuthMode === "register" && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="mb-5">
                        <h2 className="text-2xl font-bold text-zinc-900">Crie seu Cadastro</h2>
                        <p className="text-zinc-600 text-sm mt-1">Habilite retirada expressa e convênios.</p>
                      </div>
                      
                      <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <label className="block text-sm font-semibold text-zinc-800 mb-1">Nome Completo</label>
                          <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute left-3 text-zinc-400 text-lg">person</span>
                            <input type="text" required placeholder="Nome oficial" className="w-full pl-10 pr-3 py-2.5 bg-white border border-cinza-claro rounded-xl text-zinc-900 text-sm focus:border-esmeralda focus:ring-2 focus:ring-esmeralda/20 outline-none shadow-sm" />
                          </div>
                        </div>
                        {/* Outros campos de cadastro condensados por espaço */}
                        <div className="grid grid-cols-2 gap-3">
                           <div>
                            <label className="block text-sm font-semibold text-zinc-800 mb-1">CPF</label>
                            <input type="text" required placeholder="000.000.000-00" className="w-full px-3 py-2.5 bg-white border border-cinza-claro rounded-xl text-sm focus:border-esmeralda focus:ring-2 outline-none shadow-sm" />
                           </div>
                           <div>
                            <label className="block text-sm font-semibold text-zinc-800 mb-1">WhatsApp</label>
                            <input type="tel" required placeholder="(00) 90000-0000" className="w-full px-3 py-2.5 bg-white border border-cinza-claro rounded-xl text-sm focus:border-esmeralda focus:ring-2 outline-none shadow-sm" />
                           </div>
                        </div>
                        <button type="submit" className="w-full py-3.5 px-5 rounded-xl bg-esmeralda hover:bg-esmeralda-dark text-white font-bold text-sm tracking-wide transition-all shadow-md mt-4 flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-xl">how_to_reg</span>
                          <span>Concluir Cadastro</span>
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              )}

              {/* CONTAINER ADMIN */}
              {role === "admin" && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="mb-5 bg-zinc-900 text-white p-4 rounded-xl flex items-center gap-3.5 shadow-md">
                    <div className="w-11 h-11 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-2xl">medical_services</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-base leading-snug">Portal Técnico & Gestão</h3>
                      <p className="text-xs text-zinc-400">Acesso exclusivo para RTs e Gestores.</p>
                    </div>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-sm font-semibold text-zinc-800 mb-1.5">Registro CRF</label>
                        <input type="text" required placeholder="Ex: CRF-SP 012345" className="w-full px-3 py-3 bg-white border border-cinza-claro rounded-xl text-zinc-900 text-sm focus:border-zinc-900 focus:ring-2 outline-none uppercase font-mono shadow-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-zinc-800 mb-1.5">E-mail Corporativo</label>
                        <input type="email" required placeholder="nome@santamaria.com" className="w-full px-3 py-3 bg-white border border-cinza-claro rounded-xl text-zinc-900 text-sm focus:border-zinc-900 focus:ring-2 outline-none shadow-sm" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-zinc-800 mb-1.5">Senha Master</label>
                      <div className="relative flex items-center">
                        <input type={showAdminPassword ? "text" : "password"} required placeholder="••••••••••••" className="w-full pl-3 pr-11 py-3 bg-white border border-cinza-claro rounded-xl text-zinc-900 text-sm focus:border-zinc-900 focus:ring-2 outline-none shadow-sm" />
                        <button type="button" onClick={() => setShowAdminPassword(!showAdminPassword)} className="absolute right-3.5 text-zinc-400 hover:text-zinc-600">
                          <span className="material-symbols-outlined text-lg">{showAdminPassword ? "visibility_off" : "visibility"}</span>
                        </button>
                      </div>
                    </div>

                    <button type="submit" className="w-full py-3.5 px-5 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 mt-2">
                      <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
                      <span>Autenticar no SNGPC</span>
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Rodapé do Formulário */}
            <div className="mt-8 pt-6 border-t border-cinza-claro flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-esmeralda-dark">support_agent</span>
                <span>Central: <strong className="text-zinc-800">0800 770 1994</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:text-esmeralda-dark transition-colors">Privacidade</a>
                <span>•</span>
                <a href="#" className="hover:text-esmeralda-dark transition-colors">ANVISA</a>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}