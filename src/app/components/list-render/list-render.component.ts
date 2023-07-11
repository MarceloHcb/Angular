import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    {name: 'Pig', sound: 'Oink!'},
    {name: 'Duck', sound: 'Quack!'},
    {name: 'Bird', sound: 'Tweet!'},
    {name: 'Sheep', sound: 'Baa!'}
  ]
}
