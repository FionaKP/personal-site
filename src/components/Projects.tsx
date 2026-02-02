"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Project = {
  title: string;
  description: string;
  extendedDescription: string;
  tags: string[];
  status: "Live" | "In Progress" | "Prototype" | "Completed";
  emoji: string;
  image?: string; // Path to image in /public folder, e.g., "/projects/my-project.png"
  images?: string[]; // Additional images for the modal carousel
  websiteUrl?: string; // Link to live site
  githubUrl?: string; // Link to GitHub repo
};

const projects: Project[] = [
  {
    title: "Job Search Organizer",
    description: "A Chrome extension that autofills job posting details and saves them to a personal dashboard with multiple views, filters, and status tracking to keep your job search organized.",
    extendedDescription: "Built to solve the chaos of managing dozens of job applications at once. When clicked from any job posting page, the extension automatically extracts key details like company name, role title, location, and description into a popup where the user can review and edit before saving. All saved jobs are accessible through a companion dashboard site with multiple views — card, list, and table — along with filters by status (submitted, interviewing, hired, rejected), company, and date. The goal is to give job seekers a single organized place to track every application without juggling spreadsheets or losing track of where they applied.",
    tags: ["Chrome Extension", "JavaScript", "HTML/CSS"],
    status: "In Progress",
    emoji: "🔍",
    image: "/projects/job-search-popup.png",
    images: ["/projects/job-search-dashboard.png", "/projects/job-search-dashboard-grid.png"],
  },
  {
    title: "YouTube Time Tracker",
    description: "A Chrome extension that tracks and visualizes your YouTube watching habits, helping you stay mindful of your screen time and make intentional choices about content consumption.",
    extendedDescription: "This extension runs in the background while you browse YouTube, logging watch time per video and per channel. It provides a popup dashboard with daily and weekly breakdowns, visual charts of your viewing habits, and insights into which categories and channels consume the most of your time. The idea came from wanting a way to be more intentional about screen time — not to block content, but to make the invisible visible so you can decide if your habits align with how you actually want to spend your time.",
    tags: ["Chrome Extension", "JavaScript", "Productivity"],
    status: "In Progress",
    emoji: "⏱️",
    image: "/projects/youtube-tracker.png",
    images: ["/projects/youtube-tracker-extended.png"],
    // websiteUrl: "https://example.com",
    githubUrl: "https://github.com/FionaKP/youtube-time-tracker",
  },
  {
    title: "Automated Parachute Packing System",
    description: "Senior Major Qualifying Project (MQP) integrating a WidowX-200 robotic arm, ESP32 microcontrollers, and dual cameras into an automated packing solution with ROS 2 architecture.",
    extendedDescription: "This senior capstone project tackles the labor-intensive and precision-critical process of packing parachutes by automating it with robotics. The system uses a WidowX-200 robotic arm controlled through ROS 2 to perform the folding and packing sequence, guided by two cameras for visual feedback and alignment. ESP32 microcontrollers handle low-level sensor and actuator communication, while a finite state machine orchestrates the overall packing workflow. The project involved mechanical design, embedded programming, computer vision integration, and extensive testing to ensure reliable and repeatable packing quality.",
    tags: ["ROS 2", "Python", "Robotics", "Finite State Machine"],
    status: "In Progress",
    emoji: "🪂",
    image: "/projects/parachute-system.jpg",
    githubUrl: "https://github.com/cguanmy11-droid/MQP-Parachute-Packing-Automation-and-Inspection",
  },
  {
    title: "Ecuador Microfinance Platform",
    description: "A responsive web platform for 20+ women's microfinance groups in Cuenca, Ecuador, featuring an amortization calculator, document repository, and directory system.",
    extendedDescription: "Developed as part of an Interactive Qualifying Project (IQP) in Cuenca, Ecuador, this platform serves over 20 women's microfinance groups (cajas de ahorro) by providing tools they previously lacked. The site features an amortization calculator so members can understand loan repayment schedules, a document repository for sharing meeting minutes and financial records, and a directory system connecting the different groups across the region. Extensive UX research — including interviews, surveys, and usability testing with the women in the groups — shaped every design decision to ensure the platform was accessible and genuinely useful for its audience.",
    tags: ["User Experience", "UX Research", "Social Impact", "Wordpress"],
    status: "Live",
    emoji: "💰",
    image: "/projects/iqp_website.jpg",
    websiteUrl: "https://www.cajaswarmiscuenca.com/",
    // githubUrl: "https://github.com/username/repo",
  },
  {
    title: "Personal Portfolio",
    description: "This very website! Built with Next.js, TypeScript, and Tailwind CSS to showcase my work and personality.",
    extendedDescription: "Designed and built from scratch as a place to showcase my projects, experience, and personality. The site is built with Next.js and TypeScript for a fast, modern developer experience, styled with Tailwind CSS for a clean notebook-paper aesthetic. Features include project cards with detailed modal popups, a resume section, and responsive design across all screen sizes. It's an ongoing project that evolves as I add new work and experiment with design ideas.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    status: "Live",
    emoji: "💻",
    image: "/projects/portfolio.png",
    images: ["/projects/portfolio-resume.png"],
    websiteUrl: "https://fionaprendergast.vercel.app/",
    githubUrl: "https://github.com/FionaKP/personal-site",
  },
  {
    title: "Radio-to-Text Interface",
    description: "Tore apart a spiderman radio set and rerouted its audio through an ESP microcontroller to stream sound over serial and transcribe it into text using speech-to-text.",
    extendedDescription: "This project started with a cheap Spider-Man branded FM radio that I disassembled to access the raw audio output. I rerouted the audio signal through an ESP32 microcontroller, which streams the audio data over a serial connection to a computer. On the software side, a speech-to-text engine processes the incoming audio stream in near real-time and outputs a text transcription. The project was an exercise in bridging the physical and digital — combining embedded systems, hardware hacking, serial communication, and speech recognition into one quirky but functional pipeline.",
    tags: ["ESP32", "Embedded Systems", "Serial I/O", "Speech-to-Text"],
    status: "Prototype",
    emoji: "📻",
    image: "/projects/radio-to-text.jpeg",
    githubUrl: "https://github.com/FionaKP/radio-to-text",
  },
  {
    title: "Autonomous Maze Navigation Robot",
    description: "Autonomous navigation system for TurtleBot robot using ROS and SLAM algorithms to map and navigate unknown maze environments, implementing sensor fusion techniques for real-time localization.",
    extendedDescription: "Built an autonomous navigation stack for a TurtleBot platform tasked with exploring and solving unknown maze environments. The system uses SLAM (Simultaneous Localization and Mapping) to build a map of the maze in real time while simultaneously tracking the robot's position within it. Sensor fusion via a Kalman filter combines odometry and LIDAR data for accurate localization. The robot plans paths using frontier-based exploration to efficiently cover unmapped areas, then navigates to a goal once the maze structure is known. All built on ROS with Python, with extensive testing in both simulation and on the physical robot.",
    tags: ["Python", "SLAM", "Robotics", "ROS", "Kalman Filter"],
    status: "Completed",
    emoji: "📄",
    image: "/projects/map.png",
    githubUrl: "https://github.com/RBE300X-Lab/RBE3002_D25_Team07/",
  },
  {
    title: "Sports Injury Recovery Model",
    description: "Designed and built a dual-regression supervised learning system on sports injury data to predict recovery timelines and compare treatment methods, using end-to-end data preprocessing, feature engineering, and cross-validated model tuning.",
    extendedDescription: "This machine learning project tackles the question of how long an athlete's recovery will take and which treatment approach is most effective. Using a dataset of sports injuries, I built a dual-regression pipeline — one model predicts recovery time, while the other compares treatment outcomes. The full pipeline includes data cleaning, feature engineering (encoding injury types, severity levels, and athlete demographics), and cross-validated hyperparameter tuning across multiple regression algorithms. The final models were evaluated on hold-out test sets and the results were analyzed to identify which factors most strongly influence recovery duration.",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Regression Models"],
    status: "Completed",
    emoji: "🔬",
    image: "/projects/model.png",
    githubUrl: "https://github.com/CraterMore/sports-injury-recovery-prediction",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openProject = (project: Project) => {
    setImageIndex(0);
    setSelectedProject(project);
  };

  // All images for the selected project (main image + extras)
  const modalImages = selectedProject
    ? [selectedProject.image, ...(selectedProject.images || [])].filter(
        (img): img is string => !!img
      )
    : [];

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

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
              onClick={() => openProject(project)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
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
      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-gray-800 transition-colors shadow-md"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left: Image Carousel */}
            <div className="md:w-1/2 h-64 md:h-auto bg-[#1e293b] relative flex-shrink-0 md:min-h-[400px]">
              {modalImages.length > 0 ? (
                <>
                  <Image
                    key={modalImages[imageIndex]}
                    src={modalImages[imageIndex]}
                    alt={`${selectedProject.title} - image ${imageIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                  {modalImages.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setImageIndex((prev) =>
                            prev === 0 ? modalImages.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          setImageIndex((prev) =>
                            prev === modalImages.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      {/* Dot indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {modalImages.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setImageIndex(i)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              i === imageIndex
                                ? "bg-white"
                                : "bg-white/40 hover:bg-white/70"
                            }`}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-8xl opacity-50">{selectedProject.emoji}</span>
                </div>
              )}
            </div>

            {/* Right: Details */}
            <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
              <div className="flex items-start justify-between gap-2 mb-4">
                <h3 className="font-[family-name:var(--font-roboto)] font-bold text-2xl text-[#1e3a5f] leading-tight">
                  {selectedProject.title}
                </h3>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    selectedProject.status === "Live"
                      ? "bg-green-100 text-green-700"
                      : selectedProject.status === "In Progress"
                      ? "bg-amber-100 text-amber-700"
                      : selectedProject.status === "Completed"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {selectedProject.status}
                </span>
              </div>

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {selectedProject.extendedDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(selectedProject.websiteUrl || selectedProject.githubUrl) && (
                <div className="flex gap-3">
                  {selectedProject.websiteUrl && (
                    <a
                      href={selectedProject.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a5f] text-white rounded-lg text-sm font-medium hover:bg-[#2d5a8a] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visit Site
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
