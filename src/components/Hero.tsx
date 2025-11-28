import { ChevronDown, Code, Terminal } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 -z-10"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6 animate-fade-in">
          <Code size={16} />
          <span>Desarrollador Web Full Stack</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 animate-slide-up">
          Hola, soy <span className="text-blue-600">Leonel Risso</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
          Desarrollador web apasionado por crear experiencias digitales únicas.
          Especializado en tecnologías front-end modernas con un enfoque en diseño y usabilidad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
          <button
            onClick={() => scrollToSection('proyectos')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Ver Proyectos
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="px-8 py-3 bg-white text-slate-700 rounded-lg font-medium hover:bg-slate-50 border-2 border-slate-200 transform hover:scale-105 transition-all duration-200"
          >
            Contactar
          </button>
        </div>

        <button
          onClick={() => scrollToSection('sobre-mi')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
