import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  someText = 'SOME TEXT TO TEST PIPES';
  today = new Date();
  someNumber = 123.456789;
  someMoney = 123456.789;
  someObject = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    }
  };
  someArray = ['one', 'two', 'three', 'four', 'five'];
  somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 3000);
  }
  );
  someObservable = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Observable resolved');
    }, 3000);
  }
  );
}
