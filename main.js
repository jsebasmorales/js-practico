const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarrioIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarrioIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

// Toggle Menú Desktop
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!isAsideClosed || !isProductDetailClosed) {
        shoppingCartContainer.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

// Toggle Menú Mobile
function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}

// Toggle Carrito de Compras
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
    }

    //PRODUCT DETAIL
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!isProductDetailClosed || !isDesktopMenuClosed) {
        productDetailContainer.classList.add("inactive");
        desktopMenu.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

// Open Product Detail

function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive");

    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

// PRODUCTOS

const productList = [];

productList.push({
    name: "Chair",
    price: 90,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Socks",
    price: 80,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Laptop",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);

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
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
