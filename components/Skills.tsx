/**
 * Skills Component
 *
 * Displays technical skills organized into three categories:
 * - Frontend Development (blue theme)
 * - Backend Development (green theme)
 * - General Skills (purple theme)
 *
 * Each category shows skills as pill-shaped badges.
 *
 * @component
 * @example
 * ```tsx
 * <Skills />
 * ```
 *
 * @returns A grid of skill categories with technology badges
 */
export default function Skills() {
  /** Frontend development technologies and frameworks */
  const frontendSkills: string[] = [
    "HTML5", "CSS3/SCSS", "JavaScript ES6+", "React", "Next.js", "TypeScript",
    "Tailwind CSS", "State Management", "UI Testing", "Responsive Design",
    "Server-Side Rendering", "Accessibility", "SEO", "RESTful APIs", "Figma"
  ];

  const backendSkills = [
    "Node.js", "NestJS", "TypeScript", "RESTful APIs", "SOLID Principles",
    "Database Design", "SQL (MySQL)", "Automated Testing", "CI/CD Pipelines",
    "AWS/DigitalOcean", "Linux/Unix", "NGINX", "Infrastructure Setup"
  ];

  const generalSkills = [
    "Code Quality", "Refactoring", "Problem Solving", "Team Collaboration",
    "Agile Development", "Version Control (Git)", "Code Review", "Documentation"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* General Skills */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              General Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {generalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I write clean, maintainable TypeScript code with comprehensive testing,
            following industry best practices and continuously improving code quality.
          </p>
        </div>
      </div>
    </section>
  );
}