import { RouterModule } from "@angular/router";
import { FormComponent } from "./app/form/form.component";
import { DataComponent } from "./app/data/data.component";


let router = [
    {path:'form', component:FormComponent},
    {path:'data', component:DataComponent}
]

let routeconfig = RouterModule.forRoot(router)

export{routeconfig}