import { Key, Note } from "@/utils/types";
import { PitchTimelineContext } from "@/utils/context";
import { useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Staff from "@/components/staff";
import NoteMap from "@/components/noteMap";
export default function PitchTimeline({
  currentTime,
}: {
  currentTime: number;
}) {
  const audioRef = useRef(null);

  // 11 lines
  // 2-3 seconds per section
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, key: Key["a"], start: 1, duration: 1000 },
    { id: 2, key: Key["b"], start: 1001, duration: 1000 },
    { id: 3, key: Key["c"], start: 2001, duration: 3000 },
    { id: 4, key: Key["c"], start: 10001, duration: 3000 },
  ]);

  const [{ x }, api] = useSpring(() => ({
    x: 10,
  }));

  function changeNote(id: number, newNote: Note): void {
    const noteIdx = notes.findIndex((val) => {
      return val.id === id;
    });
    const newNotes = [...notes];
    newNotes[noteIdx].key = newNote.key;
    newNotes[noteIdx].duration = newNote.duration;
    newNotes[noteIdx].start = newNote.start;
    setNotes([...newNotes]);
  }

  const songLength = 15000; // milliseconds

  api.set({ x: 100 });

  return (
    <div>
      {/* <audio src={test} ref={audioRef} /> */}
      <div className="absolute bg-red-400 h-72 w-1.5"></div>
      <animated.div className="border border-secondary" style={{ x }}>
        <PitchTimelineContext.Provider value={[notes, changeNote]}>
          {/* notes overlayed on top */}
          <NoteMap />
          {/* background staff */}
          <div className="flex flex-row overflow-auto w-full">
            {Array(Math.ceil(songLength / 3000))
              .fill(0)
              .map((_val, idx) => (
                <Staff key={idx} />
              ))}
          </div>
        </PitchTimelineContext.Provider>
      </animated.div>
    </div>
  );
}
