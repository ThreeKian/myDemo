import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GlobalPage } from 'src/app/global/global.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.page.html',
  styleUrls: ['./next-page.page.scss'],
})
export class NextPagePage implements OnInit {

  constructor(
    public global: GlobalPage,
    public changeDetectorRef: ChangeDetectorRef,
    public navCtrl: NavController,

  ) { }

  ngOnInit() {
  }
  goBack() {
    // 发送广播
    this.global.event.emit('backRefresh');
    this.navCtrl.navigateForward('/tabs/tab1/back-refresh');

  }
}
