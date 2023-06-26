import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../gallery/gallery.component';
import { Gallery } from '../gallery';
import { GetImagesService } from '../get-images.service';

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
      <app-gallery
        *ngFor="let gallery of galleryList"
        [gallery]="gallery">
      </app-gallery>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  galleryList: Gallery[] = [];
  galleryService: GetImagesService = inject(GetImagesService);

  constructor() {
    this.galleryList = this.galleryService.getAllGalleryImages();
  }

}
