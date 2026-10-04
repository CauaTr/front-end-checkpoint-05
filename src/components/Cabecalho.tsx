import { useContext } from 'react'
import { Link } from 'react-router'
import { AgendamentosContext } from '../context/AgendamentosContext'

export default function Cabecalho() {
  const { tickets } = useContext(AgendamentosContext)

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Agendamentos', to: '/agendamentos' },
    { label: 'Sobre', to: '/sobre' }
  ]

  return (
    <header className="bg-[#111111] px-4 pt-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 pb-3">
          <Link to="/" className="text-xl font-black tracking-tight text-white">
            A Vigilia
          </Link>

          <span className="relative left-13 text-sm text-white">Seus tiquetes abertos: {tickets.length}</span>

          <nav className="hidden items-center gap-4 md:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-white transition hover:text-white/75"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </header>
  )
}