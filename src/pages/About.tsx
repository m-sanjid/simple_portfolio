export function About() {
  const skills = [
    'JavaScript/TypeScript',
    'React.js',
    'Node.js',
    'Python',
    'SQL',
    'AWS',
    'Docker',
    'Git',
  ];

  const experience = [
    {
      title: 'Senior Software Engineer',
      company: 'Company Name',
      period: '2020 - Present',
      description: 'Led development of various projects and mentored junior developers. Implemented best practices and improved team productivity.',
    },
    {
      title: 'Software Engineer',
      company: 'Previous Company',
      period: '2018 - 2020',
      description: 'Worked on full-stack development using React and Node.js. Developed and maintained multiple client projects.',
    },
  ];

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <img
            src="https://source.unsplash.com/random/200x200?portrait"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover ring-2 ring-notion/10 dark:ring-white/10"
          />
          <h1 className="text-4xl font-bold mb-6 tracking-tight">About Me</h1>
          <p className="text-notion/80 dark:text-white/80 text-lg leading-relaxed">
            I'm a passionate software developer with X years of experience in building
            web applications. I love solving complex problems and creating elegant
            solutions that make a difference.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 tracking-tight">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-notion-hover dark:bg-notion-dark-hover rounded-lg text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 tracking-tight">Experience</h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-notion/10 dark:before:bg-white/10"
              >
                <h3 className="text-xl font-bold tracking-tight">{job.title}</h3>
                <p className="text-notion/80 dark:text-white/80 font-medium">{job.company}</p>
                <p className="text-sm text-notion/60 dark:text-white/60 mb-3">
                  {job.period}
                </p>
                <p className="text-notion/80 dark:text-white/80 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 tracking-tight">Education</h2>
          <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-notion/10 dark:before:bg-white/10">
            <h3 className="text-xl font-bold tracking-tight">Bachelor's in Computer Science</h3>
            <p className="text-notion/80 dark:text-white/80 font-medium">University Name</p>
            <p className="text-sm text-notion/60 dark:text-white/60">2014 - 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}