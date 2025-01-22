import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantity";

const productTemplate = document.getElementById("productTemplate");
const productContainer = document.getElementById("productContainer");

export const homeProductCard = (product) => {
  if (!product) {
    return false;
  }
  product.forEach(currElem => {
    const { id,name,category,brand,price,stock,description,image}=currElem
    const prodClone=document.importNode(productTemplate.content,true);

    prodClone.querySelector('#cardValue').setAttribute('id',`card${id}`)
    prodClone.querySelector('.productImage').src=image;
    prodClone.querySelector('.productImage').alt=name;
    prodClone.querySelector('.category').innerText=category;
    prodClone.querySelector('.productDescription').innerText=description
    prodClone.querySelector('.productStock').innerText=stock
    prodClone.querySelector('.productName').innerText=name;
    prodClone.querySelector('.productPrice').innerText=`₹${price}`
    prodClone.querySelector('.productActualPrice').innerText=`₹${price*4}`
    prodClone.querySelector('.stockElement').addEventListener("click",(event)=>{
    homeQuantityToggle(event,id,stock);
    })
    prodClone.querySelector('.add-to-cart-button').addEventListener('click',(event)=>{
      addToCart(event,id,stock);
    })

    productContainer.append(prodClone)
  });
};
