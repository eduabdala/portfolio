"use client";

import Header from "./components/header";
import Bio from "./components/bio";
import Projects from "./components/projects";
import Stacks from "./components/stacks";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main
        className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 pt-32 text-center bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300"
        id="top"
      >
        {/* Seção Bio separada */}
        <Bio />
        
        <section id="stacks" className="mt-16 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
            Tech Stack
          </h2>
          <Stacks />
        </section>

        <section id="projects" className="mt-16 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
            Projects
          </h2>
          <Projects />
        </section>

        <section id="contact" className="mt-16 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
            Contact
          </h2>
          <Contact />
        </section>  

    
        {/* Rodapé */}
        <footer className="mt-20 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Eduardo Abdala. All rights reserved.
        </footer>
      </main>
    </>
  );
}
