import { Note } from "@/utils/types";
import { createContext, useContext } from "react";

export const PitchTimelineContext = createContext<[notes: Note[], changeNote: (id: Number, newNote: Note) => void] | undefined>(
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
