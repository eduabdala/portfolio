"use client";

import Projects from "./components/projects";
import Stacks from "./components/stacks";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 text-center pt-40 sm:pt-32">
      
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
        E. Abdala
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl">
        Software engineering student building things, learning every day.  
        Currently focused on fullstack development, embedded systems and side projects.
      </p>


      {/* Botões com ícones (imagem personalizada) */}
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <a
          href="https://github.com/eduabdala"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-blue-100 dark:bg-gray-900 text-blue-900 dark:text-white hover:bg-blue-200 dark:hover:bg-blue-800 transition"
        >
          <img
            src="https://img.icons8.com/?size=100&id=s1rwrv9mNnN4&format=png&color=000000"
            alt="GitHub"
            className="w-5 h-5 rounded-full p-0.5"
          />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/eduardo-silva-abdala"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-blue-100 dark:bg-gray-900 text-blue-900 dark:text-white hover:bg-blue-200 dark:hover:bg-blue-800 transition"
        >
          <img
            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
            alt="LinkedIn"
            className="w-5 h-5 rounded-full p-0.5"
          />
          LinkedIn
        </a>
      </div>


      {/* Seções */}
      <div id="stacks"><Stacks /></div>
      <div id="projects"><Projects /></div>
    </div>
  );
}
