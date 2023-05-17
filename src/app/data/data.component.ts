import { Component } from '@angular/core';
import { CloudService } from '../cloud.service';
import { Router } from '@angular/router';
import { animationFrameScheduler } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {


public data:any[] = []
public arr1:boolean = false
public search:any
public p:number= 1

public k:any = {
  Id:"",
  FirstName:"",
  LastName:"",
  Age:""
}



constructor(public svc:CloudService, public route:Router){

}

public getdata(){
  this.data = this.svc.getarr()
  console.log(this.data)
  this.arr1 = true
  
}

key:string = 'Id';
reverse:boolean = false;
public sort(key:any){
  this.key = key;
  this.reverse = !this.reverse
}


public edit(k:any){
  this.data.forEach(element =>{
    element.isEdit = false
  })
  k.isEdit = true;
}

public cancel(k:any){
 
  k.isEdit = false;
}

public update(k:any){
  this.k = k  
  k.isEdit = false;
}

public delete(k:number){
    const index: number = this.svc.arr.indexOf(k);
    if (index !== -1) {
        this.svc.arr.splice(index, 1);
    }   
    console.log(this.svc.arr)     

}


public form(){
  this.route.navigate(['/form'])
}
  
}
