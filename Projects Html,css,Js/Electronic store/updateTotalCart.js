import { getCartProductLS } from "./getCartProductLS"

export const updateTotalCart=()=>{
    let localData=getCartProductLS()
    let subTotalElem=document.querySelector('.productSubTotal')
    let totalElem=document.querySelector('.productFinalTotal')

    let subTotal=localData.reduce((acc,curr)=>{
        return acc+curr.price
    },0)
    // console.log(subTotal)
    subTotal=subTotal.toFixed(2)
    subTotalElem.innerHTML=`₹${subTotal}`
    let finalTotal=(+subTotal +50).toFixed(2)
    totalElem.innerHTML=`₹${finalTotal}`
}