import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/contact/contact-form/contact-form.module').then(
        (m) => m.ContactFormModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
