const menuItems = document.querySelectorAll(".menuItem");
const products = [
  {
    id: "Laptop 1",
    title: "Laptop 1",
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: "yes",
    colors: [
      {
        code: "black",
        img: "12.png",
      },
      {
        code: "darkblue",
        img: "1.png",
      },
    ],
  },
  {
    id: "Laptop 13",
    title: "Laptop 13",
    price: 1244,
    rating: 4.5,
    discount: 45,
    availability: "out-of-stock",
    colors: [
      {
        code: "black",
        img: "12.png",
      },
      {
        code: "darkblue",
        img: "1.png",
      },
    ],
  },
  {
    id: "Laptop 3",
    title: "Laptop 3",
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: "out-off-stock",
    colors: [
      {
        code: "black",
        img: "12.png",
      },
      {
        code: "darkblue",
        img: "1.png",
      },
    ],
  },
  {
    id: "Laptop 11",
    title: "Laptop 11",
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: "yes",
    colors: [
      {
        code: "black",
        img: "12.png",
      },
      {
        code: "darkblue",
        img: "1.png",
      },
    ],
  },
  {
    id: "Laptop 4",
    title: "Laptop 4",
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: "yes",
    colors: [
      {
        code: "black",
        img: "12.png",
      },
      {
        code: "darkblue",
        img: "1.png",
      },
    ],
  },
  {
    id: "Laptop 13",
    title: "Laptop 13",
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: "out-off-stock",
    colors: [
      {
        code: "black",
        img: "12.png",
      },
      {
        code: "darkblue",
        img: "1.png",
      },
    ],
  },
  {
    id: "Laptop 14",
    title: "Laptop 14",
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: "yes",
    colors: [
      {
        code: "black",
        img: "12.png",
      },
      {
        code: "darkblue",
        img: "1.png",
      },
    ],
  },
  {
    id: "Laptop 10",
    title: "Laptop 10",
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: "yes",
    colors: [
      {
        code: "black",
        img: "12.png",
      },
      {
        code: "darkblue",
        img: "1.png",
      },
    ],
  },{
    id: "Laptop 10",
    title: "Laptop 10",
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: "out-off-stock",
    colors: [
      {
        code: "black",
        img: "12.png",
      },
      {
        code: "darkblue",
        img: "1.png",
      },
    ],
  },
 
];

function centerAlign() {
  
  const elementsToCenter = document.querySelectorAll('.center-align');
+
  elementsToCenter.forEach(element => {
      element.style.display = 'flex'; 
      element.style.justifyContent = 'center';
      element.style.alignItems = 'center';
      element.style.textAlign = 'center'; 
  });
}

document.addEventListener('DOMContentLoaded', centerAlign);


let chosenProduct = products[0]; 


const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductRating = document.querySelector(".productRating"); 
const currentProductAvailability = document.querySelector(".productAvailability"); 
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    chosenProduct = products[index];

   
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = `$${chosenProduct.price}`;
    currentProductImg.src = chosenProduct.colors[0].img; 

   
    currentProductRating.textContent = `Rating: ${chosenProduct.rating}`;
    currentProductDiscount.textContent = `Discount: ${chosenProduct.discount}%`;
    currentProductAvailability.textContent = `Availability: ${chosenProduct.availability}`;

   
    currentProductColors.forEach((color, idx) => {
      color.style.backgroundColor = chosenProduct.colors[idx].code;
    });
  });
});


currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img; 
  });
});


currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
