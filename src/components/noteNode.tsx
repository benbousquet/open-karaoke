import { Note } from "@/utils/types";
import { useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useNoteContext } from "@/utils/context";

export default function NoteNode({ note }: { note: Note }) {
  const [notes, changeNote] = useNoteContext();
  const [{ x, width }, api] = useSpring(() => ({
    x: 0,
    width: 0,
  }));
  const noteRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    api.set({
      x: timeToPixels(Number(note.start)),
      width: timeToPixels(Number(note.duration)),
    });
  }, []);
  140;

  const bind = useDrag(
    (state) => {
      const isRightResize = state?.event.target === rightRef.current;
      if (isRightResize) {
        api.set({ width: state.offset[0] });
        const newNote: Note = {
          id: note.id,
          duration: state.offset[0] * 10,
          key: note.key,
          start: note.start,
        };
        changeNote(note.id, newNote);
      } else {
        // fixes odd bug not displaying right handle
        let newStart = state.offset[0];
        if (newStart === 0) {
          newStart = 1;
        }
        api.set({ x: newStart });
        const newNote: Note = {
          id: note.id,
          duration: note.duration,
          key: note.key,
          start: state.offset[0],
        };
        changeNote(note.id, newNote);
      }
    },
    {
      from: (event) => {
        const isResize = event.target === rightRef.current;
        if (isResize) {
          return [width.get(), 0];
        }
        return [x.get(), 0];
      },
      bounds: (event) => {
        const isRightResize = event.target === rightRef.current;
        if (isRightResize) {
          return {
            left: 30,
          };
        }
        return {
          left: 0,
        };
      },
    }
  );

  // function resizeMove

  function timeToPixels(time: Number) {
    // 1px = 100ms
    if (Number(time) === 0) {
      return 0;
    }
    return Math.ceil(Number(time) / 10);
  }

  return (
    <animated.div
      ref={noteRef}
      className={"h-full rounded border border-black cursor-move"}
      style={{ x, width }}
      {...bind()}
    >
      <div
        ref={leftRef}
        className="h-full absolute left--0.5 top-0 cursor-col-resize w-1 bg-red-500"
        // onMouseMove
      ></div>
      <div
        ref={rightRef}
        className="h-full absolute right-[-0.25px] top-0 cursor-col-resize w-1 bg-red-500"
      ></div>
    </animated.div>
  );
}
