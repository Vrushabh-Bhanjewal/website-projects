import products from "./api/Product.json"
import { cartIncDec } from "./cartIncDec"
import { FetchQuantityLS } from "./FetchQuantityLS"
import { getCartProductLS } from "./getCartProductLS"
import { removeCartProd } from "./removeCartProd"
import { updateTotalCart } from "./updateTotalCart"

let cartProduct=getCartProductLS()
let currProduct=products.filter((curr)=>{
     return cartProduct.some((c)=> c.id==curr.id)
})
let cartElement=document.querySelector('#productCartContainer')
let templateCart=document.getElementById('productCartTemplate')
// console.log(currProduct)
const showCarts=()=>{
    currProduct.forEach((curr)=>{
        let {id,category,image,name,stock,price}=curr
        let tempCart=document.importNode(templateCart.content,true)
        let LSActualData= FetchQuantityLS(id)

        tempCart.querySelector('#cardValue').setAttribute('id',`cart${id}`)
        tempCart.querySelector('.category').innerText=category; 
        tempCart.querySelector('.productImage').src=image;
        tempCart.querySelector('.productName').innerText=name;
        tempCart.querySelector('.productPrice').innerText=LSActualData.price
        tempCart.querySelector('.productQuantity').innerText=LSActualData.quantity
        tempCart.querySelector('.remove-to-cart-button').addEventListener('click',(event)=>{removeCartProd(event,id)})
        tempCart.querySelector('.stockElement').addEventListener('click',(e)=>{cartIncDec(e,id,stock,price)})

        cartElement.appendChild(tempCart)
    })
}
showCarts()

updateTotalCart()
