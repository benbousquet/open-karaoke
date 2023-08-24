import { useEffect, useState } from "react";
import lyrics from "../assets/test.json";

function Lyrics({ curTime, skipTo }) {
  //   const lyricData = [
  //     {
  //       start: 0,
  //       end: 2,
  //       lyric: "This is the first one",
  //     },
  //     {
  //       start: 2,
  //       end: 4,
  //       lyric: "This is the second one",
  //     },
  //     {
  //       start: 4,
  //       end: 6,
  //       lyric: "This is the third one",
  //     },
  //   ];
  const lyricData = lyrics.dryFlower;

  const [curLyricIdx, setCurLyricIdx] = useState(0);

  useEffect(() => {
    console.log(curLyricIdx);
    if (
      lyricData[curLyricIdx].end < curTime ||
      lyricData[curLyricIdx].start > curTime
    ) {
      const newIdx = lyricData.findIndex((line) => {
        return line.start < curTime && line.end > curTime;
      });
      if (newIdx === -1) {
        setCurLyricIdx(0);
        return;
      }
      setCurLyricIdx(newIdx);
    }
  }, [curTime]);

  function lyricClick(line) {
    skipTo(line.start);
  }

  return (
    <div>
      {/* past lyric */}
      <p
        className="text-xl text-gray-500"
        onClick={() => lyricClick(lyricData[curLyricIdx - 1])}
      >
        {lyricData[curLyricIdx - 1]?.lyric}
      </p>
      {/* current lyric */}
      <p
        className="text-2xl"
        onClick={() => lyricClick(lyricData[curLyricIdx])}
      >
        {lyricData[curLyricIdx]?.lyric}
      </p>
      {/* on deck lyric */}
      <p
        className="text-xl text-gray-500"
        onClick={() => lyricClick(lyricData[curLyricIdx + 1])}
      >
        {lyricData[curLyricIdx + 1]?.lyric}
      </p>
    </div>
  );
}

export default Lyrics;
