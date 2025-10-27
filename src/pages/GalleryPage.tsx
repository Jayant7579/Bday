import { Navigation } from "@/components/Navigation";
import { MusicPlayer } from "@/components/MusicPlayer";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const images = [
  "Bday/public/DSC_1311.JPG",
  "Bday/public/DSC00204.JPG",
  "Bday/public/DSC00206.JPG",
  "Bday/public/l0.jpg",
  "Bday/public/l1.jpg",
  "Bday/public/l2.jpg",
  "Bday/public/l3.jpg",
  "Bday/public/l4.jpg",
  "Bday/public/l5.jpg",
  "Bday/public/l6.jpg",
  "Bday/public/l8.jpg",
  "Bday/public/l9.jpg",
  "Bday/public/l10.jpg",
  "Bday/public/l11.jpg",
  "Bday/public/l12.jpg",
  "Bday/public/l13.jpg",
  "Bday/public/l14.jpg",
  "Bday/public/l15.jpg",
  "Bday/public/l16.jpg",
  "Bday/public/l17.jpg",
  "Bday/public/l18.jpg",
  "Bday/public/l19.jpg",
  "Bday/public/l20.jpg",
  "Bday/public/l21.jpg",
  "Bday/public/l22.jpg",
  "Bday/public/l23.jpg",
  "Bday/public/l24.jpg",
  "Bday/public/l25.jpg",
  "Bday/public/l27.jpg",
  "Bday/public/l28.jpg",
  "Bday/public/l29.jpg",
  "Bday/public/l30.jpg",
  "Bday/public/l31.jpg",
  "Bday/public/l32.jpg",
  "Bday/public/l33.jpg",
  "Bday/public/l34.jpg",
  "Bday/public/l35.jpg",
  "Bday/public/l36.jpg",
  "Bday/public/l37.jpg",

  "Bday/public/l38.jpg",
  "Bday/public/l39.jpg",
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