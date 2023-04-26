import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  people: any[] = [];
  isGalleryLayout = false;
  person: any[] = [];
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://www.innovi.co.il/js/ex/customers.json')
      .subscribe(response => {
        this.people = response.data;
        console.log(this.people);
      });
  }

  toggleLayout() {
    this.isGalleryLayout = !this.isGalleryLayout;
  }

  editPerson(person: any) {
      const updatedFirstName = prompt("Enter new first name");
      const updatedLastName = prompt("Enter new last name");
      const updatedEmail = prompt("Enter new email");
      const updatedAge = prompt("Enter new age");
      person.firstName = updatedFirstName;
      person.lastName = updatedLastName;
      person.email = updatedEmail;
      person.age = updatedAge


  }
  deletPerson(person: any) {
      const index = this.people.indexOf(person);
      if (index >= 0) {
        this.people.splice(index, 1);
      }
  }
  addPerson(){
      const firstName = prompt("Enter first name");
      const lastName = prompt("Enter last name");
      const email = prompt("Enter email");
      const age = prompt("Enter age");
      const newPerson = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age
      };

      this.people.push(newPerson);
    }
}

