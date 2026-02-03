import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

const projects: Project[] = [
    {
    id: 'school-management',
    title: 'School Management System',
    description: 'A comprehensive school management platform built with Next.js, featuring user authentication, role-based access control, dashboard analytics, and student/teacher management functionalities.',
    image: '/images/school.PNG',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Authentication', 'Role-based Access'],
    githubUrl: 'https://github.com/ngoguessfidele/school_management.git',
    liveUrl: 'https://school-management-lemon-five-54.vercel.app/',
    category: 'fullstack'
  },
  {
    id: 'nest-blog',
    title: 'NestJS Blog API',
    description: 'A comprehensive blog backend API built with NestJS, featuring CRUD operations, authentication, pagination, and MongoDB integration. Demonstrates advanced backend architecture and RESTful API design.',
    image: '/images/api.PNG',
    technologies: ['NestJS', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT', 'Swagger'],
    githubUrl: 'https://github.com/ngoguessfidele/nest_blog.git',
    category: 'backend'
  }
  ,
  {
    id: 'ngoga-portfolio',
    title: 'Ngoga Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, featuring project showcases, skills presentation, dark mode support, and professional contact integration. Demonstrates advanced frontend development and effective self-presentation.',
    image: '/images/portfolio.PNG',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    githubUrl: 'https://github.com/ngoguessfidele/ngoga_portfolio.git',
    liveUrl: 'https://ngoga-portfolio.vercel.app/',
    category: 'frontend'
  },
  {
    id: 'pineapple-island',
    title: 'Pineapple Island Resort',
    description: 'A responsive landing page for a tropical resort, showcasing modern UI/UX design, smooth animations, and mobile-first development principles.',
    image: '/images/island.PNG',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    githubUrl: 'https://github.com/ngoguessfidele/pineapple_island.git',
    liveUrl: 'https://pineapple-island.vercel.app/',
    category: 'frontend'
  },
  {
    id: 'shop-design',
    title: 'E-Commerce Landing Page',
    description: 'Modern e-commerce interface built with React and Vite, featuring product showcases, customer reviews, and optimized performance for online shopping experiences.',
    image: '/images/shop.PNG',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/ngoguessfidele/shop_design.git',
    liveUrl: 'https://shop-design-gamma.vercel.app/',
    category: 'frontend'
  },
  
  {
    id: 'gpt3-openai',
    title: 'GPT-3 OpenAI Landing Page',
    description: 'A modern, responsive landing page showcasing GPT-3 and OpenAI capabilities, featuring interactive sections on chatbots, knowledgebase, education, and future possibilities. Built with clean design and smooth user experience.',
    image: '/images/modern.PNG',
    technologies: ['React', 'CSS', 'JavaScript', 'Responsive Design'],
    githubUrl: 'https://github.com/ngoguessfidele/modern_ui_ux.git',
    liveUrl: 'https://modern-ui-ux-iota.vercel.app/',
    category: 'frontend'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            These projects demonstrate my expertise in modern web development,
            from scalable APIs to responsive user interfaces.
          </p>
          <a
            href="https://github.com/ngoguessfidele"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
