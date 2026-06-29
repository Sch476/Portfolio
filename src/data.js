// Content for the portfolio. Edit here to update copy without touching markup.

export const RESUME_URL =
  'https://drive.google.com/file/d/1tMRllaN1XutftjPKhkOc7FXoCWhPu8QV/view?usp=sharing'

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const heroLinks = [
  { tag: 'GH', label: 'GitHub', href: 'https://github.com/Sch476' },
  { tag: 'in', label: 'LinkedIn', href: 'https://linkedin.com/in/sayantan-choudhury/' },
  { tag: 'CV', label: 'Résumé', href: RESUME_URL },
  { tag: '@', label: 'Email', href: 'mailto:sayantanchr13@gmail.com' },
]

// Honest, derived counts — no invented achievement numbers. The 4th tile is
// static (count: null) so it isn't run through the count-up animation.
export const stats = [
  { count: 3, suffix: '+', display: '3+', label: 'Projects shipped', note: 'open-source on GitHub' },
  { count: 20, suffix: '+', display: '20+', label: 'Technologies', note: 'languages, frameworks & tools' },
  { count: 1, suffix: '', display: '1', label: 'GenAI internship', note: 'LTIMindtree · 2025' },
  { count: null, suffix: '', display: "CS '26", label: 'Graduating', note: 'B.Tech · Computer Science' },
]

export const featured = {
  n: '01',
  title: 'E-Commerce CDC Pipeline',
  meta: 'Data Engineering',
  desc: 'An end-to-end change-data-capture pipeline built on a Medallion architecture — streaming row-level changes through Kafka into a DuckDB warehouse, transformed with dbt, orchestrated by Airflow, and surfaced through live dashboards.',
  metrics: [
    { value: 'Real-time', label: 'CDC capture' },
    { value: '3-layer', label: 'medallion arch' },
    { value: 'DuckDB', label: 'warehouse' },
  ],
  tags: ['Python', 'Kafka', 'PostgreSQL', 'dbt', 'Airflow', 'DuckDB'],
  links: [{ label: 'Source ↗', href: 'https://github.com/Sch476/CDC-Pipeline' }],
}

export const projects = [
  {
    n: '02',
    title: 'Smart Parking Solution',
    category: 'Computer Vision · Mobile',
    desc: 'Real-time parking-spot detection using computer vision, paired with a cross-platform mobile app for live availability and reservations. Built for Smart India Hackathon.',
    tags: ['React Native', 'Node.js', 'MySQL', 'OpenCV'],
    source: 'https://github.com/Sch476/SIH1515',
    demo: null,
  },
  {
    n: '03',
    title: 'Planet Care',
    category: 'AI · Full-stack',
    desc: 'A sustainability web app that uses AI for personalized recycling and conservation tips, with secure Auth0 authentication. Built at HackOdisha.',
    tags: ['React', 'Django', 'Tailwind CSS', 'ChatGPT API'],
    source: null,
    demo: 'https://hack-odisha.vercel.app/',
  },
]

export const skillGroups = [
  { name: 'Languages', items: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'] },
  { name: 'Frontend', items: ['React', 'React Native', 'Tailwind CSS', 'HTML/CSS'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'Django', 'FastAPI'] },
  { name: 'Data & Cloud', items: ['PostgreSQL', 'MySQL', 'Kafka', 'DuckDB', 'dbt', 'Airflow', 'Azure'] },
]

export const profiles = [
  { glyph: 'GH', name: 'GitHub', handle: '@Sch476', stat: 'Projects & open-source', href: 'https://github.com/Sch476' },
  { glyph: 'in', name: 'LinkedIn', handle: 'in/sayantan-choudhury', stat: 'Open to full-time roles', href: 'https://linkedin.com/in/sayantan-choudhury/' },
  { glyph: 'LC', name: 'LeetCode', handle: '@sayantan', stat: 'Problem solving · DSA', href: '#' },
  { glyph: '@', name: 'Email', handle: 'sayantanchr13@gmail.com', stat: 'Usually replies within a day', href: 'mailto:sayantanchr13@gmail.com' },
  { glyph: 'CV', name: 'Résumé', handle: 'Google Drive', stat: 'One page · PDF', href: RESUME_URL },
]

// Education card shown in the About section.
export const education = {
  degree: 'B.Tech · Computer Science',
  school: '', // TODO: add your university name
  badges: ['Class of 2026'],
}

export const timeline = [
  { when: '2026 — Now', what: 'Open to full-time roles', where: 'Full-stack · Data · GenAI' },
  { when: 'Jun 2026', what: 'B.Tech, Computer Science', where: 'Graduating' },
  { when: 'Apr – May 2025', what: 'GenAI Intern', where: 'LTIMindtree · Kolkata' },
]
