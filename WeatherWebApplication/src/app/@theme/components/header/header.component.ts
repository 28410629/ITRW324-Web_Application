import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';
import {FirebaseUser, User} from '../../../models/user.model';
import {AuthService} from '../../../auth/auth-service.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  userSubscription: Subscription;

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  // user: any;
  user: User;
  displayUser = { name: 'Loading...',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3-pAMsgi3CZrot52SIgT8Ub0hQNpDZ5ZVkT-Pef7usIaGtNXAg'};
  useruid: string;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private authService: AuthService) {

    // Set uid for user
    const storageuser: FirebaseUser = JSON.parse(localStorage.getItem('user'));
    const userdata: User = JSON.parse(localStorage.getItem('userdata'));
    this.displayUser = { name: userdata.displayName, picture: userdata.photoURL};
    this.themeService.changeTheme(userdata.theme);
    this.useruid = storageuser.uid;
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    // this.userService.getUsers()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((users: any) => this.user = users.nick);

    this.userSubscription = this.authService.GetUserProfileData(this.useruid)
      .subscribe(
        responseData => {
          this.user = responseData;
          this.displayUser = { name: responseData.displayName, picture: responseData.photoURL};
          if (this.user.theme !== null) {
            this.themeService.changeTheme(this.user.theme);
          }
        });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.userSubscription != null) {
      this.userSubscription.unsubscribe();
    }
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
    this.authService.UpdateUserProfileDataTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
