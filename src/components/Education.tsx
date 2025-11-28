import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

function Education() {
  const education = [
    {
      institution: 'Coderhouse',
      degree: 'Desarrollo Web Full Stack',
      period: 'Febrero 2025 - En Curso',
      status: 'En Curso',
      description: 'Programa completo de desarrollo web con módulos de HTML, CSS, SASS, JavaScript, React y Backend.',
      courses: ['HTML, CSS y SASS', 'JavaScript', 'React JS', 'Backend I (En curso)'],
      statusColor: 'bg-green-100 text-green-700 border-green-200'
    },
    {
      institution: 'CFP 401',
      degree: 'Programador Web',
      period: 'Finalizado en Diciembre 2024',
      status: 'Completado',
      description: 'Formación técnica en programación web, interfaces gráficas y bases de datos.',
      courses: ['Interfaz Gráfica Web', 'Programación de Base de Datos', 'Programación Web'],
      statusColor: 'bg-blue-100 text-blue-700 border-blue-200'
    },
    {
      institution: 'UTN - Facultad Regional Avellaneda',
      degree: 'Técnico en Refrigeración',
      period: 'Finalizado',
      status: 'Completado',
      description: 'Reparación e instalación de sistemas de aire acondicionado.',
      courses: [],
      statusColor: 'bg-blue-100 text-blue-700 border-blue-200'
    },
    {
      institution: 'UTN - Facultad Regional Avellaneda',
      degree: 'Ingeniería Química',
      period: '2013 - 2015 (2 años cursados)',
      status: 'Abandonado',
      description: 'Estudios universitarios en Ingeniería Química.',
      courses: [],
      statusColor: 'bg-slate-100 text-slate-600 border-slate-200'
    }
  ];

  return (
    <section id="formacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-4">
            <GraduationCap size={16} />
            <span>Formación</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Educación y Certificaciones
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mi trayectoria académica y formación continua en desarrollo web
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex-shrink-0">
                      {edu.status === 'En Curso' ? (
                        <BookOpen size={24} className="text-white" />
                      ) : edu.status === 'Completado' ? (
                        <Award size={24} className="text-white" />
                      ) : (
                        <GraduationCap size={24} className="text-white" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${edu.statusColor}`}>
                          {edu.status}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {edu.institution}
                      </p>

                      <p className="text-slate-600 mb-3">
                        {edu.description}
                      </p>

                      {edu.courses.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-slate-700">Módulos cursados:</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, courseIndex) => (
                              <span
                                key={courseIndex}
                                className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"
                  style={{
                    [index % 2 === 0 ? 'right' : 'left']: '-2.25rem'
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
