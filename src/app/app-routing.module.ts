import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitiesComponent } from './components/cities/cities.component';

const routes: Routes = [
  {
  path: '',component:HomeComponent
  },
  {
    path: 'cities',component:CitiesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
