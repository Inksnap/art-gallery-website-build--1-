export function About() {
  const stats = [
    { number: "500+", label: "Artworks Curated" },
    { number: "120+", label: "Artists Featured" },
    { number: "25", label: "Years of Excellence" },
    { number: "50K+", label: "Annual Visitors" },
  ];

  return (
    <section id="about" className="py-24 bg-white" aria-label="About us">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://picsum.photos/seed/gallery1/400/500"
                    alt="Gallery interior showing artwork displays"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://picsum.photos/seed/gallery2/400/300"
                    alt="Visitors enjoying art exhibition"
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://picsum.photos/seed/gallery3/400/350"
                    alt="Artist working in studio"
                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://picsum.photos/seed/gallery4/400/500"
                    alt="Gallery event with guests"
                    className="w-full h-60 object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gallery-accent/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gallery-gold/20 rounded-full blur-xl" />
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-gallery-accent mb-3">
              About Artivio
            </span>
            <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-gallery-dark mb-6 leading-tight">
              Where Art Meets
              <span className="text-gallery-accent"> Passion</span>
            </h2>
            <p className="font-montserrat text-gallery-muted leading-relaxed mb-6">
              Founded in 1999, Artivio has been a beacon for contemporary and classical art
              enthusiasts alike. Our mission is to connect artists with audiences, fostering
              a deeper appreciation for the transformative power of visual art.
            </p>
            <p className="font-montserrat text-gallery-muted leading-relaxed mb-8">
              We believe that great art has the power to change perspectives, spark
              conversations, and inspire action. Our carefully curated exhibitions
              bring together diverse voices and visions from around the globe, creating
              experiences that resonate long after the gallery doors close.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-10">
              {[
                { icon: "🎨", title: "Curated Excellence", desc: "Every piece is hand-selected by our expert team of curators." },
                { icon: "🌍", title: "Global Perspectives", desc: "Featuring artists from over 40 countries worldwide." },
                { icon: "💡", title: "Innovation", desc: "Embracing new mediums from digital art to interactive installations." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="font-poppins text-sm font-semibold text-gallery-dark">{item.title}</h4>
                    <p className="font-montserrat text-xs text-gallery-muted mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-gallery-cream rounded-xl">
                  <p className="font-poppins text-2xl font-bold text-gallery-accent">{stat.number}</p>
                  <p className="font-montserrat text-[10px] tracking-wider uppercase text-gallery-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
