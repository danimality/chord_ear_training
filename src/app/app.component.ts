import { Component, OnInit } from "@angular/core";
import * as Tone from 'tone';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Keyboard";

  // synth = new Tone.Synth().toDestination();

  ngOnInit() {
    // this.synth.triggerAttackRelease("C3", "8n");
  }

  
}
