export default function PDVPage() {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Ponto de Venda (PDV)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gray-50 p-4 border rounded-lg h-96 flex items-center justify-center">
          <p className="text-gray-500">Área de bipagem e listagem de produtos</p>
        </div>
        <div className="bg-gray-50 p-4 border rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold border-b pb-2 mb-4">Resumo da Compra</h2>
            <p className="text-gray-600">Nenhum item adicionado.</p>
          </div>
          <button className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 font-bold text-lg">Finalizar Venda</button>
        </div>
      </div>
    </div>
  );
}