import { Component, OnInit } from "@angular/core";
import * as Tone from "tone";
import { notes, toChord } from "../db/notes";
import { chordPatterns } from "../db/chords";
import { PlayerService } from "../player.service";

export type Note = {
  name: string;
};

@Component({
  selector: "keyboard",
  templateUrl: "./keyboard.component.html",
  styleUrls: ["./keyboard.component.css"]
})
export class KeyboardComponent implements OnInit {
  constructor(private player: PlayerService) {}

  baseOctave = 3;

  synth = this.player.synth;

  chords = chordPatterns;
  selectedNote: Note = { name: "C4" };
  selectedChord = chordPatterns[0];
  selectedOctave = 4;

  keyboardNotes: Note[];

  ngOnInit() {
    // this.synth.triggerAttackRelease("C4", "8n");
    this.makeNotes();
    // this.synth.triggerAttackRelease(toChord('C#4','lyd'), "4n")
  }

  play(note) {
    this.player.play(note);
    this.selectedNote = note;
  }
  playChord(chord) {
    this.selectedChord = chord;
    this.player.playChord(chord);
  }

  makeNotes() {
    this.keyboardNotes = notes.map((note) => ({
      name: note + this.selectedOctave
    }));
    this.keyboardNotes.push({ name: "C" + (this.selectedOctave + 1) });
  }

  isBlack(note: Note): boolean {
    return note.name.indexOf("#") > -1;
  }

  increaseOctave() {
    if (this.selectedOctave < 5) {
      this.selectedOctave += 1;
    }
    this.makeNotes();
  }

  decreaseOctave() {
    if (this.selectedOctave > 0) {
      this.selectedOctave -= 1;
    }
    this.makeNotes();
  }
}
