import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-closure',
  templateUrl: './closure.page.html',
  styleUrls: ['./closure.page.scss'],
})
export class ClosurePage implements OnInit {
  str = '为空'
  constructor(
    public navCtrl: NavController,

  ) { }

  ngOnInit() {
  }
  goNext() {
    this.navCtrl.navigateForward('/tabs/tab1/closure/callback', {
      queryParams: {
        backUrl: '/tabs/tab1/closure',
        callback: (params) => {
          this.str = params.str;
        }
      }
    })
  }
}
