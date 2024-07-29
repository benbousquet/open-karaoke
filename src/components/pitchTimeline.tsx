import { Key, Note } from "@/utils/types";
import { PitchTimelineContext } from "@/utils/context";
import { useState } from "react";
import Staff from "@/components/staff";
import NoteMap from "@/components/noteMap";
export default function PitchTimeline() {
  // 11 lines
  // 2-3 seconds per section
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, key: Key["a"], start: 1, duration: 1000 },
    { id: 2, key: Key["b"], start: 1001, duration: 1000 },
    { id: 3, key: Key["c"], start: 2001, duration: 3000 },
  ]);

  function changeNote(id: Number, newNote: Note): void {
    const noteIdx = notes.findIndex((val) => {
      return val.id === id;
    });
    let newNotes = [...notes];
    newNotes[noteIdx].key = newNote.key;
    newNotes[noteIdx].duration = newNote.duration;
    newNotes[noteIdx].start = newNote.start;
    setNotes([...newNotes]);
  }

  const songLength = 7000; // milliseconds

  return (
    <div className="border border-secondary">
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
    </div>
  );
}
