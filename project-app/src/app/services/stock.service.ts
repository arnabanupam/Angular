import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private userListUrl = 'https://real-time-finance-data.p.rapidapi.com?X-RapidAPI-Key=4cbff16476msh26f8372cd8684cdp127c33jsn3f4d034b34a9&X-Rapid-Host=real-time-finance-data.p.rapidapi.com';
  private userListUrl = 'http://localhost:3001/stockList';

  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userListUrl);
  }
  
  // private apiUrl  = 'http://localhost:3000/userList/';

  // constructor(private http : HttpClient) { }

  // postUser(user: User): Observable<User> {
  //   return this.http.post<User>(this.apiUrl, user);
  // }
  
  // getUser(){
  //   return this.http.get<any>("http://localhost:3000/userList");
  // }
  // putUser(data:any, id : number){
  //   return this.http.put<any>("http://localhost:3000/userList/"+id, data);
  // }
  // deleteUser(id:number){
  //   this.http.delete<any>("http://localhost:3000/userList/"+id);
  // }
}










// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StockService {
//   private rapidAPIKey = 'YOUR_RAPIDAPI_KEY';
//   private apiUrl = 'YOUR_RAPIDAPI_STOCK_API_URL';

//   constructor(private http: HttpClient) { }

//   getStockData(symbol: string) {
//     const url = `${this.apiUrl}/stock/${symbol}/quote`;
//     return this.http.get(url, { headers: { 'X-RapidAPI-Key': this.rapidAPIKey } });
//   }
// }
