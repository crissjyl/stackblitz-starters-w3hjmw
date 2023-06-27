import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gallery } from '../gallery';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="card">
      <img class="card-photo" [src]="gallery.image">
      <a [routerLink]="['/details', gallery.id]">Select</a>
    </section>
  `,
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() gallery! : Gallery;
}
