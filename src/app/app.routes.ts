import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./componentes/home/home.component";
import {SearchComponent} from "./componentes/search/search.component";
import {ArtistaComponent} from "./componentes/artista/artista.component";

 const ROUTES:Routes=[
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
   {path: 'artista/:id', component:ArtistaComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

 export const APP_ROUTING = RouterModule.forRoot(ROUTES);

