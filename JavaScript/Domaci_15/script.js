/**
 * Mali milion nacina pozivanja API-a postoji. Najcesci su: Ajax, Axios, Fetch, postReq, XHR...
 *
 * FETCH
 *
 * CORS
 *  Cross Origin Resource Sharing
 *       => Izvor (Origin) - odakle pozivamo API
 */

let productsHolder = document.getElementById("products");
let searchProduct = document.getElementById("searchProduct");

searchProduct.addEventListener("click", function() {

    let searchText = document.getElementById("searchText");
    let searchLink = "https://dummyjson.com/products/search?q="+searchText.value;

    fetch(searchLink)
        .then(response => response.json())
        .then(function(data) {
            productsHolder.innerHTML = "";
            for(let product of data.products) {
                appendProductToHolder(product);
            }
        })
});




fetch("https://dummyjson.com/products?sortBy=price&order=desc")
    .then(response => response.json())
    .then(function(data) {
        for(let product of data.products) {
            appendProductToHolder(product);
        }
    })


function appendProductToHolder(product) {
    let singleProduct = document.createElement("div");

    let productTitle = document.createElement("h1");
    productTitle.innerText = product.title;

    let productCategory = document.createElement("p");
    productCategory.innerText = product.category;

    let productPrice = document.createElement("p");
    productPrice.innerText = product.price;

    singleProduct.append(productTitle, productCategory, productPrice);

    productsHolder.append(singleProduct);
}