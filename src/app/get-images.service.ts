import { Injectable } from '@angular/core';
import { Gallery } from './gallery';

@Injectable({
  providedIn: 'root'
})
export class GetImagesService {
  url = 'http://localhost:3000/cards';
  async getAllGalleryImages(): Promise<Gallery[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getImagebyId(id: number): Promise<Gallery | undefined> {
    const data = await fetch('${this.url}/${id}');
    return await json.data() ?? {};
  }

}
