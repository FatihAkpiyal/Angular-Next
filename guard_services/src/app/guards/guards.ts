import { HttpClient,HttpClientModule} from "@angular/common/http";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, ResolveFn, RouterStateSnapshot } from "@angular/router";

export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, 
state: RouterStateSnapshot) => {
    
    console.log("CanActivate Guard ");
    return true;
}

export const canDeactivate: CanDeactivateFn<any> = (component: any, currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {

        console.log("CanDeactivate Guard");
        return true;
    }

export const resolveGuard:ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{


     const httpClient = inject(HttpClient);
     return httpClient.get("https://jsonplaceholder.typicode.com/photos");

};


