import Intro from './intro.js';
import Projects from './projects.js';
import Nav from './nav.js';
import Content from './content.js';


export default function Home() {
  return (
    <main>
      <Nav />
      <Projects />
      <Intro />
      <Content />
    </main>
  )
}
