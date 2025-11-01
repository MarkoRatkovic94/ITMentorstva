
let cities = [
    "Svi",
    "Beograd",
    "Subotica",
    "Zagreb",
    "Sarajevo",
    "Novi Sad",
    "Zrenjanin",
    "Velika Plana",
    "Indjija",
    "Gornji Milanovac",
    "Sombor",
    "Kragujevac",
    "Nis",
    "Cacak",
    "Pancevo",
    "Kraljevo",
    "Leskovac",
    "Uzice",
    "Vranje",
    "Loznica",
    "Smederevo"
];

let types = [
    "Stanovi",
    "Kuce",
    "Poslovni prostor",
    "Placevi",
    "Garaze/parking"
];

let rooms = [
    "Jednosoban stan",
    "Jednoiposoban stan",
    "Dvosoban stan",
    "Dvoiposoban stan",
    "Trosoban stan",
    "Troiposoban stan",
    "Cetvorosoban stan"
];

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
        option: "Jednosoban stan",
        type: "Stanovi",
        price: 52000,
        size: 30
    }
];

let citiesSelector= document.querySelector("#citiesSelector");
let typesSelector= document.querySelector("#typesSelector");
let roomSelector= document.querySelector("#roomSelector");

for (let city of cities) {
    let cityOption = document.createElement("option");
    cityOption.innerHTML = city;


    citiesSelector.appendChild(cityOption);

    let cityFound = false;
    for(let estate of realEstates) {
        if(estate.city === city) {
            cityFound = true;
            break;
        }
    }

    if(!cityFound && city !== "Svi") {
        cityOption.setAttribute("disabled", "true");
    }

}


for (let type of types) {
    let typeOption = document.createElement("option");
    typeOption.innerHTML = type;

    typesSelector.appendChild(typeOption);

}


for (let room of rooms) {
    let roomOption = document.createElement("option");
    roomOption.innerHTML = room;

    roomSelector.appendChild(roomOption);

}

let currentCity = null;
let currentType = null;
let currentRoom = null;


citiesSelector.addEventListener("change", function(e) {
        currentCity = e.currentTarget.value;

        let allEstates = document.getElementsByClassName("realEstate");

        for (let realEstate of allEstates) {
            //console.log(realEstate.querySelector(".city"));


            let estateCity = realEstate.querySelector(".city").textContent;

            realEstate.classList.remove("hidden");

            if (estateCity !== currentCity && currentCity !== "Svi") {
                realEstate.classList.add("hidden");
            }
        }
});

typesSelector.addEventListener("change", function(e) {
        currentType = e.currentTarget.value;

});

roomSelector.addEventListener("change", function(e) {
        currentRoom = e.currentTarget.value;

});




for (let estate of realEstates) {

    let estateHolder = document.createElement("div");
    estateHolder.classList.add("realEstate");

    let estateTitle = document.createElement("p");
    estateTitle.innerText = estate.city;
    estateTitle.classList.add("city");

    let estateOption = document.createElement("p");
    if(estate.option == null) {
        estateOption.innerText = "-";
    } else {
        estateOption.innerText = estate.option;
    }

    let estatePrice = document.createElement("p");
    estatePrice = estate.price;

    let estateSize = document.createElement("p");
    estateSize = estate.size;

    estateHolder.append(estateTitle);
    estateHolder.append(estateOption);
    estateHolder.append(estatePrice);
    estateHolder.append(estateSize);


    document.querySelector("#estates").appendChild(estateHolder);
}