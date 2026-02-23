import FadeIn from "../components/FadeIn";

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-24 px-6 bg-slate-950 border-t border-slate-800"
    >
      <FadeIn>
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-16">
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-300">

            <div>
              <h3 className="text-blue-400 font-semibold mb-4">
                Linguagens
              </h3>
              <ul className="space-y-2 text-slate-200">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
              </ul>
            </div>

            <div>
              <h3 className="text-blue-400 font-semibold mb-4">
                Frontend
              </h3>
              <ul className="space-y-2 text-slate-200">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>HTML & CSS</li>
              </ul>
            </div>

            {/*
            <div>
              <h3 className="text-blue-400 font-semibold mb-4">
                Backend
              </h3>
              <ul className="space-y-2 text-slate-400">
                <li>Node.js</li>
                <li>API REST</li>
                <li>Banco de Dados Relacional</li>
              </ul>
            </div>
            */}

            <div>
              <h3 className="text-blue-400 font-semibold mb-4">
                Dados & Analytics
              </h3>
              <ul className="space-y-2 text-slate-200">
                <li>Excel Avançado (Dashboards, fórmulas, análise de dados)</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
                <li>SQL</li>
                <li>Exploração de Dados</li>
              </ul>
            </div>

            <div>
              <h3 className="text-blue-400 font-semibold mb-4">
                Ferramentas
              </h3>
              <ul className="space-y-2 text-slate-200">
                <li>Git & GitHub</li>
                <li>Vercel</li>
                <li>VS Code</li>
                <li>Figma (básico)</li>
              </ul>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
