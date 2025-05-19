import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/project'
import Certifications from './components/certifications'
import Education from './components/education'
import Contact from './components/contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Certifications/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default App