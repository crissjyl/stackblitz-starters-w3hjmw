import { Injectable } from '@angular/core';
import { Gallery } from './gallery';

@Injectable({
  providedIn: 'root'
})
export class GetImagesService{
  protected galleryList: Gallery[] = [
    {
      id: 0,
      image: '/assets/image1.png'
    },
    {
      id: 1,
      image: '/assets/image2.png'
    },
    {
      id: 2,
      image: '/assets/image3.png'
    },
    {
      id: 3,
      image: '/assets/image4.png'
    },
    {
      id: 4,
      image: '/assets/image5.png'
    },
    {
      id: 5,
      image: '/assets/image6.png'
    },
    {
      id: 6,
      image: '/assets/image7.png'
    },
    {
      id: 7,
      image: '/assets/image8.png'
    }
  ];
  getAllImages(): Gallery[] {
    return this.galleryList;
  }
  
  getImagebyId(id: number): Gallery | undefined {
    return this.galleryList.find(gallery => gallery.id === id);
  }

}
