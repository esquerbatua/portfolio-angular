import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public data: any = {};
  constructor(
    private _infoPaginaService: InfoPaginaService
  ) {
    this.data = _infoPaginaService;
  }

  ngOnInit() {
  }
}
