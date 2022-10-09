import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

export class User {
  _id: number;
  name: string;
  nationality: string;
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

  createGroup(user: User){
    return this.httpClient.post<User>(this.endpoint, JSON.stringify(user), this.httpOptions);
  }

  getGroup(id) {
    return this.httpClient.get(this.endpoint + '/' + id);
  }

  updateGroup(id, user: User) {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(user), this.httpOptions);
  }
 

}

