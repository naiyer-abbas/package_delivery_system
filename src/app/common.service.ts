import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import {User} from './shared/user.model'


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  selectedUser: User = new User;
  users: User[] = [];
  readonly baseURL = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }
  createUser(user: User){
    return this.http.post(this.baseURL, user);
  }
}

