import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../gallery/gallery.component';
import { Gallery } from '../gallery'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    GalleryComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-gallery [gallery]="gallery"></app-gallery>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  gallery: Gallery = {
    id: 'test',
    image: 'assets/image2.png'
  };
}
