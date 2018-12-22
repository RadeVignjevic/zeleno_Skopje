import { Component, OnInit } from '@angular/core';
import { OneSignalService } from './onesignal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zeleno-skopje';

  constructor(private oneSignal: OneSignalService) {

  }
  ngOnInit() {
    this.oneSignal.init();
  }
}
