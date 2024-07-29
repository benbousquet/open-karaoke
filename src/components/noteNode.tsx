import { Note } from "@/utils/types";
import { useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export default function NoteNode({ note }: { note: Note }) {
  const [{ x, width }, api] = useSpring(() => ({
    x: 0,
    width: 0,
  }));
  const noteRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const noteElement = noteRef.current;
    api.set({
      x: timeToPixels(Number(note.start)),
      width: timeToPixels(Number(note.duration)),
    });
  }, []);

  const bind = useDrag(
    (state) => {
      const isRightResize = state?.event.target === rightRef.current;
      if (isRightResize) {
        api.set({ width: state.offset[0] });
      } else {
        api.set({ x: state.offset[0] });
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
          left: 1,
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
