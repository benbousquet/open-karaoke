export enum Key {
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "cs",
  "ds",
  "fs",
  "gs",
  "as",
}

export type Note = {
  id: number; // unique id
  key: Key; // musical
  start: number; // milliseconds
  duration: number; // milliseconds
};
