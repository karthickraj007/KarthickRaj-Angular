import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CloudService } from '../cloud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

constructor(public svc:CloudService, public route:Router ){

}



userprofile = new FormGroup({
  Id:new FormControl(''),
  FirstName:new FormControl(''),
  LastName:new FormControl(''),
  Age:new FormControl('')
})


 

public getdata(){
 
  this.svc.arr.push(this.userprofile.value)
  alert("Log in Successful")
  console.log(this.svc.arr)
   this.route.navigate(['/data'])
  

}

}
