import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {UserComponent} from './Users/User.component';
import {UsersComponent} from './Users/users.component';
import {MazeComponent} from './labyrinth/maze.component';
import {TileComponent} from './labyrinth/tile.component';
import {TimerComponent} from './core/timer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    UserComponent,UsersComponent,
    MazeComponent,
    TileComponent,
    TimerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
