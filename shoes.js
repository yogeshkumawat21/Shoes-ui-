let totalproductsSelectedno=document.querySelector(".cart-no-absolute");
let productNoInCart=1;
let cart= document.querySelector(".shopping-cart");
let shoppingcart= document.querySelector(".cart-absolute-section");
let cancilCartPage=document.querySelector("#cancil-cart-page");

let buyLinks = document.querySelectorAll(".move-to-cart");

let productcontainer=document.querySelector(".product-cart-container");
let clearCart=document.querySelector(".clearcart");


clearCart.addEventListener("click",function(e){
  cartProductstringg="";
productcontainer.innerHTML = cartProductstringg;
  productNoInCart=1;
      totalproductsSelectedno.style.display="none";
  
  
  for(let i=0;i<buyLinks.length;i++)
 buyLinks[i].style.display="block";
})
cart.addEventListener("click", function(e){
  shoppingcart.style.display="block";
});

cancilCartPage.addEventListener("click", function(e){
  shoppingcart.style.display="none";
});


let products = [
	{
		id : "1",

		title:"Nike",
		
		image:"https://i.postimg.cc/jd45PYNt/25625757-ONE-COLOUR-3-2-removebg-preview.png",


		price:"₹1250"

	},
{
  id : "2",

		title:"R698 ",
		
		image:"https://i.postimg.cc/zGnMnN1x/images-removebg-preview.png",


		price:"₹1700"
},{
  id : "3",

		title:"Nike ",
		
		image:"https://i.postimg.cc/j5nXK6vL/images-removebg-preview.png",


		price:"₹2100"
},{
  id : "3",

		title:"Nike ",
		
		image:"https://i.postimg.cc/vTW4NR56/s-l1600-removebg-preview.png",


		price:"₹2100"
}];
let cartProduct
=[];
let cartProductstringg="";
for(let i=0;i<buyLinks.length;i++)
  {  
    buyLinks[i].addEventListener("click",function(e){
      let pid = this.getAttribute("data-product-id");
      buyLinks[i].style.display="none";
        console.log(products[i]);
      
    

    cartProductstringg = cartProductstringg+`
    <div class="product-info" data-pid="${products[i].id}">
  <img src="${products[i].image}"">
      <h2>${products[i].title}</h2>
      <p>${products[i].price}</p>
      <a href="#" class="buy-link" data-pid="${products[i].id}" class="btn">Buy Now</a>
    </div>
 `;
  
      console.log
(cartProductstringg);
      productcontainer.innerHTML = cartProductstringg;
      
      
      
      console.log("clicked on the product with id :"+pid);
      totalproductsSelectedno.style.display="block";
      totalproductsSelectedno.innerText=       productNoInCart;
      productNoInCart++;
     
    
      
    });
  }




console.log("length of product array is "+products.length);

productItemsString = "";



 /*  console.log(productItemsString);
  productcontainer.innerHTML = productItemsString; */