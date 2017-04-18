import { Component, ViewChild } from '@angular/core';
import { UserComponent, User } from './Users/User.component';
import { UsersComponent } from './Users/users.component';
import { TimerComponent } from './core/timer.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  @ViewChild(UsersComponent) usersComponent: UsersComponent;

  level: number = 4;
  user: User;
  showDemo: boolean;
  Users: Array<User> = new Array<User>();
  constructor() {
    this.showDemo = false;

  }

  onUserChanged(user: User): void {
    this.user = user;
    this.showDemo = true;
    this.Users.push(user);
    this.level = 4;
  }

  onGoBackClick() {
    this.showDemo = false;
  }

  onTileClick(tile: any) {
    if (tile.nextLevel) {
      this.level += 1;
    }
  }

}