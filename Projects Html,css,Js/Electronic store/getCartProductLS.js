import { CartProductIcon } from "./cartProductIcon";

export const getCartProductLS=()=>{
    let cartProduct=localStorage.getItem('cartProductsLS')
    if(!cartProduct){
        return [];
    }
    cartProduct=JSON.parse(cartProduct);
    CartProductIcon(cartProduct)
    return cartProduct;
}