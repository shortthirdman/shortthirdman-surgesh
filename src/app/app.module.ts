import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileFooterComponent } from './components/profile-footer/profile-footer.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { ProfileContactComponent } from './components/profile-contact/profile-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileHeaderComponent,
    ProfileFooterComponent,
    ProfileContentComponent,
    ProfileContactComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ProfileHeaderComponent, ProfileFooterComponent, ProfileContentComponent, ProfileContactComponent]
})
export class AppModule { }
