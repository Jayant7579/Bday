
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 celebration-card flex items-center space-x-2 py-2 px-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        className="hover:text-celebration-rose"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className="hover:text-celebration-rose"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </Button>
      <audio
        ref={audioRef}
        loop
        src="src/Assests/music.mp3"
        className="hidden"
      />
    </div>
  );
};
