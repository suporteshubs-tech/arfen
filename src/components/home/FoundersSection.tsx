import { Users, PenTool, Quote, Linkedin, Instagram } from 'lucide-react';
import { founders } from '../../data/homeData';

export default function FoundersSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 glassmorphism rounded-full mb-8">
            <Users className="text-cyan-400" size={18} />
            <span className="text-gray-300 text-sm font-medium">Liderança Visionária</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Os <span className="text-gradient-cyan">Fundadores</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Especialistas em transformar visões em resultados extraordinários
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden min-h-[600px] hover-lift"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500" />

              <div className="absolute inset-0 glassmorphism-strong" />

              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                style={{ backgroundImage: `url(${founder.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030306] via-[#030306]/90 to-[#030306]/70" />

              <div className="relative h-full flex flex-col p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <PenTool className="text-cyan-400" size={16} />
                    </div>
                    <span className="text-gray-400 text-sm font-medium">{founder.tag}</span>
                  </div>
                  <span className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-cyan-500/30">
                    {founder.badge}
                  </span>
                </div>

                <div className="flex-1 flex flex-col justify-end">
                  <Quote className="text-cyan-500/20 mb-4" size={48} />
                  <p className="text-cyan-300/80 text-lg italic mb-8 font-medium">
                    "{founder.quote}"
                  </p>

                  <div className="mb-8">
                    <h3 className="text-white font-black text-3xl mb-2">{founder.name}</h3>
                    <p className="text-cyan-400 font-semibold text-lg">{founder.role}</p>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    {founder.description}
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-white/10">
                    <div className="flex items-center gap-6">
                      {founder.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex flex-col items-center gap-2 group/skill">
                          <div className="w-12 h-12 glassmorphism rounded-xl flex items-center justify-center group-hover/skill:bg-cyan-500/20 transition-all duration-300">
                            <skill.icon className="text-cyan-400" size={20} />
                          </div>
                          <span className="text-gray-500 text-xs font-medium">{skill.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 glassmorphism rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all">
                        <Linkedin size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 glassmorphism rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all">
                        <Instagram size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
