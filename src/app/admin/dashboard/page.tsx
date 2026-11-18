import React, { useState } from 'react';

export default function PharmacyDashboardFooter() {
  // Substituindo o script vanilla do final por estado do React
  const [activeFilter, setActiveFilter] = useState('30 Dias');
  const filters = ['Hoje', '7 Dias', '30 Dias', 'Mês Atual'];

  return (
    <>
      {/* CONTINUAÇÃO DA TABELA (Substitua na sua estrutura principal) */}
      <td className="py-3.5 px-space-md whitespace-nowrap">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-label-sm font-semibold bg-[#FFFBEB] text-[#92400E]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B45309]"></span> Aguardando Separação
        </span>
      </td>
      <td className="py-3.5 px-space-md whitespace-nowrap text-right">
        <div className="flex items-center justify-end gap-1">
          <button className="px-3 py-1.5 bg-primary text-on-primary rounded-lg text-label-sm font-label-sm font-bold hover:bg-primary-container shadow-sm transition-colors flex items-center gap-1" title="Liberar e Assinar Digitalmente" type="button">
            <span className="material-symbols-outlined text-[15px]">draw</span> Validar
          </button>
          <button className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded-lg" title="Detalhes do Pedido" type="button">
            <span className="material-symbols-outlined text-[18px]">more_vert</span>
          </button>
        </div>
      </td>
      {/* O fechamento da tr anterior estaria aqui */}

      {/* Row 2: Em Rota de Entrega */}
      <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest">
        <td className="py-3.5 px-space-md whitespace-nowrap">
          <div className="font-code-sm text-code-sm font-bold text-on-surface">#SM-9841</div>
          <div className="font-code-sm text-[11px] text-on-surface-variant">14:15 (há 22 min)</div>
        </td>
        <td className="py-3.5 px-space-md">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-bold text-[11px]">
              AS
            </div>
            <div>
              <div className="font-label-md text-label-md text-on-surface font-semibold">Amanda Silveira Castro</div>
              <div className="font-code-sm text-[11px] text-on-surface-variant">Convênio Unimed Diamante</div>
            </div>
          </div>
        </td>
        <td className="py-3.5 px-space-md">
          <div className="font-body-sm text-body-sm text-on-surface font-medium">Protetor Solar Anthelios FPS 60 + Vitamina C</div>
          <div className="font-label-sm text-[11px] text-on-surface-variant">2 volumes cosméticos</div>
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap font-code-sm text-code-sm font-bold text-on-surface">
          R$ 214,50
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-label-sm font-semibold bg-surface-container text-secondary">
            <span className="material-symbols-outlined text-[13px]">desktop_windows</span> E-commerce Web
          </span>
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-label-sm font-semibold bg-secondary-fixed/50 text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> Em Rota de Entrega
          </span>
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap text-right">
          <div className="flex items-center justify-end gap-1">
            <button className="px-2.5 py-1.5 bg-surface-container text-secondary hover:bg-secondary hover:text-on-secondary rounded-lg text-label-sm font-label-sm font-semibold transition-colors flex items-center gap-1" type="button">
              <span className="material-symbols-outlined text-[15px]">near_me</span> Rastrear
            </button>
            <button className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded-lg" type="button">
              <span className="material-symbols-outlined text-[18px]">more_vert</span>
            </button>
          </div>
        </td>
      </tr>

      {/* Row 3: Concluído / Balcão Presencial */}
      <tr className="hover:bg-surface-container-low/60 transition-colors">
        <td className="py-3.5 px-space-md whitespace-nowrap">
          <div className="font-code-sm text-code-sm font-bold text-on-surface">#SM-9840</div>
          <div className="font-code-sm text-[11px] text-on-surface-variant">13:58 (há 39 min)</div>
        </td>
        <td className="py-3.5 px-space-md">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-tertiary-fixed-dim/40 flex items-center justify-center text-tertiary font-bold text-[11px]">
              RO
            </div>
            <div>
              <div className="font-label-md text-label-md text-on-surface font-semibold">Roberto de Oliveira</div>
              <div className="font-code-sm text-[11px] text-on-surface-variant">Balcão Central • PDV 02</div>
            </div>
          </div>
        </td>
        <td className="py-3.5 px-space-md">
          <div className="font-body-sm text-body-sm text-on-surface font-medium">Dipirona 500mg (2x) + Dorflex 36 comp.</div>
          <div className="font-label-sm text-[11px] text-tertiary font-medium">MIPs / Venda Direta</div>
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap font-code-sm text-code-sm font-bold text-on-surface">
          R$ 38,40
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-label-sm font-semibold bg-surface-container-high text-on-surface">
            <span className="material-symbols-outlined text-[13px]">point_of_sale</span> Loja Física
          </span>
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-label-sm font-semibold bg-tertiary-fixed/30 text-tertiary">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Concluído
          </span>
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap text-right">
          <div className="flex items-center justify-end gap-1">
            <button className="px-2.5 py-1.5 bg-surface-container-low text-on-surface hover:bg-surface-container rounded-lg text-label-sm font-label-sm font-medium transition-colors flex items-center gap-1" type="button">
              <span className="material-symbols-outlined text-[15px]">receipt_long</span> Cupom
            </button>
            <button className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded-lg" type="button">
              <span className="material-symbols-outlined text-[18px]">more_vert</span>
            </button>
          </div>
        </td>
      </tr>

      {/* Row 4: Aguardando Retenção / Receita Especial */}
      <tr className="hover:bg-surface-container-low/60 transition-colors">
        <td className="py-3.5 px-space-md whitespace-nowrap">
          <div className="font-code-sm text-code-sm font-bold text-on-surface">#SM-9839</div>
          <div className="font-code-sm text-[11px] text-on-surface-variant">13:42 (há 55 min)</div>
        </td>
        <td className="py-3.5 px-space-md">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold text-[11px]">
              JL
            </div>
            <div>
              <div className="font-label-md text-label-md text-on-surface font-semibold">Juliana Lima Pires</div>
              <div className="font-code-sm text-[11px] text-on-surface-variant">CPF: ***.192.304-**</div>
            </div>
          </div>
        </td>
        <td className="py-3.5 px-space-md">
          <div className="font-body-sm text-body-sm text-on-surface font-medium">Venlafaxina 75mg Cloridrato (30 cáps)</div>
          <div className="flex items-center gap-1 font-label-sm text-[11px] text-primary">
            <span className="material-symbols-outlined text-[12px]">clinical_notes</span> Receita C1 / Notificação de Receita
          </div>
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap font-code-sm text-code-sm font-bold text-on-surface">
          R$ 89,70
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-label-sm font-semibold bg-[#25D366]/10 text-[#075E54]">
            <span className="material-symbols-outlined text-[13px]">chat</span> WhatsApp Bot
          </span>
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-label-sm font-semibold bg-[#FFFBEB] text-[#92400E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B45309]"></span> Aguardando Separação
          </span>
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap text-right">
          <div className="flex items-center justify-end gap-1">
            <button className="px-3 py-1.5 bg-primary text-on-primary rounded-lg text-label-sm font-label-sm font-bold hover:bg-primary-container shadow-sm transition-colors flex items-center gap-1" type="button">
              <span className="material-symbols-outlined text-[15px]">draw</span> Validar
            </button>
            <button className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded-lg" type="button">
              <span className="material-symbols-outlined text-[18px]">more_vert</span>
            </button>
          </div>
        </td>
      </tr>

      {/* Row 5: Concluído Delivery Motoboy */}
      <tr className="hover:bg-surface-container-low/60 transition-colors">
        <td className="py-3.5 px-space-md whitespace-nowrap">
          <div className="font-code-sm text-code-sm font-bold text-on-surface">#SM-9838</div>
          <div className="font-code-sm text-[11px] text-on-surface-variant">13:10 (há 1h 27min)</div>
        </td>
        <td className="py-3.5 px-space-md">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-secondary-container/40 flex items-center justify-center text-on-secondary-container font-bold text-[11px]">
              ES
            </div>
            <div>
              <div className="font-label-md text-label-md text-on-surface font-semibold">Eduardo Santoro</div>
              <div className="font-code-sm text-[11px] text-on-surface-variant">Entrega Expressa Zona Sul</div>
            </div>
          </div>
        </td>
        <td className="py-3.5 px-space-md">
          <div className="font-body-sm text-body-sm text-on-surface font-medium">Whey Isolate 900g + Creatina Creapure 300g</div>
          <div className="font-label-sm text-[11px] text-on-surface-variant">Suplementação Esportiva</div>
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap font-code-sm text-code-sm font-bold text-on-surface">
          R$ 289,00
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-label-sm font-semibold bg-surface-container text-secondary">
            <span className="material-symbols-outlined text-[13px]">desktop_windows</span> E-commerce Web
          </span>
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-label-sm font-semibold bg-tertiary-fixed/30 text-tertiary">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Concluído
          </span>
        </td>
        <td className="py-3.5 px-space-md whitespace-nowrap text-right">
          <div className="flex items-center justify-end gap-1">
            <button className="px-2.5 py-1.5 bg-surface-container-low text-on-surface hover:bg-surface-container rounded-lg text-label-sm font-label-sm font-medium transition-colors flex items-center gap-1" type="button">
              <span className="material-symbols-outlined text-[15px]">print</span> Recibo
            </button>
            <button className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded-lg" type="button">
              <span className="material-symbols-outlined text-[18px]">more_vert</span>
            </button>
          </div>
        </td>
      </tr>

      {/* Table Pagination & SNGPC Synchro Status */}
      <div className="p-space-md bg-surface-container-low/50 flex flex-col sm:flex-row items-center justify-between gap-space-sm mt-4">
        <div className="flex items-center gap-2 text-code-sm font-code-sm text-on-surface-variant">
          <span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span>
          Sincronismo SNGPC Anvisa: <strong className="text-on-surface font-semibold">Online (Último lote transmitido às 14:00)</strong>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-body-sm text-body-sm text-on-surface-variant">Página 1 de 128</span>
          <div className="inline-flex gap-1">
            <button className="p-1.5 rounded bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50" disabled type="button">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="p-1.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* PHARMACY QUICK NOTIFICATIONS & REGULATORY SHORTCUTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-lg">
        {/* Notice 1 */}
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-sm">
          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
            <span className="material-symbols-outlined text-[22px]">cloud_sync</span>
          </div>
          <div>
            <h3 className="font-label-md text-label-md text-on-surface font-bold">Arquivo XML SNGPC</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              O relatório quinzenal de movimentação de psicotrópicos vence em <strong>3 dias úteis</strong>.
            </p>
            <a className="mt-2 inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold hover:underline" href="#">
              Gerar Arquivo XML <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Notice 2 */}
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-sm">
          <div className="w-10 h-10 rounded-lg bg-primary-fixed/60 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[22px]">thermostat</span>
          </div>
          <div>
            <h3 className="font-label-md text-label-md text-on-surface font-bold">Termolábeis &amp; Geladeira</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Sensor Geladeira Insulina 01 registrando <strong>+4.2°C</strong> (Faixa segura: 2°C a 8°C).
            </p>
            <span className="mt-2 inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-semibold">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> Calibração em Dia
            </span>
          </div>
        </div>

        {/* Notice 3 */}
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-sm">
          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
            <span className="material-symbols-outlined text-[22px]">support_agent</span>
          </div>
          <div>
            <h3 className="font-label-md text-label-md text-on-surface font-bold">Plantão Farmacêutico</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              3 clientes aguardam orientação farmacêutica sobre interações no canal WhatsApp.
            </p>
            <a className="mt-2 inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold hover:underline" href="#">
              Abrir Chat do Plantão <span className="material-symbols-outlined text-[14px]">chat</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}