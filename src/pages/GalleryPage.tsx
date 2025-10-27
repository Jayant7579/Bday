import { Navigation } from "@/components/Navigation";
import { MusicPlayer } from "@/components/MusicPlayer";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const images = [
  "/DSC_1311.JPG",
  "/DSC00204.JPG",
  "/DSC00206.JPG",
  "/l0.jpg",
  "/l1.jpg",
  "/l2.jpg",
  "/l3.jpg",
  "/l4.jpg",
  "/l5.jpg",
  "/l6.jpg",
  "/l8.jpg",
  "/l9.jpg",
  "/l10.jpg",
  "/l11.jpg",
  "/l12.jpg",
  "/l13.jpg",
  "/l14.jpg",
  "/l15.jpg",
  "/l16.jpg",
  "/l17.jpg",
  "/l18.jpg",
  "/l19.jpg",
  "/l20.jpg",
  "/l21.jpg",
  "/l22.jpg",
  "/l23.jpg",
  "/l24.jpg",
  "/l25.jpg",
  "/l27.jpg",
  "/l28.jpg",
  "/l29.jpg",
  "/l30.jpg",
  "/l31.jpg",
  "/l32.jpg",
  "/l33.jpg",
  "/l34.jpg",
  "/l35.jpg",
  "/l36.jpg",
  "/l37.jpg",
  "/l38.jpg",
  "/l39.jpg",
];

const GalleryPage = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#FFA07A', '#FFB6C1', '#DDA0DD'],
        gravity: 0.5,
        scalar: 0.7
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-celebration-cream dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main className="pt-24 px-4 container mx-auto">
        <section className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block px-4 py-1 bg-celebration-rose/10 dark:bg-celebration-rose/20 rounded-full text-celebration-rose dark:text-celebration-cream text-sm font-medium animate-fade-down">
            Photo Gallery
          </span>
          <h1 className="celebration-text dark:text-celebration-cream animate-scale-up [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            Madam Ji ki Photos💕
          </h1>
          <p className="celebration-subtext dark:text-gray-300 max-w-2xl mx-auto animate-fade-up">
            Dekho Dekho...🎀
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
            {images.map((src, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg celebration-card translate-z-20 dark:bg-gray-800/80 dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)]"
                style={{ 
                  transform: `perspective(1000px) rotateX(${Math.random() * 5}deg) rotateY(${Math.random() * 5}deg)`,
                  transition: 'transform 0.5s ease-out'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.transform = `perspective(1000px) rotateX(${Math.random() * 5}deg) rotateY(${Math.random() * 5}deg)`;
                }}
              >
                <div className="absolute inset-0 bg-black/20 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <MusicPlayer />
    </div>
  );
};

export default GalleryPage;