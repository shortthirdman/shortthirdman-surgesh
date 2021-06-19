import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  config: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
  };

  constructor(private primengConfig: PrimeNGConfig) {
  }
  
  ngOnInit(): void {
	this.primengConfig.ripple = true;
  }
  
  ngOnDestroy(): void {
	  
  }
}
