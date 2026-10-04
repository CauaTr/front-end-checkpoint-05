import { createContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Ticket } from '../types'

type AgendamentosContextValue = {
  tickets: Ticket[]
  adicionarTicket: (ticket: Ticket) => void
  excluirTicket: (id: string) => void
}

export const AgendamentosContext = createContext<AgendamentosContextValue>({
  tickets: [],
  adicionarTicket: () => {},
  excluirTicket: () => {},
})

export function AgendamentosProvider({ children }: { children: ReactNode }) {
  const [tickets, setTickets] = useState<Ticket[]>([])

  const adicionarTicket = (ticket: Ticket) => {
    setTickets((atuais) => [ticket, ...atuais])
  }

  const excluirTicket = (id: string) => {
    setTickets((atuais) => atuais.filter((t) => t.id !== id))
  }

  return (
    <AgendamentosContext.Provider value={{ tickets, adicionarTicket, excluirTicket }}>
      {children}
    </AgendamentosContext.Provider>
  )
}
