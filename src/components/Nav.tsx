import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'connect', label: 'Connect' },
]

export function Nav() {
  const [activeId, setActiveId] = useState('about')

  useEffect(() => {
    const updateActive = () => {
      const scrollBottom = window.scrollY + window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      if (docHeight - scrollBottom < 100) {
        setActiveId(links[links.length - 1].id)
        return
      }

      const marker = window.innerHeight * 0.28
      let current = links[0].id

      for (const link of links) {
        const section = document.getElementById(link.id)
        if (!section) continue
        if (section.getBoundingClientRect().top <= marker) {
          current = link.id
        }
      }

      setActiveId(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)

    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  return (
    <header className="nav">
      <nav className="nav__bar" aria-label="Primary">
        <ul className="nav__links">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeId === link.id ? 'is-active' : undefined}
                onClick={() => setActiveId(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
