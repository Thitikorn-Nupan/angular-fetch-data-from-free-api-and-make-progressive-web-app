import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UniversitiesTableComponent} from "./components/universities-table/universities-table.component";
import {TestAComponent} from "./components/test-a/test-a.component";
import {TestBComponent} from "./components/test-b/test-b.component";

const routes: Routes = [
  {path: 'universities-table', component: UniversitiesTableComponent},
  {path: 'test-a', component: TestAComponent},
  {path: 'test-b', component: TestBComponent},
  {path: '',redirectTo:'',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
