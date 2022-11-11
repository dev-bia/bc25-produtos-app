import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestarNumeroGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //saber se o id informado é um número é um número ou não
    //se for um número -> pode seguir (true)
    //se não for número -> não pode seguir (false)

    //recuperar o parâmetro que guarda o valor do id
    const idProduto = route.paramMap.get('idProduto')

    if (isNaN(Number(idProduto))) {
      return false
    } else{
      return true;
    }

  }

}
