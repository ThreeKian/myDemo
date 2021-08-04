import { Component, OnInit, Injectable } from '@angular/core';
import { EventEmitter } from 'eventemitter3';

@Injectable({
  providedIn: 'root'
})
export class GlobalPage {
  public event: any;
  constructor() { 
    this.event=new EventEmitter();  //这个实例就会被多个组件共享，来实现不同页面的数据通信
  }
  zeroTime(num) {
    let time = num;
    let timeStr = ''
    if (time < 10) {
      timeStr = '0' + time;
    } else {
      timeStr = JSON.stringify(time);
    }
    return timeStr;
  }
}
