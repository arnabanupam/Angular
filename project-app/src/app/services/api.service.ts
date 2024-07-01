import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private userListUrl = 'http://localhost:3001/userList';

  constructor(private http: HttpClient) { }

  addUser(inputdata: any){
    return this.http.post(this.userListUrl, inputdata);
  }

  getUser(id: any){
    return this.http.get(this.userListUrl+'/'+id);
  }

  updateUser(id:any,user: any){
    return this.http.put(this.userListUrl+'/'+id, user);
  }

  deleteUser(id: number){
    return this.http.delete(this.userListUrl+'/'+id);
  }

  getAllUsers(){
    return this.http.get(this.userListUrl);
  }

  // putUser(userId: number, userData: any): Observable<any> {
  //   const url = `${this.userListUrl}/${userId}`;
  //   return this.http.put<any>(url, userData);
  // }
















// // Add user to JSON server
// addUser(user: any): Observable<any> {
//   return this.http.post<any>(this.userListUrl, user);
// }

// // Get user from JSON server
// getUser(id: any): Observable<any> {
//   return this.http.get<any>(`${this.userListUrl}/${id}`);
// }

// // Update user on JSON server
// updateUser(user: any): Observable<any> {
//   const url = `${this.userListUrl}/${user.id}`;
//   return this.http.put<any>(url, user);
// }

// // Delete user from JSON server
// deleteUser(id: number): Observable<any> {
//   const url = `${this.userListUrl}/${id}`;
//   return this.http.delete<any>(url);
// }

// getAllUsers(): Observable<any[]> {
//   return this.http.get<any[]>(this.userListUrl);
// }

// putUser(userId: number, userData: any): Observable<any> {
//   const url = `${this.userListUrl}/${userId}`;
//   return this.http.put<any>(url, userData);
// }

}
