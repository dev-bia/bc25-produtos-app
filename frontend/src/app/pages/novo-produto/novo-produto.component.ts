import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  produtoForm: FormGroup = new FormGroup({
    nome: new FormControl('', [ Validators.required ]),
    preco: new FormControl('', [ Validators.required ]),
    descricao: new FormControl('', [ Validators.required ]),
    foto: new FormControl('')
  })

  constructor(
    private produtoService: ProdutosApiService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvarProduto() {
    // recuperar os dados do formulário
    const produto: Produto = this.produtoForm.value // retorna um objeto com as informações do formGroup

    this.produtoService.criarProduto(produto)
    .subscribe(
      (prod) => {
        console.log(prod)
        this.snackbar.open("Produto salvo com sucesso!", 'ok', {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
         })
  
        // DESAFIO: substituir o alert pelo snackbar do Material
      }
    )
  }
}
