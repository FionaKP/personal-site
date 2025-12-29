import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Fiona Prendergast",
  description: "A collection of photos from my adventures",
};

const photos = [
  { src: "/gallery/Cliffs_of_moher.jpg", alt: "Cliffs of Moher" },
  { src: "/gallery/Englishman in New York (1).jpg", alt: "Englishman in New York" },
  { src: "/gallery/Vendor.jpg", alt: "Vendor" },
  { src: "/gallery/man.jpg", alt: "Man" },
  { src: "/gallery/sk8.jpg", alt: "Skate" },
  { src: "/gallery/swing.jpg", alt: "Swing" },
  { src: "/gallery/baby goose.jpg", alt: "Baby goose" },
  { src: "/gallery/flags.JPG", alt: "Flags" },
  { src: "/gallery/goulding_sunset.JPG", alt: "Goulding sunset" },
  { src: "/gallery/photo (3).jpg", alt: "Winding Road" },
  { src: "/gallery/Church.jpg", alt: "Church" },
  { src: "/gallery/little_theatre.jpg", alt: "Little Theatre" },
  { src: "/gallery/bw_lego.jpg", alt: "Lego People" },
  { src: "/gallery/car_reflection.JPG", alt: "Car reflection" },
  { src: "/gallery/cones.jpg", alt: "Cones" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#f5f0eb] pt-20">
      {/* Speckled paper texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-[family-name:var(--font-caveat)] text-2xl text-amber-600">
            you found it!
          </span>
          <h1 className="font-[family-name:var(--font-roboto)] font-black text-4xl sm:text-5xl text-[#1e3a5f] mt-2">
            Photo Gallery
          </h1>
          <p className="mt-4 text-gray-600 max-w-lg mx-auto">
            A little collection of moments I've captured along the way.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-4 group"
            >
              <div className="overflow-hidden rounded-lg shadow-lg bg-white p-2 pb-6 transition-all duration-300 ease-out group-hover:shadow-xl group-hover:-translate-y-1 group-hover:rotate-[0.5deg]">
                {/* Polaroid-style frame */}
                <div className="overflow-hidden rounded">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-caveat)] text-xl text-[#1e3a5f] hover:text-amber-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            back to the main show
          </Link>
        </div>
      </div>
    </div>
  );
}
