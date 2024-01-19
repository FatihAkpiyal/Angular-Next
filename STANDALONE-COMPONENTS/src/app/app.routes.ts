import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: "standalone", loadComponent: ()=> import("./components/standalone/standalone.component")
    .then(s=>s.StandaloneComponent)},
    {path: "standalone2", loadComponent: ()=> import("./components/standalone2/standalone2.component")
    .then(s=>s.Standalone2Component)},
    

];
