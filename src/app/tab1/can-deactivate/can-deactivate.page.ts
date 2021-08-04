import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-can-deactivate',
  templateUrl: './can-deactivate.page.html',
  styleUrls: ['./can-deactivate.page.scss'],
})
export class CanDeactivatePage implements OnInit {
  canLeave = 1;
  constructor() { }

  ngOnInit() {
  }
  change() {
    if (this.canLeave === 1) {
      this.canLeave = 0
    } else {
      this.canLeave = 1
    }
  }
  canDeactivate(): Observable<boolean> | boolean {
    return this.canLeave === 1 ? true : false;
  }
}
