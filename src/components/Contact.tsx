import { HandDrawnUnderline, HandDrawnStar, SmileyFace } from "./HandDrawn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-16 left-8 text-amber-400/30 transform rotate-12 hidden sm:block">
        <HandDrawnStar className="w-8 h-8" />
      </div>
      <div className="absolute top-24 right-12 text-[#1e3a5f]/20 transform -rotate-6 hidden sm:block">
        <HandDrawnStar className="w-6 h-6" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="font-[family-name:var(--font-caveat)] text-2xl text-amber-600 flex items-center justify-center gap-2">
            Let's Connect! <SmileyFace className="w-6 h-6 inline-block" />
          </span>
          <div className="relative inline-block">
            <h2 className="font-[family-name:var(--font-roboto)] font-bold text-4xl sm:text-5xl text-[#1e3a5f] mt-2">
              Get In Touch
            </h2>
            <HandDrawnUnderline className="text-amber-400 h-4 -bottom-1" />
          </div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you want to discuss a project, have a question, or just want to say hi.
            I'd love to hear from you!
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-[family-name:var(--font-roboto)] font-bold text-xl text-[#1e3a5f]">
                Reach out directly
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:fkprendergast@wpi.edu"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center group-hover:bg-amber-400 transition-colors">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e3a5f]">Email</p>
                    <p className="text-gray-600">fkprendergast@wpi.edu</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/fiona-prendergast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center group-hover:bg-amber-400 transition-colors">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e3a5f]">LinkedIn</p>
                    <p className="text-gray-600">Connect with me</p>
                  </div>
                </a>

                <a
                  href="https://github.com/FionaKP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center group-hover:bg-amber-400 transition-colors">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e3a5f]">GitHub</p>
                    <p className="text-gray-600">Check out my code</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Message - Under Construction */}
            <div className="space-y-6 relative">
              <h3 className="font-[family-name:var(--font-roboto)] font-bold text-xl text-[#1e3a5f]">
                Or send a quick message
              </h3>

              {/* Form with blur */}
              <div className="relative">
                <form className="space-y-4 blur-[2px] pointer-events-none select-none">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      disabled
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-100"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      disabled
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-100"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      disabled
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-100 resize-none"
                      placeholder="What's on your mind?"
                    />
                  </div>
                  <button
                    type="button"
                    disabled
                    className="w-full px-6 py-3 bg-gray-400 text-white rounded-lg font-semibold cursor-not-allowed"
                  >
                    Send Message
                  </button>
                </form>

                {/* Construction overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform -rotate-3 border-2 border-dashed border-amber-400">
                    {/* Construction sign */}
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 mx-auto text-amber-500 mb-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Traffic cone */}
                        <path d="M9.5 21h5M12 3l-3.5 14h7L12 3z" />
                        <path d="M10 8.5h4M9.5 12h5" />
                      </svg>
                      <p className="font-[family-name:var(--font-caveat)] text-2xl text-[#1e3a5f] mb-1">
                        Construction Zone!
                      </p>
                      <p className="text-gray-500 text-sm">
                        For now, just email me directly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
