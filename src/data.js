// Content for the portfolio. Edit here to update copy without touching markup.

export const RESUME_URL =
'https://drive.google.com/file/d/1ZpAxrY33cHrdFPollmsAcywcECx7cMSz/view?usp=sharing'

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
  { count: 10, suffix: '+', display: '10+', label: 'Projects built', note: 'web · data · AI' },
  { count: 15, suffix: '+', display: '15+', label: 'Open-source projects', note: 'contributed to' },
  { count: 3, suffix: '', display: '3', label: 'Shipped at internship', note: 'LTIMindtree · GenAI' },
  { count: null, suffix: '', display: "CS '26", label: 'Graduated', note: 'B.Tech · CSE' },
]

export const featured = {
  n: '01',
  title: 'MediSync',
  meta: 'Final-Year Project · Healthcare AI',
  desc: 'AI-powered healthcare middleware that sits between doctors, insurers and patients. It structures clinical notes from speech, checks each prescription against the patient’s insurance policy using RAG, auto-adjudicates claims in under a minute, and decodes hospital bills and discharge summaries into plain language across 10 Indian languages.',
  metrics: [
    { value: '<60s', label: 'auto-adjudication' },
    { value: '3', label: 'role-based portals' },
    { value: '10', label: 'Indian languages' },
  ],
  tags: ['Python', 'FastAPI', 'React', 'MongoDB', 'ChromaDB', 'RAG'],
  links: [],
}

export const projects = [
  {
    n: '02',
    title: 'E-Commerce CDC Pipeline',
    category: 'Data Engineering',
    desc: 'A change-data-capture pipeline streaming PostgreSQL e-commerce data through a Medallion architecture into a DuckDB warehouse — with SCD Type-2 dimensions, hash-based change detection and real-time Streamlit dashboards.',
    tags: ['Python', 'Kafka', 'PostgreSQL', 'DuckDB', 'dbt', 'Airflow'],
    source: 'https://github.com/Sch476/CDC-Pipeline',
    demo: null,
  },
  {
    n: '03',
    title: 'Smart Parking Solution',
    category: 'Computer Vision · Mobile',
    desc: 'A full-stack app with a computer-vision module using ArUco markers for real-time parking-slot detection from CCTV feeds, plus a cross-platform mobile app for live availability, reservations and payments. Built for Smart India Hackathon.',
    tags: ['React Native', 'Node.js', 'Express', 'MySQL', 'OpenCV'],
    source: 'https://github.com/Sch476/SIH1515',
    demo: null,
  },
  {
    n: '04',
    title: 'Planet Care',
    category: 'AI · Full-stack',
    desc: 'A sustainability web app using React and Django, integrating the ChatGPT API for personalized recycling and power-conservation tips, with Auth0 authentication and a PostgreSQL backend. Built at HackOdisha.',
    tags: ['React', 'Django', 'Tailwind CSS', 'PostgreSQL', 'Auth0'],
    source: null,
    demo: 'https://hack-odisha.vercel.app/',
  },
]

export const skillGroups = [
  { name: 'Languages', items: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'] },
  { name: 'Frontend', items: ['React', 'React Native', 'Tailwind CSS', 'HTML/CSS'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'Django'] },
  { name: 'Data & Cloud', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'DuckDB', 'Kafka', 'dbt', 'Airflow', 'Streamlit', 'Azure'] },
  { name: 'Tools', items: ['Docker', 'Git', 'GitHub', 'Selenium', 'Jira', 'Confluence'] },
]

export const profiles = [
  { glyph: 'GH', name: 'GitHub', handle: '@Sch476', stat: 'Projects & open-source', href: 'https://github.com/Sch476' },
  { glyph: 'in', name: 'LinkedIn', handle: 'in/sayantan-choudhury', stat: 'Open to full-time roles', href: 'https://linkedin.com/in/sayantan-choudhury/' },
  { glyph: 'LC', name: 'LeetCode', handle: '@csayantan538', stat: 'Problem solving · DSA', href: 'https://leetcode.com/u/csayantan538/' },
  { glyph: '@', name: 'Email', handle: 'sayantanchr13@gmail.com', stat: 'Usually replies within a day', href: 'mailto:sayantanchr13@gmail.com' },
  { glyph: 'CV', name: 'Résumé', handle: 'Google Drive', stat: 'One page · PDF', href: RESUME_URL },
]

// Education card shown in the About section.
export const education = {
  degree: 'B.Tech · Computer Science & Engineering',
  school: 'Heritage Institute of Technology, Kolkata',
  badges: ['2022 – 2026', 'GPA 8.72 / 10'],
}

export const timeline = [
  { when: '2022 – 2026', what: 'B.Tech, Computer Science & Engineering', where: 'Heritage Institute of Technology' },
  { when: 'Apr – May 2025', what: 'GenAI Intern', where: 'LTIMindtree · Kolkata' },
]
