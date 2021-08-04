import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-screen',
  templateUrl: './data-screen.page.html',
  styleUrls: ['./data-screen.page.scss'],
})
export class DataScreenPage implements OnInit {
  objList: any = [{
    obj: '厉害',
    value: '牛逼'
  }]
  constructor() { }

  ngOnInit() {
    this.bind()
    let list = [{ ra1: 1, ra2: 2 }, { ra1: 3, ra2: 4 }]
    let list2 = []
    list.forEach((item) => {
      for (let data in item) {
        let obj = {
          [data]: item[data]
        }
        list2 = list2.concat(obj)
      }
    })
    console.log(list)
    console.log(list2)
  }

  addObj() {
    let data = {
      obj: '',
      value: ''
    }
    this.objList.push(data)
  }

  bind() {
    this.objList.forEach(item => {
      let data = {
        [item.obj]: item.value,
        [item.value]: item.obj,
      }
      item.data = data
    });
  }
}
