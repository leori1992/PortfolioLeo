import { User, Briefcase, Target, Sparkles } from 'lucide-react';

function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-4">
            <User size={16} />
            <span>Sobre Mí</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            ¿Quién soy?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Soy un desarrollador web con experiencia en gestión empresarial y soporte técnico.
              Actualmente cursando el programa de <span className="font-semibold text-blue-600">Desarrollo Web Full Stack</span> en Coderhouse.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Mi formación incluye cursos completos en <span className="font-semibold">HTML, CSS, SASS, JavaScript y React</span>,
              además de estar aprendiendo desarrollo backend para convertirme en un desarrollador full stack completo.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Me caracterizo por ser <span className="font-semibold text-blue-600">proactivo, detallista</span> y con
              gran capacidad de autoaprendizaje, siempre buscando mejorar mis habilidades y mantenerme actualizado
              con las últimas tecnologías.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl border border-slate-200 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Briefcase size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Experiencia Práctica</h3>
                  <p className="text-slate-600">
                    Más de 15 años en gestión empresarial, ahora aplicando esa experiencia al desarrollo web.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl border border-slate-200 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Target size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Enfoque en Resultados</h3>
                  <p className="text-slate-600">
                    Orientado al detalle y comprometido con entregar proyectos de alta calidad.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl border border-slate-200 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Sparkles size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Aprendizaje Continuo</h3>
                  <p className="text-slate-600">
                    Siempre actualizado con las últimas tendencias y mejores prácticas del desarrollo web.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
