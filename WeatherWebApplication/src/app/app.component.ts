import {Component, HostListener, OnInit} from '@angular/core';
import {NbMenuService, NbSidebarService} from '@nebular/theme';
import { AuthService } from './auth/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  screenHeight: any;
  screenWidth: any;

  constructor(private menuService: NbMenuService,
              private authService: AuthService,
              private sidebarService: NbSidebarService,
              public router: Router) {
    this.getScreenSize();
    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContextItemSelection(event.item.title);
      });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    // console.log(this.screenHeight, this.screenWidth);
  }

  onContextItemSelection(title) {
    // this is where you call user menu items!
    // console.log(title);
    if (this.screenWidth <= 575) {
      this.sidebarService.collapse('menu-sidebar');
    }
    if (title === 'Log out') {
      localStorage.setItem('userdata', JSON.stringify(null));
      this.authService.logout();
    }
    if (title === 'Profile') {
      this.router.navigate(['pages/user-profile/']);
    }
  }

  ngOnInit(): void {
  }
}
