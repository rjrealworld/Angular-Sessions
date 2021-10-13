import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  // name: string;
  // age: number;
  // salary: number;
  // isMarried = true;
  person: any; //object
  hobbies: any; //any specifies it can be of any datatype
  message: string;

  constructor() { 
    //variable initialization
    //special method which execute automatically when object is created
    // this.name = 'Riya';
    // this.age = 50;
    // this.salary = 200000.00;
    // this.isMarried = false;
    this.hobbies = ['Poetry', 'Music', 'Chatting', 'Cooking', 'Sleeping'];
    this.message = '';
    this.person = {age: 44, name: 'Riya', salary: 200000.00, isMarried: false};
    console.log("Constructor running....");
  }

  ngOnInit(): void {
    //init logic for fetch data from db
    //special method which execute automatically as a part of the cycle of angular
    console.log("ng on init running....");
  }

  showMessage() {
    alert('Welcome to angular methods...');
  }

}
