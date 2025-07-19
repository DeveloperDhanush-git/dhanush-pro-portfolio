import { useEffect, useRef } from "react";
import styled from "styled-components";

const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1; /* Behind all content */
  opacity: 1;
`;

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Ensure video continues playing
    }
  }, []);

  return (
    <VideoBackground ref={videoRef} autoPlay loop muted playsInline>
      <source src="/herobg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </VideoBackground>
  );
};

export default BackgroundVideo;
