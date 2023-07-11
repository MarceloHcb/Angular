import { Component } from '@angular/core';
import { Animal } from 'src/app/Animals';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [];

  constructor(private listService: ListService) { 
    this.getAnimals();
  }
  
  toggleSound(animal: Animal):void {
    animal.show = !animal.show;
  }

  removeAnimal(animal: Animal):void {    
    this.animals = this.listService.remove(this.animals, animal);
  }
    
  getAnimals():void {
    this.listService.getAll().subscribe((animals) => {
      this.animals = animals;
    }
    );
  }
}
