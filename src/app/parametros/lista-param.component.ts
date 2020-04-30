import { Component, OnInit } from '@angular/core';
import { ParamService } from './parametros.service';
import { Router } from '@angular/router';
import { Parametros } from './parametros';

@Component({
  selector: 'app-lista-param',
  templateUrl: './lista-param.component.html',
  styleUrls: ['./lista-param.component.css']
})
export class ListaParamComponent implements OnInit {

  paramService: ParamService;
  parametros: Parametros[];
  totalSize: Number;
  config: any;
  popoverTitle = 'Confirmar';
  popoverMessage: String = "Deseja realmente deletar?"
  cancelClicked = false;

  constructor(paramService: ParamService, private router: Router) {
    this.paramService = paramService;
  }

  ngOnInit(): void {

    this.getList();

    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.totalSize
    };
  }

  getList() {
    this.paramService.getParametrosList()
      .subscribe(dados => { this.parametros = dados, this.totalSize = dados.length },
        erro => { console.log(erro.error.detail), this.router.navigate(['']) });
  }

  delete(id) {
    /* this.paramService.delete(id).subscribe(() => {
       this.getList();
     });*/
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
