import { Outlet } from 'react-router'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import wallpaper from './assets/Wallpaper7.jpg'
import { AgendamentosProvider } from './context/AgendamentosContext'

function App() {
  return (
    <AgendamentosProvider>
      <div
        className="flex min-h-screen flex-col bg-cover bg-center text-slate-800 antialiased"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <Cabecalho />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-12 pt-2 md:px-6 lg:px-8">
          <Outlet />
        </main>
        <Rodape />
      </div>
    </AgendamentosProvider>
  )
}

export default App