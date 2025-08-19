import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experiences from './pages/Experiences';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import Navbar from './pages/NavBar';
import Projects from './pages/Projects';

function App() {
  return (
    <div className='container max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
