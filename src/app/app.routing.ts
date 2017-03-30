import {Routes, RouterModule} from '@angular/router';
import {AlgoritmsComponent} from './sections/algoritms/algoritms.component';
import {AppComponent} from './app.component';
const appRoutes = [
 { path: 'algoritms', component: AlgoritmsComponent }
 
];
   

export const routing = RouterModule.forRoot(appRoutes);