import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class ProductService{
    constructor()//private logService:LogService
    { 

    }
    getProducts():Product[]{

        return [
          {name:"Keyboard",quantity:10},
          {name:"Mouse",quantity:15},
          {name:"Pencil",quantity:25},  
        ];
        
    }
}

export class Product {
    name:string;
    quantity:number;
}


// export class LogService{
//     log (){
//         console.log("logging...");
//     }
// }