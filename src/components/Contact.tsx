import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'leonelrisso92@gmail.com',
      link: 'mailto:leonelrisso92@gmail.com'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+54 11 6541 1918',
      link: 'tel:+541165411918'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Buenos Aires, Argentina',
      link: null
    }
  ];

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-4">
            <Send size={16} />
            <span>Contacto</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            ¡Hablemos!
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estoy disponible para nuevos proyectos y oportunidades laborales.
            No dudes en contactarme.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Información de Contacto
              </h3>
              <p className="text-slate-600 mb-6">
                Estoy buscando oportunidades como desarrollador web junior.
                Si tienes un proyecto en mente o una posición disponible, me encantaría conversar.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-900 font-medium hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Disponibilidad
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Disponible para proyectos full-time</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Abierto a trabajos remotos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Disponibilidad para viajar</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Licencia de conducir</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-12 rounded-xl text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Me encantaría ser parte de tu equipo y contribuir con mis conocimientos
              al desarrollo de proyectos innovadores.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <p className="font-semibold">Desarrollador Junior</p>
                  <p className="text-sm text-blue-100">Listo para aprender y crecer</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <p className="font-semibold">Proactivo y Comprometido</p>
                  <p className="text-sm text-blue-100">Enfocado en resultados de calidad</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <p className="font-semibold">Autoaprendizaje</p>
                  <p className="text-sm text-blue-100">Siempre actualizado con nuevas tecnologías</p>
                </div>
              </div>
            </div>

            <a
              href="mailto:leonelrisso92@gmail.com"
              className="block w-full bg-white text-blue-600 text-center py-4 rounded-lg font-bold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Enviar un Email
            </a>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-blue-100 mb-3">También puedes encontrarme en:</p>
              <div className="flex gap-3">
                <a
                  href="mailto:leonelrisso92@gmail.com"
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="tel:+541165411918"
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Teléfono"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
