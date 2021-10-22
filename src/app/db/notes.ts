import { chordPatterns } from "./chords";

export const notes = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B"
];

// https://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies

export const toNoteNumber = (noteName) => {
  // takes eg 'A3' and transforms to 57
  // 'C0' => 12
  //get octave number first
  const octave = parseInt(noteName.slice(-1), 10);
  const baseC = 12 * (1 + octave);

  return baseC + notes.indexOf(noteName.slice(0, -1));
};

export const toNoteName = (noteNumber) => {
  const octave = Math.floor(noteNumber / 12) - 1;
  const note = notes[noteNumber % 12];

  return note + octave;
};

export const toChord = (rootNote: string, chordName: string) => {
  const rootNoteNumber = toNoteNumber(rootNote);
  const chordPattern = chordPatterns.find((chord) => chord.name === chordName)
    ?.pattern;
  const chordNoteNumbers = chordPattern.map((note) => rootNoteNumber + note);
  return chordNoteNumbers.map(toNoteName);
};
