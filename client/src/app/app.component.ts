import {Component, OnInit} from '@angular/core';
import {UsersService} from './services/users.service';
import {User} from './models';
import {Router} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user_temp: User;

  constructor(
    private auth: AuthService,
    private user: UsersService,
    private location: Location,
    private router: Router
  ) {

    if (this.auth.getPayload()._doc === undefined) {
      this.user_temp = this.auth.getPayload();
    } else {
      this.user_temp = this.auth.getPayload()._doc;
    }
  }

  getProfile(): void {
    this.user.getProfile()
      .subscribe(user => this.user_temp = user);
  }

  isAuth(): Boolean {
    if(this.auth.isAuthenticated()) {
      return true;
    }
    return false;
  }

  logout() {
    this.auth.logout()
      .subscribe({
        error: (err: any) => alert(err.message),
        complete: () =>  location.reload(true)

      });


  }

}
