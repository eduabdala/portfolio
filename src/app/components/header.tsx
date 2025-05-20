"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Ícones (usando lucide-react, disponível no ShadCN)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Stacks", "About", "Projects", "Contact"];

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + Nome */}
          <Link href="#top" className="flex items-center gap-2">
            <Image
              src="/origami.png"
              alt="Logo"
              width={28}
              height={28}
              className="object-contain"
            />
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

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-6 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative overflow-hidden group"
              >
                <span className="relative z-10">{item}</span>
                <span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500
                  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"
                />
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Overlay + Sidebar (Mobile Menu) */}
      {menuOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          />

          {/* Sidebar */}
          <aside className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-900 z-50 shadow-lg p-6 flex flex-col gap-6">
            {/* Close button */}
            <button
              className="self-end text-gray-700 dark:text-gray-300"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {/* Links */}
            <nav className="flex flex-col text-lg font-medium text-gray-800 dark:text-gray-100 gap-4 mt-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)} // fecha ao clicar
                >
                  {item}
                </a>
              ))}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
