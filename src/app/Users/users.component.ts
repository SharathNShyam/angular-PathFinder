import { Component, Input, OnChanges, NgModule, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../Users/User.component';

@Component({
    selector: 'users',
    templateUrl: 'app/Users/users.component.html',
    styleUrls: ['app/users/users.component.css']

})
export class UsersComponent {

    @Input() UserList: Array<User>;
    columns: Array<Column> = new Array<Column>();


    constructor() {
        this.columns.push(new Column('Index', 'Serial Number'));
        this.columns.push(new Column('Name', 'Player Name'));
        this.columns.push(new Column('Score', 'Player Score'));
        this.columns.push(new Column('Level', 'Highest Level'));
        if (this.UserList === undefined) {
            this.UserList = new Array<User>();
        }
    }

    

}

export class Column {
    name: string;
    descr: string;
    constructor(name: any, descr: any) {
        this.name = name;
        this.descr = descr;

    }
}