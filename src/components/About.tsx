import { profile } from '../data'
import { SocialLinks } from './SocialLinks'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-heading">
      <div className="container about__grid">
        <Reveal>
          <img
            className="about__portrait"
            src={profile.portraitUrl}
            alt={`${profile.name} portrait`}
          />
        </Reveal>
        <Reveal>
          <div>
            <h1 id="about-heading" className="about__name">
              {profile.name}
            </h1>
            <p className="about__role">
              {profile.role} · {profile.school}
            </p>
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="about__bio">
                {paragraph}
              </p>
            ))}
            <div className="about__actions">
              <a
                className="btn"
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <SocialLinks />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
