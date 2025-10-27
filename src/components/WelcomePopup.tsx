
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export const WelcomePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      // Trigger confetti when popup opens
      const duration = 3000;
      const end = Date.now() + duration;

      const colors = ["#FFA07A", "#FFB6C1", "#DDA0DD", "#87CEEB"];

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-[#FFE29F] to-[#FFA99F] dark:from-gray-900 dark:to-gray-800">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-celebration-rose dark:text-celebration-cream [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)] animate-scale-up">
            To My Love💕
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 [transform-style:preserve-3d] perspective-popup">
          <div className="aspect-video overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="\lpopup.jpg"
              alt="Birthday celebration"
              className="w-full h-full object-cover"
            />
            <div className="absolute -top-2 -left-2 w-12 h-12 transform rotate-45 translate-z-20 opacity-80">
              <div className="w-full h-full bg-[#FFB6C1] rounded-full animate-bounce"></div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 transform -rotate-12 translate-z-20 opacity-80">
              <div className="w-full h-full bg-[#DDA0DD] rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
          <p className="text-center text-lg text-celebration-warm dark:text-gray-300 transform hover:scale-105 transition-transform duration-300 p-4 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-lg">
            Tum meri zindagi ki sabse khoobsurat tohfa ho. Tumhari muskurahat mere din ko roshan karti hai aur tumhara pyaar meri duniya ko ek behtareen jagah banata hai. Aaj ke din, main tumhe yeh batana chahta hoon ki tum mere liye kitni khaas ho. Tum meri har khushi ka sabab ho aur main hamesha tumhare saath apni zindagi bitana chahta hoon. Happy Birthday meri jaan! Tum hamesha yuhi khilti raho aur meri zindagi mein pyaar aur khushiyan baant-ti raho.
 🎀🐿💕  
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
