import FadeIn from "../components/FadeIn";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 px-6 bg-slate-950 border-t border-slate-800"
    >
      <FadeIn>
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Sobre
          </h2>

          <div className="space-y-6 text-slate-200 text-lg leading-relaxed">

            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas e atualmente cursando
              Pós-Graduação em Gestão de Big Data & Business Analytics.
            </p>

            <p>
              Tenho direcionado minha trajetória para o desenvolvimento de soluções
              orientadas a dados, buscando unir organização, raciocínio lógico e
              tomada de decisão baseada em informação.
            </p>

            <p>
              Meu foco está na construção de aplicações e dashboards que não apenas
              funcionam tecnicamente, mas que também entregam clareza, estrutura e
              inteligência analítica.
            </p>

            <p>
              Estou em constante evolução técnica e profissional, preparado para
              atuar em ambientes que valorizam aprendizado contínuo, análise crítica
              e crescimento estruturado.
            </p>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
