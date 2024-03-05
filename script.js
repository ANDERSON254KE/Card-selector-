let products = {
     data:[{
          productName:"Regular white T-shirt",
          category:"Topwear",
          price:"30",
          image:"images/Sw1.jpg"
     },
     {
       productName:"ShortSkirt",
          category:"Bottomwear",
          price:"49",
          image:"images/Gots.jpg"   
     },
     {
          productName:"watches",
          category:"watches",
          price:"99",
          image:"images/w1.jpg"   
     },
     {
          productName:"knitted Top",
          category:"topwear",
          price:"39",
          image:"images/top1.jpg"   
     },
{
     productName:"Black leather jacket",
          category:"jacket",
          price:"20",
          image:"images/j1.jpg"   
     },
     {
          productName:"Stylish Pink Trousers",
               category:"Bottomwear",
               price:"89",
               image:"images/pnk.jpg"   
          },
          {
               productName:"Brown Men's jacket",
                    category:"jacket",
                    price:"189",
                    image:"images/mj.jpg"   
               },
               {
                    productName:"Comfy grey pants ",
                         category:"jacket",
                         price:"20",
                         image:"images/j1.jpg"   
                    },
],
};
for (let i of products.data){
     //create a card
     let card=document.createElement("div");
     //cards category and stay hidden at 

     card.classList.add("card",i.category.toLowerCase(),"hide");
     //image div 
     let imgContainer=document.createElement("div");
     imgContainer.classList.add("image-container");
     //img tag
     let image=document.createElement("img");
     image.setAttribute("src",i.image);
     //image.style.width="200px";
    //image.style.width="400px";
     imgContainer.appendChild(image);
     card.appendChild(imgContainer);
     //container
     let container=document.createElement("div")
     container.classList.add("container")
     //products name
     let name= document.createElement("h5")
     name.classList.add("product-name")
     name.innerText =i.productName.toUpperCase();
     container.appendChild(name);
//price 
let price =document.createElement("h6");
price.classList.add("price")
price.innerText="$" +i.price;
container.appendChild(price)


     card.appendChild(container);
     document.getElementById("products").appendChild(card);
}
//parameter passed from buttons same as their categories
function filterProduct(value) {
     // Button class code
     let buttons = document.querySelectorAll(".button-value");
     buttons.forEach(button => {
          // Check if the value is equal to innerText
          if (value.toUpperCase() == button.innerText.toUpperCase()) {
               button.classList.add("active");
          } else {
               button.classList.remove("active");
          }
     });

     // Select all cards
     let cards = document.querySelectorAll(".card");
     cards.forEach(card => {
          // Check if the card's category matches the filter value
          if (value.toUpperCase() == "ALL" || card.classList.contains(value.toLowerCase())) {
               card.classList.remove("hide"); // Show the card
          } else {
               card.classList.add("hide"); // Hide the card
          }
     });
}
 document.getElementById("search").addEventListener("click",()=>{
     //initialization
     let searchInput= document.getElementById("search-input").value;
     let elements =document.querySelectorAll(".product-name");
     let cards =document.querySelectorAll(".card");
     console.log(searchInput),
     //loop through all elements 
     elements.forEach((element,index)=>{
          //check if text includes the search value
          if(element.innerText.includes(searchInput.toUpperCase())){
               //display matching card
               cards[index].classList.remove("hide");
          }
          else{
               //hide others
               cards[index].classList.add("hide")
          }
     })
 })

//initially display all products
window.onload=()=>{
     filterProduct("All")
}