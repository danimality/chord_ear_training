import { Injectable } from "@angular/core";
import * as Tone from "tone";

@Injectable()
export class PlayerService {
  synth = new Tone.PolySynth(Tone.Synth).toDestination();

  play(note) {
    this.synth.triggerAttackRelease(note.name, "4n");
    this.selectedNote = note;
  }
  playChord(chord) {
    this.selectedChord = chord;
    this.synth.triggerAttackRelease(
      toChord(this.selectedNote.name, chord.name),
      "4n"
    );
  }
}
