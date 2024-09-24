import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {
  // === Operator Constants ===
  // agents!: Observable<string>;
  // agentName!: string;

  // studentList: string[] = ['Garnacho', 'Rashford', 'Amad', 'Kobie'];
  // students: Observable<string[]> = of(this.studentList);

  // studentName: Observable<string> = of('Zirkzee');

  // studentObj = {
  //   id: 1,
  //   name: 'Hojlund'
  // };
  // students$: Observable<any> = of(this.studentObj);

  ordersArr: string[] = ['Photography', 'Gadget', 'Electronics'];
  orders$: Observable<string> = from(this.ordersArr);
  orderName!: string;

  // === FromEvent Operator ===
  @ViewChild('validate') // from #validate on button
  validate!: ElementRef;

  @ViewChild('getLink') // from #getLink on a html tag
  getLink!: ElementRef;

  constructor() {}

  ngOnInit(): void {
      // Episode 3
      // 
      // this.agents = new Observable(
      //   function(observer) {
      //     try {
      //       observer.next('waku');
      //       setTimeout(() => {
      //         observer.next('waka');
      //       }, 3000)
      //       setTimeout(() => {
      //         observer.next('waku waku');
      //       }, 6000)
      //     } catch(e) {
      //       observer.error(e);
      //     }
      //   }
      // )

      // this.agents.subscribe(data => {
      //   this.agentName = data;
      // })

      // === Of Operator ===
      // this.students.subscribe(student => {
      //   console.log(student);
      // })

      // this.studentName.subscribe(student => {
      //   console.log(student);
      // })

      // this.students$.subscribe(student => {
      //   console.log(student);
      // })

      // === From Operator ===
      // this.orders$.subscribe(order => {
      //   console.log(order);
      //   this.orderName = order;
      // })

      // === Interval Operator ===
      this.orders$.subscribe(order => {
        const seqNum$ = interval(500);

        seqNum$.subscribe(num => {
          if (num < 5) {
            console.log(order + num);
          }
        })
      })
  }

  rxjsEventObservable() {
    const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click');

    btnObservable$.subscribe(data => {
      console.log(data);
    })
  }

  getEventObservable() {
    const linkObservable$ = fromEvent(this.getLink?.nativeElement, 'mouseover');

    linkObservable$.subscribe(data => {
      console.log(data)
    })
  }
}
