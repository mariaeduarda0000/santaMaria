export default function PerfilPage() {
  return (
    <div className="container mx-auto p-4 md:p-8 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Meu Perfil</h1>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
        <p className="text-gray-700"><strong>Nome:</strong> Cliente Exemplo</p>
        <p className="text-gray-700 mt-2"><strong>E-mail:</strong> cliente@exemplo.com</p>
        <button className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Editar Dados</button>
      </div>
    </div>
  );
}