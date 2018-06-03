import { Component, OnInit } from '@angular/core';
import { fromJS } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public Person: any;
  public ImmutablePerson: any;

  ngOnInit(): void {
    const person = {
      firstname: 'Bob',
      surname: 'Smith',
      title: 'Mr'
    };

    this.Person = person;
    this.ImmutablePerson = fromJS(person);

  }

  mutate(person: any) {
    const dateString = Date.now().toString();
    person.firstname = person.firstname + dateString;
    person.surname = person.surname + dateString;
    person.title = person.title + dateString;
  }

  mutateImmutable(person: any) {
    const dateString = Date.now().toString();

    const newPerson: any = {
      firstname: person.get('firstname') + dateString,
      surname: person.get('surname') + dateString,
      title: person.get('title') + dateString
    };

    this.ImmutablePerson = person.merge(newPerson);
  }
}


