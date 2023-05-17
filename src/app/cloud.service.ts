import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  public arr:any[]=[]
  
  constructor() { }

 
public getarr(){
  return this.arr
}

}
