import { Component, OnInit } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  public username;
  public password;
  public errMessage = '';
  user: User;

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/']);
      this.errMessage = '';
      this.user = {
        uid: 'test',
        email: 'test',
        displayName: 'test',
        photoURL: 'test',
        emailVerified: true
      };
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      this.failLogin();
    }
  }

  failLogin() {
    this.errMessage = 'Invalid login credentials';
    this.user = null;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

}

