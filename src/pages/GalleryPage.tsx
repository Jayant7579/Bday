import { Navigation } from "@/components/Navigation";
import { MusicPlayer } from "@/components/MusicPlayer";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const images = [
  "src/Assests/Gallery/DSC_1311.JPG",
  "src/Assests/Gallery/DSC00204.JPG",
  "src/Assests/Gallery/DSC00206.JPG",
  "src/Assests/Gallery/l0.jpg",
  "src/Assests/Gallery/l1.jpg",
  "src/Assests/Gallery/l2.jpg",
  "src/Assests/Gallery/l3.jpg",
  "src/Assests/Gallery/l4.jpg",
  "src/Assests/Gallery/l5.jpg",
  "src/Assests/Gallery/l6.jpg",
  "src/Assests/Gallery/l8.jpg",
  "src/Assests/Gallery/l9.jpg",
  "src/Assests/Gallery/l10.jpg",
  "src/Assests/Gallery/l11.jpg",
  "src/Assests/Gallery/l12.jpg",
  "src/Assests/Gallery/l13.jpg",
  "src/Assests/Gallery/l14.jpg",
  "src/Assests/Gallery/l15.jpg",
  "src/Assests/Gallery/l16.jpg",
  "src/Assests/Gallery/l17.jpg",
  "src/Assests/Gallery/l18.jpg",
  "src/Assests/Gallery/l19.jpg",
  "src/Assests/Gallery/l20.jpg",
  "src/Assests/Gallery/l21.jpg",
  "src/Assests/Gallery/l22.jpg",
  "src/Assests/Gallery/l23.jpg",
  "src/Assests/Gallery/l24.jpg",
  "src/Assests/Gallery/l25.jpg",
  "src/Assests/Gallery/l27.jpg",
  "src/Assests/Gallery/l28.jpg",
  "src/Assests/Gallery/l29.jpg",
  "src/Assests/Gallery/l30.jpg",
  "src/Assests/Gallery/l31.jpg",
  "src/Assests/Gallery/l32.jpg",
  "src/Assests/Gallery/l33.jpg",
  "src/Assests/Gallery/l34.jpg",
  "src/Assests/Gallery/l35.jpg",
  "src/Assests/Gallery/l36.jpg",
  "src/Assests/Gallery/l37.jpg",
  
  
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