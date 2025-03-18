export default function Contact() {
    return (
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Contato</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Entre em contato comigo através das redes abaixo:</p>
        
        <div className="mt-4 flex flex-wrap justify-center gap-4">
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
        </div>
      </div>
    );
  }
  