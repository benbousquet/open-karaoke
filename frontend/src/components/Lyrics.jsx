import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Lyrics({ curTime, duration }) {
  const lyricData = [
    {
      start: 0,
      end: 2,
      lyric: "This is the first one",
    },
    {
      start: 2,
      end: 4,
      lyric: "This is the second one",
    },
    {
      start: 4,
      end: 6,
      lyric: "This is the third one",
    },
  ];

  const [curLyricIdx, setCurLyricIdx] = useState(0);

  useEffect(() => {
    console.log(curLyricIdx, lyricData.length);
    if (lyricData[curLyricIdx].end < curTime) {
      if (curLyricIdx < lyricData.length - 1) setCurLyricIdx(curLyricIdx + 1);
    }
  }, [curTime]);

  return (
    <div>
      <p></p>
      <p>{lyricData[curLyricIdx].lyric}</p>
    </div>
  );
}

export default Lyrics;
