import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandlePageComponent } from './candle-page/candle-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  {path: 'candle/:id', component:CandlePageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
