import { Component } from '@angular/core'
//this a app component so 
@Component({
  selector: 'app-root', //in whcih tag it needs to go
  templateUrl: './app.component.html', // in the tag which html we need to include
  styleUrls: ['./app.component.css']// what type of css we need to apply to that html.
})
export class AppComponent{
  //more robust code when use auto type casting check.
  title: string = 'userstory-tasks-very-old';
  //title = 'userstory-tasks-old';

  //here we can create constructor
  constructor(){
    // here we can access class variables
    this.title = 'userstory-tasks-old'
    this.changeName(this.title);
  }

  //in the component we can create a function like below.
  changeName(title:string): void{
    this.title = 'userstory-tasks'
  }
}