let countval = 0;

let products = [
  {
    id: 1,
    name: "Black Tshirt",
    size: "L",
    color: "Black",
    price: 1200,
    image: src= "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/6832954/2018/12/17/2d5e2f48-c654-40bd-892e-e521dbb50f141545041427513-HRX-by-Hrithik-Roshan-Men-Black-Printed-Round-Neck-T-shirt-6-1.jpg",
    description: "Men Black Printed Round Neck T-shirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "https://cdn.shopclues.com/images/thumbnails/56407/320/320/Untitled1487232105.png",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "https://5.imimg.com/data5/GL/OI/MY-45237799/cotton-shirt-500x500.jpg",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "https://i.pinimg.com/originals/bf/45/4b/bf454b4eca3f5061b6908217e2a2344e.jpg" ,
    description: "Beautifull Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 1300,
    image: "https://rukminim1.flixcart.com/image/714/857/k58hwnk0/top/j/z/v/s-t001-navy-top-goyal-group-original-imafgctdjgsqpcyu.jpeg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "black jeans",
    size: "L",
    color: "Henna",
    price: 1800,
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2425786/2018/3/22/11521710079400-Roadster-Men-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-1011521710079148-1.jpg",
    description: "Good looking Traditional Dress",
  },
  {
     id: 7,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "https://ae01.alicdn.com/kf/HTB1Jxkfev5G3KVjSZPxq6zI3XXay/Traditional-Indian-sari-Include-Tops-Skirt-Indian-dress-Sarees-Pakistan-dresses.jpg",
    description: "Good looking Traditional Dress",
  },
  {
     id: 8,
    name: "Mens Trouser",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "https://d1126yhoonl7p4.cloudfront.net/img/p/4/2/3/9/1/42391-large_default.jpg",
    description: "Good looking Traditional Dress",
  },
  {
     id: 9,
    name: "Party wear Goun Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "https://5.imimg.com/data5/DQ/GP/MY-15399851/112761a-500x500.jpg",
    description: "Good looking Traditional Dress",
  },
  
  {
     id: 10,
    name: "Indian Wedding Dress for Women",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "https://pakistanilawnsuit.com/wp-content/uploads/2019/10/Best-Wedding-Dress-Ideas-For-Pakistani-Girls.jpg",
    description: "Good looking Traditional Dress",
  },
  {
     id: 11,
    name: "Wedding Dress For Mens",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "https://cdn.a1designerwear.com/content/images/thumbs/0510561_taking-gold-sherwani.jpeg",
    description: "Good looking Traditional Dress",
  },
  {
     id: 12,
    name: "Dry Fit",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "https://images-na.ssl-images-amazon.com/images/I/81fYI9q%2BAAL._AC_UX522_.jpg",
    description: "Good looking Traditional Dress",
  },

];

cart=[];

 function displayProduct(productData, targetid){
  let productString="";
  let buttonDis = "Add To Cart"
 let funToCall = "addToCart";
 console.log(funToCall);
  if( targetid == "cart") {
  funToCall = "removeFromCart";
  buttonDis = "Remove From Cart"
  } 
  productData.forEach(function(product, index) {
   let { id, name, image, color, description, price, size } = product;
 
   productString += ` <div class="product">
        <div class="prodimg">
          <img src="${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="${funToCall}(${index})">${buttonDis}</button>
        </p>
      </div>`;
    });
console.log('productString');


  document.getElementById(targetid).innerHTML=productString;
}
displayProduct(products, "productwrapper");

function searchProduct() {
  let searchValue = document.getElementById('search').value;
  let searchedProducts = products.filter(function(product){
    let searchString= product.name+" "+product.color+" "+product.description;
    return searchString.toUpperCase().indexOf(searchValue.toUpperCase())!= -1;

  });
  displayProduct(searchedProducts, "productwrapper");


}

function updateCount(){
  document.getElementById("count").innerHTML = countval;
}
function addToCart(index) {
   // console.log("hello");

   let check = true;
   check = checkduplicate(index)
   if(check)
  { cart.push(products[index]);
   displayProduct(cart, "cart");
   countval++;
   updateCount();
 } 
 }

function removeFromCart(index) {

   cart.splice(index, 1);
   displayProduct(cart, "cart");
   countval--;
   updateCount();
 }
function checkduplicate(index){
  let flag = cart.filter(val => val.id == products[index].id);
  console.log(cart.id);
   if(flag != 0)
  {
    alert("Same Product Already in Cart !");
  return false;
} 
else{
  return true;
  }
}



function filterprod()
    {
       let min = document.getElementById("min").value;
 let max = document.getElementById("max").value;
      console.log(min);
     let res = products.filter((val) => val.price >= min && val.price <= max);
     displayProduct(res, "productwrapper");
    }


