import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodycontentComponent } from './body/bodycontent/bodycontent.component';
import { EmpComponent } from './employee/emp/emp.component';
import { FormExComponent } from './form-ex/form-ex.component';
import { ErrornotComponent } from './errornot/errornot.component';
import { WelcomebodyComponent } from './welcomebody/welcomebody.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: WelcomebodyComponent},
  {path: 'bodycc', component: BodycontentComponent},
  {path: 'empc', component: EmpComponent},
  {path: 'form', component: FormExComponent},
  {path: '**', component: ErrornotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BodycontentComponent, EmpComponent , FormExComponent,
  ErrornotComponent, WelcomebodyComponent]