import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from "../models/user.model";



import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  getUserByEmail(email: string): Observable<User> {
   return this.httpClient.get(`http://localhost:3000/users?email=${email}`);
     // pipe(
     //   map((response: Response) => response.json())
     // )
      // .map((user: User) => console.log(user))
  }
}
