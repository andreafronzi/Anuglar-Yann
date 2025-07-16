import {Routes} from '@angular/router';
import {ListaPostComponent} from './post/lista-post.component';
// Assicurarsi che ci sia una rotta per ListaPostComponent
// Esempio: { path: 'posts', component: ListaPostComponent }
import {ProvaComponent} from './prova/prova.component';
import {ButtonProvaComponent} from './button-prova/button-prova.component';
import {DetailPostComponent} from './post/detail/detail-post.component';

export const routes: Routes = [{
  path: '', redirectTo: '/list-posts', pathMatch: 'full'
}, {
  path: 'list-posts', component: ListaPostComponent
}, {
  path: 'button-prova', component: ButtonProvaComponent
}, {
  path: 'prova', component: ProvaComponent
},
  {
    path: 'post/:id', component: DetailPostComponent
  }


];
