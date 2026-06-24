import { Canvas } from '@react-three/fiber';
import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from './components/ThemeProvider';
import DataOcean from './components/canvas/DataOcean';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ReactLenis root options={{ lerp: 0.05, duration: 2, smoothWheel: true, smoothTouch: true }}>
        <main className="relative w-full min-h-screen bg-background text-foreground cursor-none transition-colors duration-500">
          <Cursor />

          {/* 3D Background */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <DataOcean />
            </Canvas>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 w-full transition-colors duration-500">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
          </div>
        </main>
      </ReactLenis>
    </ThemeProvider>
  );
}

export default App;
