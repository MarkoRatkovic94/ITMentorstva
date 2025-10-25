
let ads = [
    {
        title: "Skoda octavia 2014",
        price: 9950,
        image: "https://cdn.skoda-storyboard.com/2017/03/Ko_SL_0002.jpg"
    },
    {
        title: "Audi A4",
        price: 8000,
        image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Audi_A4_B9_sedans_%28FL%29_1X7A2441.jpg"
    }
];

let productsElement = document.getElementById("products");

for(let ad in ads) {
    productsElement.innerHTML += ads[ad].title+ " "+ads[ad].price+" "+ads[ad].image
}



