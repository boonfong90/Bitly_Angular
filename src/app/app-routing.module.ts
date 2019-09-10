import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlListPageComponent } from './url-list-page/url-list-page.component'
import { HomePageComponent } from './home-page/home-page.component'

const routes: Routes = [
  { path: 'URLs', component: UrlListPageComponent },
  { path: 'Home', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
