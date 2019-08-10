import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
