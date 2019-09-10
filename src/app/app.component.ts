import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bitly';

  buttons = [
    { 
      title: "Home",
      path: "/Home",
    },
    { 
      title: "URL List",
      path: "/URLs",
    }
  ]
}
