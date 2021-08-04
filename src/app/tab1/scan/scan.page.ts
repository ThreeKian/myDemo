import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  AreaID = ''
  constructor(
    private barcodeScanner: BarcodeScanner,

  ) { }

  ngOnInit() {
    this.showScan()
  }
  showScan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      if (barcodeData.cancelled) {
        return false;
      }
      this.AreaID = barcodeData.text
    }, (err) => {
    });
  }
}
