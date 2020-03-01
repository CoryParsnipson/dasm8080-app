import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Online Intel 8080 Disassembler';

  funfactDB = [
     "this is jackass",
     "I haven't pooped in six years",
     "I like tomatoes",
     "th--why are you looking at me like that?",
     "AAAAAHHH BEEEES",
     "please help me I'm trapped in a open office layout",
     "I like web development, programming, games, and drawing",
  ]

  funfact = ""

  ngOnInit() {
     let idx = Math.floor(Math.random() * this.funfactDB.length);
     this.funfact = this.funfactDB[idx];
  }
}
