import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public data: any = {};
  constructor(
    private _galleryService: GalleryService
  ) { 
    this.data = _galleryService;
  }

  ngOnInit() {
  }

}
