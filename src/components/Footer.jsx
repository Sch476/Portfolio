export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-dim">
          &copy; {new Date().getFullYear()} Sayantan Choudhury
        </p>
        <p className="text-xs text-text-dim">
          Built with <span className="text-accent">React</span> + <span className="text-accent2">Tailwind</span>
        </p>
      </div>
    </footer>
  )
}
