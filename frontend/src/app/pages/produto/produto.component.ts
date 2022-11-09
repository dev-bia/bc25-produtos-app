import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/interfaces/Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  // injetar um objeto que permite o acesso os parâmetros da rota

  altImg: string = 'https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png'

  produto: Produto = {
    descricao: 'oafhoçidfjaidjfãpodfkãpodfka fpadokfaodkfaodkfp adfp faodkfaopfoapdvskjvçkmfv psjgposgpff',
    foto: '',
    id: 1,
    nome: 'Pizza',
    preco: '600'
  }

  produtoForm: FormGroup = new FormGroup({
    descricao: new FormControl('', [ Validators.required ]),
    foto: new FormControl(''),
    nome: new FormControl('', [ Validators.required ]),
    preco: new FormControl('', [ Validators.required ])
  })

  constructor(
    private rota: ActivatedRoute // permite acessar as informações (parâmetros) da rota que está ativa no momento
  ) { }

  ngOnInit(): void { // executado quando o componente é renderizado
    // paramMap é um objeto que possui acesso a todos os parâmetros da rota atual
    // get funciona para recuperar o valor de um parâmetro da rota atual
    const idProduto = this.rota.snapshot.paramMap.get('idProduto') as string
  }
}
