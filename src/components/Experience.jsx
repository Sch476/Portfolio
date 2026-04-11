export default function Experience() {
  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-xs uppercase tracking-widest text-accent mb-3 font-mono">Experience</p>
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-bright mb-16">
          Where I've worked
        </h2>

        <div className="reveal relative pl-8 border-l border-border">
          {/* Timeline dot */}
          <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-accent ring-4 ring-bg" />

          <div className="glass shine rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
              <div>
                <h3 className="text-xl font-semibold text-text-bright">GenAI Intern</h3>
                <p className="text-accent text-sm font-medium">LTIMindtree &middot; Kolkata</p>
              </div>
              <span className="text-xs font-mono text-text-dim bg-bg-glass px-3 py-1 rounded-full border border-border w-fit">
                Apr &ndash; May 2025
              </span>
            </div>

            <p className="text-text-dim leading-relaxed mb-4">
              Worked on Python-based GenAI automation for enterprise clients. Built an Azure-hosted
              dashboard that automated data ingestion and normalization from messy Excel files,
              cutting manual processing time significantly. Developed a FastAPI email service for
              reliable newsletter delivery and improved an NLP-to-SQL system through prompt
              engineering for more accurate database queries.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Python', 'Azure', 'FastAPI', 'Pandas', 'Streamlit', 'Prompt Engineering'].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
