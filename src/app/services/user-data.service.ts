import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userName = 'Marcelo';
  userData = {
    email: 'mclo@mclo.com',
    role: 'admin'
  };
}
