import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { AuthService } from './auth/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private menuService: NbMenuService,
              private authService: AuthService,
              public router: Router) {
    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContextItemSelection(event.item.title);
      });
  }

  onContextItemSelection(title) {
    // this is where you call user menu items!
    // console.log(title);
    if (title === 'Log out') {
      this.authService.logout();
    }
    if (title === 'Profile') {
      this.router.navigate(['pages/user-profile/']);
    }
  }

  ngOnInit(): void {
  }
}
