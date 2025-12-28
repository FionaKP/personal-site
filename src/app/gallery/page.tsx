import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Fiona Prendergast",
  description: "A collection of photos from my adventures",
};

const photos = [
  { src: "/gallery/little_theatre.jpg", alt: "Little Theatre" },
  { src: "/gallery/bw_lego.jpg", alt: "Black and white lego" },
  { src: "/gallery/car_reflection.JPG", alt: "Car reflection" },
  { src: "/gallery/cones.jpg", alt: "Cones" },
  { src: "/gallery/flags.JPG", alt: "Flags" },
  { src: "/gallery/goulding_sunset.JPG", alt: "Goulding sunset" },
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
              className="relative break-inside-avoid group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white p-2">
                {/* Polaroid-style frame */}
                <div className="relative aspect-[4/3] overflow-hidden rounded">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="py-3 text-center">
                  <span className="font-[family-name:var(--font-caveat)] text-lg text-gray-600">
                    {photo.alt}
                  </span>
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
