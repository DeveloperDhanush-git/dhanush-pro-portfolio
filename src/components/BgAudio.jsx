import { useEffect, useRef } from "react";

const BgAudio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.5; // Set volume (adjust if needed)
      audio.loop = true; // Ensure it loops
      audio.play().catch((error) => {
        console.log("Autoplay blocked. User interaction required:", error);
      });
    }
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay>
      <source src="/space-sound.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
      
    </audio>
    
  );
};

export default BgAudio;
