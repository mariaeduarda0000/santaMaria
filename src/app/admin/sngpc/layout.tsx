import React from "react";

export default function SNGPCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div className="bg-white p-5 rounded-xl border border-slate-200 border-l-4 border-l-red-600 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs text-red-700 font-bold uppercase tracking-wider">
            Conformidade Regulatória • Anvisa
          </span>
          <h1 className="text-2xl font-bold text-slate-900 mt-1">
            Controle SNGPC
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Escrituração e transmissão XML de medicamentos controlados (Portaria 344/98) e antimicrobianos.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200 self-start md:self-center">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span className="text-xs font-semibold text-emerald-800">
            Certificado Digital A1 Ativo
          </span>
        </div>
      </div>

      {children}
    </div>
  );
}