
export const CartProductIcon=(product)=>{
    document.querySelector('#cartValue').innerHTML=`<i class="fa-solid fa-cart-shopping"> ${product.length}</i>`
}