import { Injectable } from '@angular/core';
import { cartItem } from '../cart-item/cartItem.service';

@Injectable({
  providedIn: 'root'
})
export class CartListService {
  cartList:cartItem[]=[]
  constructor() { }
  countCart :number =0;
  getCartList(){
    this.cartList=JSON.parse(localStorage.getItem('cartList'))
    if(this.cartList==null) this.cartList=[]
    return this.cartList
  }
  countCartList()
  {
    this.getCartList()
    this.cartList.forEach(item => {
      this.countCart = item.soLuongMua + this.countCart
    })
    return this.countCart
  }
  addItemIntoList(item:cartItem){
    this.getCartList()
    if(this.cartList.length<1)
    {
      this.cartList.push(item)
    }
    else{
      const index=this.cartList.findIndex(cart=>cart.id===item.id)
      if(index!==-1)
      {
        this.cartList[index].soLuongMua=this.cartList[index].soLuongMua+item.soLuongMua
        this.cartList[index].soLuongHienCo=this.cartList[index].soLuongHienCo-item.soLuongMua
        this.cartList[index].thanhTien=this.cartList[index].soLuongMua*this.cartList[index].giaTien
      }
      else{
        this.cartList.push(item)
      }
    }
    localStorage.setItem('cartList',JSON.stringify(this.cartList))
  }

  deleteItem(cart:cartItem){
    this.getCartList()
    const index=this.cartList.findIndex(item=>item.id===cart.id)
    if(index!==-1)
    {
      this.cartList.splice(index,1)
      localStorage.setItem('cartList',JSON.stringify(this.cartList))
    }
  }
}
