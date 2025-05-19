export default function Stacks() {
  const stacks = [
    { name: "C++", icon: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000", needsBg: false, href: "https://isocpp.org/" },
    { name: "Python", icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000", needsBg: false, href: "https://www.python.org/" },
    { name: "SQL", icon: "https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000", needsBg: false, href: "https://en.wikipedia.org/wiki/SQL" },
    { name: "Sphinx", icon: "https://www.sphinx-doc.org/en/master/_static/sphinx-logo.svg", needsBg: true, href: "https://www.sphinx-doc.org/en/master/" },
    { name: "MySQL", icon: "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000", needsBg: false, href: "https://www.mysql.com/" },
    { name: "Dart", icon: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000", needsBg: false, href: "https://dart.dev/" },
    { name: "Flutter", icon: "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000", needsBg: false, href: "https://flutter.dev/" },
    { name: "Docker", icon: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000", needsBg: false, href: "https://www.docker.com/" },
    { name: "Linux", icon: "https://img.icons8.com/?size=100&id=17842&format=png&color=000000", needsBg: false, href: "https://www.linux.org/" },
  ];

  return (
    <section className="mt-12 text-center">
      <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
        {stacks.map((stack, index) => (
          <a
            key={index}
            href={stack.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-32 h-32 p-4 rounded-2xl bg-white/70 dark:bg-white/5 border border-blue-800/30 dark:border-blue-400/20 shadow-md hover:shadow-blue-500/40 transition-all duration-300"
          >
            <img
              src={stack.icon}
              alt={`${stack.name} icon`}
              className={`w-10 h-10 mb-3 rounded transition-transform group-hover:scale-110 ${
                stack.needsBg ? "bg-white p-1" : ""
              }`}
            />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
              {stack.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
