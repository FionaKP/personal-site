import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative group">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/senior_photo.jpg"
                alt="Fiona Prendergast"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-200 rounded-full -z-10 opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1e3a5f]/20 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-pink-500 font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-[family-name:var(--font-roboto)] font-bold text-4xl sm:text-5xl text-[#1e3a5f] mt-2 mb-6">
              Who am I?
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                I'm <span className="font-semibold text-pink-500">Fiona</span>!
                I'm a software and robotics engineer with a passion for building things
                that matter. Whether it's coding late into the night or competing on
                the field, I bring the same energy and determination to everything I do.
              </p>
              <p>
                As a student athlete, I've learned that success comes from showing up
                every day and putting in the work—even when no one's watching. I believe
                in doing over perfection, learning by building, and living life fully alive.
              </p>
              <p>
                When I'm not coding or studying, you'll find me on the field, exploring
                new adventures, or dreaming up my next project idea (usually in one of my
                800 notebooks scattered around my room).
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "Python", "Robotics", "TypeScript", "Leadership"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
