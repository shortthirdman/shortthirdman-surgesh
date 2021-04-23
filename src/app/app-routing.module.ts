import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'resume', component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledNonBlocking', onSameUrlNavigation: 'reload', useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [BlogComponent, ContactComponent, ProfileComponent, ResumeComponent];