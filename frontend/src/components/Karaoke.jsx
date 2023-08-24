import { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import audioFile from "../assets/test.mp3";
import Controls from "./Controls";
import Lyrics from "./Lyrics";

function Karaoke() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  const audioRef = useRef();

  // setup events
  useEffect(() => {
    audioRef.current.ontimeupdate = () => {
      setTime(audioRef.current.currentTime);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      return;
    }
    audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) {
      audioRef.current.currentTime = time;
    }
  }, [time]);

  function togglePlayback(current) {
    setIsPlaying(!current);
  }

  function skipTo(time) {
    setIsPlaying(false);
    setTime(time)
  }

  return (
    <div className="w-4/5">
      <audio src={audioFile} ref={audioRef} />
      <div className="flex-col">
        <Lyrics curTime={time} skipTo={skipTo} />
        <ProgressBar
          curTime={time}
          totalTime={audioRef.current?.duration || 0}
          skipTo={skipTo}
        />
        <Controls toggle={togglePlayback} isPlaying={isPlaying} />
      </div>
    </div>
  );
}

export default Karaoke;
