
export const homeQuantityToggle=(event,id,stock)=>{
    
    const currCard= document.querySelector(`#card${id}`);
    const ProductQuantity= currCard.querySelector('.productQuantity')
    let quantity= parseInt(ProductQuantity.getAttribute('data-quantity')) || 1
    if(event.target.classList.contains('cartIncrement')){
        if(quantity < stock){
            quantity+=1
        }else if(quantity ==stock){
            quantity=stock
        }
    }
    if(event.target.classList.contains('cartDecrement')){
        if(quantity > 1){
            quantity-=1
        }
    }
    // console.log(quantity)
    ProductQuantity.innerHTML=quantity
    ProductQuantity.setAttribute('data-quantity',quantity)
}