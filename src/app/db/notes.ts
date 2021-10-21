import {chordPatterns} from "./chords";

export const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

// https://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies


const C0 = 12;
const C1 = 24;


const toNoteNumber =  (noteName) => {
  // takes eg 'A3' and transforms to 57
  // 'C0' => 12
  //get octave number first
  const octave = parseInt(noteName.slice(-1));

  return 0;
} 

const toNoteName = (noteNumber) => {
  return '';
}

const toChord = (chordName: string, rootNote: string) => {
  const rootNoteNumber = toNoteNumber(rootNote);
  const chordPattern = chordPatterns.find(chord => chord.name === chordName)?.pattern;
  const chordNoteNumbers = chordPattern.map(note => rootNoteNumber + note);
  return chordNoteNumbers.map(toNoteName);
}

