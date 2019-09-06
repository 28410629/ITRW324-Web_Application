import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbMenuService } from '@nebular/theme';
import { AuthService } from './auth/auth-service.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,
              private menuService: NbMenuService,
              private authService: AuthService) {
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

    }
  }

  ngOnInit(): void {
  }
}
