import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {
  callback;
  backUrl = ''
  constructor(
    public navCtrl: NavController,
    private activedRoute: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.activedRoute.queryParams.subscribe(data => {
      this.callback = data.callback;
      this.backUrl = data.backUrl;
    })
  }
  goBack() {
    let item = {
      str: '闭包回调'
    }
    this.callback ? this.callback(item) : '';
    this.navCtrl.navigateBack(this.backUrl)
  }
}
