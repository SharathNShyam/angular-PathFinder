import { Component, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: 'app/Users/user.component.html',
  styleUrls: ['app/Users/user.component.css']
})



export class UserComponent implements OnChanges {
  
  @Output() UserChanged = new EventEmitter<any>();
  success : boolean;
  firstName: string;
  lastName: string;

ngOnChanges(changes: any) {
    this.isSuccess();
  }

isSuccess() : boolean {
  if(this.firstName === undefined || this.firstName ===""){
      this.success = false;
      return this.success;
    } else {
      this.success = true;
      return this.success;
    }
}
 
  constructor() {
    
  }

  onProceedClick() {
    
    var user: User = new User();
    user.firstName = this.firstName,
      user.lastName = this.lastName
      user.score = 0;
    this.UserChanged.emit(user);
  }

}

export class User {

  firstName: string;
  lastName: string;
  score : number;
  level : number;
}