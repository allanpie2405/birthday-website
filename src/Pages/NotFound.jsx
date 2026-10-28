
import { House, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#0b0809] px-5 py-12 md:px-10 text-white">

      {/* Luzes decorativas */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 md:h-[28rem] md:w-[28rem] -translate-x-1/2 rounded-full bg-red-700/10 blur-[100px]" />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">

        {/* Código do erro */}
        <div className="relative mb-5">
          <span className="bg-gradient-to-b from-red-400 to-red-800 bg-clip-text text-[120px] font-black leading-none tracking-tighter text-transparent drop-shadow-[0_0_25px_rgba(220,38,38,0.2)] sm:text-[170px] md:text-[220px] short:text-[96px]">
            404
          </span>

          {/* Gatinho perdido */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-6xl transition-transform duration-300 hover:-rotate-12 hover:scale-110 sm:text-7xl md:text-8xl">
            🐈‍⬛
          </div>
        </div>

        {/* Mensagem */}
        <div className="mt-8 space-y-4">
          <h1 className="text-2xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Parece que você se perdeu{" "}
            <span className="text-red-500">Davi</span>
            <span className="text-red-500">!</span>
          </h1>

          <p className="mx-auto max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base md:max-w-lg md:text-lg">
            Até nosso gatinho se perdeu por aqui...
            <br />
            Clique no botão abaixo para voltar para o início.
          </p>
        </div>

        {/* Botão de retorno */}
        <a
          href="/"
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-red-600 px-7 py-4 md:px-9 md:py-5 md:text-lg font-semibold text-white shadow-[0_0_25px_rgba(220,38,38,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.4)] active:translate-y-0"
        >
          <House
            size={20}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          Voltar para o início
        </a>

        {/* Detalhe inferior */}
        <div className="mt-12 flex items-center gap-2 text-xs md:text-sm text-zinc-600">
          <Search size={14} />
          <span>Ops! Parece que esse caminho não existe.</span>
        </div>
      </div>

      {/* Decoração nos cantos */}
      <span className="pointer-events-none absolute left-[12%] top-[20%] animate-pulse text-red-900">
        ✦
      </span>
      <span className="pointer-events-none absolute right-[15%] top-[30%] text-2xl text-red-800">
        ✧
      </span>
      <span className="pointer-events-none absolute bottom-[15%] left-[20%] text-red-950">
        ✦
      </span>
    </main>
  );
}
