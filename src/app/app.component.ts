import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideScreens } from './animations/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideScreens]
})
export class AppComponent {
  activatedRoute: ActivatedRoute;
  themeClass = 'tech-background'; //For future theming
  title = 'FindHub';

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData['depth']
  }

}
