import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';

const routes: Routes = [
  { 
    path:'user/:userName',
    component: PhotoListComponent,
    resolve:{
      photos: PhotoListResolver
    }
  },
  { 
    path:'ap/add',
    component: PhotoFormComponent,
  },
  { 
    path:'**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
