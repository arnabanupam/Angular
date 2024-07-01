import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private wishlist: any[] = [];

  private userListUrl = 'http://localhost:3001/stockList';

  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userListUrl);
  }

  getCompanyNames(): Observable<string[]> {
    return this.getAllUsers().pipe(
      map((users: any[]) => users.map(user => user.name))
    );
  }

  addToWishlist(stock: any) {
    this.wishlist.push(stock);
  }

  getWishlist(): any[] {
    return this.wishlist;
  }
}
