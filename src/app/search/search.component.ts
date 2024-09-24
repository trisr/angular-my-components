import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { count, debounceTime, distinct, elementAt, filter, first, from, last, max, min, Observable, skip, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  // name: FormControl;

  categories = ['Mobile', 'Desktop', 'Tablet', 'Smartwatch', 'Mobile', 'Desktop', 'Desktop', 'Tablet', 'Smartwatch']
  category$: Observable<string> = from(this.categories);

  ranks = [4, 23, 14, 56, 5, 32, 11, 5, 45, 36, 27, 18, 9];
  rank$: Observable<number> = from(this.ranks);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl('')
    })

    // this.searchForm.get('name')?.valueChanges.subscribe(data => {
    //   console.log(data);  // this will return evertime input change
    // })

    this.searchForm.get('name')?.valueChanges.pipe(
      // takeWhile(v => this.checkCondition(v)),  // take values till a condition is true
      // take(5),                                 // take n value(s)
      // debounceTime(3000)                       // time lag before emits next value
      filter((v) => this.checkCharCount(v))
    ).subscribe(data => {
      console.log(data);
    })

    // this.category$.pipe(
    //   // takeLast(2)                              // take specific n last emitted values
    //   // first()                                  // take first emitted value
    //   // last()                                   // take last emitted value
    //   // elementAt(2)                             // get n index of emitted value
    //   // distinct(),                              // remove duplicate value / give unique value only
    //   // skip(3)                                  // skip n item from index 0
    //   count()
    // ).subscribe(category => {
    //   console.log(category);
    // })

    this.rank$.pipe(
      distinct(),
      filter(v => this.filterValue(v)),
      min()
    ).subscribe(rank => {
      console.log(rank)
    })
  }

  filterValue(value: any) {
    // return value < 30 ? true : false   // for testing max operator
    return value > 30 ? true : false
  }

  checkCondition(value: any) {
    return value.length > 5 ? false : true;
  }

  checkCharCount(v: string) {
    return v.length < 10 ? true : false
  }

  readValue() {

  }
}
