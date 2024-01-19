import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { canActivateGuard, canDeactivate, resolveGuard } from './guards/guards';




export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    {
        path: "products", component: ProductsComponent,
        canActivate:[canActivateGuard],
        canDeactivate:[canDeactivate],
        resolve: {photos:resolveGuard},
        children: [
            { path: ":id", component: ProductDetailComponent }

        ]

    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule{}



