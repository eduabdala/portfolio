"use client";

import Projects from "./components/projects";
import Stacks from "./components/stacks";
import Contact from "./components/contact";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 text-center pt-40 sm:pt-32"> {/* Ajustado o padding-top */}
      
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
        Eduardo Abdala
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl">
        Software Engineer - Researcher - Scientist
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/eduabdala"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-blue-800 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-silva-abdala"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-blue-800 transition"
          >
            LinkedIn
          </a>
        </div>

      {/* Seções */}
      <div id="stacks"><Stacks /></div>
      <div id="projects"><Projects /></div>

    </div>
  );
}
