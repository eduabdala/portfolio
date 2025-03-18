export default function Stacks() {
    const stacks = [
      "Python",
      "Java",
      "Sql",
      "Sphynx",
      "Next.js",
      "Dart",
      "Flutter",
      "Docker",
    ];
  
    return (
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 dark:text-white">Stacks</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {stacks.map((stack, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-blue-900 text-gray-900 dark:text-white"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    );
  }
  