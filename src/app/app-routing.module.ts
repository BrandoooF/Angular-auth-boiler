import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PricingSetupComponent } from './admin/pricing-setup/pricing-setup.component';

const routes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'configure', component: PricingSetupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
