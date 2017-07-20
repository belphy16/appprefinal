import { Component, OnInit } from '@angular/core';
import { DealService } from 'services/deal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    public cart = [];
   
    public totalPrice=0;
  constructor(private dealService: DealService) { }
  
  getTotalPrice(){
    console.log("inside cart",this.cart)
    console.log("price",this.cart[0].originalPrice)
    for(var i=0;i<this.cart.length;i++){
      this.totalPrice += this.cart[i].originalPrice;
    }
  }


  //  removeProduct(product) {
   
  //   this.cart.forEach((cartItem,i) => {
  //     if (cartItem.id === product.id) {
  //      this.cart.splice(i, 1)
        
  //       // console.log(this.removeditem[0][0].originalPrice)
        
  //     }
  //   })

  // }

  ngOnInit() {

    // Get all the products added to the cart 
    this.dealService.getCart()
      .subscribe(products => {
        products.forEach(product => {
            this.cart.push(product)
        })

        this.getTotalPrice()
        
      })

  }


  checkOut(){
    alert("Your products are checked out successfully!!!");
  }
}
