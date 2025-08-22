import { useRef } from "react";

export default function Lab10() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    const p = v.play();
    if (p && typeof p.then === "function") {
      p.catch(); //ignore autoplay restrictions
    }
  };

  const pauseVideo = () => {
    videoRef?.current?.pause();
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="300"
        loop={true}
        autoPlay={true}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
}
