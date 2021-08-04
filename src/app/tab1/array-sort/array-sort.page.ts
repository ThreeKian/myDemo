import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-sort',
  templateUrl: './array-sort.page.html',
  styleUrls: ['./array-sort.page.scss'],
})
export class ArraySortPage implements OnInit {
  res = { "code": 1, "data": [{ "id": "9a2cabe5-0458-4593-85b8-65d980b75a26", "pid": "00000000-0000-0000-0000-000000000000", "valueDescription": "天地（常州）自动化股份有限公司:访问记录小于4次,-2.8\r\n安全信息研究所:访问记录小于4次,-1.4\r\n监控二楼试验区:发生一般隐患2条;一般隐患超期2条;,-4.5\r\n人员闯入:发生一般隐患1条;一般隐患超期1条;,-10\r\n", "value": -14.2, "timestamp": "2020-06-01 10:10:00", "name": "天地（常州）自动化股份有限公司", "refId": "976b01fd-ff99-4b63-b20d-6c46ccae05e0", "type": "Company", "children": null }, { "id": "a4772f5c-bbe3-4c2b-a826-0e196904d567", "pid": "9a2cabe5-0458-4593-85b8-65d980b75a26", "valueDescription": null, "value": 0, "timestamp": "0001-01-01 00:00:00", "name": "黄河西路厂区", "refId": null, "type": "Factory", "children": null }, { "id": "aec291d1-4236-4252-b509-522a3398ce76", "pid": "9a2cabe5-0458-4593-85b8-65d980b75a26", "valueDescription": "安全信息研究所:访问记录小于4次,-1.4\r\n监控二楼试验区:发生一般隐患2条;一般隐患超期2条;,-4.5\r\n人员闯入:发生一般隐患1条;一般隐患超期1条;,-10\r\n", "value": -11.4, "timestamp": "2020-06-01 10:10:00", "name": "木梳路厂区", "refId": null, "type": "Factory", "children": null }, { "id": "478da96d-f53a-cf4b-5a4c-08d7fee74caf", "pid": "aec291d1-4236-4252-b509-522a3398ce76", "valueDescription": null, "value": 0, "timestamp": "0001-01-01 00:00:00", "name": "监控分院", "refId": null, "type": "Dept", "children": null }, { "id": "04b19905-8943-420a-98c5-ec18bad31718", "pid": "aec291d1-4236-4252-b509-522a3398ce76", "valueDescription": "安全信息研究所:访问记录小于4次,-1.4\r\n监控二楼试验区:发生一般隐患2条;一般隐患超期2条;,-4.5\r\n人员闯入:发生一般隐患1条;一般隐患超期1条;,-10\r\n", "value": -11.4, "timestamp": "2020-06-01 10:10:00", "name": "安全信息研究所", "refId": "d50ec7e8-c182-4ff2-ab55-6cd2d7dbf83c", "type": "Dept", "children": null }, { "id": "a38b1c86-f97d-c671-8405-08d803c8c3d0", "pid": "04b19905-8943-420a-98c5-ec18bad31718", "valueDescription": "监控二楼试验区:发生一般隐患2条;一般隐患超期2条;,-4.5\r\n", "value": -4.5, "timestamp": "2020-06-01 10:10:00", "name": "监控二楼试验区", "refId": "9f6b6ba0-a666-c05c-93bc-08d789de1ae3", "type": "Area", "children": null }, { "id": "dad14130-7e0c-ccca-8db5-08d804757581", "pid": "a38b1c86-f97d-c671-8405-08d803c8c3d0", "valueDescription": null, "value": 0, "timestamp": "0001-01-01 00:00:00", "name": "瓦斯中毒", "refId": "cb33c755-23c1-408d-9b6f-d83b6c2b76d4", "type": "Risk", "children": null }, { "id": "57519603-3b1d-c48a-2ecb-08d804766065", "pid": "dad14130-7e0c-ccca-8db5-08d804757581", "valueDescription": null, "value": 0, "timestamp": "0001-01-01 00:00:00", "name": "传感器是否正常", "refId": "625d74f8-9112-ce00-871f-08d804704f86", "type": "Measure", "children": null }, { "id": "3e261710-b891-c756-82c0-08d804768bbb", "pid": "dad14130-7e0c-ccca-8db5-08d804757581", "valueDescription": null, "value": 0, "timestamp": "0001-01-01 00:00:00", "name": "自动监测", "refId": "d437192a-7885-c808-871f-08d804704f86", "type": "Measure", "children": null }, { "id": "e5da67ba-89c3-c1a2-6932-08d80476a582", "pid": "dad14130-7e0c-ccca-8db5-08d804757581", "valueDescription": null, "value": 0, "timestamp": "0001-01-01 00:00:00", "name": "瓦斯是否泄漏", "refId": "0d6886c9-f753-cd6a-871f-08d804704f86", "type": "Measure", "children": null }, { "id": "311a9701-afab-ce44-4735-08d804759ddc", "pid": "a38b1c86-f97d-c671-8405-08d803c8c3d0", "valueDescription": null, "value": 0, "timestamp": "0001-01-01 00:00:00", "name": "高压作业", "refId": "06059cad-4325-458c-9f06-62a7622be066", "type": "Risk", "children": null }, { "id": "2968a29b-9091-cc64-d207-08d80476336a", "pid": "311a9701-afab-ce44-4735-08d804759ddc", "valueDescription": null, "value": 0, "timestamp": "0001-01-01 00:00:00", "name": "自动监测", "refId": "04815bef-d778-c406-42d0-08d804707f21", "type": "Measure", "children": null }, { "id": "73eed06d-9f13-4701-a4aa-5a721d140cae", "pid": "04b19905-8943-420a-98c5-ec18bad31718", "valueDescription": "人员闯入:发生一般隐患1条;一般隐患超期1条;,-10\r\n", "value": -10, "timestamp": "2020-06-01 10:10:00", "name": "三楼实验室", "refId": "1ad23ff4-e7a3-cf4c-2a87-08d7d20eb129", "type": "Area", "children": null }, { "id": "b753af47-b8da-c9c6-64cf-08d8006fcced", "pid": "73eed06d-9f13-4701-a4aa-5a721d140cae", "valueDescription": "人员闯入:发生一般隐患1条;一般隐患超期1条;,-10\r\n", "value": -10, "timestamp": "2020-06-01 10:10:00", "name": "人员闯入", "refId": "33ff6f55-f75e-4148-abd9-97826e605d8b", "type": "Risk", "children": null }, { "id": "f2828011-4192-cb18-4497-08d8018082df", "pid": "73eed06d-9f13-4701-a4aa-5a721d140cae", "valueDescription": "定期巡检:日常检查漏检1次,-1\r\n定期维护瓦斯传感器:日常检查漏检1次,-1\r\n", "value": -2, "timestamp": "2020-06-01 10:10:00", "name": "瓦斯超限", "refId": "7acc267b-6cf2-4307-8365-3374793c9d70", "type": "Risk", "children": null }, { "id": "4a2b3a7f-160f-c7e3-b425-08d80180de1e", "pid": "f2828011-4192-cb18-4497-08d8018082df", "valueDescription": "定期巡检:日常检查漏检1次,-1\r\n", "value": -1, "timestamp": "2020-06-01 10:10:00", "name": "定期巡检", "refId": "bb9776b9-877f-c209-6fd8-08d7f71839df", "type": "Mesaure", "children": null }, { "id": "9a827c23-a25c-c6ee-87ec-08d801810622", "pid": "f2828011-4192-cb18-4497-08d8018082df", "valueDescription": "定期维护瓦斯传感器:日常检查漏检1次,-1\r\n", "value": -1, "timestamp": "2020-06-01 10:10:00", "name": "定期维护瓦斯传感器", "refId": "641fdd8a-4aa3-cd76-ead0-08d7f7cda9a0", "type": "Measure", "children": null }], "message": null }
  deptId = 'd50ec7e8-c182-4ff2-ab55-6cd2d7dbf83c';
  Deptist = []
  constructor() { }

  ngOnInit() {
    let id = ''
    // 把登录用户的部门id放入数组checklist，与返回的列表数组res.data进行比较，找出部门id一样的元素，得出另一个数组resultList
    let checklist = [{ refId: this.deptId }]
    let resultList = this.res.data.filter(item => checklist.find(_item => item.refId === _item.refId))
    // 根据resultList内的id，寻找返回数组元素中的 pid，把id = pid的元素放进数组this.Deptist内
    if (resultList.length > 0) {
      id = resultList[0].id;
      this.res.data.forEach(item =>{
        if (item.pid === id) {
          this.Deptist.push(item)
        }
      })
      // 先判断this.Deptist中元素的value是否小于0，小于0就+100，如果还小于0，那就归零。最后把this.Deptist按照value的大小进行升序排序
      if (this.Deptist.length > 0) {
        this.Deptist.forEach(option =>{
          if (Number(option.value) < 0) {
            option.value = option.value + 100;
          }
          if (Number(option.value) < 0) {
            option.value = 0;
          }
        })
        this.Deptist.sort(this.sortBy('value', true));
      }
      console.log(this.Deptist)
    }
  }
  // 数组排序
  sortBy(attr, rev) {
    //第二个参数没有传递 默认升序排列
    if (rev == undefined) {
      rev = 1;
    } else {
      rev = (rev) ? 1 : -1;
    }

    return function (a, b) {
      a = a[attr];
      b = b[attr];
      if (a < b) {
        return rev * -1;
      }
      if (a > b) {
        return rev * 1;
      }
      return 0;
    }
  }
}