import './App.css';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import Navbar from './pages/NavBar';

function App() {
  return (
    <div className='container max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
