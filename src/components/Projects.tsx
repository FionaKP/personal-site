import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tags: string[];
  status: "Live" | "In Progress" | "Prototype" | "Completed";
  emoji: string;
  image?: string; // Path to image in /public folder, e.g., "/projects/my-project.png"
  websiteUrl?: string; // Link to live site
  githubUrl?: string; // Link to GitHub repo
};

const projects: Project[] = [
  {
    title: "YouTube Time Tracker",
    description: "A Chrome extension that tracks and visualizes your YouTube watching habits, helping you stay mindful of your screen time and make intentional choices about content consumption.",
    tags: ["Chrome Extension", "JavaScript", "Productivity"],
    status: "In Progress",
    emoji: "⏱️",
    image: "/projects/youtube-tracker.png",
    // websiteUrl: "https://example.com",
    githubUrl: "https://github.com/FionaKP/youtube-time-tracker",
  },
  {
    title: "Automated Parachute Packing System",
    description: "Senior Major Qualifying Project (MQP) integrating a WidowX-200 robotic arm, ESP32 microcontrollers, and dual cameras into an automated packing solution with ROS 2 architecture.",
    tags: ["ROS 2", "Python", "Robotics", "Finite State Machine"],
    status: "In Progress",
    emoji: "🪂",
    image: "/projects/parachute-system.jpg",
    githubUrl: "https://github.com/cguanmy11-droid/MQP-Parachute-Packing-Automation-and-Inspection",
  },
  {
    title: "Ecuador Microfinance Platform",
    description: "A responsive web platform for 20+ women's microfinance groups in Cuenca, Ecuador, featuring an amortization calculator, document repository, and directory system.",
    tags: ["User Experience", "UX Research", "Social Impact", "Wordpress"],
    status: "Live",
    emoji: "💰",
    image: "/projects/iqp_website.jpg",
    websiteUrl: "https://www.cajaswarmiscuenca.com/",
    // githubUrl: "https://github.com/username/repo",
  },
  // {
  //   title: "Personal Portfolio",
  //   description: "This very website! Built with Next.js, TypeScript, and Tailwind CSS to showcase my work and personality.",
  //   tags: ["Next.js", "TypeScript", "Tailwind"],
  //   status: "Live",
  //   emoji: "💻",
  //   image: "/projects/portfolio.png",
  //   githubUrl: "https://github.com/FionaKP/personal-site",
  // },
  {
    title: "Radio-to-Text Interface",
    description: "Tore apart a spiderman radio set and rerouted its audio through an ESP microcontroller to stream sound over serial and transcribe it into text using speech-to-text.",
    tags: ["ESP32", "Embedded Systems", "Serial I/O", "Speech-to-Text"],
    status: "Prototype",
    emoji: "📻",
    image: "/projects/radio-to-text.jpeg",
    githubUrl: "https://github.com/FionaKP/radio-to-text",
  },
  {
    title: "Autonomous Maze Navigation Robot",
    description: "Autonomous navigation system for TurtleBot robot using ROS and SLAM algorithms to map and navigate unknown maze environments, implementing sensor fusion techniques for real-time localization.",
    tags: ["Python", "SLAM", "Robotics", "ROS", "Kalman Filter"],
    status: "Completed",
    emoji: "📄",
    image: "/projects/map.png",
    githubUrl: "https://github.com/RBE300X-Lab/RBE3002_D25_Team07/",
  },
  {
    title: "Sports Injury Recovery Model",
    description: "Designed and built a dual-regression supervised learning system on sports injury data to predict recovery timelines and compare treatment methods, using end-to-end data preprocessing, feature engineering, and cross-validated model tuning.",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Regression Models",],
    status: "Completed",
    emoji: "🔬",
    image: "/projects/model.png",
    githubUrl: "https://github.com/CraterMore/sports-injury-recovery-prediction",
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
              {/* Project Image or Emoji Fallback */}
              <div className="h-40 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-5xl opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-300">
                    {project.emoji}
                  </span>
                )}
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

                <div className="flex items-center justify-between">
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

                  {/* Project Links */}
                  {(project.websiteUrl || project.githubUrl) && (
                    <div className="flex gap-2 ml-2 shrink-0">
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-[#1e3a5f] transition-colors"
                          aria-label={`Visit ${project.title} website`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-[#1e3a5f] transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
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
