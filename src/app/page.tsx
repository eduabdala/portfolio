
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 text-center">
  
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
        Eduardo Silva Abdala
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl">
        Engenheiro de Software
      </p>
      
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <a
          href="https://github.com/eduabdala"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/eduardo-silva-abdala"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          LinkedIn
        </a>
        <a
          href="/projects"
          className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Projetos
        </a>
      </div>
    </div>
  );
}
