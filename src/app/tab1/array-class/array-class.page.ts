import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-array-class',
  templateUrl: './array-class.page.html',
  styleUrls: ['./array-class.page.scss'],
})
export class ArrayClassPage implements OnInit {
  list = [{ "areaName": "检测中心", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "产业中心", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "监控分院", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "电气分院", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "后勤管理部", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "经营管理部", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "销售公司", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "非煤研究所", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "工艺结构所", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "经营管理部", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "通信分院", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "工控分院", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "安全信息所", "compareString": "天地（常州）自动化股份有限公司" }, { "areaName": "隔爆试验室", "compareString": "检测中心" }, { "areaName": "隔爆气瓶房", "compareString": "检测中心" }, { "areaName": "安全火花试验室", "compareString": "检测中心" }, { "areaName": "本安气瓶房", "compareString": "检测中心" }, { "areaName": "气体传感器实验室", "compareString": "检测中心" }, { "areaName": "气体传感器气瓶房", "compareString": "检测中心" }, { "areaName": "气候环境试验室", "compareString": "检测中心" }, { "areaName": "机械环境试验室", "compareString": "检测中心" }, { "areaName": "电器试验区（监控大楼一楼）", "compareString": "检测中心" }, { "areaName": "电磁兼容验室", "compareString": "检测中心" }, { "areaName": "电池试验室", "compareString": "检测中心" }, { "areaName": "风洞试验室", "compareString": "检测中心" }, { "areaName": "系统性能试验室", "compareString": "检测中心" }, { "areaName": "模拟巷道试验室（新区）", "compareString": "检测中心" }, { "areaName": "高压电气试验室（新区）（暂由电气管理）", "compareString": "检测中心" }, { "areaName": "二车间东北角变电室", "compareString": "产业中心" }, { "areaName": "二车间东侧高压试验区", "compareString": "产业中心" }, { "areaName": "二车间西侧高压试验区", "compareString": "产业中心" }, { "areaName": "二车间装配及其他区", "compareString": "产业中心" }, { "areaName": "一车间钳工区", "compareString": "产业中心" }, { "areaName": "\"一车间装卸、机装、配线 （机动）\"", "compareString": "产业中心" }, { "areaName": "新区气瓶房", "compareString": "产业中心" }, { "areaName": "气体传感器调试老化房", "compareString": "产业中心" }, { "areaName": "三楼半硫化氢调试区", "compareString": "产业中心" }, { "areaName": "打标室", "compareString": "产业中心" }, { "areaName": "结构件仓库", "compareString": "产业中心" }, { "areaName": "结构件检验区", "compareString": "产业中心" }, { "areaName": "二楼车间维修区", "compareString": "产业中心" }, { "areaName": "二楼车间包装线", "compareString": "产业中心" }, { "areaName": "二楼整机调试区及其他区域", "compareString": "产业中心" }, { "areaName": "空压机房及剥线区", "compareString": "产业中心" }, { "areaName": "二楼老化房", "compareString": "产业中心" }, { "areaName": "二楼风洞房", "compareString": "产业中心" }, { "areaName": "二楼工艺试制室", "compareString": "产业中心" }, { "areaName": "三楼灌封房", "compareString": "产业中心" }, { "areaName": "单板调试", "compareString": "产业中心" }, { "areaName": "电源装配线", "compareString": "产业中心" }, { "areaName": "高压调试区", "compareString": "产业中心" }, { "areaName": "发泡袋包装机料库房", "compareString": "产业中心" }, { "areaName": "包装纸箱库房", "compareString": "产业中心" }, { "areaName": "元器件检验室", "compareString": "产业中心" }, { "areaName": "化学品仓库", "compareString": "产业中心" }, { "areaName": "元器件库", "compareString": "产业中心" }, { "areaName": "产业办公室", "compareString": "产业中心" }, { "areaName": "一楼办公室会议室", "compareString": "产业中心" }, { "areaName": "监控201EMC实验室", "compareString": "天地（常州）自动化股份有限公司/监控分院" }, { "areaName": "监控203气体实验室", "compareString": "天地（常州）自动化股份有限公司/监控分院" }, { "areaName": "监控205气体实验室", "compareString": "天地（常州）自动化股份有限公司/监控分院" }, { "areaName": "监控气瓶库房", "compareString": "天地（常州）自动化股份有限公司/监控分院" }, { "areaName": "监控二楼试验区", "compareString": "天地（常州）自动化股份有限公司/监控分院" }, { "areaName": "电气二车间载荷试验室", "compareString": "天地（常州）自动化股份有限公司/电气分院" }, { "areaName": "电气强电实验室", "compareString": "天地（常州）自动化股份有限公司/电气分院" }, { "areaName": "木梳路公共区域", "compareString": "天地（常州）自动化股份有限公司/后勤管理部" }, { "areaName": "木梳路配电室区域", "compareString": "天地（常州）自动化股份有限公司/后勤管理部" }, { "areaName": "木梳路抽水泵房", "compareString": "天地（常州）自动化股份有限公司/后勤管理部" }, { "areaName": "新区公共区域", "compareString": "天地（常州）自动化股份有限公司/后勤管理部" }, { "areaName": "新区配电室区域", "compareString": "天地（常州）自动化股份有限公司/后勤管理部" }, { "areaName": "全厂区", "compareString": "天地（常州）自动化股份有限公司/后勤管理部" }, { "areaName": "车棚（检测）", "compareString": "天地（常州）自动化股份有限公司/后勤管理部" }, { "areaName": "车棚（监控）", "compareString": "天地（常州）自动化股份有限公司/后勤管理部" }, { "areaName": "车棚（新区）", "compareString": "天地（常州）自动化股份有限公司/后勤管理部" }, { "areaName": "成品仓库（经管）", "compareString": "天地（常州）自动化股份有限公司/经营管理部" }, { "areaName": "发货区（销售）", "compareString": "天地（常州）自动化股份有限公司/销售公司" }, { "areaName": "电子实验室", "compareString": "天地（常州）自动化股份有限公司/非煤研究所" }, { "areaName": "三楼实验室", "compareString": "天地（常州）自动化股份有限公司/安全信息所" }]
  showList = [];
  showInput = false;
  checkAreaName = '';
  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.checkList();
  }
  checkList() {
    let list = this.list,
      flag = 0,
      data = [];
      list.forEach(item1 =>{
        if (!data[item1.compareString]) {
          var arr = [];
          arr.push(item1);
          data[item1.compareString] = arr;
        } else {
          data[item1.compareString].push(item1)
        }
      })
    console.log(data);
    for (let item in data) {
      let dict = {
        areaName: item,
        data: []
      }
      this.showList.push(dict);
    }
    this.showList.forEach(item2 =>{
      item2.data = data[item2.areaName]
    })
    console.log(this.showList)
  }
  showAreaList() {
    this.showInput = false;
    this.showList = [];
    this.checkList();
  }
  onAreaClick(item) {
    if (item.data) {
      this.showList = item.data
    } else {
      this.showInput = true;
      this.showList = [];
      this.checkAreaName = item.areaName
    }
  }
}
