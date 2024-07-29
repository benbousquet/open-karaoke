import { useNoteContext } from "@/utils/context";
import { Key, Note } from "@/utils/types";
import NoteNode from "@/components/noteNode";

export default function NoteMap() {
  const [notes, _] = useNoteContext();
  const lines = [
    { id: 1, key: Key["c"] },
    { id: 2, key: Key["cs"] },
    { id: 3, key: Key["d"] },
    { id: 4, key: Key["ds"] },
    { id: 5, key: Key["e"] },
    { id: 6, key: Key["f"] },
    { id: 7, key: Key["fs"] },
    { id: 8, key: Key["g"] },
    { id: 9, key: Key["gs"] },
    { id: 10, key: Key["a"] },
    { id: 11, key: Key["as"] },
    { id: 12, key: Key["b"] },
  ];

  function DrawNotes(key: Key) {
    const staffNotes = notes.filter((note) => {
      return note.key === key;
    });
    return staffNotes.map((note, idx) => <NoteNode key={idx} note={note} />);
  }

  return (
    <div className="absolute w-full">
      {lines.map((staff) => (
        <div key={staff.id} className="h-6 border-y relative">
          {DrawNotes(staff.key)}
        </div>
      ))}
    </div>
  );
}
