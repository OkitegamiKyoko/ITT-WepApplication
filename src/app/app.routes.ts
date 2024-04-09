import { Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';

export const routes: Routes = [
    {path: 'about/:option',component: AboutComponent}
];
