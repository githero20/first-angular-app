import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<app-servers></app-servers>`,
  // suitable for few lines of code
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  name = 'Dan';
}
