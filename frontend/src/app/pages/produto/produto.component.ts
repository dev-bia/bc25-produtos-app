import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  // injetar um objeto que permite o acesso os parâmetros da rota

  constructor(
    private rota: ActivatedRoute // permite acessar as informações (parâmetros) da rota que está ativa no momento
  ) { }

  ngOnInit(): void { // executado quando o componente é renderizado
    // paramMap é um objeto que possui acesso a todos os parâmetros da rota atual
    // get funciona para recuperar o valor de um parâmetro da rota atual
    const idProduto = this.rota.snapshot.paramMap.get('idProduto')
  }
}
