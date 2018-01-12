import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor(private appServ: AppService) {}

  ngOnInit() {
    this.appServ.getTvShow()
    .subscribe(res => {
      const test = res;
      console.log(test);
    }, err => console.log(err));
  }

}
