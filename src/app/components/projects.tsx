'use client'

import { useState, useEffect, JSX } from "react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiDart,
  SiFlutter,
  SiSpringboot,
  SiRabbitmq,
  SiPython,
  SiPostgresql,
  SiJouav,
  SiJavascript,
  SiCocacola
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
    Java:<SiSpringboot/>,
    "Spring Boot": <SiSpringboot className="text-green-600" />,
    RabbitMQ: <SiRabbitmq className="text-orange-500" />,
    Python: <SiPython className="text-yellow-500" />,
    PostgreSQL: <SiPostgresql className="text-blue-800" />,
  };

  useEffect(() => {
    fetch("data/projects.json")
      .then((response) => response.json())
      .then((data: Project[]) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const stacks = ["All", ...new Set(projects.flatMap((p) => p.stacks))];

  const filteredProjects =
    selectedStack === "All"
      ? projects
      : projects.filter((p) => p.stacks.includes(selectedStack));

  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  const toggleExpandedProjects = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setVisibleProjects(filteredProjects.length);
    } else {
      setVisibleProjects(3);
    }
  };

  const handleShowMoreStacks = () => {
    setVisibleStacks((prev) => prev + 6);
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
            <span className="inline-flex items-center gap-2">
              {stackIcons[stack] || null}
              {stack}
            </span>
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
                    className="px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full inline-flex items-center gap-2"
                  >
                    {stackIcons[stack] || null}
                    {stack}
                  </span>
                ))}
              </div>

              {/* Links with icons at the bottom */}
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-900 dark:bg-blue-950 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition flex items-center gap-2"
                >
                  <FaLink size={18} /> Project
                </a>
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
