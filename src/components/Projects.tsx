const projects = [
  {
    title: "YouTube Time Tracker",
    description: "A Chrome extension that tracks and visualizes your YouTube watching habits, helping you stay mindful of your screen time and make intentional choices about content consumption.",
    tags: ["Chrome Extension", "JavaScript", "Productivity"],
    status: "In Progress",
    emoji: "⏱️",
  },
  {
    title: "Automated Parachute Packing System",
    description: "Senior MQP project integrating a WidowX-200 robotic arm, ESP32 microcontroller, and dual cameras into an automated packing solution with ROS 2 architecture.",
    tags: ["ROS 2", "Python", "Robotics"],
    status: "In Progress",
    emoji: "🪂",
  },
  {
    title: "Ecuador Microfinance Platform",
    description: "A responsive web platform for 20+ women's microfinance groups in Cuenca, Ecuador, featuring an amortization calculator, document repository, and directory system.",
    tags: ["Next.js", "React", "Social Impact"],
    status: "Live",
    emoji: "💰",
  },
  {
    title: "Personal Portfolio",
    description: "This very website! Built with Next.js, TypeScript, and Tailwind CSS to showcase my work and personality.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    status: "Live",
    emoji: "💻",
  },
  {
    title: "AI Resume Grader",
    description: "An AI-powered resume evaluator using TF-IDF vectorization and cosine similarity to analyze resumes and generate personalized improvement recommendations.",
    tags: ["Python", "AI/ML", "NLP"],
    status: "Completed",
    emoji: "📄",
  },
  {
    title: "Student Research Connect",
    description: "Full-stack Flask web application connecting students with campus research opportunities and helping faculty find qualified candidates.",
    tags: ["Python", "Flask", "MySQL"],
    status: "Completed",
    emoji: "🔬",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Grid paper background */}
      <div
        className="absolute inset-0 bg-[#fafafa]"
        style={{
          backgroundImage: `
            linear-gradient(#e5e7eb 1px, transparent 1px),
            linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
      {/* Blue margin line like notebook paper */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[2px] bg-red-200/50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="font-[family-name:var(--font-roboto)] font-bold text-4xl sm:text-5xl text-[#1e3a5f] mt-2">
            Projects & Ideas
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            From early concepts to working systems&#160;
            <span className="font-[family-name:var(--font-caveat)] text-amber-600 text-xl">
             - projects I've loved bringing to life
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div className="h-40 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] flex items-center justify-center">
                <span className="text-5xl opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-300">
                  {project.emoji}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-[family-name:var(--font-roboto)] font-bold text-lg text-[#1e3a5f] leading-tight">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      project.status === "Live"
                        ? "bg-green-100 text-green-700"
                        : project.status === "In Progress"
                        ? "bg-amber-100 text-amber-700"
                        : project.status === "Completed"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-[family-name:var(--font-caveat)] text-xl text-gray-500">
            More projects coming soon... the ideas never stop!
          </p>
        </div>
      </div>
    </section>
  );
}
