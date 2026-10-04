import { Link } from 'react-router'
import valhalla from '../../assets/Valhalla.jpg'
import herbi from '../../assets/herbi.webp'
import diablo from '../../assets/diablo.jpg'
import impala from '../../assets/Impala67.jpeg'
import logoOrdo from '../../assets/ORDO_REALITAS.webp'
import logoBetterCallSaul from '../../assets/Better_Call_Saul_logo.webp'
import logoFbc from '../../assets/FBC.webp'

const depoimentos = [
  {
    nome: 'Meu nome é Bond, James Bond',
    texto: 'Saiu daqui parecendo o dia em que eu peguei ele no laboratoria, espero que eu não acabe explodindo esse... o MI6 recomenda!!',
    imagem: valhalla
  },
  {
    nome: 'Maggie Peyton',
    texto: 'Fiz a lavagem aqui e o Herbi saiu feliz da vida, nunca vi ele correr tão rápido de euforia, a gente super recomenda!!',
    imagem: herbi
  },
  {
    nome: 'Irmãos Winchester',
    texto: 'Nem parece que algum dia teve alguem no porta-malas, saiu cada mancha, uma lavagem bem supernatural, recomendamos!!',
    imagem: impala
  }
]

const beneficios = [
  'Lavagem rápida e eficiente',
  'Cuidado especial com o cliente',
  'Atendimento com qualidade'
]

const motivosParaEscolher = [
  {
    texto: 'Equipamentos quase de outro mundo sedidos pela FBC (só não recomendamos interagir com eles sem proteção...)',
    imagem: logoFbc,
    descricaoImagem: 'Logo FBC'
  },
  {
    texto: 'Aceitamos clientes especiais para limpezas, e se precisar de qualquer ajuda com o judiciario, voce ja sabe!!',
    imagem: logoBetterCallSaul,
    descricaoImagem: 'Logo de Better Call Saul'
  },
  {
    texto: 'Agendamento tão simples que quase transcende a realidade',
    imagem: logoOrdo,
    descricaoImagem: 'Logo da Ordo Realitas'
  }
]

export default function HomePage() {
  return (
    <div className="space-y-12 py-8 text-slate-800">
      <section className="grid items-center gap-8 overflow-hidden rounded-[16px] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              A Vigilia, lavagem tão boa e eficiente que parece panormal
            </h1>
            <p className="max-w-xl text-base text-slate-600 md:text-lg">
              Aqui na vigilia oferecemos um serviço tão bom e tão rapido em ordem que ele chega a parecer uma Ordem Paranormal
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/agendamentos"
              className="rounded-full bg-[#08695f] px-5 py-3 font-semibold text-white transition hover:bg-[#064f49]"
            >
              Agendar agora
            </Link>
            <Link
              to="/sobre"
              className="rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-400"
            >
              Conhecer equipe
            </Link>
          </div>

        </div>

        <div className="grid gap-4">
          <div className="rounded-[14px] bg-gradient-to-br from-[#08695f] to-[#064f49] p-4 text-white shadow-lg">
            <img
              src={diablo}
              alt="Carro após lavagem"
              className="h-52 w-full rounded-lg object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {beneficios.map((beneficio, index) => (
              <div
                key={beneficio}
                className={`rounded-lg border border-slate-200 bg-slate-50 p-3 text-center text-sm font-medium text-slate-700 ${
                  index === 1 ? 'bg-[#e8f3f1] text-[#08695f]' : ''
                }`}
              >
                {beneficio}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[14px] border border-slate-200 bg-[#e8f3f1] p-6 md:p-8">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-900">Por que escolher A Vigilia?</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {motivosParaEscolher.map((motivo) => (
            <div key={motivo.texto} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <img
                src={motivo.imagem}
                alt={motivo.descricaoImagem}
                className="mb-4 h-20 w-20 object-contain"
              />
              <p className="text-lg font-semibold text-slate-800">{motivo.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-[14px] border border-slate-200 bg-[#e8f3f1] p-6 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-black">Algumas opiniões sobre nosso trabalho</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <article key={depoimento.nome} className="overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-sm">
              <img src={depoimento.imagem} alt={`Carro limpo do cliente ${depoimento.nome}`} className="h-52 w-full object-cover" />
              <div className="space-y-3 p-5">
                <p className="font-semibold text-slate-800">{depoimento.nome}</p>
                <p className="text-sm leading-6 text-slate-600">“{depoimento.texto}”</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
