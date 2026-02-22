import FadeIn from "../components/FadeIn";

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-16 px-14 bg-slate-900 border-t border-slate-800"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width="20"
        height="20"
        className="transition-transform duration-300 group-hover:scale-110"
      ></svg>

      <FadeIn>
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-full flex justify-center mb-8">
            <div className="h-px w-56 md:w-64 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Contato
          </h2>

          <p className="text-slate-400 mb-12 text-lg">
            Estou aberto a oportunidades como Analista Jr e desafios que envolvam
            desenvolvimento, análise de dados e soluções orientadas a informação.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">

            <a
              href="mailto:fernandossantos93@hotmail.com"
              className="relative px-6 py-3 rounded-lg bg-blue-600 overflow-hidden group transition duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
                <span className="relative z-10">Enviar E-mail</span>

                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500"></span>
            </a>

            <a
              href="https://www.linkedin.com/in/fernando-s-santos/"
              target="_blank"
              className="px-6 py-3 border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Fernando-S-Santos"
              target="_blank"
              className="px-6 py-3 border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              GitHub
            </a>

          </div>

        </div>
      </FadeIn>
    </section>
  );
}