import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../services/grocery/grocery.service';
import { Grocery } from '../model/grocery/grocery';
import { catchError, filter, first, from, last, map, Observable, of, Subject, switchMap, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-groceries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './groceries.component.html',
  styleUrl: './groceries.component.scss'
})
export class GroceriesComponent implements OnInit {
  private _destroy$ = new Subject<void>()
  
  gorceryObj: Grocery = new Grocery();
  groceryArr: Grocery[] = [];
  grocery$: Observable<Grocery[]> = from([])

  constructor(private groceryService: GroceryService) { }

  ngOnInit(): void {
    this.gorceryObj = new Grocery();
    this.groceryArr = [];
    this.getAllGroceries();
  }

  getAllGroceries() {
    this.groceryService.getAllGrocery()
    .pipe(
      takeUntil(this._destroy$),
      catchError(error => {
        console.error('An error occured:', error);
        throw error
      })
    )
    .subscribe(res => {
      this.grocery$ = new Observable(
        function(observer) {
          try {
            observer.next(res)
            observer.complete()
          } catch(e) {
            console.log('ini error:', e)
            observer.error(e)
          }
        }
      )

      this.grocery$.subscribe(data => {
        this.groceryArr = data;
      })
    });
  }

  getFirst() {
    this.grocery$
    .pipe(
      switchMap(item => item),
      first()
    )
    .subscribe(data => {
      this.groceryArr = [];
      this.groceryArr.push(data);
    })
  }

  getLast() {
    this.grocery$
    .pipe(
      switchMap(item => item),
      last()
    )
    .subscribe(data => {
      this.groceryArr = [];
      this.groceryArr.push(data);
    })
  }

  reset() {
    this.grocery$
    .subscribe(data => {
      this.groceryArr = [];
      this.groceryArr = data;
    })
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
