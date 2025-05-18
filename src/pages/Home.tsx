import { ArrowDown } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-8 tracking-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
          </h1>
          <p className="text-xl text-notion/80 dark:text-white/80 mb-12 leading-relaxed">
            A passionate software developer crafting beautiful and functional web experiences. I specialize in building modern applications with a focus on user experience and clean code.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-notion dark:bg-white text-white dark:text-notion rounded-lg hover:opacity-90 transition-opacity"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-notion/10 dark:border-white/10 rounded-lg hover:bg-notion-hover dark:hover:bg-notion-dark-hover transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <ArrowDown className="w-6 h-6 animate-bounce opacity-60" />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group rounded-xl overflow-hidden border border-notion/10 dark:border-white/10 hover:border-notion/20 dark:hover:border-white/20 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={`https://source.unsplash.com/random/800x600?tech&sig=${i}`}
                    alt={`Project ${i}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 tracking-tight">Project Title {i}</h3>
                  <p className="text-notion/80 dark:text-white/80 mb-4 text-sm leading-relaxed">
                    A brief description of the project and its key features. Built with modern technologies and best practices.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}