'use client'

import { useState, useEffect, JSX } from "react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import {
  SiHtml5, SiCss3, SiDart, SiFlutter,
  SiSpringboot, SiRabbitmq, SiPython, SiPostgresql
} from "react-icons/si";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedStack, setSelectedStack] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [expanded, setExpanded] = useState(false);
  const [visibleStacks, setVisibleStacks] = useState(6);

  type Project = {
    title: string;
    description: string;
    link: string;
    repoLink: string;
    imageUrl: string;
    stacks: string[];
  };

  const stackIcons: { [key: string]: JSX.Element } = {
    HTML: <SiHtml5 className="text-orange-600" />,
    CSS: <SiCss3 className="text-blue-600" />,
    Dart: <SiDart className="text-cyan-500" />,
    Flutter: <SiFlutter className="text-blue-400" />,
    Java: <SiSpringboot />,
    "Spring Boot": <SiSpringboot className="text-green-600" />,
    RabbitMQ: <SiRabbitmq className="text-orange-500" />,
    Python: <SiPython className="text-yellow-500" />,
    PostgreSQL: <SiPostgresql className="text-blue-800" />,
  };

  useEffect(() => {
    fetch("data/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  const stacks = ["All", ...new Set(projects.flatMap(p => p.stacks))];
  const filteredProjects = selectedStack === "All"
    ? projects
    : projects.filter(p => p.stacks.includes(selectedStack));
  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  const toggleExpandedProjects = () => {
    setExpanded(!expanded);
    setVisibleProjects(expanded ? 3 : filteredProjects.length);
  };

  const handleShowMoreStacks = () => setVisibleStacks(prev => prev + 6);
  const handleShowLessStacks = () => setVisibleStacks(6);

  return (
    <section id="projects" className="min-h-screen p-6 sm:p-10 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Projects
      </h2>

      {/* Filtro por stacks */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {stacks.slice(0, visibleStacks).map(stack => (
          <button
            key={stack}
            onClick={() => setSelectedStack(stack)}
            className={`px-4 py-2 rounded-2xl text-sm font-medium transition shadow-sm ${
              selectedStack === stack
                ? "bg-blue-700 text-white"
                : "bg-gray-100 dark:bg-blue-900 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-blue-700"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              {stackIcons[stack] || null}
              {stack}
            </span>
          </button>
        ))}
      </div>

      {/* Botões de mostrar mais/menos stacks */}
      <div className="flex justify-center mb-10">
        {visibleStacks < stacks.length && (
          <button
            onClick={handleShowMoreStacks}
            className="px-6 py-2 rounded-xl text-sm font-medium bg-blue-900 dark:bg-blue-950 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition"
          >
            Show More Stacks
          </button>
        )}
        {visibleStacks > 6 && (
          <button
            onClick={handleShowLessStacks}
            className="px-6 py-2 rounded-xl text-sm font-medium bg-blue-900 dark:bg-blue-950 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition ml-2"
          >
            Show Less Stacks
          </button>
        )}
      </div>

      {/* Grid de projetos */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsToShow.map((project, index) => (
          <div
            key={index}
            className="flex flex-col rounded-2xl p-4 bg-white/70 dark:bg-white/10 border border-blue-800/30 dark:border-blue-400/20 shadow-md hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
          >
            {/* Imagem do projeto */}
            {project.imageUrl && (
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition group-hover:opacity-80"
                />
              </div>
            )}

            {/* Conteúdo do projeto */}
            <div className="flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 flex-grow mb-4">
                {project.description}
              </p>

              {/* Stacks utilizadas */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stacks.map((stack, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full inline-flex items-center gap-2"
                  >
                    {stackIcons[stack] || null}
                    {stack}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-500 transition flex items-center gap-2"
                >
                  <FaLink size={18} /> View
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition flex items-center gap-2"
                >
                  <FaGithub size={18} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botão de mostrar mais projetos */}
      <div className="flex justify-center mt-10">
        <button
          onClick={toggleExpandedProjects}
          className="px-6 py-2 rounded-xl text-sm font-medium bg-blue-900 dark:bg-blue-950 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition"
        >
          {expanded ? "Show Less Projects" : "Show More Projects"}
        </button>
      </div>
    </section>
  );
}
