import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/user/user.module').then(mod => mod.UserModule)
  },
  {
    path: 'ideas',
    loadChildren: () =>
      import('./features/idea/idea.module').then(mod => mod.IdeaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
