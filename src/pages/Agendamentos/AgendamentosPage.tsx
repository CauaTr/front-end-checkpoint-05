import { useContext, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { AgendamentosContext } from '../../context/AgendamentosContext'
import type { CamposPedido, Ticket } from '../../types'

const camposIniciais: CamposPedido = {
  nomeCliente: '',
  modelo: '',
  placa: '',
  tipoLavagem: 'Completa'
}

const tiposLavagem = ['Simples', 'Completa', 'Criminal', 'Paranormal']

export default function AgendamentosPage() {
  const [campos, setCampos] = useState<CamposPedido>(camposIniciais)
  const { tickets, adicionarTicket, excluirTicket } = useContext(AgendamentosContext)

  const atualizarCampo = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target

    setCampos((atuais) => ({
      ...atuais,
      [name]: value
    }))
  }

  const criarTicket = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const novoTicket: Ticket = {
      id: crypto.randomUUID(),
      nomeCliente: campos.nomeCliente.trim(),
      modelo: campos.modelo.trim(),
      placa: campos.placa.trim(),
      tipoLavagem: campos.tipoLavagem
    }

    adicionarTicket(novoTicket)
    setCampos(camposIniciais)
  }
  return (
    <div className="mx-auto max-w-5xl space-y-8 py-8 text-slate-800">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#08695f]">Agendamentos</p>
        <h1 className="text-3xl font-black text-black md:text-4xl">Agende sua lavagem</h1>
      </header>

      <section className="rounded-[14px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <form onSubmit={criarTicket} className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-semibold text-slate-700">
            Nome do cliente
            <input
              name="nomeCliente"
              value={campos.nomeCliente}
              onChange={atualizarCampo}
              className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-3 text-base outline-none transition focus:border-[#08695f] focus:ring-2 focus:ring-[#08695f]/20"
              required
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            Modelo do carro
            <input
              name="modelo"
              value={campos.modelo}
              onChange={atualizarCampo}
              className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-3 text-base outline-none transition focus:border-[#08695f] focus:ring-2 focus:ring-[#08695f]/20"
              required
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            Placa
            <input
              name="placa"
              value={campos.placa}
              onChange={atualizarCampo}
              className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-3 text-base outline-none transition focus:border-[#08695f] focus:ring-2 focus:ring-[#08695f]/20"
              required
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            Tipo de lavagem
            <select
              name="tipoLavagem"
              value={campos.tipoLavagem}
              onChange={atualizarCampo}
              className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-3 text-base outline-none transition focus:border-[#08695f] focus:ring-2 focus:ring-[#08695f]/20"
            >
              {tiposLavagem.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </label>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="rounded-full bg-[#08695f] px-6 py-3 font-semibold text-white transition hover:bg-[#064f49]"
            >
              Criar tíquete
            </button>
          </div>
        </form>
      </section>

      <section className="space-y-5 rounded-[14px] border border-slate-200 bg-[#e8f3f1] p-6 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Meus tíquetes</h2>
        </div>

        {tickets.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2">
            {tickets.map((ticket) => (
              <article key={ticket.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-slate-900">{ticket.nomeCliente}</h3>
                  <button
                    type="button"
                    onClick={() => excluirTicket(ticket.id)}
                    aria-label={`Cancelar lavagem de ${ticket.nomeCliente}`}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    Cancelar lavagem
                  </button>
                </div>

                <dl className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between gap-3">
                    <dt>Modelo</dt>
                    <dd className="font-medium text-slate-800">{ticket.modelo}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Placa</dt>
                    <dd className="font-medium text-slate-800">{ticket.placa}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Lavagem</dt>
                    <dd className="font-medium text-slate-800">{ticket.tipoLavagem}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

