import { Note } from "@/utils/types";

export default function NoteNode({ note }: { note: Note }) {
  console.log(note);

  function timeToPixels(time: Number) {
    // 1px = 100ms
    if (Number(time) === 0) {
      return 0;
    }
    return Math.ceil(Number(time) / 10);
  }

  return (
    <div
      className={"h-full rounded-xl border border-black absolute"}
      style={{
        left: `${timeToPixels(Number(note.start))}px`,
        width: `${timeToPixels(Number(note.duration))}px`,
      }}
    ></div>
  );
}
