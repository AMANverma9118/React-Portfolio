import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-primary text-ink overflow-x-hidden transition-colors duration-300">
        <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
          <div className="mesh-blob w-[min(70vw,420px)] h-[min(70vw,420px)] top-[40%] -left-32 bg-cyan-500/15 animate-float" />
          <div className="mesh-blob w-[min(60vw,360px)] h-[min(60vw,360px)] bottom-0 right-1/4 bg-violet-600/15" />
        </div>

        <Navbar />

        <header className="relative">
          <Hero />
        </header>

        <main className="relative">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
