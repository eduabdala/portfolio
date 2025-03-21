'use client'

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

export default function Projects() {
  const [selectedStack, setSelectedStack] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [expanded, setExpanded] = useState(false);
  const [visibleStacks, setVisibleStacks] = useState(6);
  const projects = [
    {
      title: "Card Nft",
      description: "Project to study the creation of a card using only CSS and HTML.",
      link: "https://nft-preview-card-challenge-ten.vercel.app/",
      repoLink: "https://github.com/eduardosilvaabdala/card-nft",
      imageUrl: "/imgs/card_nft.png",
      stacks: ["HTML", "CSS"],
    },
    {
      title: "QR Code Card",
      description: "Challenge to create a card from Front-End Mentor using only CSS and HTML.",
      link: "https://qr-code-component-ruby-chi.vercel.app/",
      repoLink: "https://github.com/eduardosilvaabdala/qr-code-card",
      imageUrl: "/imgs/card_qr.png",
      stacks: ["HTML", "CSS"],
    },
    {
      title: "Serial Communication Flutter",
      description: "Flutter app for serial communication on Windows or Linux.",
      link: "https://github.com/eduardosilvaabdala/flutter-pdf-reader",
      repoLink: "https://github.com/eduardosilvaabdala/flutter-pdf-reader",
      imageUrl: "/imgs/flutter.png",
      stacks: ["Flutter", "Dart"],
    },
    {
      title: "Card Nft",
      description: "Project to study the creation of a card using only CSS and HTML.",
      link: "https://nft-preview-card-challenge-ten.vercel.app/",
      repoLink: "https://github.com/eduardosilvaabdala/card-nft",
      imageUrl: "/imgs/card_nft.png",
      stacks: ["Sphynx", "Next.js"],
    },
    {
      title: "QR Code Card",
      description: "Challenge to create a card from Front-End Mentor using only CSS and HTML.",
      link: "https://qr-code-component-ruby-chi.vercel.app/",
      repoLink: "https://github.com/eduardosilvaabdala/qr-code-card",
      imageUrl: "/imgs/card_qr.png",
      stacks: ["Java", "Angular"],
    },
    {
      title: "Serial Communication Flutter",
      description: "Flutter app for serial communication on Windows or Linux.",
      link: "https://github.com/eduardosilvaabdala/flutter-pdf-reader",
      repoLink: "https://github.com/eduardosilvaabdala/flutter-pdf-reader",
      imageUrl: "/imgs/flutter.png",
      stacks: ["Python", "Docker"],
    },
  ];

  const stacks = ["All", ...new Set(projects.flatMap((p) => p.stacks))];

  const filteredProjects =
    selectedStack === "All"
      ? projects
      : projects.filter((p) => p.stacks.includes(selectedStack));

  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  const handleShowMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  const handleShowLessProjects = () => {
    setVisibleProjects(3);
  };

  const toggleExpandedProjects = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setVisibleProjects(filteredProjects.length);
    } else {
      setVisibleProjects(3);
    }
  };

  const handleShowMoreStacks = () => {
    setVisibleStacks(prev => prev + 6);
  };

  const handleShowLessStacks = () => {
    setVisibleStacks(6);
  };

  return (
    <section id="projects" className="min-h-screen p-8 sm:p-20 text-center">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
        My Projects
      </h1>

      {/* Filter Menu */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {stacks.slice(0, visibleStacks).map((stack) => (
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

      {/* Show More / Show Less Button for Stacks */}
      <div className="flex justify-center mt-6">
        {visibleStacks < stacks.length && (
          <button
            onClick={handleShowMoreStacks}
            className="px-6 py-2 rounded-lg text-sm font-medium bg-blue-900 dark:bg-blue-950 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition"
          >
            Show More Stacks
          </button>
        )}
        {visibleStacks > 6 && (
          <button
            onClick={handleShowLessStacks}
            className="px-6 py-2 rounded-lg text-sm font-medium bg-blue-900 dark:bg-blue-950 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition ml-4"
          >
            Show Less Stacks
          </button>
        )}
      </div>

      {/* Filtered Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {projectsToShow.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden dark:hover:bg-blue-900 shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col h-full"
          >
            {/* Project Image */}
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

            {/* Project Information */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 mb-2 flex-grow">
                {project.description}
              </p>

              {/* Stacks at the bottom of the card */}
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

              {/* Links with icons at the bottom */}
              <div className="flex justify-center gap-4 mt-4">
                {/* Visit Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-900 dark:bg-blue-950 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition flex items-center gap-2"
                >
                  <FaLink size={18} /> Project
                </a>

                {/* View Repository Link */}
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-black-800 dark:bg-gray-950 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition flex items-center gap-2"
                >
                  <FaGithub size={18} /> Code
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Show More / Show Less Button for Projects */}
      <div className="flex justify-center mt-6">
        <button
          onClick={toggleExpandedProjects}
          className="px-6 py-2 rounded-lg text-sm font-medium bg-blue-900 dark:bg-blue-950 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition"
        >
          {expanded ? "Show Less Projects" : "Show More Projects"}
        </button>
      </div>
    </section>
  );
}
  