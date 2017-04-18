import { Component, Input, OnChanges, NgModule, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../Users/User.component';
import { TileComponent } from './tile.component';
import { TimerComponent } from '../core/timer.component';

@Component({
    selector: 'maze',
    templateUrl: 'app/labyrinth/maze.component.html',
    styleUrls: ['app/labyrinth/maze.component.css']
    //changeDetection: ChangeDetectionStrategy.OnPush 
})
export class MazeComponent implements OnInit, OnChanges {

    firstName: string;
    lastName: string;
    //level: number;
    rows: Array<number>;
    cols: Array<number>;
    @Input() user: User;
    @Input() level: number;
    @Output() TileClick = new EventEmitter<any>();
    path: Array<Number>;
    //path: boolean;
    time: number = 5.5;
    timedOut: boolean;
    Error: any;
    ngOnChanges(changes: any) {
        if (changes.level !== undefined) {
            if (changes.level.previousValue === changes.level.currentValue - 1) {
                this.rows = new Array(this.level);
                this.cols = new Array(this.level);
                this.Error.isError = false;
                this.initPath(this.level);
            }
        }
    }

    ngOnInit() {
        if (this.user !== null) {
            this.firstName = this.user.firstName;
            this.lastName = this.user.lastName;
        }
        this.rows = new Array(this.level);
        this.cols = new Array(this.level);
        this.initPath(this.level);

    }

    constructor() {
        this.Error = {};

    }

    getPath(tile: any): boolean {
        return this.path.indexOf(tile) >= 0;
    }
    initPath(level: number): void {
        this.path = [];
        var lastRowRange = this.level * this.level;
        var rangeStart: number = lastRowRange - this.level + 2;
        var rangeEnd: number = lastRowRange - this.level + 3;
        var random = Math.floor(Math.random() * (rangeEnd - rangeStart) + rangeStart);
        this.path.push(random);
        random = random - this.level;
        this.path.push(random);
        var isSameRowPreviousRound: boolean = false;
        for (var _i = 2; _i < this.rows.length;) {
            var bin = Math.floor(Math.random() * 2 + 1);
            if (bin % 2 === 0 && !isSameRowPreviousRound) {
                if (random % this.level === 0) {
                    random = random - this.level;
                    isSameRowPreviousRound = false;
                    _i++;
                } else {
                    random = random + 1;
                    isSameRowPreviousRound = true;
                }
            }
            else {
                random = random - this.level;
                isSameRowPreviousRound = false;
                _i++;
            }
            this.path.push(random);
        }
        this.time -= 0.5;
        this.timedOut = false;
        this.path.reverse();
    }

    onTileClick(tile: any) {
        this.user.level = this.level -3;
        if (tile.status) {
            //this.path.pop();
            this.user.score = this.level* this.level + (this.level* this.level - tile.tile);
            
            if (this.path.length === 0) {
                
                this.TileClick.emit({
                    'nextLevel' : true
                });
            }
        }
        else {
            this.Error = {
                'isError': 'true',
                'message': 'Sorry! You have traversed a wrong path'                                               
            };
            this.TileClick.emit({
                    'nextLevel' : false
                });
        }
    }



    finish(finishEvent: any) {
        console.log(finishEvent, 'The viewing time is over');
        this.timedOut = true;
    }
}