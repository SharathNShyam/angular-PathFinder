import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnChanges } from '@angular/core';
//import {CORE_DIRECTIVES} from '@angular/common';

@Component({
    selector: 'tile',
    templateUrl: 'app/labyrinth/tile.component.html',
    styleUrls: ['app/labyrinth/tile.component.css'],
    //directives: [CORE_DIRECTIVES],
    //changeDetection: ChangeDetectionStrategy.Default

})
export class TileComponent implements OnInit, OnChanges {
    @Input() tile: any;
    @Output() tileClick = new EventEmitter();
    @Input() Path: Array<number>;
    @Input() isInThePath: boolean;
    @Input() Timeout: boolean;
    isHighlighted: boolean;
    isWrong: boolean = false;
    isRightSelected : boolean = false;
    ngOnInit() {
        console.log(this.tile);

    }
    constructor() {
        
    }
    ngOnChanges(changes: any) {
        if(changes.Path!== undefined){
            this.isRightSelected = false;
        }
        this.isHighlighted = this.isInThePath && !this.Timeout;
    }
    handleTileClick(tile: any) {
        if (this.Timeout) {
            var clickedTile = {
                'tile' : tile,
                'status' : true
            };
            if (this.isInThePath&& this.Path.pop() == this.tile) {                
                this.isRightSelected = true;
                clickedTile.status = true;
                this.tileClick.emit(clickedTile);
            } else {
                this.isWrong = true;
                clickedTile.status = false;
                this.tileClick.emit(clickedTile);
            }
        }
    }

}