import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'products-details',
	templateUrl: './product.details.component.html'
})

export class ProductDetailsComponent {

	@Input() 
	product: any;

	@Output()
	updateEvent: EventEmitter;

	newprice: number;

	constructor() {
		this.updateEvent = new EventEmitter();
	}

	updatePrice() {
		this.updateEvent.emit(this.newprice);
	}
}