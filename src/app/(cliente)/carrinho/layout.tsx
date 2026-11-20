export default function CarrinhoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto p-4 md:p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">Meu Carrinho</h1>
      {children}
    </div>
  );
}