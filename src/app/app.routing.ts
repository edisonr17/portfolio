import {Routes, RouterModule} from '@angular/router';
import {AlgoritmsComponent} from './sections/algoritms/algoritms.component';
import {HomeComponentComponent} from './template/home-component/home-component.component';
import {ExperimentsComponent} from './sections/experiments/experiments.component';
import {FormGeneratorComponent} from './sections/experiments/form-generator/form-generator.component';


import {AppComponent} from './app.component';
const appRoutes: Routes = [
 { path: 'algoritms', component: AlgoritmsComponent },
 { path: 'experiments', component: ExperimentsComponent },
 { path: 'formGenerator', component: FormGeneratorComponent },
 { path: '', component: HomeComponentComponent }
 
];
   

export const routing = RouterModule.forRoot(appRoutes);