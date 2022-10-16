import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(){
    var rand = Math.floor(Math.random()*(10));
    this.intervalFired.emit(rand);
  }

}
