import { getCartProductLS } from "./getCartProductLS"

export const FetchQuantityLS=(id)=>{
    let quantity=1
    let price;
    let localData=getCartProductLS()
    let exist=localData.find((curr)=>curr.id==id)
    if(exist){
        quantity=exist.quantity
        price=exist.price
    }
    return {quantity,price}
}