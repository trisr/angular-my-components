import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';
import { TimerService } from '../../services/timer/timer.service';

@Component({
  selector: 'app-stop-watch',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './stop-watch.component.html',
  styleUrl: './stop-watch.component.scss'
})
export class StopWatchComponent implements OnDestroy {
  counter: number = 0;
  
  private subscription: Subscription = new Subscription();

  constructor(private timerService: TimerService) {
    this.subscription.add(
      this.timerService.stopWatch$.subscribe(
        (val: number) => this.counter = val
      )
    )
  }

  public startCount(): void {
    this.timerService.startCount()
  }

  public stopCount(): void {
    this.timerService.stopCount()
  }

  public resetCount(): void {
    this.timerService.resetCount();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
