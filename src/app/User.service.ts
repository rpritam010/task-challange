import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  User=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getUser(){
    return this._http.get("http://localhost:4200/api/select.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }
  addUser(info){
    return this._http.post("http://localhost/api/insert.php",info)
      .map(()=>"");
  }
  getUser(id){
    return this._http.post("http://localhost/api/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  deleteUser(id){
    return this._http.post("http://localhost/api/delete.php/",{'id':id})
      .map(()=>this.getUser());
  }
  updateUser(info){
    return this._http.post("http://localhost/api/update.php/", info)
      .map(()=>"");
  }
}
