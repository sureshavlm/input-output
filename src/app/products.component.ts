import { Component } from '@angular/core';

@Component({
	selector: 'products-component',
	templateUrl: './products.component.html',
	styleUrls: ['./products.css']
})

export class ProductsComponent {

	selectedProduct: any;
	selectedIndex: number;
	
	products: any = [
						{ name: "iPhone10 ", brand: "Apple", price: 50000},
						{ name: "Samsung S4 ", brand: "Samsung", price: 40000}
					]; 

	viewProduct(product, index) {
		this.selectedProduct = product;
		this.selectedIndex = index;
	}

	updateNewPrice(event) {
		this.products[this.selectedIndex].price = event;

		console.log("Event value *******",event);

	}


}

