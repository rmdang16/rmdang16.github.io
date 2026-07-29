import { experience } from '../data'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <Reveal>
          <h2 id="experience-heading" className="section-heading">
            Experience
          </h2>
        </Reveal>
        <Reveal>
          <ol className="timeline">
            {experience.map((item) => (
              <li key={`${item.role}-${item.organization}`} className="timeline__item">
                <span className="timeline__period">{item.period}</span>
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__org">{item.organization}</p>
                <p className="timeline__desc">{item.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
