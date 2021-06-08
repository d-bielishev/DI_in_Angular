import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="container">
      <h2>App component</h2>
      <app-parent></app-parent>
    </section>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
