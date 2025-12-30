import Link from "next/link";

const experiences = [
  {
    title: "Integrations Software Engineering Intern",
    company: "Vestmark, Inc.",
    period: "Jun 2025 - Aug 2025",
    description: "Refactored legacy stock exchange code in Java, designed AWS migration proof-of-concept for custodial adapter systems using EC2, VPN, and SFTP.",
    type: "work",
  },
  {
    title: "Embedded Systems Engineering Intern",
    company: "DCS Corporation",
    period: "Jun 2024 - Aug 2024",
    description: "Contributed to multi-million dollar defense project. Led development of GNSS simulation system with Python GUI for hardware integration testing.",
    type: "work",
  },
  {
    title: "Student Teaching Assistant",
    company: "WPI Computer Science Department",
    period: "Aug 2024 - Present",
    description: "Teaching Operating Systems and Human-Computer Interaction. Providing guidance on synchronization, memory management, and usability design.",
    type: "work",
  },
  {
    title: "B.S. Computer Science & Robotics Engineering",
    company: "Worcester Polytechnic Institute",
    period: "2022 - May 2026",
    description: "4.0 GPA | 7/7 Dean's List | NEWMAC Academic All-Conference | Presidential Merit Scholar",
    type: "education",
  },
];

const skills = {
  "Languages": ["C/C++", "Python", "Java", "SQL/MySQL", "HTML/CSS"],
  "Technologies": ["React", "Next.js", "AWS", "Git", "ROS 2"],
  "Engineering": ["Circuit Design", "Solidworks", "Embedded Systems", "Robotics"],
  "Other": ["Agile", "Leadership", "Advanced Spanish"],
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Background
          </span>
          <h2 className="font-[family-name:var(--font-roboto)] font-bold text-4xl sm:text-5xl text-[#1e3a5f] mt-2">
            Experience & Skills
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <h3 className="font-[family-name:var(--font-roboto)] font-bold text-2xl text-[#1e3a5f] mb-8">
              Journey So Far
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-amber-200">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${
                    exp.type === "education" ? "bg-[#1e3a5f]" : "bg-amber-400"
                  }`} />

                  <div className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <span className="text-sm text-amber-500 font-medium">
                      {exp.period}
                    </span>
                    <h4 className="font-[family-name:var(--font-roboto)] font-bold text-lg text-[#1e3a5f] mt-1">
                      {exp.title}
                    </h4>
                    <p className="text-gray-500 text-sm mb-2">{exp.company}</p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-[family-name:var(--font-roboto)] font-bold text-2xl text-[#1e3a5f] mb-8">
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-semibold text-gray-700 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-[#1e3a5f] text-white rounded-lg text-sm font-medium hover:bg-[#2d5a8a] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8a] rounded-2xl text-white">
              <h4 className="font-[family-name:var(--font-roboto)] font-bold text-xl mb-2">
                Want the full picture?
              </h4>
              <p className="text-white/80 mb-4">
                View my complete resume with all projects, experience, and leadership roles.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1e3a5f] rounded-lg font-semibold hover:bg-amber-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  View Full Resume
                </Link>
                <a
                  href="/resume/Fiona_Prendergast_SW_Robotics_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-[#1e3a5f] rounded-lg font-semibold hover:bg-amber-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
