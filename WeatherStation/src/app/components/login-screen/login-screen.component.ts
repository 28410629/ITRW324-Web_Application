import { Component, OnInit } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {


  private username;
  private password;
  constructor(private router: Router) {

  }

  ngOnInit() {

  }


  onSubmit() {

    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/']);
    } else {
      this.failLogin();
    }

  }

  failLogin() {

  }

}

