export default function CadastroPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Criar Conta</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" placeholder="Seu nome" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">E-mail</label>
          <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" placeholder="seu@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Senha</label>
          <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" placeholder="******" />
        </div>
        <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Cadastrar</button>
      </form>
    </div>
  );
}