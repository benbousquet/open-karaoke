import { Note } from "@/utils/types";
import { createContext, useContext } from "react";

export const PitchTimelineContext = createContext<Note[] | undefined>(
  undefined
);

export function useNoteContext() {
  const notes = useContext(PitchTimelineContext);

  if (notes === undefined) {
    throw new Error(
      "useNoteContext must be used within PitchTimelineContext Provider"
    );
  }

  return notes;
}
