import { Component } from '@angular/core';
import { Animal } from 'src/app/Animals';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!', show: false},
    {name: 'Cat', sound: 'Meow!', show: false},
    {name: 'Cow', sound: 'Moo!', show: false},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!', show: false},
    {name: 'Pig', sound: 'Oink!', show: false},
    {name: 'Duck', sound: 'Quack!', show: false},
    {name: 'Bird', sound: 'Tweet!', show: false},
    {name: 'Sheep', sound: 'Baa!', show: false},
  ]
  
  toggleSound(animal: Animal):void {
    animal.show = !animal.show;
  }
}
