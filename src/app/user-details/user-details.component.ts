import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../data-services/user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user:any;
  userRepositories = [];
  userFollowers = [];
  reposLimit = 15;
  followersLimit = 15;

  constructor(
    private route: ActivatedRoute,
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    // Gets user's data that is retrieved in the previous page
    this.user = this.userDataService.getUserData();
    // If no data (reloaded page or copy/paste link) then get them from API
    if(this.user){
      this.loadUserRepositories(this.user.repos_url);
      this.loadUserFollowers(this.user.followers_url);
    }
    else{
      let username = this.route.snapshot.queryParams["user"];
        // If parameter user exists in the URL
      if (username){
        this.loadUser(username);
      }
    }
  }

  loadUser(userName) {
    // Gets user's data
    this.userDataService.getUsers(userName)
    .subscribe(
      result  =>(
        this.user = result.items[0],
        // Requests repositories and follower after retrieving user's data
        this.loadUserRepositories(this.user.repos_url),
        this.loadUserFollowers(this.user.followers_url)

      ),
      error => {console.log(error)}
    )
  }

  // Requests the user's repositories using the link provided in user's object
  loadUserRepositories(URL){
    this.userDataService.getUserExtras(URL)
    .subscribe(
      result  =>(
        this.userRepositories = result
      ),
      error => {console.log(error)}
    )
  }

  // Requests the user's followers using the link provided in user's object
  loadUserFollowers(URL){
    this.userDataService.getUserExtras(URL)
    .subscribe(
      result  =>(
        this.userFollowers = result
      ),
      error => {console.log(error)}
    )
  }

}
