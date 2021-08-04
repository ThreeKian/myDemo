import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items = []
  constructor() {}
  ngOnInit() {
    this.items = [{
      name: '日历',
      bgColor: '',
      url: '/tabs/tab1/my-calendar'
    }, {
      name: '扫码',
      bgColor: '',
      url: '/tabs/tab1/scan'
    }, {
      name: '数组归类',
      bgColor: '',
      url: '/tabs/tab1/array-class'
    }, {
      name: '数组归类后排序',
      bgColor: '',
      url: '/tabs/tab1/array-sort'
    }, {
      name: '返回上一页刷新',
      bgColor: '',
      url: '/tabs/tab1/back-refresh'
    }, {
      name: '闭包',
      bgColor: '',
      url: '/tabs/tab1/closure'
    }, {
      name: '路由守卫',
      bgColor: '',
      url: '/tabs/tab1/can-deactivate'
    }, {
      name: '数据处理',
      bgColor: '',
      url: '/tabs/tab1/data-screen'
    }]
    for (let i = 0; i < this.items.length; i++) {
      if (i % 6 === 1) {
        this.items[i].bgColor = '#f7a400';
      }
      if (i % 6 === 2) {
        this.items[i].bgColor = '#3a9efd';
      }
      if (i % 6 === 3) {
        this.items[i].bgColor = '#ff6150';
      }
      if (i % 6 === 4) {
        this.items[i].bgColor = '#58b368';
      }
      if (i % 6 === 5) {
        this.items[i].bgColor = '#D08EF1';
      }
      if (i % 6 === 0) {
        this.items[i].bgColor = '#a7a8a9';
      }
    }
  }
}
