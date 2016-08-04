import { provideRouter, RouterConfig } from '@angular/router';

import { LoginComponent } from './components/login.component';
import { PageNotFoundComponent } from './components/404.component';
import { UserDashbardComponent } from './components/dashboard.component';

const routes: RouterConfig = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', children: [
    { path: ':id', children: [
      { path: '', component: UserDashbardComponent }
    ]}
  ]},
  { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
