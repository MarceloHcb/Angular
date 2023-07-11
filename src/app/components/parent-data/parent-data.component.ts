import { Component,Input } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  name: string;
  userData: { email: string, role: string };

  constructor(private userDataService: UserDataService) {
    this.name = this.userDataService.userName;
    this.userData = this.userDataService.userData;
  }
}
