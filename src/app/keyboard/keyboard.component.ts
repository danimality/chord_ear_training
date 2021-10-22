import { Component, OnInit } from "@angular/core";
import * as Tone from "tone";
import { notes, toChord } from "../db/notes";
import { chordPatterns } from "../db/chords";

export type Note = {
  name: string;
};

@Component({
  selector: "keyboard",
  templateUrl: "./keyboard.component.html",
  styleUrls: ["./keyboard.component.css"]
})
export class KeyboardComponent implements OnInit {
  baseOctave = 3;

  synth = new Tone.PolySynth(Tone.Synth).toDestination();

  chords = chordPatterns;
  selectedNote: Note = { name: "C4" };

  keyboardNotes: Note[];

  ngOnInit() {
    // this.synth.triggerAttackRelease("C4", "8n");
    this.keyboardNotes = notes.map((note) => {
      console.log(note);
      return { name: note + this.baseOctave };
    });
    this.keyboardNotes.push({ name: "C" + (this.baseOctave + 1) });
    // this.synth.triggerAttackRelease(toChord('C#4','lyd'), "4n")
  }

  play(note) {
    this.synth.triggerAttackRelease(note.name, "4n");
    this.selectedNote = note;
  }
  playChord(chord) {
    this.synth.triggerAttackRelease(
      toChord(this.selectedNote.name, chord.name),
      "4n"
    );
  }

  isBlack(note: Note): boolean {
    return note.name.indexOf("#") > -1;
  }
}
