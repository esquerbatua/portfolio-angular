import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: any = {};

  constructor(
    private http: HttpClient
  ) {

    this.http.get('https://portfolio-b3498.firebaseio.com/.json').subscribe((res: any) => {
      this.info = res;
    });
  }
}
