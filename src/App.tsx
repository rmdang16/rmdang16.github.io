import { Nav } from './components/Nav'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Connect } from './components/Connect'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <About />
        <Projects />
        <Experience />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
