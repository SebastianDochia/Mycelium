import { Component } from '@angular/core';

import { AuthenticationService } from './Util/authentication.service';
import { User } from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  title = 'Mycelium';

  constructor( private authenticationService: AuthenticationService ) {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
}
}
