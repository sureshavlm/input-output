import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product.details.component'

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ProductsComponent]
})
export class AppModule { }
