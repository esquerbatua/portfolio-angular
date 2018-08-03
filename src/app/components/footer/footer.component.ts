import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   public data: any = {};
  constructor(
    private _infoPaginaService: InfoPaginaService
  ) {  this.data = _infoPaginaService; }

  ngOnInit() {
  }

}
