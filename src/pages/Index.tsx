import { MusicPlayer } from "@/components/MusicPlayer";
import { Navigation } from "@/components/Navigation";
import { WelcomePopup } from "@/components/WelcomePopup";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    // Create periodic confetti
    const interval = setInterval(() => {
      const colors = isDarkMode 
        ? ['#FFB6C1', '#DDA0DD', '#87CEEB'] 
        : ['#FFA07A', '#FFB6C1', '#DDA0DD'];

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: colors,
        gravity: 0.5,
        scalar: 0.7
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCelebrationClick = () => {
    // Create a burst of confetti
    const colors = isDark 
      ? ['#FFB6C1', '#DDA0DD', '#87CEEB'] 
      : ['#FFA07A', '#FFB6C1', '#DDA0DD'];
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-celebration-cream to-[#FFE29F] dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="flower-pattern"></div>
      <Navigation />
      <WelcomePopup />
      <main className="pt-24 px-4 container mx-auto relative">
        <div className="absolute top-20 left-10 w-16 h-16 floating-flower" style={{ animationDelay: "0s" }}>
          <div className="w-full h-full bg-[#FFB6C1] rounded-full opacity-30"></div>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 floating-flower" style={{ animationDelay: "2s" }}>
          <div className="w-full h-full bg-[#DDA0DD] rounded-full opacity-30"></div>
        </div>
        
        <section className="max-w-4xl mx-auto text-center space-y-8 animate-fade-down perspective-popup">
          <span className="inline-block px-4 py-1 bg-celebration-rose/10 dark:bg-celebration-rose/20 rounded-full text-celebration-rose dark:text-celebration-cream text-sm font-medium mb-4 transform hover:scale-105 transition-transform duration-300">
            wooo-hooo, B'Day aa gya!💕
          </span>
          <h1 className="celebration-text dark:text-celebration-cream animate-scale-up [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            Happy Birthday Wifeyy✨💞
          </h1>
          <p className="celebration-subtext dark:text-gray-300 max-w-2xl mx-auto animate-fade-up">
          🎂💐 Happy Birthday Meri Jaan 💐🎂

Zindagi ke is safar mein, sabse khoobsurat mod tum ho,
Har din mere chehre ki muskaan ki wajah tum ho. 💞
Kabhi hansna, kabhi ladna, par har pal saath rehna,
Ye chhoti-chhoti baatein hi meri zindagi ka sukoon ban gayi ho tum. 🌸

Tum meri har subah ki pehli soch ho,
Aur meri raat ka aakhri khayal bhi tum ho. ✨
Main hamesha chahta hoon tum yuhi khilti raho,
Har saal tumhari khushiyon ka level badhta rahe ho. ❤️

Tum meri life ka sabse pyaara hissa ho,
Tumse hi meri duniya poori lagti hai. 💫
Happy Birthday meri love, meri wife —
Tum meri har dua ka sabse khoobsurat jawaab ho. 🌹
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div 
              onClick={() => navigate('/gallery')}
              className="celebration-card dark:bg-gray-800/80 dark:text-white transform hover:rotate-2 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-celebration-rose dark:text-celebration-cream mb-2">Memories</h3>
              <p className="text-celebration-warm dark:text-gray-300">Chalo jldi se click karo...</p>
            </div>
            <div 
              onClick={() => navigate('/wishes')}
              className="celebration-card dark:bg-gray-800/80 dark:text-white transform hover:rotate-2 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-celebration-rose dark:text-celebration-cream mb-2">Wishes</h3>
              <p className="text-celebration-warm dark:text-gray-300">💕</p>
            </div>
            <div 
              onClick={handleCelebrationClick}
              className="celebration-card dark:bg-gray-800/80 dark:text-white transform hover:rotate-2 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-celebration-rose dark:text-celebration-cream mb-2">Celebration</h3>
              <p className="text-celebration-warm dark:text-gray-300">Kuch Dikha🥹</p>
            </div>
          </div>

          

          

        </section>
      </main>


      
      {/* Footer with Testimonial */}
      <footer className="mt-32 mb-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="celebration-card transform hover:rotate-0 transition-all duration-500 space-y-4">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB6C1] to-[#DDA0DD] rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-2xl">
                🎉
              </div>
            </div>
            <blockquote className="text-lg md:text-xl italic text-celebration-warm dark:text-gray-300">
            "❤ You make my world brighter, my heart fuller, and every moment special. Wishing you a day as beautiful as you are! Love you endlessly! 🎂✨"
            </blockquote>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <span className="w-8 h-0.5 bg-celebration-rose/30 dark:bg-celebration-cream/30"></span>
              <p className="text-celebration-rose dark:text-celebration-cream font-medium">Only Yours!!</p>
              <span className="w-8 h-0.5 bg-celebration-rose/30 dark:bg-celebration-cream/30"></span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-10 left-1/4 w-16 h-16 floating-flower" style={{ animationDelay: "1s" }}>
          <div className="w-full h-full bg-[#87CEEB] rounded-full opacity-30"></div>
        </div>
        <div className="absolute -top-10 right-1/4 w-14 h-14 floating-flower" style={{ animationDelay: "1.5s" }}>
          <div className="w-full h-full bg-[#FFA07A] rounded-full opacity-30"></div>
        </div>
      </footer>
      
      <MusicPlayer />
    </div>
  );
};

export default Index;
