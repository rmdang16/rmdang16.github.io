import { profile } from '../data'
import { SocialLinks } from './SocialLinks'
import { Reveal } from './Reveal'

export function Connect() {
  return (
    <section id="connect" className="section connect" aria-labelledby="connect-heading">
      <div className="container">
        <Reveal>
          <div className="connect__inner">
            <h2 id="connect-heading" className="section-heading">
              Let&apos;s Connect
            </h2>
            <a className="connect__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <SocialLinks />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
