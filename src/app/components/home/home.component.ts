import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any = {};
  constructor(
    private _infoPaginaService: InfoPaginaService
  ) { this.data = _infoPaginaService;
  }

  ngOnInit() {
  }

}
