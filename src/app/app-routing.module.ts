import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { GraphQLExmapleComponent } from './graph-qlexmaple/graph-qlexmaple.component';
 import { HomeComponent } from './home/home.component';
import { MouseMoveComponent } from './mouse-move/mouse-move.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnicastMulticastComponent } from './unicast-multicast/unicast-multicast.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'unimul', component: UnicastMulticastComponent },
  { path: 'graphql', component: GraphQLExmapleComponent },
  {path:'mousemove',component:MouseMoveComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
