export function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A detailed description of project 1 and its features. Built with modern technologies and best practices for optimal performance and user experience.',
      image: 'https://source.unsplash.com/random/800x600?coding',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      demoUrl: '#',
      sourceUrl: '#',
    },
    {
      title: 'Project 2',
      description: 'A detailed description of project 2 and its features. Focused on scalability and maintainability while delivering a seamless user interface.',
      image: 'https://source.unsplash.com/random/800x600?developer',
      tech: ['Node.js', 'Express', 'MongoDB'],
      demoUrl: '#',
      sourceUrl: '#',
    },
  ];

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 tracking-tight">Projects</h1>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-xl overflow-hidden border border-notion/10 dark:border-white/10 hover:border-notion/20 dark:hover:border-white/20 transition-all duration-300"
          >
            <div className="md:flex">
              <div className="md:w-2/5 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>
              <div className="p-8 md:w-3/5">
                <h2 className="text-2xl font-bold mb-4 tracking-tight">{project.title}</h2>
                <p className="text-notion/80 dark:text-white/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-notion/60 dark:text-white/60 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-notion-hover dark:bg-notion-dark-hover rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-notion dark:bg-white text-white dark:text-notion rounded-lg hover:opacity-90 transition-opacity text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-notion/10 dark:border-white/10 rounded-lg hover:bg-notion-hover dark:hover:bg-notion-dark-hover transition-colors text-sm"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}