import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileButtons from './components/MobileButtons';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
      <MobileButtons />
    </div>
  );
}

export default App;
