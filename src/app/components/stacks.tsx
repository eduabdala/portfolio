export default function Stacks() {
  const stacks = [
    { name: "Python", icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000" },
    { name: "Sql", icon: "https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000" },
    { name: "Sphynx", icon: "https://www.sphinx-doc.org/en/master/_static/sphinx-logo.svg" },
    { name: "Next.js", icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" },
    { name: "Dart", icon: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000" },
    { name: "Flutter", icon: "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000" },
    { name: "Docker", icon: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000" },
  ];

  return (
    <div className="mt-12 text-center">
      <h2 className="text-2xl font-semibold text-blue-900 dark:text-white">Stacks</h2>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {stacks.map((stack, index) => (
          <span
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-blue-900 text-gray-900 dark:text-white"
          >
            <img
              src={stack.icon}
              alt={`${stack.name} icon`}
              className="w-5 h-5"
            />
            {stack.name}
          </span>
        ))}
      </div>
    </div>
  );
}
