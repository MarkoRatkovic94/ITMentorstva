/** Kreiraj promenljivu grade koja prima ocenu unetu od strane korisnika putem prompt funkcije, a zatim napiši if-else
strukturu koja koristi alert da ispise "Excellent" za ocene iznad 90, "Good" za ocene između 75 i 90, "Average" za ocene
 između 50 i 75, i "Fail" za ocene ispod 50.*/

let grade = prompt("Uneti ocenu");

if(grade > 90) {
    alert("Excellent");
} else if(grade <=90 && grade >75) {
    alert("Good");
} else if(grade <=75 && grade >= 50) {
    alert("Average");
} else {
    alert("Fail");
}


/** Kreiraj niz shoppingList koji sadrži nekoliko artikala unetih od strane korisnika putem prompt funkcije
(koristi split(',') da bi razdvojio stvari u nizu), a zatim napiši for petlju koja prolazi kroz niz i koristi switch
 strukturu da ispise specifične poruke za određene artikle (npr. "Buy fruits", "Buy vegetables") koristeći alert
 za prikaz poruka.*/

let input = prompt("Uneti artikle");
let shoppingList = input.split(",");

for(let i = 0; i < shoppingList.length; i++) {
    switch(shoppingList[i].toLowerCase()) {
        case "jabuka":
        case "jagoda":
        case "breskva":
        case "malina":
            alert("Buy fruits");
            break;
        case "paradajz":
        case "krastavac":
        case "luk":
        case "sargarepa":
            alert("Buy vegetables");
            break;
        default:
            alert("Buy " + shoppingList[i]);
    }
}

/** Kreiraj promenljivu weather koja prima stanje vremena (npr. "sunny", "rainy", "cloudy") uneto od strane korisnika
putem prompt funkcije, a zatim napiši switch strukturu koja koristi alert da ispise poruku kao što je "Wear sunglasses"
 za "sunny", "Take an umbrella" za "rainy", itd.*/

let weather = prompt("Unesi trenutno stanje vremena");

switch(weather) {
    case "sunny":
        alert("Wear sunglasses");
        break;
    case "rainy":
        alert("Take an umbrella");
        break;
    case "cloudy":
        alert("Wear jacket");
        break;
}

/** Kreiraj niz colors koji sadrži nekoliko boja unetih od strane korisnika putem prompt funkcije (koristi split(',')
da bi razdvojio boje), a zatim napiši for petlju koja prolazi kroz niz i koristi switch strukturu da ispise specifične
 poruke za određene boje (npr. "Red is vibrant", "Blue is calm").*/

let input = prompt("Upisi nekoliko boja");
let colors = input.split(",");

for(let i = 0; i < colors.length; i++) {
    switch(colors[i].toLowerCase()) {
        case "red":
            alert("Red is vibrant");
            break;
        case "blue":
            alert("Blue is calm");
            break;
        case "white":
            alert("White is happy");
            break;
    }
}

/** Kreiraj promenljivu userName koja prima ime uneto od strane korisnika putem prompt funkcije, a zatim napiši if-else
strukturu koja koristi alert da ispise "Hello, [userName]!" ako je ime kraće od 5 karaktera, a "Welcome, [userName]!"
 ako je ime duže ili jednako 5 karaktera.*/

let userName = prompt("Unesite svoj username");

if(userName.length < 5) {
    alert("Hello, " + userName);
} else if(userName => 5){
    alert("Welcome, " + userName);
}

