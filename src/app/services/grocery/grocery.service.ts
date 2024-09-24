import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../model/grocery/grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  serviceURL : string ;

  constructor(private http : HttpClient) {
    this.serviceURL = "http://localhost:4000/groceries"
  }

  // addGrocery(grocery : Grocery) : Observable<Grocery> {
  //   return this.http.post<Grocery>(this.serviceURL, grocery);
  // }

  getAllGrocery(): Observable<Grocery[]> {
    return this.http.get<Grocery[]>(this.serviceURL);
  }

  // deleteGrocery(grocery : Grocery) : Observable<Grocery> {
  //   return this.http.delete<Grocery>(this.serviceURL + '/' + grocery.id);
  // }

  // editGrocery(grocery : Grocery) : Observable<Grocery> {
  //   return this.http.put<Grocery>(this.serviceURL + '/' + grocery.id,grocery);
  // }
}
