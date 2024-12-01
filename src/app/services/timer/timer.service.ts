import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subscription, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private readonly initialTime = 0;

  private timer$: BehaviorSubject<number> = new BehaviorSubject(this.initialTime);
  private lastStopedTime: number = this.initialTime;
  private timerSubscription: Subscription = new Subscription();
  private isRunning: boolean = false;

  constructor() { }

  public get stopWatch$(): Observable<number> {
    return this.timer$.pipe(
      map((val: number) => val)
    )
  }

  startCount(): void {
    if (this.isRunning) {
      return;
    }

    this.timerSubscription = timer(0, 1000)
      .pipe(map((value: number): number => value + this.lastStopedTime))
      .subscribe(this.timer$)

    this.isRunning = true;
  }

  stopCount(): void {
    this.lastStopedTime = this.timer$.value;
    this.timerSubscription.unsubscribe();
    this.isRunning = false;
  }

  resetCount(): void {
    this.timerSubscription.unsubscribe();
    this.lastStopedTime = this.initialTime;
    this.timer$.next(this.initialTime);
    this.isRunning = false;
  }
}
