"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loginIdentifier, setLoginIdentifier] = useState("");

  // Abre direto na aba de cadastro se vier de /cadastro
  useEffect(() => {
    if (searchParams.get("modo") === "cadastro") {
      setAuthMode("register");
    }
  }, [searchParams]);

  // Lógica de redirecionamento automático (Cliente vs Admin)
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const identificador = loginIdentifier.trim().toLowerCase();

    // Exemplo de regra: se for e-mail corporativo/admin, redireciona para /admin
    if (identificador.endsWith("@santamaria.com") || identificador === "admin") {
      router.push("/admin");
    } else {
      router.push("/");
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <main className="w-full min-h-screen flex flex-col lg:flex-row items-stretch bg-slate-50">
      {/* LADO ESQUERDO: Painel Institucional (Azul Marinho Profundo / Neutral #0F172A) */}
      <section className="lg:w-[46%] xl:w-[44%] bg-slate-900 text-white flex flex-col justify-between p-8 sm:p-12 xl:p-16 relative overflow-hidden shrink-0 border-r border-slate-800">
        {/* Auras Decorativas nas cores do projeto */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-1/4 w-80 h-80 bg-blue-900/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-10 bottom-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Topo: Link de Retorno e Marca */}
        <div className="relative z-10 flex flex-col gap-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold tracking-wide group w-fit"
          >
            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            <span>Voltar para a Drogaria Santa Maria</span>
          </Link>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-linear-to from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-950/50 ring-2 ring-red-500/30 shrink-0">
              <span
                className="material-symbols-outlined text-white"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: "28px" }}
              >
                local_pharmacy
              </span>
            </div>
            <div>
              <div className="font-bold text-xl sm:text-2xl tracking-tight text-white flex flex-wrap items-center gap-2">
                DROGARIA SANTA MARIA
                <span className="text-red-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-red-600/40 border border-red-500/40 uppercase tracking-widest">
                  Farma
                </span>
              </div>
              <p className="font-mono text-xs text-slate-400 tracking-wider uppercase mt-0.5">
                Cuidado, Tradição & Saúde Farmacêutica desde 1994
              </p>
            </div>
          </div>

          {/* Headline & Apresentação */}
          <div className="mt-2">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              30 Anos de Excelência Farmacêutica
            </span>
            <h1 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight">
              Sua saúde e seus medicamentos em primeiro lugar com segurança integral.
            </h1>
            <p className="text-slate-300 text-base mt-3 leading-relaxed max-w-xl font-normal">
              Acesse seu histórico médico, receituários validados pela ANVISA, convênios de coparticipação e acompanhe entregas com rastreamento térmico rigoroso.
            </p>
          </div>
        </div>

        {/* Centro: Cards de Destaques */}
        <div className="relative z-10 my-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-white/20 transition-all p-3.5 rounded-xl backdrop-blur-sm">
            <div className="w-9 h-9 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
              <span className="material-symbols-outlined text-xl">verified</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Precisão Farmacêutica</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                Farmacêuticos RT online e em balcão 24 horas por dia.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-white/20 transition-all p-3.5 rounded-xl backdrop-blur-sm">
            <div className="w-9 h-9 rounded-lg bg-blue-800/40 text-blue-300 flex items-center justify-center shrink-0 border border-blue-500/30">
              <span className="material-symbols-outlined text-xl">account_balance</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Farmácia Popular & SNGPC</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                Integração oficial com Ministério da Saúde e ANVISA.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-white/20 transition-all p-3.5 rounded-xl backdrop-blur-sm">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <span className="material-symbols-outlined text-xl">thermometer</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Cadeia Térmica 2h</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                Insulinas e termolábeis com monitoramento digital ativo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-white/20 transition-all p-3.5 rounded-xl backdrop-blur-sm">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-400/30">
              <span className="material-symbols-outlined text-xl">folder_managed</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Cofre de Receitas</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                Renovação e lembretes automáticos de uso contínuo.
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé Lado Esquerdo */}
        <div className="relative z-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-300 font-medium">
              <span className="material-symbols-outlined text-emerald-400 text-base">lock</span>
              Criptografia SSL 256-bit
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-300 font-medium">
              <span className="material-symbols-outlined text-blue-400 text-base">shield_with_heart</span>
              ICP-Brasil & ANVISA
            </span>
          </div>
          <div className="font-mono text-slate-500">CRF-SP 48.910 • AFE 1.09241-2</div>
        </div>
      </section>

      {/* LADO DIREITO: Autenticação Unificada (Fundo Off-White / Branco) */}
      <section className="lg:w-[54%] xl:w-[56%] bg-white flex flex-col justify-center items-center p-6 sm:p-12 xl:p-16 overflow-y-auto">
        <div className="w-full max-w-xl mx-auto flex flex-col justify-between">
          <div>
            {/* Abas: Acessar Minha Conta | Criar Novo Cadastro */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-7">
              <div className="flex gap-6">
                <button
                  type="button"
                  onClick={() => setAuthMode("login")}
                  className={`text-lg pb-3 -mb-3.5 transition-all cursor-pointer ${
                    authMode === "login"
                      ? "font-bold text-slate-900 border-b-2 border-red-600"
                      : "font-semibold text-slate-400 hover:text-slate-700 border-b-2 border-transparent"
                  }`}
                >
                  Acessar Minha Conta
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMode("register")}
                  className={`text-lg pb-3 -mb-3.5 transition-all cursor-pointer ${
                    authMode === "register"
                      ? "font-bold text-slate-900 border-b-2 border-red-600"
                      : "font-semibold text-slate-400 hover:text-slate-700 border-b-2 border-transparent"
                  }`}
                >
                  Criar Novo Cadastro
                </button>
              </div>
              <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 font-semibold px-2.5 py-1 rounded-full hidden sm:inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">local_offer</span>
                Até 60% OFF em Genéricos
              </span>
            </div>

            {/* MODO LOGIN */}
            {authMode === "login" && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">Bem-vindo de volta!</h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Acesse seus pedidos, receitas digitais arquivadas e vantagens do Clube Santa Maria.
                  </p>
                </div>

                {/* Botões Sociais no Topo (conforme Figma) */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <button
                    type="button"
                    className="py-2.5 px-4 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-sm font-semibold text-slate-800 flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
                  >
                    <span className="font-bold text-red-600">G</span>
                    <span>Entrar com Google</span>
                  </button>
                  <button
                    type="button"
                    className="py-2.5 px-4 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-sm font-semibold text-slate-800 flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg text-blue-900">account_balance</span>
                    <span>Entrar com gov.br</span>
                  </button>
                </div>

                <div className="relative my-5 flex items-center justify-center">
                  <div className="w-full border-t border-slate-200" />
                  <span className="bg-white px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 whitespace-nowrap">
                    ou com suas credenciais
                  </span>
                  <div className="w-full border-t border-slate-200" />
                </div>

                <form className="space-y-4" onSubmit={handleLoginSubmit}>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                      CPF ou E-mail
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-xl">
                        badge
                      </span>
                      <input
                        type="text"
                        required
                        value={loginIdentifier}
                        onChange={(e) => setLoginIdentifier(e.target.value)}
                        placeholder="000.000.000-00 ou seu@email.com"
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-sm font-semibold text-slate-800">Senha de Acesso</label>
                      <a href="#" className="text-xs font-semibold text-blue-900 hover:underline">
                        Esqueceu a senha?
                      </a>
                    </div>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-xl">
                        lock
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="••••••••"
                        className="w-full pl-11 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-none transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-lg">
                          {showPassword ? "visibility_off" : "visibility"}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 rounded border-slate-300 accent-red-600"
                      />
                      <span>Lembrar neste navegador</span>
                    </label>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                      <span className="material-symbols-outlined text-sm">verified_user</span>
                      Conexão Segura
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-red-600/20 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-xl">login</span>
                    <span>Acessar Conta / Minhas Compras</span>
                  </button>
                </form>

                {/* Banner Clube Santa Maria */}
                <div
                  onClick={() => setAuthMode("register")}
                  className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-red-200 transition-colors flex items-center gap-3.5 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">local_pharmacy</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      Ainda não faz parte do Clube Santa Maria?
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Cadastre seu CPF em 1 minuto e ative descontos em mais de 4.000 remédios.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* MODO CADASTRO */}
            {authMode === "register" && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">Crie seu Cadastro</h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Habilite retirada expressa, convênios e descontos exclusivos do Clube Santa Maria.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleRegisterSubmit}>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1">
                      Nome Completo
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-lg">
                        person
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="Seu nome completo"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-1">CPF</label>
                      <input
                        type="text"
                        required
                        placeholder="000.000.000-00"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-1">WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="(00) 90000-0000"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1">E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1">Senha</label>
                    <input
                      type="password"
                      required
                      placeholder="Crie uma senha segura"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-red-600/20 mt-2 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-xl">how_to_reg</span>
                    <span>Concluir Cadastro</span>
                  </button>
                </form>

                <p className="text-center text-sm text-slate-600 mt-5">
                  Já possui cadastro?{" "}
                  <button
                    type="button"
                    onClick={() => setAuthMode("login")}
                    className="font-bold text-blue-900 hover:underline cursor-pointer"
                  >
                    Acessar minha conta
                  </button>
                </p>
              </div>
            )}
          </div>

          {/* Rodapé do Formulário */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-red-600">support_agent</span>
              <span>
                Central Farmacêutica: <strong className="text-slate-800">0800 770 1994</strong> (24h)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-blue-900 transition-colors">Política de Privacidade</a>
              <span>•</span>
              <a href="#" className="hover:text-blue-900 transition-colors">Normas Sanitárias</a>
              <span>•</span>
              <a href="#" className="hover:text-blue-900 transition-colors">ANVISA</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <LoginContent />
    </Suspense>
  );
}