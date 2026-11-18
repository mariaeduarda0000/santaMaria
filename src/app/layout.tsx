import './globals.css'

export const metadata = {
  title: 'Drogaria Santa Maria',
  description: 'Farmácia & Manipulação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen">
        
        {/* CABEÇALHO GLOBAL (Repete em todas as páginas) */}
        <header className="w-full flex flex-col">
          {/* Topbar escura */}
          <div className="bg-slate-900 text-white text-xs py-1.5 px-6 flex justify-between items-center">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">support_agent</span>
              Fale com a Farmacêutica via WhatsApp: (11) 98765-4321
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">local_shipping</span>
              Entrega em: São Paulo - SP, Centro
            </span>
          </div>
          
          {/* Navbar Principal (Logo, Busca, Conta e Carrinho) */}
          <div className="bg-white py-4 px-6 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600 text-3xl">local_pharmacy</span>
                Drogaria Santa Maria
              </span>
            </div>
            
            {/* Barra de Busca central */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="w-full flex border rounded-md overflow-hidden bg-slate-50">
                <select className="bg-slate-50 px-3 text-sm border-r outline-none text-slate-600">
                  <option>Todas as Categorias</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Buscar por medicamento, princípio ativo..." 
                  className="w-full px-4 py-2 outline-none text-sm bg-transparent" 
                />
                <button className="bg-red-600 text-white px-4 py-2 flex items-center justify-center transition hover:bg-red-700">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </button>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex items-center gap-5">
              <button className="flex items-center gap-2 text-sm font-semibold text-blue-800 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition">
                <span className="material-symbols-outlined text-[20px]">receipt_long</span> Envie sua Receita
              </button>
              <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-blue-800 transition">
                <span className="material-symbols-outlined text-[24px]">account_circle</span> Minha Conta
              </button>
              <button className="flex items-center gap-1 text-sm font-medium relative text-slate-700 hover:text-blue-800 transition">
                <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
              </button>
            </div>
          </div>

          {/* Menu de Navegação Inferior */}
          <nav className="bg-white border-b px-6 py-3 flex gap-8 text-sm font-semibold text-slate-700">
            <a href="#" className="hover:text-blue-800 transition">Início / Catálogo</a>
            <a href="#" className="hover:text-red-600 text-red-600 transition">Ofertas da Semana</a>
            <a href="#" className="hover:text-blue-800 transition">Manipulação</a>
            <a href="#" className="hover:text-blue-800 transition">Sobre Nós</a>
          </nav>
        </header>

        {/* CONTEÚDO PRINCIPAL (Injeta o page.tsx aqui) */}
        <main className="flex-1 flex flex-col bg-slate-50">
          {children}
        </main>

        {/* RODAPÉ GLOBAL (Repete em todas as páginas) */}
        <footer className="bg-white border-t mt-12 py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">local_pharmacy</span>
                Drogaria Santa Maria
              </span>
              <p className="text-sm text-slate-500 leading-relaxed">
                Cuidado contínuo, saúde e precisão farmacêutica. Amplo mix de medicamentos de referência, genéricos e manipulação especial com entrega rápida.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-slate-800">Atendimento</h4>
              <ul className="text-sm text-slate-500 space-y-3">
                <li><a href="#" className="hover:text-blue-800 transition">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-blue-800 transition">Tele-Farmácia 24h</a></li>
                <li><a href="#" className="hover:text-blue-800 transition">Envio de Receitas</a></li>
                <li><a href="#" className="hover:text-blue-800 transition">Política de Trocas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-slate-800">Institucional</h4>
              <ul className="text-sm text-slate-500 space-y-3">
                <li><a href="#" className="hover:text-blue-800 transition">Quem Somos</a></li>
                <li><a href="#" className="hover:text-blue-800 transition">Laboratório Magistral</a></li>
                <li><a href="#" className="hover:text-blue-800 transition">Nossas Filiais</a></li>
                <li><a href="#" className="hover:text-blue-800 transition">Privacidade & LGPD</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-slate-800">Boletim de Saúde</h4>
              <p className="text-sm text-slate-500 mb-4">Receba informações clínicas e ofertas exclusivas no seu e-mail.</p>
              <form className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Digite seu e-mail" 
                  className="border border-slate-300 p-2.5 rounded-lg w-full text-sm outline-none focus:border-blue-500" 
                />
                <button type="button" className="bg-red-600 text-white px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-red-700 transition flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">mail</span> Cadastrar
                </button>
              </form>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}