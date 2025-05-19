"use client";

export default function Bio() {
  return (
    <section className="pt-12 w-full max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-10">
        
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Eduardo Abdala
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-xl">
            Software engineering student building things and learning every day.
            Currently focused on fullstack development, embedded systems, and side projects.
          </p>
        </div>
        <div className="flex flex-row sm:flex-col justify-start sm:justify-end gap-4">
            
          {/* GitHub */}
          <a
            href="https://github.com/eduabdala"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2 rounded-xl border border-blue-500 shadow-sm bg-blue-50 dark:bg-white/10 text-blue-900 dark:text-white
              hover:shadow-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300"
          >
            <img
              src="https://img.icons8.com/?size=100&id=s1rwrv9mNnN4&format=png&color=000000"
              alt="GitHub"
              className="w-5 h-5 group-hover:scale-110 transition-transform"
            />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/eduardo-silva-abdala"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2 rounded-xl border border-blue-500 shadow-sm bg-blue-50 dark:bg-white/10 text-blue-900 dark:text-white
              hover:shadow-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300"
          >
            <img
              src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
              alt="LinkedIn"
              className="w-5 h-5 group-hover:scale-110 transition-transform"
            />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
