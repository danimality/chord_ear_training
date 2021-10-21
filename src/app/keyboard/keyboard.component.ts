import { Component, OnInit } from "@angular/core";
import * as Tone from 'tone';
import {notes} from "../db/notes";

export type Note = {
  name: string;
}

@Component({
  selector: "keyboard",
  templateUrl: "./keyboard.component.html",
  styleUrls: ["./keyboard.component.css"]
})
export class KeyboardComponent implements OnInit {
  
  baseOctave = 3;

  synth = new Tone.PolySynth(Tone.FMSynth).toDestination();

  keyboardNotes: Note[];


  ngOnInit() {
    // this.synth.triggerAttackRelease("C4", "8n");
    this.keyboardNotes = notes.map(note => {
      console.log(note);
      return {name: note+this.baseOctave}
    });
    this.keyboardNotes.push({name:'C'+(this.baseOctave+1)});
    this.synth.triggerAttackRelease(['C3',"E3",'G3'], "4n")
  }

  play(note) {
    this.synth.triggerAttackRelease(note.name, "4n");

  }

  chordFromNote(note: Note, chord) {

  }

  isBlack(note: Note): boolean {
    return note.name.indexOf('#') > -1;
  }
  
}
