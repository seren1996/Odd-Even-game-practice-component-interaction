import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oddEvenGame';
  randNumber = 0;
  evenArray2:number[] = [];
  oddArray2:number[] = [];

  randomButtonClicked(randNumber : number){
    this.randNumber = randNumber;
    randNumber%2==0 ? this.evenArray2.push(randNumber) : this.oddArray2.push(randNumber);
  }
}
