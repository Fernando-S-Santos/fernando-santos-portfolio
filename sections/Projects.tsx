import FadeIn from "../components/FadeIn";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="py-24 px-6 bg-slate-950 border-t border-slate-800"
    >
      <FadeIn>
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Projetos Destaque
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

           {/* Projeto 1 - EN */}
          <div className="group relative p-6 rounded-xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Global Economic Dashboard
            </h3>
            <p className="text-slate-400 mb-4">
              Interactive dashboard for global economic analysis including GDP comparison,
              country ranking and dynamic filtering. Designed for international data visualization.
            </p>
            <p className="text-sm text-slate-500 mb-6">
              Next.js • TypeScript • Recharts • Tailwind
            </p>

            <div className="flex gap-4">
              <a
                href="https://globaleconomicdashboard.vercel.app/"
                target="_blank"
                className="px-4 py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Acessar Aplicação
              </a>

              <a
                href="https://github.com/Fernando-S-Santos/global_economic_dashboard"
                target="_blank"
                className="px-4 py-2 border border-slate-600 rounded-lg text-sm hover:border-blue-400 hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Projeto 2 - EN */}
          <div className="group relative p-6 rounded-xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Business KPI Analyzer
            </h3>
            <p className="text-slate-400 mb-4">
              KPI monitoring system with executive metrics, revenue tracking and performance indicators,
              focused on strategic business analysis.
            </p>
            <p className="text-sm text-slate-500 mb-6">
              Next.js • TypeScript • Chart Visualization • Tailwind
            </p>

            <div className="flex gap-4">
              <a
                href="https://businesskpianalyzer.vercel.app/"
                target="_blank"
                className="px-4 py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Acessar Aplicação
              </a>

              <a
                href="https://github.com/Fernando-S-Santos/business-kpi-analyzer"
                target="_blank"
                className="px-4 py-2 border border-slate-600 rounded-lg text-sm hover:border-blue-400 hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Projeto 3 - PT */}
          <div className="group relative p-6 rounded-xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Dashboard Analítico Financeiro
            </h3>
            <p className="text-slate-400 mb-4">
              Painel para análise de receitas, despesas e indicadores financeiros,
              com foco em visualização clara e apoio à tomada de decisão baseada em dados.
            </p>
            <p className="text-sm text-slate-500 mb-6">
              React • Recharts • TypeScript
            </p>

            <div className="flex gap-4">
              <a
                href="https://dashboardanaliticofinanceiro.vercel.app/"
                target="_blank"
                className="px-4 py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Acessar Aplicação
              </a>

              <a
                href="https://github.com/Fernando-S-Santos/dashboard_analitico_financeiro"
                target="_blank"
                className="px-4 py-2 border border-slate-600 rounded-lg text-sm hover:border-blue-400 hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Projeto 4 - PT */}
          <div className="group relative p-6 rounded-xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Sistema de Gestão com Relatórios
            </h3>
            <p className="text-slate-400 mb-4">
              Sistema administrativo com CRUD completo de clientes e pedidos,
              além de relatórios automáticos com cálculo de faturamento e ticket médio.
            </p>
            <p className="text-sm text-slate-500 mb-6">
              Next.js • TypeScript • Context API • Tailwind
            </p>

            <div className="flex gap-4">
              <a
                href="https://sistemagestaorelatorios.vercel.app/"
                target="_blank"
                className="px-4 py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Acessar Aplicação
              </a>

              <a
                href="https://github.com/Fernando-S-Santos/sistema-gestao-relatorios"
                target="_blank"
                className="px-4 py-2 border border-slate-600 rounded-lg text-sm hover:border-blue-400 hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}