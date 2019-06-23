import { Component } from '@angular/core';

import { Person } from './person';

@Component({
	selector: 'test-component',
	template: '<h1>Hello</h1>'
})


export class TestComponent {
	
	person: Person;

	constructor(_person: Person) {
		this.person = _person;
	}
}