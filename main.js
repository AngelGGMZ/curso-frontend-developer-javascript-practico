const menuEmail=document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu")
const menuHamIcon=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const menuCarritoIcon=document.querySelector(".navbar-shopping-cart");
const aside=document.querySelector(".product-detail");
const cardsContainer=document.querySelector(".cards-container");

menuHamIcon.addEventListener("click", toggleMobileMenu);
menuEmail.addEventListener("click", toggleDesktopMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);


function toggleDesktopMenu(){
 const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed) {
        aside.classList.add("inactive");
    }
desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    const isAsideClosed =aside.classList.contains("inactive");

    if(!isAsideClosed) {
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside() {
    const isDesktopMenuClosed=desktopMenu.classList.contains("inactive");
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if(!isDesktopMenuClosed){
   desktopMenu.classList.add("inactive")
  } 

 if(!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");  
    
 }

aside.classList.toggle("inactive");
}

const ProductList = [];
ProductList.push({
name: "Bike",
price: 120,
image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
ProductList.push({
    name: "Pantalla",
    price: 550,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
    });
 ProductList.push({
        name: "Celular",
        price: 250,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        
   });
   ProductList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
    });
    ProductList.push({
        name: "Pantalla",
        price: 550,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        
        });
     ProductList.push({
            name: "Celular",
            price: 250,
            image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            
       });

  function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement("div");
         productCard.classList.add("product-card");
     //product={name, price, image} -> product.image
         const productImg=document.createElement("img");
         productImg.setAttribute("src", product.image);
     
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
     
        const productInfoDiv = document.createElement("div");
     
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg");
     
       productInfoFigure.appendChild(productImgCart);
     
       productInfo.appendChild(productInfoDiv);
       productInfo.appendChild(productInfoFigure);
     
       productCard.appendChild(productImg);
       productCard.appendChild(productInfo);
      
     cardsContainer.appendChild(productCard);
       }
  }

  renderProducts(ProductList);
