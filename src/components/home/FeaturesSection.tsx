import { features } from '../../data/servicesData';

export default function FeaturesSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            A Transformação que Sua Empresa
            <br />
            <span className="text-gradient-cyan">Merece Está Aqui</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas para elevar sua marca ao próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative glassmorphism rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-500 card-hover overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="absolute top-4 right-4 text-4xl font-black text-white/[0.03] group-hover:text-cyan-500/10 transition-colors">
                {feature.number}
              </span>

              <div className="relative w-14 h-14 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative w-full h-full bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                  <feature.icon className="text-cyan-400" size={26} />
                </div>
              </div>

              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
