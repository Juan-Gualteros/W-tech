import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Actividad1Component } from './actividad1/actividad1.component';
import { Actividad2Component } from './actividad2/actividad2.component';
import { ExplicacionComponent } from './explicacion/explicacion.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'actividad1', component: Actividad1Component },
      { path: 'actividad2', component: Actividad2Component },
      { path: 'explicacion', component: ExplicacionComponent},
      { path: '**', redirectTo: 'main', pathMatch: 'full' },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
