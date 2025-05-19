"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#top">
          <span
            className="
              text-xl font-bold tracking-wider
              bg-gradient-to-r from-blue-600 to-blue-400
              bg-clip-text text-transparent
              drop-shadow-lg
              whitespace-nowrap
            "
          >
            E. Abdala
          </span>
        </Link>

        {/* Menu de navegação */}
        <nav className="flex gap-6 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
          {["Stacks","Projects","Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">{item}</span>

              {/* Linha animada por baixo do texto */}
              <span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500
                -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
