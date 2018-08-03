import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  public gallery: any[] = [];

  constructor(
    private http: HttpClient
  ) {

    this.http.get('https://portfolio-b3498.firebaseio.com/gallery.json').subscribe((res: any[]) => {
      this.gallery = res;
    });
  }
}
