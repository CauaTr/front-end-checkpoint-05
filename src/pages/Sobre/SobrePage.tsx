import bumblebee from '../../assets/Bumblebee.webp'
import astonMartinLogo from '../../assets/aston-martin-logo.png'
import pedru from '../../assets/Pedru.webp'
import thiago from '../../assets/Thiago.jpg'
import joao from '../../assets/João.jpg'
import caua from '../../assets/caua.webp'

const integrantes = [
  { nome: 'João Luiz', rm: 'RM 568747', foto: joao, descricaoFoto: 'João' },
  { nome: 'Cauã Trevisanuto', rm: 'RM 570312', foto: caua, descricaoFoto: 'Cauã' },
  { nome: 'Pedro Basilisco', rm: 'RM 572370', foto: pedru, descricaoFoto: 'Pedro' },
  { nome: 'Thiago Ferrari', rm: 'RM 572492', foto: thiago, descricaoFoto: 'Thiago' }
]

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-6xl py-8 text-slate-800">
      <section className="space-y-8 rounded-[14px] border border-slate-200 bg-[#e8f3f1] p-6 md:p-8">
        <div className="relative isolate space-y-3 text-center">
          <img
            src={astonMartinLogo}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[90%] z-0 w-60 -translate-x-1/2 -translate-y-1/2 opacity-20 brightness-0 md:w-[22rem]"
          />
          <p className="relative z-10 text-sm font-semibold uppercase tracking-[0.2em] text-[#08695f]">Sobre</p>
          <h1 className="relative z-10 text-3xl font-black text-slate-900 md:text-4xl">Nossa equipe</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {integrantes.map((integrante) => (
            <article key={integrante.rm} className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
              <img
                src={integrante.foto}
                alt={integrante.descricaoFoto}
                className="mb-5 aspect-[3/4] w-full rounded-[11px] border border-slate-200 object-cover"
              />

              <div className="mt-5 rounded-lg border border-[#064f49] bg-[#08695f] p-3">
                <div className="mt-3 space-y-2 text-sm text-white">
                  <p>Nome: {integrante.nome}</p>
                  <p>RM: {integrante.rm}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <figure className="mt-10 text-center">
        <img
          src={bumblebee}
          alt="Bumblebee"
          className="mx-auto h-auto w-64 max-w-full object-contain"
        />
        <figcaption className="mt-4 text-lg font-semibold italic text-black">
          "I wish to stay with the boy." -Bumblebee, daquele filme lá.
        </figcaption>
      </figure>
    </div>
  )
}
