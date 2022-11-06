import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

export class User {
  _id: number;
  name: string;
  nationality: string;
  filename: string;
}


@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  endpoint = 'http://localhost:8080/api/groups';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor (private httpClient: HttpClient) { }

  getgroups(){

    return this.httpClient.get(this.endpoint);
  }

  deleteGroup(id){

    return this.httpClient.delete(this.endpoint + '/' + id);
  }

  createGroup(group, blob){
    //return this.httpClient.post<User>(this.endpoint, JSON.stringify(user), this.httpOptions);
    let formData = new FormData();
    formData.append("name", group.name);
    formData.append("nationality", group.nationality);
    formData.append("file", blob);

    return this.httpClient.post(this.endpoint, formData);
  }

  getGroup(id) {
    
    const result = this.httpClient.get(this.endpoint + '/' + id);

    return result;
    
  }

  updateGroup(id, user: User) {
 return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(user), this.httpOptions);
  }
 
  // updateGroup(group, blob){
  //   //return this.httpClient.post<User>(this.endpoint, JSON.stringify(user), this.httpOptions);
  //   let formData = new FormData();
  //   formData.append("name", group.name);
  //   formData.append("nationality", group.nationality);
  //   formData.append("file", blob);

  //   return this.httpClient.put(this.endpoint+ '/' + group.id, formData);
  // }
}

