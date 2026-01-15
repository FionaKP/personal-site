import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | Fiona Prendergast",
  description: "Full resume of Fiona Prendergast - Software & Robotics Engineering student at WPI",
};

const workExperience = [
  {
    title: "Product Development Intern",
    company: "Blueleaf Wealth Inc.",
    period: "Jun 2023 - Present",
    bullets: [
      "Built and deployed client financial app on live Expo Go deployment pipeline using React Native, implementing custom visual themes, graphics from live financial data API, industry standard authentication, and custom gesture interactions",
      "Designed a custom API from scratch to support financial advisory software, utilizing Postman to create a mock API that enabled parallel development workflows",
      "Developed a preliminary front-end interface using the Next.js React framework to demonstrate API integration and functionality",
      "Analyzed client feedback to diagnose UX/UI issues and implemented changes to data management and financial reporting application across both web and mobile",
    ],
  },
  {
    title: "Integrations Software Engineering Intern",
    company: "Vestmark, Inc.",
    period: "Jun 2025 - Aug 2025",
    bullets: [
      "Refactored legacy stock exchange code in Java to reduce cognitive complexity, achieving 100% unit test coverage",
      "Designed and deployed AWS migration proof-of-concept for custodial adapter systems, successfully migrating from on-premises data center to cloud infrastructure using EC2, VPN, and SFTP configurations",
      "Created comprehensive technical documentation and setup guides that became team resources",
    ],
  },
  {
    title: "Embedded Systems Engineering Intern",
    company: "DCS Corporation",
    period: "Jun 2024 - Aug 2024",
    bullets: [
      "Contributed to a multi-million dollar project during the integration phase of the lifecycle",
      "Developed original coverage-based unit tests from scratch and peer reviewed other developers' code",
      "Led the effort to develop simulation code replicating a Global Navigation Satellite System (GNSS) via serial data and built responsive Python GUI to connect simulation application with production hardware",
      "Coordinated efforts to ensure simulation testing tool fulfilled requirements for verification",
    ],
  },
  {
    title: "Student Teaching Assistant",
    company: "WPI Computer Science Department",
    period: "Aug 2024 - Present",
    subtitle: "Operating Systems, Human-Computer Interaction",
    bullets: [
      "Provided clear and concise explanations of concepts such as synchronization, process and memory management, and usability interface design during office hours and in graded written feedback",
      "Worked closely with professors to align instructional methods and ensure effective course content delivery",
    ],
  },
];

const roboticsProjects = [
  {
    title: "Automated Robotic Parachute Packing System",
    subtitle: "Senior Major Qualifying Project",
    period: "Present",
    bullets: [
      "Integrated WidowX-200 robotic arm, ESP32 microcontroller, dual cameras, and custom mechanical systems into cohesive automated packing solution with coordinated multi-agent control",
      "Designed modular robotics architecture with 5 custom ROS 2 packages featuring asynchronous action servers, service-based coordination, and comprehensive launch system supporting test/simulation/production modes",
      "Developed forward/inverse kinematics solutions and trajectory planning for 5-DOF robotic arm with Cartesian waypoint generation and real-time motion control via Interbotix API",
    ],
  },
  {
    title: "Autonomous Maze Navigation",
    subtitle: "Unified Robotics Class Final Project",
    period: "Spring 2025",
    bullets: [
      "Programmed autonomous navigation system for TurtleBot robot using ROS and SLAM algorithms to map and navigate unknown maze environments, implementing sensor fusion techniques for real-time localization",
      "Developed position estimation pipeline integrating Kalman filtering with lidar and odometry data for accurate dead reckoning and landmark-based localization in a 3-person team",
    ],
  },
  {
    title: "Color Sorting Robotic Manipulator",
    subtitle: "Unified Robotics Class Final Project",
    period: "Fall 2024",
    bullets: [
      "Programmed kinematic control algorithms and trajectory planning in MATLAB using forward, inverse, and velocity kinematics to move the robotic gripper with precision",
      "Utilized a USB webcam vision system to detect and classify objects by color, including lens distortion and coordinate conversion into 3D real world coordinates",
    ],
  },
];

const csProjects = [
  {
    title: "Machine Learning Sports Injury Prediction Model",
    subtitle: "Machine Learning Class Final Project",
    period: "Fall 2025",
    bullets: [
      "Designed and implemented dual regression model system to predict optimal treatment methods and recovery timelines, applying supervised learning techniques to solve a multi-output prediction problem",
      "Consolidated and preprocessed multi-source data through feature selection and encoding strategies; conducted exploratory analysis to identify key predictive relationships and data distribution patterns",
      "Optimized model performance through hyperparameter tuning and cross-validation techniques, balancing model complexity with generalization to prevent overfitting",
    ],
  },
  {
    title: "Ecuadorian Women's Finance and Microlending Platform",
    subtitle: "Research Project",
    period: "Spring 2025",
    bullets: [
      "Designed and developed a responsive web platform for 20+ women's microfinance groups (cajas) in Cuenca, Ecuador, featuring an amortization calculator, document repository, and directory system to facilitate financial empowerment and community engagement",
      "Conducted user research interviews with microfinance group members and collaborated with the Vice Mayor's office to validate website requirements and ensure the platform meets the needs of women entrepreneurs in the community",
    ],
  },
  {
    title: "AI Resume Grader",
    subtitle: "Artificial Intelligence Class Final Project",
    period: "Fall 2024",
    bullets: [
      "Developed an AI-based resume evaluator tool application using various APIs for robust input and format handling and generating unique recommendations for resume improvement",
      "Implemented a TF-IDF vectorizer and cosine similarity algorithm in Python to analyze and evaluate uploaded data with a large established dataset and generated a score specific to the inputted data and category for each resume section",
    ],
  },
  {
    title: "Student Research Connect Website",
    subtitle: "Software Engineering Class Final Project",
    period: "Spring 2024",
    bullets: [
      "Built a full stack Python Flask web application and backend using MySQL for students to find and apply to research opportunities on campus and for faculty to list and hire qualified candidates for their open positions",
      "Built dynamic front end web application utilizing Bootstrap framework on top of HTML, CSS and JavaScript",
    ],
  },
];

const leadership = [
  {
    title: "WPI Varsity Women's Soccer",
    roles: ["Team Captain (Current)"],
    period: "Aug 2022 – Present",
  },
  {
    title: "Alpha Xi Delta Women's Fraternity",
    roles: ["Finance Director (Current)", "Academic Achievement Director"],
    period: "Nov 2022 – Present",
  },
  {
    title: "Tau Beta Pi Engineering Honor Society",
    roles: ["Member"],
    period: "Nov 2024 – Present",
  },
  {
    title: "Rho Lambda National Sorority Leadership Honor Society",
    roles: ["Member"],
    period: "Sep 2024 – Present",
  },
  {
    title: "Student-Athlete Advisory Committee (SAAC)",
    roles: ["Committee Chair (Current), Team Representative"],
    period: "Aug 2023 – Present",
  },
  {
    title: "WPI Women's Rugby",
    roles: ["Team Member"],
    period: "Jan 2023 – Present",
  },
  {
    title: "Fellowship of Christian Athletes",
    roles: ["Executive Board Member"],
    period: "Sep 2022 – Present",
  },
  {
    title: "Eagle Scout, Scouts BSA",
    roles: ["Founding member of female Troop 65"],
    period: "2018 – 2022",
  },
];

const skills = [
  { category: "Languages", items: ["C/C++", "Python", "Java", "SQL/MySQL", "HTML/CSS"] },
  { category: "Technologies", items: ["React", "Next.js", "AWS Cloud Deployment", "Git", "Agile"] },
  { category: "Engineering", items: ["Circuit Design", "Solidworks", "ROS 2", "Embedded Systems"] },
  { category: "Languages", items: ["Advanced Spanish"] },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="font-[family-name:var(--font-roboto)] font-black text-4xl sm:text-5xl">
                Fiona Prendergast
              </h1>
              <p className="mt-2 text-white/80 text-lg">
                Software & Robotics Engineering Student
              </p>
              <a
                href="/resume/Fiona_Prendergast_SW_Robotics_Resume.pdf"
                download
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-amber-400 text-[#1e3a5f] rounded-lg font-semibold hover:bg-amber-300 transition-colors text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download PDF
              </a>
            </div>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <a href="mailto:fkprendergast@wpi.edu" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                fkprendergast@wpi.edu
              </a>
              <a href="tel:978-505-8077" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (978) 505-8077
              </a>
              <a href="https://www.linkedin.com/in/fiona-prendergast/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/FionaKP" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Education */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-roboto)] font-bold text-2xl text-[#1e3a5f] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </span>
            Education
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="font-bold text-lg text-[#1e3a5f]">Worcester Polytechnic Institute</h3>
                <p className="text-gray-600">B.S. in Computer Science and Robotics Engineering</p>
              </div>
              <div className="text-right">
                <p className="text-amber-500 font-medium">Expected May 2026</p>
                <p className="text-[#1e3a5f] font-bold">GPA: 4.0/4.0</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p><span className="font-medium text-gray-700">Relevant Coursework:</span> Unified Robotics Series, Machine Learning, Control Engineering, Software Engineering, Database Systems I & II, Drivetrain Systems,  Artificial Intelligence, Algorithms, Human Robot Interaction, Software Radio Design</p>
              <p><span className="font-medium text-gray-700">Academic Honors:</span> 7/7 Dean's List Semesters, 3 years NEWMAC Academic All-Conference, 4x WPI Presidential Merit Scholarship, 4x Lesley Small Scholarship, Jean Leider Engineering Scholarship</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-roboto)] font-bold text-2xl text-[#1e3a5f] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </span>
            Skills
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex flex-wrap gap-2">
              {["C/C++", "Python", "Java", "Git", "AWS Cloud Deployment", "Agile", "HTML/CSS", "SQL/MySQL", "React", "Circuit Design", "Solidworks", "Advanced Spanish", "ROS 2", "Next.js"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-[#1e3a5f] text-white rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-roboto)] font-bold text-2xl text-[#1e3a5f] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            Work Experience
          </h2>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-[#1e3a5f]">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                    {job.subtitle && <p className="text-gray-500 text-sm italic">{job.subtitle}</p>}
                  </div>
                  <p className="text-amber-500 font-medium text-sm whitespace-nowrap">{job.period}</p>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-600 text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-300 before:rounded-full">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Robotics Projects */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-roboto)] font-bold text-2xl text-[#1e3a5f] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </span>
            Robotics Projects
          </h2>
          <div className="space-y-6">
            {roboticsProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-[#1e3a5f]">{project.title}</h3>
                    <p className="text-gray-500 text-sm italic">{project.subtitle}</p>
                  </div>
                  <p className="text-amber-500 font-medium text-sm whitespace-nowrap">{project.period}</p>
                </div>
                <ul className="space-y-2">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-600 text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-300 before:rounded-full">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CS Projects */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-roboto)] font-bold text-2xl text-[#1e3a5f] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            Software Projects
          </h2>
          <div className="space-y-6">
            {csProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-[#1e3a5f]">{project.title}</h3>
                    <p className="text-gray-500 text-sm italic">{project.subtitle}</p>
                  </div>
                  <p className="text-amber-500 font-medium text-sm whitespace-nowrap">{project.period}</p>
                </div>
                <ul className="space-y-2">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-600 text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-300 before:rounded-full">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Activities */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-roboto)] font-bold text-2xl text-[#1e3a5f] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </span>
            Leadership & Involvements
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {leadership.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-[#1e3a5f]">{item.title}</h3>
                  <p className="text-amber-500 text-xs font-medium whitespace-nowrap">{item.period}</p>
                </div>
                <ul className="space-y-1">
                  {item.roles.map((role, i) => (
                    <li key={i} className="text-gray-600 text-sm">{role}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#1e3a5f] hover:text-amber-500 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
