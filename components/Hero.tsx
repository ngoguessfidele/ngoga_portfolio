export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Ngoga Fidele
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
          Full-Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Experienced React and NestJS developer with 4 years of building scalable web applications,
          RESTful APIs, and modern user interfaces. Passionate about clean code, testing, and
          delivering high-quality solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}