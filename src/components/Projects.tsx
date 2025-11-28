import { ExternalLink, Code, ShoppingBag, Calculator } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'R-EJAL Calzados',
      description: 'E-commerce completo para venta de calzados desarrollado con React. Incluye catálogo de productos, carrito de compras, sistema de filtrado y diseño responsive.',
      icon: ShoppingBag,
      tech: ['React', 'JavaScript', 'CSS', 'HTML'],
      type: 'Proyecto Académico - React',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Sistema de Liquidación de Sueldos',
      description: 'Aplicación web para gestión de nómina y control de stock. Permite calcular sueldos, administrar empleados y gestionar inventario de materia prima.',
      icon: Calculator,
      tech: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
      type: 'Proyecto Académico - JavaScript',
      gradient: 'from-slate-500 to-slate-700'
    },
    {
      title: 'Página Web Corporativa',
      description: 'Sitio web profesional con diseño moderno y responsive. Implementación de mejores prácticas de HTML semántico, CSS moderno y SASS.',
      icon: Code,
      tech: ['HTML', 'CSS', 'SASS', 'Bootstrap'],
      type: 'Proyecto Académico - Web',
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-4">
            <Code size={16} />
            <span>Proyectos</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Mis Trabajos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Proyectos académicos y profesionales que demuestran mis habilidades en desarrollo web
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} mb-4`}>
                  <project.icon size={28} className="text-white" />
                </div>

                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {project.type}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 bg-blue-50 inline-block px-6 py-3 rounded-lg">
            Todos los proyectos fueron desarrollados como parte de mi formación en Coderhouse y CFP 401
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
