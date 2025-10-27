
let cars = [
    {
        name:"Volkswagen Golf 7",
        price: "10.650",
        year: 2013,
        image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2772/27722850/1e2c9d0bd1fb-800x600.jpg"
    },
    {
        name:"Nissan Qashqai",
        price: "31.420",
        year: 2025,
        image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2724/27249912/6a4571f347e4-800x600-dw.jpg"
    },
    {
        name:"Seat Leon",
        price: "5.900",
        year: 2011,
        image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2750/27507403/6d1854307c1b-800x600.jpg"
    },
    {
        name:"Seat Leon",
        price: "4.750",
        year: 2012,
        image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2750/27507403/d7d1ec255679-800x600.jpg"
    },
    {
        name:"Kia Sportage",
        price: "7.990",
        year: 2011,
        image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2656/26566436/0584b5769a6a-800x600.jpg"
    },
    {
        name:"BMW 535",
        price: "13.800",
        year: 2011,
        image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2730/27306856/8fdeb82f4cc4-800x600.jpg"
    },
    {
        name:"Opel Mokka X",
        price: "11.999",
        year: 2017,
        image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2731/27313548/dbdb2ad35d21-800x600.jpg"
    },
    {
        name:"Volkswagen Arteon",
        price: "20.990",
        year: 2019,
        image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2749/27499526/6e1556b6966c-800x600.jpg"
    }
];

for(let car of cars) {

    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = car.image;

    let paragraph = document.createElement("p");
    paragraph.textContent = car.name;

    let span = document.createElement("span");
    span.textContent = car.price;

    paragraph.appendChild(span);

    div.appendChild(image);
    div.appendChild(paragraph);


    if(car.year === 2025) {
        let yearSpan = document.createElement("span");
        yearSpan.textContent = "NOVO!";
        yearSpan.classList = "productionYear";

        div.appendChild(yearSpan);
    }

    document.querySelector("#main").appendChild(div);

}

