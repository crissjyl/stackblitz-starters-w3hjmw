import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      gallery works!
    </p>
  `,
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

}
