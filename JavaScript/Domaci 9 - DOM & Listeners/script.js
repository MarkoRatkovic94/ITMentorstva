
let realEstates = [
    {
        city: "Beograd",
        option: "Jednoiposoban stan",
        type: "Stanovi",
        price: 48200,
        size: 25
    },
    {
        city: "Novi Sad",
        option: null,
        type: "Kuce",
        price: 12200,
        size: 85
    },
    {
        city: "Subotica",
        option: "Dvosoban stan",
        type: "Stanovi",
        price: 37500,
        size: 45
    },
    {
        city: "Sarajevo",
        option: "Trosoban stan",
        type: "Stanovi",
        price: 61000,
        size: 70
    },
    {
        city: "Zagreb",
        option: null,
        type: "Placevi",
        price: 42000,
        size: 300
    },
    {
        city: "Zrenjanin",
        option: "Dvoiposoban stan",
        type: "Stanovi",
        price: 78000,
        size: 55
    },
    {
        city: "Velika Plana",
        option: null,
        type: "Poslovni prostor",
        price: 99000,
        size: 120
    },
    {
        city: "Indjija",
        option: null,
        type: "Garaze/parking",
        price: 8500,
        size: 20
    },
    {
        city: "Gornji Milanovac",
        option: null,
        type: "Kuce",
        price: 135000,
        size: 160
    },
    {
        city: "Sombor",
        option: "Jednoiposoban stan",
        type: "Stanovi",
        price: 52000,
        size: 30
    }
];


for(let estate of realEstates) {

    let estateHolder = document.createElement("div");

    let estateTitle = document.createElement("h1");
    estateTitle.textContent = estate.type+" "+estate.city;

    let estateOption = document.createElement("p");
    if(estate.option == null) {
        estateOption.textContent = "--"
    } else {
        estateOption.textContent = estate.option
    }

    let estatePrice = document.createElement("p");
    estatePrice.textContent = estate.price;

    let estateSize = document.createElement("p");
    estateSize.textContent = estate.size;



    estateHolder.appendChild(estateTitle);
    estateHolder.appendChild(estateOption);
    estateHolder.appendChild(estatePrice);
    estateHolder.appendChild(estateSize);

    document.querySelector("#estates").appendChild(estateHolder);

}




