import Image from "next/image";

const projects = [
  {
    title: "Drink Card Website",
    description: "A web application for managing and sharing custom drink recipes. Built with modern web technologies for a seamless user experience.",
    tags: ["React", "Node.js", "Database"],
    status: "In Progress",
    image: null,
  },
  {
    title: "AXiD Book Library System",
    description: "A library management system for organizing and tracking books within the Alpha Xi Delta sorority chapter.",
    tags: ["Full Stack", "Database", "UI/UX"],
    status: "Planned",
    image: null,
  },
  {
    title: "Shared Prayers App",
    description: "A community-focused application for sharing prayer requests and supporting one another through faith.",
    tags: ["Mobile", "Community", "Faith"],
    status: "Concept",
    image: null,
  },
  {
    title: "Personal Portfolio",
    description: "This very website! Built with Next.js, TypeScript, and Tailwind CSS to showcase my work and personality.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    status: "Live",
    image: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pink-500 font-semibold text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="font-[family-name:var(--font-roboto)] font-bold text-4xl sm:text-5xl text-[#1e3a5f] mt-2">
            Projects & Ideas
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            I have so many ideas bouncing around in my brain—here's where I keep track
            of what I want to build and what I'm working on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] flex items-center justify-center">
                <span className="text-6xl opacity-30">
                  {index === 0 && "🍹"}
                  {index === 1 && "📚"}
                  {index === 2 && "🙏"}
                  {index === 3 && "💻"}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-roboto)] font-bold text-xl text-[#1e3a5f]">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Live"
                        ? "bg-green-100 text-green-700"
                        : project.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : project.status === "Planned"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-medium"
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
          <p className="text-gray-500 italic">
            More projects coming soon... the ideas never stop!
          </p>
        </div>
      </div>
    </section>
  );
}
