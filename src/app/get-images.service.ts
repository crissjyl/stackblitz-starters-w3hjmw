import { Injectable } from '@angular/core';
import { Gallery } from './gallery';

@Injectable({
  providedIn: 'root'
})
export class GetImagesService {
  protected galleryList: Gallery[] = [
    {
      id: '0',
      image: '/assets/image2.png'
    },
    {
      id: '1',
      image: '/assets/image3.png'
    },
    {
      id: '2',
      image: '/assets/image4.png'
    }
  ];

  getAllGalleryImages(): Gallery[] {
    return this.galleryList;
  }

  getImagebyId(id: string): Gallery | undefined {
    return this.galleryList.find(gallery => gallery.id === id);
  }

}
