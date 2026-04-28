import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home'; // Importación automática

const routes: Routes = [
  { path: '', component: Home }, // Ruta vacía = Pantalla de inicio
  { path: '**', redirectTo: '' }          // Si el usuario escribe cualquier cosa, vuelve a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }