// Hand-drawn SVG elements for adding personality

export function HandDrawnUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute -bottom-2 left-0 w-full h-3 ${className}`}
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M2 8.5C20 3.5 40 10 60 6C80 2 100 9 120 5.5C140 2 160 8 180 4C190 2 198 6 198 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandDrawnCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <ellipse
        cx="50"
        cy="50"
        rx="45"
        ry="42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 6"
        transform="rotate(-3 50 50)"
      />
    </svg>
  );
}

export function HandDrawnArrow({
  direction = "right",
  className = ""
}: {
  direction?: "right" | "left" | "up" | "down";
  className?: string;
}) {
  const rotations = {
    right: "rotate(0)",
    down: "rotate(90)",
    left: "rotate(180)",
    up: "rotate(270)",
  };

  return (
    <svg
      className={`w-12 h-8 ${className}`}
      viewBox="0 0 50 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: rotations[direction] }}
    >
      <path
        d="M2 15C10 13 20 17 30 14C35 13 40 15 45 15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M38 8C42 12 46 14 48 15C46 16 42 18 38 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function HandDrawnStar({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L14 8L20 9L15.5 13.5L17 20L12 16.5L7 20L8.5 13.5L4 9L10 8L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function SketchyBorder({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Top edge */}
      <path
        d="M5 8C50 5 100 10 150 6C200 3 250 9 300 5C350 2 395 7 395 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Right edge */}
      <path
        d="M393 10C396 80 390 150 394 220C397 290 391 360 395 430C393 470 395 490 395 492"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Bottom edge */}
      <path
        d="M395 493C340 496 280 490 220 494C160 497 100 491 40 495C15 496 5 493 5 493"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Left edge */}
      <path
        d="M7 492C4 420 10 350 6 280C3 210 9 140 5 70C7 30 5 10 5 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Annotation({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-[family-name:var(--font-caveat)] text-xl ${className}`}>
      {children}
    </span>
  );
}

export function HandwrittenNote({
  children,
  arrow = false,
  arrowDirection = "left",
  className = "",
}: {
  children: React.ReactNode;
  arrow?: boolean;
  arrowDirection?: "right" | "left" | "up" | "down";
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      {arrow && arrowDirection === "left" && (
        <HandDrawnArrow direction="left" className="text-amber-500" />
      )}
      <span className="font-[family-name:var(--font-caveat)] text-xl text-amber-600">
        {children}
      </span>
      {arrow && arrowDirection === "right" && (
        <HandDrawnArrow direction="right" className="text-amber-500" />
      )}
      {arrow && arrowDirection === "up" && (
        <HandDrawnArrow direction="up" className="text-amber-500" />
      )}
      {arrow && arrowDirection === "down" && (
        <HandDrawnArrow direction="down" className="text-amber-500" />
      )}
    </div>
  );
}

export function SparkleLines({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top left sparkle lines */}
      <path
        d="M50 60 L30 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M70 45 L60 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M45 85 L20 75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Top right sparkle lines */}
      <path
        d="M350 60 L370 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M330 45 L340 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M355 85 L380 75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Bottom left sparkle lines */}
      <path
        d="M50 340 L30 360"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M70 355 L60 375"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Bottom right sparkle lines */}
      <path
        d="M350 340 L370 360"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M330 355 L340 375"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Small stars/dots */}
      <circle cx="85" cy="35" r="2" fill="currentColor" />
      <circle cx="315" cy="35" r="2" fill="currentColor" />
      <circle cx="25" cy="100" r="1.5" fill="currentColor" />
      <circle cx="375" cy="100" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function CornerDoodles({ className = "" }: { className?: string }) {
  return (
    <>
      {/* Top left corner doodle */}
      <svg
        className={`absolute top-4 left-4 w-16 h-16 ${className}`}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 55 C5 30 30 5 55 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M10 45 C10 25 25 10 45 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {/* Top right corner doodle */}
      <svg
        className={`absolute top-4 right-4 w-16 h-16 ${className}`}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55 55 C55 30 30 5 5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M50 45 C50 25 35 10 15 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {/* Bottom left corner doodle */}
      <svg
        className={`absolute bottom-4 left-4 w-16 h-16 ${className}`}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5 C5 30 30 55 55 55"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M10 15 C10 35 25 50 45 50"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {/* Bottom right corner doodle */}
      <svg
        className={`absolute bottom-4 right-4 w-16 h-16 ${className}`}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55 5 C55 30 30 55 5 55"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M50 15 C50 35 35 50 15 50"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </>
  );
}

export function SharpCornerBrackets({ className = "" }: { className?: string }) {
  return (
    <>
      {/* Top left bracket - sketchy hand-drawn style */}
      <svg
        className={`absolute top-4 left-4 w-14 h-14 ${className}`}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 46 Q6 25 8 6 Q25 7 46 6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Top right bracket - sketchy hand-drawn style */}
      <svg
        className={`absolute top-4 right-4 w-14 h-14 ${className}`}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6 Q25 7 44 6 Q43 25 44 46"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Bottom left bracket - sketchy hand-drawn style */}
      <svg
        className={`absolute bottom-4 left-4 w-14 h-14 ${className}`}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 4 Q6 25 8 44 Q25 43 46 44"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Bottom right bracket - sketchy hand-drawn style */}
      <svg
        className={`absolute bottom-4 right-4 w-14 h-14 ${className}`}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44 4 Q43 25 44 44 Q25 43 4 44"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </>
  );
}

export function SmileyFace({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left eye */}
      <circle cx="8" cy="9" r="1.5" fill="currentColor" />
      {/* Right eye */}
      <circle cx="16" cy="9" r="1.5" fill="currentColor" />
      {/* Smile */}
      <path
        d="M7 14 Q12 19 17 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function PaperAirplaneWithTrail({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`${className}`}
      viewBox="0 0 300 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dotted loop trail coming from left */}
      <path
        d="M-20 60 Q30 60 50 40 Q70 20 100 35 Q130 50 120 70 Q110 90 150 75 Q190 60 220 70 Q250 80 270 70"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 6"
        fill="none"
        opacity="0.7"
      />
      {/* Hand-drawn paper airplane doodle - tip pointing right and slightly down */}
      <g transform="translate(268, 68)">
        {/* Main body - paper airplane shape */}
        <path
          d="M0 -6 Q2 -5 26 4 Q24 4 0 6 Q1 0 0 -6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Center fold line */}
        <path
          d="M2 0 Q14 1 24 4"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* Top wing crease */}
        <path
          d="M4 -4 Q12 -2 20 2"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

export function SketchedCamera({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Camera body - sketchy rectangle */}
      <path
        d="M3 9 Q3.5 8.5 5 9 Q5.5 7 7 7 Q8 5 10 5 Q12 4.5 14 5 Q16 5 17 7 Q18.5 7 19 9 Q21 8.5 21 9 Q21.5 12 21 15 Q21 18.5 21 18 Q20.5 18.5 19 18 Q12 18.5 5 18 Q3.5 18 3 18 Q2.5 15 3 12 Q2.5 9.5 3 9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Lens - sketchy circle */}
      <circle
        cx="12"
        cy="12"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="2 1"
      />
      {/* Inner lens detail */}
      <circle
        cx="12"
        cy="12"
        r="1.5"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.6"
        fill="none"
      />
    </svg>
  );
}
