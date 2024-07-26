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
  id: Number; // unique id
  key: Key; // musical
  start: Number; // milliseconds
  duration: Number; // milliseconds
};
