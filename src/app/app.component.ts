import { Component } from '@angular/core';
import { homeComponent } from './home/home.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    homeComponent,
  ],
  template: `
    <main>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'home';
}