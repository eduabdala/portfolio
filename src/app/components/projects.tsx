'use client'

import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [selectedStack, setSelectedStack] = useState("Todos");

  // Lista de projetos com suas stacks associadas
  const projects = [
    {
      title: "Card Nft",
      description: "Projeto para estudo de criação de um card usando apenas CSS e HTML puro.",
      link: "https://nft-preview-card-challenge-ten.vercel.app/",
      imageUrl: "/imgs/card_nft.png",
      stacks: ["HTML", "CSS"],
    },
    {
      title: "QR Code Card",
      description: "Desafio de criação de um card do Front-End Mentor utilizando apenas CSS e HTML.",
      link: "https://qr-code-component-ruby-chi.vercel.app/",
      imageUrl: "/imgs/card_qr.png",
      stacks: ["HTML", "CSS"],
    },
    {
      title: "Comunicação Serial Flutter",
      description: "App Flutter de comunicação serial para Windows ou Linux.",
      link: "https://github.com/eduardosilvaabdala/flutter-pdf-reader",
      imageUrl: "/imgs/flutter.png",
      stacks: ["Flutter", "Dart"],
    },
  ];

  const stacks = ["Todos", ...new Set(projects.flatMap((p) => p.stacks))];

  const filteredProjects =
    selectedStack === "Todos"
      ? projects
      : projects.filter((p) => p.stacks.includes(selectedStack));

  return (
    <section id="projects" className="min-h-screen p-8 sm:p-20 text-center">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Meus Projetos
      </h1>

      {/* Menu de Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {stacks.map((stack) => (
          <button
            key={stack}
            onClick={() => setSelectedStack(stack)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selectedStack === stack
                ? "bg-blue-700 text-white"
                : "bg-gray-200 dark:bg-blue-900 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-blue-600"
            }`}
          >
            {stack}
          </button>
        ))}
      </div>

      {/* Grid de Projetos Filtrados */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden dark:hover:bg-blue-900 shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col h-full"
          >
            {/* Imagem do Projeto */}
            {project.imageUrl && (
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-80 transition"
                />
              </div>
            )}

            {/* Informações do Projeto */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 mb-2 flex-grow">
                {project.description}
              </p>
              
              {/* Stacks no final do card */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stacks.map((stack, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    #{stack}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
