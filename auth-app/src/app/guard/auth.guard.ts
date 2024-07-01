import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
  constructor(private service: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise< boolean | UrlTree> | boolean | UrlTree {
    
      if(this.service.isLoggedIn()){
        if(route.url.length>0){
          let menu = route.url[0].path;
          if(menu=="user"){
            if(this.service.getUserRole()=="admin"){
              return true;
            }else{
              alert("Access Denied!");
              this.router.navigate(['']);
              return false;
            }
          }else return true;
        }else return true;
      }else{
        this.router.navigate(['login']);
        return false;
      }
    
  }
}

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
