import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gallery } from '../gallery';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="card">
      <img class="card-photo" [src]="gallery.image" alt="image of {{gallery.id}}">
    </section>
  `,
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() gallery!: Gallery;
}
