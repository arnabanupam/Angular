import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/list';
  
  getAll(){
    return this.http.get(this.apiUrl);
  }
  getAllRole(){
    return this.http.get('http://localhost:3000/role');
  }

  getByCode(code: any){
    return this.http.get(this.apiUrl+'/'+code);
  }

  proceedRegister(inputdata:any){
    return this.http.post(this.apiUrl, inputdata);
  }

  updateUser(code:any,inputdata:any){
    return this.http.put(this.apiUrl+'/'+code, inputdata);
  }

  isLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  getUserRole(){
    return sessionStorage.getItem('userrole')!=null ? sessionStorage.getItem('userrole')?.toString() : '';
  }
}
