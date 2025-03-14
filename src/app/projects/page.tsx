'use client'

import { useRouter } from 'next/navigation'

export default function Projects() {
    const router = useRouter()
    const projects = [
      {
        title: "Card Nft",
        description: "Projeto para estudo de criação de um card usando apenas css e html puro.",
        link: "https://nft-preview-card-challenge-ten.vercel.app/",
        imageUrl: "/imgs/card_nft.png",
      },
      {
        title: "QR Code Card",
        description: "Desafio de criação de um card do Front-End Mentor utilizando apenas css e html.",
        link: "https://qr-code-component-ruby-chi.vercel.app/",
        imageUrl: "/imgs/card_qr.png", 
      },
      {
        title: "Comunicação Serial Flutter",
        description: "App flutter de comunicação serial para windows ou linux.",
        link: "https://github.com/eduardosilvaabdala/flutter-pdf-reader",
        imageUrl: "/imgs/flutter.png", // Adicionando imagem ao terceiro projeto
      },
    ];
  
    return (
      <div className="min-h-screen p-8 sm:p-20 text-center">
        <button
          onClick={() => router.push('/')}
          className="mb-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
        >
          ← Voltar
        </button>

        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Meus Projetos
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    );
}
