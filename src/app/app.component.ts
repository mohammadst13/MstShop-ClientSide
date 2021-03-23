import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {CurrentUser} from './DTOs/Account/CurrentUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MstShop-ClientSide';

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.checkUserAuth().subscribe(res => {
      if (res.status === 'Success') {
        const user = new CurrentUser(
          res.data.userId,
          res.data.firstName,
          res.data.lastName,
          res.data.address);

        this.authService.setCurrentUser(user);
      }
    });
  }
}
