import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDataService {

  userData="";

  constructor(private http: Http) {}

  getUsers(userName) {
    // Query to retrieve user's data
    return this.http.get(`https://api.github.com/search/users?q=in:login%20${userName}`)
    .map((res:Response) => res.json());
  }

  getUserExtras(requestURL) {
    // Query to retrieve extra info about the user (Depends on the given URL)
    return this.http.get(requestURL)
    .map((res:Response) => res.json());
  }

  setUserData(data) {
    // Saves the user's data to be used in the next pages
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

}
