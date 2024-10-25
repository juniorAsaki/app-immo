import { Routes } from '@angular/router';
import {BasePageComponent} from './presentations/page/base-page/base-page.component';
import {ListBiensComponent} from './presentations/page/list-biens/list-biens.component';

export const routes: Routes = [
  {path: "home" , component: BasePageComponent},
  {path: "" , redirectTo: "home" , pathMatch: "full"},
  {path: "biens" , component: ListBiensComponent}
];
