export default function SNGPCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 bg-white min-h-screen border-l-4 border-red-600">
      <div className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold text-red-700">Controle SNGPC (Anvisa)</h1>
        <p className="text-sm text-gray-500">Módulo de gestão de medicamentos controlados e antimicrobianos.</p>
      </div>
      {children}
    </div>
  );
}