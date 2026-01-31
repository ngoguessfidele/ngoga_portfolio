export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate full-stack developer with over 3 years of experience building
              modern web applications. My expertise spans both frontend and backend technologies,
              with a strong focus on React, Next.js, and NestJS.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I specialize in creating scalable, maintainable code following best practices like
              SOLID principles, and automated testing. I'm experienced with infrastructure
              setup, CI/CD pipelines, and deploying applications to cloud platforms.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding, I enjoy learning new technologies, contributing to open-source
              projects, and sharing knowledge with the developer community.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">React development</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">NestJS Node.js/Express.js development</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">RESTful API design & implementation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Database design & SQL proficiency</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">CI/CD & infrastructure setup</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Automated testing & code quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}