import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background"
    >
      <Navbar/>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  );
}

export default App;