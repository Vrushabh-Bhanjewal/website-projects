import { CartProductIcon } from "./cartProductIcon"
import { getCartProductLS } from "./getCartProductLS"
import { showToast } from "./showToast"
import { updateTotalCart } from "./updateTotalCart"

export const removeCartProd=(event,id)=>{
    let localData=getCartProductLS()
    let newData=localData.filter((curr)=>{
        if(curr.id!=id){
            showToast('delete',id)
            return true
        }
    })
    localStorage.setItem('cartProductsLS',JSON.stringify(newData))
    let currId=document.querySelector(`#cart${id}`)
    currId.remove()
    updateTotalCart()
    CartProductIcon(newData)
}