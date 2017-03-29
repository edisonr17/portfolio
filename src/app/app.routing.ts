import {Routes, RouterModule} from '@angular/router';
import {AlgoritmsComponent} from './sections/algoritms/algoritms.component';

const appRoutes = [
 { path: 'algoritms', component: AlgoritmsComponent }
];
   

export const routing = RouterModule.forRoot(appRoutes);