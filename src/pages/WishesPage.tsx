import { Navigation } from "@/components/Navigation";
import { MusicPlayer } from "@/components/MusicPlayer";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const wishes = [
  {
    name: "🥹",
    message: `Happy Birthday Meri Zindagi! 🎂💐

Aaj ka din utna hi khaas hai jitni tum ho mere liye. Tum meri har dua ka sabse khoobsurat jawaab ho. Tumhare bina meri zindagi adhoori si lagti hai — tum meri muskaan ho, mera sukoon ho, aur meri sabse badi khushi ho. Tumne meri life ko pyaar, care aur khushiyon se bhar diya hai. Main hamesha chahta hoon ki tumhara har din aaj ke din se bhi zyada khoobsurat ho. Tum meri duniya ho, meri strength ho, meri sabse badi blessing.
Happy Birthday meri jaan, tum hamesha yuhi muskurati raho, aur main hamesha tumhe aise hi khush dekhna chahta hoon! ❤️✨`

  }
  
];

const WishesPage = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#FFB6C1', '#DDA0DD', '#87CEEB'],
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
            Ye Meri Taraf se
          </span>
          <h1 className="celebration-text dark:text-celebration-cream animate-scale-up [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            Meri Jaan...
          </h1>
          <p className="celebration-subtext dark:text-gray-300 max-w-2xl mx-auto animate-fade-up">
            From Nothing {'->'} To Everything
          </p>
          
          {/* Grid Layout for Wishes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {wishes.map((wish, index) => (
              <div
                key={index}
                className="celebration-card text-left translate-z-20 dark:bg-gray-800/80 dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)] p-4 rounded-lg"
                style={{ 
                  transform: `perspective(1000px) rotateX(${Math.random() * 3}deg) rotateY(${Math.random() * 3}deg)`,
                  transition: 'transform 0.5s ease-out'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.transform = `perspective(1000px) rotateX(${Math.random() * 3}deg) rotateY(${Math.random() * 3}deg)`;
                }}
              >
                <blockquote 
                  className="text-celebration-warm dark:text-gray-300 text-lg italic mb-4 animate-fade-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  "{wish.message}"
                </blockquote>
                <p 
                  className="text-celebration-rose dark:text-celebration-cream font-medium animate-fade-up" 
                  style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
                >
                  - {wish.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <MusicPlayer />
    </div>
  );
};

export default WishesPage;