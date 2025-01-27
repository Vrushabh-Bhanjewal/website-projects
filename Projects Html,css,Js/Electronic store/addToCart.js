import { CartProductIcon } from "./cartProductIcon"
import { getCartProductLS } from "./getCartProductLS"
import { showToast } from "./showToast"
getCartProductLS()
export const addToCart=(event,id,stock)=>{
    let localData= getCartProductLS()
    const productId=document.querySelector(`#card${id}`)
    let quantity=productId.querySelector('.productQuantity').innerText
    let price=productId.querySelector('.productPrice').innerText
    price=price.replace('₹',"");
    
    let existing=localData.find((curr)=>curr.id == id)
    if(existing && quantity > 1){
        quantity=Number(existing.quantity) + Number(quantity)
        price=Number(quantity*price)  
        let updatedCart={id,price,quantity}
        // console.log(updatedCart)
        updatedCart=localData.map((curr)=>{
            if(curr.id==id){
                return updatedCart
            }else{
                return curr
            }
        })
        showToast('add',id)
        localStorage.setItem('cartProductsLS',JSON.stringify(updatedCart))
    }
    if(existing ){
        showToast('add',id)
        return false
    }
    price=Number(price*quantity)
    quantity=Number(quantity)
    localData.push({id,price,quantity})
    localStorage.setItem('cartProductsLS',JSON.stringify(localData))
    showToast('add',id)
    CartProductIcon(localData)
}