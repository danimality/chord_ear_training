import { Component, OnInit } from "@angular/core";
import * as Tone from "tone";
import { notes, toChord } from "../db/notes";
import { chordPatterns } from "../db/chords";
import { PlayerService } from "../player.service";

export type Note = {
  name: string;
};

@Component({
  selector: "quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  constructor(private player: PlayerService) {}
  baseOctave = 3;

  synth = this.player.synth;

  chords = chordPatterns;

  ngOnInit() {
    // this.synth.triggerAttackRelease("C4", "8n");
  }

  play(note) {
    // this.synth.triggerAttackRelease(note.name, "4n");
    // this.selectedNote = note;
  }
  playChord(chord) {
    // this.selectedChord = chord;
    // this.synth.triggerAttackRelease(
    //   toChord(this.selectedNote.name, chord.name),
    //   "4n"
    // );
  }
}
