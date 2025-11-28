import { Code2, Palette, Database, Wrench, BookOpen } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3 / SASS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Tailwind CSS', level: 70 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      gradient: 'from-slate-500 to-slate-700',
      skills: [
        { name: 'Node.js', level: 60 },
        { name: 'Base de Datos', level: 65 },
        { name: 'APIs REST', level: 60 }
      ]
    },
    {
      title: 'Herramientas',
      icon: Wrench,
      gradient: 'from-blue-600 to-blue-800',
      skills: [
        { name: 'Git', level: 70 },
        { name: 'Vite', level: 75 },
        { name: 'NPM', level: 75 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      title: 'Otras Habilidades',
      icon: Palette,
      gradient: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Soporte Técnico', level: 90 },
        { name: 'Gestión de Proyectos', level: 85 },
        { name: 'Atención al Cliente', level: 90 },
        { name: 'Microsoft Office', level: 85 }
      ]
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-4">
            <BookOpen size={16} />
            <span>Habilidades</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tecnologías y Competencias
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conocimientos técnicos adquiridos a través de formación académica y experiencia práctica
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient}`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-xl border border-blue-100">
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">En constante aprendizaje</h3>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Actualmente cursando <span className="font-semibold text-blue-600">Backend I en Coderhouse</span>,
              ampliando mis conocimientos para convertirme en un desarrollador Full Stack completo.
              Siempre explorando nuevas tecnologías y mejores prácticas de desarrollo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
