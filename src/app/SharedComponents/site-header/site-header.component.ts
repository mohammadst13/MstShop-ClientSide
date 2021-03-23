import {Component, OnInit} from '@angular/core';
import {CurrentUser} from '../../DTOs/Account/CurrentUser';
import {AuthService} from '../../services/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  user: CurrentUser = null;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  logOutUser() {
    /*this.authService.logOutUser().subscribe(res => {
      if (res.status === 'Success') {
        console.log('user is logged out');
      }
    });*/

    this.cookieService.delete('Mstshop-cookie');
    this.authService.setCurrentUser(null);
    this.router.navigate(['/']);
  }

}
