import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.page.html',
  styleUrls: ['./my-calendar.page.scss'],
})
export class MyCalendarPage implements OnInit {
  all_year = [];
  all_month = [];
  public dateValue: Date | null = null;
  public showDate = 0;
  showRed = false;
  // 当前年月日
  active_day: any;
  current_day: any;
  current_year: any;
  current_month: any;
  select_year: any;
  select_month: any;
  // 指定的年和月的所有日期
  days = [];
  showrili = true;
  constructor(
    private router: Router,
  ) { }
  ngOnInit() {
    this.dateValue = new Date();
    let showDate = this.dateToMs(this.dateValue);
    showDate = this.formatDate(showDate, 'yyyy-MM-dd hh:mm:ss');
    // 获取当前时间的年月日时间
    this.current_year = (showDate.toString()).substr(0, 4);
    this.current_month = (showDate.toString()).substr(5, 2);
    this.showTime();
  }
  showTime() {
    //在select中填入年份
    for (let year = 2016; year < 2050; year++) {
      let obj_1 = { 'value': year, 'id': year }
      this.all_year.push(obj_1);
    }
    //在select中填入月份
    for (let month = 1; month < 13; month++) {
      let obj_2 = { 'value': month, 'id': month }
      this.all_month.push(obj_2);
    }
    //初始化显示 当前年和月
    this.show_now();
  }
  homing() {
    this.dateValue = new Date();
    let showDate = this.dateToMs(this.dateValue);
    showDate = this.formatDate(showDate, 'yyyy-MM-dd hh:mm:ss');
    // 获取当前时间的年月日时间
    this.current_year = (showDate.toString()).substr(0, 4);
    this.current_month = (showDate.toString()).substr(5, 2);
    this.showTime();
  }

  //初始化显示 当前年和月
  show_now() {
    let now = this.dateValue;
    this.active_day = now.getDate();
    this.current_day = now.getDate();
    this.select_year = now.getFullYear();
    this.select_month = now.getMonth() + 1;
    this.showDays(this.select_year, this.select_month)
  }

  //展示指定的年和月的所有日期
  showDays(year, month) {
    this.days = [];
    //得到表示指定年和月的1日的那个时间对象
    let date = new Date(year, month - 1, 1);
    //1.先添加响应的空白的div:这个月1号是星期几，就添加几个空白的div
    let dayOfWeek = date.getDay(); //得到1日是星期几
    for (let i = 0; i < dayOfWeek; i++) {
      this.days.push({ day: '' });
    }
    //计算一个月有多少天
    let daysOfMonth = this.calDays(year, month);
    //2. 从1号开始添加li
    let day = { day: '', choosed: false }
    for (let j = 1; j <= daysOfMonth; j++) {
      day.day = String(j);
      this.days.push(day);
      day = { day: '', choosed: false }
    }
  }

  //返回指定的月份的天数 月份1-12
  calDays(year, month) {
    return new Date(year, month, 0).getDate();
  }


  //  下一个月
  nextMonth() {
    this.showDate = this.dateToMs(this.dateValue);
    this.showDate = this.formatDate(this.showDate, 'yyyy-MM-dd hh:mm:ss');
    // 获取当前时间的年月日时间
    const year = (this.showDate.toString()).substr(0, 4);
    const month = (this.showDate.toString()).substr(5, 2);
    const date = '01';
    const time = (this.showDate.toString()).substr(10, 9);
    this.dateValue = new Date(year + '-' + month + '-' + date + ' ' + time)
    // 判断月份，然后往前倒推一个月
    if (month === '04' || month === '06' || month === '09' || month === '11') {
      this.dateValue = new Date(this.dateValue.getTime() + 30 * 24 * 3600 * 1000);
    } else if (month === '01' || month === '03' || month === '05' || month === '07' || month === '08' || month === '10' ||
      month === '12') {
      this.dateValue = new Date(this.dateValue.getTime() + 31 * 24 * 3600 * 1000);
    } else if (month === '02') {
      // 判断闰年
      if (Number(year) % 4 === 0) {
        this.dateValue = new Date(this.dateValue.getTime() + 29 * 24 * 3600 * 1000);
      } else {
        this.dateValue = new Date(this.dateValue.getTime() + 28 * 24 * 3600 * 1000);
      }
    }
    this.showDate = this.dateToMs(this.dateValue);
    this.showDate = this.formatDate(this.showDate, 'yyyy-MM-dd hh:mm:ss');
    this.select_year = (this.showDate.toString()).substr(0, 4);
    this.select_month = this.zeroTime((this.showDate.toString()).substr(5, 2));
    this.showDays(this.select_year, this.select_month)
    console.log(this.showDate)
  }

  //  上一个月
  preMonth() {
    this.showDate = this.dateToMs(this.dateValue);
    this.showDate = this.formatDate(this.showDate, 'yyyy-MM-dd hh:mm:ss');
    // 获取当前时间的年月日时间
    const year = (this.showDate.toString()).substr(0, 4);
    const month = (this.showDate.toString()).substr(5, 2);
    const date = (this.showDate.toString()).substr(8, 2);
    const time = (this.showDate.toString()).substr(10, 9);
    this.dateValue = new Date(year + '-' + month + '-' + date + ' ' + time)
    // 判断月份，然后往前倒推一个月
    if (month === '01' || month === '02' || month === '04' || month === '06' || month === '08' || month === '09' || month === '11') {
      this.dateValue = new Date(this.dateValue.getTime() - 31 * 24 * 3600 * 1000);
    } else if (month === '05' || month === '07' || month === '10' || month === '12') {
      this.dateValue = new Date(this.dateValue.getTime() - 30 * 24 * 3600 * 1000);
    } else if (month === '03') {
      // 判断闰年
      if (Number(year) % 4 === 0) {
        this.dateValue = new Date(this.dateValue.getTime() - 29 * 24 * 3600 * 1000);
      } else {
        this.dateValue = new Date(this.dateValue.getTime() - 28 * 24 * 3600 * 1000);
      }
    }
    this.showDate = this.dateToMs(this.dateValue);
    this.showDate = this.formatDate(this.showDate, 'yyyy-MM-dd hh:mm:ss');
    this.select_year = (this.showDate.toString()).substr(0, 4);
    this.select_month = this.zeroTime((this.showDate.toString()).substr(5, 2));
    this.showDays(this.select_year, this.select_month)
    console.log(this.showDate)
  }

  change_day(day) {
    this.active_day = this.zeroTime(day);
    for (let item of this.days) {
      if (item.day === day) {
        item.choosed = true;
      } else {
        item.choosed = false;
      }
    }
    console.log(this.select_year + '-' + this.select_month + '-' + this.active_day)
  }
  //标准时间转化为时间戳
  dateToMs(date) {
    let result = new Date(date).getTime();
    return result;
  }

  padLeftZero(str) {
    return ('00' + str).substr(str.length);
  }

  //过滤时间戳 转换为标准时间
  formatDate(data, fmt) {
    let date = new Date(data);
    let o = {
      'M+': date.getMonth() + 1,                    //月份
      'd+': date.getDate(),                        //日
      'h+': date.getHours(),                       //小时
      'm+': date.getMinutes(),                     //分  
      's+': date.getSeconds(),                     //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
      "S": date.getMilliseconds()                 //毫秒   
    };
    if (/(y+)/.test(fmt)) {   //年份
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
      }
    }
    return fmt;
  }
  zeroTime(num) {
    let time = Number(num);
    let timeStr = ''
    if (time < 10) {
      timeStr = '0' + time;
    } else {
      timeStr = JSON.stringify(time);
    }
    return timeStr;
  }
}
