import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GetImagesService } from '../get-images.service';
import { Gallery } from '../gallery';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="card-photo" [src]="gallery?.image"/>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  galleryService = inject(GetImagesService);
  gallery: Gallery | undefined;

  constructor() {
    const galleryId = parseInt(this.route.snapshot.params['id'], 10);
    this.galleryService.getImagebyId(galleryId).then(gallery => {
      this.gallery = gallery;
    })
  }
}
