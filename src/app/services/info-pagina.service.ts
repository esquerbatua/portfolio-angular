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

    this.http.get('assets/data/data-page.json').subscribe((res: any) => {
      this.info = res;
    });
  }
}
