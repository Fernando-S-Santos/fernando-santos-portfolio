import FadeIn from "../components/FadeIn";

export default function Specialties() {
  return (
    <section
      id="especialidades"
      className="py-24 px-6 bg-slate-900 border-t border-slate-800"
    >
      <FadeIn>
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-16">
            Especialidades
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="group relative p-6 rounded-xl bg-slate-950 border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Análise de Dados
              </h3>
              <p className="text-slate-200">
                Organização, exploração e interpretação de dados para geração de insights estruturados.
              </p>
            </div>

            <div className="group relative p-6 rounded-xl bg-slate-950 border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Desenvolvimento de Aplicações
              </h3>
              <p className="text-slate-200">
                Construção de sistemas modernos com foco em organização, clareza e performance.
              </p>
            </div>

            <div className="group relative p-6 rounded-xl bg-slate-950 border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Modelagem & Estrutura
              </h3>
              <p className="text-slate-200">
                Estruturação lógica de dados e sistemas visando escalabilidade e eficiência.
              </p>
            </div>

            <div className="group relative p-6 rounded-xl bg-slate-950 border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Visualização & Dashboards
              </h3>
              <p className="text-slate-200">
                Criação de painéis analíticos que transformam dados em decisões estratégicas.
              </p>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
