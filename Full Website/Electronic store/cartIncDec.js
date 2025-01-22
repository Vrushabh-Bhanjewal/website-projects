import { getCartProductLS } from "./getCartProductLS"
import { updateTotalCart } from "./updateTotalCart"

export const cartIncDec=(e,id,stock,price)=>{
    let currProd=document.querySelector(`#cart${id}`)
    let currPriceElem=currProd.querySelector('.productPrice')
    let currQuantityElem=currProd.querySelector('.productQuantity')

    let quantity=1
    let localPrice=0
    let localData=getCartProductLS()
    let exist=localData.find((curr)=>curr.id==id)
    if(exist){
        localPrice=exist.price
        quantity=exist.quantity
    }else{
        localPrice=price
        price=price
    }
    if(e.target.classList.contains('cartIncrement')){
        if(quantity < stock){
            quantity+=1
        }else if(quantity==stock){
            quantity=stock
            localPrice=price *stock
        }
    }

    if(e.target.classList.contains('cartDecrement')){
        if(quantity > 1){
            quantity-=1
        }
    }
    localPrice=Number(price)*Number(quantity)
    localPrice=Number(localPrice.toFixed(2))

    let updatedData={id,quantity,price:localPrice}
    localData=localData.map((curr)=>{
        if(curr.id ==id){
            return updatedData
        }else{
            return curr
        }
        })
    localStorage.setItem('cartProductsLS',JSON.stringify(localData))
    currPriceElem.innerText=localPrice;
    currQuantityElem.innerText=quantity

    updateTotalCart()
    // console.log(updatedData)
}