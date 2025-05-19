import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: <Mail size={24} />,
      href: "mailto:eduardoabdala9@outlook.com",
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      href: "https://github.com/eduabdala",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/eduardo-silva-abdala",
    },
  ];

  return (
    <section className="mt-20 text-center">
      <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-6">
        Let's connect
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto">
        Got a project, idea or opportunity? Feel free to reach out through any of the platforms below.
      </p>

      <div className="flex justify-center flex-wrap gap-6">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-32 h-32 p-4 rounded-2xl bg-white/70 dark:bg-white/5 border border-blue-800/30 dark:border-blue-400/20 shadow-md hover:shadow-blue-500/40 transition-all duration-300"
          >
            <div className="text-blue-700 dark:text-blue-300 mb-2">
              {contact.icon}
            </div>
            <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
              {contact.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
