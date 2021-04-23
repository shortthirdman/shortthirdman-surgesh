import { Component, OnInit, OnDestroy } from '@angular/core';

import { ConfigService } from './services/config.service';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  currentYear: string;
  personalInfo: any;

  constructor(private profile: ProfileService, private config: ConfigService) {
    this.currentYear = new Date().getFullYear().toString();
  }

  ngOnInit(): void {
    this.profile.getProfile().subscribe(
      data => this.personalInfo = data
    );
  }

  ngOnDestroy(): void {

  }
}
