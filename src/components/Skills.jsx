const groups = [
  {
    label: 'Languages',
    items: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'],
  },
  {
    label: 'Frontend',
    items: ['React', 'React Native', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'Django', 'FastAPI'],
  },
  {
    label: 'Data & Cloud',
    items: ['PostgreSQL', 'MySQL', 'Kafka', 'DuckDB', 'dbt', 'Airflow', 'Azure'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-xs uppercase tracking-widest text-accent mb-3 font-mono">Skills</p>
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-bright mb-16">
          Tech I work with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <div key={g.label} className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <h3 className="text-xs uppercase tracking-widest text-text-dim mb-4 font-mono">
                {g.label}
              </h3>
              <div className="flex flex-col gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="glass shine rounded-lg px-4 py-2.5 text-sm text-text cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
