import './App.css'

const skills = [
  'JavaScript (ES6+)',
  'React + Vite',
  'Python',
  'Java',
  'Data Structures & Algorithms',
  'SQL & NoSQL',
  'Git & CI/CD',
  'UI/UX Prototyping'
]

const projects = [
  {
    name: 'StudyBuddy',
    description:
      'A full-stack study planner with adaptive scheduling and real-time reminders.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    url: '#'
  },
  {
    name: 'GraphVision',
    description:
      'An interactive algorithm visualizer for graphs (BFS, DFS, Dijkstra, A*).',
    tech: ['TypeScript', 'D3.js', 'Vite', 'Jest'],
    url: '#'
  },
  {
    name: 'SecureNotes',
    description:
      'A privacy-first notes app using client-side encryption and biometric login.',
    tech: ['React', 'Firebase', 'Web Crypto API', 'Tailwind CSS'],
    url: '#'
  }
]

function App() {
  return (
    <div className="portfolio">
      <header className="hero-section">
        <h1>Alex Morgan</h1>
        <p className="tagline">Computer Science Student • Future Software Engineer</p>
        <div className="hero-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      <section id="about" className="card">
        <h2>About Me</h2>
        <p>
          Passionate about building accessible and efficient web applications,
          currently pursuing a B.S. in Computer Science. Experienced in team
          collaboration, competitive programming, and full-stack prototyping.
        </p>
      </section>

      <section id="skills" className="card">
        <h2>Key Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-item">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="card">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
              <a className="project-link" href={project.url}>
                View details
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="card contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:alex.morgan@example.com">alex.morgan@example.com</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/your-username">github.com/your-username</a>
        </p>
        <p>Open to internships and collaborative projects.</p>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Alex Morgan • CS Portfolio</footer>
    </div>
  )
}

export default App
