import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {map} from "rxjs/operators";
import {User} from "../models/user.model";

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  getUserByEmail(email: string): Observable<User> {
   return this.httpClient.get(`http://localhost:3000/users?email=${email}`)
     .pipe(map(users => users[0]))
  }

  createNewUser(user: User): Observable<User> {
    return this.httpClient.post(`http://localhost:3000/users`, user)
      .pipe(map(users => user))
  }
}
