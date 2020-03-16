/*
 * This file is copyright 2002-2020
 *
 * Halogen Software Inc. All rights reserved.
 * http://www.halogensoftware.com
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * is not permitted absent prior written approval from Halogen Software Inc.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {Resolver} from './servers/edit-server/resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ] },
  { path: 'servers',
    component: ServersComponent, children: [
      { path: ':id', component: ServerComponent, resolve: { server: Resolver } },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [ CanDeactivateGuard ] }
    ],
    // canActivate: [ AuthGuardService ]
    canActivateChild: [ AuthGuardService ]
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
