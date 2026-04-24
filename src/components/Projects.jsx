const projects = [
  {
    title: 'Smart Parking Solution',
    summary: 'Real-time parking detection using computer vision and a cross-platform mobile app for live availability and reservations.',
    tech: ['React Native', 'Node.js', 'MySQL', 'OpenCV'],
    accent: 'var(--color-accent)',
    link: 'https://github.com/Sch476/SIH1515',
  },
  {
    title: 'E-Commerce CDC Pipeline',
    summary: 'End-to-end change data capture pipeline with a Medallion Architecture, streaming into a DuckDB warehouse with live dashboards.',
    tech: ['Python', 'Kafka', 'PostgreSQL', 'dbt', 'Airflow'],
    accent: 'var(--color-accent2)',
    link: 'https://github.com/Sch476/CDC-Pipeline',
  },
  {
    title: 'Planet Care',
    summary: 'Sustainability web app integrating AI for personalized recycling and conservation tips, with secure Auth0 authentication.',
    tech: ['React', 'Django', 'Tailwind CSS', 'ChatGPT API'],
    accent: 'var(--color-accent3)',
    link: 'https://hack-odisha.vercel.app/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-xs uppercase tracking-widest text-accent mb-3 font-mono">Projects</p>
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-bright mb-16">
          Things I've built
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${i + 1} glass shine rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300`}
            >
              {/* Accent line */}
              <div
                className="w-8 h-1 rounded-full mb-5"
                style={{ background: p.accent }}
              />

              <h3 className="text-lg font-semibold text-text-bright mb-3">{p.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed flex-1 mb-5">
                {p.summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
