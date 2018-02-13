import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { Http, HttpModule, Headers, Response } from '@angular/http'
import { ActivatedRoute } from '@angular/router'
import { UserDataService } from '../data-services/user-data.service'

@Component({
  selector: 'app-search-page',
  providers: [HttpModule],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  users = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userDataService: UserDataService
  ) {}

  ngOnInit() {
      // Search is performed if params given on URL (reloaded page or copy/paste link)
      let username = this.route.snapshot.queryParams["search"]
      if (username){
        this.loadUser(username)
      }
  }
  onSubmit(val) {
    // Performs the search
    this.loadUser(val.username)
  }

  onChange(val) {
    // On each change on search bar
    // Copies the search parameter to the URL
    if ( val.username.length > 0 ) {
      this.location.replaceState(`?search=${val.username}`)
    }
    else{
      this.location.replaceState('')
    }
    // and performs the search
    this.loadUser(val.username);
  }

  loadUser(userName) {
    // Gets user's data
    this.userDataService.getUsers(userName)
    .subscribe(
      result  => this.users = result.items,
      error => { console.log(error)}
    )
  }

}
