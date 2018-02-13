import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../data-services/user-data.service'

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users: Array<any>;

  constructor(
    private router: Router,
    private userDataService: UserDataService
  ) {}

  onUserClick(userData) {
    // Saves the user's data to the Service
    this.userDataService.setUserData(userData);
    // And redirects
    this.router.navigate(['/profile'], { queryParams: { user: userData.login } });
  }
}
