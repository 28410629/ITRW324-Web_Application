import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">North-West University ITRW324 Project : Group 3</span>
    <div class="socials">
      <a target="_blank" class="ion ion-social-github" (click)="OpenGithubRepositories()"></a>

    </div>
  `,
})
export class FooterComponent {
  constructor(public router: Router) {}
  OpenGithubRepositories() {
    this.router.navigate(['pages/github-repository-info/']);
  }
}
