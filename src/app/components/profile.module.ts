import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileFooterComponent } from './profile-footer/profile-footer.component';
import { ProfileContentComponent } from './profile-content/profile-content.component';
import { ProfileContactComponent } from './profile-contact/profile-contact.component';

@NgModule({
  declarations: [
	ProfileHeaderComponent,
    ProfileFooterComponent,
    ProfileContentComponent,
    ProfileContactComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    ProfileHeaderComponent,
	ProfileFooterComponent,
	ProfileContentComponent,
	ProfileContactComponent
  ]
})
export class ProfileModule { }
