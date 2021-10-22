import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { KeyboardComponent } from "./keyboard/keyboard.component";
import { QuizComponent } from "./quiz/quiz.component";
import { PlayerService } from "./player.service";

@NgModule({
  declarations: [AppComponent, KeyboardComponent, QuizComponent],
  imports: [BrowserModule],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
