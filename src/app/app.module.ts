import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeModule } from 'primeng/tree';
import { MainComponent } from './main/main.component';
import { Actividad1Component } from './actividad1/actividad1.component';
import { Actividad2Component } from './actividad2/actividad2.component';
import { HeaderComponent } from './header/header.component';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { ExplicacionComponent } from './explicacion/explicacion.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Actividad1Component,
    Actividad2Component,
    HeaderComponent,
    ExplicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeModule,
    FieldsetModule,
    CommonModule,
    DividerModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    ButtonModule,
    FormsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
