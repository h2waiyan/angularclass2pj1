import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //initialize - oninit - on the start of this component

  constructor() { }

  ngOnInit(): void {
    console.log("Hello, this is a component.");
    alert("This is an alert.");
  }


}
