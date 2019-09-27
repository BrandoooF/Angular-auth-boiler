import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PricingSetupComponent } from './admin/pricing-setup/pricing-setup.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NotesComponent } from './additional/notes/notes.component';
import { ShirtCalculatorComponent } from './additional/shirt-calculator/shirt-calculator.component';
import { BasicCalculatorComponent } from './additional/basic-calculator/basic-calculator.component';
import { ErrorDisplayComponent } from './shared/error-display/error-display.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { PrintAreaComponent } from './admin/print-area/print-area.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PricingSetupComponent,
    CalculatorComponent,
    NotesComponent,
    ShirtCalculatorComponent,
    BasicCalculatorComponent,
    ErrorDisplayComponent,
    LoadingComponent,
    PrintAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
