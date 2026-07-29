import { projects } from '../data'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <Reveal>
          <h2 id="projects-heading" className="section-heading">
            Projects
          </h2>
        </Reveal>
        <div className="projects__grid">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="project-card">
                <div className="project__media">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    width={800}
                    height={500}
                  />
                </div>
                <div className="project__body">
                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__desc">{project.description}</p>
                  <ul className="project__tech">
                    {project.tech.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project__links">
                    {project.demoUrl ? (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        Live demo
                      </a>
                    ) : null}
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
