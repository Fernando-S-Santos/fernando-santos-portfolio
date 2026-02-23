import FadeIn from "../components/FadeIn";

export default function Timeline() {
  return (
    <section
      id="jornada"
      className="py-24 px-6 bg-slate-900 border-t border-slate-800"
    >
      <FadeIn>
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-16">
            Jornada & Formação
          </h2>

          <div className="space-y-10 border-l border-slate-700 pl-8">

            <div>
              <h3 className="text-xl font-semibold text-blue-400">
                Pós-graduação em Gestão de Big Data & Business Analytics
              </h3>
              <p className="text-slate-300">
                Aprofundamento em análise de dados, estatística aplicada,
                modelagem e inteligência analítica.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-400">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-slate-300">
                Formação sólida em desenvolvimento, estrutura de sistemas,
                banco de dados e lógica de programação.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-400">
                Evolução Contínua
              </h3>
              <p className="text-slate-300">
                Desenvolvimento de projetos práticos com foco em aplicações
                orientadas a dados, dashboards e organização de sistemas.
              </p>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
