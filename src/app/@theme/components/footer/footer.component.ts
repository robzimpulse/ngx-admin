import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Made by Robzimpulse | Admin By <a href="https://akveo.com" target="_blank">Akveo</a>
    </span>
    <div class="socials">
      <a href="https://github.com/robzimpulse" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/robzimpulse/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
