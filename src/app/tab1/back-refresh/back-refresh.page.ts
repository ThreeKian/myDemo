import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GlobalPage } from 'src/app/global/global.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-back-refresh',
  templateUrl: './back-refresh.page.html',
  styleUrls: ['./back-refresh.page.scss'],
})
export class BackRefreshPage implements OnInit {
  num = 0;
  constructor(
    public global: GlobalPage,
    public changeDetectorRef: ChangeDetectorRef,
    public navCtrl: NavController,

  ) { }

  ngOnInit() {
    this.global.event.on('backRefresh', (result) => {
      this.num++;
      // 防止页面数据不刷新（接口已更新数据，但是界面没更新）
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    })
  }
  goNext() {
    this.navCtrl.navigateForward('/tabs/tab1/back-refresh/next-page');
  }
}
