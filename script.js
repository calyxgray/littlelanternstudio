function changeImage(image, thumbnail) {
    document.getElementById("mainImage").src = image;

    let thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(function(item) {
        item.classList.remove("active-thumbnail");
    });

    thumbnail.classList.add("active-thumbnail");
}

function addToBasket(name, price, image) {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    let existingProduct = basket.find(function(product) {
        return product.name === name;
    });

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        basket.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem("basket", JSON.stringify(basket));

    updateBasketCount();
    showBasketToast(name, image);
}

function updateBasketCount() {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    let count = 0;

    basket.forEach(function(product) {
        count += product.quantity;
    });

    document.querySelectorAll(".basket-count").forEach(function(item) {
        item.innerText = count;
    });
}

function showBasketToast(name, image) {
    let toast = document.getElementById("basket-toast");

    if (!toast) {
        return;
    }

    document.getElementById("toast-title").innerText = name;
    document.getElementById("toast-image").src = image;

    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";

    setTimeout(function() {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
    }, 3000);
}

updateBasketCount();
const searchItems = [

{
    name:"Hiccup Bookmark",
    type: "Bookmark",
    subtitle:"Peeking Bookmark",
    image:"images/hiccup-bookmark-front.png",
    link:"hiccup.bookmark.html",
    keywords:"hiccup hedgehog bookmark autumn"
},

{
    name:"Callie Bookmark",
    type: "Bookmark",
    subtitle:"Peeking Bookmark",
    image:"images/callie-bookmark-front.png",
    link:"callie.bookmark.html",
    keywords:"callie cat bookmark"
},

{
    name:"Bookmarks",
    type: "Shop",
    subtitle:"Category",
    image:"images/hiccup-bookmark-front.png",
    link:"bookmarks.html",
    keywords:"bookmarks peeking"
},

{
    name:"Stickers",
    type: "Page",
    subtitle:"Category",
    image:"images/sticker-preview.png",
    link:"stickers.html",
    keywords:"stickers"
},

{
    name:"Colouring Books",
    type:"Page",
    subtitle:"Category",
    image:"images/colouring-preview.png",
    link:"colouring-books.html",
    keywords:"colouring books"
},

{
    name:"Meet the Characters",
    type:"Page",
    subtitle:"Characters",
    image:"images/hiccup.png",
    link:"characters.html",
    keywords:"characters hiccup callie whisper flynn"
},
{
    name:"Hiccup the Hedgehog",
    type:"Character",
    subtitle:"Little Autumn Adventures Character",
    image:"images/hiccup.png",
    link:"autumn-characters/hiccup.html",
    keywords:"hiccup hedgehog autumn little autumn adventures character"
},

{
    name:"Callie the Cat",
    type:"Character",
    subtitle:"Little Autumn Adventures Character",
    image:"images/callie.png",
    link:"autumn-characters/callie.html",
    keywords:"callie cat autumn little autumn adventures character"
},

{
    name:"Flynn the Fox",
    type:"Character",
    subtitle:"Little Autumn Adventures Character",
    image:"images/flynn.png",
    link:"autumn-characters/flynn.html",
    keywords:"flynn fox autumn little autumn adventures character"
},

{
    name:"Dimple the Deer",
    type:"Character",
    subtitle:"Little Autumn Adventures Character",
    image:"images/dimple.png",
    link:"autumn-characters/dimple.html",
    keywords:"dimple deer autumn little autumn adventures character"
},

{
    name:"Whisper the Wolf",
    type:"Character",
    subtitle:"Little Autumn Adventures Character",
    image:"images/whisper.png",
    link:"autumn-characters/whisper.html",
    keywords:"whisper wolf autumn little autumn adventures character"
},

{
    name:"Rascal the Raccoon",
    type:"Character",
    subtitle:"Little Autumn Adventures Character",
    image:"images/rascal.png",
    link:"autumn-characters/rascal.html",
    keywords:"rascal raccoon autumn little autumn adventures character"
},

{
    name:"Rue the Raven",
    type:"Character",
    subtitle:"Little Autumn Adventures Character",
    image:"images/rue.png",
    link:"autumn-characters/rue.html",
    keywords:"rue raven autumn little autumn adventures character"
},

{
    name:"Bubbles the Badger",
    type:"Character",
    subtitle:"Little Autumn Adventures Character",
    image:"images/bubbles.png",
    link:"autumn-characters/bubbles.html",
    keywords:"bubbles badger autumn little autumn adventures character"
},

{
    name:"Bibble the Bat",
    type:"Character",
    subtitle:"Little Autumn Adventures Character",
    image:"images/bibble.png",
    link:"autumn-characters/bibble.html",
    keywords:"bibble bat autumn little autumn adventures character"
},

{
    name:"Promise the Polar Bear",
    type:"Character",
    subtitle:"Little Winter Wonders Character",
    image:"images/promise.png",
    link:"winter-characters/promise.html",
    keywords:"promise polar bear winter little winter wonders character"
},

{
    name:"Pip the Penguin",
    type:"Character",
    subtitle:"Little Winter Wonders Character",
    image:"images/pip.png",
    link:"winter-characters/pip.html",
    keywords:"pip penguin winter little winter wonders character"
},

{
    name:"Barley the Bear",
    type:"Character",
    subtitle:"Little Winter Wonders Character",
    image:"images/barley.png",
    link:"winter-characters/barley.html",
    keywords:"barley bear winter little winter wonders character"
},

{
    name:"Remus the Reindeer",
    type:"Character",
    subtitle:"Little Winter Wonders Character",
    image:"images/remus.png",
    link:"winter-characters/remus.html",
    keywords:"remus reindeer winter little winter wonders character"
},

{
    name:"Sonny the Squirrel",
    type:"Character",
    subtitle:"Little Winter Wonders Character",
    image:"images/sonny.png",
    link:"winter-characters/sonny.html",
    keywords:"sonny squirrel winter little winter wonders character"
},

];

function siteSearch(){

    let box=document.getElementById("siteSearch");

    let results=document.getElementById("searchResults");

    if(!box || !results) return;

    let search=box.value.toLowerCase();

    results.innerHTML="";

    if(search===""){

        results.style.display="none";

        return;

    }

    let matches=searchItems.filter(function(item){

        return item.name.toLowerCase().includes(search) ||

               item.keywords.toLowerCase().includes(search);

    });

    matches.forEach(function(item){

        results.innerHTML+=`

<a class="search-result" href="${item.link}">

<img src="${item.image}">

<div>

<strong>${item.name}</strong><br>

<small>${item.type} • ${item.subtitle}</small>

</div>

</a>

`;

    });

    results.style.display=matches.length ? "block" : "none";

}
function addToWishlist(name, image, link) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let existingItem = wishlist.find(function(item) {
        return item.name === name;
    });

    if (!existingItem) {
        wishlist.push({
            name: name,
            image: image,
            link: link
        });
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert(name + " added to your wishlist!");
}
function toggleWishlist(name, image, link, button) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let existingIndex = wishlist.findIndex(function(item) {
        return item.name === name;
    });

    if (existingIndex === -1) {
        wishlist.push({
            name: name,
            image: image,
            link: link
        });

        button.innerText = "❤️ Saved";
    } else {
        wishlist.splice(existingIndex, 1);
        button.innerText = "♡ Add to Wishlist";
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
function updateWishlistButtons() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    document.querySelectorAll(".wishlist-button").forEach(function(button) {
        let productName = button.dataset.product;

        let isSaved = wishlist.some(function(item) {
            return item.name === productName;
        });

        if (isSaved) {
            button.innerText = "❤️ Saved";
        } else {
            button.innerText = "♡ Add to Wishlist";
        }
    });
}

updateWishlistButtons();
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const dropdown = document.querySelector(".dropdown");
  const dropdownButton = document.querySelector(".dropbtn");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const menuIsOpen = navLinks.classList.toggle("open");

      menuToggle.classList.toggle("active", menuIsOpen);
      menuToggle.setAttribute("aria-expanded", String(menuIsOpen));
      menuToggle.setAttribute(
        "aria-label",
        menuIsOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );
    });
  }

  if (dropdown && dropdownButton) {
    dropdownButton.addEventListener("click", function (event) {
      if (window.innerWidth <= 768) {
        event.preventDefault();
        dropdown.classList.toggle("mobile-open");
      }
    });
  }

  document.addEventListener("click", function (event) {
    if (
      window.innerWidth <= 768 &&
      navLinks &&
      menuToggle &&
      !event.target.closest(".main-nav")
    ) {
      navLinks.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      if (dropdown) {
        dropdown.classList.remove("mobile-open");
      }
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      if (navLinks) {
        navLinks.classList.remove("open");
      }

      if (menuToggle) {
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }

      if (dropdown) {
        dropdown.classList.remove("mobile-open");
      }
    }
  });
});